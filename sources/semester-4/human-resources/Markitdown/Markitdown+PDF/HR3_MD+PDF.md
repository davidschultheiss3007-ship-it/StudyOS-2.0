# HR3 - Fehlende visuelle Inhalte für die MD-zu-React-Konvertierung

**Zweck:** Diese Datei ergänzt die vorhandene `HR3.md` um Inhalte, die bei der Markdown-Extraktion aus `HR3.pdf` nur unvollständig, fehlerhaft oder gar nicht übertragen wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit Diagramme, Tabellenlogik, Icons, Bildaussagen, visuelle Hierarchien und Folienbeziehungen nicht verloren gehen.

**Quelle:** `HR3.pdf` mit 36 Folien.  
**Hinweis:** Wiederkehrende Layout-Elemente wie HBW-Logo, graue Kopfzeile, Copyright-Footer und allgemeine Folienrahmung sind keine fachlichen Inhalte. Diese können als globales Template umgesetzt werden. Fachlich relevante Bild-, Diagramm- und Tabelleninhalte sind unten je Folie beschrieben.

---

## Globale Umsetzungsregeln für React

1. **Diagramme semantisch nachbauen:** Mehrere Folien enthalten keine reinen Textinhalte, sondern Modelle: Organigramm, Stakeholder-Modell, Umweltmodell, Zeithorizont-Timeline, Säulenmodell, Achsendiagramm, Generationen-Timeline und Attributmatrix.
2. **Keine kaputten Markdown-Tabellen übernehmen:** In `HR3.md` wurden mehrere Folien als zerbrochene Tabellen extrahiert. Diese sollten in React als strukturierte Cards, echte Tabellen oder Diagrammkomponenten umgesetzt werden.
3. **Visuelle Beziehungen erhalten:** Pfeile, Achsen, Kreise, Säulen, Ebenen und farbliche Gruppierungen tragen fachliche Bedeutung. Sie sollten nicht nur als Fließtext dargestellt werden.
4. **Icons als semantische Marker nutzen:** Einzelne Folien verwenden Icons wie Kette, Ausweis, Handschlag, Kopf mit Zahnrädern oder Pfeil-/Zielsymbol. Diese können durch einfache SVGs oder Icon-Komponenten ersetzt werden.
5. **Quellenhinweise erhalten:** Quellen wie `bwl-lexikon.de`, `Rump/Eilers 2014`, `PEW Research Center/Wikipedia/Institute` und Zitate von Gälweiler, Neuberger, Schein und Hinterhuber jeweils bei der passenden Komponente anzeigen.
6. **React-Komponenten datengetrieben anlegen:** Tabellen und Diagramme nicht als statische Bildbeschreibung speichern, sondern als Datenobjekte modellieren. Dadurch kann später Suche, Quiz, Filter oder interaktive Erklärung ergänzt werden.

---

# Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `DutyComparisonTable` | 1 | Pflichten Arbeitgeber vs. Arbeitnehmer sauber zweispaltig darstellen |
| `PersonnelHierarchyChart` | 3 | Personalarten als Baumdiagramm rekonstruieren |
| `MacroEnvironmentModel` | 13 | Makro-/Branchenumwelt mit Unternehmen, Kunden, Konkurrenz darstellen |
| `StakeholderExchangeModel` | 14, 21 | Anspruchsgruppen, Austauschströme und Politikbereiche zeigen |
| `GoalStakeholderMap` | 15 | Finanzielle, soziale und Produktziele den Interessengruppen zuordnen |
| `StrategicManagementModel` | 16 | Normatives, strategisches und operatives Management plus Merkmale erklären |
| `TimeHorizonTimeline` | 18 | Normativ/strategisch/operativ als farbige Zeitachse darstellen |
| `PersonnelPolicyPillars` | 23 | Säulen der Personalpolitik visuell nachbauen |
| `CompetitiveAdvantageChart` | 25 | Imitierbarkeit und strategische Bedeutung als Achsendiagramm zeigen |
| `MagicTriangleModel` | 26 | Dreiecke Nachhaltigkeit: Personalpolitik und Führung |
| `GenerationTimeline` | 34 | Generationen mit Jahrgangsspannen auf Zeitachse |
| `GenerationAttributeMatrix` | 35 | Generationsvergleich als farbige Matrix |

---

# Folienweise Ergänzungen

## Folie 1 - Human Resource Management: Individuelles Arbeitsrecht

### In der MD problematisch/fehlend
Die inhaltlichen Punkte sind vorhanden, aber die Folie lebt von einer **klaren Zweiteilung der Pflichten** aus dem Arbeitsvertrag. In der MD laufen Arbeitgeber- und Arbeitnehmerpflichten zusammen.

### Visuelle Rekonstruktion
Erstelle eine zweispaltige Vergleichstabelle oder zwei nebeneinander stehende Cards.

| Pflichten des Arbeitgebers | Pflichten des Arbeitnehmers |
|---|---|
| Entgeltzahlungspflicht | Arbeitspflicht |
| Fürsorgepflicht | Gehorsamspflicht |
| Zeugnisausstellungspflicht | Haftungspflicht |
| Urlaubsgewährungspflicht | Treuepflicht |

### Fachliche Aussage
Das individuelle Arbeitsrecht regelt die Beziehung zwischen einzelnem Arbeitgeber und einzelnem Arbeitnehmer. Ausgangspunkt ist der Arbeitsvertrag; daraus entstehen beidseitige Haupt- und Nebenpflichten.

### React-Vorschlag
Komponente: `DutyComparisonTable` mit zwei Spalten und optionalem Header `Aus dem Arbeitsvertrag resultierende Pflichten`.

---

## Folie 2 - Personal: Grundlegende Definition

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Der Text sollte aber strukturiert werden, weil der Unterschied zwischen `Köpfe` und `Kapazitäten` prüfungsrelevant ist.

### Layout-Hinweis für React
- Definition als große Definition-Card.
- Synonyme als kleine Tag-Liste: `Belegschaft`, `Beschäftigte`, `Mitarbeiterinnen/Mitarbeiter`.
- Separater Vergleichsblock:

| Begriff | Bedeutung |
|---|---|
| Köpfe | Anzahl der Mitarbeiter ohne Berücksichtigung von Teilzeitfaktoren |
| Kapazitäten | Anzahl der Full-Time-Equivalent-Mitarbeiter, also rechnerische Vollzeitäquivalente |

### Fachliche Aussage
Ob Personen als Personal zählen, kann betriebsindividuell unterschiedlich festgelegt werden. Arbeitsrechtlich können z.B. auch Auszubildende und Praktikanten relevant sein, selbst wenn sie intern nicht als produktives Personal geführt werden.

---

## Folie 3 - Personal: Grafische Darstellung

### In der MD problematisch/fehlend
Die Baumgrafik wurde als kaputte Markdown-Tabelle extrahiert. Die eigentliche Folie ist ein **hierarchisches Organigramm der Personalarten**.

### Visuelle Rekonstruktion
Baue ein Baumdiagramm mit `Personal` als oberstem roten Knoten.

Hierarchie:

```text
Personal
├─ Arbeitnehmer/in
│  ├─ Arbeiter/in / Angestellte/r
│  ├─ Leitende/r Angestellte/r
│  ├─ Auszubildende/r
│  ├─ Praktikant/in
│  └─ Werkstudent/in
├─ Leiharbeiter/in
├─ Freie/r Mitarbeiter/in
└─ Arbeitnehmerähnliche Personen
   ├─ Heimarbeiter/in
   └─ Handelsvertreter/in
```

