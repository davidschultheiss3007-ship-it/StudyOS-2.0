# skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF - Prospect Theory und ihre Konsequenzen: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-06-prospect-theory-und-ihre-konsequenzen.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-06-prospect-theory-und-ihre-konsequenzen.pdf` verloren gegangen, nur als zerbrochene/gespiegelte Tabellen übertragen oder als verstümmelte Sonderzeichen abgelegt wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Formeln, Tabellenlogiken, Wertfunktionskurven oder Schaubildaussagen verloren gehen.

**Quelle:** `skript-06-prospect-theory-und-ihre-konsequenzen.pdf` mit 45 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die Kopfzeile, der Folien-Footer ("Behavioral Finance / CS / Folie XXX") und die Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme (S-förmige Wert- und Gewichtungsfunktionen), Formeln, Tabellen, Schaubilder (Baum-/Flussdiagramme) und einzelne grafische Hervorhebungs-Icons (z. B. das Anomalie-Badge).

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene und gespiegelte Markdown-Inhalte nicht übernehmen:** Mehrere Folien sind durch die PDF-Konvertierung als zerstörte Tabellen (z. B. Folien 13, 14, 19, 30) oder als gespiegelte Schlusszeilen (z. B. "lanoitar A rüf gnudiehcstnE …" auf Folie 3) extrahiert. Diese Inhalte in React als echte Tabellen, strukturierte Cards, Formelblöcke oder SVG-Diagramme neu aufbauen.
2. **Sonderzeichen der Formeln korrigieren:** Die Bewertungsfunktion wurde teils verstümmelt extrahiert ("V=v(@,A;B,C)…", "!" statt π). Korrekte Schreibweise verwenden: V(x;p / y;q) = π(p)·v(x) + π(q)·v(y) bzw. V(x,p) = v(x)·π(p). Formeln als sauber gesetzte FormulaBlock-Komponenten rendern (KaTeX/MathML oder vorformatiertes Markup).
3. **Wertfunktions- und Gewichtungsfunktionsdiagramme als SVG nachbauen:** Die zentralen S-Kurven (Folien 20, 25, 26, 32, 33, 38, 40, 41) tragen die fachliche Kernaussage (konkav im Gewinn-, konvex/steiler im Verlustbereich; Über-/Unterbewertung von Wahrscheinlichkeiten). Sie dürfen nicht zu reinem Text reduziert werden. Eine wiederverwendbare `ValueFunctionChart`- und `ProbabilityWeightingChart`-Komponente anlegen.
4. **Tabellen-Erwartungswerte als Callout zeigen:** Bei den Allais-Tabellen (Folien 3, 4) gehören die Erwartungswert-Notizen (E(A)=2.409, E(C)=825 usw.) als separater Callout neben die `DecisionMatrix`, nicht in die Tabellenzelle.
5. **Grafische Hervorhebungselemente erhalten:** Das orange Anomalie-Stern-Badge (Folie 5), die orange Durchstreichung (Folie 12), die roten/türkisen Annotationen der Kurven und die hervorgehobenen Vergleichsspalten (Folie 30) tragen Bedeutung und sollten als Akzent-Elemente umgesetzt werden.
6. **Quellenhinweise erhalten:** Quellen wie `Kahneman, D., Tversky, A. (1979), S. 265.` und `Vgl. Daxhammer/Facsar (2017)` als `.source-note` beibehalten.
7. **Wiederverwendung über Props:** Hedonic-Framing-Diagramme (Folien 28/29) und Gewichtungsfunktionsdiagramme (Folien 40/41) sind Varianten derselben Komponente; als parametrierte Bausteine implementieren.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Schlichte Kapitel-Titelkarte mit Modul-Akzentfarbe |
| `AgendaList` | 2 | Nummerierte Agenda mit hervorgehobenem aktivem Eintrag |
| `DecisionMatrix` | 3, 4 | Zustands-/Wahrscheinlichkeits-Tabelle plus Erwartungswert-Callout |
| `FormulaDerivation` + `AnomalyBadge` | 5 | Ungleichungs-Herleitung mit orangefarbenem Anomalie-Stern |
| `PersonCards` | 6 | Begründer-Karten (Kahneman/Tversky) |
| `ConceptIntro` | 7 | Textblock mit Quellen-Thumbnail (Econometrica) |
| `BulletList` / `DefinitionBlock` | 8, 9 | Hervorgehobene Keywords / Notation (x;p/y;q) |
| `PhaseList` + `FormulaBlock` | 10, 17, 18 | Phasen und sauber gesetzte Bewertungsformel |
| `OperationList` | 11 | Editing-Operationen mit Begriff + Erklärung |
| `LotteryTreeDiagram` | 12 | Zwei Wahrscheinlichkeitsbäume, linker durchgestrichen |
| `EditingTransformDiagram` | 13 | Linker/rechter Baum mit Operationsspalte und Prozesspfeil |
| `PayoffMatrix` | 14 | Farbcodierte Auszahlungstabellen |
| `ResultBullets` | 15 | Aufzählung mit hervorgehobenen Prozentwerten |
| `TwoColumnCompare` | 16 | Phasenkarten Editing vs. Evaluation |
| `WorkedExample` | 18 | Beispielkarte Münzwurf mit Formel |
| `PreferenceTable` | 19 | Zweigeteilte Tabelle positive/negative Prospekte |
| `ValueFunctionChart` | 20, 21 | S-förmige Wertfunktion als SVG |
| `PrincipleExplainer` | 21 | Konkavität/Konvexität mit Beispielwerten |
| `KeyFeatureList` | 22 | Drei kognitive Kernmerkmale |
| `FramingExamples` | 23 | Beispiele / Erklärungsansätze |
| `StatusQuoBiasExplainer` | 24 | Prospect-Theory- vs. Alternative Erklärungen + Facebook-Callout |
| `EndowmentEffectDiagram` | 25 | Zwei Wertfunktionskurven (Kauf/Verkauf) |
| `MentalAccountingSchema` | 26 | Konten-Ellipse, Pfeil, Wertfunktion mit Einstandspreis |
| `HedonicFramingRules` | 27 | Kodierungsregeln + Branch-Diagramm Integration/Segregation |
| `HedonicFramingChart` | 28, 29 | Wertfunktions-Sparklines mit Operatoren |
| `AutokaufFramingTable` | 30 | Vierspaltige Bündelungs-/Rabatttabelle |
| `SunkCostExamples` | 31 | Beispielkarten + Merksatz |
| `SunkCostRelativeValueChart` | 32 | Drei kleine Wertfunktionen (Verlust-/Neues-/Gewinnprojekt) |
| `DispositionEffectChart` | 33 | Wertfunktion mit Bezugspunkt und zwei Positionen |
| `ReferencePointFlow` | 34 | Frage → Norm-Box → Beispiel-Liste |
| `WeightingOptionComparison` | 35, 36 | Optionskarten A/B bzw. C/D mit Ergebnis-Badge |
| `WeightingFunctionRules` | 37 | Aussagen mit Formeln π(p)>p / π(p)<p |
| `RiskAttitudeWeightingChart` | 38 | SVG mit doppelter Achse und Risikozonen |
| `WeightingFunctionProperties` | 39 | Eigenschaften inkl. certainty effect |
| `ProbabilityWeightingChart` | 40, 41 | π(p)-über-p-Kurve mit Annotationen |
| `ProbabilityWeightingSummary` | 41 | Merkmal-Liste + wiederverwendetes Chart |
| `InsuranceWeightingExample` | 42 | Box-Diagramm Fahrradversicherung |
| `ValueFunctionSummary` | 43 | Drei Wertfunktions-Merkmale + Quelle |
| `WeightingFunctionSummary` | 44 | Gewichtungsfunktions-Merkmale + Quelle |
| `ProspectSecuritiesSummary` | 45 | Vier Kern-Statements als KeyTakeaways |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 6: Die Prospect Theory und ihre Konsequenzen
### In der MD vorhanden
Titelzeilen "Behavioral Finance", "Kapitel 6", "Die Prospect Theory und ihre Konsequenzen", Versionskennung "V26-04-23". Fußzeile "Behavioral Finance / CS / Folie 191" und "© 2026 - Hochschule der Bayerischen Wirtschaft".
### Fehlende visuelle Inhalte
Reine Titelfolie. Oben eine Bilderleiste aus vier Fotos (HBW-Logo-Schild auf Display, lächelnde Person, zwei Personen im Gespräch, modernes Bürogebäude). HBW-Logo oben rechts. Kein Fachinhalt. Hellblauer Hintergrund-Kasten mit Kapitelangabe.
### Visuelle Rekonstruktion
[Fotoleiste mit 4 Fotos] -> [Kapiteltitel-Kasten]
### Inhaltliche Rekonstruktion
Kapitel 6 - "Die Prospect Theory und ihre Konsequenzen".
### Fachliche Aussage
Einstieg in das Kapitel zur Prospect Theory von Kahneman und Tversky.
### React-Vorschlag
ChapterTitleSlide - schlichte Titelkarte mit Kapitelnummer und Modul-Akzentfarbe; Fotoleiste weglassen (reines Layout).

## Folie 2 - Agenda
### In der MD vorhanden
Vollständige Agenda-Liste mit zehn Punkten (1. Einführung bis 10. Behavioral Corporate Finance). Fußzeile "Folie 192".
### Fehlende visuelle Inhalte
Punkt 6 "Die Prospect Theory und ihre Konsequenzen" ist farblich (blau, fett) hervorgehoben, um die aktuelle Position im Kurs zu markieren. Diese Hervorhebung geht in der MD verloren.
### Visuelle Rekonstruktion
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
**6. Die Prospect Theory und ihre Konsequenzen**  <- aktuell (blau, fett)
7. Altersvorsorge und private Finanzplanung
8. Spekulationsblasen an Finanzmärkten
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance
### Inhaltliche Rekonstruktion
Kursgliederung; aktuelles Kapitel = Nr. 6.
### Fachliche Aussage
Verortung des Themas Prospect Theory innerhalb der gesamten Vorlesung.
### React-Vorschlag
AgendaList - nummerierte Liste mit hervorgehobenem aktivem Eintrag (activeIndex=6).

## Folie 3 - Allais-Paradoxon (Entscheidungsproblem I)
### In der MD vorhanden
Tabelle mit Zuständen/Wahrscheinlichkeiten und Alternativen A/B ist enthalten. Die Schlusszeile ist verstümmelt/gespiegelt: "lanoitar A rüf gnudiehcstnE :B trewsgnutrawrE 0042 > 9042 :A trewsgnutrawrE". Quelle "Kahneman, D., Tversky, A. (1979), S. 265." vorhanden. Folientitel "Allais-Paradoxon", Zwischenüberschrift "Beispiel: Entscheidungsproblem I", Fußzeile "Folie 193".
### Fehlende visuelle Inhalte
Eine blau hinterlegte Tabelle (Kopfzeile kräftig blau mit weiß/schwarzer Schrift, Datenzeilen hellblau/grau alternierend). Unten rechts steht diagonal nach oben gekippt (gedreht, daher von Markitdown gespiegelt) ein grauer Auswertungstext: "Erwartungswert A: 2409 > 2400 Erwartungswert B: Entscheidung für A rational". Inhaltlich: Erwartungswert A = 0,33 x 2.500 + 0,66 x 2.400 + 0,01 x 0 = 2.409 EUR, Erwartungswert B = 2.400 EUR; rational ist A. (Hinweis: Die Kopfzeile nennt Zustand 1 = 33%, Zustand 2 = 66%, Zustand 3 = 1%; Zustand-3-Zelle von A ist als "0€" notiert.)
### Visuelle Rekonstruktion
|              | Zustand 1 (33%) | Zustand 2 (66%) | Zustand 3 (1%) |
|--------------|-----------------|-----------------|----------------|
| Alternative A| 2.500 EUR       | 2.400 EUR       | 0 EUR          |
| Alternative B| 2.400 EUR       | 2.400 EUR       | 2.400 EUR      |

(diagonale graue Notiz unten rechts) E(A)=2.409 > E(B)=2.400 -> rational: A
### Inhaltliche Rekonstruktion
E(A) = 0,33 x 2.500 + 0,66 x 2.400 + 0,01 x 0 = 2.409 EUR
E(B) = 2.400 EUR
=> Erwartungswert spricht für A. Quelle: Kahneman, D., Tversky, A. (1979), S. 265.
### Fachliche Aussage
Im ersten Entscheidungsproblem hat Alternative A den höheren Erwartungswert; rational müsste A gewählt werden.
### React-Vorschlag
DecisionMatrix - Tabelle mit Zustands-Wahrscheinlichkeiten plus separater Erwartungswert-Callout (E(A)=2.409 > E(B)=2.400).

## Folie 4 - Allais-Paradoxon (Entscheidungsproblem II)
### In der MD vorhanden
Tabelle mit Alternativen C/D enthalten. Schlusszeile gespiegelt/verstümmelt: "D trewsgnutrawrE 618 > 528 :C trewsgnutrawrE". Quelle "Kahneman, D., Tversky, A. (1979), S. 265." vorhanden. Folientitel "Allais-Paradoxon", Zwischenüberschrift "Beispiel: Entscheidungsproblem II", Fußzeile "Folie 194".
### Fehlende visuelle Inhalte
Gleicher Tabellenstil wie Folie 3 (kräftig blaue Kopfzeile, hellblaue Datenzeilen). Spaltenköpfe wie Folie 3: Zustand 1 = 33%, Zustand 2 = 66%, Zustand 3 = 1%. Unten rechts diagonale graue Notiz (von Markitdown gespiegelt): "Erwartungswert C: 825 > 816 Erwartungswert D". Werte: E(C) = 0,33 x 2.500 = 825 EUR, E(D) = 0,34 x 2.400 = 816 EUR.
### Visuelle Rekonstruktion
|              | Zustand 1 (33%) | Zustand 2 (66%) | Zustand 3 (1%) |
|--------------|-----------------|-----------------|----------------|
| Alternative C| 2.500 EUR       | 0 EUR           | 0 EUR          |
| Alternative D| 2.400 EUR       | 0 EUR           | 2.400 EUR      |

