# HR2 - Fehlende visuelle Inhalte für die MD-zu-React-Konvertierung

**Zweck:** Diese Datei ergänzt die vorhandene `HR2.md` um die Inhalte, die bei der Markdown-Extraktion aus der PDF nur unvollständig, fehlerhaft oder gar nicht übertragen wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit Grafiken, Diagramme, Icons, Tabellenlogik und visuelle Beziehungen nicht verloren gehen.

**Quelle:** `HR2.pdf` mit 31 Folien.  
**Hinweis:** Wiederkehrende Layout-Elemente wie HBW-Logo, graue Kopfzeile, Copyright-Footer und allgemeine Folienrahmung sind keine fachlichen Inhalte. Sie können im React-Layout als globales Template umgesetzt werden. Fachlich relevante Bild-, Diagramm- und Tabelleninhalte sind unten je Folie beschrieben.

---

## Globale Umsetzungsregeln für React

1. **Nicht nur Text übernehmen:** Einige Folien bestehen fachlich aus Diagrammen, nicht aus Fließtext. Diese sollten als semantische React-Komponenten umgesetzt werden: Timeline, Parameter-Grid, Balkendiagramm, Kreis-/Ebenenmodell, Venn-Diagramm, Prozessdiagramm, Flowchart, Tabellenformular und Formel-Card.
2. **Beschreibungen nicht als reine Bildunterschriften behandeln:** Die folgenden Beschreibungen sollen helfen, die visuellen Inhalte aktiv nachzubauen, nicht nur ein `<img>` zu ersetzen.
3. **Diagrammdaten explizit modellieren:** Für Balkendiagramme, Formeln und Tabellen die angegebenen Werte als Datenobjekte hinterlegen.
4. **Icons semantisch einsetzen:** Icons dienen nicht nur Dekoration, sondern verankern Begriffe visuell. In React können sie durch Lucide-/Heroicons oder einfache SVGs ersetzt werden.
5. **Quellenhinweise erhalten:** Quellen wie „Future Talents Report 2022“, „Kreikebaum, 1996“ oder „Atoss Software GmbH“ jeweils bei der passenden Grafik als kleine Source-Zeile anzeigen.

---

# Folienweise Ergänzungen

## Folie 1 - Führung: Generationen

### In der MD problematisch/fehlend
Die vorhandene MD bildet die Grafik als zerbrochene Markdown-Tabelle ab. Die eigentliche Aussage ist eine **zeitliche Generationen-Timeline** mit Lebensphasen und Gegenwartsmarker 2026.

### Visuelle Rekonstruktion
Erstelle eine horizontale Timeline mit Jahrzehnten:

`1960 -> 1970 -> 1980 -> 1990 -> 2000 -> 2010 -> 2020 -> 2030 -> 2040 -> 2050 -> 2060 -> 2070 -> ...`

Darüber liegen vier Generationenzeilen:

| Generation | Sozialisation | Erwerbsphase | Ruhestand | Visuelle Logik |
|---|---|---|---|---|
| Baby Boomer | frühe/ältere Phase links der Mitte | lange Erwerbsphase bis etwa 2030/2040 | ab ca. 2040 | älteste dargestellte Generation; bereits Richtung Ruhestand |
| Generation X | ca. 1980/1990 | lange Erwerbsphase um 1990-2040/2050 | späterer Ruhestand ca. 2050+ | aktuell stark in Erwerbsphase |
| Generation Y | ca. 2000/2010 | Erwerbsphase ab ca. 2020 bis 2050/2060 | Ruhestand ca. 2060+ | jüngere Erwerbsgeneration |
| Generation Z | ca. 2010/2020 | Erwerbsphase ab ca. 2020/2030 bis 2060+ | Ruhestand ab ca. 2070+ | jüngste Generation im Übergang zur Erwerbsphase |

### Zentrale Bildelemente
- Links je Generation ein grauer, abgerundeter Label-Block.
- Pro Generation drei längliche Phasenbalken: `Sozialisation`, `Erwerbsphase`, `Ruhestand`.
- Unten eine Pfeil-/Chevron-Zeitachse mit den Jahrzehnten.
- Ein vertikaler gestrichelter Marker bei der Gegenwart; oben ein gestrichelter Pfeil zu einer ovalen Markierung `2026`.

### Fachliche Aussage
Die Grafik zeigt, dass 2026 mehrere Generationen gleichzeitig im Arbeitsleben relevant sind. Führung muss unterschiedliche Sozialisationsprägungen, Erwerbsphasen und Übergänge in den Ruhestand parallel berücksichtigen.

### React-Vorschlag
Komponente: `GenerationTimeline`  
Datenstruktur: Array aus Generationen mit `name`, `phases`, `startDecade`, `endDecade`, `currentMarker`.

---

## Folie 2 - Führung: Führen der unterschiedlichen Generationen I

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Die Folie ist textbasiert.

### Layout-Hinweis für React
Die drei Punkte als nummerierte Karten darstellen:

1. Führungs- und Organisationskultur auf Verständnis und Wertschätzung.
2. Offene und transparente Feedback-Kultur.
3. Individuelle Karriere-, Weiterbildungs- und Entwicklungsmöglichkeiten inklusive Gesundheitsmanagement.

### Fachliche Betonung
Diese drei Punkte betreffen vor allem Kultur, Kommunikation und Entwicklung.

---

## Folie 3 - Führung: Führen der unterschiedlichen Generationen II

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Die Folie ist textbasiert.

### Layout-Hinweis für React
Die Punkte 4-6 als Fortsetzung der nummerierten Karten darstellen:

4. Digitales Umdenken fördern; offen für neue Impulse; alle Generationen einbinden.
5. Intergenerative Teams bilden; unterschiedliche Stärken für Innovation nutzen.
6. Flexible Arbeitszeiten, flexible Arbeitseinteilung und individuelle Arbeitsbedingungen einführen.

### Fachliche Betonung
Diese Punkte betreffen digitale Offenheit, Teamzusammensetzung und Flexibilisierung.

---

## Folie 4 - Arbeitgeberqualität: Parameter

### In der MD problematisch/fehlend
Der Text ist vorhanden, aber die **zweispaltige Parameter-Infografik mit Icons** fehlt. In der MD laufen linke und rechte Begriffe ineinander.

### Visuelle Rekonstruktion
Erstelle ein 2-Spalten-Grid mit insgesamt 8 Parameter-Cards. Jede Card hat:

- eine dicke horizontale Linie,
- einen schwarzen Punkt als Connector,
- ein graues Icon,
- Überschrift,
- Kurzbeschreibung.

### Linke Spalte
| Parameter | Icon | Beschreibung |
|---|---|---|
| Aufgabenstellung | Puzzle-Teil | Erfasst das Maß an Autonomie, interessanten Aufgaben und empfundenem Mehrwert. |
| Lernen | gestapelte Bücher | Fokus auf Zufriedenheit mit Lernpotenzial und Weiterentwicklungsmöglichkeiten. |
| Arbeitsbedingungen | Aktentasche | Fragt u.a. nach Work-Life-Balance und Arbeitsbelastung. |
| Führung | Kompass | Umfasst Zufriedenheit mit Führungskraft bzw. Fachbetreuer:in. |

### Rechte Spalte
| Parameter | Icon | Beschreibung |
|---|---|---|
| Teamklima | Gruppe von Personen | Beschreibt Arbeitsatmosphäre, gegenseitige Unterstützung und Feedback im Team. |
| Arbeitszeit | Uhr | Erfasst die Angemessenheit der Arbeitszeiten. |
| Grundsätzliche Bewertung | Daumen hoch | Beinhaltet Erwartungserfüllung, erneute Bewerbungsintention, Weiterempfehlungsquote und allgemeine Zufriedenheit mit dem Praktikum. |
| Vergütung | Münzstapel | Untersucht die Angemessenheit der Bezahlung. |

### Quelle
Future Talents Report 2022.

### React-Vorschlag
Komponente: `EmployerQualityParameterGrid` mit 8 Objekten `{title, description, icon, side}`.

---

## Folie 5 - Arbeitgeberqualität: Branchen

### In der MD problematisch/fehlend
Das Balkendiagramm wurde als unübersichtliche Text-/Tabellenmischung extrahiert. Für React muss es als horizontales Balkendiagramm mit Datenwerten rekonstruiert werden.

### Visuelle Rekonstruktion
- Horizontaler Balkenvergleich auf Skala `0` bis `5`.
- Achsenticks: `0`, `0,5`, `1`, `1,5`, `2`, `2,5`, `3`, `3,5`, `4`, `4,5`, `5`.
- Orange Balken, blaue Branchenlabels links, Zahlenwerte am rechten Balkenende.
- Rechts daneben erklärender Textblock zur Arbeitgeberqualität.
- Quelle unten rechts: Future Talents Report 2022.

### Daten für React
| Branche | Wert |
|---|---:|
| Vereine, NGOs & soziale Dienste | 4,0 |
| Beratung, Wirtschaftsprüfung & Recht | 4,0 |
| Transport & Logistik | 4,1 |
| Öffentliche Verwaltung | 3,9 |
| Mischkonzern | 3,8 |
| Medien & Marketing | 4,0 |
| Maschinen- & Anlagenbau | 4,1 |
| Luft- & Raumfahrt | 3,7 |
| Kultur, Sport & Touristik | 3,1 |
| Konsum- & Gebrauchsgüter | 4,0 |
| IT, Internet & Telekommunikation | 4,1 |
| Hotel & Gastronomie | 3,7 |
| Gesundheit & Pharma | 3,9 |
| Forschung & Wissenschaft | 3,5 |
| Fahrzeugbau / -Zulieferer | 3,9 |
| Energie, Bau- & Rohstoffe | 3,8 |
| Elektrotechnik, Feinmechanik & Optik | 4,3 |
| Chemie | 4,2 |
| Bildung & Training | 3,9 |
| Baugewerbe/-Industrie | 4,2 |
| Banken, Finanzen & Versicherungen | 4,0 |
| (Personal-)Dienstleistungen | 3,8 |

### Begleittext aus der Grafik
Die Arbeitgeberqualität wird über verschiedene Facetten der Arbeitszufriedenheit gemessen. Sie ermöglicht den Vergleich von Unternehmen anhand interner Sichtweisen der Arbeitnehmer:innen und bildet eine Achse der Employer Matrix. Die Werte bilden u.a. allgemeine Zufriedenheit, Weiterempfehlungsquote und Erfüllung von Erwartungen ab. Durchschnitt: `4,2` auf einer Skala von `1 = sehr unzufrieden` bis `5 = sehr zufrieden`.

### Interpretationsanker
- Höchster Wert: Elektrotechnik, Feinmechanik & Optik mit `4,3`.
- Auf Durchschnittsniveau: Chemie und Baugewerbe/-Industrie mit `4,2`.
- Niedrigster Wert: Kultur, Sport & Touristik mit `3,1`.
- Mehrere Branchen liegen knapp unter dem Durchschnitt, obwohl die absoluten Werte relativ hoch wirken.

### React-Vorschlag
Komponente: `HorizontalBarChart` oder `EmployerQualityIndustryChart`. Optional Durchschnittslinie bei `4,2` ergänzen, obwohl sie im Original nicht als eigene Linie eingezeichnet ist.

