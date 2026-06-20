# skript-01-einfuehrung_MD+PDF - Einführung in die Behavioral Finance: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-01-einfuehrung.md` um jene visuellen Inhalte, die bei der Extraktion aus `skript-01-einfuehrung.pdf` verloren gegangen, nur als zerbrochene Wortfragmente oder kaputte Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Venn-Schaubilder, Prozessflüsse, Formeln, Tabellenlogiken oder Bildaussagen verloren gehen.

**Quelle:** `skript-01-einfuehrung.pdf` mit 32 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, Kopfzeile, Folien-Footer ("Behavioral Finance / CS / Folie N") und Copyright-Zeile ("© 2026 – Hochschule der Bayerischen Wirtschaft") sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem Diagramme, Formeln, Tabellen, Schaubilder, Icons und Prozessketten.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Schaubilder neu aufbauen:** Mehrere Folien (Curriculum-Roadmap auf Folie 2, Venn-Diagramm auf Folie 12, Spannungsfeld/Prinzip-Schaubild auf Folie 19, Vergleichstabelle auf Folie 31, Prozessketten auf Folie 32) sind in der MD nur als lose Wortfetzen vorhanden. Diese Inhalte in React als echte Diagramme, Pfeilketten oder strukturierte Tabellen rekonstruieren, niemals die zerbrochenen Fragmente übernehmen.
2. **Kaputte Markdown-Tabellen nicht übernehmen:** Die Spielregeln-Tabellen (Folie 4) und die Vergleichstabelle Traditionelle Ökonomik vs. Behavioral Economics (Folie 31) sind in der MD vermischt bzw. zerrissen und müssen als echte `DataTable`/`ComparisonTable` neu aufgebaut werden.
3. **Farbkodierung erhalten:** Ökonomie/Neoklassik wird durchgängig blau, Psychologie grün dargestellt; das aktuelle Modul "Behavioral Finance" und das aktuelle Kapitel werden orange bzw. blau hervorgehoben. Diese semantische Farbgebung über die Modul-Akzentfarben abbilden.
4. **Pfeilrichtungen und Zusatzschritte bewahren:** Im Venn-Diagramm (Folie 12) und in den Entscheidungsketten (Folie 32) kodieren Pfeilrichtungen und eine zusätzliche, farblich abgesetzte Box ("Subjektive Risikowahrnehmung") die fachliche Kernaussage. Diese erhalten.
5. **Dekorative Fotos als Platzhalter:** Titel-/Kapitelbilder, Buchcover, Filmplakate und Porträtfotos sind dekorativ und tragen über den genannten Text hinaus keine Fachaussage. Als Platzhalter-Thumbnails umsetzen, nicht als Inhalt modellieren.
6. **Quellen- und Lebensdaten-Hinweise erhalten:** Quellen wie "Vgl. Cartwright (2011), S. 4", "In Anlehnung an H. Beck (2014), S. 11", die TED-URL, "www.zwentner.com", die Star-Trek-URL und Lebensdaten (z. B. "John Stuart Mill (1806-1876)") als `.source-note` beibehalten.
7. **Folienabweichungen nicht glätten:** Die Vollagenda (Folie 5, 10 Punkte) und die Kapitelagenda (Folie 10, 9 Punkte ohne "Altersvorsorge und private Finanzplanung") unterscheiden sich bewusst; ebenso ist die Schreibweise "Tradionelle Ökonomik" (Folie 32) und "Adam M. Smith" (Folie 17) folienkonform und nicht zu korrigieren.
8. **Nichts erfinden:** Wo die Folie keine konkreten Werte beschriftet (z. B. Personenzahlen im Trolley-Cartoon auf Folie 24, fehlende Spaltenüberschrift "Anteil" auf Folie 4), keine Zahlen behaupten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ModuleTitleHero` | 1 | Modul-Titelfolie mit Titel, Untertitel, Dozent |
| `CurriculumRoadmap` | 2 | Curriculum über drei Semester mit hervorgehobenem aktuellen Modul |
| `LearningObjectivesList` | 3 | Modulziele als Bullet-/Checkliste |
| `CourseRulesPanel` | 4 | Spielregeln: Lehrmethoden- und Leistungsbewertungstabelle plus Klausur-Liste |
| `AgendaList` | 5, 10 | Agenda als nummerierte Liste, optional mit aktivem Kapitel |
| `LiteratureList` | 6, 7 | Literaturlisten (Essentielles / Ergänzungen) |
| `MediaRecommendations` | 8 | Filme/Serien/Videos mit TED-Link |
| `ChapterDivider` | 9 | Kapitel-Trennfolie |
| `DefinitionPair` | 11 | Farbkodierte Definitions-Cards Ökonomie/Psychologie |
| `DisciplineVennDiagram` | 12 | Venn-Diagramm Psychologie/Ökonomie mit Schnittmenge |
| `TopicScopeList` | 13 | Fragenkatalog der Verhaltensökonomik |
| `QuoteCardList` | 14 | Definitionszitate mit Quelle |
| `DefinitionAndGoals` | 15 | Definition und Ziele der Behavioral Finance |
| `ResearcherGallery` | 16 | Porträt-Raster wichtiger Vertreter |
| `PrecursorTimeline` | 17 | Vorläufer Smith/Keynes/Clark chronologisch |
| `GlossaryCards` | 18 | Ökonomische Grundbegriffe als Definitionsliste |
| `EconomicPrincipleDiagram` | 19 | Spannungsfeld Güterknappheit, Maximal-/Minimalprinzip |
| `AssumptionList` | 20 | Annahmen des Homo Oeconomicus |
| `QuotePortraitCard` | 21 | Mill-Präferenzen mit Porträt und Zitat |
| `ExampleCharacterCard` | 22 | Beispiel Android Data |
| `ModelEvaluationCard` | 23 | Ausgangspunkt, Vorteil, Nachteile |
| `TrolleyProblemIllustration` / `DilemmaCard` | 24 | Trolley-Problem als Dilemma |
| `RealWorldApplicationCard` | 25 | Trolley-Problem beim autonomen Fahren |
| `RhetoricalQuestionCard` | 26 | Cartoon zur (Ir-)Rationalität |
| `ContrastList` | 27 | Emotionen ausblenden vs. Emotionen wirken |
| `ExperimentMethodsCard` | 28 | Zwecke und Typen ökonomischer Experimente |
| `EmotionCategoryTable` | 29 | Arten von Emotionen |
| `InsightList` | 30 | Emotionen und Entscheidungen |
| `EconParadigmComparison` / `ComparisonTable` | 31 | Vergleich Traditionelle Ökonomik vs. Behavioral Economics |
| `DecisionFlowComparison` / `ProcessFlow` | 32 | Entscheidungsketten Neoklassik vs. Verhaltensökonomik |

---

# Folienweise Ergänzungen

## Folie 1 - Behavioral Finance (Titelfolie)

### In der MD vorhanden
Vorhanden sind Titel und Untertitel: "Behavioral Finance", "Modul Behavioral Finance – SS 2026", "Prof. Dr. Christian Schmitt", sowie die Versionskennung "V26-03-22".

### Fehlende visuelle Inhalte
Reine Titelfolie mit dekorativem Bildband. Oberhalb des Titelblocks liegt ein horizontaler Streifen aus vier Fotos (von links): ein Notizbuch/Heft mit HBW-Logo auf dem Cover, eine junge Frau mit Brille (Porträt), eine Gruppe Studierender im Freien, ein modernes Hochschulgebäude. Die Fotos sind rein dekorativ und tragen keine fachliche Aussage. Rechts oben das HBW-Logo, unten links die Fußzeile "Behavioral Finance / CS / Folie 1", unten rechts der Copyright-Footer "© 2026 – Hochschule der Bayerischen Wirtschaft".

### Visuelle Rekonstruktion
```text
[Foto Heft+HBW] [Foto Frau] [Foto Studierende] [Foto Gebäude]
------------------------------------------------------------
Modul Behavioral Finance – SS 2026
Prof. Dr. Christian Schmitt
```

### Inhaltliche Rekonstruktion
- Titel: Behavioral Finance
- Untertitel: Modul Behavioral Finance – SS 2026
- Dozent: Prof. Dr. Christian Schmitt
- Version: V26-03-22

### Fachliche Aussage
Titelfolie des Moduls Behavioral Finance im Sommersemester 2026.

### React-Vorschlag
Komponente: `ModuleTitleHero`. Großer Titel + Untertitel + Dozentenzeile, optional dekorativer Bildstreifen als Platzhalter-Banner. Kein fachlicher Inhalt zu modellieren.

---

## Folie 2 - Einordnung im Rahmen des Schwerpunktes Finance & Risk Management

### In der MD problematisch/fehlend
Die MD listet die Begriffe als Fließtext untereinander ("3. Semester / Finanzinstrumente und Risikomanagement / 4. Semester / Asset Management Behavioral Finance / 5. Semester / Analyse von Finanzdaten und Data Science / Corporate Financial Management"). Die räumliche Zuordnung (welches Modul in welchem Semester), die Box-Anordnung in Spalten und die farbliche Hervorhebung gehen verloren.

### Fehlende visuelle Inhalte
Curriculum-Übersicht in drei Zeilen (je ein Semester), Module als abgerundete Rechteck-Boxen mit weißer fetter Schrift und leichtem Schlagschatten:
- "3. Semester": eine einzelne blaue Box "Finanzinstrumente und Risikomanagement", horizontal etwa mittig/leicht links positioniert (nicht über volle Breite zentriert).
- "4. Semester": zwei Boxen nebeneinander – links blaue Box "Asset Management", rechts orange hervorgehobene Box "Behavioral Finance" (orange = das aktuelle Modul).
- "5. Semester": zwei blaue Boxen nebeneinander – links "Analyse von Finanzdaten und Data Science", rechts "Corporate Financial Management".
Alle Semesterzeilen sind links mit einem schwarzen Aufzählungs-Quadrat (Bullet) markiert.

### Visuelle Rekonstruktion
```text
■ 3. Semester
        [ Finanzinstrumente und Risikomanagement ] (blau)

