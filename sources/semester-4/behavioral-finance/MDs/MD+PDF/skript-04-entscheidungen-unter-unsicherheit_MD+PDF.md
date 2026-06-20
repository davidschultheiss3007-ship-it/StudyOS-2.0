# skript-04-entscheidungen-unter-unsicherheit_MD+PDF - Entscheidungen unter Unsicherheit: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die Markitdown-Datei `skript-04-entscheidungen-unter-unsicherheit.md` um die bei der Extraktion aus `skript-04-entscheidungen-unter-unsicherheit.pdf` verloren gegangenen visuellen Inhalte (Diagramme, Formeln, Tabellen, Schaubilder). Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Baumdiagramme, Ergebnismatrizen, Mathesatz-Formeln, Entscheidungsbäume und Nutzenfunktions-Diagramme verloren gehen.

**Quelle:** `skript-04-entscheidungen-unter-unsicherheit.pdf` mit 34 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die blaue Kopfzeile, der Folien-Footer (`Behavioral Finance / CS / Folie XXX`) und der Copyright-Hinweis (`© 2026 – Hochschule der Bayerischen Wirtschaft`) sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** Zahlreiche Folien (Informationsbezug, Entscheidungsprozesse, Ergebnismatrizen, Entscheidungsregeln, Bayes-Tabelle, Vergleichstabelle) sind in der MD durch das PDF-Tabellenlayout zerbrochen. Diese sind in React als echte HTML-Tabellen mit gruppiertem Kopf, Farbcodierung und `.table-wrap` neu aufzubauen.
2. **Mathesatz-Formeln korrekt rekonstruieren:** Erwartungswert, Standardabweichung, Bayes-Regel, Bernoulli-Prinzip, Sicherheitsäquivalent, Risikoprämie und Erwartungsnutzenhypothese sind in der MD verstümmelt oder fehlen. Sie sind via KaTeX/MathML als zentrierte Formelkacheln neu zu setzen (Summenzeichen, Wurzel, Indizes, Exponenten).
3. **Hochgestellte Exponenten erhalten:** Bei der Krelle-Regel sind MD-Werte wie "50,5" oder "70,5" falsch; sie stehen für Potenzschreibweise (5^0,5, 7^0,5 = Wurzelfunktion) und müssen mit `<sup>` korrekt gesetzt werden.
4. **Indizes erhalten:** Doppelindizes der Ergebnismatrix (X_ij), Zustandsindizes (z1…zn), Wahrscheinlichkeiten (p1…pn) und Alternativen (a_i) sind via `<sub>` zu setzen, nicht als flacher Text.
5. **Baum- und Flussdiagramme semantisch nachbauen:** Klassifikationsbaum (Erwartungsstrukturen), Entscheidungs-Flussdiagramm mit Feedback-Schleife und die Entscheidungsbäume (Bernoulli, Lotterie) tragen fachliche Bedeutung und sind als CSS-/SVG-Diagramme umzusetzen, nicht als Fließtext.
6. **Entscheidungsregeln als wiederverwendbare Komponente:** Maximax, Maximin, Hurwicz, Laplace, Krelle und Savage-Niehans arbeiten alle auf derselben Beispielmatrix (Folie 10). Sie sind über eine konfigurierbare `DecisionRuleCard` mit `rule`-Prop abzubilden; der Gewinner wird hervorgehoben, die Präferenzordnung als `<sub>`-Formel gesetzt.
7. **Farbcodierung als Akzent übernehmen:** Grün = Sicherheit/sichere Anlage, Blau = Unsicherheit/Risiko, Dunkelblau = Hervorhebung, Orange = spekulative Anlage/Gewinner-Markierung. Diese Logik über Modul-Akzentfarben umsetzen, keine Hardcodes.
8. **Nutzenfunktions-Diagramme als SVG:** Konkave/lineare/konvexe Nutzenkurve mit roter Sehne (Risikoaversion/-neutralität/-freude) und Hilfslinien sind als SVG zu rekonstruieren.
9. **Quiz-Folien als interaktive Fragen:** Die Münzwette und die 10.000-Euro-Wette passen zur Quiz-Question-Shape des Projekts und sind als `QuizPrompt` umzusetzen.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Kapitelnummer + Titel; Fotoband nur als dekorative Akzentleiste |
| `AgendaList` | 2 | Agenda mit hervorgehobenem aktivem Punkt |
| `ClassificationTree` | 3 | Hierarchisches Baumdiagramm der Erwartungsstrukturen |
| `DefinitionBlocks` | 4 | Drei Definitionsblöcke mit Pfeil-Konsequenzen |
| `InfoMatrixTable` | 5 | Informationsbezug-Tabelle mit gruppiertem Kopf |
| `TermCalloutList` | 6 | Begriffsliste mit Callout-Bubbles, Formel Z=(z1,…,zn) |
| `DecisionProcessTable` | 7 | Entscheidungsprozesse-Tabelle (vier Ebenen) |
| `DecisionFlowDiagram` | 8 | Entscheidungsmodell als Flussdiagramm mit Feedback |
| `ResultMatrixTable` | 9 | Allgemeine Ergebnismatrix mit Doppelindex |
| `DecisionMatrixExample` | 10 | Beispiel-Ergebnismatrix als Basisdatensatz |
| `DecisionRuleCard` | 11-16 | Wiederverwendbare Entscheidungsregel-Karte (rule-Prop) |
| `ProbabilityMatrixTable` | 17 | Ergebnismatrix mit Eintrittswahrscheinlichkeiten |
| `FormulaCallout` | 18-19 | Zentrierte Formelkacheln (Erwartungswert, Standardabweichung) |
| `DecisionMatrixTable` | 20 | Bayes-Matrix mit μ-Spalte und ausgeschriebener Rechnung |
| `KeyPointsList` | 21, 29 | Bullet-Liste (Kritik / Risikoaversion) |
| `RuleExplainer` | 22 | μσ-Regel mit Präferenzfunktion und Tags |
| `EfficiencyFrontierChart` | 23 | μ-σ-Streudiagramm mit Dominanzpfeil + Datentabelle |
| `PrincipleCard` | 24 | Bernoulli-Prinzip mit Präferenz-Formel |
| `DecisionTree` | 25 | Farbcodierter Entscheidungsbaum + Nutzenrechnung |
| `DefinitionFormulaList` | 26 | Definitionsblöcke mit Formelkacheln |
| `RiskPremiumExample` | 27 | Merkbox, Lotterie-Baum, Fallunterscheidung |
| `ConceptWithImage` | 28 | Bullet-Liste + dekoratives Buchcover |
| `QuizPrompt` | 30-31 | Interaktive Single-Choice-/Akzeptanzfragen |
| `FormulaList` | 32 | Zwei Formelkacheln (Erwartungsnutzen / Risikoprämie) |
| `UtilityFunctionChart` | 33 | Konkave Nutzenkurve mit roter Sehne + Formelliste |
| `RiskAttitudeComparison` | 34 | Drei Nutzenkurven als Spaltenköpfe einer Vergleichstabelle |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 4: Entscheidungen unter Unsicherheit (Titelfolie)
### In der MD vorhanden
Zeilen 1-5: "Behavioral Finance", "Kapitel 4", "Entscheidungen unter Unsicherheit", "V26-04-13", Fußzeile "Folie 131".
### Fehlende visuelle Inhalte
Titelfolie im HBW-Layout. Oben links Schriftzug "Behavioral Finance". Darunter ein horizontaler Streifen mit vier nebeneinanderliegenden Fotos (Bildband): (1) ein Tablet/Display, auf dem das HBW-Logo zu sehen ist, gehalten von einer Hand, (2) eine laechelnde junge Frau, (3) zwei Personen im Gespraech, (4) ein modernes Gebaeude. Darunter linksbuendig der Kapiteltitel ueber zwei Zeilen: "Kapitel 4" / "Entscheidungen unter Unsicherheit". Rechts oben das HBW-Logo. Unten rechts die Versionskennung "V26-04-13"; Fusszeile links "Behavioral Finance / CS / Folie 131", rechts "© 2026 - Hochschule der Bayerischen Wirtschaft".
### Visuelle Rekonstruktion
[Foto1: Tablet/HBW] [Foto2: Frau] [Foto3: Gespraech] [Foto4: Gebaeude]
   Kapitel 4
   Entscheidungen unter Unsicherheit
### Inhaltliche Rekonstruktion
Kapiteltitel: Kapitel 4 - Entscheidungen unter Unsicherheit.
### Fachliche Aussage
Reine Titel-/Kapiteleinstiegsfolie ohne Fachinhalt; markiert den Beginn von Kapitel 4.
### React-Vorschlag
ChapterTitleSlide - Kapitelnummer + Titel; Fotoband nicht nachbauen, nur als dekorativer Platzhalter/Akzentleiste andeuten.

## Folie 2 - Agenda
### In der MD vorhanden
Zeilen 7-17: vollstaendige Agenda mit allen 10 Punkten korrekt extrahiert.
### Fehlende visuelle Inhalte
Nummerierte Liste (1.-10.). Punkt 4 "Entscheidungen unter Unsicherheit" ist farblich hervorgehoben (blau, fett) als aktuelles Kapitel; alle anderen Punkte schwarz. Rechts oben HBW-Logo, darunter der blaue Kopfstreifen. Fusszeile "Behavioral Finance / CS / Folie 132".
### Visuelle Rekonstruktion
1. Einfuehrung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit   <- AKTIV (blau, fett)
5. Die Rolle der Zeit in der Oekonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Altersvorsorge und private Finanzplanung
8. Spekulationsblasen an Finanzmaerkten
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance
### Inhaltliche Rekonstruktion
Gliederung der Vorlesung; das vorliegende Kapitel ist Punkt 4.
### Fachliche Aussage
Verortet das aktuelle Kapitel (Entscheidungen unter Unsicherheit) im Gesamtaufbau der Vorlesung.
### React-Vorschlag
AgendaList - Liste mit `activeIndex`, aktiver Punkt via Modul-Akzentfarbe hervorgehoben.

## Folie 3 - Moegliche Erwartungsstrukturen (Baumdiagramm)
### In der MD problematisch/fehlend
Zeilen 20-23 enthalten nur die isolierten Knotenbeschriftungen ("Sicherheit Unsicherheit", "Ungewissheit Risiko i.e.S."); die Baumstruktur und die Hierarchie sind verloren.
### Fehlende visuelle Inhalte
Ein zweistufiges Baumdiagramm aus rechteckigen Kaesten, verbunden durch rechtwinklige SCHWARZE Verbindungslinien mit nach unten zeigenden Pfeilspitzen.
- Wurzelknoten (oben, hellblau): "Moegliche Erwartungsstrukturen".
- Ebene 2: links "Sicherheit" (gruener Kasten), rechts "Unsicherheit" (hellblauer Kasten).
- Ebene 3 (unter "Unsicherheit"): links "Ungewissheit" (hellblau), rechts "Risiko i.e.S." (dunkelblauer Kasten mit weisser Schrift - hervorgehoben).
Vom Wurzelknoten gehen Pfeile nach unten zu "Sicherheit" und "Unsicherheit"; von "Unsicherheit" weitere Pfeile nach unten zu "Ungewissheit" und "Risiko i.e.S.". "Sicherheit" hat keine Unterknoten.
### Visuelle Rekonstruktion
              [Moegliche Erwartungsstrukturen]
                 |                        |
            [Sicherheit]            [Unsicherheit]
            (gruen)                 |            |
                              [Ungewissheit]  [Risiko i.e.S.]
                                              (dunkelblau, weisse Schrift, betont)
