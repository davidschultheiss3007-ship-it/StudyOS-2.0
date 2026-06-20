# HR4_md+PDF - Operative Personalplanung: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-04-operative-personalplanung.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-04-operative-personalplanung.pdf` verloren gegangen, nur als kaputte Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Tabellenlogiken, Beispielvorlagen, Prozessflüsse oder Bildaussagen verloren gehen.

**Quelle:** `skript-04-operative-personalplanung.pdf` mit 25 Folien und die dazugehörige Markitdown-Datei `skript-04-operative-personalplanung.md`.

**Wichtig:** Wiederkehrende Gestaltungselemente wie HBW-Logo, grauer Kopfbereich, Folientitel-Layout und Copyright-Footer sind keine fachlichen Inhalte. Diese können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme, Kompetenzmodelle, Prozessschemata, Matrix-Logiken, Formularbeispiele und Übungsbilder.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** In der MD sind mehrere Folien durch die PDF-Konvertierung als zerbrochene Tabellen dargestellt. Diese Inhalte sollten in React als strukturierte Cards, echte Tabellen, Diagramme oder interaktive Prozessmodelle neu aufgebaut werden.
2. **Diagramme semantisch nachbauen:** Kompetenzmodell, Informationsfluss, Funktionsmatrix, Karrieremodelle und Prozessschema tragen fachliche Bedeutung. Sie sollten nicht nur als Textabschnitt dargestellt werden.
3. **Beispiele als Lernobjekte behandeln:** Anforderungsprofil, Stellenbeschreibungen und Übungsfälle sind nicht nur Bilder, sondern Beispiele für HR-Dokumente. Sie sollten in React als Templates, Checklisten oder Beispielkarten umgesetzt werden.
4. **Pfeile, Ebenen und Zuordnungen erhalten:** Pfeilketten zeigen Prozesslogik; Tabellenraster zeigen Karrierewege; Pyramiden zeigen Hierarchie- und Laufbahnlogik.
5. **Übungsfolien separat markieren:** Gruppen- und Einzelarbeitsfolien sollten als `ExerciseCard` umgesetzt werden, damit sie nicht mit reinem Lernstoff vermischt werden.
6. **Quellenhinweise erhalten:** Quellen wie `Friedl, V.: Die betriebliche Karriereplanung, 2002` bei Folie 11 beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `RecruitmentPlanningChecklist` | 1-2 | Personalgewinnungsplanung und offene Positionsplanung strukturieren |
| `CompetencyQuadrant` | 3 | Vier Kompetenzarten visuell darstellen |
| `ProfileInputFlow` | 4 | Informationsquellen für Anforderungsprofile als Pfeilprozess zeigen |
| `RequirementProfileScale` | 6 | Beispiel-Anforderungsprofil mit 1-7 Skala nachbauen |
| `ExerciseCaseCard` | 7, 25 | Gruppen-/Einzelarbeitsaufgaben mit Szenario darstellen |
| `FunctionMatrixTable` | 8-9 | Funktionsfamilien, Kompetenzlevel und Karrierewege tabellarisch abbilden |
| `CareerPathComparison` | 10-12 | Linien-, Fach- und Projektlaufbahn erklären |
| `JobDescriptionTemplate` | 13-17 | Stellenbeschreibung als HR-Dokumentvorlage rekonstruieren |
| `StaffingProcessFlow` | 18, 24 | Prozessschema zur Besetzung konkreter Positionen darstellen |
| `LaborMarketPotentialCards` | 20 | Offenes vs. latentes Beschaffungspotential vergleichen |
| `MarketAnalysisCards` | 21-23 | Innerbetriebliche/außerbetriebliche Analyse und Arbeitsmarktabhängigkeiten zeigen |

---

# Folienweise Ergänzungen

## Folie 1 - Personalplanung: Personalgewinnungsplanung

### In der MD vorhanden
Die Stichpunkte zur Personalgewinnungsplanung sind textlich vorhanden.

### Fehlende visuelle Inhalte
Die Folie enthält rechts ein Netzwerk-/Personen-Icon: mehrere Personen-Symbole sind durch Linien miteinander verbunden. Dieses Icon visualisiert, dass Personalgewinnungsplanung ein koordinierter Beschaffungsprozess mit mehreren Beteiligten, Prozessschritten und Informationspunkten ist.

### Visuelle Rekonstruktion
Erstelle eine große Checklisten-Card mit sieben Einträgen:

- offene Positionen
- geplanter Besetzungszeitpunkt
- Planung der Beschaffungswege
- beteiligte Personen
- Festlegung der Gehaltsspannen
- geplante Gewinnungskosten
- Status des Gewinnungsprozesses

Rechts daneben: semantisches Netzwerk-Icon oder kleine Prozessgrafik mit verbundenen Personenknoten.

### Fachliche Aussage
Personalgewinnungsplanung ist die vorgelagerte Strukturierung des Beschaffungsprozesses. Sie bündelt alle Informationen, die benötigt werden, um offene Stellen planbar, budgetierbar und kontrollierbar zu besetzen.

### React-Vorschlag
Komponente: `RecruitmentPlanningChecklist`. Jeder Punkt kann als Badge oder Timeline-Step dargestellt werden. Das Icon kann als SVG mit verbundenen User-Nodes umgesetzt werden.

---

## Folie 2 - Personalplanung: Festlegung

### In der MD vorhanden
Die Textpunkte zur Planung offener Positionen sind vorhanden.

