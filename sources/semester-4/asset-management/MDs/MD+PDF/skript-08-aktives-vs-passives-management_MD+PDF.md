# skript-08-aktives-vs-passives-management_MD+PDF - Aktives vs. Passives Management / Indizes: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-08-aktives-vs-passives-management.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-08-aktives-vs-passives-management.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder als eingebettete Diagramme gar nicht erfasst wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Organigramme, Kreislaufdiagramme, Matrix-Logiken, Charts, Formeln, Schaubilder oder Icon-Aussagen verloren gehen.

**Quelle:** `skript-08-aktives-vs-passives-management.pdf` mit 30 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, Kopfzeile, Folien-Footer (`Asset Management / CS / Folie ...`) und Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme (Organigramm, Kreislauf, Core-Satellite, Charts), Formeln (Indexberechnung), Tabellen (Index-Typen, Vergleiche), Schaubilder (ETF-Gleichung, Zero-Sum-Game) und Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Mehrere Folien (Einsatzbereiche von Indizes, Typen von Indizes, passive Vehikel-Vergleich, Vor-/Nachteile, Index-Superiority) sind durch die PDF-Konvertierung als kaputte Tabellen vorhanden. Diese in React als echte Tabellen, `MatrixTable`, Cards oder Quadranten-Grids neu aufbauen.
2. **Eingebettete Diagramme/Charts neu erzeugen:** Streu-/Liniendiagramme (Folien 11, 25), Balkendiagramme (Folien 24, 27), Kreisdiagramme (Folien 15, 16) und das Zero-Sum-Game (Folie 29) fehlen in der MD vollständig, da sie Bilder sind. Werte, wo gesichert ablesbar, als echte Datenreihen umsetzen; nur visuell geschätzte Werte als solche kennzeichnen.
3. **Organigramme und Kreislaufdiagramme semantisch nachbauen:** Investmentphilosophien-Baum (Folie 3), Einsatzbereich-Matrix (Folie 6) und der Vermögensverwaltungs-Kreislauf (Folie 9) tragen Prozess-/Hierarchielogik und sollten nicht nur als Textliste erscheinen.
4. **Formeln als Lernobjekte behandeln:** Die Index-Berechnungsaufgabe (Folie 17) und ihre Lösung (Folie 18) sollten als Aufgabe/Lösung-Paar mit ausfüllbaren bzw. gelösten Formelzeilen umgesetzt werden.
5. **Textauszeichnungen erhalten:** Fettungen von Schlüsselbegriffen (Benchmark, Alpha, effizient, begrenzt/nicht begrenzt) und Pfeil-Kausalketten (`à`/`→`) tragen Bedeutung und sollten als Akzent/Callout erhalten bleiben.
6. **Quellenhinweise erhalten:** MSCI (2026), Statista, Financial Times/Morningstar, Bogle (2016), Vanguard, Bernstein/Wurgler - jeweils als `SourceNote`/`.source-note` beibehalten.
7. **Folientreue bei Inkonsistenzen:** Schreibweisen des Originals ("arithmethisch", "Courage" vs. "Courtage") nicht korrigieren, sondern folientreu wiedergeben und ggf. mit Hinweis kennzeichnen.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Kapitel-Hero mit Nummer, Untertitel, optionaler Bildleiste |
| `AgendaList` | 2 | Nummerierte Agenda mit aktivem Kapitel-Akzent |
| `PhilosophyTree` | 3 | Dreistufiges Knoten-Diagramm aktiv/passiv/tilted |
| `DefinitionList` | 4 | Mehrstufige Aufzählung mit Begriffs-Akzenten |
| `CoreSatelliteDiagram` | 5 | Core-Blase mit umlaufenden Satelliten + Textsektion |
| `UsageMatrix` | 6 | Dreireihiges Spaltenraster der Index-Einsatzbereiche |
| `ComparisonList` | 7 | Gegenüberstellung Benchmark passiv vs. aktiv |
| `SectionedDefinition` | 8 | Drei Themenblöcke Definition/Anforderungen/Funktionen |
| `ProcessCycleDiagram` | 9 | Sechsstufiger Vermögensverwaltungs-Kreislauf |
| `StatCalloutWithLogos` | 10 | Faktenliste + Provider-Logo-Grid |
| `DualAxisScatterChart` | 11 | Streu-/Liniendiagramm Indizes vs. Aktien |
| `ReasonBlocks` | 12 | Zwei Themenblöcke + Fazit-Callout |
| `CriteriaIntroPlusComparison` | 13 | Kriterienliste + Auswahl-/Benchmarkindex-Vergleich |
| `WeightingComparison` | 14 | Karten preis- vs. kapitalisierungsgewichtet |
| `IndexCompositionDashboard` | 15 | Top-10-Tabelle + zwei Donut-Charts |
| `MsciWorldWeightsComparison` | 16 | 2x2-Grid vier Pie-Charts 2026/2018 |
| `IndexWeightingExercise` | 17 | Aufgaben-Card mit DataTable + Formel-Lücken |
| `IndexWeightingSolution` | 18 | Lösung mit gelösten Formeln |
| `PriceVsPerformanceIndex` | 19 | Zweispaltige ComparisonCard Kurs-/Performanceindex |
| `IndexTypeMatrix` | 20 | MatrixTable Gewichtung x Dividendenbehandlung |
| `IndexConstituentsTable` | 21 | DataTable Mitgliederzahlen je Index |
| `PassiveVehiclesComparison` | 22 | MatrixTable Indexfonds/Zertifikate/ETFs |
| `EtfEquationDiagram` | 23 | Icon-Kette ETF = börsengehandelt + Index + Fonds |
| `EtfGrowthCharts` | 24 | Zwei gestapelte BarCharts ETF-Wachstum |
| `EtfVsStocksLineChart` | 25 | LineChart ETFs vs. gelistete Unternehmen |
| `ActivePassiveProsConsGrid` | 26 | 2x2-Quadranten Vor-/Nachteile aktiv/passiv |
| `ActiveSuccessRateChart` | 27 | Gruppiertes BarChart Erfolgsquoten 1/3/5/10 Jahre |
| `IndexSuperiorityTable` | 28 | MatrixTable mit zweistufigem Periodenkopf |
| `ZeroSumGameDiagram` | 29 | Zwei überlagerte Glockenkurven mit Annotationen |
| `TrackingErrorInfo` | 30 | Info-Card Definition + Ursachen mit Callout |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 8: Indizes / Aktives vs. Passives Management (Titelfolie)

### In der MD vorhanden
Vorhanden: "Asset Management", "Kapitel 8", "Indizes", "Aktives vs. Passives Management", Versionskennung "V26-05-17". Inhaltlich vollständig erfasst. (Fußzeile: "Asset Management / CS / Folie 259".)

### Fehlende visuelle Inhalte
- Vier dekorative Fotos im oberen Drittel (Bildband), von links nach rechts: (1) Hand hält eine Karte mit HBW-Logo, (2) Person mit Brille (Nahaufnahme Gesicht), (3) Gruppe junger Studierender, (4) modernes Hochschulgebäude (Glasfassade). Rein dekorativ, kein Fachinhalt. (Bildmotive visuell abgelesen.)
- HBW-Logo oben rechts (Layout).

### Visuelle Rekonstruktion
(keine fachliche Grafik)

### Inhaltliche Rekonstruktion
Kapitel 8 - Indizes / Aktives vs. Passives Management.

### Fachliche Aussage
Kapiteltrenner/Titelfolie zu Kapitel 8 des Moduls Asset Management mit dem Thema Indizes sowie aktives versus passives Management.

### React-Vorschlag
`ChapterTitleSlide` - Titel-Hero mit Kapitelnummer, Untertitel und dekorativer Bildleiste; Fotos optional weglassbar, da nicht fachlich.

---

## Folie 2 - Agenda

### In der MD vorhanden
Vollständig: alle 9 Agendapunkte (1. Einführung bis 9. FinTechs im Asset Management / Robo Advisors) sind im Text erfasst.

### Fehlende visuelle Inhalte
- Hervorhebung: Punkt 8 "Indizes / Aktives vs. Passives Management" ist in blauer, fetter Schrift gesetzt (aktueller Kapitelfokus); die übrigen Punkte sind schwarz. Diese farbliche Markierung geht in der MD verloren.

### Visuelle Rekonstruktion
```
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management   <-- aktiver Punkt (blau/fett)
9. FinTechs im Asset Management / Robo Advisors
```

### Inhaltliche Rekonstruktion
Nummerierte Modulagenda mit 9 Punkten; aktuell aktiv: Punkt 8.

### Fachliche Aussage
Verortung des Kapitels 8 in der Gesamtstruktur des Moduls Asset Management.

### React-Vorschlag
`AgendaList` - nummerierte Liste mit `activeIndex`-Prop zur Akzent-Hervorhebung des aktuellen Kapitels.

---

## Folie 3 - Differenzierung Investmentphilosophien

### In der MD vorhanden
Text vorhanden: "Differenzierung Investmentphilosophien: aktives, tilted und passives Management." Die Begriffe "Investmentphilosophien", "Aktiv", "Passiv", "Mischform", "Tilted" sind als zerstreute Zeilen vorhanden - die hierarchische Diagrammstruktur (Organigramm) fehlt jedoch.

### Fehlende visuelle Inhalte
- Organigramm/Baumdiagramm:
  - Oberster Knoten (dunkelblauer Kasten, weiße Schrift): "Investmentphilosophien".
  - Zwei darunter liegende Knoten (hellblaue Kästen): links "Aktiv", rechts "Passiv". Beide sind über eckige Verbindungslinien mit dem oberen Knoten verbunden.
  - Von "Aktiv" und "Passiv" laufen Linien nach unten zu einem dritten Knoten (hellblau): "Tilted". Auf der zusammenführenden horizontalen Linie steht kursiv die Beschriftung "Mischform".
- Aussage der Pfeilführung: "Tilted" entsteht als Mischform zwischen "Aktiv" und "Passiv".

### Visuelle Rekonstruktion
```
            [ Investmentphilosophien ]
              ┌──────────┴──────────┐
          [ Aktiv ]             [ Passiv ]
              └────── Mischform ──────┘
                       │
                   [ Tilted ]
```

### Inhaltliche Rekonstruktion
Drei Ausprägungen der Investmentphilosophie:
- Aktiv
- Passiv
- Tilted = Mischform zwischen aktiv und passiv

### Fachliche Aussage
Investmentphilosophien lassen sich in aktiv und passiv gliedern; das "tilted" Management ist eine Mischform, die beide Ansätze kombiniert.

### React-Vorschlag
`PhilosophyTree` - dreistufiges Knoten-Diagramm (CSS-Grid + verbindende Linien), Wurzel oben, zwei Geschwisterknoten, ein zusammengeführter Mischform-Knoten unten.

---

## Folie 4 - Aktives Portfoliomanagement

### In der MD vorhanden
Vollständig als reine Textfolie erfasst: alle Aufzählungspunkte zum aktiven Management (Rendite-/Risikodifferenz zur Benchmark, Annahme nicht-effizienter Märkte, Anpassung an Managererwartung, Zielsetzung Alpha, technisch/quantitative vs. fundamental/qualitative Prognosen, relative vs. absolute Return Strategien).

### Fehlende visuelle Inhalte
- Keine Grafik. Verloren gehen nur Textauszeichnungen (Fettungen): hervorgehoben sind "Benchmark", "nicht-effizienter Märkte", "Alpha", die Begriffe "Technisch/quantitative Prognosen" und "Fundamental/qualitative Prognosen" sowie "Relative vs. Absolute Return Strategien". Gliederung mit Einrückungsebenen (Spiegelstriche unter Hauptpunkten).

### Visuelle Rekonstruktion
(reine Textfolie - keine Skizze nötig)

