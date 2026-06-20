# HR10_md+PDF - Arbeitsorganisation und Personalbeurteilung: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-10-arbeitsorganisation-und-personalbeurteilung.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-10-arbeitsorganisation-und-personalbeurteilung.pdf` verloren gegangen, nur als kaputte Tabellen übertragen oder gar nicht erfasst wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Zeitleisten, Schaubilder, Tabellenlogiken, Kennzahlen, Prozessflüsse oder Bildaussagen verloren gehen.

**Quelle:** `skript-10-arbeitsorganisation-und-personalbeurteilung.pdf` mit 35 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, Kopfzeile, Folien-Footer und Copyright-Zeile (z.B. „© 2026 – Hochschule der Bayerischen Wirtschaft") sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und inhaltstragenden Icons.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** Mehrere Folien (1-6 Übersichtsschaubild, 12 Gleitzeit-Leiste, 18 Desk-Sharing, 26-31 360°-Feedback) sind in der MD als zerbrochene Tabellen oder verstreute Fragmente extrahiert. Diese Inhalte in React als strukturierte Cards, echte Tabellen, Diagramme oder Zeitleisten neu aufbauen.
2. **Wiederkehrendes Übersichtsschaubild als eine Komponente:** Das 5-Kasten-Schaubild „Klassische Formen der Arbeitsorganisation" wiederholt sich auf Folien 1-6 unverändert; nur der aktive Begriff samt Definitions-Callout wechselt. Als eine wiederverwendbare Komponente mit Parameter umsetzen, nicht sechsmal neu.
3. **Diagramme semantisch nachbauen:** Tiefe-Breite-Portfolio (Folie 7), Gleitzeit-Zeitleiste (Folie 12), Rundum-Perspektive (Folie 27), Prozesskette (Folie 28), Dimensionsraster (Folie 29) und das gruppierte Säulendiagramm Selbst-/Fremdbild (Folie 30) tragen fachliche Bedeutung und sollten nicht als Fließtext dargestellt werden.
4. **Beispiel-Kennzahlen und -Werte exakt von der Folie übernehmen:** Die Zahlenwerte auf Folie 26 (72%, 3×, 85%) und Folie 30 (Kompetenzwerte 3.1-4.5) sind als Datenbeschriftung auf der Folie aufgedruckt; exakt übernehmen, nicht schätzen, und als Beispieldaten kennzeichnen.
5. **Fragebogen als Lernobjekte behandeln:** Die Fragebogen-Beispiele (Folien 33-35) sind als Bilder eingebettet und in der MD nur als Titel vorhanden. In React als `QuestionnaireExampleCard` mit 5-Punkte-Likert-Skala („trifft nie zu" – „trifft immer zu") umsetzen.
6. **Reine Textfolien einfach halten:** Folien 8-11, 13-17, 20-22 sind inhaltlich vollständig in der MD; hier gehen keine Grafiken verloren, nur Gliederung/Hierarchie sollte als Cards/Listen sauber strukturiert werden.
7. **Dekorative Bilder als optionalen Slot:** Fotos auf Folien 18, 19, 23 und Icons auf Folien 24, 25 sind illustrativ ohne eigenen Dateninhalt und können als optionaler Dekorations-Slot umgesetzt werden.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ArbeitsorganisationOverviewChart` | 1 | Übersicht der 5 klassischen Formen mit Pfeil-Konnektoren |
| `KonzeptCallout` | 2-6 | Übersichtsgrid mit aktiver Karte und Definitions-Callout |
| `AufgabenPortfolioChart` | 7 | Tiefe-Breite-Quadrant mit positionierten Blasen |
| `DefinitionList` / `FlexTypTabelle` | 8 | Definitionen Arbeits-/Betriebszeit + Flexibilisierungstypen |
| `RechtsgrundlagenListe` | 9 | ArbZRG-Kernregel als Callout plus Festlegungsebenen |
| `TeilzeitOptionen` | 10 | Teilzeitformen mit Sonderformen als Unterkarten |
| `VergleichZweiSpalten` | 11 | Gegenüberstellung starr vs. variabel |
| `GleitzeitTimeline` | 12 | Zeitstrahl 7-19 Uhr mit Kern-/Gleitzeit-Segmenten |
| `ZweiVariantenListe` / `InfoCallout` | 13 | Gleitzeitvarianten + Arbeitszeitkonto-Mechanismus |
| `ThemaZweiBloecke` | 14 | Jahresarbeitszeit / Schichtarbeit |
| `MerkmalsListe` / `GesetzBadge` | 15 | Arbeit auf Abruf mit Rechtsgrundlage TzBfG § 12 |
| `AufzaehlungsKarten` | 16 | Überstunden-Aussagekarten |
| `DefinitionMitVoraussetzungen` | 17 | Kurzarbeit-Definition + Voraussetzungen |
| `TextMitBild` | 18 | Desk-Sharing-Text mit Büro-Foto |
| `DefinitionCard` / `IllustrationSlot` | 19, 24 | Telearbeit-Definition / Personalbeurteilung mit Icon |
| `AdvantageGroupList` | 20-21 | Vorteile mobiles Arbeiten als Kategorie-Karten |
| `DrawbackList` | 22 | Nachteile mobiles Arbeiten mit Warnakzent |
| `ChapterDivider` | 23 | Kapitel-Trennfolie Personalbeurteilung |
| `AppraisalTypeList` | 25 | Fünf Beurteilungsformen |
| `StatCardRow` / `StatCard` | 26 | Drei 360°-Kennzahlen-Karten |
| `FeedbackPerspectiveDiagram` | 27 | Rundum-Perspektive um Feedback-Empfänger |
| `ProcessStepFlow` / `FootnoteBar` | 28 | 5-Schritt-Prozesskette 360°-Feedback |
| `DimensionGrid` / `DimensionCard` | 29 | Sechs Feedback-Dimensionen im 3×2-Raster |
| `SelfVsExternalChart` / `PatternLegend` | 30 | Selbst-/Fremdbild-Diagramm + Mustererklärung |
| `SuccessVsPitfallTable` | 31 | Erfolgsfaktoren ↔ Fehler paarweise |
| `NumberedStepList` | 32 | Implementierungs-Roadmap 01-04 |
| `QuestionnaireExampleCard` / `LikertScale` | 33-35 | Fragebogen-Beispiele mit 5-Punkte-Skala |

---

# Folienweise Ergänzungen

## Folie 1 - Arbeitsorganisation / Klassische Formen

### In der MD vorhanden
Markitdown hat nur Fragmente in zerbrochenen Tabellenzeilen erfasst: "Job", "Job", "Qualitäts-", "Job Rotation Arbeits-", "Enlargement Enrichment zirkel", "Teilautonome", "gruppen". Die Diagrammstruktur (Überschriftsbox + 5 Kästen mit Pfeilen) geht verloren. (Titel der Folie: "Arbeitsorganisation – Klassische Formen". Footer: © 2026.)

### Fehlende visuelle Inhalte
Übersichtsschaubild der klassischen Formen der Arbeitsorganisation. Ganz oben eine breite, hellgraue, abgerundete Box mit der Überschrift "Klassische Formen der Arbeitsorganisation". Darunter fünf schwarze, nach unten zeigende Pfeile, die jeweils auf einen von fünf gleich großen, mittelgrauen Kästen mit weißer Schrift zeigen. Die fünf Kästen von links nach rechts: "Job Rotation", "Job Enlargement", "Job Enrichment", "Teilautonome Arbeits-gruppen", "Qualitäts-zirkel". Dies ist die Master-Übersicht, die auf den Folgefolien 2-6 unverändert wiederholt wird; jeweils wird per schwarzem Linienzug von einem der Kästen eine Definitions-Sprechblase aufgezogen.

### Visuelle Rekonstruktion
```
        ┌───────────────────────────────────────────────┐
        │     Klassische Formen der Arbeitsorganisation  │
        └───────────────────────────────────────────────┘
            │        │        │         │          │
            ▼        ▼        ▼         ▼          ▼
        [Job     ][Job      ][Job      ][Teilauto- ][Qualitäts-]
        [Rotation][Enlarge- ][Enrich-  ][nome      ][zirkel    ]
        [        ][ment     ][ment     ][Arbeits-  ][          ]
        [        ][         ][         ][gruppen   ][          ]
```

### Inhaltliche Rekonstruktion
Fünf klassische Formen der Arbeitsorganisation:
1. Job Rotation
2. Job Enlargement
3. Job Enrichment
4. Teilautonome Arbeitsgruppen
5. Qualitätszirkel

### Fachliche Aussage
Die Folie führt die fünf klassischen Gestaltungsformen der Arbeitsorganisation als gleichrangige Optionen ein und dient als Gliederungs-/Übersichtsfolie für die folgenden Detailfolien.

### React-Vorschlag
`ArbeitsorganisationOverviewChart` - eine Überschriftsbox oben, darunter ein Flex-Grid aus 5 gleich breiten Karten mit verbindenden Pfeil-Konnektoren; auf Mobile als gestapelte Liste umbrechen.

---

## Folie 2 - Arbeitsorganisation / Klassische Formen (Job Rotation)

### In der MD vorhanden
Der erläuternde Fließtext ist vollständig vorhanden (Zeilen 21-24): "Unter Job Rotation (Arbeitsplatzwechsel) versteht man den regelmäßigen, systematischen und planmäßigen Wechsel von Arbeitsplätzen und Arbeitsaufgaben der Beschäftigten untereinander. Dabei steht die Verringerung der Monotonie, der einseitigen Belastung sowie die Weiterentwicklung und Qualifikation im Vordergrund." Die zugehörige Diagrammstruktur (5-Kasten-Übersicht) ist in der MD nur als Fragment vorhanden. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Identisches 5-Kasten-Übersichtsschaubild wie Folie 1. Zusätzlich: vom ersten Kasten ("Job Rotation", ganz links) wird ein schwarzer Linienzug von der unteren Kante nach unten in eine große, schwarz umrandete, abgerundete Sprechblase gezogen, die den Definitionstext zu Job Rotation enthält. Im Sprechblasentext ist hier KEIN Begriff fett hervorgehoben (anders als auf Folie 3-6).

### Visuelle Rekonstruktion
```
[Job Rotation]* [Job Enl.] [Job Enr.] [Teilaut.] [Qualität.]
   \________________________________________________
    \                                               |
     ┌────────────────────────────────────────────┐
     │  Definition Job Rotation (Text s.u.)         │
     └────────────────────────────────────────────┘
* = Ausgangskasten, von dem die Sprechblase ausgeht
```

### Inhaltliche Rekonstruktion
Job Rotation (Arbeitsplatzwechsel): regelmäßiger, systematischer und planmäßiger Wechsel von Arbeitsplätzen und Arbeitsaufgaben der Beschäftigten untereinander. Ziel/Fokus: Verringerung von Monotonie und einseitiger Belastung, Weiterentwicklung und Qualifikation.

### Fachliche Aussage
Job Rotation reduziert Monotonie und einseitige Belastung durch planmäßigen Aufgabenwechsel und fördert zugleich Qualifikation und Weiterentwicklung.

### React-Vorschlag
`KonzeptCallout` - wiederverwendbare Komponente: Übersichtsgrid (Folie 1) mit hervorgehobener aktiver Karte plus darunter eingeblendeter Definitions-Callout; pro Folie 2-6 nur Variation des aktiven Begriffs.

---

## Folie 3 - Arbeitsorganisation / Klassische Formen (Job Enlargement)

### In der MD vorhanden
Fließtext vollständig (Zeilen 35-39): "Bei Job Enlargement (Aufgabenerweiterung) wird der Grad der Arbeitsteilung vermindert. Man fasst mehrere Arbeitsprozesse verschiedener Arbeitsplätze an einem Arbeitsplatz zusammen. Dadurch wird der Arbeitsinhalt vergrößert, es entsteht mehr Vielfalt und eine einseitige Belastung wird vermieden. Durch die Verlängerung der Arbeitszyklen wird der Sinneszusammenhang des gesamten Arbeitsablaufs eher erkennbar." Diese Folie hat als einzige der Serie 2-6 den abweichenden Footer © 2025.

### Fehlende visuelle Inhalte
Identisches 5-Kasten-Übersichtsschaubild. Der zweite Kasten ("Job Enlargement") ist Ausgangspunkt; von ihm wird ein Linienzug in die untenstehende Definitions-Sprechblase gezogen. "Job Enlargement" im Sprechblasentext fett hervorgehoben.

### Visuelle Rekonstruktion
```
[Job Rot.] [Job Enlargement]* [Job Enr.] [Teilaut.] [Qualität.]
                  \____________________
                   ┌──────────────────────────────┐
                   │ Definition Job Enlargement     │
                   └──────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Job Enlargement (Aufgabenerweiterung): Verminderung des Grades der Arbeitsteilung; mehrere Arbeitsprozesse verschiedener Arbeitsplätze werden an einem Arbeitsplatz zusammengefasst. Wirkung: größerer Arbeitsinhalt, mehr Vielfalt, Vermeidung einseitiger Belastung; durch verlängerte Arbeitszyklen wird der Sinneszusammenhang des gesamten Arbeitsablaufs erkennbar.
Hinweis: Die Einordnung als "horizontale/quantitative" Aufgabenerweiterung ist eine gängige fachliche Deutung, steht aber so NICHT auf der Folie.

### Fachliche Aussage
Job Enlargement erweitert die Aufgabe um zusätzliche, gleichartige Tätigkeiten (Verminderung der Arbeitsteilung) und vergrößert so Arbeitsinhalt, Vielfalt und Sinnzusammenhang der Arbeit.

### React-Vorschlag
`KonzeptCallout` (s. Folie 2) mit aktivem Begriff "Job Enlargement".

---

## Folie 4 - Arbeitsorganisation / Klassische Formen (Job Enrichment)

### In der MD vorhanden
Fließtext vollständig (Zeilen 50-54): "Beim Job Enrichment (Aufgabenbereicherung), geht es vorrangig um eine Erweiterung des Entscheidungs- und Kontrollspielraums. Die Arbeitstätigkeit der Beschäftigten wird durch Hinzufügen verschiedenen schwieriger, aber dennoch zusammengehöriger Arbeitselemente bereichert. Die Planung, Ausführung und Kontrolle werden zusammengelegt, womit die Eigenverantwortung wächst. Der Arbeitszyklus wird umfangreicher, die Anforderungen und die Verantwortung steigen.." (Footer: © 2026.)

### Fehlende visuelle Inhalte
Identisches 5-Kasten-Übersichtsschaubild. Der dritte (mittlere) Kasten "Job Enrichment" ist Ausgangspunkt; symmetrischer V-förmiger Linienzug nach unten in die Definitions-Sprechblase. "Job Enrichment" im Sprechblasentext fett.

### Visuelle Rekonstruktion
```
[Job Rot.] [Job Enl.] [Job Enrichment]* [Teilaut.] [Qualität.]
                          /        \
            ┌────────────────────────────────────┐
            │ Definition Job Enrichment            │
            └────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Job Enrichment (Aufgabenbereicherung): vorrangig Erweiterung des Entscheidungs- und Kontrollspielraums. Hinzufügen schwierigerer, aber zusammengehöriger Arbeitselemente; Planung, Ausführung und Kontrolle werden zusammengelegt -> Eigenverantwortung wächst; Arbeitszyklus umfangreicher; Anforderungen und Verantwortung steigen.
Hinweis: Die Einordnung als "vertikale/qualitative" Aufgabenbereicherung ist eine gängige fachliche Deutung, steht aber so NICHT auf der Folie.

### Fachliche Aussage
Job Enrichment erweitert die Aufgabe um Planungs-, Entscheidungs- und Kontrollanteile (Erweiterung des Entscheidungs- und Kontrollspielraums) und erhöht damit Eigenverantwortung, Anforderungen und Verantwortung.

### React-Vorschlag
`KonzeptCallout` (s. Folie 2) mit aktivem Begriff "Job Enrichment".

---

## Folie 5 - Arbeitsorganisation / Klassische Formen (Teilautonome Arbeitsgruppe)

### In der MD vorhanden
Fließtext vollständig (Zeilen 65-70): "Eine teilautonome Arbeitsgruppe ist eine (vom Tavistock-Institut entwickelte, im Zuge der Einführung in den Volvo-Werken in Kalmar bekannt gewordene) betriebliche Arbeitsgruppe von drei bis ca. zehn Personen, der eine Gesamtaufgabe übertragen wird, deren Ausführung von ihr eigenverantwortlich vorgenommen wird. Außer den übergeordneten Produktions- und Investitionsproblemen werden alle Entscheidungen der Planung, Ausführung und Kontrolle von der Arbeitsgruppe getroffen. Die Gruppenmitglieder sollen möglichst alle Arbeiten der Gruppe beherrschen, um eine systematischen Arbeitsplatzwechsel, gegenseitigen Ablösen und gegenseitige Hilfe zu ermöglichen." (Footer: © 2026.)

### Fehlende visuelle Inhalte
Identisches 5-Kasten-Übersichtsschaubild. Der vierte Kasten "Teilautonome Arbeits-gruppen" ist Ausgangspunkt; Linienzug von der unteren Kante nach unten links in die Definitions-Sprechblase. "teilautonome Arbeitsgruppe" im Sprechblasentext fett.

### Visuelle Rekonstruktion
```
[Job Rot.] [Job Enl.] [Job Enr.] [Teilautonome Arbeitsgr.]* [Qualität.]
                                         /
        ┌─────────────────────────────────────────────┐
        │ Definition teilautonome Arbeitsgruppe          │
        └─────────────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Teilautonome Arbeitsgruppe: vom Tavistock-Institut entwickelt, bekannt durch Einführung in den Volvo-Werken in Kalmar; 3 bis ca. 10 Personen; erhält eine Gesamtaufgabe und führt sie eigenverantwortlich aus. Außer übergeordneten Produktions- und Investitionsproblemen werden alle Entscheidungen der Planung, Ausführung und Kontrolle von der Gruppe getroffen. Mitglieder sollen möglichst alle Arbeiten beherrschen (systematischer Arbeitsplatzwechsel, gegenseitiges Ablösen, gegenseitige Hilfe).

### Fachliche Aussage
Die teilautonome Arbeitsgruppe übernimmt als kleine Gruppe (3-10 Personen) eine Gesamtaufgabe samt Planung, Ausführung und Kontrolle eigenverantwortlich und institutionalisiert so Selbststeuerung und Mehrfachqualifizierung.

### React-Vorschlag
`KonzeptCallout` (s. Folie 2) mit aktivem Begriff "Teilautonome Arbeitsgruppen".

---

## Folie 6 - Arbeitsorganisation / Klassische Formen (Qualitätszirkel)

### In der MD vorhanden
Fließtext vollständig (Zeilen 81-85): "Die Qualitätszirkel sind Gruppen von sechs bis zwölf Beschäftigen, meist aus einer oder verschiedenen Abteilungen, die sich freiwillig in regelmäßigen Abständen treffen, um Qualitätsprobleme in ihrer Arbeitsumgebung zu lösen. Sie arbeiten hauptsächlich an Problemen, die unmittelbar mit der täglichen Arbeit in Zusammenhang stehen. Die Gruppe bestimmt aus ihren Reihen einen Moderator, der die Sitzungen des Qualitätszirkels plant und vorbereitet. Dieser Moderator übernimmt zudem die Gesprächsführung in Sitzungen und gewährleistet die Protokollierung der Ergebnisse." (Footer: © 2026.)

### Fehlende visuelle Inhalte
Identisches 5-Kasten-Übersichtsschaubild. Der fünfte Kasten "Qualitäts-zirkel" (ganz rechts) ist Ausgangspunkt; Linienzug nach unten links in die Definitions-Sprechblase. "Qualitätszirkel" im Sprechblasentext fett.

### Visuelle Rekonstruktion
```
[Job Rot.] [Job Enl.] [Job Enr.] [Teilaut.] [Qualitätszirkel]*
        ___________________________________________/
       |
 ┌────────────────────────────────────────────┐
 │ Definition Qualitätszirkel                    │
 └────────────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Qualitätszirkel: Gruppen von 6 bis 12 Beschäftigten, meist aus einer oder verschiedenen Abteilungen, treffen sich freiwillig in regelmäßigen Abständen, um Qualitätsprobleme in ihrer Arbeitsumgebung zu lösen. Themen: unmittelbar mit der täglichen Arbeit zusammenhängende Probleme. Die Gruppe bestimmt aus ihren Reihen einen Moderator, der die Sitzungen plant/vorbereitet, die Gesprächsführung übernimmt und die Protokollierung der Ergebnisse gewährleistet.

### Fachliche Aussage
Qualitätszirkel sind freiwillige, moderierte Kleingruppen (6-12 Beschäftigte) zur kontinuierlichen Lösung arbeitsplatznaher Qualitätsprobleme.

### React-Vorschlag
`KonzeptCallout` (s. Folie 2) mit aktivem Begriff "Qualitätszirkel".

---

## Folie 7 - Arbeitsorganisation / Aufgabentiefe und Aufgabenbreite

### In der MD vorhanden
Markitdown gibt nur einzelne Achsen- und Knotenbegriffe ohne Position wieder (Zeilen 90-104): "Job Enrichment / Aufgabentiefe", "Über Ziele / gesteuerte / Projektgruppen", "Teilautonomie / Arbeitsgruppen", "Qualitätszirkel", "Klassische / Arbeits- / gruppen", "Fertigungs-/ Umsetzungs- / teams", "Job Enlargement / Aufgabenbreite", "In der Praxis findet man eine große Bandbreite an 'teilautonomen Arbeitsgruppen'". Das Koordinatendiagramm und die Positionierung der Blasen gehen verloren. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Zweidimensionales Streu-/Positionierungsdiagramm (Portfolio). Y-Achse (nach oben, blauer Pfeil): zweizeilige Beschriftung "Job Enrichment / Aufgabentiefe". X-Achse (nach rechts, blauer Pfeil, am rechten Ende beschriftet): zweizeilig "Job Enlargement / Aufgabenbreite". Fünf hellblaue, blau umrandete Ellipsen (Blasen) sind im Quadranten verteilt:
- links oben (hohe Tiefe, geringe Breite): "Über Ziele gesteuerte Projektgruppen"
- rechts oben (hohe Tiefe, hohe Breite): "Teilautonomie Arbeitsgruppen" (Schreibweise auf der Folie: "Teilautonomie", nicht "Teilautonome"; diese Ellipse ist durch eine dunklere/kräftigere blaue Umrandung hervorgehoben, aber NICHT größer als die übrigen)
- Mitte (mittlere Tiefe und Breite): "Qualitätszirkel"
- links unten (geringe Tiefe, geringe Breite): "Klassische Arbeits-gruppen"
- rechts unten (geringe Tiefe, hohe Breite): "Fertigungs-/Umsetzungs-teams"
Oben rechts (zwischen den oberen Blasen) steht der zweizeilige Hinweistext: "In der Praxis findet man eine große Bandbreite an 'teilautonomen Arbeitsgruppen'".

### Visuelle Rekonstruktion
```
Job Enrichment / Aufgabentiefe
   ▲
   │  (Über Ziele          In der Praxis ...     (Teilautonomie
   │   gesteuerte                                  Arbeitsgruppen)
   │   Projektgruppen)                             [dunkler Rand]
   │
   │              (Qualitätszirkel)
   │
   │  (Klassische                                 (Fertigungs-/
   │   Arbeits-gruppen)                            Umsetzungs-teams)
   └─────────────────────────────────────────────────▶
                            Job Enlargement / Aufgabenbreite
```

### Inhaltliche Rekonstruktion
Positionierung im Tiefe-Breite-Portfolio (Position der Blasen visuell abgelesen, keine numerischen Werte auf der Folie):
| Form | Aufgabentiefe (Y) | Aufgabenbreite (X) |
|---|---|---|
| Klassische Arbeitsgruppen | gering | gering |
| Fertigungs-/Umsetzungsteams | gering | hoch |
| Über Ziele gesteuerte Projektgruppen | hoch | gering |
| Qualitätszirkel | mittel | mittel |
| Teilautonomie Arbeitsgruppen | hoch | hoch |

### Fachliche Aussage
Die Arbeitsformen lassen sich entlang der zwei Dimensionen Aufgabentiefe (Job Enrichment) und Aufgabenbreite (Job Enlargement) verorten; "teilautonome Arbeitsgruppen" bilden in der Praxis ein breites Feld hoher Tiefe und Breite (deshalb auf der Folie hervorgehoben).

### React-Vorschlag
`AufgabenPortfolioChart` - Quadrant mit beschrifteten Achsenpfeilen und absolut positionierten Blasen-Labels (eine Blase hervorgehoben); auf Mobile als beschriftete Tabelle (Tiefe/Breite je Form) ausgeben.

---

## Folie 8 - Arbeitszeit / Definition

### In der MD vorhanden
Vollständig vorhanden (Zeilen 109-120): Definition Arbeitszeit, Betriebszeit, Entkopplung sowie die drei Grundtypen der Arbeitszeitflexibilisierung. Reine Textfolie ohne Grafik. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine echten Grafiken; nur drei Aufzählungspunkte mit quadratischen Bullets. Keine Diagramme verloren gegangen.

### Inhaltliche Rekonstruktion
- Arbeitszeit = Zeit, in der der Arbeitnehmer pro Tag, Woche, Monat, Jahr dem Unternehmen seine Arbeitskraft vertraglich gegen Entgelt zur Verfügung stellt.
- Betriebszeit = Zeit, in der ein Betrieb produktiv arbeitet und seine Abteilungen ansprechbar sind.
- Arbeitszeit wird grundsätzlich durch die Betriebszeit bestimmt; durch Entkopplung der individuellen Arbeitszeit von der Betriebszeit entstehen Arbeitsspielräume. Flexibilisierbar sind Arbeitsdauer und Arbeitszeitlage.

Grundtypen der Arbeitszeitflexibilisierung:
| Typ | Beschreibung | Beispiel |
|---|---|---|
| chronometrische Flexibilität | Variation der Dauer | Teilzeitbeschäftigung |
| chronologische Flexibilität | Variation der Lage / Verteilung des Arbeitsvolumens | Schichtarbeit |
| Mischformen | Kombination Dauer + Lage | Gleitzeitmodelle mit flexibler Anwesenheitsdauer |

### Fachliche Aussage
Arbeitszeit und Betriebszeit sind zu unterscheiden; Flexibilisierung setzt an Dauer (chronometrisch) und Lage (chronologisch) an, ergänzt um Mischformen.

### React-Vorschlag
`DefinitionList` plus `FlexTypTabelle` - drei abgegrenzte Definitionsblöcke und eine kleine Tabelle der drei Grundtypen.

---

## Folie 9 - Arbeitszeit / Vollzeitbeschäftigung

### In der MD vorhanden
Vollständig vorhanden (Zeilen 125-133), inkl. ArbZRG-Klammertext und der Aufzählung (Tarifverträge, Betriebsvereinbarungen, Individualarbeitsverträge). Reine Textfolie. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur Textgliederung mit fett gesetzter Überschrift "Arbeitszeitrechtsgesetz (ArbZRG)" und Bullet-Liste. Nichts verloren.

### Inhaltliche Rekonstruktion
Im Rahmen der Arbeitszeitregelungen werden die wöchentliche (z.B. 40 Std.) und tägliche Regelarbeitszeit im Betrieb festgelegt durch:
- Arbeitszeitrechtsgesetz (ArbZRG): werktägliche Arbeitszeit = 8 Stunden; verlängerbar auf 10 Stunden, wenn innerhalb von 6 Kalendermonaten oder 24 Wochen im Durchschnitt 8 Stunden täglich nicht überschritten werden.
- Tarifverträge
- Betriebsvereinbarungen oder
- Individualarbeitsverträge

### Fachliche Aussage
Die Regelarbeitszeit der Vollzeit wird durch Gesetz (ArbZRG: 8/10-Stunden-Regel mit Durchschnittsausgleich) sowie kollektive und individuelle Verträge bestimmt.

### React-Vorschlag
`RechtsgrundlagenListe` - Callout-Box für die ArbZRG-Kernregel plus Aufzählung der weiteren Festlegungsebenen.

---

## Folie 10 - Arbeitszeit / Teilzeitbeschäftigung

### In der MD vorhanden
Vollständig vorhanden (Zeilen 138-153) inkl. Festlegungsoptionen und der Unterpunkte Job Sharing, Gleitender Übergang in den Ruhestand, Flexibilisierung für berufstätige Mütter. Reine Textfolie. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur verschachtelte Aufzählungen. Nichts verloren.

### Inhaltliche Rekonstruktion
Bei Teilzeitarbeitsverhältnissen verkürzt sich die Arbeitszeit im Verhältnis zur Vollarbeitszeit; im Rahmen der Teilzeit kann den Flexibilisierungsanforderungen moderner Arbeitsverhältnisse Rechnung getragen werden. Arbeitszeit kann festgelegt werden:
- stunden-, halbtage-, tage-, wochenweise
- kontinuierlich oder in Intervallen
- mit starren oder flexiblen Anwesenheitszeiten

Sonderformen:
- Job Sharing: ein Vollzeitbeschäftigungsverhältnis wird auf zwei (oder mehrere) Teilzeitbeschäftigungsverhältnisse aufgeteilt; die Teilzeitbeschäftigten müssen sich insbesondere bei Arbeitszeiten und Arbeitsinhalten untereinander abstimmen.
- Gleitender Übergang in den Ruhestand: Arbeitszeitverkürzung erleichtert den Übergang und trägt der ggf. reduzierten Belastbarkeit älterer AN Rechnung (z.B. Vorruhestand, Altersteilzeit).
- Flexibilisierung der Arbeitszeit für berufstätige Mütter: ermöglicht den Verbleib im Beruf trotz Familie.

### Fachliche Aussage
Teilzeit ist vielfältig ausgestaltbar und dient als Flexibilisierungsinstrument (Job Sharing, gleitender Ruhestand, Vereinbarkeit Familie und Beruf).

### React-Vorschlag
`TeilzeitOptionen` - gegliederte Liste mit hervorgehobenen Sonderformen als Unterkarten.

---

## Folie 11 - Arbeitszeit / Variabel und starr

### In der MD vorhanden
Vollständig vorhanden (Zeilen 158-168). Reine Textfolie. (Folientitel/Subtitle: "Variabel und starr". Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur zwei Bullets (starr / variabel) plus Fließtext. Nichts verloren.

### Inhaltliche Rekonstruktion
Unabhängig davon, ob ein Beschäftigungsverhältnis auf Voll- oder Teilzeit ausgelegt ist, kann innerhalb eines Beschäftigungsverhältnisses unterschieden werden zwischen:
- starren und
- variablen (flexiblen) Arbeitszeiten.

Im Allgemeinen werden die Möglichkeiten der Arbeitszeitflexibilisierung von der Art des betrieblichen Leistungsgegenstandes bestimmt:
- Produktionsbetriebe mit Fließbandfertigung / Handelsbetriebe mit Ladenöffnungszeiten -> zumeist an starre Anwesenheitszeiten gebunden.
- Verwaltungsbetriebe -> Arbeitszeiten in einem gewissen Umfang flexibilisierbar.

### Fachliche Aussage
Ob Arbeitszeit starr oder variabel gestaltet werden kann, bestimmt vor allem die Art des betrieblichen Leistungsgegenstandes (Produktion/Handel starr, Verwaltung flexibel).

### React-Vorschlag
`VergleichZweiSpalten` - Gegenüberstellung starr vs. variabel mit Beispielbranchen.

---

## Folie 12 - Arbeitszeit / Gleitzeit

### In der MD vorhanden
Markitdown hat den Erklärtext und die Zeitfenster-Liste teils erfasst, aber die Tabelle/Zeitleiste ist stark zerbrochen (Zeilen 176-183): Zeitwerte "7.00 8.00 9.00 ... 19.00" sind in unstrukturierte Tabellenzellen zerfallen; die grafische Zeitachse mit den abwechselnden Gleitzeit-/Kernzeit-Blöcken fehlt vollständig. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Horizontale Tageszeit-Leiste von 7.00 bis 19.00 Uhr. Über der Leiste fünf rechteckige Beschriftungs-Labels in Reihenfolge: "Gleitzeit", "Kernzeit", "Gleitzeit", "Kernzeit", "Gleitzeit", verbunden über aufwärtsgerichtete Pfeil-/Sprechmarken zu den Segmenten der Leiste. Die Leiste selbst ist ein langer Balken: die beiden Kernzeit-Segmente sind schraffiert (diagonal gestreift) hervorgehoben, die drei Gleitzeit-Segmente sind weiß/offen. Unter der Leiste eine Skala mit den Stundenmarken 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00. Darunter die textliche Auflistung der Zeitfenster. (Hinweis: Die Segmentgrenzen liegen optisch auf Halbstunden — Kernzeit endet bei 11.30 bzw. beginnt bei 13.30 —, die Achsen-Ticks selbst sind aber nur volle Stunden.)

### Visuelle Rekonstruktion
```
   [Gleitzeit] [Kernzeit] [Gleitzeit] [Kernzeit] [Gleitzeit]
        ↑          ↑           ↑          ↑           ↑
   ┌────────┬////////////┬─────────┬////////////┬──────────┐
   │ offen  │ schraffiert│  offen  │ schraffiert│  offen   │
   └────────┴────────────┴─────────┴────────────┴──────────┘
  7   8   9   10  11   12   13   14   15   16   17   18   19  Uhr
```

### Inhaltliche Rekonstruktion
Gleitzeitmodell: Der AN legt in einem vom AG vorgegebenen Rahmen den Beginn der täglichen Arbeitszeit selbst fest; in der vorgegebenen Kernarbeitszeit muss jeder Mitarbeiter anwesend sein. Beispielmodell:
| Zeitfenster | Von - Bis | Art |
|---|---|---|
| Gleitzeit | 7.00 - 9.00 Uhr | flexibel |
| Kernzeit | 9.00 - 11.30 Uhr | Anwesenheitspflicht |
| Gleitzeit | 11.30 - 13.30 Uhr | (Mittagspause) |
| Kernzeit | 13.30 - 16.00 Uhr | Anwesenheitspflicht |
| Gleitzeit | 16.00 - 19.00 Uhr | flexibel |

### Fachliche Aussage
Gleitzeit gibt dem Mitarbeiter Spielraum bei Arbeitsbeginn/-ende, fixiert aber über Kernzeiten verbindliche Anwesenheitsfenster.

### React-Vorschlag
`GleitzeitTimeline` - horizontaler Zeitstrahl 7-19 Uhr mit alternierenden Segmenten (Kernzeit schraffiert/hervorgehoben, Gleitzeit offen) und Stunden-Ticks; darunter Legenden-Tabelle der Zeitfenster.

---

## Folie 13 - Arbeitszeit / Gleitzeit (Zeitkonto)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 188-198) inkl. der beiden Varianten und des Arbeitszeitkonto-Texts samt Beispiel "(z. B. bis zum 15. des Folgemonats oder maximal 15 Stunden Übertrag)". Reine Textfolie. Subtitle der Folie ist nur "Gleitzeit" (Zusatz "(Zeitkonto)" ist eine Lesehilfe, steht nicht auf der Folie). (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur zwei Bullets und Fließtext. Nichts verloren.

### Inhaltliche Rekonstruktion
Im Zusammenhang mit gleitender Arbeitszeit können zwei Möglichkeiten unterschieden werden:
- Gleitender Arbeitszeitbeginn bei fester täglicher Anwesenheitsdauer
- Gleitender Arbeitszeitbeginn bei flexibler täglicher Anwesenheitsdauer (Zeitausgleich)

Bei flexibler Anwesenheitsdauer entstehen im Verhältnis zur arbeitsvertraglich vorgesehenen wöchentlichen (z.B. 40 Std.) bzw. täglichen Arbeitszeit (z.B. 8 Std.): Zeitguthaben oder Zeitschulden. Diese werden auf ein persönliches Arbeitszeitkonto eingetragen, welches je nach Betriebsvereinbarung innerhalb eines festgelegten Ausgleichszeitraums ausgeglichen sein muss (z.B. bis zum 15. des Folgemonats oder maximal 15 Stunden Übertrag).

### Fachliche Aussage
Bei flexibler Anwesenheitsdauer werden Abweichungen von der Sollarbeitszeit als Zeitguthaben/-schulden auf einem Arbeitszeitkonto gebucht und innerhalb eines Ausgleichszeitraums saldiert.

### React-Vorschlag
`ZweiVariantenListe` plus `InfoCallout` - die zwei Gleitzeitvarianten als Liste, der Ausgleichsmechanismus als Hinweis-Box.

---

## Folie 14 - Arbeitszeit / Jahresarbeitszeitmodelle

### In der MD vorhanden
Vollständig vorhanden (Zeilen 203-216): Jahresarbeitszeit, Schichtarbeit-Definition, Ziele und Möglichkeiten. Reine Textfolie. (Achtung: Der Folien-Subtitle lautet nur "Jahresarbeitszeitmodelle"; "Schichtarbeit" ist ein Abschnitt im Folienkörper, nicht Teil des Subtitles. Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur Aufzählungen mit quadratischen Bullets. Nichts verloren.

### Inhaltliche Rekonstruktion
Jahresarbeitszeitmodelle: Zwischen AG und AN wird die Arbeitszeit des Mitarbeiters im entsprechenden Kalenderjahr festgelegt; so kann entweder den saisonalen Produktionsschwankungen des Betriebes oder den Freizeitwünschen des Mitarbeiters Rechnung getragen werden.

Schichtarbeit: ein Arbeitsplatz wird auf Dauer abwechselnd und nach Plan von zwei oder mehreren AN belegt.
- Ziele: ununterbrochener Fortgang der Arbeiten bei nichtunterbrechbaren Produktionsprozessen (z.B. chemische Industrie); bessere Auslastung kostenintensiver Anlagen.
- Möglichkeiten: vollkontinuierlich (ununterbrochen, werktags wie sonn- und feiertags); teilkontinuierlich (z.B. Mo-Fr); 2- oder 3-Schichten.

### Fachliche Aussage
Jahresarbeitszeit- und Schichtmodelle verteilen Arbeitsvolumen über die Zeit, um Produktionsschwankungen aufzufangen bzw. durchgehenden Betrieb und Anlagenauslastung zu sichern.

### React-Vorschlag
`ThemaZweiBloecke` - zwei Abschnitte (Jahresarbeitszeit / Schichtarbeit) mit Ziele- und Möglichkeiten-Listen.

---

## Folie 15 - Arbeitszeit / Kapazitätsabhängig

### In der MD vorhanden
Vollständig vorhanden (Zeilen 221-230) inkl. Ankündigungsfrist und Rechtsgrundlage "TzBfG § 12". Reine Textfolie. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur Aufzählung mit quadratischen Bullets. Nichts verloren.

### Inhaltliche Rekonstruktion
Kapazitätsorientierte variable Arbeitszeit = Arbeit auf Abruf, z.B. Gastronomie (Biergarten, Servicegastronomie):
- Die Arbeit wird der Auftragslage angepasst
- Arbeitgeber spart Leerlaufkosten
- starke gesetzliche Einschränkungen
- Ankündigung: AN nur zur Arbeit verpflichtet, wenn AG ihm die Arbeitseinsatzzeit mindestens 4 Tage im Voraus mitgeteilt hat; bei Unterschreitung ist AN nicht zur Leistung verpflichtet.
- Rechtsgrundlage: TzBfG § 12

### Fachliche Aussage
Arbeit auf Abruf passt den Personaleinsatz an die Auftragslage an, ist aber gesetzlich (TzBfG § 12, u.a. 4-Tage-Ankündigungsfrist) stark begrenzt.

### React-Vorschlag
`MerkmalsListe` plus `GesetzBadge` - Vorteile/Einschränkungen als Liste, Rechtsgrundlage als kleines Badge/Quellenhinweis.

---

## Folie 16 - Arbeitszeit / Mehrarbeit / Überstunden

### In der MD vorhanden
Vollständig vorhanden (Zeilen 235-246). Reine Textfolie. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur Aufzählung mit quadratischen Bullets. Nichts verloren.

### Inhaltliche Rekonstruktion
- Überschreitungen der im Arbeitsvertrag festgelegten Arbeitszeiten gelten als Überstunden, wenn sie vom AG angeordnet oder geduldet werden.
- Ein spezifisches Entgelt für Überstunden ist gesetzlich nicht geregelt; einige Tarifverträge sehen 25 % Zuschlag vor, ein solcher Anspruch besteht aber erst, wenn die tariflich festgelegte Wochenarbeitszeit überschritten wird.
- In Produktionsbetrieben werden Überstunden häufig zur Abdeckung kurzfristigen Personalbedarfs angeordnet.
- Bei flexiblen Arbeitssystemen, in denen der AN selbst Gestaltungsfreiräume hat, werden Überstunden meist mit Freizeitausgleich abgegolten.
- Bei hierarchisch höher angesiedelten Positionen sind Überstunden fast immer mit dem vereinbarten Gehalt abgegolten.

### Fachliche Aussage
Überstunden sind angeordnete/geduldete Mehrarbeit; Zuschläge (z.B. 25 %) sind nicht gesetzlich, sondern nur tariflich vorgesehen, und die Abgeltung variiert nach Arbeitssystem und Hierarchieebene.

### React-Vorschlag
`AufzaehlungsKarten` - fünf prägnante Aussagekarten zu Definition, Zuschlag, Produktionsbetrieb, Flexsystem und Führungsebene.

---

## Folie 17 - Arbeitszeit / Minderarbeit / Kurzarbeit

### In der MD vorhanden
Vollständig vorhanden (Zeilen 251-260). Reine Textfolie. (Footer: © 2026.)

### Fehlende visuelle Inhalte
Keine Grafik; nur Aufzählung mit quadratischen Bullets. Nichts verloren.

### Inhaltliche Rekonstruktion
- Die vorübergehende Herabsetzung der betriebsüblichen regelmäßigen Arbeitszeit für das gesamte Unternehmen (oder einzelne Organisationseinheiten), einhergehend mit Entgeltminderungen, wird als Kurzarbeit bezeichnet.
- Für die Einführung von Kurzarbeit bedarf es einer Rechtsgrundlage in Form von Tarifverträgen oder einer Betriebsvereinbarung; sie kann nur mit Zustimmung des Betriebsrates eingeführt werden.
- Mitarbeitern von Unternehmen mit regelmäßiger Arbeitszeit zahlt die Bundesanstalt für Arbeit aus Mitteln der Arbeitslosenversicherung ein Kurzarbeitergeld, wenn ein vorübergehender Ausfall der Arbeit gegeben und zu erwarten ist, dass den Arbeitnehmern dadurch Arbeitsplätze erhalten bleiben.

### Fachliche Aussage
Kurzarbeit senkt vorübergehend Arbeitszeit und Entgelt, bedarf tariflicher/betrieblicher Grundlage und Betriebsratszustimmung und wird durch Kurzarbeitergeld zum Arbeitsplatzerhalt flankiert.

### React-Vorschlag
`DefinitionMitVoraussetzungen` - Definitionsblock plus Liste der rechtlichen Voraussetzungen und des Kurzarbeitergelds.

---

## Folie 18 - Arbeitsort / Desk-Sharing

### In der MD vorhanden
Der Fließtext ist vorhanden, aber durch zerbrochene Tabellenzellen stark fragmentiert (Zeilen 264-285): einzelne Wörter wie "Reinigungs- | und Stromkosten an.", "aufgaben- | und projektbezogen zusammen | und wechseln", "Umsetzung steht | ihnen gar kein fester Platz mehr ...", "Rollcontainer der alle Arbeitsutensilien | beinhaltet". Doppelter Footer (© 2023 und © 2026, untereinander oben/unten). Das Foto rechts fehlt vollständig.

### Fehlende visuelle Inhalte
Rechts auf der Folie ein Foto (Querformat): ein modernes, offenes (Großraum-)Büro, in dem mehrere Personen an gemeinsamen Tischen/Arbeitsplätzen sitzen und mit Laptops zusammenarbeiten (helle, moderne Möblierung, Fensterfront im Hintergrund) - illustriert das Desk-Sharing-/virtuelle-Büro-Konzept. Links davon der Erläuterungstext in zwei Absätzen. Kein Diagramm, nur Bebilderung.

### Inhaltliche Rekonstruktion
Desk-Sharing: In dienstleistungsorientierten Unternehmen oder Abteilungen, bei denen Kommunikation eine große Rolle spielt, halten sich Mitarbeiter meist beim Kunden, bei Kollegen oder in Konferenzräumen auf. Ein Großteil der Büros/Schreibtische ist daher unbesetzt, dennoch fallen Miet-, Heizungs-, Reinigungs- und Stromkosten an.
Konzept "virtuelle Büros": Mitarbeiter sitzen aufgaben- und projektbezogen zusammen und wechseln bei neuen Aufgaben ihren Arbeitsplatz. Bei konsequenter Umsetzung steht ihnen gar kein fester Platz mehr zur Verfügung; sie "suchen" sich bei Bedarf einen freien Arbeitsplatz und richten ihn mit ihrem "Rollcontainer" (enthält alle Arbeitsutensilien) befristet ein (z.B. bei IBM, München).

### Fachliche Aussage
Desk-Sharing / virtuelle Büros verzichten auf feste Arbeitsplätze und teilen flexibel nutzbare, projektbezogen belegte Plätze, um leerstehende Bürofläche und deren Kosten zu reduzieren.

### React-Vorschlag
`TextMitBild` - zweispaltiges Layout (Erläuterungstext links, illustratives Büro-Foto rechts), das auf Mobile zu Bild-über-Text umbricht.

## Folie 19 - Arbeitsort: Mobiles Arbeiten / Telearbeit

### In der MD vorhanden
Der Definitionstext zur Telearbeit ist vollständig vorhanden (MD-Zeilen 288-301): "Ausübung erwerbsmäßig betriebener Tätigkeiten an einem Arbeitsplatz, der mit informationstechnischen Endgeräten ausgestattet, betriebsorganisatorisch dezentral eingerichtet und mit dem Auftraggeber durch elektronische Kommunikationsmedien verbunden ist." sowie der Hinweis, dass sich im wissenschaftlichen Bereich der Begriff "Telearbeit" durchzusetzen scheint.

### Fehlende visuelle Inhalte
Rechts auf der Folie ein farbiges Foto (Illustration): Zwei Personen arbeiten in einem hellen Wohn-/Arbeitsraum. Eine Person sitzt vorne in einem Sessel mit einem Laptop auf dem Schoss (Homeoffice-Situation), eine zweite Person steht/sitzt im Hintergrund an einem Schreibtisch mit Desktop-Monitor vor einem Fenster mit Jalousie. Pastellfarben (Gelb, Grau, Grün). Das Foto bebildert das Thema "Mobiles Arbeiten / Homeoffice" und hat keinen eigenen fachlichen Informationsgehalt über den Definitionstext hinaus.

### Visuelle Rekonstruktion
Zweispaltiges Layout: links Definitionstext (zwei Absätze), rechts dekoratives Illustrations-Bild (Homeoffice-Szene). Nicht inhaltstragend.

### Inhaltliche Rekonstruktion
Definition Telearbeit: Ausübung erwerbsmässig betriebener Tätigkeiten an einem Arbeitsplatz, der
- mit informationstechnischen Endgeräten ausgestattet,
- betriebsorganisatorisch dezentral eingerichtet und
- mit dem Auftraggeber durch elektronische Kommunikationsmedien verbunden ist.

Begriffsvielfalt in der Literatur; im wissenschaftlichen Bereich setzt sich vor allem der Begriff "Telearbeit" durch.

### Fachliche Aussage
Telearbeit bezeichnet erwerbsmässige Tätigkeit an einem IT-gestützten, dezentralen und elektronisch mit dem Arbeitgeber vernetzten Arbeitsplatz.

### React-Vorschlag
`DefinitionCard` mit optionalem dekorativem `IllustrationSlot` (Bild rein dekorativ, kein eigener Datenwert). Drei Definitionsmerkmale als Aufzählung hervorheben.

---

## Folie 20 - Arbeitsort: Mobiles Arbeiten – Vorteile Arbeitnehmer

### In der MD vorhanden
Inhaltlich vollständig vorhanden (MD-Zeilen 305-319). Die thematische Gruppierung in vier Überschriften (Eigenverantwortung, Leistung, Lebensqualität, Nachhaltigkeit und Kosten) ist erkennbar, aber als flache Liste ohne klare Hierarchie übertragen.

### Fehlende visuelle Inhalte
Reine Text-/Aufzählungsfolie ohne Grafiken. Vier fettgedruckte Themenüberschriften, jeweils mit Bulletpoints darunter (quadratische Aufzählungszeichen). Keine Icons, Diagramme oder Tabellen.

### Visuelle Rekonstruktion
Vier Gruppenblöcke (Überschrift + Bullets):
- Eigenverantwortung
- Leistung
- Lebensqualität
- Nachhaltigkeit und Kosten

### Inhaltliche Rekonstruktion
**Eigenverantwortung**
- Grössere Zeitsouveränität
- "Selbstorganisation" der Arbeit

**Leistung**
- Grössere Produktivität (weniger Störungen)
- Höhere Kreativität (nur 5 % der guten Ideen entstehen am Arbeitsplatz)

**Lebensqualität**
- Vermeidung bzw. Verringerung von Fahr-, Pendel- bzw. Stauzeiten
- Bessere Vereinbarung von Beruf und Familie
- Grössere Wahlfreiheit bei der Wohnortwahl
- Angenehmere Arbeitsweise im eigenen Umfeld

**Nachhaltigkeit und Kosten**
- Reduktion Fahrtkosten
- Reduktion Umweltbelastungen

### Fachliche Aussage
Mobiles Arbeiten bietet Arbeitnehmern Vorteile in vier Dimensionen: mehr Eigenverantwortung/Zeitsouveränität, höhere Leistung/Kreativität, bessere Lebensqualität sowie Nachhaltigkeit und Kostenersparnis.

### React-Vorschlag
`AdvantageGroupList` mit vier Kategorie-Karten (Titel + Bullets). Optional kategoriespezifische Akzentfarben aus den Modul-Tokens.

---

## Folie 21 - Arbeitsort: Mobiles Arbeiten – Vorteile Unternehmen

### In der MD vorhanden
Inhaltlich vollständig vorhanden (MD-Zeilen 323-337). Zwei fettgedruckte Themenüberschriften (Höhere Arbeitgeber-Attraktivität / Arbeitsmarktvorteile; Höhere Leistung und Produktivität) gliedern die Bullets.

### Fehlende visuelle Inhalte
Reine Text-/Aufzählungsfolie, keine Grafiken, Icons oder Tabellen. Quadratische Aufzählungszeichen unter zwei Überschriftsblöcken.

### Visuelle Rekonstruktion
Zwei Gruppenblöcke (Überschrift + Bullets):
- Höhere Arbeitgeber-Attraktivität / Arbeitsmarktvorteile
- Höhere Leistung und Produktivität

### Inhaltliche Rekonstruktion
**Höhere Arbeitgeber-Attraktivität / Arbeitsmarktvorteile**
- Erfüllung individueller Mitarbeiterwünsche, z.B. bessere Vereinbarkeit von Beruf und Familie (Imagegewinn)
- Erschliessung von Arbeitskraftreserven in (infrastrukturschwachen) peripheren Regionen
- Zusätzlicher Zugang zu qualifizierten, aber ggfs. mobilitätseingeschränkten Mitarbeitern

**Höhere Leistung und Produktivität**
- Verringerung von Fehlzeiten
- Grössere Produktivität und Kreativität
- Verminderung von Reisezeiten und Reisekosten (Fahrtkostenzuschüsse)
- Senkung der Kosten für Büroraum und Arbeitsplatz
- Erhöhung der Mitarbeitermotivation
- Neue Arbeitsplätze für Behinderte (Stichwort "Behindertenabgabe")

### Fachliche Aussage
Aus Unternehmenssicht steigert mobiles Arbeiten die Arbeitgeber-Attraktivität und erschliesst neue Arbeitskraftpotenziale sowie erhöht Leistung/Produktivität und senkt Kosten.

### React-Vorschlag
`AdvantageGroupList` (gleiche Komponente wie Folie 20) mit zwei Kategorie-Karten.

---

## Folie 22 - Arbeitsort: Mobiles Arbeiten – Nachteile

### In der MD vorhanden
Inhaltlich vollständig vorhanden (MD-Zeilen 341-350).

### Fehlende visuelle Inhalte
Reine Aufzählungsfolie ohne Grafiken, Icons oder Tabellen. Sechs Bullets mit quadratischen Aufzählungszeichen.

### Visuelle Rekonstruktion
Einfache Bulletliste (keine Untergruppen).

### Inhaltliche Rekonstruktion
- Möglicherweise negative Auswirkungen des häuslichen Arbeitsplatzes auf die konkrete Arbeit (z.B. Ablenkungen)
- Möglicherweise negative Auswirkungen der häuslichen Arbeit auf das Privatleben (z.B. nicht "abschalten können")
- Persönliche Eignung muss vorhanden sein (z.B. Selbstdisziplin, Selbstorganisation, Verschwiegenheit, …)
- Verringerter Informationsaustausch mit Vorgesetzten und Kollegen
- Soziale Isolierung
- Gefahr, zum "workaholic" zu werden

### Fachliche Aussage
Mobiles Arbeiten birgt Risiken: Ablenkung, fehlende Trennung von Beruf und Privatleben, hohe Anforderungen an Selbstdisziplin, weniger Austausch, soziale Isolierung und Überarbeitung.

### React-Vorschlag
`DrawbackList` als einfache Card mit Warnakzent (z.B. orange/pink Token) und Bulletliste.

---

## Folie 23 - Human Resources: Personalbeurteilung (Kapiteltitelfolie)

### In der MD vorhanden
Vorhanden (MD-Zeilen 353-355): "Human Resources", "Personalbeurteilung", "Prof. Dr. Stefan Lackner".

### Fehlende visuelle Inhalte
Titel-/Kapitelfolie. Oben links die Überschrift "Human Resources" (oben rechts das HBW-Logo). Darunter eine Bilderleiste aus vier nebeneinander gesetzten Fotos: (1) eine Hand hält eine Karte/Visitenkarte mit HBW-Logo, (2) lächelnde Frau (Vordergrund) mit unscharfer Personengruppe im Hintergrund, (3) Mann und Frau im Businessgespräch (lächelnde Frau im Vordergrund), (4) modernes Bürogebäude / Glasfassade mit unscharfem Auto im Vordergrund. Unter dem Bilderbanner folgen Kapitelüberschrift und Dozentenname; ganz unten eine dünne horizontale Trennlinie. Die Fotos sind dekorativ und tragen keinen fachlichen Informationsgehalt.

### Visuelle Rekonstruktion
Kapitel-Trennfolie: oben Modulüberschrift "Human Resources", darunter Bilderbanner (4 Fotos), darunter Kapitelüberschrift "Personalbeurteilung" und Dozentenname.

### Inhaltliche Rekonstruktion
Modul: Human Resources · Kapitel: Personalbeurteilung · Dozent: Prof. Dr. Stefan Lackner.

### Fachliche Aussage
Übergang/Kapitelstart zum Themenblock Personalbeurteilung.

### React-Vorschlag
`ChapterDivider` (Kapitelüberschrift + Dozent), Bilderbanner als dekorativer, optionaler Slot. Nicht als Lerninhalt zählen.

---

## Folie 24 - Personalbeurteilung: Definition

### In der MD vorhanden
Definitionstext und die drei weiteren Bezeichnungen sind vollständig vorhanden (MD-Zeilen 358-365).

### Fehlende visuelle Inhalte
Rechts auf der Folie ein schwarzes Piktogramm: Zwei stilisierte Personen sitzen sich an einem Tisch gegenüber (jeweils auf einem Stuhl, Tisch dazwischen) – Symbol für ein Beurteilungs-/Mitarbeitergespräch. Reines Icon, kein zusätzlicher fachlicher Inhalt.

### Visuelle Rekonstruktion
Zweispaltig: links Definition + Liste der weiteren Bezeichnungen, rechts Icon "zwei Personen am Gesprächstisch".

### Inhaltliche Rekonstruktion
**Definition:** Personalbeurteilungen sind alle institutionellen Verfahren und Systeme, die die Leistungsfähigkeit bzw. das Arbeits-, Führungs- und Sozialverhalten oder das Entwicklungspotenzial des Mitarbeiters beurteilen.

**Weitere Bezeichnungen:**
- Leistungsbeurteilung
- Mitarbeiterbeurteilung
- Dienstbeurteilung

### Fachliche Aussage
Personalbeurteilung umfasst alle institutionalisierten Verfahren zur Bewertung von Leistungsfähigkeit, Verhalten (Arbeits-, Führungs-, Sozialverhalten) und Entwicklungspotenzial der Mitarbeitenden.

### React-Vorschlag
`DefinitionCard` mit Synonym-Chips (Leistungs-/Mitarbeiter-/Dienstbeurteilung) und dekorativem Gesprächs-Icon.

---

## Folie 25 - Beurteilungen: Differenzierungen

### In der MD vorhanden
Alle fünf Beurteilungsformen mit ihren Bullets sind vollständig vorhanden (MD-Zeilen 368-387).

### Fehlende visuelle Inhalte
Rechts ein schwarzes Netzwerk-/Knoten-Icon: mehrere Kreise (Knoten) unterschiedlicher Grösse, durch Linien zu einem geschlossenen, polygonalen Netz verbunden (Molekül-/Graph-artig, ca. sechs Knoten). Symbolisiert die Vernetzung mehrerer Beurteilungsperspektiven/Beteiligter. Reines Symbol, kein eigener Dateninhalt.

### Visuelle Rekonstruktion
Linke Spalte: fünf Überschriftsblöcke mit Bullets; rechte Spalte: dekoratives Netzwerk-Icon.

### Inhaltliche Rekonstruktion
| Beurteilungsform | Merkmale |
|---|---|
| Mitarbeiterbeurteilung | Typische Form; Vorgesetzte beurteilen direkt unterstellte Mitarbeiter |
| Gleichgestelltenbeurteilung | Spezifische Variante; hierarchisch gleiche Ebene, gleiche organisatorische Einheit; Ziel: Kenntnisse der Kollegen nutzen |
| Vorgesetztenbeurteilung | Mitarbeiter beurteilen ihren Vorgesetzten; Führungsverhalten, Qualifikation, vorgegebene Kriterien |
| Selbstbeurteilung | Gewinnt zunehmend an Bedeutung; Förderung von Entwicklungsprozessen, Erhöhung der Akzeptanz von anderen Beurteilungen |
| 360°-Feedback | Umfassendste und aufwendigste Form; Vorgesetzte, Kollegen, Mitarbeiter und Kunden beurteilen das Leistungsverhalten |

### Fachliche Aussage
Beurteilungen lassen sich nach der Beurteiler-Perspektive differenzieren – von der klassischen Mitarbeiterbeurteilung über Gleichgestellten-, Vorgesetzten- und Selbstbeurteilung bis zum umfassenden 360°-Feedback.

### React-Vorschlag
`AppraisalTypeList` (fünf Karten, Titel + Bullets), dekoratives Netzwerk-Icon optional. Hervorhebung des 360°-Feedbacks als Überleitung zu den Folgefolien.

---

## Folie 26 - 360-Grad-Feedback: Differenzierungen (Kennzahlen)

### In der MD problematisch/fehlend
In der MD nur als zerbrochene Tabelle/Textfragmente vorhanden (MD-Zeilen 392-398): "72%", "3×", "85%" und Textbruchstücke sind durcheinander. Die Zuordnung Zahl-zu-Aussage geht verloren.

### Fehlende visuelle Inhalte
Drei nebeneinanderstehende Kennzahlen-Karten ("Stat-Cards"), jede mit farbiger Oberkante und passendem hellen Hintergrund-Block hinter der Grosszahl:
- Karte 1: violette Oberkante, hellvioletter Block; Grosszahl "72%" (violette Schrift)
- Karte 2: grüne Oberkante, hellgrüner Block; Grosszahl "3×" (grüne Schrift)
- Karte 3: orange/goldene Oberkante, hell-oranger Block; Grosszahl "85%" (orange Schrift)
Darunter jeweils erklärender Text in Schwarz.

### Visuelle Rekonstruktion
```
[─violett─]   [─grün─]    [─orange─]
|  72%   |   |  3×   |   |  85%   |
| Text   |   | Text  |   | Text   |
```

### Inhaltliche Rekonstruktion
| Kennzahl | Aussage (Folientext) |
|---|---|
| 72% | der Führungskräfte überschätzen ihre eigene Wirkung auf andere (Selbst- vs. Fremdbild) |
| 3× | höhere Entwicklungswirkung im Vergleich zu klassischen Jahresgesprächen |
| 85% | der Teilnehmenden berichten messbare Verhaltensänderungen nach 360°-Feedback |

### Fachliche Aussage
Kennzahlen belegen Nutzen und Notwendigkeit des 360°-Feedbacks: grosse Diskrepanz zwischen Selbst- und Fremdbild, deutlich höhere Entwicklungswirkung als Jahresgespräche, hohe Quote messbarer Verhaltensänderungen. (Die Zahlen sind plakative Lehr-Kennzahlen ohne Quellenangabe auf der Folie.)

### React-Vorschlag
`StatCardRow` mit drei `StatCard` (Akzentfarbe violett/grün/orange, Grosszahl, Beschreibungstext). Die kaputte MD-Tabelle nicht übernehmen.

---

## Folie 27 - 360-Grad-Feedback: Prinzip – Rundum-Perspektive

### In der MD problematisch/fehlend
In der MD als zerbrochene Tabelle mit verstreuten Begriffen vorhanden (MD-Zeilen 403-416). Die räumliche Anordnung um den zentralen "Feedback-Empfänger:in" und die Zuordnung der Untertitel gehen verloren.

### Fehlende visuelle Inhalte
Schaubild mit farbig umrandeten/gefüllten Boxen, gruppiert um eine zentrale dunkelblaue Box "Feedback-Empfänger:in" (weisse Schrift):
- Linke Spalte: Box "Selbstbild" (graublau gefüllt) mit Untertitel "Eigene Einschätzung"; darunter Box "Peers / Kolleg:innen" (orange umrandet, beige gefüllt, orange Titel) mit Untertitel "Zusammenarbeit".
- Mittlere Spalte (vertikal gestapelt): Box "Vorgesetzte" (hellviolett gefüllt, violetter Titel) mit Untertitel "Führungsperspektive"; mittig die dunkelblaue Box "Feedback-Empfänger:in"; darunter Box "Mitarbeitende" (hellgrün gefüllt, grüner Titel) mit Untertitel "Führungsverhalten".
- Rechte Spalte: Box "Externe Kund:innen" (rotbraun umrandet, sehr heller Hintergrund, rotbrauner Titel) mit Untertitel "Aussenwirkung"; darunter Box "Interne Kund:innen" (rotbraun umrandet, heller rosa Hintergrund, rotbrauner Titel) mit Untertitel "Innenwirkung".
- Ganz unten eine breite dunkelblaue Leiste mit weisser Schrift: "360° = Selbstbild + Fremdbild aus mehreren Perspektiven → blinde Flecken sichtbar machen".

### Visuelle Rekonstruktion
```
Selbstbild        Vorgesetzte         Externe Kund:innen
(Eigene Einsch.)  (Führungsperspekt.) (Aussenwirkung)

Peers/Kolleg:innen   [FEEDBACK-        Interne Kund:innen
(Zusammenarbeit)      EMPFÄNGER:IN]    (Innenwirkung)

                     Mitarbeitende
                     (Führungsverhalten)

[ 360° = Selbstbild + Fremdbild aus mehreren Perspektiven → blinde Flecken sichtbar machen ]
```

### Inhaltliche Rekonstruktion
| Perspektive | Untertitel |
|---|---|
| Selbstbild | Eigene Einschätzung |
| Vorgesetzte | Führungsperspektive |
| Peers / Kolleg:innen | Zusammenarbeit |
| Mitarbeitende | Führungsverhalten |
| Externe Kund:innen | Aussenwirkung |
| Interne Kund:innen | Innenwirkung |

Kernsatz (untere Leiste): 360° = Selbstbild + Fremdbild aus mehreren Perspektiven → blinde Flecken sichtbar machen.

### Fachliche Aussage
Beim 360°-Feedback wird der Feedback-Empfänger aus allen Richtungen beurteilt (Selbstbild plus Fremdbild von Vorgesetzten, Mitarbeitenden, Kolleg:innen sowie internen und externen Kunden), um blinde Flecken sichtbar zu machen.

### React-Vorschlag
`FeedbackPerspectiveDiagram`: zentraler Empfänger-Knoten, sechs umliegende Perspektiven-Karten mit Akzentfarben und Untertitel, abschliessende Highlight-Leiste mit dem Kernsatz.

---

## Folie 28 - 360-Grad-Feedback: Prozess

### In der MD problematisch/fehlend
In der MD als zerbrochene Tabelle (MD-Zeilen 421-430). Die fünf nummerierten Schritte und ihre Detailtexte sind vorhanden, aber als Tabelle zerfasert; Zuordnung Detailtext-zu-Schritt teils unklar.

### Fehlende visuelle Inhalte
Horizontale 5-Schritt-Prozesskette: fünf farbig gefüllte Kopf-Boxen (mit grosser weisser Ziffer 1-5 und weissem Schritttitel) entlang einer dünnen waagerechten Verbindungslinie; unter jeder Kopf-Box eine hohe weisse Karte mit Detailtext in Schwarz. Farben der Kopf-Boxen: 1 = violett, 2 = grün, 3 = orange/gold, 4 = rotbraun, 5 = violett. Unter den Karten eine zentrierte Fusszeile: "Gesamtdauer typisch: 6–10 Wochen · Vertraulichkeit ist Voraussetzung für Akzeptanz".

### Visuelle Rekonstruktion
```
1 ── 2 ── 3 ── 4 ── 5
[violett][grün][orange][rotbraun][violett]
Vorbereitung  Befragung    Auswertung  Feedback-   Entwicklungs-
& Design      durchführen  & Bericht   gespräch    maßnahmen
  ↓              ↓             ↓            ↓             ↓
(Detailkarten)
„Gesamtdauer typisch: 6–10 Wochen · Vertraulichkeit ist Voraussetzung für Akzeptanz"
```

### Inhaltliche Rekonstruktion
| # | Schritt | Detail |
|---|---|---|
| 1 | Vorbereitung & Design | Ziele klären, Geberkreis definieren, Fragebogen gestalten |
| 2 | Befragung durchführen | Online-Erhebung, Anonymität sichern, Rücklauf sicherstellen |
| 3 | Auswertung & Bericht | Auswertung je Gruppe, Selbst-/Fremdbild-Vergleich visualisieren |
| 4 | Feedbackgespräch | Ergebnisse im Coaching-Gespräch reflektieren |
| 5 | Entwicklungsmaßnahmen | Konkrete Ziele ableiten und verankern |

Fusszeile: Gesamtdauer typisch 6–10 Wochen · Vertraulichkeit ist Voraussetzung für Akzeptanz.

### Fachliche Aussage
Das 360°-Feedback durchläuft fünf Phasen von der Vorbereitung über Befragung, Auswertung und Feedbackgespräch bis zu Entwicklungsmassnahmen; es dauert typischerweise 6–10 Wochen und setzt Vertraulichkeit voraus.

### React-Vorschlag
`ProcessStepFlow` (5 nummerierte, farbcodierte Schritt-Karten mit Titel + Detail) plus `FootnoteBar` mit Dauer- und Vertraulichkeitshinweis. Kaputte MD-Tabelle nicht übernehmen.

---

## Folie 29 - 360-Grad-Feedback: Feedback-Dimensionen

### In der MD problematisch/fehlend
In der MD als kontinuierlicher Fliesstext ohne Spaltenstruktur vorhanden (MD-Zeilen 435-443). Die Zuordnung der Aussagen zu den sechs Dimensionen geht teilweise verloren.

### Fehlende visuelle Inhalte
Sechs Karten in einem 3×2-Raster, jede mit farbigem linken Rand-Balken und farbigem Titel; darüber eine dünne hellviolette Querlinie:
- Reihe 1: "Führung & Orientierung" (violett), "Kommunikation" (grün), "Zusammenarbeit & Team" (orange/gold)
- Reihe 2: "Ergebnisorientierung" (rotbraun), "Entwicklung & Lernen" (violett), "Strategie & Innovation" (grün)
Darunter jeweils drei Beschreibungszeilen in Schwarz (jede Dimension hat genau drei Aussagen).

### Visuelle Rekonstruktion
```
[Führung & Orient.]  [Kommunikation]    [Zusammenarbeit & Team]
[Ergebnisorient.]    [Entwicklung &     [Strategie & Innovation]
                      Lernen]
```

### Inhaltliche Rekonstruktion
| Dimension | Aussagen |
|---|---|
| Führung & Orientierung | Gibt klare Richtung und Ziele vor; Trifft Entscheidungen auch unter Unsicherheit; Ist Vorbild für Werte und Kultur |
| Kommunikation | Hört aktiv zu und fragt nach; Formuliert klar und verständlich; Gibt konstruktives Feedback |
| Zusammenarbeit & Team | Fördert Kooperation im Team; Geht konstruktiv mit Konflikten um; Erkennt und nutzt Stärken anderer |
| Ergebnisorientierung | Priorisiert konsequent; Hält Vereinbarungen zuverlässig ein; Treibt Themen mit Energie voran |
| Entwicklung & Lernen | Reflektiert eigenes Verhalten; Fördert Wachstum im Team; Ist offen für Veränderung |
| Strategie & Innovation | Denkt über den eigenen Bereich hinaus; Erkennt Chancen und gestaltet aktiv; Verbindet Gegenwart mit Zukunft |

### Fachliche Aussage
Ein 360°-Feedback bewertet das Verhalten in sechs Kompetenzdimensionen – von Führung und Kommunikation über Zusammenarbeit und Ergebnisorientierung bis zu Entwicklung/Lernen und Strategie/Innovation.

### React-Vorschlag
`DimensionGrid` (3×2) mit `DimensionCard` (farbiger Rand-Akzent, Titel, Aussagen-Bullets). Sechs Dimensionen als strukturierte Daten, nicht als Fliesstext.

---

## Folie 30 - 360-Grad-Feedback: Selbstbild vs. Fremdbild

### In der MD problematisch/fehlend
Stark zerbrochen (MD-Zeilen 448-471): Zahlenwerte (4.5, 4.3, 4.2, 4.0, 3.8, 3.6, 3.4, 3.1) liegen verstreut, die Kategorienamen sind in eine kaputte Tabelle zerfallen ("Kommunikatio"/"n"), und die Diagrammlogik (gruppiertes Balkendiagramm) fehlt vollständig.

### Fehlende visuelle Inhalte
Links ein gruppiertes Säulendiagramm mit Titel "Beispiel: Kompetenzprofil" (grüne Überschrift) und Legende: violette Säulen = "Selbstbild", grüne Säulen = "Fremdbild". Fünf Kategorien auf der X-Achse (Kommunikation, Führung, Teamarbeit, Ergebnis-orientierung, Entwicklung), je zwei Säulen mit über jeder Säule stehendem Zahlenwert. Die Zahlenwerte sind direkt am Diagramm als Beschriftung aufgedruckt (also vom Folienautor gesetzt, nicht geschätzt). Keine sichtbare nummerische Y-Achsenskala; die Werte liegen im Bereich ~3.1–4.5 (Skala faktisch 1–5).
Rechts ein Block "Muster interpretieren" mit vier farbig umrandeten/hinterlegten Karten (Titel farbig):
- "Blinder Fleck" (rotbraun)
- "Verborgene Stärke" (grün)
- "Konsistente Stärke" (violett)
- "Entwicklungsfeld" (orange)

### Visuelle Rekonstruktion
```
Kompetenzprofil (Selbstbild=violett | Fremdbild=grün)

Kommunikation       4.2 / 3.4
Führung             3.8 / 3.1
Teamarbeit          4.5 / 4.2
Ergebnisorientierung4.0 / 4.3
Entwicklung         3.6 / 4.0

Muster:
[Blinder Fleck] Selbst hoch bewertet, Fremd niedrig → unbekannte Wirkung
[Verborgene Stärke] Selbst niedrig, Fremd hoch → unterschätztes Potenzial
[Konsistente Stärke] Beide hoch bewertet → stabiles Kompetenzfeld
[Entwicklungsfeld] Beide niedrig bewertet → klarer Handlungsbedarf
```

### Inhaltliche Rekonstruktion
Kompetenzprofil (Werte sind als Datenbeschriftung auf der Folie aufgedruckt):

| Kompetenz | Selbstbild | Fremdbild |
|---|---|---|
| Kommunikation | 4.2 | 3.4 |
| Führung | 3.8 | 3.1 |
| Teamarbeit | 4.5 | 4.2 |
| Ergebnisorientierung | 4.0 | 4.3 |
| Entwicklung | 3.6 | 4.0 |

Muster interpretieren:

| Muster | Konstellation | Bedeutung |
|---|---|---|
| Blinder Fleck | Selbst hoch bewertet, Fremd niedrig | unbekannte Wirkung |
| Verborgene Stärke | Selbst niedrig, Fremd hoch | unterschätztes Potenzial |
| Konsistente Stärke | Beide hoch bewertet | stabiles Kompetenzfeld |
| Entwicklungsfeld | Beide niedrig bewertet | klarer Handlungsbedarf |

### Fachliche Aussage
Der Vergleich von Selbst- und Fremdbild im 360°-Feedback erzeugt vier interpretierbare Muster (blinder Fleck, verborgene Stärke, konsistente Stärke, Entwicklungsfeld), aus denen sich der individuelle Entwicklungsbedarf ableiten lässt.

### React-Vorschlag
`SelfVsExternalChart` (gruppiertes Balkendiagramm, zwei Serien Selbst-/Fremdbild) neben `PatternLegend` (vier farbcodierte Muster-Karten). Werte als Beispieldaten ("Beispiel: Kompetenzprofil") kennzeichnen; die konkreten Werte exakt von der Folie übernehmen, nicht selbst schätzen.

---

## Folie 31 - 360-Grad-Feedback: Erfolgsfaktoren und Fehler

### In der MD problematisch/fehlend
Inhaltlich vorhanden, aber als Fliesstext ohne klare Paar-Zuordnung (MD-Zeilen 476-496). Die Häkchen/Kreuz-Symbolik (✓/✕) und die Gegenüberstellung Erfolgsfaktor ↔ Fehler sind nur fragmentarisch übertragen.

### Fehlende visuelle Inhalte
Zwei Spalten:
- Linke Spalte "Was es zum Erfolg braucht" (grüne Überschrift): fünf Einträge, je mit grünem Kreis-Häkchen (✓), schwarzem fettem Titel und grauer Erläuterung.
- Rechte Spalte "Häufige Fehler vermeiden" (rotbraune Überschrift): fünf Einträge, je mit rotbraunem Kreis-Kreuz (✕), rotbraunem fettem Titel und grauer Erläuterung.
Die Zeilen stehen paarweise auf gleicher Höhe (Erfolgsfaktor links ↔ Fehler rechts). In den Erläuterungen werden Gedankenstriche als lange Striche (—) gesetzt.

### Visuelle Rekonstruktion
```
Was es zum Erfolg braucht        | Häufige Fehler vermeiden
✓ Freiwilligkeit & Vertrauen     | ✕ 360° als Beurteilung nutzen
✓ Klarer Entwicklungsfokus       | ✕ Zu viele Geber:innen
✓ Professionelle Begleitung      | ✕ Ergebnisse ohne Begleitung
✓ Führung als Vorbild            | ✕ Einmaliges Ereignis
✓ Folgemaßnahmen verankern       | ✕ Fragebogen zu lang
```

### Inhaltliche Rekonstruktion
| ✓ Erfolgsfaktor | Erläuterung | ✕ Fehler | Erläuterung |
|---|---|---|---|
| Freiwilligkeit & Vertrauen | 360° wirkt nur, wenn Teilnahme freiwillig und Anonymität garantiert ist | 360° als Beurteilung nutzen | Sofort Vertrauen zerstört — Instrument nie mit Gehalts- oder Beförderungsentscheidungen verknüpfen |
| Klarer Entwicklungsfokus | Feedback ist kein Beurteilungsinstrument — Ziel ist Wachstum, nicht Bewertung | Zu viele Geber:innen | Mehr als 8–10 Personen erhöhen Aufwand ohne Mehrwert — Qualität vor Quantität |
| Professionelle Begleitung | Ergebnisse immer in einem Coaching-Gespräch reflektieren, nicht allein lassen | Ergebnisse ohne Begleitung | Rohdaten ohne Kontext können verwirren oder demotivieren — immer moderieren |
| Führung als Vorbild | Wirkung steigt, wenn Führungskräfte zuerst teilnehmen und offen damit umgehen | Einmaliges Ereignis | Ohne Wiederholung (mind. alle 2 Jahre) kein Entwicklungstrend erkennbar |
| Folgemaßnahmen verankern | Ohne konkrete Ziele und Review verpufft das Feedback nach wenigen Wochen | Fragebogen zu lang | Mehr als 40–50 Fragen senken Qualität der Antworten deutlich |

### Fachliche Aussage
Erfolgreiches 360°-Feedback erfordert Freiwilligkeit, Entwicklungsfokus, professionelle Begleitung, Vorbildfunktion der Führung und verankerte Folgemassnahmen; typische Fehler sind die Nutzung als Beurteilung, zu viele Geber, fehlende Begleitung, Einmaligkeit und zu lange Fragebögen.

### React-Vorschlag
`SuccessVsPitfallTable` mit zwei Spalten (✓-Karten grün / ✕-Karten rotbraun), paarweise zeilenweise gegenübergestellt; Kreis-Icons für Haken und Kreuz.

---

## Folie 32 - 360-Grad-Feedback: Vorgehensweise / Implementierung

### In der MD vorhanden
Die vier nummerierten Schritte mit Erläuterungen sind vorhanden (MD-Zeilen 500-512). Die nummerierte Struktur (01-04) ist erkennbar, jedoch ohne visuelles Trennlinien-Layout.

### Fehlende visuelle Inhalte
Vertikale Schrittliste: links grosse graue/schwarze Ziffern "01"–"04", rechts daneben schwarzer fetter Titel und Erläuterungstext; unter jedem Schritt (zwischen den Schritten) eine dunkelblaue horizontale Trennlinie. Keine Farbcodierung der Inhalte (rein typografisch).

### Visuelle Rekonstruktion
```
01 | Ziele und Zielgruppe klären   → Erläuterung
─────────────────────────────────
02 | Fragebogen und Prozess designen → Erläuterung
─────────────────────────────────
03 | Pilot durchführen & auswerten → Erläuterung
─────────────────────────────────
04 | Evaluieren & in den Rhythmus bringen → Erläuterung
```

### Inhaltliche Rekonstruktion
| # | Schritt | Erläuterung |
|---|---|---|
| 01 | Ziele und Zielgruppe klären | Für wen gilt 360° zuerst? Führungskräfte, alle, Pilotabteilung? Welches Ziel: Entwicklung, Kulturwandel, Teamentwicklung? |
| 02 | Fragebogen und Prozess designen | Dimensionen und Fragen gemeinsam entwickeln, Anonymitätskonzept festlegen, technisches Tool auswählen. |
| 03 | Pilot durchführen & auswerten | Erste Runde mit Pilotgruppe, Ergebnisse im Coaching-Gespräch begleiten, Feedback zur Methode einholen. |
| 04 | Evaluieren & in den Rhythmus bringen | Wirkung messen, Anpassungen vornehmen und 360° als festes Instrument im Entwicklungsprozess verankern. |

### Fachliche Aussage
Die Einführung des 360°-Feedbacks erfolgt schrittweise: Ziele/Zielgruppe klären, Fragebogen und Prozess designen, einen Piloten durchführen und auswerten, dann evaluieren und das Instrument dauerhaft verankern.

### React-Vorschlag
`NumberedStepList` (grosse Ziffer, Titel, Erläuterung, Trennlinien) als vertikale Implementierungs-Roadmap.

---

## Folie 33 - 360-Grad-Feedback: Fragebogen – Beispiele (Führung & Kommunikation)

### In der MD problematisch/fehlend
In der MD nur als Titel + Copyright vorhanden (MD-Zeilen 518-520: "Fragebogen – Beispiele"). Der gesamte Folieninhalt (Beispielfragen) fehlt, da er als Bild eingebettet ist.

### Fehlende visuelle Inhalte
Zwei nebeneinander dargestellte Fragebogen-Karten (Screenshot-Optik eines Online-Fragebogens, hell-beiger Hintergrund). Jede Karte hat oben einen farbigen Punkt + Dimensionsname + Kurzbeschreibung (Unterzeile) und darunter fünf Items, jeweils mit einer 5-Punkte-Skala (fünf kreisförmige Radio-Buttons mit Ziffern 1-5; Skalenenden beschriftet "trifft nie zu" links / "trifft immer zu" rechts). Unter der fünften Frage der linken Karte ein Pfeil nach unten (Hinweis auf weitere Items).
- Linke Karte: violetter Punkt, "Führung" – Unterzeile "Richtung geben · Entscheiden · Vorbild sein".
- Rechte Karte: grüner Punkt, "Kommunikation" – Unterzeile "Zuhören · Klar ausdrücken · Feedback geben".

### Visuelle Rekonstruktion
```
● Führung                         ● Kommunikation
Richtung geben·Entscheiden·...     Zuhören·Klar ausdrücken·...
1. ...     (1)(2)(3)(4)(5)         1. ...     (1)(2)(3)(4)(5)
nie zu              immer zu       nie zu              immer zu
...
```

### Inhaltliche Rekonstruktion
**Führung** (Richtung geben · Entscheiden · Vorbild sein):
1. Gibt klare Richtung und vermittelt nachvollziehbare Ziele.
2. Trifft auch unter Unsicherheit oder Zeitdruck Entscheidungen.
3. Handelt konsistent mit den Werten und der Kultur des Unternehmens.
4. Übernimmt Verantwortung – auch wenn etwas nicht funktioniert hat.
5. Schafft ein Umfeld, in dem das Team sich sicher fühlt, Ideen einzubringen.

**Kommunikation** (Zuhören · Klar ausdrücken · Feedback geben):
1. Hört aktiv zu und lässt andere ausreden.
2. Kommuniziert klar, verständlich und ohne unnötige Komplexität.
3. Gibt konstruktives Feedback – konkret, zeitnah und respektvoll.
4. Passt Kommunikationsstil situativ an die Gesprächspartner:in an.
5. Teilt relevante Informationen offen und proaktiv mit dem Team.

(Skala je Item: 1 = "trifft nie zu" … 5 = "trifft immer zu". Die Item-Texte sind im Rendering lesbar und entsprechen dem Wortlaut der Folie; es sind keine Antwortkreuze gesetzt – nur leere Skalen.)

### Fachliche Aussage
Beispielhafte 360°-Fragebogen-Items zeigen, wie die Dimensionen Führung und Kommunikation mit je fünf verhaltensnahen Aussagen und einer 5-stufigen Zustimmungsskala operationalisiert werden.

### React-Vorschlag
`QuestionnaireExampleCard` (Dimensions-Header mit Farbpunkt + Kurzbeschreibung, Liste von Items mit 5-Punkte-`LikertScale` "trifft nie zu" – "trifft immer zu"). Zwei Karten nebeneinander.

---

## Folie 34 - 360-Grad-Feedback: Fragebogen – Beispiele (Zusammenarbeit & Ergebnisorientierung)

### In der MD problematisch/fehlend
In der MD nur als Titel + Copyright vorhanden (MD-Zeilen 522-524: "Fragebogen – Beispiele"). Die konkreten Fragen fehlen (als Bild eingebettet).

### Fehlende visuelle Inhalte
Gleiches Layout wie Folie 33: zwei Fragebogen-Karten nebeneinander, je fünf Items mit 5-Punkte-Skala ("trifft nie zu" / "trifft immer zu") und Pfeil nach unten unter der fünften Frage der linken Karte.
- Linke Karte: oranger/goldener Punkt, "Zusammenarbeit" – Unterzeile "Kooperation · Konflikte · Stärken anderer nutzen".
- Rechte Karte: rotbrauner Punkt, "Ergebnisorientierung" – Unterzeile "Priorisieren · Liefern · Qualität sichern".

### Visuelle Rekonstruktion
```
● Zusammenarbeit                  ● Ergebnisorientierung
Kooperation·Konflikte·...          Priorisieren·Liefern·...
1. ...     (1)(2)(3)(4)(5)         1. ...     (1)(2)(3)(4)(5)
nie zu              immer zu       nie zu              immer zu
...
```

### Inhaltliche Rekonstruktion
**Zusammenarbeit** (Kooperation · Konflikte · Stärken anderer nutzen):
1. Fördert aktiv die Zusammenarbeit im und über das eigene Team hinaus.
2. Geht konstruktiv und lösungsorientiert mit Konflikten um.
3. Erkennt die Stärken anderer und setzt sie gezielt ein.
4. Ist verlässlich – hält Zusagen und Deadlines ein.
5. Unterstützt andere, auch wenn es nicht der eigenen Agenda dient.

**Ergebnisorientierung** (Priorisieren · Liefern · Qualität sichern):
1. Priorisiert konsequent das Wichtigste – auch wenn viel gleichzeitig ansteht.
2. Treibt Themen mit Energie und Ausdauer voran.
3. Hält Qualität hoch, ohne sich in Details zu verlieren.
4. Erkennt Hindernisse frühzeitig und findet pragmatische Lösungen.
5. Liefert Ergebnisse zuverlässig – auch unter schwierigen Bedingungen.

(Skala je Item: 1 = "trifft nie zu" … 5 = "trifft immer zu". Item-Texte aus dem Rendering lesbar; keine Antworten markiert.)

### Fachliche Aussage
Beispiel-Items operationalisieren die Dimensionen Zusammenarbeit und Ergebnisorientierung mit je fünf verhaltensnahen Aussagen auf einer 5-stufigen Zustimmungsskala.

### React-Vorschlag
`QuestionnaireExampleCard` (gleiche Komponente wie Folie 33) mit den Dimensionen Zusammenarbeit (orange) und Ergebnisorientierung (rotbraun).

---

## Folie 35 - 360-Grad-Feedback: Fragebogen – Beispiele (Entwicklung & Lernen, Strategie & Weitblick)

### In der MD problematisch/fehlend
In der MD nicht enthalten (die MD endet auf Zeile 524 mit der dritten "Fragebogen – Beispiele"-Folie). Diese Folie ist als Bild/Screenshot eingebettet und textlich nicht extrahiert.

### Fehlende visuelle Inhalte
Gleiches Layout wie Folien 33/34: zwei Fragebogen-Karten nebeneinander, je fünf Items mit 5-Punkte-Skala ("trifft nie zu" / "trifft immer zu") und Pfeil nach unten unter der fünften Frage der linken Karte.
- Linke Karte: violetter/blauer Punkt, "Entwicklung & Lernen" – Unterzeile "Selbstreflexion · Wachstum · Feedback annehmen".
- Rechte Karte: grüner Punkt, "Strategie & Weitblick" – Unterzeile "Gesamtbild · Innovation · Zukunft gestalten".

### Visuelle Rekonstruktion
```
● Entwicklung & Lernen            ● Strategie & Weitblick
Selbstreflexion·Wachstum·...       Gesamtbild·Innovation·...
1. ...     (1)(2)(3)(4)(5)         1. ...     (1)(2)(3)(4)(5)
nie zu              immer zu       nie zu              immer zu
...
```

### Inhaltliche Rekonstruktion
**Entwicklung & Lernen** (Selbstreflexion · Wachstum · Feedback annehmen):
1. Reflektiert das eigene Verhalten und zieht daraus Konsequenzen.
2. Ist offen für Feedback und nimmt es ohne Abwehr an.
3. Fördert die Weiterentwicklung der Mitarbeitenden aktiv.
4. Zeigt echte Neugierde und Lernbereitschaft.
5. Ist bereit, gewohnte Vorgehensweisen zu hinterfragen und zu verändern.

**Strategie & Weitblick** (Gesamtbild · Innovation · Zukunft gestalten):
1. Denkt über den eigenen Verantwortungsbereich hinaus.
2. Verbindet operative Entscheidungen mit strategischen Zielen.
3. Erkennt Chancen und Trends frühzeitig.
4. Gestaltet Veränderungen aktiv mit, statt sie abzuwarten.
5. Bringt neue Ideen ein und fördert Innovationskultur im Team.

(Skala je Item: 1 = "trifft nie zu" … 5 = "trifft immer zu". Item-Texte aus dem Rendering lesbar; keine Antworten markiert.)

### Fachliche Aussage
Beispiel-Items operationalisieren die Dimensionen Entwicklung & Lernen sowie Strategie & Weitblick mit je fünf verhaltensnahen Aussagen auf einer 5-stufigen Zustimmungsskala und vervollständigen damit die sechs Feedback-Dimensionen.

### React-Vorschlag
`QuestionnaireExampleCard` (gleiche Komponente wie Folien 33/34) mit den Dimensionen Entwicklung & Lernen (violett) und Strategie & Weitblick (grün).

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folien 1-6: Übersichtsschaubild der 5 klassischen Formen mit wechselndem aktivem Begriff + Definitions-Callout
2. Folie 7: Tiefe-Breite-Portfolio (Quadrant mit positionierten Blasen)
3. Folie 12: Gleitzeit-Zeitleiste 7-19 Uhr mit Kern-/Gleitzeit-Segmenten
4. Folie 26: drei 360°-Kennzahlen-Karten (72% / 3× / 85%)
5. Folie 27: Rundum-Perspektive-Schaubild um den Feedback-Empfänger
6. Folie 28: 5-Schritt-Prozesskette mit Detailkarten und Fusszeile
7. Folie 29: 3×2-Raster der sechs Feedback-Dimensionen
8. Folie 30: gruppiertes Säulendiagramm Selbst-/Fremdbild + vier Muster-Karten
9. Folie 31: Erfolgsfaktoren ↔ Fehler paarweise gegenübergestellt
10. Folien 33-35: Fragebogen-Beispiele mit 5-Punkte-Likert-Skala

## Kann vereinfacht werden

- Folie 32: Implementierungs-Roadmap 01-04 als rein typografische NumberedStepList
- Icons auf Folien 24 (Gesprächs-Piktogramm) und 25 (Netzwerk-Icon) als einfache SVG-Komponenten oder dekorativer Slot
- Fotos auf Folien 18, 19, 23 als optionale Illustrations-Slots
- Folien 8-11, 13-17, 20-22 als strukturierte Definitions-/Aufzählungs-Cards (keine Grafiken verloren)

## Nicht fachlich relevant

- HBW-Logo
- graue Kopf-/Footerleiste
- Copyright-Zeile (inkl. abweichende Jahreszahl © 2025 auf Folie 3 und doppelter Footer © 2023/© 2026 auf Folie 18)
- Bilderbanner der Kapitel-Titelfolie (Folie 23)
- exakte Folienpositionierung und dekorative Bildästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich auf den Folien vorhandenen Inhalten):

```js
export const klassischeFormen = [
  {
    key: 'job-rotation',
    title: 'Job Rotation',
    definition: 'Regelmäßiger, systematischer und planmäßiger Wechsel von Arbeitsplätzen und Arbeitsaufgaben der Beschäftigten untereinander. Fokus: Verringerung von Monotonie und einseitiger Belastung, Weiterentwicklung und Qualifikation.',
  },
  {
    key: 'job-enlargement',
    title: 'Job Enlargement',
    definition: 'Verminderung des Grades der Arbeitsteilung; mehrere Arbeitsprozesse verschiedener Arbeitsplätze werden an einem Arbeitsplatz zusammengefasst. Mehr Arbeitsinhalt, Vielfalt und Sinnzusammenhang.',
  },
  {
    key: 'job-enrichment',
    title: 'Job Enrichment',
    definition: 'Erweiterung des Entscheidungs- und Kontrollspielraums; Planung, Ausführung und Kontrolle werden zusammengelegt. Eigenverantwortung, Anforderungen und Verantwortung steigen.',
  },
  {
    key: 'teilautonome-arbeitsgruppen',
    title: 'Teilautonome Arbeitsgruppen',
    definition: 'Gruppe von 3 bis ca. 10 Personen (Tavistock-Institut; Volvo Kalmar), die eine Gesamtaufgabe eigenverantwortlich ausführt (Planung, Ausführung, Kontrolle).',
  },
  {
    key: 'qualitaetszirkel',
    title: 'Qualitätszirkel',
    definition: 'Freiwillige Gruppen von 6 bis 12 Beschäftigten, die regelmäßig arbeitsplatznahe Qualitätsprobleme lösen; Gruppe bestimmt einen Moderator.',
  },
]

export const feedbackDimensionen = [
  { dimension: 'Führung & Orientierung', aussagen: ['Gibt klare Richtung und Ziele vor', 'Trifft Entscheidungen auch unter Unsicherheit', 'Ist Vorbild für Werte und Kultur'] },
  { dimension: 'Kommunikation', aussagen: ['Hört aktiv zu und fragt nach', 'Formuliert klar und verständlich', 'Gibt konstruktives Feedback'] },
  { dimension: 'Zusammenarbeit & Team', aussagen: ['Fördert Kooperation im Team', 'Geht konstruktiv mit Konflikten um', 'Erkennt und nutzt Stärken anderer'] },
  { dimension: 'Ergebnisorientierung', aussagen: ['Priorisiert konsequent', 'Hält Vereinbarungen zuverlässig ein', 'Treibt Themen mit Energie voran'] },
  { dimension: 'Entwicklung & Lernen', aussagen: ['Reflektiert eigenes Verhalten', 'Fördert Wachstum im Team', 'Ist offen für Veränderung'] },
  { dimension: 'Strategie & Innovation', aussagen: ['Denkt über den eigenen Bereich hinaus', 'Erkennt Chancen und gestaltet aktiv', 'Verbindet Gegenwart mit Zukunft'] },
]
```

```js
// Folie 30: Beispiel-Kompetenzprofil (Werte exakt von der Folie, als Beispieldaten kennzeichnen)
export const kompetenzprofilBeispiel = [
  { kompetenz: 'Kommunikation', selbstbild: 4.2, fremdbild: 3.4 },
  { kompetenz: 'Führung', selbstbild: 3.8, fremdbild: 3.1 },
  { kompetenz: 'Teamarbeit', selbstbild: 4.5, fremdbild: 4.2 },
  { kompetenz: 'Ergebnisorientierung', selbstbild: 4.0, fremdbild: 4.3 },
  { kompetenz: 'Entwicklung', selbstbild: 3.6, fremdbild: 4.0 },
]

// Folie 26: Kennzahlen (plakative Lehr-Kennzahlen ohne Quellenangabe auf der Folie)
export const feedbackKennzahlen = [
  { wert: '72%', akzent: 'violett', text: 'der Führungskräfte überschätzen ihre eigene Wirkung auf andere (Selbst- vs. Fremdbild)' },
  { wert: '3×', akzent: 'gruen', text: 'höhere Entwicklungswirkung im Vergleich zu klassischen Jahresgesprächen' },
  { wert: '85%', akzent: 'orange', text: 'der Teilnehmenden berichten messbare Verhaltensänderungen nach 360°-Feedback' },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
