# skript-04-mathemat-strat-grundlagen_MD+PDF - Mathematische und statistische Grundlagen: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-04-mathemat-strat-grundlagen.md` um die visuellen Inhalte, die bei der Markdown-Extraktion aus `skript-04-mathemat-strat-grundlagen.pdf` verloren gegangen, nur als zerbrochene Tabellen/Formeln übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Formeln, Diagramme, Tabellen, Schaubilder oder Bildaussagen verloren gehen.

**Quelle:** `skript-04-mathemat-strat-grundlagen.pdf` mit 56 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, Kopfzeile, Folien-Footer ("Asset Management / CS / Folie XX") und Copyright-Hinweis sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die als Bild eingebetteten Formeln, die Diagramme (Balken-, Linien-, Verteilungs-, Streudiagramme), die farbigen Datentabellen, die Schaubilder (Cashflow-Zeitstrahl, Barwerte-Waage, Korrelationsskala) sowie die Icons/Marker (z. B. der orange "Wiederholung FI&RM"-Sticker).

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Formeln nicht übernehmen:** Nahezu alle zentralen Formeln dieses Skripts (Mittelwerte, geometrisches Mittel, stetige Rendite, Barwert, Duration, Konvexität, Standardabweichung, Schiefe, Kurtosis, VaR, Kovarianz/Korrelation) sind in der MD als unleserliche Tabellen-/Zeichenfragmente extrahiert. Sie sind aus den unten stehenden Klartext-Rekonstruktionen als KaTeX/MathJax neu zu setzen (`FormulaCard` / `FormulaBlock`).
2. **Zerbrochene Datentabellen neu aufbauen:** Mehrere Folien (Duration/Konvexität-Beispiele, Volatilität US-Markt, Assetklassen-Momente, VaR-Methodenvergleich, Kovarianz-Berechnung) liegen als zerbrochene Markdown-Tabellen oder nur als Bild vor. Diese als echte responsive `DataTable` in `.table-wrap` umsetzen.
3. **Diagramme semantisch nachbauen:** Säulen-, Linien-, Verteilungs- und Streudiagramme tragen fachliche Bedeutung (Zinssensitivität, Volatilitätsverlauf, Normalverteilung, Schiefe/Kurtosis, Korrelation, Diversifikation). Sie sollten als SVG/Recharts-Komponenten und nicht nur als Text dargestellt werden.
4. **Schaubilder erhalten:** Cashflow-Zeitstrahl (Folie 11), Barwerte-Waage (Folie 15) und Korrelationsskala (Folie 51) sind eigenständige Schaubilder mit Fachaussage und müssen als dedizierte SVG-Komponenten umgesetzt werden.
5. **"Wiederholung FI&RM"-Marker als Badge:** Der orange Schräg-Sticker erscheint auf vielen Folien und kennzeichnet Wiederholungsinhalt aus Financial Investment & Risk Management. Als `RepetitionBadge` umsetzen (auf Folie 50/52 lautet er "Wiederholung Statistik").
6. **Blaue Hervorhebungen erhalten:** Auf den Folien sind Schlüsselbegriffe und Definitionen blau/fett markiert; diese Hervorhebung gehört zur didaktischen Struktur und sollte in React als Hervorhebung/Inline-Highlight erhalten bleiben.
7. **Hervorgehobene Formelboxen kennzeichnen:** Zentrale Formeln stehen in hellblau hinterlegten Boxen; diese als hervorgehobene `FormulaBox` rendern.
8. **Quellenhinweise erhalten:** Quellen wie Bösch S. 238, Hull (2019), Berk/DeMarzo (2020), Bruns/Meyer-Bullerdiek (2008), Rojahn et al. (2010), Reuse (2006), Frère/Rojahn/Schyra (2010) als `.source-note` beibehalten.
9. **Nicht zuverlässig lesbare Werte nicht erfinden:** Wo Folien (z. B. Folie 53) Zellwerte nur klein/unleserlich rendern, sind diese Werte gegen das Originalskript zu prüfen und nicht zu schätzen.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---|---|
| `ChapterTitleSlide` | 1 | Kapitel-Header (Titelfolie) |
| `AgendaList` | 2 | Neunpunktige Agenda mit aktivem Punkt |
| `RepetitionBadge` | 3-25, 30, 33, 50, 52 | Oranger "Wiederholung FI&RM/Statistik"-Sticker |
| `FormulaCard` / `FormulaBlock` | 3-10, 14-21, 24-25, 34, 37-38, 45, 47, 49-50 | Mittelwert-, Rendite-, Duration-, Risiko-, VaR-, Korrelationsformeln als KaTeX |
| `DefinitionList` | 4, 38 | Begriffskarten (Median/Modus/gew. Mittel, Wölbungstypen) |
| `WorkedExample` / `ExerciseCard` / `VaRSolutionSteps` | 6, 45, 48-49 | Übungen mit Schritt-für-Schritt-Lösung |
| `ScenarioTable` / `ScenarioReturnTable` | 9, 36 | Szenario/Wahrscheinlichkeit/Rendite-Tabellen |
| `SymbolLegend` | 10, 14 | Symbollegende zu Formeln |
| `CashflowTimeline` | 11 | Cashflow-Zeitstrahl-Diagramm |
| `BarChart` / `GroupedBarChart` | 12-13 | Zinssensitivität nach Laufzeit/Coupon |
| `DurationBalanceDiagram` | 15 | Barwerte-Waage |
| `DataTable` | 22, 26, 32, 36, 40, 46, 53 | Formatierte Datentabellen in `.table-wrap` |
| `PriceYieldCurve` | 19 | Kurs-Rendite-Kurve (konvex fallend) |
| `Callout` / `KeyPointList` | 12, 16-18, 20-21, 27 | Erläuterungskästen, Merksätze, Regellisten |
| `DistributionComparisonChart` | 23 | Zwei überlagerte Glockenkurven |
| `RuleCallout` | 24 | μ-Regel / σ-Regel |
| `VolatilityTimeSeriesChart` | 29 | Implizite vs. historische Volatilität |
| `NormalDistributionChart` / `SigmaIntervalTable` | 30-31 | Glockenkurve mit σ-Bändern |
| `VolatilityCritiqueExample` | 32 | Kritik am Volatilitätskonzept |
| `SkewnessComparison` | 35 | Rechts-/linksschiefe Verteilungen |
| `KurtosisComparisonChart` / `HighlightNote` | 39 | Leptokurtisch vs. Normalverteilung |
| `VaRDistributionChart` | 43, 47 | VaR als Tail der Verteilung |
| `QuantileTable` | 47 | z_α-Quantile (95%/99%) |
| `VaRMethodsComparison` | 46 | Vergleich der drei VaR-Ansätze |
| `CorrelationScale` | 51 | Korrelationsskala -1 bis +1 |
| `CorrelationScatterGrid` | 52 | 3×3-Streudiagramm-Matrix |
| `CovarianceCalculationTable` | 53 | Kovarianz-/Korrelationsberechnung |
| `RollingCorrelationChart` | 54-55 | Rollierende Korrelationszeitreihen |
| `DiversificationEffectPanels` | 56 | Diversifikationseffekte (drei Panels) |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 4: Mathematische und statistische Grundlagen (Titelfolie)

### In der MD vorhanden
Vorhanden sind die Textzeilen "Asset Management", "Kapitel 4", "Mathematische und statistische Grundlagen" und die Versionskennung "V26-04-13".

### Fehlende visuelle Inhalte
Reine Titelfolie im HBW-Layout. Oberhalb des Titelblocks liegt ein Streifen aus vier querformatigen Foto-Kacheln: (1) Nahaufnahme eines Smartphones/Tablets mit "HBW"-Logo auf dem Display, (2) Porträt einer Person mit Brille, (3) eine Gruppe lächelnder junger Menschen (Studierende), (4) ein modernes Hochschul-/Bürogebäude. Diese Fotos sind rein dekorativ und tragen keine Fachaussage. (Hinweis: Die Fußzeile nennt "Folie 97" - die Foliennummerierung im Skript ist kapitelübergreifend; PDF-Seite = 1.)

### Visuelle Rekonstruktion
Keine fachliche Grafik erforderlich.

### Inhaltliche Rekonstruktion
- Titel: Kapitel 4 - Mathematische und statistische Grundlagen
- Version: V26-04-13

### Fachliche Aussage
Kapiteleinstieg in die mathematisch-statistischen Grundlagen des Asset Managements (Durchschnitts-, Rendite-, Risiko- und Verteilungskennzahlen).

### React-Vorschlag
`ChapterTitleSlide` - bestehendes Topic-/Kapitel-Header-Template; Fotostreifen entfällt oder wird als dekoratives Banner umgesetzt.

---

## Folie 2 - Agenda

### In der MD vorhanden
Die vollständige neunpunktige Agenda ist als nummerierte Liste vorhanden (Punkte 1-9).

### Fehlende visuelle Inhalte
Punkt 4 "Mathematische und statistische Grundlagen" ist auf der Folie als aktueller Abschnitt blau und fett hervorgehoben; alle übrigen Punkte stehen in Schwarz. Diese Hervorhebung des aktiven Kapitels geht in der reinen Textextraktion verloren.

### Visuelle Rekonstruktion
```text
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen   <-- aktiv (blau/fett)
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
```

### Inhaltliche Rekonstruktion
Neunteilige Kapitelübersicht der Gesamtvorlesung Asset Management; aktiv markiert ist Kapitel 4.

### Fachliche Aussage
Verortet das Kapitel 4 innerhalb der Gesamtvorlesung.

### React-Vorschlag
`AgendaList` - nummerierte Liste mit `activeIndex`-Prop, das den aktuellen Punkt hervorhebt (Akzentfarbe).

---

## Folie 3 - Bilden von Durchschnittswerten: Arithmetisches Mittel

### In der MD vorhanden
Definitionstext, Frage, Anwendungsbeispiele und Nachteil sind vorhanden. Die Formel ist in der MD stark zerbrochen ("1", "4 = 64", "(", "$)*").

### Fehlende visuelle Inhalte
Oben rechts ein oranger, schräg liegender Banner-Sticker "Wiederholung FI&RM" (Hinweis: Wiederholungsinhalt aus Financial Investment & Risk Management). Die Begriffe "Frage", "Definition" sind blau hervorgehoben. Die zentrale Formel ist als Bild eingebettet und in der MD unbrauchbar.

### Visuelle Rekonstruktion
Marker oben rechts: [ Wiederholung FI&RM ] (oranger Schräg-Sticker).

### Inhaltliche Rekonstruktion
Arithmetisches Mittel (Klartext):

`x_arithm = (1/n) * Σ_{i=1}^{n} x_i`

- Frage: Wie berechnet man den Durchschnittswert bei mehrjährigen Daten, sofern keine Wiederanlage der Erträge (Zinseszinsen) stattfindet?
- Es wird also unterstellt, dass der Ertrag vom Anleger am Ende jeder Periode entnommen wird und keiner Zinseszinseffekte unterliegt.
- Definition: Summe der Beobachtungswerte dividiert durch die Zahl der Beobachtungen.
- Ideales Maß für die Bestimmung durchschnittlicher Einperiodenrenditen.
- Anwendungsbeispiele: Berechnung der durchschnittlichen Verzinsung mehrerer Unternehmensanleihen; Berechnung des durchschnittlichen BIP-Wachstums im Euro-Raum; Berechnung von Abweichungen nach oben/unten.
- Nachteil: Hohe Sensitivität gegenüber Extremwerten.

### Fachliche Aussage
Das arithmetische Mittel eignet sich für Einperiodenrenditen ohne Wiederanlage, reagiert aber empfindlich auf Ausreißer.

### React-Vorschlag
`FormulaCard` (für die Mittelwertformel als KaTeX) + `RepetitionBadge` für den "Wiederholung FI&RM"-Sticker.

---

## Folie 4 - Bilden von Durchschnittswerten: Median, Modus & gewichtetes Mittel

### In der MD vorhanden
Definitionen von Median, Modus und gewichtetem Durchschnitt sind weitgehend vorhanden; die Formel des gewichteten Mittels ist zerbrochen ("2 = 67 8 4 mit 7 = Anteil Asset").

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker oben rechts. Die Begriffe "Median", "Modus (Modalwert)", "Gewichteter Durchschnittswert" sowie "Definition" sind blau hervorgehoben. Die Formel des gewichteten Mittels ist als Bild eingebettet.

### Inhaltliche Rekonstruktion
- Median: Mittlerer Wert einer der Größe nach sortierten Gruppe von Beobachtungswerten.
  - Ungerade Anzahl an Beobachtungswerten: Median = Wert an Position (n+1)/2.
  - Gerade Anzahl an Beobachtungswerten: Median = Durchschnitt der Positionen n/2 und (n+2)/2.
  - Anwendungsbeispiele: geeigneterer Durchschnittswert beim Auftreten von Extremwerten.
- Modus (Modalwert): häufigster Wert einer diskreten Häufigkeitsverteilung bzw. Maximum einer stetigen Häufigkeitsverteilung; Anwendung, wenn der häufigste Wert den "Sieger" bestimmt (z. B. Umfragen).
- Gewichteter Durchschnittswert: unterschiedliche Gewichtung einzelner Komponenten:

`r = Σ_{i=1}^{n} w_i * x_i`   mit `w_i = Anteil Asset i`

### Fachliche Aussage
Median und Modus sind robuste Lagemaße; das gewichtete Mittel berücksichtigt unterschiedliche Anteile/Gewichte der Komponenten.

### React-Vorschlag
`DefinitionList` mit drei Begriffskarten (Median / Modus / Gewichtetes Mittel) + `FormulaCard`.

---

## Folie 5 - Bilden von Durchschnittswerten: Geometrisches Mittel

### In der MD vorhanden
Verwendungs- und Definitionstext vorhanden; alle Formeln sind in der MD als unleserliche, zerbrochene Tabellen extrahiert.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Drei Formeln; die mittlere Renditeformel `r_geom = (Π(1+r_i))^(1/T) − 1` ist in einem hellblau hinterlegten Kasten hervorgehoben (die ganz rechte Form `= (V_T/V_0)^(1/T) − 1` steht außerhalb des blauen Kastens).

### Inhaltliche Rekonstruktion
Geometrisches Mittel (allgemeine Definition):

`x_geom = (x_1 · x_2 · … · x_T)^(1/T)`   (T-te Wurzel des Produkts)

Geometrisches Mittel von Renditen:

`(1 + r_geom)^T = Π_{i=1}^{T} (1 + r_i)`

`⇔ r_geom = ( Π_{i=1}^{T} (1 + r_i) )^(1/T) − 1 = (V_T / V_0)^(1/T) − 1`

- Verwendung bei der Berechnung von Durchschnittswerten bei Zeitreihen oder bei der Berechnung durchschnittlicher Wachstumsraten über einen längeren Zeitraum und **Wiederanlage der Zinsen**.

### Fachliche Aussage
Das geometrische Mittel ist das korrekte Durchschnittsmaß bei Wiederanlage (Zinseszins) über mehrere Perioden.

### React-Vorschlag
`FormulaCard` (drei KaTeX-Formeln, mittlere Renditeformel hervorgehoben).

---

## Folie 6 - Bilden von Durchschnittswerten: Übung

### In der MD vorhanden
Aufgabentext, Kurswerte und Lösungstext sind vorhanden; die Tabelle und die Formeln sind in der MD zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Eine sauber formatierte blaue Kurstabelle (Kopfzeile blau, Zeilen abwechselnd hell/blau). Die Lösungsergebnisse 25 % und 0 % sind auf der Folie blau hervorgehoben.

### Visuelle Rekonstruktion
Kurstabelle:

| t | Kurs (EUR) |
|---|-----------|
| 1 | 100,00 |
| 2 | 200,00 |
| 3 | 100,00 |

### Inhaltliche Rekonstruktion
Aufgabe: Berechnen Sie die arithmetische und geometrische Rendite für folgende Aktie.

Lösung:
- Rendite in Jahr 1: 200/100 − 1 = 100,0 %
- Rendite in Jahr 2: 100/200 − 1 = −50,0 %
- Arithmetisches Mittel: `r_arithm = (100% − 50%) / 2 = 25 %`
- Geometrisches Mittel: `r_geom = ( Π (1 + r_i) )^(1/T) − 1 = ( (1 + 100%)(1 − 50%) )^(1/2) − 1 = 0 %`
- Merksatz: Das arithmetische Mittel liefert also einen falschen Wert!

### Fachliche Aussage
Bei schwankenden Mehrperiodenrenditen überschätzt das arithmetische Mittel (25 %) die tatsächliche Wertentwicklung; das geometrische Mittel (0 %) ist korrekt.

### React-Vorschlag
`WorkedExample` mit `DataTable` (Kurse) und Schritt-für-Schritt-Lösung (`FormulaCard`); Ergebnisse als Highlight-Badges.