### Inhaltliche Rekonstruktion
Aktives Management:
- bewusste Rendite-/Risikodifferenz zur Benchmark
- beruht auf der Annahme nicht-effizienter Märkte
- Anpassung des Portfolios an die Erwartung des Managers
- Zielsetzung: Erzielung einer positiven, risikoadjustierten Überschussrendite im Vergleich zur Benchmark (Alpha)
- Ausnutzung der Marktineffizienzen durch technisch/quantitative und/oder fundamental/qualitative Prognosen
  - Technisch/quantitative Prognosen: Charttechnik bzw. Zeitreihenanalysen
  - Fundamental/qualitative Prognosen: Schätzung des inneren Werts eines Assets als Barwert der zukünftig erwarteten Cash Flows
- Aktive Strategien: Relative vs. Absolute Return Strategien
  - Absolute Return Strategien agieren losgelöst von einer Benchmark, z.B. Hedge Fonds
  - Idee: positive Rendite bei weitgehender Unabhängigkeit von der allgemeinen Marktentwicklung

### Fachliche Aussage
Aktives Management setzt auf Marktineffizienzen und versucht, durch Prognosen und bewusste Abweichungen von der Benchmark eine risikoadjustierte Überschussrendite (Alpha) zu erzielen.

### React-Vorschlag
`DefinitionList` - mehrstufige Aufzählung mit Akzent-Hervorhebung der Schlüsselbegriffe (Benchmark, Alpha, Prognosearten).

---

## Folie 5 - Passives & Tilted Management (mit Core-Satellite-Strategie)

### In der MD vorhanden
Text zu "Passives Management (bspw. ETFs)" und "Tilted Management" vollständig vorhanden. Die rechts eingebettete Core-Satellite-Grafik fehlt in der MD komplett.

### Fehlende visuelle Inhalte
- Blasen-/Cluster-Grafik (Core-Satellite-Strategie) rechts:
  - Im Zentrum eine große, dunkelblau-graublaue Blase mit Beschriftung "Basis Anlage" (Core).
  - Um die Basis-Anlage herum mehrere mittelgroße/hellere Satelliten-Blasen mit Beschriftungen (Positionen visuell abgelesen): "Small Caps" (links), "Branchen" (oben rechts), "Emerging Markets" (rechts/Mitte), "Themen: Infrastruktur" (unten links). Mehrere kleine leere/dunkle Kreise als zusätzliche Satelliten.
  - Überschrift der Grafik (blau, rechts): "Core-Satellite-Strategie".
  - Legende rechts unten: "Basis-Anlage: fixe Anlage (passiv)" / "Satellite-Anlagen: aktive Beimischung".
- Farbcodierung: dunkle große Blase = passiver Kern; hellere Satelliten = aktive Beimischungen.
- Im Textteil ist im Punkt "Annahme: Kapitalmärkte sind effizient" das Wort "effizient" fett hervorgehoben.

### Visuelle Rekonstruktion
```
   (Small Caps)        ( Branchen )
            \           /
           [  Basis Anlage  ]  <- Core (passiv, fix)
            /           \
   (Themen:          (Emerging
    Infrastruktur)    Markets)
   = Satelliten (aktive Beimischung)
```

### Inhaltliche Rekonstruktion
Passives Management (bspw. ETFs):
- Annahme: Kapitalmärkte sind effizient
- Indextracking
- Keine Bindung von Ressourcen in Research, weitgehende Vermeidung von Transaktionskosten, d.h. kostenminimales Asset Management
- Erwartungsunabhängige Anlagestrategie

Tilted Management:
- Mischform; ausgehend vom passiven Management weicht das Portfolio im Hinblick auf ausgewählte Risikofaktoren von der passiven Strategie ab

Core-Satellite-Strategie (Grafik):
- Basis-Anlage: fixe Anlage (passiv)
- Satellite-Anlagen: aktive Beimischung (Small Caps, Branchen, Emerging Markets, Themen: Infrastruktur)

### Fachliche Aussage
Passives Management bildet kostenminimal einen Index nach; das tilted Management weicht gezielt nach Risikofaktoren ab und lässt sich als Core-Satellite-Strategie umsetzen: passiver Kern plus aktive Satelliten-Beimischungen.

### React-Vorschlag
`CoreSatelliteDiagram` - zentrale Core-Blase mit umlaufend positionierten Satelliten-Blasen (absolute Positionierung), plus zweispaltige Textsektion fuer passives/tilted Management.

---

## Folie 6 - Einsatzbereiche von Indizes

### In der MD vorhanden
Die MD enthält die Begriffe, aber die Matrix ist als zerbrochene Tabelle erfasst (Spalten/Zeilen vermischt: "Aktives Passives Management", "ETF Derivate Monitoring", "Benchmarking ... Basiswert Information", "Asset Manager ... Medien", "Investmentbanken", "Börsen"). Struktur nicht rekonstruierbar aus dem Text allein.

### Fehlende visuelle Inhalte
- Spaltendiagramm/Matrix mit oberster Sammelbox "Indizes" (breiter dunkler Kasten über allen Spalten).
- Darunter vier Spalten (jeweils oben ein mittelblauer Kopf-Kasten):
  - Spalte 1: "Aktives Management"
  - Spalte 2: "Passives Management"
  - Spalte 3: "Derivate"
  - Spalte 4: "Monitoring"
- Zweite Zeile (hellblaue Kästen, je Spalte): "Benchmarking" | "ETF" | "Basiswert" | "Information".
- Dritte Zeile (hellgraue/blasse Kästen, Akteure): "Asset Manager" (unter Spalte 1) | "Investmentbanken / Börsen" (mittig, über Spalten 2-3 reichend) | "Medien" (unter Spalte 4).

### Visuelle Rekonstruktion
```
+------------------------------------------------------------+
|                          INDIZES                           |
+------------------------------------------------------------+
| Aktives Mgmt | Passives Mgmt |  Derivate   |   Monitoring  |
| Benchmarking |     ETF       |  Basiswert  |   Information  |
| Asset Manager| Investmentbanken / Börsen   |     Medien     |
+------------------------------------------------------------+
```

### Inhaltliche Rekonstruktion
| Einsatzbereich | Aktives Management | Passives Management | Derivate | Monitoring |
|---|---|---|---|---|
| Funktion | Benchmarking | ETF | Basiswert | Information |
| Akteur | Asset Manager | Investmentbanken / Börsen | Investmentbanken / Börsen | Medien |

### Fachliche Aussage
Indizes werden in vier Einsatzbereichen genutzt - als Benchmark im aktiven Management, als Underlying von ETFs im passiven Management, als Basiswert für Derivate und zu Monitoring/Information - jeweils durch unterschiedliche Akteure.

### React-Vorschlag
`UsageMatrix` - dreireihiges Spaltenraster (Header "Indizes" über vier Spalten), gestufte Farbintensitaet je Zeile.

---

## Folie 7 - Rolle der Benchmark

### In der MD vorhanden
Vollständig als Textfolie erfasst (Rolle der Benchmark im passiven vs. aktiven Portfoliomanagement, je mit zwei Unterpunkten).

### Fehlende visuelle Inhalte
- Keine Grafik. Verloren gehen nur Fettungen ("passiven", "aktiven") und die zweistufige Gliederung (Hauptpunkt mit Spiegelstrich-Unterpunkten).

### Visuelle Rekonstruktion
(reine Textfolie)

### Inhaltliche Rekonstruktion
Rolle der Benchmark:
- im passiven Portfoliomanagement:
  - Replikation der (Strategischen) Asset Allocation
  - Zielportfolio
- im aktiven Portfoliomanagement:
  - Basis für die Bildung aktiver Renditeerwartungen
  - zu "schlagendes" Portfolio durch entsprechende Über- oder Untergewichtungen der Portfoliokomponenten

### Fachliche Aussage
Im passiven Management ist die Benchmark das zu replizierende Zielportfolio; im aktiven Management dient sie als Bezugsgröße, die durch gezielte Über-/Untergewichtungen geschlagen werden soll.

### React-Vorschlag
`ComparisonList` - zweispaltige Gegenueberstellung "passiv" vs. "aktiv" mit je zwei Unterpunkten.

---

## Folie 8 - Definition Index

### In der MD vorhanden
Vollständig erfasst: Definition Index, Anforderungen an Indizes (Investierbarkeit), Funktionen von Indizes - alle Unterpunkte vorhanden.

### Fehlende visuelle Inhalte
- Keine Grafik. Drei blaue Zwischenüberschriften gliedern die Folie ("Definition Index", "Anforderungen an Indizes (Investierbarkeit)", "Funktionen von Indizes"); diese Strukturierung geht in der MD als reine Textliste teilweise verloren.

### Visuelle Rekonstruktion
(reine Textfolie - dreiblockige Gliederung)

### Inhaltliche Rekonstruktion
Definition Index:
- Zusammenfassung einer ausgewählten Gruppe von Wertpapieren (zumeist Aktien), die an einer Börse notiert sind
- Gezielte Zusammenstellung einzelner Aktien nach bestimmten Kriterien
- "Musterportfolio" eines Landes/einer Region

Anforderungen an Indizes (Investierbarkeit):
- Nachbildbarkeit
- Liquidität der enthaltenen Titel
- Transparenz bei Auswahl und Gewichtung

Funktionen von Indizes:
- Abbildung der Entwicklung eines Marktes (Marktsegments) i.S. eines "Börsenbarometers" (Benchmarkfunktion)
- Vergleichsmaßstab für Performance-Messung
- Analyse der Einflussfaktoren auf Renditen
- Anlage- und Handelsfunktion

### Fachliche Aussage
Ein Index ist ein Musterportfolio ausgewählter Wertpapiere; er muss investierbar (nachbildbar, liquide, transparent) sein und erfüllt Funktionen als Börsenbarometer, Vergleichsmaßstab, Analysebasis und Handelsobjekt.

### React-Vorschlag
`SectionedDefinition` - drei abgesetzte Themenblöcke (Definition / Anforderungen / Funktionen) mit jeweils eigener Akzent-Überschrift.

---

## Folie 9 - Anwendungen von Indizes (Prozess der Vermögensverwaltung)

### In der MD vorhanden
Die MD enthält Textfragmente, aber stark zerbrochen und ohne Zuordnung zum Kreislaufdiagramm (z.B. "Performance und Risiko-Simulation", "Marketing-Zwecke", "Handel / Front Office", "Internes Reporting/Controlling", "Treasury/Risk-Management" vermischt mit Beschreibungstexten). Die Diagrammstruktur (Prozesskreislauf) fehlt vollständig.

### Fehlende visuelle Inhalte
- Kreislaufdiagramm (Pfeil-Kreis im Uhrzeigersinn) mit SECHS Prozessstationen (blaue Pfeilsegmente), im Kreis angeordnet (visuell abgelesen):
  - "Investoren-Reporting" (oben links)
  - "Asset-Allocation/Szenario-Rechnungen" (oben rechts)
  - "Handel / Front Office" (rechts)
  - "Abwicklung & Buchhaltung" (unten rechts)
  - "Treasury/Risk-Management" (unten links)
  - "Internes Reporting/Controlling" (links)
- Um den Kreis herum angeordnete Beschreibungstexte (Anwendungen je Station). Pfeile des Kreises laufen im Uhrzeigersinn (Prozessablauf).
- Überschrift: "Beispiel: Prozess der Vermögensverwaltung (Asset Management)".

### Visuelle Rekonstruktion
```
        Investoren-      Asset-Allocation/
        Reporting        Szenario-Rechnungen
              \            /
  Internes  →  ( Kreislauf )  → Handel/
  Reporting/      im UZS         Front Office
  Controlling  /            \
        Treasury/Risk-   Abwicklung &
        Management       Buchhaltung
```

