# StudyOS 2.0

Meine persönliche Lernplattform für die letzten zwei Prüfungssemester. Datengetrieben, modular aufgebaut und offline-first – ohne Backend, ohne Account, ohne Cloud.

## Lokaler Start

```bash
npm install
npm run dev
```

App läuft auf `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # lokale Vorschau des Builds
```

## Deployment (Vercel)

1. Repo auf GitHub pushen
2. Vercel → "New Project" → Repo importieren
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. `vercel.json` ist bereits vorhanden für SPA-Routing

## Ordnerstruktur

```
src/
  main.jsx              # App-Einstiegspunkt
  App.jsx               # RouterProvider
  app/
    routes.jsx          # React Router Konfiguration
    config.js           # Konstanten (Routen, Status)
    storage.js          # localStorage-Kapselung
  styles/
    tokens.css          # Designsystem-Variablen
    globals.css         # Reset, Body, Basis-Styles
    utilities.css       # Utility-Klassen
  layouts/
    AppLayout.jsx       # Haupt-Layout (Sidebar + Content)
    LearningLayout.jsx  # Lernbereich-Layout
  components/
    cards/              # ModuleCard, TopicCard, StatCard
    navigation/         # Sidebar, Topbar, Breadcrumbs
    learning/           # ContentSection, FullContentView, ExamFocusBox
    quiz/               # QuizRunner, QuestionCard, QuizResult
    ui/                 # Button, Badge, Panel, ProgressBar, SearchCommand
  pages/                # Home, Semester, Module, Topic, Quiz, Settings
  data/
    semesters.js        # Semester-Definitionen
    moduleRegistry.js   # Importiert Modul-Bundles, exportiert Registry-Funktionen
  modules/              # Alle Lernmodule (je Modul: module.js, questions.js, topics/, index.js)
    semester-4/
      asset-management/
      behavioral-finance/
      human-resources/
      business-english/
    semester-5/

tools/
  prompts/              # Claude-Prompts für Erweiterungen
  templates/            # Module- und Topic-Templates
```

## Modulstruktur

Jedes Modul folgt dieser festen Struktur:

```
src/modules/[semester-id]/[module-id]/
  module.js          # Metadaten: id, title, topics[], examDate, ...
  questions.js       # Quiz-Fragen für dieses Modul
  topics/
    index.js         # Exportiert topics-Array aller vorhandenen Inhaltsdateien
    01-[topic].jsx   # Erste Inhaltsdatei
    02-[topic].jsx   # Weitere Inhaltsdateien (wenn bereit)
  index.js           # Bundle: export const bundle = { module, topics, questions }
```

`src/data/moduleRegistry.js` importiert nur noch die Bundle-`index.js`-Dateien der vorhandenen Module.

## Neues Modul hinzufügen

1. Ordner anlegen: `src/modules/[semester-id]/[module-id]/`
2. Folgende Dateien erstellen (Template: `tools/templates/module-template/`):
   - `module.js` — Metadaten inkl. `topics: []` mit `hasContent: false` für alle Stubs
   - `questions.js` — `export const questions = []` (leer oder erste Fragen)
   - `topics/index.js` — `export const topics = []` (leer bis Inhalt bereit ist)
   - `index.js` — `export const bundle = { module, topics, questions }`
3. In `src/data/moduleRegistry.js` den Bundle-Import eintragen und in `bundles[]` aufnehmen
4. In `src/data/semesters.js` die Module-ID in `moduleIds` des richtigen Semesters ergänzen
5. `npm run build` — fertig

Prompt-Hilfe: `tools/prompts/create-new-module.md`

## Neues Topic hinzufügen

### Topic mit echtem Inhalt

1. Neue Datei `[nr]-[topic-id].jsx` in `src/modules/[semester-id]/[module-id]/topics/` anlegen
2. Folgendes exportieren:
   ```js
   export const topic = {
     id: 'topic-id',       // muss mit dem id in module.js übereinstimmen
     title: 'Titel',
     source: 'Skript Kapitel X',
     estimatedMinutes: 45,
     sections: [{ id, title, content }],
     keyTakeaways: [],
     examFocus: [],
     pitfalls: [],
   };
   ```
3. Import in `topics/index.js` des Moduls eintragen und dem `topics`-Array hinzufügen
4. In `module.js` beim passenden Topic-Stub `hasContent: true` setzen

Prompt-Hilfe: `tools/prompts/create-new-topic-from-script.md`

### Topic als Platzhalter (geplant, kein Inhalt)

Nur in `module.js` unter `topics: []` eintragen — **keine** Inhaltsdatei nötig:

```js
{
  id: 'neues-topic',
  title: 'Neues Topic',
  status: 'not-started',   // oder 'planned'
  hasContent: false,
  source: 'Skript Kapitel X',
  estimatedMinutes: 45,
}
```

Die UI zeigt automatisch einen Platzhalter-Hinweis statt eines Fehlers.

### Unterschied: geplantes Topic vs. echte Inhaltsdatei

| | Geplantes Topic (`hasContent: false`) | Echte Inhaltsdatei |
|---|---|---|
| Wo gepflegt | `module.js` → `topics[]` | `topics/[nr]-[id].jsx` + `topics/index.js` |
| Sichtbar in Modulliste | Ja | Ja |
| Topic-Seite | Zeigt Platzhalter | Zeigt vollen Inhalt |
| `getTopicById` gibt zurück | `null` | topic-Objekt |

## Quizfragen hinzufügen

Fragen in der `questions.js` des Moduls ergänzen:

```js
{
  id: 'unique-id',
  topicId: 'topic-id',
  type: 'single', // oder 'multiple'
  question: 'Frage?',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 1,        // für single
  // correctAnswers: [0, 2], // für multiple
  explanation: 'Erklärung.',
}
```

## Designsystem

Alle Variablen in `src/styles/tokens.css`:

| Gruppe | Beispiele |
|---|---|
| Hintergründe | `--color-bg-base`, `--color-bg-card` |
| Texte | `--color-text-primary`, `--color-text-muted` |
| Akzente | `--color-accent`, `--color-success`, `--color-warning` |
| Spacing | `--space-1` bis `--space-20` |
| Radius | `--radius-sm` bis `--radius-full` |
| Layout | `--sidebar-width`, `--content-max-width` |

Keine Magic Numbers in CSS — immer Tokens verwenden.

## Features mit echter Logik

- Navigation (React Router, alle Routen funktionieren)
- Modul- und Topic-Ansicht (datengetrieben aus `modules/`)
- Topic als erledigt markieren (localStorage)
- Quiz: Fragen beantworten, Ergebnis anzeigen, Score speichern
- Suchleiste: filtert Module live
- Dashboard-Statistiken: Progress aus localStorage berechnet

## Features als UI-Platzhalter (noch nicht fertig)

- Kalender (statisch, keine echte Kalenderlogik)
- Tagesplan / Planer (statisch)
- Nächste Prüfung (statisch)
- Theme-Switcher in Einstellungen (UI ohne Funktion)
- Quellen/Skripte-Upload (UI-Platzhalter)
- Notifications (Icon ohne Logik)
- User-Account (nicht vorhanden – keine Auth)

## Vercel-Ready?

Ja. `vercel.json` ist vorhanden, `npm run build` läuft fehlerfrei.