### Zentrale Bildelemente
- Oberster Knoten `Personal` rot.
- Erste Ebene: gelber Knoten `Arbeitnehmer/in`, rote Knoten `Leiharbeiter/in` und `Freie/r Mitarbeiter/in`, blauer Knoten `Arbeitnehmerähnliche Personen`.
- Unter `Arbeitnehmer/in` hängen fünf orange Knoten.
- Unter `Arbeitnehmerähnliche Personen` hängen zwei blaue Knoten.
- Verbindungslinien zeigen Ober-/Unterordnungen.

### Fachliche Aussage
Nicht alle Personen, die für ein Unternehmen arbeiten, sind arbeitsrechtlich gleich einzuordnen. Die Grafik trennt abhängig Beschäftigte, Leiharbeit, freie Mitarbeit und arbeitnehmerähnliche Personen.

### React-Vorschlag
Komponente: `PersonnelHierarchyChart` mit verschachteltem Datenobjekt `{label, color, children}`. Für Lernen: Klick auf Knoten öffnet Kurzdefinition.

---

## Folie 4 - Arbeitgeber: Definition

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Die Definition als `LegalDefinitionCard` darstellen. Zusätzlich einen Merksatz hervorheben:

> Arbeitgeber ist, wer über Einstellung, Verwendung und Entlassung sowie Art, Ort, Zeit und Weise der Arbeit bestimmt und für dessen Rechnung Lohn gezahlt wird.

### Fachliche Betonung
Der Arbeitgeberbegriff ist im Arbeits-, Steuer- und Sozialversicherungsrecht weitgehend identisch.

---

## Folie 5 - Arbeitnehmer: Definition

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Strukturiere die Folie in drei Cards:

1. **Arbeitsrechtlicher Kern:** privatrechtlicher Vertrag und Dienst für einen anderen.
2. **Zentrales Merkmal:** persönliche Abhängigkeit.
3. **Abgrenzungsproblem:** arbeitsrechtlicher, steuerrechtlicher und sozialversicherungsrechtlicher Arbeitnehmerbegriff können auseinanderfallen.

### Fachliche Betonung
Werkstudenten können Arbeitnehmer sein, auch wenn sie nur in den Ferien arbeiten. Vorstandsmitglieder juristischer Personen sind arbeitsrechtlich keine Arbeitnehmer, steuerrechtlich dagegen möglich.

---

## Folie 6 - Arbeitsverhältnis: Definition

### In der MD problematisch/fehlend
Die Aufzählung wurde teilweise in kaputte Tabellen zerlegt. Fachlich ist eine **Abgrenzungscheckliste** sinnvoll.

### Visuelle Rekonstruktion
Erstelle zwei nebeneinander stehende Bereiche.

#### Maßgebend für ein Arbeitsverhältnis
- Grad der persönlichen Abhängigkeit
- Umfang der Weisungsgebundenheit bezüglich Zeit, Dauer und Ort der Ausführung
- Eingliederung in den Betrieb des Auftraggebers
- Notwendigkeit einer ständigen engen Zusammenarbeit mit anderen Beschäftigten
- Unterordnung unter andere Betriebsmitglieder

#### Keine Arbeitnehmer sind
- Beamte im beamtenrechtlichen Sinne
- Familienangehörige, sofern sie nicht aufgrund eines Arbeitsvertrags, sondern aufgrund familienrechtlicher Verpflichtung arbeiten
- Unfreie Arbeiter, z.B. Strafgefangene
- Personen, die vorwiegend aus karitativen oder religiösen Gründen oder zur Heilung/sittlichen Besserung arbeiten
- Gesetzliche Vertreter juristischer Personen, z.B. Aktiengesellschaft, GmbH, Genossenschaft

### React-Vorschlag
Komponente: `EmploymentStatusChecklist` mit zwei Tabs: `Arbeitsverhältnis liegt nahe` und `Keine Arbeitnehmer`.

---

## Folie 7 - Leitende Angestellte: Definition

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Die Sonderstellung als Spannungsfeld darstellen:

```text
Arbeitnehmerstatus  <->  Arbeitgeberfunktionen
```

Daraus folgt: Nähe zur Unternehmens-/Betriebsleitung, mögliche Interessenkollisionen und besondere rechtliche Behandlung.

### Fachliche Betonung
Betriebsverfassungsrechtlich ist die Abgrenzung wichtig, weil der Betriebsrat für leitende Angestellte im Sinne des § 5 Abs. 3 BetrVG nicht zuständig ist.

---

## Folie 8 - Leitender Angestellter: § 5 Abs. 3 BetrVG I

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik.

### Layout-Hinweis für React
Die drei gesetzlichen Kriterien als nummerierte Legal-Cards darstellen:

1. Berechtigung zur selbständigen Einstellung und Entlassung von Arbeitnehmern.
2. Generalvollmacht oder Prokura, sofern die Prokura im Verhältnis zum Arbeitgeber nicht unbedeutend ist.
3. Regelmäßige Wahrnehmung bedeutsamer Aufgaben für Bestand und Entwicklung des Unternehmens/Betriebs mit besonderer Erfahrung und Kenntnis; Entscheidungen werden im Wesentlichen frei von Weisungen getroffen oder maßgeblich beeinflusst.

### React-Vorschlag
Komponente: `LegalCriteriaCards` mit Toggle `Kurzfassung` / `Originalnah`.

---

## Folie 9 - Leitender Angestellter: § 5 Abs. 3 BetrVG II

### In der MD problematisch/fehlend
Die Folie wurde teilweise als kaputte Tabelle extrahiert. Es handelt sich um eine klare Folgenliste.

### Visuelle Rekonstruktion
Erstelle eine Card `Rechtsfolgen / Sonderstellung`:

- Leitende Angestellte führen im Wesentlichen selbständig und eigenverantwortlich einen wesentlichen Aufgabenbereich.
- Sie gelten nicht als Arbeitnehmer im Sinne des Betriebsverfassungsgesetzes.
- Sie sind weder wahlberechtigt noch zum Betriebsrat wählbar.
- Ihre Pflicht zur Wahrung der Arbeitgeberinteressen geht erheblich weiter als bei anderen Arbeitnehmern.
- Das Maß an Arbeitsleistung geht über das Übliche hinaus.
- Aufgrund des Vertrauensverhältnisses sind niedrigere Anforderungen an Kündigungsgründe zu stellen.

### Fachliche Aussage
Leitende Angestellte sind im Arbeitsrecht zwar Arbeitnehmer, im Betriebsverfassungsrecht aber in wichtigen Punkten gesondert behandelt.

---

## Folie 10 - Human Resources: Personalpolitik und -beschaffung

### In der MD fehlend
Die Titelfolie enthält eine **Bildleiste** mit drei/four visuellen Motiven und einem großen hellblauen Titelblock.

### Visuelle Rekonstruktion
- Oben links großer Titel `Human Resources`, rechts HBW-Logo.
- Darunter horizontale Bildleiste:
  - Hand hält/zeigt HBW-Schild.
  - Porträt einer jungen Frau.
  - Gesprächssituation mit zwei Personen.
  - Außenansicht eines Gebäudes/Campus.