### Inhaltliche Rekonstruktion
Erwartungsstrukturen gliedern sich in: Sicherheit | Unsicherheit -> (Ungewissheit | Risiko i.e.S.).
### Fachliche Aussage
Klassifiziert Entscheidungssituationen: Sicherheit vs. Unsicherheit, wobei Unsicherheit weiter in Ungewissheit und Risiko i.e.S. zerfaellt.
### React-Vorschlag
ClassificationTree - kleines hierarchisches Baumdiagramm (CSS-Boxen + Konnektoren); Farbcodierung gruen/hellblau/dunkelblau zur Hervorhebung.

## Folie 4 - Moegliche Erwartungsstrukturen (Definitionen)
### In der MD vorhanden
Zeilen 26-39: Inhalt vollstaendig und gut lesbar vorhanden (Unsicherheit/Risiko i.w.S., Ungewissheit, Risiko i.e.S.).
### Fehlende visuelle Inhalte
Reine Textfolie mit drei farblich hervorgehobenen Ueberschriften (blau, fett): "Unsicherheit (Risiko i.w.S.)", "Ungewissheit", "Risiko i.e.S.". Aufzaehlungspunkte mit Quadrat-Bullets. Hervorgehobene Schluesselbegriffe fett (Unsicherheit, Inflexibilitaet); blaue, fett gesetzte Pfeil-Verweise "-> Einsatz von Heuristiken" und "-> stochastische Modelle / Entscheidungstheorie". Keine Grafik.
### Inhaltliche Rekonstruktion
Unsicherheit (Risiko i.w.S.): Mehrwertige Erwartungen ueber die Umweltzustaende. Das "Risiko" einer Entscheidung beruht somit auf zwei Komponenten: der Unsicherheit ueber die kuenftige Entwicklung (Konsequenzen) und der Inflexibilitaet von Entscheidungen.
Ungewissheit: Entscheider hat nur Informationen ueber die Zahl der moeglichen Umweltzustaende, aber keine ueber deren Eintrittswahrscheinlichkeiten; rationale Entscheidung wird unmoeglich -> Einsatz von Heuristiken.
Risiko i.e.S.: dem Entscheider liegen neben allen moeglichen Umweltzustaenden auch objektive oder subjektive Wahrscheinlichkeiten vor -> stochastische Modelle / Entscheidungstheorie.
### Fachliche Aussage
Definiert die drei Begriffe praezise und zeigt: Bei Ungewissheit helfen Heuristiken, bei Risiko i.e.S. greifen stochastische Entscheidungsmodelle.
### React-Vorschlag
DefinitionBlocks - drei Definitionsbloecke mit farbiger Ueberschrift und Bullet-Liste; Pfeil-Konsequenzen als hervorgehobene Inline-Hinweise.

## Folie 5 - Informationsbezug (Tabelle)
### In der MD problematisch/fehlend
Zeilen 42-54: Text ist durch das Tabellenlayout stark zerbrochen und durcheinandergewuerfelt ("Vollkommene / Unvollkommene Information / Information"); die Spaltenzuordnung ist verloren.
### Fehlende visuelle Inhalte
Eine farbcodierte 3-Spalten-Tabelle mit Gruppenkopf.
- Erste (oberste) Kopfzeile: links eine Zelle "Vollkommene Information" (gruen, weisse fette Schrift), rechts eine ueber zwei Spalten gespannte Zelle "Unvollkommene Information" (blau, weisse fette Schrift).
- Zweite Kopfzeile (3 Zellen): "Entscheidungen bei sicheren Erwartungen" (hellgruen) | "Entscheidungen unter Risiko" (hellblau) | "Entscheidungen bei unsicheren Erwartungen" (hellblau) - jeweils schwarze fette Schrift.
- Inhaltszeile mit Quadrat-Bullets.
Hervorgehobene Schluesselwoerter blau (fett): "vollstaendig", "bekannt", "unbekannt".
### Visuelle Rekonstruktion
| Vollkommene Information | Unvollkommene Information (ueber 2 Spalten)        |
|-------------------------|---------------------------|------------------------|
| Entsch. bei sicheren    | Entscheidungen unter      | Entsch. bei unsicheren |
| Erwartungen             | Risiko                    | Erwartungen            |
| - Konsequenzen des      | - Konsequenzen sind       | - Konsequenzen sind    |
|   Handelns vollstaendig |   unbestimmt              |   unbestimmt           |
|   bekannt               | - Eintrittswahrschein-    | - Eintrittswahrschein- |
|                         |   lichkeiten bekannt      |   lichkeiten unbekannt |
### Inhaltliche Rekonstruktion
Vollkommene Information = Entscheidungen bei sicheren Erwartungen: Konsequenzen des Handelns vollstaendig bekannt.
Unvollkommene Information, Fall Risiko: Konsequenzen unbestimmt, Eintrittswahrscheinlichkeiten bekannt.
Unvollkommene Information, Fall unsichere Erwartungen: Konsequenzen unbestimmt, Eintrittswahrscheinlichkeiten unbekannt.
### Fachliche Aussage
Ordnet die Entscheidungssituationen dem Informationsstand zu: vollkommene Information = Sicherheit; unvollkommene Information unterscheidet Risiko (Wahrscheinlichkeiten bekannt) von unsicheren Erwartungen/Ungewissheit (unbekannt).
### React-Vorschlag
InfoMatrixTable - HTML-Tabelle mit gruppiertem Kopf (colspan) und Modul-Farbcodierung gruen/blau; in `.table-wrap` fuer Mobile-Scroll.

## Folie 6 - Risiko versus Ungewissheit
### In der MD problematisch/fehlend
Zeilen 57-69: Inhalt vorhanden, aber die Zuordnung der Begriffe (Ungewissheit/Risiko/Sicherheit) zu ihren Erklaerungen ist durch das Sprechblasen-Layout zerbrochen; Z = (z1,z2,...,zn) durch Indizes zerstoeckelt.
### Fehlende visuelle Inhalte
Blaue, fette Ueberschrift "Risiko versus Ungewissheit". Darunter zwei Bullets: "Modellierung einer unsicheren Welt durch den Zustandsraum Z:" und die Formel "Z = (z1, z2, ..., zn)" (Indizes tiefgestellt). Es folgt die Zeile "Unterscheidung zwischen:".
Linke Spalte: drei fettgedruckte Begriffe untereinander mit Quadrat-Bullets: "Ungewissheit", "Risiko", "Sicherheit". Jeweils rechts daneben eine abgerundete hellblaue Sprechblase (mit Sprechblasen-Spitze nach links) mit blauem, fettem Erklaerungstext, der per Spitze auf den jeweiligen Begriff zeigt.
### Visuelle Rekonstruktion
Modellierung einer unsicheren Welt durch den Zustandsraum Z:
Z = (z1, z2, ..., zn)

Unterscheidung zwischen:

Ungewissheit ----( Nur Kenntnis der moeglichen Zustaende )
Risiko       ----( Kenntnis der moeglichen Zustaende und ihrer Eintrittswahrscheinlichkeiten )
Sicherheit   ----( Eintritt eines bestimmten Zustandes bekannt )
### Inhaltliche Rekonstruktion
Modellierung einer unsicheren Welt durch den Zustandsraum Z = (z1, z2, ..., zn). Unterscheidung zwischen:
- Ungewissheit: nur Kenntnis der moeglichen Zustaende.
- Risiko: Kenntnis der moeglichen Zustaende und ihrer Eintrittswahrscheinlichkeiten.
- Sicherheit: Eintritt eines bestimmten Zustandes bekannt.
### Fachliche Aussage
Praezisiert die drei Informationszustaende ueber den Zustandsraum Z und grenzt Ungewissheit, Risiko und Sicherheit nach dem Wissen ueber Zustaende/Wahrscheinlichkeiten ab.
### React-Vorschlag
TermCalloutList - linke Begriffsliste, rechts Callout-Bubbles (CSS-Speech-Bubble); Formel Z=(z1,...,zn) mit `<sub>`.

## Folie 7 - Entscheidungsprozesse (Tabelle)
### In der MD problematisch/fehlend
Zeilen 72-92: Tabelle stark fragmentiert; Zeilenbeschriftungen ("Verfassen eines Artikels", "Anforderung an die Aufmerksamkeit", "Generierung neuer Informationen") sind aus den Zellen herausgerutscht.
### Fehlende visuelle Inhalte
Blaue, fette Ueberschrift "Entscheidungsprozesse". Darunter eine 5-Spalten-Tabelle (1 Beschriftungsspalte + 4 Wertespalten). Dunkelblaue Kopf-/Beschriftungszellen (weisse fette Schrift), hellblaue/graue Inhaltszellen abwechselnd. Spaltenkoepfe sind die Ebenen, Zeilen die Merkmale.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
| Ebene                          | Routiniert | Stereotyp        | Reflektiert  | Konstruktiv          |
|--------------------------------|------------|------------------|--------------|----------------------|
| Beispiel                       | Autofahren | Fliessbandarbeit | Pruefung     | Verfassen eines Artikels |
| Bewusstsein                    | Nein       | Gering           | Hoch         | Hoch                 |
| Anforderung an die Aufmerksamkeit | Sehr gering | Gering        | Hoch         | Sehr hoch            |
| Generierung neuer Informationen   | Nein     | Nein             | Ja           | Ja                   |
| Zeitdauer                      | Schnell    | Schnell          | Schnell-lange| Schnell-lange        |
| Vorstrukturiertheit            | Sehr hoch  | Hoch             | Hoch-mittel  | Gering               |
### Fachliche Aussage
Typologisiert Entscheidungsprozesse nach vier Ebenen (routiniert, stereotyp, reflektiert, konstruktiv) anhand von Bewusstsein, Aufmerksamkeit, Informationsgenerierung, Zeitdauer und Vorstrukturiertheit.
### React-Vorschlag
DecisionProcessTable - HTML-Tabelle mit dunkelblauer Kopfzeile/Beschriftungsspalte; in `.table-wrap`.

