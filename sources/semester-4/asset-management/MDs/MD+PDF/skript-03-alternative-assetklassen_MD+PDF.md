# skript-03-alternative-assetklassen_MD+PDF - Alternative Assetklassen: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-03-alternative-assetklassen.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-03-alternative-assetklassen.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Formeln, Tabellenlogiken, Schaubilder oder Bildaussagen verloren gehen. Sie ersetzt nicht den Fließtext der MD, sondern liefert die fehlende visuelle und strukturelle Ebene.

**Quelle:** `skript-03-alternative-assetklassen.pdf` mit 46 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die graue Kopfzeile, der Folien-Footer (z. B. "Asset Management / CS / Folie XX") und die Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Mehrere Folien (Systematisierung, Immobilien-Risikoklassen, Korrelations-/Testtabellen, Histogramme) sind in der MD als zerstörte Tabellen oder Zeichensalat extrahiert. In React als echte, responsive Tabellen, Cards oder Diagramme neu aufbauen.
2. **Formeln semantisch rendern:** Die Folien 24 (Liegenschaftszins), 38 (Cost-of-Carry-Bewertung von Rohstoff-Futures) tragen zentrale Formeln, die in der MD vollständig zerstört sind. Diese mit KaTeX/MathML als zentrierte Formel mit Variablenlegende umsetzen, nicht als Plaintext.
3. **Diagramme als Datenkomponenten umsetzen:** Säulendiagramm (AuM), Event-Study-CAR-Kurven, Performance-Panels, Smoothing-Vergleich, Histogramme, Terminkurven (Contango/Backwardation) und der Bitcoin-Vergleich sind fachlich tragend. Nur belegbare Werte als Datenobjekte verwenden; visuell abgelesene Werte als "ca." kennzeichnen, nichts erfinden.
4. **Hierarchien/Bäume erhalten:** Hedgefonds-Strategien (Folie 7) und Rohstoff-Klassifizierung (Folie 34) sind mehrstufige Baum-/Spaltenschaubilder; die Hierarchie und Beispiel-Blätter müssen erhalten bleiben.
5. **Farbhervorhebungen rekonstruieren:** Viele reine Textfolien nutzen blaue/grüne/orange Hervorhebungen für Fachbegriffe sowie Pro/Contra-Akzentfarben (grün/orange). Diese Auszeichnung geht im Plaintext verloren und sollte als Inline-Highlights bzw. Akzentfarben wiederhergestellt werden.
6. **Hervorgehobene Tabellenspalten markieren:** Die orange umrandeten Spalten (Folie 31 Jarque-Bera-Probability, Folie 45 Bitcoin-Korrelationsspalte) sind fachlich bedeutsam und semantisch zu markieren.
7. **Quellenhinweise erhalten:** Quellen wie "Grüner / Gutknecht (2022)", "Asquith (1983)", "Statista", "Steiner / Bruns (2017)", "Maurer/Sebastian/Stephan (2000)" und "DataStream" als `SourceNote` beibehalten.
8. **Kapiteltrenner generisch behandeln:** Die Kapiteltrenner-Folien (1, 4, 15, 32, 42) benötigen keine Datenkomponente; eine einheitliche `ChapterDivider`-Komponente genügt.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterDivider` | 1, 4, 15, 32, 42 | Kapitel-/Unterkapiteltrenner ohne Fachinhalt |
| `AgendaList` | 2 | Gesamtagenda mit aktivem Abschnitt hervorheben |
| `AssetClassMatrix` | 3 | Traditionelle vs. alternative Assetklassen mit farbigen Kopfzeilen |
| `BulletList` | 5, 6, 8, 10, 13, 20, 21, 22, 23 | Aufzählungen mit Inline-Highlight-Tokens |
| `StrategyTree` | 7 | Dreigliederung der Hedgefonds-Strategien als Baum |
| `EventStudyChart` | 9 | CAR-Liniendiagramm (Targets/Acquirer) mit Press-Day-Marker |
| `AumBarChart` | 11 | Säulendiagramm verwaltetes Hedgefonds-Vermögen |
| `StrategyPerformancePanels` | 12 | Multi-Panel-Liniendiagramme je Strategiekategorie |
| `SummaryCallout` | 14, 46 | Abschnittsfazit / Zusammenfassung |
| `ProConList` / `ProsConsList` | 16, 18, 36 | Pro/Contra mit grün/orange Akzent |
| `NestedBulletList` / `TaxonomyTree` | 17 | direkt/indirekt + Segmentierung |
| `RiskClassificationTable` | 19 | Core/Value-Added/Opportunistic Risikomatrix |
| `FormulaCallout` | 24, 38 | Zentrierte Formel (KaTeX) mit Variablenlegende |
| `CorrelationMatrix` | 25, 45 | Untere Dreiecks-Korrelationstabelle |
| `KeyPointsList` | 26, 33, 35, 37, 41, 43 | Strukturierte Liste mit Akzent-Hinweisen |
| `IndexedLineChart` | 27 | Indexiertes Liniendiagramm (Basis = 100) |
| `SmoothingComparisonChart` | 28 | Volatile vs. geglättete Zeitreihe (REITs vs. IPD) |
| `ConceptExplainer` | 29, 44 | Erklärblock mit Inline-Badges |
| `ReturnDistributionHistogram` | 30 | Zwei Renditehistogramme nebeneinander |
| `NormalityTestTable` | 31 | Normalitätstests mit hervorgehobener Signifikanzspalte |
| `ClassificationTree` | 34 | Mehrstufiges Rohstoff-Klassifizierungsschaubild |
| `TermStructureChart` | 39 | Terminkurven Contango/Backwardation |
| `WorkedExample` | 40 | Szenario-/Beispiel-Box mit Fazit |
| `BitcoinComparisonPanel` | 45 | Kombi aus Linien-, Balkendiagramm und Korrelationsmatrix |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 3: Alternative Assetklassen (Kapiteltrenner)
### In der MD vorhanden
Zeilen 1-4: "Asset Management", "Kapitel 3", "Alternative Assetklassen", "V26-03-22". Vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Kapiteltrenner-Folie im HBW-Layout. Oben links Bildleiste mit vier Fotos (HBW-Schriftzug, Studierende mit Brille, Studierendengruppe, Hochschulgebaeude). Kein fachlicher Diagramminhalt. Fusszeile links "Asset Management / CS / Folie 51".
### Visuelle Rekonstruktion
Nicht erforderlich (Layoutfolie).
### Inhaltliche Rekonstruktion
Titel: "Kapitel 3 - Alternative Assetklassen". Versionskennung V26-03-22.
### Fachliche Aussage
Eroeffnet das Kapitel ueber alternative (nicht standardisierte) Assetklassen.
### React-Vorschlag
`ChapterDivider` - Kapitelnummer + Titel auf Akzentflaeche; keine Datenkomponente noetig.

## Folie 2 - Agenda
### In der MD vorhanden
Zeilen 7-16: alle neun Agendapunkte vollstaendig und korrekt erfasst.
### Fehlende visuelle Inhalte
Punkt 3 "Alternative Assetklassen" ist als aktueller Abschnitt blau und fett hervorgehoben (alle anderen schwarz). Diese Hervorhebung geht in der MD verloren.
### Visuelle Rekonstruktion
1. Einfuehrung
2. Traditionelle Assetklassen
**3. Alternative Assetklassen**  <- aktuell, blau + fett
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
### Inhaltliche Rekonstruktion
Nummerierte Gesamtagenda der Vorlesung Asset Management, neun Punkte.
### Fachliche Aussage
Verortet das aktuelle Kapitel 3 (Alternative Assetklassen) innerhalb der Gesamtvorlesung.
### React-Vorschlag
`AgendaList` mit `activeIndex={2}`; aktiver Punkt erhaelt Akzentfarbe.

## Folie 3 - Systematisierung Assetklassen
### In der MD problematisch/fehlend
Zeilen 19-39: Die zweispaltige Tabelle ist in der MD stark zerbrochen; Spaltenzuordnung und die Sprechblase "Vorlesung Corporate Financial Management" sind nur fragmentarisch erkennbar.
### Fehlende visuelle Inhalte
Zweispaltige Tabelle mit grauer Kopfzeile "Asset Klassen" (Spannweite ueber beide Spalten). Darunter zwei Spaltenkoepfe: links blau hinterlegt "Traditionelle (standardisierte) Assetklassen", rechts gruen hinterlegt "Alternative (nicht standardisierte) Assetklassen". Die rechte Spalte hat in den oberen vier Punkten gruene fette Schrift (Immobilien, Hedge Fonds, Private Equity/Venture Capital, Rohstoffe), die restlichen Punkte schwarz. KORREKTUR: Die graue Pfeil-/Sprechblase mit Text "Vorlesung Corporate Financial Management" geht nach rechts vom Eintrag **"Rohstoffe"** ab (die Pfeilspitze/Linie liegt visuell auf der Rohstoffe-Zeile), NICHT von "Private Equity, Venture Capital". (Der Verweis bedeutet, dass dieses Thema in einer anderen Vorlesung behandelt wird.)
### Visuelle Rekonstruktion
```
+-----------------------------------------------+
|                 ASSET KLASSEN (grau)          |
+----------------------+------------------------+
| Traditionelle        | Alternative            |
| (standardisierte)    | (nicht standardisierte)|
| Assetklassen (blau)  | Assetklassen (gruen)   |
+----------------------+------------------------+
| - Aktien             | - Immobilien (gruen)   |
| - Anleihen           | - Hedge Fonds (gruen)  |
| - Geldmarktinstr.    | - Private Equity, VC   |
| - Waehrungen         |   (gruen)              |
|                      | - Rohstoffe (gruen) ---|--> [Vorlesung Corporate
| - entsprechende      | - Volatilitaet         |     Financial Management]
|   Derivate           | - Sammlerstuecke, z.B. |
| - und Fonds          |     - Oldtimer, Kunst  |
|   etc.               |     - Uhren, u.a.      |
|                      | - und entsprechende    |
|                      |   Fonds                |
|                      |   etc.                 |
+----------------------+------------------------+
```
### Inhaltliche Rekonstruktion
| Traditionelle (standardisierte) | Alternative (nicht standardisierte) |
|---|---|
| Aktien | Immobilien |
| Anleihen | Hedge Fonds |
| Geldmarktinstrumente | Private Equity, Venture Capital |
| Waehrungen | Rohstoffe (-> Verweis "Vorlesung Corporate Financial Management") |
| entsprechende Derivate | Volatilitaet |
| und Fonds | Sammlerstuecke, z.B. Oldtimer, Kunst, Uhren u.a. |
| etc. | und entsprechende Fonds, etc. |
### Fachliche Aussage
Unterteilt Anlageklassen in traditionelle (standardisierte) und alternative (nicht standardisierte) Assetklassen und ordnet die in Kapitel 3 behandelten Themen der rechten Spalte zu.
### React-Vorschlag
`AssetClassMatrix` - zweispaltige Karte mit eingefaerbten Kopfzeilen (blau/gruen) und einem `Callout`/Tooltip-Hinweis an "Rohstoffe".

## Folie 4 - Kapitel 3.1: Hedge Funds (Kapiteltrenner)
### In der MD vorhanden
Zeilen 42-45: "Asset Management", "Kapitel 3.1", "Hedge Funds", "V26-03-22". Vollstaendig.
### Fehlende visuelle Inhalte
Kapiteltrenner im HBW-Layout mit oberer Fotoleiste. Kein fachlicher Inhalt. Fusszeile "Asset Management / CS / Folie 54".
### Visuelle Rekonstruktion
Nicht erforderlich (Layoutfolie).
### Inhaltliche Rekonstruktion
Unterkapitel-Titel: "Kapitel 3.1 - Hedge Funds".
### Fachliche Aussage
Leitet den Abschnitt ueber Hedge Funds ein.
### React-Vorschlag
`ChapterDivider` (Unterkapitel-Variante).

## Folie 5 - Hedge Funds: Merkmale von Hedge Funds
### In der MD vorhanden
Zeilen 48-65: alle Aufzaehlungspunkte vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie. Schluesselbegriffe sind farbig hervorgehoben (blau/fett, z. B. "(Keine) Definition", "Gemeinsamkeit", "absoluter Performance", "Mindesteinlagen", "Sperr-, Kuendigungs- und Ruecknahmefristen", "Short Selling", "Leverage", "Derivate", "erfolgsabhaengige Entlohnung des Managers", "High Water Marks", "Moral Hazard Risikos") - diese Auszeichnung fehlt im Plaintext.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
Hedge Funds (a.k.a. Absolute Return Funds):
- (Keine) Definition: Es gibt keine abschliessende Definition von Hedge Funds.
- Gemeinsamkeit aller Hedge Funds: Suche nach absoluter Performance unabhaengig vom Gesamtmarkt.
- Mindesteinlagen zumeist zwischen 100.000 bis 1 Mio. USD.
- Haben Sperr-, Kuendigungs- und Ruecknahmefristen.
- Meist hohe Freiheit im Einsatz alternativer Anlagestrategien, die traditionellen Aktien- oder Rentenfonds meist nicht offen stehen, u.a. Leerverkaeufe (Short Selling), Einsatz Fremdkapital (Leverage), Investments in Derivate bzw. strukturierte Produkte.
- Weitgehend erfolgsabhaengige Entlohnung des Hedge Fund Managers, zumeist mit High Water Marks.
- I.d.R. ist der Hedge Fund Manager zusaetzlich direkt beteiligt. Folge: Reduzierung des Moral-Hazard-Risikos.
- Unterliegen geringeren regulatorischen Anforderungen als traditionelle Investmentfonds.
### Fachliche Aussage
Charakterisiert Hedge Funds ueber Renditeziel (absolute Performance), Strategiefreiheit, Verguetungsstruktur und geringe Regulierung.
### React-Vorschlag
`BulletList` mit Inline-Highlight-Tokens fuer Fachbegriffe.

## Folie 6 - Hedge Funds: Aktiver Finanzinvestor
### In der MD vorhanden
Zeilen 68-84: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit farbig hervorgehobenen Schluesselbegriffen (blau/fett, z. B. "Aktive Finanzinvestoren", "Einfluss auf die Geschaeftspolitik", "Anlagehorizont", "taktisch orientiert", "Koalitionsbildung", "Formen des Anteilseigneraktivismus", "Folgen", "Ueberwachungsfunktion", "Abbau von Informationsasymmetrien"). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
- Aktive Finanzinvestoren nehmen bei unbefriedigender Performance Einfluss auf die Geschaeftspolitik. Der Einfluss traditioneller Finanzinvestoren beschraenkt sich insbesondere auf Corporate Governance.
- Anlagehorizont eher taktisch orientiert, sodass Renditeziele mit hoeherer Vehemenz verfolgt werden.
- Haeufig Koalitionsbildung mit weiteren Finanzinvestoren.
- Formen des Anteilseigneraktivismus: strategische Neuausrichtungen (z. B. Verkauf unrentabler Bereiche); Vermeidung unnoetiger Kapitalbindung, Folgen: Dividendenerhoehungen, Aktienrueckkaeufe, Erhoehung Verschuldungsgrad; Draengen auf Abberufung Vorstand / Aufsichtsrat.
- Folgen: Hedge Fund Manager nehmen haeufig eine wichtige Ueberwachungsfunktion des Managements wahr und tragen zum Abbau von Informationsasymmetrien bei.
### Fachliche Aussage
Erklaert die aktivistische Rolle von Hedge Funds als aktive Finanzinvestoren und deren Disziplinierungswirkung auf das Management.
### React-Vorschlag
`BulletList` mit Untergliederung (verschachtelte Listenpunkte).

## Folie 7 - Hedge Funds: Klassifizierung
### In der MD problematisch/fehlend
Zeilen 87-92: Einleitungstext erfasst, aber das gesamte Organigramm der Hedgefonds-Strategien (Knoten und Hierarchie) fehlt vollstaendig in der MD. Nur die Quelle "Gruener / Gutknecht (2022), S. 218" ist vorhanden.
### Fehlende visuelle Inhalte
Einleitungstext (zwei Bullets): "Generell existiert keine einheitliche Klassifizierung von Hedgefonds-Strategien." und "Sowohl in der Literatur als auch in der Praxis hat sich jedoch mehrheitlich die nachfolgende Struktur durchgesetzt."
Baum-/Organigramm "Hedgefonds-Strategien" als Wurzelknoten (grauer Kasten) oben mittig. Davon abgehend drei Hauptkategorien (graue Kaesten): "Directional", "Event Driven", "Relative Value". Unter jeder Kategorie hellgraue Unterboxen, untereinander angeordnet:
- Directional: Long Short Equity, Global Macro, Managed Futures / CTA
- Event Driven: Merger Arbitrage, Distressed Assets
- Relative Value: Equity Market Neutral, Fixed Income Arbitrage, Convertible Arbitrage
Bildunterschrift (blau): "Abb. 46: Hedgefonds-Strategien (nicht abschliessende Aufzaehlung, in Anlehnung an Bessler et al., 2005)". Quelle: "Gruener / Gutknecht (2022), S. 218".
### Visuelle Rekonstruktion
```
                    [ Hedgefonds-Strategien ]
        ____________________|____________________
       |                    |                    |
 [Directional]        [Event Driven]      [Relative Value]
   |- Long Short Equity   |- Merger Arbitrage   |- Equity Market Neutral
   |- Global Macro        |- Distressed Assets  |- Fixed Income Arbitrage
   |- Managed Futures/CTA                        |- Convertible Arbitrage