■ 4. Semester
   [ Asset Management ] (blau)   [ Behavioral Finance ] (ORANGE = aktuell)

■ 5. Semester
   [ Analyse von Finanzdaten     [ Corporate Financial
     und Data Science ] (blau)     Management ] (blau)
```

### Inhaltliche Rekonstruktion
| Semester | Modul(e) |
|---|---|
| 3. Semester | Finanzinstrumente und Risikomanagement |
| 4. Semester | Asset Management; Behavioral Finance (orange hervorgehoben) |
| 5. Semester | Analyse von Finanzdaten und Data Science; Corporate Financial Management |

### Fachliche Aussage
Behavioral Finance ist ein Modul des 4. Semesters innerhalb des Schwerpunkts Finance & Risk Management und baut auf den Modulen des 3. Semesters auf.

### React-Vorschlag
Komponente: `CurriculumRoadmap`. Drei Reihen (Semester) mit Modul-Cards; die Card "Behavioral Finance" erhält den orangen Modul-Akzent (`--color-module-orange`) zur Hervorhebung des aktuellen Moduls.

---

## Folie 3 - Modulziele

### In der MD vorhanden
Vollständig als Aufzählung vorhanden (acht Lernziel-Bullets mit Einleitung "Die Studierenden können nach erfolgreichem Abschluss des Moduls:"). Keine Grafik.

### Fehlende visuelle Inhalte
Keine. Reine Textfolie mit Bullet-Liste; nur Layout (schwarze Quadrat-Bullets).

### Inhaltliche Rekonstruktion
Die Studierenden können nach erfolgreichem Abschluss des Moduls:
- zwischen den finanzwirtschaftlichen Forschungsansätzen der Neoklassik und Behavioral Finance differenzieren,
- Untersuchungsmethoden der Behavioral Finance kritisch würdigen,
- Spekulationsblasen identifizieren, deren Ursachen und Möglichkeiten sowie Grenzen der Regulierung kritisch reflektieren,
- die Konsequenzen der Anwendung von Heuristiken bei der Informationswahrnehmung, -bewertung und Entscheidung diskutieren,
- Fehler bei der Altersvorsorge und privaten Finanzplanung erkennen und gegensteuern,
- Erklärungsansätze für Kapitalmarktanomalien erörtern,
- die Effekte durch die Anwendung von Heuristiken in der Kapitalanlage erläutern und Lösungsansätze diskutieren und
- die Auswirkungen von Verhaltensanomalien auf Corporate Finance Entscheidungen eines Unternehmens beurteilen.

### Fachliche Aussage
Übersicht der Kompetenzziele des Moduls: Differenzierung Neoklassik/Behavioral Finance, kritische Würdigung der Methoden, Anwendung auf Blasen, Heuristiken, Altersvorsorge, Anomalien und Corporate Finance.

### React-Vorschlag
Komponente: `LearningObjectivesList`. Bullet-Liste, optional als abhakbare Checkliste.

---

## Folie 4 - Behavioral Finance (Spielregeln)

### In der MD problematisch/fehlend
Die MD gibt die Werte als Fließtext wieder ("Lehrmethoden: SWS / Präsenz 52 / E-Learning/Selbststudium 80 / Leistungsbewertung Klausur / • Dauer 90 Minuten / Klausur 100% ..."). Die zwei getrennten Tabellen und die Zuordnung der Werte zu Spalten gehen verloren; die rechte Bullet-Liste vermischt sich mit den Tabellenwerten.

### Fehlende visuelle Inhalte
Hellblau hinterlegte Inhaltsfläche mit schwarzer fetter Überschrift "Spielregeln:". Links zwei kleine Tabellen mit grauer Kopfzeile (weiße fette Schrift), rechts eine Bullet-Liste "Klausur".
- Tabelle 1: graue Kopfzeile "Lehrmethoden:" | "SWS"; Zeilen "Präsenz" = 52, "E-Learning/Selbststudium" = 80.
- Tabelle 2: graue Kopfzeile "Leistungsbewertung" | (zweite Kopfzelle leer); Zeile "Klausur" = 100%.
- Rechts: schwarze fette Überschrift "Klausur" mit vier Bullets.

### Visuelle Rekonstruktion
```text
Spielregeln:
┌──────────────────────────────┬───────┐      Klausur
│ Lehrmethoden:                │ SWS   │      • Dauer 90 Minuten
├──────────────────────────────┼───────┤      • Wissensfragen beantworten
│ Präsenz                      │  52   │      • Praxisbezogene Fragen bewältigen
│ E-Learning/Selbststudium     │  80   │      • Multiple Choice Fragen beantworten
└──────────────────────────────┴───────┘

