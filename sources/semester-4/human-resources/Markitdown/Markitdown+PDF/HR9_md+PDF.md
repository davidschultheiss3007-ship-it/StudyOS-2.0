# HR9_md+PDF - Personalcontrolling, Onboarding und Laufbahnplanung: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-09-personalcontrolling.md` um die visuellen Inhalte, die bei der Markdown-Extraktion aus `skript-09-personalcontrolling.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Bruch-Formeln, Rechenschemata, Prozessflüsse, KPI-Karten, Onboarding-Icons, Schaubilder oder Bildaussagen verloren gehen.

**Quelle:** `skript-09-personalcontrolling.pdf` mit 36 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die graue Kopfzeile, der Folien-Footer und die Copyright-Zeile (`© 2026 – Hochschule der Bayerischen Wirtschaft`) sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Bruch-Formeln, Tabellen, Rechenschemata, Schaubilder, KPI-Karten und die inhaltlich aussagekräftigen Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Viele Folien (insbesondere Formel- und KPI-Folien wie 4, 5, 8, 9, 21–24) wurden durch die PDF-Konvertierung in fehlerhafte Tabellenfragmente mit Artefakten (`x 100cccccc`, zusammengeklebte Wörter) zerlegt. Diese Inhalte sind in React als echte Formeln, Cards, Tabellen oder Prozessmodelle neu aufzubauen.
2. **Bruch-Formeln semantisch nachbauen:** Die Kennzahlen der Personalstatistik (Folien 4, 5, 7, 8, 9) sind Brüche im Format „Bezeichnung = Zähler / Nenner“ mit waagerechtem Bruchstrich. Eine `FractionFormula`-Komponente (Zähler über Bruchstrich über Nenner) ist hierfür durchgängig zu verwenden.
3. **Onboarding-Phasen einheitlich gestalten:** Folien 14–20 sind gleich aufgebaut (Liste links, schwarzes Piktogramm rechts). Sie bilden zusammen die Onboarding-Phasen und sollten als wiederverwendbare `OnboardingStep`-Komponente, ggf. in einem `OnboardingStepper`/`TabSet`, umgesetzt werden.
4. **Modul-Akzentfarben für Laufbahnplanung erhalten:** Die Folien 21–27 nutzen konsistente Farbcodierung (grün/violett/orange/rot). Diese Farblogik trägt Bedeutung (Pfade, Phasen, Anteile) und ist über die Modul-Akzentfarben abzubilden.
5. **Nicht sicher lesbare Bildinhalte nicht erfinden:** Bei den eingebetteten Grafiken (Folie 11 Reporting-Tabelle, Folie 33 Ergonomie-Skizze, Folien 34–36 Schilder/Pläne) sind kleine Zahlen-/Detailbeschriftungen im Render nicht zuverlässig ablesbar. Solche Werte dürfen nicht als gesicherte Fakten übernommen werden; nur verifizierbare Inhalte angeben.
6. **Quellenhinweise erhalten:** Quelle bei Folie 11 (`business-wissen.de`) und die EU-Bildschirmrichtlinie `90/270/EWG` bei Folie 33 beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---|---|
| `IntroTextBlock` / `BulletList` | 1, 6 | Einleitungstext mit einfacher Aufzählung |
| `RecipientList` | 2 | Externe Empfänger als Pfeil-Bullets mit Unterliste |
| `CriteriaList` | 3 | Gliederungsmerkmale der Personalstruktur |
| `FormulaList` / `FractionFormula` | 4, 5, 8, 9 | Bruch-Kennzahlen (Zähler/Nenner) darstellen |
| `CalculationScheme` / `CalcColumn` | 7 | Zweispaltiges Soll-/Ist-Arbeitszeit-Schema |
| `CalloutBox` | 10 | Gerahmte Ziel-Box mit Aufzählung |
| `ExampleImage` / `DataTable` | 11 | Eingebettete Reporting-Tabelle als Beispielbild |
| `NumberedDefinitionList` | 12, 13 | HR-KPI-Liste (Titel + Definition) |
| `OnboardingStep` / `OnboardingStepper` | 14–20 | Onboarding-Phasen mit Liste und Icon |
| `KpiStatCards` / `StatCard` | 21 | Drei KPI-Karten zur Laufbahnplanung |
| `ProcessStepFlow` | 22 | Vier verbundene Phasen-Karten |
| `CareerPathColumns` | 23 | Drei Karrierepfade mit Stufenliste |
| `LearningModel702010` | 24 | 70/20/10-Lernmodell mit Merksatz-Balken |
| `DevelopmentPlanLayout` | 25, 26 | Entwicklungsplan: Prozessschritte + Rollen |
| `CompetencyRatingForm` / `RatingScaleItem` | 27 | Einschätzungsbogen mit 5er-Skala |
| `DefinitionBlock` | 28 | Definition mit Callout für Hervorhebung |
| `MutualAdaptationDiagram` | 29 | Person/Stelle mit Doppelpfeil |
| `CircularNodeDiagram` | 30 | Fünf Ansatzpunkte kreisförmig |
| `GoalsAndPrinciplesList` | 31 | Ziele und Grundprinzipien |
| `ContentDimensionsList` | 32 | Arbeitsinhalte-Dimensionen + Ziel/Kriterien |
| `ErgonomicWorkplaceFigure` | 33 | Definition + Schutzausrüstung + Ergonomie-Skizze |
| `SafetySignGallery` | 34 | Sicherheitsbeschilderung als Bildgalerie |
| `EscapeRoutePlanFigure` | 35 | Flucht- und Rettungswegeplan mit Legende |
| `ConstructionSafetyGallery` | 36 | Baustellensicherung als Foto-Galerie |

---

# Folienweise Ergänzungen

## Folie 1 - Personalcontrolling / Personalstatistik
### In der MD vorhanden
Der Text ist vorhanden, aber stark zerbrochen und ohne Leerzeichen ("Im operativenControlling/ Personalstatistikarbeitet manimWesentlichenmitKennzahlen."). Die Bezugswert-Aufzählung ist teils in fehlerhafte Tabellen-Fragmente zerlegt.
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafiken. Aufbau: Einleitungssatz oben, dann ein eingerückter Aufzählungsblock mit drei Spiegelstrich-Punkten (•), darunter zwei abschließende Absätze. Keine Icons, Diagramme oder Tabellen.
### Visuelle Rekonstruktion
```
Kennzahlen → aussagefähig durch Vergleich mit Bezugswerten:
  • Vorjahres- oder Vormonatswerte
  • Planungswerte (Ziel- und Soll-Werte)
  • Branchendurchschnittswerte
```
### Inhaltliche Rekonstruktion
- Im operativen Controlling / Personalstatistik arbeitet man im Wesentlichen mit Kennzahlen.
- Aussagefähig werden die Kennzahlen durch den Vergleich mit Bezugswerten. Solche Bezugswerte können sein:
  - Vorjahres- oder Vormonatswerte
  - Planungswerte (Ziel- und Soll-Werte)
  - Branchendurchschnittswerte
- Die Personalstatistik ist ein primär internes Informationsinstrument für Personalleitung, Unternehmensleitung, Vorgesetzte, Betriebsrat und Belegschaft.
- Sie ist aber auch ein externes Instrument (da teilweise die gesetzliche Verpflichtung besteht) Informationen an außerbetriebliche Stellen weiterzugeben.
### Fachliche Aussage
Personalstatistik als Teil des operativen Personalcontrollings arbeitet kennzahlenbasiert; Kennzahlen werden erst durch Vergleichswerte aussagekräftig. Sie dient primär intern, teils aber auch gesetzlich verpflichtend extern.
### React-Vorschlag
`IntroTextBlock` mit `BulletList` für die Bezugswerte – einfache Textsektion, kein Sonderlayout nötig.

## Folie 2 - Personalstatistik / Externer Empfänger
### In der MD vorhanden
Alle Aufzählungspunkte sind im Text enthalten, aber mit zusammengeklebten Wörtern (z.B. "Sozialversicherungsträger", "Arbeitsämter"). Die Unterliste (Personalstruktur, Personalbewegungen, …) ist korrekt vorhanden.
### Fehlende visuelle Inhalte
Reine Textfolie. Pfeil-Aufzählung (➢ als Bullet) für die externen Empfänger, der letzte Pfeilpunkt enthält eine eingerückte Punkt-Unterliste (•) der fünf Auskunftsbereiche. Keine Grafik.
### Visuelle Rekonstruktion
```
➢ Statistische Ämter
➢ Sozialversicherungsträger
➢ Arbeitsämter
➢ Kammern, Verbände, Gewerkschaften, sonstige Interessenten
➢ betriebliche Personalstatistik → folgende Auskunftsbereiche:
     • Personalstruktur
     • Personalbewegungen
     • Arbeits- und Ausfallzeiten
     • Personalaufwand
     • Sozialleistungen
```
### Inhaltliche Rekonstruktion
- Statistische Ämter (z.B. Erhebungen zu Verdienst- und Beschäftigungsstrukturen)
- Sozialversicherungsträger (z.B. Berechnung und Hochrechnung der gesetzlichen Unfall-, Kranken- und Rentenversicherungsbeiträge)
- Arbeitsämter (z.B. Informationen zu Einstellungen und Entlassungen, Meldung offener Stellen und Ausbildungsplätze; Zahl der Schwerbehinderten, Jahresmeldung zu Beschäftigungsdauer und Entgelt der Arbeitnehmer)
- Zusätzlich erhalten Kammern, Verbände, Gewerkschaften und andere externe Interessenten (z.B. Aufsichtsorgane des Unternehmens, aber auch Presse, etc.) personalstatistische Informationen
- Die betriebliche Personalstatistik sollte Auskunft über folgende Bereiche geben können:
  - Personalstruktur
  - Personalbewegungen
  - Arbeits- und Ausfallzeiten
  - Personalaufwand
  - Sozialleistungen
### Fachliche Aussage
Zeigt, an welche externen Stellen personalstatistische Daten (teils gesetzlich verpflichtend) gehen, und nennt die fünf inhaltlichen Auskunftsbereiche der betrieblichen Personalstatistik.
### React-Vorschlag
`RecipientList` (Pfeil-Bullets) mit eingebetteter `BulletList` für die fünf Bereiche.

## Folie 3 - Personalstatistik / Personalstruktur
### In der MD vorhanden
Vollständig vorhanden, nur Wort-Zusammenschreibungen. Die sieben Merkmale der Personalstrukturstatistik sind korrekt erfasst.
### Fehlende visuelle Inhalte
Reine Textfolie mit Pfeil-Aufzählung (➢) unter einem einleitenden Absatz. Keine Grafik, kein Diagramm.
### Visuelle Rekonstruktion
```
Personalstrukturstatistik → Merkmale der Belegschaftszusammensetzung (➢-Liste)
```
### Inhaltliche Rekonstruktion
Die Personalstrukturstatistik dient zur Veranschaulichung der Zusammensetzung der Belegschaft eines Unternehmens und kann z.B. nach folgenden Merkmalen durchgeführt werden:
- Arbeitnehmerart: Auszubildende, Praktikanten, Arbeiter, Angestellte, leitende Angestellte, …
- Art des Vertragsverhältnisses: unbefristet/befristet, Vollzeit/Teilzeit, Tarif / außertariflich, …
- Qualifikationen: Schulabschluss, Berufsausbildung, Studium, Zusatzausbildungen, …
- Berufs- und Funktionskategorien (Assistenz, Ingenieur, Filialleiter, Disponent, …)
- Dauer der Betriebszugehörigkeit, Alter, Familienstand und Geschlecht
- Aufbauorganisatorische Merkmale (Standort, Bereiche, Abteilungen, …)
- Verantwortungsstufe im Unternehmen: Führungsebene, Fachlaufbahnebene, Projektlaufbahnebene
### Fachliche Aussage
Listet die Gliederungsmerkmale auf, nach denen die Belegschaft strukturell ausgewertet werden kann.
### React-Vorschlag
`CriteriaList` – schlichte Pfeil-Aufzählung; Merkmalsname optional fett, Beispiele dahinter.