- Unten hellblauer Block mit Titel `Personalpolitik und -beschaffung` und Name `Prof. Dr. Stefan Lackner`.

### Fachliche Relevanz
Die Folie ist primär Deckblatt. Für React kann sie als Kapitel-Intro genutzt werden.

### React-Vorschlag
Komponente: `ChapterHero` mit optionalem Bildmosaik. Kein prüfungsrelevanter Zusatzinhalt.

---

## Folie 11 - Personalmanagement: Veränderungen in den Werten

### Fehlende visuelle Inhalte
Keine Grafik, aber die Folie arbeitet mit einem **Kontrastzitat**.

### Visuelle Rekonstruktion
Zwei gegenübergestellte Zitat-Cards:

| Traditionelle Selbstdarstellung | Kritische Umdeutung |
|---|---|
| „Der Mensch ist Mittelpunkt.“ | „Der Mensch ist Mittel. Punkt.“ |
| typische Aussage in Geschäftsberichten | Prof. Neuberger |

### Fachliche Aussage
Die Folie problematisiert, ob Unternehmen Menschen tatsächlich als Mittelpunkt behandeln oder ob sie Menschen primär als Mittel zur Zielerreichung nutzen.

### React-Vorschlag
Komponente: `QuoteContrastCard` mit kurzer Reflexionsfrage: `Welche Konsequenz hat diese Sichtweise für Personalpolitik?`

---

## Folie 12 - Strategie: Wozu?

### In der MD problematisch/fehlend
Der Text ist vorhanden, aber die visuelle Folie enthält eine **Sprechblasen-/Callout-Grafik** rechts.

### Visuelle Rekonstruktion
Linke Seite: Liste der Strategie-Funktionen:

- Einheitliche Orientierung
- Koordination der Ressourcen und Aktivitäten aller im Unternehmen
- Gemeinsames Verständnis aufbauen
- Sich zwingen, sich mit der Zukunft auseinanderzusetzen
- Verbindliche Ziele setzen
- Überprüfung der Zielerreichung
- Lerneffekte aus Entscheidungen

Rechts: graue Sprechblase mit Merksatz:

> Von Abweichungen vom Plan kann man lernen, vom Zufall nicht!

### Fachliche Aussage
Strategie zwingt zur bewussten Planung und macht Abweichungen lernbar. Ohne Plan gibt es keine systematische Lernbasis.

### React-Vorschlag
Komponente: `StrategyPurposeCard` mit Bullet-Liste und Callout.

---

## Folie 13 - Unternehmen: Umwelt

### In der MD fehlend
Die Folie besteht fast vollständig aus einem **Umweltmodell**. In der MD erscheint nur der Titel.

### Visuelle Rekonstruktion
Baue ein konzentrisches bzw. segmentiertes Modell:

1. **Innerer Kern / Branchenumwelt:** grauer Ovalbereich.
   - Enthält drei Akteure: `Unternehmen`, `Kunden`, `Konkurrenz`.
   - Die drei Akteure sind über Linien miteinander verbunden.
2. **Äußere Makroumwelt:** großer ovaler Ring um die Branchenumwelt.
   - Segmente:
     - Rechtliche und politische Umwelt
     - Ökonomische Umwelt
     - Technologische Umwelt
     - Soziale Umwelt
     - Natürliche Umwelt
3. Rechts neben dem Modell ein Pfeil/Trichter und ein grauer Kasten:
   - `Marktorientierung als Voraussetzung für langfristigen Erfolg`

### Fachliche Aussage
Unternehmen agieren nicht isoliert. Strategische Personal- und Unternehmenspolitik müssen sowohl die direkte Branchenumwelt als auch die Makroumwelt berücksichtigen. Marktorientierung ist dabei Voraussetzung für langfristigen Erfolg.

### React-Vorschlag
Komponente: `MacroEnvironmentModel`. Interaktion: Hover auf Umweltsegment zeigt Beispiele für HR-Auswirkungen, z.B. technologische Umwelt -> Digitalisierung, soziale Umwelt -> Wertewandel.

---

## Folie 14 - Unternehmen: Interessensgruppen

### In der MD fehlend
Die gesamte **Stakeholder-/Austauschstrom-Grafik** fehlt. Die Folie enthält zentrale Beziehungen zwischen Unternehmen und Interessengruppen.

### Visuelle Rekonstruktion
Zentral steht ein stilisiertes Unternehmen mit den Bereichen `B`, `P`, `A`.

#### Oben: Kapitalgeber
- Über dem Unternehmen ein großer Kasten `Kapitalgeber`.
- Darin: `Eigenkapitalgeber` links, `Fremdkapitalgeber` rechts.
- Austauschpfeile nach unten/oben:
  - `Gewinn / Kapital`
  - `Zinsen / Kapital`

#### Links: Bezugsquellen
- Vertikaler Kasten links: `Bezugsquellen` mit `Arbeitskräfte` und `Lieferanten`.
- Austausch mit Unternehmen:
  - `Lohn` <-> `Arbeit`
  - `Bezahlung` <-> `Material`

#### Rechts: Abnehmer
- Vertikaler Kasten rechts: `Abnehmer` mit `Konsumenten` und `Unternehmen`.
- Austausch mit Unternehmen:
  - `Bezahlung` <-> `Produkte`
  - `Bezahlung` <-> `Produkte`

#### Unten: Öffentlichkeit
- Breiter Kasten unten: `Öffentlichkeit`.
- Enthält `Staat` und `Gesellschaft`.
- Austausch mit Unternehmen:
  - `Recht / Steuern`
  - `Kultur / Beiträge`

### Fachliche Aussage
Das Unternehmen steht in Austauschbeziehungen mit verschiedenen Interessengruppen. HR ist dabei besonders mit Arbeitskräften, Gesellschaft, Staat und Unternehmenskultur verbunden, aber nicht isoliert von Kapital-, Markt- und Beschaffungsbeziehungen.

### React-Vorschlag
Komponente: `StakeholderExchangeModel`, ideal als SVG mit gerichteten Pfeilen und beschrifteten Flows.

---

## Folie 15 - Unternehmensstrategie: Interessensgruppen

### In der MD fehlend
Die Folie enthält eine **Ziel-Stakeholder-Zuordnung** mit drei Pfeilbalken und drei Stakeholder-Ovalen.

### Visuelle Rekonstruktion
Drei horizontale, pfeilförmige Balken links; rechts je ein Oval mit Interessengruppe.

| Zielbereich | Beispiele aus der Folie | Zugeordnete Interessengruppe |
|---|---|---|
| Finanzielle Ziele | Kalkulatorischer Gewinn, Jahresüberschuss, Unternehmenswert | Eigenkapitalgeber |
| Soziale Ziele | Ökologie, Mitarbeiterzufriedenheit | Mitarbeiter, Staat, Gesellschaft |
| Produktziele | Produkte in entsprechender Qualität, innerhalb bestimmter Zeit, mit bestimmten Kosten | Kunden |

### Fachliche Aussage
Strategische Unternehmensziele sind mit unterschiedlichen Anspruchsgruppen verbunden. Finanzielle Ziele adressieren Kapitalgeber, soziale Ziele Mitarbeiter/Staat/Gesellschaft, Produktziele Kunden.