---

## Folie 6 - Ethik: Was verstehen wir darunter?

### In der MD fehlend
Die Folie enthält eine farbige **Word Cloud**, die in der Markdown-Datei nicht sinnvoll abgebildet ist.

### Visuelle Rekonstruktion
Zentrierte Word Cloud mit Ethikbegriffen. Größte Wörter:

- `MORALS`
- `ETHICS`
- `VALUES`
- `TRUTH`
- `HONOR`
- `RESPECT`

Weitere sichtbare Begriffe:

`PHILOSOPHY`, `SOCIAL`, `EQUALITY`, `ACCEPTANCE`, `CONDUCT`, `ETIQUETTE`, `FAITH`, `PRINCIPLES`, `FAIRNESS`, `CRITERIA`, `DECENCY`, `VIRTUE`, `STANDARDS`, `INNOCENCE`, `CHARACTER`, `AUTHENTICITY`, `INTEGRITY`, `HONESTY`, `RESPONSIBILITY`, `RESPECTABILITY`, `TREATMENT`, `CONVENTIONALITIES`, `PURPOSE`, `ATTITUDE`, `THEORY`, `HYPOCRISY`, `MOTIVATION`, `PERFORMANCE`, `WORTHINESS`, `FAIRNESS`.

### Fachliche Aussage
Die Word Cloud dient als Einstieg: Ethik wird assoziativ über Moral, Werte, Wahrheit, Respekt, Fairness, Integrität und Handlungskriterien eingeführt.

### React-Vorschlag
Als `EthicsWordCloud` oder als Tag-Cluster mit Gewichtung: große zentrale Tags für `Morals`, `Ethics`, `Values`, `Truth`, kleinere Tags für Nebenbegriffe.

---

## Folie 7 - Ethik: Definition

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Textinhalt steht im Vordergrund.

### Layout-Hinweis für React
Definition als hervorgehobene Definition-Card mit Quelle `Scholz, 2013`.

---

## Folie 8 - Ethik: Aristoteles I

### In der MD fehlend
Die Folie enthält ein Porträtfoto/eine Büste von Aristoteles oberhalb des Textes.

### Visuelle Rekonstruktion
- Zentral oben ein rechteckiges Bild einer antiken Büste von Aristoteles.
- Darunter zentrierter Textblock.
- Die Büste dient als historische/personenbezogene Verankerung der Folie.

### Fachliche Aussage des Bildes
Aristoteles wird als Ursprungspunkt einer klassischen Ethikperspektive eingeführt. Die visuelle Büste signalisiert: Es geht um philosophische Grundlagen und historische Einordnung.

### React-Vorschlag
`PhilosopherCard` mit Bildplatzhalter, Zeitraum `384 v. Chr. - 322 v. Chr.` und Kernaussage.

---

## Folie 9 - Ethik: Aristoteles II

### In der MD fehlend
Die Folie enthält ein großes schwarzes Kleeblatt-Symbol über dem Text.

### Visuelle Rekonstruktion
- Zentral oben ein schwarzes vierblättriges Kleeblatt.
- Darunter zentrierter Text zur Vorrangstellung des Glücks.

### Fachliche Aussage des Symbols
Das Kleeblatt steht für Glück. Es verstärkt Aristoteles' Fokus auf Glück bzw. Glücksstreben als sachlich vorrangig gegenüber Politik und Ökonomik.

### React-Vorschlag
Eine `ConceptHeroCard` mit Icon `clover` oder `luck`, darunter die Kernaussage: `Primat der Ethik vor Politik und Ökonomik`.

---

## Folie 10 - Ethik: Immanuel Kant

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Die Folie ist textbasiert.

### Layout-Hinweis für React
Kants kategorischen Imperativ als Zitat-Card hervorheben:

> Handle so, dass die Maxime deines Handelns jederzeit als Teil einer allgemeinen Gesetzgebung gelten könnte!

---

## Folie 11 - Ethik: Tugendhafte Menschen

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Als Argumentationskette umsetzen:

1. Aristoteles und Kant setzen Tugendhaftigkeit voraus.
2. Es geht nicht nur um ethische Maßstäbe, sondern auch um den Wunsch ihrer Befolgung.
3. Dialog ist zentral für die Auseinandersetzung um ethische Grundlagen.
4. Dialogethik/Diskursethik leitet aus impliziter Ethik explizite Handlungsnormen ab.

---

## Folie 12 - The Trolley Problem: Ethische Einordnung

### Fehlende visuelle Inhalte
Keine eigenständige Grafik in dieser PDF-Seite. Es wird nur das Trolley-Problem als konzeptioneller Vergleich genutzt.

### Layout-Hinweis für React
Als Vergleichskarte darstellen:

| Theorie | Leitfrage | Kriterium moralischer Bewertung |
|---|---|---|
| Utilitaristische / konsequentialistische Ethik | Was sind die Folgen? | Eine Handlung ist gut, wenn die Folgen nützlich sind. |
| Deontologische Ethik | Was ist Pflicht / erforderlich? | Der moralische Wert orientiert sich nicht primär an den Folgen. |

---

## Folie 13 - Human Resource Management: Ethische Einordnung

### Fehlende visuelle Inhalte
Keine eigenständige Grafik.

### Layout-Hinweis für React
Die Fähigkeiten als Kompetenzliste oder Radar-/Skill-Grid darstellen:

- Entwicklung eines moralischen Sinns.
- Gespür für das Gewicht von Problemen.
- Fähigkeit, moralische Konfliktsituationen rechtzeitig und klar zu erkennen.
- Fähigkeit, Handlungsfolgen abzuschätzen.
- Fähigkeit, Probleme aus verschiedenen Gesichtspunkten zu betrachten.
- Selbstkritisches Urteilsvermögen.

---

## Folie 14 - Unternehmensethik: Grundbegriffe

### Fehlende visuelle Inhalte
Keine eigenständige Grafik.

### Layout-Hinweis für React
Die Begriffe als Glossar-Karten darstellen:

| Begriff | Kurzdefinition |
|---|---|
| Ethik | Kritische Reflexion gesellschaftlicher Praxis und Moral; Wissenschaft sittlichen und moralischen Handelns. |
| Moral | Akzeptierte Regeln der Gesellschaft; Wert- und Normengefüge eines Kulturkreises. |
| Praxis | Tatsächliches Handeln der Gesellschaftsmitglieder. |
| Tugend | Handeln, das einem Anspruch des Guten verpflichtet ist; im Deutschen oft Moralität/Sittlichkeit. |

Quelle: i.A. Thürbach nach Holzmann, Wirtschaftsethik, 2015.

---

## Folie 15 - Ethische Bezugsfelder: Ebene

### In der MD problematisch/fehlend
Die MD extrahiert das Kreisdiagramm als verstreuten Text. Die fachliche Ebenenlogik geht dadurch verloren.

### Visuelle Rekonstruktion
Links steht ein großes Rechteck mit der Überschrift/Einbettung `Sozialethik`. Darin liegen drei ineinander verschachtelte Kreise:

1. **Großer äußerer Kreis:** `Wirtschaftsethik` - `Makrolevel`
2. **Mittlerer Kreis:** `Unternehmensethik` - `Mesolevel`
3. **Innerer dunkler Kreis:** `Führungsethik` - `Mikrolevel`

Der gesamte Kreisbereich ist in Sozialethik eingebettet. `Sozialethik` erscheint links oben im Rechteck und zusätzlich unten rechts im Rechteck.

Rechts neben dem Kreisdiagramm steht eine Liste anderer Bereichsethiken und Einzelfragen.

### Andere Bereichsethiken
- Individualethik
- Umweltethik
- Medizinethik
- Tierethik
- Forschungsethik
- Marketingethik

### Einzelfragen aus der Folie
- Darf ich in China investieren?
- Sind gesundheitsschädliche Produkte legitim?
- Ist Werbung für Kinder legitim?
- Müssen Unternehmen nachhaltig sein?
- ...

### Quelle
Kreikebaum, 1996, S. 14.

### Fachliche Aussage
Die Grafik ordnet Unternehmens- und Führungsethik nicht isoliert ein, sondern als Teilbereiche einer größeren Sozial- und Wirtschaftsethik. Führungsethik ist die konkreteste Mikroebene; Unternehmensethik liegt auf der Mesoebene; Wirtschaftsethik liegt auf der Makroebene.

### React-Vorschlag
Komponente: `EthicsLevelsDiagram` mit verschachtelten Kreisen. Alternativ als Layer-Modell: Makro -> Meso -> Mikro.

---

## Folie 16 - Unternehmens- und Führungsethik: Definition

### Fehlende visuelle Inhalte
Keine separate Fachgrafik, aber der Text ist als Definition mit Bullet-Struktur angeordnet.

### Layout-Hinweis für React
Drei Blöcke bilden:

1. Definition nach Neugebauer.
2. Ziel der Unternehmensethik.
3. Kernfragen + ethisches Dilemma.

Das ethische Dilemma als Alert-/Conflict-Card hervorheben: Werte stehen im Konflikt, z.B. interkulturell oder zwischen Organisations- und Stakeholderzielen.

---

## Folie 17 - Einführung in die Unternehmensethik: Grundüberlegungen

### In der MD problematisch/fehlend
Das Venn-Diagramm wird nur als lose Wörter `Praxis`, `Gesetze`, `Unternehmensethik` extrahiert. Die eigentliche Aussage liegt im Verhältnis dieser Bereiche.

### Visuelle Rekonstruktion
Unten auf der Folie befindet sich ein Venn-Diagramm mit zwei überlappenden Kreisen:

- Linker Kreis: `Gesetze`
- Rechter Kreis: `Praxis`
- Die Kreise überlappen sich teilweise.
- Der rechte Teil des Praxis-Kreises außerhalb bzw. jenseits eindeutiger Gesetzesdeckung ist grau gefüllt.
- Ein Pfeil/Label `Unternehmensethik` zeigt auf diesen grauen Bereich.

### Fachliche Aussage
Zwischen Gesetz und tatsächlicher Unternehmenspraxis existiert ein Graubereich. Unternehmensethik wird besonders relevant, wenn Handlungen zwar praktisch möglich und ggf. legal sind, aber moralisch reflektiert werden müssen. Legalität ist Mindestanforderung, aber nicht automatisch moralische Richtigkeit.

### React-Vorschlag
Komponente: `LawPracticeEthicsVenn` mit Tooltip-Erklärungen:

- `Gesetze`: formale Legalität.
- `Praxis`: tatsächliches Handeln.
- `Unternehmensethik`: moralische Reflexion im Graubereich bzw. über reine Legalität hinaus.

Quelle: i.A. Pech 2016.

---

## Folie 18 - Vorlesung: Überblick Themenfelder

### In der MD fehlend/unterrepräsentiert
Die Inhalte sind vorhanden, aber die Folie zeigt sie in einer großen hellgrauen, abgerundeten Box.