## Folie 8 - Modellierung von Entscheidungen (Flussdiagramm)
### In der MD problematisch/fehlend
Zeilen 95-104: nur die isolierten Kasten-Beschriftungen vorhanden ("Handlungsalternativen", "Informationen fuer den Zustandsraum", "Entscheidungsregeln (Kriterien)", "Entscheidung", "Ergebnis (Konsequenz)"); Pfeile/Fluss verloren.
### Fehlende visuelle Inhalte
Flussdiagramm mit abgerundeten Kaesten und blauen Pfeilen.
- Drei Inputkaesten oben: links "Entscheidungsregeln (Kriterien)" (hellgrau, schwarze Schrift), Mitte "Handlungs-alternativen" (hellgrau, schwarze Schrift), rechts "Informationen fuer den Zustandsraum" (hellgrau, schwarze Schrift).
- Von jedem der drei Inputkaesten fuehrt ein Pfeil nach unten/innen auf den zentralen Kasten "Entscheidung" (hellblau, schwarze fette Schrift).
- Von "Entscheidung" ein Pfeil senkrecht nach unten auf "Ergebnis (Konsequenz)" (hellblau, blaue fette Schrift).
- Eine Rueckkopplungslinie (blau) fuehrt von "Ergebnis (Konsequenz)" nach rechts und dann senkrecht hoch zurueck mit Pfeilspitze in den Kasten "Informationen fuer den Zustandsraum" (Feedback-Schleife).
### Visuelle Rekonstruktion
[Entscheidungsregeln]   [Handlungs-      ]   [Informationen fuer den]
[(Kriterien)        ]   [alternativen    ]   [Zustandsraum          ]
        \                    |                    /        ^
         \                   v                   /         |
          ------------>  [ ENTSCHEIDUNG ]  <-----          |
                              |                            |
                              v                            |
                       [ Ergebnis (Konsequenz) ] ----------+
### Inhaltliche Rekonstruktion
Inputs (Entscheidungsregeln/Kriterien, Handlungsalternativen, Informationen fuer den Zustandsraum) -> Entscheidung -> Ergebnis (Konsequenz); das Ergebnis fliesst als Information in den Zustandsraum zurueck.
### Fachliche Aussage
Stellt das Grundmodell einer Entscheidung dar: Aus Alternativen, Zustandsinformationen und Entscheidungsregeln entsteht eine Entscheidung mit einem Ergebnis, das wiederum Information liefert (Rueckkopplung).
### React-Vorschlag
DecisionFlowDiagram - Flussdiagramm aus CSS-Boxen mit Pfeilen und einer Feedback-Linie; mobil ggf. vertikal stapeln.

## Folie 9 - Entscheidungssituationen in der Ergebnismatrix (allgemein)
### In der MD problematisch/fehlend
Zeilen 107-134: Matrix komplett zerbrochen; die Indizes (x11, x12, ...) sind in separate Zeilen gerutscht, die vertikale Achsenbeschriftung erscheint als Kauderwelsch ("a nevitanretlasgnuldnaH" = gespiegeltes "Handlungsalternativen a").
### Fehlende visuelle Inhalte
Blaue, fette Ueberschrift "Ergebnismatrix". Darunter die allgemeine Ergebnismatrix als Tabelle. Zentriert ueber der Tabelle die Spaltenueberschrift "Umweltzustaende z" (fett). Vertikal an der linken Seite (90 Grad gedreht): "Handlungsalternativen a". Kopfzeile (dunkelblau, weisse Schrift): leere Eckzelle, dann Zustand 1-4. Zeilen: Alternative 1-6 (dunkelblaue Beschriftungszellen). Datenzellen (hellblau) enthalten die Symbole X mit Doppelindex (X_ij), wobei i = Alternative (Zeile), j = Zustand (Spalte). Unter der Tabelle Legende.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
                       Umweltzustaende z
                 | Zustand 1 | Zustand 2 | Zustand 3 | Zustand 4 |
Alternative 1    |  X11      |  X12      |  X13      |  X14      |
Alternative 2    |  X21      |  X22      |  X23      |  X24      |
Alternative 3    |  X31      |  X32      |  X33      |  X34      |
Alternative 4    |  X41      |  X42      |  X43      |  X44      |
Alternative 5    |  X51      |  X52      |  X53      |  X54      |
Alternative 6    |  X61      |  X62      |  X63      |  X64      |
Legende (woertlich): X_ij : Ergebnis (Konsequenz) der Handlungsalternative a_i bei Eintreten (Ereignis) des Zustands z_j.
### Fachliche Aussage
Fuehrt die Ergebnismatrix als formales Schema ein: jede Zelle X_ij ist das Ergebnis von Alternative i im Zustand j.
### React-Vorschlag
ResultMatrixTable - Tabelle mit Doppelindex-Notation (`<sub>`), vertikaler Achsenbeschriftung links (CSS rotate), Legende darunter.

## Folie 10 - Entscheidungsregeln I (Zahlenbeispiel)
### In der MD vorhanden
Zeilen 137-148: Tabelle mit konkreten Werten korrekt extrahiert; Achsenbeschriftung gespiegelt.
### Fehlende visuelle Inhalte
Schwarze Titelzeile "Entscheidungsregeln I". Einleitungsfrage als Bullet: "Nach welcher Entscheidungsregel ist welche Alternative auszuwaehlen?". Darunter dieselbe Matrix wie Folie 9, jetzt mit konkreten Ergebniswerten gefuellt. Zentrierte Ueberschrift "Umweltzustaende z", vertikale Achsenbeschriftung links "Handlungsalternativen a". Dunkelblaue Koepfe (weisse Schrift), hellblaue Datenzellen.
### Inhaltliche Rekonstruktion
                  Umweltzustaende z
              | Zustand 1 | Zustand 2 | Zustand 3 | Zustand 4 |
Alternative 1 |    5      |    7      |    20     |    13     |
Alternative 2 |    9      |    1      |    21     |    16     |
Alternative 3 |   10      |    7      |    11     |    5      |
Alternative 4 |    3      |    9      |    18     |    4      |
Alternative 5 |    6      |    7      |    12     |    15     |
Alternative 6 |   11      |    2      |    8      |    17     |
### Fachliche Aussage
Liefert die Beispiel-Ergebnismatrix, die in den folgenden Folien mit verschiedenen Entscheidungsregeln (Maximax, Maximin, Hurwicz, Laplace, Krelle, Savage-Niehans) ausgewertet wird.
### React-Vorschlag
DecisionMatrixExample - dieselbe ResultMatrixTable, hier mit den konkreten Zahlen als Basisdatensatz, der von Folge-Komponenten wiederverwendet wird.

## Folie 11 - Entscheidungsregeln: Maximax-Regel
### In der MD problematisch/fehlend
Zeilen 151-167: Werte vorhanden, aber Spaltenausrichtung verschoben; die Praeferenzordnung (Zeilen 165-167) ist als unleserlicher Symbolsalat extrahiert.
### Fehlende visuelle Inhalte
Zweizeilige schwarze Titelzeile "Entscheidungsregeln" / "Maximax-Regel"; im Folienkoerper blaue fette Ueberschrift "Maximax-Regel". Beispielmatrix (wie Folie 10) mit zusaetzlicher rechter Spalte "Maximax" (= bestes Ergebnis je Zeile, fett). Der Wert 21 (Alternative 2) ist mit einer orangefarbenen Ellipse als Gewinner umrandet. Unter der Tabelle ein Bullet "Entscheidungsregel: ..." und darunter zentriert die Praeferenzordnung als Formel.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
              | Z1 | Z2 | Z3 | Z4 | Maximax |
Alternative 1 |  5 |  7 | 20 | 13 |   20    |
Alternative 2 |  9 |  1 | 21 | 16 |  (21)   <- umrandet (Gewinner)
Alternative 3 | 10 |  7 | 11 |  5 |   11    |
Alternative 4 |  3 |  9 | 18 |  4 |   18    |
Alternative 5 |  6 |  7 | 12 | 15 |   15    |
Alternative 6 | 11 |  2 |  8 | 17 |   17    |
Praeferenzordnung: a2 > a1 > a4 > a6 > a5 > a3
### Fachliche Aussage
Maximax-Regel: Wahl der Alternative, bei der das bestmoegliche Ergebnis am hoechsten ist (= extrem optimistische Grundeinstellung) -> hier Alternative 2 (21).
### React-Vorschlag
DecisionRuleCard - Matrix + berechnete Ergebnisspalte; Gewinnerzeile hervorgehoben; Praeferenzkette als `<sub>`-Formel. Wiederverwendbar fuer alle Regeln per `rule`-Prop.

## Folie 12 - Entscheidungsregeln: Maximin-Regel
### In der MD problematisch/fehlend
Zeilen 170-186: Werte vorhanden; Praeferenzordnung als Symbolsalat extrahiert.
### Fehlende visuelle Inhalte
Zweizeilige schwarze Titelzeile "Entscheidungsregeln" / "Maximin-Regel"; im Koerper blaue Ueberschrift "Maximin-Regel" mit dem (helleren) Zusatz "(auch MiniMax- oder Wald-Regel genannt)". Beispielmatrix mit rechter Spalte, die auf der Folie woertlich "Minimax" beschriftet ist (= schlechtestes Ergebnis je Zeile, fett). Der Wert 6 (Alternative 5) ist mit oranger Ellipse als Gewinner umrandet.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
              | Z1 | Z2 | Z3 | Z4 | Minimax |
Alternative 1 |  5 |  7 | 20 | 13 |    5    |
Alternative 2 |  9 |  1 | 21 | 16 |    1    |
Alternative 3 | 10 |  7 | 11 |  5 |    5    |
Alternative 4 |  3 |  9 | 18 |  4 |    3    |
Alternative 5 |  6 |  7 | 12 | 15 |   (6)   <- umrandet (Gewinner)
Alternative 6 | 11 |  2 |  8 | 17 |    2    |
Praeferenzordnung: a5 > a1 ~ a3 > a4 > a6 > a2
### Fachliche Aussage
Maximin-Regel (auch MiniMax-/Wald-Regel): Wahl der Alternative, bei der das schlechtestmoegliche Ergebnis am hoechsten ist (= extrem pessimistische Grundeinstellung) -> hier Alternative 5 (6).
### React-Vorschlag
DecisionRuleCard (rule="maximin") - Spalte zeigt das Zeilenminimum, Gewinner = hoechstes Minimum.

## Folie 13 - Entscheidungsregeln: Hurwicz-Kriterium
### In der MD problematisch/fehlend
Zeilen 189-207: Werte und Erklaerung vorhanden; Praeferenzordnung als Symbolsalat extrahiert.
### Fehlende visuelle Inhalte
Zweizeilige schwarze Titelzeile "Entscheidungsregeln" / "Hurwicz-Kriterium"; im Koerper blaue Ueberschrift "Hurwicz-Kriterium". Beispielmatrix mit rechter Spalte "Hurwicz" (gewichteter Wert, eine Nachkommastelle, fett). Der Wert 9,5 (Alternative 1) ist mit oranger Ellipse als Gewinner umrandet. Erklaertext (Bullet) nennt die Gewichtung: bestes Ergebnis mit dem Optimismusparameter (im Beispiel 0,3), schlechtestes mit 0,7.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
              | Z1 | Z2 | Z3 | Z4 | Hurwicz |