### React-Vorschlag
Komponente: `GoalStakeholderMap` mit drei Zeilen: Zielkategorie -> Zielbeispiele -> Stakeholder.

---

## Folie 16 - Strategisches Management: Merkmale

### In der MD fehlend
Die Folie enthält ein komplexes **Management-Ebenen- und Merkmalsmodell**. In der MD ist nur der Satz extrahiert.

### Visuelle Rekonstruktion
Links ein vertikales Steuerungsmodell:

```text
Planung
  Normatives Management
Steuerung
  Strategisches Management
Kontrolle
  Operatives Management
```

- `Strategisches Management` steht als grauer Mittelblock zwischen normativem und operativem Management.
- Pfeile zeigen Wechselwirkungen nach oben und unten.
- Links außen stehen die Steuerungsfunktionen `Planung`, `Steuerung`, `Kontrolle`.

Rechts fünf Merkmalsbalken, die aus dem strategischen Management heraus abgeleitet werden:

1. Relativ langfristig in die Zukunft blickend
2. Möglichkeit zur Kapazitätsveränderung
3. Hohe Komplexität von Sachverhalten
4. Konzentration auf das Wesentliche
5. Besondere Erfolgsbedeutung

Zwischen Punkt 4 und 5 steht ein schwarzer, nach unten zeigender Pfeil/Trichter, der die Verdichtung auf besondere Erfolgsbedeutung visualisiert.

### Fachliche Aussage
Strategisches Management liegt zwischen normativer Orientierung und operativer Umsetzung. Es ist langfristig, komplexitätsorientiert, kapazitätsrelevant und auf wesentliche Erfolgsfaktoren gerichtet.

### React-Vorschlag
Komponente: `StrategicManagementModel`; optional mit klickbaren Merkmalen.

---

## Folie 17 - Übung: Gruppe

### In der MD fehlend
Die Folie enthält ein Foto einer Gruppe von Personen in Kreis-/Team-Perspektive. Dieses Bild ist fachlich nicht inhaltstragend, unterstützt aber die Übungsform.

### Visuelle Rekonstruktion
- Links: Teamfoto, Personen blicken von oben/in die Kamera, symbolisiert Gruppenarbeit.
- Rechts: Aufgabenstellung.
- Oben: `Geht bitte für 20 Minuten in Gruppen...`

### Inhalt für React
Aufgabe als Übungscard:

> Beschreiben Sie, wie sich die Werte der Gesellschaft in den letzten Jahren verändert haben und erläutern Sie, welche Konsequenzen daraus für das Personalmanagement folgen.

Rahmen:

- Kleingruppen zu je 3-4 Personen
- Zeit: 20 Minuten

### React-Vorschlag
Komponente: `ExerciseCard` mit Props `{duration: 20, groupSize: '3-4', task}`. Foto kann durch neutrales Team-Icon ersetzt werden.

---

## Folie 18 - Zeithorizonte: Merkmale

### In der MD problematisch/fehlend
Die Folie wurde als kaputte Tabelle extrahiert. Tatsächlich zeigt sie eine **farbige Zeitachsenlogik** zwischen Unternehmenspolitik, Personalpolitik und Maßnahmen.

### Visuelle Rekonstruktion
Horizontale Zeitachse von links nach rechts mit drei farbigen Punkten und Pfeilen:

1. **Rot links:** Normativer Rahmen
   - `Zeithorizont: > 5 Jahre`
   - Merksatz: `Der Grund, warum Dinge getan werden.`
   - Unterhalb zugeordnet: `Unternehmenspolitik`
2. **Gelb/Orange Mitte:** Strategisches Management
   - `Zeithorizont: 2-5 Jahre`
   - Merksatz: `Die richtigen Dinge tun.`
   - In der Mitte oberhalb steht als verbindender Begriff: `Personalpolitik`
3. **Grün rechts:** Operatives Management
   - `Zeithorizont: bis 1 Jahr, taktische Entscheidungen bis 2 Jahre`
   - Merksatz: `Die Dinge richtig tun.`
   - Unterhalb zugeordnet: `Maßnahmen und Aktivitäten`

### Zentrale Bildelemente
- Roter Kasten oben links mit kleiner Spitze nach unten.
- Gelber Kasten unten mittig mit Spitze nach oben.
- Grüner Kasten oben rechts mit Spitze nach unten.
- Farbig passende Kreis-Marker auf der Zeitachse.
- Das Wort `Personalpolitik` steht groß im Zentrum und verbindet die Ebenen.

### Fachliche Aussage
Personalpolitik ist zwischen normativem Rahmen und operativen Maßnahmen angesiedelt. Sie übersetzt langfristige Unternehmenspolitik in strategische Ausrichtung und handlungsnahe Aktivitäten.

### React-Vorschlag
Komponente: `TimeHorizonTimeline` mit Datenobjekten `{level, horizon, slogan, color, relatedArea}`.

---

## Folie 19 - Unternehmenspolitik: Strategie

### In der MD problematisch/fehlend
Der Text ist vorhanden, aber die **farbliche Zuordnung** der drei Führungsebenen geht verloren.

### Visuelle Rekonstruktion
In der Mitte stehen drei farbcodierte Begriffe links, rechts daneben die Bedeutung:

| Ebene | Farbe im Original | Bedeutung |
|---|---|---|
| Normative Führung | rot | Sinngebende, werterhaltende Dinge tun |
| Strategische Führung | gelb/orange | Die richtigen Dinge tun; Effektivität |
| Operative Führung | grün | Die Dinge richtig tun; Effizienz |

Unten steht ein fett hervorgehobener Merksatz:

> Strategische Entscheidungen kommen erst zum Tragen, wenn sie auch umgesetzt werden. Operatives Handeln, das nicht auf strategischen Entscheidungen beruht, führt zur Verzettelung der Kräfte und letztlich ins Chaos.

### Fachliche Aussage
Normative, strategische und operative Führung lassen sich theoretisch unterscheiden, praktisch aber nicht sauber trennen. Strategisches Denken braucht operative Umsetzung, sonst bleibt es wirkungslos.

### React-Vorschlag
Komponente: `LeadershipLevelsComparison` mit drei farbigen Rows und einem `KeyTakeaway` unten.

---

## Folie 20 - Unternehmenspolitik: Harmonisierung

### In der MD problematisch/fehlend
Die Liste wurde teilweise als kaputte Tabelle extrahiert. Zusätzlich gibt es ein Ketten-/Verbindungssymbol rechts.

### Visuelle Rekonstruktion
- Links: Textblock mit zwei Hauptpunkten.
- Rechts: schwarzes Kettenglied-/Verbindungssymbol als Metapher für Harmonisierung/Verknüpfung.

### Inhaltliche Struktur
Unternehmenspolitik hat die Aufgabe, externe, zweckbestimmende Interessen am Unternehmen mit intern verfolgten Zielen zu harmonisieren.

Diese Harmonisierung soll ermöglichen, dass das Unternehmen:

- seinen Organisationsmitgliedern tragfähige und stabile Wert- und Verhaltensleitlinien vermittelt,
- bestmöglich an mögliche Umweltherausforderungen angepasst ist,
- langfristig seine Autonomie und Wirtschaftskraft erhalten kann.

### React-Vorschlag
Komponente: `HarmonizationCard` mit Icon `Link`/`Chain`.

---

