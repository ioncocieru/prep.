# Instalare și actualizare — Supabase + site static

## 1. Publicarea fișierelor

1. Fă o copie de siguranță a site-ului și a bazei de date.
2. Publică **conținutul** folderului `prep-test` în rădăcina site-ului, păstrând căile `data/` și `assets/`.
3. Băncile sunt `data/python.js`, `data/databases.js`, `data/networking.js`, `data/device-config.js` și **`data/html5.js`**. Nu se încarcă `python-fix.js`.
4. Păstrează configurația proiectului tău în `config.js`. Folosește numai cheia publică/publishable în browser, niciodată `service_role`.
5. În Supabase Authentication, configurează Site URL și Redirect URLs pentru domeniul publicat. Nu schimba politica de înregistrare a conturilor dacă nu dorești acest lucru.
6. Reîncarcă forțat pagina după publicare. Testează autentificarea, accesul la fiecare examen și reluarea unui test.

## 2. SQL de copiat în Supabase

Deschide **SQL Editor → New query**, copiază și rulează întregul bloc de mai jos ca administrator. Nu este executat de site și nu a fost rulat pe proiectul tău în timpul pregătirii arhivei.

- Întrebările și imaginile sunt statice; **nu trebuie importate în SQL**.
- `user_exams` acordă accesul pe examene; utilizatorii nu își pot acorda singuri acces.
- `user_progress` stochează progresul, sesiunile Choose One și profilul (`_profile`). Nu sunt necesare coloane pentru fiecare întrebare.
- Scriptul păstrează rândurile, însă **înlocuiește politicile RLS ale acestor două tabele** cu acces propriu per utilizator. Dacă ai politici personalizate pentru administratori în aplicație, revizuiește-le înainte de rulare. Rolurile administrative server-side nu trebuie expuse în browser.
- Dacă tabelele existente au altă structură decât cea folosită de site, sau perechi duplicate `(user_id, exam_key)`, scriptul se poate opri fără a șterge date. Verifică schema/duplicatele înainte de a continua.
- Contul `ion.cocieru700@gmail.com` trebuie să existe deja în **Authentication → Users**. Secțiunea finală acordă doar acestui cont acces la toate cele cinci examene. Pentru alte conturi înlocuiește emailul. Dacă acel email nu există, nu se creează automat niciun utilizator.
- Cheile sunt exacte: `python`, `databases`, **`deviceConfig`**, `networking`, **`html5`**.

```sql
-- Run as the project administrator in Supabase SQL Editor.
-- Back up first. No question data is stored in these tables.
-- This replaces RLS policies ONLY on user_exams and user_progress.
begin;

create table if not exists public.user_exams (
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_key text not null,
  primary key (user_id, exam_key)
);
create table if not exists public.user_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_key text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, exam_key)
);

-- Required by upsert(..., { onConflict: 'user_id,exam_key' }).
-- Existing duplicate pairs must be investigated, not silently deleted.
create unique index if not exists prep_user_exams_uid_exam_idx
  on public.user_exams (user_id, exam_key);
create unique index if not exists prep_user_progress_uid_exam_idx
  on public.user_progress (user_id, exam_key);

-- Preserve older CHECK rules, widening only to the new html5 key and
-- the application's existing _profile progress key, when not already allowed.
do $$
declare c record; old_expression text; extra_expression text;
begin
  for c in
    select conname, conrelid, conbin
    from pg_constraint
    where contype = 'c'
      and conrelid in ('public.user_exams'::regclass, 'public.user_progress'::regclass)
  loop
    old_expression := pg_get_expr(c.conbin, c.conrelid);
    if old_expression ~ '\mexam_key\M' then
      extra_expression := case when c.conrelid = 'public.user_progress'::regclass
        then 'exam_key in (''html5'', ''_profile'')'
        else 'exam_key = ''html5''' end;
      if position('html5' in old_expression) = 0
         or (c.conrelid = 'public.user_progress'::regclass and position('_profile' in old_expression) = 0) then
        execute format('alter table %s drop constraint %I', c.conrelid::regclass, c.conname);
        execute format('alter table %s add constraint %I check ((%s) or (%s))',
          c.conrelid::regclass, c.conname, old_expression, extra_expression);
      end if;
    end if;
  end loop;
end $$;

alter table public.user_exams enable row level security;
alter table public.user_progress enable row level security;

-- Policies combine with OR. Remove legacy policies on these two tables
-- so a permissive older policy cannot accidentally expose another user's rows.
do $$
declare p record;
begin
  for p in select schemaname, tablename, policyname from pg_policies
    where schemaname = 'public' and tablename in ('user_exams', 'user_progress')
  loop
    execute format('drop policy %I on %I.%I', p.policyname, p.schemaname, p.tablename);
  end loop;
end $$;

revoke all on public.user_exams from public, anon, authenticated;
revoke all on public.user_progress from public, anon, authenticated;
grant usage on schema public to authenticated;
grant select on public.user_exams to authenticated;
grant select, insert, update, delete on public.user_progress to authenticated;

create policy prep_exam_access_self
  on public.user_exams for select to authenticated
  using (user_id = (select auth.uid()));

create policy prep_progress_read_self
  on public.user_progress for select to authenticated
  using (user_id = (select auth.uid()));
create policy prep_progress_insert_self
  on public.user_progress for insert to authenticated
  with check (
    user_id = (select auth.uid())
    and (exam_key = '_profile' or exists (
      select 1 from public.user_exams e
      where e.user_id = (select auth.uid()) and e.exam_key = user_progress.exam_key
    ))
  );
create policy prep_progress_update_self
  on public.user_progress for update to authenticated
  using (user_id = (select auth.uid()))
  with check (
    user_id = (select auth.uid())
    and (exam_key = '_profile' or exists (
      select 1 from public.user_exams e
      where e.user_id = (select auth.uid()) and e.exam_key = user_progress.exam_key
    ))
  );
create policy prep_progress_delete_self
  on public.user_progress for delete to authenticated
  using (user_id = (select auth.uid()));

commit;

-- Access to ALL FIVE exams for ONE account. The account must already exist
-- in Authentication > Users. Replace the email when granting another person.
insert into public.user_exams (user_id, exam_key)
select u.id, e.exam_key
from auth.users u
cross join (values ('python'), ('databases'), ('deviceConfig'), ('networking'), ('html5')) as e(exam_key)
where lower(u.email) = lower('ion.cocieru700@gmail.com')
on conflict (user_id, exam_key) do nothing;

-- Verification: 5 rows should appear for the account above.
select u.email, e.exam_key
from public.user_exams e join auth.users u on u.id = e.user_id
where lower(u.email) = lower('ion.cocieru700@gmail.com')
order by e.exam_key;
```

## 3. Verificare după instalare

- Rezultatul interogării finale trebuie să arate cinci examene pentru contul ales.
- Autentifică-te, deschide HTML5 și o întrebare Choose One, selectează variantele și reîncarcă pagina. Folosește Reia testul pentru a verifica păstrarea selecțiilor.
- După câteva secunde, verifică în Table Editor că `user_progress` conține rândul contului și cheia examenului.
- Pentru testarea izolării, folosește un al doilea cont: nu trebuie să poată citi progresul primului sau insera acces propriu în `user_exams`.
- Site-ul este static și nu necesită build. Poate fi publicat pe găzduirea existentă sau pe Vercel.