## Folie 4 - Personalstatistik / Personalstruktur
### In der MD vorhanden
Die MD hat die Bruch-Formeln völlig zerrissen (Zähler/Nenner in unzusammenhängende Tabellenzellen aufgeteilt, "100cccccc"-artige Artefakte). Die vier Formeln sind als Struktur nicht erkennbar. (Folientitel auf der Folie: "Personalstatistik / Personalstruktur" – ohne den Zusatz "Quoten-Formeln".)
### Fehlende visuelle Inhalte
Vier als Bruch dargestellte Kennzahlenformeln, jeweils Format "Bezeichnung = Zähler / Nenner" mit waagerechtem Bruchstrich. Links die Quotenbezeichnung, Mitte das "="-Zeichen, rechts der Bruch. Vor den drei letzten Formeln steht die Zeile "Beispiele:". Keine sonstige Grafik.
### Visuelle Rekonstruktion
```
Quote (i)                   = (durchschnittliche Anzahl der Gruppe (i) p.a. x 100) / (durchschnittlicher Personalbestand p.a.)

Beispiele:
Angestellten-/Arbeiterquote = (durchschnittliche Anzahl der Angestellten / Arbeiter p.a. x 100) / (durchschnittlicher Personalbestand p.a.)
Führungskräftequote         = (durchschnittliche Anzahl der Führungskräfte p.a. x 100) / (durchschnittlicher Personalbestand p.a.)
Teilzeitquote               = (durchschnittliche Anzahl der TZ-Beschäftigten p.a. x 100) / (durchschnittliche Anzahl aller Beschäftigten p.a.)
```
### Inhaltliche Rekonstruktion
- Quote (i) = durchschnittliche Anzahl der Gruppe (i) p.a. x 100 / durchschnittlicher Personalbestand p.a.
- Beispiele:
  - Angestellten-/Arbeiterquote = durchschnittliche Anzahl der Angestellten / Arbeiter p.a. x 100 / durchschnittlicher Personalbestand p.a.
  - Führungskräftequote = durchschnittliche Anzahl der Führungskräfte p.a. x 100 / durchschnittlicher Personalbestand p.a.
  - Teilzeitquote = durchschnittliche Anzahl der TZ-Beschäftigten p.a. x 100 / durchschnittliche Anzahl aller Beschäftigten p.a.
### Fachliche Aussage
Definiert die allgemeine Strukturquote (Anteil einer Gruppe am Personalbestand) und konkretisiert sie an Angestellten-/Arbeiter-, Führungskräfte- und Teilzeitquote.
### React-Vorschlag
`FormulaList` mit `FractionFormula`-Komponente (Zähler über Bruchstrich über Nenner), Label links, "=" mittig; Zwischenzeile "Beispiele:".

## Folie 5 - Personalstatistik / Personalbewegungen
### In der MD vorhanden
Die beiden Bruch-Formeln (Fluktuationsquote, Neueinstellungsquote) sind in der MD in fehlerhafte Tabellen mit Artefakten ("x 100cccccc", "x 100CCCCCC") zersplittert. Die erläuternden Aufzählungen sind vorhanden.
### Fehlende visuelle Inhalte
Zwei Bruch-Formeln im Format "Bezeichnung = Zähler / Nenner" mit waagerechtem Bruchstrich. Dazwischen eine Punkt-Aufzählung (•) zur Zusammensetzung der Abgänge unter der Zwischenüberschrift "Abgänge setzen sich zusammen aus:". Keine sonstige Grafik.
### Visuelle Rekonstruktion
```
Die Personalbewegungsstatistik zeigt Zu- und Abgänge im Personal auf

Außerbetriebliche Abgänge:
Fluktuationsquote gesamt = (Anzahl aller Abgänge p.a. x 100) / (durchschnittliche Anzahl der Arbeitnehmer p.a.)

Abgänge setzen sich zusammen aus:
  • „Natürlicher Fluktuation": Abgänge infolge Pensionierung, Tod
  • Kündigungen / respektive einvernehmliche Trennungsvereinbarungen.

Außerbetriebliche Zugänge:
Neueinstellungsquote = (Anzahl aller Zugänge der Periode(i) x 100) / (durchschnittliche Anzahl der Arbeitnehmer der Periode(i))
```
### Inhaltliche Rekonstruktion
- Die Personalbewegungsstatistik zeigt Zu- und Abgänge im Personal auf
- Außerbetriebliche Abgänge: Fluktuationsquote gesamt = Anzahl aller Abgänge p.a. x 100 / durchschnittliche Anzahl der Arbeitnehmer p.a.
- Abgänge setzen sich zusammen aus:
  - „Natürlicher Fluktuation": Abgänge infolge Pensionierung, Tod
  - Kündigungen / respektive einvernehmliche Trennungsvereinbarungen.
- Außerbetriebliche Zugänge: Neueinstellungsquote = Anzahl aller Zugänge der Periode(i) x 100 / durchschnittliche Anzahl der Arbeitnehmer der Periode(i)
### Fachliche Aussage
Erfasst Personalbewegungen über Fluktuations- und Neueinstellungsquote; unterscheidet natürliche Fluktuation von Kündigungen/Trennungen.
### React-Vorschlag
`FormulaList` mit `FractionFormula`; Zwischenüberschriften "Außerbetriebliche Abgänge/Zugänge" als Subheadings, Abgangsarten als `BulletList`.

## Folie 6 - Personalstatistik / Arbeits- und Ausfallzeiten
### In der MD vorhanden
Vollständig, nur teils in fehlerhafte Tabellenfragmente und Zusammenschreibungen zerlegt. Alle Aufzählungspunkte erkennbar.
### Fehlende visuelle Inhalte
Reine Textfolie mit einfacher Punkt-Aufzählung (•) unter der Überschrift "Ausfallzeiten:". Keine Grafik.
### Visuelle Rekonstruktion
```
Ausfallzeiten → 11 Spiegelstrich-Punkte (Liste)
```
### Inhaltliche Rekonstruktion
Ausfallzeiten:
- Bezahlte gesetzliche Feiertage
- Urlaub
- Sonderurlaub und Zusatzurlaub (z.B. für Schwerbehinderte)
- Bildungsurlaub, Fortbildungsmaßnahmen
- Krankheit, Kuren und Heilverfahren
- Mutterschutz und Elternzeit
- Unpünktlichkeiten
- Technische Betriebsstörungen
- Streik, Aussperrung
- Wehrübungen
- Arbeitsbefreiungen nach Gesetz, Verordnung oder Tarif (Arztbesuche, Ladungen vor Gericht, Krankheit des Kindes, Pflegefälle in der Familie, …)
### Fachliche Aussage
Definiert die verschiedenen Arten von Ausfallzeiten, die die tatsächliche Arbeitszeit mindern.
### React-Vorschlag
`BulletList` – einfache einspaltige Liste.

## Folie 7 - Personalstatistik / Arbeits- und Ausfallzeiten
### In der MD vorhanden
Der erläuternde Text ist vorhanden. Das zweispaltige Rechenschema (Soll-/Ist-Arbeitszeit) ist in der MD als unstrukturierte Zeilenfolge zusammengeflossen, die Zuordnung der +/- -Posten zu den Spalten und die abschließende Bruch-Formel sind verloren. (Folientitel auf der Folie: "Personalstatistik / Arbeits- und Ausfallzeiten".)
### Fehlende visuelle Inhalte
Zwei nebeneinanderstehende Rechen-/Ableitungsblöcke (linke Spalte → Soll-Arbeitszeit, rechte Spalte → Ist-Arbeitszeit) mit "-"/"+"-Vorzeichen und Ergebniszeilen ("= Soll-Arbeitszeit", "= Ist-Arbeitszeit", jeweils fett). Darunter zentriert eine Bruch-Formel (Zähler und Nenner fett unterstrichen).
### Visuelle Rekonstruktion
```
Vertraglich vereinbarte Arbeitszeit          Soll-Arbeitszeit
 - Feiertage (Wochentage)                      - Ausfallzeiten (bezahlte und unbezahlte)
 - allgemeine bezahlte und/oder                + Effektive Mehrarbeitszeiten
   unbezahlte Freistellung                     = Ist-Arbeitszeit
 = Soll-Arbeitszeit

Quote der effektiven Arbeitszeit = Ist-Arbeitszeit (Tage/Std.) / Soll-Arbeitszeit (Tage/Std.)
```
### Inhaltliche Rekonstruktion
- Im Unternehmen kommt es häufig zu einer starken Diskrepanz zwischen vertraglicher und tatsächlich geleisteter Arbeitszeit.
- Die vereinbarte Arbeitszeit wird oft durch Mehrarbeitszeiten (Überstunden) erhöht und durch Ausfallzeiten (Fehlzeiten) vermindert. Daher ist die Errechnung der effektiven Arbeitszeit für ein Unternehmen eine wichtige Grundlage der Personalbedarfsplanung.
- Soll-Arbeitszeit = Vertraglich vereinbarte Arbeitszeit − Feiertage (Wochentage) − allgemeine bezahlte und/oder unbezahlte Freistellung
- Ist-Arbeitszeit = Soll-Arbeitszeit − Ausfallzeiten (bezahlte und unbezahlte) + Effektive Mehrarbeitszeiten
- Quote der effektiven Arbeitszeit = Ist-Arbeitszeit (Tage/Std.) / Soll-Arbeitszeit (Tage/Std.)
### Fachliche Aussage
Zeigt die schrittweise Ableitung von Soll- und Ist-Arbeitszeit und die Quote der effektiven Arbeitszeit als Kennzahl der tatsächlichen Leistung.
### React-Vorschlag
`CalculationScheme` mit zwei Spalten (`CalcColumn`, je Vorzeichenzeilen) und nachgestellter `FractionFormula`.

## Folie 8 - Personalstatistik / Personalkosten
### In der MD vorhanden
Einleitender Text vorhanden (mit Zusammenschreibung "Beihilfenwichtige Größen"; auf der Folie als "Beihilfen ... wichtige Größen" zu lesen). Die vier Strukturkennzahl-Formeln sind als Brüche nicht erkennbar – Zähler/Nenner stehen unverbunden untereinander.
### Fehlende visuelle Inhalte
Vier Bruch-Formeln im Format "Bezeichnung = Zähler / Nenner" mit waagerechtem Bruchstrich, links Bezeichnung, mittig "=". Darüber fette Zwischenüberschrift "Kennzahlen zur Personalkostenstruktur". Hinweis: In der ersten Formel steht auf der Folie "Personalkosten * 100" (Multiplikationssymbol als Stern "*"). Keine sonstige Grafik.
### Visuelle Rekonstruktion
```
Anteil der Personalkosten an den Gesamtkosten = (Personalkosten * 100) / Gesamtkosten (lt. GuV)
Anteil des Entgelts an den Personalkosten       = Entgelt (Löhne und Gehälter) / Personalkosten gesamt
Anteil der Zusatzkosten an den Personalkosten   = Personalzusatzkosten / Personalkosten gesamt
Anteil der freiwilligen Leistungen an den PK    = Freiwillige Leistungen / Personalkosten gesamt
```
### Inhaltliche Rekonstruktion
- Bei den Personalkosten sind sowohl die Entgelte (Löhne, Gehälter, Zulagen, Prämien, Erfolgs- und Kapitalbeteiligungen), als auch die Personalzusatzkosten (gesetzliche Sozialleistungen) und die freiwilligen Leistungen (z.B. Bildungskosten, Kantine, Beihilfen) wichtige Größen.
- Diese Personalkosten können dabei – je nach Fragestellung – nach Kostenarten, Mitarbeitergruppen, Kostenträgern (organisatorische Einheiten) und Regionen (auch in Kombinationen) ausgewertet werden.
- Kennzahlen zur Personalkostenstruktur:
  - Anteil der Personalkosten an den Gesamtkosten = Personalkosten * 100 / Gesamtkosten (lt. GuV)
  - Anteil des Entgelts an den Personalkosten = Entgelt (Löhne und Gehälter) / Personalkosten gesamt
  - Anteil der Zusatzkosten an den Personalkosten = Personalzusatzkosten / Personalkosten gesamt
  - Anteil der freiwilligen Leistungen an den Personalkosten = Freiwillige Leistungen / Personalkosten gesamt
### Fachliche Aussage
Definiert die Bestandteile der Personalkosten und vier Strukturkennzahlen zur Analyse ihrer Zusammensetzung.
### React-Vorschlag
`FormulaList` mit `FractionFormula`, eingeleitet durch eine fette Subheading.