## Folie 21 - Unternehmenspolitik: Teilbereiche

### In der MD fehlend
Die Folie zeigt dasselbe Stakeholder-Grundmodell wie Folie 14, aber ergänzt um **Teilbereiche der Unternehmenspolitik** als graue Ovale.

### Visuelle Rekonstruktion
Nutze das Stakeholder-Modell aus Folie 14 als Hintergrund. Darüber liegen sechs graue Ovale:

| Teilbereich | Position in der Grafik | Beziehung |
|---|---|---|
| Personalpolitik | links bei Arbeitskräfte/Bezugsquellen | Bezug zu Menschen und Arbeitskräften |
| Beschaffungspolitik | unten links bei Lieferanten/Material | Bezug zu Beschaffung und Lieferanten |
| Steuerpolitik | unten bei Staat/Öffentlichkeit | Bezug zu Staat, Steuern, Recht |
| Finanzpolitik | oben zentral bei Kapitalgebern | Bezug zu Eigen- und Fremdkapitalgebern |
| Produktionspolitik | zentral über dem Unternehmensblock | Bezug zu interner Leistungserstellung |
| Absatzpolitik | rechts bei Abnehmern/Kunden | Bezug zu Konsumenten und Absatzmarkt |

### Fachliche Aussage
Unternehmenspolitik ist kein einzelnes Handlungsfeld. Sie gliedert sich in Teilpolitiken, die jeweils an unterschiedlichen Anspruchsgruppen und Austauschprozessen ansetzen. Personalpolitik ist dabei ein Teilbereich neben Finanz-, Absatz-, Produktions-, Beschaffungs- und Steuerpolitik.

### React-Vorschlag
Komponente: `CorporatePolicyAreasOverlay`; verwende das Grundmodell aus `StakeholderExchangeModel` und overlaye klickbare Ovale.

---

## Folie 22 - Personalpolitik: Definition

### Fehlende visuelle Inhalte
Keine eigenständige Grafik. Inhalt sollte aber als Definition plus Zielsystem gegliedert werden.

### Layout-Hinweis für React
Definition oben, darunter Zielkarten:

1. Ansprache und Auswahl bestgeeigneter Mitarbeiter.
2. Erhaltung und Steigerung von Leistungsbereitschaft und Leistungsfähigkeit.
3. Zielgerichtete, am Unternehmensleitbild orientierte Führung.
4. Schaffung einer sozialverantwortlichen Unternehmenskultur.

### Fachliche Aussage
Personalpolitik umfasst Grundsätze und Entscheidungen zu Beziehungen zwischen Vorgesetzten und Mitarbeitern, Mitarbeitern untereinander sowie Mitarbeitern und ihrer Arbeit.

---

## Folie 23 - Personalpolitik: Instrumente

### In der MD fehlend
Die Folie enthält ein **Säulen-/Tempelmodell der Personalpolitik**, das in der MD nicht wiedergegeben ist.

### Visuelle Rekonstruktion
Modell als blaues Gebäude:

1. Oberer Balken: `Personalpolitik - Säulen der Personalpolitik`
2. Dach: `Personalpolitik`
3. Fünf Säulen:
   - Soziales Verantwortungsbewusstsein
   - Wohlergehen der MitarbeiterInnen
   - Faires Führungsverhalten
   - Personalmanagement
   - Chancengleichheit & Gleichberechtigung
4. Fundament unten: `Unternehmensgrundsätze und -werte`

### Quelle
`https://www.bwl-lexikon.de/wiki/personalpolitik/`

### Fachliche Aussage
Personalpolitik steht auf Unternehmensgrundsätzen und -werten. Darauf bauen mehrere Säulen auf, die den normativen und praktischen Rahmen der Personalpolitik bilden.

### React-Vorschlag
Komponente: `PersonnelPolicyPillars` als SVG/HTML-CSS-Modell. Jede Säule kann als klickbare Card mit Erklärung umgesetzt werden.

---

## Folie 24 - Personalpolitik: Ressource Mensch

### In der MD fehlend
Die Folie enthält ein großes **Ausweis-/Mitarbeiter-Icon** und darin/ daneben ein Zitat.

### Visuelle Rekonstruktion
- Großes schwarzes Outline-Icon eines Mitarbeiterausweises mit Clip oben.
- Im Ausweis links ein Personen-Symbol.
- Rechts im Ausweis steht das Zitat:

> „Kreative und innovative Kräfte zählen in jedem Unternehmen und in jeder Volkswirtschaft zu den knappsten Ressourcen.“

- Quellenangabe: `Aloys Gälweiler, 2005`.

### Fachliche Aussage
Der Mensch wird als strategisch knappe Ressource verstanden, insbesondere Kreativität und Innovationskraft.

### React-Vorschlag
Komponente: `QuoteWithIcon`, Icon `IDCard` oder `Badge`.

---

## Folie 25 - Mitarbeiterqualifikation: Nachhaltiger Wettbewerbsvorteil

### In der MD fehlend
Die Folie besteht aus einem **Achsendiagramm**. In `HR3.md` fehlt die komplette grafische Aussage.

### Visuelle Rekonstruktion
Koordinatensystem:

- Y-Achse: `Bedeutung für die Umsetzung einer Strategie`
  - unten: `niedrig`
  - oben: `hoch`
- X-Achse: `Imitierbarkeit`
  - links: `kurzfristig`
  - rechts: `langfristig`

Vier ovale Elemente steigen diagonal von links unten nach rechts oben:

| Element | Position | Bedeutung |
|---|---|---|
| Produkteigenschaften | links unten | relativ kurzfristig imitierbar, geringe strategische Bedeutung |
| Produktionsverfahren | mittig links | höhere Bedeutung, aber noch eher imitierbar |
| Marketingkonzeption | mittig rechts | strategisch bedeutsamer und schwerer imitierbar |
| Mitarbeiterqualifikation | rechts oben, grau hervorgehoben | höchste strategische Bedeutung und langfristigste Imitierbarkeit |

### Fachliche Aussage
Mitarbeiterqualifikation ist ein nachhaltiger Wettbewerbsvorteil, weil sie im Vergleich zu Produkteigenschaften, Produktionsverfahren oder Marketingkonzepten schwerer und langfristiger imitierbar ist und eine hohe Bedeutung für Strategieumsetzung hat.

### React-Vorschlag
Komponente: `CompetitiveAdvantageChart`. Datenpunkte als `{label, x, y, highlight}` modellieren. `Mitarbeiterqualifikation` visuell hervorheben.

---

## Folie 26 - Personalpolitik: Magisches Dreieck

### In der MD problematisch/fehlend
Die MD enthält nur einige Stichworte. Die Folie zeigt zwei **magische Dreiecke der Nachhaltigkeit**.

### Visuelle Rekonstruktion
Oben roter Titelbalken:

`Die magischen Dreiecke der Nachhaltigkeit`

#### Linkes Dreieck: Personalpolitik
Zentrales rotes Dreieck mit Beschriftung `Personalpolitik`.

Dreieckspunkte/Umfeld:

- Oben links/außen: `Work-Life-Balance: Vereinbarkeit Beruf, Freizeit und Familie`
- Oben rechts: `Identifikation / Motivation`
- Unten links: `Qualifikationen / Kompetenzen`
- Unten rechts: `Gesundheit / Wohlbefinden`