Alternative 1 |  5 |  7 | 20 | 13 |  (9,5)  <- umrandet (Gewinner)
Alternative 2 |  9 |  1 | 21 | 16 |   7,0   |
Alternative 3 | 10 |  7 | 11 |  5 |   6,8   |
Alternative 4 |  3 |  9 | 18 |  4 |   7,5   |
Alternative 5 |  6 |  7 | 12 | 15 |   8,7   |
Alternative 6 | 11 |  2 |  8 | 17 |   6,5   |
Praeferenzordnung: a1 > a5 > a4 > a2 > a3 > a6
Berechnung (Bsp. A1): 0,3*20 + 0,7*5 = 6 + 3,5 = 9,5.
### Fachliche Aussage
Hurwicz-Kriterium: gewichtete Summe aus bestem Ergebnis (Gewicht = Optimismusparameter, im Beispiel 0,3) und schlechtestem Ergebnis (Gewicht 0,7); Kompromiss zwischen Maximax und Maximin -> hier Alternative 1 (9,5).
### React-Vorschlag
DecisionRuleCard (rule="hurwicz") - Optimismusparameter als konfigurierbarer Prop (Default 0,3); Anzeige der gewichteten Werte und der Praeferenzkette.

## Folie 14 - Entscheidungsregeln: Laplace-Regel
### In der MD problematisch/fehlend
Zeilen 210-230: Werte und Erklaerung vorhanden; Praeferenzordnung als Symbolsalat.
### Fehlende visuelle Inhalte
Zweizeilige schwarze Titelzeile "Entscheidungsregeln" / "Laplace-Regel"; im Koerper blaue Ueberschrift "Laplace-Regel". Beispielmatrix mit rechter Spalte "Laplace" (Durchschnitt je Zeile, zwei Nachkommastellen, fett). Der Wert 11,75 (Alternative 2) ist mit oranger Ellipse als Gewinner umrandet. Zwei Erklaer-Bullets (Entscheidungsregel + Prinzip des unzureichenden Grundes).
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
              | Z1 | Z2 | Z3 | Z4 | Laplace |
Alternative 1 |  5 |  7 | 20 | 13 |  11,25  |
Alternative 2 |  9 |  1 | 21 | 16 | (11,75) <- umrandet (Gewinner)
Alternative 3 | 10 |  7 | 11 |  5 |   8,25  |
Alternative 4 |  3 |  9 | 18 |  4 |   8,50  |
Alternative 5 |  6 |  7 | 12 | 15 |  10,00  |
Alternative 6 | 11 |  2 |  8 | 17 |   9,50  |
Praeferenzordnung: a2 > a1 > a5 > a6 > a4 > a3
### Fachliche Aussage
Laplace-Regel: Wahl der Alternative mit dem hoechsten durchschnittlichen Ergebnis; basiert auf dem Prinzip des unzureichenden Grundes (alle moeglichen Ereignisse gleich gewichtet mit 1/Z) -> die Situation der Unsicherheit wird damit in eine Risikosituation ueberfuehrt. Gewinner: Alternative 2 (11,75).
### React-Vorschlag
DecisionRuleCard (rule="laplace") - Spalte = arithmetisches Mittel der Zeilen; Hinweistext zum Prinzip des unzureichenden Grundes.

## Folie 15 - Entscheidungsregeln: Krelle-Regel
### In der MD problematisch/fehlend
Zeilen 233-250: Die Zellwerte sind FALSCH extrahiert (z.B. "50,5", "70,5") - tatsaechlich handelt es sich um Potenzschreibweise mit hochgestelltem Exponenten 0,5 (5^0,5, 7^0,5 usw., d.h. Wurzelfunktion); die hochgestellten Exponenten gingen verloren. Praeferenzordnung als Symbolsalat.
### Fehlende visuelle Inhalte
Zweizeilige schwarze Titelzeile "Entscheidungsregeln" / "Krelle-Regel"; im Koerper blaue Ueberschrift "Krelle-Regel". Beispielmatrix, in der jede Zelle als transformierter Wert in Potenzschreibweise dargestellt ist: der Originalwert mit hochgestelltem Exponenten 0,5, z.B. 5^0,5, 7^0,5, 20^0,5, 13^0,5. Rechte Spalte "Krelle" = Summe der transformierten Werte (zwei Nachkommastellen, fett). Der Wert 12,96 (Alternative 1) ist mit oranger Ellipse als Gewinner umrandet. Im Erklaer-Bullet ist "Transformation" fett hervorgehoben.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
              | Z1   | Z2   | Z3    | Z4    | Krelle |
Alternative 1 | 5^0,5| 7^0,5|20^0,5 |13^0,5 | (12,96) <- Gewinner
Alternative 2 | 9^0,5| 1^0,5|21^0,5 |16^0,5 |  12,58 |
Alternative 3 |10^0,5| 7^0,5|11^0,5 | 5^0,5 |  11,36 |
Alternative 4 | 3^0,5| 9^0,5|18^0,5 | 4^0,5 |  10,97 |
Alternative 5 | 6^0,5| 7^0,5|12^0,5 |15^0,5 |  12,43 |
Alternative 6 |11^0,5| 2^0,5| 8^0,5 |17^0,5 |  11,68 |
Praeferenzordnung: a1 > a2 > a5 > a6 > a3 > a4
### Fachliche Aussage
Krelle-Regel: Wahl der Alternative mit der hoechsten Summe der transformierten Ergebnisse; Transformation mit einer Unsicherheitspraeferenzfunktion (im Beispiel die Wurzelfunktion, Exponent 0,5) -> hier Alternative 1 (12,96).
### React-Vorschlag
DecisionRuleCard (rule="krelle") - Zellen zeigen Wurzeltransformation (Originalwert hoch 0,5 via `<sup>`); Spalte = Summe der Wurzeln. Hinweis: MD-Werte "50,5" sind unbedingt durch 5^0,5 zu ersetzen.

## Folie 16 - Entscheidungsregeln: Savage-Niehans-Regel
### In der MD problematisch/fehlend
Zeilen 253-272: Die Schaden-/Bedauernsrechnung je Zelle ist teils extrahiert (z.B. "5-11= -6"), aber die Tabellenstruktur ist zerbrochen (Alternative 3 als Freitextzeile); Praeferenzordnung als Symbolsalat. ACHTUNG: In der Praeferenzordnung sind a4 und a6 gleichwertig (~), NICHT a3 und a4.
### Fehlende visuelle Inhalte
Zweizeilige schwarze Titelzeile "Entscheidungsregeln" / "Savage-Niehans-Regel"; im Koerper blaue Ueberschrift "Savage-Niehans-Regel". Bedauernsmatrix (Regret-Matrix): jede Zelle = Originalwert minus bestem Ergebnis der jeweiligen Spalte (Zustand), Resultat <= 0; die Rechnung ist je Zelle ausgeschrieben (z.B. "5-11 = -6"). Spaltenmaxima der Ausgangsmatrix: Z1=11, Z2=9, Z3=21, Z4=17. Rechte Spalte "S.-Niehans" = der betragsmaessig groesste (negativste) Schaden je Zeile, fett. Der Wert -6 (Alternative 1) ist mit oranger Ellipse als Gewinner (geringster maximaler Schaden) umrandet. Nullwerte (kein Schaden) sind in der Folie fett/hervorgehoben.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
              | Z1 (best 11) | Z2 (best 9) | Z3 (best 21) | Z4 (best 17) | S.-Niehans |
Alternative 1 | 5-11 = -6    | 7-9 = -2    | 20-21 = -1   | 13-17 = -4   |   (-6)  <- Gewinner
Alternative 2 | 9-11 = -2    | 1-9 = -8    | 21-21 = 0    | 16-17 = -1   |   -8    |
Alternative 3 | 10-11 = -1   | 7-9 = -2    | 11-21 = -10  | 5-17 = -12   |  -12    |
Alternative 4 | 3-11 = -8    | 9-9 = 0     | 18-21 = -3   | 4-17 = -13   |  -13    |
Alternative 5 | 6-11 = -5    | 7-9 = -2    | 12-21 = -9   | 15-17 = -2   |   -9    |
Alternative 6 | 11-11 = 0    | 2-9 = -7    | 8-21 = -13   | 17-17 = 0    |  -13    |
Praeferenzordnung: a1 > a2 > a5 > a3 > a4 ~ a6
### Fachliche Aussage
Savage-Niehans-Regel (Minimax-Regret): Wahl der Alternative, bei der der maximale Schaden (Abstand zum bestmoeglichen Ergebnis je Zustand) am geringsten ist -> hier Alternative 1 (-6).
### React-Vorschlag
DecisionRuleCard (rule="savage-niehans") - Zellen zeigen Rechnung "wert - spaltenmax = differenz"; rechte Spalte = groesster Schaden je Zeile (Zeilenminimum); Gewinner = hoechster (am wenigsten negativer) Wert.

## Folie 17 - Entscheidung unter Risiko (Wahrscheinlichkeiten eingefuehrt)
### In der MD problematisch/fehlend
Zeilen 275-287: Einleitungstext vorhanden; die kleine Wahrscheinlichkeitstabelle ist zerbrochen (Wahrscheinlichkeiten p1=30%/p2=50%/p3=20% und Werte in separate Zeilen gerutscht, "Alternative 1" verschoben).
### Fehlende visuelle Inhalte
Schwarze Titelzeile "Entscheidung unter Risiko". Zwei einleitende Bullets: "Es werden nun Eintrittswahrscheinlichkeiten fuer die Umweltzustaende angegeben." und "Diese koennen objektiv oder subjektiv sein." Darunter zentriert die Ueberschrift "Umweltzustaende z" und eine kleine Ergebnismatrix mit nur 3 Zustaenden und 2 Alternativen. Spaltenkoepfe (dunkelblau, weisse Schrift) enthalten je zweizeilig den Zustand und darunter die Eintrittswahrscheinlichkeit: "Zustand 1 / p1=30%", "Zustand 2 / p2=50%", "Zustand 3 / p3=20%". Beschriftungsspalte links dunkelblau (Alternative 1, Alternative 2); hellblaue Datenzellen.
### Visuelle Rekonstruktion / Inhaltliche Rekonstruktion
                    Umweltzustaende z
              | Zustand 1  | Zustand 2  | Zustand 3  |
              | p1 = 30%   | p2 = 50%   | p3 = 20%   |
Alternative 1 |    10      |    12      |    22      |
Alternative 2 |     8      |    14      |    18      |
### Fachliche Aussage
Uebergang von Ungewissheit zu Risiko: Den Umweltzustaenden werden (objektive oder subjektive) Eintrittswahrscheinlichkeiten zugeordnet (30%/50%/20%), die in den folgenden Folien die Erwartungswertberechnung (Bayes-Regel) ermoeglichen.
### React-Vorschlag
ProbabilityMatrixTable - Tabelle mit Wahrscheinlichkeiten im Spaltenkopf (`<sub>` fuer p-Indizes); dient als Datensatz fuer die nachfolgenden Erwartungswert-Folien.