## Folie 9 - Personalstatistik / Personalkosten – Kennzahlen
### In der MD vorhanden
Die beiden erläuternden Aufzählungspunkte sind als zerbrochene Tabellen vorhanden. Die drei Quotienten (Personalkosten je Bezugsgröße) sind als bloße Wortpaare untereinander erfasst, der Bruchcharakter fehlt.
### Fehlende visuelle Inhalte
Drei zentriert untereinander stehende Bruch-Kennzahlen (Zähler "Personalkosten" unterstrichen über wechselndem Nenner). Darüber zwei Punkt-Aufzählungstexte (•). Keine Grafik.
### Visuelle Rekonstruktion
```
Personalkosten / Umsatz
Personalkosten / Produktion
Personalkosten / Gewinn
```
### Inhaltliche Rekonstruktion
- Die Auskunft über die Entwicklung der jeweiligen Personalkosten pro Kopf für die verschiedenen Mitarbeitergruppen, organisatorischen Einheiten und Regionen geben
- Die Auskunft über die Entwicklung der Personalkosten pro Leistungseinheit für die verschiedenen Produkte, organisatorischen Einheiten und Regionen geben
- Kennzahlen:
  - Personalkosten / Umsatz
  - Personalkosten / Produktion
  - Personalkosten / Gewinn
### Fachliche Aussage
Personalkosten werden zu Bezugsgrößen (Umsatz, Produktion, Gewinn) ins Verhältnis gesetzt, um ihre Effizienz und Entwicklung pro Kopf bzw. pro Leistungseinheit zu beurteilen.
### React-Vorschlag
`FormulaList` (zentriert) mit drei `FractionFormula`, davor `BulletList` mit den zwei Aussagezielen.

## Folie 10 - Personalstatistik / Personalkosten – Ziele
### In der MD vorhanden
Text vollständig vorhanden. Nicht ersichtlich ist die visuelle Hervorhebung.
### Fehlende visuelle Inhalte
Der gesamte Inhalt steht in einer gerahmten Box mit abgerundeten Ecken (grauer dünner Rahmen, weiße Füllung), mittig auf der Folie. Innerhalb: einleitender Satz, dann zwei Punkt-Spiegelstriche (•). Keine weitere Grafik.
### Visuelle Rekonstruktion
```
┌────────────────────────────────────────────────────┐
│ Als wichtige Unternehmensziele in diesem            │
│ Zusammenhang gelten z.B. die Vorgaben, dass,        │
│  • die Steigerungsrate des Umsatzes nicht durch die │
│    Steigerungsrate der Personalkosten übertroffen   │
│    wird,                                            │
│  • die Zunahme des Personalbestandes nicht über     │
│    der Steigerungsrate des Umsatzes liegt.          │
└────────────────────────────────────────────────────┘
```
### Inhaltliche Rekonstruktion
Als wichtige Unternehmensziele in diesem Zusammenhang gelten z.B. die Vorgaben, dass,
- die Steigerungsrate des Umsatzes nicht durch die Steigerungsrate der Personalkosten übertroffen wird,
- die Zunahme des Personalbestandes nicht über der Steigerungsrate des Umsatzes liegt.
### Fachliche Aussage
Formuliert zwei Steuerungsziele: Personalkosten dürfen nicht schneller wachsen als der Umsatz, und der Personalbestand nicht schneller als der Umsatz.
### React-Vorschlag
`CalloutBox` (abgerundeter Rahmen) mit `BulletList`.

## Folie 11 - Personalstatistik / Personalkosten – Beispiel
### In der MD vorhanden
Die MD enthält zu dieser Folie praktisch nur den Titel und die Quellenangabe – die gesamte Tabelle ist als Bild eingebettet und wurde NICHT extrahiert.
### Fehlende visuelle Inhalte
Große, als Bild eingebettete Excel-Tabelle "Personalkennzahlen für (Bereich)". Aufbau (soweit im Render erkennbar):
- Kopfzeile gelb/orange hinterlegt: linke Beschriftungsspalte, daneben eine schmale Spalte ("Werte"), danach eine breite Reihe von Monatsspalten mit Datumsangabe ("Berichtsjahr 2022 / Datum: …").
- Linke Spalte = mehrere Kennzahlen-Blöcke (blaugrau hinterlegt), jeder Block scheint vier Unterzeilen zu haben.
- WICHTIG: Die einzelnen Zellinhalte (Kennzahlen-Namen, Zeilenbeschriftungen wie "Vorjahr/Zielwert/Ist/Abweichung", Zahlenwerte) sind in der gerenderten Grafik zu klein und zu blass, um sie verlässlich abzulesen. Sie können daher NICHT als gesicherte Inhalte rekonstruiert werden. (Die im ursprünglichen Entwurf genannten konkreten Kennzahl-Namen und Zeilenlabels waren nicht verifizierbar und wurden hier entfernt.)
### Visuelle Rekonstruktion
```
Personalkennzahlen für (Bereich)        Berichtsjahr 2022 / Datum: …
┌──────────────────────┬─────────┬─ (Monatsspalten Jan…) ─┐
│ (Kennzahl-Block 1)   │ (4 Zeilen, Werte nicht lesbar)   │
│ (Kennzahl-Block 2)   │ (4 Zeilen, Werte nicht lesbar)   │
│ … weitere Blöcke …   │ …                                │
└──────────────────────┴─────────┴──────────────────────────┘
(genaue Zeilen-/Spaltenbeschriftungen und Zahlenwerte aus der Render-Grafik nicht verlässlich lesbar)
```
### Inhaltliche Rekonstruktion
Reines Anschauungsbeispiel eines Personalkennzahlen-Reportings im Tabellenformat. Es illustriert die zuvor definierte Bezugswert-Logik (Vergleich mit Soll-/Plan-/Vorjahreswerten aus Folie 1) anhand einer konkreten Reporting-Tabelle. Konkrete Zellwerte und Zeilenbeschriftungen sind aus der Render-Grafik nicht verlässlich lesbar und werden daher nicht als Fakten angegeben.
*Quelle: https://www.business-wissen.de/produkt/7707/personalkennzahlen-fuer-die-berichterstattung-aufbereiten/*
### Fachliche Aussage
Beispielhaftes Berichts-Template, das personalstatistische Kennzahlen in einem tabellarischen, monatsbezogenen Reporting-Raster zusammenführt (Veranschaulichung der Bezugswert-Logik in der Praxis).
### React-Vorschlag
`ExampleImage` (eingebettete Tabellengrafik mit Bildunterschrift/Quelle). Ein Nachbau als `DataTable` ist nur ohne konkrete Werte/Zeilenlabels möglich, da diese im Render nicht lesbar sind.

## Folie 12 - Personalstatistik / Top 15 Personal-Kennzahlen 2025 (HR KPIs)
### In der MD vorhanden
Vollständig vorhanden (Punkte 1–7), saubere nummerierte Liste mit "→"-Definitionen.
### Fehlende visuelle Inhalte
Reine Textfolie: nummerierte Liste, je Eintrag fetter Titel und darunter eingerückte Definition mit "→". Keine Grafik.
### Inhaltliche Rekonstruktion
1. Mitarbeiterbindung → Anteil der Mitarbeiter, die im Unternehmen bleiben.
2. Mitarbeiterzufriedenheit → Grad der Zufriedenheit der Mitarbeitenden mit ihrem Arbeitsplatz.
3. Besetzungsdauer → Zeitspanne vom Start des Bewerbungsprozesses bis zur Einstellung.
4. Rekrutierungskosten → Gesamtkosten für die Besetzung einer offenen Stelle.
5. Fehlzeitenquote → Anteil der krankheits- oder sonstig bedingten Abwesenheiten.
6. Fluktuationsrate → Anteil der Mitarbeitenden, die das Unternehmen verlassen.
7. Mitarbeiterproduktivität → Output oder Umsatz pro Mitarbeiter.
### Fachliche Aussage
Erster Teil einer Liste moderner HR-KPIs (1–7) mit Kurzdefinitionen.
### React-Vorschlag
`NumberedDefinitionList` (Titel fett + Definition); Teil 1 von 2 (Fortsetzung auf Folie 13).

## Folie 13 - Personalstatistik / Top 16 Personal-Kennzahlen 2025 (HR KPIs)
### In der MD vorhanden
Vollständig vorhanden (Punkte 8–15). Hinweis: Der Folientitel sagt "Top 16", obwohl die Liste mit Punkt 15 endet (Original-Folientext so beibehalten – auf der Folie tatsächlich "Top 16").
### Fehlende visuelle Inhalte
Reine Textfolie, nummerierte Liste (Fortsetzung von Folie 12), Format wie zuvor (fetter Titel + "→"-Definition). Keine Grafik.
### Inhaltliche Rekonstruktion
8. Verwaltung von Sozialleistungen → Effizienz und Qualität bei der Organisation von Zusatzleistungen.
9. Überstunden → Gesamtzahl der geleisteten Überstunden pro Zeitraum.
10. Mitarbeiterengagement → Grad der emotionalen Bindung und Motivation der Mitarbeitenden.
11. Mitarbeiter-Net-Promoter-Score → Kennzahl, wie wahrscheinlich Mitarbeitende ihren Arbeitgeber weiterempfehlen würden.
12. 90-Tage-Ausfallquote → Anteil der Neueinstellungen, die innerhalb der ersten 90 Tage das Unternehmen wieder verlassen.
13. Schulungskosten pro Mitarbeiter → Durchschnittliche Weiterbildungsausgaben je Mitarbeiter.
14. Diversitätskennzahlen → Anteil verschiedener Gruppen (z. B. Geschlecht, Alter, Herkunft) in der Belegschaft.
15. Arbeitsunfälle → Anzahl der gemeldeten Arbeitsunfälle pro Zeitraum.
### Fachliche Aussage
Zweiter Teil der HR-KPI-Liste (8–15) mit Kurzdefinitionen.
### React-Vorschlag
`NumberedDefinitionList` (Fortsetzung, start=8).

## Folie 14 - Personalintegration / Onboarding – Vorbereitung
### In der MD vorhanden
Textpunkte vollständig vorhanden (mit Zusammenschreibungen). Das Icon fehlt.
### Fehlende visuelle Inhalte
Rechts mittig ein schwarzes Piktogramm: Klemmbrett/Checkliste mit vier abgehakten Listenpunkten (vier Häkchen ✔ jeweils links neben einem Balken). Links die Aufzählung mit quadratischen Bullets (▪). Keine weitere Grafik.
### Visuelle Rekonstruktion
```
[Liste links (▪)]                    [Icon rechts: Klemmbrett mit 4× ✔]
```
### Inhaltliche Rekonstruktion
Vorbereitung:
- Arbeitsbeginn und Zeit für die Einarbeitung vormerken
- Arbeitsplatz vorbereiten
- Arbeits- und Bewerbungsunterlagen prüfen
- Arbeitskollegen, Mitarbeiter/Innen, Führungskräfte und Belegschaftsvertretung unterrichten
- Einarbeitungsplan erstellen
- Soziale Integration übertragen an einen Paten
- Evtl. Hilfe bei der Wohnungssuche stellen.
### Fachliche Aussage
Phase 1 des Onboardings (Vorbereitung): organisatorische und soziale Maßnahmen vor dem ersten Arbeitstag.
### React-Vorschlag
`OnboardingStep` (Titel + `BulletList` links, `Icon` "clipboard-check" rechts).

## Folie 15 - Personalintegration / Onboarding – Begrüßung
### In der MD vorhanden
Textpunkte vollständig vorhanden. Das Icon fehlt.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Piktogramm: zwei ineinandergreifende Hände beim Händedruck (Handshake-Symbol). Links Aufzählung mit quadratischen Bullets (▪).
### Visuelle Rekonstruktion
```
[Liste links (▪)]                    [Icon rechts: 🤝 Handschlag]
```
### Inhaltliche Rekonstruktion
Begrüßung:
- Gespräch über den Terminplan für den ersten Tag führen
- Hilfe für persönliche Probleme durch die Arbeitsaufnahme anbieten
- Fehlende Mitarbeiterdaten aufnehmen
- Unter Umständen ärztliche Eignungsuntersuchung
- Schlüssel, Ausweise und Ähnliches aushändigen
### Fachliche Aussage
Phase 2 des Onboardings (Begrüßung): Maßnahmen am ersten Arbeitstag zum Empfang des neuen Mitarbeiters.
### React-Vorschlag
`OnboardingStep` (Liste links, `Icon` "handshake" rechts).