Unterhalb des linken Dreiecks stehen zwei Themenblöcke:

**Beschäftigungsfähigkeit:**
- Steigende Bedeutung von Wissen und Kompetenz
- Zunehmender Bedarf an Fachkräften

**Demografie-Orientierung:**
- Verschiebung der Altersstruktur
- Verlängerung der Arbeitszeit

#### Rechtes Dreieck: Führung
Zentrales rotes Dreieck mit Beschriftung `Führung`.

Dreieckspunkte:

- Oben: `Glaubwürdigkeit`
- Unten links: `Verlässlichkeit`
- Unten rechts: `Beweglichkeit`

### Quelle
Rump J., Eilers S. Hrsg.: `Lebensphasenorientierte Personalpolitik`, Springer Gabler 2014.

### Fachliche Aussage
Nachhaltige Personalpolitik entsteht aus Balance zwischen Work-Life-Balance, Beschäftigungsfähigkeit, Demografieorientierung, Motivation, Gesundheit und Kompetenzen. Führung ergänzt dies durch Glaubwürdigkeit, Verlässlichkeit und Beweglichkeit.

### React-Vorschlag
Komponente: `MagicTriangleModel` mit zwei Dreieck-Komponenten und begleitenden Themenkarten.

---

## Folie 27 - Personalpolitik: Psychologischer Vertrag

### In der MD fehlend
Die Folie enthält rechts ein großes **Handshake-Icon** als Symbol für gegenseitigen, ungeschriebenen Vertrag.

### Visuelle Rekonstruktion
- Links Text in drei Absätzen.
- Rechts schwarzes Handschlag-Symbol.

### Inhaltliche Struktur
- Neben dem formalen Vertrag zwischen Unternehmen und Beschäftigten entsteht bei gut qualifizierten Kräften ein ungeschriebener psychologischer Vertrag nach Schein 1970.
- Dieser bezieht sich auf Geben und Nehmen beider Seiten.
- Daraus entsteht eine Partnerschaft auf Augenhöhe über den gesamten Erwerbslebenszyklus.
- Persönliche Ziel- und Wertvorstellungen haben hohen Stellenwert.

### Fachliche Aussage
Beschäftigung ist nicht nur rechtlicher Austausch von Arbeit gegen Entgelt. Gerade qualifizierte Mitarbeiter erwarten eine implizite Balance von Leistung, Anerkennung, Entwicklung und Wertpassung.

### React-Vorschlag
Komponente: `PsychologicalContractCard` mit Icon `Handshake` und optionaler Balance-Darstellung `Unternehmen gibt/nimmt` vs. `Beschäftigte geben/nehmen`.

---

## Folie 28 - Personalpolitik: Grundsätze

### In der MD problematisch/fehlend
Das Zitat wurde als zerbrochene Tabelle extrahiert. Außerdem gibt es rechts ein abstraktes schwarzes Icon.

### Visuelle Rekonstruktion
Große Zitat-Card:

> „Die eigentliche Wirksamkeit geschäftspolitischer Grundsätze besteht nicht in ihrer Formulierung und Festlegung sondern in ihrer permanenten Beachtung.“

Quelle: `Aloys Gälweiler, 2005`.

Rechts daneben: schwarzes Icon mit rechteckigem Startpunkt, winkligem Pfeil nach unten und Punkt am Ende. Es wirkt wie ein Symbol für Umsetzung/Anwendung statt bloßer Formulierung.

### Fachliche Aussage
Grundsätze sind nur wirksam, wenn sie dauerhaft im Handeln beachtet werden. Formulierung allein reicht nicht.

### React-Vorschlag
Komponente: `PrincipleQuoteCard`; Icon kann durch `Route`, `ArrowDownToDot` oder `ImplementationPath` ersetzt werden.

---

## Folie 29 - Führungskräfte: Zukunft „Leadership Company“

### In der MD problematisch/fehlend
Das Zitat wurde teilweise als kaputte Tabelle extrahiert. Visuell wichtig ist das Icon eines Kopfes mit Zahnrädern.

### Visuelle Rekonstruktion
- Links: Zitat von Hans H. Hinterhuber.
- Rechts: schwarzes Kopf-Silhouetten-Icon mit zwei Zahnrädern im Inneren.

Zitat:

> Je höher der Grad selbständigen Denkens und Handelns der Führungskräfte ist, und je besser sie ihre Handlungsfreiheit im Interesse der Unternehmung nutzen, desto größer ist die Elastizität der Unternehmung. Die Unternehmung der Zukunft ist deshalb die „Leadership Company“.

Quelle: `Hans H. Hinterhuber`.

### Fachliche Aussage
Zukunftsfähige Unternehmen brauchen Führungskräfte, die selbständig denken, eigenverantwortlich handeln und Handlungsspielräume im Unternehmensinteresse nutzen.

### React-Vorschlag
Komponente: `LeadershipCompanyQuote` mit Icon `BrainCog` oder `HeadCog`.

---

## Folie 30 - Prinzipien: Mitarbeiterfreundliche Personalpolitik

### Fehlende visuelle Inhalte
Keine eigenständige Grafik, aber die Inhalte sollten in vier klar getrennte Bereiche gegliedert werden.

### Layout-Hinweis für React
Vier Kategorien als Accordion oder Grid:

1. **Führungskommunikation**
   - Formulierung von Führungsleitlinien
   - Grundsatz der offenen Vorgesetzten-Tür
2. **Mitarbeiterentwicklung**
   - Richtlinien zur Förderung von Mitarbeitern
   - Prinzipien zur Laufbahnplanung und Nachwuchsentwicklung
   - Prinzip der internen Aufstiegsbesetzung
3. **Mitarbeiterbeteiligung**
   - Prinzip der vertrauensvollen Zusammenarbeit mit dem Betriebsrat
   - Grundsätze der Mitarbeiterbeurteilung
   - Prinzip der repräsentativen Meinungsermittlung
4. **Mitarbeiterauswahl**
   - Besondere Berücksichtigung von behinderten Bewerbern
   - Förderung von Frauen in höhergradigen Positionen
   - Diversity

### Fachliche Aussage
Mitarbeiterfreundliche Personalpolitik ist nicht ein einzelnes Instrument, sondern ein Set an Prinzipien zu Kommunikation, Entwicklung, Beteiligung und Auswahl.

---

## Folie 31 - Personalpolitik: Aktuelle Herausforderungen

### In der MD problematisch/fehlend
Die Folie wurde teilweise als Tabelle zerlegt. Inhaltlich sind drei Themencluster angelegt.

### Visuelle Rekonstruktion
Drei Spalten oder drei Cards:

| Cluster | Inhalte |
|---|---|
| Familienorientierung | Arbeitszeitflexibilität; neue Karrieremodelle; Familienunterstützung durch Serviceleistungen; Weiterbildungsmaßnahmen |
| Demografie | Angepasste Weiterbildungsmaßnahmen; neue Modelle der Arbeitsorganisation; Arbeitszeitmodelle und fließender Übergang in den Ruhestand |
| Social Responsibility | Maßnahmen zu Corporate Social Responsibility; Schaffung eines kooperativen Betriebsklimas |

### Fachliche Aussage
Aktuelle Personalpolitik muss Vereinbarkeit, alternde Belegschaften und soziale Verantwortung gleichzeitig adressieren.

