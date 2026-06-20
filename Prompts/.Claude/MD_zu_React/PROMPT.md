# MD zu React - Claude Code Orchestrator-Prompt

> Vor dem Einfuegen alle Platzhalter ersetzen:
>
> - `[MD-DATEINAME]` -> z. B. `BF6 - Prospect Theory.md`
> - `[OPTIONALE-PDF-DATEINAME]` -> z. B. `BF6 - Prospect Theory.pdf` oder `KEINE`
> - `[DATEINAME]` -> z. B. `06-prospect-theory` ohne `.jsx`
> - `[TOPIC-ID]` -> z. B. `prospect-theory`
> - `[MODUL-ID]` -> z. B. `behavioral-finance`
> - `[SEMESTER-ID]` -> z. B. `semester-4`
>
> Dieser Prompt ist fuer ein einzelnes, vollstaendig integriertes StudyOS-Topic
> aus einer Markdown-Quelle vorgesehen. Er nutzt die tatsaechlich vorhandenen
> Claude-Code-Agenten unter `.claude/agents/`.

---

## Ziel

Konvertiere

```text
sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]
```

in das vollstaendig integrierte React-Topic

```text
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx
```

Das Ergebnis muss fachlich quellentreu, pruefungsorientiert, visuell hochwertig,
im lokalen Topic-Schema integriert sowie auf Desktop und Mobile plausibel sein.

Nutze ausschliesslich die angegebene Markdown-Datei als primaere fachliche
Quelle. Repo-Dateien duerfen nur fuer Architektur, Schema, Gestaltungsmuster und
Integration genutzt werden.

Eine optionale PDF-Datei darf nur punktuell per Screenshot genutzt werden, wenn
eine konkrete Stelle im Markdown unklar ist. Die PDF darf niemals ganz gelesen,
extrahiert oder seitenweise durchgesehen werden.

**Wenn eine `*_MD+PDF.md`-Datei fuer das Ziel-Topic existiert** (unter
`sources/**/*_MD+PDF.md`), lies sie zuerst. Sie beschreibt foliengenaue
visuelle Rekonstruktionen, die in der Markdown-Extraktion verloren gegangen sind.
Setze jede dort beschriebene visuelle Rekonstruktion mit Recharts, Mermaid,
KaTeX oder inline React um — nicht als Prosaersatz.

---

## Verbindliche Orchestrator-Regeln

Du bist der Hauptagent und traegst die Verantwortung fuer das Endergebnis.
Agent-Ausgaben sind Arbeitsbeitraege, keine ungeprueften Endergebnisse.

1. Lies zuerst `CLAUDE.md`, `AGENTS.md`, die relevanten Repo-Dateien und alle
   unten genannten Agent-Definitionen.
2. Erstelle vor der Umsetzung einen kurzen Plan mit Ziel, betroffenen Dateien,
   Agenten, Umsetzungsschritten, QA und Risiken.
3. Nutze fuer jede spezialisierte Phase den passenden Agenten ueber das
   Claude-Code-Agent-Tool. Jeder Auftrag muss Pfade, Quellenbasis, Scope,
   Schreibrechte und erwartetes Outputformat vollstaendig enthalten.
4. Fuehre schreibende Phasen sequenziell aus. Warte auf den Abschluss, pruefe
   das Ergebnis und stelle sicher, dass es im aktuellen Workspace vorliegt,
   bevor die naechste Phase startet.
5. Erlaube nie zwei Agenten gleichzeitig Schreibzugriff auf dieselbe Datei.
6. Audit- und Beratungsagenten arbeiten read-only. Nur der Hauptagent integriert
   ihre Befunde und Vorschlaege.
7. Pruefe jeden Agent-Beitrag gegen Markdown-Quelle, Scope und Repo-Konventionen.
   Uebernimm keine unbelegten oder widerspruechlichen Aenderungen.
8. Wenn das Agent-Tool nicht verfuegbar ist, fuehre dieselben Rollen lokal anhand
   ihrer Agent-Dateien aus und dokumentiere dies.
9. Stoppe nicht nach Analyse oder Rohentwurf. Fuehre Integration, Re-Audit und
   QA vollstaendig durch.

---

## Relevante Agent-Dateien

Lies vor dem Start:

```text
.claude/agents/studyos-md-topic-builder.md
.claude/agents/content-fidelity-auditor.md
.claude/agents/exam-content-builder.md
.claude/agents/topic-quality-upgrader.md
.claude/agents/architecture-agent.md
.claude/agents/ui-ux-agent.md
.claude/agents/technical-bug-agent.md
```

Prioritaet bei Widerspruechen:

```text
CLAUDE.md und AGENTS.md
-> dieser Orchestrator-Prompt
-> auftragsspezifischer Agent-Scope
-> jeweilige Agent-Definition
```

Insbesondere duerfen Agent-Definitionen keine Dateien ausserhalb des unten
festgelegten Scopes freigeben.

---

## Phase 0 - Preflight und Integrationsplan

Fuehre diese Phase als Hauptagent lokal aus. Sie darf nicht delegiert werden,
weil alle nachfolgenden Auftraege davon abhaengen.

1. Verifiziere, dass Markdown-Datei, Modulordner und Zielordner existieren.
2. Falls `[OPTIONALE-PDF-DATEINAME]` nicht `KEINE` ist, verifiziere nur die
   Existenz der PDF. Lies oder extrahiere sie nicht.
3. Lies mindestens:
   - `src/modules/[SEMESTER-ID]/[MODUL-ID]/module.js`
   - `src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/index.js`
   - `src/modules/[SEMESTER-ID]/[MODUL-ID]/index.js`
   - zwei hochwertige vorhandene Topics desselben Moduls, falls vorhanden
   - relevante lokale Topic-CSS-Dateien und Content-Styles
4. Waehle Referenz-Topics dynamisch nach fachlicher bzw. visueller Naehe.
5. Bestimme und dokumentiere:
   - erwartete Topic-ID, Dateinamen- und Exportkonvention
   - ob `[TOPIC-ID]` bereits in `module.js` registriert ist
   - ob ein Import in `topics/index.js` fehlt
   - welche Integrationsdateien zwingend geaendert werden muessen
   - vorhandene CSS-/HTML-Bausteine
   - Markdown-Heading-Struktur, Tabellen, Formeln, Abbildungsreferenzen und Quellenhinweise
   - konkrete unklare Markdown-Stellen
   - ob fuer eine unklare Stelle ein gezielter PDF-Screenshot noetig und konkret bestimmbar ist
6. Pruefe den Git-Status. Fremde oder unzusammenhaengende Aenderungen duerfen
   nicht veraendert oder zurueckgesetzt werden.

Wenn Inhalte in Markdown nicht verlaesslich interpretierbar sind, erfinde keinen
Ersatz. Nutze nur dann einen PDF-Screenshot, wenn die konkrete PDF-Stelle
bekannt ist. Wenn nicht, dokumentiere die Quellenunsicherheit oder frage nach.

### Erlaubter Schreib-Scope

Standardmaessig duerfen nur diese Dateien erstellt oder geaendert werden:

```text
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/index.js
src/modules/[SEMESTER-ID]/[MODUL-ID]/module.js
```

`topics/index.js` und `module.js` duerfen nur fuer die minimale, notwendige
Integration des neuen Topics geaendert werden. Bereits vorhandene korrekte
Eintraege bleiben unveraendert.

Nicht erlaubt ohne ausdrueckliche Nutzerfreigabe:

```text
questions.js
exams.js
moduleRegistry.js
semesters.js
Routing und App-Shell
globale Styles und Shared Components
neue Dependencies
andere Module oder Topics
```

---

## Phase 1 - Rohaufbau durch MD-Builder

Starte genau einen schreibenden Agenten:

```text
Agent: studyos-md-topic-builder
Definition: .claude/agents/studyos-md-topic-builder.md
Schreibrecht: ausschliesslich
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx
```

### Auftrag an den Agenten

```text
Arbeite als studyos-md-topic-builder.

Lies:
- CLAUDE.md
- AGENTS.md
- .claude/agents/studyos-md-topic-builder.md
- die vom Hauptagenten genannten Referenz-Topics und lokalen Styles

Primaere fachliche Quelle:
sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]

Optionale PDF nur fuer gezielte Screenshots:
sources/[SEMESTER-ID]/[MODUL-ID]/[OPTIONALE-PDF-DATEINAME]

Zieldatei:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

Erwartete Topic-ID:
[TOPIC-ID]

Erstelle eine vollstaendige erste Topic-Version im bestehenden lokalen Schema.
Nutze die Markdown-Datei als einzige Hauptquelle. Erhalte relevante Definitionen,
Formeln, Tabellen, Beispiele, Abbildungsverweise, Quellenhinweise und
pruefungsrelevante Aussagen. Markiere unklare Markdown-Passagen, statt sie zu
erfinden oder zu glaetten.

PDF-Regel: Lies die PDF niemals vollstaendig, extrahiere sie nicht und gehe sie
nicht seitenweise durch. Nutze sie nur fuer einen gezielten Screenshot, wenn der
Hauptagent oder die Markdown-Quelle eine konkrete Stelle benennt und der Kontext
ohne diesen Screenshot unklar bleibt.

Plane pro Section Stofftyp, fachliche Beziehung und visuelle Leitidee. Vermeide
wiederholte Standardlayouts und kopiere keine Referenz-Section als Schablone.

Erzeuge sections, keyTakeaways, examFocus und pitfalls. Keine externen Quellen,
keine erfundenen Fakten, keine kompletten HTML-Dokumente.

Aendere ausschliesslich die Zieldatei. Keine Registrierungen, Styles, Shared
Components oder anderen Dateien.

Berichte am Ende:
- geaenderte Datei
- abgedeckte Markdown-Bereiche
- Quellenabdeckungsmatrix
- Section- und Darstellungsinventar
- gezielte PDF-Screenshot-Fallbacks mit Grund, Stelle und Auswirkung
- unklare Passagen
- verbleibende Risiken
```

