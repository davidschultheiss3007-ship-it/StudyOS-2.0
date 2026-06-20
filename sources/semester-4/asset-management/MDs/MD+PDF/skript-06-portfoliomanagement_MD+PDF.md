# skript-06-portfoliomanagement_MD+PDF - Portfoliomanagement: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-06-portfoliomanagement.md` um jene visuellen Inhalte, die bei der Extraktion aus `skript-06-portfoliomanagement.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Zyklus-Diagramme, Baumstrukturen, Schaubilder, Tortendiagramme, Formeln und Tabellenlogiken verloren gehen.

**Quelle:** `skript-06-portfoliomanagement.pdf` mit 28 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die Kopfzeile, der Folien-Footer (z. B. „Asset Management / CS / Folie 203") und die Copyright-Zeile sind keine fachlichen Inhalte. Sie können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** Mehrere Folien (4, 7, 18, 19, 27, 28) sind durch die PDF-Konvertierung als zerbrochene Tabellen oder verschachtelte Textfragmente dargestellt. Diese Inhalte in React als echte Tabellen, Cards, Baumdiagramme oder Prozessschemata neu aufbauen.
2. **Zyklus- und Baumdiagramme semantisch nachbauen:** Der Investmentschritte-Kreislauf (Folie 4), das Renditeansatz-/Diversifikationsebenen-/Anleihen-Baumdiagramm (Folien 7, 19, 28) und das Prozess-Schaubild (Folie 27) tragen fachliche Bedeutung und dürfen nicht nur als Textabschnitt erscheinen.
3. **Schaubilder als Lernobjekte behandeln:** Magisches Dreieck (Folie 5), Diversifikationskurve (Folie 15), Tortendiagramme (Folien 18, 21) sind fachliche Kernaussagen und sollten als SVG/Chart-Komponenten umgesetzt werden.
4. **Hervorhebungen erhalten:** Blau/fett gesetzte Schlüsselbegriffe, aktive Agenda-Punkte und farblich getrennte Äste (SAA blaugrau / TAA grün) sind bedeutungstragend und in der MD verloren gegangen.
5. **Reine Textfolien strukturieren:** Folien ohne Grafik (6, 8, 9, 10, 11, 12, 14, 16, 17, 20, 22, 23, 24, 25, 26) als verschachtelte Bullet-Listen mit fetten Hauptpunkten und ggf. abschließenden Callouts umsetzen.
6. **Quellenhinweise erhalten:** Quellen wie `https://mbtarf.com/about-us/asset-allocation/` (Folie 18), `Brinson, Hood & Beebower, Financial Analysts Journal, 1986` und `Ernst / Schurer (2015), S. 62` (Folie 21) beibehalten und als `source-note` darstellen.
7. **Kapiteltrenner als Template:** Die Foto-Banner der Titelfolien (1, 3, 13) sind rein dekorativ und können in der App weggelassen werden.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---|---|
| `ChapterTitleSlide` | 1, 3, 13 | Kapitel-/Unterkapitel-Titelfolie mit Nummer und Titel |
| `AgendaList` | 2 | Nummerierte Agenda mit aktiver Hervorhebung |
| `ProcessCycleDiagram` | 4 | Vier-Schritte-Kreislauf mit Uhrzeiger-Pfeil und Highlight-Overlay |
| `MagicTriangle` | 5 | Magisches Dreieck Rendite/Sicherheit/Liquidität mit Doppelpfeilen |
| `BulletList` | 5, 6, 20, 22, 25 | Aufzählungen mit hervorgehobenen Begriffen, optional mit Callout |
| `ComparisonTree` / `TwoCardCompare` | 7 | Wurzelknoten „Renditeziel" mit zwei Definitionskarten |
| `NestedBulletList` | 8, 9, 10, 11, 12, 23, 26 | Mehrstufige Bullet-Listen mit fetten Hauptpunkten |
| `SectionedBulletList` | 14 | Mehrere Abschnitte mit eigenen Überschriften |
| `DiversificationChart` | 15 | Liniendiagramm Risiko vs. Anzahl Wertpapiere mit Asymptote |
| `QuestionAnswerBlock` | 16 | Frage-Liste a/b mit zugeordneten Antworten |
| `DefinitionCard` | 17 | Begriffskarte mit hervorgehobenem Kernbegriff |
| `PieComparison` | 18 | Zwei gegenübergestellte Tortendiagramme (einfach vs. aufwändig) |
| `HierarchyTree` | 19 | Zweistufiges Baumdiagramm SAA/TAA |
| `QuoteWithChart` | 21 | Zitatkarte links, dominantes Tortendiagramm rechts |
| `LegalQuoteBlock` | 24 | Gesetzeszitat als Callout mit hervorgehobenen Grundsätzen |
| `ProcessOverviewMatrix` | 27 | Grid-Layout Kunde/Asset Manager/Performance mit Phasenspalte |
| `BondSelectionTree` | 28 | Zweistufiges Anleihen-Baumdiagramm mit Einzeltitel-Merkmalen |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 6: Portfoliomanagement (Titelfolie)
### In der MD vorhanden
Zeilen 1-4: "Asset Management", "Kapitel 6", "Portfoliomanagement", "V26-04-23". Der Inhalt der Folie ist vollständig erfasst.
### Fehlende visuelle Inhalte
Kapiteltrenner-Layout: Oben links Titel "Asset Management"; rechts das HBW-Logo. Darunter ein horizontaler Streifen aus vier rechteckigen Fotos (Kampus-/Studierendenmotive: ein HBW-Schriftzug auf einer Glas-/Tafelfläche, ein Lese-/Brillenmotiv, eine Gruppe Studierender, ein Hochschulgebäude). Darunter eine breite hellblaue Titelbox mit "Kapitel 6 / Portfoliomanagement". Rechts unten klein die Versionskennung "V26-04-23". Fußzeile: "Asset Management / CS / Folie 203" und "© 2026 - Hochschule der Bayerischen Wirtschaft". Rein dekorativ.
### Visuelle Rekonstruktion
```
[Asset Management]                 [HBW-Logo]
[Foto][Foto][Foto][Foto]
[ Kapitel 6                       ]
[ Portfoliomanagement             ]   (V26-04-23)
```
### Inhaltliche Rekonstruktion
Kapitelnummer: 6. Kapiteltitel: Portfoliomanagement. Version: V26-04-23.
### Fachliche Aussage
Reine Kapitel-Titelfolie, die das Kapitel 6 "Portfoliomanagement" einleitet.
### React-Vorschlag
`ChapterTitleSlide` - Komponente mit Kapitelnummer, Titel und optionalem Foto-Banner; Foto-Banner kann hier weggelassen werden.

## Folie 2 - Agenda
### In der MD vorhanden
Zeilen 7-18: vollständige Agenda mit 9 Punkten inkl. Unterpunkte 6.1 Investmentprozess und 6.2 Asset Allocation. Korrekt erfasst.
### Fehlende visuelle Inhalte
Visuelle Hervorhebung: Punkt 6 "Portfoliomanagement" sowie die Unterpunkte "6.1 Investmentprozess" und "6.2 Asset Allocation" sind blau und fett gesetzt (= aktueller Kapitelschwerpunkt). Alle anderen Punkte (1-5, 7-9) sind schwarz. Diese Markierung geht in der MD verloren.
### Visuelle Rekonstruktion
```
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement            <- blau/fett (aktuell)
   6.1 Investmentprozess          <- blau/fett
   6.2 Asset Allocation           <- blau/fett
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
```
### Inhaltliche Rekonstruktion
Nummerierte Liste 1-9 wie oben. Aktiver Punkt: 6 inkl. 6.1 und 6.2.
### Fachliche Aussage
Gesamtgliederung des Moduls; das aktuelle Kapitel 6 (Portfoliomanagement) mit den Unterkapiteln Investmentprozess und Asset Allocation steht im Fokus.
### React-Vorschlag
`AgendaList` - nummerierte Liste mit aktiver Hervorhebung (Prop `activeItems`), aktive Einträge in Modul-Akzentfarbe.

## Folie 3 - Kapitel 6.1: Investmentprozess (Titelfolie)
### In der MD vorhanden
Zeilen 21-24: "Asset Management", "Kapitel 6.1", "Investmentprozess", "V26-04-23". Vollständig.
### Fehlende visuelle Inhalte
Gleiches Kapiteltrenner-Layout wie Folie 1 (Foto-Banner mit vier Bildern, HBW-Logo oben rechts, hellblaue Titelbox), hier mit "Kapitel 6.1 / Investmentprozess". Versionskennung "V26-04-23" rechts unten. Rein dekorativ.
### Visuelle Rekonstruktion
```
[Asset Management]                 [HBW-Logo]
[Foto][Foto][Foto][Foto]
[ Kapitel 6.1 ]
[ Investmentprozess ]              (V26-04-23)
```
### Inhaltliche Rekonstruktion
Unterkapitel 6.1: Investmentprozess.
### Fachliche Aussage
Einleitung des Unterkapitels 6.1 "Investmentprozess".
### React-Vorschlag
`ChapterTitleSlide` (subchapter-Variante).

## Folie 4 - Investmentprozess: Investmentschritte (Asset Allocation Prozess)
### In der MD problematisch/fehlend
Zeilen 29-39 zerbrochen: "Investmentschritte", "Asset / 2. Strategische / Allocation / Asset Allocation / Prozess / 3. / 1. Investmentziele Portfoliomanagement / i.e.S. / 4. / Finanzcontrolling". Die MD verliert die Kreis-/Zyklus-Struktur völlig.
### Fehlende visuelle Inhalte
Zyklus-Diagramm unter der blau/fetten Überschrift "Investmentschritte" (oben links). Vier hellblaue, abgerundete Kästen sind kreisförmig angeordnet, verbunden durch einen dunkelblauen Kreispfeil (im Uhrzeigersinn). Anordnung: oben "2. Strategische Asset Allocation", rechts "3. Portfoliomanagement i.e.S.", unten "4. Finanzcontrolling", links "1. Investmentziele". Der dunkelblaue Pfeil läuft erkennbar im Uhrzeigersinn (Spitze zeigt von links oben nach oben auf Schritt 2). Rechts über/hinter den Schritten 2 und 3 liegt eine große hellgrün hinterlegte Ellipse mit grüner, dreizeiliger Beschriftung "Asset Allocation Prozess"; sie umschließt visuell die Schritte 2 und 3.
### Visuelle Rekonstruktion
```
              [2. Strategische
                Asset Allocation]
                    ^   \
                   /     v
   [1. Investment-]      [3. Portfolio-
        ziele     ]       management i.e.S.]   } grüne Ellipse
                   ^     /                       "Asset Allocation
                    \   v                         Prozess" (über 2 und 3)
              [4. Finanzcontrolling]
   Kreispfeil im Uhrzeigersinn 1->2->3->4->1
```
### Inhaltliche Rekonstruktion
Die vier Investmentschritte als Kreislauf:
1. Investmentziele
2. Strategische Asset Allocation
3. Portfoliomanagement i.e.S.
4. Finanzcontrolling
Der "Asset Allocation Prozess" umfasst hier die Schritte 2 und 3.
### Fachliche Aussage
Der Investmentprozess ist ein zyklischer Vier-Schritte-Prozess; die Schritte Strategische Asset Allocation und Portfoliomanagement i.e.S. bilden den eigentlichen "Asset Allocation Prozess".
### React-Vorschlag
`ProcessCycleDiagram` - vier Knoten kreisförmig mit umlaufendem Uhrzeiger-Pfeil; optionales Highlight-Overlay (grüne Ellipse) für die Teilmenge "Asset Allocation Prozess" (Schritte 2 und 3).

## Folie 5 - 1. Investmentziele: Anlageziele und Magisches Dreieck
### In der MD vorhanden
Zeilen 44-52: Anlageziele, Risikotoleranz (Alter, Einkommen, Erfahrung, Anlagehorizont, Gesamtvermögen, bestehende Verpflichtungen), Mindestrenditeziele (absolute Ziele vs. Performance ggü. Benchmark), "Magisches Dreieck" mit Rendite, Sicherheit, Liquidität. Text erfasst, das Dreieck-Schaubild geht verloren.
### Fehlende visuelle Inhalte
Schaubild "Magisches Dreieck" (rechts unten): Ein großes hellgraues/hellblaues Dreieck mit Spitze oben. An den drei Ecken jeweils ein gelber/oranger Kasten: oben "Rendite", unten links "Sicherheit", unten rechts "Liquidität". Im Inneren des Dreiecks blaue Doppelpfeile zwischen den Ecken: ein diagonaler Doppelpfeil Rendite<->Sicherheit (links), ein diagonaler Doppelpfeil Rendite<->Liquidität (rechts) und ein horizontaler Doppelpfeil Sicherheit<->Liquidität (unten). Die Beschriftung „Magisches Dreieck" (fett, in Anführungszeichen) steht oberhalb/links neben der Dreieckspitze.
### Visuelle Rekonstruktion
```
          [Rendite]
            / \
          v     v   (zwei diagonale Doppelpfeile)
   [Sicherheit] <-> [Liquidität]   (horizontaler Doppelpfeil)
```
### Inhaltliche Rekonstruktion
Anlageziele (Ergebnis der Anlegeranalyse):
- Risikotoleranz: Alter, Einkommen, Erfahrung, Anlagehorizont, Gesamtvermögen, bestehende Verpflichtungen
- Mindestrenditeziele: absolute Ziele vs. Performance ggü. Benchmark
Magisches Dreieck der Geldanlage: Rendite - Sicherheit - Liquidität (Zielkonflikt).
### Fachliche Aussage
Anlageziele resultieren aus der Anlegeranalyse; die drei Grundziele Rendite, Sicherheit und Liquidität stehen im Zielkonflikt zueinander (magisches Dreieck).
### React-Vorschlag
`MagicTriangle` - Dreieck mit drei Eck-Labels und drei Doppelpfeilen; daneben `BulletList` für Risikotoleranz/Mindestrenditeziele.

## Folie 6 - 1. Investmentziele: Anlagebeschränkungen
### In der MD vorhanden
Zeilen 57-68 vollständig: Anlagehorizont, Steuern, Liquiditätsbedarf, persönliche Anlagebeschränkungen sowie Ergebnis "Investment Policy Statement". Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Nur Formatierung: Überschrift "1. Investmentziele" blau/fett, Zwischenüberschrift "Anlagebeschränkungen" schwarz/fett. Schlüsselbegriffe der Unterpunkte ("Anlagehorizont:", "Steuern", "Liquiditätsbedarf:") blau/fett. Nach den Aufzählungspunkten ein eingerückter "..."-Punkt (offene Liste). Der Ergebnissatz "Ergebnis: „Investment Policy Statement" bildet die Grundlage für die Asset Allocation" ist blau ("Ergebnis:") plus schwarz/fett als Abschluss-Statement gesetzt.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Anlagebeschränkungen:
- Anlagehorizont: üblicherweise langfristig
- Steuern: insb. relevant, wenn Steuersätze für laufende Erträge und Kursgewinne differieren
- Liquiditätsbedarf: regelmäßige Entnahmen, Liquiditätsreserve, geplante Ereignisse
- Persönliche Anlagebeschränkungen (Wertvorstellungen, Religion, Kultur etc.)
- ... (offene Liste)
Ergebnis: Das „Investment Policy Statement" bildet die Grundlage für die Asset Allocation.
### Fachliche Aussage
Neben Zielen begrenzen Anlagebeschränkungen den Handlungsraum; das daraus abgeleitete Investment Policy Statement ist die Grundlage der Asset Allocation.
### React-Vorschlag
`BulletList` mit Hervorhebungen + abschließender `Callout` (Merksatz) für das Investment Policy Statement.

## Folie 7 - 1. Investmentziele: Renditeansätze
### In der MD problematisch/fehlend
Zeilen 74-80: Text zu den beiden Ansätzen vorhanden, aber die zwei Spalten sind ineinander verschachtelt/zerbrochen ("Asset Manager verfolgt das Ziel, Asset Manager verfolgt das Ziel,..."). Die Baum-/Zwei-Kasten-Struktur fehlt.
### Fehlende visuelle Inhalte
Baumdiagramm unter den Überschriften "1. Investmentziele" (blau/fett) und "Renditeansätze" (schwarz/fett): Oben ein breiter dunkelblauer Kasten mit weißer Schrift "Renditeziel". Davon zwei Verbindungslinien nach unten zu zwei farbigen Kopfboxen (weiße Schrift): links blaugrau "Relative-Return-Ansatz", rechts grün "Absolute-Return-Ansatz". Unter jeder Kopfbox eine hell hinterlegte Textbox (links hellblau, rechts hellgrün) mit der jeweiligen Definition.
### Visuelle Rekonstruktion
```
                [Renditeziel]
                /           \
   [Relative-Return]   [Absolute-Return]
   [Definition...]     [Definition...]
```
### Inhaltliche Rekonstruktion
| | Relative-Return-Ansatz | Absolute-Return-Ansatz |
|---|---|---|
| Ziel | Asset Manager verfolgt das Ziel, eine im Vergleich zur Benchmark bzw. Peer Group relativ hohe Rendite zu erzielen. | Asset Manager verfolgt das Ziel, unabhängig von der Marktsituation eine positive Rendite bzw. Mindestrendite zu erzielen. |
### Fachliche Aussage
Renditeziele lassen sich in relative (benchmarkbezogene) und absolute (marktunabhängige) Ansätze unterteilen.
### React-Vorschlag
`ComparisonTree` / `TwoCardCompare` - ein Wurzelknoten "Renditeziel" mit zwei farblich getrennten Definitionskarten.

## Folie 8 - 2. Strategische Asset Allocation (SAA)
### In der MD vorhanden
Zeilen 85-95 vollständig: Festlegung des Assetuniversums, Aufstellung von Investmentguidelines, Festlegung der Investmentphilosophie und -stile, inkl. Unterpunkte (Aktiv/Passiv, Buy-and-Hold vs. Wertsicherungsstrategien -> DAA). Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "2. Strategische Asset Allocation (SAA)" blau/fett. Drei schwarz/fett gesetzte Hauptpunkte mit jeweils eingerückten Unterpunkten.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
2. Strategische Asset Allocation (SAA):
- Festlegung des Assetuniversums: Auswahl der Finanzmärkte; Auswahl der Assetklassen
- Aufstellung von Investmentguidelines: Definition der Benchmarks je Assetklasse; Definition von Investmentlimits
- Festlegung der Investmentphilosophie und -stile: Aktives vs. Passives Management; Buy-and-Hold vs. Wertsicherungsstrategien (Risikomanagement -> DAA, Dynamische Asset Allocation)
### Fachliche Aussage
Die SAA legt das Assetuniversum, die Investmentguidelines (Benchmarks/Limits) und die Investmentphilosophie/-stile fest.
### React-Vorschlag
`NestedBulletList` mit fetten Hauptpunkten und eingerückten Unterpunkten.

## Folie 9 - 3. Portfoliomanagement i.e.S. (Research, Portfoliobildung, TAA)
### In der MD vorhanden
Zeilen 100-110 vollständig: Research und Prognose (Informationssammlung: Buy-/Sellside-Analystenschätzungen, Erwartungen der Trading Desks; Einsatz von Prognosetechniken), Portfoliobildung (Fokus auf Execution/Transaktionskosten), Taktische Asset Allocation (Branchen-/Einzeltitelauswahl, Laufzeiten bei Anleihen: Duration und Konvexität). Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "3. Portfoliomanagement i.e.S." blau/fett. Dreistufige verschachtelte Bullet-Liste mit schwarz/fetten Überschriften. Hinweis: Der zweite Hauptpunkt ist auf der Folie vollständig fett: "Portfoliobildung: Erstmalige Zusammenstellung des Portfolios" (kein Folien-Label "Teil 1").
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
3. Portfoliomanagement i.e.S.:
- Research und Prognose: Informationssammlung (Buy-/Sellside-Analystenschätzungen; Erwartungen der Trading Desks); Einsatz von Prognosetechniken (Bewertung der Informationen)
- Portfoliobildung: Erstmalige Zusammenstellung des Portfolios: Fokus auf Execution und Transaktionskosten
- Taktische Asset Allocation (Portfoliogenerierung): Branchen- und Einzeltitelauswahl; Festlegung der Laufzeiten bei Anleihen (Duration und Konvexität)
### Fachliche Aussage
Im engeren Portfoliomanagement folgen auf Research/Prognose die erstmalige Portfoliobildung und die taktische Titelauswahl.
### React-Vorschlag
`NestedBulletList` (dreistufig).

## Folie 10 - 3. Portfoliomanagement i.e.S. (Portfoliorevision, Trading)
### In der MD vorhanden
Zeilen 115-126 vollständig: Portfoliorevision (Portfolio Rebalancing, Portfolio Upgrading) und Trading (Umsetzung der Portfolioentscheidungen; Ausnützung von Kapitalmarktanomalien). Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "3. Portfoliomanagement i.e.S." blau/fett (kein Folien-Label "Teil 2"). Der erste Hauptpunkt ist schwarz/fett: "Portfoliorevision nach Erscheinen neuer Information und Bildung neuer Erwartungen" (auf der Folie mit Tippfehler "Bioldung"). Die Begriffe "Portfolio Rebalancing:" und "Portfolio Upgrading:" sind blau/fett hervorgehoben; "Trading" ist schwarz/fett.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
3. Portfoliomanagement i.e.S.:
- Portfoliorevision nach Erscheinen neuer Information und Bildung neuer Erwartungen: Portfolio Rebalancing = Umschichtungen zur Wiederherstellung der ursprünglichen Portfoliostruktur, bspw. nach Outperformance bestimmter Assetklassen; Portfolio Upgrading = bewusste Veränderung der Portfoliostruktur aufgrund neuer Informationen
- Trading: Umsetzung der Portfolioentscheidungen (Kauf/Verkauf von Assets); Erzielung zusätzlicher Performance durch Ausnützung von Kapitalmarktanomalien
### Fachliche Aussage
Portfoliorevision unterscheidet Rebalancing (Rückkehr zur Ausgangsstruktur) und Upgrading (bewusste Strukturänderung); Trading setzt die Entscheidungen um.
### React-Vorschlag
`NestedBulletList`; Rebalancing/Upgrading als Begriffs-Paar hervorheben.

## Folie 11 - 3. Portfoliomanagement i.e.S.: Einflussfaktoren auf Transaktionskosten
### In der MD vorhanden
Zeilen 131-142 vollständig: Brokerage-Gebühren/Provisionen/Spesen; Geld-Brief-Spanne/Bid-Ask-Spread (Liquidität, Risiko, Preisniveau, Informationstransparenz, Börsensegment); Handelbarkeit (Fungibilität) mit hoher/geringer Liquidität. Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "3. Portfoliomanagement i.e.S." blau/fett, Zwischenüberschrift "Einflussfaktoren auf Transaktionskosten" schwarz/fett. Drei schwarz/fette Hauptpunkte ("Brokerage-Gebühren, Provisionen, Spesen"; "Geld-Brief-Spanne/Bid-Ask-Spread"; "Handelbarkeit (Fungibilität)") mit eingerückten Unterpunkten.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Einflussfaktoren auf Transaktionskosten:
- Brokerage-Gebühren, Provisionen, Spesen
- Geld-Brief-Spanne/Bid-Ask-Spread: Liquidität der Aktie; Risiko der Aktie (je höher das Risiko, desto höher tendenziell der Bid/Ask-Spread); absolutes Preisniveau der Aktie (je höher der Aktie, desto höher der Bid/Ask-Spread); Informationstransparenz (je höher die Intransparenz, desto höher der Bid/Ask-Spread); Börsensegment (elektronischer Handel vs. Floor-Trading)
- Handelbarkeit (Fungibilität): hohe Liquidität = standardisierte Anlagen wie börsennotierte Aktien, Anleihen oder Fonds; geringe Liquidität = nicht-standardisierte Assets wie GmbH-Anteile
### Fachliche Aussage
Transaktionskosten werden v. a. durch Gebühren, den Bid-Ask-Spread (abhängig von Liquidität, Risiko, Preisniveau, Transparenz, Börsensegment) und die Fungibilität bestimmt.
### React-Vorschlag
`NestedBulletList` mit "je höher ... desto höher"-Regeln ggf. als Mini-Tabelle.

## Folie 12 - 4. Finanzcontrolling
### In der MD vorhanden
Zeilen 147-157 vollständig: Performanceanalyse (Performancemessung, Performancebewertung); Risikoanalyse/Kennzahlenanalyse (Asset-Liability-Management, Stress-Test-Szenarien); Konkurrenzanalyse (Makro-/Mikroanalyse); Reporting. Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Überschrift "4. Finanzcontrolling" blau/fett. Vier schwarz/fette Hauptpunkte (letzter "Reporting" ohne Unterpunkte).
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
4. Finanzcontrolling:
- Performanceanalyse: Performancemessung; Performancebewertung
- Risikoanalyse (Kennzahlenanalyse): Asset-Liability-Management; Stress-Test-Szenarien
- Konkurrenzanalyse: Kennzahlenvergleich mit dem Markt (Makroanalyse); Kennzahlenvergleich mit Peer Group/Mitbewerbern (Mikroanalyse)
- Reporting
### Fachliche Aussage
Das Finanzcontrolling überwacht den Erfolg über Performance-, Risiko- und Konkurrenzanalyse und schließt mit dem Reporting ab.
### React-Vorschlag
`NestedBulletList`.

## Folie 13 - Kapitel 6.2: Asset Allocation (Titelfolie)
### In der MD vorhanden
Zeilen 160-163: "Asset Management", "Kapitel 6.2", "Asset Allocation", "V26-04-23". Vollständig.
### Fehlende visuelle Inhalte
Gleiches Kapiteltrenner-Layout (Foto-Banner mit vier Bildern, HBW-Logo oben rechts, hellblaue Titelbox) mit "Kapitel 6.2 / Asset Allocation". Versionskennung "V26-04-23" rechts unten. Rein dekorativ.
### Visuelle Rekonstruktion
```
[Asset Management]                 [HBW-Logo]
[Foto][Foto][Foto][Foto]
[ Kapitel 6.2 ]
[ Asset Allocation ]               (V26-04-23)
```
### Inhaltliche Rekonstruktion
Unterkapitel 6.2: Asset Allocation.
### Fachliche Aussage
Einleitung des Unterkapitels 6.2 "Asset Allocation".
### React-Vorschlag
`ChapterTitleSlide` (subchapter-Variante).

## Folie 14 - Asset Allocation: Mischung, Risiken, Theorie der Risikodiversifikation
### In der MD vorhanden
Zeilen 168-180 vollständig: Mischung und Streuung (Risikodiversifikation); Risiken der Kapitalanlage (7 Risikoarten); Theorie der Risikodiversifikation (Portfolio-Selection-Theorie nach Markowitz). Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Drei blau/fette Zwischenüberschriften ("Mischung und Streuung", "Risiken der Kapitalanlage", "Theorie der Risikodiversifikation") mit jeweils darunter angeordneten Aufzählungspunkten.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Mischung und Streuung: Verlangt eine Verteilung der Kapitalanlagen auf verschiedene Anlagearten und Schuldner (Risikodiversifikation).
Risiken der Kapitalanlage:
- Adressenausfall- oder Bonitätsrisiko
- Marktpreisrisiko
- Zinsänderungsrisiko
- Wiederanlagerisiko
- Politische Risiken
- Gesamtwirtschaftliche Risiken
- Währungsrisiken
Theorie der Risikodiversifikation: Portfolio-Selection-Theorie nach Markowitz.
### Fachliche Aussage
Risikodiversifikation durch Mischung und Streuung adressiert die verschiedenen Kapitalanlagerisiken; theoretische Grundlage ist Markowitz' Portfolio-Selection-Theorie.
### React-Vorschlag
`SectionedBulletList` - drei Abschnitte mit Überschriften.

## Folie 15 - Streuung: Beispiel der Risikodiversifikation bei Aktien
### In der MD problematisch/fehlend
Zeilen 185-197: Fließtext zu unsystematischem/systematischem Risiko vorhanden, aber das zentrale Diagramm (Risiko vs. Anzahl Wertpapiere) fehlt komplett.
### Fehlende visuelle Inhalte
Liniendiagramm (links auf der Folie; rechts daneben der Erläuterungstext): y-Achse "Risiko", x-Achse "Anzahl Wertpapiere". Eine fallende Kurve startet links oben hoch und sinkt mit zunehmender Anzahl der Wertpapiere asymptotisch ab, nähert sich aber einem positiven Niveau (geht NICHT auf Null). Der Bereich oberhalb der unteren Asymptote ist mit "Unsystematisches Risiko" beschriftet (reduzierbar). Auf Höhe der Asymptote eine horizontale Linie/Box mit der Beschriftung "Systematisches Risiko = Marktrisiko" (verbleibt). Rechts der Erläuterungstext mit blauen Schlüsselbegriffen ("unsystematisches Risiko", "Marktrisiko").
### Visuelle Rekonstruktion
```
Risiko ^
       |\
       | \      Unsystematisches Risiko
       |  \___
       |      \________
       |---------------------  Systematisches Risiko = Marktrisiko
       +---------------------> Anzahl Wertpapiere
```
### Inhaltliche Rekonstruktion
- Unsystematisches Risiko (unternehmensindividuell) innerhalb einer Asset-Klasse lässt sich durch die Größe des Portfolios (Anzahl der Assets) bzw. durch Streuung reduzieren.
- Marktrisiko innerhalb einer Asset-Klasse bleibt bestehen.
- -> Diversifikation des Marktrisikos je Asset-Klasse über Mischung verschiedener Asset-Klassen (Portfoliotheorie nach Markowitz).
### Fachliche Aussage
Durch Streuung innerhalb einer Assetklasse lässt sich nur das unsystematische Risiko abbauen; das systematische Marktrisiko bleibt und kann nur durch Mischung mehrerer Assetklassen reduziert werden.
### React-Vorschlag
`DiversificationChart` - SVG-Liniendiagramm mit fallender Kurve, Asymptotenlinie und zwei beschrifteten Risikobereichen; daneben erläuternde `BulletList`.

## Folie 16 - Zentrale Frage bei der Portfolioauswahl
### In der MD vorhanden
Zeilen 202-209 vollständig: Frage (a optimale Rendite-/Risikoposition, b gesetzlich erlaubt) und Antworten (ad a Markowitz, ad b gesetzliche Anlageverordnungen/Vertragsbedingungen/Verkaufsprospekt). Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Zentrale Frage bei der Portfolioauswahl". Schwarz/fette Zwischenzeile "Welche Mischung der Assetklassen aus dem gesamten Anlageuniversum" mit eingerückten a)/b)-Punkten; schwarz/fette Zwischenüberschrift "Antworten" mit eingerückten "ad a)"/"ad b)"-Punkten.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Welche Mischung der Assetklassen aus dem gesamten Anlageuniversum
a) ... liefert die optimale Rendite-/Risikoposition?
b) ... ist gesetzlich erlaubt?
Antworten:
- ad a) Portfolio-Selection-Theorie nach Markowitz
- ad b) gesetzliche Anlageverordnungen bzw. Vertragsbedingungen/Verkaufsprospekt
### Fachliche Aussage
Die Portfolioauswahl wird durch zwei Fragen bestimmt: die ökonomisch optimale Mischung (Markowitz) und den gesetzlich/vertraglich zulässigen Rahmen.
### React-Vorschlag
`QuestionAnswerBlock` - Frage-Liste a/b mit zugeordneter Antwort-Liste.