### Fehlende visuelle Inhalte
Keine eigene Fachgrafik. Für React sollte die Logik aber stärker strukturiert werden, weil die Folie eine Kette beschreibt: offene Stelle bestimmen -> Kompetenzprofil erstellen -> Zielgruppe und Beschaffungsweg ableiten.

### Visuelle Rekonstruktion
Als dreistufige Logik darstellen:

```text
Offene Position festlegen
  -> Stelle im Unternehmen
  -> Anzahl Mitarbeiter
  -> Kompetenzprofile

Anforderungs-/Kompetenzprofil erstellen
  -> aktuelles Profil vorhanden oder neu erstellen

Aus Anforderungen ableiten
  -> präferierte Auswahl-Zielgruppe
  -> geeigneter Beschaffungsweg
```

### Fachliche Aussage
Erst wenn die offene Position konkret beschrieben ist, lassen sich Zielgruppe und Beschaffungsweg sinnvoll bestimmen.

### React-Vorschlag
Komponente: `PositionPlanningFlow` mit drei Prozesskarten und Pfeilen.

---

## Folie 3 - Personalplanung: Kompetenzen

### In der MD problematisch/fehlend
Die Folie wurde in der MD als zerbrochene Tabelle extrahiert. Der eigentliche Inhalt ist ein **viergeteiltes Kompetenzmodell** mit zentralem Quadranten und vier zugeordneten Listen.

### Visuelle Rekonstruktion
Zentral steht ein dunkler, rautenförmiger Hintergrund. Darauf liegen vier abgerundete Quadranten:

```text
┌───────────────────────────┬──────────────────────────────┐
│ Fachkompetenz             │ Persönlichkeitskompetenz      │
├───────────────────────────┼──────────────────────────────┤
│ Methodenkompetenz         │ Sozialkompetenz               │
└───────────────────────────┴──────────────────────────────┘
```

Die Listen stehen seitlich passend zu den Quadranten.

### Inhaltliche Rekonstruktion

#### Fachkompetenz
- Ausbildung
- Fachkenntnisse
- Berufserfahrung
- Projekterfahrung

#### Persönlichkeitskompetenz
- Basisantrieb, Energie
- Analytische Fähigkeiten
- Kreativität / Innovationsfähigkeit
- Leidenschaft, Stabilität
- Moral, Ethik, Integrität

#### Methodenkompetenz
- Projektmanagement
- Zeitmanagement
- Anwendungswissen
- Problemlösungskompetenz
- Präsentationstechniken / Moderation

#### Sozialkompetenz
- Kommunikation
- Teamfähigkeit
- Konflikt- und Kritikfähigkeit
- Motivations-, Überzeugungsfähigkeit
- Empathie

### Fachliche Aussage
Anforderungsprofile sollten nicht nur fachliche Qualifikationen enthalten. Für die Personalplanung sind vier Kompetenzdimensionen relevant: fachlich, persönlich, methodisch und sozial.

### React-Vorschlag
Komponente: `CompetencyQuadrant`. Die vier Quadranten anklickbar machen; bei Klick öffnet sich die jeweilige Kompetenzliste.

---

## Folie 4 - Personalplanung: Erstellung Profile

### In der MD problematisch/fehlend
Der Pfeilprozess ist in der MD nur als lose Textzeilen übertragen. Die Folie zeigt aber eine **dreistufige Informationskette**, die in das Anforderungsprofil einfließt.

### Visuelle Rekonstruktion
Drei dunkelgraue Pfeilblöcke von links nach rechts:

```text
Organisatorische Informationen
    -> Stellenbezogene Informationen
        -> Ausprägung des persönlichen Kompetenzgefühls
```

### Kontext der Folie
Anforderungs-/Kompetenzprofile können entweder:

- neu erstellt werden oder
- aus vorhandenen Grundlagen weiterentwickelt werden, z.B. Bereichsentwicklungspläne, Stellenbeschreibungen etc.

### Fachliche Aussage
Ein Anforderungsprofil entsteht nicht isoliert. Es basiert auf organisatorischen Informationen, stellenbezogenen Informationen und Einschätzungen zur Ausprägung persönlicher Kompetenzen.

### React-Vorschlag
Komponente: `ProfileInputFlow` mit drei Pfeilsegmenten. Unter jedem Pfeilsegment kann ein Tooltip erklären, welche Datenquellen darunter fallen.

---

## Folie 5 - Personalplanung: Erstellung Profile

### Fehlende visuelle Inhalte
Keine eigenständige Grafik. Der Inhalt ist aber methodisch wichtig und sollte als Prozess-/Checkliste aufbereitet werden.

### Inhaltliche Struktur für React
Anforderungsprofil enthält:

- Hauptaufgaben
- Verantwortungsbereiche
- Anforderungen und Wünsche des Unternehmens an den Mitarbeiter
- fachliche Anforderungsmerkmale
- persönliche Anforderungsmerkmale

Zusätzlich:

- Idealfall: Ableitung aus vorhandener Stellenbeschreibung
- Profilvergleich: Unternehmensprofil wird mit individuellem Kompetenzprofil der Bewerber verglichen

### React-Vorschlag
Komponente: `RequirementProfileChecklist` mit zwei Ebenen: `Profil erstellen` und `Profil im Bewerbungsprozess vergleichen`.

---

## Folie 6 - Personalplanung: Beispiel Anforderungsprofil

### In der MD fehlend
Die komplette Beispielgrafik fehlt inhaltlich. Die Folie zeigt ein **Muster-Anforderungsprofil für eine Führungsaufgabe** mit Skala von 1 bis 7 und markierten Ausprägungen.

### Visuelle Rekonstruktion
Das Formular besteht aus:

- Überschrift in grauem Balken: `Muster Anforderungsprofil für eine Führungsaufgabe`
- Bewertungsskala oben rechts: `1 2 3 4 5 6 7`
- Pro Kompetenzmerkmal eine Zeile mit sieben kleinen Kreisen
- Gefüllte Kreise und eine verbindende Linie zeigen das gewünschte Kompetenzprofil

### Inhaltliche Rekonstruktion

#### Führungskompetenz
| Merkmal | Visuell markierter Sollwert, ca. |
|---|---:|
| Zielorientierung | 5 |
| MA-Controlling | 6 |
| MA-Motivation | 5 |
| Konfliktfähigkeit | 5 |
| Verantwortungsbereitschaft | 5 |
| Entscheidungsfähigkeit | 6 |
| Sensibilität | 5 |

#### Fachkompetenz
| Merkmal | Visuell markierter Sollwert, ca. |
|---|---:|
| Analytisches Denken | 3 |
| Konzeptionelles/lösungsorientiertes Denken | 3 |
| Beratungskompetenz | 3 |
| Eigeninitiative | 4 |

#### Zwischenmenschliche Kompetenz
| Merkmal | Visuell markierter Sollwert, ca. |
|---|---:|
| Kommunikationskompetenz | 6 |
| Selbstdarstellung und Auftreten | 5 |

### Fachliche Aussage
Ein Anforderungsprofil übersetzt abstrakte Anforderungen in messbare Soll-Ausprägungen. Dadurch können Bewerberprofile systematischer mit dem Stellenprofil verglichen werden.

### React-Vorschlag
Komponente: `RequirementProfileScale`.

Mögliche Datenstruktur:

```js
const profile = [
  {
    category: 'Führungskompetenz',
    items: [
      { label: 'Zielorientierung', value: 5 },
      { label: 'MA-Controlling', value: 6 },
      { label: 'MA-Motivation', value: 5 },
      { label: 'Konfliktfähigkeit', value: 5 },
      { label: 'Verantwortungsbereitschaft', value: 5 },
      { label: 'Entscheidungsfähigkeit', value: 6 },
      { label: 'Sensibilität', value: 5 },
    ],
  },
  {
    category: 'Fachkompetenz',
    items: [
      { label: 'Analytisches Denken', value: 3 },
      { label: 'Konzeptionelles/lösungsorientiertes Denken', value: 3 },
      { label: 'Beratungskompetenz', value: 3 },
      { label: 'Eigeninitiative', value: 4 },
    ],
  },
  {
    category: 'Zwischenmenschliche Kompetenz',
    items: [
      { label: 'Kommunikationskompetenz', value: 6 },
      { label: 'Selbstdarstellung und Auftreten', value: 5 },
    ],
  },
]
```

Hinweis: Die Werte sind visuell aus der Folie rekonstruiert und sollten als `ca.` markiert werden, falls die ursprüngliche Vorlage nicht als editierbare Tabelle vorliegt.

---

## Folie 7 - Gruppenarbeit: Übung Schmidt GmbH

### Fehlende visuelle Inhalte
Die Folie enthält links ein Gruppenfoto von Personen in Draufsicht. Dieses Bild signalisiert Team-/Gruppenarbeit und sollte nicht als fachlicher Inhalt gewertet werden, aber als visueller Kontext für die Aufgabe erhalten bleiben.

### Inhaltliche Rekonstruktion der Übung
Fall:

- Familienunternehmen Schmidt GmbH betreibt ein erfolgreiches Autohaus mit Werkstatt für eine bekannte deutsche Automarke.
- Der Sohn hat sich neben dem Ingenieurstudium intensiv im Motorsport engagiert und mit Motorenentwicklung beschäftigt.
- Parallel zum Autohaus wurde eine Entwicklungs- und Produktionsabteilung für Auspuffanlagen aufgebaut.
- Jährlich werden ca. 2.000 Auspuffanlagen für Motorsport und gängige Automodelle in Serie hergestellt.
- Vertrieb läuft über Händler oder direkt im Webshop.
- Das Unternehmen will den Vertrieb über Händler weiter ausbauen.
- Die Geschäftsleitung genehmigt eine Stelle für eine/n Vertriebsmitarbeiter/in.

Aufgabe:

- Als Mitarbeiter/in der Personalabteilung ein Anforderungsprofil für die Vertriebsstelle formulieren.
- Das Formblatt `Anforderungsprofil` nutzen.
- Einstufungen durch fachliche, persönliche, methodische und soziale Kompetenzen ergänzen.

### React-Vorschlag
Komponente: `ExerciseCaseCard` mit:

- Badge: `Gruppenarbeit - 20 Minuten`
- Fallbeschreibung
- Aufgabenstellung
- optionalem Button: `Musterlösung anzeigen`
- optionaler Kompetenzmatrix zum Ausfüllen

---

## Folie 8 - Personalplanung: Funktionsmatrix

### Fehlende visuelle Inhalte
Keine eigene Fachgrafik, aber der Inhalt bereitet die Matrix der Folie 9 vor. Die MD enthält teilweise kaputte Tabellenumbrüche.

### Inhaltliche Struktur
Eine Funktionsmatrix:

- fasst die Summe aller Anforderungsprofile eines Unternehmens zusammen
- zeigt Entwicklungswege zwischen einzelnen Anforderungsprofilen
- ordnet jedes Profil einer Funktionsfamilie und einem Verantwortungs-/Kompetenzlevel zu
- bildet Hauptfunktionen der Unternehmensprozesse ab