## Folie 16 - Personalintegration / Onboarding – Information
### In der MD vorhanden
Textpunkte vollständig vorhanden (teils zerbrochene Tabellen, Zusammenschreibungen). Das Icon fehlt.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Piktogramm: ausgefüllter Kreis mit weißem "i" (Info-Symbol). Links Aufzählung mit quadratischen Bullets (▪).
### Visuelle Rekonstruktion
```
[Liste links (▪)]                    [Icon rechts: ⓘ Info-Kreis]
```
### Inhaltliche Rekonstruktion
Information:
- Einarbeitungsplan
- Unternehmen: Betriebsbesichtigung, Entwicklung, Ziele, Vertriebs- und Fertigungsprogramm
- Organisation: hierarchischer Aufbau, Zuständigkeiten, Abläufe, betriebliche Einrichtungen
- Stelle: Stellenbeschreibung, Aufgaben, Verantwortung, Bedeutung, Schnittstellen
- Arbeitszeiten, Pausen, Urlaubsregelung und Entgeltzahlungstermin
- Sicherheitsvorschriften und Sicherheitsbeauftragte
- Unfall- und Gesundheitsgefahren und deren Vermeidung
- Verhalten bei Unfall und Krankheit, Betriebsärztin oder -arzt
- Datenschutzvorschriften und Datenschutzbeauftragte
- Betriebliches Vorschlagswesen
### Fachliche Aussage
Phase 3 des Onboardings (Information): inhaltliche Erstinformation des neuen Mitarbeiters über Unternehmen, Organisation, Stelle, Sicherheit, Datenschutz.
### React-Vorschlag
`OnboardingStep` (Liste links, `Icon` "info-circle" rechts).

## Folie 17 - Personalintegration / Onboarding – Vorstellung
### In der MD vorhanden
Textpunkte vollständig vorhanden. Das Icon fehlt.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Piktogramm: Gruppe von vier nebeneinanderstehenden Personen (Team-/Personengruppen-Symbol, abwechselnd weiblich/männlich dargestellt, sich an den Händen haltend). Links Aufzählung mit quadratischen Bullets (▪).
### Visuelle Rekonstruktion
```
[Liste links (▪)]                    [Icon rechts: 👥👥 vier Personen]
```
### Inhaltliche Rekonstruktion
Vorstellung:
- Führungskräfte
- Belegschaftsvertretung
- Pate
- Team
- Kolleginnen / Kollegen
- Andere Beschäftigte
### Fachliche Aussage
Phase 4 des Onboardings (Vorstellung): persönliches Bekanntmachen des neuen Mitarbeiters mit relevanten Personengruppen.
### React-Vorschlag
`OnboardingStep` (Liste links, `Icon` "people-group" rechts).

## Folie 18 - Personalintegration / Onboarding – Orientierung
### In der MD vorhanden
Textpunkte vollständig vorhanden (teils zerbrochene Tabellen). Das Icon fehlt.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Piktogramm: Arbeitsplatz – Schreibtisch mit zwei Monitoren und einem Bürostuhl. Links Aufzählung mit quadratischen Bullets (▪).
### Visuelle Rekonstruktion
```
[Liste links (▪)]                    [Icon rechts: 🖥️🖥️ + Stuhl (Arbeitsplatz)]
```
### Inhaltliche Rekonstruktion
Orientierung:
- Arbeitsplatz
- Betriebliche Umgebung: Umkleide-, Sanitärräume, schwarzes Brett, Sanitätsräume, Kantine
- Soziale Integration
- Offizielle und inoffizielle Spielregeln
### Fachliche Aussage
Phase 5 des Onboardings (Orientierung): räumliche und soziale Orientierung des neuen Mitarbeiters am und um den Arbeitsplatz.
### React-Vorschlag
`OnboardingStep` (Liste links, `Icon` "desk-workstation" rechts). Folien 14–18 bilden zusammen die fünf `OnboardingStep`-Phasen und könnten in einem `OnboardingStepper`/`TabSet` gruppiert werden.

## Folie 19 - Personalintegration / Onboarding · Einweisung und Training

### In der MD vorhanden
Der Textblock ist in der MD (Zeilen 285-296) vorhanden, jedoch durch Tabellenfragmente zerbrochen: "Arbeitsunterlagen, -abläufe, Befugnisse, Verantwortung erläutern", "Personalentwicklung", "Arbeitsausführung und -ergebnisse prüfen und besprechen, Hilfestellung geben", "Rückmeldung an das Personalwesen über Erfahrungen".

### Fehlende visuelle Inhalte
Rechts neben der Aufzählung steht ein rein dekoratives, schwarzes Flussdiagramm-Icon (Organigramm-Symbol): ein oberer rechteckiger Knoten (gefüllt schwarz), von dem ein Pfeil nach unten auf einen schwarz gefüllten Rauten-/Diamant-Knoten (Entscheidungssymbol) zeigt. Von der Raute gehen zwei Pfeile schräg nach links-unten und rechts-unten auf zwei weitere rechteckige Knoten. Keine Beschriftungen, keine fachlichen Werte - reines Schmuck-Icon ("Prozess/Verzweigung").

### Visuelle Rekonstruktion
```
        [ ▮ ]
          |
          v
        ◆ (Raute)
        /     \
       v       v
     [ ▮ ]   [ ▮ ]
```

### Inhaltliche Rekonstruktion
Einweisung und Training (Aufzählung):
- Arbeitsunterlagen, -abläufe, Befugnisse, Verantwortung erläutern
- Personalentwicklung
- Arbeitsausführung und -ergebnisse prüfen und besprechen, Hilfestellung geben
- Rückmeldung an das Personalwesen über Erfahrungen

### Fachliche Aussage
In der Onboarding-Phase "Einweisung und Training" werden Aufgaben, Befugnisse und Abläufe erläutert, die Arbeitsergebnisse begleitet und Erfahrungen an das Personalwesen zurückgemeldet.

### React-Vorschlag
`OnboardingPhaseList` - Bullet-Liste der Phase; das Flussdiagramm-Icon nur als schlichtes dekoratives Lucide-Icon (z. B. GitFork/Workflow), nicht inhaltlich tragend.

---

## Folie 20 - Personalintegration / Onboarding · Probleme

### In der MD vorhanden
Vollständig vorhanden (Zeilen 298-307), teils in Tabellenfragmenten: "Zeitmangel", "Fehlender Abgleich zwischen Anforderungen und Kompetenzen", "Fehlende systematische Entwicklung", "Fehlende Feedbacks".

### Fehlende visuelle Inhalte
Rechts ein rein dekoratives Uhr-Icon (Outline-Stil, schwarz): runde Analoguhr mit kleinen Markierungspunkten bei 12-, 3-, 6- und 9-Uhr-Position; die Zeiger zeigen ca. auf 4-5 Uhr (visuell abgelesen). Symbolisiert "Zeit/Zeitmangel". Keine fachlichen Werte.

### Inhaltliche Rekonstruktion
Probleme des Onboardings:
- Zeitmangel
- Fehlender Abgleich zwischen Anforderungen und Kompetenzen
- Fehlende systematische Entwicklung
- Fehlende Feedbacks

### Fachliche Aussage
Typische Schwachstellen beim Onboarding sind Zeitmangel, ein fehlender Abgleich von Anforderungen und Kompetenzen, mangelnde systematische Entwicklung und ausbleibendes Feedback.

### React-Vorschlag
`OnboardingPitfallsList` - Aufzählung mit dezentem Clock-Icon als Akzent.

---

## Folie 21 - Laufbahnplanung · Zielsetzung

### In der MD vorhanden
Die Kennzahlen und Texte sind in der MD vorhanden, aber als zerbrochene Tabelle und in falscher Reihenfolge (Zeilen 309-318): "2×", "70%", "40%" sowie die zugehörigen Beschreibungen sind durcheinander.

### Fehlende visuelle Inhalte
Drei nebeneinander stehende Statistik-/KPI-Karten mit farbiger Oberkante und farbig hinterlegtem Großwert (auf der Folie von links nach rechts):
1. Karte (grüne Oberkante, hellgrüner Wert-Hintergrund): Großzahl "70%", Text "der Mitarbeitenden verlassen Unternehmen wegen fehlender Entwicklungsperspektiven".
2. Karte (violette/blau-violette Oberkante, hell-lila Hintergrund): Großzahl "2×", Text "höhere Bindungsrate bei Unternehmen mit strukturierten Laufbahnmodellen".
3. Karte (orange/braune Oberkante, hell-beiger Hintergrund): Großzahl "40%", Text "Produktivitätssteigerung bei gezielter individueller Entwicklungsplanung".

### Visuelle Rekonstruktion
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ ▔grün▔   │ │ ▔lila▔   │ │ ▔orange▔ │
│   70%    │ │    2×    │ │   40%    │
│ verlassen│ │ höhere   │ │ Produkt.-│
│ Untern.  │ │ Bindungs-│ │ steiger. │
│ wg. fehl.│ │ rate b.  │ │ b. gez.  │
│ Entwickl.│ │ struktur.│ │ individ. │
│ perspekt.│ │ Laufbahn-│ │ Entwickl.│
│          │ │ modellen │ │ planung  │
└──────────┘ └──────────┘ └──────────┘
```

### Inhaltliche Rekonstruktion
| Wert | Aussage |
|---|---|
| 70% | der Mitarbeitenden verlassen Unternehmen wegen fehlender Entwicklungsperspektiven |
| 2× | höhere Bindungsrate bei Unternehmen mit strukturierten Laufbahnmodellen |
| 40% | Produktivitätssteigerung bei gezielter individueller Entwicklungsplanung |

### Fachliche Aussage
Strukturierte, individuelle Laufbahnplanung ist betriebswirtschaftlich relevant: Fehlende Perspektiven sind ein Hauptkündigungsgrund (70%), strukturierte Modelle verdoppeln die Bindungsrate und gezielte Entwicklungsplanung steigert die Produktivität um 40%.

### React-Vorschlag
`KpiStatCards` - drei `StatCard`-Komponenten mit Modul-Akzentfarben (green/purple/orange), großer Kennzahl und Beschreibungstext.

---

## Folie 22 - Laufbahnplanung · 4-Phasen

### In der MD problematisch/fehlend
Die MD enthält die Phasennamen und Beschreibungen (Zeilen 321-328), jedoch als zerbrochene Tabelle und mit ineinandergeschobenen Beschreibungstexten ("Ist-Zustand, Bedürfnisse … Laufbahnpfade und Ziele, Maßnahmen und Gespräche, Befähigung …"). Zuordnung ohne Folie nicht eindeutig.

### Fehlende visuelle Inhalte
Vier farbige Phasen-Kacheln nebeneinander, durch eine horizontale Verbindungslinie verbunden (Prozesskette). Jede Kachel hat im farbigen Kopf eine große weiße Ziffer (1-4) plus Phasentitel, darunter ein weißes Feld mit Beschreibung:
- Phase 1 (violett): "Diagnose & Verstehen" - "Ist-Zustand, Bedürfnisse und Stakeholder klären"
- Phase 2 (grün/teal): "Orientierung & Modell" - "Laufbahnpfade und Kriterien entwickeln"
- Phase 3 (orange/gold): "Individuelle Planung" - "Ziele, Maßnahmen und Entwicklungspläne"
- Phase 4 (rot/braun): "Umsetzung & Verankerung" - "Gespräche, Befähigung und Review"
Unter den Kacheln zentriert die Bildunterschrift: "Jede Phase baut auf der vorherigen auf — der Prozess ist iterativ und wird an das Unternehmen angepasst."

### Visuelle Rekonstruktion
```
[1 Diagnose &]──[2 Orientierung]──[3 Individuelle]──[4 Umsetzung &]
[  Verstehen ]  [   & Modell   ]  [    Planung   ]  [ Verankerung ]
 Ist-Zustand,    Laufbahnpfade    Ziele, Maßnahmen   Gespräche,
 Bedürfnisse &   und Kriterien    und Entwicklungs-  Befähigung
 Stakeholder     entwickeln       pläne              und Review
 klären
   (iterativer, ans Unternehmen angepasster Prozess)