## Folie 17 - Definition Asset Allocation
### In der MD vorhanden
Zeilen 214-218 vollständig: Definition (Aufteilung der Anlagegelder in bestimmte Bereiche/Diversifikationsebenen) und Grundlage (Risikodiversifikation nach Markowitz). Kein Diagramm.
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Definition Asset Allocation". Der Begriff "Aufteilung der Anlagegelder" ist im Fließtext blau/fett hervorgehoben.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Definition Asset Allocation:
- Unter Asset Allocation versteht man die Aufteilung der Anlagegelder in bestimmte Bereiche (sog. Diversifikationsebenen).
- Grundlage ist (zumeist) die Risikodiversifikation durch geeignete Portfoliostrukturen nach Markowitz.
### Fachliche Aussage
Asset Allocation ist die Aufteilung des Anlagekapitals auf Diversifikationsebenen, regelmäßig auf Basis der Markowitz-Risikodiversifikation.
### React-Vorschlag
`DefinitionCard` - Begriffskarte mit hervorgehobenem Kernbegriff.

## Folie 18 - Definition von Assetklassen: einfache vs. aufwändige Variante
### In der MD problematisch/fehlend
Zeilen 223-227: Text "Eine Definition von Assetklassen kann man ganz einfach oder eher aufwändig vornehmen", "Die einfachste Form", "oder eine eher aufwändige Variante", Quelle https://mbtarf.com/about-us/asset-allocation/. Beide Tortendiagramme fehlen vollständig.
### Fehlende visuelle Inhalte
Überschrift "Eine Definition von Assetklassen kann man ganz einfach oder eher aufwändig vornehmen" (blau/fett). Darunter zwei Tortendiagramme gegenübergestellt:
1) Links, unter "Die einfachste Form:" ein kleines Kreisdiagramm mit nur zwei Segmenten - "Renten 60%" (großes, dunkles Segment) und "Aktien 40%" (kleineres, helleres Segment).
2) Rechts, unter "... oder eine eher aufwändige Variante:" ein komplexes, vielsegmentiges Tortendiagramm mit Titel "MBTA Retirement Fund Asset Allocation" und sehr vielen feinen Assetklassen-Segmenten. Drei Bereiche sind grün hervorgehoben/umrahmt: "Equities 41,5%" (rechts oben, grünes Label), "Alternative Investments" (links, grünes Label) und "Fixed Income" (links unten, grünes Label). Zusätzlich sichtbar grau hervorgehoben "Cash 1,4%" (links unten). Übrige Einzelwerte sind zu klein/visuell nicht sicher ablesbar. Quelle unter dem rechten Chart: https://mbtarf.com/about-us/asset-allocation/ (zusätzlich kleines "MBTA Retirement Fund"-Logo rechts unten).
### Visuelle Rekonstruktion
```
Einfach:                 Aufwändig (MBTA Retirement Fund Asset Allocation):
[ Torte ]                [ Vielsegmentige Torte ]
 Renten 60%               Equities 41,5% (grün hervorgehoben)
 Aktien 40%               Alternative Investments (grün), Fixed Income (grün)
                          Cash 1,4% + viele weitere kleine Klassen
                          (Einzelprozente visuell nicht sicher)
```
### Inhaltliche Rekonstruktion
Einfachste Form (2 Klassen):
- Renten: 60%
- Aktien: 40%
Aufwändige Variante: "MBTA Retirement Fund Asset Allocation" - vielsegmentig; hervorgehoben sind Equities 41,5% (visuell abgelesen), Alternative Investments und Fixed Income (grün markiert) sowie Cash 1,4% (visuell abgelesen); weitere Klassen mit nicht sicher ablesbaren Einzelprozenten.
Quelle: https://mbtarf.com/about-us/asset-allocation/
### Fachliche Aussage
Assetklassen lassen sich grob (Aktien/Renten) oder sehr fein granular definieren; die Wahl der Granularität bestimmt die Komplexität der Asset Allocation.
### React-Vorschlag
`PieComparison` - zwei nebeneinanderliegende Tortendiagramme (Recharts/SVG): links 2-Segment-Pie (60/40), rechts vielsegmentiges Pie mit Hervorhebung der drei grünen Segmente; Quellenangabe als `source-note`.