## Folie 18 - Kurze Statistik-Wiederholung: Erwartungswert
### In der MD vorhanden
Der Fließtext ist vollständig vorhanden (Zeilen 290-299): Überschrift "Der Erwartungswert", repräsentativer Mittelwert der möglichen Renditen, Erwartungswert als Summe der mit den jeweiligen Wahrscheinlichkeiten gewichteten Renditen (Höhe + Eintrittswahrscheinlichkeiten), keine Aussage über die Streuung.
### Fehlende visuelle Inhalte
Die zentrale Formel ist in der MD nicht enthalten. Sie steht freistehend, mittig zentriert in der unteren Folienhälfte, in serifenbetonter Mathesatzschrift (Summenzeichen mit Laufindex):
- E(R) = μ = Summe von i=1 bis n über (r_i · p_i)
### Visuelle Rekonstruktion
```
E(R) = μ = Σ (von i=1 bis n)  r_i · p_i
```
### Inhaltliche Rekonstruktion
Formel als Klartext:
- E(R) = μ = Σ_{i=1}^{n} r_i · p_i
- r_i = mögliche Rendite im Zustand i
- p_i = Eintrittswahrscheinlichkeit des Zustands i
### Fachliche Aussage
Der Erwartungswert verdichtet die wahrscheinlichkeitsgewichteten Renditen zu einem einzigen Mittelwert; er sagt nichts über die Streuung (das Risiko) aus.
### React-Vorschlag
FormulaCallout (PascalCase): zentrierte Formelkachel mit Erwartungswert-Gleichung (KaTeX/MathML), darunter Mini-Legende r_i/p_i.

## Folie 19 - Kurze Statistik-Wiederholung: Standardabweichung
### In der MD vorhanden
Der Fließtext ist vollständig vorhanden (Zeilen 301-313): "Standardabweichung als Risikomesszahl", Transformation mehrwertiger in einwertige Erwartungen, Risikomessung = Streuung/Dispersion bestimmen, Verdichtung der Wahrscheinlichkeitsverteilung zu einem Wert, Standardabweichung als Maßstab.
### Fehlende visuelle Inhalte
Die Formel der Standardabweichung fehlt in der MD. Sie steht freistehend, mittig zentriert, im Mathesatz mit großem Wurzelzeichen über dem Summenausdruck. Das Quadrat steht auf dem Klammerterm (r_i − μ), das Wurzelzeichen umschließt die gesamte Summe:
- σ = Wurzel aus [ Summe von i=1 bis n über ( (r_i − μ)^2 · p_i ) ]
### Visuelle Rekonstruktion
```
σ = √( Σ (von i=1 bis n) (r_i − μ)² · p_i )
```
### Inhaltliche Rekonstruktion
Formel als Klartext:
- σ = √( Σ_{i=1}^{n} (r_i − μ)² · p_i )
- (r_i − μ) = Abweichung der möglichen Rendite vom Erwartungswert
### Fachliche Aussage
Die Standardabweichung misst das Risiko als Streuung der möglichen Renditen um den Erwartungswert; sie ergänzt den Erwartungswert um die Dispersionsinformation.
### React-Vorschlag
FormulaCallout: zentrierte Formelkachel mit Standardabweichungsformel (Wurzel + Summe), gleicher Stil wie Folie 18 zur Paarbildung.

## Folie 20 - Entscheidung unter Risiko: Bayes-Regel
### In der MD vorhanden
Text und Formel weitgehend vorhanden (Zeilen 315-337), die Tabelle ist jedoch als zerbrochene Markdown-Tabelle wiedergegeben (Zeilen 327-336): die Zustands-Header, Wahrscheinlichkeiten und Alternativen sind verschoben/zerrissen.
### Fehlende visuelle Inhalte
Als Bild eingebettete farbige Ergebnis-/Erwartungswerttabelle mit der über ihr stehenden Bildunterschrift "Umweltzustände z". Kopfzeile und erste Spalte in dunkelblau mit weißer Schrift, Datenzellen in hellblau. Spalten: leer | Zustand 1 (p_1=30%) | Zustand 2 (p_2=50%) | Zustand 3 (p_3=20%) | μ (breite Spalte). Zwei Datenzeilen (Alternative 1, Alternative 2). Die μ-Spalte zeigt die vollständige Rechnung; das Ergebnis (13,4 bzw. 13,0) ist fett gesetzt.
### Visuelle Rekonstruktion
```
                                  Umweltzustände z
                Zustand 1   Zustand 2   Zustand 3        μ
                p1=30%      p2=50%      p3=20%
Alternative 1     10          12          22     0,3·10+0,5·12+0,2·22 = 13,4
Alternative 2      8          14          18     0,3·8 +0,5·14+0,2·18 = 13,0
```
### Inhaltliche Rekonstruktion
| | Zustand 1 (p=30%) | Zustand 2 (p=50%) | Zustand 3 (p=20%) | μ |
|---|---|---|---|---|
| Alternative 1 | 10 | 12 | 22 | 0,3·10+0,5·12+0,2·22 = **13,4** |
| Alternative 2 | 8 | 14 | 18 | 0,3·8+0,5·14+0,2·18 = **13,0** |

Regel-Formel (im Fließtext): μ = E(a_i) = Σ z_ij · p_j → Wähle die Alternative mit dem höchsten Erwartungswert (hier Alternative 1 mit 13,4).
### Fachliche Aussage
Die Bayes-Regel (μ-Prinzip) gewichtet jedes Zustandsergebnis z_ij mit seiner Eintrittswahrscheinlichkeit p_j, summiert zum Erwartungswert μ und wählt die Alternative mit dem höchsten Erwartungswert.
### React-Vorschlag
DecisionMatrixTable: farbige Matrix mit blauen Kopf-/Indexzellen, μ-Spalte mit ausgeschriebener Rechnung; bestes Ergebnis hervorgehoben; Bildüberschrift "Umweltzustände z".

## Folie 21 - Entscheidung unter Risiko: Kritik an der Bayes-Regel
### In der MD vorhanden
Vollständig vorhanden (Zeilen 339-348): Vorteil der Einfachheit; gute Ergebnisse bei häufig anfallenden Entscheidungen (Gesetz der großen Zahl); passt nur für risikoneutrale Entscheider, da Streuung nicht berücksichtigt wird.
### Fehlende visuelle Inhalte
Keine Grafiken, Diagramme oder Tabellen. Reine Aufzählungsfolie (drei Bullet Points) ohne visuelle Verluste.
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Die Bayes-Regel hat den Vorteil der Einfachheit.
- Sie liefert gute Ergebnisse bei häufig anfallenden Entscheidungen (Gesetz der großen Zahl → Annäherung an den Erwartungswert).
- Sie passt allerdings nur für risikoneutrale Entscheider, da die Streuung der Ergebnisse nicht berücksichtigt wird.
### Fachliche Aussage
Die Bayes-Regel ist einfach und bei Wiederholentscheidungen tragfähig, ignoriert aber das Risiko (die Streuung) und ist daher nur für risikoneutrale Entscheider geeignet.
### React-Vorschlag
KeyPointsList: einfache Bullet-Liste; optional Kontrast-Hinweis (Pro/Contra) für den Einschränkungspunkt.

## Folie 22 - Entscheidung unter Risiko: Erwartungswert-Varianz-Regel
### In der MD vorhanden
Vollständig vorhanden (Zeilen 350-366): "μσ-Regel (Erwartungswert-Varianz-Regel)", Erweiterung um die Streuung, Risikopräferenz über Einbezug von σ, risikoscheu/risikofreudig je nach Bewertung der Streuung, Beispiel-Präferenzfunktion, höheres Risiko bei höherer Varianz, μσ-Regel, Schlussfolgerung zur Risikoaversion. Die Beispielformel ist in der MD verstümmelt (Zeile 358: "α = # − 2& '()(*+,-.')").
### Fehlende visuelle Inhalte
Keine echten Diagramme/Tabellen. Verloren ging lediglich die korrekte Beispiel-Präferenzfunktion (Markdown-Zerstörung). Auf der Folie lautet das Beispiel: α = μ − 2σ (risikoavers). Die Koeffizienten sind im gerenderten Folientext nicht scharf einzeln verifizierbar; die Form "μ minus 2·σ" ist plausibel, der Faktor 2 ist visuell abgeleitet (nicht zweifelsfrei lesbar) und sollte gegen das Original geprüft werden.
### Visuelle Rekonstruktion
```
Beispiel-Präferenzfunktion (risikoavers):  α = μ − 2σ   (Faktor visuell abgeleitet)
```
### Inhaltliche Rekonstruktion
- μσ-Regel = Erwartungswert um die Streuung (σ) erweitert.
- Der Entscheider drückt seine Risikopräferenz über den Einbezug von σ in die Präferenzfunktion aus.
- Wird die Streuung negativ bewertet → risikoscheu; wird sie positiv bewertet → risikofreudig.
- Beispiel: α = μ − 2σ (risikoavers; Faktor 2 visuell abgeleitet).
- Höhere Varianz/Standardabweichung → höheres Risiko (μ,σ-Regel).
- Bei gleichem Erwartungswert sind bei Risikoaversion Investitionen/Alternativen mit niedrigerer Standardabweichung vorteilhafter als solche mit höherer Standardabweichung.
### Fachliche Aussage
Die μσ-Regel ergänzt den Erwartungswert um die Streuung und erlaubt es, individuelle Risikopräferenzen über eine Präferenzfunktion (z. B. α = μ − 2σ) abzubilden.
### React-Vorschlag
RuleExplainer: Aufzählung mit hervorgehobener Präferenzfunktion als Inline-Formelkachel; risikoscheu/-freudig als farblich kodierte Tags.

