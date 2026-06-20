# MD zu React - Codex Orchestrator-Prompt

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
> aus einer Markdown-Quelle vorgesehen. Er nutzt denselben kontrollierten
> Workflow wie PDF zu React, aber Markdown ist die verbindliche Hauptquelle.

---

## Ziel

Arbeite im aktuellen StudyOS-Repo und konvertiere

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

**Installed visual stack:** Recharts (quantitative charts), Mermaid (flows,
processes, taxonomies), KaTeX/react-katex (all formulas). Plain prose is not
acceptable for sections that contain processes, comparisons, formulas, or
statistics. Render these **statically by default**. Primary content must always
be visible on first render — no click-walls.

**Static-by-default + no assessment:** Add an interactive control only when a
variable quantity carries the learning (a parameter slider that recomputes a
formula/chart), and at most one per section. No quizzes, self-tests, exercises,
or question→answer reveal/toggle cards in learning content — these belong in
`questions.js` (Quiz) and `exams.js` (Exam). If a briefing suggests a quiz/
exercise component, render it as a static visual and move the question to the
quiz/exam files.

---

## Verbindliche Orchestrator-Regeln

Du bist der Hauptagent und traegst die Verantwortung fuer das Endergebnis.
Subagent-Ausgaben sind Arbeitsbeitraege, keine ungeprueften Endergebnisse.

1. Lies zuerst `AGENTS.md`, die relevanten Repo-Dateien und alle unten genannten
   Agent-Definitionen.
2. Erstelle vor der Umsetzung einen kurzen Plan mit Ziel, betroffenen Dateien,
   Subagents, Umsetzungsschritten, QA und Risiken.
3. Wenn Multi-Agent-Tools verfuegbar sind, nutze die spezialisierten Subagents
   explizit. Da `spawn_agent` keinen Agent-Typ garantiert, muss jeder Auftrag
   den Agent-Namen, seine Definitionsdatei und seinen exakten Scope enthalten.
4. Fuehre schreibende Phasen sequenziell aus. Warte auf den Abschluss, pruefe
   das Ergebnis und stelle sicher, dass es im aktuellen Haupt-Workspace
   vorliegt, bevor die naechste Phase startet.
5. Erlaube nie zwei Subagents gleichzeitig Schreibzugriff auf dieselbe Datei.
6. Analyse- und Audit-Subagents arbeiten read-only und liefern strukturierte
   Befunde. Nur der Hauptagent integriert ihre Korrekturen.
7. Pruefe jeden Subagent-Beitrag gegen Markdown-Quelle, Scope und
   Repo-Konventionen. Uebernimm keine unbelegten oder widerspruechlichen
   Aenderungen.
8. Wenn Subagents nicht verfuegbar sind, fuehre dieselben Rollen lokal anhand
   ihrer Definitionsdateien aus und dokumentiere dies im Abschlussbericht.
9. Stoppe nicht nach Analyse oder Rohentwurf. Fuehre Integration, Re-Audit und
   QA vollstaendig durch.

---

## Relevante Agent-Definitionen

Lies vor dem Start:

```text
.codex/agents/studyos-md-topic-builder.toml
.codex/agents/content-fidelity-auditor.toml
.codex/agents/exam-content-builder.toml
.codex/agents/topic-quality-upgrader.toml
```

Prioritaet bei Widerspruechen:

```text
AGENTS.md
-> dieser Orchestrator-Prompt
-> auftragsspezifischer Subagent-Scope
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
   Verwende keinen fest verdrahteten Dateinamen und kopiere keine Section als
   Standardschablone.
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

Wenn das Modul noch nicht existiert oder eine Aenderung ausserhalb des erlaubten
Scopes zwingend erforderlich ist, stoppe vor dieser Aenderung und berichte den
konkreten Integrationsbedarf.

---

## Phase 1 - Rohaufbau durch MD-Builder

Starte genau einen schreibenden Subagent:

```text
Rolle: studyos-md-topic-builder
Definition: .codex/agents/studyos-md-topic-builder.toml
Schreibrecht: ausschliesslich
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx
```

### Auftrag an den Subagent

```text
Du arbeitest als studyos-md-topic-builder.