### Visuelle Rekonstruktion
- Zentrale große Rounded-Rectangle-Box mit hellgrauem Hintergrund.
- Darin sechs Bulletpoints:
  - Personalbeschaffung, Personalauswahl
  - Personalentwicklung
  - Personalbeurteilung
  - Personalfreisetzung
  - Personaleinsatz
  - Personalkostenmanagement

### React-Vorschlag
Als `TopicOverviewCard` oder Kapitel-Navigation umsetzen.

---

## Folie 19 - Personalbeschaffung: Integrierter Prozess

### In der MD problematisch/fehlend
Die MD enthält nur die drei Wörter `Planung`, `Marketing`, `Auswahl`. Das zentrale Prozessbild fehlt.

### Visuelle Rekonstruktion
Zentral befindet sich ein blaues, vertikal angeordnetes Prozesssymbol aus drei kreisförmigen Pfeil-Elementen:

1. Oben: `Planung`
2. Mitte: `Marketing`
3. Unten: `Auswahl`

Die blauen Pfeile deuten einen integrierten, wiederkehrenden bzw. zyklischen Ablauf an. Es ist kein rein linearer Prozess, sondern ein ineinandergreifender Kreislauf.

### Fachliche Aussage
Personalbeschaffung ist als integrierter Prozess zu verstehen: Planung, Personalmarketing und Auswahl greifen ineinander und können sich gegenseitig rückkoppeln.

### React-Vorschlag
Komponente: `IntegratedRecruitingProcess` mit drei kreisförmig verbundenen Steps.

---

## Folie 20 - Personalplanung: Personalstrategie

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Als Strategy-Card darstellen:

- Ableitung aus Unternehmenspolitik.
- Übertragung auf personalpolitische Ziele.
- Leitfragen:
  - Wo möchte sich das Unternehmen in der Personalarbeit positionieren?
  - Wie will das Unternehmen dieses Ziel erreichen?
- Strategisches Personalmanagement ist mehr als operative Umsetzung; es kann eigenständige Impulse in Unternehmensplanung und -führung einbringen.

---

## Folie 21 - Personalplanung: Anforderung

### In der MD fehlend
Die Folie enthält rechts eine Personen-Pyramide als Icon/Illustration.

### Visuelle Rekonstruktion
- Links steht der Text zum Sachziel der Personalplanung.
- Rechts eine schwarze Personenpyramide aus stilisierten Menschen:
  - unten die größte Gruppe,
  - darüber eine kleinere Gruppe,
  - oben drei Personen.
- Die Pyramide symbolisiert quantitative Personalbereitstellung bzw. Personalbestand nach Anzahl/Struktur.

### Inhaltliche Vier-Dimensionen
Personal ist bereitzustellen nach:

1. Anzahl - quantitativ
2. Art - qualitativ
3. Zeitpunkt und Dauer - zeitlich
4. Einsatzort - räumlich

### React-Vorschlag
Vier Dimensionen als `RequirementDimensionCards`; rechts optional People-Pyramid-Icon.

---

## Folie 22 - Personalplanung: Bedarfsbestimmung

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Als zentrale Definition mit Unterteilung darstellen:

- Ermittlung des erforderlichen Soll-Personalbestands.
- Differenzierung nach Perioden des Planungszeitraums.
- Differenzierung nach Qualifikationsgruppen bzw. Arbeitsplätzen.
- Zentrale Position im Personalmanagement, da Beschaffungs- oder Freistellungsentscheidungen die Zukunftsfähigkeit mitbestimmen.
- Wichtig: zukunftsorientiert statt vergangenheitsorientiert planen.

---

## Folie 23 - Personalplanung: Bedarfsbestimmung Flowchart

### In der MD fehlend
Die gesamte Flussgrafik fehlt faktisch; es bleibt nur ein Quellenhinweis. Diese Folie ist für das Verständnis der Personalbedarfsplanung zentral.

### Visuelle Rekonstruktion des Flowcharts
Das Diagramm zeigt einen Ablauf von der Ermittlung des Personalbedarfs und Personalbestands über Vergleich bis zu Beschaffungs- oder Freisetzungsmaßnahmen.

#### Oberste Ebene
Zwei parallele Ausgangsboxen:

| Links | Rechts |
|---|---|
| Ermittlung des gegenwärtigen und zukünftigen Personalbedarfs, qualitativ - quantitativ - zeitlich | Ermittlung des gegenwärtigen und zukünftigen Personalbestands, qualitativ - quantitativ - zeitlich |

#### Zweite Ebene
| Links | Rechts |
|---|---|
| `Brutto-Personalbedarf` | `Personal-Istbestand` |

Beide Boxen führen mit Pfeilen in die Mitte.

#### Vergleichsebene
- Zentrale ovale Box: `Vergleich`
- Links daneben als Ergebnis-/Hinweisfeld: `Überdeckung`
- Rechts daneben als Ergebnis-/Hinweisfeld: `Unterdeckung`

#### Bedarfsebene
Unter dem Vergleich steht:

- `Netto-Personalbedarf`

Von dort führen Pfeile nach unten zu zwei Bedarfspfaden:

| Linker Pfad | Rechter Pfad |
|---|---|
| `Personalfreisetzungsbedarf` | `Personalbeschaffungsbedarf` |

#### Maßnahmenebene
Aus den Bedarfspfaden ergeben sich interne und externe Maßnahmen:

| Bedarfspfad | Deckungsart | Maßnahme |
|---|---|---|
| Personalfreisetzungsbedarf | extern | Reduktion der Beschäftigtenzahl |
| Personalfreisetzungsbedarf | intern | Reduktion der Personalkapazität |
| Personalbeschaffungsbedarf | intern | v.a. Personalentwicklung |
| Personalbeschaffungsbedarf | extern | Externe Personalrekrutierung |