## Folie 23 - Entscheidung unter Risiko: Erwartungswert-Varianz-Regel (Markowitz-Effizienz)
### In der MD vorhanden
Der obere Textblock ist vorhanden (Zeilen 368-379): drei Fälle effizienter Kombinationen von Erwartungswert und Varianz (Markowitz-Effizienz), die drei Spiegelstriche zur Dominanz, und die Überschrift "Beispiel für Erwartungswert-Varianz-Regel". Das Diagramm und die zugehörige kleine Tabelle fehlen in der MD vollständig.
### Fehlende visuelle Inhalte
Unten rechts ein kleines μ-σ-Koordinatendiagramm: y-Achse links mit der Beschriftung "μ", x-Achse unten mit der Beschriftung "σ", am Ursprung ein "0"-Marker. Eingezeichnet sind FÜNF Punkte (Alternativen) A_1 bis A_5 mit gestrichelten waagerechten Projektionslinien nach rechts und gestrichelten senkrechten Linien nach unten. Von A_4 führt ein durchgezogener (graublauer) Pfeil nach rechts und nach unten in Richtung A_5 (Veranschaulichung der Dominanz/Verschiebung). Rechts oben eine kleine eingebettete Tabelle (hellblaue Kopfzeile, blaue Schrift) mit den Spalten "Alternative 1 2 3 4 5" und zwei Datenzeilen.
Die Werte sind in den Zoom-Crops eindeutig lesbar:
- Erwartungswert: 0,07 | 0,12 | 0,12 | 0,15 | 0,13
- Standardabweichung: 0,09 | 0,08 | 0,09 | 0,10 | 0,15
(Es sind fünf Alternativen, NICHT sechs.)
### Visuelle Rekonstruktion
```
   μ |
     |        A4 ──┐ ─ ─ ─ ─ ─ ─
     |            ▼
     |              A5 ─ ─ ─ ─ ─
     |   A2  A3 ─ ─ ─ ─ ─ ─ ─ ─
     |
     |        A1 ─ ─ ─ ─ ─ ─ ─ ─
   0 |________________________ σ

Alternative          | 1    | 2    | 3    | 4    | 5
Erwartungswert       | 0,07 | 0,12 | 0,12 | 0,15 | 0,13
Standardabweichung   | 0,09 | 0,08 | 0,09 | 0,10 | 0,15
```
### Inhaltliche Rekonstruktion
Drei Effizienzfälle (Markowitz). Es ergeben sich drei Fälle, in denen effiziente Kombinationen von Erwartungswert und Varianz in einem Portfolio vorliegen. Es gibt kein anderes Portfolio, das
- bei gleichem Erwartungswert der Rendite ein geringeres Risiko,
- bei gleichem Risiko einen höheren Erwartungswert der Rendite,
- sowohl einen höheren Erwartungswert der Rendite als auch gleichzeitig ein geringeres Risiko besitzt.

Beispieltabelle (fünf Alternativen):
| Alternative | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Erwartungswert | 0,07 | 0,12 | 0,12 | 0,15 | 0,13 |
| Standardabweichung | 0,09 | 0,08 | 0,09 | 0,10 | 0,15 |
### Fachliche Aussage
Effiziente (Markowitz-effiziente) Portfolios sind solche, die in der μ-σ-Ebene von keiner anderen Alternative dominiert werden; eine Alternative dominiert eine andere, wenn sie bei gleichem Risiko mehr Erwartungswert oder bei gleichem Erwartungswert weniger Risiko (oder beides zugleich) bietet.
### React-Vorschlag
EfficiencyFrontierChart: kleines μ-σ-Streudiagramm mit den fünf Alternativenpunkten A_1–A_5 und Dominanzpfeil; danebenliegende Mini-Datentabelle mit den konkreten Erwartungswert-/Standardabweichungswerten.

## Folie 24 - Entscheidung unter Risiko: Bernoulli-Prinzip
### In der MD vorhanden
Vollständig vorhanden (Zeilen 381-393): Definition des Bernoulli-Prinzips als Entscheidungsgrundsatz, der die subjektive Risikoeinstellung berücksichtigt; Bezug auf individuelle (Risiko-)Nutzenfunktionen U von Investoren; Risikonutzenfunktion als Abhängigkeit des Risikonutzens vom Erwartungswert des Einkommens und dem Risiko; Erläuterung zu zusätzlichen Nutzeneinheiten je zusätzlicher Risikoeinheit. Die Präferenz-Formel fehlt in der MD.
### Fehlende visuelle Inhalte
Freistehende Präferenz-/Entscheidungsformel mittig unten im Mathesatz:
- a ≽ b ⇔ E[u(X_a)] ≥ E[u(X_b)]
### Visuelle Rekonstruktion
```
a ≽ b   ⇔   E[u(X_a)] ≥ E[u(X_b)]
```
### Inhaltliche Rekonstruktion
- Bernoulli-Prinzip: Entscheidungsgrundsatz, der die subjektive Einstellung des Entscheidenden zum Risiko berücksichtigt.
- Bezogen auf die individuellen (Risiko-)Nutzenfunktionen U von Investoren wird jedem Zielwert ein bestimmter Nutzen zugeordnet.
- Als Risikonutzenfunktion wird die Abhängigkeit des Risikonutzens vom Erwartungswert des Einkommens und dem Risiko bezeichnet.
- Sie gibt Auskunft darüber, welche Anzahl zusätzlicher Nutzeneinheiten der Investor für notwendig erachtet, um eine zusätzliche Risikoeinheit zu kompensieren.
- Präferenz: a ≽ b ⇔ E[u(X_a)] ≥ E[u(X_b)].
### Fachliche Aussage
Nach dem Bernoulli-Prinzip wird die Alternative mit dem höheren erwarteten Nutzen gewählt; die Risikoeinstellung steckt in der Krümmung der Nutzenfunktion.
### React-Vorschlag
PrincipleCard: Definitionstext oben, hervorgehobene Präferenz-Formel als Formelkachel unten.

## Folie 25 - Entscheidung unter Risiko: Bernoulli-Prinzip (Beispiel)
### In der MD vorhanden
Text und Rechnung vorhanden (Zeilen 395-417), aber der Entscheidungsbaum ist in der MD nur als zerbrochene Bruchstücke abgebildet (Zeilen 398-409: "p=1 / a_1 = 110.000 € / sichere Anlage / 100.000 € / p=0,5 140.000 € / a_2 = / spekulative Anlage / 1-p=0,5 / 80.000 €"). Die Baumstruktur und Farbcodierung gehen verloren.
### Fehlende visuelle Inhalte
Farbiger Entscheidungsbaum (Ereignisbaum), von links nach rechts:
- Startknoten (hellblaue/graue Box): 100.000 €.
- Zwei Äste mit blauen Pfeilen: oberer Ast führt zur grünen Box "a_1 = sichere Anlage"; unterer Ast zur orangefarbenen Box "a_2 = spekulative Anlage".
- Von a_1 ein blauer Pfeil mit Beschriftung "p=1" zur grünen Box "110.000 €".
- Von a_2 zwei blaue Pfeile: oben "p=0,5" zur orangefarbenen Box "140.000 €", unten "1-p=0,5" zur orangefarbenen Box "80.000 €".
- Farblogik: grün = sichere Anlage, orange = spekulative Anlage.
### Visuelle Rekonstruktion
```
                                  p=1
              [a1 = sichere Anlage] ----> [110.000 €]   (grün)
            /
[100.000 €]
            \                      p=0,5
              [a2 = spekulative  ] ----> [140.000 €]   (orange)
              [     Anlage       ] \
                                    \  1-p=0,5
                                     -> [80.000 €]      (orange)
```
### Inhaltliche Rekonstruktion
Mit der Risikonutzenfunktion u(z) = ln(z), z in Tsd. €, wird:
- E[u(Z_1)] = 1 · ln(110) = 4,70
- E[u(Z_2)] = 0,5 · ln(140) + 0,5 · ln(80) = 4,66
- Ergebnis: Die sichere Anlage wird der spekulativen vorgezogen: a_1 ≻ a_2 (auf der Folie als "a_1 > a_2" geschrieben).
### Fachliche Aussage
Obwohl beide Anlagen denselben Erwartungswert (110.000 €) haben, liefert die sichere Anlage wegen der konkaven Nutzenfunktion (ln) einen höheren Erwartungsnutzen und wird gewählt (Risikoaversion).
### React-Vorschlag
DecisionTree: SVG-Entscheidungsbaum mit farbcodierten Knoten (grün/orange), Wahrscheinlichkeits-Labels an den Kanten; darunter Erwartungsnutzen-Rechnung mit Ergebnishervorhebung.