```
### Inhaltliche Rekonstruktion
| Directional | Event Driven | Relative Value |
|---|---|---|
| Long Short Equity | Merger Arbitrage | Equity Market Neutral |
| Global Macro | Distressed Assets | Fixed Income Arbitrage |
| Managed Futures / CTA | | Convertible Arbitrage |
### Fachliche Aussage
Stellt die in Literatur und Praxis ueblich gewordene Dreigliederung der Hedgefonds-Strategien (Directional, Event Driven, Relative Value) mit ihren jeweiligen Unterstrategien dar.
### React-Vorschlag
`StrategyTree` - dreispaltiges Baum-/Spaltendiagramm mit gemeinsamem Wurzelknoten und je Unterboxen; Quelle als `SourceNote`.

## Folie 8 - Hedge Funds: Strategien (3 Hauptgruppen) - Teil 1
### In der MD vorhanden
Zeilen 95-110: vollstaendig (Punkte 1 Marktneutrale/Relative Value und 2 Ereignisorientierte/Event-Driven).
### Fehlende visuelle Inhalte
Reine Textfolie mit blauen, fetten Ueberschriften ("1. Marktneutrale Strategien (Relative Value Strategien):", "2. Ereignisorientierte Strategien (Event-Driven Strategien):") und fett hervorgehobenen Begriffen ("Ausnutzung von Fehlbewertungen", "Beispiel: Equity-Market-Neutral-Strategie", "Beispiel: Merger Arbitrage sowie Distressed Securities"). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
1. Marktneutrale Strategien (Relative Value Strategien): Ausnutzung von Fehlbewertungen einzelner Wertpapiere; Marktrisiken (Beta/Duration) weitestgehend eliminiert. Beispiel Equity-Market-Neutral-Strategie: Fremdfinanzierte Long-Short-Position. Hier werden unterschiedliche Bewertungen von z. B. Aktien oder Aktiengruppen ausgenutzt, die sich kennzahlentechnisch identisch verhalten. Das Marktrisiko wird durch gleichgrosse Long- und Short-Positionen ausgeschaltet.
2. Ereignisorientierte Strategien (Event-Driven Strategien): Informationen ueber angekuendigte oder erwartete Ereignisse sollen moeglichst schnell gewinnbringend ausgenutzt werden. Ausnutzung von Fehleinschaetzungen oder Unsicherheiten der Marktteilnehmer. Beispiele: Merger Arbitrage sowie Distressed Securities.
### Fachliche Aussage
Erlaeutert die ersten zwei der drei Hauptstrategiegruppen (marktneutral und ereignisorientiert) inklusive Beispielen.
### React-Vorschlag
`BulletList` mit nummerierten Abschnitten und Beispiel-Hervorhebung.

## Folie 9 - Hedge Funds: Event-Driven-Strategien: Beispiel Merger Arbitrage
### In der MD problematisch/fehlend
Zeilen 113-138: Text zerbrochen, weil die Grafik (CAR-Diagramm) dazwischenliegt; Datenpunkte (Empirie) und Achsenbeschriftung des Diagramms sind verstreut und teilweise unleserlich. Quelle "Asquith (1983)" vorhanden.
### Fehlende visuelle Inhalte
Liniendiagramm "Event Study". Y-Achse beschriftet "CAR" mit Markierungen 0%, +8%, +16%. X-Achse "Days before and after the announcement" mit Skala -60, -40, -20, "Press day" (0, durch vertikale blaue Linie markiert), +20, +40, +60. Zwei Kurven: gruene Kurve "Targets" steigt kurz vor / am Press Day steil von nahe 0 % auf ca. +16-17 % und verbleibt anschliessend auf diesem Niveau; orange Kurve "Acquirer" verlaeuft nahezu flach um 0 bis ca. +3 % (kurzer Peak knapp vor Press Day, danach leicht ueber 0). Eine vertikale blaue Linie markiert den Ankuendigungstag (Press day). Quelle: "Asquith (1983)".
### Visuelle Rekonstruktion
```
CAR
+16% |               ____------ Targets (gruen, ~+16-17%)
     |              /|
 +8% |           __/ |
     |        __/    | (Press day, blaue vertikale Linie)
  0% |_-_-_-_/_______|____________ Acquirer (orange, ~0 bis +3%)
     -60  -40  -20  Press  +20 +40 +60   (Days)
                     day
```
### Inhaltliche Rekonstruktion
Beispiel Merger Arbitrage: Long-Position in Target, Short-Position im uebernehmenden Unternehmen.
Event Studies (Messkonzept abnormale Renditen in M&A-Transaktionen):
- Definition Ereignis (z. B. Pressemitteilung).
- Kalkulation "normaler" (erwarteter bzw. modellbasierter) Renditen i.d.R. mit Hilfe des CAPM.
- Kalkulation realisierter Renditen von uebernehmendem und Zielunternehmen.
- Abnormale Rendite = realisierte Rendite minus erwartete Rendite.
Empirie:
| Studie | CAR Target | CAR Bieter/Acquirer |
|---|---|---|
| Bradley et al. (JoFE 1988) | +28 % | +2 % |
| Sirower (1998) | +30,1 % | -2,6 % |
### Fachliche Aussage
Zeigt am CAR-Verlauf, dass bei M&A-Ankuendigungen vor allem Zielunternehmen (Targets) deutlich positive abnormale Renditen erzielen, waehrend Bieter nahe Null oder leicht negativ liegen - Grundlage der Merger-Arbitrage-Strategie.
### React-Vorschlag
`EventStudyChart` (Liniendiagramm, zwei Serien Targets/Acquirer, vertikale Marker-Linie am Press Day) + begleitende `DataTable` mit den Empirie-Werten; Quelle als `SourceNote`.

## Folie 10 - Hedge Funds: Strategien (3 Hauptgruppen) - Teil 2
### In der MD vorhanden
Zeilen 141-151: vollstaendig (Punkt 3 Opportunistische/Direktionale + Wachstumstreiber).
### Fehlende visuelle Inhalte
Reine Textfolie mit blauen, fetten Ueberschriften ("3. Opportunistische / Direktionale Strategien:" und "Wachstumstreiber Hedge Funds:"). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
3. Opportunistische / Direktionale Strategien: Positionen werden anhand der Markteinschaetzung auf- oder abgebaut. Beispiel Long-Short Equity: Im Gegensatz zur Equity-Market-Neutral Strategie wird eine Netto-Long-Position aufgebaut. Beispiel Global Macro Funds: Wetten auf Makrothemen, meist stark gehebelt.
Wachstumstreiber Hedge Funds: Steigende Korrelationen zwischen "klassischen Assetklassen"; geringe Renditen "klassischer Assetklassen"; Derivatisierung an Kapitalmaerkten.
### Fachliche Aussage
Beschreibt die dritte Strategiegruppe (opportunistisch/direktional) und die Wachstumstreiber der Hedgefonds-Branche.
### React-Vorschlag
`BulletList` mit zwei abgegrenzten Bloecken (Strategie / Wachstumstreiber).

## Folie 11 - Hedge Funds: Verwaltetes Vermoegen der Hedgefonds bis 2025
### In der MD problematisch/fehlend
Zeilen 154-182: Saeulendiagramm zerbrochen - Werte stehen ohne klare Jahreszuordnung als Zahlenliste, Y-Achsenbeschriftung ("Verwaltetes Vermoegen in Mrd. US-Dollar") erscheint gespiegelt/zerstueckelt. Quelle "Statista" vorhanden.
### Fehlende visuelle Inhalte
Vertikales Balkendiagramm (blaue Saeulen). Titel: "Entwicklung des verwalteten Vermoegens der Hedgefonds weltweit von 2000 bis zum 2. Quartal 2025 (in Milliarden US-Dollar)". Y-Achse 0 bis 6.000 (Schritte 1.000), Achsenbeschriftung "Verwaltetes Vermoegen in Mrd. US-Dollar". X-Achse: Jahre 2000 bis 2024 (jaehrlich) sowie "Q1 2025" und "Q2 2025". Insgesamt steigender Trend mit deutlichem Anstieg ab 2020. Quelle: "Statista".
### Visuelle Rekonstruktion
```
Mrd. USD
6.000|                                                    __ 5.529
5.000|                                          __ __ __ |
4.000|                                    __ __|  |  |  |
3.000|                              __ __ |  |  |  |  |  |
2.000|              __ __ __ __ __ |  |  |  |  |  |  |  |
1.000|    _ __ __ _|  |  |  |  |  |  |  |  |  |  |  |  |  |
    0|____|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__
     2000 .................................. 2024 Q1'25 Q2'25