Lies:
- AGENTS.md
- .codex/agents/studyos-md-topic-builder.toml
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
- Quellenabdeckungsmatrix: Markdown-Bereich -> Topic-Section oder begruendete Nichtuebernahme
- Section- und Darstellungsinventar
- gezielte PDF-Screenshot-Fallbacks mit Grund, Stelle und Auswirkung
- unklare Passagen
- verbleibende Risiken
```

### Gate nach Phase 1

Der Hauptagent prueft vor Phase 2:

- Zieldatei existiert und exportiert genau ein Topic im lokalen Format.
- `topic.id` entspricht `[TOPIC-ID]`.
- Sections sowie `keyTakeaways`, `examFocus` und `pitfalls` sind befuellt.
- Keine unzulaessigen Dateien wurden geaendert.
- Keine offensichtlichen erfundenen Inhalte oder Quellenmarker vorhanden.
- PDF-Fallbacks wurden nicht als verdeckte zweite Hauptquelle genutzt.

Korrigiere technische oder eindeutige Scope-Fehler sofort lokal.

---

## Phase 2 - Erster Quellen- und Vollstaendigkeits-Audit

Starte den `content-fidelity-auditor` als read-only Subagent.

```text
Du arbeitest als content-fidelity-auditor.

Lies:
- AGENTS.md
- .codex/agents/content-fidelity-auditor.toml

Pruefe read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

gegen die einzige primaere fachliche Quelle:
sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]

Eine optionale PDF darf nicht als Hauptquelle genutzt werden. Pruefe nur, ob
eventuell dokumentierte gezielte PDF-Screenshot-Fallbacks eng begrenzt und
berechtigt waren.

Pruefe jede Section sowie keyTakeaways, examFocus und pitfalls auf:
- fehlende oder verkuerzte Definitionen
- fehlende oder falsche Formeln, Variablen und Beispiele
- ausgelassene Tabellen, Abbildungsverweise oder pruefungsrelevante Beziehungen
- nicht belegte Aussagen und erfundene Inhalte
- falsche oder ungenaue Quellenangaben
- relevante, aber stillschweigend ausgelassene Markdown-Inhalte

Nimm keine Datei-Aenderungen vor. Liefere den definierten Befundbericht mit
konkretem Ort, Quellenbezug, Schweregrad und minimaler Korrektur.
```

Der Hauptagent setzt alle kritischen und mittleren, quellenbelegten Befunde in
der Zieldatei um.

---

## Phase 3 - Pruefungsorientierung

Starte den `exam-content-builder` als read-only Beratungs-Subagent.

```text
Du arbeitest als exam-content-builder.

Lies:
- AGENTS.md
- .codex/agents/exam-content-builder.toml

Analysiere read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

gegen:
sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]

Liefere konkrete, direkt integrierbare Vorschlaege fuer keyTakeaways,
examFocus und pitfalls. Formuliere abrufbare Kompetenzen, echte Abgrenzungen,
Formelkompetenzen, Transferlogik und typische Fehlerquellen ausschliesslich aus
der Markdown-Quelle.

Keine freien Klausurfragen, keine externen Quellen, keine neuen Beispiele und
keine Datei-Aenderungen. Gib fuer jeden Vorschlag den Quellenbezug an.
```

---

## Phase 4 - Didaktisches und visuelles Upgrade

Starte den `topic-quality-upgrader` als read-only Beratungs-Subagent.

```text
Du arbeitest als topic-quality-upgrader.

Lies:
- AGENTS.md
- .codex/agents/topic-quality-upgrader.toml
- die vom Hauptagenten bestimmten Referenz-Topics und relevanten Styles

Analysiere read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

Nutze die Markdown-Datei nur zur Absicherung der fachlichen Bedeutung:
sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]

Erstelle:
- Preserve-Map der bereits hochwertigen Bereiche
- konkrete Defizitliste
- problemspezifische Verbesserungsvorschlaege
- Wiederholungsinventar je Section: Stofftyp, Einstieg, Hauptlayout,
  Spaltenzahl und dominanter Baustein

Pruefe Hierarchie, Lesbarkeit, Tabellen, Formelraeume, Prozesse, Vergleiche,
Callouts, visuelle Dramaturgie, Mobile-Risiken und moegliche Overflows.

Keine Datei-Aenderungen, keine neuen Fakten, keine globalen Styles, keine
Shared Components und kein pauschales Redesign. Gute individuelle Sections
muessen erhalten bleiben.
```

---

## Phase 5 - Minimale Integration

Der Hauptagent integriert das fertige Topic selbst:

1. Fuege den notwendigen Import und Export in `topics/index.js` ein, falls er fehlt.
2. Fuege den minimal notwendigen Topic-Metadateneintrag in `module.js` ein, falls er fehlt.
3. Erhalte bestehende Reihenfolge und lokale Konventionen.
4. Stelle sicher, dass Dateiname, Importname, Topic-ID und Modul-Metadaten konsistent sind.
5. Aendere keine bereits korrekten fachlichen Inhalte anderer Topics.

---

## Phase 6 - Verpflichtender finaler Re-Audit

Starte nach allen inhaltlichen und visuellen Aenderungen erneut den
`content-fidelity-auditor` als read-only Subagent. Der Auftrag entspricht Phase
2, ergaenzt um:

```text
Dies ist der finale Freigabe-Audit nach Pruefungs- und Design-Ueberarbeitung.
Pruefe besonders, ob beim Umstrukturieren Inhalte verloren gingen oder neue,
nicht belegte Aussagen entstanden.

