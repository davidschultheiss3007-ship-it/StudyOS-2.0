# skript-02-heuristiken-und-kognitive-verzerrungen_MD+PDF - Heuristiken und kognitive Verzerrungen: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die Markitdown-Datei `skript-02-heuristiken-und-kognitive-verzerrungen.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-02-heuristiken-und-kognitive-verzerrungen.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder als eingebettete Bilder gar nicht erfasst wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Formeln, Tabellen, Schaubilder, Illusionsgrafiken oder Bildaussagen verloren gehen.

**Quelle:** `skript-02-heuristiken-und-kognitive-verzerrungen.pdf` mit 82 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die Kopfzeile, der Folien-Footer ("Behavioral Finance / CS / Folie XX") und die Copyright-Zeile ("© 2026 – Hochschule der Bayerischen Wirtschaft") sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind dagegen die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Mehrere Folien (z. B. 19, 20, 21, 22, 53, 54, 68, 69, 70, 74, 81) sind durch die PDF-Konvertierung als vermischte/zerbrochene Tabellen extrahiert. Diese Inhalte in React als echte Tabellen, Karten oder strukturierte Listen neu aufbauen.
2. **Illusions- und Wahrnehmungsgrafiken als Demo-Komponenten umsetzen:** Müller-Lyer, Ebbinghaus, Hermann-Gitter, Café-Wall und Spielkartenfächer (Folien 4-9, 13) tragen die fachliche Aussage. Sie sollten als SVG-Komponenten nachgebaut oder als Asset eingebunden werden (komplexe Bewegungsillusionen wie Folie 7 nicht synthetisch nachbilden).
3. **Formeln korrekt rendern:** Bayes-Theorem (Folie 35), die Bayes-Rechnung (Folie 36) und der Ankerungsindex (Folie 76) sind als Formel-Blöcke (KaTeX/MathML) umzusetzen, nicht als Fließtext.
4. **Eingebettete Diagramme rekonstruieren:** Barber/Odean-Quintil-Diagramm (Folie 49), Hindsight-Bias-Balkendiagramm (Folie 56), Vertrauenskassen-Scatter (Folie 65) und die WTP-Quintil-Tabelle (Folie 78) sind in der MD gar nicht erfasst und müssen als Chart/Tabelle aufgebaut werden. Visuell abgelesene Werte als solche kennzeichnen, keine Zahlen erfinden.
5. **Farbliche Hervorhebungen und Callouts erhalten:** Viele Folien setzen Schlüsselbegriffe blau/fett und Kernaussagen in hellblaue Callout-Kästen. Diese Hervorhebungen tragen Bedeutung und sollten erhalten bleiben.
6. **Quellenangaben beibehalten:** Quellen wie Beck (2014), Kahneman (2012), Barber/Odean (2000), Ariely et al. (2003), Bargh/Chen/Burrows (1996), Bateson/Nettle/Roberts (2006) als `.source-note` übernehmen.
7. **Video-/Meme-Folien als externe Verweise behandeln:** Folien 10, 45, 66, 72 verlinken Videos/Memes; in React als Verweis-Card mit Hinweis "offline nicht verfügbar", keine erfundenen Inhalte.
8. **Originalschreibweisen und OCR-Eigenheiten beibehalten:** z. B. "Determinaten" (Folie 26), gespiegelter Auflösungstext (Folie 67).

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleHero` | 1 | Kapitel-Header mit Modultitel, Kapitelnummer und dekorativer Bildleiste |
| `AgendaList` | 2 | 9-Punkte-Agenda mit hervorgehobenem aktivem Eintrag |
| `PerceptionDemo` | 3 | Zweispaltige Fußabdruck-Gegenüberstellung (Erhebung/Vertiefung) |
| `PlayingCardFan` | 4, 5 | SVG-Kartenfächer mit Farb-/Symbolanomalien und Callout |
| `MullerLyerIllusion` | 6 | Müller-Lyer-Linien mit Endpfeilen |
| `OpticalIllusionImage` | 7 | Bewegungsillusion als Asset mit Quellenangabe |
| `HermannGrid` | 8 | Hermann-Gitter als SVG-Raster |
| `CafeWallIllusion` | 9 | Café-Wall-Versatz-Illusion |
| `VideoEmbedCard` | 10, 66, 72 | Video-Verweis mit Vorschau/Aufgabenbeschreibung |
| `ProcessLoopDiagram` | 11 | Dreistufiges Prüfverfahren mit Rücksprung |
| `EbbinghausIllusion` | 13 | Titchener-Kreise mit Callout |
| `HeuristicVsAlgorithmDiagram` | 17 | System 1/Heuristik vs. System 2/Algorithmus |
| `CriteriaChevronList` | 19 | Vier Chevron-Kriterien der Heuristik-Anwendung |
| `MoodModeMapping` | 20 | Stimmung↔Bewertungsmodus mit Callout |
| `ClassificationTable` | 21 | Systematisierung der Heuristiken |
| `TwoColumnTopicList` | 22 | Überblick aller Heuristiken/Einflüsse |
| `CognitiveBiasCodex` | 23 | Codex-Bild mit vier Quadranten |
| `RiskPerceptionTable` | 28 | Wahrgenommenes vs. tatsächliches Risiko |
| `DefinitionCallout` / `ConsequenceList` | 29 | Definition + 7 Folgen der Repräsentativitätsheuristik |
| `VignetteCard` / `ChoiceQuiz` | 30, 31 | Linda- und Jack-Beispiel als Vignette/Quiz |
| `FormulaBlock` | 35, 36, 76 | Bayes-Theorem, Bayes-Rechnung, Ankerungsindex |
| `CaseStudyBox` / `StatBadge` | 36 | Brustkrebs-Beispiel mit Ergebnis 12,2 % |
| `FactVsFallacyList` | 37 | Statistik vs. ironischer Trugschluss |
| `ComicStrip` | 40 | Confirmation-Bias-Comic (3 Panels) |
| `BarChart` / `StatList` | 49 | Barber/Odean-Quintil-Diagramm + Depotumsätze |
| `FramingMatrix` | 53 | 2×2-Tabelle Asian-Disease-Problem |
| `TwoColumnCompare` | 54 | Framing zum Wohle Entscheider/Manipulierer |
| `HindsightBiasChart` | 56 | Dreibalken-Diagramm mit Rückschaufehler-Segment |
| `PrimingFlowDiagram` | 64 | Wörter→Gedanken→Verhalten |
| `WatchingEyesChart` | 65 | Vertrauenskassen-Scatter + Foto-Spalte |
| `PrimingQuiz` | 67 | Farbfragen mit umdrehbarer Auflösung |
| `ScenarioTable` / `ResultTable` | 68, 69 | Mental-Accounting-Kinobeispiel |
| `PayoffMatrix` | 70 | Wetter-Diversifikationsmatrix |
| `AnchoringExamples` | 74 | Haus- und UN-Anteil-Ankerbeispiele |
| `WTPQuintileTable` | 78 | Ariely-Sozialversicherungsnummer-Tabelle |
| `DecoyEffectChart` | 81 | Economist-Abo-Decoy-Beispiel |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 3: Heuristiken und kognitive Verzerrungen (Cognitive Biases)

### In der MD vorhanden
Titelzeilen sind vorhanden: "Behavioral Finance", "Kapitel 3", "Heuristiken und kognitive Verzerrungen", "(Cognitive Biases)" sowie Versionskennung "V26-03-22".

### Fehlende visuelle Inhalte
Klassische HBW-Titelfolie. Oben links der Modulname "Behavioral Finance". Rechts oben das HBW-Logo. Darunter ein horizontaler Streifen aus vier nebeneinanderliegenden querformatigen Fotokacheln: (1) ein dunkles Display/Schild mit leuchtendem "HBW"-Schriftzug, (2) eine lächelnde junge Frau (Porträt), (3) zwei Personen in einem Gespräch/Beratungssituation, (4) ein modernes Bürogebäude mit Glasfassade. Diese Bilder sind reine Layout-/Stockfotos ohne Fachaussage. Fußzeile links: "Behavioral Finance / CS / Folie 49"; rechts: "© 2026 – Hochschule der Bayerischen Wirtschaft"; rechts unten zusätzlich die Versionskennung "V26-03-22".

### Visuelle Rekonstruktion
```text
Behavioral Finance                                [HBW-Logo]
[Foto HBW-Display][Foto Frau][Foto 2 Personen][Foto Bürogebäude]
              Kapitel 3
   Heuristiken und kognitive Verzerrungen
            (Cognitive Biases)
                                            V26-03-22
Behavioral Finance / CS / Folie 49     © 2026 – HBW
```

### Inhaltliche Rekonstruktion
Kapiteltitel: Heuristiken und kognitive Verzerrungen (Cognitive Biases). Kapitel 3 des Moduls Behavioral Finance.

### Fachliche Aussage
Einstiegsfolie in das Kapitel über Heuristiken und systematische kognitive Verzerrungen (Biases).

### React-Vorschlag
`ChapterTitleHero` - Kapitel-Header-Komponente mit Modultitel, Kapitelnummer, Untertitel und dekorativer Bildleiste (4 Kacheln als optionales SVG/Bildband, nicht inhaltstragend).

---

## Folie 2 - Agenda

### In der MD vorhanden
Die vollständige nummerierte Agenda (Punkte 1-9) ist textlich korrekt vorhanden.

### Fehlende visuelle Inhalte
Aktiver Agendapunkt ist visuell hervorgehoben: Punkt 3 "Heuristiken und kognitive Verzerrungen" ist in Blau und fett gesetzt, alle übrigen Punkte stehen in schwarzer Standardschrift. Diese Hervorhebung markiert das aktuelle Kapitel und geht in der reinen Textextraktion verloren. (Fußzeile: "Folie 50".)

### Visuelle Rekonstruktion
```text
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen   <- AKTIV (blau, fett)
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Spekulationsblasen an Finanzmärkten
8. Kapitalmarktanomalien
9. Behavioral Corporate Finance
```

### Inhaltliche Rekonstruktion
9-Punkte-Gliederung des Moduls, aktuell aktiv: Punkt 3.

### Fachliche Aussage
Verortung des Kapitels innerhalb der Gesamtgliederung des Moduls Behavioral Finance.

### React-Vorschlag
`AgendaList` mit `activeIndex`-Prop; aktiver Eintrag erhält Akzentfarbe und Fettung.

---

## Folie 3 - Heuristik in unserer Wahrnehmung

### In der MD vorhanden
Die drei Erklärungs-Stichpunkte zum Fußabdruck-Beispiel sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Unter dem Text liegen zwei nebeneinander angeordnete Fotos eines Fußabdrucks im Sand. Linkes und rechtes Foto zeigen denselben Abdruck, das rechte ist gegenüber dem linken um 180 Grad gedreht. Durch die "Licht-von-oben"-Heuristik des Gehirns erscheint der linke Abdruck als Erhebung (herausragend), der rechte als Vertiefung (eingedrückt). Beide Bilder sind in Wirklichkeit dieselbe Vertiefung im Sand. (Titel der Folie lautet "Heuristik in unserer Wahrnehmung" — nicht "Beschränkungen in der Wahrnehmung".)

### Visuelle Rekonstruktion
```text
[ Foto Fußabdruck normal ]   [ Foto Fußabdruck um 180° gedreht ]
   wirkt als ERHEBUNG             wirkt als VERTIEFUNG
```

### Inhaltliche Rekonstruktion
- Es handelt sich links und rechts um denselben Fußabdruck, jeweils um 180 Grad gedreht.
- Unsere Wahrnehmung hat eine "Licht von oben"-Heuristik.
- Daher erscheint der Abdruck links als Erhebung und rechts als Vertiefung.

### Fachliche Aussage
Wahrnehmung ist nicht objektiv: Das Gehirn nutzt unbewusste Heuristiken (z. B. "Licht kommt von oben"), die zu systematischen Fehldeutungen führen.

### React-Vorschlag
`PerceptionDemo` - zweispaltige Bildgegenüberstellung mit Bildunterschriften "wirkt als Erhebung" / "wirkt als Vertiefung".

---

## Folie 4 - Beschränkungen in der Wahrnehmung (Ein kleines Beispiel...)

### In der MD vorhanden
Titel "Beschränkungen in der Wahrnehmung" und Untertitel "Ein kleines Beispiel…" vorhanden. Der eigentliche Bildinhalt fehlt.

### Fehlende visuelle Inhalte
Großes Schaubild: ein aufgefächerter, überlappender Stapel von fünf Spielkarten (von links nach rechts ansteigend). Sichtbare Karten (Eckzeichen oben links): (1) "5" mit schwarzem Pik (5♠), (2) "A" mit rotem Herz (A♥), (3) "7" mit schwarzem Pik (7♠), (4) eine manipulierte/ungewöhnliche Karte: oben "5" mit zwei roten Herzen, im Kartenkörper unten ein roter Tropfen/Klecks sichtbar (auffällige Misch-/Anomaliekarte), (5) die größte, oberste Karte ganz rechts "3" mit schwarzen Herz-Symbolen (3 mit ♥ statt der zur "3" passenden Symbolik). Die Karten enthalten bewusst farb-/symbolwidrige Kombinationen (z. B. "3" mit Herzen, eine 5er-Karte mit Herzen statt Pik), die beim schnellen Hinsehen übersehen werden. Klassischer Bruner/Postman-Spielkartenversuch. (Hinweis: Eine exakt eindeutige Lesung jeder Anomalie ist im Rendering nicht zweifelsfrei möglich — Detailfarben "(visuell abgelesen)".)

### Visuelle Rekonstruktion
```text
[5♠] [A♥] [7♠] [5 mit zwei ♥ + rotem Tropfen] [3 mit schwarzen ♥]
  aufgefächerter, überlappender Kartenstapel (rechte Karte oben/größer)
```

### Inhaltliche Rekonstruktion
Demonstrationsfolie: Betrachter sollen die kurz gezeigten Spielkarten wahrnehmen. Manche Karten sind farblich/symbolisch manipuliert (falsche Farb-/Symbol-Kombinationen), was beim flüchtigen Sehen übersehen wird.

### Fachliche Aussage
Die Wahrnehmung gleicht Eindrücke an erwartete Schemata an; Abweichungen vom Erwarteten (manipulierte Karten) werden oft nicht bemerkt.

### React-Vorschlag
`PlayingCardFan` - SVG-Kartenfächer mit absichtlichen Farb-/Symbolanomalien; ggf. interaktiver Aufdeck-Modus (Auflösung auf Folie 5).

---

## Folie 5 - Beschränkungen in der Wahrnehmung: Welche Spielkarten haben Sie gesehen?

### In der MD vorhanden
"Welche Spielkarten haben Sie gesehen?" und die Auflösung "You see what you expect!" sind als Text vorhanden.

### Fehlende visuelle Inhalte
Wiederholung desselben Spielkartenfächers wie Folie 4 (5♠, A♥, 7♠, manipulierte 5er-Karte mit Herzen, 3 mit Herzen). Oben mittig blaue, fett gesetzte Frage "Welche Spielkarten haben Sie gesehen?". Unten ein breiter hellblauer, hervorgehobener Kasten (Callout) mit dem zentralen, blau gesetzten Satz „You see what you expect!".

### Visuelle Rekonstruktion
```text
   "Welche Spielkarten haben Sie gesehen?"   (blau, fett, zentriert)
        [ Spielkartenfächer wie Folie 4 ]
   ┌───────────────────────────────────────┐
   │        „You see what you expect!“      │  (hellblauer Callout)
   └───────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Auflösung des Kartenversuchs: Man sieht, was man erwartet ("You see what you expect!").

### Fachliche Aussage
Erwartungen steuern die Wahrnehmung: Vorwissen und Schemata füllen Wahrnehmungslücken und überdecken tatsächliche Reizmerkmale.

### React-Vorschlag
`PlayingCardFan` (wiederverwendet) mit Frage-Header und `Callout`-Box für die Kernaussage.

---

## Folie 6 - Fehler bei der Informationsaufnahme: Müller-Lyer-Täuschung

### In der MD vorhanden
Titel "Fehler bei der Informationsaufnahme" und die Zwischenüberschrift "Müller-Lyer-Täuschung" (fett) sind vorhanden. Die eigentliche Grafik fehlt.

### Fehlende visuelle Inhalte
Klassische Müller-Lyer-Figur in dunkelblauer dicker Strichzeichnung: zwei gleich lange horizontale Linien übereinander. ACHTUNG – Pfeilrichtung gegenüber dem Entwurf vertauscht: Die OBERE Linie hat an beiden Enden nach AUSSEN gerichtete Pfeilspitzen (Form `>————<`, auswärts). Die UNTERE Linie hat an beiden Enden nach INNEN gerichtete Pfeilspitzen (Form `<————>`, einwärts, also wie ein Doppelpfeil). Eine Beschriftung "beide gleich lang" oder "wirkt kürzer/länger" steht NICHT auf der Folie (reine Demonstrationsgrafik ohne Auflösungstext).

### Visuelle Rekonstruktion
```text
   >─────────────────<      (obere Linie: Pfeilspitzen NACH AUSSEN)

   <─────────────────>      (untere Linie: Pfeilspitzen NACH INNEN)
   (kein Auflösungstext auf der Folie)
```

### Inhaltliche Rekonstruktion
Müller-Lyer-Täuschung: zwei horizontale Linien mit gegensätzlich orientierten Pfeil-/Fiederenden (obere auswärts, untere einwärts). Bei dieser Täuschung werden gleich lange Linien je nach Endorientierung unterschiedlich lang wahrgenommen.

### Fachliche Aussage
Schon bei der reinen Informationsaufnahme (Längenschätzung) unterliegt der Mensch systematischen, robusten Wahrnehmungstäuschungen.

### React-Vorschlag
`MullerLyerIllusion` - SVG mit zwei Linien; obere mit auswärts-, untere mit einwärts-gerichteten Endpfeilen; optionaler "Messen"-Toggle, der gleiche Länge zeigt.

---

## Folie 7 - Fehler bei der Informationsaufnahme (Purple Sweet Potato "Wave")

### In der MD vorhanden
Bildunterschrift und Quelle sind vorhanden: 'Purple Sweet Potato "Wave" von Akiyoshi Kitaoka.' und 'Quelle: https://www.n-tv.de/wissen/Punkte-Kreise-Farben-was-sehen-Sie-article18677711.html, abgerufen am 26.9.2021'.

### Fehlende visuelle Inhalte
Großes, flächenfüllendes Bewegungs-Illusionsbild von Akiyoshi Kitaoka: auf grünem Hintergrund liegen zahlreiche kleine, längliche/ellipsenförmige Objekte in Violett mit weißen Glanzlichtern, in unregelmäßigen Wirbeln/Reihen angeordnet. Durch Anordnung und Kontraste entsteht der Eindruck einer wogenden/wabernden Bewegung, obwohl das Bild statisch ist (Peripheral-Drift-Illusion). Titel der Folie ist hier nur "Fehler bei der Informationsaufnahme" (ohne Untertitel "Müller-Lyer").

### Visuelle Rekonstruktion
```text
┌──────────────────────────────────────────┐
│ grüner Grund, violette Ellipsen/„Knollen“ │
│ in wirbelnden Mustern -> Scheinbewegung   │
└──────────────────────────────────────────┘
Purple Sweet Potato "Wave" – Akiyoshi Kitaoka
```

### Inhaltliche Rekonstruktion
Statisches Bild, das durch Kontraste und Anordnung eine Scheinbewegung erzeugt.

### Fachliche Aussage
Das visuelle System konstruiert Bewegung aus statischen Mustern - ein weiterer Beleg für nicht-objektive, fehleranfällige Informationsaufnahme.

### React-Vorschlag
`OpticalIllusionImage` - Bildkomponente mit Quellenangabe als `.source-note`. Bild als Asset einbinden (Illusion nicht synthetisch nachbauen).

---

## Folie 8 - Beschränkte Informationsverarbeitungskapazität (schwarze Punkte zählen)

### In der MD vorhanden
Aufgabe vorhanden: "Aufgabe: Zählen Sie die schwarzen Punkte in der unten gezeigten Abbildung". Die Grafik selbst fehlt.

### Fehlende visuelle Inhalte
Hermann-Gitter-Illusion: ein regelmäßiges Raster aus schwarzen Quadraten (ca. 8 Spalten × ca. 6 Reihen, "(visuell abgelesen)"), getrennt durch hellgraue, gleichmäßige waagerechte und senkrechte Gitterstege. An jedem Kreuzungspunkt der grauen Stege sitzt ein weißer Punkt. Beim Betrachten erscheinen an den jeweils nicht fixierten Kreuzungen flackernde dunkle/graue Punkte, die physikalisch nicht existieren – daher lässt sich die Anzahl "schwarzer Punkte" nicht stabil zählen. (Der Entwurf nennt fälschlich "ca. 7 Spalten" und "Scintillating-Grid" — es ist ein klassisches Hermann-Gitter; Spaltenzahl "(visuell abgelesen)".)

### Visuelle Rekonstruktion
```text
■  ■  ■  ■  ■  ■  ■  ■
  •  •  •  •  •  •  •      <- weiße Punkte an allen Kreuzungen,
■  ■  ■  ■  ■  ■  ■  ■        an der Peripherie als dunkel „flackernd“ wahrgenommen
  •  •  •  •  •  •  •
■  ■  ■  ■  ■  ■  ■  ■
```

### Inhaltliche Rekonstruktion
Aufgabe: schwarze Punkte zählen. Auflösung (implizit): die "schwarzen Punkte" sind eine Wahrnehmungstäuschung; sie existieren physikalisch nicht.

### Fachliche Aussage
Die Informationsverarbeitungskapazität ist begrenzt; das visuelle System erzeugt artefaktische Wahrnehmungen (scheinbare dunkle Punkte an den Gitterkreuzungen).

### React-Vorschlag
`HermannGrid` - SVG-Raster aus schwarzen Quadraten mit grauen Stegen und weißen Knotenpunkten; rein dekorativ-illustrativ als Demo.

---

## Folie 9 - Beschränkte Informationsverarbeitungskapazität (parallele Geraden?)

### In der MD vorhanden
Frage vorhanden: "Frage: Sind die Geraden in der Abbildung parallel zueinander?". Grafik fehlt.