### Fachliche Aussage
Die Funktionsmatrix verbindet Personalplanung, Kompetenzprofile und Karriereentwicklung. Sie macht sichtbar, welche Entwicklungswege zwischen Funktionen und Leveln bestehen.

### React-Vorschlag
Komponente: `FunctionMatrixIntro` mit Definition und einer Mini-Vorschau der Matrix.

---

## Folie 9 - Personalplanung: Funktionsmatrix - Beispiel

### In der MD fehlend
Die Matrix fehlt fast vollständig. Sie ist eine zentrale visuelle Tabelle mit Funktionsfamilien auf der x-Achse und Kompetenz-/Verantwortungsleveln auf der y-Achse.

### Visuelle Rekonstruktion
Die Tabelle zeigt:

- linke Level-Spalte: `A`, `B`, `C`, `D`, `E`, `F`
- untere Zeile: Job-Familien
- rechte blaue Spalte: Führungsebene / Mitarbeiterebene
- mittlere Zellen: Beispielpositionen je Funktionsfamilie und Level

### Tabellenrekonstruktion

| Level | Consulting | Personal und Recht | Callcenter | Technik | Marketing | Vertrieb | Finanzen und Controlling | Ebene |
|---|---|---|---|---|---|---|---|---|
| A | Geschäftsführer | Geschäftsführer | Geschäftsführer | Geschäftsführer | Geschäftsführer | Geschäftsführer | Geschäftsführer | obere Führungsebene |
| B | Direktor Consulting | Direktor Personal und Recht | Direktor Kunden | Direktor IT | Direktor Marketing | Direktor Vertrieb | Direktor Finanzen und Controlling | obere Führungsebene |
| C | Leiter Consulting | Leiter Personal | Leiter Kundenbetreuung | IT-Leiter | Leiter Marketing | Leiter Vertrieb | Leiter Controlling | mittlere Führungsebene |
| D | Senior Berater | Jurist; Personalreferent | Senior Kundenbetreuer | Senior Softwareentwickler; Senior Systemspezialist | Marketingreferent; Public Relations-Referent | Vertriebsspezialist | Senior Controller | Mitarbeiter (Senior Status) |
| E | Berater | Mitarbeiter Gehaltsabrechnung | Kundenbetreuer | Softwareentwickler | Mitarbeiter Produktmarketing | Vertriebsmitarbeiter | Buchhalter; Controller | Mitarbeiter |
| F | Beratungsassistenz | Personalassistent/in | Teamassistentin | Systembetreuer; Hotline-Mitarbeiter | Marketingassistentin | Mitarbeiter Vertriebsunterstützung; Vertriebsassistentin | Teamassistentin | Mitarbeiter |
| Job-Familie | z.B. Consulting | z.B. Personal und Recht | z.B. Callcenter | z.B. Technik | z.B. Marketing | z.B. Vertrieb | z.B. Finanzen und Controlling | Job Familien |

### Fachliche Aussage
Die Matrix zeigt horizontale und vertikale Entwicklungsmöglichkeiten:

- vertikal: Aufstieg über Level A-F
- horizontal: Wechsel zwischen Funktionsfamilien
- rechts: Einordnung in Führungs- oder Mitarbeiterebene
- unten: Zuordnung der Funktionsfamilien

### React-Vorschlag
Komponente: `FunctionMatrixTable` mit Sticky-Header und farbiger rechter Ebenenspalte. Für die Lern-App sinnvoll: Hover über eine Zelle zeigt mögliche Vor-/Nachfolgepositionen.

---

## Folie 10 - Funktionsmatrix: Karrieremodell

### Fehlende visuelle Inhalte
Keine eigene Grafik. Die Folie erklärt die Folien 11 und 12.

### Inhaltliche Rekonstruktion
Mit Hilfe der Funktionsmatrix werden Karrierewege sichtbar. Neben klassischer Führungslaufbahn sollten alternative Entwicklungsmöglichkeiten mit gleicher Verantwortungsstufe angeboten werden.

Moderne Karrieremodelle bieten typischerweise:

- Linien-Management
- Fach-Management
- Projektmanagement

### Fachliche Aussage
Karriere bedeutet nicht nur disziplinarische Führung. Fach- und Projektlaufbahnen können gleichwertige Alternativen darstellen.

### React-Vorschlag
Komponente: `CareerPathComparison` mit drei Spalten: `Linienlaufbahn`, `Fachlaufbahn`, `Projektlaufbahn`.

---

## Folie 11 - Karrieremodell: Beispiel - Klassiker

### In der MD fehlend
Die Tabelle ist als Bild eingebettet und wird in der MD nur als Titel erwähnt.

### Visuelle Rekonstruktion
Tabelle mit drei Spalten:

| Rangstufe | Leitungsebene | Fachlaufbahnstufe |
|---:|---|---|
| 1 | Direktor/-in | ---- |
| 2 | Bereichsleiter/-in | Fachwissenschaftliche/r Berater/-in |
| 3 | Abteilungsleiter/-in | Wissenschaftliche/r Experte/-in |
| 4 | Gruppenleiter/-in | Fachwissenschaftler/-in |
| 5 | Mitarbeiter/-in | Wissenschaftliche/r Assistent/-in |

Quelle auf der Folie: `Friedl, V.: Die betriebliche Karriereplanung, 2002`.

### Fachliche Aussage
Das klassische Karrieremodell stellt Leitungsebene und Fachlaufbahn nebeneinander. Dadurch wird Fachkarriere als Alternative zur Führungslaufbahn sichtbar.

### React-Vorschlag
Komponente: `ClassicCareerPathTable` mit hervorgehobener Gegenüberstellung `Leitungsebene` vs. `Fachlaufbahnstufe`.