---

## Folie 7 - Stetige Rendite

### In der MD vorhanden
Die drei Überschriften (Verzinsungsformel bei unterjähriger / stetiger Verzinsung, Umrechnungsformeln) sind vorhanden; sämtliche Formeln sind in der MD zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Mehrere als Bild eingebettete Formeln, davon zwei in hellblau hinterlegten Boxen (die beiden Umrechnungsformeln).

### Inhaltliche Rekonstruktion
Verzinsungsformel bei unterjähriger Verzinsung:

`K_T = K_0 · (1 + i/m)^(m·T)`   und für T = 1 Jahr: `⇒ K_T = K_0 · (1 + i/m)^m`

Verzinsungsformel bei stetiger Verzinsung (m → ∞):

`K_1 = K_0 · lim_{m→∞} (1 + i/m)^m = K_0 · e^i`   `⇔ 1 + r_diskret = e^(r_stetig)`

Umrechnungsformeln (zwei hervorgehobene Boxen):

`r_diskret = e^(r_stetig) − 1`

`ln(1 + r_diskret) = r_stetig`

### Fachliche Aussage
Bei unendlich häufiger (stetiger) Verzinsung geht die Aufzinsung in die e-Funktion über; diskrete und stetige Renditen lassen sich per e-Funktion bzw. natürlichem Logarithmus ineinander umrechnen.

### React-Vorschlag
`FormulaCard` mit drei Blöcken; die beiden Umrechnungsformeln als hervorgehobene Boxen.

---

## Folie 8 - Mittlere stetige Rendite

### In der MD vorhanden
Wiederholungsformel (geom. Mittel diskreter Renditen), arithmetisches Mittel stetiger Renditen und der Merksatz zur Durchschnittsbildung über die Zeit sind vorhanden; alle Formeln und die untere Tabelle sind in der MD zerbrochen.

### Fehlende visuelle Inhalte
Oben rechts zwei gestapelte orange Sticker ("Wiederholung FI&RM" und ein zweiter, kleinerer "Wiederholung"-Sticker). Die Zwischenüberschriften "Geometrisches Mittel von (diskreten) Renditen" und "Arithmetisches Mittel von (stetigen) Renditen" sind blau hervorgehoben. Eine zweizeilige Umrechnungstabelle (diskrete vs. stetige Rendite) mit blauer Kopfspalte.

### Visuelle Rekonstruktion
Umrechnungstabelle diskrete -> stetige Rendite (Werte visuell abgelesen):

| Diskrete Rendite | -50% | -10% | -5% | 0% | +5% | +10% | +11,1% | +50% | +100% |
|---|---|---|---|---|---|---|---|---|---|
| Stetige Rendite | -0,693 | -0,105 | -0,051 | 0 | 0,049 | +0,095 | +0,105 | +0,405 | +0,693 |

### Inhaltliche Rekonstruktion
- Geometrisches Mittel (diskreter) Renditen: `(1 + r_geom)^T = Π_{i=1}^{T} (1 + r_i)`  bzw.  `r_geom = (Π (1 + r_i))^(1/T) − 1`
- Arithmetisches Mittel (stetiger) Renditen: `e^(r_avg · T) = Π_{i=1}^{T} e^(r_i) = e^(Σ r_i)`  ⇔  `r_avg = (1/T) · Σ_{i=1}^{T} r_i`
- Merksatz: Bei der Verwendung von stetigen Renditen erfolgt die Durchschnittsbildung über die Zeit mittels des arithmetischen Mittelwerts.

### Fachliche Aussage
Stetige Renditen sind zeitadditiv; deshalb ist bei ihnen das arithmetische (nicht das geometrische) Mittel das korrekte Zeitdurchschnittsmaß.

### React-Vorschlag
`FormulaCard` + `DataTable` (Umrechnungstabelle, ggf. horizontal scrollbar in `.table-wrap`).

---

## Folie 9 - Erwartete Rendite

### In der MD vorhanden
Problem-/Erwartungstext, Definition und Beispiel (Birne-Aktie) sind vorhanden; die Erwartungswertformel ist zerbrochen ("B = 62 8 -").

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Mehrere Schlüsselbegriffe im Fließtext sind blau hervorgehoben (u. a. "Problem", "erwartete Renditen μ", "Renditen r_i", "Gewichte den Eintrittswahrscheinlichkeiten p_i"). Die Formel ist als Bild eingebettet.

### Inhaltliche Rekonstruktion
Erwartete Rendite als wahrscheinlichkeitsgewichteter Durchschnitt:

`μ = Σ_{i=1}^{n} r_i · p_i`

- Problem: Die Zukunft ist ungewiss → Entwicklung der Assets ist unbekannt.
- Investoren basieren ihre Entscheidungen auf ihren Erwartungen über die Zukunft. Erwartete Renditen sind aber Zufallsvariablen.
- Dennoch kann ein Investor Erwartungen über die Zukunft haben und aus diesen erwartete Renditen μ bilden.
- Die erwartete Rendite μ wird als gewichteter Durchschnitt der möglichen Renditen r_i in unterschiedlichen Szenarien i berechnet, wobei die Gewichte den Eintrittswahrscheinlichkeiten p_i entsprechen.

Beispiel Birne-Aktie (aktuell 100 EUR):
- 25 % Wahrscheinlichkeit: Kurs 140 EUR
- 50 % Wahrscheinlichkeit: Kurs 110 EUR
- 25 % Wahrscheinlichkeit: Kurs 80 EUR
- Rechnung lt. Folie: `μ_ABC = 0,25 · 20% + 0,5 · 10% + 0,25 · (−20%) = 10 %`

(Hinweis: Im Rechenbeispiel werden die Renditen 20 %, 10 %, −20 % verwendet; die Kursangaben 140/110/80 EUR stehen im Aufgabentext. Achtung: Aus 100→140 EUR ergäben sich rechnerisch +40 %; die Folie setzt im Beispiel aber +20 % an. Die +20 % stammen unverändert von der Folie und werden hier so übernommen, ohne sie als Folienfehler zu korrigieren.)

### Fachliche Aussage
Da künftige Renditen Zufallsvariablen sind, bildet der Investor die erwartete Rendite μ als mit Eintrittswahrscheinlichkeiten gewichteten Mittelwert der Szenariorenditen.

### React-Vorschlag
`FormulaCard` + `ScenarioTable` (Szenario / Wahrscheinlichkeit / Rendite) mit ausgewiesenem μ-Ergebnis.

---

## Folie 10 - Anleihen: Preisbildung von Anleihen

### In der MD vorhanden
Erläuterungstext und Pari-Regeln (über/unter/zu pari) sind vorhanden; die Barwertformel und die Legende sind in der MD zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Zentrale, hellblau hinterlegte Barwertformel als Bild, rechts daneben eine Legende der Symbole. Die Begriffe "über", "unter", "gleich", "zu" sind blau hervorgehoben.

### Inhaltliche Rekonstruktion
Barwertformel für den Anleihewert K_A:

`K_A = Σ_{t=1}^{T} [ r_n / (1 + r)^t ] + RK / (1 + r)^T`

Legende:
- RK = Rückzahlungskurs (in %, i.d.R. = 100 %)
- r = Renditeforderung des Kapitalgebers
- T = Restlaufzeit der Anleihe
- r_n = Nominalzinssatz

Weiterer Text und Pari-Regeln:
- Die Renditeforderung des Kapitalgebers hängt u.a. ab vom Bonitätsrisiko des Emittenten oder der Liquidität der Anleihe.
- r_n > r: Kurs der Anleihe über Nennwert (über pari)
- r_n < r: Kurs der Anleihe unter Nennwert (unter pari)
- r_n = r: Kurs der Anleihe gleich Nennwert (zu pari)
- In einer Welt vollständiger Kapitalmarkteffizienz sind Wert und Kurs einer Anleihe identisch.

(Hinweis: Auf der Folie ist die dritte Pari-Zeile als Tippfehler mit "r_n > r" gedruckt; inhaltlich korrekt - wie der Zusatz "gleich / zu pari" zeigt - ist r_n = r. Die Korrektur ist hier vorgenommen.)

### Fachliche Aussage
Der Anleihewert ergibt sich als Barwert aller künftigen Kupon- und Rückzahlungsströme; das Verhältnis von Nominalzins zur geforderten Rendite bestimmt, ob die Anleihe über, unter oder zu pari notiert.

### React-Vorschlag
`FormulaCard` mit seitlicher `SymbolLegend`-Liste; Pari-Regeln als `ComparisonList`.

---

## Folie 11 - Preisbildung von Anleihen: Beispiel

### In der MD vorhanden
Der Beispieltext ist nur als zerbrochene Tabelle/Formel vorhanden; die Quelle "vgl. Bösch S. 238" und r = 5,26 % sind erkennbar.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Ein **Cashflow-Zeitstrahl-Diagramm** (Balkendiagramm), das in der MD vollständig verloren geht. Waagerechte Zeitachse von 0 (Achsenschnittpunkt) bzw. t nach rechts bis t+7. Unter dem Achsenschnitt ein nach unten reichender blauer Balken "98,5 €" mit Beschriftung "Kaufpreis" und einem Zackenbruch-Symbol (abgeschnittene Achse). Über t+1 bis t+6 jeweils gleich hohe blaue Balken "5,0 €" (Kuponzahlungen), darüber eine geschweifte Klammer mit Beschriftung "Kuponzahlungen". Über t+7 ein deutlich höherer Balken "105 €" mit Beschriftung "Zins- und Tilgung 105 €" (ebenfalls mit Zackenbruch-Symbol).

### Visuelle Rekonstruktion
```text
                       Kuponzahlungen            Zins- und Tilgung
                   ┌──────────────────────┐        105 €
   5€   5€   5€   5€   5€   5€            ┌──┐
   ▯    ▯    ▯    ▯    ▯    ▯             │  │
─0─┼────┼────┼────┼────┼────┼────────────┼──┼──► (Zeit)
 t t+1  t+2  t+3  t+4  t+5  t+6          t+7
▯ 98,5 € (Kaufpreis, nach unten)
```

### Inhaltliche Rekonstruktion
Kurs-/Barwertgleichung:

`Kurs = Σ_{t=1}^{T} [ Zahlung_t / (1 + i)^t ]`

`98,5 € = 5,0€/(1+r)^1 + 5,0€/(1+r)^2 + 5,0€/(1+r)^3 + … + 5,0€/(1+r)^6 + 105,0€/(1+r)^7`

`r = 5,26 %`

*Quelle: vgl. Bösch S. 238*

### Fachliche Aussage
Der faire Anleihekurs (98,5 €) ist der Barwert der sechs jährlichen Kupons (je 5 €) plus der Schlusszahlung aus Kupon + Tilgung (105 €); die zugehörige Rendite (Effektivzins) beträgt 5,26 %.

### React-Vorschlag
`CashflowTimeline` (SVG: Balken über Zeitachse, negativer Kaufpreis-Balken nach unten) + `FormulaCard` für die Barwertgleichung.

---

## Folie 12 - Auswirkungen von Zinsänderungen auf Anleihekurse: Laufzeit

### In der MD vorhanden
Regel und Begründung sind vorhanden; die Diagrammwerte und Achsen sind in der MD als zerbrochene Tabelle/Fließtext verstreut.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Zinsänderungen und Laufzeit" ist blau hervorgehoben. Ein **Säulendiagramm** rechts unten geht verloren. Y-Achse: "EUR" / Barwert, Skala 0 bis 200 (Gitterlinien 0, 50, 100, 150, 200). X-Achse (Kategorien): Laufzeiten "5 Jahre", "10 Jahre", "20 Jahre", "50 Jahre". Pro Laufzeit ein Block aus **fünf** Säulen mit der Legende "Marktzinssatz" 2 %, 3 %, 4 %, 5 %, 6 % (von dunkelblau nach hellblau). Über jedem Laufzeit-Block ein oranger Diagonalpfeil mit der prozentualen Barwertänderung: **-16,3 % (5J), -27,7 % (10J), -41,9 % (20J), -58,0 % (50J)** (visuell abgelesen). Rechts daneben ein **orange-blauer Textkasten** mit Erläuterung.

### Visuelle Rekonstruktion
```text
Barwert (EUR)
200 |                                         ▮(2%)
150 |  ▮                       ▮              ▮
100 |  ▮ ▮ ▮ ▮ ▮    ▮ ▮ ▮ ▮ ▮   ▮ ▮ ▮ ▮ ▮      ▮ ▮ ▮ ▮ ▮
 50 |  ▮ ▮ ▮ ▮ ▮    ▮ ▮ ▮ ▮ ▮   ▮ ▮ ▮ ▮ ▮      ▮ ▮ ▮ ▮ ▮
  0 +-----------------------------------------------------
       5 Jahre      10 Jahre    20 Jahre      50 Jahre   (Laufzeit)
       -16,3%↘      -27,7%↘     -41,9%↘       -58,0%↘
   Marktzinssatz (Säulen je Block): 2% 3% 4% 5% 6%
```

### Inhaltliche Rekonstruktion
- Einleitung: Die Auswirkungen von Zinsänderungen variieren von Bond zu Bond und sind von mehreren Faktoren abhängig.
- Regel: Je länger die Laufzeit eines Bonds, desto sensibler reagiert er auf Zinsänderungen von Vergleichsanleihen.
- Begründung: Bei einem Zinsanstieg sinkt der Barwert von Cashflows in weiter Zukunft stärker als der Barwert von frühen Cashflows.
- Textkasten (sinngemäß): Wenn die Zinsen ansteigen, geht der Barwert einer Anleihe mit langer Laufzeit drastisch stärker zurück als der Barwert einer Anleihe mit kurzer Laufzeit. Im vorliegenden Beispiel sinkt der Barwert der 50J-Anleihe um 58,0 %, während der Barwert der 5J-Anleihe nur um 16,3 % zurückgeht.

### Fachliche Aussage
Das Zinsänderungsrisiko (Kurssensitivität) einer Anleihe steigt mit ihrer Restlaufzeit, weil ferne Cashflows von Diskontierungsänderungen stärker betroffen sind (im Beispiel: -16,3 % bei 5J bis -58,0 % bei 50J).

### React-Vorschlag
`BarChart` (Recharts oder SVG, Kategorien = Laufzeiten, gruppierte Säulen je Marktzinssatz) mit annotierten Änderungspfeilen + `Callout` für den Erläuterungskasten.

---

## Folie 13 - Auswirkungen von Zinsänderungen auf Anleihekurse: Nominalverzinsung

### In der MD vorhanden
Regel und Begründung sind vorhanden; die Diagrammbeschriftung ist als zerbrochene Tabelle/Fließtext extrahiert.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Zinsänderungen und Nominalverzinsung" ist blau hervorgehoben. Ein **gruppiertes Säulendiagramm** geht verloren. Y-Achse: "Veränderung des Anleihewertes" von -20 % bis 30 % (Gitterlinien -20 %, -10 %, 0 %, 10 %, 20 %, 30 %). X-Achse: "Nominalzinssatz / Coupon der Anleihe" mit Kategorien 0 %, 2 %, 4 %, 6 %, 8 %. Pro Kategorie vier Säulen laut Legende: dunkelgrün = "Rückgang um 2%" (höchste positive Säulen, ca. +21 % bei 0 %, fallend auf ca. +16 % bei 8 %), hellgrün = "Rückgang um 1%" (ca. +10 % auf +8 %), hellorange = "Anstieg um 1%" (negativ, ca. -9 % auf -7 %), dunkelorange = "Anstieg um 2%" (am stärksten negativ, ca. -17 % auf -13 %). Tendenz: je höher der Coupon, desto kleiner die Ausschläge. (Alle Prozentwerte visuell abgelesen.)

### Visuelle Rekonstruktion
```text
Veränderung des Anleihewertes
 30% |
 20% | █                                  Legende:
 10% | █ ▒        █ ▒      █ ▒    █ ▒  █ ▒   █ Rückgang um 2% (dunkelgrün)
  0% |─────────────────────────────────    ▒ Rückgang um 1% (hellgrün)
-10% |     ░ ▓        ░ ▓     ░ ▓ ...       ░ Anstieg um 1% (hellorange)
-20% |                                      ▓ Anstieg um 2% (dunkelorange)
       0%    2%    4%    6%   8%
       Nominalzinssatz / Coupon der Anleihe
```

### Inhaltliche Rekonstruktion
- Regel: Je niedriger der Nominalzins eines Bonds, desto sensibler reagiert der Bond auf Zinsänderungen von Vergleichsanleihen.
- Begründung: Höhere Kupons führen zu höheren Cashflows in einem früheren Stadium des Bonds. Der Barwert wird sich durch Zinsänderungen daher weniger verändern. Im Extremfall eines Zero-Bonds wird der Barwert auf Zinsänderungen besonders stark reagieren.
- Legende: Rückgang um 2 % / Rückgang um 1 % / Anstieg um 1 % / Anstieg um 2 % (des Marktzinses).