```
### Inhaltliche Rekonstruktion
KORREKTUR: Nur jeder zweite Balken traegt ein sichtbares Datenlabel; die folgende Zuordnung von Label zu Jahr wurde direkt von der Folie abgelesen (frueher waren mehrere Jahre falsch zugeordnet bzw. Werte erfunden):
| Jahr | Label (Mrd. USD) | Jahr | Label (Mrd. USD) |
|---|---|---|---|
| 2000 | 263 | 2014 | 2.025 |
| 2002 | 455 | 2016 | 2.367 |
| 2004 | 1.186 | 2018 | 2.878 |
| 2006 | 1.696 | 2020 | 3.826 |
| 2008 | 1.450 | 2022 | 4.844 |
| 2010 | 1.403 | 2024 | 5.224 |
| 2012 | 1.482 | Q2 2025 | 5.529 |
Hinweise/Korrekturen ggue. Entwurf:
- 1.450 gehoert zu **2008** (nicht 2009); 1.403 zu **2010**; 1.482 zu **2012**.
- 2.878 gehoert zu **2018** (nicht 2017); 2.025 zu **2014** (nicht 2013); 2.367 zu **2016**.
- "Q1 2025" hat KEIN Datenlabel; nur "Q2 2025" = 5.529 ist beschriftet (visuell ca. 5.300 fuer Q1 2025).
- Die im Entwurf erfundenen Werte "(ca. 1.900, visuell)" fuer 2013 und "(ca. 2.300, visuell)" fuer 2008 sind FALSCH und entfernt - 2013 traegt kein Label (Saeule ca. 1.900 visuell), und 2008 ist mit 1.450 beschriftet. Der unbeschriftete Balken 2007 liegt visuell bei ca. 2.300.
- Vollstaendige Liste der tatsaechlich beschrifteten Labels (in Folienreihenfolge): 263, 455, 1.186, 1.696, 1.450, 1.403, 1.482, 2.025, 2.367, 2.878, 3.826, 4.844, 5.224, 5.529. Uebrige Jahre nur als Balken sichtbar.
### Fachliche Aussage
Belegt das starke, langfristige Wachstum des global verwalteten Hedgefonds-Vermoegens von 263 Mrd. USD (2000) auf 5.529 Mrd. USD (Q2 2025).
### React-Vorschlag
`AumBarChart` - Saeulendiagramm (Recharts BarChart) mit Jahres-Achse und Datenlabels nur an den beschrifteten Balken; Quelle "Statista" als `SourceNote`.

## Folie 12 - Hedge Funds: Performance
### In der MD problematisch/fehlend
Zeilen 184-189: nur Titel und Datenquellen-Hinweis erfasst; die Performance-Charts fehlen vollstaendig in der MD.
### Fehlende visuelle Inhalte
Ueberschrift (blau): "Historische Performance verschiedener Hedgefonds-Strategien". Darunter mehrere kleine Liniendiagramme (Multi-Panel), gruppiert nach den drei Strategiekategorien; jede Kategorie ist als zwei nebeneinanderliegende Panels dargestellt ("Seit 1993" bis zum Ende der Finanzkrise sowie "Ab Ende der Finanzkrise"):
- "Directional-Strategien": Linien u.a. CS Long Short Equity, CS Global Macro, CS Managed Futures, Aktien Welt.
- "Event-Driven-Strategien": Linien CS Merger Arbitrage, CS Distressed Assets, Aktien Welt.
- "Relative-Value-Strategien": Linien CS Eq. Mkt. Ntl., CS FI Arbitrage, CS Conv. Arbitrage, Aktien Welt.
Alle Achsen indexierte Performance (Startwert ca. 100), X-Achse Zeitverlauf ca. 1993-2023, mit Trennung "Am Ende der Finanzkrise". Datenquellenhinweis: "Datenquelle: Refinitiv. (Aktien Welt: MSCI World, Anleihen Welt: Bloomberg Barclays Global Aggregate, alle Zahlen in USD)".
### Visuelle Rekonstruktion
```
Directional (Seit 1993)  | Directional (Ab Ende Finanzkrise)
Event Driven (Seit 1993) | Event Driven (Ab Ende Finanzkrise)
Relative Value (Seit 93) | Relative Value (Ab Ende Finanzkrise)
   indexiert, Start ~100, mehrere Linien je Strategie + "Aktien Welt"
```
### Inhaltliche Rekonstruktion
Keine numerischen Werte auf der Folie ablesbar (reine Verlaufskurven, visuell). Datenquelle: Refinitiv; Aktien Welt = MSCI World; Anleihen Welt = Bloomberg Barclays Global Aggregate; alle Zahlen in USD.
### Fachliche Aussage
Vergleicht die historische (indexierte) Wertentwicklung der einzelnen Hedgefonds-Strategiegruppen mit dem Aktienmarkt (MSCI World) und verdeutlicht die unterschiedlichen Performanceverlaeufe je Strategie - jeweils getrennt fuer den Zeitraum seit 1993 und den Zeitraum ab Ende der Finanzkrise.
### React-Vorschlag
`StrategyPerformancePanels` - kleine `LineChart`-Panels je Strategiekategorie (Vor/Nach Finanzkrise), jeweils mit Benchmark-Linie "Aktien Welt"; Datenquelle als `SourceNote`. (Hinweis: keine exakten Zeitreihenwerte aus Folie verfuegbar.)

## Folie 13 - Hedge Funds: Renditeeigenschaften
### In der MD vorhanden
Zeilen 192-204: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauer Ueberschrift ("Eingeschraenktes Diversifikationspotenzial:") und fett ausgezeichneten Schluesselbegriffen ("Korrelationen", "nicht stabil", "Aktienmarkt in einer schlechten Phase", "hoch", "Renditen", "Ausnahme: marktneutrale Strategien", "nicht normalverteilt", "Linksschiefe und fette Enden", "Performance haengt stark von der Strategie des Hedge Funds ab"). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
Eingeschraenktes Diversifikationspotenzial:
- Korrelationen sind im Zeitablauf nicht stabil. Gerade wenn sich der Aktienmarkt in einer schlechten Phase befindet, ist die Korrelation zwischen Hedge Funds und Aktienmaerkten vergleichsweise hoch!
- Renditen sind im Zeitablauf nicht stabil. Ausnahme: marktneutrale Strategien.
- Die Mehrzahl der Renditen von Hedge Fund Strategien sind nicht normalverteilt. Hier herrschen insbesondere Linksschiefe und fette Enden vor.
- Die im Vergleich zu klassischen Assets bessere Performance haengt stark von der Strategie des Hedge Funds ab.
### Fachliche Aussage
Relativiert das Diversifikationsversprechen von Hedge Funds: instabile Korrelationen/Renditen und nicht-normalverteilte Renditen schraenken den Nutzen ein.
### React-Vorschlag
`BulletList` mit Inline-Highlights.

## Folie 14 - Hedge Fonds: Kurze Zusammenfassung
### In der MD vorhanden
Zeilen 207-221: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik, keine Farbhervorhebungen (durchgaengig schwarze Bullets).
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
- Hedgefonds unterscheiden sich von traditionellen Anlagefonds durch komplexe und von hohem Aktivitaetsgrad gepraegte Investitionsstrategien und -techniken.
- Das oberste Ziel von Hedgefonds ist das jederzeitige Erreichen einer positiven Rendite - unabhaengig von der Entwicklung des Gesamtmarktes.
- Aufgrund der unterschiedlichen Investitionsansaetze und eingesetzten Instrumente koennen sich die Rendite- und Risikoeigenschaften verschiedener Hedgefonds-Strategien deutlich voneinander unterscheiden.
- Waehrend Hedgefonds bis zum Ausbruch der Finanz- und Wirtschaftskrise regelmaessig eine risikoadjustierte Outperformance generieren konnten, resultierte im letzten Jahrzehnt im Durchschnitt eine risikoadjustierte Unterperformance.
### Fachliche Aussage
Fasst die zentralen Eigenschaften und die historische Performanceentwicklung von Hedgefonds zusammen.
### React-Vorschlag
`SummaryCallout` / `BulletList` als Abschnittsfazit.

## Folie 15 - Kapitel 3.2: Immobilien (Kapiteltrenner)
### In der MD vorhanden
Zeilen 224-227: "Asset Management", "Kapitel 3.2", "Immobilien", "V26-03-22". Vollstaendig.
### Fehlende visuelle Inhalte
Kapiteltrenner im HBW-Layout mit Fotoleiste. Kein fachlicher Inhalt. Fusszeile "Asset Management / CS / Folie 65".
### Visuelle Rekonstruktion
Nicht erforderlich (Layoutfolie).
### Inhaltliche Rekonstruktion
Unterkapitel-Titel: "Kapitel 3.2 - Immobilien".
### Fachliche Aussage
Leitet den Abschnitt Immobilien ein.
### React-Vorschlag
`ChapterDivider` (Unterkapitel-Variante).

## Folie 16 - Immobilien: Argumente fuer und gegen Immobilien-Investments
### In der MD vorhanden
Zeilen 230-243: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie. Zwei Abschnittsueberschriften farblich abgesetzt: "Motive fuer die Immobilienanlage" (gruen, fett), "Argumente gegen Immobilien-Investments" (orange, fett). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Pro/Contra-Liste).
### Inhaltliche Rekonstruktion
Motive fuer die Immobilienanlage (Pro):
- hohe reale Wertbestaendigkeit,
- Annahme einer geringen Korrelation zwischen der Wertentwicklung von Immobilien und klassischen Assets wie Anleihen und Aktien,
- Diversifikationseffekte,
- laufende Cash Flows durch Mieteinnahmen,
- Natuerlicher Hedge gegen Inflation(?),
- Sichere Einnahmen und langfristiger Anlagehorizont.
Argumente gegen Immobilien-Investments (Contra):
- geringe Liquiditaet,
- Bindung hoher Anlagegelder, Gefahr eines geringen Diversifikationsgrads,
- Bewertungsprobleme, da taegliche Marktpreise nicht verfuegbar sind, ...
### Fachliche Aussage
Stellt Pro- und Contra-Argumente fuer Immobilien als Anlageklasse einander gegenueber.
### React-Vorschlag
`ProConList` - zweispaltige Pro/Contra-Darstellung mit gruener und oranger Akzentfarbe.

## Folie 17 - Immobilien: Formen / Segmentierungsmoeglichkeiten
### In der MD vorhanden
Zeilen 246-260: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauen, fetten Ueberschriften ("Formen: indirekt und direkt", "Segmentierungsmoeglichkeiten:"), fett ausgezeichneten Begriffen ("direkte", "indirekte") und einem Pfeil ("-> diverse Moeglichkeiten der Diversifikation"). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (verschachtelte Liste).
### Inhaltliche Rekonstruktion
Formen: indirekt und direkt
- direkte Immobilienanlage: Wohnimmobilien; Gewerbeimmobilien
- indirekte Immobilienanlage: geschlossene oder offene Immobilienfonds; Immobilienaktien; REITs
Segmentierungsmoeglichkeiten: Regionen; Nutzungsart (Wohn-, Gewerbeimmobilie; Eigen-; Fremdnutzung); Standortfaktoren (Infrastruktur, Lagekriterien), .. -> diverse Moeglichkeiten der Diversifikation.
### Fachliche Aussage
Systematisiert direkte vs. indirekte Immobilienanlage und die Segmentierungs-/Diversifikationsachsen.
### React-Vorschlag
`NestedBulletList` bzw. `TaxonomyTree` (direkt/indirekt) plus Segmentierungsliste.

## Folie 18 - Immobilien: Vor- und Nachteile von Direktinvestments
### In der MD vorhanden
Zeilen 263-274: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauen, fetten Ueberschriften ("Direktanlage:", "Vorteile der Direktanlage:", "Nachteile:"). Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Pro/Contra-Liste).
### Inhaltliche Rekonstruktion
Direktanlage: Unmittelbarer Erwerb an Liegenschaften (bestehende Objekte oder Entwicklungsprojekte).
Vorteile der Direktanlage:
- Individuelle Nutzungs- und Gestaltungsmoeglichkeiten,
- Steuerliche Aspekte.
Nachteile:
- Aufbau eines diversifizierten Immobilienportfolios nur bei erheblichem Mitteleinsatz moeglich,
- hohe Transaktionskosten,
- spezifisches Know-how notwendig.
### Fachliche Aussage
Wiegt Vor- und Nachteile der direkten Immobilienanlage gegeneinander ab.
### React-Vorschlag
`ProConList`.

## Folie 19 - Immobilien: Klassifizierung von Immobilieninvestments
### In der MD problematisch/fehlend
Zeilen 277-307: die als Bild eingebettete sechsspaltige Matrix ist in der MD stark zerbrochen; Zellinhalte sind ueber viele Teil-Tabellen verstreut und Spaltenkoepfe verschoben. Inhaltlich rekonstruierbar, aber unbrauchbar formatiert.
### Fehlende visuelle Inhalte
Grosse Tabelle mit blau hinterlegter Kopfzeile und sechs Spalten: "Risikograd", "Investitionsmerkmale", "Strategische Haltedauer", "Immobilientyp und -standard", "Mieterbasis", "Lage". Drei Zeilen (Risikoklassen) mit grau hinterlegter erster Spalte: "Core (Core Plus)", "Value-Added", "Opportunistic". Risikograd steigend von oben nach unten. Alle Zellinhalte gegen die Folie geprueft - die Rekonstruktion stimmt wortgetreu (auch die im Value-Added-Feld "Investitionsmerkmale" tatsaechlich abgedruckte Formulierung "...relativ liquiden Maerkten mit einem relativ niedrigen Risikograd" ist so auf der Folie zu lesen).
### Visuelle Rekonstruktion
```
                 | Risikograd | Investitions- | Strateg.   | Immobilientyp     | Mieterbasis | Lage
                 |            | merkmale      | Haltedauer | und -standard     |             |