┌──────────────────────────────┬───────┐
│ Leistungsbewertung           │       │
├──────────────────────────────┼───────┤
│ Klausur                      │ 100%  │
└──────────────────────────────┴───────┘
```

### Inhaltliche Rekonstruktion
| Lehrmethoden | SWS |
|---|---|
| Präsenz | 52 |
| E-Learning/Selbststudium | 80 |

| Leistungsbewertung | (Kopfzelle leer) |
|---|---|
| Klausur | 100% |

Klausur:
- Dauer 90 Minuten
- Wissensfragen beantworten
- Praxisbezogene Fragen bewältigen
- Multiple Choice Fragen beantworten

### Fachliche Aussage
Organisatorische Rahmenbedingungen: 52 (Präsenz) und 80 (E-Learning/Selbststudium) in der Spalte "SWS"; Leistungsbewertung zu 100% über eine 90-minütige Klausur mit Wissens-, Praxis- und Multiple-Choice-Fragen. (Hinweis: Die zweite Kopfzelle der Leistungsbewertungs-Tabelle ist auf der Folie leer; eine Spaltenüberschrift "Anteil" wird auf der Folie nicht genannt.)

### React-Vorschlag
Komponente: `CourseRulesPanel`. Zwei `DataTable`-Blöcke (Lehrmethoden, Leistungsbewertung) plus eine Bullet-Liste "Klausur", auf hellblauer Card-Fläche.

---

## Folie 5 - Agenda

### In der MD vorhanden
Vollständig als nummerierte Liste (1–10) vorhanden. Keine Grafik.

### Fehlende visuelle Inhalte
Keine; reine nummerierte Textliste.

### Inhaltliche Rekonstruktion
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Altersvorsorge und private Finanzplanung
8. Spekulationsblasen an Finanzmärkten
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance

### Fachliche Aussage
Gesamtagenda des Moduls mit zehn Themenblöcken (Vollversion inkl. "Altersvorsorge und private Finanzplanung" als Punkt 7).

### React-Vorschlag
Komponente: `AgendaList` (numerische Liste). Kann später für Kapitelfortschritt wiederverwendet werden.

---

## Folie 6 - Literaturempfehlungen: Essentielles

### In der MD vorhanden
Die acht Literaturangaben sind als Aufzählung vollständig vorhanden.

### Fehlende visuelle Inhalte
Rechts auf der Folie sind Buchcover-Abbildungen der genannten Titel collagenartig angeordnet (u. a. Kahneman "Schnelles Denken, langsames Denken", "Behavioral Finance", "Behavioral Economics", "Nudge", "Predictably Irrational" von Ariely, "Spieltheorie im Alltag", "Behavioural Investing"). Die Cover sind dekorativ und tragen keine zusätzliche fachliche Information über die Literaturliste hinaus.

### Inhaltliche Rekonstruktion
Essentielle Literatur:
- Daniel Kahneman (2012): Schnelles Denken, langsames Denken
- Rolf Daxhammer / Mate Facsar (2018): Behavioral Finance
- Edward Cartwright (2018): Behavioral Economics
- Hanno Beck (2014): Behavioral Economics: Eine Einführung
- Richard Thaler (2010): Nudge: Wie man kluge Entscheidungen anstößt
- Dan Ariely (2010): Predictably Irrational
- Len Fisher (2010): Spieltheorie im Alltag
- James Montier (2007): Behavioural Investing

### Fachliche Aussage
Kernliteratur des Moduls; Schwerpunkt auf Kahneman, Daxhammer/Facsar, Cartwright, Beck, Thaler und Ariely.

### React-Vorschlag
Komponente: `LiteratureList` (Variante "Essentielles"). Liste mit Autor, Jahr, Titel; optionale Cover-Thumbnails als Platzhalter.

---

## Folie 7 - Literaturempfehlungen: Ergänzungen

### In der MD vorhanden
Die sechs ergänzenden Literaturangaben sind vollständig als Aufzählung vorhanden.

### Fehlende visuelle Inhalte
Rechts wieder eine Collage der zugehörigen Buchcover (u. a. Taleb "Narren des Zufalls", Ariely "Fühlen nützt nichts, hilft aber", "Wer denken will, muss fühlen", Kahneman/Sibony/Sunstein "Noise", Dobelli "Die Kunst des klugen Handelns", Taleb "Der Schwarze Schwan"). Dekorativ, ohne zusätzlichen Fachinhalt.

### Inhaltliche Rekonstruktion
Ergänzende Literatur:
- Daniel Kahneman (2021): Noise: Was unsere Entscheidungen verzerrt – und wie wir sie verbessern können
- Dan Ariely (2015): Fühlen nützt nichts, hilft aber: Warum wir uns immer wieder unvernünftig verhalten
- Dan Ariely (2015): Wer denken will, muss fühlen: Die heimliche Macht der Unvernunft
- Nassim Taleb (2010): Der Schwarze Schwan
- Rolf Dobelli (2020): Die Kunst des klugen Handelns
- Nassim Taleb (2013): Narren des Zufalls

### Fachliche Aussage
Vertiefende/ergänzende Literatur zum Modul (Noise, Heuristiken/Emotionen, Risiko/Zufall).

### React-Vorschlag
Komponente: `LiteratureList` (Variante "Ergänzungen"). Gleiche Struktur wie Folie 6.

---

## Folie 8 - Literaturempfehlungen: "Sonstiges"

### In der MD vorhanden
Vorhanden sind die Kategorien und Einträge: Spielfilme ("A Beautiful Mind – Genie und Wahnsinn (2001)", "Focus (2015)"), Fernsehserien ("The Irrational"), Videos (TED talks mit URL).

### Fehlende visuelle Inhalte
Drei Filmplakate als Bilder: "The Irrational" (Serie, links), "Focus" (Film, Mitte, mit Will Smith und Margot Robbie), "A Beautiful Mind" (rechts, oben ein goldener Lorbeer "OSCARS 2002 · BESTER FILM"). Die drei Kategorie-Überschriften "Spielfilme", "Fernsehserien" und "Videos" sind in blauer fetter Schrift hervorgehoben. Die Plakate sind dekorativ.

### Inhaltliche Rekonstruktion
Spielfilme:
- A Beautiful Mind – Genie und Wahnsinn (2001)
- Focus (2015)

Fernsehserien:
- The Irrational

Videos:
- TED talks: http://www.ted.com/topics/behavioral%20economics

### Fachliche Aussage
Populärkulturelle und Video-Empfehlungen zur Veranschaulichung verhaltensökonomischer Themen.

### React-Vorschlag
Komponente: `MediaRecommendations`. Drei kategorisierte Gruppen (Filme/Serien/Videos) mit anklickbarem TED-Link; Plakate als Platzhalter-Thumbnails.

---

## Folie 9 - Behavioral Finance · Kapitel 1: Einführung (Kapiteltrenner)

### In der MD vorhanden
Vorhanden: "Behavioral Finance", "Kapitel 1", "Einführung", "V26-03-22".

### Fehlende visuelle Inhalte
Kapitel-Trennfolie im gleichen Stil wie die Titelfolie: oben ein Streifen aus vier dekorativen Fotos (Heft mit HBW-Logo, Porträt einer Frau, zwei Personen im Gespräch, Hochschulgebäude). Darunter der Kapiteltitel "Kapitel 1 / Einführung". Rein dekorativ.

### Inhaltliche Rekonstruktion
- Kapitel: Kapitel 1
- Titel: Einführung

### Fachliche Aussage
Beginn von Kapitel 1 "Einführung".

### React-Vorschlag
Komponente: `ChapterDivider`. Kapitelnummer + Titel, optional dekorativer Bildstreifen.

---

## Folie 10 - Agenda (Kapitel 1 hervorgehoben)

### In der MD problematisch/fehlend
Die MD gibt eine nummerierte Liste mit nur neun Punkten wieder (hier fehlt der Punkt "Altersvorsorge und private Finanzplanung", den die Vollagenda auf Folie 5 hatte). Die farbliche Hervorhebung des aktuellen Kapitels geht verloren.

### Fehlende visuelle Inhalte
Identische Agenda-Liste wie Folie 5, jedoch in einer verkürzten 9-Punkte-Variante (ohne "Altersvorsorge und private Finanzplanung"). Punkt 1 "Einführung" ist in blauer fetter Schrift hervorgehoben (= aktuelles Kapitel); die übrigen Punkte stehen in schwarzer Schrift.

### Visuelle Rekonstruktion
```text
1. Einführung            <-- blau fett hervorgehoben (aktuell)
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Spekulationsblasen an Finanzmärkten
8. Kapitalmarktanomalien
9. Behavioral Corporate Finance
```

### Inhaltliche Rekonstruktion
1. Einführung (hervorgehoben)
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Spekulationsblasen an Finanzmärkten
8. Kapitalmarktanomalien
9. Behavioral Corporate Finance

### Fachliche Aussage
Navigations-/Fortschrittsfolie; markiert, dass nun Kapitel 1 "Einführung" behandelt wird. Diese Kapitelagenda enthält nur 9 Punkte – der auf Folie 5 noch enthaltene Punkt "Altersvorsorge und private Finanzplanung" fehlt hier.

### React-Vorschlag
Komponente: `AgendaList` mit `activeIndex`-Hervorhebung des aktuellen Kapitels (blauer Akzent).

---

## Folie 11 - Verhaltensökonomie im Kontext verschiedener Disziplinen (Ökonomie/Psychologie)

### In der MD vorhanden
Die Definitionstexte zu "Ökonomie" und "Psychologie" sind vollständig vorhanden. Im Original sind einzelne Schlüsselbegriffe fett (knapper Ressourcen, normative Disziplin, deskriptiv) und die beiden Überschriften farbig (blau bzw. grün) – diese Auszeichnung geht in der MD verloren.

### Fehlende visuelle Inhalte
Keine Grafik; reine Textfolie mit zwei farbig markierten Bullet-Überschriften: "Ökonomie:" (blau) und "Psychologie:" (grün, vorbereitend für die Venn-Farben auf Folie 12). Fettungen einzelner Begriffe (u. a. "knapper Ressourcen", "normative Disziplin", "deskriptiv").

### Inhaltliche Rekonstruktion
- Ökonomie: "Volkswirtschaftslehre ist die Wissenschaft vom Einsatz knapper Ressourcen durch die Gesellschaft zur Produktion wertvoller Wirtschaftsgüter und von der Verteilung dieser Güter unter ihren Mitgliedern. Ökonomie ist daher eine normative Disziplin, die vorgibt, wie alle Wirtschaftssubjekte sich verhalten müssen, damit es zu optimalen Allokationen und Verteilungen kommt."
- Psychologie: "Psychologie ist die Wissenschaft von der Erklärung des Erlebens und Verhaltens des Menschen. Sie ist daher deskriptiv angelegt und enthält heute sowohl geisteswissenschaftliche wie empirische Instrumente."

### Fachliche Aussage
Gegenüberstellung: Ökonomie ist normativ (wie man sich verhalten soll), Psychologie ist deskriptiv (wie der Mensch tatsächlich erlebt/handelt). Vorbereitung der disziplinären Verortung der Verhaltensökonomie.

### React-Vorschlag
Komponente: `DefinitionPair`. Zwei farblich kodierte Definitions-Cards (Ökonomie blau, Psychologie grün), passend zu den Venn-Farben der Folgefolie.

---

## Folie 12 - Verhaltensökonomie im Kontext verschiedener Disziplinen (Venn-Diagramm)

### In der MD problematisch/fehlend
Die MD gibt nur isolierte, zerbrochene Wortfragmente wieder ("Wirtschafts- psychologie / Psycho- Öko- / logie nomie / Verhaltens- ökonomie"). Das eigentliche Schaubild – ein Venn-Diagramm zweier überlappender Kreise mit Pfeilen – ist komplett verloren.

### Fehlende visuelle Inhalte
Zwei große, sich überlappende Kreise (nur Kontur, keine Füllung):
- Linker Kreis: blaue Kontur, große blaue Beschriftung "Psycho-logie" (zweizeilig).
- Rechter Kreis: grüne Kontur, große grüne Beschriftung "Öko-nomie" (zweizeilig).
- Die linsenförmige Schnittmenge in der Mitte ist durch eine waagerechte gestrichelte blaue Linie horizontal in zwei Hälften geteilt:
  - oben in der Schnittmenge: "Wirtschafts-psychologie" (blau, fett, zweizeilig), links davon ein grauer Block-Pfeil, der nach rechts in die Schnittmenge hineinzeigt (also von der Psychologie-Seite kommend).
  - unten in der Schnittmenge: "Verhaltens-ökonomie" (grün, fett, zweizeilig), rechts davon ein grauer Block-Pfeil, der nach links in die Schnittmenge hineinzeigt (also von der Ökonomie-Seite kommend).
Die Pfeilrichtungen und die Farbzuordnung kodieren, aus welcher "Muttertradition" das jeweilige Schnittmengenfach kommt: Wirtschaftspsychologie ist eher psychologisch geprägt (Pfeil von links/Psychologie), Verhaltensökonomie eher ökonomisch geprägt (Pfeil von rechts/Ökonomie).

### Visuelle Rekonstruktion
```text
   (blauer Kreis)              (grüner Kreis)
  ┌───────────────┐         ┌───────────────┐
  │               │  →  Wirtschafts-        │
  │  PSYCHO-      ╱│     psychologie  ╲     │
  │  LOGIE      ╱  │ - - - - - - - - - - ╲  │  ÖKO-
  │   (blau)   ╲   │     Verhaltens-     ╱  │  NOMIE
  │              ╲ │  ökonomie     ←    ╱   │  (grün)
  └───────────────┘         └───────────────┘
       Schnittmenge = oben Wirtschaftspsychologie (Pfeil von links),
                      unten Verhaltensökonomie (Pfeil von rechts)