### Fachliche Aussage
Niedrig verzinste (insbesondere Zero-)Anleihen reagieren auf Marktzinsänderungen kurssensitiver als hoch verzinste Anleihen.

### React-Vorschlag
`GroupedBarChart` mit Farb-Legende (4 Serien) + Regel/Begründung als `KeyPointList`.

---

## Folie 14 - Zinsänderungsrisiken: Macauley-Duration

### In der MD vorhanden
Definition, Annahmen, Aussage und Interpretation sind vorhanden; die Durationsformel und die Symbollegende sind zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Begriffe "Macauley-Duration (nach Frederick R. Macaulay, 1938)", "Definition", "zeitgewichteten Summe der Barwerte", "Annahmen", "Aussage", "Interpretation" sind blau hervorgehoben. Zentrale, hellblau hinterlegte Durationsformel als Bild mit rechtsseitiger Symbollegende.

### Inhaltliche Rekonstruktion
Macauley-Duration (nach Frederick R. Macaulay, 1938):

`D = ( Σ_{t=1}^{n} t · CF_t · (1 + r)^(−t) ) / ( Σ_{t=1}^{n} CF_t · (1 + r)^(−t) )`

Symbollegende:
- CF_t = Cashflow im Zeitpunkt t
- r = Marktzinssatz
- T = Restlaufzeit
- t = Zeitindex / Gewichtungsfaktor

- Definition: Durchschnittliche Kapitalbindungsdauer des eingesetzten Kapitals (Angabe in Jahren). Hierzu wird der Quotient aus der zeitgewichteten Summe der Barwerte zukünftiger Einzahlungsströme und aktuellem Marktwert gebildet.
- Annahmen: flache Zinsstrukturkurve; Zinsänderungen nur in Form von Parallelverschiebungen der Zinsstrukturkurve.
- Aussage: Maß des Zinsänderungsrisikos einer Anleihe, das Laufzeit, Rendite, Nominalzins (und Call-Features) berücksichtigt.
- Interpretation: Je höher die Duration, desto stärker fällt der Kurs der Anleihe bei einem Anstieg des allgemeinen Zinsniveaus → Risikoaverse Investoren sollten Anleihen mit kurzer Duration bevorzugen.

### Fachliche Aussage
Die Macauley-Duration misst als barwertgewichtete mittlere Kapitalbindungsdauer (in Jahren) die Zinssensitivität einer Anleihe.

### React-Vorschlag
`FormulaCard` mit `SymbolLegend` + `AssumptionList`.

---

## Folie 15 - Zinsänderungsrisiken: Duration (Barwerte-Waage)

### In der MD vorhanden
Erläuterungen zu Marktwert-/Wiederanlageeffekt und Kerngedanke der Duration sind vorhanden; die Grafik ("Barwerte-Waage") und D = 6,07 fehlen bzw. sind nicht beschrieben.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Begriffe "Beispiel" und "Barwerte-Waage" sind blau hervorgehoben. Eine **Barwerte-Waage-Grafik** (Balkenwaage) geht verloren: Auf einer horizontalen Zeitachse (t+1 … t+7) stehen oben die "Zahlung"-Balken (je 5 €, am Ende 105 €) und darunter die diskontierten "Barwert"-Balken; das Ganze ist auf einer Waage abgebildet, deren Drehpunkt/Auflage den Durationszeitpunkt markiert. Unten rechts ein blauer Kasten "D = 6,07". Beispielbeschriftung: 5%-Anleihe, Rendite 5,26 %, 7 Jahre.

### Visuelle Rekonstruktion
```text
Zahlung:  5€  5€  5€  5€  5€  5€  105€
Barwert:  ▯   ▯   ▯   ▯   ▯   ▯   ▮
         t+1 t+2 t+3 t+4 t+5 t+6 t+7
              △  (Drehpunkt = Duration)
                              [ D = 6,07 ]
```

### Inhaltliche Rekonstruktion
- Zinsänderungen führen zu Marktwerteffekten (Änderung des Kurses der Anleihe) und zu Wiederanlageeffekten (da sich der vom Investor zu erzielende Zinssatz auf die zwischenzeitlich ausgeschütteten Zinszahlungen verändert).
- Beispiel: Steigt der Marktzins, fällt der Kurs der Anleihe (negativer Marktwerteffekt), während die Kuponzahlungen zu höheren Zinsen wieder angelegt werden können (positiver Wiederanlageeffekt).
- Gegenläufiger Effekt auf den Vermögensendwert des Anlegers.
- Kerngedanke der Duration: Die Duration bestimmt den Zeitpunkt, zu dem sich beide gegenläufigen Effekte gerade aufheben.
- Beispiel: 5%-Anleihe, Rendite 5,26 %, 7 Jahre → D = 6,07.

### Fachliche Aussage
Die Duration ist der "Gleichgewichtszeitpunkt", an dem sich Marktwert- und Wiederanlageeffekt einer Zinsänderung exakt kompensieren (im Beispiel 6,07 Jahre).

### React-Vorschlag
`DurationBalanceDiagram` (SVG-Waage mit Cashflow-/Barwert-Balken und markiertem Drehpunkt) + `ResultBadge` "D = 6,07".

---

## Folie 16 - Zinsänderungsrisiken: Sensitivitäten der Duration

### In der MD vorhanden
Vollständige Aufzählung der Einflussfaktoren, Erhöhungsmöglichkeiten, Zero-Bond-Hinweis und Grenzwertformel sind vorhanden; die zwei orangefarbenen Erläuterungs-Sprechblasen und die Schlussformel sind in der MD zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Sensitivitäten der Duration" ist blau hervorgehoben. Rechts zwei **orange Textkästen** mit Erläuterungen, die jeweils auf die zugehörigen Bulletpoints zeigen: (1) "Je kleiner der Coupon, umso geringer der Anteil der Zinszahlungen am Barwert der Anleihe", (2) "Je geringer die Rendite, umso höher das Gewicht der späteren Zahlungsströme". Die Grenzwertformel unten als Bild.

### Inhaltliche Rekonstruktion
Die Duration ist umso höher,
- je niedriger der Coupon einer Anleihe ist,
- je niedriger die Rendite einer Anleihe ist,
- je länger die Restlaufzeit einer Anleihe ist,
- je niedriger die vorzeitigen Tilgungen sind und je später diese anfallen (vorhanden).

Erhöhung der Duration durch:
- Ersetzen kurzlaufender Wertpapiere durch langlaufende.
- Ergänzen des Portefeuilles durch Langläufer.

Weitere Aussagen:
- Die Duration eines Zero-Bonds entspricht seiner Restlaufzeit.
- Duration ist nicht z.zw. so hoch wie die Restlaufzeit der Anleihe: In der Praxis kann beobachtet werden, dass mit steigender Restlaufzeit die Duration nur unterproportional ansteigt. Selbst bei unendlicher Laufzeit würde die Duration diesen Wert nie erreichen. Es gilt:

`D_max = 1 + 1/r`

(Hinweis: In der MD als "D = 1/r − 1" verstümmelt; gemeint ist der Grenzwert `D_max = 1 + 1/r`, abgelesen aus der Folienformel.)

### Fachliche Aussage
Die Duration steigt bei niedrigem Coupon, niedriger Rendite und langer Laufzeit, nähert sich für sehr lange Laufzeiten aber dem oberen Grenzwert D_max = 1 + 1/r.

### React-Vorschlag
`KeyPointList` mit zwei seitlichen `Callout`-Sprechblasen + `FormulaCard` (Grenzwertformel).

---

## Folie 17 - Zinsänderungsrisiken: Duration eines Portfolios

### In der MD vorhanden
Erläuterungstext und der Hinweis auf additive Verknüpfbarkeit sind vorhanden; die Portfolio-Durationsformel ist zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Duration eines Portfolios" ist blau hervorgehoben. Zentrale, hellblau hinterlegte Formel als Bild.

### Inhaltliche Rekonstruktion
Duration eines Portfolios:

`D_Portfolio = Σ_{i=1}^{n} w_i · D_i`

- Die Duration eines Portfolios entspricht der mit den Barwertanteilen gewichteten Summe der Durations der einzelnen Zahlungsströme.
- w_i = Anteil des Portfolio-Wertes, der in Anleihe i investiert ist.
- → Durations-Maße können additiv verknüpft werden.
- Die Duration jedes im Portfolio enthaltenen Zahlungsstromes wird mit seinem Barwertanteil gewichtet. Die Summe der gewichteten Durationen entspricht der Gesamt-Duration des Portfolios.

### Fachliche Aussage
Die Portfolio-Duration ist das mit den Barwertanteilen gewichtete Mittel der Einzelanleihen-Durationen (additive Eigenschaft).

### React-Vorschlag
`FormulaCard` + erläuternde `KeyPointList`.

---

## Folie 18 - Zinsänderungsrisiken: Modified Duration

### In der MD vorhanden
Problem, Definition und Interpretation sind vorhanden; die Formel ist zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Begriffe "Modified Duration", "Definition", "Interpretation" sind blau hervorgehoben. Zentrale, hellblau hinterlegte Formel als Bild.

### Inhaltliche Rekonstruktion
Modified Duration:

`MD = (Macaulay-Duration) / (1 + r_M)`

- Problem: Messung der Macauley-Duration in Jahren → komplexe Anwendbarkeit in der Praxis.
- Definition: Modified Duration MD ist eine Maßzahl für die Sensitivität einer Anleihe. Sie gibt die relative Veränderung des Anleihekurses aufgrund einer relativen Veränderung des Marktzinses an.
- Interpretation: MD als Elastizität des Anleihekurses gegenüber dem Marktzinssatz r_M.

### Fachliche Aussage
Die Modified Duration normiert die Macaulay-Duration auf (1 + r) und macht sie zur direkten Kennzahl für die prozentuale Kursreaktion auf Marktzinsänderungen.

### React-Vorschlag
`FormulaCard` mit kurzer Interpretations-Notiz.

---

## Folie 19 - Zinsänderungsrisiken: Zusammenhang zwischen Anleihekurs und Rendite

### In der MD vorhanden
Überschrift, Bildunterschrift und Quelle sind vorhanden, aber die Diagrammbeschriftung ist als zerbrochener "doppelter" Text extrahiert (B3 B2 B1, r3 r2 r1).

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Tatsächlicher Zusammenhang zwischen Anleihe-Kurs und Rendite" ist blau hervorgehoben (das Wort "Tatsächlicher" zusätzlich unterstrichen). Ein **Kurs-Rendite-Diagramm** (hellblau hinterlegtes Feld) geht verloren: Y-Achse "Anleihe-preis", X-Achse "Anleiherendite". Eine fallende, **konvex gekrümmte** orange Kurve (Hyperbel-Form). Drei gestrichelte Hilfslinien markieren Punkte auf der Kurve: bei niedriger Rendite r3 ein hoher Preis B3, bei r2 ein mittlerer Preis B2, bei r1 (höchste Rendite) der niedrigste Preis B1. Die r-Werte stehen aufsteigend auf der X-Achse (r3 < r2 < r1), die zugehörigen B-Werte absteigend auf der Y-Achse (B3 > B2 > B1). Bildunterschrift: "Beziehung zwischen Anleihepreisen und Anleiherenditen zum Zeitpunkt t".

### Visuelle Rekonstruktion
```text
Anleihe-
preis
 |\
B3|·\
 |  ·\
B2|----·\
 |      ·\
B1|--------·\___
 |   :   :   :  ‾‾‾----____
 +---r3--r2--r1------------► Anleiherendite
```

### Inhaltliche Rekonstruktion
- Darstellung: konvex fallender Zusammenhang zwischen Anleihepreis (Y) und Anleiherendite (X).
- Je höher die Rendite, desto niedriger der Preis (B3 > B2 > B1 bei r3 < r2 < r1).

*Abbildung nach: Hull (2019): Optionen, Futures und andere Derivate*

### Fachliche Aussage
Der tatsächliche Zusammenhang zwischen Anleihekurs und Rendite ist negativ und konvex (nicht linear) - die Grundlage für das Konvexitätskonzept der Folgefolien.

### React-Vorschlag
`PriceYieldCurve` (SVG/Recharts: fallende konvexe Kurve mit drei markierten Stützpunkten B1/B2/B3 zu r1/r2/r3).

---

## Folie 20 - Zinsänderungsrisiken: Konvexität (Erweiterung des Duration-Konzepts)

### In der MD vorhanden
(Im Kollegen-Entwurf FEHLTE diese Folie vollständig - der Entwurf sprang von Folie 19 direkt auf "Standardabweichung" und war ab hier um zwei Folien verschoben. Diese Folie wurde ergänzt.) Sofern in der MD vorhanden: voraussichtlich Fließtext zu Konvexität (Unterschätzung durch Modified Duration) plus zerbrochene Konvexitätsformel.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Titel: "Zinsänderungsrisiken / Konvexität: Erweiterung des Duration-Konzepts". Die Zwischenüberschrift "Konvexität" und das Symbol "C" sind blau/fett hervorgehoben. Zentrale, hellblau hinterlegte Konvexitätsformel als Bild; rechts daneben ein **oranger Textkasten** "Änderungen gegenüber der Durationsformel", der per Pfeil und gestricheltem Oval auf die Zusatzterme `(1+t)` im Zähler und `(1+t)^2`/`(1+r)^2` im Nenner zeigt.

### Inhaltliche Rekonstruktion
Konvexitätsformel C:

`C = ( Σ_{t=1}^{n} (t · CF_t / (1+r)^t) · (1+t) ) / ( Σ_{t=1}^{n} (CF_t / (1+r)^t) · (1+t)^2 )`

- Da der tatsächliche Zusammenhang zwischen Anleihekurs und Renditeforderung konvex und nicht linear ist, unterschätzt die Modified Duration die Wirkung von Marktzinsänderungen.
- Zur Ermittlung der Konvexität C wird die Formel der Duration angepasst:
  - Im Zähler wird der Term (1+t) hinzugefügt.
  - Der aus der Duration bekannte Nenner wird mit (1+r)^2 multipliziert.
- Die Konvexität beschreibt die Änderung der Duration in Abhängigkeit der Änderung der Renditeforderung (= Krümmung).

### Fachliche Aussage
Die Konvexität korrigiert die durch die lineare Modified Duration verursachte Unterschätzung der Kursreaktion; sie misst die Krümmung der Kurs-Rendite-Beziehung.

### React-Vorschlag
`FormulaCard` mit annotiertem `Callout` (oranger Kasten "Änderungen gegenüber der Durationsformel") + `KeyPointList`.

---

## Folie 21 - Zinsänderungsrisiken: Konvexität (Beispiel und Kursänderungsformel)

### In der MD vorhanden
(Ebenfalls FEHLTE diese Folie im Kollegen-Entwurf. Ergänzt.) Sofern in der MD vorhanden: Beispielrechnung und Erläuterung als zerbrochene Formeln.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Konvexität" ist blau hervorgehoben. Oben erneut die Konvexitätsformel (mit orange markierten Zusatztermen `(1+t)` bzw. `(1+t)^2`). In der Mitte eine als Bild eingebettete Beispielrechnung; unten eine hellblau hinterlegte Formelbox für die relative Kursänderung.

### Inhaltliche Rekonstruktion
Beispielrechnung (bezogen auf das vorherige Beispiel):

`C = ( 1·2·4,54 + 2·3·4,13 + 3·4·3,76 + 4·5·71,72 ) / ( 1,1^2 · 84,15 ) = 14,86`

Relative Kursänderung (hervorgehobene Box):

`relative Kursänderung = −MD · Δr + 0,5 · C · (Δr)^2`

- Aus Investorensicht ist diejenige Anlagealternative wertvoller, die bei gleicher Modified Duration eine höhere Konvexität aufweist: Fallende Zinsen führen zu höheren Kursgewinnen, während steigende Zinsen zu weniger hohen Abschlägen führen.

### Fachliche Aussage
Mit Duration und Konvexität lässt sich die Kursänderung einer Anleihe approximieren: −MD · Δr + 0,5 · C · (Δr)^2; eine höhere Konvexität ist bei gleicher MD vorteilhaft (asymmetrisch günstige Reaktion auf Zinsänderungen).

### React-Vorschlag
`FormulaCard` (Beispielrechnung) + hervorgehobene `FormulaBox` für die Kursänderungsformel + `KeyPointList`.

---

## Folie 22 - Zinsänderungsrisiken: Beispiele Duration und Konvexität