Core (Core Plus) |  ...       |  ...          | 8-15 Jahre |  ...              |  ...        | ...
Value-Added      |  ...       |  ...          | 4-7 Jahre  |  ...              |  ...        | ...
Opportunistic    |  ...       |  ...          | 1-4 Jahre  |  ...              |  ...        | ...
```
### Inhaltliche Rekonstruktion
| Klasse | Risikograd | Investitionsmerkmale | Strat. Haltedauer | Immobilientyp und -standard | Mieterbasis | Lage |
|---|---|---|---|---|---|---|
| Core (Core Plus) | Sehr geringes Risiko aufgrund eines stabilen Cash-Flow und liquiden Marktes | Langfristige Investitionen mit stabilen Renditen in liquiden Maerkten mit einem relativ niedrigen Risikograd | 8-15 Jahre | Qualitativ hochwertige Standardimmobilien (Buero, Einzelhandel, Wohnen) mit wettbewerbsfaehigem Ausstattungsstandard | Hoher Vermietungsgrad; langfristige Mietvertraege (10-15 Jahre) mit bonitaetsstarken Mietern | V.a. Top-Lagen in ueberregionalen, liquiden Immobilienmaerkten |
| Value-Added | Hoeheres Risiko, da geringer oder volatiler Cash-Flow und geringere Liquiditaet des Marktes | Mittelfristige Investitionen mit relativ stabilen Renditen in relativ liquiden Maerkten mit einem relativ niedrigen Risikograd | 4-7 Jahre | Standardimmobilien (Buero, Einzelhandel, Wohnen) und Sonderimmobilien mit Risikoaspekten, die finanziell, baulich oder managementspezifisch sind (z.B. Hotels, Lagerhallen, Pflegeheime) | Kurz- bis mittelfristige Mietvertraege (5-10 Jahre) mit einem geringen Anteil an bonitaetsstarken Mietern | B-Lagen in ueberregionalen liquiden Immobilienmaerkten sowie Maerkte mit sich erholenden Ungleichgewichten |
| Opportunistic | Sehr hohes Risiko aufgrund eines sehr volatilen Cash-Flow und illiquiden Marktes | Kurzfristige Investitionen mit volatilen Renditen in illiquiden Maerkten und einem hohen Risikograd (i.d.R. hoher Investitionsstau) | 1-4 Jahre | Standardimmobilien (Buero, Einzelhandel, Wohnen) und Sonderimmobilien mit hohen Risikoaspekten | Kurzfristige, ggf. strukturell komplexe Mietvertraege (0-5 Jahre) mit einer hohen Anzahl an bonitaetsschwachen Mietern; Vermietung substantiell unter Marktniveau | B-/C-Lagen in ueberregionalen, eher illiquiden Immobilienmaerkten, mittlere Lagen in mittleren regionalen Maerkten mit kaum prognostizierbaren Ungleichgewichten |
### Fachliche Aussage
Ordnet Immobilieninvestments nach steigendem Risiko (Core -> Value-Added -> Opportunistic) entlang der Dimensionen Cash-Flow/Risiko, Haltedauer, Objekttyp/-standard, Mieterbasis und Lage ein.
### React-Vorschlag
`RiskClassificationTable` - responsive Tabelle (auf Mobil als Stack/Karten je Risikoklasse) mit Farbverlauf gruen->rot fuer steigenden Risikograd.

## Folie 20 - Immobilien: Geschlossene Fonds
### In der MD vorhanden
Zeilen 310-318: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauer, fetter Ueberschrift ("Geschlossene Fonds:"); "Nachteil:" orange hervorgehoben, der nachfolgende Kernsatz fett. Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
Geschlossene Fonds:
- Feststehende Immobilienprojekte mit festgelegtem Finanzierungsplan; bei Beschaffung des notwendigen Eigenkapitals werden keine neuen Anteile mehr angeboten (Schliessung des Fonds).
- Rechtsform: haeufig Personenhandelsgesellschaft (KG etc.).
- Nachteil: kein effizienter, geregelter Sekundaermarkt fuer Anteile an geschlossenen Immobilienfonds.
### Fachliche Aussage
Charakterisiert geschlossene Immobilienfonds und ihren zentralen Nachteil (fehlender Sekundaermarkt).
### React-Vorschlag
`BulletList` mit Nachteil-Highlight (orange Callout).

## Folie 21 - Immobilien: Offene Fonds
### In der MD vorhanden
Zeilen 321-335: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauer, fetter Ueberschrift ("Offene Fonds:"); "Vorteil:" gruen hervorgehoben, der nachfolgende Kernsatz fett; auch der letzte Bullet ("signifikante Anteile in festverzinslichen Wertpapieren bzw. Geldmarktfonds geparkt") fett. Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
Offene Fonds:
- Rechtlich eigenstaendiges Sondervermoegen, das von Investmentgesellschaften i.S. des Gesetzes ueber Kapitalanlagegesellschaften (KAGG) initiiert und verwaltet wird.
- Hoehe des Fondsvermoegens und die Anzahl der ausgegebenen Anteilsscheine sind unbegrenzt.
- Vorteil: Diversifikation auch bei kleinen Anlagebetraegen.
- Gemaess KAGG muss in mind. 10 Objekte investiert werden.
- Die Kapitalanlagegesellschaften sind aufgrund des Open-End-Prinzips staendig zur Ausgabe neuer und Ruecknahme alter Anteilsscheine verpflichtet.
- I.d.R. werden deshalb signifikante Anteile in festverzinslichen Wertpapieren bzw. Geldmarktfonds geparkt.
### Fachliche Aussage
Beschreibt offene Immobilienfonds (Sondervermoegen, Open-End-Prinzip) und deren Diversifikationsvorteil bei kleinen Anlagebetraegen.
### React-Vorschlag
`BulletList` mit Vorteil-Highlight (gruener Callout).

## Folie 22 - Immobilien: Immobilien-AGs
### In der MD vorhanden
Zeilen 338-352: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauer, fetter Ueberschrift ("Immobilien-AGs:") und fett ausgezeichneten Begriffen ("US-amerikanische REITs", "Tax Exempt Status"). Die drei REIT-Schwellenwerte stehen als eingerueckte Unterpunkte. Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
Immobilien-AGs:
- Boersennotierte Aktiengesellschaften mit dem Geschaeftsschwerpunkt Immobilien (Bestandshalter, Bautraeger bzw. Projektentwickler, Makler).
- In einigen Laendern gibt es fuer boersennotierte Immobiliengesellschaften steuerrechtliche Besonderheiten.
- Fuer US-amerikanische REITs (Real Estate Investment Trust) existiert ein Tax Exempt Status, wenn
  - mind. 75 % des Vermoegens in Immobilien investiert wird,
  - 75 % der Umsatzerloese aus Miet-, Pacht- oder Veraeusserungsgewinnen stammen und
  - mind. 95 % des erzielten Jahresergebnisses an die Aktionaere ausgeschuettet wird.
- Auch fuer deutsche REITs gelten Mindestausschuettungen.
### Fachliche Aussage
Erlaeutert Immobilien-AGs und die steuerlichen Voraussetzungen des REIT-Status (insb. US-Schwellenwerte 75/75/95 %).
### React-Vorschlag
`BulletList` mit hervorgehobenem Kriterien-Block (75/75/95 %) als `Callout`.

## Folie 23 - Immobilien: Immobilienindizes
### In der MD vorhanden
Zeilen 355-366: vollstaendig erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit blauer, fetter Ueberschrift ("Immobilienindizes:"); "drei Gruppen" blau/fett hervorgehoben, die drei Indexarten als blaue, fette Unterpunkte. Keine Grafik.
### Visuelle Rekonstruktion
Nicht erforderlich (Liste).
### Inhaltliche Rekonstruktion
Immobilienindizes:
- Die Konstruktion von Indizes, die die Wertentwicklung des Immobilienmarktes abbilden, ist deutlich schwieriger als fuer Aktien- oder Anleihenmaerkte (hoehere Heterogenitaet, kein organisierter Handel zu standardisierten Konditionen etc.).
- Insgesamt lassen sich drei Gruppen von relevanten Immobilienindizes identifizieren:
  - Appraisal-Based-Indizes,
  - Transaction-Based-Indizes,
  - Immobilienaktien-Indizes.
### Fachliche Aussage
Begruendet die erschwerte Indexkonstruktion bei Immobilien und fuehrt die drei relevanten Indexgruppen ein.
### React-Vorschlag
`BulletList` mit hervorgehobener Dreierliste der Indexarten (Vorschau auf die Folgefolien).

## Folie 24 - Immobilien: Appraisal-Based Indizes

### In der MD vorhanden
Der erläuternde Fließtext ist vollständig vorhanden (MD-Zeilen 370–384): Definition Appraisal-Based Indizes, Bezug auf Schätzwerte von Gutachtern, Differenzierung nach Nutzungsart/Lage, Unmöglichkeit der Duplizierung (Immobilien = Unikate), fortlaufende Schätzung der Marktwerte via Liegenschaftszins (LZ), sowie der Begriff Vervielfältiger als Kehrwert.

### In der MD problematisch/fehlend
Die zentrale Formel ist in der MD vollständig zerbrochen wiedergegeben: `$%&'&%(()ℎ+&( -.).` / `!" =` / `/)01-2&%3`. Die mathematische Notation ist nicht lesbar extrahiert.

### Fehlende visuelle Inhalte
Eine zentral platzierte, freistehende Bruchformel (schwarz, Serifenschrift) zwischen den Aufzählungspunkten. Begriffe "Schätzwerte von Gutachtern", "geschätzt (!)" und "Liegenschaftszins (LZ)" sind farblich hervorgehoben (orange/blau Akzent).

### Visuelle Rekonstruktion
```
LZ = Mieteinnahmen p.a.
     ------------------
         Kaufpreis
```
(visuell verifiziert: die Folie zeigt genau diesen Bruch — Zähler "Mieteinnahmen p.a.", Nenner "Kaufpreis")

### Inhaltliche Rekonstruktion
Formel (Klartext): Liegenschaftszins LZ = Mieteinnahmen p.a. / Kaufpreis.
Folgerung laut Folie: Der Kehrwert des Quotienten ist der Vervielfältiger; das Produkt aus Vervielfältiger und nachhaltig erzielbaren Mieteinnahmen kann als Ausgangspunkt für den aktuellen "Marktwert" herangezogen werden.

### Fachliche Aussage
Appraisal-Based Indizes beruhen auf fortlaufenden Gutachterschätzungen einzelner Immobilien; der Liegenschaftszins als Verhältnis von Jahresmiete zu Kaufpreis (bzw. dessen Kehrwert, der Vervielfältiger) dient als Bewertungsbrücke zum Marktwert.

### React-Vorschlag
`FormulaCallout` — Komponente, die eine zentrierte mathematische Formel (Bruch via KaTeX/MathML oder semantisches HTML) mit kurzer Begriffslegende darunter rendert.

## Folie 25 - Immobilien: Appraisal-Based Indizes (Beispiele)

### In der MD vorhanden
Die Beispiel-Texte sind vorhanden (MD-Zeilen 389–393): NCREIF-Property-Index (USA, vierteljährliche Schätzung, ca. 2.000 Einzelobjekte, Historie seit 1978) und Investment-Property-Database IPD (GB, seit 01/87 monatlich, ca. 2.700 Einzelobjekte). Die Korrelationstabelle ist als Markdown-Tabelle vorhanden (MD-Zeilen 394–400) und korrekt; Quellenangabe ebenfalls.

### Fehlende visuelle Inhalte
Eine als Bild eingebettete Korrelationsmatrix (Dreiecksmatrix) mit blauem Kopfzeilenband und hellblauen Datenzellen. Kopfzelle oben links: "Korrelationen D 1980-1998". Spalten: Aktien, Bonds, Immobilien. Zeilen: Aktien, Bonds, Immobilien. Nur unteres Dreieck (inkl. Diagonale = 1) befüllt.

### Visuelle Rekonstruktion
```
Korrelationen      | Aktien | Bonds | Immobilien
D 1980-1998        |        |       |
-------------------|--------|-------|-----------
Aktien             |  1     |       |
Bonds              |  0,21  |  1    |
Immobilien         | -0,07  | -0,48 |  1
```
(visuell verifiziert: Werte 0,21 / -0,07 / -0,48 exakt ablesbar)

### Inhaltliche Rekonstruktion
| Korrelationen D 1980-1998 | Aktien | Bonds | Immobilien |
|---|---|---|---|
| Aktien | 1 | | |
| Bonds | 0,21 | 1 | |
| Immobilien | -0,07 | -0,48 | 1 |

Quelle: Maurer, Raimond; Sebastian, Steffen; Stephan, Thomas G. (2000): Immobilienindizes im Portfolio-Management, Working Paper Series: Finance & Accounting, No. 52, Johann Wolfgang Goethe-Universität Frankfurt

### Fachliche Aussage
Die genannten Appraisal-Based Indizes (NCREIF, IPD) zeigen für Deutschland 1980–1998 eine sehr geringe bis leicht negative Korrelation von Immobilien zu Aktien (-0,07) und Bonds (-0,48), was den Diversifikationsnutzen von Immobilien im Portfolio belegt.

### React-Vorschlag
`CorrelationMatrix` — halbe (untere Dreiecks-)Korrelationstabelle mit hervorgehobenem Header und optionaler Farbcodierung der Vorzeichen.

## Folie 26 - Immobilien: Transaction-Based Indizes

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 406–416): Definition (Auswertung realisierter Transaktionspreise), Datenbasis keine Gutachterschätzwerte sondern Stichprobe der Verkaufspreise, Problematik der Qualitätsunterschiede vs. Marktveränderung, Forderung nach engem zeitlichen Zusammenhang der Transaktionspreise.

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Farbliche Hervorhebungen: "am Markt realisierten Transaktionspreisen", "keine von Gutachtern erstellten Schätzwerte" (blau), "Problematik:" (orange).

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Basis: am Markt realisierte Transaktionspreise.
- Datenbasis: Stichprobe der Verkaufspreise verkaufter Immobilien (keine Gutachterschätzwerte).
- Problematik: Preisunterschiede können Markt- oder Qualitätsunterschiede ausdrücken (z. B. bei Durchschnittspreisbildung im Zeitablauf).
- Transaktionspreise sollten in engem zeitlichen Zusammenhang stehen.

### Fachliche Aussage
Transaction-Based Indizes bilden den Immobilienmarkt über tatsächlich realisierte Verkaufspreise ab; problematisch ist die Vermischung von echten Marktbewegungen mit Qualitätsunterschieden der gehandelten Objekte.

### React-Vorschlag
`KeyPointsList` — strukturierte Liste mit hervorgehobenem Problematik-Hinweis (Akzentfarbe orange).

## Folie 27 - Immobilien: Immobilienaktienindizes

### In der MD vorhanden
Der Kerntext ist vorhanden (MD-Zeilen 421–435): Annahme hoher Korrelation Börsenwert/Immobilienwert, Problematik weiterer kursbestimmender Faktoren bei Immobilien-AGs, Beschreibung der nebenstehenden Grafik (Wertentwicklung indexiert Dezember 2000 = 100, annualisierte Performancekennzahlen in Lokalwährung, Korrelation gegenüber MSCI USA bzw. Europe), Quelle Grüner / Gutknecht (2022).

