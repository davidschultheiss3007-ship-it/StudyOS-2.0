# skript-05-grundlagen-der-portfoliotheorie_MD+PDF - Grundlagen der Portfoliotheorie: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-05-grundlagen-der-portfoliotheorie.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-05-grundlagen-der-portfoliotheorie.pdf` verloren gegangen, nur als zerbrochene Tabellen/Formeln übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Formeln, Tabellenlogiken oder Bildaussagen verloren gehen.

**Quelle:** `skript-05-grundlagen-der-portfoliotheorie.pdf` mit 50 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, der graue Kopfbereich, die Folien-Footer ("Asset Management / CS / Folie XXX") und der Copyright-Footer ("© 2026 – Hochschule der Bayerischen Wirtschaft") sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Formeln neu rendern:** Zahlreiche Folien (5, 6, 23, 25, 33, 34, 36, 37, 44, 45, 49) enthalten in der MD vollständig zerstörte Formeln (Symbolsalat, Indizes aus der Zeile gerutscht, "²" als "8"). Diese müssen aus der inhaltlichen Rekonstruktion via KaTeX/MathML neu gesetzt werden – nicht aus der MD übernehmen.
2. **Zerbrochene Tabellen sauber rekonstruieren:** Die Datentabellen (Folien 4, 7, 10, 32, 34, 43) sind in der MD zerfallen. In React als echte Tabellen mit farbiger Kopfzeile und ggf. hervorgehobenen Zeilen (Minimum-Varianz-Portfolio) nachbauen.
3. **Fehlende μ-σ-Diagramme nachbauen:** Effizienzkurven, Korrelations-Kurvenscharen, Leerverkaufs-Verlängerungen, CML/SML und Diversifikationskurven (Folien 8, 10, 11, 15, 17, 18, 19, 26, 30, 31, 32, 38, 39, 41, 44, 47) fehlen in der MD vollständig und tragen die zentrale fachliche Aussage. Als SVG/Chart-Komponenten umsetzen.
4. **Hervorhebungen erhalten:** Blau/fett gesetzte Zwischenüberschriften, ρ-Tags, Schlussfolgerungs-Pfeile ("→"/"à") und Schlüsselbegriffe markieren die Kernaussage und gehen im reinen Text verloren – als Callouts/Akzente abbilden.
5. **Farbcodierte Annotationen abbilden:** Klammer-Boxen (Folie 7: grün/orange), effiziente vs. ineffiziente Äste (rot/grau), Leerverkaufs-Verlängerungen (gelb) und Heatmap-Farbschwellen (Folie 13) als farbliche Markierungen umsetzen.
6. **Quellenhinweise erhalten:** Berk/DeMarzo (2020); Bloomberg/Goldman Sachs (Stand 01.12.2017); Doeswijk/Lam (2014) beibehalten.
7. **"Visuell abgelesene" Werte als unscharf kennzeichnen:** Bei aus Diagrammen geschätzten Werten/Gewichtungen ("ca.") den Schätzcharakter beibehalten und keine exakten Zahlen erfinden.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `AgendaList` | 2 | Kursagenda mit aktivem Kapitelpunkt hervorheben |
| `PersonProfileCard` | 3 | Markowitz: Foto-Platzhalter, Lebensdaten, Zitate |
| `AssetDataTable` | 4, 32, 34 | Aktie/Bond-Eckdaten mit zusammengefasster Korrelationszeile |
| `FormulaBox` | 5, 6, 23, 25 | Hervorgehobene Formeln (KaTeX/MathML) |
| `FormulaList` / `InfoList` | 4, 6 | Anteils-/Grenzfallbedingungen, Inputdatenbedarf |
| `PortfolioMixTable` | 7 | Wertetabelle mit MVP-Zeile und Bereichs-Callouts |
| `MuSigmaChart` | 8 | μ-σ-Streudiagramm mit annotierten Punkten |
| `DefinitionList` / `GlossaryList` | 9, 20, 22 | Definitionen mit hervorgehobenem Term |
| `EfficientFrontierExample` | 10, 32 | Datentabellen + SVG-Effizienzkurve |
| `CorrelationFrontierChart` | 11 | Kurvenschar für verschiedene ρ-Werte |
| `CorrelationCasesList` | 12 | ρ-Fälle als Zeilen mit Pfeil-Schlussfolgerung |
| `CorrelationHeatmap` | 13 | farbskalierte Korrelationsmatrix + Legende |
| `ConceptComparison` | 14 | Long/Short-Begriffsblöcke |
| `ShortSellingFrontierChart` | 15 | Effizienzkurve mit Leerverkaufs-Verlängerungen |
| `InfoCallout` | 16 | Bore-Kennzahlen hervorheben |
| `MultiAssetFrontierChart` | 17 | drei Asset-Punkte + Paarkurven |
| `FeasibleRegionChart` | 18 | erreichbare Region + Effizienzkante |
| `StockUniverseFrontierChart` | 19 | reale Aktien + zwei Effizienzlinien |
| `CaseStudyCard` / `ExerciseCard` / `SolutionCard` | 21, 24, 25 | Versicherungs-/Roulette-Beispiel und Lösung |
| `PerspectiveBlock` | 23 | Hausbesitzer- vs. Versicherungssicht |
| `VolatilityTimelineChart` | 26 | Volatilitäts-Zeitreihe mit Krisen-Markern |
| `DiversificationCurveChart` | 30 | Typ S / typisch / Typ I über Aktienanzahl |
| `SystematicVsUnsystematicChart` | 31 | systematisches vs. unsystematisches Risiko |
| `FormulaBlock` / `MvpCalculationExample` | 33, 34 | MVP-Gewichtungsformel + Beispielrechnung |
| `CmlDerivation` / `CmlChart` | 37, 38 | CML-Herleitung und CML-Diagramm |
| `TangencyPortfolioChart` | 39 | Tangentialportfolio M |
| `FundLadderCmlChart` | 41 | CML mit vier Fonds-Punkten |
| `GlobalMarketPortfolioDonut` | 43 | globales Marktportfolio 2012 |
| `SmlIntroChart` / `CapmFormulaBlock` | 44, 45 | SML-Gerade und CAPM-Gleichung |
| `CmlVsSmlComparison` | 47 | CML vs. SML nebeneinander |
| `AptFormulaBlock` / `AptVsCapmComparison` | 49, 50 | APT-Gleichung und APT/CAPM-Vergleich |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 5: Grundlagen der Portfoliotheorie (Titelfolie)
### In der MD vorhanden
"Asset Management", "Kapitel 5", "Grundlagen der Portfoliotheorie", Versionskennung "V26-04-23". Inhaltlich vollständig.
### Fehlende visuelle Inhalte
Titelfolien-Layout: oben links "Asset Management", oben rechts das HBW-Logo. Mittig eine horizontale Bildleiste aus vier Fotos (Studierende/Campus; das erste Foto zeigt einen Bildschirm/ein Gerät mit dem HBW-Logo). Reine Gestaltungselemente ohne Fachinhalt. Fußzeile: "Asset Management / CS / Folie 153", "© 2026 – Hochschule der Bayerischen Wirtschaft".
### Visuelle Rekonstruktion
Nicht erforderlich (reine Layout-/Bildelemente).
### Inhaltliche Rekonstruktion
Kapitelnummer: 5. Titel: "Grundlagen der Portfoliotheorie". Version: V26-04-23.
### Fachliche Aussage
Auftakt zu Kapitel 5, das die Markowitz-Portfoliotheorie und ihre Erweiterungen behandelt.
### React-Vorschlag
Keine eigene Komponente nötig; als Topic-Header (`title`, `source`) im Topic-Objekt abbilden.

## Folie 2 - Agenda
### In der MD vorhanden
Vollständige Agenda mit 9 Punkten (1. Einführung bis 9. FinTechs im Asset Management / Robo Advisors).
### Fehlende visuelle Inhalte
Aktueller Kapitelpunkt "5. Grundlagen der Portfoliotheorie" ist optisch hervorgehoben (blau, fett); alle übrigen Punkte schwarz. Die Hervorhebung markiert die aktuelle Kapitelposition und geht im reinen Text verloren.
### Visuelle Rekonstruktion
```
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
>> 5. Grundlagen der Portfoliotheorie  (blau, fett hervorgehoben)
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
```
### Inhaltliche Rekonstruktion
Neunteilige Kursagenda; Kapitel 5 ist der aktuelle Abschnitt.
### Fachliche Aussage
Verortung des Kapitels Portfoliotheorie innerhalb des Gesamtkurses.
### React-Vorschlag
`AgendaList` mit aktivem Listeneintrag (Prop `activeIndex`), aktiver Punkt visuell akzentuiert.

## Folie 3 - Diversifikation nach Markowitz (Harry Max Markowitz)
### In der MD vorhanden
Lebensdaten, Begründer der modernen Portfoliotheorie, Nobelpreis 1990 (zusammen mit Merton H. Miller und William Sharpe), Originalzitate und Fazit. Inhaltlich vollständig.
### Fehlende visuelle Inhalte
Rechts oben ein Porträtfoto von Harry M. Markowitz (älterer Herr). Die Aufzählungspunkte beginnen mit dem HBW-typischen "§"-Bullet; die Überschrift "Harry Max Markowitz" und die Fazit-Zeile sind blau hervorgehoben. Das Foto trägt keinen fachlichen Inhalt, ist aber als Personenbezug erwähnenswert.
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- Harry Max Markowitz, * 24. August 1927, † 22. Juni 2023
- Begründer der modernen Portfoliotheorie
- Wirtschaftsnobelpreis 1990 (zusammen mit Merton H. Miller und William Sharpe), "for their pioneering work in the theory of financial economics"
- "Contribution: Constructed a micro theory of portfolio management for individual wealth holders"
- "To reduce risk it is necessary to avoid a portfolio whose securities are all highly correlated with each other."
- Fazit: Handlungsanweisungen zur bestmöglichen Kombination von Anlagealternativen für die Bildung eines optimalen Portfolios.
### Fachliche Aussage
Würdigung Markowitz' als Begründer der Portfoliotheorie; Kernaussage: Risiko senkt man durch Vermeidung hoch korrelierter Wertpapiere.
### React-Vorschlag
`PersonProfileCard` (Foto-Platzhalter, Lebensdaten, Beitragszitate als Liste).

## Folie 4 - Grundlagen der Portfoliotheorie: Portfolio aus 2 Wertpapieren (Aktie und Corporate Bond)
### In der MD vorhanden
Vorhanden, aber die Tabelle und die Indizes sind stark zerbrochen (Spalten zerfallen, Indizes A/B/P aus der Zeile gerutscht). Die Bedingungen "Wenn w_A=1 ..." sind kaum lesbar.
### Fehlende visuelle Inhalte
Saubere Datentabelle mit blauer Kopfzeile (Spaltenköpfe "Aktie", "Bond"; erste Spalte ohne Überschrift), Zeile "Erwartete Rendite", Zeile "Standardabweichung"; darunter über beide Datenspalten zusammengefasst die Zeile "Korrelation 0,5". Die Zwischenüberschrift "Portfolio aus 2 Wertpapieren: Aktie und Corporate Bond" ist blau/fett. Indizes (w_A, w_B, ρ_A,B, E(r_P), σ_A usw.) sind in der MD als Fließtext zerrissen.
### Visuelle Rekonstruktion
```
                       | Aktie  | Bond
Erwartete Rendite      | 16,0%  | 6,0%
Standardabweichung     | 14,0%  | 11,0%
Korrelation            |     0,5  (über beide Spalten zusammengefasst)
```
### Inhaltliche Rekonstruktion
| Kennzahl | Aktie | Bond |
|---|---|---|
| Erwartete Rendite | 16,0% | 6,0% |
| Standardabweichung | 14,0% | 11,0% |
| Korrelation | 0,5 (für beide gemeinsam) | |

Definitionen:
- w: Anteil, mit w_A + w_B = 1
- ρ_A,B: Korrelation zwischen A(ktie) und B(ond): -1 < ρ < +1
- Wenn w_A = 1, dann E(r_P) = E(r_A) und σ_P = σ_A
- Wenn w_A = 0, dann E(r_P) = E(r_B) und σ_P = σ_B
### Fachliche Aussage
Einführung des Ausgangsbeispiels (Aktie/Bond) mit Rendite-, Risiko- und Korrelationsdaten; Grenzfälle reiner Einzelinvestments.
### React-Vorschlag
`AssetDataTable` (Kopfzeile farbig, "Korrelation" als zusammengefasste Zeile) plus `FormulaList` für die Anteils-/Grenzfallbedingungen.

## Folie 5 - 2-Wertpapier-Portfolio: Erwartungswert und Risiko (Formeln)
### In der MD vorhanden
Die Formeln sind in der MD stark zerstört (zerfallene Zeichen, verstreute Indizes). Effektiv unlesbar.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie" mit Untertitel "2-Wertpapier-Portfolio". Zwei blau/fett gesetzte Bullet-Überschriften: "Erwartungswert 2-WP-Portfolio" und "Risiko 2-WP-Portfolio". GENAU ZWEI hellblau hinterlegte Formelboxen (nicht drei): (1) Erwartungswert E(r_P); (2) die eingerahmte Wurzelformel für σ_P. Die beiden Varianz-Darstellungen (σ_P² mit cov(A,B) und σ_P² mit σ_A·σ_B·ρ_A,B) stehen frei (NICHT in einer Box) zwischen den beiden Überschriften.
### Visuelle Rekonstruktion
```
Erwartungswert 2-WP-Portfolio
[ E(r_P) = w_A * E(r_A) + w_B * E(r_B) ]   (hellblaue Box)

Risiko 2-WP-Portfolio
σ_P² = w_A²*σ_A² + w_B²*σ_B² + 2*w_A*w_B*cov(A,B)        (frei, ohne Box)
σ_P² = w_A²*σ_A² + w_B²*σ_B² + 2*w_A*w_B*σ_A*σ_B*ρ_A,B    (frei, ohne Box)

[ σ_P = √( w_A²*σ_A² + w_B²*σ_B² + 2*w_A*w_B*σ_A*σ_B*ρ_A,B ) ]   (hellblaue Box)
```
### Inhaltliche Rekonstruktion
- Erwartungswert: E(r_P) = w_A · E(r_A) + w_B · E(r_B)
- Varianz: σ_P² = w_A²·σ_A² + w_B²·σ_B² + 2·w_A·w_B·cov(A,B) = w_A²·σ_A² + w_B²·σ_B² + 2·w_A·w_B·σ_A·σ_B·ρ_A,B
- Standardabweichung: σ_P = √(w_A²·σ_A² + w_B²·σ_B² + 2·w_A·w_B·σ_A·σ_B·ρ_A,B)
### Fachliche Aussage
Grundgleichungen für Rendite und Risiko eines Zwei-Wertpapier-Portfolios; das Risiko hängt zusätzlich von Kovarianz/Korrelation ab.
### React-Vorschlag
`FormulaBox` (KaTeX/MathML) für die hervorgehobenen Formeln (Erwartungswert und Endformel σ_P); die beiden Varianz-Zeilen ohne Box-Hintergrund.