```

### Inhaltliche Rekonstruktion
| Kreis / Bereich | Beschriftung | Farbe | Pfeil |
|---|---|---|---|
| Linker Kreis | Psychologie | blau | – |
| Rechter Kreis | Ökonomie | grün | – |
| Schnittmenge oben | Wirtschaftspsychologie | blau | grauer Pfeil von links (Psychologie) nach rechts |
| Schnittmenge unten | Verhaltensökonomie | grün | grauer Pfeil von rechts (Ökonomie) nach links |
| Trennlinie in der Schnittmenge | – | blau, gestrichelt | – |

### Fachliche Aussage
Verhaltensökonomie und Wirtschaftspsychologie liegen in der Schnittmenge von Psychologie und Ökonomie; die Verhaltensökonomie ist die ökonomisch geprägte, die Wirtschaftspsychologie die psychologisch geprägte Überschneidung beider Disziplinen.

### React-Vorschlag
Komponente: `DisciplineVennDiagram` (SVG). Zwei farbige Kreis-Konturen (Psychologie blau, Ökonomie grün), gestrichelte blaue Trennlinie in der Schnittmenge, zwei graue Pfeil-Annotationen mit den Labels "Wirtschaftspsychologie" (oben) und "Verhaltensökonomie" (unten).

---

## Folie 13 - Verhaltensökonomik: Worum geht es? (Fragenkatalog)

### In der MD vorhanden
Vollständig vorhanden, inkl. der eingerückten Beispielfragen und der Quellenangabe. Im Original sind die rhetorischen Beispielfragen unterstrichen – diese Auszeichnung geht in der MD verloren.

### Fehlende visuelle Inhalte
Keine Grafik. Die Abschnittsüberschrift "Worum geht es bei der Verhaltensökonomik (Behavioral Economics)?" ist blau fett. Die einzelnen "Warum…"-Beispielfragen sind im Original unterstrichen.

### Inhaltliche Rekonstruktion
Worum geht es bei der Verhaltensökonomik (Behavioral Economics)?
- Verstehen des wirtschaftlichen Verhaltens und deren Konsequenzen: Warum kauft jemand einen Hot-Dog? Warum arbeitet jemand? Warum spart jemand? Warum kauft jemand Aktien? Warum spendet jemand? Warum macht jemand eine Aus-/Weiterbildung? Warum hört jemand nicht mit dem Rauchen auf? Warum macht jemand beim Glückspiel mit? (Vgl. Cartwright (2011), S. 4)
- Verstehen von "guten" und "schlechten" Entscheidungen von Menschen und mögliche Hilfestellung für mehr "gute" Entscheidungen
- Anwendung der Erkenntnisse aus Laborexperimenten, der Psychologie und anderer Sozialwissenschaften in der Ökonomie
- Test ggf. Verbesserung der klassischen Ökonomischen Modelle:
  - Welche Phänomene lassen sich durch die klassischen Modelle nicht erklären? Welche Anomalien treten auf?
  - Können psychologische Erkenntnisse helfen Anomalien zu erklären?
  - Können klassische Modelle durch psychologische Erkenntnisse weiterentwickelt werden?

*Quelle: Vgl. Cartwright (2011), S. 4*

### Fachliche Aussage
Die Verhaltensökonomik will reales wirtschaftliches Verhalten verstehen, gute/schlechte Entscheidungen erklären, psychologische Erkenntnisse in die Ökonomie übertragen und klassische Modelle testen bzw. um Anomalien-Erklärungen erweitern.

### React-Vorschlag
Komponente: `TopicScopeList`. Bullet-Liste mit hervorgehobenem "Warum…"-Fragenblock (z. B. als eingerückter Inset/Callout).

---

## Folie 14 - Verhaltensökonomik: Worum geht es? (Definitionen/Zitate)

### In der MD vorhanden
Die drei Zitate sind vollständig mit Quellenangaben vorhanden.

### Fehlende visuelle Inhalte
Die Abschnittsüberschrift "Worum geht es bei der Verhaltensökonomik (Behavioral Economics)?" ist blau fett. Rechts zwei Buchcover als Bilder (oben "Behavioral Economics" / Cartwright, darunter ein weiterer Band "Behavioral Economics", Springer). Dekorativ; keine zusätzliche Fachinformation.

### Inhaltliche Rekonstruktion
Worum geht es bei der Verhaltensökonomik (Behavioral Economics)?
- "Behavioral Economics is about testing the standard economic model on humans, seeing when it works and when it does not, and asking whether it can be tweaked, or given an overhaul, to better fit what we observe." (Cartwright (2011), S. 4)
- "Behavioral Economics is about applying insights from laboratory experiments, psychology, and other social sciences in economics." (Cartwright (2011), S. 4)
- "Behavioral Economics ist der Versuch, das Menschenbild der Ökonomie mit dem Menschenbild der Psychologie wieder zu versöhnen." (Beck (2014), S. 9)

### Fachliche Aussage
Begriffsbestimmung der Verhaltensökonomik über drei Definitionszitate: empirischer Test des Standardmodells am realen Menschen, Übertragung psychologischer/experimenteller Erkenntnisse in die Ökonomie und Versöhnung der Menschenbilder von Ökonomie und Psychologie.

### React-Vorschlag
Komponente: `QuoteCardList`. Drei Zitat-Cards mit Quellenangabe; optional Cover-Thumbnails als Platzhalter.

---

## Folie 15 - Behavioral Finance: Was ist Behavioral Finance?

### In der MD vorhanden
Vollständig vorhanden: Definition, Zitat (Daxhammer/Facsar 2018) und die drei Ziele. Die beiden farbig hervorgehobenen Überschriften ("Was ist Behavioral Finance?" / "Ziele der Behavioral Finance:") sind in der MD nicht als hervorgehoben erkennbar.

### Fehlende visuelle Inhalte
Rechts ein Buchcover "Behavioral Finance" (Daxhammer/Facsar) als Bild. Dekorativ. Zwei blau fett hervorgehobene Abschnittsüberschriften.

### Inhaltliche Rekonstruktion
Was ist Behavioral Finance?
- Verhaltenswissenschaftlich fundierte Finanzmarkttheorie
- "Behavioral Finance basiert auf der Erkenntnis, dass Marktteilnehmer nur zu begrenzt rationalem Verhalten in der Lage sind. Es kristallisiert sich ein Homo Oeconomicus Humanus heraus, der häufig durch kognitive und emotionale Aspekte beeinflusst wird." (Daxhammer/Facsar, 2018)

Ziele der Behavioral Finance:
- Klären, warum Anleger (auf Finanzmärkten) immer wieder begrenzt rationale Entscheidungen treffen
- Beobachtbare Anlegerverhalten und andere Phänomene an Finanzmärkten erklären
- Bestehende Modelle an deren Schwachstellen ergänzen

### Fachliche Aussage
Behavioral Finance ist eine verhaltenswissenschaftlich fundierte Finanzmarkttheorie. Sie geht vom "Homo Oeconomicus Humanus" mit begrenzter Rationalität aus und will begrenzt rationale Anlegerentscheidungen erklären und bestehende Modelle ergänzen.

### React-Vorschlag
Komponente: `DefinitionAndGoals`. Definitions-/Zitatblock plus Ziel-Liste; optionaler Cover-Thumbnail.

---

## Folie 16 - Wichtige Vertreter der Verhaltensökonomik

### In der MD problematisch/fehlend
Die MD enthält praktisch nur die Bild-Quellen-URLs (Wikimedia-Links) und dazwischen verstreut die Namen. Die eigentliche Information – ein Raster aus Porträtfotos mit Namensschildern – ist als zusammenhängende Galerie nicht erkennbar; die Namen sind durch die Quell-URLs zerrissen.

### Fehlende visuelle Inhalte
Galerie/Raster aus NEUN Porträtfotos prominenter Vertreter, jedes mit blau umrandetem Namensschild (blaue Schrift) unter dem Foto. Anordnung in zwei Reihen: obere Reihe fünf Personen, untere Reihe vier Personen.
- Obere Reihe (5): Daniel Kahneman, Vernon Smith, Amos Tversky, Elinor Ostrom, Ernst Fehr.
- Untere Reihe (4): Bruno S. Frey, Robert Shiller, Richard Thaler, Dan Ariely.
Unter den Fotos stehen sehr kleine Bildquellen-Hinweise (Wikimedia Commons).

### Visuelle Rekonstruktion
```text
[Foto] Daniel Kahneman  [Foto] Vernon Smith  [Foto] Amos Tversky  [Foto] Elinor Ostrom  [Foto] Ernst Fehr
[Foto] Bruno S. Frey     [Foto] Robert Shiller [Foto] Richard Thaler [Foto] Dan Ariely
```

### Inhaltliche Rekonstruktion
Genannte Vertreter der Verhaltensökonomik (neun Personen):
- Daniel Kahneman
- Vernon Smith
- Amos Tversky
- Elinor Ostrom
- Ernst Fehr
- Bruno S. Frey
- Robert Shiller
- Richard Thaler
- Dan Ariely

Bildquellen (auf der Folie als kleine Hinweise unter den Fotos angegeben, Wikimedia Commons).

### Fachliche Aussage
Übersicht zentraler Persönlichkeiten, die die Verhaltensökonomik geprägt haben (mehrere davon Nobelpreisträger), als personeller Bezugsrahmen des Fachs.

### React-Vorschlag
Komponente: `ResearcherGallery`. Responsives Raster aus Porträt-Cards (Foto-Platzhalter + Name) mit neun Einträgen; Bildquellen als kleine `source-note` unter der Galerie beibehalten.

## Folie 17 - Vorläufer der Verhaltensökonomik

### In der MD vorhanden
Der vollständige Text der drei Vorläufer ist vorhanden (Zeilen 236-251): Adam M. Smith (1759, "Theory of Moral Sentiments"), John M. Keynes (1936, "Animal Spirits") und John M. Clark (1918, Langzitat). Hinweis: Auf der Folie steht ausdrücklich "Adam M. Smith, 1759:" (mit Mittelinitial "M."), nicht "Adam Smith".

### Fehlende visuelle Inhalte
Reine Textfolie mit drei Bullet-Punkten. Die Namen und Jahreszahlen sind farblich (blau) hervorgehoben: "Adam M. Smith, 1759:", "John M. Keynes, 1936:", "John M. Clark, 1918:". Kein Diagramm, kein Foto, keine Tabelle. Die farbliche Hervorhebung der Autorennamen ist das einzige visuelle Gestaltungselement.

### Visuelle Rekonstruktion
```text
Adam M. Smith (1759)  -> Empfindungen/Gefühle/Moralität als Aspekte
John M. Keynes (1936) -> "Animal Spirits": Triebe und Stimmungen
John M. Clark (1918)  -> Ökonom kann Psychologie nicht ignorieren
```

### Inhaltliche Rekonstruktion
- Adam M. Smith, 1759: In "Theory of Moral Sentiments" schreibt Smith, Empfindungen, Gefühle und Moralität seien Aspekte menschlichen Verhaltens, die der Ökonom nicht ignorieren dürfe, sondern als untersuchungswürdige Gegenstände behandeln müsse.
- John M. Keynes, 1936: "Animal Spirits" in "Allgemeine Theorie der Beschäftigung, des Zinses und des Geldes" beschreibt, dass Menschen auch Trieben und Stimmungen bei ihren Entscheidungen unterworfen sind.
- John M. Clark, 1918: Langzitat - "Der Ökonom mag den Versuch unternehmen, die Psychologie zu ignorieren, doch die Natur des Menschen zu ignorieren ist ein Ding der Unmöglichkeit ... Wenn der Ökonom sein Menschenbild vom Psychologen leiht, mag seine konstruktive Arbeit eine gewisse Chance haben, von ihrem Wesen her rein ökonomisch zu bleiben. Tut er das aber nicht, ... wird er gezwungen sein, seine eigene Psychologie zu entwickeln, und es wird eine schlechte sein." (entnommen aus Economics and Modern Psychology, Journal of Political Economy, 1918)

### Fachliche Aussage
Verhaltensökonomische Ideen sind keine Erfindung des 20. Jahrhunderts: Schon Smith, Keynes und Clark betonten, dass Gefühle, Triebe und Psychologie für ökonomisches Verhalten relevant sind und nicht ausgeklammert werden dürfen.

### React-Vorschlag
Komponente: `PrecursorTimeline`. Drei chronologisch sortierte Cards (1759 / 1918 / 1936) mit Autor, Werk und Kernzitat; das Clark-Zitat als ausklappbares Blockquote.

---

## Folie 18 - Einige Grundbegriffe

### In der MD vorhanden
Alle neun Bullet-Definitionen sind vollständig im Text enthalten (Zeilen 254-268): Wirtschaft, menschliche Bedürfnisse, Güter, freie Güter, knappe Güter, Wirtschaftswissenschaften, grundlegender Ansatzpunkt, Opportunitätskosten.

### Fehlende visuelle Inhalte
Reine Textfolie. Die definierten Schlüsselbegriffe sind blau/farblich hervorgehoben (Wirtschaft, Menschliche Bedürfnisse, Güter, Freie Güter, Knappe Güter, Grundlegender Ansatzpunkt, Opportunitätskosten). Kein Diagramm, kein Bild, keine Tabelle.

### Inhaltliche Rekonstruktion
- Wirtschaft: derjenige Bereich des menschlichen Handelns, der in Verfügungen über knappe Güter zur Erfüllung menschlicher Bedürfnisse besteht.
- Menschliche Bedürfnisse: werden in der VWL als gegeben betrachtet.
- Güter: Waren, Dienstleistungen und Rechte.
- Freie Güter: im Verhältnis zu den Bedürfnissen in so großer Zahl vorhanden, dass jeder seine Bedürfnisse beliebig befriedigen kann.
- Knappe Güter: im Verhältnis zu den Bedürfnissen nur beschränkt verfügbar.
- Wirtschaftswissenschaften: beschäftigen sich damit, wie man möglichst gut mit knappen Ressourcen (Gütern und Produktionsfaktoren) umgeht.
- Grundlegender Ansatzpunkt: Welche Kosten entstehen durch welche ökonomische Aktivität?
- Opportunitätskosten: geben an, auf wie viele Einheiten eines anderen Gutes man für eine Einheit des betrachteten Gutes verzichten muss.

### Fachliche Aussage
Die Folie legt das ökonomische Grundvokabular fest: Knappheit ist der Ausgangspunkt allen Wirtschaftens, und Entscheidungen lassen sich über Opportunitätskosten (Verzicht auf Alternativen) bewerten.

### React-Vorschlag
Komponente: `GlossaryCards` oder Definitionsliste mit Begriff (Term) und Erklärung. Schlüsselbegriffe als hervorgehobene `<dt>`-Elemente. Opportunitätskosten ggf. als eigene Callout-Card markieren.

---

## Folie 19 - Abgrenzung der Verhaltensökonomik von der Neoklassik

### In der MD problematisch/fehlend
Die MD zerlegt das zentrale Schaubild in lose Wortfetzen (Zeilen 271-284): "Begrenzte / Unbegrenzte Spannungsfeld / Güter / Bedürfnisse Güterknappheit". Pfeilrichtungen und Anordnung gehen verloren. Die Maximalprinzip/Minimalprinzip-Tabelle ist als Markdown-Tabelle vorhanden, aber ohne den grafischen Säulenkontext.

### Fehlende visuelle Inhalte
Untertitel (blau, fett): "Das ökonomische Prinzip des Homo Oeconomicus".
Zentrales Schaubild:
- Links: blauer Rechtspfeil mit Text "Unbegrenzte Bedürfnisse".
- Rechts: blauer Linkspfeil mit Text "Begrenzte Güter".
- Mitte: orangefarbenes Stern-/Explosionssymbol mit schwarzem fettem Text "Spannungsfeld Güterknappheit" - die beiden Pfeile zeigen aufeinander zu (Konflikt).
- Darunter ein nach unten zeigender blauer Pfeil zu einer hellgrauen Box: "Definition des Wirtschaftens: Einsatz knapper Güter nach dem Leitgedanken 'Ökonomisches Prinzip'".
- Von dieser Box gehen zwei blaue Abwärtspfeile zu zwei hellgrauen Boxen:
  - Links "Maximalprinzip": kleine Säulengrafik. "Input fix" = kleine hellblaue Säule (mit Doppelpfeil/fixiert), "Output max" = größere orange Säule mit Aufwärtspfeil.
  - Rechts "Minimalprinzip": "Input min" = kleine orange Säule mit Abwärtspfeil, "Output fix" = größere hellblaue Säule mit Doppelpfeil/fixiert.

### Visuelle Rekonstruktion
```text
[Unbegrenzte Bedürfnisse] ──►  ★ Spannungsfeld   ◄── [Begrenzte Güter]
                                 Güterknappheit
                                      │
                                      ▼
              Definition des Wirtschaftens:
              Einsatz knapper Güter nach dem Leitgedanken
                     "Ökonomisches Prinzip"
                      │                    │
                      ▼                    ▼
            ┌───────────────┐     ┌───────────────┐
            │ Maximalprinzip │     │ Minimalprinzip │
            │ Input fix      │     │ Input min ↓    │
            │ Output max ↑   │     │ Output fix     │
            └───────────────┘     └───────────────┘