### Fachliche Aussage
- Brutto-Personalbedarf und Personal-Istbestand werden qualitativ, quantitativ und zeitlich betrachtet.
- Durch Vergleich entsteht Netto-Personalbedarf.
- Je nach Über- oder Unterdeckung folgt entweder Freisetzungsbedarf oder Beschaffungsbedarf.
- Maßnahmen können intern oder extern ansetzen.

### Quelle
Bernd, R.; Fantapié Altobelli, C.; Sander, M.: Personalbedarfsplanung in international tätigen Unternehmen, 2016.

### React-Vorschlag
Komponente: `PersonnelDemandFlowchart`. Die Boxen und Pfeile sollten nachgebaut werden, nicht nur als Textliste erscheinen.

---

## Folie 24 - Personalplanung: Ablauf

### In der MD problematisch
Die MD zerschießt die Zeilen teilweise in Tabellenfragmente. Inhaltlich ist die Folie eine klare 4-Schritt-Struktur.

### Visuelle Rekonstruktion
Vier vertikal angeordnete Schritte. Links steht jeweils `1.Schritt`, `2.Schritt`, `3.Schritt`, `4.Schritt`; rechts daneben der fett gesetzte Name und die Beschreibung.

| Schritt | Bezeichnung | Beschreibung |
|---:|---|---|
| 1 | Personalbestandsanalyse | Ermittlung der aktuellen Personalausstattung nach Quantität und Qualität. |
| 2 | Personalbedarfsanalyse | Ermittlung des zukünftigen Personalbedarfs nach Quantität und Qualität; Soll-Ermittlung. |
| 3 | Soll-Ist-Abgleich | Ermittlung des Netto-Bedarfs als Differenz zwischen künftigem Personalbestand und erwartetem Personalbedarf. |
| 4 | Planung der Maßnahmen | Ermittlung der Deckungsart; Planung geeigneter Maßnahmen zur Beseitigung von Personalüberdeckung oder Personalunterdeckung; Übergang zur Gewinnungs-, Entwicklungs- oder Abbauplanung. |

### React-Vorschlag
Komponente: `PlanningSteps` mit vier Step-Cards.

---

## Folie 25 - Personalplanungsanalyse: Berechnung

### Fehlende visuelle Inhalte
Keine eigenständige Grafik, aber eine Berechnungslogik sollte visuell erhalten bleiben.

### Relevante Formel
```text
Personalausstattung am Jahresanfang
- Abgänge innerhalb des Jahres
+ Zugänge innerhalb des Jahres
= Personalausstattung am Anfang des Folgejahres
```

### Layout-Hinweis für React
Als Formel-/Berechnungskarte darstellen. Zusätzlich die Mitarbeiterbestandsstatistik als Hinweis-Box:

Auch Mitarbeitende, die vorübergehend keinem produktiven Einsatz zugeordnet werden können, zählen in die Bestandsstatistik, z.B. Elternzeit oder längere Krankheit.

---

## Folie 26 - Personalplanungsanalyse: Beispiel Tabellenformular

### In der MD problematisch/fehlend
Die Folie enthält ein leeres Tabellenformular zur Erfassung von Abgängen und Zugängen. Die MD übernimmt die Struktur nur unvollständig.

### Visuelle Rekonstruktion
Oben steht eine Kopfzeile mit Eingabefeldern:

- `Abteilung / Geschäftsfeld:`
- `Anfangsbestand:`
- `Periode:`

Darunter eine Tabelle mit vier Spalten:

| Abgänge | Anzahl | Zugänge | Anzahl |
|---|---:|---|---:|
| Beförderung aus der Abteilung |  | Beförderung in die Abteilung |  |
| Versetzung aus der Abteilung |  | Versetzung in die Abteilung |  |
| Aus-/Weiterbildung |  | Rückkehr aus Weiterbildung |  |
| Pensionierung |  | Übernahme nach Ausbildung |  |
| Mutterschutz |  | Sichere Einstellungen |  |
| Entlassung |  | Beendigung des Mutterschutzes |  |
| Kündigung durch Mitarbeiter |  | Sonstiges |  |
| Sonstiges |  |  |  |
| **Summe der Abgänge** |  | **Summe der Zugänge** |  |

### Fachliche Aussage
Die Tabelle dient als Vorlage, um Personalbewegungen systematisch zu erfassen: links Abgänge, rechts Zugänge, jeweils mit Anzahl.

### React-Vorschlag
Komponente: `PersonnelMovementTable`; optional als interaktive Tabelle mit Eingabefeldern und automatischer Summenberechnung.

---

## Folie 27 - Personalplanungsanalyse: Prognose

### Fehlende visuelle Inhalte
Keine eigenständige Grafik.

### Layout-Hinweis für React
Als 3-Punkte-Analyse darstellen:

1. Bestandsprognose: zukünftiger Personalbedarf aus Unternehmenszielen, anschließend Detailplanung je Bereich.
2. Generalproblem der Bedarfsanalyse: Berücksichtigung qualitativer Mitarbeiteranforderungen.
3. Grundsätzliche Bedarfsberechnung: einheitliche Definition nötig; Umrechnung relevanter Arbeitsverträge in Mitarbeiterjahre.

---

## Folie 28 - Personalplanungsanalyse: Fragestellungen

### In der MD fehlend
Die Folie enthält rechts ein großes schwarzes Fragezeichen als Visual.

### Visuelle Rekonstruktion
- Links Bulletliste der Leitfragen.
- Rechts ein übergroßes schwarzes Fragezeichen.
- Das Fragezeichen markiert den explorativen Charakter der Analyse.