### Inhaltliche Rekonstruktion
Anwendungen je Prozessstation (gemäß umlaufenden Texten):
- Asset-Allocation/Szenario-Rechnungen: Performance- und Risiko-Simulation verschiedener Portfolio-Strukturen; Vorgabe von Benchmarks und damit von "Default"-Portfolio-Leitlinien
- Handel / Front Office: Asset-Allocation-Benchmarks als Leitlinien für Portfolio-Umschichtungen; Handel mit Derivaten, z.B. für Portfolio-Hedging-Maßnahmen; Stop-Loss-Maßnahmen auf Portfolio-Ebene
- Abwicklung & Buchhaltung / Treasury/Risk-Management: Marktgerechtigkeitsprüfungen insbesondere für Index-bezogene Produkte; regulatorisches Reporting / Buchhaltung; Entwicklung von Portfolio-Hedging-Strategien; vereinfachte "Real-Time"-Portfolio-Überwachung / Szenariorechnungen; vereinfachte Berechnung der Risikokapital-Nutzung
- Internes Reporting/Controlling: Performance- und Risiko-Vergleiche (Portfolio vs. Markt, Portfolio vs. Asset Allocation, Portfolio vs. Benchmark)
- Investoren-Reporting: Marketing-Zwecke, Performance-Benchmark, Vergleiche Soll-/Ist-Strukturen

### Fachliche Aussage
Indizes werden über den gesamten Vermögensverwaltungsprozess hinweg eingesetzt - von der Asset-Allocation über Handel/Front Office, Abwicklung, Risk-Management bis zum internen und Investoren-Reporting.

### React-Vorschlag
`ProcessCycleDiagram` - sechs-stufiger Kreislauf (Pfeilsegmente im Uhrzeigersinn) mit anklickbaren Stationen, die jeweils die zugehörigen Anwendungstexte einblenden.

---

## Folie 10 - Es gibt mittlerweile mehr als 3 Mio. Finanzmarkt-Indizes

### In der MD vorhanden
Text vollständig erfasst: Index Industry Association (14 Mitglieder, geschätzt 98% Marktabdeckung) und Ergebnisse der sechsten Umfrage (ESG +96%, Höchststand 3,7 Mio. in 2018, Konsolidierung auf rund 3 Mio.). Die rechts platzierten Provider-Logos fehlen in der MD.

### Fehlende visuelle Inhalte
- IIA-Logo oben rechts ("iia index INDUSTRY ASSOCIATION").
- Logowand der Index-Provider (rechte Spalte, zweispaltiges Raster mit mehreren Reihen von Firmenlogos), erkennbar (visuell abgelesen): Bloomberg, Cboe Global Markets, CRSP (Chicago Booth), China Central Depository & Clearing, FTSE Russell, IHS Markit, ICE (linke Spalte) sowie Morningstar, MSCI, NASDAQ OMX Global Indexes, S&P Dow Jones Indices, STOXX, JPX, Hang Seng Indexes (rechte Spalte).

### Visuelle Rekonstruktion
```
Text (links)                 | [IIA-Logo]
- Index Industry Association | [Provider-Logowand (2 Spalten):
- 14 Mitglieder              |  Bloomberg | Morningstar
- 98% Marktabdeckung         |  Cboe      | MSCI
- Ergebnisse 6. Umfrage      |  CRSP      | NASDAQ OMX
                             |  CCDC      | S&P Dow Jones
                             |  FTSE Russell | STOXX
                             |  IHS Markit   | JPX
                             |  ICE          | Hang Seng]
```

### Inhaltliche Rekonstruktion
Index Industry Association:
- Dachverband großer Indexprovider, umfasst 14 Mitglieder
- Nach Angaben des Verbandes repräsentieren seine Mitglieder (geschätzt) 98% des globalen Gesamtmarkts für derartige Dienste

Ergebnisse der sechsten Umfrage (veröffentlicht im November 2022):
- Größtes relatives Wachstum bei ESG-Indizes (+96%) ggü. 2021
- Höchststand: 3,7 Millionen Indices in 2018
- Mittlerweile: Konsolidierung auf rund 3 Millionen

### Fachliche Aussage
Es existieren rund 3 Millionen Finanzmarkt-Indizes; die Index Industry Association als Dachverband ihrer 14 Mitglieder deckt rund 98% des Marktes ab, wobei ESG-Indizes zuletzt am stärksten wuchsen.

### React-Vorschlag
`StatCalloutWithLogos` - zweispaltiges Layout: Faktenliste links, Provider-Logo-Grid rechts (Logos durch Platzhalter/Namens-Chips ersetzbar).

---

## Folie 11 - Explodierendes Wachstum in der letzten Dekade

### In der MD vorhanden
In der MD nur der Folientitel ("Explodierendes Wachstum in der letzten Dekade"). Das Diagramm und die Quellenfußnoten fehlen vollständig.

### Fehlende visuelle Inhalte
- Streu-/Liniendiagramm mit Doppelachse, Titel: "There are more Benchmarks/ETFs than Stocks".
  - X-Achse (Zeit, nicht linear): Werte 1920, 1929, 1960, 1985, 2010, 2012, 2016.
  - Linke Y-Achse: "# of indices" (LHS), Skala 0 bis 5.000 (Schritte 1.000).
  - Rechte Y-Achse: "# of stocks" (RHS), Skala 0 bis 50.000 (Schritte 5.000).
  - Blaue Rauten = "Number of indices (LHS)": liegen bis ca. 1985 nahe Null, ein Punkt bei ca. 2010 knapp über Null, bei ca. 2012 ca. 650-700 (visuell abgelesen) und bei 2016 ca. 5.000 mit nach oben weisendem Pfeil (exponentiell). Eine blaue Kurve modelliert diesen exponentiellen Verlauf (steiler Anstieg ab ca. 2010).
  - Grüne/olivfarbene Punkte = "Number of stocks (RHS)": ab ca. 2010/2012 dichte Punktwolke auf Niveau ca. 15.000-45.000, weitgehend seitwärts/leicht steigend (visuell abgelesen).
- Fußnoten (klein, unter dem Diagramm): Erläuterungen zur Methodik (erste 5 Datenpunkte basierend auf Wurgler 2011 "On the Economics of Index-Linked Investing"; letzte zwei Punkte = kumulierte Faktor-Indizes 4274 von ERI Scientific Beta und 673 ETFs laut Morningstar; exponentielle Kurvenanpassung; S&P-Claim einer Million Indizes über alle Assetklassen, davon 850.000 Aktienindizes).
- Quelle: Bernstein Analysis "Fund Management Strategy: A million indices, the death of benchmarking and the passive singularity", Wurgler (2011), FT, ERI Scientific Beta, Worldbank.

### Visuelle Rekonstruktion
```
# of indices (LHS)                              # of stocks (RHS)
5000 |                                  ◆↑      50000
4000 |        green ······· cluster   /         40000
3000 |                  ····  ·· · ·  /          30000
2000 |             ····              /           20000
1000 |          ·                  ◆             10000
   0 |◆----◆----◆----◆--------◆--/               0
     1920 1929 1960 1985    2010 2012 2016
     ◆ Number of indices (LHS)   · Number of stocks (RHS)
```

### Inhaltliche Rekonstruktion
- Titel der Grafik: "There are more Benchmarks/ETFs than Stocks"
- Achsen: X = Jahre (1920, 1929, 1960, 1985, 2010, 2012, 2016); linke Y = Anzahl Indizes (0-5.000); rechte Y = Anzahl Aktien (0-50.000)
- Quelle: Bernstein Analysis "Fund Management Strategy: A million indices, the death of benchmarking and the passive singularity", Wurgler (2011), FT, ERI Scientific Beta, Worldbank

### Fachliche Aussage
Die Zahl der Indizes ist in der letzten Dekade exponentiell gewachsen und übersteigt mittlerweile die Zahl der gehandelten Aktien deutlich ("more Benchmarks/ETFs than Stocks").

### React-Vorschlag
`DualAxisScatterChart` - Streu-/Liniendiagramm mit zwei Y-Achsen (Indizes vs. Aktien), z.B. leichtgewichtige SVG-Umsetzung; Quellen-/Methodik-Fußnote als `.source-note`.

---

## Folie 12 - Gründe für die Vielzahl an Indizes

### In der MD vorhanden
Vollständig als Textfolie erfasst: Block "Digitalisierung" und Block "Kombination verschiedener Ausprägungen" mit allen Unterpunkten sowie die Schlussfolgerung.

### Fehlende visuelle Inhalte
- Keine Grafik. Zwei fette Zwischenüberschriften ("Digitalisierung", "Kombination verschiedener Ausprägungen") und der mit Pfeil ("à"/"→") eingeleitete Schlusssatz strukturieren die Folie.

### Visuelle Rekonstruktion
(reine Textfolie)

### Inhaltliche Rekonstruktion
Digitalisierung:
- Die zunehmende Digitalisierung, d.h. die Verfügbarkeit von Rechenkapazitäten, ermöglicht die Berechnung von neuen Indizes innerhalb kürzester Zeit

Kombination verschiedener Ausprägungen:
- Auswahl innerhalb des jeweiligen Universums (z.B. europ. Aktien)
- Gewichtung (gleichgewichtet, Marktkapitalisierung, …)
- Berechnung des Index in unterschiedlichen Währungen (mind. EUR, USD, JPY, GBP)
- Mit/ohne Währungssicherung
- Mit/ohne Berücksichtigung von Dividenden bzw. Steuern

→ aus einem einzelnen Hauptindex ergibt sich eine Vielzahl von Kombinationen

### Fachliche Aussage
Die enorme Anzahl an Indizes resultiert aus günstiger Rechenleistung (Digitalisierung) und der Kombinierbarkeit verschiedener Ausprägungen (Universum, Gewichtung, Währung, Sicherung, Dividenden), wodurch aus einem Hauptindex viele Varianten entstehen.

### React-Vorschlag
`ReasonBlocks` - zwei Themenblöcke mit Aufzählungen plus hervorgehobener Fazit-Zeile (Pfeil-Callout).

---

## Folie 13 - Differenzierung von Indizes (1) Auswahl- vs. Benchmarkindex

### In der MD vorhanden
Vollständig erfasst: die drei Differenzierungskriterien (1) Anzahl Indexmitglieder, (2) Gewichtung, (3) Berechnung sowie der Detailblock (1) Auswahlindex vs. Benchmarkindex mit allen Unterpunkten.

### Fehlende visuelle Inhalte
- Keine Grafik. Verloren gehen Fettungen ("begrenzt", "nicht begrenzt", "Auswahlindex", "Benchmarkindex") und die zweistufige Gliederung.

### Visuelle Rekonstruktion
(reine Textfolie)

### Inhaltliche Rekonstruktion
Differenzierung von Indizes:
1. Anzahl Indexmitglieder: Auswahlindex vs. Benchmarkindex
2. Gewichtung: preis- vs. kapitalisierungsgewichteter Index
3. Berechnung: Performance-Index vs. Kursindex

(1) Auswahlindex vs. Benchmarkindex
- Auswahlindex:
  - die Anzahl der Werte im Index ist begrenzt
  - Ziel: Sicherstellung eines hohen Grades an Handelbarkeit
  - Auswahlverfahren hat besondere Bedeutung
  - Kriterien: Marktkapitalisierung des Free Floats und Orderbuchumsatz
- Benchmarkindex:
  - Anzahl der Indexmitglieder ist nicht begrenzt
  - Der Index misst auf breiter Basis die Performance eines Marktes, Segments oder Teilsegments

### Fachliche Aussage
Indizes lassen sich nach drei Kriterien differenzieren; bezüglich der Mitgliederzahl unterscheidet man den (begrenzten, handelbaren) Auswahlindex vom (unbegrenzten, breit messenden) Benchmarkindex.

### React-Vorschlag
`CriteriaIntroPlusComparison` - nummerierte Kriterienliste oben, darunter Zweispalten-Vergleich Auswahl- vs. Benchmarkindex.

---

## Folie 14 - Preis- vs. Kapitalisierungsgewichteter Index