### In der MD problematisch/fehlend
Das Liniendiagramm und die eingebettete Kennzahlentabelle sind in der MD nicht als Werte vorhanden (nur als beschreibender Text). Die konkreten Zahlenwerte der eingebetteten Mini-Tabelle sind in der Renderung sehr klein und NICHT zuverlässig lesbar.

### Fehlende visuelle Inhalte
Liniendiagramm mit Titel "Die Wertentwicklung von Immobilien(aktien) in den USA und Europa", indexiert (Dezember 2000 = 100). X-Achse: Jahre ca. 2001–2021. Mehrere Kurven (US- und europäische Immobilienaktien- bzw. Aktien-Indizes); die konkreten Legendennamen sind in der Renderung nicht zuverlässig lesbar — eine eindeutige Zuordnung zu z. B. FTSE EPRA/NAREIT US/Europe oder MSCI USA/Europe ist NICHT visuell belegbar (der erläuternde Folientext nennt lediglich, dass die Korrelation gegen MSCI USA bzw. Europe ausgewiesen wird). Verlauf der dunkelsten (oberen) Kurve: Anstieg bis ca. 2007, Einbruch in der Finanzkrise 2008/09, danach Erholung und weiterer Anstieg bis 2021. Oben links im Plot eine kleine Kennzahlen-Mini-Tabelle (Performance/Volatilität/Korrelation o. Ä.) — Werte visuell nicht zuverlässig lesbar. Rechts neben dem Plot ein Erläuterungsblock: "indexiert: Dezember 2000 = 100.", "Die Tabelle zeigt annualisierte Performancekennzahlen in Lokalwährung.", "Die Korrelation wird gegenüber dem Aktienmarkt (MSCI USA bzw. Europe) aufgezeigt." Links oben Akzent-Element (orange).

### Visuelle Rekonstruktion
```
Index (Dez 2000 = 100)
 |                                    ___
 |                          /\       /
 |                 ____    /  \   __/
 |        ____ ___/    \__/    \_/
100|___/
 |________________________________________
 2001        2008 (Krise)            2021
 (Mehrere Kurven; konkrete Legendennamen visuell nicht zuverlässig lesbar)
```

### Inhaltliche Rekonstruktion
- Annahme: hohe Korrelation zwischen Börsenwert der Immobilien-AG und Wert der gehaltenen Immobilien.
- Problematik: Kursbildung von Immobilien-AGs hängt von weiteren Faktoren ab → höhere Korrelation zwischen Aktienmarkt und Immobilien-AGs.
- Grafik: Wertentwicklung indexiert auf Dezember 2000 = 100; eingebettete Tabelle mit annualisierten Performancekennzahlen in Lokalwährung; Korrelation gegen MSCI USA bzw. Europe.
- Konkrete Tabellenwerte und Legenden-Indexnamen: in der Renderung nicht zuverlässig ablesbar.
Quelle: Grüner / Gutknecht (2022)

### Fachliche Aussage
Immobilienaktienindizes unterstellen einen Gleichlauf von Aktienkurs und Immobilienwert; tatsächlich korrelieren börsennotierte Immobilien-AGs jedoch stärker mit dem allgemeinen Aktienmarkt als der zugrunde liegende Immobilienbestand.

### React-Vorschlag
`IndexedLineChart` — Liniendiagramm (Recharts) mit Basisindexierung = 100 und seitlicher Kennzahlen-/Korrelations-Tabelle; Werte als Datenobjekt nur soweit aus der Quelle belegbar (nicht aus dem Render erfinden).

## Folie 28 - Immobilien: Smoothing-Effekt im Vergleich zu REITs

### In der MD vorhanden
Der einzige Textsatz ist vorhanden (MD-Zeilen 440–441): "U.a. durch den Smoothing-Effekt ist die Volatilität erheblich geringer als bei börsennotierten REITs."

### In der MD problematisch/fehlend
Das den Großteil der Folie ausfüllende Diagramm ist in der MD vollständig fehlend.

### Fehlende visuelle Inhalte
Großes Liniendiagramm mit Titel "Listed UK REITs versus IPD Property Index Returns". Zwei Linien: dunkelblau = "UK REITS", hellblau = "UK IPD (TR)". Y-Achse von 50 bis 350 (Schritte 50). X-Achse: Oct-02 bis Oct-12 (Jahresschritte). Verlauf: Beide starten bei ca. 100 (Oct-02). UK REITS (dunkelblau) volatil, Anstieg auf Peak ca. 300 um Oct-06, dann starker Einbruch bis ca. 60 um Oct-08/09, danach Erholung auf ca. 110–120 (Oct-12). UK IPD (hellblau) verläuft deutlich glatter: sanfter Anstieg auf Peak ca. 195 (Oct-07), moderater Rückgang auf ca. 125, dann Anstieg auf ca. 175 (Oct-12). Quelle unten links: "Source: DataStream, as at 01.10.12." (alle Werte ca./visuell abgelesen)

### Visuelle Rekonstruktion
```
350|
300|              /\ (UK REITS, dunkelblau, volatil)
250|            /   \
200|         _.~ ___ \~._  (UK IPD TR, hellblau, glatt)
150|      _.~/        \  \___...---
100|__.~/             \/\___/\_/ (REITS)
 50|________________________________________
   Oct-02   Oct-06   Oct-08   Oct-12
```

### Inhaltliche Rekonstruktion
- UK REITS (börsennotiert): hochvolatil, Peak ca. 300 (2006), Tief ca. 60 (2008/09).
- UK IPD (TR, appraisal-based): geglättet, Peak ca. 195 (2007), Tief ca. 125.
- Beide indexiert auf ca. 100 zum Startzeitpunkt Oct-02.
Quelle: DataStream, as at 01.10.12.

### Fachliche Aussage
Der Vergleich zeigt anschaulich den Smoothing-Effekt: Der appraisal-basierte IPD-Index verläuft erheblich glatter als der börsennotierte UK-REIT-Index, dessen Schwankungen (insb. Finanzkrise) viel ausgeprägter sind.

### React-Vorschlag
`SmoothingComparisonChart` — Zwei-Linien-Diagramm (volatile vs. geglättete Zeitreihe) mit Quellenfußnote; Werte ca./visuell abgelesen kennzeichnen.

## Folie 29 - Immobilien: Volatilität von Immobilienindizes (Der Smoothing-Effekt)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 446–460): Erklärung des Smoothing-Effekts in fünf Punkten — Wertentwicklung beruht großteils auf theoretischen Bewertungen (appraisal-based), Anker-Effekt an vorangegangenen Bewertungen, weitere Glättung durch unterschiedliche Bewertungszeitpunkte, Übertragung auf Indizes (Reduktion messbarer Schwankungen), Anwendung von Entglättungsverfahren.

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Hervorgehobene Begriffe: "theoretischen Bewertungen (appraisal-based indices)", "transaction-based indices", "Anker-Effekt", "Smoothing-Effekt", "Entglättungsverfahren".

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Wertentwicklung von Immobilienindizes basiert großteils auf theoretischen Bewertungen (appraisal-based) statt tatsächlicher Transaktionen (transaction-based).
- Theoretische Bewertungen orientieren sich stark an vorangegangenen Bewertungen (Anker-Effekt) → Glättung über die Zeit.
- Unterschiedliche Bewertungszeitpunkte einzelner Objekte → weitere Glättung.
- Glättungseffekte (Smoothing-Effekt) übertragen sich auf die Indizes und reduzieren messbare Schwankungen in den Zeitreihen.
- Üblich: Entglättungsverfahren, um die tatsächliche, transaktionsbasierte Volatilität zu extrahieren.

### Fachliche Aussage
Der Smoothing-Effekt entsteht durch gutachterbasierte, ankerorientierte Bewertungen und zeitversetzte Objektbewertungen; er senkt die gemessene Volatilität künstlich, weshalb Entglättungsverfahren zur Schätzung der echten Volatilität nötig sind.

### React-Vorschlag
`ConceptExplainer` — nummerierte/aufzählende Erklärkomponente mit hervorgehobenen Fachbegriffen als Inline-Badges.

## Folie 30 - Immobilien: (Nicht-)Normalverteilung der Renditen

### In der MD vorhanden
Der einleitende Text ist vorhanden, aber zerbrochen über Tabellenartefakte (MD-Zeilen 465–470): "Die (Nicht-)Normalverteilung von Immobilien-Zeitreihen ist eine bekannte und häufig untersuchte Charakteristik." sowie "Allerdings basiert ein großer Teil der gegenwärtigen Investmentpraxis und –methoden auf der Normalverteilungsannahme."

### In der MD problematisch/fehlend
Die beiden Histogramme sind in der MD komplett unbrauchbar (kryptische Zeichenfolgen wie "@*P>/////", ")<B(/F*;(//"). Achsen, Balkenhöhen und Verteilungsformen fehlen. Hinweis: Eine in den Histogrammen eingebettete Statistik-Box ist auf dieser Folie 30 NICHT erkennbar (entgegen der ursprünglichen Vermutung des Kollegen); die gerenderten Histogramme zeigen nur Balken und Achsen, keine sichtbare Kennzahlen-Box.

### Fehlende visuelle Inhalte
Zwei nebeneinanderliegende Histogramme (Balken hellblau).
Links: Titel "NCREIF Renditeverteilung Q4/1988 – Q2/2012". Y-Achse 0–16 (Schritt 2), X-Achse ca. -0,08 bis ca. +0,05 (Schritt 0,02). Verteilung mit Häufung im positiven Bereich: Spitze ca. 14 bei ca. +0,02, benachbarte Balken ca. 12–13; im negativen Bereich vereinzelte niedrige Balken (Höhe ca. 1–2) → langer linker Ausläufer (negative Schiefe). (Werte ca./visuell abgelesen)
Rechts: Titel "US Opportunity Fund Renditeverteilung Q4/1988 – Q2/2012". Y-Achse 0–32 (Schritt 4), X-Achse ca. -0,25 bis ca. +0,15 (Schritt 0,05). Schmale, hohe Spitze ca. 30 bei ca. 0,00–0,02, daneben ein zweiter hoher Balken ca. 23; lange flache Ausläufer nach links bis ca. -0,25 und nach rechts bis ca. +0,15 (fette Enden). (Werte ca./visuell abgelesen)

### Visuelle Rekonstruktion
```
NCREIF (Y 0-16)                 US Opportunity Fund (Y 0-32)
16|         _                   32|
14|        | |                  28|       |
12|      _ | | _                24|       |
 6|   _ | || || |               20|       | _
 2| _|_ |||||||| |              16|       |||
 0|_____________________        ... fette Enden links/rechts
 -0.08    0.02   0.05            -0.25   0.00   0.15
```

### Inhaltliche Rekonstruktion
- NCREIF (Q4/1988–Q2/2012): Renditehistogramm, Spitze ca. 14 bei ca. +0,02; Häufung im positiven Bereich mit langem linkem Ausläufer (negative/linkschiefe Verteilung).
- US Opportunity Fund (Q4/1988–Q2/2012): hohe schmale Spitze (~30) nahe 0; fette/lange Enden beidseitig (Leptokurtosis).
- Eine eingebettete Statistik-Box mit Verteilungskennzahlen ist auf dieser Folie nicht sichtbar.

### Fachliche Aussage
Empirische Renditeverteilungen von Immobilien (NCREIF, Opportunity Funds) weichen sichtbar von der Normalverteilung ab — durch Schiefe (NCREIF: linker Ausläufer) bzw. Spitzgipfligkeit und fette Enden (Opportunity Fund) — obwohl Investmentmethoden meist Normalverteilung unterstellen.

### React-Vorschlag
`ReturnDistributionHistogram` — zwei nebeneinanderliegende Histogramme mit eigener Y-Achsenskala und optionaler Normalverteilungs-Überlagerung; Balkenhöhen als ca.-Werte (visuell abgelesen) kennzeichnen.

## Folie 31 - Immobilien: (Nicht-)Normalverteilung der Renditen (Tests)

### In der MD vorhanden
Die Tabelle ist als Markdown vorhanden (MD-Zeilen 496–508) inkl. zweier Blöcke; der Einleitungssatz "Tests widerlegen die Normalverteilung von Immobilien-Renditen" ist vorhanden (MD-Zeile 495, dort jedoch in zerbrochener Form).

### In der MD problematisch/fehlend
Die MD enthält zusätzlich einen Block "Unsmoothed Returns" mit NCREIF/All Core/All Opportunity. Dieser Block ist auf der gerenderten Folie 31 NICHT sichtbar — die Folie zeigt nur die obere Tabelle mit 6 Zeilen (S&P 500, US Government Bonds, NCREIF Index, All Core Funds Index, All Opportunity Funds Index, US REITs). Die Spaltenüberschriften sind in der MD-Zeile 496 zerbrochen. (Visuell verifiziert: kein Unsmoothed-Block auf der Folie.)

### Fehlende visuelle Inhalte
Tabelle ohne Außenrahmen, nur mit vertikaler Trennlinie nach der Indexspalte und horizontaler Linie unter den Headern. Spalten: (leer) | "Jarque-Bera Stat" | "Probability" | "Shapiro-Wilk Test" | "Probability". Die Probability-Spalte des Jarque-Bera-Tests ist mit einem orangefarbenen, abgerundeten Rechteck umrandet (Hervorhebung der 0,00-Werte der vier Immobilien-/REIT-Zeilen). Zahlen in Serifenschrift. (Hinweis: Auf der Folie stehen die Werte mit Dezimalpunkt, z. B. "0.00", nicht mit Komma.)

### Visuelle Rekonstruktion
```
                          | Jarque-Bera Stat | Probability | Shapiro-Wilk Test | Probability
S&P 500                   |       5.51       |     0.06    |       0.97        |    0.04
US Government Bonds        |       1.72       |     0.42    |       0.99        |    0.39
NCREIF Index              |     140.11       |     0.00 *  |       0.84        |    0.00
All Core Funds Index      |     300.39       |     0.00 *  |       0.78        |    0.00
All Opportunity Funds Idx |     130.44       |     0.00 *  |       0.88        |    0.00
US REITs                  |      73.30       |     0.00 *  |       0.92        |    0.00
(* = orange umrandete Jarque-Bera-Probability-Spalte)
```
(visuell verifiziert: alle Werte exakt ablesbar)