### In der MD vorhanden
Die Tabelle ist als zerbrochene Markdown-Tabelle vorhanden; Werte und Quelle sind verstreut, aber rekonstruierbar.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Eine **formatierte Datentabelle** mit blauer Kopfzeile und sechs durchnummerierten Anleihezeilen (jeweils mit Bezeichnung und Endfälligkeitsdatum in der zweiten Spalte; Spaltenüberschriften mehrzeilig in blauen Kästchen).

### Inhaltliche Rekonstruktion
Beispiele: Duration und Konvexität (Kurs am 30.11.2009):

| Nr. | Anleihebezeichnung | Kurs am 30.11.2009 | Rendite p.a. in % | Duration in Jahren | Modified Duration | Konvexität |
|---|---|---|---|---|---|---|
| 1 | 8,5% ThyssenKrupp AG (25.02.2016) | 111,000 | 6,302 | 4,88 | 4,73 | 0,28 |
| 2 | 8,0% Daimler Finance NA (15.06.2010) | 103,350 | 1,694 | 0,52 | 0,51 | 0,01 |
| 3 | 4,375% E.ON AG (18.02.2016) | 105,161 | 3,438 | 5,44 | 5,34 | 0,34 |
| 4 | 4,375% Daimler Finance NA (16.03.2010) | 100,780 | 1,576 | 0,28 | 0,28 | 0,00 |
| 5 | 3,5% Bundesrepublik Deutschland (04.01.2016) | 105,240 | 2,559 | 5,44 | 5,37 | 0,35 |
| 6 | 3,125% Bundesobligation (09.04.2010) | 100,942 | 0,547 | 0,35 | 0,35 | 0,00 |

*Quelle: Frère/Rojahn/Schyra, Risikomanagement von Bond-Portfolios, in: Handelsblatt Business Briefing, 2010, Nr. 1, S. 7ff.*

### Fachliche Aussage
Reale Marktbeispiele zeigen: kurze Restlaufzeit → niedrige Duration/Konvexität (z. B. Bundesobligation 0,35/0,00), längere Laufzeit → höhere Duration und Konvexität (z. B. E.ON 5,34/0,34).

### React-Vorschlag
`DataTable` (responsive, in `.table-wrap`) mit Quellenfußnote als `.source-note`.

---

## Folie 23 - Risiko: Abweichung vom Erwartungswert

### In der MD vorhanden
Die Kernaussage (Streuung vs. Zielerreichungswahrscheinlichkeit) und die Bildbeschriftungen (Mittelwert=Median=Modalwert, Investment mit niedriger/hoher Abweichung, Erwartete Rendite) sind als verstreute Textfragmente vorhanden.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Risiko: Abweichung vom Erwartungswert" ist blau hervorgehoben. Ein **Verteilungsdiagramm mit zwei Glockenkurven** geht verloren. Am gemeinsamen Mittelwert eine senkrechte grüne Linie mit Beschriftung "Erwartete Rendite" (X-Achse). Zwei um denselben Mittelwert zentrierte Normalverteilungs-Glockenkurven: eine **orange, hohe und schmale** Kurve = "Investment mit niedriger Abweichung/Streuung"; eine **blaue, flachere und breitere** Kurve = "Investment mit hoher Abweichung/Streuung". Eine graue Beschriftungsbox "Mittelwert=Median=Modalwert" mit zwei Pfeilen auf die Kurvenscheitel.

### Visuelle Rekonstruktion
```text
Häufigkeit
   |        ╱╲         orange = niedrige Streuung (hoch/schmal)
   |       ╱  ╲
   |   _.-' .. '-._    blau = hohe Streuung (flach/breit)
   |_-'   :    :   '-_
   +-------┃-----------► (X)
        (grüne Linie = Mittelwert = Median = Modalwert = Erwartete Rendite)
```

### Inhaltliche Rekonstruktion
- Je höher (geringer) die Abweichung (= Streuung), desto geringer (höher) ist die Wahrscheinlichkeit, dass der angestrebte Zielwert erreicht wird.
- Bei der dargestellten (Normal-)Verteilung gilt: Mittelwert = Median = Modalwert (am Scheitel / an der grünen Linie).

### Fachliche Aussage
Bei gleichem Erwartungswert ist das Investment mit der geringeren Streuung "sicherer" (höhere Zielerreichungswahrscheinlichkeit) - Streuung = Risiko.

### React-Vorschlag
`DistributionComparisonChart` (zwei überlagerte Glockenkurven mit Mittelwertlinie und Legenden).

---

## Folie 24 - Risikokennzahlen: Standardabweichung / Volatilität

### In der MD vorhanden
Vollständiger Definitions- und Erläuterungstext inkl. μ- und σ-Regel ist vorhanden; die Varianz-/Standardabweichungsformel ist zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Begriffe "Standardabweichung" und "Intensität der Schwankungen" sind blau hervorgehoben. Die Formel ist als Bild eingebettet. (Hinweis: Dies ist die EINZIGE Standardabweichungs-Folie im Skript - der Kollegen-Entwurf führte fälschlich zwei Standardabweichungs-Folien als "Folie 20" und "Folie 24 (Wiederholung)". Es gibt keine Dublette; die Folie steht ausschließlich auf PDF-Seite 24.)

### Inhaltliche Rekonstruktion
Standardabweichung (Wurzel der Varianz der Renditen):

`σ = sqrt( (1/(n−1)) · Σ_{i=1}^{n} (r_i − r̄)^2 )`

- Das Risiko wird gemessen durch die Standardabweichung σ der Renditen r_i.
- Je höher die Standardabweichung, desto höher ist auch die beobachteten Aktienkurse von ihrem Mittelwert und desto höher ist das mit einem Investition in diese Aktie verbundene Risiko.
- Wird in den Finanzwissenschaften auch als Volatilität bezeichnet.
- An der Börse: Volatilität ist ein Maß für die Intensität der Schwankungen eines Wertpapierkurses um seinen Mittelwert.
- Vorteil: Gleiche Dimension wie Erwartungswert (z. B. % bei Renditen).
- Asset A ist vorteilhafter als Asset B, wenn A bei gleicher Standardabweichung eine höhere Rendite erwirtschaftet (μ-Regel) oder dieselbe Rendite bei geringerer Standardabweichung erzielt (σ-Regel).

### Fachliche Aussage
Die Standardabweichung/Volatilität ist das zentrale Streuungs- und Risikomaß; μ- und σ-Regel ordnen Anlagen nach Rendite-Risiko-Dominanz.

### React-Vorschlag
`FormulaCard` + `RuleCallout` für μ-Regel und σ-Regel.

---

## Folie 25 - Risikokennzahlen: Annualisierung der Standardabweichung

### In der MD vorhanden
Überschrift und Erläuterungstext vorhanden; die zentrale Skalierungsformel ist zerbrochen.

### Fehlende visuelle Inhalte
Oranger "Wiederholung FI&RM"-Sticker. Die Zwischenüberschrift "Annualisierung der Standardabweichung" ist blau hervorgehoben. Die Annualisierungsformel als Bild; der erste Term `σ_annualisiert = √250 · σ_d` ist in einer hellblauen Box hervorgehoben. (Hinweis: Auch hier gibt es im Skript nur eine einzige Annualisierungs-Folie; die im Kollegen-Entwurf behauptete "Wiederholung" auf einer separaten Folie existiert nicht.)

### Inhaltliche Rekonstruktion
Annualisierung der Standardabweichung (Wurzel-Zeit-Skalierung):

`σ_annualisiert = √250 · σ_d = √52 · σ_w = √12 · σ_m = √4 · σ_q`

- σ_d = tägliche, σ_w = wöchentliche, σ_m = monatliche, σ_q = quartalsweise Standardabweichung.
- Aus der annualisierten Standardabweichung (Volatilität) lässt sich die erwartete Tagesschwankung eines Wertpapiers berechnen und umgekehrt.

### Fachliche Aussage
Volatilitäten verschiedener Frequenzen werden über die Wurzel der Periodenzahl pro Jahr (250 Handelstage, 52 Wochen, 12 Monate, 4 Quartale) annualisiert.

### React-Vorschlag
`FormulaCard` (Wurzel-Zeit-Skalierung) mit kurzer Legende der Periodenfaktoren.

---

## Folie 26 - Risikokennzahlen: Volatilität am US-Kapitalmarkt

### In der MD vorhanden
Nur Titel und Quelle ("Quelle: Berk / DeMarzo (2020)") sind vorhanden. Die eigentliche Tabelle fehlt vollständig in der MD.

### Fehlende visuelle Inhalte
Diese Folie hat **kein** Wiederholungs-Sticker (anderes, helleres HBW-Kopflayout). Eine als Bild eingebettete **rosafarbene Tabelle (Tabelle 10.4)** geht in der MD komplett verloren: rote Titelleiste rechts "Tabelle 10.4", rosaroter Beschreibungsblock und eine vierzeilige Tabelle mit zwei Spalten.

### Inhaltliche Rekonstruktion
Tabelle 10.4 - "Die Volatilität der Aktien kleinerer US-amerikanischer Unternehmen, der Aktien großer Unternehmen (S&P 500), von Unternehmensanleihen und Schatzwechseln von 1926 bis 2017":

| Investition | Volatilität der Rendite (Standardabweichung) |
|---|---|
| Aktien kleiner Unternehmen | 39,2 % |
| S&P 500 | 19,8 % |
| Unternehmensanleihen | 6,4 % |
| Schatzwechsel | 3,1 % |

*Quelle: Berk / DeMarzo (2020)*

### Fachliche Aussage
Empirische Volatilitäten 1926-2017 belegen das Rendite-Risiko-Gefälle: risikoreichere Assetklassen (Aktien kleiner Unternehmen 39,2 %) weisen deutlich höhere Volatilität auf als sichere Schatzwechsel (3,1 %).

### React-Vorschlag
`DataTable` mit hervorgehobener Titelleiste; optional als horizontales `BarChart` (Volatilität je Assetklasse).

---

## Folie 27 - Schätzfehler

### In der MD vorhanden
Der vollständige Fließtext (vier Bulletpoints) ist vorhanden.

### Fehlende visuelle Inhalte
Diese Folie hat **kein** Wiederholungs-Sticker. Keine eigenständige Fachgrafik. Die Titelzeile "Schätzfehler:" ist blau hervorgehoben; in den Bullets sind "durchschnittliche realisierte Rendite der erwarteten Rendite" und "Annahme" fett. Der dritte Bulletpoint ("Die durchschnittliche Rendite ist nur eine Schätzung … Schätzfehler unterliegen!") ist auf der Folie blau und kursiv hervorgehoben.

### Inhaltliche Rekonstruktion
Schätzfehler: Die Verwendung von Renditen aus der Vergangenheit zur Prognose der Zukunft.
- Wenn wir der Ansicht sind, dass Anleger im Durchschnitt weder übermäßig optimistisch noch übermäßig pessimistisch sind, würde im Laufe der Zeit die durchschnittliche realisierte Rendite der erwarteten Rendite der Anleger entsprechen.
- Mit Hilfe dieser Annahme können wir die durchschnittliche historische Rendite zur Ableitung der erwarteten Rendite heranziehen.
- (Hervorgehoben) Die durchschnittliche Rendite ist nur eine Schätzung der tatsächlichen erwarteten Rendite und kann einem Schätzfehler unterliegen!
- Standardfehler: Statistische Maßzahl für den Schätzfehler.

### Fachliche Aussage
Historische Durchschnittsrenditen sind nur fehlerbehaftete Schätzer der erwarteten Rendite; der Standardfehler quantifiziert diese Unsicherheit.

### React-Vorschlag
`KeyPointList` mit hervorgehobenem Merksatz (`.callout`).

---

## Folie 28 - Mit vergangenen Renditen die Zukunft vorhersagen: Schätzfehler

### In der MD vorhanden
Standardfehler-Logik, Konfidenzintervall-Regel, das S&P-500-Beispiel und die Fußnote (1,96) sind als verstreute Textfragmente vorhanden; alle Formeln sind zerbrochen.

### Fehlende visuelle Inhalte
Kein Wiederholungs-Sticker. Die Zwischenüberschrift "Schätzfehler" sowie die Begriffe "Standardfehler" und "95% Konfidenzintervall" sind blau hervorgehoben. Zwei hellblau hinterlegte Formelboxen als Bilder (Standardfehler-Formel und Konfidenzintervall-Regel) sowie die als Bild eingebettete S&P-500-Rechnung.

### Inhaltliche Rekonstruktion
Standardfehler der Schätzung der erwarteten Rendite (hervorgehobene Box):

`σ(Durchschnitt unabhängiger, identischer Risiken) = σ(individuelles Risiko) / √(Anzahl Beobachtungen)`

95 %-Konfidenzintervall (circa)* (hervorgehobene Box):

`Historische durchschnittliche Rendite ± (2 × Standardfehler)`

Für den S&P 500 (1926-2017) gilt:

`12,0 % ± 2 · (19,8 % / √92) = 12,0 % ± 4,1 %`  →  oder ein Bereich von 7,9 % bis 16,1 %.

*Fußnote: "Circa", da der mathematisch exakte Wert 1,96 beträgt.*

### Fachliche Aussage
Der Standardfehler sinkt mit der Wurzel der Beobachtungszahl; für den S&P 500 ergibt sich trotz 92 Jahren Daten ein breites 95 %-Konfidenzintervall der erwarteten Rendite (7,9 %-16,1 %).

### React-Vorschlag
`FormulaCard` (zwei hervorgehobene Boxen + Rechenbeispiel) mit `.source-note`-Fußnote zum Faktor 1,96.

---

## Folie 29 - Risikokennzahlen / Volatilität in der Praxis

### In der MD problematisch/fehlend
Die MD enthält nur Titel und Untertitel ("Risikokennzahlen", "Volatilität in der Praxis"), die Überschrift "Historische vs. implizite Volatilität am Beispiel des DAX30 (jetzt:DAX40)" sowie die Folienzeile. Das eigentliche Liniendiagramm fehlt vollständig. (Folienfußzeile: "Asset Management / CS / Folie 125"; PDF-Seite = 29.)

### Fehlende visuelle Inhalte
Großes Liniendiagramm mit zwei Zeitreihen über den Zeitraum 01.01.2007 bis 02.06.2020:
- Y-Achse: 0% bis 60% (Schrittweite 10%).
- X-Achse: Monats-/Jahresmarken 01.2007 bis 01.2020 (in 1-Jahres-Schritten).
- Rote Linie ("Implizite Volatilität (VDAX - 12M)"): durchgehend die stärker zackende/höher liegende Linie; markante Spitze ca. 55% Anfang 2009 (Finanzkrise), weitere Peaks ca. 40% um 2011/2012, langfristig zwischen ca. 15-25% pendelnd, am rechten Rand (2020, Corona) sprunghafter Anstieg auf ca. 53% (visuell abgelesen, ca.).
- Türkis-/grüne Linie ("Historische Volatilität (DAX - 12M)"): glatter/nachlaufend; erreicht ca. 40% um 2009/2010, Tief ca. 10% um 2017/2018, am rechten Rand Anstieg auf ca. 30% (visuell abgelesen, ca.).
- Legende oben mit roter und türkiser Linienmarkierung.
- Quellenfußnote im Diagramm: "Timeframe: 01.01.2007 - 02.06.2020; Source: Datastream".

### Visuelle Rekonstruktion
```
60% |
50% |       ^(rot ~55% 2009)                              ^(rot ~53% 2020)
40% |       ___(türkis ~40%)        ^(rot ~40% 2011/12)
30% |  rot/türkis schwankend ~20-30%                  türkis ~30%
20% |  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
10% |                                  türkis Tief ~10% (2017/18)
 0% +--+----+----+----+----+----+----+----+----+----+--->
   2007  2009  2011  2013  2015  2017  2019  2020
   — rot = implizite Vola (VDAX 12M)   — türkis = historische Vola (DAX 12M)
```

### Inhaltliche Rekonstruktion
Vergleich impliziter (VDAX) und historischer (DAX) 12-Monats-Volatilität; alle Werte visuell abgelesen (ca.). Quelle: Timeframe 01.01.2007 - 02.06.2020, Datastream.

### Fachliche Aussage
Die Folie illustriert, dass Volatilität stark schwankt und in Krisenzeiten (2009, 2020) sprunghaft ansteigt; die implizite (markterwartete) Volatilität reagiert tendenziell früher und ausgeprägter als die historisch realisierte.

### React-Vorschlag
`VolatilityTimeSeriesChart` - Liniendiagramm (z. B. Recharts LineChart) mit zwei Reihen und farbiger Legende; alternativ statisches SVG mit zwei stilisierten Kurven und Achsen-Labels.

---

## Folie 30 - Risikokennzahlen / Normalverteilung: Aus der Natur in die Wissenschaften

### In der MD vorhanden
Der vollständige Textinhalt ist in der MD enthalten (Beispiele für Normalverteilung, Markteffizienz/Random Walk, Definition mit Stichpunkten zu Erwartungswert/Varianz, Dichtefunktion = Gauß-/Glockenfunktion, Mittelwert = Median, Sigma-Band 68,3%, 99,7%-Regel).

### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik. Nur Layout-Elemente (HBW-Logo, orangefarbenes "Wiederholung FI&RM"-Banner). Keine fachlichen Bildinhalte verloren.

### Visuelle Rekonstruktion
(keine Grafik)

### Inhaltliche Rekonstruktion
Definition Normalverteilung (Stichpunkte):
- Charakterisierung durch Erwartungswert und Varianz
- Dichtefunktion = Gauß- bzw. Glockenfunktion
- Mittelwert entspricht Median
- definiert durch Erwartungswert und Standardabweichung
- Sigma-Band: 68,3% der Werte im Intervall ± 1 Standardabweichung um den Mittelwert
- 99,7% der Werte im Intervall ± 3 Standardabweichungen um den Mittelwert

### Fachliche Aussage
Die Normalverteilung ist eine stetige Wahrscheinlichkeitsverteilung, die durch Erwartungswert und Standardabweichung vollständig beschrieben wird und bei Markteffizienz/Random Walk als Näherung für stetige Renditen dient.

### React-Vorschlag
`ContentSection` mit Definitionsliste; optional `KeyTakeawayList` für die Sigma-Regeln.

---

## Folie 31 - Risikokennzahlen / Normalverteilungshypothese

### In der MD problematisch/fehlend
Die MD enthält den Einleitungssatz ("Die Volatilität ist nur dann ein geeignetes Risikomaß, wenn die zugrundeliegenden Renditen normalverteilt sind."), das Zahlenbeispiel (μ = 10%, σ = 20%) und die fragmentierten Prozentwerte/Intervalle. Die Glockenkurve und ihre exakte Zuordnung der Flächenanteile sind in der MD zerbrochen.

### Fehlende visuelle Inhalte
Symmetrische Gauß-Glockenkurve (hellblau gefüllt) auf Koordinatensystem:
- Y-Achse beschriftet "Wahrscheinlichkeit".
- X-Achse beschriftet "Rendite".
- Beispielangabe oben: "Bsp.: μ = Erwartete Rendite = 10%, σ = Standardabweichung = 20 %".
- Drei gestrichelte Intervallklammern in der Kurve mit Beschriftung 68.3%, 95.5%, 99.7%.
- Acht Flächensegmente unter der Kurve mit Prozentanteilen (von links nach rechts): 0,13% | 2,14% | 13,59% | 34,13% | 34,13% | 13,59% | 2,14% | 0,13%.
- Unter der Achse drei Doppelpfeile mit Formeln und Intervallgrenzen:
  - E(r) ± 1σ → -10% bis +30%
  - E(r) ± 2σ → -30% bis +50%
  - E(r) ± 3σ → -50% bis +70%

### Visuelle Rekonstruktion
```
Wahrscheinlichkeit
        _-^-_           μ=10%, σ=20%
      /  |||  \         |---68.3%---|
    /   ||||| | \      |----95.5%----|
  _/ 0,13|2,14|13,59|34,13|34,13|13,59|2,14|0,13 \_   -> Rendite
        E(r)±1σ:  -10% <----> +30%
        E(r)±2σ:  -30% <------> +50%
        E(r)±3σ:  -50% <--------> +70%
```

### Inhaltliche Rekonstruktion
| Intervall | Bereich | Wahrscheinlichkeit |
|---|---|---|
| E(r) ± 1σ | -10% bis +30% | 68,3% |
| E(r) ± 2σ | -30% bis +50% | 95,5% |
| E(r) ± 3σ | -50% bis +70% | 99,7% |

Flächenanteile je σ-Segment: 0,13% / 2,14% / 13,59% / 34,13% / 34,13% / 13,59% / 2,14% / 0,13%.

### Fachliche Aussage
Die Folie zeigt, dass bei normalverteilten Renditen mit μ = 10% und σ = 20% die Renditen mit definierten Wahrscheinlichkeiten in den σ-Intervallen liegen; Volatilität ist nur unter dieser Normalverteilungsannahme ein geeignetes Risikomaß.

### React-Vorschlag
`NormalDistributionChart` - SVG-Glockenkurve mit eingezeichneten σ-Bändern und Flächen-Labels; darunter `SigmaIntervalTable` mit den drei Intervallen.

---

## Folie 32 - Risikokennzahlen / Kritik am Volatilitätskonzept

### In der MD vorhanden
Die MD enthält Fragestellung, die Standardabweichungen (σ_A = 4,1% für A, σ_B = 0% für B) und die Interpretationssätze. Die beiden Tabellen sind in der MD nur fragmentiert/verstreut wiedergegeben.

### Fehlende visuelle Inhalte
Zwei kleine farbige Tabellen (blaue Kopfzeile, hellblaue Datenzeile) mit jeweils danebenstehender geschweifter Klammer und Ergebnisformel:
- Tabelle Wertpapier A: Kopf "Wertpapier A | 1 | 2 | 3", Zeile "r_A | 5% | 15% | 10%", Klammer → σ_A = 4,1%.
- Tabelle Wertpapier B: Kopf "Wertpapier B | 1 | 2 | 3", Zeile "r_B | -15% | -15% | -15%", Klammer → σ_B = 0%.

### Visuelle Rekonstruktion
```
Wertpapier A |  1   |  2   |  3
   r_A       | 5%   | 15%  | 10%   }-> σ_A = 4,1%

Wertpapier B |  1   |  2   |  3
   r_B       | -15% | -15% | -15%  }-> σ_B = 0%
```

### Inhaltliche Rekonstruktion
| | Periode 1 | Periode 2 | Periode 3 | Standardabw. |
|---|---|---|---|---|
| Wertpapier A (r_A) | 5% | 15% | 10% | σ_A = 4,1% |
| Wertpapier B (r_B) | -15% | -15% | -15% | σ_B = 0% |

- "Wertpapier A mit einer Gesamtperformance von 32,8% ist riskanter als Wertpapier B mit einer Performance von -38,6%."
- "Der Verlust von 38,6% kam völlig risikolos zustande!" (σ_B = 0%).

### Fachliche Aussage
Die Folie kritisiert die Volatilität als Risikomaß: Ein Wertpapier mit konstant negativen, aber gleichen Renditen hat σ = 0 (gilt formal als risikolos), obwohl es real Verlust bringt - Volatilität misst Schwankung, nicht Verlust.

### React-Vorschlag
`VolatilityCritiqueExample` - zwei kleine `DataTable`-Komponenten nebeneinander mit hervorgehobenem Ergebnis (σ-Wert) und Interpretations-Callout.

---

## Folie 33 - Risikokennzahlen / Höhere Momente der Verteilung

### In der MD vorhanden
Der gesamte Textinhalt ist in der MD vorhanden (symmetrische Risikokennzahl/Chancen, höhere Momente bei nicht normalverteilten Renditen, die 4 Momente: Erwartungswert/Mean, Standardabweichung/Volatilität, Schiefe/Skewness, Wölbung/Kurtosis).

### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählung; keine Grafik. Nur Layout-Elemente (Logo, "Wiederholung FI&RM"-Banner).

### Visuelle Rekonstruktion
(keine Grafik)

### Inhaltliche Rekonstruktion
4 Momente einer Wahrscheinlichkeitsverteilung:
1. Erwartungswert (erwartete Rendite bzw. Mean)
2. Standardabweichung bzw. Volatilität
3. Schiefe (Skewness)
4. Wölbung (Kurtosis)

### Fachliche Aussage
Da Volatilität symmetrisch ist und nur negative Abweichungen echtes Risiko darstellen, hängt der Nutzen einer Anlage bei nicht normalverteilten Renditen zusätzlich von den höheren Momenten (Schiefe, Wölbung) ab.

### React-Vorschlag
`ContentSection` mit nummerierter Liste der vier Momente; ggf. `KeyTakeawayList`.

---

## Folie 34 - Risikokennzahlen / Schiefe

### In der MD problematisch/fehlend
Die MD enthält den Text (Definition Skewness, Schiefekoeffizient = 0 bei sym. Verteilungen, rechtsschiefe > 0, Linksschiefe-Erläuterung). Die Skewness-Formel ist in der MD stark zerbrochen ("bcA-7ADD =", "∑9 * − *̅ C", "aC").

### Fehlende visuelle Inhalte
Hervorgehobener Formelkasten (hellblau hinterlegt) mit der Schiefe-Formel.

### Visuelle Rekonstruktion
(Formel, siehe unten)

### Inhaltliche Rekonstruktion
Formel (Klartext, exakt wie auf der Folie):
```
Skewness = (1/n) · [ Σ_{i=1}^{n} (r_i − r̄)³ ] / σ³
```
- Schiefekoeffizient = 0 bei symmetrischen Verteilungen (also auch Normalverteilung), bei rechtsschiefer Verteilung > 0.
- Linksschiefe Verteilungen: höhere Wahrscheinlichkeit von Werten oberhalb des Erwartungswerts, jedoch gleichfalls höhere Gefahr von niedrigen Extremwerten.

### Fachliche Aussage
Die Schiefe (Skewness) misst den Grad der Asymmetrie einer Verteilung über das dritte zentrale Moment, normiert mit σ³.

### React-Vorschlag
`FormulaBlock` (KaTeX/MathJax) für die Skewness-Formel innerhalb einer `ContentSection`.

---

## Folie 35 - Risikokennzahlen / Schiefe (rechtsschief vs. linksschief)

### In der MD problematisch/fehlend
Die MD enthält die Textzeilen ("Rechtsschiefe (linkssteile) Verteilung", "Mean > Median > Modus", "Linksschiefe (rechtssteile) Verteilung", "Mean < Median < Modus", "Dichtefunktion", Quellenangabe, die beiden Bulletpoints zu risikoaversen Anlegern und linksschiefen Verteilungen). Die beiden Verteilungsgrafiken fehlen.

### Fehlende visuelle Inhalte
Zwei nebeneinanderstehende Diagramme in farbig umrahmten Boxen:
- Linke Box "Rechtsschiefe (linkssteile) Verteilung" mit roter Kopfzeile "Mean > Median > Modus": Dichtefunktionskurve mit Gipfel links der Mitte (linkssteil) und langem Ausläufer nach rechts; Achsen "Dichtefunktion" (y) und "Rendite" (x); Beschriftung "Rechtsschiefe Verteilung".
- Rechte Box "Linksschiefe (rechtssteile) Verteilung" mit grüner Kopfzeile "Mean < Median < Modus": Dichtefunktionskurve mit Gipfel rechts der Mitte (rechtssteil) und langem Ausläufer nach links; Beschriftung "Linksschiefe Verteilung".
- Quelle (klein): "Abbildung nach Bruns/Meyer-Bullerdiek, Professionelles Portfoliomanagement, 2008, S. 34."

### Visuelle Rekonstruktion
```
RECHTSSCHIEF (linkssteil)        LINKSSCHIEF (rechtssteil)
Mean > Median > Modus            Mean < Median < Modus
 |_                                        _|
 | \__                                  __/ |
 |    \____                        ____/    |
 +----------> Rendite              <----------+ Rendite
 Gipfel links, Ausläufer rechts    Gipfel rechts, Ausläufer links
```

### Inhaltliche Rekonstruktion
| Verteilung | Lagebeziehung |
|---|---|
| Rechtsschief (linkssteil) | Mean > Median > Modus |
| Linksschief (rechtssteil) | Mean < Median < Modus |

- Risikoaverse Anleger bevorzugen rechtsschiefe Verteilungen, da der Erwartungswert rechts vom Median liegt. Relativ zum Erwartungswert führt positive Skewness zu einem begrenzten, wenngleich häufigen Downside und einem unbegrenzten, jedoch seltenen Upside.
- Bei gleichem Erwartungswert und gleicher Standardabweichung ist bei linksschiefen Verteilungen die Gefahr hoher negativer Extremwerte größer.

Quelle: Abbildung nach Bruns/Meyer-Bullerdiek, Professionelles Portfoliomanagement, 2008, S. 34.

### Fachliche Aussage
Die Folie veranschaulicht die Lagebeziehung von Mittelwert/Median/Modus bei rechts- bzw. linksschiefen Verteilungen und erklärt, warum risikoaverse Anleger rechtsschiefe Verteilungen bevorzugen.

### React-Vorschlag
`SkewnessComparison` - zwei nebeneinander angeordnete SVG-Dichtekurven (rechts-/linksschief) mit Kopfzeilen-Badges für die Lagebeziehung (rot/grün); darunter Interpretations-Callouts.

---

## Folie 36 - Beispiel / Schiefe auf Basis erwarteter Renditen

### In der MD vorhanden
Die MD enthält den Einleitungstext, die Tabelle mit Szenarien s(1)-s(4) (Wahrscheinlichkeiten p, r(A), r(B)) sowie die Folgesätze (erwartete Rendite/Volatilität jeweils 5% bzw. 8,215%, µ-σ-Prinzip, Schiefe für Rangordnung). Werte sind in der MD vorhanden.

### Fehlende visuelle Inhalte
Farbige Tabelle (blaue Kopfzeile, hellblaue Datenzeilen) mit vier Szenariospalten. In der MD korrekt vorhanden, aber als Bildtabelle eingebettet.

### Visuelle Rekonstruktion
```
        | s(1)  | s(2)   | s(3)   | s(4)
   p    | 5,00% | 56,25% | 22,50% | 16,25%
  r(A)  | -10%  | 0%     | 10%    | 20%
  r(B)  | 20%   | 10%    | 0%     | -10%
```

### Inhaltliche Rekonstruktion
| | s(1) | s(2) | s(3) | s(4) |
|---|---|---|---|---|
| p | 5,00% | 56,25% | 22,50% | 16,25% |
| r(A) | -10% | 0% | 10% | 20% |
| r(B) | 20% | 10% | 0% | -10% |

- Als erwartete Rendite bzw. erwartete Volatilität ergibt sich jeweils 5% bzw. 8,215% (für beide Wertpapiere identisch).
- Auf Grundlage des µ-σ-Prinzips ist keine adäquate Auswahl möglich (Erwartungswert und Volatilität sind identisch).
- Erst unter Zuhilfenahme der Schiefe kann eine eindeutige Rangordnung erstellt werden.

### Fachliche Aussage
Zwei Wertpapiere mit identischem Erwartungswert und identischer Volatilität lassen sich allein über µ und σ nicht unterscheiden; erst die Schiefe ermöglicht eine Rangordnung.

### React-Vorschlag
`ScenarioReturnTable` - `DataTable` mit Szenariospalten; darunter `ContentSection` mit den drei Schlussfolgerungen.

---

## Folie 37 - Beispiel / Schiefe auf Basis erwarteter Renditen (Formel)

### In der MD problematisch/fehlend
Die MD enthält die Erläuterungstexte (ε(r_i) = erwartete Rendite im Szenario i, μ = Erwartungswert, p_i = Eintrittswahrscheinlichkeit des Szenarios i, σ = Volatilität des Assets) und die Ergebniswerte (Schiefe-Koeffizient A = 0,61, B = -0,61). Die Formel ist in der MD zerbrochen.

### Fehlende visuelle Inhalte
Hervorgehobener Formelkasten (hellblau) mit der normierten Schiefe auf Basis erwarteter Renditen.

### Visuelle Rekonstruktion
(Formel, siehe unten)

### Inhaltliche Rekonstruktion
Formel (Klartext, exakt wie auf der Folie):
```
Skewness = [ Σ_{i=1}^{n} ( (ε(r_i) − μ)³ · p_i ) ] / σ³
```
Mit: ε(r_i) = erwartete Rendite im Szenario i, μ = Erwartungswert, p_i = Eintrittswahrscheinlichkeit des Szenarios i, σ = Volatilität des Assets.

Ergebnis: Für Wertpapier A beträgt der Schiefe-Koeffizient 0,61, für Wertpapier B -0,61.

### Fachliche Aussage
Die wahrscheinlichkeitsgewichtete (normierte) Schiefe ergibt für Wertpapier A einen positiven (rechtsschiefen, +0,61) und für B einen negativen (linksschiefen, -0,61) Koeffizienten - das entscheidet die zuvor unmögliche Rangordnung.

### React-Vorschlag
`FormulaBlock` für die Schiefe-Formel plus `ResultCallout` mit den beiden Koeffizienten (+0,61 / -0,61).

---

## Folie 38 - Risikokennzahlen / Wölbung (Kurtosis)

### In der MD problematisch/fehlend
Die MD enthält den Text (vierter Einflussfaktor, Definition Maßzahl für Steilheit/"Spitzigkeit", Vergleich zu Normalverteilung, Wölbungskoeffizient = 3 bei NV, > 3 leptokurtisch, < 3 platykurtisch, dünne Enden). Die Kurtosis-Formel ist in der MD zerbrochen ("C1*46D5D = %", "∑9 * − *̅ D", "aD"). Außerdem fehlt der erläuternde Bulletpoint zur Definition der Wölbung.