```

### Inhaltliche Rekonstruktion
| Prinzip | Input | Output |
|---|---|---|
| Maximalprinzip | fix | max |
| Minimalprinzip | min | fix |

### Fachliche Aussage
Das ökonomische Prinzip löst das Spannungsfeld zwischen unbegrenzten Bedürfnissen und begrenzten (knappen) Gütern: Entweder wird mit fixem Input maximaler Output erzielt (Maximalprinzip) oder ein fixer Output mit minimalem Input erreicht (Minimalprinzip).

### React-Vorschlag
Komponente: `EconomicPrincipleDiagram`. Zwei aufeinander zulaufende Pfeile mit zentralem Spannungsfeld-Badge, darunter Definitions-Card und zwei Prinzip-Cards (Maximal-/Minimalprinzip) mit Input/Output-Säulchen. Optional die Input/Output-Tabelle als `ProsConsTable`-ähnliche Gegenüberstellung.

---

## Folie 20 - Homo Oeconomicus: Annahmen des Homo Oeconomicus

### In der MD vorhanden
Vollständig vorhanden (Zeilen 287-304): Definition sowie alle Annahmen inkl. der Unterscheidung formelle vs. substantielle Rationalität.

### Fehlende visuelle Inhalte
Reine Textfolie. "Definition:" ist farblich (blau) hervorgehoben. Aufzählung mit "..."-Satzanfängen, die alle das Subjekt "Der Homo Oeconomicus" fortsetzen. Eingerückte Unterpunkte zu den zwei Formen der Rationalität. Kein Diagramm.

### Inhaltliche Rekonstruktion
Definition: Homo Oeconomicus bezeichnet einen Nutzenmaximierer, der rational in Bezug auf seine eigene Zielfunktion handelt.
Der Homo Oeconomicus ...
- handelt (nur) entsprechend seinen eigenen Interessen und Präferenzen.
- handelt rational, d.h. entsprechend dem ökonomischen Prinzip.
- Zwei Formen der Rationalität:
  - Formelle Rationalität: Eine Entscheidung und die daraus folgende Handlung sind dann rational, wenn der Akteur sie systematisch aus den ihm zur Verfügung stehenden und bekannten Handlungsalternativen ausgewählt hat. Damit ist nahezu jedes menschliche Handeln rational.
  - Substantielle Rationalität: Handeln orientiert sich an der Nutzenmaximierung.
- reagiert auf Umweltbedingungen.
- hat feststehende Präferenzen.
- ist risikoavers.
- hat vollständige Informationen, das heißt er kann die Wirkungen und Folgen seines Handelns abschätzen.

### Fachliche Aussage
Der Homo Oeconomicus ist das idealisierte Menschenbild der Neoklassik: ein vollständig informierter, risikoaverser Nutzenmaximierer mit feststehenden Präferenzen. Die Unterscheidung formelle/substantielle Rationalität präzisiert, was "rational" bedeutet.

### React-Vorschlag
Komponente: `AssumptionList`. Definition als Hervorhebungs-Callout oben; Annahmen als Icon-Liste; die zwei Rationalitätsformen als kontrastierendes Paar (zwei kleine Cards).

---

## Folie 21 - Homo Oeconomicus: Der idealtypische Homo Oeconomicus nach John Stuart Mill

### In der MD vorhanden
Text vollständig vorhanden (Zeilen 307-317): die drei Mill-Präferenzen und das Mill-Zitat.

### Fehlende visuelle Inhalte
Rechts ein historisches Schwarz-Weiß-Porträt (Stich/Foto) von John Stuart Mill (Halbporträt, sitzend, dunkler Anzug/Mantel) mit Bildunterschrift "John Stuart Mill (1806-1876)". Der Untertitel "Der idealtypische Homo Oeconomicus nach John Stuart Mill" ist blau hervorgehoben. Ansonsten Bullet-Liste links.

### Inhaltliche Rekonstruktion
Der Homo Oeconomicus nach J. S. Mill ...
- ist lieber reicher als ärmer
- arbeitet lieber weniger als mehr
- konsumiert lieber früher als später

Mill-Zitat: "Not that any political economist was ever so absurd as to suppose that mankind are really thus constituted, but this is the mode in which science must necessarily proceed."

### Fachliche Aussage
Mill formuliert drei zentrale Präferenzannahmen (mehr Reichtum, weniger Arbeit, früherer Konsum) und betont selbstkritisch, dass dieses Menschenbild eine bewusste wissenschaftliche Vereinfachung ist, kein Abbild realer Menschen.

### React-Vorschlag
Komponente: `QuotePortraitCard`. Links drei Präferenz-Bullets, rechts Porträt-Platzhalter mit Lebensdaten; das Mill-Zitat als hervorgehobenes Blockquote darunter.

---

## Folie 22 - Homo Oeconomicus: Ein Beispiel (Android Data)

### In der MD vorhanden
Text vollständig vorhanden (Zeilen 320-334). Die Quelle "https://intl.startrek.com/database_article/data" ist enthalten.

### Fehlende visuelle Inhalte
Rechts ein Farbfoto des Androiden "Data" aus Star Trek: The Next Generation (Nahaufnahme/Porträt der Figur mit blass-goldener Hautfarbe, Sternenflotten-Uniform, vor dunklem Hintergrund). Quelle als kleiner Link unter dem Bild: "Quelle: https://intl.startrek.com/database_article/data". Untertitel "Der Homo Oeconomicus: Ein Beispiel" blau hervorgehoben. Bullet-Liste links neben dem Bild.

### Inhaltliche Rekonstruktion
- Das ist der Android Data aus der Serie Star Trek: The Next Generation.
- Data ist eine Maschine mit enzyklopädischem Wissen.
- Data kann große Informationsmengen rasant verarbeiten.
- Data gibt komplexe und zugleich vernünftige strategische Ratschläge.
- Data ist unbestechlich und zuverlässig.
- Data ist nicht liebenswert, aber nützlich.
- Data hat keine Gefühle.
- Data stellt sich uneingeschränkt in den Dienst der Menschen.
- Data ist ein Idealbild für menschliche Entscheidungsfindung.

Quelle: https://intl.startrek.com/database_article/data

### Fachliche Aussage
Der gefühllose, allwissende Android Data illustriert anschaulich den Homo Oeconomicus: ein rationaler, unbestechlicher, emotionsfreier Entscheider - nützlich als Modell, aber gerade durch das Fehlen von Emotionen unmenschlich.

### React-Vorschlag
Komponente: `ExampleCharacterCard`. Bild-Platzhalter rechts, Eigenschaften-Liste links, Quellenhinweis als `.source-note`. Eignet sich als anschauliches Merk-Beispiel.

---

## Folie 23 - Homo Oeconomicus (Ausgangspunkt, Vorteile, Nachteile)

### In der MD problematisch
Text größtenteils vorhanden (Zeilen 337-350), aber durch den Umbruch zerrissen. Achtung: Auf der Folie selbst ist der Text bereits über zwei Bullets umgebrochen ("Keine Fehler bei der Informationsaufnahme; keine systematischen" und in der nächsten Zeile "Fehlentscheidungen"). Inhaltlich ist es ein zusammenhängender Punkt: "Keine Fehler bei der Informationsaufnahme; keine systematischen Fehlentscheidungen" - dieser sollte in der Rekonstruktion wieder zusammengeführt werden.

### Fehlende visuelle Inhalte
Reine Textfolie mit drei farblich (blau) hervorgehobenen Zwischenüberschriften: "Ausgangspunkt: Homo Oeconomicus ..." (nur "Ausgangspunkt: Homo Oeconomicus" ist blau, der Rest schwarz), "Vorteil der Modellannahme Homo Oeconomicus", "Nachteile:". Kein Diagramm, kein Bild.

### Inhaltliche Rekonstruktion
Ausgangspunkt: Homo Oeconomicus als zentrale Annahme der (neo-)klassischen Ökonomie
- Uneingeschränkte Rationalität
- Keine Fehler bei der Informationsaufnahme; keine systematischen Fehlentscheidungen
- Unbegrenztes Eigennutzstreben (Eigennutzmaximierer)
- Unbegrenzte Willenskraft (frei von Emotionen und Selbstkontrollproblemen)

Vorteil der Modellannahme Homo Oeconomicus
- Ermöglicht Modellbildung und (mathematische) Formalisierungen

Nachteile:
- Realitätsferne
- Normativität

### Fachliche Aussage
Die Homo-Oeconomicus-Annahme erlaubt mathematische Modellbildung (Vorteil), ist aber realitätsfern und normativ (Nachteile) - genau hier setzt die Verhaltensökonomik kritisch an.

### React-Vorschlag
Komponente: `ModelEvaluationCard`. Drei Abschnitte (Annahmen / Vorteil / Nachteile), Vorteil und Nachteile als grün/rot kontrastierende Mini-Boxen. Hinweis: den durch den Folienumbruch getrennten Punkt "keine systematischen Fehlentscheidungen" wieder zu einem Bullet zusammenführen.

---

## Folie 24 - Homo Oeconomicus: Warum Nutzenmaximierung nicht funktioniert - Das Trolley-Problem

### In der MD problematisch/fehlend
Nur Titel, Untertitel und Quelle vorhanden (Zeilen 353-356): "Warum Nutzenmaximierung nicht funktioniert: Das Trolley-Problem", "Quelle: www.zwentner.com". Die eigentliche Bildbotschaft fehlt vollständig.

### Fehlende visuelle Inhalte
Großes, breitformatiges Schwarz-Weiß-Strichcartoon des klassischen Trolley-Problems:
- Links eine herannahende Straßenbahn/ein Wagen (Trolley) auf Gleisen, von links nach rechts rollend.
- In der Mitte steht eine Person aufrecht an einem Weichenhebel/Schalter (greift nach dem Hebel).
- Die Gleise verzweigen sich nach rechts in zwei Stränge: Auf beiden Strängen liegen gefesselte Personen. Hinweis (visuell abgelesen): Die genaue Personenzahl pro Strang ist im Cartoon nicht exakt erkennbar; sichtbar ist eine kleinere und eine größere Gruppe gefesselter Personen auf den beiden abzweigenden Gleisen. Eine eindeutige "5 gegen 1"-Aufteilung ist auf der Folie nicht beschriftet und sollte nicht als feststehende Zahl behauptet werden.
- Quelle unter dem Bild: "Quelle: www.zwentner.com".

### Visuelle Rekonstruktion
```text
[Trolley] ══════╗ (Person am Weichenhebel)
                 ╠══► Gleis A: gefesselte Person(en) — kleinere Gruppe (visuell abgelesen)
                 ╚══► Gleis B (Abzweig): gefesselte Personen — größere Gruppe (visuell abgelesen)