### Leitfragen
- Werden zusätzliche Mitarbeiter zur Unternehmenszielerreichung benötigt?
- Wenn ja, in welchen Bereichen werden diese Ressourcen benötigt?
- Wie viele Mitarbeiter auf welchem Verantwortungslevel werden notwendig?
- Welche Anforderungen werden an diese Mitarbeiter gestellt?
- Müssen bestehende Mitarbeiter ihre Qualifikation steigern? Wenn ja, in welchen Bereichen?
- Gibt es Bereiche, Funktionen oder Mitarbeiter, die aufgrund der Unternehmensplanung nicht mehr beschäftigt werden können?

### React-Vorschlag
Komponente: `PlanningQuestionsPanel` mit großem Question-Mark-Icon.

---

## Folie 29 - Personalplanungsanalyse: Soll-Ist-Abgleich - Beispiel I

### In der MD fehlend
Die Folie enthält eine zweigeteilte Visualisierung mit Balkendiagrammen zur Ist- und Soll-Situation. Die MD enthält nur Titel und Quelle.

### Visuelle Rekonstruktion
Die zentrale Grafik besteht aus zwei nebeneinanderliegenden Diagrammen:

#### Linkes Diagramm: Ist-Situation
Titel: `Ist-Situation`

Bulletpoints:
- Schwankender Personalbedarf.
- Starre Personalressourcen, nur mit langer Reaktionszeit verfügbar oder veränderbar.

Achsen:
- y-Achse: `Arbeitsstunden`
- x-Achse: `Zeitraum`

Inhalt:
- Mehrere vertikale Balken stellen Personalkapazität/Arbeitsstunden über die Zeit dar.
- Eine dünne orange Linie zeigt den schwankenden Bedarf.
- Dunkle Balkenanteile bedeuten `bedarfsgerecht`.
- Hellgraue Balkenanteile bedeuten `nicht bedarfsgerecht`.
- Orange Balkenbereiche markieren `Überdeckung/Unterdeckung`.
- Im linken Bereich wird `Überdeckung` gezeigt: vorhandene Kapazität liegt über Bedarf.
- Im rechten Bereich wird `Unterdeckung` gezeigt: vorhandene Kapazität liegt unter Bedarf.

#### Rechtes Diagramm: Soll-Situation
Titel: `Soll-Situation`

Untertitel:
- Personaleinsatz an den Personalbedarf angeglichen.

Achsen:
- y-Achse: `Arbeitsstunden`
- x-Achse: `Zeitraum`

Inhalt:
- Die Balken passen sich deutlich stärker an die orange Bedarfslinie an.
- Orange Abweichungsflächen sind reduziert.
- Aussage: Zielzustand ist eine bessere Synchronisation von Personalressourcen mit schwankendem Bedarf.

#### Legende
| Farbe | Bedeutung |
|---|---|
| Dunkelgrau/Schwarz | bedarfsgerecht |
| Hellgrau | nicht bedarfsgerecht |
| Orange | Überdeckung/Unterdeckung |

### Quelle
Atoss Software GmbH.

### Fachliche Aussage
Das Beispiel zeigt, warum ein reiner Ist-Zustand mit starren Personalressourcen problematisch ist: Schwankungen im Bedarf verursachen Über- oder Unterdeckungen. Die Soll-Situation zeigt eine bedarfsgerechtere Planung des Personaleinsatzes.

### React-Vorschlag
Komponente: `SollIstCapacityComparison`. Optional mit zwei Mini-Bar-Charts plus Bedarfslinie.

---

## Folie 30 - Personalplanungsanalyse: Maßnahmen

### In der MD teilweise vorhanden, aber visuell fehlend
Die Folie enthält rechts ein großes Waage-Symbol. Außerdem steht oben rechts im Folienkopf der Text `sgerw`, vermutlich als versehentliches Artefakt.

### Visuelle Rekonstruktion
- Links Fließtext/Bullets zu Maßnahmen bei Unter- oder Überdeckung.
- Rechts großes schwarzes Waage-Icon.
- Das Waage-Symbol visualisiert Abwägung, Balance und Entscheidung zwischen Über- und Unterdeckung.

### Artefakt
` sgerw ` steht sichtbar oben rechts im Inhaltsbereich. Für eine lernorientierte React-Version sollte es als offensichtlicher Folienartefakt **nicht** als fachlicher Inhalt übernommen werden. Nur übernehmen, wenn absolute 1:1-Folienreproduktion gewünscht ist.

### Fachliche Struktur
| Situation | Bedeutung | Folgemaßnahme |
|---|---|---|
| Unterdeckung | Es fehlen Mitarbeiter. | Nach Abstimmung und Konkretisierung des quantitativen/qualitativen Bedarfs: Übergang zur Beschaffungs-/Gewinnungsplanung. |
| Überdeckung | Es sind mehr Mitarbeiter vorhanden als benötigt. | Nach Abstimmung und Konkretisierung: Maßnahmen gegen Überdeckung, also Freistellungsplanung. |

### React-Vorschlag
Komponente: `CoverageMeasuresDecisionCard` mit zwei Spalten: Unterdeckung vs. Überdeckung.

---

## Folie 31 - Personalplanungsanalyse: Soll-Ist-Abgleich - Beispiel II

### In der MD fehlend
Die Folie enthält eine Formelgrafik mit Brutto- und Nettopersonalbedarf sowie Personen-Icons. Die MD enthält nur Titel und Quelle.

### Visuelle Rekonstruktion
Die Grafik besteht aus zwei Formelbereichen in einer hellgrauen Box.

#### Bereich 1: Bruttopersonalbedarf
Formel laut Grafik:

```text
Einsatzbedarf 600 Mitarbeiter
+ Reservebedarf 50 Mitarbeiter
= Brutto-Personalbedarf 650 Mitarbeiter
```

Rechts daneben steht eine kleine Gruppe stilisierter Personen-Icons. Einige Icons sind orange hervorgehoben, wodurch Personalbedarf/Reserve visuell markiert wird.

#### Bereich 2: Nettopersonalbedarf
Formel laut Grafik:

```text
Brutto-Personalbedarf 650 Mitarbeiter
- Verfügbar 620 Mitarbeiter
+ Neueinstellungen 40 Mitarbeiter
- Abgänge 30 Mitarbeiter
= Netto-Personalbedarf 20 Mitarbeiter
```

### Wichtiger Umsetzungshinweis zur Formel
Die visuelle Darstellung nutzt eine lineare Operator-Reihe. Rechnerisch ist der gezeigte Endwert `20` nur konsistent, wenn die verfügbaren zukünftigen Kapazitäten als Klammer verstanden werden:

```text
Nettopersonalbedarf = Brutto-Personalbedarf - (Verfügbar + Neueinstellungen - Abgänge)
Nettopersonalbedarf = 650 - (620 + 40 - 30) = 20
```

Für React sollte deshalb die fachliche Logik klarer als Klammerformel angezeigt werden, damit kein Rechenmissverständnis entsteht.

### Quelle
Atoss Software GmbH.

### Fachliche Aussage
- Der Brutto-Personalbedarf ergibt sich aus Einsatzbedarf plus Reservebedarf.
- Der Netto-Personalbedarf ergibt sich aus dem Brutto-Personalbedarf abzüglich verfügbarer bzw. erwartbarer Kapazität.
- Das Beispiel zeigt einen zusätzlichen Bedarf von 20 Mitarbeitenden.

### React-Vorschlag
Komponente: `PersonnelDemandFormulaCard` mit zwei Formelzeilen, großen orangefarbenen Zahlen und optionalem Personen-Icon-Cluster.

---

# Kompakte Komponentenliste für die React-Umsetzung

| Folie | Komponente | Zweck |
|---:|---|---|
| 1 | `GenerationTimeline` | Generationen und Lebensphasen entlang der Jahrzehnte darstellen. |
| 4 | `EmployerQualityParameterGrid` | 8 Parameter der Arbeitgeberqualität mit Icons zeigen. |
| 5 | `EmployerQualityIndustryChart` | Branchenwerte als horizontales Balkendiagramm abbilden. |
| 6 | `EthicsWordCloud` | Einstieg in Ethikbegriffe als gewichteter Begriffsschwarm. |
| 8 | `PhilosopherCard` | Aristoteles historisch/personenbezogen einordnen. |
| 9 | `ConceptHeroCard` | Glücksbezug bei Aristoteles mit Kleeblatt visualisieren. |
| 15 | `EthicsLevelsDiagram` | Sozialethik/Wirtschaftsethik/Unternehmensethik/Führungsethik als Ebenenmodell. |
| 17 | `LawPracticeEthicsVenn` | Graubereich zwischen Gesetz und Praxis erklären. |
| 18 | `TopicOverviewCard` | Themenfelder der Vorlesung als Übersicht. |
| 19 | `IntegratedRecruitingProcess` | Planung, Marketing und Auswahl als integrierten Prozess zeigen. |
| 21 | `PersonnelRequirementCard` | quantitative, qualitative, zeitliche und räumliche Anforderungen visualisieren. |
| 23 | `PersonnelDemandFlowchart` | Bedarf, Bestand, Vergleich und Maßnahmenfluss rekonstruieren. |
| 24 | `PlanningSteps` | Vier Schritte der Personalplanung sauber darstellen. |
| 26 | `PersonnelMovementTable` | Abgänge/Zugänge als Tabellenformular wiederherstellen. |
| 29 | `SollIstCapacityComparison` | Ist- vs. Soll-Situation mit Bedarfslinie und Abweichungen. |
| 30 | `CoverageMeasuresDecisionCard` | Maßnahmen bei Unter- und Überdeckung gegenüberstellen. |
| 31 | `PersonnelDemandFormulaCard` | Brutto- und Nettopersonalbedarf als Formelgrafik darstellen. |

---

# Inhaltliche Qualitätschecks nach der React-Konvertierung

- [ ] Folie 1 ist keine kaputte Tabelle mehr, sondern eine echte Generationen-Timeline.
- [ ] Folie 4 zeigt alle 8 Parameter mit richtigen Beschreibungen und eindeutigen Icons.
- [ ] Folie 5 enthält alle 22 Branchenwerte vollständig und korrekt.
- [ ] Folie 6 enthält die Word-Cloud-Begriffe oder einen semantisch gleichwertigen Tag-Cluster.
- [ ] Folie 15 zeigt die Ebenen Makro/Meso/Mikro als verschachtelte Struktur.
- [ ] Folie 17 macht den Graubereich zwischen Gesetz, Praxis und Unternehmensethik sichtbar.
- [ ] Folie 19 wird als integrierter/zyklischer Prozess umgesetzt, nicht nur als Wortliste.
- [ ] Folie 23 enthält alle Flowchart-Boxen, Pfeilrichtungen und Maßnahmenpfade.
- [ ] Folie 26 bleibt als Tabellenformular mit Abgänge/Zugänge-Struktur erhalten.
- [ ] Folie 29 zeigt Ist- und Soll-Situation nebeneinander inklusive Legende.
- [ ] Folie 31 zeigt die Formellogik mit Klammerhinweis, damit `20` Mitarbeitende nachvollziehbar bleibt.
- [ ] Quellenhinweise aus den Grafiken werden pro Komponente erhalten.