## Folie 19 - Asset Allocation im Detail: Die Ebenen der Diversifikation
### In der MD problematisch/fehlend
Zeilen 232-237 zerbrochen: "Asset Allocation / Strategische Asset Allocation Taktische Asset Allocation / Titel/ / Assetklassen Länder Währungen Branchen / Emittenten". Die Baumstruktur fehlt.
### Fehlende visuelle Inhalte
Hierarchisches Baumdiagramm (Organigramm) unter der blau/fetten Überschrift "Asset Allocation im Detail - Die Ebenen der Diversifikation": Oben ein breiter dunkelblauer Kasten (weiße Schrift) "Asset Allocation". Darunter zwei Äste zu zwei Kopfboxen (weiße Schrift): links blaugrau "Strategische Asset Allocation", rechts grün "Taktische Asset Allocation". Unter "Strategische Asset Allocation" hängen drei hellblaue Boxen: "Assetklassen", "Länder", "Währungen". Unter "Taktische Asset Allocation" hängen zwei hellgrüne Boxen: "Branchen" und "Titel/Emittenten". Verbindungslinien als eckiger Baum.
### Visuelle Rekonstruktion
```
                 [Asset Allocation]
                 /               \
   [Strategische AA]            [Taktische AA]
    /     |     \                 /      \
[Asset-][Länder][Währungen]   [Branchen][Titel/
 klassen]                                Emittenten]
```
### Inhaltliche Rekonstruktion
- Asset Allocation
  - Strategische Asset Allocation: Assetklassen | Länder | Währungen
  - Taktische Asset Allocation: Branchen | Titel/Emittenten