### Fehlende visuelle Inhalte
Hervorgehobener Formelkasten (hellblau) mit der Kurtosis-Formel.

### Visuelle Rekonstruktion
(Formel, siehe unten)

### Inhaltliche Rekonstruktion
Formel (Klartext, exakt wie auf der Folie):
```
Kurtosis = (1/n) · [ Σ_{i=1}^{n} (r_i − r̄)⁴ ] / σ⁴
```
- Definition: Maßzahl für die Steilheit ("Spitzigkeit") einer Verteilung.
- Die Wölbung erfasst, ob im Vergleich zu einer Normalverteilung mehr oder weniger Wahrscheinlichkeitsmasse in den Rändern und der Mitte der Verteilung liegt.
- Wölbungskoeffizient bei Normalverteilung = 3.
- bei fetten Enden > 3: "leptokurtisch".
- bei dünnen Enden < 3: "platykurtisch".
- Dünne Enden: Renditeausprägungen in unmittelbarer Nähe des Erwartungswerts, Extremwerte sind weniger wahrscheinlich.

### Fachliche Aussage
Die Wölbung (Kurtosis) misst die Steilheit/"Spitzigkeit" einer Verteilung über das vierte zentrale Moment (normiert mit σ⁴); Referenzwert 3 entspricht der Normalverteilung.

### React-Vorschlag
`FormulaBlock` für die Kurtosis-Formel; `DefinitionList` für die drei Wölbungstypen (lepto-/platy-/mesokurtisch).

---

## Folie 39 - Risikokennzahlen / Wölbung (Kurtosis) (Diagramm)

### In der MD problematisch/fehlend
Die MD enthält die beiden Bulletpoints ("An Kapitalmärkten dominieren Linksschiefe und fette Enden"; "Folge der fetten Enden und der Linksschiefe: Wird mit der Normalverteilungsannahme gearbeitet, werden Risiken systematisch unterschätzt"), die Achsen-/Legendenbeschriftungen ("Dichtefunktion", "Leptokurtisch gewölbte Verteilung", "Normalverteilung", "Rendite") und den Handlungsempfehlungs-Kasten. Das Diagramm und die grüne Notiz-Box sind in der MD als verstreuter Text.

### Fehlende visuelle Inhalte
Diagramm (hellblauer Hintergrund) mit zwei überlagerten Dichtekurven:
- Orange durchgezogene Kurve = "Leptokurtisch gewölbte Verteilung": sehr spitzer, hoher und schmaler Gipfel in der Mitte.
- Schwarz gestrichelte Kurve = "Normalverteilung": flacherer, breiterer Gipfel.
- An den Rändern (fette Enden) liegt die orange Kurve leicht über der gestrichelten.
- y-Achse "Dichtefunktion", x-Achse "Rendite".
- Legende rechts: orange Linie ("Leptokurtisch gewölbte Verteilung") / schwarz gestrichelte Linie ("Normalverteilung").
- Grüne Haftnotiz-Box: "Handlungsempfehlung für das Portfoliomanagement: Maximiere die ungerade Momente (erwartete Rendite und Schiefe) und minimiere gerade Momente (Volatilität und Wölbung)."

### Visuelle Rekonstruktion
```
Dichtefunktion
   |        ‖ (orange: leptokurtisch, spitz)
   |       ╱‖╲
   |    __╱ ‖ ╲__  (schwarz gestrichelt: Normalverteilung, flacher)
   |  _/   ‖ ‖   \_   <- fette Enden (orange leicht über gestrichelt)
   +------------------> Rendite
   — orange: leptokurtisch    --- schwarz: Normalverteilung
[Grüne Notiz: Maximiere ungerade Momente (Rendite, Schiefe),
              minimiere gerade Momente (Volatilität, Wölbung)]
```

### Inhaltliche Rekonstruktion
- An Kapitalmärkten dominieren Linksschiefe und fette Enden.
- Folge der fetten Enden und der Linksschiefe: Wird mit der Normalverteilungsannahme gearbeitet, werden Risiken systematisch unterschätzt.
- Handlungsempfehlung für das Portfoliomanagement: ungerade Momente (erwartete Rendite, Schiefe) maximieren, gerade Momente (Volatilität, Wölbung) minimieren.

### Fachliche Aussage
Die Folie zeigt eine leptokurtische Verteilung mit fetten Enden im Vergleich zur Normalverteilung und leitet daraus die Portfolio-Handlungsempfehlung ab, ungerade Momente zu maximieren und gerade zu minimieren.

### React-Vorschlag
`KurtosisComparisonChart` - SVG mit zwei überlagerten Dichtekurven (durchgezogen leptokurtisch, gestrichelt Normalverteilung); daneben `HighlightNote`-Box (grün) für die Handlungsempfehlung.

---

## Folie 40 - Risikokennzahlen / Schiefe und Wölbung an Kapitalmärkten

### In der MD vorhanden
Die MD enthält die vollständige Tabelle "Rendite- und Risikokennzahlen gängiger Assetklassen" mit allen Zellwerten sowie Basis- und Quellenangabe. Tabelle ist als Bildtabelle eingebettet, Werte aber lesbar in der MD.

### Fehlende visuelle Inhalte
Farbige Datentabelle (blaue Kopfzeile, abwechselnde Zeilenhintergründe) mit Spalten: Assetklasse | Rendite in % p.a. | Volatilität in % p.a. | Schiefe (Koeffizient) | Kurtosis.

### Visuelle Rekonstruktion
(Tabellengerüst, siehe unten)

### Inhaltliche Rekonstruktion
| Assetklasse | Rendite in % p.a. | Volatilität in % p.a. | Schiefe (Koeffizient) | Kurtosis |
|---|---|---|---|---|
| EURO-Staatsanleihen 5-7J. | 5,94 | 3,71 | -0,43 | 3,46 |
| MSCI Europe | 5,74 | 17,43 | -0,76 | 3,77 |
| DAX | 6,08 | 23,99 | -0,83 | 5,23 |
| MDAX | 7,07 | 20,36 | -0,88 | 6,46 |
| MSCI North America | 5,44 | 18,63 | -0,51 | 3,16 |
| Dow Jones China Offshore | 7,90 | 43,11 | 0,01 | 5,05 |
| MSCI Latin America | 13,32 | 31,20 | -1,24 | 6,63 |
| XETRA GOLD | 8,56 | 15,25 | 0,54 | 4,27 |
| RICI Rogers Metals | 10,04 | 17,07 | -0,35 | 4,37 |
| Crude Oil DJ-AIGCI | 9,97 | 34,87 | -0,71 | 5,36 |
| Agriculture DJ-AIGCI | 1,60 | 18,67 | -0,18 | 3,21 |

Basis: monatliche Renditen Jan. 1996 bis Jun. 2010. Quelle: Rojahn et al. (2010): Optimum Portfolio Indices. (Hinweis: einzelne Dezimalstellen sind im Original klein gerendert; bei Einbau gegen das Skript gegenprüfen.)

### Fachliche Aussage
Die Folie belegt empirisch, dass gängige Assetklassen überwiegend negative Schiefe (Linksschiefe) und eine Kurtosis > 3 (fette Enden) aufweisen - also nicht normalverteilt sind.

### React-Vorschlag
`AssetClassMomentsTable` - `DataTable` mit den fünf Spalten; ggf. farbliche Hervorhebung negativer Schiefe und Kurtosis > 3.

---

## Folie 41 - Value-at-Risk (VaR)

### In der MD vorhanden
Der gesamte Textinhalt ist in der MD vorhanden (VaR-Frage, Definition, wahrscheinlichkeitsbasiertes Maß, Ausdruck als Prozentsatz/Währungseinheit, Vorteile des VaR-Konzepts).

### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik. Nur Layout-Elemente (kein "Wiederholung"-Banner auf dieser Folie).

### Visuelle Rekonstruktion
(keine Grafik)

### Inhaltliche Rekonstruktion
VaR-Leitfrage (kursiv auf der Folie): "Bei welchem Verlustniveau können wir zu X % sicher sein, dass es nach N Geschäftstagen nicht überschritten wird?"
- Definition: Schätzung des Verlustbetrags, von dem wir erwarten, dass er mit einer bestimmten Wahrscheinlichkeit in einem bestimmten Zeitraum nicht überschritten wird.
- Wahrscheinlichkeitsbasiertes Maß des Verlustpotenzials eines Unternehmens, Funds, Portfolios oder einer Transaktion.
- Wird i. d. R. als Prozentsatz oder in Währungseinheiten ausgedrückt.
- Vorteile: durch eine einzelne Zahl ausdrückbar, leicht verständlich; beantwortet die Fragen "Wie schlimm kann es werden?" und "Wie schlechtem können sich die Dinge entwickeln?".

### Fachliche Aussage
Der Value-at-Risk schätzt einen Verlustbetrag, der mit einer bestimmten Wahrscheinlichkeit in einem bestimmten Zeitraum nicht überschritten wird, und verdichtet das Verlustpotenzial auf eine einzige Kennzahl.

### React-Vorschlag
`ContentSection` mit Definitions-Block und Vorteilsliste; ggf. `QuoteBlock` für die VaR-Leitfrage.

---

## Folie 42 - Value-at-Risk (Beispiel/Folgen)

### In der MD vorhanden
Der gesamte Textinhalt ist in der MD vorhanden (Beispiel VaR EUR 1,5 Mio./Tag bei 5%, beide Interpretationen, Folgen: Mindestverlust, Senkung Wahrscheinlichkeit 5%→1% erhöht VaR, Bezug auf Zeitintervall).

### Fehlende visuelle Inhalte
Reine Textfolie mit farblichen Hervorhebungen einzelner Wörter (z. B. "95%iger Wahrscheinlichkeit", "5%ige Wahrscheinlichkeit", "Mindestverlustes", "derselben Zeithorizont"). Keine Grafik.

### Visuelle Rekonstruktion
(keine Grafik)

### Inhaltliche Rekonstruktion
Beispiel: VaR eines Portfolios = EUR 1,5 Mio. pro Tag bei einer Wahrscheinlichkeit von 5,0%.
- Interpretation (1): Mit 95%iger Wahrscheinlichkeit wird der Portfolioverlust nicht mehr als EUR 1,5 Mio. an einem einzigen Handelstag betragen.
- Interpretation (2): 5%ige Wahrscheinlichkeit, dass das Portfolio an einem Tag EUR 1,5 Mio. oder mehr verliert.
Folgen: Beschreibung eines Mindestverlustes - der tatsächliche Verlust kann größer sein. Ein Senken der Wahrscheinlichkeit von 5% auf 1% erhöht den VaR (gegeben dieselbe Haltedauer). Der VaR bezieht sich auf ein Zeitintervall → unterschiedliche VaR-Konzepte müssen auf denselben Zeithorizont bezogen werden, um vergleichbar zu sein.

### Fachliche Aussage
Die Folie konkretisiert die Interpretation des VaR an einem Zahlenbeispiel und betont, dass der VaR einen Mindestverlust bei gegebenem Konfidenzniveau und Zeithorizont beschreibt.

### React-Vorschlag
`ContentSection` mit zweispaltigem Interpretations-Block; farbige `InlineHighlight`-Spans für Schlüsselbegriffe.

---

## Folie 43 - Berechnung des VaR (Diagramm)

### In der MD problematisch/fehlend
Die MD enthält nur Titel "Berechnung des VaR", die Abbildungsunterschrift sowie die Quelle (Hull 2019). Das Diagramm (Verteilungskurve mit markiertem VaR-Bereich) fehlt vollständig.

### Fehlende visuelle Inhalte
Glockenförmige Verteilungskurve (schwarze Linie) der Wertänderungen des Portfolios (Gipfel deutlich rechts der VaR-Markierung):
- Der linke, dünne Verteilungsrand ist dunkel/grau eingefärbt (Verlustbereich).
- Die eingefärbte Fläche ist mit "(100 − X)%" beschriftet.
- Ein Pfeil zeigt von "(100 − X)%" auf den eingefärbten Tail; auf der x-Achse darunter ist die Stelle "VaR" markiert.
- Gewinne als positive, Verluste als negative Größen.
- Abbildungsunterschrift: "Abbildung 22.1: Berechnung des VaR aus der Wahrscheinlichkeitsverteilung der Änderungen im Wert des Portfolios bei einem Konfidenzniveau von X%. Gewinne werden als positive und Verluste als negative Größen aufgefasst."
- Quelle: Hull (2019): Optionen, Futures und andere Derivate.

### Visuelle Rekonstruktion
```
              _-^^^^^-_
            /          \
          /              \
   ___ /                  \___
  ▓▓| <- (100-X)% (eingefärbter linker Tail)   (Gewinne ->)
   ^VaR
```

### Inhaltliche Rekonstruktion
Der VaR ist der Punkt auf der x-Achse (Wertänderung), links von dem die eingefärbte Fläche (100 − X)% liegt; X% ist das Konfidenzniveau. Quelle: Hull (2019).

### Fachliche Aussage
Die Folie zeigt grafisch, wie der VaR als Quantil aus der Verteilung der Portfolio-Wertänderungen abgelesen wird: die markierte linke Restfläche (100 − X)% entspricht der Verlustwahrscheinlichkeit.

### React-Vorschlag
`VaRDistributionChart` - SVG-Glockenkurve mit eingefärbtem linken Verlust-Tail, VaR-Markierung und Flächen-Label "(100−X)%".

---

## Folie 44 - Parameter des VaR (Konfidenzniveau / Verteilungsannahme)

### In der MD vorhanden
Der gesamte Textinhalt ist in der MD vorhanden (Konfidenzniveau: 95-99,9%, kleiner als eigene Ausfallwahrscheinlichkeit, Vergleichbarkeit; Verteilungsannahme: Normalverteilung/Schiefe/Gleichverteilung/Parameter ermittelbar; → determiniert Wahl des VaR-Ansatzes).

### Fehlende visuelle Inhalte
Reine Textfolie mit zwei gegliederten Blöcken; keine Grafik.

### Visuelle Rekonstruktion
(keine Grafik)

### Inhaltliche Rekonstruktion
Konfidenzniveau:
- Sicherheitsniveau, welches nicht überschritten wird.
- In der Regel zwischen 95% und 99,9%.
- Sollte bei einem Unternehmen kleiner sein als die "eigene Ausfallwahrscheinlichkeit".
- Risiken sind nur dann vergleichbar, wenn sie dasselbe Konfidenzniveau und denselben Dispositionshorizont aufweisen.

Verteilungsannahme:
- Normalverteilung? Schiefe? Gleichverteilung?
- Sind Parameter der Verteilung wie Median, Mittelwert und Standardabweichung überhaupt ermittelbar?
- → Dies determiniert die Wahl des VaR-Ansatzes.

### Fachliche Aussage
Die beiden zentralen VaR-Parameter Konfidenzniveau und Verteilungsannahme bestimmen, welcher VaR-Ansatz gewählt wird und ob Risiken überhaupt vergleichbar sind.

### React-Vorschlag
`ContentSection` mit zwei gegliederten Unterlisten (Konfidenzniveau / Verteilungsannahme).

---

## Folie 45 - Parameter des VaR (Haltedauer)

### In der MD problematisch/fehlend
Die MD enthält den Text (Marktpreisrisiko meist 10 Tage, Beispiel ABC AG, Adressrisiken 1 Jahr/250 Handelstage, Skalierung Wurzel-T, Beispiel Wurzel(250/10)=5). Die Skalierungsformel ist in der MD zerbrochen.

### Fehlende visuelle Inhalte
Hervorgehobener Formelkasten (hellblau) mit der Wurzel-T-Skalierungsformel.

### Visuelle Rekonstruktion
(Formel, siehe unten)

### Inhaltliche Rekonstruktion
Formel (Klartext, exakt wie auf der Folie):
```
Risiko_Jahr = Risiko_Haltedauer · √(250 / Haltedauer)
```
- Marktpreisrisiko: meist 10 Tage. Beispiel: "Mit 99%iger Wahrscheinlichkeit wird die Aktie der ABC AG in den nächsten 10 Tagen um nicht mehr als 7,4% fallen, d.h. unter 19 € sinken."
- Adressrisiken: meist 1 Jahr / 250 Handelstage.
- Skalierung mit der Wurzel-T-Funktion - Annahme: Normalverteilung (statistische Unabhängigkeit).
- Beispiel: Soll das Risiko von 10 Tagen auf 250 skaliert werden, so muss das 5-fache des 10-Tage-Risikos verwendet werden: Wurzel(250/10) = 5.

### Fachliche Aussage
Die Haltedauer (Dispositionshorizont) wird über die Wurzel-T-Regel skaliert; unter Annahme normalverteilter, unabhängiger Renditen wächst das Risiko mit der Wurzel der Zeit.

