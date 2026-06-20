# Prompt: StudyOS Repo Review

Du reviewst das StudyOS-2.0 Repository (Vite + React, keine Backend).

## Aufgabe

Prüfe das Repo auf die folgenden Punkte und gib einen strukturierten Bericht zurück.

## Checkliste

### Struktur & Erweiterbarkeit
- [ ] Hat jedes Modul `module.js`, `questions.js`, `topics/index.js` und `index.js`?
- [ ] Exportiert jedes Modul `export const bundle = { module, topics, questions };`?
- [ ] Importiert `moduleRegistry.js` ausschließlich Modul-Bundles?
- [ ] Gibt es Hardcodes von Modul-IDs in Pages oder Layouts?
- [ ] Sind alle echten Topic-Dateien in `topics/index.js` importiert?
- [ ] Gibt es verwaiste Dateien ohne Import?
- [ ] Entspricht die Ordnerstruktur der Vorgabe?
- [ ] Haben alle Topics in `module.js` ein korrektes `hasContent`?
- [ ] Haben Topics mit `hasContent: false` keinen Status `done`?
- [ ] Stimmen `topic.id` aus Topic-Dateien und `module.js` exakt überein?
- [ ] Referenzieren alle Quizfragen existierende Topic-IDs?

### Design & CSS
- [ ] Werden Design-Tokens aus `tokens.css` konsequent genutzt (keine Magic Numbers)?
- [ ] Gibt es Inline-Styles, die besser als CSS-Klassen realisiert werden sollten?
- [ ] Sind alle Hover States und Focus States vorhanden?
- [ ] Sind Cards und Abstände konsistent?
- [ ] Ist die Sidebar auf verschiedenen Bildschirmbreiten nutzbar?

### Funktionale Korrektheit
- [ ] Funktioniert `npm run build` fehlerfrei?
- [ ] Crasht die App bei leerem localStorage?
- [ ] Funktioniert die Navigation zwischen allen Routen?
- [ ] Wird der Quiz-Fortschritt korrekt gespeichert?
- [ ] Zeigt das Dashboard echte Daten aus `storage.js`?

### Code-Qualität
- [ ] Keine toten Importe?
- [ ] Keine ungenutzten Variablen?
- [ ] Sind Komponenten klein und fokussiert?
- [ ] Gibt es unnötige Abhängigkeiten in `package.json`?

## Ausgabe

Gib einen Bericht mit:
1. Gefundenen Problemen (mit Dateipfad und Zeilennummer wenn möglich)
2. Kurzfristigen Fixes (sofort umsetzbar)
3. Optionalen Verbesserungen (mittelfristig)