```

### Inhaltliche Rekonstruktion
| Phase | Titel | Inhalt |
|---|---|---|
| 1 | Diagnose & Verstehen | Ist-Zustand, Bedürfnisse und Stakeholder klären |
| 2 | Orientierung & Modell | Laufbahnpfade und Kriterien entwickeln |
| 3 | Individuelle Planung | Ziele, Maßnahmen und Entwicklungspläne |
| 4 | Umsetzung & Verankerung | Gespräche, Befähigung und Review |

### Fachliche Aussage
Laufbahnplanung läuft in vier aufeinander aufbauenden, iterativen Phasen ab: Diagnose, Orientierung/Modellbildung, individuelle Planung und Umsetzung/Verankerung.

### React-Vorschlag
`ProcessStepFlow` - vier verbundene Phasen-Karten (nummeriert, farbig) mit Verbindungslinie und Caption-Zeile darunter.

---

## Folie 23 - Laufbahnplanung · 3 Pfade

### In der MD problematisch/fehlend
Vorhanden als zerbrochene Tabelle (Zeilen 331-343); die nummerierten Stufen sind verschoben ("Principal" und "Bereichsleitung" stehen über der Ziffer "3", die Reihenfolge ist unklar). Beschreibungstexte ineinandergeschoben.

### Fehlende visuelle Inhalte
Drei Spaltenkarten, je mit farbigem Kopf (Titel weiß) und vier nummerierten Stufenfeldern; Stufe 1 ist jeweils farblich hervorgehoben (heller Hintergrund mit farbigem Rahmen). Unter jeder Spalte eine kursive graue Beschriftung:
- Spalte 1 (grün/teal): "Fachliche Laufbahn" - 1 Expert:in, 2 Senior Expert:in, 3 Principal, 4 Fellow / Architect; Untertitel "Tiefe Expertise, Wissenstransfer und fachliche Autorität".
- Spalte 2 (violett): "Führungslaufbahn" - 1 Teamlead, 2 Abteilungsleitung, 3 Bereichsleitung, 4 Geschäftsführung; Untertitel "Personalverantwortung, Strategie und Organisationsentwicklung".
- Spalte 3 (orange/gold): "Projekt- & laterale Laufbahn" - 1 Projektmitarbeit, 2 Projektleitung, 3 Programmleitung, 4 Portfolio-Verantw.; Untertitel "Querschnittsthemen, Change und bereichsübergreifende Wirkung".

### Visuelle Rekonstruktion
```
Fachliche Laufbahn   Führungslaufbahn      Projekt- & laterale L.
─ grün ─             ─ violett ─           ─ orange ─
1 Expert:in*         1 Teamlead*           1 Projektmitarbeit*
2 Senior Expert:in   2 Abteilungsleitung   2 Projektleitung
3 Principal          3 Bereichsleitung     3 Programmleitung
4 Fellow / Architect 4 Geschäftsführung    4 Portfolio-Verantw.
(Tiefe Expertise,    (Personalverantw.,    (Querschnittsthemen,
Wissenstransfer,     Strategie,            Change, bereichs-
fachl. Autorität)    Organisationsentw.)   übergreifende Wirkung)
* = Einstiegsstufe hervorgehoben
```

### Inhaltliche Rekonstruktion
| Stufe | Fachliche Laufbahn | Führungslaufbahn | Projekt- & laterale Laufbahn |
|---|---|---|---|
| 1 | Expert:in | Teamlead | Projektmitarbeit |
| 2 | Senior Expert:in | Abteilungsleitung | Projektleitung |
| 3 | Principal | Bereichsleitung | Programmleitung |
| 4 | Fellow / Architect | Geschäftsführung | Portfolio-Verantw. |
| Fokus | Tiefe Expertise, Wissenstransfer und fachliche Autorität | Personalverantwortung, Strategie und Organisationsentwicklung | Querschnittsthemen, Change und bereichsübergreifende Wirkung |

### Fachliche Aussage
Moderne Laufbahnmodelle bieten drei gleichwertige Karrierepfade - fachlich, führend und projektbezogen/lateral - jeweils mit vier aufsteigenden Stufen, so dass Karriere nicht nur über Führung möglich ist.

### React-Vorschlag
`CareerPathColumns` - drei Spalten-Karten mit farbigem Header, nummerierter Stufenliste und kursivem Fokus-Footer.

---

## Folie 24 - Laufbahnplanung · Lernmodell 70/20/10

### In der MD problematisch/fehlend
Inhalte vorhanden (Zeilen 345-362), aber die Zuordnung von Prozenten, Block-Titeln und Stichpunkten ist durch die Spaltenstruktur zerbrochen und vermischt.

### Fehlende visuelle Inhalte
Drei horizontale Zeilen mit je einem großen farbigen Prozent-Block links, einem farbig umrandeten Label-Kästchen in der Mitte und einer Stichpunktliste rechts:
- Zeile 1: violetter Block "70%", mittiges Label (violetter Rahmen, heller Hintergrund) "Lernen durch Erfahrung"; rechts: Herausfordernde Projekte & neue Aufgaben / Führung übernehmen (auch ohne Titel) / Fehler machen und reflektieren / Jobrotation und Stellvertretungen.
- Zeile 2: grüner/teal Block "20%", Label "Lernen durch andere"; rechts: Feedback von Führungskräften / Mentoring und Coaching / Peer-Lernen und Communities / Vorbilder beobachten und Fragen stellen.
- Zeile 3: orange/goldener Block "10%", Label "Formale Bildung"; rechts: Seminare und Workshops / E-Learning und Zertifikate / Fachkonferenzen / Strukturiertes Onboarding.
Unten ein dunkelblauer Balken über die Breite: "Schlüsselfokus: Den 70%-Anteil bewusst gestalten — die richtigen Aufgaben zur richtigen Zeit vergeben."

### Visuelle Rekonstruktion
```
[ 70% ] | Lernen durch    | • Herausfordernde Projekte & neue Aufgaben
violett | Erfahrung       | • Führung übernehmen (auch ohne Titel)
        |                 | • Fehler machen und reflektieren
        |                 | • Jobrotation und Stellvertretungen

[ 20% ] | Lernen durch    | • Feedback von Führungskräften
teal    | andere          | • Mentoring und Coaching
        |                 | • Peer-Lernen und Communities
        |                 | • Vorbilder beobachten und Fragen stellen

[ 10% ] | Formale         | • Seminare und Workshops
orange  | Bildung         | • E-Learning und Zertifikate
        |                 | • Fachkonferenzen
        |                 | • Strukturiertes Onboarding
────────────────────────────────────────────────────────────
[blau] Schlüsselfokus: Den 70%-Anteil bewusst gestalten — die
       richtigen Aufgaben zur richtigen Zeit vergeben.
```

### Inhaltliche Rekonstruktion
| Anteil | Kategorie | Beispiele |
|---|---|---|
| 70% | Lernen durch Erfahrung | Herausfordernde Projekte & neue Aufgaben; Führung übernehmen (auch ohne Titel); Fehler machen und reflektieren; Jobrotation und Stellvertretungen |
| 20% | Lernen durch andere | Feedback von Führungskräften; Mentoring und Coaching; Peer-Lernen und Communities; Vorbilder beobachten und Fragen stellen |
| 10% | Formale Bildung | Seminare und Workshops; E-Learning und Zertifikate; Fachkonferenzen; Strukturiertes Onboarding |

Merksatz: Den 70%-Anteil bewusst gestalten — die richtigen Aufgaben zur richtigen Zeit vergeben.

### Fachliche Aussage
Nach dem 70/20/10-Lernmodell entsteht Kompetenzentwicklung überwiegend (70%) durch Erfahrung in der Arbeit, zu 20% durch soziales Lernen (Feedback, Mentoring) und nur zu 10% durch formale Bildung; der Erfahrungsanteil ist gezielt zu steuern.

### React-Vorschlag
`LearningModel702010` - drei Zeilen mit farbigem Prozent-Badge, Kategorielabel und Beispielliste, plus hervorgehobener Merksatz-Balken (`.callout`).

---

## Folie 25 - Laufbahnplanung · Individueller Entwicklungsplan

### In der MD problematisch/fehlend
Inhalte vorhanden (Zeilen 365-392), aber stark zerbrochen: Prozess-Schritte und Verantwortlichkeiten sind ineinander verschachtelt, Ziffern und Texte verschoben. Zuordnung ohne Folie kaum rekonstruierbar.

### Fehlende visuelle Inhalte
Zwei-Spalten-Layout. Links Überschrift "Prozess-Schritte" mit fünf grün gefüllten Kreis-Ziffern (1-5), je fett gesetzter Schritttitel und kleinerer Erläuterungstext. Rechts ein gerahmter Block "Verantwortlichkeiten" mit drei Rollenkarten, jeweils mit farbigem Balken links:
- "Mitarbeitende:r" (grüner Balken)
- "Führungskraft" (violetter Balken)
- "HR / Beratung" (oranger Balken)

### Visuelle Rekonstruktion
```
Prozess-Schritte                  Verantwortlichkeiten
(1) Stärken-Profil erstellen      ▌ Mitarbeitende:r (grün)
(2) Entwicklungsfelder klären     ▌ Führungskraft (violett)
(3) Ziele definieren              ▌ HR / Beratung (orange)
(4) Maßnahmen planen
(5) Verantwortung klären
```

### Inhaltliche Rekonstruktion
Prozess-Schritte:
1. Stärken-Profil erstellen — Was kann die Person besonders gut? Welche Talente sind noch ungenutzt?
2. Entwicklungsfelder klären — Was fehlt für den nächsten Schritt? Was motiviert die Person langfristig?
3. Ziele definieren — Kurzfristig (6 Mon.) / mittelfristig (1-2 J.) / langfristig (3-5 J.)
4. Maßnahmen planen — 70/20/10: Projekte, Mentoring, Weiterbildung — konkret & terminiert
5. Verantwortung klären — MA / Führungskraft / HR: Wer tut was bis wann?

Verantwortlichkeiten:
| Rolle | Aufgaben |
|---|---|
| Mitarbeitende:r | Eignet sich Wissen aktiv an; Kommuniziert Entwicklungswünsche; Zeigt Initiative bei Maßnahmen |
| Führungskraft | Gibt regelmäßig Feedback; Schafft Entwicklungsmöglichkeiten; Coacht und fördert aktiv |
| HR / Beratung | Stellt Strukturen & Tools bereit; Moderiert den Prozess; Misst Wirkung & Erfolg |

### Fachliche Aussage
Ein individueller Entwicklungsplan durchläuft fünf Schritte (von der Stärkenanalyse bis zur Verantwortungsklärung); Mitarbeitende, Führungskraft und HR haben dabei klar abgegrenzte Rollen.

### React-Vorschlag
`DevelopmentPlanLayout` - zweispaltig: nummerierte Prozessschritte links (grüne Kreis-Badges), Rollenkarten rechts mit farbigen Akzentbalken.

---

## Folie 26 - Laufbahnplanung · Individueller Entwicklungsplan

### In der MD problematisch/fehlend
Diese Folie ist eine inhaltsgleiche Wiederholung von Folie 25 (in der MD als zweiter, identischer Block in den Zeilen 394-421 vorhanden). Visuell bestätigt: Folie 26 ist eine exakte 1:1-Kopie von Folie 25 (gleiche Schritte, gleiche Verantwortlichkeiten, gleiche Farben). Gleiche Zerbrechung in der MD wie zuvor.

### Fehlende visuelle Inhalte
Visuell identisch zu Folie 25: linke Spalte "Prozess-Schritte" mit fünf grünen Kreis-Ziffern und Schritttexten, rechte Spalte "Verantwortlichkeiten" mit drei Rollenkarten (grün/violett/orange) für Mitarbeitende:r, Führungskraft und HR / Beratung.

### Visuelle Rekonstruktion
Siehe Folie 25 (Duplikat).

### Inhaltliche Rekonstruktion
Identisch zu Folie 25:
- Prozess-Schritte 1-5: Stärken-Profil erstellen / Entwicklungsfelder klären / Ziele definieren / Maßnahmen planen / Verantwortung klären
- Verantwortlichkeiten: Mitarbeitende:r, Führungskraft, HR / Beratung mit den jeweiligen Aufgaben

### Fachliche Aussage
Wiederholungsfolie zum individuellen Entwicklungsplan (gleiche Aussage wie Folie 25).

### React-Vorschlag
`DevelopmentPlanLayout` (dieselbe Komponente wiederverwenden) - im Topic ggf. nur einmal darstellen, da Duplikat.

---

## Folie 27 - Laufbahnplanung · Zielsetzung

### In der MD problematisch/fehlend
Die Folie ist in der MD nicht erfasst - kein zugehöriger Text (in der MD wird stattdessen der vorige "Zielsetzung"-Block dupliziert). Das Beurteilungsraster und alle Items fehlen vollständig.

### Fehlende visuelle Inhalte
Zwei nebeneinander stehende Bewertungs-/Fragebogen-Panels (Karten mit hellgrauem Hintergrund), je mit farbigem Punkt-Marker und Titel/Untertitel im Kopf (linkes Panel: blauer Punkt; rechtes Panel: grüner Punkt). Jedes Item besteht aus einer Aussage und darunter einer 5-stufigen Rating-Skala mit nummerierten Kreis-Buttons 1-2-3-4-5; links unter der Skala steht "trifft nie zu", rechts "trifft immer zu". Beim jeweils 5. Item ist mittig unter der Skala ein nach unten zeigender Pfeil (Scroll-/Weiter-Indikator) zu sehen.

Linkes Panel - Kopf "Entwicklung & Lernen" / Untertitel "Selbstreflexion · Wachstum · Feedback annehmen":
1. Reflektiert das eigene Verhalten und zieht daraus Konsequenzen.
2. Ist offen für Feedback und nimmt es ohne Abwehr an.
3. Fördert die Weiterentwicklung der Mitarbeitenden aktiv.
4. Zeigt echte Neugierde und Lernbereitschaft.
5. Ist bereit, gewohnte Vorgehensweisen zu hinterfragen und zu verändern.

Rechtes Panel - Kopf "Strategie & Weitblick" / Untertitel "Gesamtbild · Innovation · Zukunft gestalten":
1. Denkt über den eigenen Verantwortungsbereich hinaus.
2. Verbindet operative Entscheidungen mit strategischen Zielen.
3. Erkennt Chancen und Trends frühzeitig.
4. Gestaltet Veränderungen aktiv mit, statt sie abzuwarten.
5. Bringt neue Ideen ein und fördert Innovationskultur im Team.

### Visuelle Rekonstruktion
```
● Entwicklung & Lernen            ● Strategie & Weitblick
  Selbstreflexion·Wachstum·...      Gesamtbild·Innovation·...