### In der MD vorhanden
Vollständig als Textfolie erfasst: Preisgewichteter Index (Annahme + Folge inkl. Downward Bias) und Kapitalisierungsgewichteter Index (Annahme + Folge Market Cap Bias).

### Fehlende visuelle Inhalte
- Keine Grafik. Verloren gehen Fettungen ("Annahme:", "Folge:") und die Pfeil-Kausalketten ("à"/"→" innerhalb des Preisgewichtungs-Punkts).

### Visuelle Rekonstruktion
```
Preisgewichteter Index:
  Annahme: 1 Aktie je Titel → Folge: Übergewichtung hoher Kurse
  → US-Markt: Handelsbandbreiten / Splits → Downward Bias
Kapitalisierungsgewichteter Index:
  Annahme: Investition nach Marktkap. → Folge: Market Cap Bias
```

### Inhaltliche Rekonstruktion
(2) Preis- vs. Kapitalisierungsgewichteter Index

Preisgewichteter Index:
- Annahme: jeder Anleger kauft genau eine Aktie der im Index enthaltenen Titel
- Folge: Übergewichtung von Werten mit hohem Kursniveau. → US-Markt: Etablierung von Handelsbandbreiten, d.h. Werte mit guter historischer Performance nehmen Splits vor. → Downward Bias

Kapitalisierungsgewichteter Index:
- Annahme: Anleger investiert in Titel in Abhängigkeit von der Markkapitalisierung
- Folge: Market Cap Bias

### Fachliche Aussage
Preisgewichtete Indizes übergewichten hochpreisige Titel (Downward Bias durch Splits), kapitalisierungsgewichtete Indizes gewichten nach Marktkapitalisierung und erzeugen einen Market Cap Bias.

### React-Vorschlag
`WeightingComparison` - zwei gegenübergestellte Karten (preisgewichtet / kapitalisierungsgewichtet), je mit Annahme- und Folge-Zeile.

---

## Folie 15 - Beispiel kap.gewichteter Index: MSCI World

### In der MD vorhanden
Text-Stichpunkte zum MSCI World vorhanden (breit aufgestellt, keine Emerging Markets, Kapitalisierungsgewichtung, Dominanz US-Emittenten, Dominanz IT/Gesundheit/Finanzwesen) sowie die Quelle. Die drei eingebetteten Grafiken (Top-10-Tabelle, Sektor-Pie, Länder-Pie) fehlen vollständig.

### Fehlende visuelle Inhalte
- Tabelle (oben rechts): "TOP 10 CONSTITUENTS" mit Spalten "Float Adj Mkt Cap (USD Billions)", "Index Wt. (%)", "Sector". Zellinhalte (visuell abgelesen):
  - NVIDIA - 4.849,55 - 5,57 - Info Tech
  - APPLE - 3.988,28 - 4,58 - Info Tech
  - MICROSOFT CORP - 2.879,24 - 3,31 - Info Tech
  - AMAZON.COM - 2.550,19 - 2,93 - Cons Discr
  - ALPHABET A - 2.239,45 - 2,57 - Comm Srvcs
  - BROADCOM - 1.880,19 - 2,16 - Info Tech
  - ALPHABET C - 1.858,63 - 2,13 - Comm Srvcs
  - META PLATFORMS A - 1.332,89 - 1,53 - Comm Srvcs
  - TESLA - 1.078,85 - 1,24 - Cons Discr
  - JPMORGAN CHASE & CO - 852,69 - 0,98 - Financials
  - Total - 23.509,97 - 26,99
- Kreisdiagramm links unten "SECTOR WEIGHTS" mit Legende (Werte abgelesen):
  - Information Technology 27,61%, Financials 15,99%, Industrials 11,76%, Consumer Discretionary 9,3%, Communication Services 9,04%, Health Care 8,77%, Consumer Staples 5,31%, Energy 4,21%, Materials 3,45%, Utilities 2,74%, Real Estate 1,83%
- Kreisdiagramm rechts unten "COUNTRY WEIGHTS" mit Legende (Werte abgelesen):
  - United States 71,91%, Japan 5,68%, United Kingdom 3,68%, Canada 3,49%, France 2,48%, Other 12,75%
  - Information Technology ist das mit Abstand größte (gelb-goldenes) Segment im Sektor-Pie; United States dominiert den Länder-Pie (großes gelb-goldenes Segment 71,91%).

### Visuelle Rekonstruktion
```
Text (links)            | TOP 10 CONSTITUENTS (Tabelle, oben rechts)
- breit, keine EM       | NVIDIA ... JPMORGAN; Total 26,99% Index Wt.
- Kapitalisierung       |
- US-Dominanz           | [Pie SECTOR WEIGHTS]   [Pie COUNTRY WEIGHTS]
- IT/Health/Financials  |  IT 27,61% dominant     US 71,91% dominant
```

### Inhaltliche Rekonstruktion
MSCI World:
- weltweit breit aufgestelltes Benchmark-Portfolio
- keine Berücksichtigung von Emittenten aus den Emerging Markets
- Kapitalisierungsgewichtung
- Folge: Dominanz von US-Emittenten
- Dominanz der Branchen: Informationstechnologie, Gesundheit, Finanzwesen

Top-10-Constituents (Index Wt. %): NVIDIA 5,57; APPLE 4,58; MICROSOFT 3,31; AMAZON 2,93; ALPHABET A 2,57; BROADCOM 2,16; ALPHABET C 2,13; META PLATFORMS A 1,53; TESLA 1,24; JPMORGAN CHASE & CO 0,98 - Total 26,99%.

Sector Weights: Information Technology 27,61% · Financials 15,99% · Industrials 11,76% · Consumer Discretionary 9,3% · Communication Services 9,04% · Health Care 8,77% · Consumer Staples 5,31% · Energy 4,21% · Materials 3,45% · Utilities 2,74% · Real Estate 1,83%.

Country Weights: United States 71,91% · Japan 5,68% · United Kingdom 3,68% · Canada 3,49% · France 2,48% · Other 12,75%.

*Quelle: MSCI (2026) https://www.msci.com/documents/10199/255599/msci-world-index.pdf, abgerufen am 17.05.2026*

### Fachliche Aussage
Der kapitalisierungsgewichtete MSCI World veranschaulicht den Market Cap Bias: wenige große US-Tech-Werte dominieren die Top-10, die USA stellen über 70% des Länder-Gewichts und Informationstechnologie den größten Sektoranteil.

### React-Vorschlag
`IndexCompositionDashboard` - dreiteilige Anordnung: Top-10-Tabelle plus zwei Donut-/Pie-Charts (Sektor- und Länder-Gewichte) mit Legende; Quellenhinweis als `.source-note`.

## Folie 16 - Beispiel kap.gewichteter Index: MSCI World (MSCI World 2026 vs. 2018)

### In der MD vorhanden
Die MD (Zeilen 228-232) enthaelt nur die Ueberschrift "Beispiel kap.gewichteter Index: MSCI World", den Untertitel "MSCI World 2026 vs. 2018" und die beiden nackten Jahreszahlen "2026" und "2018". Saemtliche Diagramminhalte (vier Kreisdiagramme mit Legenden und Prozentwerten) fehlen vollstaendig, da es sich um eingebettete Grafiken handelt.

### Fehlende visuelle Inhalte
Die Folie zeigt eine 2x2-Matrix aus vier 3D-Tortendiagrammen (Kreisdiagramme), zeilenweise nach Jahr geordnet, spaltenweise nach Gewichtungsdimension:
- Zeile oben: Jahr **2026** (Beschriftung links neben den Diagrammen)
- Zeile unten: Jahr **2018**
- Linke Spalte: Ueberschrift **SECTOR WEIGHTS** (Sektorgewichte)
- Rechte Spalte: Ueberschrift **COUNTRY WEIGHTS** (Laendergewichte)

Entgegen einer ersten Einschaetzung sind die Prozentwerte aller vier Diagramme in der Render-Aufloesung gut lesbar (Datenbeschriftungen am Tortenrand plus vollstaendige Farb-Legende mit Prozentangaben unter jedem Diagramm). Konkrete Werte:

**COUNTRY WEIGHTS 2026:** United States 71,91 %, Japan 5,68 %, United Kingdom 3,68 %, Canada 3,49 %, France 2,48 %, Other 12,75 %.
**COUNTRY WEIGHTS 2018:** United States 59,21 %, Japan 8,95 %, United Kingdom 6,63 %, France 3,97 %, Germany 3,66 %, Other 17,59 %.
**SECTOR WEIGHTS 2026:** Information Technology 27,61 %, Financials 15,99 %, Industrials 11,76 %, Consumer Discretionary 9,3 %, Communication Services 9,04 %, Health Care 8,77 %, Consumer Staples 5,31 %, Energy 4,21 %, Materials 3,45 %, Utilities 2,74 %, Real Estate 1,83 %.
**SECTOR WEIGHTS 2018:** Financials 18,5 %, Information Technology 16,8 % (visuell abgelesen), Consumer Discretionary 12,26 %, Health Care 11,76 %, Industrials 11,62 % (visuell abgelesen), Consumer Staples 9,04 % (visuell abgelesen), Energy 6,32 %, Materials 5,25 %, Real Estate 3,11 %, Utilities 2,97 %, Telecommunication Services 2,77 %. (Die 2018-Sektorzahlen sind teils nur naeherungsweise ablesbar und entsprechend als visuell abgelesen markiert.)

Auffaellig im Vergleich 2018 -> 2026: Die US-Dominanz (Country Weights) steigt deutlich von 59,21 % auf 71,91 %; auf Sektorebene steigt Information Technology von ca. 16,8 % auf 27,61 % und ueberholt Financials als groessten Sektor.

Quelle (von Vorfolie / MD Zeile 224): MSCI (2026), https://www.msci.com/documents/10199/255599/msci-world-index.pdf, abgerufen am 17.05.2026.

### Visuelle Rekonstruktion
```
                SECTOR WEIGHTS                    COUNTRY WEIGHTS
2026   ( IT 27,61% groesstes Segment,      ( USA 71,91% dominiert,
         Financials 15,99%, Industrials      Japan 5,68%, UK 3,68%,
         11,76%, ... + Legende )             Canada 3,49%, France 2,48%,
                                             Other 12,75% )
2018   ( Financials 18,5% groesstes,        ( USA 59,21% dominiert,
         IT ca. 16,8%, ... + Legende )       Japan 8,95%, UK 6,63%, ... )
        Legende: Sektoren + %               Legende: Laender + %
```

### Inhaltliche Rekonstruktion
Vier Kreisdiagramme: Sektorgewichte und Laendergewichte des MSCI World jeweils fuer 2026 (oben) und 2018 (unten). Die Prozentwerte sind in der Render-Aufloesung lesbar und oben aufgefuehrt. Kernaussage des Vergleichs: zunehmende US-Dominanz (Laenderebene 59,21 % -> 71,91 %) sowie Sektorverschiebung zugunsten Information Technology (ca. 16,8 % -> 27,61 %), das damit Financials als groessten Sektor abloest.

### Fachliche Aussage
Der kapitalisierungsgewichtete MSCI World wird auf Laenderebene stark von den USA und auf Sektorebene 2026 von Information Technology, Financials und Industrials dominiert; der Zeitvergleich 2018 vs. 2026 illustriert die wachsende Konzentration (Market Cap Bias): der US-Anteil steigt von rund 59 % auf rund 72 %, der IT-Anteil von rund 17 % auf knapp 28 %.

### React-Vorschlag
`MsciWorldWeightsComparison` - 2x2-Grid aus vier `PieChart`-Komponenten, Zeilen nach Jahr (2026/2018), Spalten "Sector Weights"/"Country Weights", mit `SourceNote` (MSCI). Da die Werte gesichert ablesbar sind, koennen die Charts mit echten Datenreihen umgesetzt werden (Country 2026/2018 voll, Sector 2026 voll, Sector 2018 teilweise visuell abgelesen kennzeichnen).

