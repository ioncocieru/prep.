# Pași de publicare (Supabase + Vercel)

## 1. Supabase
1. Creează proiect pe supabase.com.
2. **SQL Editor** → lipește și rulează `schema.sql` (creează tabelul `user_exams` cu securitate RLS).
3. **Authentication → Providers → Email**: lasă Email activ; dezactivează "Allow new users to sign up" (**Authentication → Sign In / Providers**) ca nimeni să nu-și facă cont singur.
4. **Authentication → Users → Add user → Create new user**: email `ion@prep.md` + parolă, bifează **Auto Confirm User**.
   (Utilizatorul poate scrie la login doar `ion`; aplicația adaugă singură `@prep.md`.)
5. Dai acces la examene: în SQL Editor rulează exemplele din `schema.sql`, cu emailul lui.
6. **Project Settings → API**: copiază `Project URL` și cheia `anon public` în `config.js`.

## 2. Vercel
Structura folderului (păstrează-ți `data/` și `assets/`):
```
index.html  app.js  style.css  config.js
data/   (python.js, databases.js, device-config.js, networking.js)
assets/ (logo.png)
```
Încarcă folderul pe GitHub → Vercel → **Add New Project** → Deploy (fără build, e site static).