### Inhaltliche Rekonstruktion
| | Jarque-Bera Stat | Probability | Shapiro-Wilk Test | Probability |
|---|---|---|---|---|
| S&P 500 | 5.51 | 0.06 | 0.97 | 0.04 |
| US Government Bonds | 1.72 | 0.42 | 0.99 | 0.39 |
| NCREIF Index | 140.11 | 0.00 | 0.84 | 0.00 |
| All Core Funds Index | 300.39 | 0.00 | 0.78 | 0.00 |
| All Opportunity Funds Index | 130.44 | 0.00 | 0.88 | 0.00 |
| US REITs | 73.30 | 0.00 | 0.92 | 0.00 |

Hinweis: Die Jarque-Bera-Probability-Spalte ist auf der Folie orange umrandet (die vier 0.00-Werte). Der in der MD zusätzlich vorhandene Block "Unsmoothed Returns" (NCREIF 1005.41 / All Core 1126.36 / All Opportunity 88.18) ist auf dem gerenderten Folienbild 31 NICHT abgebildet.

### Fachliche Aussage
Statistische Tests (Jarque-Bera, Shapiro-Wilk) lehnen die Normalverteilung für die Immobilienindizes (NCREIF, Core/Opportunity Funds, US REITs) mit Probability 0,00 klar ab, während sie für US Government Bonds nicht abgelehnt wird — Immobilienrenditen sind nicht normalverteilt.

### React-Vorschlag
`NormalityTestTable` — schlanke Tabelle ohne Box-Rahmen, mit hervorgehobener (umrandeter) Signifikanzspalte und semantischer Markierung der p-Werte < 0,05.

## Folie 32 - Kapitel 3.3: Rohstoffe (Kapiteltrenner)

### In der MD vorhanden
Vorhanden (MD-Zeilen 511–514): "Asset Management / Kapitel 3.3 / Rohstoffe / V26-03-22".

### Fehlende visuelle Inhalte
Reine Kapiteltrenner-Layoutfolie. Oben Kopfzeile "Asset Management" und HBW-Logo. Darunter eine Reihe von vier Fotos (Banderole): Hand mit HBW-Karte, Brille auf Tisch, Gruppe lachender Studierender im Freien, HBW-Gebäude. Darunter großer Titelblock auf hellem Balken: "Kapitel 3.3 / Rohstoffe". Versionskürzel "V26-03-22" rechts unten. Kein Fachinhalt.

### Visuelle Rekonstruktion
n/a (Trennerfolie)

### Inhaltliche Rekonstruktion
Kapitelüberschrift: Kapitel 3.3 – Rohstoffe.

### Fachliche Aussage
Beginn des Unterkapitels zur alternativen Assetklasse Rohstoffe.

### React-Vorschlag
`ChapterDivider` — bestehende Kapiteltrenner-Komponente; Fotoleiste rein dekorativ, kein Fachinhalt nötig.

## Folie 33 - Rohstoffe: Kurzer Überblick

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 518–532): Gold/Edelmetalle als traditionelle Anlageobjekte und Derivatemarkt für weitere Rohstoffe, erwartete geringe Korrelation/Diversifikationseffekt, Gold als sicherer Hafen in Krisen, Zustrom von Investoren in den letzten zwei Dekaden, Finanzialisierung von Rohstoffmärkten.

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Hervorgehobene Begriffe (blau): "geringe Korrelation zu traditionellen Anlagen", "Diversifikationseffekt", "sicherer Hafen", "Finanzialisierung von Rohstoffmärkten".

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Gold/Edelmetalle seit jeher Anlageobjekte; gut ausgebauter Derivatemarkt erlaubt heute Partizipation an vielen weiteren Rohstoffen.
- Erwartung: geringe Korrelation zu traditionellen Anlagen → Diversifikationseffekt; Gold als sicherer Hafen in Krisenzeiten.
- Zustrom zahlreicher Investoren in den letzten zwei Dekaden.
- Folge: bedeutendere Rolle von Finanzakteuren in der Preisbildung → Finanzialisierung von Rohstoffmärkten.

### Fachliche Aussage
Rohstoffe werden wegen geringer Korrelation und Krisenschutz (Gold) als Diversifikationsbaustein nachgefragt; der starke Investorenzustrom hat zur Finanzialisierung der Rohstoffmärkte geführt.

### React-Vorschlag
`KeyPointsList` — Aufzählung mit hervorgehobenen Schlüsselbegriffen.

## Folie 34 - Rohstoffe: Klassifizierung von Rohstoffen

### In der MD vorhanden
Nur Titel und Quelle vorhanden (MD-Zeilen 537–538): "Klassifizierung von Rohstoffen (nicht abschließende Aufzählung)" und "Quelle: Grüner / Gutknecht (2022)".

### In der MD problematisch/fehlend
Das gesamte hierarchische Klassifizierungsschaubild (Baum/Matrix) fehlt vollständig in der MD — nur Titel und Quelle wurden extrahiert.

### Fehlende visuelle Inhalte
Hierarchisches Kategorisierungs-Schaubild (graue Kopfzellen, hellgraue Inhaltsspalten). Oberste Ebene: "Rohstoffe". Zweite Ebene zweigeteilt: "Hard Commodities" (links) und "Soft Commodities" (rechts). Unter Hard Commodities: "Energie" und "Metalle"; Metalle untergliedert in "Industrie" und "Edelmetall". Unter Soft Commodities: "Vieh-wirtschaft" und "Landwirtschaft"; Landwirtschaft untergliedert in "Softs" und "Korn/Saat". Jede Endspalte enthält eine Bullet-Liste von Beispiel-Rohstoffen. (Schaubild und alle Beispiele visuell verifiziert.)

### Visuelle Rekonstruktion
```
                          Rohstoffe
        ┌───────────────────────┬───────────────────────┐
   Hard Commodities                         Soft Commodities
   ┌─────────┬───────────────┐         ┌──────────┬───────────────┐
 Energie       Metalle             Vieh-          Landwirtschaft
            ┌─────────┬───────┐  wirtschaft   ┌────────┬──────────┐
          Industrie  Edelmetall              Softs     Korn/Saat
 -----------------------------------------------------------------
 Öl       Aluminium  Gold       Mastrind   Kaffee     Weizen
 Kohle    Zink       Silber     Lebendrind Kakao      Gerste
 Gas      Kupfer     Iridium    Schweine   Wolle      Mais
          Blei       Palladium             Zucker     Hafer
          Nickel     Platin                Seide      Reis
                     Rhodium               Holz       Soja
```

### Inhaltliche Rekonstruktion
| Hauptgruppe | Untergruppe | Unter-Untergruppe | Beispiele |
|---|---|---|---|
| Hard Commodities | Energie | – | Öl, Kohle, Gas |
| Hard Commodities | Metalle | Industrie | Aluminium, Zink, Kupfer, Blei, Nickel |
| Hard Commodities | Metalle | Edelmetall | Gold, Silber, Iridium, Palladium, Platin, Rhodium |
| Soft Commodities | Viehwirtschaft | – | Mastrind, Lebendrind, Schweine |
| Soft Commodities | Landwirtschaft | Softs | Kaffee, Kakao, Wolle, Zucker, Seide, Holz |
| Soft Commodities | Landwirtschaft | Korn/Saat | Weizen, Gerste, Mais, Hafer, Reis, Soja |

Quelle: Grüner / Gutknecht (2022)

### Fachliche Aussage
Rohstoffe werden in Hard Commodities (Energie, Metalle = Industrie- und Edelmetalle) und Soft Commodities (Viehwirtschaft, Landwirtschaft = Softs und Korn/Saat) gegliedert; die Aufzählung ist nicht abschließend.

### React-Vorschlag
`ClassificationTree` — mehrstufiges Hierarchie-Schaubild (verschachtelte Spalten/Boxen) mit grauen Kopfknoten und Beispiel-Listen je Blatt.

## Folie 35 - Rohstoffe: Determinanten der Rohstoffpreise

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 542–553): kurzfristige Einflussfaktoren (Angebot/Nachfrage inkl. Kartelle/Funde/Nachfrageschocks, Wechselkurs, Inflation, politische Risiken, Wetter/Klima/Naturkatastrophen mit saisonalen Mustern, Transportkosten/-engpässe) sowie langfristig: Reflexion der erwarteten Grenzkosten der Produktion.

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Hervorhebungen (blau): "Kurzfristig", "folgenden Faktoren", "Langfristig", "Erwartung über die Grenzkosten der Produktion."

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
Kurzfristige Determinanten:
- Angebot und Nachfrage (Kartelle, Rohstoff-Funde, Nachfrageschocks etc.)
- Wechselkurs
- Inflation
- Politische Risiken
- Wetter-/Klimabedingungen und Naturkatastrophen (Folge: saisonale Muster)
- Transportkosten bzw. -engpässe
Langfristig: Rohstoffpreis reflektiert die Erwartung über die Grenzkosten der Produktion.

### Fachliche Aussage
Kurzfristig bestimmen Angebot/Nachfrage, Wechselkurse, Inflation, Politik, Wetter und Transport die Rohstoffpreise; langfristig konvergieren sie gegen die erwarteten Grenzkosten der Produktion.

### React-Vorschlag
`KeyPointsList` — zweigeteilte Liste (kurzfristig / langfristig) mit hervorgehobenen Kategorien.

## Folie 36 - Rohstoffe: Vor- und Nachteile von Rohstoff-Investments

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 557–567): Vorteile (begrenzte Ressourcen, Event-Risk treibt Preise im Gegensatz zu Aktien/Bonds, Hedge gegen Inflation, geringe Korrelation) und Nachteile (hohe Volatilität, keine/geringe laufende Erträge, Institutionalisierung führt zu Rollverlusten).

### Fehlende visuelle Inhalte
Reine Textfolie mit zwei Listenblöcken. "Vorteile" Überschrift grün, "Nachteile" Überschrift orange, jeweils mit blauer Ergänzung "des Investments in Commodities:". Fett hervorgehoben: "Event-Risk", "Hedge", "Rollverlusten".

### Visuelle Rekonstruktion
```
Vorteile                         | Nachteile
- Begrenzte Ressourcen           | - Hohe Volatilität
- Event-Risk -> Preisanstieg     | - Keine/geringe laufende Erträge
  (im Gegensatz zu Aktien/Bonds) | - Institutionalisierung
- Hedge gegen Inflation          |   -> Rollverluste
- Geringe Korrelation            |
```

### Inhaltliche Rekonstruktion
Vorteile des Investments in Commodities:
- Begrenzte Ressourcen.
- Event-Risk führt zu Anstieg der Commodity-Preise (im Gegensatz zu Aktien oder Bonds).
- Hedge gegen Inflation.
- Geringe Korrelation mit traditionellen Asset-Klassen.
Nachteile des Investments in Commodities:
- Hohe Volatilität.
- Keine/geringe laufende Erträge.
- Zunehmende Institutionalisierung führt zu Rollverlusten.

### Fachliche Aussage
Rohstoffe bieten Inflationsschutz, Diversifikation und positive Reaktion auf Event-Risk, sind jedoch hochvolatil, ohne laufende Erträge und durch Institutionalisierung mit Rollverlusten belastet.

### React-Vorschlag
`ProsConsList` — zweispaltige Vorteile/Nachteile-Komponente mit Akzentfarben grün/orange.

## Folie 37 - Rohstoffe: Renditekomponenten

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 572–582): Handel mit Rohstoffen (kein physischer Erwerb außer Edelmetalle, Lösung Futures-Kontrakte), Renditekomponenten Spot Return, Collateral Yield, Rollrendite (positiv/negativ bei Backwardation/Contango).

### Fehlende visuelle Inhalte
Reine Textfolie, zwei Abschnittsüberschriften (blau): "Handel mit Rohstoffen" und "Renditekomponenten bei Rohstoffinvestments mit Futures-Kontrakten:". Fett: "Rohstoffe nicht physisch erwerben", "Transport- und Lagerhaltungskosten", "Lösung: Futures-Kontrakte", "Spot Return:", "Collateral Yield:", "Rollrendite:". Pfeil "→" vor "Lösung". (Auf der Folie steht die Rollrendite-Zeile als "positiv (negativ) bei Backwardation (Contango)" mit kursivem "negativ" und "Contango".)

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Handel: Mit Ausnahme einiger Edelmetalle können Anleger Rohstoffe nicht physisch erwerben (Hintergrund: Transport- und Lagerhaltungskosten) → Lösung: Futures-Kontrakte (für institutionelle Anleger).
- Spot Return: prozentuale Veränderung des Kurses des Basisinstruments am Kassamarkt; bei abnehmender Restlaufzeit nähern sich Kassakurs und Terminkurs zusehends an.
- Collateral Yield: bei einem Futures-Investment müssen Margins hinterlegt werden, die zum risikolosen Zinssatz angelegt werden können.
- Rollrendite: positiv (negativ) bei Backwardation (Contango).

### Fachliche Aussage
Rohstoffrenditen über Futures setzen sich aus Spot Return, Collateral Yield und Rollrendite zusammen; die Rollrendite ist in Backwardation positiv und in Contango negativ.

### React-Vorschlag
`KeyPointsList` — zweigeteilte Liste mit Definitions-Bullets je Renditekomponente (Begriff fett, Erklärung normal).

## Folie 38 - Rohstoff: Bewertung von Rohstoff-Futures