### Fehlende visuelle Inhalte
Café-Wall-artige Versatz-/Fliesen-Illusion: mehrere waagerechte Reihen aus schwarzen und weißen Rechtecken/Blöcken, durch dünne graue waagerechte Trennlinien getrennt. Die schwarzen Blöcke sind von Reihe zu Reihe horizontal versetzt (mal nach links, mal nach rechts). Dadurch wirken die in Wirklichkeit exakt parallelen, waagerechten Trennlinien geneigt/keilförmig (mal zusammenlaufend, mal auseinanderlaufend). Eine schriftliche Auflösung steht NICHT auf der Folie. (Der Entwurf nannte "Kindergarten-/Wandfliesen" — die übliche Bezeichnung ist Café-Wall-Illusion; die "Antwort: Ja" ist eine Ergänzung des Bearbeiters, nicht Folientext.)

### Visuelle Rekonstruktion
```text
■ □ ■ □ ■ □ ■    ┐
 ■ □ ■ □ ■ □ ■   │ horizontale Trennlinien SIND parallel,
■ □ ■ □ ■ □ ■    │ wirken aber durch den Versatz der Blöcke geneigt
 ■ □ ■ □ ■ □ ■   ┘
```

### Inhaltliche Rekonstruktion
Frage: Sind die Geraden parallel? Auflösung (implizit, nicht auf Folie ausgeschrieben): Ja, die Linien sind parallel; nur der Versatz der Blöcke erzeugt den Eindruck der Schräge.

### Fachliche Aussage
Auch geometrische Parallelität wird durch Kontrast- und Versatzmuster fehlerhaft beurteilt - die Wahrnehmung ist systematisch verzerrbar.

### React-Vorschlag
`CafeWallIllusion` - SVG mit versetzten Schwarz-Weiß-Reihen und grauen Trennlinien; optionaler Toggle zur Bestätigung der Parallelität.

---

## Folie 10 - Selektive Wahrnehmung (Video)

### In der MD vorhanden
Titel "Selektive Wahrnehmung" und der YouTube-Link "https://www.youtube.com/watch?v=vJG698U2Mvo" sind vorhanden.

### Fehlende visuelle Inhalte
Standbild aus einem Video: in einem Raum mit Aufzugtüren im Hintergrund spielt eine Gruppe von Personen (in weißen und schwarzen Oberteilen) sich Bälle zu (Selective-Attention-Test im Stil Simons & Chabris). Über/zwischen den Personen sind weiße Buchstaben "S" eingeblendet. Das Bild ist ein Video-Standbild; der Inhalt erschließt sich über das verlinkte Video.

### Visuelle Rekonstruktion
```text
[ Video-Standbild: Personen werfen sich Bälle zu,
  Hintergrund mit Aufzugtüren, eingeblendete „S“ ]
   Link: youtube.com/watch?v=vJG698U2Mvo
```

### Inhaltliche Rekonstruktion
Verweis auf das Selective-Attention-Video (Aufmerksamkeits-/Gorilla-Experiment).

### Fachliche Aussage
Selektive Aufmerksamkeit: Fokussiert man auf eine Aufgabe, werden auffällige andere Reize komplett übersehen.

### React-Vorschlag
`VideoEmbedCard` - Vorschaubild mit eingebettetem/extern verlinktem YouTube-Video und kurzer Aufgabenbeschreibung.

---

## Folie 11 - So funktioniert unsere Wahrnehmung (Dreistufiges Prüfverfahren)

### In der MD vorhanden
Der gesamte Text (dreistufiges Prüfverfahren Schritte 1-3 sowie die beiden "Hierbei"-Punkte) ist vollständig und korrekt vorhanden.

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Die nummerierten Schritte sowie die beiden "Hierbei"-Punkte sind komplett in Blau gesetzt; die Zwischenüberschriften "Dreistufiges Prüfverfahren:" und "Hierbei:" stehen in Schwarz. Schritt 3 beschreibt einen Rücksprung zu Schritt 1, was als Kreislauf/Flussdiagramm dargestellt werden könnte (auf der Folie selbst aber kein Diagramm).

### Visuelle Rekonstruktion
```text
1. Wahrnehmungshypothese aktivieren
        |
2. Information über Wahrnehmungsgegenstand eingeben
        |
3. Hypothese bestätigt? --ja--> ENDE
        |
        nein --> zurück zu 1 (andere Hypothese)
```

### Inhaltliche Rekonstruktion
Dreistufiges Prüfverfahren:
1. Aktivierung einer Wahrnehmungshypothese
2. Eingabe von Information über den Wahrnehmungsgegenstand
3. Falls Hypothese bestätigt, dann Ende, ansonsten noch mal von vorne mit 1 und einer anderen Hypothese beginnen

Hierbei:
- Je stärker die Hypothese, desto eher wird sie im Schritt 1 aktiviert.
- Je stärker die Hypothese, desto weniger Information ist im Schritt 3 für die Bestätigung (bzw. desto mehr für die Widerlegung) notwendig.

### Fachliche Aussage
Wahrnehmung ist ein hypothesengeleiteter, iterativer Prüfprozess; starke (vorgefasste) Hypothesen werden bevorzugt aktiviert und mit weniger Evidenz bestätigt.

### React-Vorschlag
`ProcessLoopDiagram` - dreistufiges Flussdiagramm mit Rücksprung-Pfeil von Schritt 3 zu Schritt 1.

---

## Folie 12 - So funktioniert unsere Wahrnehmung (Hypothesenstärke)

### In der MD vorhanden
Vollständig vorhanden: die Einleitung "Die Hypothesenstärke hängt hierbei ab von:" sowie die drei nummerierten Faktoren.

### Fehlende visuelle Inhalte
Keine Grafik. Die drei nummerierten Faktoren sind in Blau gesetzt; die Einleitungszeile in Schwarz.

### Inhaltliche Rekonstruktion
Die Hypothesenstärke hängt hierbei ab von:
1. Häufigkeit früherer Bestätigungen
2. Anzahl verfügbarer Alternativhypothesen
3. Vorliegen von Dissonanzen (folgt!)

### Fachliche Aussage
Wie stark eine Wahrnehmungshypothese ist, bestimmt sich aus Erfahrung (frühere Bestätigungen), Konkurrenz (Alternativhypothesen) und kognitiven Dissonanzen.

### React-Vorschlag
`NumberedList` - einfache nummerierte Liste; Punkt 3 mit Hinweis-Badge "(folgt!)".

---

## Folie 13 - Wahrnehmung von Informationen: Kontrasteffekte (Ebbinghaus)

### In der MD vorhanden
Text vorhanden: "Welcher innere Kreis ist größer?" und "Bei starkem Kontrast wird eine Information überhöht wahrgenommen". Die Grafik fehlt.

### Fehlende visuelle Inhalte
Ebbinghaus-Illusion (Titchener-Kreise), zwei Anordnungen nebeneinander:
- Links: ein hellblauer Mittelkreis, umgeben von FÜNF großen grauen Kreisen (visuell abgelesen: 5, nicht 6).
- Rechts: ein gleich großer hellblauer Mittelkreis, umgeben von ca. zehn kleinen grauen Kreisen.
Die beiden inneren hellblauen Kreise sind gleich groß; durch den Kontrast erscheint der von kleinen Kreisen umgebene (rechte) Mittelkreis größer. Unten zwei gestapelte Kästen: ein blau umrandeter hellblauer Kasten mit der Frage "Welcher innere Kreis ist größer?" und darunter ein hellblauer Kasten mit dem Merksatz "Bei starkem Kontrast wird eine Information überhöht wahrgenommen". Der Hinweis "(Antwort: beide gleich groß)" steht NICHT auf der Folie.

### Visuelle Rekonstruktion
```text
   O O                    o o o
  O (blau) O    vs.     o o(blau)o o
   O O                    o o o
 von 5 großen Kreisen     von ~10 kleinen Kreisen
 umgeben (wirkt kleiner)  umgeben (wirkt größer)
 ┌──────────────────────────────────────────┐
 │ Welcher innere Kreis ist größer?          │ (blau umrandet)
 ├──────────────────────────────────────────┤
 │ Bei starkem Kontrast wird eine Information│ (hellblau)
 │ überhöht wahrgenommen                     │
 └──────────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
- Frage: Welcher innere Kreis ist größer? (auf der Folie ohne ausgeschriebene Antwort)
- Merksatz: Bei starkem Kontrast wird eine Information überhöht wahrgenommen.

### Fachliche Aussage
Kontrasteffekt: Eine Größe/Information wird relativ zu ihrer Umgebung beurteilt; starker Kontrast führt zu einer Über- bzw. Unterbewertung.

### React-Vorschlag
`EbbinghausIllusion` - zwei SVG-Cluster nebeneinander (links 5 große, rechts ~10 kleine Umgebungskreise), gleicher Mittelkreis-Durchmesser; `Callout` für den Merksatz.

---

## Folie 14 - Selektive Wahrnehmung (Beispiele zur selektiven Wahrnehmung)

### In der MD vorhanden
Beide Beispiele (Autokauf/ADAC-Zeitung; XY-AG-Aktie positiver/negativer Bericht) und der zusammenfassende Kasten sind vollständig im Text vorhanden.

### Fehlende visuelle Inhalte
Keine Fachgrafik. Titel "Selektive Wahrnehmung" mit Untertitel "Beispiele zur selektiven Wahrnehmung". "Beispiel 1:" und "Beispiel 2:" sind blau/fett gesetzt (der jeweils anschließende Fließtext schwarz); die Schlussaussage steht in einem zentrierten hellblauen Hervorhebungskasten (Callout).

### Inhaltliche Rekonstruktion
- Beispiel 1: Sie haben gerade beim Händler ein neues Auto bestellt. Zuhause angekommen blättern Sie in der ADAC-Zeitung. Welche Werbeanzeigen lesen Sie?
- Beispiel 2: Ein Anleger hat vor einiger Zeit Aktien der XY-AG gekauft, die inzwischen an Wert verloren haben. In der Zeitung steht ein positiver und ein negativer Bericht zu der XY-AG. Welchen liest er?
- Callout: In beiden Fällen tendieren Menschen zu einer verzerrten, d.h. nicht mehr objektiven Informationsaufnahme.

### Fachliche Aussage
Menschen nehmen bevorzugt Informationen auf, die ihre bereits getroffenen Entscheidungen bestätigen (selektive, verzerrte Informationsaufnahme).

### React-Vorschlag
`ExampleCards` mit zwei Beispiel-Karten und abschließendem `Callout`.

---

## Folie 15 - Selektive Wahrnehmung (Fehleinschätzung / kognitive Dissonanz)

### In der MD vorhanden
Vollständig vorhanden: Fehleinschätzung von Informationen, Grundlage kognitive Dissonanz, Ignorieren widersprüchlicher Informationen, Confirmation Bias, Folgen (Herdenverhalten, Festhalten an Verliereraktien) sowie die Fußnote "*(Details folgen später)".

### Fehlende visuelle Inhalte
Keine Grafik. Hervorhebungen: "Fehleinschätzung von Informationen:", "Grundlage: kognitive Dissonanz*" und "Folgen:" sind blau/fett gesetzt; "Confirmation Bias" steht im Fließtext (schwarz). Die mit Stern markierten Begriffe tragen einen orangen "*", und die Fußnote "*(Details folgen später)" steht unten rechts in oranger, kursiver Schrift. Die "Folgen" sind als Unter-Spiegelstriche (–) eingerückt.

### Inhaltliche Rekonstruktion
- Fehleinschätzung von Informationen: Bewusste oder unbewusste Vernachlässigung von Informationen.
- Grundlage: kognitive Dissonanz*.
- Informationen, die im Widerspruch zu der zu treffenden Entscheidung stehen, werden ignoriert.
- Stellt sich die Entscheidung im Nachhinein als unvorteilhaft heraus, werden die Informationen ausgeblendet, die der getroffenen Entscheidung widersprechen. Nur die bestätigenden Informationen werden wahrgenommen (sog. Confirmation Bias*).
- Folgen:
  - Höhere Gefahr des Herdenverhaltens*
  - Höhere Gefahr des Festhaltens an Verliereraktien*
- *(Details folgen später)

### Fachliche Aussage
Selektive Wahrnehmung beruht auf kognitiver Dissonanz und mündet in den Confirmation Bias; Folgen sind u. a. Herdenverhalten und Festhalten an Verliereraktien.

### React-Vorschlag
`BulletListWithFootnote` - mit hervorgehobenen Schlüsselbegriffen und orangefarbenen `*`-Querverweisen samt Fußnote.

---

## Folie 16 - Wahrnehmung: Zusammenfassung

### In der MD vorhanden
Vollständig vorhanden: die drei Zusammenfassungspunkte sowie der "Tipp zur Verbesserung der Rationalität".

### Fehlende visuelle Inhalte
Die drei Zusammenfassungspunkte stehen als Spiegelstriche in einem großen, blau umrandeten Kasten mit hellblauem Hintergrund. Darunter, außerhalb des Kastens, zentriert: "Tipp zur Verbesserung der Rationalität:" (blau/fett), gefolgt vom Tipp-Satz (schwarz/fett); im Schlusssatz ist das Wort "entgegenstehen" blau und kursiv hervorgehoben. Titel "Wahrnehmung" mit Untertitel "Zusammenfassung".

### Visuelle Rekonstruktion
```text
┌──────────────────────────────────────────┐
│ • Vereinfachungen in Wahrnehmungsprozessen│
│ • selektive Wahrnehmung: erwartete Infos  │
│ • Kontrasteffekt: Überbewertung           │
└──────────────────────────────────────────┘
   Tipp zur Verbesserung der Rationalität:
   ...suchen Sie nach Informationen, die Ihren
   Erwartungen/Stimmungslagen *entgegenstehen*.
```

### Inhaltliche Rekonstruktion
- Menschen wenden in ihren Wahrnehmungsprozessen gerne Vereinfachungen an.
- Im Rahmen einer selektiven Wahrnehmung nimmt der Mensch verstärkt die Informationen auf, die er erwartet oder die ihm besser "in den Kram" passen.
- Der Kontrasteffekt beschreibt die Überbewertung einer Information, wenn sie im "Kontrast" zu etwas anderem dargestellt wird.
- Tipp zur Verbesserung der Rationalität: Für eine möglichst objektive Wahrnehmung und Bewertung von Informationen suchen Sie besonders nach Informationen, die Ihren Erwartungen und Stimmungslagen entgegenstehen.

### Fachliche Aussage
Wahrnehmung ist vereinfachend, selektiv und kontrastabhängig; gegen die Verzerrung hilft die bewusste Suche nach widersprechenden Informationen.

### React-Vorschlag
`SummaryBox` (umrandeter Kasten) plus separater `TipCallout` mit hervorgehobenem Schlüsselwort.

---

## Folie 17 - Strategien zur Lösungsfindung für Probleme ohne Algorithmus

### In der MD vorhanden
Der gesamte Text ist vorhanden (kognitiver Geizhals, Daumen-/Faustregeln System 1/System 2, Verringerung an Alternativen, schnelle Entscheidungsfindung, systematische Verzerrung -> Biases, Definition Algorithmus).

### Fehlende visuelle Inhalte
Hervorhebungen gehen verloren: zahlreiche Schlüsselbegriffe sind blau/fett gesetzt ("Heuristiken", "kognitiver Geizhals", "Verringerung an Alternativen", "Wahrscheinlichkeit, eine Entscheidung zu treffen", "schnelle Entscheidungsfindung", "Biases", "Algorithmus"). Zwischen dem oberen und dem unteren Textblock befindet sich mittig ein vertikaler grauer Doppelpfeil (auf-/abwärts), der den Übergang/die Entlastung zwischen Heuristik und Algorithmus symbolisiert.

### Visuelle Rekonstruktion
```text
Heuristiken (System 1)
        ↕   <- grauer vertikaler Doppelpfeil
Algorithmus (System 2, normativ)
```

### Inhaltliche Rekonstruktion
- Die Kapazität des menschlichen Gehirns, komplexe Zusammenhänge zu verarbeiten, sinkt nach kurzer Zeit rapide. Der begrenzt rationale Mensch bedient sich daher sog. Heuristiken. Der Mensch ist ein "kognitiver Geizhals".
- Daumen- oder Faustregeln des Systems 1 zur kognitiven Entlastung von System 2.
- Die Anwendung von Heuristiken führt zu einer Verringerung an Alternativen und erhöht damit die Wahrscheinlichkeit, eine Entscheidung zu treffen.
- Heuristiken sorgen für eine schnelle Entscheidungsfindung.
- Allerdings sind diese Entscheidungen unter Umständen systematisch verzerrt. Diese Verzerrungen werden als Biases bezeichnet.
- Algorithmus: normative, meist mathematisch strukturierte Handlungsanweisung mit gleichen Ergebnissen in gleichen Situationen.

### Fachliche Aussage
Bei Problemen ohne festen Algorithmus greift der begrenzt rationale Mensch ("kognitiver Geizhals") auf Heuristiken zurück - schnell, aber systematisch verzerrungsanfällig (Biases).

### React-Vorschlag
`HeuristicVsAlgorithmDiagram` - zwei Blöcke (System 1/Heuristik vs. System 2/Algorithmus) mit vertikalem Doppelpfeil; Schlüsselbegriffe als hervorgehobene Inline-Spans.

---

## Folie 18 - "Heuristik" versus "Algorithmus"

### In der MD vorhanden
Der vollständige Text inkl. Etymologie, Definitionen und Beck-Zitat (S. 26) ist vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Die Begriffe "Heuristik" und "Algorithmen" sind im Fließtext blau/fett hervorgehoben.

### Inhaltliche Rekonstruktion
- Heuristik -> altgriechisch: heurísko "ich finde"; heurískein "auffinden", "entdecken"; das Wort hat dieselbe Wurzel wie Heureka.
- Eine Heuristik ist eine Problemlösungsstrategie, durch die man auch bei eingeschränktem Wissen und wenig Zeit zu vergleichsweise guten Lösungen gelangt.
- Algorithmen hingegen sind normative, meist mathematisch strukturierte Handlungsanweisungen, um in gleichen Situationen zu gleichen Entscheidungen und Ergebnissen zu kommen.
- Zitat (Beck, S. 26): "Die Grundidee der von Kahneman und Tversky erforschten Heuristiken besteht darin, dass Menschen bei Entscheidungen nicht Wahrscheinlichkeiten oder andere zu schätzende Werte wie in den Modellen der Ökonomen explizit berechnen, sondern bei deren Abschätzung und ihrer Entscheidung zu vereinfachenden Regeln greifen, eben den Heuristiken." (Vgl. Beck, S. 26.)

### Fachliche Aussage
Begriffsabgrenzung: Heuristiken sind schnelle, "gut-genug"-Regeln bei beschränktem Wissen; Algorithmen sind normative Verfahren mit reproduzierbar gleichen Ergebnissen.

### React-Vorschlag
`DefinitionCompare` - zwei gegenübergestellte Definitionsblöcke (Heuristik vs. Algorithmus) plus Zitat als `.source-note`.

---

## Folie 19 - Anwendung von Heuristiken (Kriterien)

### In der MD problematisch/fehlend
Die MD hat die als Grafik eingebettete Zwei-Spalten-Struktur zerbrochen extrahiert: die linken Schlagwörter (Zeit, Priorität, Information, Erfahrung) und die rechten Beschreibungen sind durcheinandergeraten und zeilenweise vermischt (z. B. "Entscheidungen müssen schnell und kurzfristig / Zeit / getroffen werden").

### Fehlende visuelle Inhalte
Über den Balken eine schwarze, fett gesetzte Zwischenüberschrift "Kriterien für die Anwendung von Heuristiken:". Darunter vier untereinander angeordnete Prozess-/Pfeil-Balken (Chevron-Form). Links jeweils ein dunkelblauer Pfeil-Block mit weißem Schlagwort, rechts daran anschließend ein hellblauer/hellgrauer Chevron-Block mit der zentrierten Erläuterung. Reihenfolge von oben nach unten: Zeit, Priorität, Information, Erfahrung.

### Visuelle Rekonstruktion
```text
Kriterien für die Anwendung von Heuristiken:
[ Zeit       >] [ Entscheidungen müssen schnell und kurzfristig getroffen werden        >]
[ Priorität  >] [ keine langfristigen oder existenziellen Konsequenzen sind zu erwarten >]
[ Information >] [ Unvollständige oder als zu wenig erachtete Informationslage           >]
[ Erfahrung  >] [ Fehlen von Referenzfällen für komplexe oder neuartige Entscheidungssituation >]
```

### Inhaltliche Rekonstruktion
Kriterien für die Anwendung von Heuristiken:
| Kriterium | Bedingung |
|---|---|
| Zeit | Entscheidungen müssen schnell und kurzfristig getroffen werden |
| Priorität | keine langfristigen oder existenziellen Konsequenzen sind zu erwarten |
| Information | Unvollständige oder als zu wenig erachtete Informationslage |
| Erfahrung | Fehlen von Referenzfällen für komplexe oder neuartige Entscheidungssituation |

### Fachliche Aussage
Heuristiken werden vor allem unter Zeitdruck, bei geringer Tragweite, bei unvollständiger Information und bei fehlenden Erfahrungswerten eingesetzt.

### React-Vorschlag
`CriteriaChevronList` - vier Chevron-Zeilen mit Label-Block (Akzentfarbe) und Beschreibungsblock; alternativ saubere zweispaltige Tabelle.

---

## Folie 20 - Heuristiken: Einfluss der Stimmung auf Entscheidungen

### In der MD problematisch/fehlend
Die MD-Extraktion hat das zweispaltige Zuordnungsschaubild zerbrochen wiedergegeben: "Heuristisches vs. / Stimmung / analytisches Bewerten / positiv heuristisch / negativ analytisch". Die Spalten- und Zeilenzuordnung ist verloren.

### Fehlende visuelle Inhalte
Titel "Heuristiken" mit Untertitel "Einfluss der Stimmung auf Entscheidungen". Darunter zwei Spalten mit jeweils zwei farbigen Balken, in der Mitte ein großer grauer horizontaler Doppelpfeil (Zuordnungspfeil).
- Linke Spaltenüberschrift (schwarz, fett): "Stimmung" - darunter ein hellgrüner Balken "positiv", darunter ein hellblaugrauer Balken "negativ".
- Rechte Spaltenüberschrift (schwarz, fett): "Heuristisches vs. analytisches Bewerten" - darunter ein hellgrüner Balken "heuristisch", darunter ein hellblaugrauer Balken "analytisch".
Die Farbcodierung verbindet "positiv" (grün) mit "heuristisch" (grün) und "negativ" (blaugrau) mit "analytisch" (blaugrau). Unten ein breiter hellblauer Kasten mit der zentrierten Kernaussage.

### Visuelle Rekonstruktion
```text
   Stimmung                Heuristisches vs. analytisches Bewerten
 [positiv]  (grün)   <══>   [heuristisch] (grün)
 [negativ]  (grau)   <══>   [analytisch]  (grau)
 ┌────────────────────────────────────────────────┐
 │ Bei einer positiven Stimmung werden die meisten │
 │ Fehler gemacht                                  │
 └────────────────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