---

## Folie 12 - Karrieremodell: Beispiel - Rheinmetall

### In der MD fehlend
Die Pyramiden-Grafik fehlt. Sie zeigt ein modernes Karrieremodell mit Ebenen und Laufbahnen.

### Visuelle Rekonstruktion
Eine blaue 3D-Pyramide mit fünf horizontalen Ebenen:

1. `Executives` an der Spitze
2. `Top Management`
3. `Senior Management`
4. `Management`
5. `Professionals` als breite Basis

Am unteren Rand sind drei Laufbahnen beschriftet:

- `Fachkräfte`
- `Führungskräfte`
- `Projektmanagement`

### Fachliche Aussage
Das Beispiel zeigt, dass Karrierepfade parallel verlaufen können. Fachkräfte, Führungskräfte und Projektmanagement bilden unterschiedliche Laufbahnen, die über Hierarchieebenen hinweg gedacht werden.

### React-Vorschlag
Komponente: `PyramidCareerModel`.

Umsetzung:

- Pyramide als CSS/SVG mit fünf horizontalen Segmenten
- darunter drei Track-Badges
- rechts oder darunter kurze Erklärung: `Karriere = Laufbahn + Hierarchieebene`

---

## Folie 13 - Personalgewinnung: Stellenbeschreibung

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Die Punkte sollten aber als Nutzen einer Stellenbeschreibung visualisiert werden.

### Inhaltliche Struktur
Eine Stellenbeschreibung:

- ist ein altbewährtes Instrument der Personalplanung
- gibt dem Mitarbeiter Überblick über Befugnisse, Art und Umfang der Anforderungen
- grenzt Tätigkeits- und Verantwortungsbereich verbindlich ab
- zeigt die Einordnung des Arbeitsplatzes in die betriebliche Organisation

### React-Vorschlag
Komponente: `JobDescriptionPurposeCards` mit vier Cards:

1. Befugnisse
2. Anforderungen
3. Verantwortungsbereich
4. Organisationseinordnung

---

## Folie 14 - Personalgewinnung: Stellenbeschreibung

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Inhalt ist methodisch wichtig und sollte als Hinweise-/Warnblock umgesetzt werden.

### Inhaltliche Struktur
Die Stellenbeschreibung:

- ist gleichzeitig Führungs- und Organisationsinstrument
- sollte kein fester Bestandteil des Arbeitsvertrags sein, damit sie jederzeit geändert werden kann
- ergänzt stellenbezogene Kompetenzprofile um diskriminierungsfreie Informationen
- erfolgt unabhängig vom aktuellen Stelleninhaber
- legt Aufgaben funktionsbezogen und mitarbeiterunabhängig fest

### React-Vorschlag
Komponente: `JobDescriptionPrinciples` mit zwei Spalten:

- `Was sie leistet`
- `Was beachtet werden muss`

Wichtiges Warnlabel: `Nicht fest in den Arbeitsvertrag integrieren, wenn Anpassbarkeit erhalten bleiben soll.`

---

## Folie 15 - Stellenbeschreibung: Vor- und Nachteile

### Fehlende visuelle Inhalte
Keine eigene Grafik. Für React als Vergleichstabelle umsetzen.

### Tabellenrekonstruktion

| Vorteile | Nachteile |
|---|---|
| Klare Abgrenzung von Aufgaben und Kompetenzen | Großer Arbeitsaufwand bei ständiger Aktualisierung |
| Festgelegte Vertretung und Vollmachten | Starre Aufgabenbestimmung: mögliche Zusatzaufgaben müssen nicht erfüllt werden |
| Gute Grundlage für Personalbeschaffung, Personalbeurteilung und Personalentwicklung | Geringe Flexibilität bei Änderungen |

### Fachliche Aussage
Stellenbeschreibungen schaffen Klarheit, können aber Flexibilität reduzieren und müssen gepflegt werden.

### React-Vorschlag
Komponente: `ProsConsTable`.

---

## Folie 16 - Stellenbeschreibung: Beispiel - International Sales Manager

### In der MD fehlend
Die gesamte Stellenbeschreibung ist als Bild eingebettet. Sie wird in der MD nur als Folientitel übernommen.

### Visuelle Rekonstruktion
Die Folie zeigt ein vollständiges Formular `Stellenbeschreibung` auf zwei Dokumenthälften. Es enthält typische Felder und Unterschriftenbereiche.

### Inhaltliche Rekonstruktion der sichtbaren Struktur

#### Kopfdaten
- Stellenbezeichnung: `International Sales Manager`
- Bereich/Abteilung: `Vertrieb/Export`
- Kostenstelle: `1162`
- Arbeitszeit: Vollzeit 40 Std./Woche ist angekreuzt; Teilzeit und geringfügige Beschäftigung sind nicht angekreuzt.

#### Ziel der Stelle
- Umsatz- und Gewinnmaximierung in den verantwortlichen Vertriebsgebieten bezogen auf jährliche Umsatzziele
- systematische, markt- bzw. zielgruppenorientierte Ausrichtung von Vertriebsaktivitäten in den verantwortlichen Vertriebsgebieten

#### Aufgaben-/Verantwortungs-/Kompetenzbereich
Sichtbar sind u.a. typische Sales-Management-Aufgaben:

- kontinuierliche Vertriebsentwicklung im Einklang mit strategischen Unternehmenszielen
- Marktbeobachtungen von Kunden und Wettbewerb
- Entwicklung und Umsetzung von markt- und zeitgerechten Verkaufsstrategien
- strategischer Aufbau von Exportstrukturen und Netzwerken
- Umsatz- und Ergebnisplanung/-verantwortung
- Einhalten des Vertriebsbudgets
- Sicherung der Verkaufspreise und Fakturierung
- Erstellen und Auswerten von Markt- und Verkaufsanalysen
- Anwendung des Vertriebscontrollings