### Fachliche Aussage
Die Diversifikationsebenen verteilen sich auf die strategische Ebene (Assetklassen, Länder, Währungen) und die taktische Ebene (Branchen, Titel/Emittenten).
### React-Vorschlag
`HierarchyTree` - zweistufiges Baumdiagramm mit zwei farblich getrennten Ästen (SAA blaugrau / TAA grün).

## Folie 20 - Strategische Asset Allocation: Theoretische Diversifikationspotentiale
### In der MD vorhanden
Zeilen 242-249 vollständig: Assetklassendiversifikation (negative Korrelationen), Länderdiversifikation, Währungsdiversifikation; Fazit-Pfeil zu SAA vs. TAA. Kein Diagramm.

Hinweis: Folientitel-Untertitel wechselt ab hier von "Investmentprozess"/"Asset Allocation" zu "Strategische Asset Allocation".
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Theoretische Diversifikationspotentiale". Drei Bullet-Punkte, in denen jeweils der Schlüsselbegriff in Klammern blau/fett gesetzt ist ("Assetklassendiversifikation", "Länderdiversifikation", "Währungsdiversifikation"). Abschließend ein eigener Punkt mit Pfeil-Symbol (->) als Fazit.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Theoretische Diversifikationspotentiale:
- Beimischung von Assetklassen mit möglichst negativen Korrelationen zu den anderen Assetklassen (Assetklassendiversifikation)
- Beimischung von internationalen Assets (Länderdiversifikation)
- Beimischung von verschiedenen Währungen (Währungsdiversifikation)
-> Verteilung der Gelder auf der strategischen Ebene (SAA) hat empirisch gesehen größeren Einfluss auf die Performance als die auf der taktischen Ebene (TAA).
### Fachliche Aussage
Diversifikation kann über Assetklassen, Länder und Währungen erfolgen; empirisch hat die SAA einen größeren Performance-Einfluss als die TAA.
### React-Vorschlag
`BulletList` mit hervorgehobenen Begriffen + `Callout` für das empirische Fazit (SAA > TAA).