```

### Fachliche Aussage
Das Trolley-Problem zeigt ein moralisches Dilemma, bei dem reine Nutzen-/Schadensmaximierung intuitiv unbefriedigend bleibt: Rationale Nutzenmaximierung allein erfasst moralische Entscheidungen nicht vollständig.

### React-Vorschlag
Komponente: `TrolleyProblemIllustration` (SVG-Skizze mit Gleisverzweigung, Hebel, Personengruppen) oder `DilemmaCard` mit kurzer Szenariobeschreibung. Quelle als `.source-note`. Hinweis: konkrete Personenzahlen nicht erfinden, da sie auf der Folie nicht beschriftet sind.

---

## Folie 25 - Homo Oeconomicus: Das Trolley-Problem - Mehr als eine akademische Übung

### In der MD problematisch/fehlend
Nur Titel/Untertitel und Quelle vorhanden (Zeilen 359-361): "Das Trolley-Problem: Mehr als eine akademische Übung", Quelle "https://www.computerwoche.de/a/alles-zur-zukunft-der-mobilitaet, abgerufen am 25.9.2021". Das Bild und sein Kontextbezug fehlen.

### Fehlende visuelle Inhalte
Großes Farbfoto/Rendering eines Innenraums eines autonom fahrenden Fahrzeugs (futuristisches selbstfahrendes Auto): Zwei Insassen - links eine Frau (dunkle Haare), rechts ein älterer, grauhaariger Mann - sitzen einander zugewandt im Gespräch, ohne klassische Fahrer-Blickrichtung/ohne Lenkrad; durch große Panoramascheiben ist eine Stadtlandschaft sichtbar. Das Bild illustriert autonomes Fahren / Zukunft der Mobilität. Quelle als Link unter dem Bild.

### Fachliche Aussage
Das Trolley-Problem ist heute hochrelevant: Bei autonomem Fahren müssen Algorithmen reale moralische Entscheidungen (wen gefährden im Notfall?) treffen - das einst rein akademische Dilemma wird praktisch programmierbar.

### React-Vorschlag
Komponente: `RealWorldApplicationCard`. Bild-Platzhalter (autonomes Fahren) plus kurzer Bezug "Trolley-Problem in der Praxis: autonomes Fahren". Quelle mit Abrufdatum als `.source-note`.

---

## Folie 26 - Homo Oeconomicus: Sind wir alle wirklich rationale Individuen?

### In der MD problematisch/fehlend
Nur die rhetorische Frage als Text vorhanden (Zeile 365): "Sind wir alle wirklich rationale Individuen?" Der gesamte Cartoon-Inhalt fehlt.

### Fehlende visuelle Inhalte
Vierteiliger Schwarz-Weiß-Cartoon (Comic-Strip, 2x2-Panels) mit Strichfiguren und englischen Sprechblasen, der irrationales Verhalten persifliert. Sichtbare Sprechblasentexte (visuell abgelesen):
- Panel oben links: "LIFELONG SMOKERS HAVE A ONE-IN-TWO CHANCE OF DYING FROM SMOKING-RELATED DISEASE." (eine Figur belehrt eine andere)
- Panel oben rechts: "IT'LL NEVER HAPPEN TO ME." (Antwort der Raucherfigur, die eine Zigarette hält)
- Panel unten links: "THE ODDS OF WINNING THE POWERBALL LOTTERY ARE 80 MILLION TO ONE." (Belehrung)
- Panel unten rechts: "THIS COULD BE MY LUCKY DAY!" (optimistische Antwort)

### Visuelle Rekonstruktion
```text
[1] "Raucher: 1:2 Risiko zu sterben"   | [2] "Mir passiert das nie."
[3] "Lotto-Chance 80 Mio. : 1"          | [4] "Das könnte mein Glückstag sein!"
```

### Fachliche Aussage
Der Cartoon entlarvt die Inkonsistenz menschlicher Risikowahrnehmung: Hohe negative Wahrscheinlichkeiten (Rauchertod) werden verdrängt, winzige positive (Lottogewinn) überschätzt - klarer Widerspruch zur Annahme rationaler Individuen.

### React-Vorschlag
Komponente: `RhetoricalQuestionCard` mit Cartoon-Platzhalter und den vier Aussagepaaren als kleine Gegenüberstellung (Fakt vs. irrationale Reaktion). Eignet sich als Einstiegs-Hook in das Kapitel zu kognitiven Verzerrungen.

---

## Folie 27 - Homo oeconomicus: Entscheidungen nach rationalen Aspekten

### In der MD vorhanden
Text vollständig vorhanden (Zeilen 368-378): zwei Hauptpunkte (Keine Berücksichtigung von Emotionen / Emotionen haben aber Einfluss auf menschliches Verhalten) mit jeweils eingerückten Unterpunkten.

### Fehlende visuelle Inhalte
Reine Textfolie. Zwei farblich (blau) hervorgehobene, fette Hauptbullets, darunter eingerückte schwarze Unterbullets (Spiegelstriche). Kein Diagramm, kein Bild.

### Inhaltliche Rekonstruktion
Keine Berücksichtigung von Emotionen
- Prognosekraft ökonomischer Modelle durch Emotionen beeinträchtigt, da Emotionen menschliches Verhalten unberechenbar machen.

Emotionen haben aber Einfluss auf menschliches Verhalten
- Emotionale Reaktionen sind schneller als kognitive Prozesse und sind häufig schon da, bevor Menschen bewusst nachdenken.
- Emotionen haben das Potential, Menschen komplett zu verwandeln.
- Menschen neigen dazu, die Auswirkungen von Emotionen auf ihr Handeln, ihre Zukunft und ihre Vergangenheit zu unterschätzen.

### Fachliche Aussage
Das neoklassische Modell ignoriert Emotionen, weil sie als Störfaktor gelten. Tatsächlich beeinflussen Emotionen Verhalten aber massiv und schneller als bewusstes Denken - und werden zudem in ihrer Wirkung systematisch unterschätzt.

### React-Vorschlag
Komponente: `ContrastList`. Zwei Blöcke gegenübergestellt: "Annahme: Emotionen ausblenden" vs. "Realität: Emotionen wirken". Unterpunkte als verschachtelte Liste.

---

## Folie 28 - Emotionen und Experimente: Die Verhaltensökonomik nutzt Experimente

### In der MD vorhanden
Text vollständig vorhanden (Zeilen 381-396) inkl. der sieben Zwecke von Experimenten und der drei Experimenttypen. Quelle "https://www.haus-der-kleinen-forscher.de/" enthalten.

### Fehlende visuelle Inhalte
Rechts unten ein Farbfoto: mehrere Hände (von Kindern) bauen/experimentieren gemeinsam an einer hölzernen Konstruktion (Bahn/Rampe aus Holzteilen) auf einem Tisch - Bezug zum "Haus der kleinen Forscher". Quelle als kleiner Link unter/neben dem Bild: "Quelle: https://www.haus-der-kleinen-forscher.de/". Untertitel "Die Verhaltensökonomik nutzt Experimente" blau hervorgehoben. Die Aufzählung steht links neben dem Bild.

### Inhaltliche Rekonstruktion
Experimente in der Ökonomik sind sinnvoll, um
- Theorien zu überprüfen;
- Ursachen für Theorieschwächen zu finden;
- neue Theorien zu entwickeln;
- die Robustheit von Institutionen zu vergleichen;
- die Leistungsfähigkeit von Institutionen zu vergleichen;
- Politikkonzepte auf ihre Tragfähigkeit zu untersuchen;
- neue institutionelle Designs zu testen.

Es werden unterschieden:
- Laborexperimente
- Feldexperimente
- Natürliche Experimente

Quelle: https://www.haus-der-kleinen-forscher.de/

### Fachliche Aussage
Experimente sind das methodische Kernwerkzeug der Verhaltensökonomik: Sie dienen dem Testen und Weiterentwickeln von Theorien und Institutionen und werden in Labor-, Feld- und natürliche Experimente unterteilt.

### React-Vorschlag
Komponente: `ExperimentMethodsCard`. Liste der sieben Zwecke; die drei Experimenttypen als drei abgesetzte Badge-/Mini-Cards. Bild-Platzhalter rechts, Quelle als `.source-note`.

---

## Folie 29 - Menschliche Emotionen: Arten von Emotionen

### In der MD vorhanden
Text vollständig vorhanden (Zeilen 399-410). Alle sechs Emotionskategorien mit Beispielen enthalten.

### Fehlende visuelle Inhalte
Reine Textfolie. Untertitel "Arten von Emotionen" blau hervorgehoben. Die Kategorienamen (z.B. "Soziale Emotionen", "Emotionen über etwas, das hätte passieren können") sind fett gesetzt, die Beispiele (mit "z.B." eingeleitet) dahinter in normaler Schrift. Kein Diagramm, kein Bild.

### Inhaltliche Rekonstruktion
| Emotionskategorie | Beispiele |
|---|---|
| Soziale Emotionen | z.B. Zorn, Hass, Schuld, Stolz, Scham |
| Emotionen über etwas, das hätte passieren können | z.B. Bedauern, Enttäuschung, Erleichterung |
| Emotionen über etwas, das passieren könnte | z.B. Angst, Hoffnung |
| Emotionen über das, was passiert | z.B. Freude, Kummer |
| Emotionen über den Besitz anderer | z.B. Neid, Eifersucht, Schadenfreude |
| Andere Emotionen | z.B. romantische Gefühle, Zufriedenheit, Ekel |

### Fachliche Aussage
Emotionen lassen sich systematisch nach ihrem zeitlichen/situativen Bezug ordnen (vergangene, mögliche, eintretende Ereignisse sowie soziale und besitzbezogene Gefühle) - eine Grundlage, um ihren Einfluss auf ökonomische Entscheidungen zu analysieren.

### React-Vorschlag
Komponente: `EmotionCategoryTable` oder Card-Grid mit sechs Kategorien (Kategorie als Titel, Beispiele als Tags/Chips).

---

## Folie 30 - Emotionen und Entscheidungen

### In der MD vorhanden
Text vollständig vorhanden (Zeilen 413-424). Alle fünf Bullets enthalten.

### Fehlende visuelle Inhalte
Reine Textfolie, fünf schwarze Bullet-Punkte ohne farbliche Hervorhebung. Kein Diagramm, kein Bild, keine Tabelle.

### Inhaltliche Rekonstruktion
- Emotionen können dazu führen, dass Verhalten "unökonomisch" erscheint.
- Aber Emotionen können auch zu ökonomischerem Verhalten führen:
- Rationale Entscheidungen können aufgrund begrenzter Problemlösungsfähigkeiten nicht getroffen werden; möglicherweise kommt keine Entscheidung zustande.
- Emotionen können notwendige Entscheidungen herbeiführen, auch wenn dies zu Lasten einer "First best"-Entscheidung geht (die aber möglicherweise unerreichbar ist).
- Emotionen dienen dann als heuristische Entscheidungsregel.

### Fachliche Aussage
Emotionen sind nicht nur Störfaktor: Wo rationale Optimierung an Komplexität scheitert, ermöglichen Emotionen als heuristische Entscheidungsregeln überhaupt erst handlungsfähige (wenn auch nicht "First-best"-)Entscheidungen.

### React-Vorschlag
Komponente: `InsightList`. Den Doppelcharakter (Emotion als Nachteil vs. Vorteil) optisch als zwei kontrastierende Aussagen hervorheben; "heuristische Entscheidungsregel" als Schlüsselbegriff markieren.

---

## Folie 31 - Verhaltensökonomik vs. Neoklassik (Homo Oeconomicus): Einschränkende Annahmen

### In der MD problematisch
Die Textbullets der einschränkenden Annahmen sind vorhanden (Zeilen 429-435). Die untere Vergleichstabelle ist in der MD jedoch stark zerbrochen (Zeilen 438-449): Spaltenüberschriften, Zeilenbezeichnungen und Zellinhalte sind durcheinandergeraten und teils zusammengeklebt. Quelle "In Anlehnung an H. Beck (2014), S. 11" enthalten.

### Fehlende visuelle Inhalte
Titel zweizeilig: "Verhaltensökonomik vs. Neoklassik (Homo Oeconomicus)".
Obere Hälfte: Zwischenüberschrift (blau) "Einschränkende Annahmen der Verhaltensökonomik:" sowie drei Bullets, deren Begriffe fett/blau hervorgehoben sind (Begrenzte Rationalität / Begrenzte Willenskraft / Begrenzter Eigennutz).
Untere Hälfte: zweispaltige Vergleichstabelle (Datenteil) mit dunkler Kopfzeile ("Traditionelle Ökonomik" | "Behavioral Economics") und drei Datenzeilen; die linke Beschriftungsspalte (Kalkül / Zeitpräferenz / Nutzenkonzept) ist dunkel/grau hinterlegt. Über der Tabelle steht links "Modellprinzipien:" und rechts der Quellenhinweis "In Anlehnung an H. Beck (2014), S. 11".

### Visuelle Rekonstruktion
```text
Einschränkende Annahmen der Verhaltensökonomik:
  • Begrenzte Rationalität  • Begrenzte Willenskraft  • Begrenzter Eigennutz