(diagonale graue Notiz unten rechts) E(C)=825 > E(D)=816 -> rational: C
### Inhaltliche Rekonstruktion
E(C) = 0,33 x 2.500 = 825 EUR
E(D) = 0,34 x 2.400 = 816 EUR (D zahlt 2.400 in Zustand 1 (33%) und Zustand 3 (1%) = 34%)
=> Erwartungswert spricht für C. Quelle: Kahneman, D., Tversky, A. (1979), S. 265.
### Fachliche Aussage
Im zweiten Entscheidungsproblem hat Alternative C den höheren Erwartungswert; rational müsste C gewählt werden. Tatsächlich präferieren viele Menschen aber B (Problem 1) und C (Problem 2) - das ist der Widerspruch.
### React-Vorschlag
DecisionMatrix (wie Folie 3) mit Erwartungswert-Callout (E(C)=825 > E(D)=816).

## Folie 5 - Allais-Paradoxon (Darstellung in Erwartungsnutzen / Anomalie)
### In der MD vorhanden
Die Zwischenüberschrift "Beispiel:" und "Darstellung in Erwartungsnutzen:", die drei Ungleichungen und der Widerspruchstext sind vollständig vorhanden. Das Wort "Anomalie" ist als reiner Text vorhanden. Quelle "Kahneman, D., Tversky, A. (1979), S. 265." Fußzeile "Folie 195".
### Fehlende visuelle Inhalte
Unten rechts ein orangefarbenes Stern-/Explosions-Badge (sternförmig, orange mit Schatten) mit weißem fettem Text "Anomalie". Dieses grafische Hervorhebungselement geht in der MD verloren.
### Visuelle Rekonstruktion
Präferenz B>A (Problem 1):  0,33 x u(2.500) + 0,66 x u(2.400) < u(2.400)
Präferenz C>D (Problem 2):  0,33 x u(2.500) > 0,34 x u(2.400)
Folgerung aus Problem 1:    0,33 x u(2.500) < 0,34 x u(2.400)
=> Widerspruch  ->  [ANOMALIE]  (orangefarbenes Stern-Badge unten rechts)
### Inhaltliche Rekonstruktion
- Präferenz von B gegenüber A in Entscheidungsproblem 1: 0,33 x u(2.500) + 0,66 x u(2.400) < u(2.400)
- Präferenz von C gegenüber D in Entscheidungsproblem 2: 0,33 x u(2.500) > 0,34 x u(2.400)
- Folgerung aus der Präferenz im Entscheidungsproblem 1: 0,33 x u(2.500) < 0,34 x u(2.400)
- Widerspruch der beiden Ungleichungen, die die Präferenzen in den beiden Entscheidungsproblemen beschreiben => Anomalie.
Quelle: Kahneman, D., Tversky, A. (1979), S. 265.
### Fachliche Aussage
Die tatsächlichen Präferenzen verletzen die Erwartungsnutzentheorie: Aus Problem 1 folgt eine Ungleichung, die der aus Problem 2 widerspricht - eine Anomalie, die die Prospect Theory motiviert.
### React-Vorschlag
FormulaDerivation mit drei Ungleichungs-Zeilen und abschließendem AnomalyBadge (orangefarbener Stern-Akzent).

## Folie 6 - Prospect Theory (Kahneman und Tversky)
### In der MD vorhanden
In der MD steht zu dieser Folie nur "Prospect Theory" (Folientitel) - die gesamten Bildinhalte und Bildunterschriften fehlen. Fußzeile "Folie 196".
### Fehlende visuelle Inhalte
Zwei Portraitfotos: links ein Farbfoto von Daniel Kahneman (ältere Person mit Brille) mit Bildunterschrift "Daniel Kahneman (1934)", rechts ein Schwarzweiß-Foto von Amos Tversky mit Bildunterschrift "Amos Tversky (1937-1996)". Quellenangabe unten links: "Quelle: Wikipedia Commons".
### Visuelle Rekonstruktion
[Farbfoto Kahneman]          [SW-Foto Tversky]
"Daniel Kahneman (1934)"     "Amos Tversky (1937-1996)"
### Inhaltliche Rekonstruktion
Begründer der Prospect Theory:
- Daniel Kahneman (1934)
- Amos Tversky (1937-1996)
Quelle: Wikipedia Commons.
### Fachliche Aussage
Vorstellung der beiden Begründer der Prospect Theory.
### React-Vorschlag
PersonCards - zwei Karten mit Name und Lebensdaten (Foto optional/Platzhalter), als Begründer-Vorstellung.

## Folie 7 - Prospect Theory (Definition und Entstehung)
### In der MD vorhanden
Folientitel "Prospect Theory", farbige Zwischenüberschrift "Prospect Theory". Alle Aufzählungspunkte zur Definition, zum deskriptiven Charakter und zur Entstehungsgeschichte (1979/1992) sind vollständig vorhanden. Fußzeile "Folie 197".
### Fehlende visuelle Inhalte
Links neben dem unteren Textblock ein eingescanntes Bild der Titelseite der Zeitschrift "ECONOMETRICA" (Original-Veröffentlichung des Artikels "Prospect Theory: An Analysis of Decision under Risk", 1979). Das Bild zeigt die typische Kopfzeile/Titelseite einer wissenschaftlichen Zeitschrift mit dichtem Fließtext.
### Visuelle Rekonstruktion
[Bild: Econometrica-Titelseite]  |  Textblock (rechts): Entstehung 1979/1992, wegweisender Artikel
### Inhaltliche Rekonstruktion
- Beschreibt, wie Menschen zwischen probabilistischen Alternativen mit Risiko bei bekannten Wahrscheinlichkeiten wählen.
- Entscheidungen auf Grundlage des potenziellen Werts von Verlusten und Gewinnen; Bewertung mit Hilfe einiger Heuristiken.
- Modell ist deskriptiv (reale statt optimaler Entscheidungen).
- 1979 erstellt, 1992 weiterentwickelt von Kahneman und Tversky.
- Der Artikel "Prospect Theory: An Analysis of Decision under Risk" (1979), erschienen in Econometrica, ist ein wegweisender Artikel der Verhaltensökonomik.
### Fachliche Aussage
Die Prospect Theory ist ein deskriptives, kognitionspsychologisches Entscheidungsmodell von Kahneman und Tversky (1979/1992).
### React-Vorschlag
ConceptIntro - Textblock mit kleinem Bild-/Quellen-Thumbnail (Econometrica-Titel) als Illustration.

## Folie 8 - Abgrenzung zur Erwartungsnutzentheorie
### In der MD vorhanden
Folientitel "Abgrenzung zur Erwartungsnutzentheorie", Zwischenüberschrift "Grundlegende Unterschiede zur Erwartungsnutzentheorie:". Alle vier Aufzählungspunkte vollständig vorhanden (inkl. "Erwartenstheorie"). Fußzeile "Folie 198".
### Fehlende visuelle Inhalte
Reine Textfolie. Visuell nur farbliche Hervorhebungen (blau, fett) der Schlüsselbegriffe "(Biases)", "zwei Phasen" und "„Erwartenstheorie“" - in der MD nicht als Hervorhebung erkennbar.
### Inhaltliche Rekonstruktion
- Marktteilnehmer verhalten sich nicht entsprechend der Erwartungsnutzentheorie; d.h., ökonomische Entscheidungen werden durch eine Reihe von Wahrnehmungsverzerrungen (Biases) beeinflusst.
- Im Unterschied zur Erwartungsnutzentheorie werden zwei Phasen des Entscheidungsprozesses unterstellt.
- Die Zielsetzung der Prospect Theorie ist daher, Entscheidungen zu erklären, die im Widerspruch zur Erwartungsnutzentheorie und zur rationalen Erfassung von Wahrscheinlichkeiten stehen.
- Prospect Theorie = „Erwartenstheorie".
### Fachliche Aussage
Anders als die normative Erwartungsnutzentheorie modelliert die Prospect Theory verzerrtes reales Verhalten in zwei Entscheidungsphasen.
### React-Vorschlag
BulletList mit hervorgehobenen Keywords (Inline-Highlight für Biases / zwei Phasen / Erwartenstheorie).

## Folie 9 - Darstellung der Prospekte
### In der MD vorhanden
Folientitel "Darstellung der Prospekte". Alle Aufzählungspunkte inkl. Notation (x;p/y;q), Status-quo-Regel und Beispiel (100;0,5/-50;0,25) vollständig vorhanden. Fußzeile "Folie 199".
### Fehlende visuelle Inhalte
Reine Textfolie; nur farbliche Hervorhebung (blau, fett) der Begriffe "Prospect = ...", "2 Ergebnissen x und y" und "Wahrscheinlichkeiten p und q".
### Inhaltliche Rekonstruktion
- Prospect = Ergebnis einer riskanten Entscheidung mit der dazugehörigen Eintrittswahrscheinlichkeit.
- Ein Prospekt mit 2 Ergebnissen x und y, die mit den Wahrscheinlichkeiten p und q eintreten, wird durch den Ausdruck (x;p/y;q) beschrieben.
- Ist p+q<1, so bleibt der Status quo mit einer Wahrscheinlichkeit von 1-p-q erhalten.
- Beispiel: (100;0,5/-50;0,25). Mit einer Wahrscheinlichkeit von 25% bleibt der Status quo also erhalten.
### Fachliche Aussage
Definiert die formale Notation eines Prospekts und die Behandlung des Status quo bei p+q<1.
### React-Vorschlag
DefinitionBlock mit hervorgehobener Formel-Notation (x;p/y;q) und durchgerechnetem Beispiel.

## Folie 10 - Prospect Theory: Phasen der Entscheidungsfindung
### In der MD vorhanden
Folientitel "Prospect Theory - Phasen der Entscheidungsfindung", Zwischenüberschriften "Phasen der Entscheidungsfindung nach der Prospect Theory" und "Kombination von Wert- und Gewichtungsfunktion". Die Phasenliste und der Text sind vorhanden, jedoch ist die Bewertungsfunktion stark verstümmelt extrahiert: "V=v(@,A;B,C) = -(@) /(A) + -(B) /(C)" sowie "! = Wahrscheinlichkeitsgewichtungsfunktion" - die Sonderzeichen (pi, v) wurden falsch extrahiert. Fußzeile "Folie 200".
### Fehlende visuelle Inhalte
Keine echte Grafik, aber Formeln, deren Sonderzeichen nur teilweise extrahiert wurden. Korrekte Lesart aus der Folie: Bewertungsfunktion V = v(x,p;y,q) = pi(p) x v(x) + pi(q) x v(y); ergänzend V(x,p) = v(x) x pi(p).
### Inhaltliche Rekonstruktion
Phasen der Entscheidungsfindung nach der Prospect Theory:
1. Editierphase (Alternativen werden geordnet und sortiert)
2. Evaluierungsphase (Bewertung der verschiedenen Alternativen)
Bewertungsfunktion: V = v(x,p;y,q) = pi(p) x v(x) + pi(q) x v(y)
mit: pi = Wahrscheinlichkeitsgewichtungsfunktion; p,q = Wahrscheinlichkeiten; v(x,y) = subjektiver Wert für das Ergebnis einer Alternative (Abweichung vom Referenzpunkt).
Kombination von Wert- und Gewichtungsfunktion: Der subjektive Wert V resultiert aus objektivem Wert und objektiver Wahrscheinlichkeit, die jeweils von Wert- bzw. Gewichtungsfunktion "verzerrt" werden. Es gilt: V(x,p) = v(x) x pi(p).
### Fachliche Aussage
Die Bewertung eines Prospects erfolgt zweistufig (Editing, Evaluation); der subjektive Wert ergibt sich als Produkt von Wertfunktion v(x) und Gewichtungsfunktion pi(p).
### React-Vorschlag
PhaseList + FormulaBlock - nummerierte Phasen und sauber gesetzte Formel V(x,p)=v(x) x pi(p).

## Folie 11 - Phasen des Entscheidungsprozesses: Editing Phase
### In der MD vorhanden
Folientitel "Phasen des Entscheidungsprozesses - Editing Phase", Zwischenüberschrift "Editierphase = Aufbereitungsphase". Alle Operationen (Vereinfachung, Kombination, Segregation, Kodierung, Cancellation) und der Schlusssatz vollständig vorhanden. Fußzeile "Folie 201".
### Fehlende visuelle Inhalte
Reine Textfolie; nur farbliche/fette Hervorhebungen der Operationsnamen sowie der Begriffe "Editierphase = Aufbereitungsphase", "durch bestimmte Operation transformiert", "Entscheidungen", "Widerspruch zur Erwartungsnutzentheorie".
### Inhaltliche Rekonstruktion
Editierphase = Aufbereitungsphase. Folgen und Wahrscheinlichkeiten werden durch bestimmte Operationen transformiert, womit die Entscheidung vereinfacht wird. Diese Operationen sind z.B.:
- Vereinfachung: beispielsweise durch Auf- oder Abrunden.
- Kombination: Addition der Wahrscheinlichkeiten identischer Ergebnisse.
- Segregation: Trennung sicherer und unsicherer Konsequenzen.
- Kodierung: Festlegung eines Referenzpunkts (z.B. Einstiegskurs bei WP-Kauf).
- Cancellation: sehr unwahrscheinliche Folgen werden komplett ignoriert; zudem bleiben beim Vergleich von 2 Alternativen identische Bestandteile in der zur Auswahl stehenden Alternativen unberücksichtigt.
Bereits aus der Editing-Phase können Entscheidungen entstehen, die im Widerspruch zur Erwartungsnutzentheorie stehen.
### Fachliche Aussage
Die Editing-Phase bereitet Alternativen durch fünf Operationen auf und kann schon dabei zu irrationalen Entscheidungen führen.
### React-Vorschlag
OperationList - Liste der Editing-Operationen mit fettem Begriff + Erklärung je Eintrag.