1. Reflektiert ... Konsequenzen.   1. Denkt über ... hinaus.
   (1)(2)(3)(4)(5)                    (1)(2)(3)(4)(5)
   trifft nie zu   trifft immer zu    trifft nie zu  trifft immer zu
...                                ...
5. ... hinterfragen.        [↓]    5. ... Innovationskultur.   [↓]
```

### Inhaltliche Rekonstruktion
| # | Entwicklung & Lernen | Strategie & Weitblick |
|---|---|---|
| 1 | Reflektiert das eigene Verhalten und zieht daraus Konsequenzen. | Denkt über den eigenen Verantwortungsbereich hinaus. |
| 2 | Ist offen für Feedback und nimmt es ohne Abwehr an. | Verbindet operative Entscheidungen mit strategischen Zielen. |
| 3 | Fördert die Weiterentwicklung der Mitarbeitenden aktiv. | Erkennt Chancen und Trends frühzeitig. |
| 4 | Zeigt echte Neugierde und Lernbereitschaft. | Gestaltet Veränderungen aktiv mit, statt sie abzuwarten. |
| 5 | Ist bereit, gewohnte Vorgehensweisen zu hinterfragen und zu verändern. | Bringt neue Ideen ein und fördert Innovationskultur im Team. |

Skala je Item: 1 (trifft nie zu) bis 5 (trifft immer zu).

### Fachliche Aussage
Zur Standortbestimmung/Zielsetzung in der Laufbahnplanung dient ein Selbst-/Fremdeinschätzungsbogen mit zwei Kompetenzdimensionen ("Entwicklung & Lernen", "Strategie & Weitblick"), die je über fünf Aussagen auf einer 5er-Skala bewertet werden.

### React-Vorschlag
`CompetencyRatingForm` - zwei Panels mit je fünf `RatingScaleItem` (Aussage + 5-Punkte-Skala, Endpunkt-Labels). Im statischen Topic genügt eine reine Darstellung ohne Interaktivität (Skala als nicht-anklickbare Buttons).

---

## Folie 28 - Personaleinsatz · Definition

### In der MD vorhanden
Vollständig und gut lesbar in der MD (Zeilen 427-440). Keine Grafik.

### Fehlende visuelle Inhalte
Reine Textfolie ohne Schaubild. Hervorhebung: Die Zeile "inhaltlicher, quantitativer, organisatorischer, zeitlicher und örtlicher Hinsicht" ist auf der Folie als eigener Absatz fett gesetzt.

### Inhaltliche Rekonstruktion
Der Personaleinsatz ist ein Funktionsbereich des Human Resource Managements und umfasst die Zuordnung der betrieblichen Arbeitspersonen zu den zu erfüllenden Aufgaben (Arbeitsplätzen) in **inhaltlicher, quantitativer, organisatorischer, zeitlicher und örtlicher Hinsicht**, so dass die Arbeitspersonen ihrer Eignung entsprechend eingesetzt werden und die Durchführung aller Betriebsaufgaben möglichst human und effizient erreicht wird.
- Beim Personaleinsatz geht es darum, dass der Mitarbeiter seine volle Arbeitsleistung dauerhaft erbringt und bestmöglich eingesetzt ist.
- In weiterem Sinne kann man darunter Themen der Personalentwicklung, Motivation und Anreizgestaltung und Gesundheitsmanagement u. v. m. verstehen.
- Hier wird das Thema "Personaleinsatz" unter dem Aspekt der Arbeitsgestaltung betrachtet.

### Fachliche Aussage
Personaleinsatz ordnet Arbeitspersonen eignungsgerecht den Arbeitsaufgaben zu - inhaltlich, quantitativ, organisatorisch, zeitlich und örtlich - mit dem Ziel humaner und effizienter Aufgabenerfüllung; hier im Fokus: die Arbeitsgestaltung.

### React-Vorschlag
`DefinitionBlock` - Fließtext mit `.callout` für die fett hervorgehobenen fünf Dimensionen.

---

## Folie 29 - Personaleinsatz · Ziele

### In der MD problematisch/fehlend
Vorhanden, aber zerbrochen (Zeilen 442-450); die Zuordnung der Begriffe "Person", "Stelle", "Personalauswahl und -entwicklung", "Personaleinsatz im engeren Sinne" ist durch die Tabellenfragmente unklar.

### Fehlende visuelle Inhalte
Zentrales Schaubild mit einem oben über die Breite laufenden grau hinterlegten Aussage-Banner: "Personaleinsatz im weiteren Sinne: Wechselseitige Adaption von **Person** und **Arbeitsplatz** im Hinblick auf möglichst optimale Effizienz und Humanität."
Darunter zwei Fotos nebeneinander, verbunden durch einen violetten Doppelpfeil (← →) in der Mitte (symbolisiert die wechselseitige Adaption):
- Linkes Foto: Porträt einer Person (Frau) - darunter ein violett hinterlegtes Label "Person".
- Rechtes Foto: Bürolandschaft/Arbeitsplätze - darunter ein türkis/cyan hinterlegtes Label "Stelle".
Unter dem linken Bild: "Personalauswahl und -entwicklung: Adaption des Qualifikationsprofiles". Unter dem rechten Bild: "Personaleinsatz im engeren Sinne: Arbeitsgestaltung und -organisation."

### Visuelle Rekonstruktion
```
[ Personaleinsatz i. w. S.: Wechselseitige Adaption von Person
  und Arbeitsplatz → optimale Effizienz und Humanität ]

   [Foto Person]  ◄──violett──►  [Foto Büro/Arbeitsplatz]
   ▮ Person ▮                     ▮ Stelle ▮
   Personalauswahl &              Personaleinsatz i. e. S.:
   -entwicklung:                  Arbeitsgestaltung und
   Adaption des                   -organisation
   Qualifikationsprofiles
```

### Inhaltliche Rekonstruktion
| Pol | Person | Stelle |
|---|---|---|
| Ansatz | Personalauswahl und -entwicklung | Personaleinsatz im engeren Sinne |
| Maßnahme | Adaption des Qualifikationsprofiles | Arbeitsgestaltung und -organisation |

Übergeordnet (i. w. S.): Wechselseitige Adaption von Person und Arbeitsplatz im Hinblick auf möglichst optimale Effizienz und Humanität.

### Fachliche Aussage
Personaleinsatz im weiteren Sinne ist die wechselseitige Anpassung von Person und Arbeitsplatz: Über Personalauswahl/-entwicklung wird das Qualifikationsprofil angepasst, über die Arbeitsgestaltung/-organisation (i. e. S.) die Stelle - Ziel sind Effizienz und Humanität.

### React-Vorschlag
`MutualAdaptationDiagram` - zwei gegenüberstehende Karten (Person / Stelle) mit zentralem Doppelpfeil und übergeordnetem Banner; Fotos durch Icons oder Platzhalter ersetzbar.

---

## Folie 30 - Arbeitsplatzgestaltung · Ansatzpunkte

### In der MD problematisch/fehlend
Vorhanden, aber stark zerbrochen (Zeilen 452-466); Begriffe und Beispiele sind ineinander verschachtelt ("Arbeits- Art und Menge der Arbeit … inhalt", "Organi- … sation Teamarbeit").

### Fehlende visuelle Inhalte
Kreisförmig (im Uhrzeigersinn) angeordnetes Schaubild aus fünf grauen, abgerundeten Knoten-Boxen, durch einen Kreisbogen miteinander verbunden. Jeweils außen daneben ein Beispieltext (Positionen visuell bestätigt):
- Oben "Arbeitsinhalt" → rechts daneben "Art und Menge der Arbeit (z. B. körperliche, geistige Arbeit)".
- Rechts "Arbeitssicherheit" → "Arbeitsrisiken und ihre Abwendung".
- Unten rechts "Organisation" → "z. B. Einzel- oder Teamarbeit, Grad der Unabhänigkeit".
- Unten links "Arbeitszeit" → "z. B. Tages- / Nachtarbeit, Schichtarbeit, flexible oder starre Zeiten".
- Links "Arbeitsort" → "z. B. Büro, Montagehalle, Lager, stationär/mobil, Verkehrsanbindung".

### Visuelle Rekonstruktion
```
                 [Arbeitsinhalt]  — Art und Menge der Arbeit
                /              \      (körperlich, geistig)
   [Arbeitsort]                [Arbeitssicherheit] — Risiken
   Büro, Lager,  \            /                       u. Abwendung
   stat./mobil    [Arbeitszeit][Organisation]
                  Tages-/Nacht- Einzel-/Teamarbeit,
                  Schicht,      Grad der Unabhängigkeit
                  flex./starr