#### Organisationsbezug / Vertretung
- Stelleninhaber/in ist unterstellt: Geschäftsführer
- Stelleninhaber/in wird vertreten von: International Sales Service Team
- Vollmacht: i.A.
- Unterschriftenbereiche: Stelleninhaber/in, Vorgesetzte/r, Personalleitung

### Fachliche Aussage
Das Beispiel zeigt, dass eine Stellenbeschreibung mehr ist als eine Aufgabenliste. Sie verbindet Positionsdaten, Arbeitszeit, Ziele, Aufgaben, Verantwortung, Unterstellung, Vertretung, Vollmacht und formale Bestätigung.

### React-Vorschlag
Komponente: `JobDescriptionTemplate` mit ausklappbaren Bereichen:

1. Kopfdaten
2. Arbeitszeit
3. Ziel der Stelle
4. Aufgaben und Verantwortungen
5. Unterstellung und Vertretung
6. Vollmacht und Unterschriften

Hinweis: Die kleinen Texte im Dokumentbild sind teilweise sehr klein; deshalb nicht als vollwertigen Fließtext übernehmen, sondern als rekonstruierte Beispielstruktur darstellen.

---

## Folie 17 - Stellenbeschreibung: Beispiel - Produktmanager/in

### In der MD fehlend
Auch diese Folie enthält eine eingebettete Stellenbeschreibung, die in der MD nur als Titel erscheint.

### Visuelle Rekonstruktion
Das Dokument ist ähnlich aufgebaut wie Folie 16, aber für `Produktmanager/in`.

### Inhaltliche Rekonstruktion der sichtbaren Struktur

#### Kopfdaten
- Stellenbezeichnung: `Produktmanager/in`
- Bereich/Abteilung: `Marketing und Produktmanagement`
- Kostenstelle: `14`
- Arbeitszeit: Vollzeit 40 Std./Woche ist angekreuzt.

#### Ziel der Stelle
- optimale Unterstützung der Bereichsleitung bei kontinuierlicher markt- und zielgruppengerechter Ausrichtung der Marketing- und Produktmanagementaktivitäten

#### Aufgaben-/Verantwortungs-/Kompetenzbereich
Sichtbar sind u.a. typische Produktmanagement-Aufgaben:

- Vorleben der Firmenkultur und kostenbewusstes Handeln
- Nutzung, Pflege und Weiterentwicklung des Produktinformationssystems (PIM)
- Kontrolle und Pflege produktspezifischer Dokumentationen, z.B. Kataloge, Informationen, Updates
- Kontrolle und Pflege der Kalkulationssoftware
- Erarbeitung und Pflege technischer Inhalte des Produktinformationsmanagement-Systems, z.B. technische Angaben, kaufmännische Angaben, Zeichnungen
- Qualitätssicherung der Dokumentationen und Verkaufsunterlagen
- Verfolgung kontinuierlicher Produktänderungen und Dokumentation
- Durchführung von Marktanalysen, z.B. Trend-, Wettbewerbs-, Zielgruppen- und Produktanalysen
- Unterstützung bei Planung, Organisation und Durchführung von Workshops, Schulungen und betrieblichen Veranstaltungen
- Unterstützung bei Konzeption, Durchführung und Auswertung von Umfragen und strategischen Analysen
- vertriebsunterstützende Aktivitäten
- Produktpräsentationen bei Kunden im internationalen Umfeld
- Vorträge und Schulungen bei Veranstaltungen und Kunden
- Mitarbeit bei definierten Projekten innerhalb des Bereichs

#### Organisationsbezug
- Stelleninhaber/in ist unterstellt: Bereichsleiter Vertrieb, Marketing und Produktmanagement
- Unterstellte Personen: keine sichtbar bzw. `/`
- Weitere Felder zu Vertretung, Vollmacht und Unterschriften analog zum Formular aus Folie 16.

### Fachliche Aussage
Das Beispiel zeigt, wie dieselbe Stellenbeschreibungslogik auf eine andere Funktion übertragen wird. Im Vergleich zum Sales Manager liegt der Schwerpunkt stärker auf Produktdaten, Dokumentation, Marktanalyse, Präsentation und Schnittstellenunterstützung.

### React-Vorschlag
Komponente: `JobDescriptionExampleComparison` mit Toggle zwischen `International Sales Manager` und `Produktmanager/in`.

---

## Folie 18 - Personalbesetzung: Prozessschema

### In der MD fehlend
Das Prozessschema ist in der MD nicht enthalten. Es ist ein zentrales Flussdiagramm zur Besetzung einer konkreten Position.

### Visuelle Rekonstruktion
Das Schema hat drei Bereiche:

1. links: Hauptprozess als vertikale Prozesskette
2. Mitte: wichtige Punkte
3. rechts: Hilfsmittel

#### Hauptprozess links
```text
Besetzung einer konkreten Position
  ↓
Ausfüllen der Personalanforderung
  ↓
Genehmigungsprozess
  ↓
Entscheidung Beschaffungsweg
  ├─ bei externer Beschaffung: Festlegung der Wege
  │    ↓
  │  Ende der Vorbereitungsaufgaben
  └─ bei interner Beschaffung:
       interne Stellenausschreibung
       ↓
       Beförderung bzw. Versetzung
       ↓
       Auswahl geeigneter Beschaffungswege im Unternehmen
       -> Rückbezug auf Entscheidung/Festlegung
```