## Folie 12 - Editing Phase: Simplifikation
### In der MD vorhanden
Folientitel "Editing Phase - Simplifikation", Zwischenüberschrift "Beispiel:". Die MD enthält die zerbrochenen Tabellenfragmente "49% / 101 EUR / 50% / 100 EUR" und "51% / 0 EUR / 50% / 0 EUR" sowie "50 EUR oder", kann das Diagramm aber nicht abbilden. Schlusspunkt (Runden krummer Beträge / Vernachlässigung kleiner Unterschiede) vorhanden. Fußzeile "Folie 202". Beachte: Die linke Lotterie ist auf der Folie orange durchgestrichen.
### Fehlende visuelle Inhalte
Zwei Lotterie-Bäume (grüne Linien, jeweils zwei Äste von einem Knoten), verbunden durch das Wort "oder":
- Linke Lotterie: 49% -> 101 EUR (oben), 51% -> 0 EUR (unten). Diese gesamte linke Lotterie ist mit einem dicken orangen X durchgestrichen (= wird vereinfacht/verworfen).
- Rechte Lotterie: 50% -> 100 EUR (oben), 50% -> 0 EUR (unten).
Ganz links steht fett "50 €", danach (grün) "oder".
### Visuelle Rekonstruktion
50 €  oder
        49% --- 101 €        50% --- 100 €
   (gesamte linke Lotterie mit orangem X durchgestrichen)
        51% ---   0 €        50% ---   0 €
### Inhaltliche Rekonstruktion
Linke Lotterie (durchgestrichen): (101 EUR; 0,49 / 0 EUR; 0,51)
Rechte Lotterie: (100 EUR; 0,50 / 0 EUR; 0,50)
Menschen neigen im Rahmen einer Vereinfachung von Entscheidungssituationen:
- zum Runden von krummen Beträgen (101 -> 100)
- zur Vernachlässigung von kleinen Unterschieden (49% -> 50%).
### Fachliche Aussage
Durch Vereinfachung (Runden, Ignorieren kleiner Unterschiede) reduzieren Menschen die linke, komplexere Lotterie gedanklich auf die rechte, einfachere.
### React-Vorschlag
LotteryTreeDiagram - zwei Wahrscheinlichkeitsbäume nebeneinander, linker mit "durchgestrichen"-Markierung (orange).

## Folie 13 - Editing Phase: Auswahl von Alternativen durch Anwendung von Operationen
### In der MD vorhanden
Folientitel "Editing Phase - Auswahl von Alternativen durch die Anwendung von Operationen". Die MD enthält nur lose Fragmente ("100", "Kombination", "0,4", "100-r", "0,6", "Kodierung von r", "0,3999 0,4", "200,1 Vereinfachung 200-r", "0,0001", "Streichung", "50", "ggf. Segregation", "Alternative X Prospect X"); die Diagrammstruktur ist nicht rekonstruierbar. Quelle "Daxhammer/Facsar (2017)". Fußzeile "Folie 203".
### Fehlende visuelle Inhalte
Ein zweiteiliges Baumdiagramm mit mittlerer Spalte (hellblauer Kasten) der Operationen, das die Transformation von "Alternative X" zu "Prospect X" zeigt.
Linker Baum (Alternative X) - vier Äste von einem Knoten (Wahrscheinlichkeit am Ast -> Ergebnis):
- 0,4 -> 100 (oben) und 0,2 -> 100; beide per geschweifter Klammer der Operation "Kombination" zugeordnet.
- 0,3999 -> 200,1 und 0,0001 (zweiter Ast nach 200,1); per Klammer der "Vereinfachung" zugeordnet.
- unterer Ast: 50; per Klammer der "Streichung" zugeordnet.
Mittlere Operationsspalte (hellblauer Kasten, von oben nach unten): Editierung (fette Überschrift), Kombination, Kodierung von r, Vereinfachung, Streichung, ggf. Segregation.
Rechter Baum (Prospect X) - zwei Äste von einem Knoten:
- 0,6 -> 100-r (oben), 0,4 -> 200-r (unten); per geschweifter Klammer der Operation "Kodierung von r" zugeordnet.
Unten ein durchgehender hellblauer Pfeil-Balken: links "Alternative X" -> rechts "Prospect X". Quelle: Daxhammer/Facsar (2017).
### Visuelle Rekonstruktion
ALTERNATIVE X                 EDITIERUNG              PROSPECT X
0,4 -> 100  }Kombination
0,2 -> 100  }
                              Kodierung von r    0,6 -> 100-r
0,3999 -> 200,1 }Vereinfachung                  0,4 -> 200-r
0,0001          }
50  }Streichung
                              ggf. Segregation
[==== Alternative X =======>====== Prospect X ====>]
### Inhaltliche Rekonstruktion
Linke Alternative X (Wahrscheinlichkeit -> Ergebnis):
0,4 -> 100; 0,2 -> 100; 0,3999 -> 200,1; 0,0001 (zum Ast 200,1 gehörig); 50 (zu streichen).
Operationen (mittlere Spalte): Kombination, Kodierung von r, Vereinfachung, Streichung, ggf. Segregation.
Rechter Prospect X: 0,6 -> 100-r; 0,4 -> 200-r.
Quelle: Daxhammer/Facsar (2017).
### Fachliche Aussage
Das Diagramm zeigt, wie eine komplexe Alternative X durch die Editing-Operationen schrittweise zu einem vereinfachten Prospect X umgeformt wird.
### React-Vorschlag
EditingTransformDiagram - linker und rechter Baum mit mittlerer Operationsspalte und horizontalem Prozesspfeil.

## Folie 14 - Editing Phase: Kombination
### In der MD vorhanden
Folientitel "Editing Phase - Kombination", Zwischenüberschriften "Entscheidungssituation 1: Entscheiden Sie sich für A oder B!" und "Entscheidungssituation 2: Entscheiden Sie sich für C oder D!". Die MD enthält beide Tabellen, aber stark fragmentiert. Fußzeile "Folie 204".
### Fehlende visuelle Inhalte
Zwei Tabellen mit kräftig blauer Kopfzeile und hellblauen Datenzeilen; Spaltenköpfe sind Farbnamen (Weiß, Rot, Grün, Blau, Gelb). In Situation 2 ist die vierte Spalte (zuvor "Blau") leer/ohne Überschrift, da diese Farbe mit einer anderen zusammengefasst wurde; Situation 2 hat zudem zwei separate Wahrscheinlichkeits-Zeilen (eine für C, eine für D).
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
Entscheidungssituation 1 (A oder B):
|                    | Weiß | Rot | Grün | Blau | Gelb |
|--------------------|------|-----|------|------|------|
| Wahrscheinlichkeit | 90%  | 6%  | 1%   | 1%   | 2%   |
| Auszahlung A       | 0    | 45  | 30   | -15  | -15  |
| Auszahlung B       | 0    | 45  | 45   | -10  | -15  |

Entscheidungssituation 2 (C oder D):
|                    | Weiß | Rot | Grün | (leer) | Gelb |
|--------------------|------|-----|------|--------|------|
| Wahrscheinlichkeit | 90%  | 6%  | 1%   |        | 3%   |
| Auszahlung C       | 0    | 45  | 30   |        | -15  |
| Wahrscheinlichkeit | 90%  | 7%  | 1%   |        | 2%   |
| Auszahlung D       | 0    | 45  | -10  |        | -15  |
### Fachliche Aussage
Die Versuchsanordnung zeigt zwei objektiv identische Entscheidungssituationen, bei denen in Situation 2 Farben mit gleichen Ergebnissen zusammengefasst wurden.
### React-Vorschlag
PayoffMatrix - zwei farbcodierte Auszahlungstabellen; Hinweis, dass in Situation 2 eine Farbspalte zusammengefasst fehlt.

## Folie 15 - Editing Phase: Kombination (Ergebnisse)
### In der MD vorhanden
Folientitel "Editing Phase - Kombination". Alle Ergebnis- und Erklärungspunkte vollständig vorhanden. Fußzeile "Folie 205".
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik.
### Inhaltliche Rekonstruktion
- In Entscheidungssituation 1 dominiert B, in Entscheidungssituation 2 D.
- Entscheidungssituation 1: 100% der Probanden wählen Variante B.
- Entscheidungssituation 2: 58% wählen Variante C!
- Unterschied zwischen den Entscheidungssituationen 1 und 2: In Entscheidungssituation 2 wurden die Farben mit jeweils denselben Ergebnissen zusammengefasst. Also bei C: Gelb und Blau, bei D: Rot und Grün.
- Die Dominanz von D wird so "verschleiert".
### Fachliche Aussage
Allein durch die Zusammenfassung (Kombination) von Farben wählen Probanden die dominierte Alternative C - die Editing-Operation führt zur irrationalen Wahl.
### React-Vorschlag
ResultBullets - Aufzählung mit hervorgehobenen Prozentwerten (100% B / 58% C).

## Folie 16 - Prospect Theory: Die zwei Phasen der Entscheidungsfindung
### In der MD vorhanden
Folientitel "Prospect Theory - Die zwei Phasen der Entscheidungsfindung". Die MD bricht den zweispaltigen Text durcheinander (Stichpunkte der beiden Phasen ineinander verwoben und schwer der richtigen Phase zuzuordnen). Fußzeile "Folie 206".
### Fehlende visuelle Inhalte
Zweispaltiges Gegenüberstellungs-Layout: links "Phase 1 - Editing", rechts "Phase 2 - Evaluation" (jeweils mit fetter Überschrift). Beide Spalten als nebeneinanderstehende Aufzählungsblöcke.
### Visuelle Rekonstruktion
+--------------------------+   +--------------------------+
| Phase 1 - Editing        |   | Phase 2 - Evaluation     |
| - Transformation durch   |   | - aufbereitete Prospects |
|   Operationen:           |   |   werden bewertet        |
|   Kombination            |   | - 2 Funktionen:          |
|   Vereinfachung          |   |   Wertfunktion           |
|   Segregation            |   |   Gewichtungsfunktion    |
|   Streichung             |   | - Bewertung Gewinne/     |
|   Eliminierung dom. Alt. |   |   Verluste auf Wertfkt.  |
|   Kodierung (Referenzp.) |   | - Wahrscheinlichkeiten   |
|                          |   |   per Gewichtungsfkt.    |
+--------------------------+   +--------------------------+
### Inhaltliche Rekonstruktion
Phase 1 - Editing: Konsequenzen und Wahrscheinlichkeiten der vorliegenden Alternativen werden durch bestimmte Operationen transformiert: Kombination (Addition von Wahrscheinlichkeiten), Vereinfachung (Auf-/Abrunden), Segregation (Trennung sicherer von riskanten Alternativen), Streichung gemeinsamer Bestandteile, Eliminierung dominierender Alternativen, Kodierung durch Setzung eines Referenzpunktes.
Phase 2 - Evaluation: Durch Editing aufbereitete Prospects werden bewertet; Bewertung erfolgt durch zwei Funktionen (Wertfunktion, Gewichtungsfunktion); Bewertung der Gewinne und Verluste auf der Wertfunktion mittels gesetztem Referenzpunkt aus der Editing-Phase; zusätzliche Bewertung der Konsequenzen anhand die Wahrscheinlichkeiten auch durch Anwendung der Gewichtungsfunktion subjektiv bewertet.
### Fachliche Aussage
Zusammenfassende Gegenüberstellung der beiden Entscheidungsphasen: Editing (Aufbereitung) und Evaluation (Bewertung über Wert- und Gewichtungsfunktion).
### React-Vorschlag
TwoColumnCompare - zwei nebeneinanderliegende Phasenkarten (Editing vs. Evaluation).

## Folie 17 - Evaluation Phase: Wert eines Prospekts
### In der MD vorhanden
Folientitel "Evaluation Phase - Wert eines Prospekts", Zwischenüberschrift "Evaluation = Bewertung der aufbereiteten Alternativen". Die Formel ist vorhanden (Sonderzeichen pi als "π" extrahiert). Inhalt ansonsten vollständig. Fußzeile "Folie 207".
### Fehlende visuelle Inhalte
Reine Textfolie; nur fette/farbige Hervorhebung der Begriffe ("Wert eines Prospekts V", "zwei Funktionen", "Wertfunktion", "Gewichtungsfunktion", "Referenzpunkt", "subjektive Einschätzung").
### Inhaltliche Rekonstruktion
Evaluation = Bewertung der aufbereiteten Alternativen. Der Wert eines Prospekts V ergibt sich durch:
V(x;p / y;q) = pi(p) x v(x) + pi(q) x v(y), mit:
- v(.) = Wert der Ergebnisse x bzw. y (value function)
- pi(.) = Gewicht der Wahrscheinlichkeiten p bzw. q (weighting function)
Die Bewertung erfolgt über zwei Funktionen (subjektive Wertfunktion + Gewichtungsfunktion). Der Wert eines Ergebnisses hängt von einem Referenzpunkt (z.B. Kaufkurs o.ä.) und der Höhe der relativen Veränderung von diesem Referenzpunkt ab. pi ist keine Maßzahl für die Wahrscheinlichkeit, sondern Ausdruck der subjektiven Einschätzung des Entscheiders bezüglich dieser Wahrscheinlichkeit.
### Fachliche Aussage
Der Prospektwert berechnet sich als Summe der mit Gewichtungsfunktion pi bewerteten, mit Wertfunktion v bewerteten Ergebnisse - relativ zu einem Referenzpunkt.
### React-Vorschlag
FormulaBlock + BulletList - zentrale Formel V(x;p/y;q)=pi(p)v(x)+pi(q)v(y) plus Erläuterung der Symbole.

## Folie 18 - Evaluation Phase: Wert eines Prospekts (Beispiel Münzwurf)
### In der MD vorhanden
Folientitel "Evaluation Phase - Wert eines Prospekts", Zwischenüberschrift "Beispiel: Münzwurf". Beispiel inkl. Formel vollständig vorhanden (Sonderzeichen pi als "π"). Fußzeile "Folie 208".
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik.
### Inhaltliche Rekonstruktion
Beispiel Münzwurf: bei "Kopf" erhält man 1 Euro, bei "Zahl" muss man einen Euro zahlen; je Wahrscheinlichkeit 0,50.
V(1; 0,5 / -1; 0,5) = pi(0,5) x v(1) + pi(0,5) x v(-1)
- Die Bewertungsfunktion v ordnet den Eurobeträgen den subjektiven Nutzen zu, der von der Entscheider:in den jeweiligen Geldbeträgen zuteilt wird.
- In der Prospect Theory werden die Ergebnisse der Alternativen als Abweichungen von einem Referenzpunkt definiert; v bestimmt den Wert der Abweichung, nicht den absoluten Wert des Vermögens.
- pi bestimmt den Einfluss der Wahrscheinlichkeiten auf den Gesamtnutzen der Geldbeträge.
- Der Gesamtnutzen muss nicht notwendigerweise Null sein: Wenn der Entscheider den Verlust eines Euro höher einschätzt als den Gewinn, dann wird diese Wette unattraktiv für ihn.
### Fachliche Aussage
Am Münzwurf-Beispiel wird gezeigt, dass eine objektiv faire Wette wegen Verlustaversion subjektiv unattraktiv sein kann.
### React-Vorschlag
WorkedExample - Beispielkarte mit Formel V(1;0,5/-1;0,5) und Erklärungsliste.