## Folie 21 - Die Bedeutung der (strategischen) Asset Allocation
### In der MD problematisch/fehlend
Zeilen 254-255: nur Überschrift und Quelle "Ernst / Schurer (2015), S. 62". Das Zitat (mit Foto) und das Tortendiagramm fehlen komplett.
### Fehlende visuelle Inhalte
Blau/fette Überschrift "Die Bedeutung der (strategischen) Asset Allocation".
1) Links: Porträtfoto eines Mannes mit darunter "Quelle: Max Holzer". Daneben ein Zitatkasten: „Die Asset Allocation gilt weithin als die Königsdisziplin des Asset Managements, denn sie bestimmt etwa zu 80 % die Rendite und sogar zu 95 % das Risiko einer Anlagestrategie." - Urheber: "Max Holzer - Leiter Portfolio Management Asset Allocation, Union Investment".
2) Rechts: Tortendiagramm mit Titel "Asset allocation: the most important determinant of variance in portfolio performance". Ein dominantes dunkelblaues Segment (Asset Allocation) und drei sehr kleine Segmente. Legende: 91,5% Asset Allocation; 4,6% Securities Selection; 1,8% Timing; 2,1% Other Factors. Quelle unter dem Chart: "Brinson, Hood & Beebower, Financial Analysts Journal, 1986".
Folien-Quelle gesamt: "Ernst / Schurer (2015), S. 62".
### Visuelle Rekonstruktion
```
[Foto Holzer]   „...gilt weithin als die Königsdisziplin...
 Quelle: Max     ~80 % der Rendite, ~95 % des Risikos..."
 Holzer          - Max Holzer, Union Investment

                 [Torte]  91,5% Asset Allocation (dominant)
                          4,6% Securities Selection
                          1,8% Timing
                          2,1% Other Factors
```
### Inhaltliche Rekonstruktion
Zitat (Max Holzer, Leiter Portfolio Management Asset Allocation, Union Investment): Die Asset Allocation gilt als Königsdisziplin; sie bestimmt etwa zu 80 % die Rendite und sogar zu 95 % das Risiko einer Anlagestrategie.