```

### Inhaltliche Rekonstruktion
| Ansatzpunkt | Beispiele |
|---|---|
| Arbeitsinhalt | Art und Menge der Arbeit (z. B. körperliche, geistige Arbeit) |
| Arbeitssicherheit | Arbeitsrisiken und ihre Abwendung |
| Organisation | z. B. Einzel- oder Teamarbeit, Grad der Unabhängigkeit |
| Arbeitszeit | z. B. Tages- / Nachtarbeit, Schichtarbeit, flexible oder starre Zeiten |
| Arbeitsort | z. B. Büro, Montagehalle, Lager, stationär/mobil, Verkehrsanbindung |

### Fachliche Aussage
Die Arbeitsplatzgestaltung setzt an fünf gleichrangigen, kreisförmig verbundenen Ansatzpunkten an: Arbeitsinhalt, Arbeitssicherheit, Organisation, Arbeitszeit und Arbeitsort.

### React-Vorschlag
`CircularNodeDiagram` - fünf Knoten kreisförmig angeordnet mit zugehörigen Beispiel-Labels; auf Mobile als vertikale Liste mit Knoten-Titel + Beispiel.

---

## Folie 31 - Arbeitsplatzgestaltung · Menschengerechte Gestaltung

### In der MD vorhanden
Vollständig und korrekt in der MD (Zeilen 468-482). Keine Grafik.

### Fehlende visuelle Inhalte
Reine Textfolie. Einleitungssatz mit fett gesetzter Passage "Anpassung der Arbeitsbedingungen an die physischen und psychischen Bedürfnisse der Beschäftigten". Zwei fett gesetzte Zwischenüberschriften "Ziele:" und "Grundprinzipien (nach Ergonomie und Arbeitswissenschaft):"; in der Prinzipienliste sind die Begriffe vor dem Doppelpunkt fett.

### Inhaltliche Rekonstruktion
Menschengerechte Arbeitsplatzgestaltung meint die **Anpassung der Arbeitsbedingungen an die physischen und psychischen Bedürfnisse der Beschäftigten**, um Gesundheit, Motivation und Leistung zu fördern.

Ziele:
- Erhalt der Arbeitsfähigkeit
- Vermeidung von gesundheitlichen Schäden (z. B. durch Fehlhaltungen, Lärm, Stress)
- Erhöhung von Motivation, Zufriedenheit und Produktivität
- Reduktion von Fehlzeiten und Fluktuation

Grundprinzipien (nach Ergonomie und Arbeitswissenschaft):
- **Physiologische Gestaltung:** z. B. ergonomische Möbel, angepasste Beleuchtung
- **Psychologische Gestaltung:** z. B. Aufgabenvielfalt, Handlungsspielraum, Feedback
- **Sicherheitsorientierte Gestaltung:** Vermeidung von Gefahrenquellen
- **Soziale Gestaltung:** z. B. Kommunikations- und Pausenräume

### Fachliche Aussage
Menschengerechte Arbeitsplatzgestaltung passt Arbeitsbedingungen an physische und psychische Bedürfnisse an; sie verfolgt vier Ziele und stützt sich auf vier Gestaltungsprinzipien (physiologisch, psychologisch, sicherheitsorientiert, sozial).

### React-Vorschlag
`GoalsAndPrinciplesList` - zwei betitelte Listenblöcke (Ziele / Grundprinzipien), Prinzipienbegriffe fett.

---

## Folie 32 - Arbeitsinhalte · Übersicht

### In der MD problematisch/fehlend
Vorhanden, aber zerbrochen (Zeilen 484-503); die linke Begriffsliste und der rechte Ziel-/Kriterienblock sind ineinander verschachtelt ("Geistige … Arbeit Ziel Manuelle … Arbeit Die individuellen physischen …").

### Fehlende visuelle Inhalte
Links sieben gestapelte hellgraue, abgerundete Balken (Gegensatzpaare/Dimensionen der Arbeitsinhalte). In der Mitte/rechts ein großer schwarzer, nach links zeigender Pfeil/Keil (Trennsymbol), daneben rechts ein Textblock mit fetter Überschrift "Ziel" (Fließtext darunter) und fetter Überschrift "Kriterien" samt Bullet-Aufzählung.

Linke Balken (von oben nach unten):
1. Geistige und / oder körperliche Arbeit
2. Manuelle und / oder maschinelle Arbeit
3. Einfache und oder komplexe Aufgaben
4. Neue Aufgaben und / oder Routineaufgaben
5. Monotonie versus Vielfalt und Abwechslung
6. Teilprozesse oder Ganzheitlichkeit
7. Vorgaben oder Handlungsspielräume

### Visuelle Rekonstruktion
```
[ Geistige u./o. körperliche Arbeit ]   ◄  Ziel:
[ Manuelle u./o. maschinelle Arbeit ]      individuelle phys. u.
[ Einfache u. o. komplexe Aufgaben  ]      psych. Belastungen so
[ Neue u./o. Routineaufgaben        ]      gering wie möglich halten
[ Monotonie vs. Vielfalt/Abwechslung]   ◄  Kriterien:
[ Teilprozesse o. Ganzheitlichkeit  ]      • Ausführbarkeit
[ Vorgaben o. Handlungsspielräume   ]      • Erträglichkeit
                                           • Zumutbarkeit
                                           • Zufriedenheit
                                           • Persönlichkeitsförderlichkeit
```

### Inhaltliche Rekonstruktion
Dimensionen/Gegensatzpaare der Arbeitsinhalte:
- Geistige und / oder körperliche Arbeit
- Manuelle und / oder maschinelle Arbeit
- Einfache und oder komplexe Aufgaben
- Neue Aufgaben und / oder Routineaufgaben
- Monotonie versus Vielfalt und Abwechslung
- Teilprozesse oder Ganzheitlichkeit
- Vorgaben oder Handlungsspielräume

Ziel: Die individuellen physischen wie psychischen Belastungen des Arbeitnehmers im Rahmen der erforderlichen Tätigkeiten so gering wie möglich zu halten.

Kriterien:
- Ausführbarkeit
- Erträglichkeit
- Zumutbarkeit
- Zufriedenheit
- Persönlichkeitsförderlichkeit

### Fachliche Aussage
Arbeitsinhalte lassen sich über sieben Gegensatzpaare beschreiben; Ziel ihrer Gestaltung ist die Minimierung physischer und psychischer Belastungen, gemessen an fünf Kriterien (Ausführbarkeit, Erträglichkeit, Zumutbarkeit, Zufriedenheit, Persönlichkeitsförderlichkeit).

### React-Vorschlag
`ContentDimensionsList` - links gestapelte Dimensions-Balken, rechts Ziel-Text + Kriterien-Liste; auf Mobile untereinander.

---

## Folie 33 - Arbeitsschutz · Übersicht

### In der MD problematisch/fehlend
Der Fließtext ist in der MD vorhanden (Zeilen 505-524), aber durch die als Bild eingebetteten Beschriftungen der Ergonomie-Grafik unterbrochen ("Schutzbrille", "Schutzanzug", "Augen-, Kopf- und Lärmschutzhelm" stehen verstreut). Die Maßangaben der Sitzplatz-Grafik sind in der MD nicht erfasst.

### Fehlende visuelle Inhalte
Links Definitionstext und Bullet-Listen; rechts mehrere Foto-/Icon-Bausteine:
- Foto einer Schutzbrille, Label "Schutzbrille".
- Foto/Abbildung eines Schutzanzugs (stehende Figur in Schutzkleidung), Label "Schutzanzug".
- Foto eines Schutzhelms mit Gehörschutz/Visier, Label "Augen-, Kopf- und Lärmschutzhelm".
- Eine kleine technische Skizze eines ergonomischen Bildschirmarbeitsplatzes (sitzende Person an Tisch mit Monitor) mit mehreren Maß- und Winkelannotationen.

**WICHTIG (Korrektur gegenüber Entwurf):** Die konkreten Maß- und Winkelangaben der Ergonomie-Skizze sind in dieser Renderauflösung NICHT zuverlässig lesbar - die Beschriftungen sind zu klein/unscharf. Die im Kollegen-Entwurf genannten Werte ("Bildschirm 90° zum Fenster", "Bildschirmneigung 10°-25°", ">60 cm", "mind. 78 cm", "Tischhöhe ca. mind. 80 cm tief", "ca. 90°", "Lendenwirbelunterstützung") können hier NICHT verifiziert werden und sind als (über-)präzise Annahmen zu behandeln. Sie dürfen nicht als gesicherte Folieninhalte übernommen werden. Lesbar sind sicher nur: die drei Schutzausrüstungs-Labels und das Vorhandensein einer beschrifteten Ergonomie-Skizze mit Maß-/Winkelangaben. Für gesicherte Werte ist ein höher aufgelöster Screenshot dieser Skizze erforderlich.

### Visuelle Rekonstruktion
```
Definition: Arbeitsschutz = Analyse von Risiken …
  Ergonomische Arbeitsplatzgestaltung      [Schutzbrille] [Schutzanzug]
   • Arbeits(schutz)kleidung
   • Arbeitsplatz                           [Ergonomie-Sitzplatz-Skizze
   • Arbeitswerkzeuge und Maschinen           mit Maß-/Winkelangaben –
  Sicherheitsvorschriften und Kontrollen      Beschriftung zu klein zum
   durch das Gewerbeaufsichtsamt              sicheren Ablesen]
   (z. B. Richtlinie 90/270/EWG …)         [Augen-, Kopf- u. Lärmschutzhelm]
```

### Inhaltliche Rekonstruktion
Arbeitsschutz = Analyse von Risiken für die geistige und körperliche Gesundheit des Menschen am Arbeitsplatz und ihre effektive Abwendung.

Ergonomische Arbeitsplatzgestaltung:
- Arbeits(schutz)kleidung
- Arbeitsplatz
- Arbeitswerkzeuge und Maschinen

Sicherheitsvorschriften und Kontrollen durch das Gewerbeaufsichtsamt, z. B. die "Richtlinie 90/270/EWG des Rates über die Mindestvorschriften bezüglich der Sicherheit und des Gesundheitsschutzes bei der Arbeit an Bildschirmgeräten" (Bildschirm, Tastatur, Strahlung, Sitzplatz …).

Beispiel-Schutzausrüstung (als Fotos/Labels): Schutzbrille; Schutzanzug; Augen-, Kopf- und Lärmschutzhelm.

Ergonomie-Skizze Bildschirmarbeitsplatz: enthält Maß- und Winkelannotationen zu Bildschirm, Sehabstand, Tisch- und Sitzhöhe sowie Lendenwirbelunterstützung. Die konkreten Zahlenwerte sind in der vorliegenden Auflösung nicht sicher lesbar und werden daher nicht als Fakten angegeben.

### Fachliche Aussage
Arbeitsschutz analysiert und mindert Gesundheitsrisiken am Arbeitsplatz - durch ergonomische Gestaltung (Kleidung, Arbeitsplatz, Werkzeuge/Maschinen) und durch behördlich kontrollierte Vorschriften (z. B. die EU-Bildschirmrichtlinie 90/270/EWG). Eine Ergonomie-Skizze illustriert die richtige Einrichtung eines Bildschirmarbeitsplatzes; konkrete Maßvorgaben sind hier nur angedeutet (nicht sicher ablesbar).

### React-Vorschlag
`ErgonomicWorkplaceFigure` - Definitionstext + Bullet-Listen links, rechts Schutzausrüstungs-Icons und eine beschriftete Ergonomie-Skizze. Maß-/Winkel-Annotationen erst nach Verifikation an einem hochauflösenden Screenshot ergänzen, nicht aus dem Entwurf übernehmen.

---

## Folie 34 - Arbeitsschutz · Beispiele Hinweise

### In der MD problematisch/fehlend
In der MD nur als Überschriftenzeile "Beispiele Hinweise" (Zeilen 526-528) - keinerlei Inhalt, da die Folie ausschließlich aus Bildern besteht.

### Fehlende visuelle Inhalte
Zwei Bildelemente nebeneinander:
- Links: Abbildung eines mobilen Bauzauns (auf zwei grauen Fußplatten) mit weißem Banner. Auf dem Banner links der Schriftzug "ACHTUNG BAUSTELLE!" (rot/schwarz, mit rot-weißer Schraffur oben), darunter eine Reihe runder Sicherheitsschilder (blaue Gebotszeichen, ein rotes Verbotszeichen) sowie gelbe dreieckige Warnzeichen; rechts auf dem Banner ein kleines gelbes Hinweis-/Textschild.
- Rechts: eine Raster-Tafel (ca. 4 Spalten × 4 Zeilen) mit standardisierten Sicherheitspiktogrammen in den typischen Farben: blaue runde Gebotszeichen, grünes Rettungszeichen (weißes Kreuz auf Grün / Erste-Hilfe), gelbe dreieckige Warnzeichen (u. a. Stromschlag), rote runde Verbotszeichen (z. B. Rauchen verboten, Hand-/Zutritt verboten) sowie orange GHS-Gefahrstoffsymbole (Raute).

### Visuelle Rekonstruktion
```
[ Bauzaun-Banner "ACHTUNG BAUSTELLE!" ]    [ Piktogramm-Raster ~4×4 ]
   ○ ○ ○ (blau Gebot)  🚫 (rot Verbot)       🔵 ➕ ⚠️ 🌳
   ⚠️⚠️ (gelb Warnung)  [gelbes Hinweis-     🔵 ⚡ ✋ 🔵
                         schild rechts]       🔴 ⚠️ ⛑️ 👢
                                              ⚠️ 🚭 ☠️ ⬥(GHS)