## Folie 26 - Entscheidung unter Risiko: Sicherheitsäquivalent und Risikoprämie
### In der MD vorhanden
Text vorhanden (Zeilen 419-435): Erwartungsnutzen, Sicherheitsäquivalent (Definition über Indifferenz), Risikoprämie. Die Formeln sind in der MD verstümmelt (Zeilen 428-434: "% & = ( % )", "& = %'" ( % )", "* = ( ) − &").
### Fehlende visuelle Inhalte
Zwei mittig zentrierte Formelblöcke im Mathesatz. Der erste Block ist zweizeilig (untereinander), der zweite steht separat darunter:
- Sicherheitsäquivalent: u(s) = E(u(X)) und s = u^{-1}(E(u(X)))
- Risikoprämie: π = E(X) − s
### Visuelle Rekonstruktion
```
u(s) = E( u(X) )
s    = u^{-1}( E( u(X) ) )

π = E(X) − s
```
### Inhaltliche Rekonstruktion
- Erwartungsnutzen: erwarteter Nutzen einer Handlung mit risikobehafteten Ergebnissen.
- Sicherheitsäquivalent s: fiktives sicheres Ergebnis mit demselben Nutzen wie die Handlung mit den risikobehafteten Ergebnissen. Ist ein Entscheider zwischen einem sicheren Ergebnis s und einem zufälligen Ergebnis X indifferent, so bezeichnet man s als Sicherheitsäquivalent von X: u(s) = E(u(X)), also s = u^{-1}(E(u(X))).
- Risikoprämie π: Unterschied zwischen dem erwarteten Ergebnis und dem Sicherheitsäquivalent; der vom Erwartungswert vorzunehmende Abschlag, der gerade die Indifferenz herbeiführt: π = E(X) − s.
### Fachliche Aussage
Das Sicherheitsäquivalent ist der sichere Betrag, der denselben Nutzen stiftet wie die riskante Alternative; die Risikoprämie misst als Differenz E(X) − s die Risikoeinstellung.
### React-Vorschlag
DefinitionFormulaList: drei Definitionsblöcke (Erwartungsnutzen / Sicherheitsäquivalent / Risikoprämie) je mit Begriffstitel und zugehöriger Formelkachel.

## Folie 27 - Entscheidung unter Risiko: Sicherheitsäquivalent und Risikoprämie (Beispiel)
### In der MD vorhanden
Text vorhanden (Zeilen 437-449), Lotterie als Bruchstücke (Zeilen 441-443: "50% 100 € / 40 € / 50% 0 €"). Die Rechnung und die Fallunterscheidung sind vorhanden.
### Fehlende visuelle Inhalte
Hellblaue Hervorhebungs-/Merkbox oben: "Risikoverhalten orientiert sich an der Risikoprämie in der jeweiligen Entscheidungssituation." Darunter ein kleiner Lotterie-Baum: links der Wert "40 €", von dort ein Verzweigungspunkt mit zwei Ästen (blaue Linien): oberer Ast "50% → 100 €", unterer Ast "50% → 0 €". Unten eine grau hinterlegte, blau umrandete Box mit der dreizeiligen Fallunterscheidung; die Schlagwörter scheu/neutral/freudig sind innerhalb des zusammengesetzten Wortes ("risikoscheu", "risikoneutral", "risikofreudig") fett und unterstrichen.
### Visuelle Rekonstruktion
```
        50%
        ---- 100 €
40 € <
        ---- 0 €
        50%
```
### Inhaltliche Rekonstruktion
- Erwartungswert der Lotterie: 0,5·100 + 0,5·0 = 50.
- Entscheider indifferent → Sicherheitsäquivalent s = 40 → Risikoprämie π = Erwartungswert − s = 50 − 40 = 10.
- Fallunterscheidung:
  - falls π > 0 → Entscheider verhält sich risikoscheu
  - falls π = 0 → Entscheider verhält sich risikoneutral
  - falls π < 0 → Entscheider verhält sich risikofreudig
### Fachliche Aussage
Anhand der Risikoprämie (Differenz Erwartungswert − Sicherheitsäquivalent) lässt sich die Risikoeinstellung ablesen: positiv = risikoscheu, null = neutral, negativ = risikofreudig.
### React-Vorschlag
RiskPremiumExample: Merkbox oben, kleiner Lotterie-Baum (SVG) mittig, farbcodierte Fallunterscheidungsbox (scheu/neutral/freudig).

## Folie 28 - Entscheidung unter Risiko: Das Erwartungswert-Kriterium (EU-Modell)
### In der MD vorhanden
Text vorhanden (Zeilen 451-466): blaue Abschnittsüberschrift "Das Expected Utility-Modell (EU-Modell)", Standardmodell der Konsumentenentscheidung unter Risiko (basiert auf der Theorie des erwarteten Nutzens / Expected Utility), Abwägen von Nutzen oberhalb gegen Unnutzen unterhalb der Nutzenfunktion, abnehmender Grenznutzen → Unterseite wiegt mehr. Das Buchcover-Foto fehlt in der MD. (Hinweis: Die Folien-Kopfzeile lautet "Entscheidung unter Risiko / Das Erwartungswert-Kriterium", die blaue Inhaltsüberschrift dagegen "Das Expected Utility-Modell (EU-Modell)".)
### Fehlende visuelle Inhalte
Rechts auf der Folie ein Foto des Buchcovers: "Theory of Games and Economic Behavior" (Sixtieth-Anniversary Edition) von John von Neumann und Oskar Morgenstern. Das Cover ist BLAU/TÜRKIS (nicht rot) mit der weißen Autorenzeile "von Neumann and Morgenstern" am oberen Rand und großem weißem Titeltext. Reines Illustrationsfoto ohne weitere Datenwerte.
### Visuelle Rekonstruktion
```
[Textblock links]              [ Buchcover rechts (blau/türkis) ]
                               "Theory of Games and
                                Economic Behavior"
                                von Neumann & Morgenstern
```
### Inhaltliche Rekonstruktion
- Das Standardmodell der Konsumentenentscheidung unter Risiko basiert auf der Theorie des erwarteten Nutzens (Expected Utility), daher EU-Modell.
- Menschen entscheiden, ob sie ein Risiko eingehen oder nicht, indem sie den Nutzen oberhalb mit dem Unnutzen unterhalb ihrer Nutzenfunktion gegeneinander abwägen.
- Wegen des abnehmenden Grenznutzens wiegt die Unterseite (Verlust) mehr als die Oberseite (Gewinn).
### Fachliche Aussage
Im Expected-Utility-Modell entscheiden Menschen über die Abwägung erwarteter Nutzen; der abnehmende Grenznutzen macht Verluste subjektiv schwerer als gleich große Gewinne.
### React-Vorschlag
ConceptWithImage: zweispaltiges Layout, Bulletliste links, dekoratives Buchcover (img/Platzhalter) rechts mit Bildunterschrift.

## Folie 29 - Entscheidung unter Risiko: Theorie des erwarteten Nutzens (Risikoaversion)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 468-477): Überschrift "Risikoaversion", Menschen sind risikoavers; das bedeutet, dass Menschen dafür bezahlen, Risiko zu vermeiden (Versicherung), einen Ausgleich verlangen, wenn sie Risiko übernehmen sollen, und nicht automatisch bereit sind, jede Wette mit positivem Erwartungswert zu akzeptieren (mit Verweis auf das nachstehende Beispiel).
### Fehlende visuelle Inhalte
Keine Grafiken, Diagramme oder Tabellen. Reine Aufzählungsfolie ohne visuelle Verluste.
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Menschen sind risikoavers. Das bedeutet, dass Menschen
- dafür bezahlen, Risiko zu vermeiden (Versicherung),
- einen Ausgleich verlangen, wenn sie Risiko übernehmen sollen,
- nicht automatisch bereit sind, jede Wette mit einem positiven Erwartungswert zu akzeptieren (siehe nachstehendes Beispiel).
### Fachliche Aussage
Risikoaversion bedeutet, dass Menschen Sicherheit honorieren und für Risikoübernahme eine Kompensation verlangen, weshalb ein positiver Erwartungswert allein keine Wette attraktiv macht.
### React-Vorschlag
KeyPointsList: einfache Bullet-Liste mit eingerückten Unterpunkten.

## Folie 30 - Entscheidung unter Risiko: Theorie des erwarteten Nutzens (Beispiel Münzwette)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 479-497): Wettangebot (Münzwurf, Kopf: Sie zahlen mir 100 €, Zahl: Ich zahle Ihnen 120 €), Frage nach dem Erwartungswert mit Antwortoptionen (220/120/110/100/10/5 Euro) und Akzeptanzfrage (Ja/Nein/Vielleicht).
### Fehlende visuelle Inhalte
Keine Grafiken oder Tabellen. Reine Aufzählungs-/Quizfolie ohne visuelle Verluste (Multiple-Choice-Charakter).
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Wette: Münzwurf. Kopf → Sie zahlen mir 100 €; Zahl → Ich zahle Ihnen 120 €.
- Frage: "Was hoch ist der Erwartungswert dieser Wette?" (so auf der Folie formuliert). Optionen: 220 / 120 / 110 / 100 / 10 / 5 Euro.
- Frage: Würden Sie diese Wette akzeptieren? Optionen: Ja / Nein / Vielleicht.
- (Auf der Folie ist keine Lösung markiert; rechnerisch 0,5·(−100) + 0,5·120 = +10, der Erwartungswert beträgt also 10 Euro.)
### Fachliche Aussage
Die Wette hat einen positiven Erwartungswert (+10 €), wird aber von risikoaversen Menschen oft dennoch abgelehnt – Illustration, dass ein positiver Erwartungswert allein nicht genügt.
### React-Vorschlag
QuizPrompt: interaktive Single-Choice-Frage (Erwartungswert) plus Akzeptanz-Umfrage; passt zur Quiz-Question-Shape des Projekts.

## Folie 31 - Entscheidung unter Risiko: Theorie des erwarteten Nutzens (Beispiel 10.000-Euro-Wette)
### In der MD vorhanden
Vollständig vorhanden (Zeilen 499-511): Sie erhalten von mir 10.000 €, dann Wette (Münzwurf, Kopf: Sie geben mir die 10.000 € zurück, Zahl: Ich gebe Ihnen 20.000 €), Akzeptanzfrage (Ja/Nein/Vielleicht).
### Fehlende visuelle Inhalte
Keine Grafiken oder Tabellen. Reine Aufzählungs-/Quizfolie ohne visuelle Verluste.
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Ausgangspunkt: Sie erhalten von mir 10.000 €.
- Wette: Münzwurf. Kopf → Sie geben mir die 10.000 € zurück; Zahl → Ich gebe Ihnen 20.000 €.
- Frage: Würden Sie diese Wette akzeptieren? Optionen: Ja / Nein / Vielleicht.
### Fachliche Aussage
Variante des Risikoaversions-Beispiels mit höherem Einsatz: Trotz fairem/positivem Erwartungswert führt die konkave Nutzenfunktion dazu, dass risikoaverse Personen die sichere Auszahlung bevorzugen.
### React-Vorschlag
QuizPrompt: Akzeptanz-Umfrage (Ja/Nein/Vielleicht); ideal als Folgefrage zu Folie 30 in derselben Quiz-Komponente.

## Folie 32 - Entscheidung unter Risiko: Erwartungsnutzenhypothese
### In der MD vorhanden
Text vorhanden (Zeilen 513-530): "Erfinder" John von Neumann, Oskar Morgenstern; Entscheidungsregel (Entscheidung für die Alternative mit dem höchsten Erwartungsnutzen); "Maximiere". Die beiden Formeln sind in der MD vollständig zerstört (Zeilen 519-529, unleserliche Tabellenfragmente).
### Fehlende visuelle Inhalte
Zwei mittig zentrierte Formelblöcke im Mathesatz mit Summenzeichen:
- Erwartungsnutzen: E(u(X,g)) = Σ von i=1 bis n über (g_i · u(X_i))
- Risikoprämie: π = Σ von i=1 bis n über (g_i · X_i) − u^{-1}( Σ von i=1 bis n über (g_i · u(X_i)) )
### Visuelle Rekonstruktion
```
E( u(X,g) ) = Σ (i=1..n) g_i · u(X_i)

Risikoprämie π = Σ (i=1..n) g_i · X_i − u^{-1}( Σ (i=1..n) g_i · u(X_i) )
```
### Inhaltliche Rekonstruktion
- "Erfinder": John von Neumann, Oskar Morgenstern.
- Entscheidungsregel: Entscheidung für die Alternative mit dem höchsten Erwartungsnutzen.
- Maximiere den Erwartungsnutzen: E(u(X,g)) = Σ_{i=1}^{n} g_i · u(X_i) (g_i = Wahrscheinlichkeiten).
- Risikoprämie: π = Σ_{i=1}^{n} g_i · X_i − u^{-1}( Σ_{i=1}^{n} g_i · u(X_i) ).
### Fachliche Aussage
Die von-Neumann-Morgenstern-Erwartungsnutzenhypothese fordert die Maximierung des erwarteten Nutzens; die Risikoprämie ergibt sich als Differenz von Erwartungswert (Σ g_i·X_i) und Sicherheitsäquivalent (u^{-1}(Σ g_i·u(X_i))).
### React-Vorschlag
FormulaList: zwei beschriftete Formelkacheln (Erwartungsnutzen / Risikoprämie) mit Summen-Notation via KaTeX.

## Folie 33 - Entscheidung unter Risiko: Erwartungsnutzenhypothese (Beispiel mit zwei Umweltzuständen)
### In der MD vorhanden
Text vorhanden (Zeilen 532-562), aber die rechte Formelliste ist in der MD stark zerbrochen (Zeilen 535-561: Nutzenfunktion, zwei Zustände/Auszahlungen X_1, X_2 mit g_1, g_2, Erwartungswert, Erwartungsnutzen, Sicherheitsäquivalent, Risikoprämie). Das Nutzenfunktions-Diagramm links fehlt in der MD vollständig.
### Fehlende visuelle Inhalte
Links ein Diagramm der konkaven Nutzenfunktion (im Zoom-Crop klar lesbar):
- y-Achse beschriftet mit "u(·)", x-Achse beschriftet mit "X".
- Eine konkave (von links unten nach rechts oben abflachende) schwarze Nutzenkurve.
- Eine ROTE Sekante/Sehne verbindet die beiden Kurvenpunkte bei X(1) und X(2); sie liegt unterhalb der Kurve.
- Gestrichelte Hilfslinien markieren auf der x-Achse die Stellen X(1), μ_X und X(2).
- Auf der y-Achse sind von oben nach unten beschriftet: u[X(2)], u(μ_X), g(1)u[X(1)]+g(2)u[X(2)], u[X(1)].
(Die Achsen tragen keine bezifferten Skalenwerte.)
### Visuelle Rekonstruktion
```
u(·) |                              ____---- u[X(2)]
     |                      ___---/
     | u(μ_X) ------------/  (rote Sehne X(1)→X(2)
     | g1u[X1]+g2u[X2] --/   unterhalb der Kurve)
     | u[X(1)] ------/
     |          /
     |_______/____________________________ X
            X(1) μ_X            X(2)
```
### Inhaltliche Rekonstruktion
- Nutzenfunktion: u(·).
- Zwei Zustände der Welt: zwei mögliche Auszahlungen X_1 und X_2 mit den Wahrscheinlichkeiten g_1 und g_2.
- Erwartungswert: μ = g_1·X_1 + g_2·X_2
- Erwartungsnutzen: E(u(X,g)) = g_1·u(X_1) + g_2·u(X_2)
- Sicherheitsäquivalent s: s = u^{-1}( g_1·u(X_1) + g_2·u(X_2) )
- Risikoprämie π: π = μ − u^{-1}( g_1·u(X_1) + g_2·u(X_2) )
### Fachliche Aussage
Im Zweizustandsfall zeigt die konkave Nutzenfunktion grafisch, dass der Erwartungsnutzen (Höhe der roten Sehne bei μ_X: g(1)u[X(1)]+g(2)u[X(2)]) unter dem Nutzen des Erwartungswerts u(μ_X) liegt; daraus ergeben sich Sicherheitsäquivalent und positive Risikoprämie.
### React-Vorschlag
UtilityFunctionChart: SVG mit konkaver Nutzenkurve, roter Sehne X(1)–X(2) und Hilfslinien (X(1), μ_X, X(2) sowie y-Achsen-Marken u[X(1)], g1u[X1]+g2u[X2], u(μ_X), u[X(2)]); rechts begleitende Formelliste (μ, Erwartungsnutzen, s, π).

## Folie 34 - Entscheidung unter Risiko: Risikoaversion, Risikoneutralität und Risikofreude
### In der MD vorhanden
Die Vergleichstabelle ist als zerbrochenes Markdown vorhanden (Zeilen 564-572): Spaltenüberschriften Risikoaversion/Risikoneutralität/Risikofreude, Erwartungswert >/=/< Sicherheitsäquivalent, Risikoprämie >0/=0/<0. Die drei Nutzenfunktions-Diagramme oben fehlen in der MD vollständig.
(Hinweis: Diese Folie hat ein abweichendes, breiteres Kopf-Layout; die Folien-Kopfzeile lautet nur "Entscheidung unter Risiko" OHNE die sonst zweite Titelzeile. Die blaue Inhaltsüberschrift lautet "Risikoaversion, Risikoneutralität und Risikofreude".)
### Fehlende visuelle Inhalte
Oben drei nebeneinanderliegende kleine Nutzenfunktions-Diagramme; nur das linke trägt die y-Achsen-Beschriftung "u(X)", alle drei haben die x-Achse "X" mit den Markierungen X(1) und X(2):
- Links (Risikoaversion): konkave, nach oben abflachende schwarze Kurve; rote Sehne X(1)–X(2) liegt unterhalb der Kurve.
- Mitte (Risikoneutralität): gerade Linie (lineare Nutzenfunktion); rote Sehne liegt genau auf der Linie.
- Rechts (Risikofreude): konvexe, nach oben steiler werdende Kurve; rote Sehne liegt oberhalb der Kurve.
Darunter eine dreispaltige farbige Tabelle (blaue Kopfzeile mit weißer Schrift, hellblaue/graue Datenzeilen). In den Datenzeilen sind die Relationszeichen (>, =, <) und die Vorzeichen (>0, =0, <0) jeweils farblich/fett hervorgehoben.
### Visuelle Rekonstruktion
```
Risikoaversion        Risikoneutralität      Risikofreude
 u(X) konkav           u(X) linear            u(X) konvex
 (Sehne unter Kurve)   (Sehne = Linie)        (Sehne über Kurve)
   X(1)  X(2)            X(1)  X(2)             X(1)  X(2)
```
### Inhaltliche Rekonstruktion
| | Risikoaversion | Risikoneutralität | Risikofreude |
|---|---|---|---|
| Vergleich | Erwartungswert **>** Sicherheitsäquivalent s | Erwartungswert **=** Sicherheitsäquivalent s | Erwartungswert **<** Sicherheitsäquivalent s |
| Risikoprämie | π **>** 0 | π **=** 0 | π **<** 0 |

Nutzenfunktion: konkav (Aversion) / linear (Neutralität) / konvex (Freude).
### Fachliche Aussage
Die Krümmung der Nutzenfunktion bestimmt die Risikoeinstellung: konkav = risikoavers (Erwartungswert > s, π > 0), linear = neutral (Erwartungswert = s, π = 0), konvex = risikofreudig (Erwartungswert < s, π < 0); jeweils ablesbar an der Lage der roten Sehne relativ zur Nutzenkurve.
### React-Vorschlag
RiskAttitudeComparison: drei kleine SVG-Nutzenkurven (konkav/linear/konvex mit roter Sehne) als Spaltenköpfe einer farbigen Vergleichstabelle (Erwartungswert-Relation + Risikoprämie-Zeile).

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden
- Klassifikationsbaum der Erwartungsstrukturen (Folie 3) und das Entscheidungs-Flussdiagramm mit Feedback-Schleife (Folie 8).
- Alle zerbrochenen Tabellen als echte HTML-Tabellen: Informationsbezug (5), Entscheidungsprozesse (7), allgemeine und konkrete Ergebnismatrix (9, 10), Probability-Matrix (17), Bayes-Matrix (20), Vergleichstabelle (34).
- Die sechs Entscheidungsregeln (11-16) inkl. berechneter Ergebnisspalte, Gewinner-Markierung und korrekter Präferenzordnung; bei Krelle (15) die Potenzschreibweise (^0,5), bei Savage-Niehans (16) die Regret-Rechnung und a4~a6.
- Alle Mathesatz-Formeln: Erwartungswert (18), Standardabweichung (19), Bayes (20), Bernoulli-Präferenz (24), Sicherheitsäquivalent/Risikoprämie (26), Erwartungsnutzenhypothese (32).
- Die Diagramme: μ-σ-Effizienzdiagramm (23), Bernoulli-Entscheidungsbaum (25), Lotterie-Baum (27), Nutzenfunktion mit roter Sehne (33) und die drei Risikoeinstellungs-Kurven (34).

## Kann vereinfacht werden
- Fotoband der Titelfolie (1) und das Buchcover (28): nur dekorativ, als Platzhalter/Akzent andeuten.
- Sprechblasen-Layout (6): als schlichte Begriffsliste mit Callouts statt exakter CSS-Speech-Bubbles möglich.
- μσ-Präferenzfunktion (22): Faktor 2 ist visuell abgeleitet und gegen das Original zu prüfen.

## Nicht fachlich relevant
- HBW-Logo, blaue Kopfzeile, Folien-Footer (`Behavioral Finance / CS / Folie XXX`), Copyright-Hinweis, Versionskennung "V26-04-13".

---

# Datenorientierter React-Hinweis

```js
// Folie 10: Beispiel-Ergebnismatrix (Basisdatensatz fuer alle Entscheidungsregeln Folie 11-16)
// Zeilen = Handlungsalternativen a1..a6, Spalten = Umweltzustaende z1..z4
export const ergebnisMatrix = [
  { alternative: 1, werte: [5, 7, 20, 13] },
  { alternative: 2, werte: [9, 1, 21, 16] },
  { alternative: 3, werte: [10, 7, 11, 5] },
  { alternative: 4, werte: [3, 9, 18, 4] },
  { alternative: 5, werte: [6, 7, 12, 15] },
  { alternative: 6, werte: [11, 2, 8, 17] },
];

// Spaltenmaxima (fuer Savage-Niehans/Regret-Rechnung): z1=11, z2=9, z3=21, z4=17

// Ergebnisspalten und Gewinner je Entscheidungsregel (Folie 11-16)
export const entscheidungsregeln = {
  maximax:       { spalte: [20, 21, 11, 18, 15, 17],                gewinner: 2 }, // hoechstes Zeilenmaximum
  maximin:       { spalte: [5, 1, 5, 3, 6, 2],                      gewinner: 5 }, // hoechstes Zeilenminimum ("Minimax")
  hurwicz:       { spalte: [9.5, 7.0, 6.8, 7.5, 8.7, 6.5],          gewinner: 1, optimismus: 0.3 },
  laplace:       { spalte: [11.25, 11.75, 8.25, 8.5, 10.0, 9.5],    gewinner: 2 },
  krelle:        { spalte: [12.96, 12.58, 11.36, 10.97, 12.43, 11.68], gewinner: 1, exponent: 0.5 },
  savageNiehans: { spalte: [-6, -8, -12, -13, -9, -13],             gewinner: 1 }, // geringster maximaler Schaden
};
```

```js
// Folie 17/20: Entscheidung unter Risiko, Wahrscheinlichkeitsmatrix (3 Zustaende, 2 Alternativen)
export const risikoMatrix = {
  wahrscheinlichkeiten: [0.30, 0.50, 0.20], // p1, p2, p3
  alternativen: [
    { alternative: 1, werte: [10, 12, 22], mu: 13.4 }, // 0,3*10+0,5*12+0,2*22
    { alternative: 2, werte: [8, 14, 18],  mu: 13.0 }, // 0,3*8 +0,5*14+0,2*18
  ],
  // Bayes-Regel: waehle Alternative mit hoechstem mu -> Alternative 1 (13,4)
};

// Folie 23: Markowitz-Effizienz, fuenf Alternativen (mu / sigma)
export const effizienzPunkte = [
  { alternative: 1, mu: 0.07, sigma: 0.09 },
  { alternative: 2, mu: 0.12, sigma: 0.08 },
  { alternative: 3, mu: 0.12, sigma: 0.09 },
  { alternative: 4, mu: 0.15, sigma: 0.10 },
  { alternative: 5, mu: 0.13, sigma: 0.15 },
];

// Folie 34: Risikoeinstellung aus Nutzenfunktion und Risikopraemie
export const risikoeinstellungen = [
  { typ: 'Risikoaversion',     nutzenfunktion: 'konkav', vergleich: 'Erwartungswert > s', risikopraemie: 'pi > 0' },
  { typ: 'Risikoneutralitaet', nutzenfunktion: 'linear', vergleich: 'Erwartungswert = s', risikopraemie: 'pi = 0' },
  { typ: 'Risikofreude',       nutzenfunktion: 'konvex', vergleich: 'Erwartungswert < s', risikopraemie: 'pi < 0' },
];
```
