# Prompt: Neues Modul erstellen

Du arbeitest im StudyOS-2.0 Repository (Vite + React, keine Backend).

## Aufgabe

Füge ein neues Modul in die App ein. Alle Informationen stehen unten.

## Modul-Daten

- **Name:** [MODULNAME]
- **ID:** [module-id] (kebab-case, z.B. `human-resources`)
- **Semester:** [semester-4 | semester-5]
- **Titel:** [Langer Titel]
- **Kurztitel:** [Abkürzung]
- **Beschreibung:** [1–2 Sätze]
- **Status:** [planned | in-progress | done]
- **Prüfungsdatum:** [YYYY-MM-DD]
- **Akzentfarbe:** [z.B. `var(--color-module-blue)`]
- **Topics:** [Liste der Topics mit Titel, Quelle, geschätzten Minuten]

## Schritte

1. Lege den Ordner `src/modules/[semester-id]/[module-id]/` an.
2. Erstelle `module.js` nach dem Template in `tools/templates/module-template/module.js`.
3. Erstelle `questions.js` mit mindestens 3 Fragen (Single- und Multiple-Choice).
4. Erstelle `topics/index.js`. Importiere dort alle echten Topic-Dateien und exportiere `topics`.
5. Erstelle `topics/01-[topic-id].jsx` für den ersten echten Topic.
6. Erstelle `index.js` im Modulordner:
   - `import { module } from './module.js';`
   - `import { questions } from './questions.js';`
   - `import { topics } from './topics/index.js';`
   - `export const bundle = { module, topics, questions };`
7. Importiere in `src/data/moduleRegistry.js` nur das Bundle:
   - `import { bundle as [moduleName]Bundle } from '../modules/[semester-id]/[module-id]/index.js';`
   - Füge das Bundle in `moduleBundles` ein.
8. Füge die Module-ID in `src/data/semesters.js` unter dem richtigen Semester in `moduleIds` hinzu.
9. Führe `npm run build` aus und behebe Fehler.

## Wichtig

- IDs müssen eindeutig sein (keine Duplikate).
- Keine Hardcodes in Pages – alles über Registry.
- `moduleRegistry.js` importiert keine einzelnen Topic-Dateien und keine `questions.js`.
- In `module.js`: echte Topic-Datei vorhanden => `hasContent: true`; Platzhalter ohne Datei => `hasContent: false`.
- Topics mit `hasContent: false` dürfen nie `status: 'done'` haben. Nutze `planned` für geplante Skripte ohne Inhalt.
- Kein Backend, kein Auth, kein PDF-Upload.