### In der MD vorhanden
Der Fließtext ist vorhanden (MD-Zeilen 599–610): Verweis auf Cost-of-Carry-Modell, Lagerhaltungskosten (u) und Convenience Yield (y), sowie die Aufzählung zur Convenience Yield (Vorteilhaftigkeit der Lagerhaltung, Kosten der Versorgungssicherheit, i.d.R. positiv, Ableitung aus Future-Kursen, hoch bei geringem Lagerbestand).

### In der MD problematisch/fehlend
Die zentrale Formel ist in der MD vollständig zerstört (Zeilen 601–603: `" #$%& ∗(` / `! = # ∗ % !`). Außerdem ist die diagonale Banderole "Wiederholung FI&RM" oben rechts in der MD als Buchstabensalat verstreut (Zeilen 586–598).

### Fehlende visuelle Inhalte
Zentrale Bewertungsformel (schwarz, Serifenschrift): F-Null gleich S-Null mal e hoch ((r_f + u − y) mal T). Oben rechts diagonale orange Banderole mit weißem Text "Wiederholung FI&RM". (Formel visuell verifiziert.)

### Visuelle Rekonstruktion
```
F0 = S0 · e^((r_f + u − y) · T)
[oben rechts: orange Banderole "Wiederholung FI&RM"]
```

### Inhaltliche Rekonstruktion
Formel (Klartext): F0 = S0 × e^((r_f + u − y) × T)
mit r_f = risikoloser Zinssatz, u = Lagerhaltungskosten, y = Convenience Yield, T = Laufzeit.
Convenience Yield:
- Ausdruck der Vorteilhaftigkeit der Lagerhaltung.
- Kosten der Sicherheit der Versorgung.
- In der Regel positiv.
- Exakte Höhe nicht bekannt; muss aus den Future-Kursen abgeleitet werden.
- Kosten sind hoch, wenn der Lagerbestand gering ist.

### Fachliche Aussage
Bei Rohstoff-Futures erweitert das Cost-of-Carry-Modell die Bewertung um Lagerhaltungskosten (u, preissteigernd) und Convenience Yield (y, preissenkend); der Futures-Preis F0 ergibt sich aus dem Kassakurs S0 verzinst mit (r_f + u − y) über die Laufzeit T.

### React-Vorschlag
`FormulaCallout` — zentrierte Formel (KaTeX) mit Variablenlegende; optional Banner-Badge "Wiederholung FI&RM".

## Folie 39 - Bewertung von Futures & Forwards: Rohstoff-Futures – Contango und Backwardation

### In der MD vorhanden
Der erläuternde Text ist vorhanden (MD-Zeilen 627–636): Definitionen Contango (Aufschlag, höhere Futures-Kurse bei längerer Laufzeit, Beispiel Gold/Finanzinstrumente) und Backwardation (Abschlag, niedrigere Futures-Kurse bei längerer Laufzeit, Beispiel Rohstoff-Futures, Prämie für kurzfristig verfügbare Rohstoffe wegen geringer Lagerbestände/Unsicherheit), Quelle Steiner/Bruns (2017).

### In der MD problematisch/fehlend
Die beiden Terminkurven-Diagramme am unteren Folienrand fehlen in der MD vollständig. Die "Wiederholung FI&RM"-Banderole ist auch hier nur als Buchstabensalat extrahiert.

### Fehlende visuelle Inhalte
Zwei nebeneinanderliegende Liniendiagramme (Terminkurven) am unteren Rand (beide jeweils mit Bildunterschrift "Abb. 4.7").
Links: mit "Contango" beschriftete, ansteigende Terminkurve (Futures-Kurs steigt mit zunehmender Laufzeit).
Rechts: mit "Backwardation" beschriftete, fallende Terminkurve (Futures-Kurs sinkt mit zunehmender Laufzeit).
X-Achse jeweils Laufzeit/Fälligkeit, Y-Achse Futures-Kurs. Oben rechts erneut die diagonale orange Banderole "Wiederholung FI&RM". (Beide Kurvenverläufe visuell verifiziert; die konkrete Basiswert-Zuordnung Gold/Brent-Öl ist aus dem Render nicht eindeutig beschriftet und nur dem erläuternden Text entnommen.)

### Visuelle Rekonstruktion
```
Contango                    Backwardation
Kurs|        ___/          Kurs|\___
    |    ___/                  |    \___
    |___/                      |        \___
    |____________ Laufzeit     |____________ Laufzeit
```

### Inhaltliche Rekonstruktion
Contango (Aufschlag):
- Futures-Kurse sind umso höher, je länger die Laufzeit.
- Beispiel: Futures auf Gold oder Finanzinstrumente.
Backwardation (Abschlag):
- Futures-Kurse sind umso niedriger, je länger die Laufzeit (bzw. umso höher, je kürzer die Laufzeit).
- Beispiel: ausgewählte Futures auf Rohstoffe.
- Konsument zahlt Prämie für kurzfristig verfügbare Rohstoffe (Hintergrund: geringe Lagerbestände, Unsicherheit).
Quelle: Steiner / Bruns (2017): Wertpapiermanagement, S. 493 + 495

### Fachliche Aussage
Contango bezeichnet steigende, Backwardation fallende Terminkurven; Gold zeigt typischerweise Contango, ausgewählte Rohstoffe (z. B. Öl) Backwardation, weil Konsumenten für sofort verfügbare Ware bei knappen Lagern eine Prämie zahlen.

### React-Vorschlag
`TermStructureChart` — zwei kleine Liniendiagramme (steigende vs. fallende Terminkurve) nebeneinander mit Beschriftung Contango/Backwardation und Quellenfußnote.

## Folie 40 - Rohstoffe: Rollrendite (Rollrenditen in Backwardation und Contango)

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 640–655): Beispiel Long-Futures-Position Öl (Fälligkeit Februar), Rollen in den März-Kontrakt zur Vermeidung der Lieferung, Vorteil in Backwardation (höherer Verkaufserlös als Wiederanlagebetrag, niedrigerer Break-Even), Fazit (Anleger profitieren von Backwardation, übertrifft Kassamarkt; in Contango steigender Break-Even).

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Abschnitt "Beispiel" und "Fazit:" als Strukturierung; Begriffe "Long Futures Position", "Rollen", "Backwardation", "Break-Even-Preis", "Contango" hervorgehoben.

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Beispiel: Long-Futures-Position Öl (Fälligkeit Februar); zur Lieferungsvermeidung wird verkauft und in einen März-Kontrakt reinvestiert (Rollen).
- In Backwardation: Verkaufserlös (Februar) übersteigt Wiederanlagebetrag (März) → größere Menge per Termin erwerbbar; Break-Even-Preis niedriger als Ausgangssituation.
- Fazit: Anleger profitieren von Backwardation (Rendite über Kassamarkt). In Contango werden nächstgelegene Terminkontrakte teurer erworben → Break-Even-Kurs steigt.

### Fachliche Aussage
Beim Rollen von Futures bestimmt die Terminkurve die Rollrendite: In Backwardation entsteht ein positiver Rolleffekt (niedrigerer Break-Even, Mehrmenge), in Contango ein negativer (höherer Break-Even).

### React-Vorschlag
`WorkedExample` — Beispiel-Box (Szenario + Schritt-für-Schritt + Fazit) mit hervorgehobenem Fazit-Block.

## Folie 41 - Rohstoffe: Rohstoff-Indizes

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 660–676): Anlage über Indizes, breite vs. spezifische Indizes, Aufzählung der bekanntesten Indizes (CRB-Index, S&P GSCI, RICI, BCOM), Bezug auf nahe Futures-Kontrakte mit regelmäßigem Rollen, abweichende Gewichtung (Energieanteil S&P GSCI ca. 60 %, BCOM ca. 30 %).

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Hervorgehoben (blau): "Indizes", "bekanntesten Rohstoffindizes", "Futures-Kontrakte", "regelmäßig gerollt"; Indexnamen mit Abkürzungen in Klammern.

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Anlage erfolgt regelmäßig über Indizes; neben spezifischen häufig breit diversifizierte Indizes.
- Bekannteste Rohstoffindizes:
  - Thomson Reuters/Corecommodity CRB Total Return Index (CRB-Index)
  - S&P Goldman Sachs Commodity Index (S&P GSCI)
  - Rogers International Commodity Index (RICI)
  - Bloomberg Commodity Index, früher Dow Jones AIG Index (BCOM)
- Indizes beziehen sich auf nahe Futures-Kontrakte, die regelmäßig gerollt werden.
- Gewichtung nach Indexanbieter unterschiedlich: Energieanteil S&P GSCI ca. 60 %, BCOM rund 30 %.

### Fachliche Aussage
Rohstoffinvestments erfolgen meist über (breit diversifizierte) Indizes auf nahe, regelmäßig gerollte Futures; die Gewichtung der Rohstoffkategorien unterscheidet sich stark je Anbieter (Energie: S&P GSCI ~60 %, BCOM ~30 %).

### React-Vorschlag
`KeyPointsList` mit eingebetteter `IndexList` — Liste der Indizes mit Abkürzungs-Badges und Hervorhebung der Energiegewichtungen.

## Folie 42 - Kapitel 3.4: Digital Assets - Kryptowährungen (Kapiteltrenner)

### In der MD vorhanden
Vorhanden (MD-Zeilen 679–682): "Asset Management / Kapitel 3.4 / Digital Assets - Kryptowährungen / V26-03-22".

### Fehlende visuelle Inhalte
Reine Kapiteltrenner-Layoutfolie. Oben Kopfzeile "Asset Management" und HBW-Logo, Fotoleiste (vier Bilder, identisch zum vorherigen Trenner: Hand mit HBW-Karte, Brille, Studierendengruppe, HBW-Gebäude). Darunter Titelblock auf hellem Balken: "Kapitel 3.4 / Digital Assets - Kryptowährungen". Versionskürzel "V26-03-22". Kein Fachinhalt.

### Visuelle Rekonstruktion
n/a (Trennerfolie)

### Inhaltliche Rekonstruktion
Kapitelüberschrift: Kapitel 3.4 – Digital Assets – Kryptowährungen.

### Fachliche Aussage
Beginn des Unterkapitels zu digitalen Vermögenswerten und Kryptowährungen.

### React-Vorschlag
`ChapterDivider` — bestehende Kapiteltrenner-Komponente.

## Folie 43 - Digital Assets

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 686–700): Definition digitaler Vermögenswerte (nicht von Zentralbank emittiert/garantiert, kein Rechtsstatus von Währung/Geld), Akzeptanz als Tausch-/Zahlungsmittel oder Anlage, elektronische Übertragung/Speicherung/Handel, Kryptowährungen als bekannteste Form, Kryptowertpapiere als Sonderfall des elektronischen Wertpapiers, deutsches Gesetz 2021, erwartete Zunahme digitaler Wertpapierbegebung.

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Hervorgehoben (blau): "Kryptowährungen". Aufzählungsliste mit Quadrat-Bullets.

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Digitale Vermögenswerte: nicht von Zentralbank/öffentlicher Behörde emittiert oder garantiert, kein Rechtsstatus von Währung/Geld.
- Akzeptanz durch natürliche/juristische Personen als Tausch-/Zahlungsmittel oder zu Anlagezwecken; elektronisch übertragbar, speicherbar, handelbar.
- Kryptowährungen = bekannteste Form digitaler Vermögenswerte.
- Kryptowertpapiere = Sonderfall des elektronischen Wertpapiers; deutsches Gesetz im Jahr 2021 ermöglicht Emission im regulierten Umfeld.
- Erwartung: digitale Begebung von Wertpapieren rückt künftig stärker in den Fokus.

### Fachliche Aussage
Digital Assets sind dezentral emittierte digitale Vermögenswerte ohne Geldstatus; Kryptowährungen sind die bekannteste Form, daneben ermöglichen Kryptowertpapiere seit 2021 in Deutschland regulierte elektronische Wertpapieremissionen.

### React-Vorschlag
`KeyPointsList` — Definitions-/Abgrenzungsliste mit hervorgehobenen Begriffen.

## Folie 44 - Blockchain-Technologie

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 704–717): Blockchain als zentrale Technologie digitaler Vermögenswerte, Definition (dezentrale, manipulationssichere Datenverwaltung ohne zentrale Instanz, dezentralisierte Datenbank), Herkunft des Begriffs (aneinandergereihte Datenblöcke = Blockkette), kryptografische Mechanismen sichern Unveränderbarkeit. Tippfehler im Original "Vermöenswerte"/"digitale Vermöenswerte" wird übernommen.

### Fehlende visuelle Inhalte
Reine Textfolie. Keine Grafik. Hervorgehoben (blau): "Blockchain:", "dezentralisierte Datenbank.", "Kryptografische Mechanismen". Quadrat-Bullets. (Verifiziert: Folie enthält den Tippfehler "Vermöenswerte".)

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Aus technischer Perspektive ist für digitale Vermögenswerte die Blockchain-Technologie zentral.
- Blockchain: technische Lösung, um Daten innerhalb einer digitalen Infrastruktur ohne zentrale Instanz nachvollziehbar und manipulationssicher zu verwalten → im Gegensatz zu zentralen Datenbanken eine dezentralisierte Datenbank.
- Begriffsherkunft: Blöcke von Datensätzen werden aneinandergereiht und zur stetig wachsenden Blockkette (Blockchain) verknüpft.
- Kryptografische Mechanismen sorgen dafür, dass einmal aufgenommene Daten praktisch nicht mehr veränderbar sind.

### Fachliche Aussage
Die Blockchain ist eine dezentralisierte, kryptografisch gesicherte Datenbank, in der aneinandergereihte Datenblöcke nachvollziehbar und manipulationssicher ohne zentrale Instanz verwaltet werden.

### React-Vorschlag
`ConceptExplainer` — Erklärblock mit hervorgehobenen Definitionsbegriffen; optional dekorative `BlockchainDiagram`-Skizze (Blöcke→Kette).

