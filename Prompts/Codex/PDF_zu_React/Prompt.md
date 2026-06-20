# PDF zu React - Codex Orchestrator-Prompt

> Vor dem Einfuegen alle Platzhalter ersetzen:
>
> - `[PDF-DATEINAME]` -> z. B. `AM7 - Performanceanalyse.pdf`
> - `[DATEINAME]` -> z. B. `07-performanceanalyse` ohne `.jsx`
> - `[TOPIC-ID]` -> z. B. `performanceanalyse`
> - `[MODUL-ID]` -> z. B. `asset-management`
> - `[SEMESTER-ID]` -> z. B. `semester-4`
>
> Dieser Prompt ist fuer ein einzelnes, vollstaendig integriertes StudyOS-Topic
> vorgesehen. Er orchestriert spezialisierte Codex-Subagents, begrenzt ihre
> Schreibrechte und verpflichtet den Hauptagenten zur finalen Integration und QA.

---

## Ziel

Arbeite im aktuellen StudyOS-Repo und konvertiere

```text
sources/[SEMESTER-ID]/[MODUL-ID]/[PDF-DATEINAME]
```

in das vollstaendig integrierte React-Topic

```text
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx
```

Das Ergebnis muss fachlich quellentreu, pruefungsorientiert, visuell hochwertig,
im lokalen Topic-Schema integriert sowie auf Desktop und Mobile plausibel sein.

Nutze ausschliesslich das angegebene PDF als fachliche Quelle. Repo-Dateien
duerfen nur fuer Architektur, Schema, Gestaltungsmuster und Integration genutzt
werden, nicht als zusaetzliche fachliche Quelle.

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
7. Pruefe jeden Subagent-Beitrag gegen PDF, Scope und Repo-Konventionen. Uebernimm
   keine unbelegten oder widerspruechlichen Aenderungen.
8. Wenn Subagents nicht verfuegbar sind, fuehre dieselben Rollen lokal anhand
   ihrer Definitionsdateien aus und dokumentiere dies im Abschlussbericht.
9. Stoppe nicht nach Analyse oder Rohentwurf. Fuehre Integration, Re-Audit und
   QA vollstaendig durch.

---

## Relevante Agent-Definitionen

Lies vor dem Start:

```text
.codex/agents/studyos-pdf-topic-builder.toml
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

1. Verifiziere, dass PDF, Modulordner und Zielordner existieren.
2. Lies mindestens:
   - `src/modules/[SEMESTER-ID]/[MODUL-ID]/module.js`
   - `src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/index.js`
   - `src/modules/[SEMESTER-ID]/[MODUL-ID]/index.js`
   - zwei hochwertige vorhandene Topics desselben Moduls, falls vorhanden
   - relevante lokale Topic-CSS-Dateien und Content-Styles
3. Waehle Referenz-Topics dynamisch nach fachlicher bzw. visueller Naehe.
   Verwende keinen fest verdrahteten Dateinamen und kopiere keine Section als
   Standardschablone.
4. Bestimme und dokumentiere:
   - erwartete Topic-ID, Dateinamen- und Exportkonvention
   - ob `[TOPIC-ID]` bereits in `module.js` registriert ist
   - ob ein Import in `topics/index.js` fehlt
   - welche Integrationsdateien zwingend geaendert werden muessen
   - vorhandene CSS-/HTML-Bausteine
   - PDF-Seiten-/Folienumfang und Extraktionsqualitaet
   - unklare PDF-Passagen oder technische Risiken
5. Pruefe den Git-Status. Fremde oder unzusammenhaengende Aenderungen duerfen
   nicht veraendert oder zurueckgesetzt werden.

Wenn Seiten, Folien, Formeln oder Abbildungen nicht verlaesslich lesbar oder
extrahierbar sind, erfinde keinen Ersatz. Dokumentiere die betroffenen Bereiche
als Quellenunsicherheit und stoppe nur dann, wenn dadurch eine quellentreue
Umsetzung des Kernthemas nicht moeglich ist.

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

## Phase 1 - Rohaufbau durch PDF-Builder

Starte genau einen schreibenden Subagent:

```text
Rolle: studyos-pdf-topic-builder
Definition: .codex/agents/studyos-pdf-topic-builder.toml
Schreibrecht: ausschliesslich
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx
```

### Auftrag an den Subagent

```text
Du arbeitest als studyos-pdf-topic-builder.

Lies:
- AGENTS.md
- .codex/agents/studyos-pdf-topic-builder.toml
- die vom Hauptagenten genannten Referenz-Topics und lokalen Styles

Fachliche Quelle:
sources/[SEMESTER-ID]/[MODUL-ID]/[PDF-DATEINAME]

Zieldatei:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

Erwartete Topic-ID:
[TOPIC-ID]

Erstelle eine vollstaendige erste Topic-Version im bestehenden lokalen Schema.
Nutze ausschliesslich das PDF als fachliche Quelle. Erhalte relevante
Definitionen, Formeln, Tabellen, Beispiele, Abbildungsverstaendnis sowie
Seiten-/Folien-/Kapitelangaben. Markiere unklare Quellenpassagen, statt sie zu
erfinden oder zu glaetten.