| Stimmung | Bewertungsmodus |
|---|---|
| positiv | heuristisch |
| negativ | analytisch |

Merksatz: Bei einer positiven Stimmung werden die meisten Fehler gemacht.

### Fachliche Aussage
Die Stimmung steuert den Verarbeitungsmodus: Positive Stimmung begünstigt heuristisches (fehleranfälliges) Bewerten, negative Stimmung eher analytisches.

### React-Vorschlag
`MoodModeMapping` - zwei farbcodierte Balkenspalten mit verbindendem Doppelpfeil und `Callout` für den Merksatz.

---

## Folie 21 - Systematisierung Heuristiken

### In der MD vorhanden
Der gesamte Text inkl. der vier Unterscheidungskriterien und der Beispiele ist vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Hervorhebungen: Einleitungs-Teilsatz "Heuristiken lassen sich danach unterteilen" (blau/fett, der Rest ", ob" schwarz) sowie die vier Kategorienamen "Eintrittswahrscheinlichkeiten", "Informationen", "objektive Realitäten", "eigenen Fähigkeiten" sind blau/fett gesetzt; die Beispielklammern und der Schlusssatz "fehlerhaft eingeschätzt werden." stehen in Schwarz.

### Inhaltliche Rekonstruktion
Heuristiken lassen sich danach unterteilen, ob fehlerhaft eingeschätzt werden:
| Kategorie | Beispiel |
|---|---|
| Eintrittswahrscheinlichkeiten | Verfügbarkeitsheuristik |
| Informationen | selektive Wahrnehmung |
| objektive Realitäten (Emotionen) | Mental Accounting, Herdenverhalten |
| eigene Fähigkeiten | Overconfidence |

### Fachliche Aussage
Heuristiken lassen sich nach dem Objekt der Fehleinschätzung klassifizieren: Wahrscheinlichkeiten, Informationen, (emotionale) Realitäten oder eigene Fähigkeiten.

### React-Vorschlag
`ClassificationTable` - zweispaltige Tabelle Kategorie/Beispiel mit hervorgehobenen Kategorienamen.

---

## Folie 22 - Heuristiken: Wichtige Heuristiken und exogene Einflüsse (Überblick)

### In der MD vorhanden
Alle Begriffe sind vorhanden, in der MD allerdings durch das zweispaltige Layout zeilenweise paarweise vermischt extrahiert (z. B. "Verfügbarkeitsheuristik § Rückschaufehler").

### Fehlende visuelle Inhalte
Titel "Heuristiken". Darunter die blau/fett gesetzte Überschrift "Wichtige Heuristiken und exogene Einflüsse auf menschliche Handlungen:". Es folgt eine zweispaltige Bullet-Liste (Aufzählungspunkte, schwarz), deren Spaltenstruktur in der MD verloren geht. Keine echte Grafik.

### Visuelle Rekonstruktion
```text
Linke Spalte                  Rechte Spalte
• Verfügbarkeitsheuristik     • Rückschaufehler
• Repräsentativitätsheuristik • Endowment-Effekt
• Verankerungsheuristik(Anker)• Status-Quo-Bias
• Bestätigungsirrtum          • Halo-Effekt
• Überoptimismus              • WYSIATI
• Affektheuristik             • Priming-Effekt
• Herdenverhalten             • Mentale Kontenführung
• Versuchung                  • Relativer Vergleich
• Framing
```

### Inhaltliche Rekonstruktion
Wichtige Heuristiken und exogene Einflüsse auf menschliche Handlungen: Verfügbarkeitsheuristik, Repräsentativitätsheuristik, Verankerungsheuristik (Anker), Bestätigungsirrtum, Überoptimismus, Affektheuristik, Herdenverhalten, Versuchung, Framing, Rückschaufehler, Endowment-Effekt, Status-Quo-Bias, Halo-Effekt, WYSIATI, Priming-Effekt, Mentale Kontenführung, Relativer Vergleich.

### Fachliche Aussage
Überblicksfolie: Auflistung aller im Kapitel behandelten Heuristiken und exogenen Einflüsse auf menschliche Handlungen.

### React-Vorschlag
`TwoColumnTopicList` - zweispaltige Liste, optional als anklickbare Inhaltsnavigation (Sprungmarken zu den jeweiligen Detailfolien).

---

## Folie 23 - Es gibt zahlreiche Heuristiken und kognitive Verzerrungen (Cognitive Bias Codex)

### In der MD problematisch/fehlend
Der Titel ist vorhanden. Die MD enthält darunter nur die spiegelverkehrt/rückwärts extrahierte Quell-URL ("...Cognitive_bias_codex...wikipedia.org... abgerufen am 27.9.2021"), die als unleserlicher Zeichensalat erscheint.

### Fehlende visuelle Inhalte
Großes radiales Schaubild "Cognitive Bias Codex": In der Mitte eine stilisierte graue Gehirn-Grafik. Um das Gehirn herum gehen fein verzweigte, fächerartige Äste mit den Namen einzelner Biases aus (sehr klein, in der Folie kaum lesbar). Die Beschriftung ist in vier Quadranten gegliedert, die Quadranten-Überschriften sind farblich abgesetzt und stehen jeweils in der Ecke:
- "What Should We Remember?" (oben LINKS)
- "Too Much Information" (oben RECHTS)
- "Need To Act Fast" (unten LINKS)
- "Not Enough Meaning" (unten RECHTS)

### Visuelle Rekonstruktion
```text
   What Should We Remember? │ Too Much Information
            \               │              /
             \         (Gehirn)           /
              \   radiale Bias-Äste      /
             /                           \
            /                             \
     Need To Act Fast      │      Not Enough Meaning
```

### Inhaltliche Rekonstruktion
Vier Hauptursachen kognitiver Verzerrungen (Quadranten): What Should We Remember? (o. l.), Too Much Information (o. r.), Need To Act Fast (u. l.), Not Enough Meaning (u. r.). Quelle: Cognitive bias codex (de.wikipedia.org, Liste kognitiver Verzerrungen), abgerufen am 27.9.2021.

### Fachliche Aussage
Es existiert eine sehr große Zahl kognitiver Verzerrungen; sie lassen sich vier grundlegenden Problemen der Informationsverarbeitung zuordnen.

### React-Vorschlag
`CognitiveBiasCodex` - Bild/SVG des Codex mit vier benannten Quadranten als Legende und Quellenangabe (`.source-note`).

---

## Folie 24 - Verfügbarkeitsheuristik (Availability Bias)

### In der MD vorhanden
Der vollständige Text ist vorhanden (Definition, Wahrscheinlichkeitsschätzung, falsche Umkehrung, Szenarien, Beispiele Tierart-Frage und Krankheitssymptome).

### Fehlende visuelle Inhalte
Keine Grafik. Titel "Verfügbarkeitsheuristik" mit Untertitel "(Availability Bias)". Schlüsselbegriffe blau/fett ("Verfügbarkeitsheuristik (Availability Bias)" als Zeilen-Überschrift, "leicht abrufbaren Erinnerungen", "wahrscheinlicher", die beiden "Beispiel:"-Marker). Das Beispiel mit den Tierarten ist eine Auswahlliste.

### Inhaltliche Rekonstruktion
- Beurteilung auf Basis der Zugänglichkeit relevanter Erinnerungen.
- Die Wahrscheinlichkeitsschätzung für ein Ereignis hängt von der Abrufbarkeit von Gedächtnisinhalten ab. An häufige Ereignisse kann man sich gut erinnern.
- Die (manchmal falsche) Umkehrung lautet: Woran man sich leicht erinnert, kommt häufig vor. Diese Annahme wird häufig bei der Schätzung von Wahrscheinlichkeiten verwendet.
- Szenarien, die auf leicht abrufbaren Erinnerungen basieren, werden als wahrscheinlicher erachtet, als die schwerer vorstellbaren.
- Beispiel: Welche Tierart ist in den USA für die meisten Todesfälle verantwortlich? Alligatoren, Bären, Rehwild, Haie oder Schlangen?
- Beispiel: Das Zurückführen von Krankheitssymptomen auf eine Krankheit, von der man kurz zuvor gehört/gelesen hat.

### Fachliche Aussage
Bei der Verfügbarkeitsheuristik wird die Wahrscheinlichkeit eines Ereignisses an der Leichtigkeit der Erinnerung gemessen - leicht abrufbare Inhalte werden überschätzt.

### React-Vorschlag
`ConceptDefinitionCard` mit eingebettetem `QuizExample` (Tierart-Auswahlfrage als interaktive Single-Choice-Aufgabe).

---

## Folie 25 - Verfügbarkeitsheuristik (Folgen für die Investitionsauswahl / Priming)

### In der MD vorhanden
Der vollständige Text ist vorhanden (Folgen für Investitionsauswahl, Priming-Effekt-Definition, Frage "Woran denken Sie bei Jaguar?").

### Fehlende visuelle Inhalte
Unten links zwei kleine Fotos zur Priming-Frage "Woran denken Sie bei Jaguar?": links das Tier Jaguar (Raubkatze), rechts ein Jaguar-Auto (blauer Sportwagen). Die beiden Bilder illustrieren die Doppeldeutigkeit des Worts "Jaguar". Schlüsselbegriffe blau/fett ("Folgen für die Investitionsauswahl:", die vier Spiegelstrich-Stichworte "leicht rückholbarer Informationen", "kategorischer Eigenschaften", "eingeschränkter Erfahrungen", "persönlicher Ansichten" sowie "Priming-Effekt" und "Problematik: Priming-Effekte:").

### Visuelle Rekonstruktion
```text
"Woran denken Sie bei Jaguar?"
[ Foto Raubkatze Jaguar ]   [ Foto blauer Jaguar-Sportwagen ]
```

### Inhaltliche Rekonstruktion
Folgen für die Investitionsauswahl - Investitionen auf Basis:
- leicht rückholbarer Informationen (z. B. Werbung)
- kategorischer Eigenschaften (z. B. Region, s. auch Home Bias)
- eingeschränkter Erfahrungen (z. B. Fokus auf Tech-Aktien)
- persönlicher Ansichten (z. B. Value vs. Growth)

Mögliches Problem: Priming-Effekt = Einflüsse durch bereits bekannte Informationen; unterschwellige Aktivierung von Assoziationen auf Grund von vergangenen Erfahrungen. Problematik (Priming-Effekte): Woran denken Sie bei Jaguar?

### Fachliche Aussage
Die Verfügbarkeitsheuristik verzerrt Anlageentscheidungen (Werbung, Home Bias, Tech-Fokus); Priming aktiviert unterschwellig Assoziationen, die die Auswahl beeinflussen.

### React-Vorschlag
`AvailabilityInvestmentCard` mit Bullet-Liste und einem `PrimingExample` (zwei gegenübergestellte Jaguar-Bilder mit Frage).

---

## Folie 26 - Verfügbarkeitsheuristik (Determinanten)

### In der MD vorhanden
Der vollständige Text (Überschrift "Determinaten der Verfügbarkeitsheuristik" und alle sechs Punkte) ist vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "Determinaten der Verfügbarkeitsheuristik" blau/fett gesetzt; darunter eine reine Bullet-Liste (sechs Spiegelstriche, schwarz). (Hinweis: Auf der Folie steht tatsächlich "Determinaten" — fehlerhafte Schreibweise von "Determinanten" — Originalschreibweise beibehalten.)

### Inhaltliche Rekonstruktion
Determinaten der Verfügbarkeitsheuristik:
- Öffentliche Sichtbarkeit (z. B. Berichterstattung über Promischeidungen)
- Kontext der Informationen (in bestimmtem Kontext einfacher zu merken)
- Zeithorizont (je weiter das Ereignis zurück liegt, desto weniger präsent)
- Persönliche Erfahrungen
- Dramatische Ereignisse
- Subjektive Abrufanstrengung

### Fachliche Aussage
Wie verfügbar (abrufbar) eine Information ist, hängt von Sichtbarkeit, Kontext, zeitlichem Abstand, persönlicher Betroffenheit, Dramatik und Abrufaufwand ab.

### React-Vorschlag
`BulletList` mit Überschrift; ggf. als Icon-Liste (je ein Icon pro Determinante).

---

## Folie 27 - Verfügbarkeitsheuristik (Fehleinschätzungen)

### In der MD vorhanden
Der vollständige Text (Überschrift "Fehleinschätzungen auf Grund von:" und alle fünf Punkte inkl. "g"-Beispiel und illusorischer Korrelation) ist vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "Fehleinschätzungen auf Grund von:" blau/fett; darunter eine reine Bullet-Liste (fünf Spiegelstriche, schwarz).

### Inhaltliche Rekonstruktion
Fehleinschätzungen auf Grund von:
- Verfügbarkeit ist nicht immer gleich Häufigkeit.
- Verfügbarkeitskaskaden: Medien und Wahrnehmung der Öffentlichkeit befeuern sich gegenseitig.
- Art der Suche nach einer Antwort, Bsp.: Gibt es mehr deutsche Wörter mit einem "g" am Anfang oder mit einem "g" an dritter Stelle?
- Vorstellbarkeit und persönliche Erfahrung sind individuell.
- Illusorische Korrelation: Überschätzungen von Zusammenhängen, wenn man Ereignisse mental miteinander verbindet (Bsp. Pechsträhne/Unglückskausalketten).

### Fachliche Aussage
Die Verfügbarkeitsheuristik führt zu Fehleinschätzungen, weil Abrufbarkeit nicht gleich Häufigkeit ist und durch Medienkaskaden, Suchstrategie und illusorische Korrelationen zusätzlich verzerrt wird.

### React-Vorschlag
`BulletList` mit hervorgehobenem "g"-Beispiel als eingebettetes `MiniQuiz`.

---

## Folie 28 - Verfügbarkeitsheuristik (Forschung Risikowahrnehmung USA)

### In der MD vorhanden
Der vollständige Text inkl. Quellenangabe (Kahneman 2012, S. 173ff) und aller fünf Statistik-Beispiele ist vorhanden (mit kleinen OCR-/Tippfehlern wie "wahrschleich", "öffentlicher" statt "öffentlichen").

### Fehlende visuelle Inhalte
Keine Grafik. Reine Bullet-Liste (fünf Spiegelstriche) mit statistischen Vergleichsaussagen; der Quellenverweis steht in der schwarz gesetzten Einleitung. Keine farbliche Hervorhebung.

### Inhaltliche Rekonstruktion
Forschungen zur öffentlicher Wahrnehmung von Risiken in den USA zeigen (vgl. Kahneman (2012), S. 173ff):
- Schlaganfälle verursachen fast doppelt so viele Todesfälle wie alle Unfälle, aber Probanden stuften Unfalltod als wahrscheinlicher ein.
- Tornados wurden gefährlicher eingeschätzt als Asthma, obwohl Asthma 20mal mehr Todesopfer forderte.
- Tod durch Blitzschlag wurde als weniger wahrschleich [sic] eingestuft als Tod durch Lebensmittelvergiftung, obwohl er 52-mal häufiger ist.
- Krankheiten fordern ca. 18-mal mehr Todesopfer als Unfälle, aber beide Todesursachen wurden gleich wahrscheinlich beurteilt.
- Unfällen sollen 300-mal mehr Todesopfer fordern als Diabetes, während das Verhältnis eigentlich 1:4 beträgt.

### Fachliche Aussage
Empirische Belege für die Verfügbarkeitsheuristik: Mediengetriebene, dramatische Risiken werden systematisch über-, häufige stille Risiken (Krankheiten) unterschätzt.

### React-Vorschlag
`RiskPerceptionTable` - Vergleichstabelle (wahrgenommen vs. tatsächlich) mit Faktor-Spalte; Quelle als `.source-note`.

---

## Folie 29 - Repräsentativitätsheuristik

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 291–306): Definitions-Kasten ("repräsentative Ereignisse überbewertet … schematische Denkmuster"; "Menschen halten etwas für wahrscheinlich, wenn es in ein Schema passt. Bsp.: September ist ein Crash-Monat.") sowie die Liste "Folgen der Repräsentativitätsheuristik" (vgl. Beck (2014), S. 29ff.) mit allen 7 Punkten.

### Fehlende visuelle Inhalte
- Definitions-Kasten: hellblau hinterlegtes Textfeld mit dunkelblauer Umrandung, zentriert oben. Wort "schematische" in Blau hervorgehoben.
- Überschrift "Folgen der Repräsentativitätsheuristik:" in Blau, mit kleinerem Quellenzusatz "(vgl. Beck (2014), S. 29ff.)" (fett, dunkel).
- Bullet-Liste mit quadratischen Aufzählungszeichen (7 Folgen).

### Visuelle Rekonstruktion
```
+------------------------------------------------+
| Repräsentativitätsheuristik bedeutet, dass     |
| "repräsentative" Ereignisse überbewertet       |
| werden bzw. zu schnell auf SCHEMATISCHE        |
| Denkmuster zurückgegriffen wird.               |
|                                                |
| Menschen halten etwas für wahrscheinlich,      |
| wenn es in ein Schema passt.                   |
| Bsp.: September ist ein Crash-Monat.           |
+------------------------------------------------+
```

### Inhaltliche Rekonstruktion
Folgen der Repräsentativitätsheuristik (vgl. Beck (2014), S. 29ff.):
1. Conjunction Bias (Verknüpfungstäuschung)
2. Vernachlässigung der A-priori-Wahrscheinlichkeit
3. Falsches Verständnis von Abweichungen vom Durchschnitt
4. Falsche Prognosesicherheit
5. Vernachlässigung des Stichprobenumfangs
6. Falsche Vorstellung vom Zufall
7. Gesetz der kleinen Zahlen

### Fachliche Aussage
Die Repräsentativitätsheuristik führt dazu, dass Ereignisse, die einem Schema/Stereotyp entsprechen, als überproportional wahrscheinlich eingeschätzt werden; aus ihr leiten sich sieben typische Fehler ab, die in den Folgefolien behandelt werden.

### React-Vorschlag
`DefinitionCallout` (hervorgehobener Definitions-Kasten) gefolgt von einer `ConsequenceList` (nummerierte/icon-basierte Aufzählung der 7 Folgen, jeweils als Anker auf die Detailfolien).

---

## Folie 30 - Repräsentativitätsheuristik: Conjunction Bias (Conjunction Fallacy)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 308–321): Untertitel "Conjunction Bias am Beispiel Linda", die Linda-Vignette, die beiden Antwortoptionen sowie der Schlusskasten.

### Fehlende visuelle Inhalte
- Foto rechts oben: Porträt einer jungen, dunkelhaarigen Frau (Symbolbild "Linda").
- Die beiden Antwortoptionen 1. und 2. stehen in einem grau hinterlegten Antwort-Kasten (Option 1 sichtbar grau hinterlegt; Aufzählung 1./2.).
- Schlusssatz in hellblauem/grauem Hinweis-Kasten am unteren Rand; der Begriff "Repräsentativitätsheuristik" ist fett in Anführungszeichen gesetzt. Wortlaut der Folie: "Menschen halten etwas für wahrscheinlich, wenn es in ein Schema passt ('Repräsentativitätsheuristik')".

### Visuelle Rekonstruktion
```
Conjunction Bias am Beispiel Linda          [Foto: junge Frau]
Linda ist 31 Jahre alt, sehr intelligent ... Anti-Kernkraft-Demos.

Was ist wahrscheinlicher?
 [ 1. Linda ist Bankangestellte. ]
   2. Linda ist Bankangestellte und ist in einer feministischen Bewegung aktiv.

| Menschen halten etwas für wahrscheinlich, wenn es in ein
|  Schema passt ("Repräsentativitätsheuristik") |
```

### Inhaltliche Rekonstruktion
Linda-Vignette: 31 Jahre, sehr intelligent, nimmt kein Blatt vor den Mund, Philosophiestudium, befasste sich intensiv mit Fragen der sozialen Gerechtigkeit und Diskriminierung, nahm an mehreren Anti-Kernkraft-Demonstrationen teil.
Frage: Was ist wahrscheinlicher?
1. Linda ist Bankangestellte.
2. Linda ist Bankangestellte und ist in einer feministischen Bewegung aktiv.
(Pointe: Die Konjunktion (2) kann nie wahrscheinlicher sein als das Einzelereignis (1).)

### Fachliche Aussage
Das Linda-Experiment illustriert den Conjunction Bias: Menschen halten die spezifischere Kombination zweier Merkmale für wahrscheinlicher als das umfassendere Einzelmerkmal, weil sie besser zum Schema passt – ein Verstoß gegen die Wahrscheinlichkeitslogik.

### React-Vorschlag
`VignetteCard` mit Fallbeschreibung + interaktiver `ChoiceQuiz`-Komponente (zwei Optionen, Auflösung des logischen Fehlers).

---

## Folie 31 - Repräsentativitätsheuristik: Vernachlässigung der A-priori-Wahrscheinlichkeit (Base rate fallacy)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 323–337): Überschrift, Definitionstext und das Jack-Beispiel inkl. Frage "Welchen Beruf hat Jack?".

### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik. Layout: blaue Teilüberschriften "Vernachlässigung der A-priori-Wahrscheinlichkeit (Base rate fallacy)" und "Beispiel:", darunter Fließtext.