## Folie 19 - Präferenzen bei positiven und negativen Prospekten
### In der MD vorhanden
Folientitel "Präferenzen bei positiven und negativen Prospekten", Einleitung "Einige Befunde (vgl. Kahneman/Tversky 1979, S. 265ff.)". Die MD enthält die Tabelle, aber stark zerbrochen (Antwort-Prozente und Prospect-Werte in mehreren Teiltabellen, Spaltenzuordnung verschoben). Fußzeile "Folie 209".
### Fehlende visuelle Inhalte
Eine zweigeteilte Befund-Tabelle mit blauer Kopfzeile: linke Hälfte "Positive Prospects" (Spalten Alternative A, Alternative B), rechte Hälfte "Negative Prospects" (Spalten Alternative C, Alternative D); zwei Zeilen "Fall 1" und "Fall 2". Pro Zelle steht oben die Prospekt-Angabe und darunter die Antworthäufigkeit in %. Im Text Hervorhebung "widerspricht".
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
|        | Positive Prospects |               | Negative Prospects |                |
|        | Alternative A      | Alternative B | Alternative C      | Alternative D  |
|--------|--------------------|---------------|--------------------|----------------|
| Fall 1 | (4.000; 0,8)       | (3.000)       | (-4.000; 0,8)      | (-3.000)       |
|        | 20%                | 80%           | 92%                | 8%             |
| Fall 2 | (3.000; 0,9)       | (6.000; 0,45) | (-3.000; 0,9)      | (-6.000; 0,45) |
|        | 86%                | 14%           | 8%                 | 92%            |

- Prozentangaben = Antworthäufigkeit in %.
- Bei negativen Prospekten dominiert Risikofreude, bei positiven Risikoaversion.
- Dieses Verhalten widerspricht der klassischen ökonomischen Theorie; gemäß der Risikoeinstellung einzig vom Verhältnis des Vermögens einer Person zur Größe der Gewinn- oder Verlustchance abhängen würde.
- Das beschriebene Verhalten ist nicht auf das Spiel mit finanziellen Einsätzen beschränkt und lässt sich selbst dann beobachten, wenn die Ergebnisse des "Spiels" nur anders dargestellt (framed) werden, aber objektiv identisch sind, wie der Klassiker "Asian Disease Problem" aus der Framing-Literatur zeigt (s. Folie 102).
### Fachliche Aussage
Empirische Befunde belegen: Spiegelung von Gewinnen zu Verlusten kehrt das Risikoverhalten um (Risikoaversion bei Gewinnen, Risikofreude bei Verlusten) - der Reflexionseffekt.
### React-Vorschlag
PreferenceTable - zweigeteilte Tabelle (positive/negative Prospekte) mit Prospekt-Werten und Antworthäufigkeiten je Fall.

## Folie 20 - Die Wertfunktion der Prospect Theory
### In der MD vorhanden
Folientitel "Die Wertfunktion der Prospect Theory". Die MD enthält nur lose Beschriftungs-Fragmente ("Freude über zusätzlichen Gewinn wird geringer", "Leid über zusätzlichen Verlust wird geringer") und den Schlusssatz; das Diagramm selbst fehlt komplett. Fußzeile "Folie 210".
### Fehlende visuelle Inhalte
Das klassische S-förmige Wertfunktions-Diagramm (Koordinatensystem):
- Vertikale Achse oben beschriftet "Nutzen".
- Horizontale Achse: links "Verluste" (rot), rechts "Gewinne" (grau).
- Ursprung = "Referenzpunkt" (grüner/türkiser Pfeil zeigt auf den Schnittpunkt der Achsen).
- Im Gewinnbereich (oben rechts): blaue, konkav abflachende Kurve; türkise Beschriftung "konkaver Verlauf im Gewinnbereich -> risikoscheu" und kursiv (blau) "Freude über zusätzlichen Gewinn wird geringer".
- Im Verlustbereich (unten links): rote, konvexe, steiler abfallende Kurve; türkise Beschriftung "konvexer Verlauf im Verlustbereich -> risikofreudig" und kursiv (rot) "Leid über zusätzlichen Verlust wird geringer".
- Mittiger türkiser Hinweis: "Funktionsverlauf für Verluste steiler als für Gewinne -> Verlustaversion".
### Visuelle Rekonstruktion
              Nutzen |
                     |         ____  konkav (Gewinne, blau) -> risikoscheu
                     |     ___/
 Verluste -----------O------------------ Gewinne
            ___/      | (Referenzpunkt)
        ___/          |
 konvex (Verluste, rot) -> risikofreudig; Kurve steiler (Verlustaversion)
                     |
### Inhaltliche Rekonstruktion
- Konkaver Verlauf im Gewinnbereich -> risikoscheu (Freude über zusätzlichen Gewinn wird geringer).
- Konvexer Verlauf im Verlustbereich -> risikofreudig (Leid über zusätzlichen Verlust wird geringer).
- Funktionsverlauf für Verluste steiler als für Gewinne -> Verlustaversion.
- Nutzen bemisst sich nicht an absoluten Werten, sondern an den Veränderungen dieser Werte in Bezug auf einen Referenzpunkt (Ursprung des Koordinatensystems).
### Fachliche Aussage
Die S-förmige Wertfunktion ist im Gewinnbereich konkav (Risikoaversion), im Verlustbereich konvex und steiler (Verlustaversion), gemessen relativ zum Referenzpunkt.
### React-Vorschlag
ValueFunctionChart - SVG-Koordinatensystem mit S-Kurve (blau im Gewinn-, rot im Verlustbereich), Achsenlabels und Annotationen.

## Folie 21 - Die Wertfunktion (Value Function)
### In der MD vorhanden
Folientitel "Die Wertfunktion - Value Function". Alle Aufzählungspunkte (Referenzpunkt, Abweichung, Konkavität, Konvexität, Verlustaversion) vollständig vorhanden. Fußzeile "Folie 211".
### Fehlende visuelle Inhalte
Reine Textfolie; nur fette/blaue Hervorhebungen ("Wert einer Alternative", "zwei Elementen", "Konkavität", "Konvexität", "steiler", "Verlusten ein höheres Gewicht", "Verlustaversion").
### Inhaltliche Rekonstruktion
Der Wert einer Alternative ist abhängig von zwei Elementen:
- Referenzpunkt
- Höhe der Abweichung vom Referenzpunkt
Prinzip abnehmender Empfindlichkeit:
- Konkavität der Kurve im Gewinnbereich: Unterschied zwischen 100/200 EUR-Gewinn wird stärker wahrgenommen als Unterschied zwischen 1.100/1.200 EUR-Gewinn.
- Konvexität der Kurve im Verlustbereich: Verlust von 200 EUR statt 100 EUR ist schmerzhaft; Verlust von 20.100 EUR statt 20.000 EUR von geringer Bedeutung. Kurve hier steiler, weil Menschen Verlusten ein höheres Gewicht beimessen als Gewinnen (Verlustaversion).
### Fachliche Aussage
Erläutert das Prinzip abnehmender Empfindlichkeit und die Verlustaversion anhand konkreter Betragsbeispiele.
### React-Vorschlag
PrincipleExplainer - strukturierte Liste (Konkavität/Konvexität) mit Beispielwerten; optional verlinkt zum ValueFunctionChart von Folie 20.

## Folie 22 - Zentrale kognitive Merkmale
### In der MD vorhanden
Folientitel "Zentrale kognitive Merkmale", Einleitung "Die zentralen kognitiven Merkmale der Prospect Theory sind zusammengefasst:". Alle drei Merkmale und der abschließende Absatz vollständig vorhanden. Fußzeile "Folie 212".
### Fehlende visuelle Inhalte
Reine Textfolie; nur fette/blaue Hervorhebung der Begriffe Referenzpunkt, Prinzip abnehmender Empfindlichkeit, Verlustaversion.
### Inhaltliche Rekonstruktion
Die zentralen kognitiven Merkmale der Prospect Theory sind zusammengefasst:
- Die Beurteilung erfolgt in Bezug auf einen neutralen Referenzpunkt ("Anpassungsniveau").
- Das "Prinzip abnehmender Empfindlichkeit".
- Verlustaversion.
Diese kognitiven Merkmale spielen eine wesentliche Rolle bei der Bewertung finanzieller Ergebnisse und sind vielen automatischen Wahrnehmungs-, Urteils- und emotionalen Prozessen gemeinsam.
### Fachliche Aussage
Zusammenfassung der drei kognitiven Kernmerkmale: Referenzpunkt, abnehmende Empfindlichkeit, Verlustaversion.
### React-Vorschlag
KeyFeatureList - drei hervorgehobene Merkmal-Items mit Abschluss-Absatz.

## Folie 23 - Prospect Theory: Framing
### In der MD vorhanden
Folientitel "Prospect Theory - Framing", farbige Zwischenüberschrift "Framing", Blocküberschriften "Weitere Beispiele:" und "Erklärungsansätze:". Alle Beispiele und Erklärungsansätze vollständig vorhanden. Fußzeile "Folie 213".
### Fehlende visuelle Inhalte
Reine Textfolie; nur Strukturierung in zwei Blöcke ("Weitere Beispiele:" / "Erklärungsansätze:").
### Inhaltliche Rekonstruktion
Weitere Beispiele:
- z.B. Geldillusion: Reduktion des Nominaleinkommens wird als Verlust wahrgenommen, ein nominaler Anstieg als Gewinn, selbst wenn das Realeinkommen sinkt.
- Steuerliche Differenzierung: Steuernachlass für kinderreiche Familien oder Steuererhöhung für Kinderlose?
- Kreditkartenindustrie: Barnachlass statt Aufpreis für Kreditkartenzahlungen.
Erklärungsansätze:
- Menschen sind gemäß Prospect Theory risikoavers, wenn es um Gewinne geht, und risikofreudig im Verlustfall.
- Negative Informationen werden stärker beachtet als positive.
- In transparenten Situationen verhalten sich Menschen gemäß der Erwartungsnutzentheorie.
### Fachliche Aussage
Framing-Effekte: Die Darstellung (Gewinn vs. Verlust) beeinflusst Entscheidungen systematisch, erklärbar über Risikoaversion/Risikofreude und die stärkere Gewichtung negativer Information.
### React-Vorschlag
FramingExamples - zweigeteilte Liste (Beispiele / Erklärungsansätze) mit Abschnittsüberschriften.

## Folie 24 - Prospect Theory / Status-quo-Bias
### In der MD vorhanden
Vollständig vorhanden (Zeilen 360-373): Erklärungsansatz der Prospect Theory für den Status-quo-Bias (Verlustaversion), alternative Erklärungen (Bindung, Regret Aversion, Bereuen aktiver Handlungen vs. Nichts-Tun, Facebook-Aktien-Beispiel).
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafiken. Nur Layout-Struktur: zwei blau hervorgehobene Überschriften ("Erklärungsansatz der Prospect Theory für Status-quo-Bias:" und "Alternative Erklärung:") mit jeweils einer bzw. drei Aufzählungen.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Erklärungsansatz der Prospect Theory für Status-quo-Bias:
- Verlustaversion: Aufgabe des Status-quo wird als Verlust empfunden und höher bewertet als potentieller Gewinn einer Alternative

Alternative Erklärung:
- Bindung an bisher getroffene Entscheidung.
- Regret Aversion: Menschen haben Angst vor Reue und beziehen diese schon bei der Entscheidung mit ein.
- Menschen bereuen Konsequenzen von aktiven Handlungen stärker als die Konsequenzen von Nichts-Tun; Bsp: Aktionär A hat Facebook-Aktie früh verkauft vs. Aktionär B hatte darüber nachgedacht zu kaufen, es aber nicht getan.
### Fachliche Aussage
Der Status-quo-Bias wird in der Prospect Theory primär über Verlustaversion erklärt; ergänzend werden Bindung an frühere Entscheidungen und Regret Aversion (Reue über aktives Handeln stärker als über Unterlassen) angeführt.
### React-Vorschlag
StatusQuoBiasExplainer: zweispaltige bzw. zweiteilige Liste mit Akzent-Headlines ("Prospect-Theory-Ansatz" vs. "Alternative Erklärungen"); Facebook-Beispiel als Callout/Vergleichskarte (Aktionär A vs. Aktionär B).

## Folie 25 - Prospect Theory / Besitztumseffekt
### In der MD vorhanden
Text vorhanden (Zeilen 375-384): Definition Besitztumseffekt, Erklärungsansatz (Verkauf = Verlust, Kauf = Gewinn) sowie Vergleich mit Status-quo-Bias. Die beiden Diagramme fehlen komplett.
### Fehlende visuelle Inhalte
Zwei nebeneinander stehende kleine Koordinatensysteme mit jeweils einer S-förmigen Wertfunktion (konkav im Gewinnbereich oben rechts, konvex/steiler im Verlustbereich unten links), Ursprung = Referenzpunkt.
- Linkes Diagramm: Titel "Mental accounts in der Kaufsituation". Auf der vertikalen Wertachse sind zwei Punkte beschriftet: oben "v(x)" (Gewinnwert) und etwas darunter "v(y)"; auf der Verlustseite (unten) ein Wert. Markiert ist die Bewertung beim Kauf eines Gutes.
- Rechtes Diagramm: Titel "Mental accounts in der Verkaufsituation". Auf der vertikalen Achse beschriftet mit "-v(-x)" (oben) und "-y" (darunter) – Spiegelung/Verschiebung der Bewertung beim Verkauf.
Die Diagramme illustrieren grafisch, dass derselbe Geldbetrag in Kauf- vs. Verkaufssituation unterschiedlich (asymmetrisch) auf der S-Kurve bewertet wird.
### Visuelle Rekonstruktion
```
 Mental accounts            Mental accounts
 in der Kaufsituation       in der Verkaufsituation
        v |  ___ v(x)               v |  ___ -v(-x)
          | /    v(y)                 | /     -y
   -------+------>            --------+------>
      ___/|                       ___/|
     /    |                      /    |
```
### Inhaltliche Rekonstruktion
Besitztumseffekt: in der Bewertung eines Gutes liegt der Verkaufspreis meist höher als der Kaufpreis.
Erklärungsansatz der Prospect Theory:
- Verkauf eines Gutes wird als Verlust bewertet, Kauf eines Gutes als Gewinn.