| Determinante der Varianz der Portfolioperformance | Anteil |
|---|---|
| Asset Allocation | 91,5% |
| Securities Selection | 4,6% |
| Timing | 1,8% |
| Other Factors | 2,1% |
Quelle Chart: Brinson, Hood & Beebower, Financial Analysts Journal, 1986. Quelle Folie: Ernst/Schurer (2015), S. 62.
### Fachliche Aussage
Empirisch (Brinson et al. 1986) erklärt die Asset Allocation mit 91,5% den größten Teil der Performance-Varianz; sie ist die "Königsdisziplin" des Asset Managements.
### React-Vorschlag
`QuoteWithChart` - Zitatkarte (mit Foto-Platzhalter) links, Tortendiagramm (4 Segmente, dominantes Hauptsegment) rechts; Quellen als `source-note`.

## Folie 22 - Strategische Asset Allocation: Praktische Beschränkungen
### In der MD vorhanden
Zeilen 260-267 vollständig: gesetzliche/vertragliche Rahmenbedingungen, Finanzstärke (aktive/passive Reservepolster), Liquiditätserfordernisse (standardisierte Handelbarkeit/Börsenhandel, liquide Märkte/hohe Marktkapitalisierung). Kein Diagramm.

Korrektur: Der Folientitel lautet "Strategische Asset Allocation - Praktische Beschränkungen" (KEIN Folien-Label "Teil 1"). Die Aufteilung auf zwei Folien ist nur eine inhaltliche Fortsetzung; Folie 23 trägt denselben Titel.
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Strategische Asset Allocation - Praktische Beschränkungen". Drei Bullet-Punkte mit blau/fetten Schlüsselbegriffen ("gesetzlichen und vertraglichen Rahmenbedingungen", "Finanzstärke", "Liquiditätserfordernisse"). Unter dem dritten Punkt zwei eingerückte Unterpunkte.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Praktische Beschränkungen der SAA:
- Beachtung von gesetzlichen und vertraglichen Rahmenbedingungen
- Finanzstärke (aktive und passive Reservepolster des Investors)
- Liquiditätserfordernisse: Konzentration auf Assetklassen mit standardisierter Handelbarkeit (Börsenhandel); liquide Märkte (Segmente mit hoher Marktkapitalisierung)
### Fachliche Aussage
In der Praxis wird die theoretisch optimale SAA durch rechtliche Rahmenbedingungen, Finanzstärke und Liquiditätserfordernisse eingeschränkt.
### React-Vorschlag
`BulletList` mit hervorgehobenen Begriffen.

## Folie 23 - Strategische Asset Allocation: Praktische Beschränkungen (gesetzliche/vertragliche Rahmenbedingungen)
### In der MD vorhanden
Zeilen 272-284 vollständig: Versicherungen/Pensionsfonds (VAG und Anlageverordnungen: Mischung und Streuung, Belegenheitsgrundsatz und Währungskongruenz, Grenzen für Anlagequoten, Solvabilitätserfordernisse, Stress-Test-Ergebnisse, Mindestrenditen bei LVU); Investmentfonds (Verkaufsprospekte/Vertragsbedingungen und Investmentguidelines: Ziel-Anlagequoten je Assetklasse, Cash-Bestand/Liquiditätsgrad). Kein Diagramm.

Korrektur: Folientitel ebenfalls "Strategische Asset Allocation - Praktische Beschränkungen" (KEIN "Teil 2"). Die Zwischenzeile auf der Folie lautet "Berücksichtigung von gesetzlichen oder vertraglichen Rahmenbedingungen".
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Strategische Asset Allocation - Praktische Beschränkungen". Schwarze (nicht fette) Zwischenzeile "Berücksichtigung von gesetzlichen oder vertraglichen Rahmenbedingungen". Zwei Hauptpunkte mit blau/fettem Label ("Versicherungen/ Pensionsfonds:", "Investmentfonds:") und jeweils eingerückten Unterpunkten.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Berücksichtigung von gesetzlichen oder vertraglichen Rahmenbedingungen:
- Versicherungen/Pensionsfonds: VAG und Anlageverordnungen - Mischung und Streuung; Belegenheitsgrundsatz und Währungskongruenz; Grenzen für Anlagequoten; Solvabilitätserfordernisse; Stress-Test-Ergebnisse; Mindestrenditen bei LVU
- Investmentfonds: Verkaufsprospekte/Vertragsbedingungen und Investmentguidelines - Ziel-Anlagequoten je Assetklasse; Cash-Bestand (Liquiditätsgrad)
### Fachliche Aussage
Die Rahmenbedingungen unterscheiden sich nach Investortyp: Versicherungen/Pensionsfonds unterliegen VAG/Anlageverordnungen, Investmentfonds den Verkaufsprospekten/Investmentguidelines.
### React-Vorschlag
`NestedBulletList` (ggf. `TwoColumnCompare` Versicherungen vs. Investmentfonds).

## Folie 24 - Strategische Asset Allocation: Gesetzlicher Rahmen (§ 54/§ 115 VAG)
### In der MD vorhanden
Zeilen 289-299 vollständig: Allgemeiner gesetzlicher Anlagegrundsatz (§ 54 I bzw. § 115 VAG); Zitat zum gebundenen Vermögen (Sicherheit, Rentabilität, jederzeitige Liquidität, angemessene Mischung und Streuung). Kein Diagramm.