Plane pro Section Stofftyp, fachliche Beziehung und visuelle Leitidee. Vermeide
wiederholte Standardlayouts und kopiere keine Referenz-Section als Schablone.

Erzeuge sections, keyTakeaways, examFocus und pitfalls. Keine externen Quellen,
keine erfundenen Fakten, keine kompletten HTML-Dokumente.

Aendere ausschliesslich die Zieldatei. Keine Registrierungen, Styles, Shared
Components oder anderen Dateien.

Berichte am Ende:
- geaenderte Datei
- abgedeckte PDF-Bereiche
- Quellenabdeckungsmatrix: PDF-Bereich -> Topic-Section oder begruendete
  Nichtuebernahme
- Section- und Darstellungsinventar
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

Korrigiere technische oder eindeutige Scope-Fehler sofort lokal.

---

## Phase 2 - Erster Quellen- und Vollstaendigkeits-Audit

Starte den `content-fidelity-auditor` als read-only Subagent.

### Auftrag an den Subagent

```text
Du arbeitest als content-fidelity-auditor.

Lies:
- AGENTS.md
- .codex/agents/content-fidelity-auditor.toml

Pruefe read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

gegen die einzige fachliche Quelle:
sources/[SEMESTER-ID]/[MODUL-ID]/[PDF-DATEINAME]

Pruefe jede Section sowie keyTakeaways, examFocus und pitfalls auf:
- fehlende oder verkuerzte Definitionen
- fehlende oder falsche Formeln, Variablen und Beispiele
- ausgelassene Tabellen, Abbildungen oder pruefungsrelevante Beziehungen
- nicht belegte Aussagen und erfundene Inhalte
- falsche oder ungenaue Quellenangaben
- relevante, aber stillschweigend ausgelassene PDF-Inhalte

Nimm keine Datei-Aenderungen vor. Liefere den definierten Befundbericht mit
konkretem Ort, Quellenbezug, Schweregrad und minimaler Korrektur.
```

Der Hauptagent setzt alle kritischen und mittleren, quellenbelegten Befunde in
der Zieldatei um. Niedrige Befunde werden umgesetzt, wenn sie die Quellentreue
oder Verstaendlichkeit verbessern, ohne den Scope zu erweitern.

---

## Phase 3 - Pruefungsorientierung

Starte den `exam-content-builder` als read-only Beratungs-Subagent.

### Auftrag an den Subagent

```text
Du arbeitest als exam-content-builder.

Lies:
- AGENTS.md
- .codex/agents/exam-content-builder.toml

Analysiere read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

gegen:
sources/[SEMESTER-ID]/[MODUL-ID]/[PDF-DATEINAME]

Liefere konkrete, direkt integrierbare Vorschlaege fuer keyTakeaways,
examFocus und pitfalls. Formuliere abrufbare Kompetenzen, echte Abgrenzungen,
Formelkompetenzen, Transferlogik und typische Fehlerquellen ausschliesslich aus
der PDF-Quelle.

Keine freien Klausurfragen, keine externen Quellen, keine neuen Beispiele und
keine Datei-Aenderungen. Gib fuer jeden Vorschlag den Quellenbezug an.
```

Der Hauptagent integriert nur quellenbelegte Vorschlaege. Bestehende korrekte
Inhalte duerfen nicht aus Platzgruenden entfernt werden.

---

## Phase 4 - Didaktisches und visuelles Upgrade

Starte den `topic-quality-upgrader` als read-only Beratungs-Subagent.

### Auftrag an den Subagent