### Inhaltliche Rekonstruktion
Definition: Die Zusammensetzung der Grundgesamtheit wird bei der Einschätzung der Wahrscheinlichkeit oft vernachlässigt. Die Wahrscheinlichkeit, dass ein Objekt zu einer bestimmten Klasse gehört, hängt nicht nur von der Repräsentativität des Objektes in Bezug auf die jeweilige Klasse ab, sondern auch von der Häufigkeit dieser Gruppe.
Beispiel: Jack wurde aus einer Gruppe von 70 Juristen und 30 Ingenieuren ausgewählt. Jack ist 45 Jahre alt, verheiratet, hat vier Kinder, ist konservativ, sorgfältig und ehrgeizig, interessiert sich nicht für Politik; Hobbys: Tischlern, Segeln, mathematische Denksportaufgaben. → "Welchen Beruf hat Jack?" (Base rate 70:30 spricht für Jurist, wird aber zugunsten des Stereotyps ignoriert.)

### Fachliche Aussage
Bei der Base-rate-Fallacy ignorieren Menschen die A-priori-Häufigkeiten der Grundgesamtheit und urteilen allein nach der stereotypischen Passung – obwohl die Basisrate (hier 70 % Juristen) die rationale Antwort dominiert.

### React-Vorschlag
`ExampleBox` mit hervorgehobenen Base-rate-Zahlen (70 Juristen / 30 Ingenieure) als kleine `StatBadge`-Elemente.

---

## Folie 32 - Repräsentativitätsheuristik: Falsches Verständnis von Abweichungen / Falsche Prognosesicherheit

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 339–352): beide Teilabschnitte "Falsches Verständnis von Abweichungen vom Durchschnitt" (inkl. Piloten-Beispiel) und "Falsche Prognosesicherheit".

### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik. Zwei blaue Teilüberschriften; im ersten Block Definitionstext + "Beispiel:" + Bullet-Liste mit Piloten-Beispiel, im zweiten Block zwei Bullets.

### Inhaltliche Rekonstruktion
Falsches Verständnis von Abweichungen vom Durchschnitt: Menschen suchen gern nach Erklärungen bei Abweichungen vom Durchschnitt und vernachlässigen die "Rückkehr zum Durchschnitt" (Regression zur Mitte).
Beispiel:
- Piloten werden nach besonders guter Landung gelobt, es folgt eine schlechtere Landung. Nach besonders holpriger Landung wird getadelt, es folgt eine bessere Landung.
- "Also: Lob schadet und Kritik spornt an! Oder?" (rhetorischer Trugschluss).

Falsche Prognosesicherheit:
- Verlässlichkeit von Informationen wird oft nicht geprüft.
- Mit der Existenz redundanter Informationen steigt die Sicherheit, eine richtige Prognose abgegeben zu haben.

### Fachliche Aussage
Regression zur Mitte wird fälschlich kausal gedeutet (Lob/Tadel), und redundante Informationen erhöhen trügerisch die Prognosezuversicht, ohne die tatsächliche Treffsicherheit zu verbessern.

### React-Vorschlag
`TwoBlockSection` mit zwei thematischen Unterabschnitten; das Piloten-Beispiel als `InsightQuote`.

---

## Folie 33 - Repräsentativitätsheuristik: Falsche Vorstellung von Zufall

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 354–369): Definitionstext, beide Beispiele (Senioren-Befragung, Butterproduktionsindex/Störche) und der Schlusskasten.

### Fehlende visuelle Inhalte
- Bold gesetzte Zwischenüberschrift "Beispiele für Scheinkorrelationen und Überschätzung von Kausalbeziehungen:" (schwarz fett, NICHT blau).
- Pfeil "à" (→) im Senioren-Beispiel ("→ Senioren unterstützen den Präsidenten?").
- Schlusssatz in hellblauem Hinweis-Kasten am unteren Rand: "Empirische Zusammenhänge werden gerne als Kausalbeziehungen interpretiert, soweit dies in ein vorgefertigtes Schema gut hineinpasst".

### Visuelle Rekonstruktion
```
Falsche Vorstellung von Zufall
Menschen neigen dazu, aus einer Reihe von Ergebnissen – seien sie
zufällig oder nicht – schnell ein Muster herauszulesen und
Repräsentativität zu unterstellen.

Beispiele für Scheinkorrelationen und Überschätzung von Kausalbeziehungen:
 • Telefonbefragung von 300 Senioren, 60 % erklärten Unterstützung
   für den Präsidenten → "Senioren unterstützen den Präsidenten?"
 • Butterproduktionsindex Bangladesch korreliert fast perfekt mit
   dem S&P 500; in Ländern mit Störchen sind die Geburtenraten höher

+--------------------------------------------------------+
| Empirische Zusammenhänge werden gerne als              |
| Kausalbeziehungen interpretiert, soweit dies in ein    |
| vorgefertigtes Schema gut hineinpasst                  |
+--------------------------------------------------------+
```

### Inhaltliche Rekonstruktion
Beispiele für Scheinkorrelationen / Überschätzung von Kausalbeziehungen:
- Bei einer telefonischen Befragung von 300 Senioren erklärten 60 Prozent ihre Unterstützung für den Präsidenten. → Trugschluss "Senioren unterstützen den Präsidenten?".
- Der Butterproduktionsindex in Bangladesch korreliert fast perfekt mit dem S&P 500. In vielen Ländern, in denen Störche beheimatet sind, sind die Geburtenraten höher.

### Fachliche Aussage
Menschen lesen aus zufälligen Datenreihen Muster heraus und interpretieren reine Korrelationen als Kausalität, sofern diese zu einem vorgefertigten Schema passen.

### React-Vorschlag
`ExampleList` plus abschließender `KeyTakeawayCallout` für den Merksatz.

---

## Folie 34 - Repräsentativitätsheuristik: Gesetz der kleinen Zahlen (law of small numbers)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 371–385): Definition Gesetz der großen / kleinen Zahl und das Nierenkrebs-Beispiel mit beiden (scheinbar widersprüchlichen) Aussagen.

### Fehlende visuelle Inhalte
Reine Textfolie. Blaue Teilüberschrift "Gesetz der kleinen Zahlen (law of small numbers)"; im Text farblich (blau) hervorgehoben "Gesetz der kleinen Zahl:", "kleiner" und "statistische Ausreißer". Blau hervorgehobenes "Beispiel:". Bullet-Liste mit zwei bewusst widersprüchlichen Aussagen.

### Inhaltliche Rekonstruktion
Gesetz der großen Zahl (Statistik): Menschen messen auch kleinen Stichproben eine hohe Repräsentativität zu, aber in der Statistik gilt: Je größer die Stichprobe, desto repräsentativer sind die dadurch erzeugten Ergebnisse.
Gesetz der kleinen Zahl (Heuristik): Je kleiner die Stichprobe, desto größer ist die Wahrscheinlichkeit für statistische Ausreißer.
Beispiel (Studie über die Häufigkeit von Nierenkrebs in den USA):
- Die Landkreise mit der niedrigsten Krebshäufigkeit liegen in ländlichen, dünn besiedelten Staaten.
- Die Landkreise mit der höchsten Krebshäufigkeit liegen in ländlichen, dünn besiedelten Staaten.
(Auflösung: kleine Bevölkerung = große Varianz, daher Extremwerte in beiden Richtungen.)

### Fachliche Aussage
Kleine Stichproben werden fälschlich als repräsentativ behandelt; dünn besiedelte Landkreise zeigen wegen kleiner Fallzahlen sowohl die höchsten als auch die niedrigsten Krebsraten – ein reines Stichprobengrößen-Artefakt.

### React-Vorschlag
`ContrastExample`, das die zwei paradox wirkenden Aussagen nebeneinanderstellt und auflöst.

---

## Folie 35 - Repräsentativitätsheuristik: Exkurs Bayes'sches Theorem

### In der MD problematisch/fehlend
MD-Zeilen 387–390 enthalten nur Titel "Exkurs: Bayes'sches Theorem" und "Berechnung bedingter Wahrscheinlichkeiten". Die Formel selbst ist als Bild eingebettet und in der MD NICHT vorhanden.

### Fehlende visuelle Inhalte
- Zentral platzierte mathematische Formel (Bayes-Theorem) in großer Formelschrift.
- Darunter (linksbündig, kleinere Schrift) eine Legende mit der Einleitung "Dabei:" und vier Erläuterungszeilen.

### Visuelle Rekonstruktion
```
              P(B|A) · P(A)
   P(A|B) = ─────────────────
                  P(B)
```

### Inhaltliche Rekonstruktion
Formel (Klartext): P(A|B) = [ P(B|A) · P(A) ] / P(B)
Legende ("Dabei:"):
- P(A | B): die (bedingte) Wahrscheinlichkeit des Ereignisses A unter der Bedingung, dass B eingetreten ist
- P(B | A): die (bedingte) Wahrscheinlichkeit des Ereignisses B unter der Bedingung, dass A eingetreten ist
- P(A): die A-priori-Wahrscheinlichkeit des Ereignisses A
- P(B): die A-priori-Wahrscheinlichkeit des Ereignisses B

### Fachliche Aussage
Das Bayes-Theorem ist das normativ korrekte Verfahren zur Berechnung bedingter Wahrscheinlichkeiten und dient als Referenz, um die im Folgenden gezeigten heuristischen Fehlschlüsse aufzudecken.

### React-Vorschlag
`FormulaBlock` (KaTeX/MathML-Rendering der Bayes-Formel) mit darunterliegender `DefinitionList` für die Variablen-Legende.

---

## Folie 36 - Repräsentativitätsheuristik: Beispiel für das Verdrehen von Zusammenhängen (Bayes)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 392–407): Definition bedingte Wahrscheinlichkeit, Hinweis auf Gleichsetzung von p(A|B) und p(B|A), Brustkrebs-Beispiel inkl. Quelle und vollständiger Bayes-Rechnung mit Ergebnis 12,2 %.

### Fehlende visuelle Inhalte
- Hellblauer Hinweis-Kasten: "Menschen neigen durch die Verwendung von schematischen Denkmustern zu einer Gleichsetzung von p(A | B) und p(B | A)".
- Gelb hinterlegter Beispiel-Kasten mit der Zeitungsmeldung (US-Arzt, 90 Frauen vorsorglich amputiert, 93 % der Brustkrebsfälle aus der Hochrisikogruppe), inkl. Quellenzeile in Klammern.
- Formelzeile der Bayes-Rechnung; Endergebnis 12,2 % blau/farblich (fett) hervorgehoben.

### Inhaltliche Rekonstruktion
Bedingte Wahrscheinlichkeit: p(A | B) = Wahrscheinlichkeit des Eintritts von Ereignis A unter der Bedingung, dass Ereignis B eintritt.
Beispiel (Quelle: Dawes, R.M. (1988), Rational Choice in an uncertain world): Eine US-amerikanische Zeitungsmeldung berichtete, ein Arzt habe 90 Frauen aus einer Hochrisikogruppe vorsorglich amputiert (die Brust), weil 93 % der Brustkrebsfälle aus der Hochrisikogruppe stammten.
Gegeben:
- p(Hochrisikogruppe | Brustkrebs) = p(Hr | Bk) = 0,93
- p(Eine Frau bekommt Brustkrebs) = p(Bk) = 0,075
- p(Eine Frau gehört zur Hochrisikogruppe) = p(Hr) = 0,57
Rechnung: p(Bk | Hr) = p(Bk) · p(Hr | Bk) / p(Hr) = 0,075 · 0,93 / 0,57 = 12,2 %

### Fachliche Aussage
Das Beispiel zeigt die fälschliche Gleichsetzung von p(A|B) und p(B|A): Das tatsächliche Brustkrebsrisiko innerhalb der Hochrisikogruppe beträgt korrekt nur 12,2 % statt der intuitiv unterstellten 93 %.

### React-Vorschlag
`CaseStudyBox` (Zeitungsmeldung farblich abgesetzt) mit eingebettetem `FormulaBlock` und farblich betontem Ergebnis-`StatBadge` (12,2 %).

---

## Folie 37 - Repräsentativitätsheuristik: Beispiele für das Verdrehen von Zusammenhängen

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 409–422). Hinweis: Die in der Folie farblich abgesetzten rhetorischen Rückfragen sind in der MD in Klammern enthalten.

### Fehlende visuelle Inhalte
Reine Textfolie (Bullet-Liste). Pro Bullet steht die Tatsachenaussage in Schwarz, die ironische Schlussfrage dahinter in blauer/farbiger Schrift abgesetzt (visuelle Trennung Fakt vs. Trugschluss).

### Inhaltliche Rekonstruktion
- Mehr als die Hälfte aller Verkehrsunfälle passieren in einem Radius von 30 km vom Wohnort! *(Sollte man deshalb zuhause vorsichtiger fahren?)*
- Tagsüber ereignen sich mehr Unfälle als nachts! *(Ist es also gefährlicher, tagsüber zu fahren?)*
- Die meisten Morde in NYC passieren in der Wohnung! *(Sollte man deshalb lieber im Central Park schlafen?)*
- Über 80 % aller Unfälle werden von nicht alkoholisierten Fahrern verursacht! *(Lieber vorher einen Schluck nehmen, ehe man sich ans Steuer setzt?)*

### Fachliche Aussage
Statistische Häufigkeiten werden ohne Bezug zur Grundgesamtheit (Expositionszeit/-anteil) kausal fehlinterpretiert; jede Tatsachenaussage führt zu einem absurden Handlungsschluss.

### React-Vorschlag
`FactVsFallacyList`: jede Zeile zweispaltig – linke Spalte Statistik, rechte Spalte (farblich, ggf. ausklappbar) der ironische Trugschluss.

---

## Folie 38 - Repräsentativitätsheuristik: Gründe für eine Überschätzung von Kausalbeziehungen

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 424–435): zwei Hauptgründe (Repräsentativität/Fortschreibung, mangelnde Verfügbarkeit) plus "daneben auch: Kontrollmotiv".

### Fehlende visuelle Inhalte
Reine Textfolie. Blaue Teilüberschrift; im Fließtext blau/fett hervorgehoben: "Repräsentativität", "Verfügbarkeit", "Kontrollmotiv:". Die ersten beiden Punkte als quadratische Bullets, "daneben auch:" als eigene Zeile, der Kontrollmotiv-Punkt erneut als Bullet.

### Inhaltliche Rekonstruktion
Gründe für eine Überschätzung von Kausalbeziehungen:
- Die Beobachtung empirischer Zusammenhänge in der Vergangenheit führt zur Repräsentativität und wird in die Zukunft fortgeschrieben (Beispiel: Prognosen von Analysten).
- Aus mangelnder Verfügbarkeit erfolgt eine Vernachlässigung der relevanten zufälligen Faktoren.
- daneben auch: Kontrollmotiv – durch den Glauben, eine Kausalbeziehung zu erkennen, erhöht sich das subjektive Kontrollgefühl des Menschen (hierzu später noch mehr).

### Fachliche Aussage
Kausalbeziehungen werden überschätzt, weil vergangene Muster fortgeschrieben, Zufallsfaktoren ausgeblendet werden und der Glaube an Kausalität das subjektive Kontrollgefühl steigert.

### React-Vorschlag
`ReasonList` mit drei Punkten und farblich hervorgehobenen Schlüsselbegriffen.

---

## Folie 39 - Repräsentativitätsheuristik: Kritik

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 437–455): alle sechs Kritikpunkte (Missverständnis, Häufigkeiten statt Wahrscheinlichkeiten, Anreize und Beratung, Darstellung, Beliebigkeit, Shefrin (2007)).

### Fehlende visuelle Inhalte
Reine Textfolie mit dichter Bullet-Liste; Schlagworte am Bullet-Anfang fett/blau ("Missverständnis:", "Häufigkeiten statt Wahrscheinlichkeiten:", "Anreize und Beratung:", "Darstellung:", "Beliebigkeit:", "Shefrin (2007):"). Pfeile "à" (→) im Text (u. a. im Beliebigkeits-Punkt: "… nach oft 'Rot' muss 'Schwarz' dran sein vs. 'Hot Hand': nach Treffer folgt Treffer → Voraussagen schwierig").

### Inhaltliche Rekonstruktion
Kritik an der Repräsentativitätsheuristik:
- Missverständnis: befragte Probanden verstehen die Frage anders (sie wählen zwischen feministischen Bankangestellten und nicht-feministischen Bankangestellten); aber der Effekt zeigt sich auch in anders aufgebauten Versuchen.
- Häufigkeiten statt Wahrscheinlichkeiten: Fragt man nach Häufigkeiten ("Wie viele von 100 Personen sind a) Bankangestellte oder b) feministische Bankangestellte?"), reduziert sich der Conjunction Bias.
- Anreize und Beratung: finanzielle Anreize und Beratung mit Dritten (wie auch bei wichtigen Entscheidungen üblich) reduzieren das Linda-Problem.
- Darstellung: beeinflusst die Wahrnehmung der Basisraten.
- Beliebigkeit: Mit der Repräsentativitätsheuristik lässt sich alles erklären (Bsp. Spielirrtum: nach oft "Rot" muss "Schwarz" dran sein vs. "Hot Hand": nach Treffer folgt Treffer → Voraussagen schwierig).
- Shefrin (2007): Privatinvestoren erwarten nach gutem Aktienjahr steigende Kurse, professionelle Investoren eher fallende Kurse.

### Fachliche Aussage
Die Repräsentativitätsheuristik ist methodisch angreifbar (Frageformulierung, Häufigkeitsformat, Anreize) und teils beliebig anwendbar; ihre Vorhersagekraft ist begrenzt.

### React-Vorschlag
`CritiqueList` mit fett gesetzten Lead-In-Begriffen je Bullet.

---

## Folie 40 - Bestätigungsirrtum (Confirmation Bias)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 457–468): Definition und die vier Bullets (Neigung zur bestätigenden Suche, Verteidigung der Meinung, Todesstrafe-Beispiel, Auftreten bei Suche und Interpretation).

### Fehlende visuelle Inhalte
Comicstrip (3 Panels) am unteren Folienrand, der den Confirmation Bias illustriert:
- Panel 1: Eine Person am Computer sagt: "i've heard the rhetoric from both sides - time to do my own research on the real truth."
- Panel 2: Google-Suchergebnis-Liste; die Person klickt/liest den ersten Treffer, der die bereits gefasste Meinung bestätigt ("Literally the first link that agrees with what you already believe …", darunter "Another link").
- Panel 3: Person ruft zufrieden "…jackpot!" – die bestätigende Information ist gefunden.

### Visuelle Rekonstruktion
```
[Panel 1] Person am PC: "I've heard the rhetoric from both sides – time
          to do my own research on the real truth."
[Panel 2] Google-Trefferliste: klickt den ersten Link, der die eigene
          Meinung stützt.
[Panel 3] Person: "…jackpot!"  (Bestätigung gefunden)
```

### Inhaltliche Rekonstruktion
Bestätigungsirrtum (Confirmation Bias):
- Menschen neigen dazu, Fakten im Sinne bereits vorgefasster Meinungen zu suchen und zu interpretieren.
- Hat man eine Meinung gefasst, so rückt die Verteidigung dieser in den Mittelpunkt der Bemühungen.
- Beispiel: Die Meinung zur Todesstrafe wird durch (dieselbe) Literatur zur Todesstrafe bestätigt – egal, ob man dafür oder gegen die Todesstrafe ist.
- Confirmation Bias kann sowohl bei der Suche nach als auch bei der Interpretation von Informationen auftreten.

### Fachliche Aussage
Beim Confirmation Bias suchen und deuten Menschen Informationen selektiv so, dass die bereits bestehende Meinung bestätigt wird; der Comic karikiert die nur scheinbar offene "eigene Recherche".

### React-Vorschlag
`DefinitionSection` mit begleitendem `ComicStrip`/`IllustrationCaption` (drei Panels als Bild mit Alt-Text-Beschreibung).

---

## Folie 41 - Bestätigungsirrtum (Confirmation Bias): Gründe

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 470–488): alle sechs Gründe (Positive Test, Pseudodiagnostizität, My-side-Bias, Primacy Effect, Belief Perseverance, Illusorische Korrelation).

### Fehlende visuelle Inhalte
Reine Textfolie mit dichter Bullet-Liste; Lead-In-Begriffe blau/fett ("Positive Test:", "Pseudodiagnostizität:", "My-side-Bias:", "Primacy Effect:", "Belief Perseverance:", "Illusorische Korrelation:").

### Inhaltliche Rekonstruktion
Gründe für den Bestätigungsirrtum:
- Positive Test: eigene Hypothesen werden getestet, indem man nur unterstützende Argumente sucht.
- Pseudodiagnostizität: Beobachtungen werden im Sinne der vermuteten Hypothese interpretiert, ohne zu prüfen, welche anderen Hypothesen ebenfalls kompatibel wären (Bsp. Fieber + Kopfschmerzen = Grippe).
- My-side-Bias: stärkere Gewichtung der Argumente, die die eigene Meinung unterstützen; evtl. besseres Erinnern an unterstützende Argumente (Motivationsproblem?).
- Primacy Effect: Urteilsbildung bereits in frühen Stadien der Entscheidungsfindung, allerdings wird auch der Recency-Effekt diskutiert: zuletzt aufgenommene Informationen sind am stärksten.
- Belief Perseverance: an widerlegter Theorie wird festgehalten (Dogma, Religion), Diskreditierung der Gegner und Fakten.
- Illusorische Korrelation: selektive Suche führt zu konstruierten Zusammenhängen.

### Fachliche Aussage
Der Confirmation Bias speist sich aus mehreren Mechanismen (einseitiges Testen, voreilige Diagnose, einseitige Gewichtung/Erinnerung, Reihenfolge-Effekte, Festhalten an Widerlegtem, Scheinkorrelationen).

### React-Vorschlag
`GlossaryList`: jeder Grund als Begriff + Erläuterung (aufklappbares Akkordeon).

---

## Folie 42 - Bestätigungsirrtum (Confirmation Bias): Erklärungsansätze & Strategien

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 490–502): Erklärungsansätze (zwei Bullets) und Strategien gegen den Bestätigungsirrtum (drei Bullets).

### Fehlende visuelle Inhalte
Reine Textfolie; zwei blaue Teilüberschriften "Erklärungsansätze:" und "Strategien gegen den Bestätigungsirrtum:". Pfeil "à" (→) im ersten Bullet.