## Folie 17 - Beispiel: Preis- vs. Kap.gewichteter Index (Aufgabe)

### In der MD vorhanden
Die MD (Zeilen 235-259) enthaelt die vollstaendige Aufgabenstellung und die Datentabelle als Markdown-Tabelle inklusive aller Kurse, Stueckzahlen und Marktwerte sowie die unausgefuellten Lueckenformeln. Die Werte sind korrekt extrahiert.

### Fehlende visuelle Inhalte
Auf der Folie ist die Datentabelle eine formatierte Tabelle mit blauem Kopfbereich und zweistufiger Kopfzeile: obere Ebene gruppiert die Spalten in **30.11.** und **31.12.**; untere Ebene listet je Stichtag **Kurs | Anzahl Aktien | Marktwert**. Die erste Spalte heisst **Aktie**. Darueber steht die Aufgabe: "Bitte berechnen Sie fuer den folgenden Index bestehend aus Aktien A, B, C und D einmal a) den preisgewichteten und b) den kapitalisierungsgewichteten Index(wert) sowie die jeweiligen Renditen fuer den Monat Dezember". Unter der Tabelle folgen die ausfuellbaren Lueckenformeln (Unterstriche). Diese Struktur ist in der MD inhaltlich enthalten, aber die zweistufige Spaltengruppierung geht im reinen Text teilweise verloren.

### Visuelle Rekonstruktion
```
            |        30.11.            |        31.12.            |
Aktie | Kurs | Anzahl Aktien | Marktwert | Kurs | Anzahl Aktien | Marktwert
```

### Inhaltliche Rekonstruktion
| Aktie | Kurs 30.11. | Anzahl 30.11. | Marktwert 30.11. | Kurs 31.12. | Anzahl 31.12. | Marktwert 31.12. |
|---|---|---|---|---|---|---|
| A | 30 | 1.000 | 30.000 | 36 | 1.000 | 36.000 |
| B | 10 | 3.000 | 30.000 | 12 | 3.000 | 36.000 |
| C | 20 | 1.000 | 20.000 | 25 | 1.000 | 25.000 |
| D | 60 | 500 | 30.000 | 58 | 500 | 29.000 |
| Total | | | 110.000 | | | 126.000 |

Aufgabe (Wortlaut sinngemaess von der Folie): "Bitte berechnen Sie fuer den folgenden Index bestehend aus Aktien A, B, C und D einmal a) den preisgewichteten und b) den kapitalisierungsgewichteten Index(wert) sowie die jeweiligen Renditen fuer den Monat Dezember."
a) Indexstand preisgewichtet (arithmethisch) 30.11.: (__+__+__+__)/__ = ____
   Indexstand preisgewichtet (arithmethisch) 31.12.: (__+__+__+__)/__ = ____
   Rendite(Preisgew.) = (____ - ____) / ____ = ____
b) Rendite(Kap.gew.) = (____ - ____) / ____ = ____
(Hinweis: Die Folie schreibt durchgaengig "arithmethisch" - Schreibweise des Originals, nicht korrigieren.)

### Fachliche Aussage
Uebungsaufgabe zur Berechnung des arithmetischen (preisgewichteten) Indexstands und des kapitalisierungsgewichteten Indexwerts sowie der jeweiligen Monatsrenditen fuer den Monat Dezember.

### React-Vorschlag
`IndexWeightingExercise` - Aufgaben-Card mit `DataTable` (zweistufiger Header ueber `colSpan`) und darunter `FormulaBlanks`-Liste; Loesung folgt auf Folie 18 (zusammen als aufklappbares Aufgabe/Loesung-Paar denkbar).

## Folie 18 - Beispiel: Preis- vs. Kap.gewichteter Index (Loesung)

### In der MD vorhanden
Die MD (Zeilen 262-286) enthaelt die identische Datentabelle sowie die ausgefuellten Loesungswerte: preisgewichteter Indexstand 30.11. = 30, 31.12. = 32,75; Rendite preisgewichtet 9,2 %; Rendite kapitalisierungsgewichtet 14,5 %.

### Fehlende visuelle Inhalte
Gleiche formatierte Tabelle wie auf Folie 17 (zweistufiger blauer Kopf 30.11./31.12. mit Kurs/Anzahl Aktien/Marktwert). Zusaetzlich sind die Lueckenformeln nun mit Werten gefuellt. Inhaltlich vollstaendig in der MD vorhanden; nur die Tabellenformatierung (Gruppenkopf) geht im Text verloren.

### Visuelle Rekonstruktion
```
preisgew. 30.11. = (30+10+20+60)/4 = 30
preisgew. 31.12. = (36+12+25+58)/4 = 32,75
Rendite preisgew. = (32,75 - 30)/30 = 9,2 %
Rendite kap.gew.  = (126.000 - 110.000)/110.000 = 14,5 %
```

### Inhaltliche Rekonstruktion
Datentabelle identisch zu Folie 17 (A: 30/36, B: 10/12, C: 20/25, D: 60/58; Total Marktwert 110.000 / 126.000).

Loesung:
- a) Indexstand preisgewichtet (arithmethisch) 30.11.: (30+10+20+60)/4 = 30
- Indexstand preisgewichtet (arithmethisch) 31.12.: (36+12+25+58)/4 = 32,75
- Rendite Preisgew. = (32,75 - 30) / 30 = 9,2 %
- b) Rendite Kap.gew. = (126.000 - 110.000) / 110.000 = 14,5 %

### Fachliche Aussage
Loesung der Uebung: Der preisgewichtete Index steigt um 9,2 %, der kapitalisierungsgewichtete um 14,5 %; die Gewichtungsmethode veraendert das Ergebnis deutlich, weil Titel D (hoher Kurs, fallend) im Preisindex stark, im Kapitalisierungsindex schwaecher wirkt.

### React-Vorschlag
`IndexWeightingSolution` - identische `DataTable` plus `SolvedFormula`-Block mit hervorgehobenen Ergebnissen (9,2 % / 14,5 %); idealerweise als Loesungsteil derselben Aufgabe-Komponente von Folie 17.

## Folie 19 - Kurs- vs. Performanceindex

### In der MD vorhanden
Die MD (Zeilen 289-302) enthaelt den gesamten Textinhalt der Folie vollstaendig und korrekt (Performance-Index: fiktive Erfassung von Dividenden/Bezugsrechten, Reinvestition, Synonym Total Return Index, Beispiel DAX; Kursindex: keine Wiederanlage, steigende Opportunitaetskosten, Beispiel DJIA).

### Fehlende visuelle Inhalte
Reine Textfolie mit zwei Aufzaehlungsbloecken (Performance-Index, Kursindex) und jeweils eingerueckten Unterpunkten (Definition / Folge / Synonym / Beispiel). Keine Grafiken, Diagramme oder Tabellen vorhanden - nichts visuell verloren.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Bullet-Liste).

### Inhaltliche Rekonstruktion
- Performance-Index: Definition: Fiktive Erfassung von Dividenden- oder Bezugsrechtszahlungen; Folge: Reinvestition der laufenden Ertraege; Synonym: Total Return Index; Beispiel: DAX.
- Kursindex: Definition: Keine Wiederanlage laufender Ertraege; Folge: Mit zunehmendem Anlagehorizont steigen die Opportunitaetskosten aufgrund entgangener Dividenden; Beispiel: Dow Jones Industrial Average (DJIA).

### Fachliche Aussage
Performanceindizes reinvestieren Ertraege (Total Return, z. B. DAX), Kursindizes nicht (z. B. DJIA); ueber lange Horizonte fuehrt das zu erheblichen Renditeunterschieden.

### React-Vorschlag
`PriceVsPerformanceIndex` - zweispaltige `ComparisonCard` (Performance-Index vs. Kursindex) mit Definition/Folge/Synonym/Beispiel je Seite.

## Folie 20 - Typen von Indizes im Ueberblick

### In der MD vorhanden
Die MD (Zeilen 305-338) enthaelt alle Zellinhalte, aber die Tabellenstruktur ist durch die Extraktion zerbrochen: Begriffe wie "Free-Float-gewichteter Index", "Swiss Market Index (SMI)", "Scale All Share" sind ueber mehrere Zeilen zerrissen und ohne erkennbare Zeilen-/Spaltenzuordnung. Die Matrix muss aus der Grafik rekonstruiert werden.

### Fehlende visuelle Inhalte
Eine Matrix mit 5 Spalten und 3 Zeilen (inkl. Koepfen) mit blauen Kopf- und Zeilenkopfzellen:
- Spaltenkoepfe: Preisgewichteter Index | Kapitalisierungsgewichteter Index | Free-Float-gewichteter Index | Gleichgewichteter Index
- Zeilenkopf 1: "Keine Beruecksichtigung von Dividenden" (= Kursindizes)
- Zeilenkopf 2: "Mit Beruecksichtigung von Dividenden" (= Performanceindizes)
Die Zellen enthalten mehrere Indexnamen untereinander (siehe Tabelle unten).

### Visuelle Rekonstruktion
```
                        | Preisgew. | Kapitalisierungsgew. | Free-Float-gew.        | Gleichgew.
Keine Div.-Beruecks.    | DJIA,     | S&P 500, Nasdaq      | SMI, FTSE 100,         | Scale All Share
                        | Nikkei    | Composite, MSCI      | DAX                    |
                        |           | World, Hang Seng,    |                        |
                        |           | Euro Stoxx 50,       |                        |
                        |           | Scale 30             |                        |
Mit Div.-Beruecks.      | (leer)    | Scale 30             | MSCI Total Return,     | Scale All Share
                        |           |                      | Swiss Performance Idx, |
                        |           |                      | DAX                    |
```

### Inhaltliche Rekonstruktion
| | Preisgewichteter Index | Kapitalisierungsgewichteter Index | Free-Float-gewichteter Index | Gleichgewichteter Index |
|---|---|---|---|---|
| Keine Beruecksichtigung von Dividenden | Dow Jones Industrial Average (DJIA); Nikkei | S&P 500; Nasdaq Composite; MSCI World; Hang Seng; Euro Stoxx 50; Scale 30 | Swiss Market Index (SMI); Financial Times Index (FTSE 100); DAX | Scale All Share |
| Mit Beruecksichtigung von Dividenden | (leer) | Scale 30 | MSCI Total Return; Swiss Performance Index; DAX | Scale All Share |

### Fachliche Aussage
Indizes lassen sich gleichzeitig nach Gewichtungsmethode (Preis / Kapitalisierung / Free-Float / Gleichgewichtung) und nach Dividendenbehandlung (Kurs- vs. Performanceindex) klassifizieren; bekannte Indizes wie DAX und Scale 30 erscheinen sowohl als Kurs- als auch als Performanceindex.

### React-Vorschlag
`IndexTypeMatrix` - `MatrixTable` mit Zeilenkoepfen (Dividendenbehandlung) und Spaltenkoepfen (Gewichtung), Zellen als untereinander gelistete Index-Tags.

## Folie 21 - Anzahl der Aktien in versch. Aktienindizes

### In der MD vorhanden
Die MD (Zeilen 342-356) enthaelt die Tabelle vollstaendig und korrekt strukturiert als Markdown-Tabelle (Aktienmarkt / Index / Anzahl der Aktien).

### Fehlende visuelle Inhalte
Formatierte dreispaltige Tabelle mit blauem Kopf (Aktienmarkt | Index | Anzahl der Aktien) und abwechselnd hell/dunkel gestreiften Zeilen. Inhaltlich vollstaendig in der MD - keine echten visuellen Verluste, nur Formatierung.

### Visuelle Rekonstruktion
Nicht erforderlich (Standardtabelle).

