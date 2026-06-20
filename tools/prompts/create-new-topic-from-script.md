# Prompt: Neues Topic aus Skript erstellen

Du arbeitest im StudyOS-2.0 Repository.

## Aufgabe

Erstelle ein neues Topic für ein bestehendes Modul, basierend auf dem unten angehängten Skript-Inhalt oder den bereitgestellten Notizen.

## Input

- **Modul-ID:** [module-id]
- **Topic-ID:** [topic-id] (kebab-case)
- **Topic-Titel:** [Titel]
- **Quelle:** [z.B. "Skript Kapitel 3"]
- **Geschätzte Lernzeit (min):** [Zahl]
- **Skript-Inhalt / Notizen:**

```
[SKRIPT HIER EINFÜGEN]
```

## Schritte

1. Erstelle `src/modules/[semester-id]/[module-id]/topics/[NN]-[topic-id].jsx`.
2. Strukturiere den Inhalt in `sections` mit `id`, `title`, `content` (Markdown-ähnlicher Text).
3. Extrahiere 3–5 `keyTakeaways` (kurze, prägnante Aussagen).
4. Extrahiere 2–4 `examFocus`-Punkte (was genau prüfungsrelevant ist).
5. Extrahiere 2–3 `pitfalls` (häufige Fehler/Verwechslungen).
6. Importiere das Topic in `src/modules/[semester-id]/[module-id]/topics/index.js` und füge es dem `topics`-Array hinzu.
7. Füge das Topic in `src/modules/[semester-id]/[module-id]/module.js` unter `topics` ein oder aktualisiere den vorhandenen Platzhalter:
   - `hasContent: true`
   - `status: 'not-started'`, `in-progress` oder `done` nur wenn fachlich passend
8. Erstelle optional 1–2 passende Quizfragen in `questions.js`.
9. Führe `npm run build` aus.

## Platzhalter statt Inhaltsdatei

Wenn noch kein Skript/Inhalt vorhanden ist, erstelle keine Topic-Datei. Trage nur Metadaten in `module.js` ein:

```js
{
  id: 'topic-id',
  title: 'Topic Titel',
  status: 'planned',
  hasContent: false,
  source: 'Skript Kapitel X',
  estimatedMinutes: 45,
}
```

`moduleRegistry.js` wird bei neuen Topics nicht geändert.

## Formatierungsregeln für `content`

`content` kann entweder ein HTML-String oder ein JSX-Element sein:

**HTML-String (Standardformat, für einfache Sections):**
- Absätze als `<p>`-Tags
- Tabellen als `<table>` (werden automatisch in `.table-wrap` eingebettet)
- Merksätze als `<p><strong>Merksatz:</strong> ...</p>` (wird zu `.callout`)
- Quellenhinweise als `<p><em>Quelle: ...</em></p>` (wird zu `.source-note`)
- Kein vollständiges HTML-Dokument (`<!doctype>`, `<html>`, `<head>`, `<body>`)

**JSX-Element (bevorzugt für Sections mit Visualisierungen):**
Wenn eine Section Diagramme, Formeln oder Recharts enthält, `.jsx`-Datei verwenden und `content` als JSX übergeben:

```jsx
// oben in der Datei:
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

// content als JSX:
content: (
  <div className="visual-topic-sheet">
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={[...]}> ... </BarChart>
    </ResponsiveContainer>
    <BlockMath math="p(A|B) \neq p(B|A)" />
  </div>
)
```

**Visual-Stack-Erwartung:** Sections mit Prozessen, Vergleichen, Formeln oder Statistiken müssen Recharts, Mermaid oder KaTeX nutzen. Reiner Prosatext ohne visuelle Komponente ist für diese Inhaltstypen nicht akzeptabel.

**Interaktivität (Ausnahme, nicht Regel):** Lerninhalt ist standardmäßig statisch. React-`useState` nur für eine einzelne Parameter-Steuerung, wenn eine *veränderliche Größe* den Lerneffekt trägt (ein Slider, der eine Formel/Grafik live neu berechnet) — höchstens ein solches Element pro Section, nicht bei definitorischem oder fest vergleichendem Inhalt. **Keine** Quizze, Selbsttests, Übungen oder Frage-Antwort-/Reveal-/Aufdeck-Karten im Lerninhalt — Wissensabfrage gehört ausschließlich in `questions.js` (Quiz) und `exams.js` (Prüfung). Alle primären Inhalte sind beim ersten Rendern sichtbar — nie hinter einem Klick.