Stark vergleichbar mit Besitztumseffekt: Tendenz, lieber alles beim alten zu lassen (passive Haltung; "Status quo-Bias"), z.B.: kein Portfolio-Rebalancing, keine Änderung von Stromtarifen, Amtsbonus bei Wahlen etc.
### Fachliche Aussage
Der Besitztumseffekt (Endowment Effect) erklärt, dass der geforderte Verkaufspreis über dem Kaufpreis liegt, weil ein Verkauf als Verlust und ein Kauf als Gewinn kodiert wird; durch die steilere Verlustkurve entsteht eine Bewertungsasymmetrie.
### React-Vorschlag
EndowmentEffectDiagram: zwei nebeneinander gestellte SVG-Wertfunktionskurven (Kauf- vs. Verkaufsituation) mit markierten Punkten v(x)/v(y) bzw. -v(-x)/-y; darunter Definitions-Callout und Verbindungssatz zum Status-quo-Bias.

## Folie 26 - Prospect Theory / Mental Accounting (Folgen von Mental Accounting bei Investmententscheidungen)
### In der MD vorhanden
Text großteils vorhanden, aber das Schaubild ist als zerbrochene Tabelle/Knotenliste extrahiert (Zeilen 386-406): Konto-Namen "Aktie 1"-"Aktie 7", Beschriftungen "Relativer Verlust", "Relativer Gewinn", "Einstandspreis" verstreut. Die eigentliche Folienüberschrift "Folgen von Mental Accounting bei Investmententscheidungen" ist im Entwurf nicht abgebildet.
### Fehlende visuelle Inhalte
Folienüberschrift (blau): "Folgen von Mental Accounting bei Investmententscheidungen".
Zweiteiliges Schaubild mit verbindendem Pfeil:
- Links: Überschrift "Mental Accounting (Isoliertes Bewerten jedes einzelnen Engagements)". Darunter eine blaue Ellipse, in der sieben einzeln stehende Konten-Labels frei angeordnet sind: Konto "Aktie 1", "Aktie 2", "Aktie 3", "Aktie 4", "Aktie 5", "Aktie 6", "Aktie 7".
- Mitte: horizontaler blauer Pfeil mit Beschriftung "z. B. für Konto 'Aktie 1'".
- Rechts: Überschrift "Relatives Bewerten innerhalb jedes Kontos". Ein Koordinatensystem mit S-förmiger Wertfunktion (grün/oben rechts = Gewinnbereich, blau/unten links = Verlustbereich). x-Achse links "Relativer Verlust", rechts "Relativer Gewinn"; der Ursprung/Referenzpunkt ist mit einem kleinen Kreis markiert und per Pfeil als "Einstandspreis" beschriftet.
### Visuelle Rekonstruktion
```
 "Mental Accounting (Isoliertes Bewerten ...)"      "Relatives Bewerten innerhalb jedes Kontos"
 ( Konto"Aktie2"  Konto"Aktie1"  )                                v |  __ (grün, Gewinn)
 ( Konto"Aktie4" Konto"Aktie3" Konto"Aktie5" ) -- z.B. Aktie1 -->  ----+----->
 ( Konto"Aktie6"  Konto"Aktie7"  )                     Rel.Verlust  /| Rel.Gewinn
                                                              ___/ o = Einstandspreis
```
### Inhaltliche Rekonstruktion
Folgen von Mental Accounting bei Investmententscheidungen.
"Mental Accounting" = Isoliertes Bewerten jedes einzelnen Engagements (Konten "Aktie 1" bis "Aktie 7"). Pro Konto erfolgt relatives Bewerten innerhalb jedes Kontos auf einer eigenen Wertfunktion mit dem Einstandspreis als Referenzpunkt.
- Mental Accounting führt zu einer Vernachlässigung von positiven Effekten, die durch eine Diversifikation entstehen.
- Gegensteuern durch bewusste ganzheitliche Betrachtung (Aggregation)!
### Fachliche Aussage
Mentale Kontoführung bewertet jede Position isoliert auf einer eigenen Wertfunktion (Referenzpunkt = Einstandspreis) und blendet dadurch Diversifikationsvorteile aus; Gegenmittel ist die aggregierte Gesamtbetrachtung.
### React-Vorschlag
MentalAccountingSchema: Flow-Layout mit Ellipse + Chip-Gruppe der sieben Konten links, Pfeil ("z. B. für Konto Aktie 1") in der Mitte, SVG-Wertfunktion mit Einstandspreis-Marker rechts; abschließender Merksatz-Callout zur Aggregation.

## Folie 27 - Prospect Theory / Mental Accounting (Erklärungsansatz Hedonic Framing)
### In der MD vorhanden
Text vollständig vorhanden (Zeilen 408-422): Hedonic Framing, Regeln zu Trennen/Integrieren von Gewinnen und Verlusten, Definition Hedonic Framing. Das untere Pfeil-Schaubild fehlt strukturell.
### Fehlende visuelle Inhalte
Folienüberschrift: "Erklärungsansatz der Prospect Theory für Mentale Kontoführung". Unter dem hellblauen Definitions-Kasten ("Hedonic Framing beschreibt eine Konstruktion von mentalen Konten, so dass die Gesamtzufriedenheit maximiert wird.") zwei diagonale Pfeile, die nach links unten und rechts unten zeigen, jeweils zu einem hellblauen Kasten:
- linker Kasten: "Integration (Konten zusammenfassen)"
- rechter Kasten: "Segregation (Konten trennen)"
### Visuelle Rekonstruktion
```
        [ Hedonic Framing: ... Gesamtzufriedenheit maximiert ]
              /                                  \
             v                                    v
   [ Integration            ]          [ Segregation        ]
   [ (Konten zusammenfassen)]          [ (Konten trennen)   ]
```
### Inhaltliche Rekonstruktion
Erklärungsansatz der Prospect Theory für Mentale Kontoführung:
- Hedonic Framing: Menschen kodieren und verbuchen Entscheidungen mental so, dass der Nutzen maximiert wird; subjektiver Wert von (x + y) ist höher als der subjektive Wert von x + subjektive Wert von y.
- Gewinne werden eher getrennt
- Verluste werden integriert
- kleine Verluste werden mit größeren Gewinnen integriert
- Kleine Gewinne werden von großen Verlusten getrennt

Definition: Hedonic Framing beschreibt eine Konstruktion von mentalen Konten, so dass die Gesamtzufriedenheit maximiert wird. → Integration (Konten zusammenfassen) | Segregation (Konten trennen)
### Fachliche Aussage
Hedonic Framing beschreibt, wie Menschen mentale Konten so konstruieren (durch Integration oder Segregation), dass die wahrgenommene Gesamtzufriedenheit maximiert wird.
### React-Vorschlag
HedonicFramingRules: Aufzählung der vier Kodierungsregeln plus ein kleines Branch-Diagramm (Definition-Box → zwei abzweigende Boxen Integration/Segregation).

## Folie 28 - Prospect Theory / Mental Accounting – Hedonic Framing (Integration vs. Segregation, Teil 1)
### In der MD problematisch/fehlend
In der MD (Zeilen 424-431) nahezu vollständig verloren: nur Fragmente "+ >", "Gewinne werden segregiert", "+ <", "Verluste werden integriert". Die gesamte grafische Begründung über die Wertfunktionskurven fehlt.
### Fehlende visuelle Inhalte
Folienüberschrift: "Hedonic Framing – Integration vs. Segregation". Zwei Reihen à drei kleinen S-förmigen Wertfunktionskurven (Koordinatensysteme, blaue S-Kurve, Ursprung = Referenzpunkt), verknüpft durch große blaue Operatoren "+" und ein Vergleichszeichen.
- Obere Reihe (Gewinne, grün gefüllte Rechteckflächen im positiven Quadranten oben rechts): Diagramm 1 (kleine grüne Fläche, oranger Pfeil nach rechts) "+" Diagramm 2 (kleine grüne Fläche, oranger Pfeil) ">" Diagramm 3 (große grüne Fläche bei zusammengelegtem Gewinn). Beschriftung im hellblauen Band darunter: "Gewinne werden segregiert".
- Untere Reihe (Verluste, orange gefüllte Rechteckflächen im negativen Quadranten unten links): Diagramm 1 (orange Fläche, oranger Pfeil nach links) "+" Diagramm 2 (orange Fläche, oranger Pfeil) "<" Diagramm 3 (große orange Fläche bei zusammengelegtem Verlust). Beschriftung darunter: "Verluste werden integriert".
Die orangen Pfeile zeigen jeweils die Richtung der Empfindungs-/Wertänderung an; die Flächen visualisieren den subjektiven Wert v.
### Visuelle Rekonstruktion
```
Gewinne:  [S-Kurve, kl. grün]  +  [S-Kurve, kl. grün]   >   [S-Kurve, gr. grün]
                 => "Gewinne werden segregiert"
Verluste: [S-Kurve, kl. orange] + [S-Kurve, kl. orange] <  [S-Kurve, gr. orange]
                 => "Verluste werden integriert"
```
### Inhaltliche Rekonstruktion
- v(Gewinn1) + v(Gewinn2) > v(Gewinn1 + Gewinn2)  →  Gewinne werden segregiert (getrennt verbucht ergibt höheren Gesamtwert).
- v(Verlust1) + v(Verlust2) < v(Verlust1 + Verlust2)  →  Verluste werden integriert (zusammengefasst verbucht ist weniger schmerzhaft).
### Fachliche Aussage
Wegen der konkaven Gewinn- und konvexen Verlustkurve lohnt es sich für die wahrgenommene Zufriedenheit, mehrere Gewinne getrennt (segregiert) und mehrere Verluste gemeinsam (integriert) zu verbuchen.
### React-Vorschlag
HedonicFramingChart: SVG-Komponente mit zwei Zeilen wiederverwendbarer kleiner Wertfunktions-Sparklines (grün/orange gefüllte Flächen) und mathematischen Operatoren dazwischen; Label-Bänder darunter.

## Folie 29 - Prospect Theory / Mental Accounting – Hedonic Framing (Integration vs. Segregation, Teil 2)
### In der MD problematisch/fehlend
In der MD (Zeilen 433-442) nur Fragmente "<", "+", "Ein großer Gewinn und ein kleiner Verlust werden integriert", "+", ">", "Ein kleiner Gewinn und ein großer Verlust werden segregiert". Die Wertfunktionsgrafiken fehlen vollständig.
### Fehlende visuelle Inhalte
Folienüberschrift: "Hedonic Framing – Integration vs. Segregation". Erneut zwei Reihen à drei S-förmigen Wertfunktionskurven mit Operatoren.
- Obere Reihe: Diagramm 1 großer grüner Gewinn (große grüne Fläche oben rechts, oranger Pfeil) "+" Diagramm 2 kleiner orangefarbener Verlust (kleine orange Fläche nahe Ursprung unten, oranger Pfeil nach links) "<" Diagramm 3 zusammengelegte große grüne Fläche. Beschriftung im Band darunter: "Ein großer Gewinn und ein kleiner Verlust werden integriert".
- Untere Reihe: Diagramm 1 kleiner grüner Gewinn (kleine grüne Fläche, oranger Pfeil) "+" Diagramm 2 großer oranger Verlust (große orange Fläche unten links, oranger Pfeil nach links) ">" Diagramm 3 große orange Fläche. Beschriftung darunter: "Ein kleiner Gewinn und ein großer Verlust werden segregiert".
### Visuelle Rekonstruktion
```
[gr. grün Gewinn] + [kl. orange Verlust] < [zusammengefasst grün]
        => "Ein großer Gewinn und ein kleiner Verlust werden integriert"
[kl. grün Gewinn] + [gr. orange Verlust] > [zusammengefasst orange]
        => "Ein kleiner Gewinn und ein großer Verlust werden segregiert"
```
### Inhaltliche Rekonstruktion
- v(großer Gewinn) + v(kleiner Verlust) < v(großer Gewinn − kleiner Verlust)  →  ein großer Gewinn und ein kleiner Verlust werden integriert (kleiner Verlust mit großem Gewinn verrechnen = weniger schmerzhaft).
- v(kleiner Gewinn) + v(großer Verlust) > v(kleiner Gewinn − großer Verlust)  →  ein kleiner Gewinn und ein großer Verlust werden segregiert (kleinen Gewinn als "Silberstreif" getrennt halten).
### Fachliche Aussage
Hedonic Framing bei gemischten Ergebnissen: kleine Verluste werden mit großen Gewinnen integriert, kleine Gewinne werden von großen Verlusten getrennt, um die emotionale Bilanz zu optimieren.
### React-Vorschlag
HedonicFramingChart (Variante mixed): gleiche SVG-Bausteine wie Folie 28, jedoch gemischte Gewinn-/Verlust-Flächen je Zeile; als gemeinsame Komponente mit Props (gewinn/verlust groß/klein) implementieren.