## Folie 6 - Risiko großer Portfolios (Varianzformel und Inputdatenbedarf)
### In der MD vorhanden
Die Summenformel ist in der MD zerbrochen; der Begleittext und die Inputdaten-Liste sind lesbar.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie" mit Untertitel "Risiko großer Portfolios". Hervorgehobene (hellblaue) Formelbox mit Doppelsumme der Portfoliovarianz (Sigma-Zeichen mit Laufindex i=1 bis n). Darunter "mit n = Anzahl der Wertpapiere" und die Aufzählung des Inputdatenbedarfs; die Summenzeile "Summe: n(n+3)/2" ist fett.
### Visuelle Rekonstruktion
```
[ σ_p² = Σ_{i=1}^{n} w_i² σ_i²  + 2 Σ Σ  w_i w_j σ_i σ_j ρ_ij ]   (hellblaue Box)
mit n = Anzahl der Wertpapiere
```
### Inhaltliche Rekonstruktion
- Varianz großer Portfolios: σ_p² = Σ(i=1..n) w_i²·σ_i² + 2·ΣΣ w_i·w_j·σ_i·σ_j·ρ_ij
- Benötigte Inputdaten bei n Wertpapieren:
  - n Rendite-Erwartungen
  - n Volatilitäten
  - n(n-1)/2 Korrelationen
  - Summe: n(n+3)/2
### Fachliche Aussage
Verallgemeinerung der Risikoformel auf n Wertpapiere; der Schätzaufwand wächst quadratisch (n(n+3)/2 Inputs).
### React-Vorschlag
`FormulaBox` + `InfoList` für den Inputdatenbedarf (Summenzeile betont).

## Folie 7 - 2-Wertpapier-Portfolio: Beispiel (Wertetabelle mit Anteilen)
### In der MD vorhanden
Die Werte sind vorhanden, aber die Tabellenstruktur und die Spaltenköpfe sind zerstört; die Annotationen sind unverständlich extrahiert.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "2-Wertpapier-Portfolio". Blau/fette Zwischenüberschrift "Beispiel: Portfolio aus Aktien und Bonds". Fünfspaltige Tabelle mit blauer Kopfzeile: Spalten E(r_P), σ_p², σ_P, w_A, w_B. 11 Datenzeilen. Rechts neben der Tabelle zwei farbige Hinweisboxen (abgerundete Rechtecke) mit geschweiften Klammern: grüne Box klammert EXAKT die ersten vier Zeilen (E(r_P) 6,0%–9,0%, w_A 0%–30%) und enthält "E(r_P) ↑ und σ_p² ↓"; orange Box klammert die übrigen sieben Zeilen (E(r_P) 10,0%–16,0%, w_A 40%–100%) und enthält "E(r_P) ↑ und σ_p² ↑". Die Klammergrenze liegt genau am Minimum-Varianz-Portfolio (w_A=30%).
### Visuelle Rekonstruktion
```
E(r_P) | σ_p²   | σ_P   | w_A    | w_B
 6,0%-9,0% (Zeilen 1-4)                  }─ grün:  E(r_P)↑ und σ_p²↓
10,0%-16,0% (Zeilen 5-11)                }─ orange: E(r_P)↑ und σ_p²↑
```
### Inhaltliche Rekonstruktion
| E(r_P) | σ_p² | σ_P | w_A | w_B |
|---|---|---|---|---|
| 6,0% | 0,0121 | 11,0% | 0,0% | 100,0% |
| 7,0% | 0,0114 | 10,7% | 10,0% | 90,0% |
| 8,0% | 0,0110 | 10,5% | 20,0% | 80,0% |
| 9,0% | 0,0109 | 10,5% | 30,0% | 70,0% |
| 10,0% | 0,0112 | 10,6% | 40,0% | 60,0% |
| 11,0% | 0,0118 | 10,9% | 50,0% | 50,0% |
| 12,0% | 0,0127 | 11,3% | 60,0% | 40,0% |
| 13,0% | 0,0139 | 11,8% | 70,0% | 30,0% |
| 14,0% | 0,0155 | 12,4% | 80,0% | 20,0% |
| 15,0% | 0,0174 | 13,2% | 90,0% | 10,0% |
| 16,0% | 0,0196 | 14,0% | 100,0% | 0,0% |

Grüne Box: erste vier Zeilen (E(r_P) 6,0%–9,0%): E(r_P) ↑ und σ_p² ↓. Orange Box: Zeilen 5–11 (E(r_P) 10,0%–16,0%): E(r_P) ↑ und σ_p² ↑. Das minimale σ_p² (0,0109) liegt bei w_A=30%/w_B=70% (Minimum-Varianz-Portfolio); dort liegt genau die Grenze zwischen grüner und oranger Box.
### Fachliche Aussage
Numerisches Beispiel: Bei steigendem Aktienanteil sinkt die Varianz zunächst (Diversifikation), erreicht ein Minimum bei w_A=30% (Aktie) und steigt dann wieder; dies erzeugt die typische Effizienzkurve.
### React-Vorschlag
`PortfolioMixTable` mit hervorgehobener Minimum-Varianz-Zeile und zwei farblich markierten Bereichen (Klammer-Annotationen als Callouts; Grenze nach Zeile 4).

## Folie 8 - Das Minimum-Varianz-Portfolio / Der Diversifikationseffekt
### In der MD vorhanden
Erläuterungstext zum Diversifikationseffekt vollständig. Das Diagramm fehlt in der MD vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Das Minimum-Varianz-Portfolio". Blau/fette Zwischenüberschrift "Der Diversifikationseffekt"; "Diversifikation" im Fließtext blau hervorgehoben. Streudiagramm (μ-σ-Diagramm): x-Achse "Varianz" (0 bis 0,025), y-Achse "Erwartete Rendite" (0% bis 16%, in 2%-Schritten beschriftet). Eine nach links gekrümmte Punktwolke aus blauen Datenpunkten (entspricht der Tabelle von Folie 7). Beschriftungen: "Effizienzgrenze" (oberer Ast), "Minimum-Varianz-Portfolio" (linkster Punkt der Kurve), "Maximum-Rendite-Portfolio, w_A=100%" (oben rechts), "w_B=100%" (unterer Punkt). Form: parabelartig nach links gekrümmt.
### Visuelle Rekonstruktion
```
Rendite
16% |                         . Maximum-Rendite-Portfolio (w_A=100%)
    |                      .
    |                  .   <- Effizienzgrenze (oberer Ast)
 8% |   * Minimum-Varianz-Portfolio (linkster Punkt)
    |       .
 6% | . w_B=100% (unterer Ast)
    +---------------------------- Varianz
       0          0,01        0,025
```
### Inhaltliche Rekonstruktion
- Da A und B nicht perfekt miteinander korreliert sind, führt ein Portfolio aus beiden Wertpapieren zu einem besseren μ-σ-Profil als ein Portfolio aus nur einem der beiden Wertpapiere.
- Diesen Effekt nennt man Diversifikation.
### Fachliche Aussage
Die Kombination nicht perfekt korrelierter Wertpapiere verbessert das Rendite-Risiko-Profil; der linkste Punkt der Kurve ist das Minimum-Varianz-Portfolio.
### React-Vorschlag
`MuSigmaChart` (Scatter-/Linienchart, z.B. SVG) mit annotierten Punkten (MVP, Maximum-Rendite, w_B=100%).

## Folie 9 - Effizienzkurve (Definition)
### In der MD vorhanden
Vollständiger Text (Definition effizienter Portfolios, drei Kriterien, konkaver Bereich oberhalb des MVP, rationale Investoren). Keine Grafik auf der Folie.
### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählung ("§"-Bullets, eingerückte Unterpunkte mit "–", Pfeil "à"/→ für die Schlussfolgerung). Blau/fette Zwischenüberschrift "Effizienzkurve"; Schlussfolgerung blau hervorgehoben. Keine Diagramme/Tabellen.
### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).
### Inhaltliche Rekonstruktion
- Effiziente Portfolios liegen auf der sog. "Efficient Curve".
- Ein Portfolio ist genau dann effizient, wenn es zu diesem kein zweites gibt, welches: bei gegebenem Risiko eine höhere Renditeerwartung impliziert / bei gegebener Renditeerwartung mit einem geringeren Risiko einhergeht / sowohl eine höhere Rendite als auch niedrigeres Risiko aufweist.
- = der positiv geneigte, konkav verlaufende Bereich oberhalb des Minimum-Varianz-Portfolios.
- Portfolios auf der Effizienzkurve bieten die höchste mögliche Rendite bei gegebenem Risiko.
- Rationale Investoren akzeptieren ausschließlich Portfolios auf der Effizienzgrenze.
- Investoren, die ihre Risikotoleranz kennen, können so ihr optimales Portfolio ableiten.
- → Erhebliche Vereinfachung des Asset-Allocation-Prozesses.
### Fachliche Aussage
Definition der Effizienzgrenze und ihrer Bedeutung für rationale Anlageentscheidungen.
### React-Vorschlag
`DefinitionList` mit hervorgehobener Schlussfolgerungszeile (Pfeil-Callout).

## Folie 10 - Effizienzkurve: Weiteres Beispiel (Coca-Cola & Intel)
### In der MD vorhanden
Nur Überschrift, "2 Aktien: Coca-Cola & Intel", "ρ_Coca-Cola,Intel = 0", Quelle Berk/DeMarzo (2020). Tabellen und Diagramm fehlen vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Effizienzkurve: Weiteres Beispiel". Links oben eine rosa hinterlegte Datentabelle (Spalten "Aktie", "Erwartete Rendite", "Volatilität"; Zeilen Intel, Coca-Cola). Darunter (per grauem Abwärts-Dreieck verbunden) eine zweite rosa Tabelle "Erwartete Renditen und Volatilität verschiedener 2-Aktien-Portfolios" (Spaltengruppe "Portfoliogewichte" mit x_I, x_C; dann E[R_p] (%), SA[R_p] (%)). Rechts der Korrelationshinweis "ρ_Coca-Cola,Intel = 0" und ein μ-σ-Diagramm: x-Achse "Volatilität (Standardabweichung)" 0%-60%, y-Achse "Erwartete Rendite" 0%-30%; rote, konkave Effizienzkurve von Coca-Cola (unten, ca. 25%/6%) hinauf zu Intel (oben rechts, 50%/26%); Datenpunkte mit Gewichtungslabels (x_I, x_C): (0,1)/(0,2;0,8)/(0,4;0,6)/(0,6;0,4)/(0,8;0,2)/(1,0); oberer Ast rot beschriftet "Effiziente Portfolios", unterer Ast grau "Ineffiziente Portfolios".
### Visuelle Rekonstruktion
```
Rendite
30% |                                Intel (1,0)
26% |                          (0,8;0,2)
20% |                   (0,6;0,4)
15% |             (0,4;0,6)      <- rot: Effiziente Portfolios
10% |      (0,2;0,8)
 6% | (0,1) Coca-Cola             <- grau unten: Ineffiziente Portfolios
    +----------------------------- Volatilität
      0   20%   25%    40%   50%  60%
```
### Inhaltliche Rekonstruktion
| Aktie | Erwartete Rendite | Volatilität |
|---|---|---|
| Intel | 26 % | 50 % |
| Coca-Cola | 6 % | 25 % |

ρ_Coca-Cola,Intel = 0

| x_I | x_C | E[R_p] (%) | SA[R_p] (%) |
|---|---|---|---|
| 1,00 | 0,00 | 26,0 | 50,0 |
| 0,80 | 0,20 | 22,0 | 40,3 |
| 0,60 | 0,40 | 18,0 | 31,6 |
| 0,40 | 0,60 | 14,0 | 25,0 |
| 0,20 | 0,80 | 10,0 | 22,4 |
| 0,00 | 1,00 | 6,0 | 25,0 |

Quelle: Berk / DeMarzo (2020)
### Fachliche Aussage
Reales Beispiel zweier unkorrelierter Aktien (ρ=0): Die Mischung erzeugt eine konkave Effizienzkurve; das Minimum-Varianz-Portfolio liegt links der Einzeltitel.
### React-Vorschlag
`EfficientFrontierExample` (zwei Datentabellen + SVG-Effizienzkurve mit punktweisen Gewichtungslabels, oberer Ast farblich = effizient).