Korrektur: Folientitel lautet "Strategische Asset Allocation - Gesetzlicher Rahmen".
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Strategische Asset Allocation - Gesetzlicher Rahmen", darunter blau/fett "Versicherungen/ Pensionsfonds:". Schlüsselbegriffe im Gesetzeszitat "Sicherheit", "Rentabilität", "Liquidität" und "Mischung und Streuung" blau/fett. Das Gesetzeszitat ist als längerer Fließtext mit vier eingerückten Aufzählungs-Unterpunkten formatiert.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Versicherungen/Pensionsfonds:
- Allgemeiner gesetzlicher Anlagegrundsatz (§ 54 I bzw. § 115 VAG)
- Das gebundene Vermögen eines VU/Pensionsfonds ist „unter Berücksichtigung der Art der betriebenen Versicherungsgeschäfte sowie der Unternehmensstruktur so anzulegen, dass möglichst
  - große Sicherheit und
  - Rentabilität bei
  - jederzeitiger Liquidität des VU
  - unter Wahrung angemessener Mischung und Streuung
  erreicht wird."
### Fachliche Aussage
Der VAG-Anlagegrundsatz (§ 54 I bzw. § 115) verpflichtet das gebundene Vermögen auf Sicherheit, Rentabilität, jederzeitige Liquidität sowie angemessene Mischung und Streuung.
### React-Vorschlag
`LegalQuoteBlock` - Gesetzeszitat als hervorgehobener `Callout`, die vier Grundsätze als hervorgehobene Begriffe.

## Folie 25 - Strategische Asset Allocation: Nebenbedingungen (Fazit Markowitz)
### In der MD vorhanden
Zeilen 304-315 vollständig: Liquiditätserfordernisse (Versicherungen: dauerhafte Erfüllbarkeit; Investmentfonds: jederzeitiger Rückkauf), wettbewerbsfähige Renditen, Finanzstärke; Fazit, dass das Markowitz-Modell für institutionelle Investoren nicht ausreicht. Kein Diagramm.

Korrektur: Folientitel lautet "Strategische Asset Allocation - Nebenbedingungen".
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Strategische Asset Allocation - Nebenbedingungen". Der erste Hauptpunkt "Berücksichtigung von Liquiditätserfordernissen" hat zwei eingerückte Unterpunkte mit blau/fetten Labels ("Versicherungen/ Pensionsfonds:", "Investmentfonds") und je einem dritten Bullet-Level. Das "FAZIT" am Ende ist als großer blau/fetter Abschluss-Block formatiert.
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Nebenbedingungen:
- Berücksichtigung von Liquiditätserfordernissen: Versicherungen/Pensionsfonds = dauerhafte Erfüllbarkeit der Versicherungsleistungen; Investmentfonds = jederzeitiger Rückkauf der Anteile
- Erzielung wettbewerbsfähiger Renditen
- Finanzstärke (Reservesituation bestimmt das Exposure in riskante Anlagen)
FAZIT: Für die Generierung effizienter Portfolios ist das Portfolio-Selection-Modell von Markowitz für einen institutionellen Investor nicht ausreichend!
### Fachliche Aussage
Wegen zusätzlicher Nebenbedingungen (Liquidität, Wettbewerb, Finanzstärke) reicht das reine Markowitz-Modell für institutionelle Investoren nicht aus.
### React-Vorschlag
`BulletList` + abschließender `Callout` (Fazit) in Akzentfarbe.

## Folie 26 - Taktische Asset Allocation (Definition und Eigenschaften)
### In der MD vorhanden
Zeilen 320-332 vollständig: Definition (kurz-/langfristige Anpassungen der Gewichte auf Basis erwarteter relativer Performance); systematisches Risiko/Kompensation; Anpassungsoptionen (ad hoc vs. regelmäßig/quartalsweise); Feinschliff zur Erzielung von Alpha; Derivate-Overlays. Kein Diagramm.

Hinweis: Folientitel-Untertitel wechselt hier auf "Taktische Asset Allocation".
### Fehlende visuelle Inhalte
Keine Grafik. Blau/fette Überschrift "Taktische Asset Allocation". Das Label "Definition:" ist blau/fett; mehrstufige Bullet-Liste mit einem eingerückten Unter-Level beim Punkt "Breite Palette an Anpassungsoptionen".
### Visuelle Rekonstruktion
n/a (reine Textfolie)
### Inhaltliche Rekonstruktion
Taktische Asset Allocation:
- Definition: Kurz- und langfristige Anpassungen der Gewichte der einzelnen Assetklassen auf der Basis der kurzfristigen erwarteten relativen Performance der einzelnen Assetklassen.
- Basis der taktischen Asset Allocation ist die Bereitschaft des Investors, systematisches Risiko zu akzeptieren. Nur für dieses erhält der Investor eine Kompensation.
- Breite Palette an Anpassungsoptionen: Gelegentliche, opportunistische ad hoc-Anpassungen; Regelmäßige Anpassungen (z. B. quartalsweise)
- „Feinschliff" des Depots mit der Zielsetzung, eine positive, risikoadjustierte Überrendite (sog. Alpha) zu erwirtschaften
- In der Praxis: Anwendung durch Derivate-Overlays
### Fachliche Aussage
Die TAA passt Assetklassengewichte kurz- und langfristig an die erwartete relative Performance an, akzeptiert systematisches Risiko und zielt über Derivate-Overlays auf risikoadjustiertes Alpha.
### React-Vorschlag
`NestedBulletList` mit hervorgehobener Definition.

## Folie 27 - Der Prozess im Überblick
### In der MD problematisch/fehlend
Zeile 336: nur Überschrift "Der Prozess im Überblick". Das gesamte komplexe Prozess-Schaubild fehlt in der MD vollständig.
### Fehlende visuelle Inhalte
Großes, gegliedertes Prozess-Schaubild (Boxen-Matrix mit Phasen-Ellipsen rechts):
- Oben eine Box "Kunde" mit vier blauen Kästchen: "Risikotoleranz", "Anlagehorizont", "Steuern", "Beschränkungen".
- Darunter ein großer Block "Asset Manager", in drei Aktivitätszeilen gegliedert, links jeweils ein graues Pfeil-Eingangsfeld:
  1) Eingang links "Markteinschätzung: BIP, Inflation, Währungen" -> Block "Strategische Asset Allocation" mit Kästchen "Aktien", "Anleihen", "..." (obere Reihe) und "Inland", "Ausland" (untere Reihe). Rechts daneben Phasen-Ellipse "Planung".
  2) Eingang links "Asset Valuation: Intrinsische Verfahren, Marktverfahren" -> Block "Taktische Asset Selection" mit Kästchen "Welche Aktie?", "Welche Anleihe?", "Welche ...?". Rechts Phasen-Ellipse "Realisierung".
  3) Eingang links "Handelskosten: Commission, Bid-Ask-Spread, Einfluss der Order" -> Block "Execution" mit Kästchen "Anzahl Trades", "Größe der Trades", "Auswahl Partner". (Die Ellipse "Realisierung" liegt auf Höhe der Zeilen 2 und 3.)