## Folie 30 - Prospect Theory / Mental Accounting – Hedonic Framing (Anwendungsbeispiel Autokauf)
### In der MD problematisch/fehlend
Die Tabelle ist in der MD (Zeilen 444-461) stark zerbrochen; Spaltenköpfe und Werte sind verschoben. Die fachlichen Werte sind aber rekonstruierbar und auf der Folie eindeutig lesbar.
### Fehlende visuelle Inhalte
Folienüberschrift: "Hedonic Framing – Anwendungsbeispiel beim Autokauf". Vierspaltige Tabelle mit Rahmen; die vierte (rechte) Spalte ist hellblau hinterlegt (hervorgehoben). Spaltenüberschriften (jeweils mehrzeilig):
1) "Preis-entbündelung, Rabatt-Bündelung"
2) "Preis-bündelung, Rabatt-bündelung"
3) "Preis-entbündelung, Rabatt-entbündelung"
4) "Preis-bündelung, Rabatt-entbündelung" (hervorgehoben)
Zeilen (Posten, jeweils mit eingeschobener Rabattzeile): Grundmodell, Klimaanlage, Radio, Total, Gesamtpreis. Die Zellen sind nur teilweise gefüllt (je nach Bündelungsvariante).
### Visuelle Rekonstruktion
(siehe Tabelle unten)
### Inhaltliche Rekonstruktion
| Posten | Preisentbünd., Rabatt-Bündelung | Preisbünd., Rabattbünd. | Preisentbünd., Rabattentbünd. | Preisbünd., Rabattentbünd. |
| --- | --- | --- | --- | --- |
| Grundmodell | 30.000 | | 30.000 | |
| (Rabatt) | | | -1.500 | -1.500 |
| Klimaanlage | 3.000 | | 3.000 | |
| (Rabatt) | | | -150 | -150 |
| Radio | 2.000 | | 2.000 | |
| (Rabatt) | | | -100 | -100 |
| Total | | 35.000 | | 35.000 |
| (Rabatt) | -1.750 | -1.750 | | |
| Gesamtpreis | 33.250 | 33.250 | 33.250 | 33.250 |

Pointe: Alle vier Varianten ergeben denselben Gesamtpreis 33.250 €, werden aber je nach Bündelung/Entbündelung von Preis und Rabatt subjektiv unterschiedlich wahrgenommen.
### Fachliche Aussage
Obwohl der Endpreis (33.250 €) identisch ist, beeinflusst die Art der Bündelung bzw. Entbündelung von Einzelpreisen und Rabatten die subjektive Attraktivität – ein Anwendungsfall des Hedonic Framing.
### React-Vorschlag
AutokaufFramingTable: responsive Tabelle (table-wrap), vierte Spalte als hervorgehobene Variante; Fußnote/Callout, dass der Gesamtpreis in allen Varianten gleich ist.

## Folie 31 - Prospect Theory / Mental Accounting – Sunk Cost Effekt (Beispiele)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 463-475): Beispiel 1 (Telefon-Warteschleife), Beispiel 2 (gefallene XY-AG-Aktie) sowie Fazit-Kasten.
### Fehlende visuelle Inhalte
Reine Textfolie; nur ein hellblauer Hervorhebungs-Kasten am unteren Rand. Keine Grafiken.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Beispiel zum Sunk Cost-Effekt:
- Beispiel 1: Wie lange bleiben Sie in der Warteschleife einer kostenpflichtigen Telefon-Hotline bis Sie verbunden werden oder auflegen? Ein Anrufer wartet fünf Minuten, zehn Minuten und ringt die ganze Zeit mit sich, ob er auflegen und später erneut anrufen sollte…
- Beispiel 2: Ein Anleger hat vor einiger Zeit Aktien der XY-AG gekauft. Die Aktien sind inzwischen im Wert gefallen. Die Aussichten sind nicht gut. Wie wird sich der Anleger entscheiden?

Fazit: In beiden Fällen tendieren Menschen zur Fortführung des Engagements, um es noch irgendwie zum Erfolg zu zwingen.
### Fachliche Aussage
Der Sunk-Cost-Effekt führt dazu, dass bereits getätigte, nicht mehr rückholbare Einsätze (Zeit, Geld) Menschen zur Fortführung verlustträchtiger Engagements bewegen.
### React-Vorschlag
SunkCostExamples: zwei Beispielkarten (Telefon-Hotline, XY-AG-Aktie) plus Merksatz-Callout.

## Folie 32 - Prospect Theory / Mental Accounting – Sunk Cost Effekt (Begründung durch relative Bewertung)
### In der MD problematisch/fehlend
In der MD (Zeilen 477-481) nur Überschrift und Merksatz; die drei erklärenden Wertfunktionsdiagramme fehlen vollständig.
### Fehlende visuelle Inhalte
Folienüberschrift: "Begründung der Sunk Cost-Falle durch relative Bewertung". Drei nebeneinander stehende S-förmige Wertfunktionskurven (Achse "v" vertikal), jeweils mit grau hinterlegtem Rechteck als Wertfläche und auf der Folie aufgedruckten Werten:
- Diagramm 1 "Verlustprojekt": grau hinterlegtes Rechteck links unten/um den Ursprung; aufgedruckte Werte "-1000" (links auf der v-Achse) und "1500" (unten am Rechteck, im Verlustbereich).
- Diagramm 2 "Neues Projekt": grau hinterlegtes Rechteck um den Ursprung; aufgedruckter Wert "1600" (rechts neben dem Rechteck).
- Diagramm 3 "Gewinnprojekt": kleine graue Fläche weit rechts im flachen (konkaven) oberen Kurvenabschnitt; aufgedruckte Werte "1000" (unten) und "1700" (oben am Kurvenende).
Die Reihung illustriert, dass im flachen (abnehmend sensitiven) Kurvenbereich zusätzliche Beträge kaum noch wahrgenommen werden.
### Visuelle Rekonstruktion
```
 "Verlustprojekt"      "Neues Projekt"     "Gewinnprojekt"
   v|  __                 v|  __              v| ___ 1700
 -1000_/|              ___/|1600           ___/|1000
 ----+--             ----+--             ----+--
 _/ |1500             /  |                /  |
 (graue Fläche)     (graue Fläche)     (kl. graue Fläche)
```
### Inhaltliche Rekonstruktion
Begründung der Sunk Cost-Falle durch relative Bewertung. Auf den Diagrammen aufgedruckte Werte: Verlustprojekt -1000 / 1500; Neues Projekt 1600; Gewinnprojekt 1000 / 1700.
Merksatz: Abnehmende Sensitivität unterstützt die Präferenz für Verlustprojekte.
### Fachliche Aussage
Im konvexen Verlustbereich (abnehmende Sensitivität) wirkt ein weiterer Einsatz in ein laufendes Verlustprojekt subjektiv kaum schmerzhafter – das erklärt, warum Verlustprojekte fortgeführt statt abgebrochen werden.
### React-Vorschlag
SunkCostRelativeValueChart: drei kleine SVG-Wertfunktionen nebeneinander (Verlust-/Neues-/Gewinnprojekt) mit grauen Wertflächen und den auf der Folie angegebenen Werten (-1000/1500, 1600, 1000/1700); Merksatz-Callout darunter.

## Folie 33 - Prospect Theory / Mental Accounting – Sunk Cost Effekt (Dispositionseffekt)
### In der MD problematisch/fehlend
In der MD (Zeilen 483-487) nur Überschrift, Untertitel und Merksatz; das zentrale Wertfunktionsdiagramm fehlt komplett.
### Fehlende visuelle Inhalte
Folienüberschrift: "Sunk Cost-Falle an der Börse (= Dispositionseffekt)". Großes Koordinatensystem mit S-förmiger Wertfunktion (v auf der vertikalen Achse). x-Achse: links "Relativer Verlust", rechts "Relativer Gewinn". Ursprung per Pfeil beschriftet "Bezugspunkt (z. B. Einstandspreis von 125 €)".
- Im Gewinnbereich (oben rechts): ein Punkt mit Pfeil-Beschriftung "Position nach Gewinn"; ein graues Rechteck und ein horizontaler Doppelpfeil, der die geringe Wertänderung im flachen (konkaven) Bereich andeutet → schnelle Gewinnrealisierung.
- Im Verlustbereich (unten links): ein Punkt mit Pfeil-Beschriftung "Position nach Verlust"; ein graues Rechteck und ein horizontaler Doppelpfeil im steilen (konvexen) Bereich → Verluste werden ausgesessen.
### Visuelle Rekonstruktion
```
                v |        o  Position nach Gewinn
                  |   <==[grau]==>  ___---
   Rel.Verlust ---+----------------------> Rel.Gewinn
            ___---|  Bezugspunkt (Einstandspreis 125 €)
  o Position    /|
  nach Verlust <==[grau]==>
```
### Inhaltliche Rekonstruktion
Sunk Cost-Falle an der Börse (= Dispositionseffekt). Bezugspunkt z. B. Einstandspreis von 125 €. Markiert: "Position nach Gewinn" (oben rechts) und "Position nach Verlust" (unten links).
Merksatz: Verluste werden ausgesessen und Gewinne werden zu schnell realisiert.
### Fachliche Aussage
Der Dispositionseffekt: Anleger realisieren Gewinne zu früh (Risikoaversion im Gewinnbereich) und sitzen Verluste aus (Risikofreude im Verlustbereich) – beides relativ zum Einstandspreis als Bezugspunkt.
### React-Vorschlag
DispositionEffectChart: SVG-Wertfunktion mit beschriftetem Bezugspunkt (Einstandspreis), zwei markierten Positionen (nach Gewinn/nach Verlust) und Doppelpfeilen; Merksatz-Callout.

## Folie 34 - Prospect Theory / Referenzpunkt
### In der MD vorhanden
Vollständig vorhanden (Zeilen 489-499): Frage, "Neutraler Charakter (Norm)", Beispiel-Aufzählung.
### Fehlende visuelle Inhalte
Folienüberschrift: "Die Lage des Bezugspunktes". Schlichtes Layout: zentrierte Frage "Wo liegen Bezugspunkte normalerweise?", darunter ein grauer Abwärtspfeil, der auf einen hellblauen Kasten "Neutraler Charakter ('Norm')" zeigt; darunter "zum Beispiel:" mit Aufzählung.
### Visuelle Rekonstruktion
```
        Wo liegen Bezugspunkte normalerweise?
                       |
                       v
        [ Neutraler Charakter ("Norm") ]
```
### Inhaltliche Rekonstruktion
Die Lage des Bezugspunktes – Wo liegen Bezugspunkte normalerweise? → Neutraler Charakter ("Norm")
zum Beispiel:
- Status quo (z.B. aktuelle Vermögenssituation)
- Pläne oder Erwartungen (z.B. Branchendurchschnitt)
- Ein nahe liegender Vergleichsmaßstab (z.B. Einkommen des Schwagers)
- Latente Bezugspunkte (z.B. aus historischer Wertentwicklung)
- …
### Fachliche Aussage
Der Referenzpunkt hat neutralen ("Norm"-)Charakter und kann u. a. der Status quo, Erwartungen/Pläne, ein naheliegender Vergleichsmaßstab oder ein latenter historischer Wert sein.
### React-Vorschlag
ReferencePointFlow: zentrierte Frage → Pfeil → Norm-Box, darunter Beispiel-Liste; rein CSS/SVG, keine komplexe Logik.

## Folie 35 - Prospect Theory / Gewichtungsfunktion (Beispiel Option A vs. B)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 501-516): Einleitung, Option A (45 % auf 6.000 €), Option B (90 % auf 3.000 €), Ergebnis (B), Erklärung Risikoscheu, Sprichwort.
### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählung; eingerückte Unterpunkte für Option A und Option B. Keine Grafiken.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Gewichtungsfunktion:
- Neben der Risikoneigung im Bereich der Verluste haben Kahneman und Tversky noch ein anderes Verhalten ihrer Versuchspersonen festgestellt:
- Wenn ein großer Gewinn sehr unwahrscheinlich ist, verhalten sich Menschen auch im Bereich der Gewinne risikofreudig
  - Option A: 45% Chance auf EUR 6.000 (alternativ EUR 6.000.000)
  - Option B: 90% Chance auf EUR 3.000 (alternativ EUR 3.000.000)
- Ergebnis: Die meisten Menschen wählen die Option B
- Dies ist ein typischer Fall der Risikoscheu im Bereich der Gewinne; man zieht den (fast) sicheren kleineren Gewinn einem potenziellem größeren Gewinn vor
- "Lieber den Spatz in der Hand als die Taube auf dem Dach"
### Fachliche Aussage
Bei mittleren/hohen Gewinnwahrscheinlichkeiten verhalten sich Menschen risikoscheu: Sie bevorzugen den fast sicheren kleineren Gewinn (Option B) gegenüber dem größeren, weniger wahrscheinlichen Gewinn.
### React-Vorschlag
WeightingOptionComparison: zwei Optionskarten (A/B) mit Wahrscheinlichkeit/Auszahlung, Ergebnis-Badge "Mehrheit wählt B", Sprichwort als Zitat-Callout.

## Folie 36 - Prospect Theory / Gewichtungsfunktion (Beispiel Option C vs. D)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 518-539): Option C (1 % auf 6.000 €), Option D (2 % auf 3.000 €), Ergebnis (73 % wählen C), Erklärungen und Schlussfolgerung zur weighting function. (Folie ist niedrig aufgelöst gerendert, Text aus MD vollständig.)
### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählung; eingerückte Unterpunkte Option C/D. Keine Grafiken.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Gewichtungsfunktion – zweiter Befund: Wenn ein großer Gewinn sehr unwahrscheinlich ist, verhalten sich Menschen auch im Bereich der Gewinne risikogeneigt.
- Option C: 1% Chance auf EUR 6.000 (alternativ EUR 6.000.000)
- Option D: 2% Chance auf EUR 3.000 (alternativ EUR 3.000.000)
Ergebnis:
- 73 % der Versuchspersonen wählen hingegen die Option C
- Auch hier ist die Chance auf 6.000 € genau halb so groß wie die auf 3.000 €.
- Bei sehr geringen Chancen erscheint die riskante Wahl attraktiver; die Vorstellung, 6.000 € gewinnen zu können, lässt die geringe Chance verblassen.
- Zur Beschreibung dieses Verhaltens schlagen Kahneman und Tversky eine Gewichtungsfunktion (weighting function) der objektiven Wahrscheinlichkeit vor.
### Fachliche Aussage
Bei sehr kleinen Gewinnwahrscheinlichkeiten kehrt sich das Verhalten um: Menschen werden risikofreudig (73 % wählen C, die kleinere Wahrscheinlichkeit auf den höheren Betrag) – Anlass für die Einführung der Gewichtungsfunktion.
### React-Vorschlag
WeightingOptionComparison (Variante C/D): gleiche Optionskarten-Komponente wie Folie 35, hier mit Ergebnis-Badge "73 % wählen C" und Erklärungstext zur weighting function.