### Gate nach Phase 1

Der Hauptagent prueft: Topic-Export, `topic.id`, gefuellte Sections,
`keyTakeaways`, `examFocus`, `pitfalls`, Scope-Treue, keine erfundenen Inhalte
und keine PDF-Nutzung als verdeckte zweite Hauptquelle.

---

## Phase 2 - Erster Quellen- und Vollstaendigkeits-Audit

Starte den `content-fidelity-auditor` als read-only Agenten.

```text
Arbeite als content-fidelity-auditor.

Lies:
- CLAUDE.md
- AGENTS.md
- .claude/agents/content-fidelity-auditor.md

Pruefe read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

gegen die einzige primaere fachliche Quelle:
sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]

Eine optionale PDF darf nicht als Hauptquelle genutzt werden. Pruefe nur, ob
eventuell dokumentierte gezielte PDF-Screenshot-Fallbacks eng begrenzt und
berechtigt waren.

Pruefe jede Section sowie keyTakeaways, examFocus und pitfalls auf fehlende,
verkuerzte, falsche oder nicht belegte Inhalte, Quellenprobleme und ausgelassene
Markdown-Inhalte.

Nimm keine Datei-Aenderungen vor. Liefere Befunde mit Ort, Quellenbezug,
Schweregrad und minimaler Korrektur.
```

Der Hauptagent setzt alle kritischen und mittleren, quellenbelegten Befunde um.

---

## Phase 3 - Pruefungsorientierung

Starte den `exam-content-builder` als read-only Beratungsagenten.

```text
Arbeite als exam-content-builder.
Lies CLAUDE.md, AGENTS.md und .claude/agents/exam-content-builder.md.
Analysiere read-only die Zieldatei gegen die Markdown-Quelle.
Liefere direkt integrierbare Vorschlaege fuer keyTakeaways, examFocus und pitfalls.
Nutze ausschliesslich die Markdown-Quelle. Keine Datei-Aenderungen.
```

---

## Phase 4 - Didaktisches und visuelles Upgrade

Starte den `topic-quality-upgrader` als read-only Beratungsagenten.

```text
Arbeite als topic-quality-upgrader.
Lies CLAUDE.md, AGENTS.md, .claude/agents/topic-quality-upgrader.md,
Referenz-Topics und relevante Styles.
Analysiere read-only die Zieldatei. Nutze Markdown nur zur Absicherung.
Liefere Preserve-Map, Defizitliste, Verbesserungsvorschlaege und
Wiederholungsinventar je Section.
Keine Datei-Aenderungen, keine neuen Fakten, kein Redesign.
```

---

## Phase 5 - Minimale Integration

Der Hauptagent integriert das fertige Topic selbst:

1. Import und Export in `topics/index.js` ergaenzen, falls er fehlt.
2. Minimalen Topic-Metadateneintrag in `module.js` ergaenzen, falls er fehlt.
3. Reihenfolge und lokale Konventionen erhalten.
4. Dateiname, Importname, Topic-ID und Modul-Metadaten konsistent halten.

---

## Phase 6 - Verpflichtender finaler Re-Audit

Starte erneut den `content-fidelity-auditor` als read-only Agenten. Auftrag wie
Phase 2, ergaenzt:

```text
Dies ist der finale Freigabe-Audit nach Pruefungs- und Design-Ueberarbeitung.
Pruefe besonders, ob Inhalte verloren gingen oder neue, nicht belegte Aussagen
entstanden.

Gib als Freigabestatus genau eines aus:
- bestanden
- teilweise bestanden
- kritisch
```

Korrigiere alle verbleibenden kritischen und mittleren Befunde.

---

## Phase 7 - Spezialisierte technische QA