Modellprinzipien:                       (In Anlehnung an H. Beck (2014), S. 11)
┌──────────────┬───────────────────────────┬───────────────────────────────┐
│              │ Traditionelle Ökonomik    │ Behavioral Economics          │
├──────────────┼───────────────────────────┼───────────────────────────────┤
│ Kalkül       │ Erwartungsnutzentheorie   │ Prospect Theory               │
│ Zeitpräferenz│ Exponentielles Diskont.   │ Hyperbolisches Diskontieren   │
│ Nutzenkonzept│ Menschen sind eigennützig │ Wohlergehen anderer / Fairness│
└──────────────┴───────────────────────────┴───────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Einschränkende Annahmen der Verhaltensökonomik:
- Begrenzte Rationalität: Menschen machen Fehler bei Informationsaufnahme und -verarbeitung und greifen daher zu Heuristiken (einfache Problemlösungsmechanismen).
- Begrenzte Willenskraft: Vertagung unbequemer Entscheidungen.
- Begrenzter Eigennutz: Fairness (oder andere Nutzenkonzepte) spielen eine Rolle.

Modellprinzipien (In Anlehnung an H. Beck (2014), S. 11):

| Modellprinzip | Traditionelle Ökonomik | Behavioral Economics |
|---|---|---|
| Kalkül | Erwartungsnutzentheorie: Nutzenmaximierung gemäß erwartetem Nutzen | Prospect Theory: Menschen haben Angst vor Verlusten, bewerten Eintrittswahrscheinlichkeiten unterschiedlich und orientieren sich an Referenzwerten |
| Zeitpräferenz | Exponentielles Diskontieren | Hyperbolisches Diskontieren |
| Nutzenkonzept | Menschen sind eigennützig | Menschen achten auf Wohlergehen anderer Menschen; legen Wert auf Fairness |