## Folie 37 - Prospect Theory / Gewichtungsfunktion (Über- und Unterbewertung)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 541-549): drei Aussagen zu objektiven Wahrscheinlichkeiten/Wertfunktion, Überbewertung (π(p)>p) und Unterbewertung (π(p)<p).
### Fehlende visuelle Inhalte
Reine Textfolie mit drei Aufzählungspunkten, einzelne Begriffe blau hervorgehoben (u. a. "objektive Eintrittswahrscheinlichkeiten", "Wertfunktion", "objektiv unwahrscheinliche Ereignisse zu überbewerten", "π(p)>p", "objektiv mittlerer oder hoher Eintrittswahrscheinlichkeit", "unterbewertet", "π(p)<p"). Keine Grafiken.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
- Werden objektive Eintrittswahrscheinlichkeiten zugrunde gelegt, verhalten sich die Marktteilnehmer entsprechend der Wertfunktion.
- Tatsächlich tendieren aber Menschen dazu, objektiv unwahrscheinliche Ereignisse zu überbewerten. Dann gilt: π(p) > p.
- Ereignisse mit objektiv mittlerer oder hoher Eintrittswahrscheinlichkeit werden dagegen oftmals unterbewertet. π(p) < p.
### Fachliche Aussage
Die Gewichtungsfunktion verzerrt objektive Wahrscheinlichkeiten: kleine Wahrscheinlichkeiten werden überbewertet (π(p) > p), mittlere/hohe unterbewertet (π(p) < p).
### React-Vorschlag
WeightingFunctionRules: drei Aussagen als Liste mit hervorgehobenen Formeln π(p)>p / π(p)<p (z. B. inline-Code oder Badge-Style).

## Folie 38 - Prospect Theory / Risikoeinstellung und Gewichtungsfunktion
### In der MD problematisch/fehlend
In der MD (Zeilen 551-557) nur Überschrift sowie zerbrochene Achsenbeschriftungen ("Objektive Eintrittswahrscheinlichkeit", gespiegelt "tiekhcilniehcsrhaW enednufpmE" = "Empfundene Wahrscheinlichkeit"). Das gesamte Diagramm fehlt.
### Fehlende visuelle Inhalte
Folienüberschrift: "Allgemeiner Zusammenhang mit Risikoeinstellung". Ein quadratisches Diagramm mit doppelter Achsenbeschriftung:
- y-Achse links (vertikal): "Empfundene Wahrscheinlichkeit".
- x-Achse unten: "Objektive Eintrittswahrscheinlichkeit", von 0% (links) bis 100% (rechts), beschriftet "Gewinnwahrscheinlichkeiten".
- obere Achse: von 100% (links) bis 0% (rechts), beschriftet "Verlustwahrscheinlichkeiten".
- Beidseitig "π(p) für Gewinne" (links) und "π(p) für Verluste" (rechts).
- Eine gestrichelte Diagonale (45°) = "risikoneutral" (Beschriftung an der Diagonale).
- Die durchgezogene S-förmige Kurve verläuft im unteren/linken Bereich oberhalb der Diagonale ("risikofreudig", oben links beschriftet) und im oberen/rechten Bereich unterhalb der Diagonale ("risikoscheu", unten rechts beschriftet); im mittleren Bereich liegt sie nahe der Diagonale.
### Visuelle Rekonstruktion
```
 100%(Verlust) -------------------------- 0%
 empf.| risikofreudig  /
 W'keit|             /  (gestrichelt = risikoneutral)
       |          /  ____ risikoscheu
       |       /__/
   0% -+--------------------------> 100%
      0%   Gewinnwahrscheinlichkeiten
   links: π(p) für Gewinne   rechts: π(p) für Verluste
```
### Inhaltliche Rekonstruktion
Allgemeiner Zusammenhang mit Risikoeinstellung: Achsen "Empfundene Wahrscheinlichkeit" vs. "Objektive Eintrittswahrscheinlichkeit" (0%–100%). Obere Skala = Verlustwahrscheinlichkeiten (100%→0%), untere = Gewinnwahrscheinlichkeiten (0%→100%). π(p) für Gewinne (links), π(p) für Verluste (rechts). Diagonale = risikoneutral; oberhalb = risikofreudig, unterhalb = risikoscheu.
### Fachliche Aussage
Die Gewichtungskurve zeigt den Zusammenhang zwischen empfundener und objektiver Wahrscheinlichkeit: Abweichungen von der risikoneutralen Diagonale markieren risikofreudiges bzw. risikoscheues Verhalten je nach Wahrscheinlichkeitsbereich und Gewinn/Verlust.
### React-Vorschlag
RiskAttitudeWeightingChart: SVG mit doppelter x-Achsen-Beschriftung (Gewinn unten / Verlust oben), gestrichelter Diagonale und beschrifteten Zonen (risikofreudig/-neutral/-scheu).

## Folie 39 - Prospect Theory / Gewichtungsfunktion (Eigenschaften)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 559-575): Eigenschaften der Gewichtungsfunktion (steile Endbereiche, Beispiele Risikoreduktion 0,001%→0%, Sicherheitseffekt/certainty effect). (Folie niedrig aufgelöst gerendert; Text aus MD vollständig.)
### Fehlende visuelle Inhalte
Folienüberschrift: "Eigenschaften der Gewichtungsfunktion". Reine Textfolie mit Aufzählung und eingerückten Unterpunkten. Keine Grafiken.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Eigenschaften der Gewichtungsfunktion:
- Sie verläuft im Bereich der Endpunkte sehr steil → Menschen reagieren sehr sensibel auf Wahrscheinlichkeitsänderungen in diesem Bereich.
  - Beispiel: Menschen geben mehr Geld aus, ein Risiko von 0,001% auf 0% zu reduzieren als von 0,20% auf 0,15%, obwohl die Abnahme im zweiten Fall objektiv größer ist.
  - Beispiel: Subjektives Empfinden kann dazu führen, dass Geld in Sicherheitsmaßnahmen investiert wird, das an anderem Ort objektiv mehr zur Sicherheit beitragen könnte.
- Im Bereich sehr hoher Wahrscheinlichkeiten verläuft die Kurve sehr steil: es macht subjektiv einen großen Unterschied, EUR 1.000 mit 99% oder mit Sicherheit zu bekommen (Sicherheitseffekt = "certainty effect").
### Fachliche Aussage
Die Gewichtungsfunktion ist an den Rändern (nahe 0% und 100%) besonders steil; daraus folgen Übersensibilität bei sehr kleinen Wahrscheinlichkeiten und der Sicherheitseffekt (certainty effect) nahe 100%.
### React-Vorschlag
WeightingFunctionProperties: Aufzählung mit eingerückten Beispiel-Sub-Items; "certainty effect" als hervorgehobener Fachbegriff.

## Folie 40 - Prospect Theory / Gewichtungsfunktion (Wie Menschen Wahrscheinlichkeiten gewichten – Diagramm)
### In der MD problematisch/fehlend
In der MD (Zeilen 577-580) nur Überschrift "Wie Menschen Wahrscheinlichkeiten gewichten"; das vollständige Diagramm fehlt.
### Fehlende visuelle Inhalte
Folienüberschrift: "Wie Menschen Wahrscheinlichkeiten gewichten". Diagramm π(p) (y-Achse, 0%–50%–100%) über p (x-Achse, 0%–50%–100%).
- Eine gestrichelte 45°-Diagonale als Referenz (risikoneutral).
- Eine durchgezogene Kurve "für Verlustwahrscheinlichkeiten" (oben links beschriftet), die im unteren/mittleren p-Bereich oberhalb der Diagonale verläuft (konkaver Bogen).
- Eine durchgezogene Kurve "für Gewinnwahrscheinlichkeiten" (rechts unten beschriftet), die im unteren/mittleren Bereich unterhalb der Diagonale verläuft (konvexer Bogen).
- Beide Kurven treffen sich an den Endpunkten 0% und 100%.
- Zwei graue ovale Markierungen: eine unten links bei "Überbewertung von geringen Wahrscheinlichkeiten" und eine oben rechts nahe 100% mit Beschriftung "Certainty-Effekt".
### Visuelle Rekonstruktion
```
 100% |              ____O Certainty-Effekt
 π(p) |   Verlust__/  /
      |          /  / (gestrichelt risikoneutral)
  50% |       / __/ Gewinn
      |     _/_/
   0% O___/________________
      0%      50%      100%   p
      ^Überbewertung geringer W'keiten
```
### Inhaltliche Rekonstruktion
Wie Menschen Wahrscheinlichkeiten gewichten: π(p) vs. p (jeweils 0%–100%). Getrennte Kurven für Verlust- und Gewinnwahrscheinlichkeiten, gestrichelte Diagonale = risikoneutral. Graue ovale Markierungen: "Überbewertung von geringen Wahrscheinlichkeiten" (nahe 0%) und "Certainty-Effekt" (nahe 100%).
### Fachliche Aussage
Das Diagramm zeigt die typische Form der Gewichtungsfunktion: Überbewertung kleiner Wahrscheinlichkeiten und Sicherheits-/Certainty-Effekt nahe 100%, mit unterschiedlichem Verlauf für Gewinn- und Verlustwahrscheinlichkeiten.
### React-Vorschlag
ProbabilityWeightingChart: SVG mit zwei beschrifteten Kurven (Gewinn/Verlust), gestrichelter Diagonale und zwei Annotation-Ovalen (geringe-W-Überbewertung, Certainty-Effekt).