```

### Inhaltliche Rekonstruktion
Keine Fließtextinhalte auf der Folie. Gezeigt werden Beispiele für Sicherheits-/Hinweisbeschilderung:
- Baustellenabsperrung (mobiler Bauzaun) mit Banner "ACHTUNG BAUSTELLE!" und kombinierten Gebots-, Verbots- und Warnzeichen sowie einem gelben Hinweisschild.
- Übersicht der standardisierten Schildkategorien: blaue Gebotszeichen, grüne Rettungszeichen, gelbe Warnzeichen, rote Verbotszeichen, orange GHS-Gefahrstoffzeichen.

### Fachliche Aussage
Arbeitsschutz wird im Betrieb durch genormte Sicherheitsbeschilderung umgesetzt; die Farb-/Formkategorien (blau = Gebot, rot = Verbot, gelb = Warnung, grün = Rettung, orange/Raute = Gefahrstoff) signalisieren das jeweils geforderte Verhalten.

### React-Vorschlag
`SafetySignGallery` - zwei Bildkacheln (Bauzaun-Beispiel und Piktogramm-Raster); Bilder als Assets, mit Alt-Texten zur Schildkategorie.

---

## Folie 35 - Arbeitsschutz · Beispiel Flucht- und Rettungswegeplan

### In der MD problematisch/fehlend
In der MD nur als Überschriftenzeile "Beispiel Flucht- und Rettungswegeplan" (Zeilen 530-532) - kein Inhalt, da die Folie ein einziges Bild ist.

### Fehlende visuelle Inhalte
Ein vollflächiger, grün umrandeter Flucht- und Rettungswegeplan (Gebäudegrundriss von oben). Kopfzeile grün hinterlegt: "Flucht- und Rettungswegeplan". Im Grundriss: zentraler grün hinterlegter Flur/Rettungsweg mit grünen Richtungspfeilen, links ein Treppenhaus; entlang der Räume zahlreiche grüne Rettungszeichen ("Notausgang"-Männchen) und rote Brandschutzzeichen (Feuerlöscher), ein rotes Erste-Hilfe-/Standort-Symbol; rechts unten ein abgesetzter grauer Außenbereich mit einem grünen Sammelstellen-Symbol. Unten links zwei gerahmte Verhaltens-Tafeln "Verhalten im Brandfall" (rot umrandet) und "Verhalten im Notfall" (grün umrandet) mit nummerierten Schritten. Unten rechts eine "Symbollegende".

Symbollegende (visuell abgelesen):
- Pfeil = Laufrichtung
- grünes Männchen mit Pfeil = Rettungsweg/Notausgang
- rotes Feuerlöscher-Symbol = Feuerlöscher
- grünes Symbol = Sammelstelle
- grünes Kreuz-Symbol = Erste-Hilfe-Kasten
- Telefon-Symbol = Telefon für Notruf
- grüne Fläche = Rettungsweg
- graue Fläche = Außenbereich
- roter Punkt = Standort

### Visuelle Rekonstruktion
```
┌─ Flucht- und Rettungswegeplan ───────────────┐
│ [Treppe] ═══ grüner Flur mit → → → → Pfeilen  │
│   Räume mit grünen Rettungszeichen & roten    │
│   Feuerlöschern, Standort-Punkt   [Außenber./ │
│                                    Sammelst.] │
│ [Verhalten Brandfall] [Verhalten Notfall]     │
│                              [Symbollegende]  │
└───────────────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Legendeneinträge: Laufrichtung · Rettungsweg/Notausgang · Feuerlöscher · Sammelstelle · Erste-Hilfe-Kasten · Telefon für Notruf · Rettungsweg (Fläche) · Außenbereich · Standort.
Zwei Verhaltenstafeln: "Verhalten im Brandfall" und "Verhalten im Notfall" (jeweils nummerierte Handlungsanweisungen, Detailtext zu klein zum sicheren Ablesen).

### Fachliche Aussage
Der Flucht- und Rettungswegeplan ist ein vorgeschriebenes Arbeitsschutz-Instrument: Er zeigt im Grundriss Standort, Fluchtwege, Notausgänge, Brandschutz- und Erste-Hilfe-Einrichtungen sowie das richtige Verhalten in Brand-/Notfällen über genormte Symbole.

### React-Vorschlag
`EscapeRoutePlanFigure` - eingebettetes Planbild mit erläuterter Symbol-Legende (Liste der Legendeneinträge als Text neben dem Bild).

---

## Folie 36 - Arbeitsschutz · Baustellensicherung

### In der MD problematisch/fehlend
In der MD nur als Überschriften-/Schlagwortzeilen "Baustellensicherung" und "Arbeitssicherheit" (Zeilen 534-538) - kein Inhalt, da die Folie aus Fotos besteht.

### Fehlende visuelle Inhalte
Drei überlappend angeordnete Fotos zur Baustellensicherung:
- Links: Foto einer Straßen-/Baustellenszene mit Bauzaun/Absperrung (bläuliche Bauzaun-Elemente) vor Gebäuden.
- Oben rechts: Foto eines gelb-schwarzen Warnschilds "VORSICHT BAUSTELLE" an einer Wand/Bauwand.
- Unten Mitte/rechts: Foto einer Baustellen-Absperrung (Bauzaun) mit mehreren montierten Hinweis-/Verbotsschildern (blaue und rote Schilder).
Die Folie trägt zusätzlich das Schlagwort "Arbeitssicherheit" (Untertitel-/Schlagwortebene).

### Visuelle Rekonstruktion
```
[Foto Straßen-/Baustellenszene]
                     [Foto Schild "VORSICHT BAUSTELLE" (gelb)]
        [Foto Bauzaun mit Hinweis-/Verbotsschildern]
   Schlagwort: Arbeitssicherheit
```

### Inhaltliche Rekonstruktion
Keine Fließtextinhalte. Bildbeispiele: Baustellenabsperrung im Straßenraum; Warnschild "VORSICHT BAUSTELLE"; Bauzaun mit kombinierten Hinweis- und Verbotsschildern. Schlagwort: Arbeitssicherheit.

### Fachliche Aussage
Baustellensicherung ist ein praktisches Beispiel der Arbeitssicherheit: Durch Absperrungen und genormte Warn-/Verbots-/Hinweisschilder werden Gefahrenbereiche kenntlich gemacht und Personen geschützt.

### React-Vorschlag
`ConstructionSafetyGallery` - Foto-Galerie (3 Bilder) mit Bildunterschriften zur Baustellensicherung und Tag "Arbeitssicherheit".

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folien 4, 5, 8, 9: Bruch-Kennzahlen der Personalstatistik (Zähler/Nenner, `FractionFormula`)
2. Folie 7: Zweispaltiges Soll-/Ist-Arbeitszeit-Rechenschema mit Quoten-Formel
3. Folie 21: Drei KPI-Karten (70% / 2× / 40%) zur Laufbahnplanung
4. Folie 22: Vier-Phasen-Prozesskette der Laufbahnplanung
5. Folie 23: Drei Karrierepfade mit je vier Stufen
6. Folie 24: 70/20/10-Lernmodell mit Merksatz-Balken
7. Folien 25/26: Individueller Entwicklungsplan (Prozessschritte + Rollen; 26 ist Duplikat von 25)
8. Folie 27: Kompetenz-Einschätzungsbogen (zwei Dimensionen, 5er-Skala) – in der MD gar nicht erfasst
9. Folien 29, 30, 32: Schaubilder (Person/Stelle-Adaption, kreisförmige Ansatzpunkte, Arbeitsinhalte-Dimensionen)

## Kann vereinfacht werden

- Onboarding-Icons der Folien 14–20 als einfache Lucide-/SVG-Icons (clipboard-check, handshake, info-circle, people-group, desk, workflow, clock) – nur Akzent, nicht inhaltlich tragend
- Folie 10: Ziel-Box als `CalloutBox`
- Folie 28: Definition als Fließtext mit Callout für die fünf Dimensionen
- Folie 31: Ziele/Grundprinzipien als zwei betitelte Listen
- Folien 1, 2, 3, 6, 12, 13: reine Text-/Listenfolien als schlichte Bullet-/Definitionslisten

## Nicht fachlich relevant

- HBW-Logo
- graue Kopf-/Footerleiste
- Copyright-Zeile (`© 2026 – Hochschule der Bayerischen Wirtschaft`)
- exakte Folienpositionierung
- dekorative Bildästhetik ohne inhaltliche Zusatzinformation (z. B. das Flussdiagramm-Schmuck-Icon auf Folie 19, das Uhr-Icon auf Folie 20, die Personenfotos auf Folie 29)
- nicht sicher lesbare Detailwerte der eingebetteten Grafiken (Folie 11 Reporting-Tabelle, Folie 33 Ergonomie-Maße)

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich vorhandenen Folieninhalten abgeleitet):

```js
// Folien 12 + 13: HR-KPIs (1–15)
export const hrKpis = [
  { nr: 1, title: 'Mitarbeiterbindung', definition: 'Anteil der Mitarbeiter, die im Unternehmen bleiben.' },
  { nr: 2, title: 'Mitarbeiterzufriedenheit', definition: 'Grad der Zufriedenheit der Mitarbeitenden mit ihrem Arbeitsplatz.' },
  { nr: 3, title: 'Besetzungsdauer', definition: 'Zeitspanne vom Start des Bewerbungsprozesses bis zur Einstellung.' },
  { nr: 4, title: 'Rekrutierungskosten', definition: 'Gesamtkosten für die Besetzung einer offenen Stelle.' },
  { nr: 5, title: 'Fehlzeitenquote', definition: 'Anteil der krankheits- oder sonstig bedingten Abwesenheiten.' },
  { nr: 6, title: 'Fluktuationsrate', definition: 'Anteil der Mitarbeitenden, die das Unternehmen verlassen.' },
  { nr: 7, title: 'Mitarbeiterproduktivität', definition: 'Output oder Umsatz pro Mitarbeiter.' },
  { nr: 8, title: 'Verwaltung von Sozialleistungen', definition: 'Effizienz und Qualität bei der Organisation von Zusatzleistungen.' },
  { nr: 9, title: 'Überstunden', definition: 'Gesamtzahl der geleisteten Überstunden pro Zeitraum.' },
  { nr: 10, title: 'Mitarbeiterengagement', definition: 'Grad der emotionalen Bindung und Motivation der Mitarbeitenden.' },
  { nr: 11, title: 'Mitarbeiter-Net-Promoter-Score', definition: 'Kennzahl, wie wahrscheinlich Mitarbeitende ihren Arbeitgeber weiterempfehlen würden.' },
  { nr: 12, title: '90-Tage-Ausfallquote', definition: 'Anteil der Neueinstellungen, die innerhalb der ersten 90 Tage das Unternehmen wieder verlassen.' },
  { nr: 13, title: 'Schulungskosten pro Mitarbeiter', definition: 'Durchschnittliche Weiterbildungsausgaben je Mitarbeiter.' },
  { nr: 14, title: 'Diversitätskennzahlen', definition: 'Anteil verschiedener Gruppen (z. B. Geschlecht, Alter, Herkunft) in der Belegschaft.' },
  { nr: 15, title: 'Arbeitsunfälle', definition: 'Anzahl der gemeldeten Arbeitsunfälle pro Zeitraum.' },
]

// Folie 24: 70/20/10-Lernmodell
export const learningModel702010 = [
  {
    share: '70%', accent: 'purple', category: 'Lernen durch Erfahrung',
    examples: [
      'Herausfordernde Projekte & neue Aufgaben',
      'Führung übernehmen (auch ohne Titel)',
      'Fehler machen und reflektieren',
      'Jobrotation und Stellvertretungen',
    ],
  },
  {
    share: '20%', accent: 'teal', category: 'Lernen durch andere',
    examples: [
      'Feedback von Führungskräften',
      'Mentoring und Coaching',
      'Peer-Lernen und Communities',
      'Vorbilder beobachten und Fragen stellen',
    ],
  },
  {
    share: '10%', accent: 'orange', category: 'Formale Bildung',
    examples: [
      'Seminare und Workshops',
      'E-Learning und Zertifikate',
      'Fachkonferenzen',
      'Strukturiertes Onboarding',
    ],
  },
]
```

```js
// Folie 23: Karrierepfade (drei Pfade, je vier Stufen)
export const careerPaths = [
  {
    title: 'Fachliche Laufbahn', accent: 'teal',
    steps: ['Expert:in', 'Senior Expert:in', 'Principal', 'Fellow / Architect'],
    focus: 'Tiefe Expertise, Wissenstransfer und fachliche Autorität',
  },
  {
    title: 'Führungslaufbahn', accent: 'purple',
    steps: ['Teamlead', 'Abteilungsleitung', 'Bereichsleitung', 'Geschäftsführung'],
    focus: 'Personalverantwortung, Strategie und Organisationsentwicklung',
  },
  {
    title: 'Projekt- & laterale Laufbahn', accent: 'orange',
    steps: ['Projektmitarbeit', 'Projektleitung', 'Programmleitung', 'Portfolio-Verantw.'],
    focus: 'Querschnittsthemen, Change und bereichsübergreifende Wirkung',
  },
]

// Folie 22: Vier Phasen der Laufbahnplanung
export const careerPlanningPhases = [
  { nr: 1, title: 'Diagnose & Verstehen', accent: 'purple', text: 'Ist-Zustand, Bedürfnisse und Stakeholder klären' },
  { nr: 2, title: 'Orientierung & Modell', accent: 'teal', text: 'Laufbahnpfade und Kriterien entwickeln' },
  { nr: 3, title: 'Individuelle Planung', accent: 'orange', text: 'Ziele, Maßnahmen und Entwicklungspläne' },
  { nr: 4, title: 'Umsetzung & Verankerung', accent: 'red', text: 'Gespräche, Befähigung und Review' },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