### React-Vorschlag
`FormulaBlock` für die Wurzel-T-Formel; `WorkedExample`-Box mit dem Rechenbeispiel √(250/10)=5.

---

## Folie 46 - Arten des VaR (Vergleichstabelle)

### In der MD problematisch/fehlend
Die MD enthält den gesamten Tabellentext (Varianz-Kovarianz, Historische Simulation, Monte-Carlo-Simulation mit Definition/Vorteil/Nachteil und Quelle Reuse 2006), allerdings stark zerbrochen und durcheinander. Die Tabellenstruktur (Zeilenköpfe Definition/Vorteil/Nachteil × 3 Methodenspalten) ist als Bildtabelle verloren.

### Fehlende visuelle Inhalte
Dreispaltige farbige Vergleichstabelle (blaue Zeilenköpfe links: Definition / Vorteil / Nachteil) mit drei Methodenspalten (Varianz-Kovarianz, Historische Simulation, Monte-Carlo-Simulation).

### Visuelle Rekonstruktion
(Tabellengerüst, siehe unten)

### Inhaltliche Rekonstruktion
| | Varianz-Kovarianz | Historische Simulation | Monte-Carlo-Simulation |
|---|---|---|---|
| Definition | Annahme einer Normalverteilung mit konstantem Mittelwert und konstanter Standardabweichung für Wertveränderungen (z. B. Ausfallraten, Aktienkurs-, Wechselkurs-, Zinsveränderungen). VaR = x%-Quantil/Z-Wert × Standardabweichung, korrigiert um den Mittelwert (erwartete Verluste). | Vor allem für Marktpreisrisiken. In der Vergangenheit beobachtete Änderungen werden in die Zukunft projiziert; Korrelation inhärent vorhanden, muss nicht separat errechnet werden. VaR = Abzählen der sortierten Wertveränderungen der Verteilungsfunktion. | Derzeit am weitesten entwickelter Ansatz; Erweiterung der historischen Simulation, da historische Werte um Zufallszahlen angereichert werden. Erfasst auch in der Vergangenheit nicht beobachtete Wertveränderungen; quasi unbegrenzte Szenarien. |
| Vorteil | Relativ einfache Anwendung; auch bei Nicht-Normalverteilung anwendbar. | Intuitiv nachvollziehbar; für beliebige Verteilungen einsetzbar. | Nahezu unbegrenzte Anzahl an simulierbaren Szenarien; für beliebige Verteilungen einsetzbar. |
| Nachteil | Abstraktion der Normalverteilung kann zur Unterschätzung von Risiken führen. | Vergangenheit als einziger Maßstab für die Zukunft. | In komplexer Form schwer und nicht intuitiv nachvollziehbar; hoher Rechenaufwand. |

Quelle: Reuse (2006). (Hinweis: einzelne Zellformulierungen sind im Original klein gerendert; gegen das Skript gegenprüfen.)

### Fachliche Aussage
Die Folie stellt die drei VaR-Berechnungsansätze (Varianz-Kovarianz, Historische Simulation, Monte-Carlo) hinsichtlich Definition, Vorteilen und Nachteilen gegenüber.

### React-Vorschlag
`VaRMethodsComparison` - dreispaltige `ComparisonTable` mit Zeilen Definition/Vorteil/Nachteil und Quellenfußnote.

---

## Folie 47 - Berechnung des VaR / Varianz-Kovarianz-Ansatz

### In der MD problematisch/fehlend
Die MD enthält die Variablendefinitionen (μ_t = erwartete Rendite, σ_t = erwartete Volatilität, z_α = α-Quantil der Normalverteilung), die Quantilstabelle (95%: 1,645 / 99%: 2,326) und die beiden VaR-Formeln. Stark zerbrochen, Diagramm fehlt.

### Fehlende visuelle Inhalte
- Kleine Glockenkurve oben links mit eingefärbtem linken Verlust-Tail, Beschriftung "(100−X)%", Markierung des Mittelwerts μ_t und der Quantilstelle "μ_t − z_α · σ_t" auf der x-Achse.
- Kleine Quantilstabelle (Kopf: Konfidenzniveau 95% / 99%; Zeile z_α: 1,645 / 2,326).
- Zwei hervorgehobene Formelkästen.

### Visuelle Rekonstruktion
```
        _-^^^-_
   ▓▓ /        \      (100-X)%
  μ_t−z_α·σ_t  μ_t
          z_α  | 95%   | 99%
               | 1,645 | 2,326
```

### Inhaltliche Rekonstruktion
Quantilstabelle:
| z_α | 95% | 99% |
|---|---|---|
| | 1,645 | 2,326 |

Formeln (Klartext, exakt wie auf der Folie):
```
VaR_t = μ_t − z_α · σ_t          (bei bekanntem Mittelwert und bekannter Volatilität)
VaR_t = − z_α · σ_t              (für kurze Zeithorizonte, Annahme μ = 0)
```
- μ_t = erwartete Rendite über den Zeithorizont.
- σ_t = erwartete Volatilität für die (Portfolio-)Renditen über den Zeithorizont.
- z_α = α-Quantil der Normalverteilung.
- Für kurze Zeithorizonte (z. B. 1 oder 10 Tage) ist die Annahme legitim, dass die erwartete Portfolioänderung den Erwartungswert "Null" hat.

### Fachliche Aussage
Beim Varianz-Kovarianz-Ansatz ergibt sich der VaR unter Normalverteilungsannahme als (negatives) Vielfaches des Quantils z_α und der Volatilität, ggf. korrigiert um den Mittelwert; bei kurzen Horizonten wird μ = 0 gesetzt.

### React-Vorschlag
`VarianceCovarianceVaR` - kleine `VaRDistributionChart`-Variante mit Quantilmarkierung, daneben `QuantileTable` (95%/99%) und zwei `FormulaBlock`-Komponenten.

---

## Folie 48 - Berechnung des VaR / Varianz-Kovarianz-Ansatz - Beispiel (Aufgabe)

### In der MD vorhanden
Die MD enthält die Aufgabenstellung (Portfolio aus Birnen-Aktien 200.000 €, Volatilität σ = 30% p.a., Teilaufgaben a) VaR 95%/1 Tag, b) VaR 95%/10 Tage, c) VaR als Wertveränderung in €). Werte vorhanden, Sonderzeichen leicht verfälscht ("j = kl%").

### Fehlende visuelle Inhalte
Reine Textfolie (Aufgabenstellung); keine Grafik.

### Visuelle Rekonstruktion
(keine Grafik)

### Inhaltliche Rekonstruktion
- Unser Portfolio besteht aus Birnen-Aktien im Wert von 200.000 €.
- Die Volatilität der Birnen-Aktie beträgt σ = 30% p.a.
- a) Berechnen Sie den Value-at-Risk zum Konfidenzniveau α = 95% für eine Haltedauer von 1 Tag.
- b) Den VaR(95%, 10d) für eine Haltedauer von 10 (Handels)tagen.
- c) Den VaR(95%, 10d) gemessen als Wertveränderung des Portfolios in €.

### Fachliche Aussage
Aufgabenfolie zur Anwendung des Varianz-Kovarianz-Ansatzes: Berechnung des VaR für unterschiedliche Haltedauern und Umrechnung in einen Euro-Betrag.

### React-Vorschlag
`ExerciseCard` - Aufgabenstellung mit den drei Teilaufgaben a)-c); Lösung folgt auf Folie 49.

---

## Folie 49 - Berechnung des VaR / Varianz-Kovarianz-Ansatz - Beispiel (Lösung)

### In der MD problematisch/fehlend
Diese Lösungsfolie fehlt in der MD weitgehend bzw. ist nur als zerbrochene Formelfragmente vorhanden. Die Rechenwege und Endergebnisse sind in der MD nicht klar lesbar.

### Fehlende visuelle Inhalte
Drei hervorgehobene Rechenblöcke (Formeln mit eingesetzten Zahlen und farblich markierten Endergebnissen) für die Teilaufgaben a)-c).

### Visuelle Rekonstruktion
(Formeln, siehe unten)

### Inhaltliche Rekonstruktion
Gegeben: PF = 200.000 €; σ (p.a.) = 30%.

a) Tagesvolatilität und VaR (1 Tag, 95%) - exakt wie auf der Folie:
```
σ_1d = σ / √250 = 0,30 / √250 = 0,019   und   α = 95% → z_α = 1,645
VaR_95%,1d = 0,019 · 1,645 = 0,0312   (= 3,12%)
```

b) VaR für 10 Tage (95%):
```
VaR_95%,10d = VaR_95%,1d · √10 = 0,0987   (= 9,87%)
```

c) VaR als Wertveränderung in €:
```
VaR_95%,10d,€ = VaR_95%,10d · PF = 0,0987 · 200.000 € = 19.740 €
```

### Fachliche Aussage
Die Lösungsfolie zeigt die vollständige Rechnung: Annualisierte Volatilität wird auf Tagesbasis (√250) heruntergerechnet, mit dem 95%-Quantil multipliziert, per Wurzel-T auf 10 Tage skaliert und schließlich mit dem Portfoliowert in einen Euro-VaR von 19.740 € überführt.

### React-Vorschlag
`VaRSolutionSteps` - drei `FormulaBlock`-Schritte mit hervorgehobenen Ergebnissen (3,12% / 9,87% / 19.740 €).

---

## Folie 50 - Kovarianz und Korrelation

### In der MD problematisch/fehlend
Die MD enthält den Text ("Kovarianz beschreibt die Stärke des (linearen) Zusammenhang zwischen zwei Variablen (den Renditen x und y)", "Der Korrelationskoeffizient ... normiert die Kovarianz auf den Wertebereich −1 bis +1"). Beide Formeln sind in der MD zerbrochen. (Layout-Hinweis: orangefarbenes "Wiederholung Statistik"-Banner - nicht "FI&RM".)

### Fehlende visuelle Inhalte
Zwei hervorgehobene Formelkästen (hellblau): Kovarianzformel und Korrelationskoeffizient.

### Visuelle Rekonstruktion
(Formeln, siehe unten)

### Inhaltliche Rekonstruktion
Kovarianz (Klartext, exakt wie auf der Folie):
```
cov_xy = 1/(n−1) · Σ_{i=1}^{n} (r_{i,x} − r̄_x)(r_{i,y} − r̄_y)
```
Korrelationskoeffizient (Klartext):
```
ρ_{x,y} = cov_xy / (σ_x · σ_y)
```
Der Korrelationskoeffizient normiert die Kovarianz auf den Wertebereich −1 bis +1.

### Fachliche Aussage
Die Kovarianz misst die Stärke des linearen Zusammenhangs zweier Renditereihen; der Korrelationskoeffizient normiert diese auf den dimensionslosen Bereich −1 bis +1.

### React-Vorschlag
`FormulaBlock` für Kovarianz und Korrelationskoeffizient, eingebettet in `ContentSection`.

---

## Folie 51 - Korrelation (Skala-Abbildung)

### In der MD problematisch/fehlend
Die MD enthält nur Titel "Korrelation", die Abbildungsunterschrift (Hull-ähnlich) und Quelle. Die farbige Korrelations-Skala fehlt vollständig.

### Fehlende visuelle Inhalte
Horizontaler Farbbalken (Korrelationsskala) von −1 (links) bis +1 (rechts):
- Linker Bereich grau/dunkel, Mitte hell bei "0", rechter Bereich rot.
- Beschriftungen oberhalb: links "Vollständig negativ korreliert", Mitte "Nicht korreliert", rechts "Vollständig positiv korreliert".
- Endbeschriftungen: links "−1", im Balken "0", rechts "+1".
- Untere Beschriftungen (5 Stufen): "Stets gegenläufige Bewegung" | "Tendenziell gegenläufige Bewegung" | "Keine Tendenz" | "Tendenziell gleichläufige Bewegung" | "Stets gleichläufige Bewegung".
- Abbildungsunterschrift: "Abbildung 11.1: Korrelation. Die Korrelation misst, wie sich Renditen in Abhängigkeit voneinander entwickeln. Sie liegt zwischen +1 (die Renditen entwickeln sich immer in die gleiche Richtung) und −1 (die Renditen entwickeln sich immer in die entgegengesetzte Richtung). Bei unabhängigen Risiken besteht keine Tendenz zu einer gleichgerichteten Entwicklung und die Korrelation beträgt null."

### Visuelle Rekonstruktion
```
Vollständig                Nicht           Vollständig
negativ korreliert      korreliert      positiv korreliert
   −1 [grau======|====0====|=====rot] +1
   stets      tendenz.   keine   tendenz.   stets
   gegenläufig gegenläufig Tendenz gleichläufig gleichläufig
```

### Inhaltliche Rekonstruktion
| Korrelation | Bewegung |
|---|---|
| −1 | Stets gegenläufige Bewegung |
| zwischen −1 und 0 | Tendenziell gegenläufige Bewegung |
| 0 | Keine Tendenz |
| zwischen 0 und +1 | Tendenziell gleichläufige Bewegung |
| +1 | Stets gleichläufige Bewegung |

### Fachliche Aussage
Die Folie visualisiert die Bedeutung des Korrelationskoeffizienten auf einer Skala von −1 (stets gegenläufig) über 0 (kein Zusammenhang) bis +1 (stets gleichläufig).

### React-Vorschlag
`CorrelationScale` - horizontaler Farbverlaufsbalken mit Endpunkten −1/0/+1 und fünf Beschriftungsstufen darunter.

---

## Folie 52 - Korrelationskoeffizient (Streudiagramm-Matrix)

### In der MD problematisch/fehlend
Die MD enthält nur die neun Korrelationswerte in einer zerbrochenen Tabelle (−1, −0.9, −0.75, −0.3, 0, 0.3, 0.75, 0.9, 1). Die zugehörigen Streudiagramme fehlen vollständig. (Layout-Hinweis: orangefarbenes "Wiederholung Statistik"-Banner.)

### Fehlende visuelle Inhalte
3×3-Matrix aus neun Streudiagrammen (Scatterplots) schwarzer Punktwolken, jeweils mit dem darüberstehenden Korrelationswert beschriftet:
- ρ = −1: Punkte exakt auf fallender Gerade.
- ρ = −0.9: eng um fallende Gerade gestreut.
- ρ = −0.75: lockerer um fallende Gerade.
- ρ = −0.3: schwach fallende, breite Wolke.
- ρ = 0: kreisförmige, strukturlose Wolke.
- ρ = 0.3: schwach steigende, breite Wolke.
- ρ = 0.75: lockerer um steigende Gerade.
- ρ = 0.9: eng um steigende Gerade.
- ρ = 1: Punkte exakt auf steigender Gerade.

### Visuelle Rekonstruktion
```
  -1 (\)      -0.9 (\.)     -0.75 (\..)
  -0.3 (..\.) 0 (oooo)      0.3 (./..)
  0.75 (../)  0.9 (./)      1 (/)
```

### Inhaltliche Rekonstruktion
Neun Streudiagramme mit Korrelationswerten: −1, −0.9, −0.75, −0.3, 0, 0.3, 0.75, 0.9, 1. Je näher |ρ| an 1, desto enger liegen die Punkte auf einer Geraden (negatives Vorzeichen = fallend, positives = steigend); bei ρ = 0 strukturlose Punktwolke.

### Fachliche Aussage
Die Folie veranschaulicht anhand von Streudiagrammen, wie sich verschiedene Korrelationskoeffizienten zwischen −1 und +1 in der Punktstreuung niederschlagen.

### React-Vorschlag
`CorrelationScatterGrid` - 3×3-Grid kleiner SVG-Scatterplots, je mit ρ-Label; Punktwolken algorithmisch aus dem jeweiligen ρ generiert.

---

## Folie 53 - Die Bestimmung von Kovarianz und Korrelation (Beispiel)

### In der MD problematisch/fehlend
Die MD enthält nur Titel, Untertitel "Beispiel" und Quelle (Berk/DeMarzo 2020). Die gesamte Berechnungstabelle (Tabelle 11.2) fehlt.

### Fehlende visuelle Inhalte
Detaillierte Berechnungstabelle "Tabelle 11.2 - Die Berechnung der Kovarianz und Korrelation von Aktienpaaren":
- Spaltengruppen: "Abweichung vom Mittelwert" (zwei Spalten: (R_i,A − R̄_A) und (R_i,B − R̄_B)), "North Air und West Air" (Produktspalte) sowie "West Air und Tex Oil" (Produktspalte).
- Jahreszeilen 2013-2018.
- Summenzeile "Summe = Σ (R_i,A − R̄_A)(R_i,B − R̄_B)", Kovarianz-Zeile "Cov = 1/(T−1) · Summe" und Korrelations-Zeile "Corr = Cov / (SD_A · SD_B)".