### Inhaltliche Rekonstruktion
| Aktienmarkt | Index | Anzahl der Aktien |
|---|---|---|
| New York SE | DJIA, S&P 500, NYSE Comp. | 30, 500, ca. 1.900 |
| NASDAQ | NASDAQ Composite | ca. 2.500 |
| London | Financial Times | 100 |
| Paris | CAC 40 | 40 |
| Frankfurt | DAX | 40 |
| Zuerich | SMI | 20 |
| Mailand | FTSE MIB | 40 |
| Tokio | TOPIX100 | 100 |
| Toronto | S&P/TSX 60 | 60 |
| Singapur | Straits Times Index | 30 |
| Hong Kong | Hang Seng | 50 |

### Fachliche Aussage
Uebersicht der Mitgliederzahlen fuehrender Aktienindizes weltweit; sie reicht von sehr selektiven Auswahlindizes (DJIA 30, SMI 20) bis zu breiten Benchmarkindizes (NYSE Composite ca. 1.900, NASDAQ Composite ca. 2.500).

### React-Vorschlag
`IndexConstituentsTable` - einfache `DataTable` mit drei Spalten.

## Folie 22 - Umsetzung der passiven Investmentphilosophie (Indexfonds vs. Indexzertifikate vs. ETFs)

### In der MD vorhanden
Die MD (Zeilen 359-380) enthaelt alle Inhalte, aber die Vergleichstabelle ist stark zerbrochen: Zeilen wie "Risiko durch Insolvenz des Emittenten", "An- und Verkaufskosten" sind ueber mehrere Textzeilen zerrissen und teils ohne klare Spaltenzuordnung. Die Matrix muss aus der Grafik rekonstruiert werden.

### Fehlende visuelle Inhalte
Vergleichstabelle mit blauem Kopf und blauen Zeilenkopfzellen, 3 Vergleichsspalten:
- Spaltenkoepfe: Indexfonds | Indexzertifikate | ETFs
- Zeilenkoepfe (links): Rechtsstatus, Risiko durch Insolvenz des Emittenten, Handel, Laufzeit, Kursfeststellung, An- und Verkaufskosten, Gebuehren

### Visuelle Rekonstruktion
```
                 | Indexfonds          | Indexzertifikate    | ETFs
Rechtsstatus     | Offener Inv.fonds   | Schuldverschreibung | Offener Inv.fonds
Insolvenzrisiko  | Sondervermoegen     | Totalverlustrisiko  | Sondervermoegen
Handel           | ueber KVG           | boersengehandelt    | boersengehandelt
Laufzeit         | unbegrenzt          | be- u. unbegrenzt   | unbegrenzt
Kursfeststellung | einmal taeglich     | laufend             | laufend
An-/Verkaufskosten | 2-5%              | Spread, Courage     | Spread, Courtage
Gebuehren        | 0,2% bis 2%         | keine               | 0,00% bis 0,7%
```

### Inhaltliche Rekonstruktion
| | Indexfonds | Indexzertifikate | ETFs |
|---|---|---|---|
| Rechtsstatus | Offener Investmentfonds | Schuldverschreibung | Offener Investmentfonds |
| Risiko durch Insolvenz des Emittenten | Sondervermoegen | Totalverlustrisiko | Sondervermoegen |
| Handel | ueber KVG | boersengehandelt | boersengehandelt |
| Laufzeit | unbegrenzt | be- und unbegrenzt | unbegrenzt |
| Kursfeststellung | einmal taeglich | laufend | laufend |
| An- und Verkaufskosten | 2-5% | Spread, Courage | Spread, Courtage |
| Gebuehren | 0,2% bis 2% | keine | 0,00% bis 0,7% |

(Hinweis: Die ORIGINALFOLIE schreibt in der Spalte Indexzertifikate "Spread, Courage" und in der Spalte ETFs "Spread, Courtage" - die Inkonsistenz "Courage" vs. "Courtage" stammt aus der Folie selbst, ist also KEIN Extraktions-/OCR-Fehler der MD. Faktisch gemeint ist beide Male "Courtage". Wiedergabe hier folientreu.)

### Fachliche Aussage
Vergleich der drei passiven Umsetzungsvehikel: Indexfonds und ETFs sind insolvenzgeschuetztes Sondervermoegen, Indexzertifikate dagegen Schuldverschreibungen mit Totalverlustrisiko; ETFs vereinen niedrige Gebuehren (0,00 % bis 0,7 %) mit laufender Boersenhandelbarkeit.

### React-Vorschlag
`PassiveVehiclesComparison` - `MatrixTable` mit Zeilenkopf-Eigenschaften und drei Produkt-Spalten; Insolvenzrisiko-Zelle "Totalverlustrisiko" optisch hervorheben.

## Folie 23 - Umsetzung der passiven Investmentphilosophie (ETFs)

### In der MD vorhanden
Die MD (Zeilen 383-394) enthaelt den Aufzaehlungstext vollstaendig. Die grafische ETF-Gleichung am unteren Folienrand fehlt jedoch komplett, da sie als Bild/Icon-Grafik eingebettet ist.

### Fehlende visuelle Inhalte
Am unteren Folienrand eine grafische "Gleichung" mit Icons, von links nach rechts:
- Roter Block mit weisser Aufschrift **ETF** (darunter klein die Quelle/Marke "justETF.com"),
- **=** Gleichheitszeichen,
- Icon mit Beschriftung **boersengehandelt** (Untertitel: "jederzeit handelbar"),
- **+** Pluszeichen,
- Icon mit Beschriftung **Index** (Untertitel: "Marktbarometer"),
- **+** Pluszeichen,
- Icon mit Beschriftung **Fonds** (Untertitel: "Sondervermoegen").
Die Gleichung visualisiert: ETF = boersengehandelt + Index + Fonds (Sondervermoegen).

### Visuelle Rekonstruktion
```
[ ETF ] = [boersengehandelt] + [Index] + [Fonds]
            (jederzeit          (Markt-    (Sonder-
             handelbar)         barometer)  vermoegen)
```

### Inhaltliche Rekonstruktion
ETFs:
- Exchange Traded Funds (ETF) sind Fonds, die von der Fondsgesellschaft fuer den kostenguenstigen Handel an der Boerse konzipiert sind.
- ETFs haben permanent einen aktuellen Kurs und werden im Prinzip wie Aktien gehandelt; normale Investmentfonds nur einmal taeglich zum KVG-Ruecknahmekurs.
- Es gibt keine Ausgabeaufschlaege.
- Da ein ETF kein aktives Portfoliomanagement betreibt, sondern nur einen Index nachbildet, fallen die Verwaltungskosten sehr gering aus.

Gleichung: ETF = boersengehandelt (jederzeit handelbar) + Index (Marktbarometer) + Fonds (Sondervermoegen).

### Fachliche Aussage
Ein ETF vereint drei Eigenschaften: laufende Boersenhandelbarkeit, Indexnachbildung und den Rechtsstatus eines Fonds-Sondervermoegens - bei sehr niedrigen Kosten und ohne Ausgabeaufschlag.

### React-Vorschlag
`EtfEquationDiagram` - horizontale Icon-Kette aus `IconBadge`-Komponenten mit "="/"+"-Operatoren, daneben/oben die ETF-Bullet-Liste; auf Mobile vertikal stapeln.

## Folie 24 - Wachstum der ETF-Branche

### In der MD vorhanden
Die MD (Zeilen 397-439) enthaelt fast alle Zahlenwerte beider Diagramme, jedoch chaotisch verstreut und mit zerbrochenen, gespiegelten Achsentexten (z. B. "sFTE red lhaznA", "negoemreV setetlawreV oruE .oiM ni"). Achsenzuordnung, Reihenfolge und Diagrammtitel sind aus dem Text nicht zuverlaessig rekonstruierbar; daher muss die Grafik herangezogen werden.

### Fehlende visuelle Inhalte
Zwei vertikale Balkendiagramme (dunkelblaue Saeulen) uebereinander:
1) Oben - Titel "Anzahl der weltweit verwalteten ETFs von 2005 bis 2024". Y-Achse "Anzahl der ETFs", Skala 0 / 5.000 / 10.000 / 15.000. X-Achse Jahre 2007-2024. Werte ueber den Saeulen (steigend): 2007 = 1.209, 2008 = 1.633, 2009 = 1.986, 2010 = 2.513, 2011 = 3.057, 2012 = 3.370, 2013 = 3.635, 2014 = 4.016, 2015 = 4.486, 2016 = 4.862, 2017 = 5.309, 2018 = 6.519, 2019 = 6.968, 2020 = 7.424, 2021 = 8.561, 2022 = 9.543, 2023 = 10.321, 2024 = 11.627.
2) Unten - Titel "Entwicklung des verwalteten Vermoegens der deutschen ETF-Branche in den Jahren von 2006 bis 2022 (in Millionen Euro)". Y-Achse "Verwaltetes Vermoegen in Mio. Euro", Skala 0 / 50.000 / 100.000 / 150.000 / 200.000 / 250.000. X-Achse Jahre 2006-2022. Werte: 2006 = 17.627, 2007 = 19.862, 2008 = 35.939, 2009 = 54.490, 2010 = 68.215, 2011 = 66.562, 2012 = 74.245, 2013 = 83.620, 2014 = 84.111, 2015 = 107.137, 2016 = 109.786, 2017 = 134.285, 2018 = 125.044, 2019 = 152.112, 2020 = 168.922, 2021 = 224.862, 2022 = 190.692.
Quelle: Statista, abgerufen am 17.05.26.

### Visuelle Rekonstruktion
```
Anzahl ETFs (weltweit), 2007->2024:
1.209 (niedrig) ... stetig steigend ...  11.627 (Maximum 2024)

Verwaltetes Vermoegen DE-ETF (Mio. EUR), 2006->2022:
17.627 (niedrig) ... Anstieg, Peak 2021 = 224.862, dann Rueckgang 2022 = 190.692
```

### Inhaltliche Rekonstruktion
Anzahl weltweit verwalteter ETFs (2007-2024): 1.209; 1.633; 1.986; 2.513; 3.057; 3.370; 3.635; 4.016; 4.486; 4.862; 5.309; 6.519; 6.968; 7.424; 8.561; 9.543; 10.321; 11.627.

Verwaltetes Vermoegen deutsche ETF-Branche (Mio. EUR, 2006-2022): 17.627; 19.862; 35.939; 54.490; 68.215; 66.562; 74.245; 83.620; 84.111; 107.137; 109.786; 134.285; 125.044; 152.112; 168.922; 224.862; 190.692.

### Fachliche Aussage
Sowohl die Zahl der ETFs weltweit als auch das in deutschen ETFs verwaltete Vermoegen sind ueber die letzte Dekade massiv gewachsen (ETF-Anzahl von rund 1.200 auf ueber 11.600), was den starken Trend zum passiven Investieren belegt.

### React-Vorschlag
`EtfGrowthCharts` - zwei untereinander gestapelte `BarChart`-Komponenten mit den oben gelisteten Datenreihen, gemeinsame `SourceNote` (Statista).

## Folie 25 - Mehr ETFs als Aktien an der Wall Street

### In der MD vorhanden
Die MD (Zeilen 441-444) enthaelt nur Titel, Untertitel und die Quellenangabe. Das gesamte Liniendiagramm der Financial Times fehlt, da es als Bild eingebettet ist.

### Fehlende visuelle Inhalte
Eingebettete Financial-Times-Grafik (hellrosa Hintergrund) mit Titel "ETFs now outnumber individual **stocks** on Wall Street". Zwei Liniendiagramme:
- **Rote Linie**: "No. of US-listed ETFs"
- **Blaue Linie**: "No. of US-listed companies"
X-Achse: ca. 1995 bis 2025. Y-Achse: 0k / 2k / 4k / 6k / 8k.
Verlaeufe (visuell abgelesen): Die blaue Linie (gelistete Unternehmen) startet um 1995 bei ca. 7k, steigt kurz auf ca. 8k (Hoch um 1996), faellt dann bis ca. 2005 auf ca. 5k und pendelt anschliessend um ca. 4-4,5k. Die rote Linie (ETFs) startet nahe 0 (ca. 1995-2000), steigt ab ca. 2005 zunehmend an und uebersteigt um 2025 die blaue Linie (beide treffen sich nahe ca. 4-4,5k, ETF leicht darueber). Aussage: ETFs ueberholen die Zahl gelisteter Einzelaktien.
Marke "FINANCIAL TIMES" unten links, "Source: Morningstar" unten rechts.
Quelle (Folie): Financial Times, September 2025.