## Folie 11 - Einfluss des Korrelationskoeffizienten (Diagramm)
### In der MD vorhanden
Nur Überschrift "Der Einfluss des Korrelationskoeffizienten" und Quelle Berk/DeMarzo (2020). Das Diagramm fehlt vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Einfluss des Korrelationskoeffizienten". μ-σ-Diagramm: x-Achse "Volatilität (Standardabweichung)", y-Achse "Erwartete Rendite" 0%-30%. Eine Kurvenschar mit identischen Endpunkten (Coca-Cola unten, Intel oben rechts), die sich je nach Korrelationskoeffizient unterscheiden. Im Diagramm sind direkt zwei Kurven beschriftet: "Korrelation = -1" (am weitesten nach links gekrümmt, fast bis σ=0) und "Korrelation = +1" (gerade Verbindungslinie); dazwischen weitere Kurven. Bildunterschrift "Abbildung 11.4: Die Auswirkungen einer Veränderung der Korrelation zwischen den Intel- und Coca-Cola-Aktien auf Volatilität und die erwartete Rendite. In dieser Abbildung werden Korrelationen von 1, 0,5, 0, -0,5 und -1 dargestellt. Je niedriger die Korrelation, desto größer die Vorteile der Portfolios."
### Visuelle Rekonstruktion
```
Rendite
        Intel (oberer gemeinsamer Endpunkt)
       /| 
Korr=-1/ |  Korr=+1 (Gerade)
     |  |
     \  |
      \ |
   Coca-Cola (unterer gemeinsamer Endpunkt)
   Volatilität ->
```
### Inhaltliche Rekonstruktion
Eine Kurvenschar für ρ = 1; 0,5; 0; -0,5; -1 (alle mit gleichen Endpunkten Coca-Cola/Intel). Beschriftet sind im Diagramm "Korrelation = -1" (maximal nach links gewölbt, fast σ=0) und "Korrelation = +1" (Gerade).
Quelle: Berk / DeMarzo (2020)
### Fachliche Aussage
Je niedriger ρ, desto stärker die Linkswölbung der Kurve und desto größer der Diversifikationsvorteil; bei ρ=+1 keine Diversifikation (Gerade).
### React-Vorschlag
`CorrelationFrontierChart` (SVG mit umschaltbarer/überlagerter Kurvenschar für verschiedene ρ-Werte).

## Folie 12 - Effizienzkurve: Einfluss des Korrelationskoeffizienten (Text)
### In der MD vorhanden
Vollständiger Text mit den vier ρ-Fällen und Schlussfolgerung. Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Effizienzkurve". Blau/fette Zwischenüberschrift "Der Einfluss des Korrelationskoeffizienten". Reine Textfolie. ρ-Tags ("ρ = 1", "ρ < 1", "ρ = 0", "ρ = -1") sind blau/fett/kursiv, gefolgt von Pfeil "→"; Schlüsselbegriffe ("alle", "stets und vollständig gleichläufig", "unabhängig voneinander") blau hervorgehoben; abschließender Pfeil "à"/→ mit blauer Schlussfolgerung.
### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie mit Hervorhebungen).
### Inhaltliche Rekonstruktion
- Identische Endpunkte der Effizienzgrenze für alle Korrelationskoeffizienten.
- ρ = 1 → Diversifikation sinnlos: Wertpapiere bewegen sich stets und vollständig gleichläufig.
- ρ < 1 → ein bestimmtes Renditeniveau kann mit einer geringeren Varianz erreicht werden als bei ρ=1.
- ρ = 0 → Risiken sind unabhängig voneinander, keine Tendenz zu einer gemeinsamen Entwicklung.
- ρ = -1 → Minimum-Varianz-Grenze besteht aus zwei Geraden mit Schnittpunkt bei σ=0.
- → Je niedriger die Korrelation, desto größer die Vorteile der Diversifikation.
### Fachliche Aussage
Systematische Interpretation der vier Korrelationsfälle und ihrer Wirkung auf den Diversifikationsnutzen.
### React-Vorschlag
`CorrelationCasesList` (jeder ρ-Fall als Zeile mit hervorgehobenem ρ-Tag und Pfeil-Schlussfolgerung).

## Folie 13 - Korrelationsmatrix: Ausgewählte Asset Klassen
### In der MD vorhanden
Nur Überschriften "Korrelationsmatrix", "Ausgewählte Asset Klassen" und Quelle. Die komplette Matrix fehlt (als Bild eingebettet).
### Fehlende visuelle Inhalte
Große quadratische Korrelationsmatrix (Heatmap), Asset-Klassen in Zeilen und Spalten in gleicher Reihenfolge, Diagonale = 1,00. Links oben eine Legende mit Farbcodierung der Korrelationsbereiche in Schwellen (visuell ablesbar u.a. Bereiche "0,80 ≤ ρ < 1,00", "0,60 ≤ ρ < 0,80" usw. bis zu negativen Werten; rot = hohe positive Korrelation, über helle Töne bis grün/dunkel für niedrige/negative Werte). Zellen enthalten numerische Korrelationswerte (visuell abgelesen, ca. -0,5 bis +1,0), farblich hinterlegt. Zeilen-/Spaltenköpfe (visuell, teils unscharf): DAX, EURO STOXX 50, Nasdaq 100, S&P 500, MSCI World, mehrere Bond-/Aggregate-Indizes, S&P GSCI Energy, S&P GSCI Industrial Metals, S&P GSCI Precious Metals, Gold, EUR USD u.a. Spaltengruppen sind thematisch farblich getrennt (Aktien, Renten/Bonds, Rohstoffe, Währung/Performance).
### Visuelle Rekonstruktion
```
            DAX  STOXX Nasdaq S&P  MSCI  Bonds...  Gold  EURUSD
DAX         1,00
STOXX       ...  1,00
Nasdaq           ...   1,00
... (n x n Heatmap, Diagonale = 1,00)
Legende (Schwellen): 0,80–1,00 | 0,60–0,80 | ... | negativ
```
### Inhaltliche Rekonstruktion
Quadratische n×n-Korrelationsmatrix ausgewählter Assetklassen mit farbcodierten Zellen und einer Schwellen-Legende; Einzelwerte nicht zuverlässig ablesbar (zu klein gerendert).
Quelle: Bloomberg, Goldman Sachs: Fünf-Jahres-Korrelationen auf Basis wöchentlicher Renditen, Stand 01.12.2017.
### Fachliche Aussage
Empirische Korrelationen realer Assetklassen veranschaulichen, dass das Diversifikationspotenzial je nach Klassenpaar stark variiert.
### React-Vorschlag
`CorrelationHeatmap` (Tabelle mit farbskalierten Zellen + Schwellen-Farblegende). Da Einzelwerte nicht zuverlässig lesbar sind, als stilisierte Heatmap mit Quellenhinweis umsetzen.

## Folie 14 - Verlängerung der Effizienzkurve durch Leerverkäufe (Definitionen)
### In der MD vorhanden
Vollständiger Text (Long Position, Short Position, Definition Leerverkauf, Profitabilität). Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Verlängerung der Effizienzkurve durch Leerverkäufe". Blau/fette Zwischenüberschrift "Leerverkäufe". Reine Textfolie; "Long Position" und "Short Position" als fette Bullet-Überschriften, Unterpunkte mit "–".
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- Long Position (normale Situation): Positive Investition in ein Wertpapier.
- Short Position: Negative Investition in ein Wertpapier. Dabei handelt es sich um eine Transaktion, bei der ein Anleger heute eine nicht in seinem Besitz befindliche Aktie mit der Verpflichtung verkauft, die betreffende Aktie in der Zukunft zurückzukaufen. Der Leerverkauf ist profitabel, wenn erwartet wird, dass der Preis der Aktie in der Zukunft sinkt.
### Fachliche Aussage
Long- und Short-Positionen als Voraussetzung, um die Effizienzkurve über die Einzeltitel hinaus zu verlängern.
### React-Vorschlag
`ConceptComparison` (zwei Begriffsblöcke Long/Short mit Definitionen).

## Folie 15 - Verlängerung der Effizienzkurve durch Leerverkäufe (Diagramm)
### In der MD vorhanden
Nur Überschrift und Quelle Berk/DeMarzo (2020). Diagramm fehlt vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Verlängerung der Effizienzkurve durch Leerverkäufe". Blau/fette Zwischenüberschrift "Verlängerung der Effizienzkurve durch Leerverkäufe". μ-σ-Diagramm: x-Achse "Volatilität (Standardabweichung)", y-Achse "Erwartete Rendite" bis ca. 35%. Eine durchgehende Kurve (roter Mittelteil = Long-Bereich, gelbe Verlängerungen) über die Einzeltitel Coca-Cola und Intel hinaus. Beschriftete Punkte/Bereiche: "Coca-Cola" (mitte links), "Intel" (rechts/oben); oberer gelber Verlängerungsast "Intel long, Coca-Cola short" mit Gewichtung ca. (1,2; -0,2); unterer/linker gelber Ast "Intel short, Coca-Cola long" mit Gewichtung ca. (-0,2; 1,2). Bildunterschrift "Abbildung 11.5: Die Portfoliokombinationen aus Intel- und Coca-Cola-Aktien unter Berücksichtigung von Leerverkäufen ...".
### Visuelle Rekonstruktion
```
Rendite
35% |              . (1,2; -0,2) Intel long, Coca-Cola short  [gelb]
    |          . Intel
    |       .
    |    . (rote effiziente Kurve)
    | . Coca-Cola
    |  \
    |   . (-0,2; 1,2) Intel short, Coca-Cola long  [gelb]
    +------------------------------ Volatilität ->
```
### Inhaltliche Rekonstruktion
- Die Effizienzkurve verlängert sich durch Leerverkäufe über die Einzeltitel-Endpunkte hinaus.
- Oberer gelber Ast: Intel long, Coca-Cola short (Gewichtung ca. 1,2 / -0,2; visuell abgelesen).
- Unterer/seitlicher gelber Ast: Intel short, Coca-Cola long (Gewichtung ca. -0,2 / 1,2; visuell abgelesen).
Quelle: Berk / DeMarzo (2020)
### Fachliche Aussage
Mit Leerverkäufen (negativen Gewichten) lässt sich die Effizienzkurve über die Einzeltitel hinaus verlängern; höhere Renditen werden bei höherem Risiko erreichbar.
### React-Vorschlag
`ShortSellingFrontierChart` (SVG-Kurve mit zwei farblich abgesetzten Verlängerungsästen und Gewichtungs-Annotationen, "ca." gekennzeichnet).

## Folie 16 - Effizienzkurve für zahlreiche WP (Bore-Beispiel, Text)
### In der MD vorhanden
Vollständiger Text zum Bore-Industries-Beispiel. Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Effizienzkurve für zahlreiche WP". Blau/fette Zwischenüberschrift "Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren". Reine Textfolie mit "§"-Bullets.
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- Angenommen, in das Portfolio wird die Aktie von Bore Industries aufgenommen.
- Diese Aktie ist nicht mit Intel und Coca-Cola korreliert, sie weist eine sehr niedrige Rendite von 2% und die gleiche Volatilität wie Coca-Cola (25%) auf.
- Obwohl Bore eine geringere Rendite und dieselbe Volatilität wie Coca-Cola aufweist (also gegenüber Coca-Cola ineffizient ist), kann es aufgrund von Diversifikationsvorteilen trotzdem nützlich sein, Bore in das Portfolio aufzunehmen.
### Fachliche Aussage
Auch ein für sich ineffizientes Wertpapier kann den Diversifikationsnutzen eines Portfolios erhöhen, wenn es unkorreliert ist.
### React-Vorschlag
`InfoCallout` mit den Bore-Kennzahlen (Rendite 2%, Volatilität 25%, ρ=0 zu Intel/Coca-Cola) als hervorgehobene Datenpunkte.

## Folie 17 - Effizienzkurve für zahlreiche WP (Bore im Diagramm)
### In der MD vorhanden
Nur Überschrift und Quelle Berk/DeMarzo (2020). Diagramm fehlt vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Effizienzkurve für zahlreiche WP". Blau/fette Zwischenüberschrift "Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren". μ-σ-Diagramm: x-Achse "Volatilität (Standardabweichung)", y-Achse "Erwartete Rendite" bis ca. 30%. Drei Einzelpunkte: Intel (oben rechts), Coca-Cola (mitte links), Bore (unten, gleiche Volatilität wie Coca-Cola, niedrigere Rendite). Mehrere Paar-Kombinationskurven mit Beschriftungen "I + C", "B + C", "B + I" und Gewichtungslabels (visuell abgelesen, u.a. "(50% I, 50% C)", "(20% I, 80% C)", "(80% B, 20% C)"). Eine rot markierte gemeinsame Effizienzkurve. Bildunterschrift "Abbildung 11.6: Die erwartete Rendite und Volatilität ausgewählter Portfoliokombinationen aus Intel-, Coca-Cola- und Bore-Aktien."
### Visuelle Rekonstruktion
```
Rendite
        . Intel (I)
       /|
 I+C  / | I+B
     . Coca-Cola (C)
    /| B+C
   . Bore (B)  (gleiche σ wie C, niedrigere Rendite)
   Volatilität ->
rote Kurve = effiziente Hülle über die Kombinationen
```
### Inhaltliche Rekonstruktion
Drei Assets (Intel, Coca-Cola, Bore) und ihre Paar-Kombinationskurven (I+C, B+C, B+I) mit ausgewählten Gewichtungspunkten (visuell abgelesen, u.a. 50%/50%, 20%/80%, 80%/20%).
Quelle: Berk / DeMarzo (2020)
### Fachliche Aussage
Mit drei Assets ergibt sich eine ganze Region möglicher Portfolios; die Aufnahme von Bore verschiebt die Effizienzgrenze trotz dessen Ineffizienz nach links.
### React-Vorschlag
`MultiAssetFrontierChart` (SVG mit drei Asset-Punkten und mehreren Paarkurven; effiziente Hülle hervorgehoben).

## Folie 18 - Effizienzkurve für zahlreiche WP (Region und Effizienzgrenze)
### In der MD vorhanden
Nur Überschrift und Quelle Berk/DeMarzo (2020). Diagramm fehlt vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Effizienzkurve für zahlreiche WP". Blau/fette Zwischenüberschrift "Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren". μ-σ-Diagramm: x-Achse "Volatilität (Standardabweichung)" 0%-60%, y-Achse "Erwartete Rendite" 0%-30%. Eine schattierte Region "Portfolios aus Intel + Coca-Cola + Bore (einschließlich Leerverkäufe)" — gelber Bereich = mit Leerverkäufen, grauer Bereich = ohne Leerverkäufe. Rote Linie = "Effizienzgrenze mit 3 Aktien" (oberer linker Rand der Region). Punkte Intel (oben), Coca-Cola (mitte) und Bore (unten) markiert. Bildunterschrift "Abbildung 11.7: Die Volatilität und erwartete Rendite aller Portfolios bestehend aus Intel-, Coca-Cola- und Bore-Aktien."
### Visuelle Rekonstruktion
```
Rendite
        . Intel
   ___/| 
  /////|  <- Region (alle 3-Asset-Portfolios)
 |/////. Coca-Cola
  \////|
   \///. Bore
  rote Linie links oben = Effizienzgrenze (3 Aktien)
  gelb = mit Leerverkäufen, grau = ohne Leerverkäufe
  Volatilität ->
```
### Inhaltliche Rekonstruktion
- Die Gesamtheit aller 3-Asset-Portfolios bildet eine 2-dimensionale Region im μ-σ-Raum.
- Rote Linie = Effizienzgrenze mit 3 Aktien (oberer linker Rand der Region).
- Gelber Bereich = Portfolios mit Leerverkäufen; grauer Bereich = ohne Leerverkäufe (visuell abgelesen).
Quelle: Berk / DeMarzo (2020)
### Fachliche Aussage
Mit mehreren Assets entsteht eine ganze erreichbare Fläche; nur der obere linke Rand (Effizienzgrenze) ist effizient.
### React-Vorschlag
`FeasibleRegionChart` (SVG mit gefüllter erreichbarer Region und hervorgehobener oberer Effizienzkante).