## Folie 41 - Prospect Theory / Gewichtungsfunktion (Wichtige Merkmale + Diagramm)
### In der MD vorhanden
Text vollständig vorhanden (Zeilen 582-597): vier Merkmale der Wahrscheinlichkeitsgewichtungsfunktion. Das (rechts platzierte, mit Folie 40 identische) Diagramm fehlt in der MD.
### Fehlende visuelle Inhalte
Folienüberschrift: "Wie Menschen Wahrscheinlichkeiten gewichten". Rechts oben eine verkleinerte Wiederholung des Diagramms von Folie 40 (π(p) über p mit Gewinn-/Verlustkurve, gestrichelter Diagonale, grauen Markierungen Überbewertung geringer W'keiten und Certainty-Effekt). Links die blau betitelte Textaufzählung "Wichtige Merkmale der Wahrscheinlichkeitsgewichtungsfunktion".
### Visuelle Rekonstruktion
```
[ Merkmal-Liste ]            [ kleines π(p)-vs-p-Diagramm ]
```
### Inhaltliche Rekonstruktion
Wichtige Merkmale der Wahrscheinlichkeitsgewichtungsfunktion:
- Es gibt zwei natürliche Bezugspunkte: 0% und 100%.
- Die Bewertung von Gewinn- und Verlustwahrscheinlichkeiten ist unterschiedlich.
- Certainty-Effekt: "Auch eine noch so hohe Wahrscheinlichkeit ist immer noch deutlich schlechter als absolute Sicherheit."
- Überbewertung von geringen Wahrscheinlichkeiten.
### Fachliche Aussage
Zusammenfassung der Gewichtungsfunktion: zwei Bezugspunkte (0%/100%), unterschiedliche Bewertung von Gewinn- vs. Verlustwahrscheinlichkeiten, Certainty-Effekt und Überbewertung geringer Wahrscheinlichkeiten.
### React-Vorschlag
ProbabilityWeightingSummary: zweispaltiges Layout – Merkmal-Liste links, wiederverwendete ProbabilityWeightingChart-Komponente (Folie 40) rechts.

## Folie 42 - Prospect Theory / Überbewertung geringer Eintrittswahrscheinlichkeiten (Fahrradversicherung)
### In der MD problematisch/fehlend
In der MD (Zeilen 599-613) sind Werte und Ungleichungen vorhanden, aber das Box-/Pfeil-Schaubild ist als zerbrochener Text extrahiert ("0,05 · -600 € + 0,95 · 0 € = -30 €", "<", ">>0,05 <<0,95").
### Fehlende visuelle Inhalte
Folienüberschrift: "Der Abschluss von kleinen Versicherungen". Strukturiertes Schaubild:
- Rechts oben grauer Datenkasten: "Jahresprämie: 40 €", "Wert des Fahrrads: 600 €", "Diebstahlwahrscheinlichkeit: 5%".
- Links ein gerahmter Kasten "Erwartungswert 'Keine Versicherung'" mit Rechnung 0,05 · -600 € + 0,95 · 0 € = -30 €; ">"-Zeichen dazwischen; rechts gerahmter Kasten "Erwartungswert 'Versicherung'" = -40 €.
- Darunter linker gerahmter Kasten "aber: π(0,05) · v(-600 €) + π(0,95) v(0 €)" mit zwei Abwärtspfeilen zu ">>0,05" (unter π(0,05)) und "<<0,95" (unter π(0,95)); "<"-Zeichen dazwischen; rechter Kasten "v(-40 €)".
- Unten hellblauer Merksatz-Balken.
### Visuelle Rekonstruktion
```
                          [Jahresprämie 40 € | Wert 600 € | Diebstahl 5%]
[ EW "Keine Vers." ]   >   [ EW "Versicherung" ]
  0,05·-600 + 0,95·0          -40 €
    = -30 €
[ aber: π(0,05)·v(-600€) ]  <  [ v(-40€) ]
   + π(0,95)·v(0€)
       |          |
     >>0,05     <<0,95
```
### Inhaltliche Rekonstruktion
Der Abschluss von kleinen Versicherungen – Beispiel "Fahrradversicherung":
- Jahresprämie: 40 € | Wert des Fahrrads: 600 € | Diebstahlwahrscheinlichkeit: 5%
- Erwartungswert "Keine Versicherung" = 0,05 · (-600 €) + 0,95 · 0 € = -30 €  >  Erwartungswert "Versicherung" = -40 €
- aber: π(0,05) · v(-600 €) + π(0,95) · v(0 €)  <  v(-40 €), weil π(0,05) >> 0,05 und π(0,95) << 0,95
- Merksatz: Versicherung im Erwartungswert teurer, aber subjektiv attraktiv!
### Fachliche Aussage
Obwohl die Versicherung im Erwartungswert teurer ist (-40 € vs. -30 €), wird sie wegen der Überbewertung der kleinen Diebstahlwahrscheinlichkeit (π(0,05) >> 0,05) subjektiv attraktiv – Anwendung der Gewichtungsfunktion.
### React-Vorschlag
InsuranceWeightingExample: Box-Diagramm mit Datenkasten, zwei Erwartungswert-Vergleichszeilen (objektiv vs. subjektiv) mit Vergleichszeichen und Pfeil-Annotationen (>>0,05 / <<0,95); Merksatz-Callout.

## Folie 43 - Prospect Theory / Bewertungsfunktionen – Zusammenfassung (Wertfunktion)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 615-634): drei Merkmale der Wertfunktion, Quellenangabe Daxhammer/Facsar (2017). (Folie niedrig aufgelöst gerendert; Text aus MD vollständig.)
### Fehlende visuelle Inhalte
Folientitel: "Bewertungsfunktionen - Zusammenfassung", Abschnittsüberschrift "Merkmale der Bewertungsfunktionen – Wertfunktion". Dekoratives, hellgrau/transparent eingeblendetes Hintergrund-Bild (Sportplatz-/Fußballfeld-Motiv, wie auf Folien 44/45) ohne fachlichen Inhalt; rechts der Aufzählungstext. Keine fachlichen Grafiken.
### Visuelle Rekonstruktion
(keine fachliche Grafik)
### Inhaltliche Rekonstruktion
Merkmale der Bewertungsfunktionen – Wertfunktion:
- Die Wertfunktion ist konkav (rechtsgekrümmt) im Gewinnbereich und konvex (linksgekrümmt) im Verlustbereich – verdeutlicht abnehmende Sensitivität für zunehmende Gewinne und Verluste sowie die Veränderung der Risikoeinstellung in Abhängigkeit von Gewinnen und Verlusten.
- Die Wertfunktion ist steiler im Verlustbereich als im Gewinnbereich – verdeutlicht die Verlustaversion; Verluste werden etwa doppelt so stark bewertet wie Gewinne in gleicher Höhe.
- Die Wertfunktion stellt relative Gewinne und Verluste dar, die durch einen Referenzpunkt definiert werden – die Sensitivität ändert sich in Abhängigkeit der Entfernung zum Referenzpunkt.

Quelle: Vgl. Daxhammer/Facsar (2017)
### Fachliche Aussage
Zusammenfassung der Wertfunktion: konkav im Gewinn-, konvex im Verlustbereich, steiler im Verlustbereich (Verlustaversion, ca. Faktor 2) und Bewertung relativer Veränderungen gegenüber einem Referenzpunkt.
### React-Vorschlag
ValueFunctionSummary: Drei-Punkte-Liste mit Quellen-note; optional begleitende kleine Wertfunktions-SVG zur Illustration der drei Eigenschaften.

## Folie 44 - Prospect Theory / Bewertungsfunktionen – Zusammenfassung (Gewichtungsfunktion)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 636-654): Merkmale der Gewichtungsfunktion, Quellenangabe Daxhammer/Facsar (2017). (Folie niedrig aufgelöst gerendert; Text aus MD vollständig.)
### Fehlende visuelle Inhalte
Folientitel: "Bewertungsfunktionen - Zusammenfassung", Abschnittsüberschrift "Merkmale der Bewertungsfunktionen – Gewichtungsfunktion". Dekoratives, transparent eingeblendetes Hintergrund-Bild (Sportplatz/Fußballtor-Motiv) ohne fachlichen Inhalt; rechts der Text. Keine fachlichen Grafiken.
### Visuelle Rekonstruktion
(keine fachliche Grafik)
### Inhaltliche Rekonstruktion
Merkmale der Bewertungsfunktionen – Gewichtungsfunktion:
- Beachtet der Marktteilnehmer die objektive Wahrscheinlichkeitsverteilung, basiert sein Risikoverhalten einzig auf der S-förmig gewölbten Wertfunktion. D.h. er ist im Gewinnbereich risikoscheu, im Verlustbereich risikofreudig.
- Beachtet er die objektive Wahrscheinlichkeitsverteilung nicht, verhält er sich entgegen der Wertfunktion:
  - Werden geringe Wahrscheinlichkeiten überschätzt, ist er eher bereit, Risiko einzugehen.
  - Werden mittlere und hohe Wahrscheinlichkeiten unterschätzt, ist er weniger bereit, Risiko einzugehen.

Quelle: Vgl. Daxhammer/Facsar (2017)
### Fachliche Aussage
Zusammenfassung der Gewichtungsfunktion: Bei Beachtung objektiver Wahrscheinlichkeiten bestimmt allein die Wertfunktion das Risikoverhalten; bei verzerrter Wahrnehmung führt Überschätzung kleiner Wahrscheinlichkeiten zu mehr, Unterschätzung mittlerer/hoher zu weniger Risikobereitschaft.
### React-Vorschlag
WeightingFunctionSummary: gleiche Listen-/Quellen-note-Struktur wie Folie 43, mit eingerückten Sub-Items zu Über-/Unterschätzung.

## Folie 45 - Überblick Bewertung von Wertpapieren auf Basis der Prospect Theory
### In der MD vorhanden
Vollständig vorhanden (Zeilen 656-668): vier Kernaussagen unter "Hürden für rationale Entscheidungen recht hoch", Quellenangabe Daxhammer/Facsar (2017). (Folie niedrig aufgelöst gerendert; Text aus MD vollständig.)
### Fehlende visuelle Inhalte
Folientitel: "Überblick Bewertung von Wertpapieren auf Basis der Prospect Theory", Abschnittsüberschrift "Hürden für rationale Entscheidungen recht hoch". Dekoratives, transparent eingeblendetes Hintergrund-Bild (Sportplatz/Fußballtor-Motiv) ohne fachlichen Inhalt; die vier Aussagen jeweils in separaten hellen Kästen/Bullet-Boxen rechts. Keine fachlichen Grafiken.
### Visuelle Rekonstruktion
(keine fachliche Grafik)
### Inhaltliche Rekonstruktion
Hürden für rationale Entscheidungen recht hoch:
- Marktteilnehmer bewerten Ergebnisse anhand eines bestimmten Referenzpunktes.
- Marktteilnehmer sind bestrebt, relative Verluste zu diesem Referenzpunkt zu vermeiden.
- Marktteilnehmer ändern ihre Risikoeinstellung, sobald sie mit Verlusten konfrontiert werden.
- Marktteilnehmer überschätzen die Wahrscheinlichkeit von Ereignissen, die höchst unwahrscheinlich sind.

Quelle: Vgl. Daxhammer/Facsar (2017)
### Fachliche Aussage
Abschließende Synthese: Wegen Referenzpunkt-Bezug, Vermeidung relativer Verluste, wechselnder Risikoeinstellung und Überschätzung unwahrscheinlicher Ereignisse sind die Hürden für rationale Wertpapierentscheidungen hoch.
### React-Vorschlag
ProspectSecuritiesSummary: vier Kern-Statements als gestapelte Info-Karten; abschließende Quellen-note. Eignet sich als KeyTakeaways-Abschluss des Topics.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folien 3 und 4: Allais-DecisionMatrix mit Erwartungswert-Callout
2. Folie 5: FormulaDerivation mit Anomalie-Badge
3. Folie 12: LotteryTreeDiagram (linke Lotterie durchgestrichen)
4. Folie 13: EditingTransformDiagram (Baum → Operationsspalte → Baum)
5. Folie 14: PayoffMatrix (zwei farbcodierte Auszahlungstabellen)
6. Folie 19: PreferenceTable (positive/negative Prospekte, Antworthäufigkeiten)
7. Folie 20: ValueFunctionChart (S-Kurve, Annotationen)
8. Folien 25, 26, 32, 33: Wertfunktions-SVGs (Endowment, Mental Accounting, Sunk Cost, Disposition)
9. Folien 28 und 29: HedonicFramingChart (Sparkline-Varianten)
10. Folie 30: AutokaufFramingTable (vierte Spalte hervorgehoben)
11. Folien 38, 40, 41: Gewichtungsfunktions-Diagramme (RiskAttitude / ProbabilityWeighting)
12. Folie 42: InsuranceWeightingExample (Box-Diagramm)

## Kann vereinfacht werden

- Folien 6, 7: Personen-/Econometrica-Bilder als optionale Thumbnails/Platzhalter
- Folien 8, 9, 11, 17, 18, 21, 22, 23: reine Textfolien als strukturierte BulletLists/Cards mit Inline-Highlights und sauber gesetzten Formeln
- Folien 10, 17: verstümmelte Formel als korrekt gesetzter FormulaBlock V(x,p)=v(x)·π(p)
- Folien 24, 27, 34: Branch-/Flow-Layouts als einfache CSS/SVG-Boxen mit Pfeilen
- Folien 35, 36, 39: Optionsvergleiche und Eigenschaften als Karten/Listen
- Folien 43, 44, 45: dekoratives Sportplatz-Hintergrundbild weglassen, Inhalt als Listen/Karten

## Nicht fachlich relevant

- HBW-Logo
- Kopfzeile und Folientitel-Layout
- Folien-Footer ("Behavioral Finance / CS / Folie XXX")
- Copyright-Zeile ("© 2026 – Hochschule der Bayerischen Wirtschaft")
- Versionskennung "V26-04-23"
- Fotoleiste auf der Titelfolie und dekorative Sportplatz-Hintergrundbilder (Folien 43–45)
- exakte Folienpositionierung

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden, die ausschließlich aus den tatsächlich vorhandenen Skriptinhalten stammen:

```js
// Allais-Paradoxon: beide Entscheidungsprobleme (Folien 3-5)
export const allaisProblems = [
  {
    id: 'problem-1',
    states: [
      { label: 'Zustand 1', p: 0.33 },
      { label: 'Zustand 2', p: 0.66 },
      { label: 'Zustand 3', p: 0.01 },
    ],
    alternatives: [
      { name: 'Alternative A', payoffs: [2500, 2400, 0], expectedValue: 2409 },
      { name: 'Alternative B', payoffs: [2400, 2400, 2400], expectedValue: 2400 },
    ],
    rational: 'A',
    source: 'Kahneman, D., Tversky, A. (1979), S. 265.',
  },
  {
    id: 'problem-2',
    states: [
      { label: 'Zustand 1', p: 0.33 },
      { label: 'Zustand 2', p: 0.66 },
      { label: 'Zustand 3', p: 0.01 },
    ],
    alternatives: [
      { name: 'Alternative C', payoffs: [2500, 0, 0], expectedValue: 825 },
      { name: 'Alternative D', payoffs: [2400, 0, 2400], expectedValue: 816 },
    ],
    rational: 'C',
    source: 'Kahneman, D., Tversky, A. (1979), S. 265.',
  },
]

// Präferenzen bei positiven und negativen Prospekten (Folie 19)
export const prospectPreferences = [
  {
    fall: 'Fall 1',
    positive: [
      { alt: 'A', prospect: '(4.000; 0,8)', share: 0.20 },
      { alt: 'B', prospect: '(3.000)', share: 0.80 },
    ],
    negative: [
      { alt: 'C', prospect: '(-4.000; 0,8)', share: 0.92 },
      { alt: 'D', prospect: '(-3.000)', share: 0.08 },
    ],
  },
  {
    fall: 'Fall 2',
    positive: [
      { alt: 'A', prospect: '(3.000; 0,9)', share: 0.86 },
      { alt: 'B', prospect: '(6.000; 0,45)', share: 0.14 },
    ],
    negative: [
      { alt: 'C', prospect: '(-3.000; 0,9)', share: 0.08 },
      { alt: 'D', prospect: '(-6.000; 0,45)', share: 0.92 },
    ],
  },
]
```

```js
// Editing-Operationen (Folie 11)
export const editingOperations = [
  { name: 'Vereinfachung', desc: 'beispielsweise durch Auf- oder Abrunden' },
  { name: 'Kombination', desc: 'Addition der Wahrscheinlichkeiten identischer Ergebnisse' },
  { name: 'Segregation', desc: 'Trennung sicherer und unsicherer Konsequenzen' },
  { name: 'Kodierung', desc: 'Festlegung eines Referenzpunkts (z.B. Einstiegskurs bei WP-Kauf)' },
  { name: 'Cancellation', desc: 'sehr unwahrscheinliche Folgen werden ignoriert; identische Bestandteile beim Vergleich zweier Alternativen bleiben unberücksichtigt' },
]

// Hedonic-Framing-Regeln (Folie 27)
export const hedonicFramingRules = [
  'Gewinne werden eher getrennt (segregiert)',
  'Verluste werden integriert',
  'kleine Verluste werden mit größeren Gewinnen integriert',
  'kleine Gewinne werden von großen Verlusten getrennt',
]

// Autokauf-Framing: Gesamtpreis in allen Bündelungsvarianten gleich (Folie 30)
export const autokaufFraming = {
  varianten: [
    'Preisentbündelung, Rabatt-Bündelung',
    'Preisbündelung, Rabattbündelung',
    'Preisentbündelung, Rabattentbündelung',
    'Preisbündelung, Rabattentbündelung',
  ],
  posten: {
    Grundmodell: 30000,
    Klimaanlage: 3000,
    Radio: 2000,
    rabatte: { Grundmodell: -1500, Klimaanlage: -150, Radio: -100, gesamt: -1750 },
    total: 35000,
  },
  gesamtpreis: 33250, // identisch in allen vier Varianten
}

// Gewichtungsfunktion: Optionsvergleiche (Folien 35-36)
export const weightingOptions = [
  { id: 'AB', a: { p: 0.45, gewinn: 6000 }, b: { p: 0.90, gewinn: 3000 }, mehrheit: 'B' },
  { id: 'CD', c: { p: 0.01, gewinn: 6000 }, d: { p: 0.02, gewinn: 3000 }, mehrheit: 'C', share: 0.73 },
]
```