### Inhaltliche Rekonstruktion
Erklärungsansätze:
- Menschen wollen glauben. → Es ist einfacher, Dinge zu glauben, von denen man möchte, dass sie wahr sind (Bsp. Anlagebetrug, Schneeballsystem).
- Widerspruchsfreies Weltbild (unklar: Können Menschen widersprüchliche Informationen nicht aufnehmen oder wollen sie es nicht?).
Strategien gegen den Bestätigungsirrtum:
- Alternativen explizit vorstellen und konkret (nicht abstrakt) darstellen.
- Vertraute Themenbereiche.
- Elementare Regeln der Logik und Statistik.

### Fachliche Aussage
Der Confirmation Bias entsteht aus dem Wunsch nach einem widerspruchsfreien Weltbild; gegensteuern lässt sich durch das explizite Durchdenken von Alternativen sowie logisch-statistische Disziplin.

### React-Vorschlag
`SplitSection` (Erklärungsansätze | Gegenstrategien) als zweispaltiges Layout.

---

## Folie 43 - Überoptimismus (Overconfidence)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 504–518): Definition, Folge und die drei Varianten (Self-serving-Bias, Kontrollillusion, Selbstüberschätzung).

### Fehlende visuelle Inhalte
Reine Textfolie; blaue Teilüberschriften "Überoptimismus (Overconfidence)" und "Varianten bzw. Folgen:". Lead-In-Begriffe der drei Varianten fett ("Self-serving-Bias:", "Kontrollillusion:", "Selbstüberschätzung:").

### Inhaltliche Rekonstruktion
Überoptimismus (Overconfidence): Phänomen, dass Menschen sich selbst und ihre Fähigkeiten eigennützig und egozentrisch beurteilen. Folge: Falsche Einschätzung von Wahrscheinlichkeiten.
Varianten bzw. Folgen:
- Self-serving-Bias: Erfolge beruhen auf eigenen Fähigkeiten, Misserfolge sind Zufall.
- Kontrollillusion: höhere Wahrscheinlichkeit für persönliche Erfolge, als es die objektiven Wahrscheinlichkeiten zulassen (Zahlungsbereitschaft für Selbstziehen von Losen).
- Selbstüberschätzung: überoptimistische Einschätzung für das eigene Leben (Autounfälle, Lungenkrebs, Scheidung, Herzinfarkt …).

### Fachliche Aussage
Overconfidence beschreibt die systematische, eigennützige Selbstüberschätzung der eigenen Fähigkeiten und führt zu verzerrten Wahrscheinlichkeitseinschätzungen in drei Ausprägungen.

### React-Vorschlag
`DefinitionSection` + `VariantCards` (drei Karten für die Unterformen).

---

## Folie 44 - Überoptimismus (Overconfidence): Experimente

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 520–531): vier Bullets (Lotterielose, 4-fache Zahlungsbereitschaft, 93 % Autofahrer Svenson 1981, 68 % Analysten) und der Schlusssatz.

### Fehlende visuelle Inhalte
Blaue Teilüberschrift "Experimente:". "Empirie:" steht jeweils blau hervorgehoben am Bullet-Anfang. Schlusssatz "Menschen überschätzen sich bzw. ihre Fähigkeiten systematisch." in hellblauem Hinweis-Kasten am unteren Rand.

### Inhaltliche Rekonstruktion
Experimente:
- An selbst gezogene Lotterielose glaubt man eher als an zugewiesene Lotterielose.
- Menschen sind bereit, bis zu 4-mal so viel für ein Lotterielos zu zahlen, wenn sie die Zahlen selbst auswählen können.
- Empirie: 93 % der Autofahrenden in den USA gehen davon aus, besser als der durchschnittliche Autofahrer zu fahren (Svenson, 1981).
- Empirie: 68 % der Analysten halten sich für besser als der Durchschnitt.
Merksatz: "Menschen überschätzen sich bzw. ihre Fähigkeiten systematisch."

### Fachliche Aussage
Empirische Studien (Svenson 1981; Analysten) belegen die systematische Selbstüberschätzung: Die große Mehrheit hält sich für überdurchschnittlich – statistisch unmöglich.

### React-Vorschlag
`EvidenceList` mit hervorgehobenen Prozentwerten (93 %, 68 %, 4×) als `StatBadge` und abschließendem `KeyTakeawayCallout`.

---

## Folie 45 - Überoptimismus (Overconfidence): Another example

### In der MD problematisch/fehlend
MD-Zeilen 533–536 enthalten nur "Another example for Overconfidence Bias …". Der eigentliche Inhalt ist ein Bild-Meme und in der MD NICHT erfasst.

### Fehlende visuelle Inhalte
Ein Internet-Meme (Bild) mit nachdenklich blickendem Mann (Brille, Hand am Kinn) und großem Text-Overlay:
- Haupttext (gelb): "IF THERE ARE 10 APPLES AND YOU TAKE AWAY 6, HOW MANY APPLES DO YOU HAVE???"
- Zusatz (grün): "(HINT: THE CORRECT ANSWER IS NOT 4)"
- Untertext (rot/pink): "HIT LIKE IF YOU GET IT!"
- Über dem Bild blaue Zeile: "Another example for Overconfidence Bias …".

### Visuelle Rekonstruktion
```
Another example for Overconfidence Bias …
[Foto: nachdenklicher Mann mit Brille, Hand am Kinn]
"IF THERE ARE 10 APPLES AND YOU TAKE AWAY 6,
 HOW MANY APPLES DO YOU HAVE???"
(HINT: THE CORRECT ANSWER IS NOT 4)
"HIT LIKE IF YOU GET IT!"
```

### Inhaltliche Rekonstruktion
Scherzfrage als Illustration für Overconfidence: Wer "4" antwortet, denkt im Subtraktions-Schema; die "richtige" Antwort wäre 6 (so viele Äpfel hat man, wenn man 6 weggenommen/genommen hat). Das Meme verdeutlicht spielerisch voreilige, übersichere Antworten.

### Fachliche Aussage
Ein humorvolles Meme als Auflockerung, das voreilige, übersichere Schnellantworten thematisiert und damit zum Overconfidence-Kapitel überleitet.

### React-Vorschlag
`MemeIllustration` (Bild mit beschreibendem Alt-Text und optionalem Auflösungs-Toggle).

---

## Folie 46 - Überoptimismus (Overconfidence): Hard-is-easy-Effekt

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 538–548): Lichtenstein/Fischoff (1977) und "Weitere Studien zeigen".

### Fehlende visuelle Inhalte
Reine Textfolie; blaue Teilüberschrift "Hard-is-easy-Effekt", darunter (schwarz, nicht blau) "Weitere Studien zeigen:".

### Inhaltliche Rekonstruktion
Hard-is-easy-Effekt:
- Lichtenstein/Fischoff (1977): Probanden überschätzen ihre Fähigkeiten weniger, je häufiger sie gestellte Aufgaben korrekt gelöst haben.
Weitere Studien zeigen:
- Mit steigender Schwierigkeit einer Aufgabe steigt das Maß an Überoptimismus. Bei leichteren Aufgaben sinkt das Vertrauen in die eigenen Fähigkeiten, es kommt sogar zu Unteroptimismus.

### Fachliche Aussage
Der Hard-is-easy-Effekt beschreibt, dass Überoptimismus mit der Aufgabenschwierigkeit zunimmt, während leichte Aufgaben sogar Unteroptimismus auslösen können.

### React-Vorschlag
`ConceptCard` mit kurzer Studienangabe (Lichtenstein/Fischoff 1977).

---

## Folie 47 - Überoptimismus (Overconfidence): Determinanten

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 550–564): alle acht Determinanten (Informationsmenge, Expertise, finanzielle Anreize, Aufgabenschwierigkeit, Geschlecht, Euphorie/Erfolg, Alkohol/Kokain, Alter).

### Fehlende visuelle Inhalte
Reine Textfolie mit acht quadratischen Bullets, blaue Teilüberschrift "Determinanten von Überoptimismus", keine Grafik.

### Inhaltliche Rekonstruktion
Determinanten von Überoptimismus:
- Menge der zur Verfügung gestellten Information (mehr Informationen führen zu mehr Zuversicht, auch wenn die Infos unbrauchbar sind).
- Expertise: Überoptimismus reduziert sich mit steigender Expertise, aber Börsenhändler neigen stärker zu Überoptimismus als Laien.
- Finanzielle Anreize reduzieren Überoptimismus leicht.
- Schwierigkeit der Aufgabe (Hard-is-easy-Effekt).
- Geschlecht (bei männerbezogenen Themen).
- Euphorie und persönlicher Erfolg.
- Alkohol und Kokain.
- Alter: Einige Studien ermitteln, dass die Overconfidence mit steigendem Alter abnimmt. Z. B. durch Lernkurve begründbar.

### Fachliche Aussage
Überoptimismus hängt von Informationsmenge, Expertise, Anreizen, Aufgabenschwierigkeit, Geschlecht, Stimmung, Substanzkonsum und Alter ab.

### React-Vorschlag
`DeterminantList` (Aufzählung mit kurzen Erläuterungen).

---

## Folie 48 - Überoptimismus (Overconfidence): Konsequenzen

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 566–576): drei Konsequenzen (höhere Risikobereitschaft, exzessiver Handel mit "Difference in Opinion", Unterdiversifikation).

### Fehlende visuelle Inhalte
Reine Textfolie; blaue Teilüberschrift "Konsequenzen aus Overconfidence"; im Text in Anführungszeichen "anders" und "Difference in Opinion".

### Inhaltliche Rekonstruktion
Konsequenzen aus Overconfidence:
- Höhere Risikobereitschaft.
- Exzessiver Handel (s. nächste Seite): Bei Overconfidence gewichten Investoren die ihnen zur Verfügung stehenden Informationen höher als der Markt. Sie bewerten also z. B. eine Aktie "anders" als der Markt. Diese "Difference in Opinion" führt zu Handel.
- Unterdiversifikation.

### Fachliche Aussage
Overconfidence führt zu mehr Risiko, exzessivem Handel (durch abweichende Meinungsbildung gegenüber dem Markt) und schlecht diversifizierten Portfolios.

### React-Vorschlag
`ConsequenceList` mit drei Punkten; Begriff "Difference in Opinion" als hervorgehobenes `Term`.

---

## Folie 49 - Überoptimismus (Overconfidence): Bias und exzessiver Handel

### In der MD problematisch/fehlend
MD-Zeilen 578–586 enthalten den Erläuterungstext mit allen vier Prozentwerten (Quelle Barber/Odean, JoF 2000) sowie den Quellenverweis "aus: Berk/DeMarzo (2011), S. 466." Das zugehörige Diagramm und seine ausführliche Bildunterschrift ("Abbildung 13.4 …") sind als Bild eingebettet und in der MD NICHT erfasst.

### Fehlende visuelle Inhalte
ACHTUNG – KORREKTUR gegenüber dem Entwurf: Das eingebettete Diagramm visualisiert NICHT die Depotumsätze nach Familienstand/Geschlecht (85/73/53/51 %). Diese Prozentwerte stehen nur im Bullet-Text der Folie; sie sind KEINE Balkenwerte im Diagramm. Tatsächlich gezeigtes Diagramm:
- Säulendiagramm (vertikale Balken), Balken in einem blau-grauen Ton (NICHT dunkelrot/bordeaux), auf hellgrauem/hellblauem Hintergrund.
- Y-Achse: "Jahresrendite", Skala 0 % bis 20 % (Schritte 5 %).
- X-Achse: vier (bzw. fünf, rechter Rand abgeschnitten) Quintile nach Portfolioumsatz, beschriftet Q1, Q2, Q3, Q4 (…); unter Q1 steht "(niedrigster Umsatz)", am rechten Rand (abgeschnitten) "(höchster Umsatz)".
- Balkenwerte fallen von links nach rechts mit steigendem Umsatz: Q1 ca. 18,5 %, Q2 ca. 17,8 %, Q3 ca. 17 %, Q4 ca. 15,3 % (alle Werte visuell abgelesen, "ca.").
- Eine horizontale gestrichelte Referenzlinie bei ca. 18 % (vermutlich Markt-/S&P-500-Rendite; visuell abgelesen).
- Bildunterschrift (sehr klein): "Abbildung 13.4: Renditen der Anleger und Portfolioumsatz. In dem Diagramm wird die durchschnittliche jährliche Rendite (abzüglich Provisionen und Transaktionskosten) für Anleger bei einem großen Discount-Broker von 1991 bis 1997 dargestellt. Die Anleger werden auf der Grundlage ihres Jahresumsatzes in Quintile eingeteilt. Und während die Anleger mit der geringsten Aktivität eine leicht (aber nicht signifikant) bessere Performance als der S&P 500 erzielten, sank die Performance mit der Höhe des Umsatzes."
- Quellenzeile (kursiv, klein): "Quelle: S. Barber und T. Odean, 'Trading Is Hazardous to Your Wealth: The Common Stock Investment Performance of Individual Investors', Journal of Finance, Bd. 55 (2000), S. 773-806."; rechts daneben "aus: Berk/DeMarzo (2011), S. 466."

### Visuelle Rekonstruktion
```
Jahres-
rendite
 20% |  █
 18% |  █(--gestrichelte Referenzlinie ~18%--)
     |  █    █
 15% |  █    █    █    █
     |  █    █    █    █
 10% |  █    █    █    █
  5% |  █    █    █    █
  0% +--Q1---Q2---Q3---Q4--(…) 
       (niedrigster        (höchster
        Umsatz)             Umsatz)
   Werte (ca., abgelesen): Q1 ~18,5% · Q2 ~17,8% · Q3 ~17% · Q4 ~15,3%
```

### Inhaltliche Rekonstruktion
Folientext (Bullet, blau hervorgehobene Werte): Der Grad der Selbstüberschätzung ist u. a. abhängig vom Familienstand und dem Geschlecht. Jährlicher Depotumsatz in % des Gesamtvermögens (Quelle: Barber/Odean, JoF 2000):
| Gruppe | Depotumsatz p. a. |
|---|---|
| Alleinstehende Männer | 85 % |
| Verheiratete Männer | 73 % |
| Verheiratete Frauen | 53 % |
| Alleinstehende Frauen | 51 % |

Eingebettetes Diagramm (Abbildung 13.4): durchschnittliche Jahresrendite (nach Kosten) eines Discount-Broker-Datensatzes 1991–1997, Anleger nach Jahresumsatz in Quintile (Q1 = niedrigster Umsatz … höchster Umsatz) eingeteilt; die Rendite sinkt mit steigendem Umsatz (Q1 ca. 18,5 % bis Q4 ca. 15,3 %, visuell abgelesen), die umsatzärmste Gruppe schlägt leicht (nicht signifikant) den S&P 500.
Quelle: Barber/Odean (2000), Journal of Finance Bd. 55, S. 773–806; aus: Berk/DeMarzo (2011), S. 466.

### Fachliche Aussage
Selbstüberschätzung treibt exzessiven Handel: Empirisch handeln (alleinstehende) Männer wegen stärkerer Overconfidence deutlich häufiger als Frauen (Depotumsätze 85/73/53/51 %), und das eingebettete Diagramm zeigt, dass eine höhere Handelsaktivität (steigender Portfolioumsatz von Q1 nach Q4) im Querschnitt mit niedrigerer Nettorendite einhergeht – häufiges Handeln schadet der Rendite.

### React-Vorschlag
`BarChart` (Quintile Q1–Q4(/Q5) auf der X-Achse, Y-Achse "Jahresrendite" 0–20 %, fallende Balken, gestrichelte Markt-Referenzlinie) plus daneben/darüber eine `StatList` der Depotumsätze (85/73/53/51 %); Datenquelle als `SourceNote` (Barber/Odean 2000; Berk/DeMarzo 2011, S. 466).

---

## Folie 50 - Affektheuristik

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 588–599): alle fünf Bullets (Bedeutung von Gefühlen, Ersatz komplexer Fragen, "Was fühle ich?" statt "Was denke ich?", Affekt-Definition, Basisaffekte).

### Fehlende visuelle Inhalte
Reine Textfolie; blaue Teilüberschrift "Affektheuristik"; im dritten Bullet farblich (blau) hervorgehoben "fühle" und "denke".

### Inhaltliche Rekonstruktion
Affektheuristik:
- Bedeutung von Gefühlen, Emotionen und Affekten für die Entscheidungsfindung.
- Ersatz komplexer Fragen bei der Entscheidungsfindung durch einfache Fragen.
- "Was fühle ich dabei?" statt "Was denke ich darüber?".
- Affekt = psychischer Prozess, der die Motorik, die körperlichen Funktionen, das Denken und das kommunikative Handeln geordnet ansteuert.
- Basisaffekte: Freude, Überraschung, Trauer, Wut, Ekel, Angst.

### Fachliche Aussage
Bei der Affektheuristik ersetzen Gefühle die rationale Analyse: Statt "Was denke ich?" entscheidet "Was fühle ich?", gestützt auf sechs Basisaffekte.

### React-Vorschlag
`DefinitionSection` mit `AffectChips` (sechs Basisaffekte als kleine Badges).

---

## Folie 51 - Herdenverhalten

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 601–614): "Tun, was andere tun", Lern-/Schadens-Aspekt mit den beiden Unter-Bullets (Fettleibigkeit/Rauchen/Alkohol, Zimmergenossen) und Ausblick "Spekulationsblasen".

### Fehlende visuelle Inhalte
Reine Textfolie mit verschachtelter Bullet-Liste (zwei Ebenen: quadratische Bullets auf Ebene 1, Gedankenstrich-Bullets auf Ebene 2). Blaue Teilüberschrift "Herdenverhalten". Keine Grafik.

### Inhaltliche Rekonstruktion
Herdenverhalten:
- "Tun, was andere tun" (Bsp. Mode, Cafe, Sekte …).
- Menschen lernen dadurch und entwickeln sich und die Gesellschaft weiter, aber soziale Verhaltensweisen können sehr mächtig sein und dadurch schaden:
  - Fettleibigkeit, Rauchverhalten und Alkoholkonsum können "ansteckend" sein.
  - Akademischer Erfolg von Studenten hängt von Zimmergenossen ab ("das College ist also nicht so entscheidend für die Karriere, sondern eher die 'richtigen' Zimmernachbarn").
- Später mehr: "Spekulationsblasen an Finanzmärkten".

### Fachliche Aussage
Herdenverhalten ("Tun, was andere tun") hat positive (Lernen) und negative ("ansteckende" Verhaltensweisen) Seiten und ist Grundlage späterer Phänomene wie Spekulationsblasen.

### React-Vorschlag
`NestedList` mit Verweis-Chip "→ Spekulationsblasen" auf das spätere Kapitel.

---

## Folie 52 - Versuchung

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 616–626): Definition (fehlende Selbstkontrolle), Loewenstein-Zitat (1996) und "Versuchung widerstehen" mit zwei Bullets (Odysseus, Wetten).

### Fehlende visuelle Inhalte
Reine Textfolie; blaue Teilüberschrift "Versuchung" und (schwarze) Zwischenüberschrift "Versuchung widerstehen:". Pfeile "à" (→) in den letzten beiden Bullets.

### Inhaltliche Rekonstruktion
Versuchung:
- Fehlende Selbstkontrolle (z. B. Essverhalten, Diäten, Rauchen, Handy- und Internetnutzung).
- "in kaltem Zustand können wir nicht verstehen, wie stark unsere Wünsche und unser Verhalten sich verändern, wenn das Verlangen nach einer Sache von uns Besitz ergriffen hat" (Loewenstein, 1996).
Versuchung widerstehen:
- "Odysseus" → Selbstkontrolle (System 2).
- Wetten (sich selbst öffentlich verpflichten) → höheres Commitment.

### Fachliche Aussage
Versuchung resultiert aus fehlender Selbstkontrolle und der Unterschätzung künftiger "heißer" Zustände; Gegenstrategien sind Selbstbindung (Odysseus-Prinzip, System 2) und öffentliche Verpflichtung.

### React-Vorschlag
`DefinitionSection` mit `Quote` (Loewenstein 1996) und `StrategyList` (Odysseus, Wetten).

---

## Folie 53 - Framing (Darstellungseffekt): Asian-Disease-Problem

### In der MD problematisch/fehlend
Stark zerbrochen (MD-Zeilen 628–658): Die als Bild eingebettete 2×2-Tabelle des Asian-Disease-Problems ist in der MD völlig durcheinandergeraten ("Asian-Disease-ProMbelehrmheit der Befragten entscheidet sich für A", Textfragmente vermischt). Die Tabellenstruktur und die Zuordnung Therapie A/B/C/D ist nicht rekonstruierbar.

### Fehlende visuelle Inhalte
- Definitionszeile oben (Bullet): "Framing (Einrahmung) beschreibt, dass die Formulierung eines Problems Einfluss auf die Wahl des Entscheiders nehmen kann."
- Bullet "Beispiel: Asian-Disease-Problem" (rechts vom Tabellenkopf teilweise verdeckt).
- 2×2-Entscheidungstabelle mit Kopfzeilen "Alternative A" und "Alternative B" (beide blau hinterlegt mit weißer Schrift).
- Zwei Zeilen mit identischer linker Beschreibungsspalte ("Sie sollen über eine Therapie für eine Epidemie entscheiden."); obere Zeile = Gewinn-Framing (Rettung), untere Zeile = Verlust-Framing (Sterben).
- Zwei rote/orange Sprechblasen-Ovale: oben (über Spalte A) "Mehrheit der Befragten entscheidet sich für A", unten (über/neben Spalte B unten) "Mehrheit der Befragten entscheidet sich für D" – beide teilweise über die Tabelle gelegt.

### Visuelle Rekonstruktion
```
Asian-Disease-Problem        [Oval: Mehrheit entscheidet sich für A]
                          | Alternative A          | Alternative B
--------------------------+------------------------+--------------------------
Sie sollen über eine      | Therapie A führt zur   | Therapie B führt dazu,
Therapie für eine         | Rettung von 200        | dass mit Wahrscheinlich-
Epidemie entscheiden.     | Menschenleben.         | keit von 33,3 % 600
(Gewinn-Frame)            |                        | Menschen gerettet werden;
                          |                        | mit Wahrscheinlichkeit von
                          |                        | 66,7 % wird niemand gerettet.
--------------------------+------------------------+--------------------------
Sie sollen über eine      | Therapie C führt dazu, | Therapie D führt dazu,
Therapie für eine         | dass 400 Menschen      | dass mit Wahrscheinlichkeit
Epidemie entscheiden.     | sterben.               | von 33,3 % niemand stirbt;
(Verlust-Frame)           |                        | mit Wahrscheinlichkeit von
                          |                        | 66,7 % sterben 600.
                                  [Oval: Mehrheit entscheidet sich für D]
```