### Visuelle Rekonstruktion
```
8k |   /\(blau: companies)
6k |  /   \____
4k |        \____~~~~~~~~  <- blau pendelt ~4k
2k |              ____----  <- rot: ETFs steigend
0k |____------/_____________________
   1995    2005    2015    2025
rot (ETFs) kreuzt blau (companies) ~ um 2025
```

### Inhaltliche Rekonstruktion
Vergleich: Anzahl US-gelisteter ETFs (rot, von ~0 auf ~4k+) vs. Anzahl US-gelisteter Unternehmen (blau, von ~7-8k fallend auf ~4k). Schnittpunkt um 2025: ETFs ueberholen Einzelaktien. (Exakte Werte nur visuell abgelesen.)

### Fachliche Aussage
An der Wall Street gibt es inzwischen mehr ETFs als einzeln gelistete Aktien - ein Sinnbild fuer die Dominanz passiver, indexbasierter Produkte.

### React-Vorschlag
`EtfVsStocksLineChart` - `LineChart` mit zwei Serien (ETFs rot, Companies blau) oder, da nur visuelle Schaetzwerte vorliegen, als Bild-Komponente mit Caption und `SourceNote` (Financial Times / Morningstar).

## Folie 26 - Aktiv vs. Passiv: Vor- und Nachteile

### In der MD vorhanden
Die MD (Zeilen 447-465) enthaelt alle Inhalte, aber die 2x2-Vier-Quadranten-Struktur ist zerbrochen: Vor-/Nachteile und aktiv/passiv sind im Text vermischt und ohne klare Zuordnung. Die Matrix muss aus der Grafik rekonstruiert werden.

### Fehlende visuelle Inhalte
Vier farbige Quadranten-Boxen (2x2):
- oben links (gruen): "Vorteile des **aktiven** Managements"
- oben rechts (rot/orange): "Nachteile des **aktiven** Managements"
- unten links (gruen): "Vorteile des **passiven** Managements"
- unten rechts (rot/orange): "Nachteile des **passiven** Managements"
Gruen = Vorteile, Rot/Orange = Nachteile.

### Visuelle Rekonstruktion
```
+-------------------------------+-------------------------------+
| Vorteile AKTIV (gruen)        | Nachteile AKTIV (rot)         |
+-------------------------------+-------------------------------+
| Vorteile PASSIV (gruen)       | Nachteile PASSIV (rot)        |
+-------------------------------+-------------------------------+
```

### Inhaltliche Rekonstruktion
| | Vorteile | Nachteile |
|---|---|---|
| Aktives Management | Chance auf ueberdurchschnittliche Renditen; Erhoehte Flexibilitaet (Verwaltung, Umschichtung etc.); In Baisse-Phasen antizyklische Anlagepolitik moeglich | Hoher Prognoseaufwand; Hohe laufende Kosten (Verwaltung, Umschichtung etc.); Erhoehtes Abweichungsrisiko |
| Passives Management | Niedrigere Kosten; Hohe Transparenz; Geringeres Abweichungsrisiko | Outperformance nicht beabsichtigt; Prozyklisches Investment; Performance haengt von der Guete des Benchmark/Indices ab |

### Fachliche Aussage
Aktives Management bietet Renditechancen und Flexibilitaet, ist aber teuer und prognoseintensiv; passives Management punktet mit niedrigen Kosten und Transparenz, verzichtet aber auf Outperformance und ist prozyklisch.

### React-Vorschlag
`ActivePassiveProsConsGrid` - 2x2-`QuadrantGrid` mit gruenen Vorteil- und roten Nachteil-Boxen, Zeilen fuer aktiv/passiv.

## Folie 27 - Erfolgsaussichten aktives Portfoliomanagement (Success Rate by Category)

### In der MD vorhanden
Die MD (Zeilen 467-470) enthaelt nur Titel und die Quelle "Morningstar". Das gesamte Balkendiagramm mit allen Kategorien und Werten fehlt, da es als Bild eingebettet ist.

### Fehlende visuelle Inhalte
Gruppiertes vertikales Balkendiagramm mit Titel "ACTIVE FUNDS' SUCCESS RATE BY CATEGORY". Y-Achse "in %", Skala 0 bis 60 (Schritte 10). Pro Fonds-Kategorie vier Saeulen mit Legende:
- **1 year** (dunkelblau), **3 years** (tuerkis), **5 years** (dunkelgrau), **10 years** (hellgrau).
Kategorien auf der X-Achse (von links): Europe Large-Cap Blend Equity; US Large-Cap Blend Equity; Japan Large-Cap Equity; Global Large-Cap Blend Equity; Global Emerging Markets Equity; EUR Government Bond; EUR Corporate Bond; USD Government Bond; USD Corporate Bond.

Datenbeschriftungen ueber den Saeulen sind bei Vergroesserung gut lesbar (1y / 3y / 5y / 10y), in der MD nicht enthalten:
- Europe Large-Cap Blend Equity: 28 / 23 / 20 / 16
- US Large-Cap Blend Equity: 23 / 17 / 16 / 12
- Japan Large-Cap Equity: 41 / 39 / 27 / 18
- Global Large-Cap Blend Equity: 22 / 18 / 13 / 12
- Global Emerging Markets Equity: 29 / 31 / 30 / (4. Saeule durch Beschriftung verdeckt, nicht sicher lesbar)
- EUR Government Bond: 28 / 30 / (5y nicht sicher lesbar) / 14
- EUR Corporate Bond: 57 / 53 / 44 / 44 (zwei Werte 44 dicht beieinander)
- USD Government Bond: 27 / 14 / 29 / 18
- USD Corporate Bond: 27 / 33 / 26 / 35
(Alle Zahlen visuell abgelesen; einzelne Saeulen teils verdeckt.)
Quellenhinweis im Diagramm (klein): Morningstar / European Active-Passive Barometer, October 2018, Data as of 30 June 2018. Quelle (Folie): Morningstar.

### Visuelle Rekonstruktion
```
in % 60|                                       57 EUR Corporate
     40|        41 Japan        30 EM/EURgov    53/44/44      35 USD Corp
     20| 28..  39..    22..  29..  28..        27..          27 33 26 ..
      0|__EU__US__JP__Global__EM__EURgov__EURcorp__USDgov__USDcorp
Legende: ■1y ■3y ■5y ■10y  (success rate = % aktiver Fonds, die Benchmark schlagen)
```

### Inhaltliche Rekonstruktion
"Active Funds' Success Rate by Category" - Anteil aktiver Fonds (in %), die ihre Benchmark schlagen, je Kategorie und Haltedauer (1/3/5/10 Jahre). Die meisten Aktien-Kategorien liegen deutlich unter 50 % und sinken tendenziell mit laengerem Horizont; deutlicher Ausreisser nach oben: EUR Corporate Bond (57 % auf 1 Jahr). Konkrete Werte siehe Liste oben (visuell abgelesen).

### Fachliche Aussage
Ueber fast alle Kategorien hinweg schlaegt nur eine Minderheit aktiver Fonds die jeweilige Benchmark, und die Erfolgsquote sinkt bei Aktien-Kategorien mit zunehmendem Anlagehorizont - ein empirisches Argument fuer passives Management. Auffaellige Ausnahme sind Unternehmensanleihen (EUR Corporate Bond bis 57 %).

### React-Vorschlag
`ActiveSuccessRateChart` - gruppiertes `BarChart` (vier Serien 1/3/5/10 Jahre) mit den oben abgelesenen Werten und `SourceNote` (Morningstar); verdeckte/unsichere Saeulen als geschaetzt kennzeichnen. Alternativ Bild-Komponente mit Caption.

## Folie 28 - Erfolgsaussichten aktives Portfoliomanagement ("Three Decades of Index Superiority - Twice")

### In der MD vorhanden
Die MD (Zeilen 473-488) enthaelt alle Werte, aber die Tabellenstruktur ist zerbrochen: Die zweistufigen Spaltenkoepfe (zwei Perioden mit je zwei Spalten) und die Zeilenzuordnung sind verschoben; die Matrix muss aus der Grafik rekonstruiert werden.

### Fehlende visuelle Inhalte
Formatierte Tabelle mit zweistufigem blauem Kopf:
- obere Kopfebene: zwei Perioden **1945-1975** und **1985-2015** (je ueber zwei Spalten);
- untere Kopfebene 1945-1975: **Average Equity Fund** | **S&P 500 Index**; 1985-2015: **Average Large Cap Fund** | **S&P 500 Index**.
Zeilenkoepfe (links, blau): Annualized Return, Index Advantage, Cumulative return, Index Advantage, Standard Deviation, Sharpe Ratio, R2.
Die beiden "Annualized Return"-S&P-500-Zellen (11,3 % und 11,2 %) sind gelb/hell hervorgehoben.

### Visuelle Rekonstruktion
```
                    |        1945-1975          |        1985-2015
                    | Avg Equity Fund | S&P 500 | Avg Large Cap Fund | S&P 500
Annualized Return   | 9,7%            | 11,3%   | 9,6%               | 11,2%   (gelb)
Index Advantage     |                 | 1,6%    |                    | 1,6%
Cumulative return   | 1.539%          | 2.402%  | 1.548%             | 2.494%
Index Advantage     |                 | 863%    |                    | 946%
Standard Deviation  | 16,4%           | 18,6%   | 16,8%              | 17,3%
Sharpe Ratio        | 0,38            | 0,42    | 0,39               | 0,48
R2                  | 0,96            | 1,00    | 0,99               | 1,00
```

### Inhaltliche Rekonstruktion
| | 1945-1975: Average Equity Fund | 1945-1975: S&P 500 Index | 1985-2015: Average Large Cap Fund | 1985-2015: S&P 500 Index |
|---|---|---|---|---|
| Annualized Return | 9,7% | 11,3% | 9,6% | 11,2% |
| Index Advantage | | 1,6% | | 1,6% |
| Cumulative return | 1.539% | 2.402% | 1.548% | 2.494% |
| Index Advantage | | 863% | | 946% |
| Standard Deviation | 16,4% | 18,6% | 16,8% | 17,3% |
| Sharpe Ratio | 0,38 | 0,42 | 0,39 | 0,48 |
| R2 | 0,96 | 1,00 | 0,99 | 1,00 |

Quelle: Bogle (2016), The Index Mutual Fund, in: Financial Analysts Journal 2016, No. 1, S. 11.

### Fachliche Aussage
In zwei unabhaengigen Dreissigjahresperioden (1945-1975 und 1985-2015) erzielte der S&P 500 eine hoehere Jahresrendite (Index Advantage je 1,6 %) bei besserer Sharpe Ratio als der durchschnittliche aktive Aktienfonds - der kumulierte Vorteil betrug 863 % bzw. 946 %.

### React-Vorschlag
`IndexSuperiorityTable` - `MatrixTable` mit zweistufigem Spaltenkopf (Periode -> Fonds/Index), Hervorhebung der S&P-500-Renditezellen, `SourceNote` (Bogle 2016).

## Folie 29 - Die Sicht von Vanguard (The zero-sum game)

### In der MD vorhanden
Die MD (Zeilen 491-493) enthaelt nur Titel und Untertitel; die gesamte Vanguard-Grafik fehlt, da als Bild eingebettet.