```text
Du arbeitest als topic-quality-upgrader.

Lies:
- AGENTS.md
- .codex/agents/topic-quality-upgrader.toml
- die vom Hauptagenten bestimmten Referenz-Topics und relevanten Styles

Analysiere read-only:
src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/[DATEINAME].jsx

Nutze das PDF nur zur Absicherung der fachlichen Bedeutung:
sources/[SEMESTER-ID]/[MODUL-ID]/[PDF-DATEINAME]

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

Der Hauptagent setzt begruendete Verbesserungen lokal in der Zieldatei um.
Keine Aenderung darf fachliche Inhalte entfernen oder ohne konkretes Defizit
eine hochwertige Section ersetzen.

---

## Phase 5 - Minimale Integration

Der Hauptagent integriert das fertige Topic selbst:

1. Fuege den notwendigen Import und Export in
   `src/modules/[SEMESTER-ID]/[MODUL-ID]/topics/index.js` ein, falls er fehlt.
2. Fuege den minimal notwendigen Topic-Metadateneintrag in
   `src/modules/[SEMESTER-ID]/[MODUL-ID]/module.js` ein, falls er fehlt.
3. Erhalte bestehende Reihenfolge und lokale Konventionen.
4. Stelle sicher, dass Dateiname, Importname, Topic-ID und Modul-Metadaten
   konsistent sind.
5. Aendere keine bereits korrekten fachlichen Inhalte anderer Topics.

---

## Phase 6 - Verpflichtender finaler Re-Audit

Starte nach allen inhaltlichen und visuellen Aenderungen erneut den
`content-fidelity-auditor` als read-only Subagent.

Der Auftrag entspricht Phase 2, ergaenzt um:

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
fachliche Aenderungen vorgenommen wurden. Ein Topic mit Status `kritisch` darf
nicht als fertig gemeldet werden.

---

## Phase 7 - Technische und visuelle QA

Fuehre als Hauptagent mindestens aus:

```powershell
npm.cmd run build
npm.cmd run lint
```

Wenn Build oder Lint fehlschlaegt:

1. Ermittle, ob der Fehler durch die aktuelle Aufgabe verursacht wurde.
2. Korrigiere nur aufgabenbezogene Fehler innerhalb des erlaubten Scopes.
3. Dokumentiere vorhandene, nicht aufgabenbezogene Fehler separat.

Pruefe anschliessend die gerenderte Topic-Route im Browser auf Desktop und
Mobile. Falls die Route aus dem Repo ableitbar ist, verwende:

```text
/topic/[MODUL-ID]/[TOPIC-ID]
```

Pruefe:

- Topic ist ueber das Modul erreichbar.
- Keine JavaScript- oder Konsolenfehler.
- Keine horizontalen Overflows oder abgeschnittenen Inhalte.
- Tabellen und Formeln sind auf Mobile lesbar.
- Quellenhinweise, Sonderzeichen und HTML werden korrekt gerendert.
- Benachbarte Sections wirken nicht wie Kopien mit ausgetauschtem Text.
- `sections[].id` ist eindeutig und URL-safe.
- Keine kompletten HTML-Dokumente, Chat-/Web-Citation-Marker, Debug-Ausgaben
  oder ungenutzten Imports.
- Keine Aenderungen ausserhalb des erlaubten Scopes.

Falls Browser-QA technisch nicht verfuegbar ist, dokumentiere exakt, welche
visuellen Risiken nicht verifiziert werden konnten. Build allein ersetzt keine
visuelle QA.

Nach dem finalen Re-Audit duerfen QA-Korrekturen nur technische oder rein
visuelle Fehler beheben. Sobald Wortlaut, fachlicher Inhalt, Quellenangabe,
Section-Struktur, keyTakeaways, examFocus oder pitfalls geaendert werden, muss
Phase 6 erneut ausgefuehrt werden.

---

## Quellenregeln

- Einzige fachliche Quelle ist
  `sources/[SEMESTER-ID]/[MODUL-ID]/[PDF-DATEINAME]`.
- Keine externen Quellen oder freien fachlichen Ergaenzungen.
- Keine erfundenen Zahlen, Formeln, Beispiele, Definitionen oder Aussagen.
- Keine relevanten Inhalte stillschweigend kuerzen.
- Unklare PDF-Passagen als unklar markieren.
- Seiten-, Folien- oder Kapitelangaben erhalten, wenn sie vorhanden sind.
- Normale Quellenhinweise verwenden, keine Chat-, Web- oder Citation-Marker.
- Kein `<!doctype>`, `<html>`, `<head>` oder `<body>` in Topic-Content.

---

## Definition of Done

Die Aufgabe ist erst abgeschlossen, wenn:

- PDF-Pfad und Zielpfad verifiziert wurden.
- das Topic fachlich vollstaendig und quellentreu ist.
- eine Quellenabdeckungsmatrix jeden relevanten PDF-Bereich einer Topic-Section
  oder einer begruendeten Nichtuebernahme zuordnet.
- `sections`, `keyTakeaways`, `examFocus` und `pitfalls` sinnvoll befuellt sind.
- Topic-Datei, `topics/index.js` und `module.js` minimal korrekt integriert sind.
- finaler Fidelity-Audit keine kritischen oder mittleren Befunde mehr enthaelt.
- Build erfolgreich ist oder ein nicht aufgabenbezogener Fehler klar belegt ist.
- Lint erfolgreich ist oder ein nicht aufgabenbezogener Fehler klar belegt ist.
- Desktop- und Mobile-QA erfolgt sind oder die technische Einschraenkung exakt
  dokumentiert wurde.
- Scope und Git-Diff abschliessend geprueft wurden.

---

## Abschlussbericht

Berichte kurz und konkret:

1. Geaenderte Dateien
2. Neu angelegte Dateien
3. Verschobene Dateien
4. Eingesetzte Subagents und ihre Rollen
5. Abgedeckte PDF-Bereiche und offene Quellenunsicherheiten
6. Wichtigste inhaltliche, didaktische und Integrationsaenderungen
7. Finaler Fidelity-Audit-Status
8. Build-, Lint-, Browser-, Desktop- und Mobile-QA
9. Verbleibende Risiken oder blockierte Punkte