### Fachliche Aussage
Die Verhaltensökonomik ersetzt die drei Kernannahmen des Homo Oeconomicus durch realistischere: begrenzte Rationalität, Willenskraft und Eigennutz. Konkret tritt an die Stelle der Erwartungsnutzentheorie die Prospect Theory, an die Stelle exponentiellen Diskontierens hyperbolisches Diskontieren und an die Stelle reinen Eigennutzes Fairness.

### React-Vorschlag
Komponente: `EconParadigmComparison`. Oben drei Annahmen-Cards; darunter eine echte Vergleichstabelle (`ComparisonTable`) mit Sticky-Headerzeile und Zeilenlabels. Quelle als `.source-note`. Wichtig: die in der MD zerbrochene Tabelle in React neu aufbauen, nicht übernehmen.

---

## Folie 32 - Verhaltensökonomik vs. Neoklassik: Entscheidungsfindung

### In der MD problematisch/fehlend
Die MD enthält nur zerrissene Wortfragmente der zwei Prozessketten (Zeilen 452-464): "Objektives / Rationale Entscheider Entscheidung / Risiko" und "Subjektive / Objektives / Risiko- Risiko- / Risikowahr- Entscheidung / Risiko / darstellung einstellung / nehmung". Pfeile, Reihenfolge und Zuordnung der Beschriftungen sind komplett verloren.

### Fehlende visuelle Inhalte
Untertitel/zweite Titelzeile: "Entscheidungsfindung". Zwei horizontale Prozessdiagramme mit dunkelblauen abgerundeten Boxen und grauen Blockpfeilen:

Oben - blaues, fettes Bullet "Tradionelle Ökonomik (Neoklassik)" (Schreibweise auf der Folie ohne "ti": "Tradionelle"):
- Dunkelblaue Box "Objektives Risiko" → grauer Rechtspfeil mit Beschriftung "Rationale Entscheider" (Text im Pfeil) → dunkelblaue Box "Entscheidung".

Unten - blaues, fettes Bullet "Verhaltensökonomik (Behavioral Economics / Finance)":
- Dunkelblaue Box "Objektives Risiko" → grauer Pfeil mit Beschriftung "Risiko-darstellung" → hellblau/cyan hervorgehobene Box "Subjektive Risikowahrnehmung" → grauer Pfeil mit Beschriftung "Risiko-einstellung" → dunkelblaue Box "Entscheidung".
Die mittlere Box ist farblich (hellblau/türkis) abgesetzt, um den verhaltensökonomischen Zusatzschritt zu betonen.

### Visuelle Rekonstruktion
```text
Tradionelle Ökonomik (Neoklassik):
[Objektives Risiko] ──Rationale Entscheider──► [Entscheidung]

Verhaltensökonomik (Behavioral Economics / Finance):
[Objektives Risiko] ─Risikodarstellung─► [Subjektive Risikowahrnehmung] ─Risikoeinstellung─► [Entscheidung]
```

### Inhaltliche Rekonstruktion
- Tradionelle Ökonomik (Neoklassik): Objektives Risiko --(Rationale Entscheider)--> Entscheidung.
- Verhaltensökonomik (Behavioral Economics / Finance): Objektives Risiko --(Risikodarstellung)--> Subjektive Risikowahrnehmung --(Risikoeinstellung)--> Entscheidung.

### Fachliche Aussage
Der zentrale Unterschied: In der Neoklassik führt objektives Risiko direkt über rationale Entscheider zur Entscheidung. In der Verhaltensökonomik schiebt sich dazwischen die subjektive Risikowahrnehmung - geprägt durch Risikodarstellung (Framing) und individuelle Risikoeinstellung -, die die Entscheidung verzerrt.

### React-Vorschlag
Komponente: `DecisionFlowComparison`. Zwei untereinander gestapelte Pfeilketten (`ProcessFlow`); die mittlere Box "Subjektive Risikowahrnehmung" als akzentuierte (hervorgehobene) Node, um den verhaltensökonomischen Zusatzschritt sichtbar zu machen.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 2: Curriculum-Roadmap über drei Semester mit orange hervorgehobenem aktuellen Modul "Behavioral Finance"
2. Folie 4: Spielregeln-Tabellen (Lehrmethoden / Leistungsbewertung) plus Klausur-Liste
3. Folie 12: Venn-Diagramm Psychologie/Ökonomie mit geteilter Schnittmenge und Pfeilrichtungen
4. Folie 19: Spannungsfeld-Schaubild Güterknappheit mit Maximal-/Minimalprinzip
5. Folie 31: Vergleichstabelle Traditionelle Ökonomik vs. Behavioral Economics (in der MD zerbrochen)
6. Folie 32: Zwei Entscheidungsketten mit akzentuierter Box "Subjektive Risikowahrnehmung"
7. Folie 16: Galerie der neun Vertreter der Verhaltensökonomik

## Kann vereinfacht werden

- Dekorative Fotostreifen auf Folien 1 und 9 als Platzhalter-Banner
- Buchcover-Collagen auf Folien 6, 7, 14, 15 als optionale Thumbnails
- Filmplakate (Folie 8), Porträt Mill (Folie 21), Android Data (Folie 22), autonomes Fahren (Folie 25), Experiment-Foto (Folie 28) als Bild-Platzhalter
- Reine Textfolien (3, 5, 11, 13, 17, 18, 20, 23, 27, 29, 30) als Listen/Cards
- Cartoons auf Folien 24 und 26 als einfache Illustration plus Aussagepaare

## Nicht fachlich relevant

- HBW-Logo
- Kopfzeile und grauer Kopfbereich
- Folien-Footer ("Behavioral Finance / CS / Folie N")
- Copyright-Zeile ("© 2026 – Hochschule der Bayerischen Wirtschaft")
- exakte Folienpositionierung
- dekorative Bildästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
export const curriculum = [
  { semester: '3. Semester', modules: ['Finanzinstrumente und Risikomanagement'] },
  { semester: '4. Semester', modules: ['Asset Management', 'Behavioral Finance'], current: 'Behavioral Finance' },
  { semester: '5. Semester', modules: ['Analyse von Finanzdaten und Data Science', 'Corporate Financial Management'] },
]

export const courseRules = {
  lehrmethoden: [
    { label: 'Präsenz', sws: 52 },
    { label: 'E-Learning/Selbststudium', sws: 80 },
  ],
  leistungsbewertung: [{ label: 'Klausur', anteil: '100%' }],
  klausur: [
    'Dauer 90 Minuten',
    'Wissensfragen beantworten',
    'Praxisbezogene Fragen bewältigen',
    'Multiple Choice Fragen beantworten',
  ],
}
```

```js
export const emotionCategories = [
  { type: 'Soziale Emotionen', examples: ['Zorn', 'Hass', 'Schuld', 'Stolz', 'Scham'] },
  { type: 'Emotionen über etwas, das hätte passieren können', examples: ['Bedauern', 'Enttäuschung', 'Erleichterung'] },
  { type: 'Emotionen über etwas, das passieren könnte', examples: ['Angst', 'Hoffnung'] },
  { type: 'Emotionen über das, was passiert', examples: ['Freude', 'Kummer'] },
  { type: 'Emotionen über den Besitz anderer', examples: ['Neid', 'Eifersucht', 'Schadenfreude'] },
  { type: 'Andere Emotionen', examples: ['romantische Gefühle', 'Zufriedenheit', 'Ekel'] },
]

export const paradigmComparison = [
  { principle: 'Kalkül', traditional: 'Erwartungsnutzentheorie: Nutzenmaximierung gemäß erwartetem Nutzen', behavioral: 'Prospect Theory: Angst vor Verlusten, abweichende Bewertung von Eintrittswahrscheinlichkeiten, Orientierung an Referenzwerten' },
  { principle: 'Zeitpräferenz', traditional: 'Exponentielles Diskontieren', behavioral: 'Hyperbolisches Diskontieren' },
  { principle: 'Nutzenkonzept', traditional: 'Menschen sind eigennützig', behavioral: 'Menschen achten auf Wohlergehen anderer; legen Wert auf Fairness' },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Diagramme möglich bleiben.