### Visuelle Rekonstruktion
(Tabellengerüst, siehe unten)

### Inhaltliche Rekonstruktion
Tabelle 11.2 - Berechnung Kovarianz/Korrelation von Aktienpaaren. Die Abweichungs-Spalten sind lesbar, die beiden Produktspalten sind im Original klein gerendert und nicht zuverlässig ablesbar (nicht erfinden - im Skript nachschlagen):

| Jahr | Abw. North Air (R−R̄) | Abw. West Air (R−R̄) | North×West Air | West Air × Tex Oil |
|---|---|---|---|---|
| 2013 | 11% | −1% | (nicht zuverlässig lesbar) | (nicht zuverlässig lesbar) |
| 2014 | 20% | 5% | (nicht zuverlässig lesbar) | (nicht zuverlässig lesbar) |
| 2015 | −3% | −3% | (nicht zuverlässig lesbar) | (nicht zuverlässig lesbar) |
| 2016 | −15% | −12% | (nicht zuverlässig lesbar) | (nicht zuverlässig lesbar) |
| 2017 | −12% | −15% | (nicht zuverlässig lesbar) | (nicht zuverlässig lesbar) |
| 2018 | −1% | 26% | (nicht zuverlässig lesbar) | (nicht zuverlässig lesbar) |

Lesbar abgelesene Ergebniszeilen (ca.):
- Summe: ca. 0,0558 (North/West Air) bzw. ca. −0,0642 (West Air/Tex Oil).
- Kovarianz (Cov = 1/(T−1) · Summe): ca. 0,0112 bzw. ca. −0,0128.
- Korrelation (Corr = Cov / (SD_A·SD_B)): ca. 0,624 bzw. ca. −0,713.

Quelle: Berk / DeMarzo (2020).

### Fachliche Aussage
Die Folie demonstriert Schritt für Schritt die Berechnung von Kovarianz und Korrelation aus Renditeabweichungen zweier Aktienpaare (North/West Air: positiv korreliert ca. +0,62; West Air/Tex Oil: negativ korreliert ca. −0,71).

### React-Vorschlag
`CovarianceCalculationTable` - mehrspaltige `DataTable` mit Jahreszeilen, Summen- und Ergebniszeilen; die Produktspalten erst nach Abgleich mit dem Originalskript füllen, nicht schätzen.

---

## Folie 54 - Korrelationen können schwanken (1/2)

### In der MD problematisch/fehlend
Die MD enthält nur Titel "Korrelationen können schwanken (1/2)" und die Folienzeile. Das Liniendiagramm fehlt vollständig.

### Fehlende visuelle Inhalte
Liniendiagramm mit drei rollierenden Korrelationszeitreihen über einen langen Zeitraum (X-Achse ca. 1989 bis 2019, in 2-Jahres-Schritten):
- Y-Achse "Korrelation", Bereich ca. −0,4 bis +0,8.
- Drei Linien laut Legende, mit am Diagrammkopf angegebenen (Schluss-)Werten (visuell abgelesen):
  - türkis: "Stocks (DAX) vs. Bonds (REXP)" ca. 0,002
  - blau: "Stocks (DAX) vs. Commodities (GSCI)" ca. 0,124
  - rot: "Bonds (REXP) vs. Commodities (GSCI)" ca. -0,048
- Alle drei Linien schwanken über die Zeit stark zwischen negativen und positiven Werten (verdeutlicht die Instabilität der Korrelationen).
- Fußnote (klein): rollierende 52-Wochen-Korrelationen, Zeitraum ab 1989, Datenquelle Datastream.

### Visuelle Rekonstruktion
```
Korrelation
 0,8 |   /\        /\
 0,6 |  /  \  /\  /  \
 0,2 | ~~~~~~~~~~~~~~~~~~~~
   0 |--------------------- (Werte oben: ~0,002 / ~0,124 / -0,048)
-0,4 |   \/    \/    \/
     +--+----+----+----+--->
     1989  1995  2005  2015
  — DAX/REXP  — DAX/GSCI  — REXP/GSCI
```

### Inhaltliche Rekonstruktion
Drei rollierende 52-Wochen-Korrelationen (am Diagrammkopf angegebene Werte, ca.):
- Stocks (DAX) vs. Bonds (REXP): ca. 0,002
- Stocks (DAX) vs. Commodities (GSCI): ca. 0,124
- Bonds (REXP) vs. Commodities (GSCI): ca. -0,048

Datenquelle: Datastream.

### Fachliche Aussage
Die Folie zeigt, dass Korrelationen zwischen Assetklassen über die Zeit erheblich schwanken und nicht stabil sind - eine zentrale Einschränkung für die Diversifikationsplanung.

### React-Vorschlag
`RollingCorrelationChart` - Liniendiagramm mit drei Zeitreihen und farbiger Legende; Werte hervorheben.

---

## Folie 55 - Korrelationen können schwanken (2/2)

### In der MD problematisch/fehlend
Die MD enthält nur Titel "Korrelationen können schwanken (2/2)" und die Folienzeile. Das Liniendiagramm fehlt vollständig.

### Fehlende visuelle Inhalte
Liniendiagramm mit drei rollierenden 52-Wochen-Korrelationen über den Zeitraum 01.2018 bis 05.2020:
- Y-Achse "Korrelation", Bereich −0,6 bis +0,6 (Schritte 0,2).
- X-Achse: Monatsmarken 01.2018, 03.2018, ... 03.2020, 05.2020 (2-Monats-Schritte).
- Drei Linien laut Legende mit eingekreisten Endwerten:
  - türkis: "Stocks (DAX) vs. Bonds (REXP)": -0,217 (eingekreist)
  - blau: "Stocks (DAX) vs. Commodities (GSCI)": 0,243 (eingekreist)
  - rot: "Bonds (REXP) vs. Commodities (GSCI)": -0,111 (eingekreist)
- Rote senkrechte gestrichelte Linie um März 2020 (Corona) mit Virus-Symbol; danach sprunghafte Veränderung aller Korrelationen (blau springt stark nach oben auf ca. +0,5, türkis fällt auf ca. -0,4).
- Fußnote: "Rollierende 52 Wochen-Korrelationen im Zeitraum 01.01.2018 bis 27.05.2020 - Datenquelle: Datastream".

### Visuelle Rekonstruktion
```
Korrelation
 0,6 |                                  __(blau ~0,5)
 0,4 |        blau steigt _____         |
 0,2 | ___________________     \  ____  |
   0 |--türkis/rot um 0------------------|
-0,2 |  türkis/rot fallen ~ -0,2    ┊  \(türkis ~-0,4)
-0,4 |                              ┊🦠
-0,6 +--+----+----+----+----+----+--┊--+--->
   01.2018         01.2019      01.2020 (März=Corona-Linie)
 — DAX/REXP (-0,217)  — DAX/GSCI (0,243)  — REXP/GSCI (-0,111)
```

### Inhaltliche Rekonstruktion
Rollierende 52-Wochen-Korrelationen, Zeitraum 01.01.2018 - 27.05.2020 (eingekreiste Endwerte aus der Folie):
- Stocks (DAX) vs. Bonds (REXP): -0,217
- Stocks (DAX) vs. Commodities (GSCI): 0,243
- Bonds (REXP) vs. Commodities (GSCI): -0,111

Markante Verwerfung um März 2020 (Corona-Crash), markiert durch eine rote gestrichelte Linie + Virus-Symbol. Datenquelle: Datastream.

### Fachliche Aussage
Die Folie zeigt am Beispiel des Corona-Crashs (März 2020), dass Korrelationen in Krisen sprunghaft umschlagen können - Diversifikationsannahmen verlieren genau dann ihre Gültigkeit, wenn sie am wichtigsten wären.

### React-Vorschlag
`RollingCorrelationChart` (gleiche Komponente wie Folie 54) mit einer vertikalen Ereignismarkierung (Annotation "Corona März 2020") und hervorgehobenen Endwerten.

---

## Folie 56 - Diversifikationseffekte

### In der MD problematisch/fehlend
Die MD enthält die Textbausteine ("Keine Diversifikation", "Vollständige Diversifikation", "Mittlere Diversification", Portfolio 1/2/3, Investment A-F), aber als verstreute Labels ohne die zugehörigen Kursverlaufs-Grafiken.

### Fehlende visuelle Inhalte
Drei umrahmte Boxen (Kopfzeilen hellgelb/beige hinterlegt) mit jeweils einem kleinen Diagramm aus Kursverlaufslinien (blaue Linie = ein Investment, graue Linie = zweites Investment, gepunktete Linie = resultierendes Portfolio); beschriftete Pfeile zeigen auf die jeweiligen Linien:
- Box "Keine Diversifikation": Investment A (blau, oben) und Investment B (grau, unten) verlaufen weitgehend parallel/gleichgerichtet; Portfolio 1 (gepunktet) liegt dazwischen, glättet kaum → hohe positive Korrelation.
- Box "Vollständige Diversifikation": Investment C (blau) und Investment D (grau) verlaufen gegenläufig (wellenförmig versetzt); Portfolio 2 (gepunktet) ist nahezu eine glatte, ansteigende Linie → vollständiger Ausgleich der Schwankungen.
- Box "Mittlere Diversification": Investment E (blau) und Investment F (grau) teils gegenläufig; Portfolio 3 (gepunktet) glättet die Schwankungen teilweise.

### Visuelle Rekonstruktion
```
[Keine Diversifikation]      [Vollständige Diversifikation]
 A ‾‾\__/‾‾ (blau)            C \/\/ (blau)
 B ___/‾‾\_ (grau, parallel)  D /\/\ (grau, gegenläufig)
 P1 ···· dazwischen, rau      P2 ······ glatt ansteigend

           [Mittlere Diversification]
            E /\_/ (blau)
            F \_/\ (grau)
            P3 ···· teilweise geglättet
```

### Inhaltliche Rekonstruktion
| Box | Investments | Portfolio | Effekt |
|---|---|---|---|
| Keine Diversifikation | A, B (gleichgerichtet) | Portfolio 1 | keine Glättung der Schwankungen |
| Vollständige Diversifikation | C, D (gegenläufig) | Portfolio 2 | Schwankungen heben sich (nahezu) vollständig auf (glatte Linie) |
| Mittlere Diversification | E, F (teils gegenläufig) | Portfolio 3 | teilweise Glättung |

### Fachliche Aussage
Die Folie veranschaulicht, dass der Diversifikationseffekt von der Korrelation der Investments abhängt: Bei gegenläufigen (negativ korrelierten) Anlagen gleichen sich Schwankungen im Portfolio (vollständig) aus, bei gleichgerichteten kaum.

### React-Vorschlag
`DiversificationEffectPanels` - drei nebeneinander/gestaffelte Boxen mit je einem kleinen SVG-Liniendiagramm (zwei Investmentlinien + gepunktete Portfoliolinie) und beschrifteten Pfeilen.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden
- **Alle als Bild eingebetteten Kernformeln** (zerbrochen in der MD): arithmetisches/geometrisches/gewichtetes Mittel (Folien 3-5), stetige Rendite (7-8), erwartete Rendite (9), Barwert (10-11), Macauley-/Modified-/Portfolio-Duration (14, 17-18), Konvexität und Kursänderung (20-21), Standardabweichung und Annualisierung (24-25), Schiefe/Kurtosis (34, 37-38), VaR-Skalierung und Varianz-Kovarianz-Formeln (45, 47, 49), Kovarianz/Korrelation (50).
- **Datentabellen**, die nur als Bild/zerbrochen vorliegen: Volatilität US-Markt (26), Assetklassen-Momente (40), VaR-Methodenvergleich (46), Duration/Konvexität-Beispiele (22), Kovarianz-Berechnung (53, Produktspalten gegen Skript prüfen).
- **Diagramme/Schaubilder** mit Fachaussage: Cashflow-Zeitstrahl (11), Zinssensitivität nach Laufzeit/Coupon (12-13), Barwerte-Waage (15), Kurs-Rendite-Kurve (19), Glockenkurven-Vergleich (23), Normalverteilung mit σ-Bändern (31), Schiefe-/Kurtosis-Diagramme (35, 39), VaR-Verteilung (43, 47), Korrelationsskala (51), Streudiagramm-Matrix (52), rollierende Korrelationen (54-55), Diversifikationspanels (56), Volatilitätszeitreihe (29).

## Kann vereinfacht werden
- Die ASCII-Skizzen der Verteilungs-/Linien-/Säulendiagramme sind nur Orientierung; in React als saubere SVG/Recharts-Komponenten umsetzen.
- Die orange "Wiederholung FI&RM/Statistik"-Badges können als ein einziges wiederverwendbares `RepetitionBadge` umgesetzt werden.
- Reine Textfolien (27, 30, 33, 41, 42, 44, 48) benötigen keine Grafik und lassen sich als `ContentSection`/`KeyPointList`/`ExerciseCard` abbilden.
- Stilisierte Punktwolken (Folie 52) und Kursverlaufslinien (Folie 56) können algorithmisch generiert werden, statt sie pixelgenau nachzubauen.

## Nicht fachlich relevant
- HBW-Logo, Kopfzeile, Folien-Footer ("Asset Management / CS / Folie XX"), Copyright-Hinweis.
- Der dekorative Fotostreifen der Titelfolie (Folie 1).
- Die kapitelübergreifende Foliennummerierung (Footer "Folie 97" usw.) - für die React-Umsetzung zählt nur die PDF-Seitennummer.

---

# Datenorientierter React-Hinweis

Mehrere Folien lassen sich am besten datengetrieben rendern. Nur tatsächlich im Skript vorhandene Inhalte:

```js
// Folie 26 - Volatilität am US-Kapitalmarkt (Tabelle 10.4), Berk/DeMarzo (2020)
export const usVolatility = [
  { investition: "Aktien kleiner Unternehmen", volatilitaet: 39.2 },
  { investition: "S&P 500", volatilitaet: 19.8 },
  { investition: "Unternehmensanleihen", volatilitaet: 6.4 },
  { investition: "Schatzwechsel", volatilitaet: 3.1 },
];

// Folie 31 - Normalverteilung: σ-Intervalle (μ = 10%, σ = 20%)
export const sigmaIntervals = [
  { intervall: "E(r) ± 1σ", bereich: "-10% bis +30%", wahrscheinlichkeit: 68.3 },
  { intervall: "E(r) ± 2σ", bereich: "-30% bis +50%", wahrscheinlichkeit: 95.5 },
  { intervall: "E(r) ± 3σ", bereich: "-50% bis +70%", wahrscheinlichkeit: 99.7 },
];
// Flächenanteile je σ-Segment (links nach rechts):
export const sigmaAreaShares = [0.13, 2.14, 13.59, 34.13, 34.13, 13.59, 2.14, 0.13];
```

```js
// Folie 40 - Rendite- und Risikokennzahlen gängiger Assetklassen
// Basis: monatliche Renditen Jan. 1996 - Jun. 2010, Rojahn et al. (2010)
export const assetClassMoments = [
  { assetklasse: "EURO-Staatsanleihen 5-7J.", rendite: 5.94, volatilitaet: 3.71, schiefe: -0.43, kurtosis: 3.46 },
  { assetklasse: "MSCI Europe", rendite: 5.74, volatilitaet: 17.43, schiefe: -0.76, kurtosis: 3.77 },
  { assetklasse: "DAX", rendite: 6.08, volatilitaet: 23.99, schiefe: -0.83, kurtosis: 5.23 },
  { assetklasse: "MDAX", rendite: 7.07, volatilitaet: 20.36, schiefe: -0.88, kurtosis: 6.46 },
  { assetklasse: "MSCI North America", rendite: 5.44, volatilitaet: 18.63, schiefe: -0.51, kurtosis: 3.16 },
  { assetklasse: "Dow Jones China Offshore", rendite: 7.90, volatilitaet: 43.11, schiefe: 0.01, kurtosis: 5.05 },
  { assetklasse: "MSCI Latin America", rendite: 13.32, volatilitaet: 31.20, schiefe: -1.24, kurtosis: 6.63 },
  { assetklasse: "XETRA GOLD", rendite: 8.56, volatilitaet: 15.25, schiefe: 0.54, kurtosis: 4.27 },
  { assetklasse: "RICI Rogers Metals", rendite: 10.04, volatilitaet: 17.07, schiefe: -0.35, kurtosis: 4.37 },
  { assetklasse: "Crude Oil DJ-AIGCI", rendite: 9.97, volatilitaet: 34.87, schiefe: -0.71, kurtosis: 5.36 },
  { assetklasse: "Agriculture DJ-AIGCI", rendite: 1.60, volatilitaet: 18.67, schiefe: -0.18, kurtosis: 3.21 },
];

// Folie 47 - Quantile der Normalverteilung (Varianz-Kovarianz-Ansatz)
export const varQuantiles = { "95%": 1.645, "99%": 2.326 };
```