### Inhaltliche Rekonstruktion
Framing (Einrahmung): Die Formulierung eines Problems kann Einfluss auf die Wahl des Entscheiders nehmen.
Asian-Disease-Problem (zwei Framings derselben Entscheidung – "Sie sollen über eine Therapie für eine Epidemie entscheiden."):
| | Alternative A | Alternative B |
|---|---|---|
| Gewinn-Frame (Rettung) | Therapie A: Rettung von 200 Menschenleben (sicher) | Therapie B: mit Wahrscheinlichkeit 33,3 % werden 600 gerettet; mit 66,7 % wird niemand gerettet |
| Verlust-Frame (Sterben) | Therapie C: 400 Menschen sterben (sicher) | Therapie D: mit Wahrscheinlichkeit 33,3 % stirbt niemand; mit 66,7 % sterben 600 |
Ergebnis: Im Gewinn-Frame wählt die Mehrheit die sichere Variante A; im Verlust-Frame wählt die Mehrheit die riskante Variante D – obwohl A/C und B/D rechnerisch identisch sind.
Weiteres Beispiel: "90 % fettfrei" vs. "mit 10 % Fett".

### Fachliche Aussage
Das Asian-Disease-Problem zeigt den Framing-Effekt: Bei identischem Erwartungswert entscheiden sich Menschen im Gewinn-Frame risikoavers (sichere Rettung, Alternative A) und im Verlust-Frame risikofreudig (Vermeidung sicherer Verluste, Alternative D).

### React-Vorschlag
`FramingMatrix` (2×2-Tabelle Gewinn/Verlust × sicher/riskant) mit hervorgehobenen Mehrheitsentscheidungen (A und D) als Annotation (rote Sprechblasen).

---

## Folie 54 - Framing (Darstellungseffekt): Umgang mit Framing-Effekten

### In der MD problematisch/fehlend
Teilweise zerbrochen (MD-Zeilen 660–673): Der Definitions-Kasten und die zwei Spalten "Zum Wohle des Entscheiders" / "Zum Wohle des Manipulierers" sind inhaltlich vorhanden, aber die zweispaltige Zuordnung ist durch das Auslesen vermischt.

### Fehlende visuelle Inhalte
- Definitions-Kasten oben (hellblau hinterlegt): "Framing-Effekt: Falls durch die Art der Präsentation einer Entscheidungssituation die resultierende Entscheidung beeinflusst wird" (Wort "Framing-Effekt:" fett).
- Zentrale blaue Überschrift "Umgang mit Framing-Effekten" mit zwei nach unten/außen weisenden Pfeilen, die sich auf zwei Spalten verzweigen.
- Zwei blaue Spaltenüberschriften "Zum Wohle des Entscheiders" und "Zum Wohle des Manipulierers", jeweils mit Pfeil nach unten in eine dunkelblau umrandete Box.
- "Beispiele:" jeweils kursiv gesetzt.

### Visuelle Rekonstruktion
```
+-----------------------------------------------------------+
| Framing-Effekt: Falls durch die Art der Präsentation einer|
| Entscheidungssituation die resultierende Entscheidung     |
| beeinflusst wird                                          |
+-----------------------------------------------------------+
                  Umgang mit Framing-Effekten
                     /                    \
   Zum Wohle des Entscheiders     Zum Wohle des Manipulierers
   +-----------------------------+  +-------------------------------+
   | • Einsatz von Frames, um    |  | • Einsatz von Frames, um den  |
   |   dem Entscheider zu helfen |  |   Gegenüber zu übervorteilen  |
   | • Beispiele: Ernährung,     |  | • Beispiele: Rabattierungs-   |
   |   Gesundheit, Altersvor-    |  |   effekte, Kontrasteffekt in  |
   |   sorge ("Nudging")         |  |   Werbung, …                  |
   | • Verantwortung liegt bei   |  | • Ziel des Kunden: Entlarven  |
   |   fürsorgender Person/      |  |   der Frames, relevante Infor-|
   |   Institution (Staat,       |  |   mationen isolieren und      |
   |   Lehrer, …)                |  |   rational entscheiden        |
   +-----------------------------+  +-------------------------------+
```

### Inhaltliche Rekonstruktion
Framing-Effekt: Falls durch die Art der Präsentation einer Entscheidungssituation die resultierende Entscheidung beeinflusst wird.
| Zum Wohle des Entscheiders | Zum Wohle des Manipulierers |
|---|---|
| Einsatz von Frames, um dem Entscheider zu helfen | Einsatz von Frames, um den Gegenüber zu übervorteilen |
| Beispiele: Ernährung, Gesundheit, Altersvorsorge ("Nudging") | Beispiele: Rabattierungseffekte, Kontrasteffekt in Werbung, … |
| Verantwortung liegt bei fürsorgender Person/Institution (Staat, Lehrer, …) | Ziel des Kunden: Entlarven der Frames, relevante Informationen isolieren und rational entscheiden |

### Fachliche Aussage
Framing kann zum Wohl des Entscheiders eingesetzt werden ("Nudging" durch Staat/Lehrer) oder manipulativ zum Vorteil des Manipulierers (Werbung, Rabatte); der Kunde sollte Frames entlarven und rational entscheiden.

### React-Vorschlag
`TwoColumnCompare` (gegenüberstellende Karten "Entscheider" vs. "Manipulierer") mit verzweigendem `BranchHeader`.

---

## Folie 55 - Rückschaufehler (Hindsight Bias)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 675–695): Definition, Wahrscheinlichkeits-Verschiebung, Rocky-Balboa/Apollo-Creed-Beispiel und die drei Varianten (Gedächtnisdesign, Hypothetisches Design, Outcome Effect).

### Fehlende visuelle Inhalte
Reine Textfolie mit verschachtelter Bullet-Liste; blaue Teilüberschrift "Rückschaufehler (Hindsight Bias)". Die drei Varianten als Unter-Bullets (Gedankenstrich-Ebene) mit farblich (blau/fett) hervorgehobenen Lead-Ins ("Gedächtnisdesign:", "Hypothetisches Design:", "Outcome Effect:").

### Inhaltliche Rekonstruktion
Rückschaufehler (Hindsight Bias):
- Phänomen, dass das Wissen um den Ausgang eines Ereignisses oder der Antwort auf eine Frage die Urteilskraft eines Menschen bezüglich dieses Ereignisses oder der Frage verändert.
- Nachdem ein Ereignis eingetreten ist, meinen wir, dass wir das Ereignis als wahrscheinlicher eingeschätzt hätten, als wir es tatsächlich eingeschätzt haben.
- Beispiel: Im Titelkampf stehen sich Rocky Balboa und Apollo Creed gegenüber. Vor dem Kampf hatte keine einzige Person auf einen Sieg von Balboa gewettet; auch der Sitznachbar hat auf Creed gewettet. Nach dem Kampf (Balboa gewinnt) sagt der Besucher des Kampfes zu seinem Sitznachbarn: "Ich war mir sicher vor dem Kampf, dass Balboa gewinnen wird!".
Varianten:
- Gedächtnisdesign: Im Rückblick passt man die ursprüngliche Schätzung über eine Wahrscheinlichkeit dem korrekten Wert an.
- Hypothetisches Design: Kennt man den Ausgang eines Ereignisses, glaubt man bestimmten Szenarios, ohne man (fälschlicherweise) im Nachhinein, diesen Ausgang so vorausgeahnt zu haben.
- Outcome Effect: Kennt man den Ausgang eines Ereignisses, so überschätzt man die Fähigkeit anderer Personen, die den Ausgang nicht kennen, diesen so vorauszusehen.

### Fachliche Aussage
Beim Hindsight Bias passen Menschen rückblickend ihre früheren Einschätzungen an den bekannten Ausgang an und meinen, sie hätten es "schon immer gewusst" – mit drei Ausprägungen (Gedächtnis-, hypothetisches Design, Outcome Effect).

### React-Vorschlag
`DefinitionSection` mit `ExampleQuote` (Rocky-Beispiel) und `VariantList` für die drei Designs.

---

## Folie 56 - Rückschaufehler / Hindsight Bias
### In der MD vorhanden
MD-Zeilen 697-705 (intern "Folie 104"): Überschrift "Rückschaufehler (Hindsight Bias)" sowie der Fließtext zum "I knew it all along-Effekt" (Wahlen, Fußballspiel, medizinische Untersuchung; Überschätzung des vorab Gewussten).
### Fehlende visuelle Inhalte
Das untere Drittel der Folie enthält ein Balkendiagramm (in der MD vollständig fehlend):
- Hellblauer Plot-Hintergrund, y-Achse beschriftet 0, 10, 20, 30, 40, 50, 60.
- Drei Balken auf der x-Achse mit Beschriftungen: "Schätzung", "Lösung", "Erinnerte Schätzung".
- Balken 1 "Schätzung": hellblau, Höhe = 30.
- Balken 2 "Lösung": hellblau, Höhe = 50.
- Balken 3 "Erinnerte Schätzung": unten hellblau bis 30, darüber dunkelrot/bordeaux von 30 bis 40.
- Rechts neben Balken 3 eine geschweifte Klammer (bordeaux) über dem dunkelroten Segment mit Beschriftung "Rückschaufehler".
(Die Balkenhöhen 30/50/30+10 sind aus dem gerasterten Diagramm visuell an der y-Achse abgelesen.)
### Visuelle Rekonstruktion
```
60 |
50 |        ___
40 |       |   |        ___  } Rückschaufehler (rot, 30->40)
30 | ___   |   |       |rot|
   ||blu|  |blu|       |blu|
 0 |_____________________________
   Schätzung  Lösung  Erinnerte
                       Schätzung
```
### Inhaltliche Rekonstruktion
| Kategorie | Wert (visuell abgelesen) | Farbe |
|---|---|---|
| Schätzung (ursprünglich) | ca. 30 | hellblau |
| Lösung (tatsächl. Wert) | ca. 50 | hellblau |
| Erinnerte Schätzung | ca. 30 (blau) + 10 (rot) = 40 | blau/rot |
Der dunkelrote Aufschlag (von 30 auf 40) = "Rückschaufehler": die im Nachhinein erinnerte Schätzung liegt höher als die tatsächlich abgegebene Schätzung, näher an der bekannten Lösung.
### Fachliche Aussage
Nach Bekanntwerden des Ergebnisses passt der Mensch seine erinnerte ursprüngliche Schätzung in Richtung der tatsächlichen Lösung an; die Differenz zwischen ursprünglicher und erinnerter Schätzung ist der Rückschaufehler.
### React-Vorschlag
HindsightBiasChart: Kleines vertikales Balkendiagramm (3 Balken) als reines SVG/CSS; dritter Balken zweifarbig gestapelt (blau + Akzentrot) mit seitlichem Klammer-Label "Rückschaufehler". Werte als Konstanten 30/50/30+10.

---

## Folie 57 - Endowment-Effekt (Besitztumseffekt)
### In der MD vorhanden
MD-Zeilen 707-724 (intern "Folie 105") vollständig: Definition (höherer Wert für Gegenstände im eigenen Besitz), Basketball-Experiment nach Dan Ariely mit allen Zahlen (durchschn. Verkaufspreis USD 2.400, Zahlungsbereitschaft USD 170, Begründungen Verkäufer/Käufer).
### Fehlende visuelle Inhalte
Reine Textfolie (Aufzählungen). Keine Grafiken, Diagramme, Icons oder Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Basketball-Experiment (Dan Ariely): Ticketbesitzer (Verkäufer) durchschnittlicher Verkaufspreis = USD 2.400; Studenten ohne Ticket (Käufer) max. Zahlungsbereitschaft = USD 170. Verkäufer argumentieren mit Erlebniswert (Bedeutung des Spiels), Käufer setzen den Geldbetrag in Relation zu anderen Ausgaben (Bier, Kino).
### Fachliche Aussage
Der bloße Besitz eines Gutes erhöht dessen subjektive Wertschätzung erheblich; Verkaufspreis-Forderung und Zahlungsbereitschaft klaffen weit auseinander.
### React-Vorschlag
ContentSection (Standardtext) mit eingebetteter kleiner Vergleichstabelle/StatPair für "Verkaufspreis 2.400 USD vs. Zahlungsbereitschaft 170 USD".

---

## Folie 58 - Endowment-Effekt (Weiteres Beispiel)
### In der MD vorhanden
MD-Zeilen 726-741 (intern "Folie 106") vollständig: Krug/Schokoriegel-Tauschexperiment (90 % behalten das zuerst erhaltene Geschenk), Folgen (gilt eher für private als professionelle Verkäufer; daher machen Berater häufig Sinn; Indifferenzkurven der neoklassischen Mikroökonomik können sich schneiden), Erklärungsansatz Prospect Theory (Verluste höher gewichtet als Gewinne).
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Tauschexperiment: Gruppe 1 erhält einen Krug, darf gegen einen Schokoriegel tauschen; Gruppe 2 erhält einen Schokoriegel, darf gegen einen Krug tauschen. In beiden Fällen behalten 90 % das zunächst erhaltene Geschenk.
### Fachliche Aussage
Der Endowment-Effekt zeigt sich auch bei Tauschgeschäften: 90 % behalten unabhängig vom Gut das erstbesessene Objekt; Erklärung über die Verlustaversion der Prospect Theory.
### React-Vorschlag
ContentSection. Optional Callout für die Kernzahl "90 % behalten das zuerst erhaltene Geschenk".

---

## Folie 59 - Status-Quo-Bias
### In der MD vorhanden
MD-Zeilen 743-759 (intern "Folie 107") vollständig: Definition (Präferenz für gegenwärtigen Zustand), Beispiel (geerbtes Geld wird in gleicher Form angelegt), Folgen (Amtsbonus, Reformwiderstand, höhere Zahlungsbereitschaft bei Bestandskunden, Festhalten an erfolglosen Geschäftsmodellen), Erklärungsansätze (Folge des Besitztumseffekts; Festhalten am Status quo als effiziente Heuristik).
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen/Icons. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Folgen: Amtsbonus für Amtsinhaber bei Wahlen · Widerstand gegen (wirtschafts-)politische Reformen · höhere Zahlungsbereitschaft bei Bestandskunden · Festhalten an erfolglosen Geschäftsmodellen von Unternehmen. Erklärungsansätze: Folge des Besitztumseffekts · Festhalten am Status quo als effiziente Heuristik.
### Fachliche Aussage
Menschen bevorzugen systematisch den gegenwärtigen Zustand; der Status-Quo-Bias erklärt Trägheit bei Wahlen, Reformen und Geschäftsmodellen und folgt aus Besitztumseffekt und Heuristik-Effizienz.
### React-Vorschlag
ContentSection mit gegliederten Listen (Beispiel / Folgen / Erklärungsansätze).

---

## Folie 60 - Halo-Effekt
### In der MD vorhanden
MD-Zeilen 761-776 (intern "Folie 108") vollständig: Definition (von einer herausragenden Eigenschaft auf die ganze Person schließen), Hinweis "Kognitive Verzerrung des ersten Eindrucks: Nur was man gerade weiß, zählt", Bezug auf System 1, Beispiele (gut aussehende Menschen beruflich erfolgreicher?; Dozenten-Bewertung der zweiten Aufgabe; sympathischer Politiker mit "toller Stimme").
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Vier Aufzählungspunkte auf der Folie: (1) Definition Halo-Effekt; (2) "Kognitive Verzerrung des ersten Eindrucks: Nur was man gerade weiß, zählt"; (3) "System 1 ist empfindlich für die Qualität und die Quantität der Informationen, aus denen Eindrücke und Intuitionen hervorgehen". Beispiele: Sind gut aussehende Menschen erfolgreicher in ihrem Beruf? / Bewerten Dozenten die zweite Aufgabe eines Tests anders, wenn die erste sehr gut bzw. schlecht gelöst wurde? / Woran liegt es, dass man einen Politiker, dessen Ansichten man teilt, auch für sympathisch und gut aussehend hält?
### Fachliche Aussage
Beim Halo-Effekt strahlt ein einzelner herausragender (positiver oder negativer) erster Eindruck auf das Gesamturteil über eine Person aus; System 1 ist empfindlich für Qualität und Quantität der Eindrücke.
### React-Vorschlag
ContentSection. Beispiele als Frage-Liste; optional QuizQuestion zum Dozenten-Bewertungsbeispiel.

---

## Folie 61 - WYSIATI
### In der MD vorhanden
MD-Zeilen 778-795 (intern "Folie 109") vollständig: Definition "What you see is all there is", System-1-Unempfindlichkeit gegenüber Quantität/Qualität, Kahneman-Zitat (S. 115), Beschreibung der plausiblen Geschichten-Konstruktion.
### Fehlende visuelle Inhalte
Reine Textfolie (mit farblich hervorgehobenen Schlüsselbegriffen wie "System 1", "unempfindlich", "unreflektiert", "What you see is all there is"). Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
WYSIATI = "What you see is all there is" / "Nur was man gerade weiß, zählt". Zitat Kahneman (S. 115): "Es ist leichter alles was man weiß in ein kohärentes Muster zu pressen, wenn man wenig weiß. WYSIATI erleichtert es, jene Kohärenz und kognitive Leichtigkeit zu erreichen, die dafür sorgt, dass wir eine Aussage als wahr akzeptieren."
### Fachliche Aussage
System 1 konstruiert aus wenigen verfügbaren Informationen eine plausible, kohärente Geschichte und ignoriert fehlende Informationen – die voreilige Schlussfolgerung auf beschränkter Datenbasis.
### React-Vorschlag
ContentSection mit Callout für das Kahneman-Zitat (.callout/source-note).

---

## Folie 62 - WYSIATI (Beispiel)
### In der MD vorhanden
MD-Zeilen 797-815 (intern "Folie 110") vollständig: Bahnhofsvorplatz-Beispiel ("Gruppe junger nordafrikanischer Männer", "Julia mulmiges Gefühl"), Bezug auf die Kölner Vorfälle Anfang 2016, sowie die erweiterten Varianten ("...von Marrakesch...", "...Mutter hat sich seit drei Tagen nicht gemeldet...").
### Fehlende visuelle Inhalte
Reine Textfolie (Schlüsselsätze farblich/fett hervorgehoben). Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Ausgangstext: "Auf dem Bahnhofsvorplatz steht eine Gruppe junger nordafrikanischer Männer. Julia beschleicht ein mulmiges Gefühl." → erweiterte Variante mit neuem Kontext: "...von Marrakesch... Ihre Mutter hat sich seit drei Tagen nicht gemeldet, was unüblich für sie ist."
### Fachliche Aussage
Das Beispiel demonstriert WYSIATI: Aus zwei Informationsfragmenten konstruiert das Gehirn unbewusst eine plausible Geschichte; zusätzliche Informationen würden die Wertung völlig verändern.
### React-Vorschlag
ContentSection; die zwei Textvarianten als gegenübergestellte Blockzitate (vorher/nachher).

---

## Folie 63 - Priming-Effekt (Bahnungs-Effekt)
### In der MD vorhanden
MD-Zeilen 817-830 (intern "Folie 111") vollständig: Definition (Assoziationen aufgrund zuvor Gesehenem/Gehörtem/Empfundenem), Beispiel "so_p" → soup/soap, weitere Studienergebnisse (Ort des Wahllokals, Priming auf Geld macht egoistisch, Rolle von Priming in Kulturen auf Gott/Diktatoren, Reinigungsbedürfnis).
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Beispiel Wortvervollständigung "so_p": → "soup" (Suppe), wenn vorher über Essen gesprochen wurde; → "soap" (Seife), wenn vorher über Waschen gesprochen wurde.
### Fachliche Aussage
Priming bedeutet, dass zuvor wahrgenommene Reize unbewusst Assoziationen, Gedanken und sogar Handlungen aktivieren und nachfolgende Entscheidungen beeinflussen.
### React-Vorschlag
ContentSection.

---

## Folie 64 - Priming-Effekt (Florida-Effekt)
### In der MD vorhanden
MD-Zeilen 832-845 (intern "Folie 112") vollständig: Florida-Experiment (Studenten bilden Sätze aus Wörtern; ein Teil bekommt altersbezogene Begriffe Florida, vergesslich, grau, Falte, Glatze; gehen anschließend beim Raumwechsel merkbar langsamer), Quelle Bargh/Chen/Burrows (1996). Die Pfeilkette ist als zerbrochener Text vorhanden: "Menge der / primt Gedanken primt Verhalten / Wörter".
### Fehlende visuelle Inhalte
Im unteren Teil eine dreistufige Prozesskette aus drei hellblauen Kästen, verbunden durch zwei orangefarbene Pfeil-Banner mit weißer Beschriftung "primt":
- Kasten 1: "Menge der Wörter"
- oranger Pfeil → "primt"
- Kasten 2: "Gedanken"
- oranger Pfeil → "primt"
- Kasten 3: "Verhalten"
Quelle (klein, unten): Bargh, John A., Chen, Mark, Burrows, Lara (1996): Automaticity of social behavior: Direct effects of trait construct and stereotype activation on action, in: Journal of Personality and Social Psychology, Vol. 71 (2), S. 230-244.
### Visuelle Rekonstruktion
```
[ Menge der    ] --primt--> [ Gedanken ] --primt--> [ Verhalten ]
[   Wörter      ]
```
### Inhaltliche Rekonstruktion
Florida-Experiment: Studenten sollen Sätze aus Wörtern bilden. Eine Gruppe erhält altersbezogene Begriffe (Florida, vergesslich, grau, Falte, Glatze) vorgegeben. Diese Gruppe geht beim anschließenden Raumwechsel merkbar langsamer in den zweiten Raum als die Kontrollgruppe.
### Fachliche Aussage
Sprachliches Priming wirkt über eine Kausalkette Wörter → Gedanken → Verhalten: bereits die Wortmenge prägt unbewusst die Gedanken und diese wiederum das tatsächliche Verhalten.
### React-Vorschlag
PrimingFlowDiagram: dreistufige horizontale Prozesskette (CSS-Flexbox, abgerundete Kästen + Akzent-Pfeil-Chips "primt"); auf Mobil vertikal stapeln. Quelle als source-note.

