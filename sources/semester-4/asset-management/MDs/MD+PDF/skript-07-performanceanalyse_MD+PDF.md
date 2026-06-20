# skript-07-performanceanalyse_MD+PDF - Performanceanalyse: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-07-performanceanalyse.md` um die bei der Extraktion aus `skript-07-performanceanalyse.pdf` verloren gegangenen visuellen Inhalte (Diagramme, Formeln, Tabellen, Schaubilder). Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Baumdiagramme, Formelblöcke, Datentabellen, Cashflow-Skizzen oder Bildaussagen verloren gehen. Sie ersetzt nicht den Fließtext der MD, sondern rekonstruiert das, was die Extraktion zerbrochen oder weggelassen hat.

**Quelle:** `skript-07-performanceanalyse.pdf` mit 28 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, grauer Kopfbereich, Folientitel-Zeile, Folien-Footer (z. B. „Asset Management / CS / Folie 231") und Copyright-Zeile sind keine fachlichen Inhalte. Sie können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** Mehrere Folien dieses Skripts (Finanzcontrolling-Organigramm, Performancemaß-Bäume, alle Berechnungstabellen und Formeln) sind durch die PDF-Konvertierung als zerbrochene Tabellen- oder Zeichenfragmente dargestellt. Diese Inhalte in React als echte Tabellen, Formelblöcke, Bäume oder Diagramme neu aufbauen.
2. **Formeln mit KaTeX/LaTeX rendern:** Sharpe-, Treynor-, Jensen-Formeln und die Anpassungsformeln sind in der MD unleserlich. In React als saubere `FormulaBlock`-Komponenten (KaTeX) umsetzen, nicht als Roh-MD übernehmen.
3. **Bäume und Hierarchien erhalten:** Die Systematik der Performancemaße (Folien 6, 12) und das Finanzcontrolling (Folie 3) tragen fachliche Bedeutung über Wurzel-/Ast-/Blattbeziehungen. Diese als `ConceptTree` nachbauen, nicht als flache Liste.
4. **Beispieldaten als echte Tabellen:** Kurs-, Renditen- und Kennzahlentabellen (Folien 14, 16, 20, 21, 22, 26) sind exakte Zahlenwerte aus dem Skript. Als responsive `DataTable` (zebra-gestreift, `.table-wrap`) umsetzen.
5. **Cashflow-/Wertentwicklungsdiagramme rekonstruieren:** Die Balken- und Liniendiagramme (Folien 7, 8, 9, 15) zeigen das MWR/TWR-Beispiel bzw. die normierte Wertentwicklung. Als `CashflowBarChart` bzw. `LineChart` nachbauen.
6. **Original-Tippfehler dokumentieren, nicht stillschweigend übernehmen:** Auf mehreren Folien gibt es Beschriftungsfehler im Original (Folie 9 „TWR" statt MWR, Folie 16 „SR_A" statt SR_BM, Folie 19 „Sharpe-Ratio" statt Treynor sowie „σ_p" statt β_p). Diese Fehler sind kenntlich zu machen; fachlich korrekt ist die jeweils erläuterte Variante.
7. **Ranking-Marker und Hervorhebungen erhalten:** Orangefarbene Ranking-Kreise und gelb/blau hervorgehobene Werte (Folien 16, 22) sind fachlich tragend und sollten als `RankBadge` bzw. Highlight umgesetzt werden.
8. **Quellenhinweise erhalten:** Quellen wie `Spremann (2003)` und `Bruns/Meyer-Bullerdiek (2013)` an den jeweiligen Folien beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---|---|
| `ChapterTitleHeader` | 1 | Kapiteltitel und Quelle der Titelfolie |
| `AgendaList` | 2 | Kursagenda mit hervorgehobenem aktiven Kapitel |
| `ConceptTree` | 3, 6, 12 | Hierarchien (Finanzcontrolling, Performancemaße, risikoadjustierte Rendite) |
| `ThreeColumnCards` | 3 | Drei Säulen des Finanzcontrollings als Spalten |
| `DefinitionBlock` / `DefinitionList` | 4, 13, 19 | Definitionen mit verschachtelten Bullets |
| `BulletList` | 4 | Verschachtelte Aufzählungen (Was/Wer/Warum) |
| `FunctionList` | 5 | Vier Funktionskarten der Ziele |
| `CashflowBarChart` | 7, 8, 9 | Vermögens-/Zahlungsstromdiagramme MWR/TWR |
| `FormulaBlock` | 8, 13, 18, 19, 24 | KaTeX-Formeln (TWR, Sharpe, Anpassungen, Treynor, Jensen) |
| `ResultCallout` | 9 | IRR-Ergebnisbox |
| `ComparisonTwoColumns` | 10 | MWR vs. TWR mit gefärbter Kopf-/Fußzeile |
| `KeyTakeawayCard` | 11 | Fazit mit hervorgehobenen Schlüsselbegriffen |
| `DataTable` | 14, 16, 20, 21, 22, 26 | Kurs-, Renditen- und Kennzahlentabellen |
| `LineChart` | 15 | Normierte Wertentwicklung (3 Serien) |
| `CalculationCards` / `CalculationBlock` | 16, 21, 26 | Berechnungsblöcke mit Formeln |
| `RankBadge` | 16, 22 | Ranking-Ziffern an Kennzahlen |
| `AssessmentList` | 17, 23, 27, 28 | Bewertungslisten (Regel/Vorsicht/Nachteil/Fazit) |
| `TaskCallout` | 20 | Arbeitsauftrag-Box |
| `RankingBanner` | 22 | Rangordnungs-Banner SR/TR |
| `AlphaDiagram` | 25 | SML-α-Abstand + Regressionsstreudiagramm |
| `FazitCallout` | 28 | Abschließendes Fazit |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 7 · Performanceanalyse (Titelfolie)
### In der MD vorhanden
Zeilen 1-5: "Asset Management", "Kapitel 7", "Performanceanalyse", "V26-05-17", Footer mit Folie 231.
### Fehlende visuelle Inhalte
Reine Titelfolie. Oben links Titel "Asset Management". Mittig der Kapiteltitel "Kapitel 7 / Performanceanalyse". Eine horizontale Reihe von vier Fotos im oberen Bereich (Stilbilder: ein HBW-Logo-Schild, eine Person mit Brille, eine Gruppe junger Studierender im Freien, ein modernes Hochschulgebäude). Rechts unten Versionskennung "V26-05-17". Das HBW-Logo oben rechts ist Layout. Footer links: "Asset Management / CS / Folie 231".
### Visuelle Rekonstruktion
[Foto] [Foto] [Foto] [Foto]
Kapitel 7
Performanceanalyse
### Inhaltliche Rekonstruktion
Kein fachlicher Inhalt außer Kapitelüberschrift.
### Fachliche Aussage
Einstiegsfolie zum Kapitel 7 "Performanceanalyse".
### React-Vorschlag
Kein eigenes Bauteil nötig; Inhalt fließt in `source`/Titel des Topics ein (`ChapterTitleHeader`).

## Folie 2 - Agenda
### In der MD vorhanden
Zeilen 7-16: vollständige Agenda-Liste mit 9 Punkten ist im Text enthalten.
### Fehlende visuelle Inhalte
Nummerierte Liste 1-9. Punkt 7 "Performanceanalyse" ist als aktueller Kapitelpunkt blau und fett hervorgehoben; die übrigen Punkte stehen in schwarzer Standardschrift. Reine Aufzählung, keine Grafik. Footer "Folie 232".
### Visuelle Rekonstruktion
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
**7. Performanceanalyse**  ← aktiv (blau/fett)
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
### Inhaltliche Rekonstruktion
Siehe Liste oben. Der aktuelle Kapitelpunkt ist exakt "7. Performanceanalyse".
### Fachliche Aussage
Verortet das Kapitel "Performanceanalyse" als Punkt 7 im Gesamtkurs Asset Management.
### React-Vorschlag
`AgendaList` mit `activeIndex`-Prop zur Hervorhebung des aktuellen Kapitels.

## Folie 3 - Finanzcontrolling
### In der MD problematisch/fehlend
Zeilen 19-37: Markitdown hat das dreispaltige Organigramm/Schaubild komplett in zerbrochene Tabellenfragmente zerlegt; die Spaltenzuordnung und die Über-/Unterordnung gingen verloren. Begriffe wie "selbstgesteuertes PF", "GDV (vereinbarungsgem.)" sind verstreut.
### Fehlende visuelle Inhalte
Organigramm mit einem dunkelblauen Wurzelknoten "Finanzcontrolling" an der Spitze. Darunter drei gleichrangige Boxen mit orange hinterlegten Überschriften (orangefarbene Kopfzeile mit dunkler Schrift): "Performanceanalyse", "Risikoanalyse", "Reporting". Unter jeder Box steht eine eigene Stichpunktliste (Spaltenform). Verbindungslinien vom Wurzelknoten zu den drei Spalten. Footer "Folie 233".
### Visuelle Rekonstruktion
```
                 ┌─────────────────────┐
                 │   Finanzcontrolling │
                 └──────────┬──────────┘
        ┌─────────────┬──────┴───────┬──────────────┐
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │Performance-  │ │ Risikoanalyse│ │  Reporting   │
 │analyse       │ │              │ │              │
 └──────────────┘ └──────────────┘ └──────────────┘
   (Liste)           (Liste)          (Liste)
```
### Inhaltliche Rekonstruktion
| Performanceanalyse | Risikoanalyse | Reporting |
|---|---|---|
| Renditekontrolle und -steuerung des gesamten oder Teile des Portfolios inkl. Benchmarking | Risikokontrolle und -steuerung des gesamten Portfolios | **internes Berichtswesen:** Performanceberichte, Risikoberichte, Bestandsberichte, Spezialberichte |
| intern: selbstgesteuertes PF | Limitkontrollen | **externes Berichtswesen:** BaFin (pflichtgemäß) |
| extern: (Spezial)fonds | Derivatekontrollen | GDV (vereinbarungsgem.) |
| | Einhaltungskontrollen der Gesetze | Analysten & Presse (freiwillig) |
| | Insurance-Strategien | |
| | Asset Liability-Management | |
| | Stress Tests | |
### Fachliche Aussage
Die Performanceanalyse ist eine der drei Säulen des Finanzcontrollings (neben Risikoanalyse und Reporting) und dient der Rendite-/Erfolgskontrolle und -steuerung inkl. Benchmarking.
### React-Vorschlag
`ConceptTree` (1 Wurzel, 3 Spalten mit je eigener Bulletliste) oder `ThreeColumnCards`.

## Folie 4 - Performanceanalyse · Definition
### In der MD vorhanden
Zeilen 40-55: Definition und die Gliederung Messung Was?/Wer?/Warum? sind vollständig vorhanden.
### Fehlende visuelle Inhalte
Keine Grafik. Reine gegliederte Aufzählung mit blauen Zwischenüberschriften "Definition Performanceanalyse" und "Messung" sowie eingerückten Unterpunkten (zwei Einrückungsebenen: Quadrat-Bullets, dann Spiegelstriche, dann Punkt-Bullets). Footer "Folie 234".
### Visuelle Rekonstruktion
Definition → Messung (Was? / Wer? / Warum?) als eingerückte Bulletkette.
### Inhaltliche Rekonstruktion
- **Definition:** Die Performanceanalyse ermöglicht die Messung und leistungsorientierte Bewertung des Kapitalanlageerfolges eines (institutionellen) Investors.
- **Messung:**
  - Was? – Rendite, Risiko, risikoadjustierte Rendite
  - Wer? – Gesamte oder Teile des Portfolios (Objekt): intern = Versicherungsportfolio (Gesamtes Portfolio), extern = Spezial- und Publikumfonds (Mandate); – Portfoliomanager (Subjekt)
  - Warum? – Erfolgskontrolle, – Steuerung
### Fachliche Aussage
Definiert Performanceanalyse und systematisiert sie nach den Dimensionen Was (Messobjekte), Wer (Objekt/Subjekt) und Warum (Zweck).
### React-Vorschlag
`DefinitionBlock` + verschachtelte `BulletList`.

## Folie 5 - Performanceanalyse · Ziele
### In der MD vorhanden
Zeilen 60-68: alle vier Funktionen mit Erläuterungen vollständig vorhanden.
### Fehlende visuelle Inhalte
Keine Grafik. Blaue Überschrift "Ziele der Performanceanalyse", darunter vier fett gesetzte Funktionsüberschriften mit je einem eingerückten Erläuterungspunkt (Spiegelstrich). Footer "Folie 235".
### Visuelle Rekonstruktion
Kontrollfunktion → Steuerungsfunktion → Beurteilungs-/Anreizfunktion → Marketingfunktion (je 1 Unterpunkt).
### Inhaltliche Rekonstruktion
- **Kontrollfunktion** – Messung des Anlageerfolges in Relation zur Benchmark
- **Steuerungsfunktion** – Eingreifen in die Asset Allocation bei Fehlentwicklungen
- **Beurteilungs- und Anreizfunktion** – Bewertung und leistungsgerechte Entlohnung des Portfoliomanagers
- **Marketingfunktion** – Vergleich mit den Wettbewerbern und Kundenwerbung
### Fachliche Aussage
Performanceanalyse erfüllt vier Funktionen: Kontrolle, Steuerung, Beurteilung/Anreiz und Marketing.
### React-Vorschlag
`FunctionList` (4 Funktionskarten mit Titel + Begründung).

## Folie 6 - Performanceanalyse · Performancekennzahlen
### In der MD problematisch/fehlend
Zeilen 73-82: Markitdown hat das Baumdiagramm in lose Begriffe zerlegt ("Performancemaße", "Rendite", "Sharpe-Ratio Treynor-Ratio Jensen-Alpha", Fußnoten zu MWR/TWR). Hierarchie und Verzweigung sind verloren.
### Fehlende visuelle Inhalte
Baumdiagramm mit dunkelblauem Wurzelknoten "Performancemaße" (weiße Schrift). Zwei Äste (hellblaue Boxen): links "Rendite", rechts "risikoadjustierte Rendite". Unter "Rendite" zwei Blätter: "Geldgewichtete Rendite*" und "Zeitgewichtete Rendite**". Unter "risikoadjustierte Rendite" drei Blätter: "Sharpe-Ratio", "Treynor-Ratio", "Jensen-Alpha". Fußnoten unter den beiden Rendite-Blättern: "* money-weighted rate of return (MWR)" bzw. "*' time-weighted rate of return (TWR)". Footer "Folie 236".
### Visuelle Rekonstruktion
```
                    [Performancemaße]
              ┌────────────┴────────────┐
          [Rendite]            [risikoadjustierte Rendite]
        ┌──────┴──────┐        ┌───────┬───────┐
 [Geldgew.   [Zeitgew.   [Sharpe-  [Treynor- [Jensen-
  Rendite*]   Rendite**]  Ratio]    Ratio]    Alpha]
```
### Inhaltliche Rekonstruktion
- Rendite: Geldgewichtete Rendite* (MWR), Zeitgewichtete Rendite** (TWR)
- risikoadjustierte Rendite: Sharpe-Ratio, Treynor-Ratio, Jensen-Alpha
### Fachliche Aussage
Systematik der Performancemaße: Renditekennzahlen (MWR/TWR) versus risikoadjustierte Kennzahlen (Sharpe, Treynor, Jensen).
### React-Vorschlag
`ConceptTree` (2 Ebenen, Wurzel + 2 Zwischen- + 5 Blattknoten).

## Folie 7 - Geldgewichtete vs. Zeitgewichtete Rendite · Beispiel
### In der MD vorhanden
Zeilen 87-92: Beispieltext (100 € heute, +100% nach 1 Jahr, +300 € nachgeschossen, -50% im 2. Jahr, Endvermögen 250 €) vollständig vorhanden. Das Balkendiagramm fehlt.
### Fehlende visuelle Inhalte
Vermögens-/Balkendiagramm mit Zeitachse t (blauer Pfeil nach rechts). Drei Zeitpunkte: t=0, t=1, t=2. Bei t=0 ein kleiner heller Balken "100 €". Bei t=1 ein hoher zweigeteilter Balken bis "500 €": unterer dunkler Teil mit vertikaler Beschriftung "200 €", oberer hellerer Teil mit vertikaler Beschriftung "300 €" (200 € + 300 € = 500 €, Gesamtwert "500 €" über dem Balken). Bei t=2 ein dunkler Balken "250 €". Footer "Folie 237".
### Visuelle Rekonstruktion
```
500€ ─        ┌───┐
              │300│
              ├───┤        250€
              │200│        ┌───┐
100€  ┌─┐     │   │        │   │
──────┴─┴─────┴───┴────────┴───┴──── t
     t=0      t=1          t=2
```
### Inhaltliche Rekonstruktion
- t=0: Investition 100 €
- t=1: Wert 200 € (nach +100%) + Zuschuss 300 € → Bestand 500 €
- t=2: Endvermögen 250 € (nach -50%)
### Fachliche Aussage
Beispiel-Setup zur späteren Berechnung von zeit- und geldgewichteter Rendite anhand eines Aktieninvestments mit zwischenzeitlicher Einzahlung.
### React-Vorschlag
`CashflowBarChart` (Zeitachse mit gestapelten Balken je Zeitpunkt).

## Folie 8 - Geldgewichtete vs. Zeitgewichtete Rendite · Beispiel (TWR)
### In der MD problematisch/fehlend
Zeilen 97-106: Markitdown hat die TWR-Formel und die Periodenrenditen stark zerbrochen ("1 = 100% und 1 = −50%", "1 = 1 + 1 1 + 1 − 1 = 2 7 0,5 − 1 = 0%"). Das Diagramm mit Pfeilbeschriftung fehlt.
### Fehlende visuelle Inhalte
Folientitel-Unterzeile: "Zeitgewichtete Rendite (Time-Weighted Rate of Return, TWR)". Dasselbe Balkendiagramm wie Folie 7, jetzt mit Pfeil-Annotationen: ein hellblauer/grauer Pfeil von 100 € (t=0) schräg nach oben mit Beschriftung "+100%"; ein roter Pfeil von 500 € (t=1) hinunter auf 250 € (t=2) mit Beschriftung "-50%". Footer "Folie 238".
### Visuelle Rekonstruktion
```
500€ ┌───┐ ╲ -50%
     │300│  ╲
     │200│   ➘ 250€
100€ ┐+100%↗ ┌───┐
─────┴───────┴───┴── t
 t=0   t=1    t=2
```
### Inhaltliche Rekonstruktion
- Zeitgewichtete Rendite (Time-Weighted Rate of Return, TWR)
- tatsächliche absolute Performance: 250 € − 400 € = −150 €
- Periodenrenditen: r₁ = 100 % und r₂ = −50 %
- Zeitgewichtete Rendite: r_zeitgew. = √((1 + r₁)(1 + r₂)) − 1 = √(2 · 0,5) − 1 = 0 %
### Fachliche Aussage
Die zeitgewichtete Rendite ist die geometrische Durchschnittsrendite der Periodenrenditen; hier ergibt sich 0 % (Marktgeschehen neutral), unabhängig von Höhe/Timing der Einzahlung.
### React-Vorschlag
`FormulaBlock` für die TWR-Gleichung + annotiertes `CashflowBarChart`.

## Folie 9 - Geldgewichtete vs. Zeitgewichtete Rendite · Beispiel (MWR)
### In der MD problematisch/fehlend
Zeilen 113-126: Markitdown hat die Barwert-/IRR-Gleichung komplett zerstört ("B 1 = −100 − + = 0", ". 8R$", "→ 5 = −32,06%"). Das Cashflow-Diagramm mit Vorzeichen fehlt.
### Fehlende visuelle Inhalte
Folientitel-Unterzeile lautet auf der Folie wörtlich "Geldgewichtete Rendite (Money-Weighted Rate of Return, **TWR**)" – das Kürzel "TWR" ist ein **Fehler im Original** (gemeint ist MWR). Zahlungsstromdiagramm mit Zeitachse t und Cashflows ober-/unterhalb der Achse: bei t=0 ein heller Balken nach unten "-100 €" (Investor zahlt), bei t=1 ein heller Balken nach unten "-300 €" (Zuschuss), bei t=2 ein dunkler Balken nach oben "+250 €" (Rückfluss). Rechts oben (in Höhe von t=2) eine gelb hinterlegte Ergebnisbox "→ r_geldgw. = −32,06%". Die Barwertgleichung steht oberhalb als Zwischenpunkt. Footer "Folie 239".
### Visuelle Rekonstruktion
```
            +250€  ┌──┐
                   │  │
─────┬────────┬────┴──┴── t
 t=0 │   t=1  │     t=2
-100€└┐  -300€└──┐
                 │
        [Ergebnis: r_geldgw. = −32,06%]
```
### Inhaltliche Rekonstruktion
- Geldgewichtete Rendite (Money-Weighted Rate of Return) – auf der Folie irrtümlich mit "TWR" beschriftet, korrekt MWR.
- tatsächliche absolute Performance: 250 € − 400 € = −150 €
- Barwertgleichung: BW(r_geldgew.) = −100 − 300/(1+r_g) + 250/(1+r_g)² = 0
- Lösung: Ermittlung des internen Zinsfußes → r_geldgw. = −32,06 %
### Fachliche Aussage
Die geldgewichtete Rendite ist der interne Zinsfuß des Zahlungsstroms; durch die ungünstig getimte Großeinzahlung von 300 € ergibt sich mit −32,06 % eine deutlich schlechtere Kennzahl als die TWR (0 %).
### React-Vorschlag
`CashflowBarChart` (Cashflows mit Vorzeichen) + `ResultCallout` für das IRR-Ergebnis.

## Folie 10 - Geldgewichtete vs. Zeitgewichtete Rendite (Gegenüberstellung)
### In der MD vorhanden
Zeilen 132-147: beide Spaltentexte vorhanden, aber als zwei ineinander verschachtelte Textblöcke gemischt; die Zweispaltigkeit und die grünen Fußleisten fehlen.
### Fehlende visuelle Inhalte
Zweispaltige Gegenüberstellung. Linke Spalte mit hellblauer/grüner Kopfzeile "Geldgewichtete Rendite (MWR)", rechte Spalte mit Kopfzeile "Zeitgewichtete Rendite (TWR)". Jede Spalte hat eine grün hinterlegte Fußzeile: links "z.B. Versicherung als Investor", rechts "z.B. Portfoliomanager / Fonds". Footer "Folie 240".
### Visuelle Rekonstruktion
```
┌─ Geldgewichtete Rendite (MWR) ─┐ ┌─ Zeitgewichtete Rendite (TWR) ─┐
│  ...                           │ │  ...                           │
├────────────────────────────────┤ ├────────────────────────────────┤
│ z.B. Versicherung als Investor │ │ z.B. Portfoliomanager / Fonds  │
└────────────────────────────────┘ └────────────────────────────────┘
```
### Inhaltliche Rekonstruktion
| Geldgewichtete Rendite (MWR) | Zeitgewichtete Rendite (TWR) |
|---|---|
| Renditekennzahl, die den Anlageerfolg unter Berücksichtigung der Zeitpunkte und Höhen der zwischenzeitlichen Einlagen und Entnahmen des Investors berücksichtigt. | Renditekennzahl, die den durchschnittlichen Anlageerfolg auf Basis von Periodenrenditen bestimmt. |
| wert- oder geldgewichtete Rendite = interner Zinsfuß eines Zahlungsstroms | Berechnungsperioden in Abhängigkeit der Kapitalzu- und -abflüsse |
| IRR (Internal Rate of Return) zweckmäßig bei bewusster Beeinflussung der Kapitalzu- und -abflüsse durch den Investor | geometrische Durchschnittsrendite zweckmäßig, wenn verschiedene Portfoliomanager miteinander verglichen werden sollen |
| | Weltweit akzeptierter Standard der Performancemessung (z. B. nach den Global Investment Performance Standards GIPS) |
| **z.B. Versicherung als Investor** | **z.B. Portfoliomanager / Fonds** |
### Fachliche Aussage
MWR berücksichtigt das Investor-Timing (IRR-Logik, geeignet für Versicherungen); TWR misst nur das Marktgeschehen (geometrisch, GIPS-Standard, geeignet für PM-Vergleich).
### React-Vorschlag
`ComparisonTwoColumns` mit gefärbter Kopf- und Fußzeile je Spalte.

## Folie 11 - Geldgewichtete vs. Zeitgewichtete Rendite · Fazit
### In der MD vorhanden
Zeilen 154-163: vollständiger Fazit-Text inkl. der beiden Effekte und der Vergleichslogik (MWR<TWR / MWR>TWR) vorhanden.
### Fehlende visuelle Inhalte
Keine Grafik. Blaue Überschrift "Geldgewichtete vs. Zeitgewichtete Rendite", Zwischenüberschrift "Fazit". Mehrere Schlüsselbegriffe sind blau hervorgehoben: "zwei Effekte", "einer Kennzahl", "Timing", "Marktgeschehen", "nur das Marktgeschehen". Die beiden Effekte stehen als nummerierte Unterliste (1./2.). Footer "Folie 241".
### Visuelle Rekonstruktion
Textfolie mit Hervorhebungen, keine Skizze nötig.
### Inhaltliche Rekonstruktion
- Die geldgewichtete Rendite (MWR) drückt **zwei Effekte in einer Kennzahl** aus: 1. das (persönliche) Timing der Zahlungen, 2. das Marktgeschehen.
- Die zeitgewichtete Rendite (TWR) drückt hingegen **nur das Marktgeschehen** aus.
- Man kann daher den MWR gut mit dem TWR vergleichen.
- Im Fall MWR < TWR hat der Investor ein ungünstiges Timing seiner Inflows und Outflows vorgenommen oder hingenommen. Im Fall MWR > TWR war das Timing günstig.
### Fachliche Aussage
Der Vergleich MWR vs. TWR isoliert die Timing-Qualität des Investors: liegt MWR unter TWR, war das Ein-/Auszahlungs-Timing ungünstig.
### React-Vorschlag
`KeyTakeawayCard` mit hervorgehobenen Schlüsselbegriffen.

## Folie 12 - (risikoadjustierte) Performancekennzahlen
### In der MD problematisch/fehlend
Zeilen 168-177: Markitdown hat die Knotenbeschreibungen als gemischte Tabellenfragmente extrahiert; die Box-Struktur und Zuordnung der Beschreibungstexte zu den drei Maßen sind verloren.
### Fehlende visuelle Inhalte
Baumdiagramm: dunkelblauer Wurzelknoten "risikoadjustierte Rendite" (weiße Schrift). Drei hellblaue Kindboxen mit fettem Titel + erläuterndem Text: "Sharpe-Ratio / Überrendite zum risikolosen Zinssatz gemessen am Gesamtrisiko"; "Treynor-Ratio / Überrendite zum risikolosen Zinssatz gemessen am systematischen Risiko (Beta)"; "Jensen-Alpha / Renditeunterschied zur betaadjustierten Benchmark". Verbindungslinien von der Wurzel zu den drei Boxen. Footer "Folie 242".
### Visuelle Rekonstruktion
```
              [risikoadjustierte Rendite]
        ┌──────────────┼──────────────┐
 [Sharpe-Ratio]  [Treynor-Ratio]  [Jensen-Alpha]
 Überrendite     Überrendite       Rendite-
 zum rf am       zum rf am         unterschied zur
 Gesamtrisiko    syst. Risiko      betaadjustierten
                 (Beta)            Benchmark
```
### Inhaltliche Rekonstruktion
| Sharpe-Ratio | Treynor-Ratio | Jensen-Alpha |
|---|---|---|
| Überrendite zum risikolosen Zinssatz gemessen am Gesamtrisiko | Überrendite zum risikolosen Zinssatz gemessen am systematischen Risiko (Beta) | Renditeunterschied zur betaadjustierten Benchmark |
### Fachliche Aussage
Die drei risikoadjustierten Kennzahlen unterscheiden sich im verwendeten Risikomaß: Sharpe = Gesamtrisiko (σ), Treynor = systematisches Risiko (β), Jensen = Renditedifferenz zur betaadjustierten Benchmark.
### React-Vorschlag
`ConceptTree` (1 Wurzel + 3 beschriftete Kindknoten).

## Folie 13 - Sharpe-Ratio · Definition
### In der MD problematisch/fehlend
Zeilen 182-201: Die Sharpe-Ratio-Formel ist als zerbrochene Zeichenfolge extrahiert ("x − 5 = ' / tJ = / = / s"). Definition, Erläuterungen und Historie sind als Text vorhanden.
### Fehlende visuelle Inhalte
Hellblau hinterlegte Formelbox mittig: SR_P = (μ_P − r_f) / σ_P. Schlüsselbegriffe im ersten Definitionssatz blau hervorgehoben ("Risikoprämie", "Einheit des übernommenen Gesamtrisikos"); auch das Wort "Risikoprämie:" im Erläuterungsbullet ist blau. Footer "Folie 243".
### Visuelle Rekonstruktion
```
        μ_P − r_f
SR_P = ───────────
          σ_P
```
### Inhaltliche Rekonstruktion
- **Formel:** SR_P = (μ_P − r_f) / σ_P
- Sharpe-Ratio als Risikoprämie pro einer Einheit des übernommenen Gesamtrisikos (siehe: CML)
- Risikoprämie: erzielte Portfoliorendite μ_P abzüglich einer risikolosen Verzinsung r_f = Überschussrendite (Excess Return)
- Gesamtrisiko: Volatilität = Standardabweichung des Portfolios σ_P
- Wichtig: Alle verwendeten Größen sollten für den selben Zeitraum (z. B. annualisiert) betrachtet werden
- Verdichtung der Rendite und des Risikos zu einer Kennzahl
- 1966 entwickelt von William F. Sharpe (Nobelpreisträger 1990)
### Fachliche Aussage
Die Sharpe-Ratio misst die Überschussrendite je Einheit Gesamtrisiko (Standardabweichung) und verdichtet Rendite und Risiko in einer Kennzahl.
### React-Vorschlag
`FormulaBlock` (LaTeX/KaTeX) + `DefinitionList`.

## Folie 14 - Sharpe-Ratio · Beispiel (Daten)
### In der MD problematisch/fehlend
Zeilen 208-219: Beide Datentabellen wurden als ungetrennte Zahlenreihen extrahiert (Kurswerte und Renditen); Spalten-/Monatszuordnung muss aus der Grafik rekonstruiert werden.
### Fehlende visuelle Inhalte
Zwei blau-/weiß gestreifte Datentabellen mit blauer Kopfzeile (weiße Schrift). Tabelle 1: Kursstände an Monatsstichtagen für A, B, BM. Tabelle 2: daraus abgeleitete Monatsrenditen. Quelle: Spremann (2003). Footer "Folie 244".
### Visuelle Rekonstruktion
Zwei Tabellen (siehe inhaltliche Rekonstruktion).
### Inhaltliche Rekonstruktion
Kursentwicklung:
| Tag | 1.1. | 1.2. | 1.3. | 1.4. | 1.5. | 1.6. | 1.7. | 1.8. | 1.9. | 1.10. | 1.11. | 1.12. | 31.12. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | 40 | 41 | 39 | 42 | 44 | 40 | 38 | 38 | 41 | 37 | 38 | 45 | 50 |
| B | 80 | 80 | 81 | 79 | 80 | 82 | 81 | 82 | 83 | 84 | 83 | 84 | 88 |
| BM | 160 | 165 | 158 | 164 | 173 | 159 | 150 | 156 | 160 | 158 | 172 | 186 | 192 |

Monatsrenditen:
| Monat | J | F | M | A | M | J | J | A | S | O | N | D |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | 2,5% | -4,9% | 7,7% | 4,8% | -9,1% | -5,0% | 0,0% | 7,9% | -9,8% | 2,7% | 18,4% | 11,1% |
| B | 0,0% | 1,3% | -2,5% | 1,3% | 2,5% | -1,2% | 1,2% | 1,2% | 1,2% | -1,2% | 1,2% | 4,8% |
| BM | 3,1% | -4,2% | 3,8% | 5,5% | -8,1% | -5,7% | 4,0% | 2,6% | -1,3% | 8,9% | 8,1% | 3,2% |

Quelle: Spremann (2003)
### Fachliche Aussage
Datengrundlage zur Berechnung der Sharpe-Ratio: monatliche Kursstände und daraus abgeleitete Monatsrenditen für zwei Portfolios (A, B) und die Benchmark (BM).
### React-Vorschlag
`DataTable` (zwei Tabellen, scrollbar/zebra-gestreift, responsive `.table-wrap`).

## Folie 15 - Sharpe-Ratio · Beispiel (normierte Wertentwicklung)
### In der MD problematisch/fehlend
Zeilen 226-228: Nur der Einleitungssatz und die Quelle sind vorhanden; das Liniendiagramm fehlt vollständig.
### Fehlende visuelle Inhalte
Liniendiagramm "Wertentwicklung in €" (y-Achse 90–130, Gitterlinien) gegen "Monate" (x-Achse D, J, F, M, A, M, J, J, A, S, O, N, D). Drei Linien: A = dunkelblau mit Rauten-Markern, B = hellblau mit Quadrat-Markern, BM = rot mit Dreieck-Markern. Alle starten bei 100 (Dez). Legende unten: A / B / BM. Quelle: Spremann (2003). Footer "Folie 245".
### Visuelle Rekonstruktion
```
€ 130 ┤                                   A↗(ca.125)
  120 ┤                              BM↗(ca.120)
  110 ┤        A(110)        B≈stabil(ca.110)
  100 ┼●(Start alle 100)   ...
   90 ┤
      └D─J─F─M─A─M─J─J─A─S─O─N─D
  ◆ A   ■ B   ▲ BM
```
### Inhaltliche Rekonstruktion
- y-Achse: Wertentwicklung in €, Bereich 90–130 (visuell abgelesen)
- A: stärkste Schwankung, Tief ca. 92–95 (S), Endwert ca. 125 (visuell abgelesen)
- B: sehr ruhiger Verlauf knapp um/über 100, Endwert ca. 110 (visuell abgelesen)
- BM: mittlere Schwankung, Endwert ca. 120 (visuell abgelesen)
- Quelle: Spremann (2003)
### Fachliche Aussage
Visualisiert, dass Portfolio A am volatilsten ist, B am ruhigsten verläuft und alle drei am Ende über dem Startwert (100) liegen – Grundlage für die Risiko-/Renditebeurteilung per Sharpe-Ratio.
### React-Vorschlag
`LineChart` (3 Serien, Marker-Formen + Farben gemäß Legende).

## Folie 16 - Sharpe-Ratio · Beispiel (Berechnung + Ranking)
### In der MD problematisch/fehlend
Zeilen 235-260: Die drei Berechnungsblöcke sind als völlig zerbrochene Formelfragmente extrahiert; nur einzelne Werte (25%, 10%, 20%, 29,4%, 6,6%, 18,7%) sind erkennbar. Ranking-Marker und Box-Struktur fehlen.
### Fehlende visuelle Inhalte
Drei nebeneinanderstehende hellblaue Boxen "Portfolio A", "Portfolio B", "Benchmark" mit je gestaffelten Formeln (Jahresrendite, annualisierte Volatilität, Sharpe-Ratio). Jede Box trägt rechts unten einen orangefarbenen Kreis mit Ranking-Ziffer: A = 3, B = 1, Benchmark = 2. Orangefarbenes Label "Ranking" links unten unter der A-Box. **Hinweis Original-Tippfehler:** Die Sharpe-Formel der Benchmark-Box ist auf der Folie mit "SR_A" statt korrekt "SR_BM" beschriftet. Quelle: Spremann (2003). Footer "Folie 246".
### Visuelle Rekonstruktion
```
┌ Portfolio A ──(3)┐ ┌ Portfolio B ──(1)┐ ┌ Benchmark ──(2)┐
│ r=25% σ=29,4%    │ │ r=10% σ=6,6%     │ │ r=20% σ=18,7%  │
│ SR=0,71          │ │ SR=0,91          │ │ SR=0,86        │
└──────────────────┘ └──────────────────┘ └────────────────┘
```
### Inhaltliche Rekonstruktion
Bei risikolosem Einjahreszinssatz r_f = 4 %:
| | Portfolio A | Portfolio B | Benchmark |
|---|---|---|---|
| Jahresrendite r | 50/40 − 1 = 25% | 88/80 − 1 = 10% | 192/160 − 1 = 20% |
| σ (annualisiert) | 8,5% · √12 = 29,4% | 1,9% · √12 = 6,6% | 5,4% · √12 = 18,7% |
| Sharpe-Ratio | (25%−4%)/29,4% = **0,71** | (10%−4%)/6,6% = **0,91** | (20%−4%)/18,7% = **0,86** |
| Ranking | 3 | 1 | 2 |
(Hinweis: Benchmark-Formel auf Folie irrtümlich als "SR_A" statt "SR_BM" beschriftet.)
Quelle: Spremann (2003)
### Fachliche Aussage
Nach der Sharpe-Ratio ist Portfolio B (0,91) das beste, gefolgt von der Benchmark (0,86) und Portfolio A (0,71) – trotz höchster Rendite ist A wegen seines hohen Gesamtrisikos abgeschlagen.
### React-Vorschlag
`CalculationCards` (3 Spalten mit Formelblock + `RankBadge`).

## Folie 17 - Sharpe-Ratio (Regeln / Bewertung)
### In der MD problematisch/fehlend
Zeilen 266-281: Text weitgehend vorhanden, aber die Bedingung "Nur sinnvoll, wenn ... μ_P > r_f" ist als "1 > 1 . / 5 F" zerbrochen.
### Fehlende visuelle Inhalte
Keine Grafik. Bullet-Liste mit blau hervorgehobenen Stichworten ("Regel", "Vorsicht", "Nachteil", "Fazit"). Footer "Folie 247".
### Visuelle Rekonstruktion
Reine Bulletliste, keine Skizze.
### Inhaltliche Rekonstruktion
- **Regel:** Je höher die Sharpe-Ratio, desto besser die Performance des PM und desto mehr hat sich das Eingehen von Risiko gelohnt (Ex-post-Analyse).
- Ein guter PM erreicht Renditen, die über der CML liegen.
- Ranking zu anderen Portfolios und zur Benchmark möglich.
- Nur sinnvoll, wenn Renditen normalverteilt sind und μ_P > r_f.
- **Vorsicht:** Vergleich verschiedener Sharpe-Ratios nur aussagekräftig, wenn das Portfolios das gleiche regionale Exposure besitzt. Denn Teile der Standardabweichung (regionale Portfeuilles) können in global diversifizierten Portfolios "wegdiversifiziert" werden. (Je diversifizierter das Portfolio, desto höher die Sharpe-Ratio.)
- **Nachteil:** Maß nur für normalverteilte Risiken anwendbar, nicht aber für asymmetrische Renditen wie Optionen.
- **Fazit:** Performancemaß für die gesamte Vermögensanlage.
### Fachliche Aussage
Die Sharpe-Ratio eignet sich für das Gesamtportfolio, setzt aber Normalverteilung und vergleichbares Exposure voraus; Diversifikation erhöht sie.
### React-Vorschlag
`AssessmentList` mit Hervorhebung von Regel/Vorsicht/Nachteil/Fazit.

## Folie 18 - Exkurs: Anpassungen der Sharpe-Ratio
### In der MD problematisch/fehlend
Zeilen 287-316: Alle drei angepassten Formeln sind als unleserliche Fragmente extrahiert ("s − <;Y 0, t C", "s + <@8 0, í − 3 D" usw.).
### Fehlende visuelle Inhalte
Blaue Überschrift "Exkurs: Anpassungen der Sharpe-Ratio". Einleitungssatz mit blau hervorgehobenem "nicht-normalverteilten Renditen". Drei hellblau hinterlegte Formelboxen, jeweils mit einer fett gesetzten Fallbeschriftung links: "bei negativer Schiefe", "bei Fat Tails", "bei negativer Schiefe und Fat Tails". Der Nenner enthält Korrekturterme mit min/max, Exponenten 1/3 bzw. 1/4, Schiefe S und Wölbung W. Footer "Folie 248".
### Visuelle Rekonstruktion
```
neg. Schiefe:        (μ_P − r_f) / [ σ_P − (min(0,S))^(1/3) ]
Fat Tails:           (μ_P − r_f) / [ σ_P + (max(0,W−3))^(1/4) ]
neg. Schiefe+FatT.:  (μ_P − r_f) / [ σ_P − (min(0,S))^(1/3) + (max(0,W−3))^(1/4) ]
```
### Inhaltliche Rekonstruktion
Bei nicht-normalverteilten Renditen wird eine Anpassung der Sharpe-Ratio notwendig:
- bei negativer Schiefe: SR_P = (μ_P − r_f) / ( σ_P − (min(0, S))^(1/3) )
- bei Fat Tails: SR_P = (μ_P − r_f) / ( σ_P + (max(0, W − 3))^(1/4) )
- bei negativer Schiefe und Fat Tails: SR_P = (μ_P − r_f) / ( σ_P − (min(0, S))^(1/3) + (max(0, W − 3))^(1/4) )
(S = Schiefe, W = Wölbung/Kurtosis; Exponent 1/3 bzw. 1/4 bezieht sich auf den jeweiligen min/max-Klammerausdruck)
### Fachliche Aussage
Für nicht-normalverteilte Renditen wird der Risikonenner der Sharpe-Ratio um Schiefe- (S) und Fat-Tail-/Kurtosis-Korrekturterme (W) erweitert.
### React-Vorschlag
`FormulaBlock` (3 KaTeX-Formeln mit Fall-Labels).

## Folie 19 - Treynor-Ratio · Definition
### In der MD problematisch/fehlend
Zeilen 322-338: Treynor-Formel als Fragment ("x − 5 / ! ' / "J = / ! / ê / !"); Begleittext vorhanden.
### Fehlende visuelle Inhalte
Hellblau hinterlegte Formelbox mittig: TR_p = (μ_p − r_f) / β_p. Im Definitionssatz sind "Risikoprämie" und "Einheit des übernommenen systematischen Risikos" blau hervorgehoben; davon ist das Wort "systematischen" zusätzlich unterstrichen. Footer "Folie 249".
### Visuelle Rekonstruktion
```
        μ_p − r_f
TR_p = ───────────
          β_p
```
### Inhaltliche Rekonstruktion
- **Formel:** TR_p = (μ_p − r_f) / β_p
- "Sharpe-Ratio als Risikoprämie pro einer Einheit des übernommenen **systematischen** Risikos (siehe: CML)" – der Folientext schreibt hier "Sharpe-Ratio", gemeint ist die Treynor-Ratio (Folien-Copy-Fehler).
- Risikoprämie: erzielte Portfoliorendite μ_p abzüglich einer risikolosen Verzinsung r_f = Überschussrendite (Excess Return)
- Systematisches Risiko: Betafaktor des Portfolios – auf der Folie irrtümlich als "σ_p" beschriftet, gemeint ist β_p.
- Verdichtung der Rendite und des Risikos zu einer Kennzahl
- 1965 entwickelt von Jack L. Treynor
### Fachliche Aussage
Die Treynor-Ratio misst die Überschussrendite je Einheit systematischen Risikos (Beta) statt – wie Sharpe – je Einheit Gesamtrisiko.
### React-Vorschlag
`FormulaBlock` + `DefinitionList`.

## Folie 20 - Treynor-Ratio · Beispiel (Aufgabe)
### In der MD problematisch/fehlend
Zeilen 345-351: Aufgabentext vorhanden; BEIDE Datentabellen und die blaue Aufgabenbox fehlen.
### Fehlende visuelle Inhalte
Die Folie enthält ZWEI Tabellen (im Entwurf war nur die rechte erfasst):
1. Links eine 10-zeilige Renditetabelle mit blauer Kopfzeile "A | B | Index 1" und Periodenzeilen 1–10 (zebra-gestreift). Einleitung darüber: "Aus den Renditen wurden bere[its] folgende Daten ermittelt".
2. Rechts oben eine vierzeilige Kennzahlentabelle (Spalten A, B, Index 1) mit blauer Kopfzeile.
Darunter rechts eine blaue Box mit Arbeitsauftrag: "Beurteilen Sie die Performance nach der Treynor-Ratio". Quelle: Bruns/Meyer-Bullerdiek (2013). Footer "Folie 250".
### Visuelle Rekonstruktion
```
Renditen (links):           Kennzahlen (rechts):
   │  A    │  B    │Ind1│        │  A   │  B   │Index1│
 1 │10,0%  │ 9,0%  │8,0%│  mR    │4,50% │4,30% │4,00% │
 2 │ 8,0%  │ 9,0%  │6,1%│  σ     │8,28% │8,54% │6,15% │
 …  …       …       …    Korr.   │0,9496│0,7144│1,0000│
10 │-3,0%  │ 7,0%  │-4,0%   Beta │1,2772│0,9911│1,0000│
                          [Beurteilen Sie die Performance
                           nach der Treynor-Ratio]
```
### Inhaltliche Rekonstruktion
Der risikolose Zinssatz r_f beträgt 3 %.

Renditetabelle (links):
| Periode | A | B | Index 1 |
|---|---|---|---|
| 1 | 10,0% | 9,0% | 8,0% |
| 2 | 8,0% | 9,0% | 6,1% |
| 3 | -3,0% | -9,0% | -1,0% |
| 4 | 5,0% | 1,0% | 1,9% |
| 5 | -5,0% | 2,0% | -2,0% |
| 6 | -4,0% | -8,0% | -1,0% |
| 7 | 7,0% | 4,0% | 10,0% |
| 8 | 21,0% | 20,0% | 15,0% |
| 9 | 9,0% | 8,0% | 7,0% |
| 10 | -3,0% | 7,0% | -4,0% |

Aus den Renditen ermittelte Kennzahlen (rechts):
| Kennzahl | A | B | Index 1 |
|---|---|---|---|
| mittlere Rendite | 4,50% | 4,30% | 4,00% |
| Standardabweichung | 8,28% | 8,54% | 6,15% |
| Korrelationskoeffizient | 0,9496 | 0,7144 | 1,0000 |
| Betafaktor | 1,2772 | 0,9911 | 1,0000 |
Quelle: Bruns/Meyer-Bullerdiek (2013)
### Fachliche Aussage
Aufgabenstellung mit Rohdaten (10 Periodenrenditen für A, B, Index 1) und daraus ermittelten Kennzahlen (Rendite, σ, Korrelation, Beta) als Grundlage der Treynor-Berechnung.
### React-Vorschlag
`DataTable` (zwei Tabellen) + `TaskCallout` (Arbeitsauftrag).

## Folie 21 - Treynor-Ratio · Beispiel (Lösung)
### In der MD problematisch/fehlend
Zeilen 357-385: Die drei Treynor-Berechnungen sind stark zerbrochen ("D,N%:C% / v -,/ww/", Ergebnisse 0,0117 / 0,0131 / 0,01). Tabelle fehlt.
### Fehlende visuelle Inhalte
Links drei gestaffelte Formelzeilen (TR für A, B, Benchmark, jeweils als Bruch dargestellt). Rechts oben dieselbe vierzeilige Kennzahlentabelle wie Folie 20 (A, B, Index 1). Quelle: Bruns/Meyer-Bullerdiek (2013). Footer "Folie 251". (Die 10-zeilige Renditetabelle ist hier NICHT mehr abgebildet.)
### Visuelle Rekonstruktion
```
TR_A = (4,5%−3%)/1,2772 = 0,0117
TR_B = (4,3%−3%)/0,9911 = 0,0131
TR_BM= (4,0%−3%)/1,0    = 0,01
```
### Inhaltliche Rekonstruktion
Risikoloser Zinssatz r_f = 3 %.
- TR_A = (μ_A − r_f)/β_A = (4,5% − 3%)/1,2772 = 0,0117
- TR_B = (μ_B − r_f)/β_B = (4,3% − 3%)/0,9911 = 0,0131
- TR_BM = (μ_BM − r_f)/β_BM = (4,0% − 3%)/1,0 = 0,01
- Ergebnis: Portfolio A und B haben – bezogen auf das systematische Risiko – besser performt als die Benchmark. Portfolio B schlägt A.
Quelle: Bruns/Meyer-Bullerdiek (2013)
### Fachliche Aussage
Nach der Treynor-Ratio liegt B (0,0131) vor A (0,0117), beide über der Benchmark (0,01) – beide schlagen die Benchmark bezogen auf das systematische Risiko.
### React-Vorschlag
`CalculationBlock` (3 Formelzeilen) + `DataTable`.

## Folie 22 - Treynor-Ratio vs. Sharpe-Ratio
### In der MD problematisch/fehlend
Zeilen 390-405: Das Rangordnungs-Schaubild ist völlig zerbrochen ("1 3 2", "SR >SR >SR aber TR >TR >TR / A BM B / B A BM"). Tabelle und Sharpe/Treynor-Zeilen fehlen.
### Fehlende visuelle Inhalte
Oben dieselbe Kennzahlentabelle (A, B, Index 1) – erweitert um zwei zusätzliche Zeilen "Sharpe-Ratio" und "Treynor-Ratio" mit gelb hervorgehobenen Werten. Neben den einzelnen Sharpe- und Treynor-Werten stehen kleine orangefarbene Ranking-Kreise (1/2/3). Darunter ein dunkelblauer Banner mit der Rangordnungs-Aussage und farbig markierten Ziffern. Quelle: Bruns/Meyer-Bullerdiek (2013). Footer "Folie 252". (Die Werte sind klar gedruckt – NICHT visuell geschätzt.)
### Visuelle Rekonstruktion
```
... (Kennzahlen wie Folie 20) ...
Sharpe-Ratio   A 18,12%①  B 15,23%③  Index 16,25%②
Treynor-Ratio  A 1,17%②   B 1,31%①   Index 1,00%③
┌──────────────────────────────────────────────────┐
│  SR_A > SR_BM > SR_B   aber   TR_B > TR_A > TR_BM  │
└──────────────────────────────────────────────────┘
```
### Inhaltliche Rekonstruktion
Risikoloser Zinssatz r_f = 3 %.
| Kennzahl | A | B | Index 1 |
|---|---|---|---|
| mittlere Rendite | 4,50% | 4,30% | 4,00% |
| Standardabweichung | 8,28% | 8,54% | 6,15% |
| Korrelationskoeffizient | 0,9496 | 0,7144 | 1,0000 |
| Betafaktor | 1,2772 | 0,9911 | 1,0000 |
| Sharpe-Ratio | 18,12% (Rang 1) | 15,23% (Rang 3) | 16,25% (Rang 2) |
| Treynor-Ratio | 1,17% (Rang 2) | 1,31% (Rang 1) | 1,00% (Rang 3) |
Rangordnung: SR_A > SR_BM > SR_B, aber TR_B > TR_A > TR_BM
- Bezogen auf das Gesamtrisiko weist Portfolio A eine höhere Performance als B auf.
- B hat gegenüber der Benchmark sogar underperformt.
- B ist nicht so gut diversifiziert wie A und hat ein höheres unsystematisches Risiko.
### Fachliche Aussage
Sharpe- und Treynor-Ranking widersprechen sich: A ist nach Gesamtrisiko (Sharpe) besser (Rang 1), B nach systematischem Risiko (Treynor) (Rang 1) – Ursache ist Bs schlechtere Diversifikation/höheres unsystematisches Risiko.
### React-Vorschlag
`DataTable` (mit hervorgehobenen Ergebniszeilen + `RankBadge` je Wert) + `RankingBanner`.

## Folie 23 - Treynor-Ratio · Bewertung
### In der MD vorhanden
Zeilen 411-422: Bewertung und Fazit vollständig vorhanden.
### Fehlende visuelle Inhalte
Keine Grafik; Bulletliste mit blauer Überschrift "Treynor-Ratio" sowie Zwischenüberschriften "Bewertung" (schwarz/fett) und "Fazit" (blau). Footer "Folie 253".
### Visuelle Rekonstruktion
Reine Bulletliste.
### Inhaltliche Rekonstruktion
**Bewertung:**
- relatives Performancemaß
- Benchmark wird zur Ermittlung des Betafaktors benötigt
- Kritik an Beta betrifft auch Treynor-Ratio: Die Auswahl des Marktportfolios hat erheblichen Einfluss auf den Beta-Faktor
- Ranking zu anderen Portfolios und zur Benchmark möglich
- Falls Portfolio gut diversifiziert, gleiches Ranking wie bei Sharpe-Ratio
- erhöhter Daten- bzw. Schätzaufwand (erzielte Jahresrendite, historische Volatilität des PF/BM sowie Korrelation/Beta zwischen PF und BM)
- keine Berücksichtigung des unsystematischen Risikos des Portfolios

**Fazit:** Performancemaß für diversifizierte Teilportfolios mit ex-ante Benchmark.
### Fachliche Aussage
Treynor ist ein relatives, benchmark-/betaabhängiges Maß für gut diversifizierte Teilportfolios; das unsystematische Risiko bleibt unberücksichtigt.
### React-Vorschlag
`AssessmentList` mit Bewertung + Fazit.

## Folie 24 - Jensen-Alpha · Definition
### In der MD problematisch/fehlend
Zeilen 428-445: Beide Alpha-Formeln sind als unleserliche Fragmente extrahiert ("Ç = 5 − 5 − 5 − 5 0 ê"); die Bracket-Beschriftungen "Gemessene/Erwartete Überrendite" sind verstreut.
### Fehlende visuelle Inhalte
Zwei hellblau hinterlegte Formelboxen. Links kurze Form: α_P = r_P − r_P(CAPM), gefolgt von "bzw." (außerhalb der Box). Rechts ausführliche Form: α_P = (r_P − r_f) − (r_BM − r_f) · β_P, mit zwei geschweiften Unterklammern: erste Klammer (r_P − r_f) = "Gemessene Überrendite", zweite Klammer (r_BM − r_f)·β_P = "Erwartete Überrendite". Im ersten Bullet ist "absolutes Performancemaß" blau hervorgehoben, "Leistung des Portfoliomanagers" fett. Footer "Folie 254".
### Visuelle Rekonstruktion
```
α_P = r_P − r_P(CAPM)   bzw.   α_P = (r_P − r_f) − (r_BM − r_f)·β_P
                                     └─Gemessene──┘ └──Erwartete──┘
                                       Überrendite     Überrendite
```
### Inhaltliche Rekonstruktion
- **Formel:** α_P = r_P − r_P(CAPM) bzw. α_P = (r_P − r_f) − (r_BM − r_f) · β_P
  - (r_P − r_f) = Gemessene Überrendite; (r_BM − r_f) · β_P = Erwartete Überrendite
- Jensen-Alpha als absolutes Performancemaß für den Renditeunterschied des Portfolios P zur Benchmark BM unter Beachtung des Betas β des Portfolios.
- Differenz aus erzielter Portfoliorendite r_P und erwarteter Rendite r_P(CAPM) nach CAPM gibt die Leistung des Portfoliomanagers (PM) wieder.
- Maß für den Teil der Gesamtrendite, der nicht mit der Benchmark korreliert ist → Maß zur Bestimmung der Wertpapierselektionsfähigkeit des PM.
- Regel: Je höher das Jensen-Alpha, desto besser die Performance des PM.
- 1968 entwickelt von Michael C. Jensen.
### Fachliche Aussage
Das Jensen-Alpha ist die absolute Über-/Unterrendite gegenüber der CAPM-erwarteten Rendite und misst die Selektionsfähigkeit des Portfoliomanagers.
### React-Vorschlag
`FormulaBlock` mit annotierten Klammern (gemessene/erwartete Überrendite).

## Folie 25 - Jensen-Alpha · Schematische Darstellung
### In der MD problematisch/fehlend
Zeilen 451-457: Nur ein Satz und eine zerbrochene Formelzeile vorhanden ("5 = 5 + Ç + 5 − 5 0 ê / 5 = Çì + ê 0 5 + w"). Beide Diagramme fehlen vollständig.
### Fehlende visuelle Inhalte
Blaue Überschrift "Jensen-Alpha", Einleitungssatz, Zwischenüberschrift "Schematische Darstellung". Über den Diagrammen stehen zwei Formelzeilen (links Geradengleichung r_P = r_f + α_P + (r_BM − r_f)·β_P, rechts Regressionsform r_P = α̂_P + β̂_P · r_BM + ε_P).
Darunter zwei nebeneinanderliegende Diagramme:
Links: SML-/Geraden-Diagramm "Rendite" (y) gegen "β" (x). Eine ansteigende blaue Wertpapierlinie ab dem y-Achsenabschnitt i (≈ r_f). Ein roter Punkt r_P(CAPM) auf der Linie bei β_P; der tatsächliche r_P liegt darüber, vertikaler Abstand = α. Beschriftungen: "α > 0 Outperformance" (oberhalb), "α < 0 Underperformance" (unterhalb).
Rechts: Streudiagramm r_P (y) gegen r_BM (x) mit Punktwolke "beobachtete Renditepaare", eingezeichneter "Regressionsgerade" und dem y-Achsenabschnitt α (unten links als α markiert). Footer "Folie 255".
### Visuelle Rekonstruktion
```
Links (SML):              Rechts (Regression):
r_P│        ·r_P          r_P│      .··'
   │      ↑α  /              │   .·'·  ·  ← Regressionsgerade
   │  α>0 ●r_P(CAPM)         │ .·'·· ·   (beobachtete Paare)
   │     /  α<0              │·  ·
 i ┤    /                  α─┤'
   └──────────── β            └────────── r_BM
        β_P
```
### Inhaltliche Rekonstruktion
- Alpha ist die Überschussrendite eines Assets verglichen mit der Rendite, die den Anleger für das systematische Risiko entschädigt.
- Geradengleichung: r_P = r_f + α_P + (r_BM − r_f) · β_P
- Regressionsform: r_P = α̂_P + β̂_P · r_BM + ε_P
- α > 0 → Outperformance (Punkt über der Linie); α < 0 → Underperformance (Punkt unter der Linie)
### Fachliche Aussage
Grafisch ist das Jensen-Alpha der vertikale Abstand der tatsächlichen Portfoliorendite zur CAPM-/SML-Linie bzw. der Achsenabschnitt der Regression von r_P auf r_BM.
### React-Vorschlag
`AlphaDiagram` (SML mit α-Abstand + Regressionsstreudiagramm, 2 nebeneinander).

## Folie 26 - Jensen-Alpha · Beispiel (Lösung)
### In der MD problematisch/fehlend
Zeilen 463-480: Beide Alpha-Berechnungen sind als Fragmente extrahiert ("Ç = 4,5% − 3% − 4% − 3% 0 1,2772 = ~, áá%"); Ergebnisse 0,22% und 0,31% (in MD verzerrt). Tabelle fehlt.
### Fehlende visuelle Inhalte
Blaue Überschrift "Jensen-Alpha", "Beispiel"; Aufgabentext: "Aus den Renditen der PF A und B wurden bereits folgende Daten ermittelt". Links zwei Alpha-Formelzeilen (für A und B) mit Unterklammern "Gemessene Überrendite" / "Erwartete Überrendite". Rechts oben dieselbe vierzeilige Kennzahlentabelle wie Folie 20 (A, B, Index 1). Im Ergebnissatz ist "systematische" blau hervorgehoben. Quelle: Bruns/Meyer-Bullerdiek (2013). Footer "Folie 256".
### Visuelle Rekonstruktion
```
α_A = (4,5%−3%) − (4%−3%)·1,2772 = 0,22%
α_B = (4,3%−3%) − (4%−3%)·0,9911 = 0,31%
```
### Inhaltliche Rekonstruktion
Risikoloser Zinssatz r_f = 3 %.
- α_A = (r_A − r_f) − (r_BM − r_f) · β_A = (4,5% − 3%) − (4% − 3%) · 1,2772 = **0,22%**
- α_B = (r_B − r_f) − (r_BM − r_f) · β_B = (4,3% − 3%) − (4% − 3%) · 0,9911 = **0,31%**
- (erste Klammer = Gemessene Überrendite, zweite = Erwartete Überrendite)
- Ergebnis: Portfolio A und B haben – bezogen auf das systematische Risiko – besser performt als die Benchmark.
Quelle: Bruns/Meyer-Bullerdiek (2013)
(Kennzahlentabelle wie Folie 20: mittlere Rendite 4,50%/4,30%/4,00%, σ 8,28%/8,54%/6,15%, Korrelation 0,9496/0,7144/1,0000, Beta 1,2772/0,9911/1,0000)
### Fachliche Aussage
Beide Portfolios haben ein positives Jensen-Alpha (A 0,22 %, B 0,31 %) und schlagen damit die CAPM-Erwartung; B weist das höhere Alpha auf.
### React-Vorschlag
`CalculationBlock` (2 Alpha-Zeilen) + `DataTable`.

## Folie 27 - Jensen-Alpha · Bewertung (1)
### In der MD vorhanden
Zeilen 486-495: Bewertungspunkte vollständig vorhanden.
### Fehlende visuelle Inhalte
Keine Grafik; Bulletliste mit blauer Überschrift "Jensen-Alpha" und schwarzer/fetter Zwischenüberschrift "Bewertung". Footer "Folie 257".
### Visuelle Rekonstruktion
Reine Bulletliste.
### Inhaltliche Rekonstruktion
**Bewertung:**
- absolutes Performancemaß (keine Relation der Überrendite zum Risiko).
- Benchmark zur Ermittlung des Betafaktors und zum direkten Vergleich.
- hohe Ergebnis-Sensitivität zur gewählten Benchmark.
- Ranking zu anderen Portfolios und zur Benchmark problematisch.
- erhöhter Daten- bzw. Schätzaufwand (erzielte Jahresrendite, historische Volatilität des PF/BM sowie Korrelation/Beta zwischen PF und BM).
- Beurteilung der Wertpapierselektionsfähigkeit des PM nur eingeschränkt
- Keine Diskriminierung zwischen einem großen, aber variablen Alpha und einem kleineren, aber weniger variablen Alpha.
### Fachliche Aussage
Jensen-Alpha ist ein absolutes, stark benchmarkabhängiges Maß; ein Ranking ist problematisch, weil das Risiko zur Alpha-Erzielung nicht berücksichtigt wird.
### React-Vorschlag
`AssessmentList`.

## Folie 28 - Jensen-Alpha · Bewertung (2) + Fazit
### In der MD vorhanden
Zeilen 501-512: weitere Bewertungspunkte und Fazit vollständig vorhanden.
### Fehlende visuelle Inhalte
Keine Grafik; Bulletliste mit blauer Überschrift "Jensen-Alpha", schwarzer/fetter Zwischenüberschrift "Bewertung" und Zwischenüberschrift "Fazit". Footer "Folie 258".
### Visuelle Rekonstruktion
Reine Bulletliste.
### Inhaltliche Rekonstruktion
**Bewertung:**
- Bei signifikant positivem α kann auf die überlegenen Fähigkeiten des Portfoliomanagers geschlossen werden.
- Vergleich des Alphas unterschiedlicher Portfolios problematisch, da nur Renditen verglichen werden. Für den Investor ist jedoch relevant, wie viel Risiko für die Erzielung des Alphas zusätzlich in Kauf genommen wurde.
- Das Jensen-Alpha erlaubt im Gegensatz zu Sharpe- und Treynor-Ratio kein einwandfreies Ranking der Portfolios, da sie unterschiedliche Risiken aufweisen können.

**Fazit:** Absolutes Maß für Out-/Underperformance eines PF gegenüber Benchmark.
### Fachliche Aussage
Ein signifikant positives Alpha belegt PM-Können, taugt aber – anders als Sharpe/Treynor – nicht für ein sauberes Ranking, da das eingegangene Risiko unberücksichtigt bleibt.
### React-Vorschlag
`AssessmentList` mit abschließendem `FazitCallout`.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 3: Finanzcontrolling-Organigramm (Wurzel + 3 Spalten)
2. Folie 6: Baum der Performancemaße (Rendite vs. risikoadjustierte Rendite)
3. Folien 7-9: Cashflow-/Vermögensdiagramme zum MWR/TWR-Beispiel inkl. IRR-Ergebnisbox
4. Folie 12: Baum der risikoadjustierten Rendite (Sharpe/Treynor/Jensen)
5. Folien 13, 18, 19, 24: alle Formeln (Sharpe, Anpassungen, Treynor, Jensen) sauber per KaTeX
6. Folien 14, 16, 20, 21, 22, 26: alle Daten- und Kennzahlentabellen als echte Tabellen
7. Folie 15: Liniendiagramm der normierten Wertentwicklung (3 Serien)
8. Folie 16 und 22: Ranking-Marker (RankBadge) und Rangordnungs-Banner
9. Folie 25: Jensen-Alpha-Schaubild (SML mit α-Abstand + Regressionsstreudiagramm)

## Kann vereinfacht werden

- Folie 2: Agenda als Liste mit hervorgehobenem aktiven Kapitel
- Folien 4, 5, 11: gegliederte Bullet-/Funktionslisten ohne eigene Grafik
- Folien 10: zweispaltige Gegenüberstellung MWR vs. TWR als Cards
- Folien 17, 23, 27, 28: reine Bewertungs-Bulletlisten als `AssessmentList`

## Nicht fachlich relevant

- HBW-Logo
- grauer Kopf-/Footerbereich und Folien-Footer (z. B. „Folie 231–258")
- Copyright-Zeile „© 2026 – Hochschule der Bayerischen Wirtschaft"
- Versionskennung „V26-05-17"
- dekorative Titelfotos (Folie 1) ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur tatsächlich im Skript vorhandene Inhalte):

```js
// Sharpe-Ratio-Beispiel (Folien 14, 16) – Quelle: Spremann (2003)
export const sharpeExample = {
  riskFree: 0.04, // 4 %
  prices: {
    days: ['1.1.', '1.2.', '1.3.', '1.4.', '1.5.', '1.6.', '1.7.', '1.8.', '1.9.', '1.10.', '1.11.', '1.12.', '31.12.'],
    A:  [40, 41, 39, 42, 44, 40, 38, 38, 41, 37, 38, 45, 50],
    B:  [80, 80, 81, 79, 80, 82, 81, 82, 83, 84, 83, 84, 88],
    BM: [160, 165, 158, 164, 173, 159, 150, 156, 160, 158, 172, 186, 192],
  },
  monthlyReturns: {
    months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    A:  ['2,5%', '-4,9%', '7,7%', '4,8%', '-9,1%', '-5,0%', '0,0%', '7,9%', '-9,8%', '2,7%', '18,4%', '11,1%'],
    B:  ['0,0%', '1,3%', '-2,5%', '1,3%', '2,5%', '-1,2%', '1,2%', '1,2%', '1,2%', '-1,2%', '1,2%', '4,8%'],
    BM: ['3,1%', '-4,2%', '3,8%', '5,5%', '-8,1%', '-5,7%', '4,0%', '2,6%', '-1,3%', '8,9%', '8,1%', '3,2%'],
  },
  results: [
    { name: 'Portfolio A', r: '25%', sigma: '29,4%', sharpe: 0.71, rank: 3 },
    { name: 'Portfolio B', r: '10%', sigma: '6,6%',  sharpe: 0.91, rank: 1 },
    { name: 'Benchmark',   r: '20%', sigma: '18,7%', sharpe: 0.86, rank: 2 },
  ],
};

// Treynor-/Jensen-Beispiel (Folien 20-22, 26) – Quelle: Bruns/Meyer-Bullerdiek (2013)
export const treynorJensenExample = {
  riskFree: 0.03, // 3 %
  returns: [ // Periodenrenditen 1-10 für A, B, Index 1
    { period: 1,  A: '10,0%', B: '9,0%',  index1: '8,0%' },
    { period: 2,  A: '8,0%',  B: '9,0%',  index1: '6,1%' },
    { period: 3,  A: '-3,0%', B: '-9,0%', index1: '-1,0%' },
    { period: 4,  A: '5,0%',  B: '1,0%',  index1: '1,9%' },
    { period: 5,  A: '-5,0%', B: '2,0%',  index1: '-2,0%' },
    { period: 6,  A: '-4,0%', B: '-8,0%', index1: '-1,0%' },
    { period: 7,  A: '7,0%',  B: '4,0%',  index1: '10,0%' },
    { period: 8,  A: '21,0%', B: '20,0%', index1: '15,0%' },
    { period: 9,  A: '9,0%',  B: '8,0%',  index1: '7,0%' },
    { period: 10, A: '-3,0%', B: '7,0%',  index1: '-4,0%' },
  ],
  keyFigures: [
    { label: 'mittlere Rendite',        A: '4,50%',  B: '4,30%',  index1: '4,00%' },
    { label: 'Standardabweichung',      A: '8,28%',  B: '8,54%',  index1: '6,15%' },
    { label: 'Korrelationskoeffizient', A: '0,9496', B: '0,7144', index1: '1,0000' },
    { label: 'Betafaktor',              A: '1,2772', B: '0,9911', index1: '1,0000' },
  ],
  treynor: { A: 0.0117, B: 0.0131, BM: 0.01 },     // Folie 21
  jensenAlpha: { A: '0,22%', B: '0,31%' },         // Folie 26
  // Folie 22: Rangordnung SR_A > SR_BM > SR_B, aber TR_B > TR_A > TR_BM
  ranking: {
    sharpe:  { A: { value: '18,12%', rank: 1 }, B: { value: '15,23%', rank: 3 }, index1: { value: '16,25%', rank: 2 } },
    treynor: { A: { value: '1,17%',  rank: 2 }, B: { value: '1,31%',  rank: 1 }, index1: { value: '1,00%',  rank: 3 } },
  },
};
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten (Tabellen, Formelblöcke, Ranking-Badges, Diagramme) steuern, damit spätere Features wie Quiz, Suche und interaktive Beispiele möglich bleiben.
