# Schema Choose One

Un dropdown folosește aceeași structură ca drag-and-drop:

```javascript
{
  id: "example-id",
  chapter: "un-capitol-existent",
  type: "dropdown",
  question: "Complete the statements.",
  dragItems: [
    { id: "a", text: "tracert" },
    { id: "b", text: "pathping" },
    { id: "c", text: "ping" }
  ],
  dropZones: [
    { id: "z1", label: "Tool that lists route hops", correctItemId: "a" },
    { id: "z2", label: "Tool that combines route and loss statistics", correctItemId: "b" }
  ],
  explanation: "tracert lists hops; pathping also measures packet loss."
}
```

Opțional, o zonă poate avea `optionIds: ["a", "b"]` pentru a limita opțiunile acelui câmp. Lista trebuie să includă `correctItemId`.

- Valoarea goală afișează Choose One și nu reprezintă un răspuns.
- Salvare: `state.dndState[question.id][zone.id] = item.id`.
- Același item poate fi ales în mai multe câmpuri; nu există consumarea opțiunii ca la un puzzle de ordonare.
- Evaluare: toate câmpurile trebuie să corespundă cheilor pentru un răspuns corect.
- Se păstrează punctajul existent pe întrebare; nu s-a introdus punctaj parțial oficial Certiport.
- Pentru conversia unui item vechi drag_drop în dropdown, păstrează ID-ul întrebării, ID-urile itemilor și ale zonelor.