## Folie 19 - Effizienzkurve für zahlreiche WP (10 reale Aktien)
### In der MD vorhanden
Nur Überschrift und Quelle Berk/DeMarzo (2020). Diagramm fehlt vollständig.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Effizienzkurve für zahlreiche WP". Blau/fette Zwischenüberschrift "Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren". μ-σ-Diagramm: x-Achse "Volatilität (Standardabweichung)", y-Achse "Erwartete Rendite" bis ca. 15%. Zahlreiche beschriftete Einzelaktien als Punkte (visuell ablesbar u.a.: Tiffany, Apple, Amazon, IBM, Molson Coors, McDonald's, Walmart, Newmont Mining). Zwei Effizienzlinien: eine rote durchgezogene "Effizienzlinie mit drei und zehn Aktien" sowie eine rote gestrichelte "Effizienzlinie mit allen 10 Aktien" (weiter links/oben), im Diagramm mit "Amazon, GE und McDonald's" annotiert. Bildunterschrift "Abbildung 11.8: Effizienzlinie mit drei und zehn Aktien. Die Effizienzlinie erweitert sich, wenn weitere Aktien aufgenommen werden (Volatilitäten und Korrelationen auf Basis monatlicher Renditen von 2005 bis 2015)."
### Visuelle Rekonstruktion
```
Rendite
15% |          Tiffany .
    |   __---  . Apple
    |  /  ___-- . Amazon
    | / /  . IBM   . Molson Coors
    |/ /  . McDonald's
    |/   . Walmart   . Newmont Mining
    +------------------------------ Volatilität ->
  rote durchgezogen = Effizienzlinie mit 3 & 10 Aktien
  rote gestrichelt = Effizienzlinie mit allen 10 Aktien (weiter links)
```
### Inhaltliche Rekonstruktion
Reale Einzelaktien (u.a. Tiffany, Apple, Amazon, IBM, Molson Coors, McDonald's, Walmart, Newmont Mining; visuell abgelesen). Zwei Effizienzlinien: mit drei und zehn Aktien (durchgezogen) und mit allen 10 Aktien (gestrichelt); letztere liegt weiter links/oben (besseres μ-σ-Profil).
Quelle: Berk / DeMarzo (2020)
### Fachliche Aussage
Je mehr (möglichst unkorrelierte) Aktien aufgenommen werden, desto weiter dehnt sich die Effizienzlinie nach links aus – mehr Diversifikationspotenzial.
### React-Vorschlag
`StockUniverseFrontierChart` (SVG-Scatter realer Aktien + zwei Effizienzlinien, durchgezogen vs. gestrichelt).

## Folie 20 - Gemeinsames und unabhängiges Risiko (Begriffe)
### In der MD vorhanden
Vollständiger Text (Einleitung + drei Begriffsdefinitionen). Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Gemeinsames und unabhängiges Risiko". Blau/fette Zwischenüberschrift "Gemeinsames und unabhängiges Risiko"; fette Zwischenzeile "Begriffe". Die drei Begriffe (Gemeinsames Risiko, Unabhängiges Risiko, Diversifikation) sind blau/fett hervorgehoben.
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- Einleitung: Im Folgenden wird analysiert, warum sich das Risiko eines einzelnen Wertpapiers vom Risiko eines aus ähnlichen Wertpapieren bestehenden Portfolios unterscheidet.
- Begriffe:
  - Gemeinsames Risiko: Risiko, das perfekt korreliert ist, Risiko, das alle Wertpapiere betrifft.
  - Unabhängiges Risiko: Risiko, das unkorreliert ist, Risiko, das eine bestimmte Sicherheit betrifft.
  - Diversifikation: Die Mittelwertbildung aus unabhängigen Risiken in einem großen Portfolio.
### Fachliche Aussage
Grundbegriffe gemeinsames vs. unabhängiges Risiko als Basis für die Erklärung des Diversifikationseffekts.
### React-Vorschlag
`GlossaryList` (drei Begriffsdefinitionen mit hervorgehobenem Term).

## Folie 21 - Gemeinsames und unabhängiges Risiko (Einbruchs- vs. Erdbebenversicherung)
### In der MD vorhanden
Vollständiger Beispieltext (Versicherungsbeispiel San Francisco). Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Gemeinsames und unabhängiges Risiko". Blau/fette Zwischenüberschrift "Einbruchs- im Vergleich zur Erdbebenversicherung". Fette Zwischenzeile "Einbruchsversicherungen und Erdbebenversicherungen". "§"-Bullets.
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- Es werden zwei Arten von Versicherungen betrachtet: Einbruchsversicherungen und Erdbebenversicherungen.
- In jedem Jahr besteht eine Wahrscheinlichkeit eines Einbruchs in das Haus von einem Prozent (ca. 1%); sowie eine Wahrscheinlichkeit, dass das Haus durch ein Erdbeben beschädigt wird, von ebenfalls einem Prozent.
- Die Versicherungsgesellschaft hält jeweils 100.000 Policen (eigentümerbezogen) je dieses Typs für Eigenheimbesitzer in San Francisco abgeschlossen.
- Einbruch: ca. 1% von 100.000 → ca. 1.000 Ansprüche pro Jahr; die tatsächliche Anzahl der Ansprüche variiert nur wenig.
- Erdbeben: in den meisten Jahren tritt kein Erdbeben auf; tritt ein Erdbeben auf, sind wahrscheinlich alle Häuser betroffen → bis zu 100.000 Ansprüche zu erwarten.
### Fachliche Aussage
Bei gleicher Erwartungszahl der Ansprüche haben unabhängige Risiken (Einbruch) und gemeinsame Risiken (Erdbeben) völlig unterschiedliche Risikoeigenschaften für den Versicherer.
### React-Vorschlag
`CaseStudyCard` (Versicherungsbeispiel als erläuternde Box mit Kennzahlen 1%, 100.000, 1.000).

## Folie 22 - Gemeinsames und unabhängiges Risiko (Risikotypen, Fortsetzung)
### In der MD vorhanden
Vollständiger Text (Schlussfolgerung + drei Risikotypen). Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Gemeinsames und unabhängiges Risiko". Blau/fette Zwischenüberschrift "Einbruchs- im Vergleich zur Erdbebenversicherung". "Risikotypen" als fette Bullet-Überschrift, Unterpunkte mit "–".
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- Damit führen die Erdbeben- und die Einbruchsversicherung, selbst wenn die erwartete Anzahl der Ansprüche gleich ist, zu Portfolios mit sehr unterschiedlichen Risikoeigenschaften.
- Risikotypen:
  - Ein Risiko, das perfekt korreliert ist, wird als gemeinsames Risiko bezeichnet.
  - Risiken, die keine Korrelation aufweisen, werden als unabhängige Risiken bezeichnet.
  - Das Ausgleichen unabhängiger Risiken in einem großen Portfolio wird als Diversifikation bezeichnet.
### Fachliche Aussage
Zusammenfassung der drei Risikotypen am Versicherungsbeispiel.
### React-Vorschlag
`GlossaryList` (Wiederverwendung der Begriffsstruktur von Folie 20).

## Folie 23 - Die Rolle der Diversifikation (Versicherungsformeln)
### In der MD vorhanden
Text vorhanden, die Formeln jedoch zerbrochen (Hochzahlen als "8" statt "²"). Werte (9,95%, 0,03%) sind erkennbar.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Die Rolle der Diversifikation". Blau/fette Zwischenüberschrift "Die Rolle der Diversifikation". Fette Zwischenüberschriften "Aus Sicht des Hausbesitzers" und "Aus Sicht der Versicherung". Zwei zentriert gesetzte Formeln (ohne Box): (1) Standardabweichung des einzelnen Anspruchs = 9,95%; (2) Standardabweichung des Prozentsatzes der Einbruchsansprüche (Bruch mit Wurzel im Nenner) = 0,03%. Im Abschlussbullet ist "kaum" blau hervorgehoben.
### Visuelle Rekonstruktion
```
σ(Anspruch) = √Var(Anspruch)
            = √( 0,99·(0 − 0,01)² + 0,01·(1 − 0,01)² ) = 9,95%

σ(Prozentsatz Ansprüche aus Einbrüchen) = σ(einzelner Anspruch) / √(Anzahl der Beobachtungen)
                                        = 9,95% / √100.000 = 0,03%
```
### Inhaltliche Rekonstruktion
- Aus Sicht des Hausbesitzers: Die Standardabweichung für einen Verlust durch ein Erdbeben und durch einen Diebstahl ist gleich hoch. σ(Anspruch) = √Var(Anspruch) = √(0,99·(0−0,01)² + 0,01·(1−0,01)²) = 9,95%. Der Prozentsatz der beim Erdbebenversicherer eingehenden Ansprüche ist ebenfalls durchschnittlich gleich einem Prozent bei einer Standardabweichung von 9,95%.
- Aus Sicht der Versicherung: σ(Prozentsatz Einbruchsansprüche) = σ(einzelner Anspruch) / √(Anzahl der Beobachtungen) = 9,95% / √100.000 = 0,03%.
- Somit besteht für den Versicherer kaum noch ein Risiko.
### Fachliche Aussage
Durch Aggregation vieler unabhängiger Risiken (Einbruch) sinkt die Standardabweichung pro Police dramatisch (9,95% → 0,03%); bei gemeinsamem Risiko (Erdbeben) bleibt sie bestehen.
### React-Vorschlag
`FormulaBox` (zwei Formeln) plus zwei `PerspectiveBlock`-Abschnitte (Hausbesitzer vs. Versicherung).

## Folie 24 - Die Rolle der Diversifikation: Diversifikation und Glücksspiel (Aufgabe)
### In der MD vorhanden
Vollständiger Aufgabentext (Roulette-Beispiel mit drei Fragen). Keine Grafik.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Die Rolle der Diversifikation". Blau/fette Zwischenüberschrift "Diversifikation und Glücksspiel". Drei "§"-Fragen.
### Visuelle Rekonstruktion
Nicht erforderlich.
### Inhaltliche Rekonstruktion
- In einem Roulettekessel sind normalerweise die Ziffern 1 bis 36 sowie die 0 angebracht. Jedes dieser Ergebnisse ist jedes Mal, wenn das Rad gedreht wird, gleich wahrscheinlich. Wettet man auf eine Zahl und liegt richtig, ist die Auszahlung gleich 35:1 (EUR 1 Einsatz → man erhält EUR 36 zurück [ursprünglicher EUR 1 oder nichts, wenn man verliert]).
- Fragen: (1) Wie hoch ist der erwartete Gewinn des Kasinos? (2) Wie hoch ist die Standardabweichung dieses Gewinns bei einem einzelnen Spieleinsatz? (Im gesamten Kasino werden in einem typischen Monat 9 Millionen ähnliche Wetten abgegeben.) (3) Wie hoch ist die Standardabweichung der durchschnittlichen Einnahmen des Kasinos pro in jedem Monat gewetteten Euro?
### Fachliche Aussage
Aufgabenstellung, die das Diversifikationsprinzip (viele unabhängige Einsätze) auf das Glücksspiel-Beispiel überträgt.
### React-Vorschlag
`ExerciseCard` (Aufgabenstellung mit nummerierten Teilfragen).

## Folie 25 - Die Rolle der Diversifikation: Diversifikation und Glücksspiel (Lösung)
### In der MD vorhanden
Text vorhanden, Formeln stark zerbrochen (verstreute Brüche). Ergebnisse (0,027 €, 5,84 €, 0,0019 €) teils erkennbar.
### Fehlende visuelle Inhalte
Titel "Grundlagen der Portfoliotheorie", Untertitel "Die Rolle der Diversifikation". Blau/fette Zwischenüberschrift "Diversifikation und Glücksspiel"; fette Zwischenzeile "Lösung". Drei zentriert gesetzte Formeln: (1) erwartete Auszahlung des Kasinos; (2) Standardabweichung der Auszahlung bei einem einzelnen Einsatz; (3) Standardabweichung der durchschnittlichen Auszahlung über 9 Mio. Einsätze (Bruch mit Wurzel im Nenner).
### Visuelle Rekonstruktion
```
E[Auszahlung] = (1/37)·(−35 €) + (36/37)·(1 €) = 0,027 €

σ(Auszahlung) = √( (1/37)·(−35 − 0,027)² + (36/37)·(1 − 0,027)² ) = 5,84 €

σ(durchschn. Auszahlung) = 5,84 € / √9.000.000 = 0,0019 €
```
### Inhaltliche Rekonstruktion
- Da im Roulettekessel 37 Zahlen angebracht sind, stehen die Chancen auf einen Gewinn 1/37. Das Kasino verliert bei einem Gewinn EUR 35 und erzielt EUR 1, wenn Sie verlieren.
- Erwarteter Gewinn des Kasinos: E[Auszahlung] = (1/37)·(−35 €) + (36/37)·(1 €) = 0,027 €.
- Diese Standardabweichung ist verglichen mit der Höhe der Gewinne recht hoch: σ(Auszahlung) = √((1/37)·(−35−0,027)² + (36/37)·(1−0,027)²) = 5,84 €.
- Doch wenn viele (im Monat 9 Millionen) solche Spieleinsätze erfolgen, wird das Risiko in jedem Monat diversifiziert: σ(durchschn. Auszahlung) = 5,84 € / √9.000.000 = 0,0019 €.
### Fachliche Aussage
Obwohl der Einzelgewinn stark schwankt (σ = 5,84 €), reduziert die Diversifikation über 9 Mio. unabhängige Wetten die Standardabweichung pro Euro auf 0,0019 € – das Kasino trägt praktisch kein Risiko.
### React-Vorschlag
`SolutionCard` (Aufgabenlösung mit drei `FormulaBox`-Schritten und betonten Endergebnissen).

## Folie 26 - Unternehmensspezifisches und systematisches Risiko (S&P 500 Historie)

### In der MD problematisch/fehlend
Die MD (Zeilen 350-353) enthält nur Titel und Quellenangabe "Quelle: Berk / DeMarzo (2020)". Das gesamte Diagramm fehlt vollständig.

### Fehlende visuelle Inhalte
Ein Zeitreihen-Flächendiagramm der annualisierten Volatilität von ca. 1970 bis 2015 (Folienfußzeile: "Folie 178").
- Y-Achse: "Annualisierte Volatilität", Skala 0% bis 100% in 10%-Schritten.
- X-Achse: "Year", Beschriftung 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015.
- Zwei Flächenkurven mit Legende oben links:
  - Rote/dunkelrote Fläche: "Gewichtete durchschnittliche Standardabweichung einzelner Aktien" (liegt durchgehend höher).
  - Schwarze/dunkle Fläche im Vordergrund: "Standardabweichung des S&P 500 Index" (liegt deutlich niedriger).
- Beschriftete Peaks an Krisen mit Pfeilmarkierungen (Text auf der Folie):
  - "Börsencrash von 1987" (Peak um 1987)
  - "Finanzkrise von 2008" (höchster Peak, ca. 2008; Volatilität visuell ca. 90-100%)
  - "Euro-Krise 2010-2011" (Peak rechts, ca. 2010-2011)
- Hinweis: Auf der Folie sind genau diese drei Krisen namentlich markiert. Ein zweiter Peak um das Jahr 2000 ist im Verlauf sichtbar, aber NICHT beschriftet (im Entwurf des Kollegen fälschlich als zweiter "Börsencrash von 1987" benannt - entfernt).
- Kernaussage des Bildes: Die Volatilität einzelner Aktien liegt stets deutlich über der des breit diversifizierten Index.

### Visuelle Rekonstruktion
```
Vol %
100 |                                   ^Finanzkrise 2008
 80 |        ^Crash 1987        rote Flaeche (Einzelaktien)
 60 |       /\         /\      /\   ^Euro-Krise 2010-11
 40 |  ~~~~/  \~~~~~~~/  \~~~~/  \~~~
 20 |  __schwarze Flaeche (S&P 500)__
  0 +------------------------------------------
   1970  1980   1990   2000   2010   2015
```

### Inhaltliche Rekonstruktion
- Einzelaktien-Volatilität (gewichteter Durchschnitt) > S&P-500-Index-Volatilität über den gesamten Zeitraum.
- Namentlich markierte Krisenereignisse: Börsencrash 1987, Finanzkrise 2008 (höchste Volatilität), Euro-Krise 2010-2011.
- Quelle: Berk / DeMarzo (2020)

### Fachliche Aussage
Diversifikation reduziert das Risiko: Ein breiter Index ist deutlich weniger volatil als der Durchschnitt seiner Einzeltitel; in Krisen steigt die Volatilität gleichgerichtet (systematisches Risiko).

### React-Vorschlag
`VolatilityTimelineChart` - Flächen-Zeitreihe (z. B. Recharts AreaChart) mit zwei Serien und annotierten Krisen-Markern. Alternativ als statisches `SourceFigure`-Bild mit Bildunterschrift.

---

## Folie 27 - Unternehmensspezifisches und systematisches Risiko (Begriffe)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 355-365). Reiner Textinhalt, kein visueller Verlust.

### Fehlende visuelle Inhalte
Keine Grafiken. Nur Fließtext mit Aufzählung. Hervorhebungen ("Unternehmensspezifische", "Marktweite") sind fett gesetzt.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- Unternehmensspezifische Nachrichten: gute oder schlechte Nachrichten über das Unternehmen an sich.
- Marktweite Meldungen: Nachrichten, die alle Aktien beeinflussen, z. B. über die Volkswirtschaft.
  - Konjunkturschwankungen
  - Zinsniveauveränderungen oder
  - andere makroökonomische Größen.

### Fachliche Aussage
Renditeschwankungen entstehen durch zwei Nachrichtentypen: unternehmensspezifische (idiosynkratische) und marktweite (systematische) Meldungen.

### React-Vorschlag
`ContentSection` mit zwei Definitionsblöcken; Marktweite Faktoren als Unterliste.

---

## Folie 28 - Unternehmensspezifisches und systematisches Risiko (Risikotypen)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 367-381). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Hervorhebungen im Fließtext: "gemeinsame Risiken", "systematisches, nicht diversifizierbares oder Marktrisiko", "unternehmensspezifischer Risiken", "unabhängige", "unternehmensspezifisches, idiosynkratisches oder diversifizierbares Risiko", "wegdiversifiziert".

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- Marktweite Meldungen → gemeinsame Risiken → systematisches / nicht diversifizierbares / Marktrisiko.
- Unternehmensspezifische Risiken → unabhängige Risiken → idiosynkratisches / diversifizierbares Risiko; gleichen sich in großen Portfolios "im Mittel" aus und werden "wegdiversifiziert".

### Fachliche Aussage
Marktweite Risiken sind systematisch und nicht wegdiversifizierbar; unternehmensspezifische Risiken sind diversifizierbar.

### React-Vorschlag
`ContentSection`; ggf. zweispaltige Gegenüberstellung "systematisch vs. unsystematisch" als kleine Tabelle.

---

## Folie 29 - Unternehmensspezifisches und systematisches Risiko (Typ S vs. Typ I)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 383-402). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Hervorhebungen: "zwei Arten von Unternehmen", "Typ S", "Typ I".

### Visuelle Rekonstruktion
Zur Strukturierung als Tabelle (Werte aus dem Folientext entnommen):
| Unternehmenstyp | Einflussfaktor | Rendite gut | Rendite schlecht | Chance | Diversifizierbar? |
|---|---|---|---|---|---|
| Typ S | nur wirtschaftliche Lage (systematisch) | +40% | -20% | 50:50 | nein |
| Typ I | nur lokale/unternehmensspezifische Faktoren | +35% | -25% | ca. 50:50 | ja |

### Inhaltliche Rekonstruktion
- Typ S: wirtschaftliche Lage gut → 40%, schlecht → -20% (Chance 50:50); systematisches Risiko, ein Portfolio aus Typ-S-Aktien diversifiziert das Risiko NICHT.
- Typ I: durch den lokalen Markt unternehmensspezifisch beeinflusst → 35% oder -25% (ca. 50:50); ein Portfolio aus vielen Typ-I-Aktien diversifiziert das Risiko.

### Fachliche Aussage
Anhand zweier Modellunternehmen wird gezeigt: systematisches Risiko (Typ S) bleibt im Portfolio bestehen, unternehmensspezifisches Risiko (Typ I) verschwindet durch Diversifikation.

### React-Vorschlag
`ContentSection` mit eingebetteter Vergleichstabelle Typ S / Typ I.

---

## Folie 30 - Unternehmensspezifisches und systematisches Risiko (Volatilität vs. Aktienanzahl)

### In der MD problematisch/fehlend
Die MD (Zeilen 404-408) enthält nur Titel und Quelle. Das Diagramm und der Abbildungstext (Abbildung 10.8) fehlen.

### Fehlende visuelle Inhalte
Linien-Diagramm (Folienfußzeile: "Folie 182") "Volatilität von Portfolios aus Aktien von Unternehmen des Typs S und des Typs I".
- Y-Achse: "Volatilität des Portfolios (Standardabweichung)", Skala 0% bis 35% (5%-Schritte, visuell abgelesen).
- X-Achse: "Aktienanzahl", logarithmische Skala mit Markierungen 1, 10, 100, 1.000.
- Drei Kurven:
  - Obere (nahezu) waagerechte Linie bei ca. 30% (visuell abgelesen): "Typ S" - bleibt konstant hoch unabhängig von der Aktienzahl (systematisches Risiko).
  - Mittlere fallende Kurve: "Typische Unternehmen" - sinkt mit zunehmender Aktienzahl, nähert sich aber nicht null an, sondern einem positiven Sockel.
  - Untere stark fallende Kurve: "Typ I" - sinkt mit steigender Aktienzahl gegen ca. 0% (vollständige Diversifikation).
- Abbildungsbeschriftung (Auszug): "Abbildung 10.8: Die Volatilität von Portfolios aus Aktien von Unternehmen des Typs S und des Typs I. ..."

### Visuelle Rekonstruktion
```
Vol %
35 |__________________________ Typ "S" (konstant, systematisch)
30 |\
20 | \___ Typische Unternehmen (sinkt, Sockel bleibt)
10 |  \
 0 |   \________________________ Typ "I" (-> 0, voll diversifiziert)
   +----+-----+------+-------
    1   10   100   1.000   Aktienanzahl (log)
```

### Inhaltliche Rekonstruktion
- Typ S: keine Diversifikation, Volatilität bleibt konstant.
- Typ I: vollständige Diversifikation, Volatilität → 0 bei vielen Aktien.
- Typische Unternehmen liegen dazwischen; ihr unsystematischer Teil wird wegdiversifiziert, der systematische Sockel bleibt.
- Quelle: Berk / DeMarzo (2020)

### Fachliche Aussage
Mit steigender Aktienanzahl sinkt die Portfoliovolatilität bis auf das systematische Restrisiko; rein idiosynkratische Risiken (Typ I) verschwinden vollständig.

### React-Vorschlag
`DiversificationCurveChart` (LineChart, log-X-Achse) mit drei Serien Typ S / typisch / Typ I, oder statisches `SourceFigure`.

---

## Folie 31 - Der Diversifikationseffekt in Abhängigkeit der Anzahl an Aktien (Assets)

### In der MD problematisch/fehlend
Die MD (Zeilen 410-423) zerbricht stark: Achsenbeschriftung "Gesamtrisiko des Portfolios" erscheint vertikal/rückwärts, Quelle und Kernsatz sind verstreut.

### Fehlende visuelle Inhalte
Diagramm (Folienfußzeile: "Folie 183") "Gesamtrisiko vs. Anzahl Aktien".
- Y-Achse (vertikal beschriftet): "Gesamtrisiko des Portfolios" - mit Tick-Marken, aber OHNE Zahlenskala.
- X-Achse: "Anzahl Aktien (Assets)" - mit Tick-Marken, ohne Zahlenskala.
- Orange Kurve: fällt von oben links steil ab, flacht nach rechts ab und nähert sich asymptotisch der grünen Linie.
- Grüne (nahezu) waagerechte Linie auf niedrigem Niveau = systematisches Risiko.
- Beschriftungen in der Grafik (schwarz, fett): "Unsystematisches Risiko" (oberhalb der grünen Linie, am Abstand orange Kurve ↔ grüne Linie) und "Systematisches Risiko" (unterhalb, auf Höhe der grünen Linie).
- Rechts oben Fließtext (kein Kasten): "Das Ausmaß der **Diversifikationsgewinne** nimmt mit zunehmender Anzahl der Assets ab."

### Visuelle Rekonstruktion
```
Gesamtrisiko
 | \
 |  \  (orange)
 |   \___          <- Unsystematisches Risiko (Abstand)
 |      \______
 |____________====  <- Systematisches Risiko (gruene Linie)
 +---------------------- Anzahl Aktien (Assets)
```

### Inhaltliche Rekonstruktion
- Gesamtrisiko = unsystematisches Risiko (wegdiversifizierbar, orange) + systematisches Risiko (Sockel, grün).
- Diversifikationsgewinn nimmt mit jeder weiteren Aktie ab (degressiv).
- Quelle: Berk / DeMarzo (2020)

### Fachliche Aussage
Mit zunehmender Aktienzahl sinkt das Gesamtrisiko nur bis zum systematischen Sockel; der Grenznutzen weiterer Diversifikation nimmt ab.

### React-Vorschlag
`SystematicVsUnsystematicChart` (AreaChart: orange unsystematisch über grüner Basis) mit Annotation-Callout.

---

## Folie 32 - Portfolio aus 2 Wertpapieren: Aktie und Corporate Bond (Beispiel von vorne)

### In der MD problematisch/fehlend
Die MD (Zeilen 425-453) enthält die Datentabelle (lesbar) und Eckdaten, das Streudiagramm (Effizienzkurve) fehlt jedoch ganz. Spaltenüberschriften der Tabelle sind als Symbolfragmente zerbrochen.

### Fehlende visuelle Inhalte
Folie 184 hat einen orangenen "Beispiel von vorne"-Banner oben rechts. Links die Eckdaten- und Wertetabelle, rechts ein μ-σ-Streudiagramm.
- Streudiagramm rechts: X-Achse "Varianz", Y-Achse "Erwartete Rendite" (Skala 0% bis 18%, 2%-Schritte, visuell abgelesen). Punktwolke bildet eine nach links geöffnete Kurve (Effizienzkurve); die Punkte sind mit einer schräg liegenden Ellipse umrandet.
- Beschriftungen/Callouts im Diagramm:
  - "Effizienzgrenze" (oberer Ast, blauer Kasten links)
  - "Maximum-Rendite-Portfolio, w_A=100%" (oberer rechter Endpunkt) - NICHT "w_Aktie=100%" (Korrektur ggü. Entwurf)
  - "Minimum-Varianz-Portfolio" (linker Scheitelpunkt)
  - "w_B=100%" (unterer Endpunkt)

### Visuelle Rekonstruktion
```
E(r)
16% |               . w_A=100% (Max-Rendite)
    |            .
    |         .   (Effizienzgrenze)
 8.7%| . MVP (linker Scheitel)
    |   .
 6% |      . w_B=100%
    +------------------------ Varianz
```

### Inhaltliche Rekonstruktion
Eckdaten (Tabelle oben):
| | Aktie | Bond |
|---|---|---|
| Erwartete Rendite | 16,0% | 6,0% |
| Standardabweichung | 14,0% | 11,0% |
| Korrelation | 0,5 | |

Wertetabelle Portfolio (Spalten: E(r) | σ²_P | σ_P | w_A | w_B):
| E(r) | σ²_P | σ_P | w_A | w_B |
|---|---|---|---|---|
| 6,0% | 0,0121 | 11,0% | 0,0% | 100,0% |
| 7,0% | 0,0114 | 10,7% | 10,0% | 90,0% |
| 8,0% | 0,0110 | 10,5% | 20,0% | 80,0% |
| 9,0% | 0,0109 | 10,5% | 30,0% | 70,0% |
| 10,0% | 0,0112 | 10,6% | 40,0% | 60,0% |
| 11,0% | 0,0118 | 10,9% | 50,0% | 50,0% |
| 12,0% | 0,0127 | 11,3% | 60,0% | 40,0% |
| 13,0% | 0,0139 | 11,8% | 70,0% | 30,0% |
| 14,0% | 0,0155 | 12,4% | 80,0% | 20,0% |
| 15,0% | 0,0174 | 13,2% | 90,0% | 10,0% |
| 16,0% | 0,0196 | 14,0% | 100,0% | 0,0% |

(Spaltenköpfe im Original: E(r), σ²_P, σ_P, w_A, w_B - der Entwurf hatte "w_Aktie/w_Bond" verwendet; korrekt sind w_A/w_B.)

### Fachliche Aussage
Aus dem bekannten 2-Asset-Beispiel (Aktie/Bond, ρ=0,5) ergibt sich eine Effizienzkurve im μ-σ-Raum mit MVP (linker Scheitel) und Maximum-Rendite-Portfolio (100% Aktie, w_A=100%).

### React-Vorschlag
`EfficientFrontierExample` - kombiniert die Datentabelle und ein ScatterChart der Effizienzkurve mit markierten MVP- und Endpunkten.

---

## Folie 33 - Bestimmung der Gewichtung von A (B) im Minimum-Varianz-Portfolio (MVP)

### In der MD problematisch/fehlend
Die MD (Zeilen 455-481) ist mathematisch vollständig zerbrochen (Symbolsalat). Die Formeln müssen aus der Folie rekonstruiert werden. Folientitel (Untertitel der Folie): "Bestimmung der Effizienkurve (2-Asset-Portfolio)"; blaue Überschrift: "Bestimmung der Gewichtung von A (B) im Minimum-Varianz-Portfolio (MVP)".

### Fehlende visuelle Inhalte
Drei Formelblöcke (Folienfußzeile: "Folie 185"), der letzte in blau hinterlegtem Kasten.

### Visuelle Rekonstruktion
Nicht erforderlich (Formelfolie).

### Inhaltliche Rekonstruktion
Betrachtete Varianz:
σ²_P = w_A² · σ_A² + w_B² · σ_B² + 2 · w_A · w_B · σ_A · σ_B · ρ_{A,B}

w_B ersetzt durch (1 − w_A):
σ²_P = w_A² · σ_A² + (1 − w_A)² · σ_B² + 2 · w_A · (1 − w_A) · σ_A · σ_B · ρ_{A,B}

Die Funktion wird nach w_A abgeleitet und gleich null gesetzt; man erhält (blauer Kasten):
w_A = (σ_B² − σ_A·σ_B·ρ_{A,B}) / (σ_A² + σ_B² − 2·σ_A·σ_B·ρ_{A,B})

### Fachliche Aussage
Das Minimum-Varianz-Portfolio ergibt sich durch Ableiten der Portfoliovarianz nach dem Gewicht w_A und Nullsetzen; daraus folgt eine geschlossene Formel für w_A.

### React-Vorschlag
`FormulaBlock`/`ContentSection` mit KaTeX/MathML-Rendering der drei Gleichungen, MVP-Formel hervorgehoben (callout).

---

## Folie 34 - Bestimmung der Effizienkurve: Beispiel (MVP-Berechnung)

### In der MD problematisch/fehlend
Die MD (Zeilen 483-505) enthält die Eckdaten und Ergebniswerte, die eingesetzte Formel ist jedoch komplett zerbrochen. Folientitel (Untertitel): "Bestimmung der Effizienkurve (2-Asset-Portfolio)"; blaue Überschrift: "Beispiel".

### Fehlende visuelle Inhalte
Eckdaten-Tabelle (blaue Kopfzeile) und großer Formelblock mit Zahleneinsetzung (Folienfußzeile: "Folie 186").

### Visuelle Rekonstruktion
Nicht erforderlich (Tabelle + Formel).

### Inhaltliche Rekonstruktion
Eckdaten:
| | Aktie | Bond |
|---|---|---|
| Erwartete Rendite | 16,0% | 6,0% |
| Standardabweichung | 14,0% | 11,0% |
| Korrelation | 0,5 | |

Berechnung w_A (genau wie auf der Folie eingesetzt):
w_A = (σ_B² − σ_A·σ_B·ρ) / (σ_A² + σ_B² − 2·σ_A·σ_B·ρ)
= (0,11² − 0,14·0,11·0,5) / (0,14² + 0,11² − 2·0,14·0,11·0,5) = **0,27**

Ergebnisse (blau bzw. fett hervorgehoben):
- Rendite im MVP = 8,7%
- Volatilität im MVP = 10,45%
- Realisierbare Renditen im effizienten Rand: zwischen 8,7% und 16%.
- Realisierbare Volatilitäten im effizienten Rand: zwischen 10,45% und 14%.

### Fachliche Aussage
Mit den Zahlen des Beispiels ergibt sich w_A = 0,27 (27% Aktie) für das MVP, mit Rendite 8,7% und Volatilität 10,45%; der effiziente Rand reicht bis 16% Rendite / 14% Volatilität.

### React-Vorschlag
`MvpCalculationExample` - Tabelle + Schritt-für-Schritt-Formel (KaTeX) + Ergebnis-Highlightbox.

---

## Folie 35 - Kritische Würdigung der Portfoliotheorie

### In der MD vorhanden
Vollständig vorhanden (Zeilen 507-521). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Strukturierte Aufzählung mit fett/blau hervorgehobenen Kritikpunkten.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- Transaktionskosten: Portfoliotheorie nicht für beliebige Depotgrößen umsetzbar (Depotgrößenproblematik).
- Betrachtungszeitraum: 1 Periode; Timing-Problematik und Portfoliorevisions-Problematik werden vernachlässigt.
- Nutzung der Kennzahl Volatilität impliziert eine Normalverteilung der Renditen.
- Hohe Anzahl an Inputdaten: n Renditen, n Volatilitäten, n(n-1)/2 Korrelationen.
- Input-Daten sind zeitlich instabil.
- Irrationalität der Anleger.

### Fachliche Aussage
Die Portfoliotheorie hat praktische Grenzen: Transaktionskosten, 1-Perioden-Annahme, Normalverteilungsannahme, hoher und instabiler Inputdatenbedarf sowie irrationales Anlegerverhalten.

### React-Vorschlag
`ContentSection` mit gruppierter Pitfalls-Liste; eignet sich für `pitfalls`-Array des Topics.

---

## Folie 36 - Die Tobin-Separation (Annahmen und Formeln)

### In der MD problematisch/fehlend
Die MD (Zeilen 523-548) enthält den Annahmentext, die Formeln für Gesamtrendite und Gesamtrisiko sind jedoch zerbrochen.

### Fehlende visuelle Inhalte
Zwei umrahmte Formelblöcke (Folienfußzeile: "Folie 188") für μ(x) und σ(x).

### Visuelle Rekonstruktion
Nicht erforderlich (Text + Formel).

### Inhaltliche Rekonstruktion
- James Tobin (1918-2002) erweiterte 1958 den von Harry M. Markowitz 1952 eingeführten Denkansatz zur Optimierung von Portfolios um die Möglichkeit der sicheren Geldanlage.
- Annahmen: Vollkommener Kapitalmarkt; risikoloses Asset F mit Zinssatz r_f und Volatilität σ_f = 0 (Kapital aufnehmen und anlegen); risikobehaftetes Asset P mit erwarteter Rendite μ_P und Volatilität σ_P.
- Aufteilung des Anlagebetrags: Anteil x in P, Anteil (1-x) in F.

Erwartete Gesamtrendite:
μ(x) = x · μ_P + (1 − x) · r_f

Gesamtrisiko (umrahmter Kasten):
σ(x) = √( x²·σ_P² + (1−x)²·σ_f² + 2·x·(1−x)·σ_P·σ_f·ρ_{P,f} ) = x · σ_P
(da σ_f = 0)

### Fachliche Aussage
Tobin ergänzt Markowitz um ein risikoloses Asset; Rendite ist eine lineare Mischung, das Risiko reduziert sich wegen σ_f=0 auf σ(x) = x · σ_P.

### React-Vorschlag
`ContentSection` mit Annahmenliste + KaTeX-Formeln für μ(x) und σ(x).

---

## Folie 37 - Die Tobin-Separation: Herleitung der Kapitalmarktlinie (CML)

### In der MD problematisch/fehlend
Die MD (Zeilen 550-571) ist im Formelbereich vollständig zerbrochen. Herleitung muss aus der Folie rekonstruiert werden.

### Fehlende visuelle Inhalte
Schrittweise Formelherleitung (Folienfußzeile: "Folie 189"); Endgleichungen in zwei blauen Kästen, der Steigungs-Term mit geschweifter Klammer als "b" markiert.

### Visuelle Rekonstruktion
Nicht erforderlich (Formelfolie).

### Inhaltliche Rekonstruktion
(1) μ(x) = x · μ_P + (1 − x) · r_f = r_f + (μ_P − r_f) · x

(2) σ(x) = x · σ_P  ⟹  x = σ(x) / σ_P

(2) in (1) eingesetzt ergibt die Kapitalmarktlinie:
μ(x) = r_f + ( (μ_P − r_f) / σ_P ) · σ(x)   [Klammer-Term = b]
bzw.
μ(x) = r_f + b · σ(x)

### Fachliche Aussage
Durch Einsetzen der Risikogleichung in die Renditegleichung entsteht die Kapitalmarktlinie als Gerade μ(x) = r_f + b·σ(x) mit Steigung b = (μ_P − r_f)/σ_P.

### React-Vorschlag
`CmlDerivation` - nummerierte Herleitungsschritte (KaTeX), Endgleichung in Highlightbox.

---

## Folie 38 - Die Tobin-Separation: Kapitalmarktlinie (Diagramm)

### In der MD problematisch/fehlend
Die MD (Zeilen 573-588) ist Symbolsalat (μ, r_f, σ_p Fragmente). Das Diagramm fehlt vollständig.

### Fehlende visuelle Inhalte
μ-σ-Diagramm (Folienfußzeile: "Folie 190").
- Y-Achse: "Erwartete Rendite", Skala 0% bis 25% (5%-Schritte). μ_P-Marke bei ca. 10% (visuell abgelesen), r_f bei ca. 5% (visuell abgelesen).
- X-Achse: "Volatilität (Standardabweichung)", 0% bis 20% (2%-Schritte).
- Rote, nach rechts gekrümmte Kurve: "Effizienzlinie riskanter Anlagen".
- Aufsteigende Gerade von r_f (Y-Achse, ca. 5%) durch Punkt P (ca. σ=8%, μ=10%, visuell) und darüber hinaus = Kapitalmarktlinie (dünne graue Linie).
- Markierte Punkte auf der Geraden: "x = 50%", "x = 100%" (= P), "x = 150%", "x = 200%".
- Beschriftungen: "Risikolose Anlage" (bei r_f, links unten), "Investition in P und die risikolose Anlage" (Bereich links von P), "Kauf von P durch Darlehensaufnahme" (rechts von P, x>100%).
- Geschweifte Klammer unter X-Achse bis σ von P: σ_P.
- Gelber Formelkasten rechts: μ(x) = r_f + ((μ_P − r_f)/σ_P)·σ(x).

### Visuelle Rekonstruktion
```
E(r)
25% |                          / (rote Effizienzlinie)
20% |              x=200% .   /
15% |         x=150% .   /
mu_P 10% |    P(x=100%) ___ Kauf von P durch Darlehensaufnahme
 r_f 5% |__x=50%__/  Investition in P + risikolose Anlage
 0% +--------------------------- Volatilitaet
    0%   2% 4% 6% 8% ...      20%
              |__ sigma_P __|
```

### Inhaltliche Rekonstruktion
- Links von P (x<100%): Mischung risikolose Anlage + P.
- P (x=100%): vollständig in das riskante Portfolio investiert.
- Rechts von P (x>100%, z. B. 150%, 200%): kreditfinanzierter Kauf von P (Darlehensaufnahme).
- CML-Gleichung: μ(x) = r_f + ((μ_P − r_f)/σ_P)·σ(x).

### Fachliche Aussage
Die Kapitalmarktlinie verbindet die risikolose Anlage mit dem riskanten Portfolio P; je nach x liegen Punkte links (Mischung) oder rechts (Hebelung) von P.

### React-Vorschlag
`CmlChart` - LineChart mit gekrümmter Effizienzlinie, gerader CML, markierten x-Punkten und Bereichsannotationen.

---

## Folie 39 - Die Tobin-Separation: Steigung der CML und Marktportfolio M

### In der MD problematisch/fehlend
Die MD (Zeilen 590-600) ist im Formelbereich zerbrochen; Diagramm fehlt.

### Fehlende visuelle Inhalte
μ-σ-Diagramm (Folienfußzeile: "Folie 191").
- Y-Achse: "Erwartete Rendite", 0% bis 25% (5%-Schritte).
- X-Achse: "Volatilität (Standardabweichung)", 0% bis 20% (2%-Schritte).
- Rote, nach rechts gekrümmte Kurve: "Effizienzlinie riskanter Anlagen".
- Dicke schwarze Tangente von "Risikolose Anlage" (r_f ca. 5%) als (optimale) Kapitalmarktlinie.
- Tangentialpunkt **M** auf der Effizienzlinie (ca. σ=12-13%, μ=18%, visuell abgelesen), beschriftet "Effizientes oder Tangentialportfolio".
- Zweiter Punkt P weiter unten links auf der gekrümmten Kurve (ca. σ=8%, μ=10%, visuell), mit dünner Hilfsgerade durch P; Beschriftung "Effizienzlinie einschließlich risikolose Anlage".
- Blauer Textkasten rechts: "M = Marktportfolio als Tangentialportfolio auf der Kapitalmarktlinie".
- Oberer Fließtext: "Die Steigung der Kapitalmarktlinie (μ_P − r_f)/σ_P setzt die Überrendite ins Verhältnis zum eingegangenen Risiko → je höher umso besser".

### Visuelle Rekonstruktion
```
E(r)
25% |                         /(rote Effizienzlinie)
  M 18% |               * M (Tangentialportfolio)
        |          .--/
   10% |     P * /  (Tangente = CML)
 r_f 5% |__./
 0% +--------------------------- Volatilitaet
       Tangente beruehrt Effizienzkurve in M
```

### Inhaltliche Rekonstruktion
- Steigung der CML = (μ_P − r_f)/σ_P (Überrendite/Risiko) - je höher, desto besser.
- Optimale CML ist die Tangente von r_f an die Effizienzkurve; Berührpunkt = M = Marktportfolio = Tangentialportfolio.

### Fachliche Aussage
Die beste Kapitalmarktlinie ist die Tangente an die Effizienzkurve; ihr Berührpunkt M ist das effiziente Tangential-/Marktportfolio mit maximaler Sharpe-Steigung.

### React-Vorschlag
`TangencyPortfolioChart` - Effizienzkurve + Tangente, hervorgehobener Punkt M, Erläuterungs-Callout.

---

## Folie 40 - Die Tobin-Separation (Definition)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 602-616). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Hervorhebungen: "Marktportfolio", "optimale Portfolio", "Trennung", "Tobin-Separation".

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- Marktportfolio der risikobehafteten Anlage: kann unabhängig von der Risikoeinstellung des Investors bestimmt werden; Tangentialpunkt der Tangente (CML) mit der Effizienzkurve; bei homogenen Erwartungen für alle Investoren gleich.
- Optimales Portfolio: abhängig vom individuellen Zinssatz und der individuellen Risikoeinstellung; liegt auf der CML, die alle effizienten Portfolios wiedergibt.
- Tobin-Separation: Trennung der Finanzierungsentscheidung (links oder rechts von M) von der Anlageentscheidung (nur Punkte auf der CML sind effizient).

### Fachliche Aussage
Die Tobin-Separation trennt die Wahl des Marktportfolios (für alle gleich) von der individuellen Aufteilung zwischen risikoloser und riskanter Anlage entlang der CML.

### React-Vorschlag
`ContentSection` mit drei Definitionsblöcken; Schlüsselbegriff "Tobin-Separation" als callout.

---

## Folie 41 - Die Tobin-Separation: Praktische Anwendung bei Investmentfonds

### In der MD problematisch/fehlend
Die MD (Zeilen 618-621) enthält nur den Titel. Diagramm und Bildunterschrift fehlen vollständig.

### Fehlende visuelle Inhalte
Schematisches μ-σ-Diagramm (Folienfußzeile: "Folie 193").
- Y-Achse: μ(x); X-Achse: σ(x). Keine Zahlenskala.
- Ansteigende Gerade vom Punkt "i" (= Achsen-/Y-Achsennaher Startpunkt, risikolos) nach oben rechts; ab Punkt M gestrichelt verlängert.
- Vier markierte Punkte entlang der Geraden (von links unten nach rechts oben):
  - "Festgeld" (bei i, ganz links)
  - "1/3 Aktien: Ertrag"
  - "2/3 Aktien: Wachstum"
  - "M / Aktien" (= Marktportfolio; Punkt mit "M" beschriftet, darunter "Aktien")
- Graue Textkästen: "Kapitalmarktlinie = Capital Market Line (CML)" (rechts oben an der gestrichelten Linie), "M = Marktportfolio" (rechts), "Strategiefonds Ertrag und Wachstum" (mittlerer Kasten).
- Bildunterschrift: "Die Kapitalmarktlinie mit vier ausgewählten Portfolios: Festgeld, Ertrag, Wachstum und Aktien".

### Visuelle Rekonstruktion
```
mu(x)
        M
       Aktien (100%)
       *- - - - CML (gestrichelt)
   2/3 Aktien: Wachstum *
 1/3 Aktien: Ertrag *
 i *Festgeld
 +------------------------ sigma(x)
```

### Inhaltliche Rekonstruktion
- Festgeld = risikolose Anlage (Punkt i).
- Strategiefonds entlang der CML: Ertrag (1/3 Aktien), Wachstum (2/3 Aktien), Aktien (100% = M).
- Praxisbezug der CML/Tobin-Separation auf eine Investmentfonds-Produkttreppe.

### Fachliche Aussage
Investmentfonds-Strategien (Festgeld → Ertrag → Wachstum → Aktien) lassen sich als Punkte auf der CML deuten - reine Aufteilung zwischen risikolos und Marktportfolio.

### React-Vorschlag
`FundLadderCmlChart` - schematische CML mit vier benannten Fonds-Punkten; statisch als `SourceFigure` möglich.

---

## Folie 42 - Die Capital Market Line (CML)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 623-636). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Aufzählungstext, "CML:" fett/blau hervorgehoben.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- CML: Bestimmung des Marktpreises des Risikos unter Unsicherheit.
- Geometrischer Ort aller effizienten μ-σ-Kombinationen, wenn alle Investoren homogene Erwartungen bzgl. Erwartungsrenditen, Varianz und Korrelationskoeffizienten riskanter Assets haben.
- Alle Anleger wollen in dasselbe Tangentialportfolio investieren.
- Im Gleichgewicht entspricht das Tangentialportfolio einem Portfolio aller (!) riskanten Assets, gewichtet mit ihren Marktwerten.
- Marktportfolio ist vollständig diversifiziert → nicht beobachtbar.

### Fachliche Aussage
Die CML beschreibt unter homogenen Erwartungen den Marktpreis des Risikos; im Gleichgewicht ist das Tangentialportfolio das wertgewichtete (nicht beobachtbare) Marktportfolio aller riskanten Assets.

### React-Vorschlag
`ContentSection` mit Aufzählung; "nicht beobachtbar" als Pitfall-Hinweis.

---

## Folie 43 - Das Marktportfolio: Marktwerte des globalen Marktportfolios 2012

### In der MD problematisch/fehlend
Die MD (Zeilen 638-642) enthält Titel und Quelle. Das Kreis-/Donut-Diagramm mit allen Werten fehlt vollständig.

### Fehlende visuelle Inhalte
Donut-/Kreisdiagramm (Folienfußzeile: "Folie 195") "Marktwerte des globalen Marktportfolios 2012 (USD Bio.)" in Grautönen.
- Mitte: "USD 90,6 Bio." (Gesamtsumme).
- Segmente mit Labels und Werten (USD Bio.):
  - Equities: 32,9
  - Government Bonds: 26,7
  - High Grade Credits: 16,8
  - Real Estate: 4,6
  - Private Equity: 3,3
  - Emerging Markets Debt: 2,7
  - High Yield: 1,5

### Visuelle Rekonstruktion
```
            Private Equity 3,3
   Equities  | Real Estate 4,6
   32,9      | High Yield 1,5
      \      | EM Debt 2,7
   ( USD 90,6 Bio. )
      /      |
 Government  | High Grade
 Bonds 26,7  | Credits 16,8
```

### Inhaltliche Rekonstruktion
| Assetklasse | Marktwert (USD Bio.) |
|---|---|
| Equities | 32,9 |
| Government Bonds | 26,7 |
| High Grade Credits | 16,8 |
| Real Estate | 4,6 |
| Private Equity | 3,3 |
| Emerging Markets Debt | 2,7 |
| High Yield | 1,5 |
| **Gesamt** | **90,6** |

Quelle: Doeswijk R./Lam, T. (2014) The Global Multi-Asset Market Portfolio, 1959-2012, in: FAJ, Vol. 70, Nr. 2, S. 26-41

### Fachliche Aussage
Das globale Marktportfolio 2012 hatte einen Marktwert von 90,6 Bio. USD, dominiert von Aktien (32,9) und Staatsanleihen (26,7).

### React-Vorschlag
`GlobalMarketPortfolioDonut` (PieChart/Donut) mit Center-Label "USD 90,6 Bio." und Legende der sieben Assetklassen.

---

## Folie 44 - Das Capital Asset Pricing Modell (CAPM): relevantes Risiko

### In der MD problematisch/fehlend
Die MD (Zeilen 644-660) enthält die Aufzählung, das SML-Vorschau-Diagramm und die Formeln sind jedoch zerbrochen.

### Fehlende visuelle Inhalte
Kleines E(r)-β-Diagramm (Folienfußzeile: "Folie 196") "Security Market Line".
- Y-Achse: "E(r_i)"; X-Achse beschriftet "ß = Cov_{i,M}".
- Ansteigende blaue Gerade von r_f, mit blauem Kasten "Security Market Line" (Pfeil auf die Gerade).
- Marke r_f auf der Y-Achse (Startpunkt der Geraden) sowie eine Marke r_M auf der Y-Achse; gestrichelte Hilfslinien führen von r_M waagerecht zur Geraden und von dort senkrecht hinunter zu einer X-Achsen-Marke ß_M (im Entwurf fehlten r_M und ß_M - ergänzt).
- Formelkasten an der Geraden: E(r_i) = r_f + ((E(r_M) − r_f)/σ²_M) · Cov_{i,M}.
- Rechts grauer Kasten "Zur Erinnerung: Capital Market Line" mit μ(x) = r_f + ((μ_P − r_f)/σ_P)·σ(x).

### Visuelle Rekonstruktion
```
E(r_i)
   |                / Security Market Line
r_M|- - - - - - - */
   |          .  /|
 r_f|______./    |
   +-----------+---------- ß = Cov(i,M)
              ß_M
```

### Inhaltliche Rekonstruktion
- Markowitz: Das Risiko eines Wertpapiers im Portfolio wird durch die Kovarianz mit allen anderen Wertpapieren bestimmt.
- CML: einziges relevantes Portfolio = Marktportfolio → einzige Überlegung = Kovarianz des Wertpapiers mit dem Marktportfolio.
- Die Kovarianz ist daher das relevante Risikomaß riskanter Assets.
- SML-Formel: E(r_i) = r_f + ((E(r_M) − r_f)/σ²_M) · Cov_{i,M}
- Zur Erinnerung CML: μ(x) = r_f + ((μ_P − r_f)/σ_P)·σ(x)

### Fachliche Aussage
In einer Welt mit Marktportfolio ist nicht die Gesamtvarianz, sondern die Kovarianz eines Assets mit dem Marktportfolio das relevante Risikomaß (Übergang von CML zu SML).

### React-Vorschlag
`SmlIntroChart` - SML-Gerade + Formelblock; CML-Erinnerung als Seitenkasten.

---

## Folie 45 - Das CAPM: systematisches Risiko und Beta (SML-Formel)

### In der MD problematisch/fehlend
Die MD (Zeilen 662-681) enthält den Fließtext, die zentrale CAPM-/Beta-Formel ist jedoch zerbrochen.

### Fehlende visuelle Inhalte
Umrahmter Formelblock (Folienfußzeile: "Folie 197") für die CAPM-Gleichung und Beta-Definition.

### Visuelle Rekonstruktion
Nicht erforderlich (Text + Formel).

### Inhaltliche Rekonstruktion
- Unsystematisches Risiko kann aufgrund von Diversifikation vollständig vermieden werden; das systematische Risiko lässt sich nicht wegdiversifizieren.
- Der Investor erhält eine Risikoprämie für die Übernahme von Risiken; entlohnt wird er jedoch nur für die Übernahme des systematischen Risikos.
- CAPM = Gleichgewichtsmodell: die erwartete Rendite ist eine lineare Funktion des systematischen Risikos, ausgedrückt durch den Beta-Faktor β_i.

CAPM-Gleichung (umrahmter Kasten):
E(r_i) = r_f + β_i · (E(r_M) − r_f)   mit   β_i = Cov(r_i, r_M) / σ²_M = ρ_{i,M} · (σ_i / σ_M)

- Diese lineare Funktion (Gerade) heißt Security Market Line (SML) bzw. Wertpapierlinie.

### Fachliche Aussage
Das CAPM bepreist nur systematisches Risiko: Die erwartete Rendite steigt linear mit Beta entlang der Security Market Line.

### React-Vorschlag
`CapmFormulaBlock` - KaTeX-Darstellung der CAPM-Gleichung und Beta-Definition mit Erläuterung.

---

## Folie 46 - Das CAPM: Beta

### In der MD vorhanden
Vollständig vorhanden (Zeilen 683-694). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Aufzählungstext.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- β: Maß für die Sensitivität eines Assets auf Änderungen des Gesamtmarktes.
- Beta = standardisiertes (einheitsloses) Risikomaß: setzt die Kovarianz ins Verhältnis zur Varianz des Marktportfolios.
- Das Marktportefeuille (Marktportfolio) hat daher ein Beta von 1.
- Empirisch: Vergangenheits-Betas sind nur schlechte Indikatoren für das zukünftige Beta.
- Instabilität von Beta im Zeitablauf: Tendenz zur Mean Reversion.

### Fachliche Aussage
Beta misst die Marktsensitivität (Markt = 1), ist einheitslos, aber empirisch zeitinstabil und tendiert zur Mean Reversion.

### React-Vorschlag
`ContentSection`; Hinweis "Vergangenheits-Beta schlechter Prädiktor" als Pitfall.

---

## Folie 47 - CML vs. SML

### In der MD problematisch/fehlend
Die MD (Zeilen 696-700) enthält nur die beiden Überschriften. Beide Diagramme und alle Datenpunkte fehlen vollständig.

### Fehlende visuelle Inhalte
Zwei nebeneinanderliegende Diagramme (Folienfußzeile: "Folie 199") mit farbigen Headern: grün "Kapitalmarktlinie (Capital Market Line, CML)" links, orange "Wertpapierlinie (Security Market Line, SML)" rechts.

Diagramm (a) links - CML:
- Y-Achse: "Erwartete Rendite", 0% bis 15% (5%-Schritte).
- X-Achse: "Volatilität (Standardabweichung)", 0% bis 40% (10%-Schritte).
- Rote gekrümmte "Effizienzlinie riskanter Anlagen" + schwarze/rote Tangente "Kapitalmarktlinie" von "Risikolose Anlage" (σ=0%, y ca. 2-3%).
- Punkte: "Marktportfolio = effizientes Portfolio" (M, auf der Linie), darunter einzelne Aktien als Streupunkte rechts/unterhalb: McDonald's, IBM, Nike, Walmart, GE, Apple, Amazon, Tiffany, Molson-Coors, Newmont Mining.
- Annotationen unten/links zu MCD: "Gesamtvolatilität von MCD SA(R_MCD)", "Marktrisiko von MCD Corr(R_MCD,R_MKT) × SA(R_MCD)", "Zusätzliches diversifizierbares Risiko von MCD".

Diagramm (b) rechts - SML:
- Y-Achse: "Erwartete Rendite", 0% bis 15%.
- X-Achse: "Beta", -0,50 / 0,00 / 0,50 / 1,00 / 1,50 / 2,00.
- Rote gerade "Wertpapierlinie" von "Risikolose Anlage" (β=0) ansteigend.
- Punkte auf/nahe der Geraden: McDonald's, Molson-Coors, Walmart, Newmont Mining, Marktportfolio (β=1), Nike, IBM, Amazon, Apple, GE, Tiffany.
- Annotation unten: "Beta von MCD ρ_MCD" (gestrichelte Hilfslinie zu MCD auf der X-Achse).

### Visuelle Rekonstruktion
(Punktpositionen visuell abgelesen, nicht exakt)
```
(a) CML                         (b) SML
E(r)|     .Tiffany              E(r)|             .Tiffany
15% |   /.GE .Apple             15% |          .GE
    |  / .Nike  .Amazon             |        .Apple .Amazon
    | /M.IBM .Molson-Coors      M   |     .Nike (Markt bei beta=1)
 5% |/McD .Walmart .Newmont      5% | .McD .Walmart .Newmont
    +-------------------- sigma     +--------------------- beta
    0% 10% 20% 30% 40%             -0,5  0  0,5  1  1,5  2
```

### Inhaltliche Rekonstruktion
- CML (a): X = Gesamtvolatilität (σ); nur effiziente Portfolios liegen auf der Linie, Einzelaktien streuen rechts darunter (Gesamtrisiko = Marktrisiko + zusätzliches diversifizierbares Risiko).
- SML (b): X = Beta; im CAPM-Gleichgewicht liegen ALLE Wertpapiere auf der Geraden (nur systematisches Risiko bepreist), Marktportfolio bei β=1.
- Beispielaktien (gleiche Menge in beiden Diagrammen): McDonald's, IBM, Nike, Walmart, GE, Apple, Amazon, Tiffany, Molson-Coors, Newmont Mining.

### Fachliche Aussage
CML bewertet Portfolios nach Gesamtvolatilität (Einzeltitel liegen darunter), SML bewertet jedes Asset nach Beta (alle Titel liegen auf der Linie) - zwei Sichtweisen auf Risiko und Rendite.

### React-Vorschlag
`CmlVsSmlComparison` - zwei nebeneinanderliegende ScatterCharts mit gemeinsamer Aktien-Datenmenge; alternativ statische `SourceFigure`-Doppelgrafik.

---

## Folie 48 - Multifaktormodelle

### In der MD vorhanden
Vollständig vorhanden (Zeilen 702-721). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Aufzählung mit fett/blau hervorgehobenen Schlüsselbegriffen ("Definition", "Allgemein", "Beispiel eines Faktors", "Makroökonomische/Fundamental-/Statistische Faktormodelle").

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
- Annahme: Asset-Renditen werden nicht nur von Marktrenditen bestimmt.
- Beispiele: Zinsen, Inflationsraten, industriespezifische Einflussfaktoren.
- Definition: Gleichgewichtsmodelle, in denen Wertpapierrenditen von mehreren makro- und mikroökonomischen Faktoren abhängen; ein Marktportfolio ist nicht mehr notwendig.
- Allgemein: Faktor = Element, zu dem mehrere Variablen korreliert sind. Beispiel eines Faktors: Marktfaktor (= systematischer Faktor).
- Makroökonomische Faktormodelle: (unerwartete) Ereignisse beeinflussen makroökonomische Variablen und damit zukünftige Cashflows von Unternehmen.
- Fundamentalfaktormodelle: Erklärung von Bewertungsunterschieden zwischen einzelnen Segmenten (KBV, KGV etc.).
- Statistische Faktormodelle: Erklärung historischer Portfoliorenditen anhand quantitativer Faktoren (Backtesting).
- Heute im aktiven wie passiven Portfoliomanagement eingesetzt.

### Fachliche Aussage
Multifaktormodelle erklären Renditen über mehrere Faktoren (statt nur dem Markt) und benötigen kein Marktportfolio; sie kommen in makroökonomischer, fundamentaler und statistischer Ausprägung vor.

### React-Vorschlag
`ContentSection` mit Definitionsblock + Liste der drei Faktormodell-Typen.

---

## Folie 49 - Arbitrage Pricing Theory (APT)

### In der MD problematisch/fehlend
Die MD (Zeilen 723-746) enthält den Fließtext, die APT-Gleichung und Symboldefinitionen sind jedoch zerbrochen.

### Fehlende visuelle Inhalte
Umrahmter Formelblock (Folienfußzeile: "Folie 201") mit der APT-Renditegleichung. Blaue Überschrift "Die Alternative zum CAPM".

### Visuelle Rekonstruktion
Nicht erforderlich (Text + Formel).

### Inhaltliche Rekonstruktion
- APT ist ein Multifaktor-Gleichgewichtsmodell, in dem die erwartete Rendite eines wohl diversifizierten Portfolios eine lineare Funktion der Faktorsensitivitäten ist.
- Annahmen (weniger streng als CAPM): u. a. Existenz eines Marktportfolios nicht erforderlich.
- Asset-Renditen werden von einem multivariaten Faktormodell beschrieben.
- Die Bildung eines wohl diversifizierten Portfolios eliminiert die asset-spezifischen Risiken (empirisch bestätigt für n → ∞).
- Keine Arbitragemöglichkeiten in wohl diversifizierten Portfolios → Wertpapiere sind stets richtig bewertet (Gleichgewicht).

APT-Gleichung (umrahmter Kasten):
E(r_P) = r_f + λ₁·β_{P,1} + λ₂·β_{P,2} + ⋯ + λ_n·β_{P,n}
- λ_i: Faktorrisikoprämie i
- β_{P,i}: Sensitivität des Portfolios auf Faktor i
- λ_i ist die erwartete Überrendite (zu r_f) eines Portfolios mit Sensitivität 1 zu Faktor i und Sensitivität 0 zu allen anderen Faktoren.

### Fachliche Aussage
Die APT erklärt erwartete Renditen über mehrere Faktorprämien ohne Marktportfolio; Arbitragefreiheit sorgt für korrekte Bewertung wohl diversifizierter Portfolios.

### React-Vorschlag
`AptFormulaBlock` - KaTeX der APT-Gleichung mit Legende λ_i / β_{P,i}.

---

## Folie 50 - Unterschiede zwischen APT und CAPM

### In der MD vorhanden
Vollständig vorhanden (Zeilen 748-763). Reiner Textinhalt.

### Fehlende visuelle Inhalte
Keine Grafiken. Strukturierte Aufzählung mit blauen Zwischenüberschriften "Vorteile der APT:" / "Nachteile der APT:".

### Visuelle Rekonstruktion
Nicht erforderlich (reine Textfolie).

### Inhaltliche Rekonstruktion
Allgemeine Unterschiede:
- Eine Annahme über eine Verteilungshypothese der Wertpapierrenditen ist in der APT irrelevant.
- Mehrdimensionale Risikobetrachtung der APT.
- Kenntnis eines Marktportfolios ist bei der APT irrelevant.

Vorteile der APT:
- Mehrdimensionale Risikobetrachtung.
- Weniger rigide Annahme als CAPM.

Nachteile der APT:
- Identifikation der Risikofaktoren.
- Sensitivitäten und Einflussfaktoren sind nicht zeitstabil (gilt ebenso für Betafaktoren und Marktrisikoprämie im CAPM).
  - Hoher Wartungsaufwand des Systems
  - Verringerung der Aussagekraft

### Fachliche Aussage
Die APT ist flexibler und mehrdimensional (keine Verteilungs-/Marktportfolio-Annahme), leidet aber unter schwer identifizierbaren und zeitinstabilen Risikofaktoren.

### React-Vorschlag
`AptVsCapmComparison` - zweispaltige Vorteile/Nachteile-Liste; eignet sich für `examFocus`-Punkte des Topics.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden
- Alle μ-σ-Diagramme und Effizienzkurven (Folien 8, 10, 11, 15, 17, 18, 19, 32, 38, 39, 41) - tragen die zentrale fachliche Aussage und fehlen in der MD vollständig.
- CML/SML-Diagramme (Folien 38, 39, 44, 47) - Kern des CAPM-Teils.
- Zeitreihen-/Diversifikationsdiagramme (Folien 26, 30, 31) - veranschaulichen systematisches vs. unsystematisches Risiko.
- Alle zerbrochenen Formeln (Folien 5, 6, 23, 25, 33, 34, 36, 37, 44, 45, 49) - via KaTeX/MathML neu setzen.
- Datentabellen (Folien 4, 7, 10, 32, 34, 43) - sauber als echte Tabellen mit hervorgehobener MVP-Zeile.

## Kann vereinfacht werden
- Korrelationsmatrix (Folie 13) - als stilisierte Heatmap mit Schwellen-Legende; Einzelwerte sind nicht zuverlässig ablesbar, daher Quellenhinweis statt erfundener Werte.
- μ-σ-Diagramme mit "visuell abgelesenen" Punkten/Gewichtungen (Folien 11, 15, 17, 18, 19, 38, 39, 47) - schematisch nachbauen, geschätzte Werte mit "ca." kennzeichnen.
- Donut-Diagramm (Folie 43) - kann auch als reine Tabelle plus Center-Summe umgesetzt werden.

## Nicht fachlich relevant
- Titelfolien-Bildleiste, HBW-Logo, Porträtfoto Markowitz (Folien 1, 3).
- Wiederkehrende Layout-Elemente: grauer Kopfbereich, Folien-Footer ("Asset Management / CS / Folie XXX"), Copyright-Footer.

---

# Datenorientierter React-Hinweis

```js
// Folie 7 / 32: 2-Wertpapier-Portfolio (Aktie/Bond, rho = 0,5)
export const twoAssetData = {
  assets: {
    aktie: { erwarteteRendite: 0.16, standardabweichung: 0.14 },
    bond: { erwarteteRendite: 0.06, standardabweichung: 0.11 },
    korrelation: 0.5,
  },
  // E(r_P), Varianz sigma_p^2, sigma_P, w_A, w_B
  mix: [
    { er: 0.06, varianz: 0.0121, sigma: 0.110, wA: 0.0, wB: 1.0 },
    { er: 0.07, varianz: 0.0114, sigma: 0.107, wA: 0.1, wB: 0.9 },
    { er: 0.08, varianz: 0.0110, sigma: 0.105, wA: 0.2, wB: 0.8 },
    { er: 0.09, varianz: 0.0109, sigma: 0.105, wA: 0.3, wB: 0.7 }, // Minimum-Varianz-Portfolio
    { er: 0.10, varianz: 0.0112, sigma: 0.106, wA: 0.4, wB: 0.6 },
    { er: 0.11, varianz: 0.0118, sigma: 0.109, wA: 0.5, wB: 0.5 },
    { er: 0.12, varianz: 0.0127, sigma: 0.113, wA: 0.6, wB: 0.4 },
    { er: 0.13, varianz: 0.0139, sigma: 0.118, wA: 0.7, wB: 0.3 },
    { er: 0.14, varianz: 0.0155, sigma: 0.124, wA: 0.8, wB: 0.2 },
    { er: 0.15, varianz: 0.0174, sigma: 0.132, wA: 0.9, wB: 0.1 },
    { er: 0.16, varianz: 0.0196, sigma: 0.140, wA: 1.0, wB: 0.0 },
  ],
  minVarianceIndex: 3, // w_A = 30 %
};

// Folie 10: Coca-Cola & Intel (rho = 0), 2-Aktien-Portfolios
export const cokeIntelData = {
  korrelation: 0,
  einzeltitel: {
    intel: { erwarteteRendite: 0.26, volatilitaet: 0.50 },
    cocaCola: { erwarteteRendite: 0.06, volatilitaet: 0.25 },
  },
  // x_I, x_C, E[R_p] in %, SA[R_p] in %
  portfolios: [
    { xI: 1.00, xC: 0.00, er: 26.0, sa: 50.0 },
    { xI: 0.80, xC: 0.20, er: 22.0, sa: 40.3 },
    { xI: 0.60, xC: 0.40, er: 18.0, sa: 31.6 },
    { xI: 0.40, xC: 0.60, er: 14.0, sa: 25.0 },
    { xI: 0.20, xC: 0.80, er: 10.0, sa: 22.4 },
    { xI: 0.00, xC: 1.00, er: 6.0, sa: 25.0 },
  ],
};
```

```js
// Folie 43: Globales Marktportfolio 2012 (USD Bio.) - Quelle: Doeswijk/Lam (2014)
export const globalMarketPortfolio2012 = {
  einheit: 'USD Bio.',
  gesamt: 90.6,
  segmente: [
    { name: 'Equities', wert: 32.9 },
    { name: 'Government Bonds', wert: 26.7 },
    { name: 'High Grade Credits', wert: 16.8 },
    { name: 'Real Estate', wert: 4.6 },
    { name: 'Private Equity', wert: 3.3 },
    { name: 'Emerging Markets Debt', wert: 2.7 },
    { name: 'High Yield', wert: 1.5 },
  ],
};
```