## Folie 45 - Bitcoin: Ertrag, Risiko und Diversifikation

### In der MD vorhanden
Vorhanden sind Titel und Rahmentext (MD-Zeilen 722–729): "Wertentwicklung, Volatilität und Korrelation(en) des Bitcoins im Vergleich (Zeitraum: 31.08.2016–31.01.2022)", die beiden Kernaussagen "Sehr hohe Volatilität im Vergleich zu anderen Anlageklassen" und "Hohes Diversifikationspotenzial", sowie Quelle Grüner / Gutknecht (2022), S. 297.

### In der MD problematisch/fehlend
Das logarithmische Wertentwicklungs-Liniendiagramm, das Volatilitäts-Balkendiagramm und die Korrelationsmatrix sind in der MD vollständig fehlend. ACHTUNG: Die ursprünglich vom Kollegen "visuell abgelesen/unsicher" angegebenen Korrelationswerte (0,22 / 0,13 / 0,17 / 0,03) waren FALSCH bzw. geraten. Die Matrix ist im Render bei Vergrößerung klar lesbar und wurde komplett korrigiert (siehe unten).

### Fehlende visuelle Inhalte
Drei zusammengehörige Grafiken:
1. Liniendiagramm "Wertentwicklung (logarithmisch)" (Y-Achse "Logarithmische Skalierung" mit Markern 500 / 5.000 / 50.000). X-Achse: monatliche Marken "Aug. 2016", "Aug. 2017", … bis "Aug. 2021". Kurven (von oben/stärkste nach unten): Bitcoin (schwarz, weitaus stärkster Anstieg, annotierte Werte "18.940 $" und "3.195 $"), Apple, MSCI World, Gold, USD/EUR (flach unten). (Kurvennamen visuell verifiziert über die Legende.)
2. Balkendiagramm "Volatilität" (rechts), Y-Achse "Annualisierte Volatilität" in Prozent (0 % bis 80 %); höchster Balken Bitcoin (ca. 70–80 %, visuell abgelesen), deutlich niedrigere Balken für die übrigen Anlageklassen.
3. Korrelationsmatrix (untere Dreiecksmatrix, schwarze Trennlinien, ohne Außenrahmen). Header: "Korrelationsmatrix | Bitcoin | Aktien | Anleihen | Immobilien | Gold". Die Bitcoin-Spalte ist mit einem orange abgerundeten Rechteck umrandet. Werte (visuell verifiziert, Dezimalkomma):

```
Korrelationsmatrix | Bitcoin | Aktien | Anleihen | Immobilien | Gold
Bitcoin            |  1,00   |        |          |            |
Aktien             |  0,22   |  1,00  |          |            |
Anleihen           |  0,02   | -0,10  |   1,00   |            |
Immobilien         |  0,16   |  0,75  |   0,11   |    1,00    |
Gold               |  0,12   |  0,14  |   0,37   |    0,18    | (1,00)
[orange umrandet: gesamte Bitcoin-Spalte 0,22 / 0,02 / 0,16 / 0,12]
```

### Visuelle Rekonstruktion
```
Wertentwicklung (log.)             Volatilität (%)
50.000|        Bitcoin /\        80|  █ Bitcoin
      | 18.940$  3.195$          60|  █
 5.000|   Apple ___/             40|  █
      |  MSCI World ___          20|  █  _ _ _ _
   500| Gold / USD-EUR flach      0| BTC ... (übrige)
      |__________________ Aug.2016..Aug.2021
```

### Inhaltliche Rekonstruktion
- Zeitraum: 31.08.2016 – 31.01.2022.
- Wertentwicklung (logarithmische Skalierung, Y-Marker 500 / 5.000 / 50.000): Bitcoin mit weitaus stärkstem Anstieg (Annotationen 18.940 $ und 3.195 $) vs. Apple, MSCI World, Gold, USD/EUR.
- Volatilität (annualisiert, 0–80 %): Bitcoin höchste Volatilität (Balken ca. 70–80 %, visuell abgelesen), übrige Anlageklassen deutlich niedriger.
- Korrelationsmatrix (visuell verifiziert):

| Korrelationsmatrix | Bitcoin | Aktien | Anleihen | Immobilien | Gold |
|---|---|---|---|---|---|
| Bitcoin | 1,00 | | | | |
| Aktien | 0,22 | 1,00 | | | |
| Anleihen | 0,02 | -0,10 | 1,00 | | |
| Immobilien | 0,16 | 0,75 | 0,11 | 1,00 | |
| Gold | 0,12 | 0,14 | 0,37 | 0,18 | (1,00) |

(Die Bitcoin-Spalte ist auf der Folie orange umrandet hervorgehoben.)
- Kernaussagen: Sehr hohe Volatilität im Vergleich zu anderen Anlageklassen; hohes Diversifikationspotenzial.
Quelle: Grüner / Gutknecht (2022), S. 297

### Fachliche Aussage
Bitcoin weist im Vergleichszeitraum eine extreme (logarithmisch dargestellte) Wertentwicklung bei zugleich sehr hoher Volatilität auf; die geringen Korrelationen zu klassischen Assetklassen (Bitcoin-Spalte: Aktien 0,22, Anleihen 0,02, Immobilien 0,16, Gold 0,12) begründen das hohe Diversifikationspotenzial.

### React-Vorschlag
`BitcoinComparisonPanel` — Kombikomponente aus logarithmischem Liniendiagramm, Volatilitäts-Balkendiagramm und Korrelationsmatrix; die nun verifizierten Matrixwerte als Datenobjekt, Volatilitätshöhen als "ca." kennzeichnen, Quelle als Fußnote.

## Folie 46 - Digitale Assets: Kurze Zusammenfassung

### In der MD vorhanden
Vollständig vorhanden (MD-Zeilen 733–746): Zusammenfassung Blockchain (dezentrale, manipulationssichere Datenverwaltung), Kryptowährungen (digitale Zahlungsmittel ohne zentrale Instanz auf Blockchain-Basis), Hinweis dass Kryptowährungen Geldfunktionen wegen hoher Volatilität noch nicht erfüllen, Renditeperspektive als Spekulation auf künftige wirtschaftliche Bedeutung.

### Fehlende visuelle Inhalte
Reine Textfolie (Zusammenfassung). Keine Grafik. Hervorgehoben (blau): "Blockchain:", "Kryptowährungen:", "digitale Zahlungsmittel ohne zentrale Instanz", "Funktionen des Geldes derzeit noch nicht", "Spekulation".

### Visuelle Rekonstruktion
n/a (keine Grafik)

### Inhaltliche Rekonstruktion
- Blockchain: technische Lösung, um Daten innerhalb einer digitalen Infrastruktur ohne zentrale Instanz nachvollziehbar und manipulationssicher zu verwalten.
- Kryptowährungen: handelt es sich um digitale Zahlungsmittel ohne zentrale Instanz, welche auf Grundlage der Blockchain-Technologie funktionieren.
- Kryptowährungen erfüllen die gemäß ökonomischer Lehre erforderlichen Funktionen des Geldes derzeit noch nicht — Grund: enorm hohe Wertschwankung (Volatilität).
- Renditeperspektive: Aus einer Renditeperspektive ist eine Investition in Kryptowährungen eine Spekulation darauf, dass diese zukünftig eine wichtige Rolle im Wirtschaftssystem einnehmen und die Preise dadurch steigen.

### Fachliche Aussage
Zusammenfassend sind Kryptowährungen blockchainbasierte, dezentrale Zahlungsmittel, die wegen ihrer hohen Volatilität die klassischen Geldfunktionen noch nicht erfüllen; ihr Investment ist im Kern eine Spekulation auf künftige Bedeutung.

### React-Vorschlag
`SummaryCallout` — Zusammenfassungs-Box (z. B. abschließende keyTakeaways-Sektion) mit hervorgehobenen Kernbegriffen.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 3: Systematisierungstabelle traditionell vs. alternativ (zerbrochene MD-Tabelle, Rohstoffe-Verweis korrekt verankern)
2. Folie 7: Baumdiagramm der Hedgefonds-Strategien (Directional / Event Driven / Relative Value)
3. Folie 9: Event-Study-CAR-Diagramm (Targets/Acquirer) plus Empirie-Tabelle
4. Folie 11: Säulendiagramm verwaltetes Hedgefonds-Vermögen mit korrigierten Datenlabels
5. Folie 19: Immobilien-Risikomatrix (Core / Value-Added / Opportunistic)
6. Folie 24 und 38: zentrale Formeln (Liegenschaftszins; Cost-of-Carry-Bewertung)
7. Folie 25 und 45: Korrelationsmatrizen (Dreiecksform; Bitcoin mit orange umrandeter Spalte)
8. Folie 28: Smoothing-Vergleichsdiagramm (UK REITs vs. UK IPD)
9. Folie 30 und 31: Renditehistogramme und Normalitätstest-Tabelle
10. Folie 34: hierarchisches Rohstoff-Klassifizierungsschaubild
11. Folie 39: Terminkurven Contango/Backwardation

## Kann vereinfacht werden

- Folie 2: Agenda als einfache Liste mit hervorgehobenem aktivem Punkt
- Folien 12, 27: Liniendiagramme ohne zuverlässig ablesbare Zahlen — als qualitative Verlaufsskizze bzw. nur belegbare Werte darstellen
- Reine Textfolien mit Farbhervorhebungen (5, 6, 8, 10, 13, 14, 16, 17, 18, 20–23, 26, 29, 33, 35, 36, 37, 40, 41, 43, 44, 46) als `BulletList`/`KeyPointsList`/`ProConList` mit Inline-Highlights
- Folie 40: Rollrendite-Beispiel als `WorkedExample`-Box

## Nicht fachlich relevant

- HBW-Logo
- graue Kopfzeile
- Folien-Footer (z. B. "Asset Management / CS / Folie 51")
- Copyright-Zeile "© 2026 – Hochschule der Bayerischen Wirtschaft"
- Fotoleisten/Banderolen der Kapiteltrenner (rein dekorativ)
- Versionskürzel "V26-03-22"
- diagonale Banderole "Wiederholung FI&RM" auf Folien 38/39 (nur Hinweisbadge, kein Fachinhalt)

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich auf den Folien vorhandenen Inhalten):

```js
// Folie 7 — Hedgefonds-Strategien (Folie-7-Baum)
export const hedgeFundStrategies = [
  {
    category: 'Directional',
    strategies: ['Long Short Equity', 'Global Macro', 'Managed Futures / CTA'],
  },
  {
    category: 'Event Driven',
    strategies: ['Merger Arbitrage', 'Distressed Assets'],
  },
  {
    category: 'Relative Value',
    strategies: ['Equity Market Neutral', 'Fixed Income Arbitrage', 'Convertible Arbitrage'],
  },
]

// Folie 11 — verwaltetes Hedgefonds-Vermögen (nur beschriftete Datenlabels, Mrd. USD)
export const hedgeFundAum = [
  { period: '2000', value: 263 },
  { period: '2002', value: 455 },
  { period: '2004', value: 1186 },
  { period: '2006', value: 1696 },
  { period: '2008', value: 1450 },
  { period: '2010', value: 1403 },
  { period: '2012', value: 1482 },
  { period: '2014', value: 2025 },
  { period: '2016', value: 2367 },
  { period: '2018', value: 2878 },
  { period: '2020', value: 3826 },
  { period: '2022', value: 4844 },
  { period: '2024', value: 5224 },
  { period: 'Q2 2025', value: 5529 },
] // Quelle: Statista. Übrige Jahre nur als Balken (kein Datenlabel).
```

```js
// Folie 34 — Rohstoff-Klassifizierung (Quelle: Grüner / Gutknecht 2022)
export const commodityClassification = [
  { main: 'Hard Commodities', sub: 'Energie', leaf: null, examples: ['Öl', 'Kohle', 'Gas'] },
  { main: 'Hard Commodities', sub: 'Metalle', leaf: 'Industrie', examples: ['Aluminium', 'Zink', 'Kupfer', 'Blei', 'Nickel'] },
  { main: 'Hard Commodities', sub: 'Metalle', leaf: 'Edelmetall', examples: ['Gold', 'Silber', 'Iridium', 'Palladium', 'Platin', 'Rhodium'] },
  { main: 'Soft Commodities', sub: 'Viehwirtschaft', leaf: null, examples: ['Mastrind', 'Lebendrind', 'Schweine'] },
  { main: 'Soft Commodities', sub: 'Landwirtschaft', leaf: 'Softs', examples: ['Kaffee', 'Kakao', 'Wolle', 'Zucker', 'Seide', 'Holz'] },
  { main: 'Soft Commodities', sub: 'Landwirtschaft', leaf: 'Korn/Saat', examples: ['Weizen', 'Gerste', 'Mais', 'Hafer', 'Reis', 'Soja'] },
]

// Folie 45 — Bitcoin-Korrelationsmatrix (visuell verifiziert; Quelle: Grüner / Gutknecht 2022, S. 297)
export const bitcoinCorrelation = {
  labels: ['Bitcoin', 'Aktien', 'Anleihen', 'Immobilien', 'Gold'],
  matrix: [
    [1.00, null, null, null, null],
    [0.22, 1.00, null, null, null],
    [0.02, -0.10, 1.00, null, null],
    [0.16, 0.75, 0.11, 1.00, null],
    [0.12, 0.14, 0.37, 0.18, 1.00],
  ],
  highlightColumn: 0, // Bitcoin-Spalte ist auf der Folie orange umrandet
}
```

Diese Daten sollten Komponenten steuern (Diagramme, Tabellen, Bäume), damit spätere Features wie Quiz, Suche und Tooltips möglich bleiben. Visuell abgelesene Werte (z. B. Volatilitätshöhen, Verlaufskurven ohne Achsenwerte) nicht als exakte Datenpunkte hinterlegen, sondern als qualitative Skizze bzw. mit "ca."-Kennzeichnung.