Gib als Freigabestatus genau eines aus:
- bestanden
- teilweise bestanden
- kritisch

Liste jeden verbleibenden kritischen oder mittleren Befund einzeln auf.
```

Der Hauptagent muss alle verbleibenden kritischen und mittleren Befunde
korrigieren. Wiederhole den Audit, wenn nach dessen Befunden wesentliche
fachliche Aenderungen vorgenommen wurden.

---

## Phase 7 - Technische und visuelle QA

Fuehre als Hauptagent mindestens aus:

```powershell
npm.cmd run build
npm.cmd run lint
```

Wenn Build oder Lint fehlschlaegt, klaere, ob der Fehler durch die aktuelle
Aufgabe verursacht wurde, und korrigiere nur aufgabenbezogene Fehler innerhalb
des erlaubten Scopes.

Pruefe anschliessend die gerenderte Topic-Route im Browser auf Desktop und
Mobile:

```text
/topic/[MODUL-ID]/[TOPIC-ID]
```

Pruefe: Erreichbarkeit ueber das Modul, keine Konsolenfehler, keine horizontalen
Overflows, keine abgeschnittenen Inhalte, mobile Lesbarkeit von Tabellen und
Formeln, korrekte Quellenhinweise, eindeutige `sections[].id`, keine
HTML-Dokumente im Content und keine Aenderungen ausserhalb des Scopes.

Nach dem finalen Re-Audit duerfen QA-Korrekturen nur technische oder rein
visuelle Fehler beheben. Sobald Wortlaut, fachlicher Inhalt, Quellenangabe,
Section-Struktur, keyTakeaways, examFocus oder pitfalls geaendert werden, muss
Phase 6 erneut ausgefuehrt werden.

---

## Quellenregeln

- Einzige primaere fachliche Quelle ist `sources/[SEMESTER-ID]/[MODUL-ID]/[MD-DATEINAME]`.
- Keine externen Quellen oder freien fachlichen Ergaenzungen.
- Keine erfundenen Zahlen, Formeln, Beispiele, Definitionen oder Aussagen.
- Keine relevanten Inhalte stillschweigend kuerzen.
- Unklare Markdown-Passagen als unklar markieren.
- Seiten-, Folien-, Kapitel- oder Quellenangaben aus Markdown erhalten, wenn sie vorhanden sind.
- PDF nur fuer gezielte Screenshots konkret unklarer Stellen; niemals vollstaendig lesen.
- Normale Quellenhinweise verwenden, keine Chat-, Web- oder Citation-Marker.
- Kein `<!doctype>`, `<html>`, `<head>` oder `<body>` in Topic-Content.

---

## Definition of Done

Die Aufgabe ist erst abgeschlossen, wenn:

- Markdown-Pfad und Zielpfad verifiziert wurden.
- das Topic fachlich vollstaendig und quellentreu zur Markdown-Quelle ist.
- eine Quellenabdeckungsmatrix jeden relevanten Markdown-Bereich einer Topic-Section oder begruendeten Nichtuebernahme zuordnet.
- jeder PDF-Screenshot-Fallback, falls genutzt, punktuell begruendet und dokumentiert ist.
- `sections`, `keyTakeaways`, `examFocus` und `pitfalls` sinnvoll befuellt sind.
- Topic-Datei, `topics/index.js` und `module.js` minimal korrekt integriert sind.
- finaler Fidelity-Audit keine kritischen oder mittleren Befunde mehr enthaelt.
- Build und Lint erfolgreich sind oder nicht aufgabenbezogene Fehler klar belegt sind.
- Desktop- und Mobile-QA erfolgt sind oder die technische Einschraenkung exakt dokumentiert wurde.
- Scope und Git-Diff abschliessend geprueft wurden.

---

## Abschlussbericht

Berichte kurz und konkret:

1. Geaenderte Dateien
2. Neu angelegte Dateien
3. Verschobene Dateien
4. Eingesetzte Subagents und ihre Rollen
5. Abgedeckte Markdown-Bereiche und offene Quellenunsicherheiten
6. Genutzte PDF-Screenshot-Fallbacks oder `keine`
7. Wichtigste inhaltliche, didaktische und Integrationsaenderungen
8. Finaler Fidelity-Audit-Status
9. Build-, Lint-, Browser-, Desktop- und Mobile-QA
10. Verbleibende Risiken oder blockierte Punkte