#### Wichtige Punkte
- Fachbereich füllt Anforderung aus
- bei interner Beschaffung: interne Stellenausschreibung
- Beförderung bzw. Versetzung
- Auswahl geeigneter Beschaffungswege im Unternehmen

#### Hilfsmittel
- Personalanforderung, `HI888237`
- Interne Stellenausschreibung, `HI708535`
- Beförderung, `HI906805`
- Versetzung, `HI875189` oder `HI585113`

### Fachliche Aussage
Die Entscheidung über den Beschaffungsweg ist der zentrale Verzweigungspunkt: intern oder extern. Vorher werden Bedarf und Genehmigung geklärt; danach werden abhängig vom Beschaffungsweg passende Maßnahmen ausgewählt.

### React-Vorschlag
Komponente: `StaffingProcessFlow`.

- Entscheidungsdiamant für `Entscheidung Beschaffungsweg`
- linker/unterer Pfad: externe Beschaffung
- rechter Pfad: interne Beschaffung
- Hilfsmittel als seitliche Referenzbox

---

## Folie 19 - Personalbesetzung: Prozessschema

### Fehlende visuelle Inhalte
Keine eigene Grafik. Der Text erklärt, warum das Prozessschema aus Folie 18 wichtig ist.

### Inhaltliche Struktur
Nach Konkretisierung des Personalbedarfs und der Anforderungen an künftige Positionsinhaber muss die Personalbeschaffung geplant und umgesetzt werden.

Zentrale Entscheidungen:

- Beschaffungswege
- Beschaffungsmedien
- Auswahlmethoden

Analyse relevanter Bewerber-Fundorte:

- interner Arbeitsmarkt
- externer Arbeitsmarkt

### React-Vorschlag
Komponente: `RecruitmentDecisionCards` mit drei zentralen Entscheidungsfeldern und darunter einer Arbeitsmarkt-Umschaltung `intern` / `extern`.

---

## Folie 20 - Personalmarketing: Arbeitsmarktforschung

### In der MD vorhanden, aber visuell fehlend
Die Stichpunkte sind vorhanden, das Personen-Icon rechts fehlt. Die Folie arbeitet mit der Gegenüberstellung von offenem und latentem Beschaffungspotential.

### Visuelle Rekonstruktion
Rechts steht ein schwarzes Icon mit vier stehenden Personen. Links stehen zwei Potenzialarten.

| Potenzialart | Bedeutung |
|---|---|
| Offenes Beschaffungspotential | Arbeitslose, arbeitsplatzsuchende Beschäftigte, neu Eintretende |
| Latentes Beschaffungspotential | Abwerben von Arbeitskräften anderer Firmen, Steigerung der Erwerbstätigkeit |

### Fachliche Aussage
Arbeitsmarktforschung unterscheidet zwischen Personen, die offen verfügbar oder suchend sind, und Personen, die latent gewonnen werden könnten.

### React-Vorschlag
Komponente: `LaborMarketPotentialCards` mit zwei Cards und People-Icon.

---

## Folie 21 - Personalmarketing: Innerbetriebliche Analyse

### In der MD teilweise problematisch
Die Pfeile und räumlich/inhaltliche Ordnung sind als Text vorhanden, aber die visuelle Struktur ist verloren.

### Visuelle Rekonstruktion
Die Folie enthält rechts ein Fabrik-/Unternehmens-Icon. Links gibt es zwei Hauptpfeile:

1. Erforschung des Mitarbeiterpotenzials aus Daten der Personalverwaltung, -planung, -entwicklung
2. Herkunft der Bewerber

Die Herkunft der Bewerber wird unterteilt in:

#### Räumlich
- innerhalb des Betriebs
- aus anderen Betriebsteilen
- aus dem Gesamtunternehmen / Konzern

#### Inhaltlich
- aus dem gleichen Tätigkeitsbereich
- aus einem anderen Tätigkeitsbereich

### Fachliche Aussage
Innerbetriebliche Analyse prüft, welches Potenzial bereits im Unternehmen vorhanden ist und woher interne Bewerber räumlich oder funktional stammen können.

### React-Vorschlag
Komponente: `InternalLaborMarketAnalysis` mit zwei Analyseachsen: `räumlich` und `inhaltlich`.

---

## Folie 22 - Personalmarketing: Außerbetriebliche Analyse

### In der MD vorhanden, aber visuell fehlend
Die Folie enthält rechts ein Icon mit Gebäude und mehreren Personenblasen. Es symbolisiert den externen Arbeitsmarkt außerhalb der Organisation.

### Inhaltliche Struktur
Analyse des allgemeinen und betrieblich relevanten Arbeitsmarktes:

#### Arbeitskräfteangebot
- Alter
- Qualifikation

#### Arbeitskräftenachfrage
- Branchenverteilung
- Berufsverteilung

#### Entwicklung des Arbeitsmarktes
- Qualifikationstrends
- Branchenentwicklung
- Berufsbildentwicklung

### Fachliche Aussage
Außerbetriebliche Analyse betrachtet nicht nur verfügbare Personen, sondern auch Struktur, Nachfrage und Entwicklung des Arbeitsmarktes.

### React-Vorschlag
Komponente: `ExternalLaborMarketAnalysis` mit drei Säulen: `Angebot`, `Nachfrage`, `Entwicklung`.

---

## Folie 23 - Arbeitsmarkt: Abhängigkeiten