### Fehlende visuelle Inhalte
Eingebettete Vanguard-Grafik mit Label "Figure 1. The zero-sum game". Zwei ueberlagerte glockenfoermige Verteilungskurven (Normalverteilungen):
- **rote Kurve**: leicht nach links versetzt, etwas schmaler/hoeher;
- **gruene Kurve**: leicht nach rechts versetzt.
Achsen: Y-Achse "Probability", X-Achse "Expected return relative to benchmark (pp)" von -5 bis +5 (Schritte 1).
Markierungen/Pfeile:
- gestrichelte vertikale Linie knapp links von 0 = "Cost of funds" (Doppelpfeil oben zwischen den beiden Kurvenspitzen);
- Pfeil zu "Median post-cost return of funds";
- Pfeil zu "Benchmark return" (bei 0);
- "Funds underperforming benchmark" (links, Bereich links der Benchmark);
- "Funds outperforming benchmark" (rechts);
- die Flaeche unter der gruenen Kurve rechts von 0 ist gruen eingefaerbt (outperformende Fonds).
Quelle: The Vanguard Group, Inc.

### Visuelle Rekonstruktion
```
Probability
   |        ,-. rot   ,-. gruen
   |       /   \    /   \
   |      / rot \  / gruen\   (gruene Flaeche rechts von 0 eingefaerbt)
   |_____/_______\X/_______\______
  -5  -4 -3 -2 -1 |0  1  2  3  4  5   Expected return rel. to benchmark (pp)
                  ^Benchmark return
        Cost of funds (gestrichelt, knapp links von 0)
  links: underperforming   rechts: outperforming
```

### Inhaltliche Rekonstruktion
- Y-Achse: Probability (Wahrscheinlichkeit); X-Achse: Expected return relative to benchmark in Prozentpunkten (-5 bis +5).
- Rote Kurve und gruene Kurve = Renditeverteilung der Fonds; "Cost of funds" verschiebt die Median-Post-Cost-Rendite nach links unter die Benchmark (0).
- Beschriftungen: Median post-cost return of funds; Benchmark return (bei 0); Funds underperforming benchmark (links); Funds outperforming benchmark (rechts).
Quelle: The Vanguard Group, Inc.

### Fachliche Aussage
Aktives Management ist vor Kosten ein Nullsummenspiel; nach Abzug der Fondskosten verschiebt sich die mediane Fondsrendite unter die Benchmark, sodass im Mittel mehr Fonds die Benchmark verfehlen als sie schlagen.

### React-Vorschlag
`ZeroSumGameDiagram` - statische Abbildung (Bild) der Vanguard-Grafik mit Caption und `SourceNote`; bei Eigenbau zwei ueberlagerte Glockenkurven (SVG) mit Annotationen, da nur qualitative (keine exakten) Werte vorliegen.

## Folie 30 - Tracking-Error

### In der MD vorhanden
Die MD (Zeilen 496-511) enthaelt den gesamten Textinhalt vollstaendig und korrekt (Definition Tracking-Error, mathematische Definition als Volatilitaet der Renditedifferenz, sowie alle Ursachen des Tracking-Errors bei Indexfonds inkl. 10-Prozent-Begrenzung des Einzelwerts).

### Fehlende visuelle Inhalte
Reine Textfolie mit zwei Aufzaehlungsbloecken ("Tracking-Error" und "Tracking-Error bei Index-Fonds"). Keine Grafiken, Tabellen oder Diagramme - nichts visuell verloren.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Bullet-Liste).

### Inhaltliche Rekonstruktion
Tracking-Error:
- Mass fuer die Qualitaet der Nachbildung der Benchmark.
- Risiko, die Rendite der Benchmark zu verfehlen.
- Mathematisch: Volatilitaet der Differenz zwischen Rendite des Portfolios und Rendite der Benchmark (bzw. des Alphas).

Tracking-Error bei Index-Fonds (Ursachen):
- Transaktionskosten im Portfolio, aber nicht in der Benchmark.
- Exakte Indexnachbildung aus Kostengruenden nicht empfehlenswert bzw. bei sehr grossen Indizes (z. B. MSCI World od. Barclays Global Agg) nicht praktikabel.
- Re-Investment von Kapitalausschuettungen nicht nach Indexregeln moeglich.
- Steuerzahlungspflicht des Anlegers (Net Dividend Reinvested vs. Total Return).
- Gewicht eines Einzelwerts ist im Fondsportfolio auf 10 Prozent beschraenkt.

### Fachliche Aussage
Der Tracking-Error misst, wie gut ein Indexfonds seine Benchmark nachbildet (Volatilitaet der Renditedifferenz); er entsteht durch Transaktionskosten, fehlende exakte Replikation, Reinvestitions- und Steuerregeln sowie die 10-Prozent-Gewichtsgrenze fuer Einzelwerte.

### React-Vorschlag
`TrackingErrorInfo` - zweiteilige Info-Card (Definition / Ursachen bei Indexfonds) mit hervorgehobener mathematischer Definition als `Callout`.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 3: Investmentphilosophien-Baum (aktiv/passiv/tilted)
2. Folie 5: Core-Satellite-Diagramm
3. Folie 6: Einsatzbereich-Matrix der Indizes
4. Folie 9: Vermögensverwaltungs-Kreislauf (sechs Stationen)
5. Folie 11: Streu-/Liniendiagramm "more Benchmarks/ETFs than Stocks"
6. Folie 15-16: MSCI-World-Komposition (Top-10-Tabelle + Pie-Charts, 2026 vs. 2018)
7. Folie 17-18: Index-Berechnungsaufgabe und Lösung als Aufgabe/Lösung-Paar
8. Folie 20: Index-Typen-Matrix (Gewichtung x Dividendenbehandlung)
9. Folie 22: Vergleich passive Vehikel (Indexfonds/Zertifikate/ETFs)
10. Folie 24: ETF-Wachstums-Balkendiagramme
11. Folie 26: Vor-/Nachteile-Quadranten aktiv/passiv
12. Folie 27: Success-Rate-Balkendiagramm
13. Folie 28: Index-Superiority-Tabelle (zweistufiger Periodenkopf)
14. Folie 29: Zero-Sum-Game-Diagramm

## Kann vereinfacht werden

- Folie 23: ETF-Gleichung als Icon-Kette (oder einfache Badge-Reihe)
- Folie 25: Financial-Times-Liniendiagramm als Bild mit Caption (Werte nur geschätzt)
- Folie 10: Provider-Logos als Namens-Chips statt echter Logos
- Folien 4, 7, 8, 12, 13, 14, 19, 30: reine Textfolien als strukturierte Listen/Cards mit Akzent-Hervorhebungen
- Folie 21: Standard-DataTable

## Nicht fachlich relevant

- HBW-Logo und IIA-/Provider-Logos (Markenelemente)
- dekorative Titelfotos (Folie 1)
- Kopfzeile und Folien-Footer (`Asset Management / CS / Folie ...`)
- Copyright-Zeile (`© 2026 - Hochschule der Bayerischen Wirtschaft`)
- Versionskennung "V26-05-17"
- exakte Folienpositionierung und Bildästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich vorhandenen Skriptinhalten):

```js
// Folie 21 - Anzahl der Aktien in verschiedenen Aktienindizes
export const indexConstituents = [
  { market: 'New York SE', index: 'DJIA, S&P 500, NYSE Comp.', count: '30, 500, ca. 1.900' },
  { market: 'NASDAQ', index: 'NASDAQ Composite', count: 'ca. 2.500' },
  { market: 'London', index: 'Financial Times', count: '100' },
  { market: 'Paris', index: 'CAC 40', count: '40' },
  { market: 'Frankfurt', index: 'DAX', count: '40' },
  { market: 'Zürich', index: 'SMI', count: '20' },
  { market: 'Mailand', index: 'FTSE MIB', count: '40' },
  { market: 'Tokio', index: 'TOPIX100', count: '100' },
  { market: 'Toronto', index: 'S&P/TSX 60', count: '60' },
  { market: 'Singapur', index: 'Straits Times Index', count: '30' },
  { market: 'Hong Kong', index: 'Hang Seng', count: '50' },
];

// Folie 24 - ETF-Wachstum (Quelle: Statista)
export const etfCountWorldwide = [
  { year: 2007, value: 1209 }, { year: 2008, value: 1633 }, { year: 2009, value: 1986 },
  { year: 2010, value: 2513 }, { year: 2011, value: 3057 }, { year: 2012, value: 3370 },
  { year: 2013, value: 3635 }, { year: 2014, value: 4016 }, { year: 2015, value: 4486 },
  { year: 2016, value: 4862 }, { year: 2017, value: 5309 }, { year: 2018, value: 6519 },
  { year: 2019, value: 6968 }, { year: 2020, value: 7424 }, { year: 2021, value: 8561 },
  { year: 2022, value: 9543 }, { year: 2023, value: 10321 }, { year: 2024, value: 11627 },
];

export const etfAumGermany = [ // verwaltetes Vermögen deutsche ETF-Branche in Mio. EUR
  { year: 2006, value: 17627 }, { year: 2007, value: 19862 }, { year: 2008, value: 35939 },
  { year: 2009, value: 54490 }, { year: 2010, value: 68215 }, { year: 2011, value: 66562 },
  { year: 2012, value: 74245 }, { year: 2013, value: 83620 }, { year: 2014, value: 84111 },
  { year: 2015, value: 107137 }, { year: 2016, value: 109786 }, { year: 2017, value: 134285 },
  { year: 2018, value: 125044 }, { year: 2019, value: 152112 }, { year: 2020, value: 168922 },
  { year: 2021, value: 224862 }, { year: 2022, value: 190692 },
];
```

```js
// Folie 28 - "Three Decades of Index Superiority - Twice" (Quelle: Bogle 2016)
export const indexSuperiority = [
  { metric: 'Annualized Return',   eq4575: '9,7%',   sp4575: '11,3%',  eq8515: '9,6%',   sp8515: '11,2%' },
  { metric: 'Index Advantage',     eq4575: '',       sp4575: '1,6%',   eq8515: '',       sp8515: '1,6%' },
  { metric: 'Cumulative return',   eq4575: '1.539%', sp4575: '2.402%', eq8515: '1.548%', sp8515: '2.494%' },
  { metric: 'Index Advantage',     eq4575: '',       sp4575: '863%',   eq8515: '',       sp8515: '946%' },
  { metric: 'Standard Deviation',  eq4575: '16,4%',  sp4575: '18,6%',  eq8515: '16,8%',  sp8515: '17,3%' },
  { metric: 'Sharpe Ratio',        eq4575: '0,38',   sp4575: '0,42',   eq8515: '0,39',   sp8515: '0,48' },
  { metric: 'R2',                  eq4575: '0,96',   sp4575: '1,00',   eq8515: '0,99',   sp8515: '1,00' },
];
// Spaltenköpfe: 1945-1975 (Average Equity Fund | S&P 500), 1985-2015 (Average Large Cap Fund | S&P 500)

// Folie 26 - Vor- und Nachteile aktiv vs. passiv
export const activePassiveProsCons = {
  aktiv: {
    vorteile: ['Chance auf überdurchschnittliche Renditen', 'Erhöhte Flexibilität (Verwaltung, Umschichtung etc.)', 'In Baisse-Phasen antizyklische Anlagepolitik möglich'],
    nachteile: ['Hoher Prognoseaufwand', 'Hohe laufende Kosten (Verwaltung, Umschichtung etc.)', 'Erhöhtes Abweichungsrisiko'],
  },
  passiv: {
    vorteile: ['Niedrigere Kosten', 'Hohe Transparenz', 'Geringeres Abweichungsrisiko'],
    nachteile: ['Outperformance nicht beabsichtigt', 'Prozyklisches Investment', 'Performance hängt von der Güte des Benchmark/Indices ab'],
  },
};
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten (Charts, Tabellen, Quadranten) steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