---

## Folie 65 - Priming-Effekt (Experiment in Büroküche: Vertrauenskasse)
### In der MD vorhanden
MD-Zeilen 847-861 (intern "Folie 113"): Setting-Beschreibung (Büroküche University of Newcastle, Vertrauenskasse mit Preisschlägen zur Bezahlung von Kaffee und Tee, eines Tages wochenweise wechselnde Fotos über der Preisliste, Frage "Warum sind Augenwochen erfolgreicher als Blumenwochen?"), Quelle Bateson/Nettle/Roberts (2006). Das Diagramm und der Foto-Streifen fehlen komplett (als Bild eingebettet).
### Fehlende visuelle Inhalte
Links ein vertikaler Bildstreifen ("image") aus alternierenden Schwarz-Weiß-Fotos: abwechselnd Nahaufnahmen von Augenpaaren und von Blumen (ca. 10 Felder von oben nach unten, je Woche eines).
Rechts ein Liniendiagramm:
- y-Achse: "time (weeks)", Skala 1 bis 10 (von unten nach oben).
- x-Achse: "£ paid per litre of milk consumed", Skala 0; 0,1; 0,2; 0,3; 0,4; 0,5; 0,6; 0,7.
- Eine Datenpunkt-Linie mit zwei Markertypen: gefüllte Punkte = "eye weeks" (Augenwochen), offene Kreise = "flower weeks" (Blumenwochen) – Legende im Diagramm.
- Verlauf im Zickzack: die gefüllten Augenwochen-Punkte liegen tendenziell weiter rechts (höhere Zahlungen), die offenen Blumenwochen-Punkte weiter links (geringere Zahlungen). Konkrete x-Werte der einzelnen Punkte sind im gerasterten Diagramm nicht sicher ablesbar.
### Visuelle Rekonstruktion
```
time(weeks)
 10 | o  (flower-week, geringer Betrag)
  9 |        ●  (eye-week, höherer Betrag)
  8 | o
  7 |     ●
  6 | o
  5 |          ●
  4 | o
  3 |       ●
  2 | o
  1 |              ●
    +----------------------------
    0  0.1 0.2 0.3 0.4 0.5 0.6 0.7
       £ paid per litre of milk consumed
   [Foto-Streifen links: abwechselnd Augen / Blumen]
   Legende: ● eye weeks   o flower weeks
```
(Die genauen x-Werte der einzelnen Datenpunkte sind im Rendering nicht sicher ablesbar; dargestellt ist nur das qualitative Muster Augenwochen = rechts/höher, Blumenwochen = links/geringer.)
### Inhaltliche Rekonstruktion
Über der Preisliste der Vertrauenskasse hängen wochenweise wechselnd Fotos von Augen bzw. Blumen. In "Augenwochen" zahlen die Mitarbeitenden pro Liter Milch deutlich mehr (gefüllte Punkte, rechts) als in "Blumenwochen" (offene Kreise, links). Quelle: Bateson, M., Nettle, D., Roberts, G. (2006): Cues of being watched enhance cooperation in a real-world setting, in: Biology Letters 2: 412-414.
### Fachliche Aussage
Das bloße (geprimte) Gefühl, beobachtet zu werden (Augenbilder), erhöht kooperatives/ehrliches Verhalten: In Augenwochen wird die Vertrauenskasse zuverlässiger bezahlt als in Blumenwochen.
### React-Vorschlag
WatchingEyesChart: Scatter/Linien-Diagramm (SVG) mit zwei Markertypen (gefüllt = Augenwochen, offen = Blumenwochen) plus seitlicher Foto-/Icon-Spalte (Auge-/Blumen-Icons im Wechsel). Konkrete x-Werte nur qualitativ andeuten (kein erfundenes Zahlenmaterial); Quelle als source-note.

---

## Folie 66 - Priming-Effekt (Einige Beispiele / Video)
### In der MD vorhanden
MD-Zeilen 863-866 (intern "Folie 114"): "Priming: Einige Beispiele" und YouTube-Link (https://www.youtube.com/watch?v=pnEZcOvIyxE).
### Fehlende visuelle Inhalte
Großes eingebettetes Foto/Video-Standbild: eine lächelnde ältere Frau mit dunklem (lila/blauem) Oberteil und Halskette vor einer wohnlichen Kulisse (Bücherregal, Lampe, Spiegel) – ein Video-Thumbnail. Kein fachlicher Dateninhalt, reiner Verweis auf das Video.
### Visuelle Rekonstruktion
(nicht erforderlich – Bild/Video-Verweis)
### Inhaltliche Rekonstruktion
Verweis auf ein Video mit Priming-Beispielen. Quelle: https://www.youtube.com/watch?v=pnEZcOvIyxE
### Fachliche Aussage
Folie dient als Einstieg/Illustration zu Priming-Beispielen über ein externes Video; keine eigenständige Sachaussage.
### React-Vorschlag
ContentSection mit externem Video-Link (Hinweis: Inhalt offline nicht verfügbar); kein Bild nötig.

---

## Folie 67 - Priming-Effekt (Farbfragen / Milch-Beispiel)
### In der MD vorhanden
MD-Zeilen 868-881 (intern "Folie 115"): Die Schnellfragen sind vorhanden (Farbe der Wolken? Brautkleid? Schnee? Was trinkt die Kuh?). Die Auflösung steht in der MD nur gespiegelt/verdreht (Zeilen 874-880, rückwärts geschrieben), weil sie auf der Folie kopfüber gedruckt ist.
### Fehlende visuelle Inhalte
Keine Grafiken/Tabellen. Besonderheit: Der Auflösungstext ist auf der Folie um 180° gedreht gedruckt (Auflösung erst nach "Umdrehen" lesbar) – deshalb in der MD als rückwärts/gespiegelter Text zerbrochen.
### Visuelle Rekonstruktion
Auflösung (entspiegelt/lesbar gemacht):
"Da Sie die ersten drei Fragen mit 'Weiß' beantwortet haben, wurde die Farbe Weiß als eine kürzlich gebrauchte Information in Ihrem Gedächtnis gespeichert. Da Sie Milch sowohl mit dem Wort Kuh, als auch mit der Farbe Weiß verbinden, greift das System 1 schneller zu dieser als zur richtigen Antwort (System 2). In der Psychologie bedeutet Priming die Wirkung eines ersten Reizes, welche einen nachfolgenden Reiz aktiviert und dann die Entstehung weiterer Vorstellungen hervorruft."
### Inhaltliche Rekonstruktion
Fragen (schnell beantworten): Welche Farbe haben die Wolken? / Welche Farbe hat ein Brautkleid? / Welche Farbe hat Schnee? / Was trinkt die Kuh? → typische (falsche) Reflexantwort: "Milch". (Hinweis: Die "richtige" Antwort wird auf der Folie selbst nicht explizit ausgeschrieben; sie ist die naheliegende Pointe, dass eine Kuh Wasser trinkt.)
### Fachliche Aussage
Drei aufeinanderfolgende "Weiß"-Antworten primen System 1, sodass auf die Frage "Was trinkt die Kuh?" reflexhaft "Milch" geantwortet wird (statt der korrekten Antwort, dass die Kuh Wasser trinkt); Beleg für Priming.
### React-Vorschlag
PrimingQuiz: interaktive Frageliste mit aufklappbarer/umdrehbarer Auflösung (Spoiler-Toggle), um den Aha-Effekt nachzubilden.

---

## Folie 68 - Mentale Kontenführung / Mental Accounting (Beispiel Kinobesuch)
### In der MD vorhanden
MD-Zeilen 883-897 (intern "Folie 116"): Definition Mental Accounting (statt alle relevanten Tatbestände einzubeziehen, ordnen Menschen die Konsequenzen verschiedenen mentalen Konten zu) und das Kinobesuch-Beispiel als zerbrochene Tabelle (Situation 1: 10€-Karte verloren; Situation 2: 10€-Schein verloren; Frage "Gehen Sie trotzdem ins Kino?").
### Fehlende visuelle Inhalte
Eine zweizeilige Tabelle mit farbigen Zeilenlabels:
- Zeile "Situation 1" (hellblau): "Sie haben vorab für 10€ eine Karte gekauft. An der Kasse stellen Sie fest, dass Sie die Karte verloren haben."
- Zeile "Situation 2" (hellgrün): "Sie müssen die Karte noch an der Kasse erwerben; an der Kasse stellen Sie fest, dass Sie einen 10€-Schein verloren haben."
Darunter Aufzählungspunkt (fett): "Gehen Sie trotzdem ins Kino?"
### Visuelle Rekonstruktion
| | Situation |
|---|---|
| Situation 1 (blau) | Karte für 10€ vorab gekauft → an der Kasse Karte verloren |
| Situation 2 (grün) | Karte noch zu kaufen → an der Kasse 10€-Schein verloren |
### Inhaltliche Rekonstruktion
Frage in beiden Situationen: "Gehen Sie trotzdem ins Kino?" (Auflösung folgt auf Folie 69).
### Fachliche Aussage
Obwohl ökonomisch in beiden Fällen 10€ verloren sind, führt die Zuordnung zu unterschiedlichen mentalen Konten ("Kino-Konto" vs. "Bargeld-Konto") zu unterschiedlichem Verhalten.
### React-Vorschlag
ScenarioTable: zweizeilige Tabelle mit Farbcodierung (blau/grün) der beiden Situationen; Frage als Callout. Ergebnis erst auf Folgefolie zeigen.

---

## Folie 69 - Mentale Kontenführung / Mental Accounting (Ergebnis)
### In der MD vorhanden
MD-Zeilen 899-913 (intern "Folie 117"): Ergebnis-Tabelle als zerbrochener Text (Situation 1: 54 % würden keine neue Karte kaufen; Situation 2: 12 % würden keine neue Karte kaufen) sowie Thaler-(1999)-Definition der mentalen Konten.
### Fehlende visuelle Inhalte
Dreispaltige Tabelle (Spalte 1 Label farbig, Spalte 2 Situationstext, Spalte 3 Ergebnis fett):
- Zeile "Situation 1" (hellblau): Karte für 10€ gekauft, Karte verloren → "54 % würden keine neue Karte kaufen".
- Zeile "Situation 2" (hellgrün): Karte noch zu kaufen, 10€-Schein verloren → "12 % würden keine neue Karte kaufen".
Darunter Aufzählungspunkt: Thaler (1999) – Menschen tendieren dazu, ihr Vermögen in Abhängigkeit von bestimmten Kategorien (z. B. Verwendungszweck oder Anlagedauer) zu verbuchen = "Mentale Konten".
### Visuelle Rekonstruktion
| | Situation | Ergebnis |
|---|---|---|
| Situation 1 (blau) | 10€-Karte gekauft, Karte verloren | 54 % würden keine neue Karte kaufen |
| Situation 2 (grün) | Karte noch zu kaufen, 10€-Schein verloren | 12 % würden keine neue Karte kaufen |
### Inhaltliche Rekonstruktion
Thaler (1999): Menschen tendieren dazu, ihr Vermögen in Abhängigkeit von bestimmten Kategorien (z. B. Verwendungszweck oder Anlagedauer) zu verbuchen = "Mentale Konten".
### Fachliche Aussage
Bei verlorener Karte (Situation 1) verzichten viel mehr Personen (54 %) auf einen Neukauf als bei verlorenem Geldschein (12 %), obwohl der Geldverlust identisch ist – die mentale Kontenzuordnung steuert das Verhalten.
### React-Vorschlag
ResultTable: dreispaltige Tabelle mit hervorgehobenen Prozentwerten (54 % / 12 %); Thaler-Zitat als source-note/Callout.

---

## Folie 70 - Mentale Kontenführung (Vernachlässigung von Abhängigkeiten)
### In der MD vorhanden
MD-Zeilen 915-932 (intern "Folie 118"): Thema "Vernachlässigung von Abhängigkeiten zwischen mentalen Konten" und die Wetter-Tabelle in stark zerbrochener Markdown-Form (Unternehmen A Badehosen, Unternehmen B Regenbekleidung, Summe; Werte ++/-/+), plus Merksatz zu Risikodiversifikation.
### Fehlende visuelle Inhalte
Matrix-Tabelle 3x2 mit Kopfzeile in zwei Farben:
- Kopf: leer | "Gutes Wetter" (grüner Header) | "Schlechtes Wetter" (grauer Header).
- Zeilenlabels (dunkelblauer Hintergrund, weiße Schrift): "Unternehmen A (Badehosen)", "Unternehmen B (Regenbekleidung)", "Summe".
- Zellen Unternehmen A: Gutes Wetter "++" (grünlich), Schlechtes Wetter "-" (grau).
- Zellen Unternehmen B: Gutes Wetter "-", Schlechtes Wetter "++".
- Zeile Summe: Gutes Wetter "+", Schlechtes Wetter "+".
Darunter blau umrandeter Merksatz-Kasten: "Durch Mental Accounting werden Risikodiversifikationseffekte in Portfolien häufig nicht genügend beachtet".
### Visuelle Rekonstruktion
| | Gutes Wetter | Schlechtes Wetter |
|---|---|---|
| Unternehmen A (Badehosen) | ++ | - |
| Unternehmen B (Regenbekleidung) | - | ++ |
| Summe | + | + |
### Inhaltliche Rekonstruktion
Merksatz: "Durch Mental Accounting werden Risikodiversifikationseffekte in Portfolien häufig nicht genügend beachtet."
### Fachliche Aussage
Zwei gegenläufige Investments (Badehosen vs. Regenbekleidung) ergeben in jedem Wetterszenario eine positive Summe (+/+); wer beide getrennt auf mentalen Konten betrachtet, übersieht diesen Diversifikationseffekt.
### React-Vorschlag
PayoffMatrix: 3x2-Matrixtabelle mit farbcodierten Headern (grün/grau) und Symbolzellen (++/-/+); abschließender Callout mit dem Merksatz.

---

## Folie 71 - Mentale Kontenführung (Folgen / Erklärungsansätze)
### In der MD vorhanden
MD-Zeilen 934-952 (intern "Folie 119") vollständig: Folgen (je nachdem, wie eine Entscheidungssituation in mentalen Konten dargestellt wird, können bei ein und derselben Entscheidungssituation unterschiedliche Verhaltensweisen resultieren; Sunk-cost-Effekt: zusätzliche Anstrengungen und zusätzliche Kosten in Kauf genommen, um eine verlorene Ausgabe nicht verloren zu geben; Zerstörung der Ausgabendisziplin), Erklärungsansätze (Mental Accounting hilft Menschen, einen Überblick über Einnahmen und Ausgaben/Nutzen und Kosten zu halten = Mentale Kontenführung als effiziente Heuristik; Prospect Theory: Verluste werden höher bewertet als Gewinne, so dass es zum Sunk-cost-Effekt kommt).
### Korrektur zur Folienzuordnung
WICHTIG: Im Entwurf des Kollegen war diese Folie fälschlich mit der nächsten Folie (Gene Hackman / Dustin Hoffman, Video) auf "Folie 71" zusammengelegt; tatsächlich ist PDF-Seite 71 die eigenständige "Folgen / Erklärungsansätze"-Folie (Fußzeile "Folie 119"). Die Video-Folie ist PDF-Seite 72. Dadurch verschiebt sich die gesamte folgende Zuordnung des Entwurfs um eins; sie ist unten korrigiert.
### Fehlende visuelle Inhalte
Reine Textfolie (zwei gegliederte Listen: "Folgen:" und "Erklärungsansätze:"). Keine Grafiken/Tabellen/Icons. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Folgen: (1) je nach Darstellung der Entscheidungssituation in mentalen Konten unterschiedliche Verhaltensweisen; (2) Sunk-cost-Effekt: zusätzliche Anstrengungen/Kosten werden in Kauf genommen, um eine verlorene Ausgabe nicht verloren zu geben; (3) Zerstörung der Ausgabendisziplin (z. B. Verkauf teurer Zusatzversicherungen). Erklärungsansätze: (1) Mental Accounting als effiziente Heuristik zur Übersicht über Einnahmen/Ausgaben; (2) Prospect Theory (Verluste höher gewichtet → Sunk-cost-Effekt).
### Fachliche Aussage
Mentale Konten erklären sowohl nützliche Übersichts-Heuristik als auch Fehlverhalten wie den Sunk-cost-Effekt: Weil Verluste höher gewichtet werden (Prospect Theory), wird in bereits "verbuchte" Konten weiter investiert, um den Verlust nicht zu realisieren.
### React-Vorschlag
ContentSection mit zwei gegliederten Listen (Folgen / Erklärungsansätze); Sunk-cost-Effekt optional als Callout hervorheben.

---

## Folie 72 - Mentale Kontenführung (Gene Hackman / Dustin Hoffman, Video)
### In der MD vorhanden
MD-Zeilen 954-958 (intern "Folie 120"): "Mental Accounting mit Gene Hackman und Dustin Hoffman" + YouTube-Link (https://www.youtube.com/watch?v=t96LNX6tk0U).
### Korrektur zur Folienzuordnung
Diese Video-Folie ist PDF-Seite 72 (Fußzeile "Folie 120"), nicht – wie im Entwurf – Seite 71.
### Fehlende visuelle Inhalte
Eingebettetes Video-Standbild: zwei Männer (Gene Hackman links, Dustin Hoffman rechts) sitzend in einem Interview-/Talk-Setting, Hackman hält ein Glas; darunter eine YouTube-Player-Leiste (Steuerelemente). Kein fachlicher Dateninhalt; reiner Videoverweis.
### Visuelle Rekonstruktion
(nicht erforderlich – Video-Verweis)
### Inhaltliche Rekonstruktion
Titel: "Mental Accounting mit Gene Hackman und Dustin Hoffman". Quelle: https://www.youtube.com/watch?v=t96LNX6tk0U
### Fachliche Aussage
Illustration des Mental-Accounting-Konzepts anhand eines Video-Beispiels; keine eigenständige Datenaussage.
### React-Vorschlag
ContentSection mit externem Video-Link; kein Bild nötig.

---

## Folie 73 - Verankerungseffekt / Anchoring (Definition)
### In der MD vorhanden
MD-Zeilen 960-970 (intern "Folie 121") vollständig: Definition (Orientierung an Ausgangswerten bei Schätzung unbekannter Größen, auch wenn die Ausgangswerte nichts mit der Schätzung zu tun haben), "Der erste Anker verzerrt die nachfolgenden Schätzungen", Beispiel Lyon (mehr als 500.000 vs. 1.500.000 Einwohner?).
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Beispiel: "Hat Lyon mehr als 500.000 Einwohner?" vs. "Hat Lyon mehr als 1.500.000 Einwohner?" – der genannte Ankerwert verzerrt die anschließende Schätzung.
### Fachliche Aussage
Beim Verankerungseffekt orientieren sich Menschen bei Schätzungen an einem zuvor genannten (auch sachfremden) Ausgangswert, von dem sie sich dann zu wenig lösen.
### React-Vorschlag
ContentSection.

---

## Folie 74 - Verankerungseffekt (Beispiele)
### In der MD vorhanden
MD-Zeilen 972-989 (intern "Folie 122"): Beide Beispiele als zerbrochene Tabellen vorhanden – Hausbewertung ($74.900 Marktwert; Anker $65.900 / $83.900; Schätzungen Studenten und Makler) und UN-Anteil afrikanischer Staaten (Gruppe A/B; 25 %/45 %). Werte korrekt, aber Layout zerbrochen.
### Fehlende visuelle Inhalte
Zwei als Text/Tabelle gesetzte Wert-Blöcke:
(1) "Welchen Wert hat das Haus?" – zwei Anker-Spalten:
- Aktueller Marktwert des Hauses: $ 74.900.-
- Ankerpreis in Prospekt: $ 65.900.- | $ 83.900.-
- Preisschätzung Studenten: $ 63.571.- | $ 71.196.-
- Preisschätzung Makler*: $ 67.811.- | $ 75.190.-
(2) "Wie hoch ist der Anteil afrikanischer Staaten an der UN?" – zwei Gruppen (Gruppe A orange, Gruppe B grün):
- 1. Frage: größer oder kleiner als 10 %? (Gruppe A) bzw. als 60 %? (Gruppe B)
- 2. Frage: genaue Prozentzahl angeben
- Empirisches Ergebnis: 25 % (A) | 45 % (B)
- Fehlerquelle: willkürliche Verzerrung in Richtung des Ankers
Fußnote: "*auch Experten unterliegen dem Ankereffekt".
### Visuelle Rekonstruktion
Haus:
| | Anker niedrig | Anker hoch |
|---|---|---|
| Marktwert | $74.900 | $74.900 |
| Ankerpreis Prospekt | $65.900 | $83.900 |
| Schätzung Studenten | $63.571 | $71.196 |
| Schätzung Makler* | $67.811 | $75.190 |

UN-Anteil:
| | Gruppe A (Anker 10 %) | Gruppe B (Anker 60 %) |
|---|---|---|
| Empirisches Ergebnis | 25 % | 45 % |
### Inhaltliche Rekonstruktion
Fehlerquelle: willkürliche Verzerrung in Richtung des Ankers. *Auch Experten (Makler) unterliegen dem Ankereffekt.
### Fachliche Aussage
Sowohl Laien als auch Experten (Makler) verschieben ihre Schätzungen systematisch in Richtung des zufällig gesetzten Ankers – höherer Anker → höhere Schätzung.
### React-Vorschlag
AnchoringExamples: zwei kompakte Vergleichstabellen (Haus, UN-Anteil) mit Farbcodierung der Anker-Gruppen (orange/grün); Fußnote als source-note.

---

## Folie 75 - Verankerungseffekt / Anchoring (Erklärungsansätze)
### In der MD vorhanden
MD-Zeilen 991-1003 (intern "Folie 123") vollständig: Merksatz (Menschen weichen zu wenig vom Anker ab; abhängig von Plausibilität des Ankers und Unsicherheit des Entscheiders) und Erklärungsansätze (sozialer Gehalt von Ankern, unzureichende Adjustierung, numerische Prägung, Zugänglichkeit von Informationen).
### Fehlende visuelle Inhalte
Reine Textfolie mit Merksatz-Kasten (hellblau hinterlegt). Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Merksatz: "Menschen weichen in ihren Urteilen meist zu wenig von einem einmal gesetzten Anker ab ('Verankerungsheuristik'). (abhängig von Plausibilität des Ankers und Unsicherheit des Entscheiders)". Erklärungsansätze: sozialer Gehalt von Ankern (Anker werden als nützlich angenommen) · unzureichende Adjustierung der Schätzung (Herantasten an eine vermutet richtige Lösung) · numerische Prägung (einmal gehörte Zahlen prägen die Schätzung) · Zugänglichkeit von Informationen.
### Fachliche Aussage
Die Verankerungsheuristik beruht u. a. auf sozialer Nützlichkeitsannahme, unzureichender Adjustierung und numerischer Prägung; ihre Stärke hängt von Plausibilität des Ankers und Unsicherheit des Entscheiders ab.
### React-Vorschlag
ContentSection mit Callout für den Merksatz und Liste der Erklärungsansätze.

---

## Folie 76 - Verankerungseffekt (Ankerungsindex – Messung des Verankerungseffekts)
### In der MD vorhanden
MD-Zeilen 1005-1020 (intern "Folie 124") vollständig: Mammutbaum-Beispiel (Anker 366 m vs. 55 m; Schätzungen a) 257 m, b) 86 m), Formel des Ankerungsindex und Interpretation (100 % sklavisch, 0 % keine Rolle). Die Formel ist als zerbrochene Tabelle (Zeilen 1014-1017) vorhanden.
### Korrektur zur Folienzuordnung
WICHTIG: Im Entwurf des Kollegen wurde diese Folie als "Folie 75" geführt und PDF-Seite 76 fälschlich als bloße Wiederholungs-/Animationsstufe ("Duplikat") beschrieben. Das ist falsch: PDF-Seite 76 (Fußzeile "Folie 124") ist die eigenständige und einzige Ankerungsindex-Folie. Es gibt KEINE doppelte Folie; der Entwurf hatte durch die Fehlzuordnung ab Folie 71 ein Phantom-Duplikat erfunden, das hier entfernt wird.
### Fehlende visuelle Inhalte
Keine Bilder; eine als Formel-Block gesetzte Rechnung (in MD als zerbrochene Tabelle). Reine Text-/Formelfolie. Überschrift exakt: "Ankerungsindex – Messung des Verankerungseffekt".
### Visuelle Rekonstruktion
```
Ankerungsindex = Differenz Schätzung / Differenz Anker
               = (257 - 86) / (366 - 55)
               = 171 / 311 = 55 %
100% - Menschen wählen sklavisch den Anker
 0 % - Anker spielt keine Rolle
```
### Inhaltliche Rekonstruktion
Beispiel: a) Beträgt die Höhe des größten Mammutbaums mehr oder weniger als 366 m? → Schätzung 257 m; b) mehr oder weniger als 55 m? → Schätzung 86 m. Ankerungsindex = (257−86)/(366−55) = 171/311 = 55 %. Interpretation: 100 % = Menschen wählen sklavisch den Anker; 0 % = Anker spielt keine Rolle.
### Fachliche Aussage
Der Ankerungsindex misst die Stärke des Verankerungseffekts als Verhältnis der Schätzungsdifferenz zur Ankerdifferenz; im Beispiel 55 %, d. h. die Schätzungen folgten dem Anker zu gut der Hälfte.
### React-Vorschlag
ContentSection mit hervorgehobenem Formelblock (.callout) für die Ankerungsindex-Berechnung. (KEIN separates Duplikat anlegen.)