### React-Vorschlag
Komponente: `CurrentHRChallengesGrid`.

---

## Folie 32 - Personalpolitik: Maßnahmen

### Fehlende visuelle Inhalte
Keine eigenständige Grafik. Die Folie eignet sich als Strukturmodell zu Unternehmenskultur und Corporate Identity.

### Layout-Hinweis für React
Zwei Ebenen darstellen:

1. **Sozialverantwortliche Unternehmenskultur**
   - Werte und Normen, die von Unternehmensmitgliedern verinnerlicht und vertreten werden.
   - Orientierung für individuelles Verhalten.
2. **Corporate Identity als Innen- und Außendarstellung**
   - Corporate Communications
   - Corporate Design
   - Corporate Behavior

### Fachliche Aussage
Personalpolitik wirkt über Unternehmenskultur und Identität. Werte werden nicht nur formuliert, sondern über Kommunikation, Design und Verhalten nach innen und außen sichtbar.

### React-Vorschlag
Komponente: `CorporateCultureIdentityModel`.

---

## Folie 33 - Generationen: Werte und Einstellungen

### In der MD fehlend
Die Folie enthält eine große **Illustration verschiedener Generationen**. Die MD enthält nur den Titel.

### Visuelle Rekonstruktion
Zentrierte Illustration mit sechs stilisierten Personen von alt nach jung, jeweils mit Schild:

| Figur | Schild/Generation | Alter im Bild |
|---|---|---|
| ältere Frau | Builders | aged 71+ |
| älterer Mann | Baby Boomers | aged 52-70 |
| Mann mit Brille | Generation X | aged 37-51 |
| junge erwachsene Frau | Generation Y | aged 22-36 |
| Mädchen/junge Frau | Generation Z | aged 7-21 |
| Kind | Generation Alpha | aged under 7 |

### Fachliche Aussage
Die Folie führt Generationen als Zielgruppen-/Wertecluster ein. Sie visualisiert, dass Generationen nicht nur nach Jahrgängen, sondern auch nach Lebensphase und Wertprägung differenziert werden.

### React-Vorschlag
Komponente: `GenerationOverviewCards`; statt Bild können sechs Avatar-Cards mit Altersbereich und Generation verwendet werden.

---

## Folie 34 - Generationen: Zeitliche Einordnung

### In der MD fehlend
Die Folie enthält eine **Jahrgangs-Timeline** der Generationen. In der MD fehlt die komplette Grafik.

### Visuelle Rekonstruktion
Titel innerhalb der Grafik:

`Übersicht der verschiedenen Generationen (Stand: 2020) (Zielgruppensegmentierung)`

Horizontale Zeitachse von etwa `1920` bis `2030`, vertikale Jahreslinien. Links stehen Generationen, rechts in der Timeline farbige Jahrgangsbalken.

| Generation | Zusatzlabel | Jahrgänge | Farbe/Position im Original |
|---|---|---:|---|
| Generation Silent | Weltkriegs-Generation | 1928-1945 | rot/links unten |
| Generation Boomer | Baby Boomer | 1946-1964 | grün |
| Generation X | Slacker | 1965-1980 | blau |
| Generation Y | Me / Millennials | 1981-1996 | orange |
| Generation Z | Zoomer - Digital Natives | 1997-2010 | grau |
| Generation Alpha | Gen Alpha | 2011-2025 | violett/rechts oben |

### Quelle
`PEW Research Center, Washington DC, USA / Wikipedia / verschiedene Institute und Fachhochschulen`.

### Fachliche Aussage
Die Grafik ordnet Generationen anhand von Geburtsjahrgängen ein. Sie bildet die Grundlage für spätere Aussagen zu Werten, Arbeitshaltung, Technologiebezug und Kommunikation.

### React-Vorschlag
Komponente: `GenerationTimeline` als horizontales Balkendiagramm. Datenstruktur: `{generation, subtitle, startYear, endYear, color}`.

---

## Folie 35 - Werte und Arbeitshaltung: Generation - Attribute

### In der MD fehlend
Die Folie ist eine große **farbige Attributmatrix**. Die MD enthält nur den Titel. Für React muss die Tabelle vollständig rekonstruiert werden.

### Visuelle Rekonstruktion
Farbige Tabelle mit erster Spalte `Charakterisierung` und sechs Generationenspalten:

- Traditionals, Alter ca. 60+
- Babyboomer, Alter ca. 60-53
- Generation X, Alter ca. 52-36
- Generation Y, Alter ca. 35-24
- Generation Z, Alter ca. 23-8
- Generation Alpha, Alter ca. 8 und jünger

### Daten für React

| Charakterisierung | Traditionals | Babyboomer | Generation X | Generation Y | Generation Z | Generation Alpha |
|---|---|---|---|---|---|---|
| Erfahrungen | 2. Weltkrieg, Wiederaufbau | Kalter Krieg, Wirtschaftswunder, 68er, Frauenbewegung | „Generation Golf“, Wiedervereinigung, Einführung der Computer | „Millennials“, 11. September, digitale Revolution | Globalisierung, smarte Technologien, neue Geschlechterrollen | weitreichende Digitalisierung, politische Unstabilitäten |
| Arbeitshaltung | Arbeit hat einen hohen Stellenwert | Arbeit hat einen hohen Stellenwert (Workaholics), Strukturierung, Teamwork | Karriere und eine ausgewogene Work-Life-Balance, ergebnisorientiert | Spaß an der Arbeit ist wichtiger als die Karriere, Arbeit und Privates vermischen sich | Arbeit und Privates sind streng getrennt | / |
| Werte | Respekt vor Regeln und Autoritäten, Gehorsam, Konformität | Durchsetzungsvermögen, Teamgeist, Idealismus, Protest | Unabhängigkeit, Individualismus, Freiheitsliebe, Sinnsuche, Pragmatismus | Unabhängigkeit, Freiheit, Leben im Hier und Jetzt | Authentizität, Ehrlichkeit, Offenheit, Komplexität | / |
| Motivation | Finanzierung des Lebensunterhalts | Persönliches Wachstum, Wertschätzung, Gefühl, gebraucht zu werden | Freiheit in der Arbeitsgestaltung, Entwicklungsmöglichkeiten | Selbstverwirklichung, Vernetztsein, gutes Arbeitsklima | Selbstverwirklichung, Spaß am Beruf, gutes Arbeitsklima | / |
| Technologien | wenig bis kein Bezug zu neuen Technologien | Neue Technologien werden eher im Arbeitsumfeld genutzt | Wandel von analogen zu digitalen Technologien, technikaffin und versiert | Digital Natives, „24 Stunden online“ | „Mobile-First-Generation“, Cloud-Nutzung, Streaming, On-Demand | / |
| Kommunikation | Face-to-Face | Face-to-Face, Telefon | SMS, E-Mail, Messenger | Social Media, Messenger, Web 2.0 | Videochat, Messenger | / |
| bevorzugte Medien | Klassische Medien | E-Mail, Zeitungen, Radio, TV, Facebook | E-Mail, TV, Facebook, Online-Nachrichten | Twitter, Instagram, TV, Facebook | Snapchat, Spotify, Youtube | / |

### Fachliche Aussage
Die Matrix zeigt generationsspezifische Unterschiede in historischen Erfahrungen, Arbeitshaltung, Werten, Motivation, Technologiebezug, Kommunikation und Mediennutzung. Sie ist zentral für generationengerechte Führung und Personalpolitik.