Nutze nach der Integration folgende Agenten read-only:

```text
Agent: architecture-agent
Definition: .claude/agents/architecture-agent.md
Pruefe Topic-ID, Dateiname, module.js, topics/index.js, Import-/Export-Kette, relative Pfade und minimale Integration.
```

```text
Agent: technical-bug-agent
Definition: .claude/agents/technical-bug-agent.md
Pruefe Build-, Lint-, Import-, Export- oder Runtime-Risiken aus der aktuellen Aufgabe.
```

```text
Agent: ui-ux-agent
Definition: .claude/agents/ui-ux-agent.md
Pruefe Responsiveness, horizontale Overflows, abgeschnittene Inhalte, Tabellen/Formeln auf Mobile, Hierarchie und visuelle Wiederholung.
```

Die drei QA-Agenten duerfen parallel laufen, da sie read-only arbeiten.

---

## Phase 8 - Build, Lint und Browser-QA

Fuehre als Hauptagent mindestens aus:

```powershell
npm.cmd run build
npm.cmd run lint
```

Pruefe anschliessend die gerenderte Route:

```text
/topic/[MODUL-ID]/[TOPIC-ID]
```

Pruefe Erreichbarkeit, Konsolenfehler, horizontale Overflows, abgeschnittene
Inhalte, mobile Lesbarkeit, Quellenhinweise, eindeutige `sections[].id`, keine
HTML-Dokumente im Content und keine Scope-Verletzungen.

Pruefe zusaetzlich:
- Rendert Mermaid korrekt (kein leeres Div)?
- Rendert KaTeX ohne Fehler (katex CSS importiert)?
- Recharts mit ResponsiveContainer ohne feste px-Breiten?
- Alle primaeren Inhalte ohne Klick sichtbar (keine Click-Walls)?
- Lerninhalt frei von Quizzen/Selbsttests/Uebungen/Reveal-Karten (gehoeren in `questions.js` / `exams.js`)?
- Interaktivitaet nur dort, wo eine veraenderliche Groesse den Lerneffekt traegt (sonst statisch)?

---

## Quellenregeln

- Einzige primaere fachliche Quelle ist `sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]`.
- Keine externen Quellen oder freien fachlichen Ergaenzungen.
- Keine erfundenen Zahlen, Formeln, Beispiele, Definitionen oder Aussagen.
- Keine relevanten Inhalte stillschweigend kuerzen.
- Unklare Markdown-Passagen als unklar markieren.
- PDF nur fuer gezielte Screenshots konkret unklarer Stellen; niemals vollstaendig lesen.
- Kein `<!doctype>`, `<html>`, `<head>` oder `<body>` in Topic-Content.

---

## Definition of Done

- Markdown-Pfad und Zielpfad verifiziert.
- Topic ist vollstaendig und quellentreu zur Markdown-Quelle.
- `*_MD+PDF.md`-Briefing gelesen und alle beschriebenen Visualisierungen umgesetzt.
- Quellenabdeckungsmatrix liegt vor.
- PDF-Screenshot-Fallbacks, falls genutzt, sind punktuell dokumentiert.
- `sections`, `keyTakeaways`, `examFocus` und `pitfalls` sind sinnvoll befuellt.
- Topic-Datei, `topics/index.js` und `module.js` sind minimal korrekt integriert.
- Jede Section hat eine dominante visuelle Form, die sich von ihren Nachbarn unterscheidet.
- Kein Abschnitt ist reiner Prosatext, wenn Recharts/Mermaid/KaTeX klarer waere.
- Alle primaeren Inhalte ohne Klick sichtbar.
- Finaler Fidelity-Audit hat keine kritischen oder mittleren Befunde.
- Architecture-, Technical-Bug- und UI/UX-Befunde wurden konsolidiert.
- Build, Lint, Desktop- und Mobile-QA wurden ausgefuehrt oder sauber begruendet.
- Scope und Git-Diff wurden abschliessend geprueft.

---

## Abschlussbericht

Berichte kurz und konkret:

1. Geaenderte Dateien
2. Neu angelegte Dateien
3. Verschobene Dateien
4. Eingesetzte Agenten und ihre Rollen
5. Abgedeckte Markdown-Bereiche und offene Quellenunsicherheiten
6. Genutzte PDF-Screenshot-Fallbacks oder `keine`
7. Wichtigste inhaltliche, didaktische und Integrationsaenderungen
8. Finaler Fidelity-Audit-Status
9. Architecture-, Technical-Bug- und UI/UX-QA
10. Build-, Lint-, Browser-, Desktop- und Mobile-QA
11. Verbleibende Risiken oder blockierte Punkte