### In der MD vorhanden, aber visuell fehlend
Die Folie enthält rechts ein Netzwerk-/Knoten-Icon. Dieses visualisiert, dass Arbeitsmarktbedingungen von mehreren Einflussgrößen abhängen.

### Inhaltliche Struktur
Arbeitsmarkt-Abhängigkeiten:

- strukturelle Veränderungen
- konjunkturelle Schwankungen
- saisonale Schwankungen
- Bevölkerungsstruktur
- Beschäftigungsstruktur
- Staatspolitik
  - Bildungspolitik
  - Sozialpolitik
  - Wirtschaftspolitik

### Fachliche Aussage
Der Arbeitsmarkt ist kein isolierter Markt. Er wird durch langfristige Strukturveränderungen, Konjunktur, Saison, Demografie, Beschäftigungsmuster und politische Rahmenbedingungen beeinflusst.

### React-Vorschlag
Komponente: `LaborMarketDependencyMap`. Die sechs Hauptfaktoren als Knoten um `Arbeitsmarkt`; Staatspolitik mit drei Subknoten.

---

## Folie 24 - Personalmarketing: Prozess

### In der MD fehlend
Die Folie wiederholt das Prozessschema aus Folie 18, markiert aber den Entscheidungsdiamanten `Entscheidung Beschaffungsweg` zusätzlich mit einem roten Oval. Diese Hervorhebung ist fachlich relevant.

### Visuelle Rekonstruktion
Gleicher Prozess wie Folie 18, aber mit roter Markierung um:

```text
Entscheidung Beschaffungsweg
```

### Fachliche Aussage
Für das Personalmarketing ist genau dieser Entscheidungspunkt entscheidend: Erst nach der Wahl des Beschaffungswegs kann festgelegt werden, ob interne Maßnahmen, externe Wege, Medien oder Auswahlkanäle relevant sind.

### React-Vorschlag
Komponente: `StaffingProcessFlow` wiederverwenden, aber mit Prop:

```jsx
<StaffingProcessFlow highlight="decision-beschaffungsweg" />
```

Die Hervorhebung sollte als roter Ring, Glow oder Fokuszustand umgesetzt werden.

---

## Folie 25 - Einzelarbeit: Übung

### Fehlende visuelle Inhalte
Links befindet sich erneut das Gruppenfoto von Personen in Draufsicht. Es dient als visuelles Übungs-/Interaktionssignal.

### Inhaltliche Rekonstruktion
Aufgabe:

1. Überlegen, in welchem Unternehmensbereich man später tätig sein möchte.
2. Mithilfe von KI eine Stellenanzeige für diese Berufsrichtung schreiben.

### Fachliche Aussage
Die Übung verbindet Personalmarketing, Anforderungsprofile und Stellenanzeigen mit einer praktischen Anwendung. Sie eignet sich besonders für eine interaktive Lern-App, weil Nutzer selbst eine Stelle auswählen und eine Anzeige generieren oder bewerten können.

### React-Vorschlag
Komponente: `AIJobAdExercise` mit Eingabefeldern:

- gewünschter Unternehmensbereich
- Berufsrichtung
- Zielgruppe
- Pflichtanforderungen
- Kann-Anforderungen
- Arbeitgeberargumente

Optional: Ausgabe als generierte Stellenanzeige oder Bewertungsrubrik.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 3: Kompetenzquadrant
2. Folie 4: Pfeilprozess zur Profilerstellung
3. Folie 6: Muster-Anforderungsprofil mit 1-7 Skala
4. Folie 9: Funktionsmatrix
5. Folie 11: Klassiker-Karrieremodell als Tabelle
6. Folie 12: Rheinmetall-Pyramide
7. Folien 16-17: Stellenbeschreibung-Beispiele als Dokumentstruktur
8. Folien 18 und 24: Prozessschema, bei Folie 24 mit rotem Fokus auf Entscheidungsdiamant

## Kann vereinfacht werden

- Icons auf Folien 1, 20, 21, 22, 23 als einfache SVG-/Icon-Komponenten
- Übungsbilder auf Folien 7 und 25 als `ExerciseCard`-Illustration
- Folien 13-15 als strukturierte Cards und Pro/Contra-Tabelle

## Nicht fachlich relevant

- HBW-Logo
- graue Kopf-/Footerleiste
- Copyright-Zeile
- exakte Folienpositionierung
- dekorative Bildästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
export const competencyTypes = [
  {
    type: 'Fachkompetenz',
    items: ['Ausbildung', 'Fachkenntnisse', 'Berufserfahrung', 'Projekterfahrung'],
  },
  {
    type: 'Persönlichkeitskompetenz',
    items: ['Basisantrieb, Energie', 'Analytische Fähigkeiten', 'Kreativität / Innovationsfähigkeit', 'Leidenschaft, Stabilität', 'Moral, Ethik, Integrität'],
  },
  {
    type: 'Methodenkompetenz',
    items: ['Projektmanagement', 'Zeitmanagement', 'Anwendungswissen', 'Problemlösungskompetenz', 'Präsentationstechniken / Moderation'],
  },
  {
    type: 'Sozialkompetenz',
    items: ['Kommunikation', 'Teamfähigkeit', 'Konflikt- und Kritikfähigkeit', 'Motivations-, Überzeugungsfähigkeit', 'Empathie'],
  },
]

export const recruitmentProcess = [
  'Besetzung einer konkreten Position',
  'Ausfüllen der Personalanforderung',
  'Genehmigungsprozess',
  'Entscheidung Beschaffungsweg',
  'Interne Beschaffung oder externe Beschaffung',
  'Festlegung geeigneter Wege',
  'Ende der Vorbereitungsaufgaben',
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