- Unten separate Box "Performance Messung" mit Kästchen "Kosten PFM", "Risiko/Rendite", "Outperform?". Rechts Phasen-Ellipse "Kontrolle".
### Visuelle Rekonstruktion
```
[Kunde: Risikotoleranz | Anlagehorizont | Steuern | Beschränkungen]
[ASSET MANAGER]
Markteinschätzung -> [Strategische AA: Aktien|Anleihen|... / Inland|Ausland]   (Planung)
Asset Valuation   -> [Taktische Asset Selection: Welche Aktie?|Anleihe?|...?]  (Realisierung)
Handelskosten     -> [Execution: Anzahl Trades|Größe der Trades|Auswahl Partner]
[Performance Messung: Kosten PFM | Risiko/Rendite | Outperform?]               (Kontrolle)
```
### Inhaltliche Rekonstruktion
Vier Phasen mit Inputs und Aktivitäten:
- Planung: Input Markteinschätzung (BIP, Inflation, Währungen) -> Strategische Asset Allocation (Aktien/Anleihen/...; Inland/Ausland)
- Realisierung: Input Asset Valuation (intrinsische Verfahren, Marktverfahren) -> Taktische Asset Selection (Welche Aktie/Anleihe/...?); Input Handelskosten (Commission, Bid-Ask-Spread, Einfluss der Order) -> Execution (Anzahl Trades, Größe der Trades, Auswahl Partner)
- Kontrolle: Performance Messung (Kosten PFM, Risiko/Rendite, Outperform?)
Beteiligte: Kunde (Risikotoleranz, Anlagehorizont, Steuern, Beschränkungen) und Asset Manager.
### Fachliche Aussage
Das Schaubild fasst den gesamten Investmentprozess zusammen: ausgehend von Kundenvorgaben durchläuft der Asset Manager Planung (SAA), Realisierung (Taktische Selektion + Execution) und Kontrolle (Performancemessung), jeweils mit spezifischen Inputs.
### React-Vorschlag
`ProcessOverviewMatrix` - Grid-Layout mit Kundenbox oben, drei Input->Aktivität-Zeilen im Asset-Manager-Block, Performance-Messung unten und rechtsseitiger Phasenspalte (Planung/Realisierung/Kontrolle).

## Folie 28 - Beispiel: Taktische Asset Allocation bei Anleihen
### In der MD problematisch/fehlend
Zeilen 341-350: Markitdown hat versucht, das Schaubild als zwei Tabellen abzubilden (Rendite|Laufzeit|Schuldner|Rating sowie Coupon|Stückzins|Duration|Konvexität), aber die Hierarchie/Baumstruktur und die zweite Ebene "Einzeltitel" sind nur fragmentarisch erfasst.
### Fehlende visuelle Inhalte
Hierarchisches Baumdiagramm (Folientitel-Untertitel "Beispiel: Taktische Asset Allocation"):
- Oben dunkelblaue, zweizeilige Kopfbox (weiße Schrift) "Taktische Asset Allocation bei Anleihen".
- Davon vier Äste zu vier hellblauen Boxen: "Rendite", "Laufzeit", "Schuldner", "Rating".
  - Unter "Laufzeit" eine hellblaue Box mit Aufzählung: Kurzfristig; Mittelfristig; langfristig
  - Unter "Schuldner" eine hellblaue Box mit Aufzählung: Sovereigns; Supranationals; Corporates
  - Unter "Rating" eine hellblaue Box mit Aufzählung: Investm. Grade; Specul. Grade; Junk Bonds
  - ("Rendite" hat keine Unterbox.)
- Aus diesen vier Ästen führt eine Linie zusammen nach unten zu einer mittigen hellblauen Box "Einzeltitel".
- Von "Einzeltitel" führen vier Äste zu vier hellblauen Boxen: "Coupon", "Stückzins", "Duration", "Konvexität".
### Visuelle Rekonstruktion
```
        [Taktische Asset Allocation bei Anleihen]
       /         |              |             \
 [Rendite]   [Laufzeit]     [Schuldner]      [Rating]
             - Kurzfristig  - Sovereigns     - Investm. Grade
             - Mittelfristig- Supranationals - Specul. Grade
             - langfristig  - Corporates     - Junk Bonds
                         |
                    [Einzeltitel]
       /         |              |             \
  [Coupon]   [Stückzins]    [Duration]     [Konvexität]
```
### Inhaltliche Rekonstruktion
Taktische Asset Allocation bei Anleihen - Auswahlkriterien:
| Rendite | Laufzeit | Schuldner | Rating |
|---|---|---|---|
| | Kurzfristig | Sovereigns | Investm. Grade |
| | Mittelfristig | Supranationals | Specul. Grade |
| | langfristig | Corporates | Junk Bonds |

Einzeltitel-Merkmale: Coupon | Stückzins | Duration | Konvexität
### Fachliche Aussage
Bei Anleihen erfolgt die taktische Auswahl entlang von Rendite, Laufzeit, Schuldnertyp und Rating; auf Einzeltitelebene werden Coupon, Stückzins, Duration und Konvexität betrachtet.
### React-Vorschlag
`BondSelectionTree` - zweistufiges Baumdiagramm: obere Ebene vier Kriterien (mit Listen-Unterboxen bei Laufzeit/Schuldner/Rating) -> Knoten "Einzeltitel" -> untere Ebene vier Einzeltitel-Merkmale.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 4: Investmentschritte-Kreislauf mit Highlight-Overlay "Asset Allocation Prozess"
2. Folie 5: Magisches Dreieck (Rendite/Sicherheit/Liquidität) mit Doppelpfeilen
3. Folie 7: Renditeansatz-Baum (Relative vs. Absolute Return)
4. Folie 15: Diversifikationskurve (unsystematisches vs. systematisches Risiko)
5. Folie 18: Zwei gegenübergestellte Tortendiagramme (einfach 60/40 vs. aufwändig)
6. Folie 19: Baumdiagramm der Diversifikationsebenen (SAA/TAA)
7. Folie 21: Zitat Max Holzer + Brinson-Tortendiagramm (91,5%)
8. Folie 27: Prozess-Schaubild (Kunde/Asset Manager/Performance, Phasen Planung/Realisierung/Kontrolle)
9. Folie 28: Anleihen-Baumdiagramm (vier Kriterien -> Einzeltitel -> vier Merkmale)

## Kann vereinfacht werden

- Reine Textfolien (6, 8, 9, 10, 11, 12, 14, 16, 17, 20, 22, 23, 24, 25, 26) als verschachtelte Bullet-Listen mit fetten Hauptpunkten und ggf. Callouts
- Blau/fette Hervorhebungen von Schlüsselbegriffen als Akzentfarbe; aktive Agenda-Punkte (Folie 2) als Highlight
- Foto-Banner der Titelfolien (1, 3, 13) weglassen oder durch reine Titelbox ersetzen

## Nicht fachlich relevant

- HBW-Logo
- Kopfzeile und Folien-Footer (z. B. "Asset Management / CS / Folie 203")
- Copyright-Zeile "© 2026 - Hochschule der Bayerischen Wirtschaft"
- Versionskennung "V26-04-23"
- exakte Folienpositionierung und dekorative Bildästhetik (Kampus-/Studierendenfotos, Porträtfoto Holzer)

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
export const investmentSteps = [
  { step: 1, label: 'Investmentziele' },
  { step: 2, label: 'Strategische Asset Allocation', assetAllocationProcess: true },
  { step: 3, label: 'Portfoliomanagement i.e.S.', assetAllocationProcess: true },
  { step: 4, label: 'Finanzcontrolling' },
]

export const transactionRisks = [
  'Adressenausfall- oder Bonitätsrisiko',
  'Marktpreisrisiko',
  'Zinsänderungsrisiko',
  'Wiederanlagerisiko',
  'Politische Risiken',
  'Gesamtwirtschaftliche Risiken',
  'Währungsrisiken',
]
```

```js
// Folie 21: Determinanten der Varianz der Portfolioperformance (Brinson et al. 1986)
export const performanceVarianceDeterminants = [
  { label: 'Asset Allocation', share: 91.5 },
  { label: 'Securities Selection', share: 4.6 },
  { label: 'Timing', share: 1.8 },
  { label: 'Other Factors', share: 2.1 },
]

// Folie 28: Taktische Asset Allocation bei Anleihen - Auswahlkriterien
export const bondSelectionCriteria = {
  Rendite: [],
  Laufzeit: ['Kurzfristig', 'Mittelfristig', 'langfristig'],
  Schuldner: ['Sovereigns', 'Supranationals', 'Corporates'],
  Rating: ['Investm. Grade', 'Specul. Grade', 'Junk Bonds'],
}
export const bondSingleSecurityFeatures = ['Coupon', 'Stückzins', 'Duration', 'Konvexität']
```