### React-Vorschlag
Komponente: `GenerationAttributeMatrix`.

Umsetzungshinweise:
- Sticky erste Spalte auf Desktop/Tablet.
- Auf Mobile als Generationen-Tabs darstellen.
- Jede Zeile kann als Vergleichsmodus genutzt werden, z.B. `Werte` across generations.
- Fehlende Angaben bei Generation Alpha als `/` oder `noch nicht ausreichend stabil beschrieben` darstellen.

---

## Folie 36 - Baby Boomer: Merkmale

### Fehlende visuelle Inhalte
Keine eigenständige Grafik. Der Text sollte aber nicht als unstrukturierter Fließtext übernommen werden.

### Layout-Hinweis für React
Erstelle eine Generationenprofil-Card `Baby Boomer` mit Bullet-Liste:

- Die Baby-Boomer gelten als vielleicht kreativste, kooperativste und friedlichste Generation in den vergangenen 200 Jahren.
- Sie haben nicht den Diesel-Motor erfunden, aber die Disco.
- Sie haben nicht die Wasserstoffbombe erfunden, aber das World Wide Web.
- Sie haben nicht den Sturzkampfbomber erfunden, aber das Smartphone.
- Sie haben nicht den Panzer erfunden, aber die Pride-Flagge.
- Laut einer Studie des Wuppertaler Instituts für Klima, Umwelt und Energie stimmen 69 Prozent der über 60-Jährigen der Aussage zu: „Ich achte im Alltag sehr darauf, Ressourcen zu schonen“.

### Fachliche Aussage
Die Folie zeichnet ein bewusst positives und teilweise zugespitztes Bild der Baby-Boomer. Für React sollte klar bleiben, dass es sich nicht um eine neutrale soziologische Definition allein handelt, sondern um eine charakterisierende Darstellung mit pointierten Vergleichen.

### React-Vorschlag
Komponente: `GenerationProfileCard` mit Abschnitt `Merkmale`, `Pointierte Aussagen`, `Nachhaltigkeitsbezug`.

---

# Ergänzende Struktur für die finale React-Konvertierung

## Empfohlene Kapitelstruktur

1. Individuelles Arbeitsrecht und Personalbegriffe
   - Arbeitsrecht, Arbeitgeber, Arbeitnehmer, Arbeitsverhältnis, leitende Angestellte
2. Strategie und Unternehmenspolitik
   - Strategiebegriff, Umwelt, Interessensgruppen, Zielgruppen, Managementebenen
3. Personalpolitik als Teil der Unternehmenspolitik
   - Definition, Instrumente, Ressource Mensch, Wettbewerbsvorteil
4. Nachhaltige und mitarbeiterfreundliche Personalpolitik
   - Magisches Dreieck, psychologischer Vertrag, Grundsätze, Leadership Company, aktuelle Herausforderungen
5. Generationen, Werte und Arbeitshaltung
   - Generationenübersicht, Timeline, Attributmatrix, Baby Boomer

## Prüfungsrelevante Visuals mit hoher Priorität

| Priorität | Folie | Visual | Warum wichtig |
|---:|---:|---|---|
| Hoch | 3 | Personalarten-Baum | Arbeitsrechtliche und organisatorische Einordnung |
| Hoch | 13 | Umweltmodell | Strategische Einbettung des Unternehmens |
| Hoch | 14 | Interessengruppen/Austauschströme | Stakeholderlogik und Unternehmensbeziehungen |
| Hoch | 16 | Strategisches Management | Managementebenen und Merkmale |
| Hoch | 18 | Zeithorizonte | Normativ/strategisch/operativ verstehen |
| Hoch | 23 | Säulen der Personalpolitik | Instrumente und Wertebasis der Personalpolitik |
| Hoch | 25 | Wettbewerbsvorteil durch Qualifikation | Argumentationslogik nachhaltiger Vorteil |
| Hoch | 26 | Magische Dreiecke | Nachhaltige Personalpolitik und Führung |
| Hoch | 35 | Generationenmatrix | Werte, Arbeitshaltung und Führungsimplikationen |
| Mittel | 34 | Generationen-Timeline | Jahrgangsabgrenzung und Zielgruppensegmentierung |

## Hinweise zu Datenobjekten

### Beispiel `generationTimeline`

```js
const generationTimeline = [
  { generation: 'Generation Silent', subtitle: 'Weltkriegs-Generation', startYear: 1928, endYear: 1945, color: 'red' },
  { generation: 'Generation Boomer', subtitle: 'Baby Boomer', startYear: 1946, endYear: 1964, color: 'green' },
  { generation: 'Generation X', subtitle: 'Slacker', startYear: 1965, endYear: 1980, color: 'blue' },
  { generation: 'Generation Y', subtitle: 'Me / Millennials', startYear: 1981, endYear: 1996, color: 'orange' },
  { generation: 'Generation Z', subtitle: 'Zoomer - Digital Natives', startYear: 1997, endYear: 2010, color: 'gray' },
  { generation: 'Generation Alpha', subtitle: 'Gen Alpha', startYear: 2011, endYear: 2025, color: 'purple' }
];
```

### Beispiel `competitiveAdvantagePoints`

```js
const competitiveAdvantagePoints = [
  { label: 'Produkteigenschaften', x: 0.18, y: 0.18, highlight: false },
  { label: 'Produktionsverfahren', x: 0.38, y: 0.36, highlight: false },
  { label: 'Marketingkonzeption', x: 0.58, y: 0.55, highlight: false },
  { label: 'Mitarbeiterqualifikation', x: 0.74, y: 0.75, highlight: true }
];
```

### Beispiel `managementLevels`

```js
const managementLevels = [
  {
    level: 'Normativer Rahmen',
    horizon: '> 5 Jahre',
    slogan: 'Der Grund, warum Dinge getan werden.',
    color: 'red',
    relatedArea: 'Unternehmenspolitik'
  },
  {
    level: 'Strategisches Management',
    horizon: '2-5 Jahre',
    slogan: 'Die richtigen Dinge tun.',
    color: 'orange',
    relatedArea: 'Personalpolitik'
  },
  {
    level: 'Operatives Management',
    horizon: 'bis 1 Jahr; taktische Entscheidungen bis 2 Jahre',
    slogan: 'Die Dinge richtig tun.',
    color: 'green',
    relatedArea: 'Maßnahmen und Aktivitäten'
  }
];
```

---

# Qualitätssicherung vor React-Umsetzung

- [ ] Folie 3 als Baumdiagramm statt Tabelle umgesetzt.
- [ ] Folien 13, 14, 15, 16, 18, 21, 23, 25, 26, 34 und 35 nicht als reine Screenshots, sondern als semantische Komponenten modelliert.
- [ ] Folie 35 vollständig als Datenmatrix erfasst.
- [ ] Quellenhinweise bei Folien 23, 26 und 34 sichtbar integriert.
- [ ] Zitate auf Folien 11, 12, 24, 28 und 29 als Quote-Komponenten hervorgehoben.
- [ ] Kaputte Tabellen aus `HR3.md` nicht übernommen, sondern neu strukturiert.
- [ ] Mobile-Ansicht für breite Tabellen/Diagramme berücksichtigt, besonders Folie 35.