---

## Folie 77 - Verankerungseffekt (Social Security Number Experiment, Setup)
### In der MD vorhanden
MD-Zeilen 1022-1037 (intern "Folie 125") vollständig: Setup (55 MBA-Studenten an der MIT Sloan School of Management; 6 Produkte: Trackball, Tastatur, durchschnittlicher Wein, sehr guter Wein, belgische Schokolade, Design-Buch; mit Beschreibung, aber ohne Preisangabe), die beiden Fragen (Betrag = letzte beide Ziffern der Sozialversicherungsnummer; max. Zahlungsbereitschaft) und die Überleitfrage "Wie war das Ergebnis?", Quelle Ariely/Loewenstein/Prelec (2003).
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
6 Produkte: Cordless Trackball, Cordless Keyboard, durchschnittlicher Wein, sehr guter (rare) Wein, belgische Schokolade, Design-Buch (mit Beschreibung, aber ohne Preisangabe). Frage 1: Würden Sie einen Betrag gleich den letzten beiden Ziffern Ihrer Sozialversicherungsnummer für jedes der Produkte bezahlen? Frage 2: max. Zahlungsbereitschaft (willingness to pay)? Quelle: Ariely, D., Loewenstein, G., Prelec, D. (2003), Coherent arbitrariness: Stable demand curves without stable preferences, QJE 118(1): 73-105.
### Fachliche Aussage
Setup eines klassischen Anker-Experiments: Eine sachfremde Zahl (letzte zwei Ziffern der Sozialversicherungsnummer) dient als Anker für die Zahlungsbereitschaft für reale Produkte.
### React-Vorschlag
ContentSection; Produktliste als Aufzählung; Quelle als source-note.

---

## Folie 78 - Verankerungseffekt (Social Security Number Experiment, Ergebnisse)
### In der MD problematisch/fehlend
MD-Zeilen 1039-1043 (intern "Folie 126") enthalten nur Überschrift "Ergebnisse" und Quelle "Ariely et al. (2003), S. 76". Die eigentliche Ergebnistabelle (TABLE I) ist als Bild eingebettet und in der MD komplett fehlend.
### Fehlende visuelle Inhalte
Eingebettete Original-Tabelle (TABLE I) "Average Stated Willingness-to-Pay Sorted by Quintile of the Sample's Social Security Number Distribution". Spalten: Quintile of SS# distribution | Cordless trackball | Cordless keyboard | Average wine | Rare wine | Design book | Belgian chocolates. Fünf Quintil-Zeilen (1-5) plus eine Korrelations-Zeile mit p-Werten. (Bei hochaufgelöstem Re-Rendern der Seite sind alle Werte – inkl. Zeile 5 und der Korrelations-/p-Wert-Zeile – klar lesbar.)
### Visuelle Rekonstruktion
| Quintile SS# | Cordless trackball | Cordless keyboard | Average wine | Rare wine | Design book | Belgian chocolates |
|---|---|---|---|---|---|---|
| 1 | $ 8.64 | $16.09 | $ 8.64 | $11.73 | $12.82 | $ 9.55 |
| 2 | $11.82 | $26.82 | $14.45 | $22.45 | $16.18 | $10.64 |
| 3 | $13.45 | $29.27 | $12.55 | $18.09 | $15.82 | $12.45 |
| 4 | $21.18 | $34.55 | $15.45 | $24.55 | $19.27 | $13.27 |
| 5 | $26.18 | $55.64 | $27.91 | $37.55 | $30.00 | $20.64 |
| Correlations | .415 | .516 | 0.328 | .328 | 0.319 | .419 |
| p-Wert | p = .0015 | p < .0001 | p = .014 | p = .0153 | p = .0172 | p = .0013 |
Fußnote der Original-Tabelle (kleingedruckt): "The last row indicates the correlations between Social Security numbers and WTP and their significance levels."
### Inhaltliche Rekonstruktion
Die Zahlungsbereitschaft (WTP) steigt für alle sechs Produkte monoton vom 1. zum 5. Quintil der Sozialversicherungsnummer an (z. B. Cordless trackball: 8,64 → 11,82 → 13,45 → 21,18 → 26,18 USD; Cordless keyboard: 16,09 → 55,64 USD). Alle Korrelationen sind positiv (0,319 bis 0,516) und statistisch signifikant (p ≤ .0172). Quelle: Ariely et al. (2003), S. 76.
### Fachliche Aussage
Studierende mit höheren Endziffern der Sozialversicherungsnummer (Anker) gaben durchgängig und statistisch signifikant höhere Zahlungsbereitschaften an, obwohl die Nummer keinerlei Bezug zum Produktwert hat – starker Beleg für den Verankerungseffekt ("coherent arbitrariness").
### React-Vorschlag
WTPQuintileTable: responsive Tabelle (6 Produktspalten × 5 Quintile + Korrelations-/p-Wert-Zeile) mit hervorgehobenem aufsteigendem Trend; Quelle als source-note. Werte sind aus dem hochaufgelösten Re-Render der Originaltabelle vollständig belegt.

---

## Folie 79 - Verankerungseffekt (Konsequenzen)
### In der MD vorhanden
MD-Zeilen 1045-1055 (intern "Folie 127") vollständig: Merksatz (Verankerungseffekt unterstützt die Neigung, am Bestehenden festhalten zu wollen), Begründung (natürlichster kognitiver Anker ist in vielen Fällen der Status Quo) sowie die drei Begriffe "status quo bias", "conservatism", "endowment effect (Besitztumseffekt)".
### Fehlende visuelle Inhalte
Ein hellblau hinterlegter, blau umrandeter Merksatz-Kasten ("Der Verankerungseffekt unterstützt die Neigung von Menschen, am Bestehenden festhalten zu wollen.") sowie die drei kursiven Begriffe frei im unteren Bereich verteilt ("status quo bias" links, "conservatism" rechts, "endowment effect (Besitztumseffekt)" mittig darunter) – als lose Begriffswolke angeordnet, ohne verbindende Pfeile. Keine echten Grafiken/Diagramme.
### Visuelle Rekonstruktion
```
Und noch eine ganz wichtige Konsequenz aus dem Verankerungseffekt

[ Der Verankerungseffekt unterstützt die Neigung von Menschen,
  am Bestehenden festhalten zu wollen. ]

Begründung: Der natürlichste kognitive Anker ist in vielen Fällen der Status Quo

   „status quo bias“                 „conservatism“
            „endowment effect“ (Besitztumseffekt)
```
### Inhaltliche Rekonstruktion
Begründung (wörtlich): "Der natürlichste kognitive Anker ist in vielen Fällen der Status Quo." Verwandte Konzepte: "status quo bias", "conservatism", "endowment effect" (Besitztumseffekt) – alle als Folge des Verankerungseffekts am Status Quo.
### Fachliche Aussage
Weil der Status Quo in vielen Fällen der natürlichste Anker ist, verstärkt der Verankerungseffekt die Tendenz, am Bestehenden festzuhalten – er verbindet sich mit Status-Quo-Bias, Konservatismus und Besitztumseffekt.
### React-Vorschlag
ContentSection mit Callout-Merksatz; die drei verwandten Begriffe als Badge-/Tag-Gruppe (Chips) darstellen.

---

## Folie 80 - Relativer Vergleich / Decoy-Effekt (Definition)
### In der MD vorhanden
MD-Zeilen 1057-1077 (intern "Folie 128") vollständig: Definition des Decoy-Effekts (Köder aus dem Marketing) und das Mangosaft-Beispiel mit allen Werten (A: 1,50 €, Fruchtgehalt 50 %; B: 3,00 €, Fruchtgehalt 100 %; Köder C: 3,50 €, Fruchtgehalt 100 % → Marktanteil von B steigt). Auf der Folie sind die Zahlen farblich hervorgehoben (Köder rot/orange, Werte grün), was in der MD nicht erkennbar ist.
### Fehlende visuelle Inhalte
Reine Textfolie mit farbig hervorgehobenen Schlüsselwörtern/Werten ("Köder" rot, Preise blau, Fruchtgehalt-Prozente grün/rot). Keine echten Grafiken/Diagramme/Tabellen.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Mangosaft A: 1,50 €, Fruchtgehalt 50 %. Mangosaft B: 3,00 €, Fruchtgehalt 100 %. Köder C: 3,50 €, Fruchtgehalt 100 % (gleicher Fruchtgehalt wie B, aber 50 Cent teurer → asymmetrisch von B dominiert). → Marktanteil von B steigt; A und B treffen ohne Köder etwa 50:50-Chance.
### Fachliche Aussage
Ein bewusst minderwertiger "Köder" (teurer bei gleicher Qualität) lenkt die Wahl auf das ihm überlegene Produkt B; der ursprüngliche 50:50-Wettstreit zwischen A und B verschiebt sich zugunsten B.
### React-Vorschlag
ContentSection; optional kleine Produkt-Vergleichstabelle (A/B/C mit Preis und Fruchtgehalt).

---

## Folie 81 - Relativer Vergleich / Decoy-Effekt (Economist-Beispiel)
### In der MD vorhanden
MD-Zeilen 1079-1096 (intern "Folie 129"): Economist-Abo-Beispiel als zerbrochene Tabelle vorhanden – erste Wahl (Online 59 €: 68 %, Print+Online 125 €: 32 %), zweite Wahl mit Decoy (Online 59 €: 16 %, Print 125 €: 0 %, Print+Online 125 €: 84 %) und Prinzip der asymmetrischen Dominanz. Werte korrekt, Layout zerbrochen.
### Fehlende visuelle Inhalte
Zwei Auswahl-Listen, jede Option mit einem dunkelblauen Prozent-Badge rechts:
Erste Wahl (zwei Optionen):
- Online-Angebot: EUR 59 → 68 %
- Print- und Online-Angebot: EUR 125 → 32 %
Zweite Wahl (drei Optionen, mit Decoy):
- Online-Angebot: EUR 59 → 16 %
- Print-Angebot: EUR 125 → 0 % (Decoy/Köder)
- Print- und Online-Angebot: EUR 125 → 84 %
### Visuelle Rekonstruktion
```
Ohne Köder:
  Online (59€) .............. [68%]
  Print+Online (125€) ....... [32%]

Mit Köder:
  Online (59€) .............. [16%]
  Print (125€) .............. [0%]   <- Decoy
  Print+Online (125€) ....... [84%]
```
### Inhaltliche Rekonstruktion
| Variante | Preis | Anteil ohne Köder | Anteil mit Köder |
|---|---|---|---|
| Online | EUR 59 | 68 % | 16 % |
| Print | EUR 125 | – | 0 % (Köder) |
| Print + Online | EUR 125 | 32 % | 84 % |
Prinzip der asymmetrischen Dominanz: Auch eine minderwertige Variante (Print für 125 €), die niemand wählt, beeinflusst die Entscheidung.
### Fachliche Aussage
Das reine Print-Angebot zum gleichen Preis wie das Print+Online-Paket dient als Köder: Obwohl es niemand wählt (0 %), steigt der Anteil des Print+Online-Pakets von 32 % auf 84 % – Prinzip der asymmetrischen Dominanz.
### React-Vorschlag
DecoyEffectChart: zwei gestapelte Optionslisten mit Prozent-Badges; Decoy-Zeile farblich markiert; Veränderung 32 %→84 % visuell betonen.

---

## Folie 82 - Relativer Vergleich / Phantom-Lockvogel-Effekt
### In der MD vorhanden
MD-Zeilen 1098-1111 (intern "Folie 130") vollständig: Definition (Köder, der zur Wahl führt, aber im Unterschied zum Decoy-Effekt gar nicht existiert) und das Mangosaft-Beispiel (A billig/nicht sehr schmackhaft, B teuer/gut, Mehrheit kauft A; Phantom-Angebot C beste Qualität, als Sonderangebot so teuer wie B, aber gerade nicht lieferbar → Nachfrage nach B steigt deutlich).
### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafiken/Tabellen/Icons. Nichts visuell verloren.
### Visuelle Rekonstruktion
(nicht erforderlich – Textfolie)
### Inhaltliche Rekonstruktion
Mangosaft A: billig, nicht sehr schmackhaft (überwiegende Mehrheit kauft zunächst A). Mangosaft B: teuer, schmeckt gut. Phantom-Angebot C: beste Qualität, als Sonderangebot so teuer wie B – aber "gerade nicht lieferbar". → Nachfrage nach B steigt deutlich an.
### Fachliche Aussage
Beim Phantom-Lockvogel-Effekt verschiebt ein attraktives, aber nicht verfügbares Angebot (C) die Nachfrage zugunsten des nächstbesten verfügbaren Produkts (B) – anders als beim Decoy existiert der Köder gar nicht.
### React-Vorschlag
ContentSection; optional Abgrenzungs-Callout "Unterschied zum Decoy-Effekt: existiert gar nicht".

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 35: Bayes-Theorem als Formel-Block (KaTeX/MathML)
2. Folie 36: Bayes-Rechnung Brustkrebs-Beispiel mit Ergebnis 12,2 % (Formel + StatBadge)
3. Folie 49: Barber/Odean-Quintil-Balkendiagramm (Q1–Q4, Jahresrendite) + StatList Depotumsätze
4. Folie 53: Asian-Disease-Problem als 2×2-Framing-Matrix (Therapie A/B/C/D)
5. Folie 56: Hindsight-Bias-Balkendiagramm (Schätzung/Lösung/Erinnerte Schätzung, rotes Rückschaufehler-Segment)
6. Folie 65: Vertrauenskassen-Scatter (Augenwochen vs. Blumenwochen) + Foto-Streifen
7. Folie 70: Wetter-Diversifikationsmatrix (3×2, ++/-/+) + Merksatz-Callout
8. Folie 76: Ankerungsindex-Formelblock (55 %)
9. Folie 78: WTP-Quintil-Tabelle (Ariely et al. 2003) mit Korrelations-/p-Wert-Zeile
10. Folien 19, 20, 21, 22, 74, 81: zerbrochene Tabellen/Schaubilder sauber als echte Tabellen/Listen neu aufbauen
11. Folie 23: Cognitive Bias Codex mit vier benannten Quadranten

## Kann vereinfacht werden

- Illusionsgrafiken (Folien 4-9, 13): als SVG-Demos oder eingebundene Assets; komplexe Bewegungsillusion (Folie 7) nur als Asset
- Spielkartenfächer (Folien 4, 5) als gemeinsame wiederverwendbare Komponente
- Prozess-/Pfeildiagramme (Folien 11, 17, 64) als einfache Flexbox-Ketten
- Mental-Accounting-Kinobeispiel (Folien 68, 69) als zweistufige Szenario-/Ergebnistabelle
- Video-/Meme-Folien (Folien 10, 45, 66, 72) als Verweis-Cards mit Alt-Text, kein synthetischer Nachbau
- Reine Textfolien (z. B. 12, 14-16, 18, 24-34, 37-48, 50-52, 55, 57-63, 71, 73, 75, 77, 79, 80, 82) als strukturierte ContentSections mit Callouts/Badges

## Nicht fachlich relevant

- HBW-Logo
- Kopfzeile und Folien-Footer ("Behavioral Finance / CS / Folie XX")
- Copyright-Zeile ("© 2026 – Hochschule der Bayerischen Wirtschaft")
- Versionskennung "V26-03-22"
- dekorative Stockfoto-Bildleiste der Titelfolie (Folie 1)
- exakte Folienpositionierung und Folienästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich vorhandenen Folieninhalten):

```js
export const heuristikenUebersicht = [
  'Verfügbarkeitsheuristik',
  'Repräsentativitätsheuristik',
  'Verankerungsheuristik (Anker)',
  'Bestätigungsirrtum',
  'Überoptimismus',
  'Affektheuristik',
  'Herdenverhalten',
  'Versuchung',
  'Framing',
  'Rückschaufehler',
  'Endowment-Effekt',
  'Status-Quo-Bias',
  'Halo-Effekt',
  'WYSIATI',
  'Priming-Effekt',
  'Mentale Kontenführung',
  'Relativer Vergleich',
]

export const heuristikSystematisierung = [
  { kategorie: 'Eintrittswahrscheinlichkeiten', beispiel: 'Verfügbarkeitsheuristik' },
  { kategorie: 'Informationen', beispiel: 'selektive Wahrnehmung' },
  { kategorie: 'objektive Realitäten (Emotionen)', beispiel: 'Mental Accounting, Herdenverhalten' },
  { kategorie: 'eigene Fähigkeiten', beispiel: 'Overconfidence' },
]

export const folgenRepraesentativitaet = [
  'Conjunction Bias (Verknüpfungstäuschung)',
  'Vernachlässigung der A-priori-Wahrscheinlichkeit',
  'Falsches Verständnis von Abweichungen vom Durchschnitt',
  'Falsche Prognosesicherheit',
  'Vernachlässigung des Stichprobenumfangs',
  'Falsche Vorstellung vom Zufall',
  'Gesetz der kleinen Zahlen',
]
```

```js
// Folie 78: Ariely/Loewenstein/Prelec (2003), S. 76 — WTP nach SS#-Quintil (USD)
export const wtpBySsnQuintile = [
  { quintile: 1, trackball: 8.64, keyboard: 16.09, averageWine: 8.64, rareWine: 11.73, designBook: 12.82, chocolates: 9.55 },
  { quintile: 2, trackball: 11.82, keyboard: 26.82, averageWine: 14.45, rareWine: 22.45, designBook: 16.18, chocolates: 10.64 },
  { quintile: 3, trackball: 13.45, keyboard: 29.27, averageWine: 12.55, rareWine: 18.09, designBook: 15.82, chocolates: 12.45 },
  { quintile: 4, trackball: 21.18, keyboard: 34.55, averageWine: 15.45, rareWine: 24.55, designBook: 19.27, chocolates: 13.27 },
  { quintile: 5, trackball: 26.18, keyboard: 55.64, averageWine: 27.91, rareWine: 37.55, designBook: 30.00, chocolates: 20.64 },
]
// Korrelationen (SS# vs. WTP): trackball .415 (p=.0015), keyboard .516 (p<.0001),
// averageWine .328 (p=.014), rareWine .328 (p=.0153), designBook .319 (p=.0172), chocolates .419 (p=.0013)

// Folie 81: Economist-Abo (Decoy-Effekt), Anteile in %
export const economistDecoy = [
  { variante: 'Online', preis: 59, ohneKoeder: 68, mitKoeder: 16 },
  { variante: 'Print', preis: 125, ohneKoeder: null, mitKoeder: 0 }, // Decoy/Köder
  { variante: 'Print + Online', preis: 125, ohneKoeder: 32, mitKoeder: 84 },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern die Komponenten (Tabellen, Charts, Quizze, Tooltips) steuern, damit spätere Features wie Suche, interaktive Übungen und Querverweise möglich bleiben.
