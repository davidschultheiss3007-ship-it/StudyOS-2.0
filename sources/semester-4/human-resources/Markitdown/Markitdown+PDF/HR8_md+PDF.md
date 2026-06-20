# HR8_md+PDF - Personaladministration, Sozialversicherung und DSGVO: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-08-personaladministration.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-08-personaladministration.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Karten-Layouts, Formeln, Tabellenlogiken, Schaubilder, Prozessflüsse oder Icon-Aussagen verloren gehen.

**Quelle:** `skript-08-personaladministration.pdf` mit 51 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die graue Kopfzeile, das Folientitel-Layout und der Copyright-Footer (`© 2026 – Hochschule der Bayerischen Wirtschaft`) sind keine fachlichen Inhalte. Sie können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme (Sozialversicherungssystem, Personalkostenbaum, Controlling-Regelkreis), Formeln/Kennzahlen, Tabellen, zweispaltigen Karten-Layouts, Schaubilder und die thematischen Icons (Schloss, Europa-Umriss, Richterhammer, Clipboard, Person-am-Laptop usw.).

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Viele Folien (z. B. 4, 5, 10–16, 19) wurden durch die PDF-Konvertierung als verstümmelte, ineinander verschachtelte Tabellen extrahiert (teils mit Resten anderer Folien wie „Vorsorgeleistungen“). Diese Inhalte in React als strukturierte Cards, echte Tabellen oder Schaubilder neu aufbauen.
2. **Zweispaltige Karten-Layouts erhalten:** Die freiwilligen Sozialleistungen und die Aufgaben-/Strukturdaten-Folien beruhen auf nebeneinanderstehenden grauen Karten. Die Spaltenzuordnung geht aus der MD nicht hervor und muss aus der Folie rekonstruiert werden.
3. **Diagramme semantisch nachbauen:** Sozialversicherungs-Infografik (Folie 9), Personalkostenbaum (Folie 18), Brutto-/Nettorechnung-Flow (Folie 20) und Controlling-Regelkreis (Folie 46) tragen fachliche Bedeutung und sind in der MD nicht oder nur unbrauchbar enthalten.
4. **Gesetzesverweise und Zitate exakt erhalten:** Paragrafen (§ 312 SGB III; §§ 28a–28c SGB IV; Art. 1, 4, 5, 7, 33, 82, 83 DSGVO; § 38 BDSG-neu) und wörtliche Zitate aus der DSGVO nicht verändern.
5. **Thematische Icons als dekorative SVGs umsetzen:** Schloss (22), Europa-Umriss (23/24), Richterhammer (25/33), ID-Karte (26), Monitor↔Cloud (27/28), Clipboard (29/34/36), Geldschein (30/31), Person-am-Laptop (37–41), Monitor (42), Personen-Pyramide (47). Icons sind dekorativ, nicht fachtragend, außer der eingebettete Text im Monitor-Icon (Folie 42).
6. **Übungsfolien separat markieren:** Folien 7, 21 und 44 sind Gruppen-/Einzelübungen mit Foto und Leitfrage und sollten als `AufgabenKarte`/`CaseStudyPrompt` umgesetzt werden, getrennt vom Lernstoff.
7. **Quellenhinweise erhalten:** `www.einfach-rente.de` (9), `BWL-Lexikon.de` (18), `vgl. Wickert R. Dornbach (2018)` (24), impulse.de-URL (33), datenschutzadvokat.de-URL (43) als `source-note` beibehalten.
8. **Originaltippfehler kennzeichnen, nicht stillschweigend korrigieren:** z. B. „Grippenschutzimpfung“ (5), „Erweitere“ (24), „Kleiner Verstöße“/„Art-33“ (32), „Double-Opt in“ (34), „aktuellem Stand“ (35), „Dokumentationspflicht en“ (42) — in der Rekonstruktion als Folien-Original markieren.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ZielListe` | 1 | Zielbulletliste mit ⇒-Marker |
| `DefinitionMitFazit` | 2 | Punkteliste plus hervorgehobene Fazit-Box |
| `BeispielListe` | 3 | Bulletliste mit optionalen Icons |
| `SozialleistungenKarten` | 4, 5 | Zwei Karten-Spalten mit Titel und Bulletliste |
| `SozialleistungenKarte` | 6 | Einspaltige Card-Variante |
| `AufgabenKarte` | 7, 21 | Foto/Icon links, Fall + Leitfrage rechts |
| `ExternInternListe` | 8, 13 | Zwei gruppierte Bulletlisten mit fetten Überschriften |
| `SozialversicherungSystem` | 9 | Headerband, Rollen-Schaubild und 5-spaltiges Branchen-Grid |
| `StammdatenLayout` | 10 | Einleitung + 2-Spalten-Listen + Führungsdatei-Block |
| `AufgabenKarten` | 11, 12 | Zwei Card-Spalten mit Titel, Untertitel und Liste |
| `StrukturdatenKarten` | 14 | Zwei Karten mit Liste und eingerückten Beispielen |
| `DatenKarten` | 15 | Zwei Karten, Klammertexte als Subtext |
| `WeitereDatenKarten` | 16 | 3-spaltiges Card-Grid |
| `ZieleNummerListe` | 17 | Geordnete Liste mit Sub-Bullet-Block |
| `PersonalkostenBaum` | 18 | Hierarchisches Tree-Diagramm |
| `ZusatzkostenBoxen` | 19 | Zwei umrandete Karten + Trichter-Callout (40 %) |
| `BruttoNettoFlow` | 20 | Zweistufiger Flow mit verzweigten Blöcken |
| `DefinitionMitIcon` | 22 | Text + dekoratives Lock-Icon |
| `DsgvoInfo` / `DsgvoNeuerungen` | 23, 24 | Bulletliste + Europa-Icon |
| `GesetzesArtikel` | 25, 26 | Zitatblöcke + dekoratives Icon |
| `DefinitionCallout` | 27 | Zentrales Definitionszitat + Tag-/Chip-Liste |
| `PrincipleList` | 28 | Nummerierte Karten/Chips der 7 Grundsätze |
| `ChecklistCard` / `RuleChecklist` / `TaskChecklist` | 29, 34, 36 | Häkchen-Items + Clipboard-Icon |
| `PenaltyCard` / `SplitCompare` | 30, 31 | Verstoßliste, Abwärtspfeil, Bußgeldbetrag |
| `SanctionTable` / `NestedList` | 32 | Verschachtelte Liste mit Artikel-Badges |
| `QuestionAnswerCard` | 33, 35 | Leitfrage + Antwort + Icon/Quelle |
| `ObligationCard` / `RoleTaskList` / `ProtectionRightsCard` | 37–41 | DSB-Pflichten, Aufgaben, Schutzrechte |
| `ProcessQuestionGrid` | 42 | Drei Frageblöcke + „Grundlage für …“-Callout |
| `ImageFigure` / `TemplateTable` | 43 | Vorlagentabelle/Screenshot mit Quelle |
| `CaseStudyPrompt` | 44 | Foto + Fallbeschreibung + Leitfrage |
| `DefinitionList` | 45 | Definitionspunkte + dekoratives Bild |
| `CycleDiagram` | 46 | Vier-Knoten-Regelkreis + Zentrum + Begleittext |
| `ScopeCard` | 47 | Objektblöcke + Ausprägungs-Chips + Personen-Icon |
| `CompareTwoColumns` | 48, 49 | Strategisch/operativ bzw. quantitativ/qualitativ |
| `InstrumentList` | 50, 51 | Akkordeon-/Karteneinträge der PC-Instrumente |

---

# Folienweise Ergänzungen

## Folie 1 - Personalbetreuung · Ziele
### In der MD vorhanden
Die MD enthält den Titel und alle Aufzählungspunkte (Zeilen 1-10), jedoch als zerbrochene Einzelzeilen (z. B. "Reduzierung von Fehlzeiten ... bei den" / "Mitarbeitern" über zwei Zeilen). Inhaltlich vollständig.
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik. Gestaltungselement: jeder Punkt ist mit einem Doppelpfeil-Symbol (⇒) eingeleitet (eingerückte Bulletliste). Oben rechts das HBW-Logo (gilt für alle Folien).
### Visuelle Rekonstruktion
```
Personalbetreuung · Ziele
⇒ Positive Beeinflussung der Arbeitsbedingungen im Betrieb
⇒ Reduzierung von Fehlzeiten, Unfällen und Krankenstände bei den Mitarbeitern
⇒ Verringerung der Fluktuation
⇒ Positive Außenwirkung
⇒ Steigerung der Leistungsbereitschaft, Arbeitszufriedenheit und Motivation
⇒ Verbesserung der sozialen Beziehungen und Kontakte im Betrieb
⇒ Förderung der Identifikation der Mitarbeiter mit dem Unternehmen
```
### Inhaltliche Rekonstruktion
Ziele:
- Positive Beeinflussung der Arbeitsbedingungen im Betrieb
- Reduzierung von Fehlzeiten, Unfällen und Krankenstände bei den Mitarbeitern
- Verringerung der Fluktuation
- Positive Außenwirkung
- Steigerung der Leistungsbereitschaft, Arbeitszufriedenheit und Motivation
- Verbesserung der sozialen Beziehungen und Kontakte im Betrieb
- Förderung der Identifikation der Mitarbeiter mit dem Unternehmen
### Fachliche Aussage
Die Personalbetreuung verfolgt das Ziel, durch verbesserte Arbeitsbedingungen und freiwillige Leistungen Fehlzeiten und Fluktuation zu senken sowie Motivation, Bindung und Außenwirkung des Unternehmens zu steigern.
### React-Vorschlag
`ZielListe` (einfache `ul` mit ⇒-Bullet-Akzent); alternativ `BulletList`-Standardkomponente mit Custom-Marker.

## Folie 2 - Personalbetreuung · Definition
### In der MD vorhanden
Die MD enthält die drei Definitionspunkte sowie das Fazit (Zeilen 13-28), teils in zerbrochene Pseudo-Tabellen aufgesplittet ("Personalpflege als System ..."). Inhaltlich rekonstruierbar.
### Fehlende visuelle Inhalte
Reine Textfolie. Gestaltung: drei ⇒-Punkte; das Stichwort "Betriebliche Sozialarbeit" steht in einer eigenen Zeile unter dem dritten Punkt; das "Fazit:" ist fett hervorgehoben, der Fazit-Satz darunter ebenfalls fett.
### Visuelle Rekonstruktion
```
⇒ Neben den gesetzlichen und tariflichen Verpflichtungen ...
⇒ Personalpflege als System von Prinzipien und Methoden ...
⇒ Betriebliche Maßnahmen können staatliche Sozialleistungen ergänzen:
       Betriebliche Sozialarbeit
Fazit: (fett)
Die Personalbetreuung umfasst alle Einrichtungen, Maßnahmen bzw. Leistungen,
die den Mitarbeiter über das vereinbarte Entgelt hinaus zukommen. (fett)
```
### Inhaltliche Rekonstruktion
- Neben den gesetzlichen und tariflichen Verpflichtungen können Betriebe ihren Mitarbeitern freiwillig eine Palette betrieblicher (Sozial-)Leistungen zukommen lassen.
- Personalpflege als System von Prinzipien und Methoden für die Umsetzung von Maßnahmen zur Optimierung des Gesundheitszustands und der Leistungsfähigkeit der Mitarbeiter.
- Betriebliche Maßnahmen können staatliche Sozialleistungen ergänzen: Betriebliche Sozialarbeit.

**Fazit:** Die Personalbetreuung umfasst alle Einrichtungen, Maßnahmen bzw. Leistungen, die den Mitarbeiter über das vereinbarte Entgelt hinaus zukommen.
### Fachliche Aussage
Personalbetreuung ist die Gesamtheit freiwilliger betrieblicher (Sozial-)Leistungen über das vereinbarte Entgelt hinaus; sie ergänzt staatliche Sozialleistungen und zielt auf Gesundheit und Leistungsfähigkeit der Mitarbeiter.
### React-Vorschlag
`DefinitionMitFazit` (Punkteliste + hervorgehobene `Callout`-Box für das Fazit).

## Folie 3 - Personalbetreuung · Beispiele – betrieblicher Betreuungsmaßnahmen
### In der MD vorhanden
Die MD enthält alle sechs Beispiele (Zeilen 31-40) inkl. der Klammerergänzung "(Wohnung, Trennungsgeld, Kindertagesstätten)". Vollständig.
### Fehlende visuelle Inhalte
Reine Textfolie mit ⇒-Bulletliste, keine Grafik. Untertitel der Folie: "Beispiele – betrieblicher Betreuungsmaßnahmen".
### Visuelle Rekonstruktion
```
⇒ Mitarbeiterverpflegung
⇒ Gesundheitsfürsorge
⇒ Altersvorsorge
⇒ Familienbetreuung (Wohnung, Trennungsgeld, Kindertagesstätten)
⇒ Betriebsveranstaltungen
⇒ Sonstige Angebote und Vergünstigungen
```
### Inhaltliche Rekonstruktion
Beispiele betrieblicher Betreuungsmaßnahmen:
- Mitarbeiterverpflegung
- Gesundheitsfürsorge
- Altersvorsorge
- Familienbetreuung (Wohnung, Trennungsgeld, Kindertagesstätten)
- Betriebsveranstaltungen
- Sonstige Angebote und Vergünstigungen
### Fachliche Aussage
Überblick über typische Felder betrieblicher Betreuung – von Verpflegung über Gesundheit und Altersvorsorge bis zu Familien- und Freizeitangeboten.
### React-Vorschlag
`BeispielListe` (Bulletliste). Optional pro Punkt ein themenbezogenes Icon.

## Folie 4 - Personalbetreuung · Freiwillige Sozialleistungen (Vorsorge-/Geldleistungen)
### In der MD vorhanden
Die MD enthält beide Spalteninhalte (Zeilen 43-56), allerdings spaltenübergreifend vermischt ("Vorsorgeleistungen Geldleistungen", danach Zeile-für-Zeile beider Spalten durchmischt). Die Zuordnung zu den zwei Spalten geht aus der MD nicht eindeutig hervor.
### Fehlende visuelle Inhalte
Zwei nebeneinander stehende, abgerundete graue Karten (Boxen). Linke Box Überschrift fett zentriert "Vorsorgeleistungen", rechte Box fett zentriert "Geldleistungen". Jede Box enthält eine schwarze quadratische Bullet-Liste (▪). Linke Box: 6 Einträge; rechte Box: 10 Einträge (visuell abgelesen).
### Visuelle Rekonstruktion
```
[ Vorsorgeleistungen ]            [ Geldleistungen ]
 ▪ Betriebliche Altersvorsorge     ▪ Weihnachtsgeld
 ▪ Invaliditätsversorgung          ▪ Urlaubsgeld
 ▪ Hinterbliebenenversorgung       ▪ 13. Monatsgehalt
 ▪ Unfallversicherung              ▪ Beihilfen
 ▪ Lebensversicherung              ▪ Dienstaltersprämie
 ▪ Vermögenswirksame Leistung      ▪ Jubiläumszuwendung
                                   ▪ Fahrkostenzuschuss
                                   ▪ Essenszuschuss
                                   ▪ Umzugszuschuss
                                   ▪ Firmendarlehen
```
### Inhaltliche Rekonstruktion
| Vorsorgeleistungen | Geldleistungen |
| --- | --- |
| Betriebliche Altersvorsorge | Weihnachtsgeld |
| Invaliditätsversorgung | Urlaubsgeld |
| Hinterbliebenenversorgung | 13. Monatsgehalt |
| Unfallversicherung | Beihilfen |
| Lebensversicherung | Dienstaltersprämie |
| Vermögenswirksame Leistung | Jubiläumszuwendung |
| | Fahrkostenzuschuss |
| | Essenszuschuss |
| | Umzugszuschuss |
| | Firmendarlehen |
### Fachliche Aussage
Freiwillige Sozialleistungen lassen sich u. a. in Vorsorgeleistungen (Absicherung gegen Alter, Invalidität, Tod, Unfall) und Geldleistungen (zusätzliche monetäre Zuwendungen und Zuschüsse) gliedern.
### React-Vorschlag
`SozialleistungenKarten` – zwei `CardColumn`-Komponenten nebeneinander (Grid 2-spaltig, auf Mobile gestapelt), jeweils Titel + Bulletliste.

## Folie 5 - Personalbetreuung · Freiwillige Sozialleistungen (Sachleistungen / Fürsorge- und Gesundheitspflege)
### In der MD vorhanden
Die MD enthält die Inhalte (Zeilen 58-71), jedoch zwischen beiden Spalten stark vermischt und verstümmelt ("Kostenlose / Arbeitskleidung Vorsorgeuntersuchung"). Spaltenzuordnung in der MD nicht erkennbar.
### Fehlende visuelle Inhalte
Zwei graue abgerundete Karten. Links fett zentriert "Sachleistungen", rechts fett zweizeilig zentriert "Fürsorge- und Gesundheitspflege". Quadratische schwarze Bullets (▪). Linke Box: 5 Einträge; rechte Box: 5 Einträge.
### Visuelle Rekonstruktion
```
[ Sachleistungen ]                 [ Fürsorge- und Gesundheitspflege ]
 ▪ Firmenwagen                      ▪ Kostenlose Vorsorgeuntersuchung
 ▪ Arbeitskleidung                  ▪ Grippenschutzimpfung
 ▪ Mitarbeiterrabatte               ▪ Gesundheitsdienst und Werksfürsorge
 ▪ Preisnachlässe                   ▪ Wellnessprogramme
 ▪ Kostenlose Getränke und          ▪ Krankenrückkehrgespräche
   Früchte bzw. sonstige Verpflegung
```
### Inhaltliche Rekonstruktion
| Sachleistungen | Fürsorge- und Gesundheitspflege |
| --- | --- |
| Firmenwagen | Kostenlose Vorsorgeuntersuchung |
| Arbeitskleidung | Grippenschutzimpfung *(so auf der Folie geschrieben)* |
| Mitarbeiterrabatte | Gesundheitsdienst und Werksfürsorge |
| Preisnachlässe | Wellnessprogramme |
| Kostenlose Getränke und Früchte bzw. sonstige Verpflegung | Krankenrückkehrgespräche |
### Fachliche Aussage
Weitere Gruppen freiwilliger Leistungen sind Sachleistungen (geldwerte Sachvorteile) sowie Maßnahmen der Fürsorge- und Gesundheitspflege (betriebliche Gesundheitsförderung).
### React-Vorschlag
`SozialleistungenKarten` (Wiederverwendung von Folie 4) mit zwei Spalten.

## Folie 6 - Personalbetreuung · Freiwillige Sozialleistungen (Sonstige Leistungen)
### In der MD vorhanden
Die MD enthält Titel "Sonstige Leistungen" und alle vier Punkte (Zeilen 74-83). Vollständig.
### Fehlende visuelle Inhalte
Eine einzelne, etwa mittig-links platzierte graue abgerundete Karte mit fettem zweizeiligem zentriertem Titel "Sonstige Leistungen" und vier quadratischen Bullets (▪).
### Visuelle Rekonstruktion
```
        [ Sonstige Leistungen ]
         ▪ Bildungs- und Freizeitangebote
         ▪ Werkswohnungen
         ▪ Kinderbetreuung
         ▪ Beratungs- und Betreuungsangebote
```
### Inhaltliche Rekonstruktion
Sonstige Leistungen:
- Bildungs- und Freizeitangebote
- Werkswohnungen
- Kinderbetreuung
- Beratungs- und Betreuungsangebote
### Fachliche Aussage
Ergänzend gibt es sonstige freiwillige Leistungen wie Bildungs-/Freizeitangebote, Werkswohnungen, Kinderbetreuung sowie Beratungs- und Betreuungsangebote.
### React-Vorschlag
`SozialleistungenKarte` (einspaltige Variante derselben Card-Komponente).

## Folie 7 - Aufgabe · Gruppenübung
### In der MD vorhanden
Die MD enthält den vollständigen Aufgabentext (Zeilen 86-96) inkl. der Leitfrage. Vollständig. (Hinweis: Der Folientitel lautet nur "Aufgabe / Gruppenübung"; "Lecker mbH"/"Minimum AG" stammen aus dem Fließtext, nicht aus dem Titel.)
### Fehlende visuelle Inhalte
Links ein Foto: mehrere lachende Geschäftsleute (Männer und Frauen in Anzügen/Hemden) liegen im Kreis mit den Köpfen zur Mitte, Aufsicht von oben (Stockfoto). Rechts der Aufgabentext, die Leitfrage fett. Diese Folie hat ein abweichendes Layout (Titel/Logo verschoben, kein voller HBW-Schriftzug links).
### Visuelle Rekonstruktion
```
[Foto: Personen im Kreis,  | Fallbeschreibung "Minimum AG" / "Lecker mbH" ...
 Köpfe zur Mitte]          | **Was soll der Personalleiter unternehmen?**
```
### Inhaltliche Rekonstruktion
Die Beschäftigten der „Minimum AG" sind empört, weil die Mahlzeiten der Großküche „Lecker mbH", die das Mittagessen in die Kantine liefert, kaum mehr einem schmecken. Die Beschwerden gehen an den Personalleiter, der für die Kantine zuständig ist.
**Was soll der Personalleiter unternehmen?**
### Fachliche Aussage
Fallübung zur betrieblichen Verpflegung/Personalbetreuung: Handlungsmöglichkeiten des Personalleiters bei Unzufriedenheit mit dem Kantinen-Caterer.
### React-Vorschlag
`AufgabenKarte` (zweispaltiges Layout: Bild/Icon links, Fallbeschreibung + hervorgehobene Frage rechts). Foto durch dekoratives Icon ersetzbar.

## Folie 8 - Personaladministration · Gründe
### In der MD vorhanden
Die MD enthält Titel und beide Blöcke "Extern" und "Intern" mit allen Punkten (Zeilen 99-116), in zerbrochene Pseudo-Tabellen aufgeteilt. Inhaltlich rekonstruierbar.
### Fehlende visuelle Inhalte
Reine Textfolie. Zwei fett gesetzte Überschriften "Extern:" (3 Bullets) und "Intern:" (2 Bullets) mit jeweils quadratischen Bullets (▪).
### Visuelle Rekonstruktion
```
Extern:
 ▪ Gesetzliche und behördliche Veranlassungen
 ▪ Erfordernisse aufgrund von Tarifverträgen, Betriebsvereinbarungen
 ▪ Anforderungen von Verbänden und Sozialversicherungsträgern
Intern:
 ▪ Innerbetriebliche Bedürfnisse des Managements, der Personalleitung sowie der Personalabteilung
 ▪ Anforderungen und Wünsche der Mitarbeiter
```
### Inhaltliche Rekonstruktion
**Extern:**
- Gesetzliche und behördliche Veranlassungen
- Erfordernisse aufgrund von Tarifverträgen, Betriebsvereinbarungen
- Anforderungen von Verbänden und Sozialversicherungsträgern

**Intern:**
- Innerbetriebliche Bedürfnisse des Managements, der Personalleitung sowie der Personalabteilung
- Anforderungen und Wünsche der Mitarbeiter
### Fachliche Aussage
Die Notwendigkeit der Personaladministration ergibt sich aus externen (gesetzlich/tariflich/behördlich) und internen (betriebliche und mitarbeiterseitige) Gründen.
### React-Vorschlag
`ExternInternListe` (zwei gruppierte Bulletlisten mit fetten Überschriften).

## Folie 9 - Sozialversicherung · Träger
### In der MD problematisch/fehlend
Die MD enthält nur "Sozialversicherung / Träger" (Zeilen 119-121) und sonst nichts – die gesamte Infografik wurde NICHT extrahiert. Alle Inhalte fehlen.
### Fehlende visuelle Inhalte
Eingebettete farbige Infografik (dunkelblauer Kasten mit oranger Akzentfarbe). Aufbau (visuell abgelesen):
- Kopfzeile dunkelblau, fett weiß: "Das Sozialversicherungssystem in Deutschland", darunter (kleiner, weiß): "Ein soziales Netz, nach dem Solidaritätsprinzip als Pflichtversicherung organisiert."
- Mittlere Reihe drei Akteure mit Icons, durch zwei orange geschwungene Pfeile verbunden (beide Pfeile zeigen von links bzw. rechts zur Mitte):
  - links: Bundesadler-Icon → Text "Der **Staat** kontrolliert, schafft die Regeln, definiert die gesetzlichen Rahmenbedingungen und bestimmt die Leistungen."
  - Mitte: vier Personen-Silhouetten, daneben/darunter ein €-Geldschein-Icon → "Beiträge zahlen **Arbeitgeber und Arbeitnehmer**."
  - rechts: Sparkasse/Gebäude- und Fabrik-Icon → "Die **Träger der Sozialversicherungen** sorgen für die Umsetzung der Leistungen und Maßnahmen."
- Oranger Balken (weiße Schrift, zentriert): "Ein soziales Netz für alle Bürger in Deutschland!"
- Untere Reihe: fünf weiße Karten (gerundete Rahmen) mit fetter Überschrift und Beschreibung darunter:
  - Arbeitslosenversicherung – "Grundsicherung durch …"
  - Krankenversicherung – "Wiederherstellung der …"
  - Unfallversicherung – "Leistungen bei Arbeits-…"
  - Pflegeversicherung – "Unterstützung bei Pflege-…"
  - Rentenversicherung – "Sicherung des Lebens-…"
- Footer: "www.einfach-rente.de" (links) und Creative-Commons-Logo (rechts).
### Visuelle Rekonstruktion
```
[ Das Sozialversicherungssystem in Deutschland ]
[ Ein soziales Netz, nach dem Solidaritätsprinzip als Pflichtversicherung organisiert. ]
   Staat  --orange Pfeil-->  Arbeitgeber + Arbeitnehmer (Beiträge, €)  <--orange Pfeil--  Träger der SV
[ orange Balken: Ein soziales Netz für alle Bürger in Deutschland! ]
+----------------+----------------+----------------+----------------+----------------+
| Arbeitslosen-  | Kranken-       | Unfall-        | Pflege-        | Renten-        |
| versicherung   | versicherung   | versicherung   | versicherung   | versicherung   |
+----------------+----------------+----------------+----------------+----------------+
www.einfach-rente.de                                          [Creative Commons]
```
### Inhaltliche Rekonstruktion
| Zweig | Aufgabe (visuell abgelesen) |
| --- | --- |
| Arbeitslosenversicherung | Grundsicherung durch Arbeitslosengeld und Unterstützung bei der Arbeitsplatzsuche |
| Krankenversicherung | Wiederherstellung der Gesundheit und Maßnahmen zur gesundheitlichen Prävention |
| Unfallversicherung | Leistungen bei Arbeitsunfällen und bei Berufskrankheit |
| Pflegeversicherung | Unterstützung bei Pflegeleistungen für dauerhaft pflegebedürftige Personen |
| Rentenversicherung | Sicherung des Lebensstandard im Alter durch eine Rentenzahlung |

Rollen: Staat (kontrolliert/Regeln/Rahmen/Leistungen) – Arbeitgeber + Arbeitnehmer (zahlen Beiträge) – Träger der Sozialversicherungen (Umsetzung der Leistungen und Maßnahmen).
*Quelle: www.einfach-rente.de (Creative Commons)*
### Fachliche Aussage
Das deutsche Sozialversicherungssystem ist eine solidarisch finanzierte Pflichtversicherung mit fünf Zweigen; Staat (Regeln), Beitragszahler (Arbeitgeber/Arbeitnehmer) und Träger (Umsetzung) bilden das soziale Netz.
### React-Vorschlag
`SozialversicherungSystem` – Headerband, dreigliedriges Rollen-Schaubild (drei Icon-Tiles mit Pfeilen) und darunter ein 5-spaltiges `BranchenGrid` (auf Mobile gestapelt) mit Titel + Beschreibung pro Versicherungszweig. Quelle als `source-note`.

## Folie 10 - Personaladministration · Stammdateien
### In der MD vorhanden
Die MD enthält alle Inhalte (Zeilen 123-139), jedoch in stark zerbrochene Pseudo-Tabellen mit verstümmelten Wörtern. Inhaltlich rekonstruierbar.
### Fehlende visuelle Inhalte
Reine Textfolie, kein Diagramm. Zentrierter Einleitungssatz oben; darunter zwei Spalten mit fetten Überschriften "Datenelemente" (links, 3 Bullets) und "Zeitreihendaten" (rechts, 6 Bullets als Einzelpunkte), quadratische Bullets; unten mittig-links ein dritter Block mit fetter Überschrift "Führungsdatei".
### Visuelle Rekonstruktion
```
   Alle relevanten Informationen zum Arbeitsplatz für die
   Personalplanung, -beschaffung und -beurteilung
Datenelemente                     Zeitreihendaten
 ▪ Stellenbezogene Daten           ▪ Belegschaftszahlen
   (z.B. Stellenbeschreibung,      ▪ Personalzugänge
    Tätigkeiten, Rang)             ▪ Überstunden
 ▪ Mitarbeiterbezogene Daten       ▪ Personalkosten
   (notwendige Qualifikationen,    ▪ Aus- und Weiterbildung
    etc.)                          ▪ Fluktuation
 ▪ Beurteilungsdaten
   (Art der Beurteilung, Kriterien,
    Kontrollmöglichkeiten)
        Führungsdatei
   Daten über die Gesamtheit der Belegschaft, häufig für statistische Zwecke
```
### Inhaltliche Rekonstruktion
Einleitung: Alle relevanten Informationen zum Arbeitsplatz für die Personalplanung, -beschaffung und -beurteilung.

| Datenelemente | Zeitreihendaten |
| --- | --- |
| Stellenbezogene Daten (z. B. Stellenbeschreibung, Tätigkeiten, Rang) | Belegschaftszahlen |
| Mitarbeiterbezogene Daten (notwendige Qualifikationen, etc.) | Personalzugänge |
| Beurteilungsdaten (Art der Beurteilung, Kriterien, Kontrollmöglichkeiten) | Überstunden |
| | Personalkosten |
| | Aus- und Weiterbildung |
| | Fluktuation |

**Führungsdatei:** Daten über die Gesamtheit der Belegschaft, häufig für statistische Zwecke.
### Fachliche Aussage
Personalstammdateien bündeln arbeitsplatzbezogene Datenelemente und Zeitreihendaten für Planung, Beschaffung und Beurteilung; die Führungsdatei aggregiert Belegschaftsdaten für statistische Zwecke.
### React-Vorschlag
`StammdatenLayout` (Einleitungstext + 2-Spalten-Bulletlisten + zentrierter Führungsdatei-Block).

## Folie 11 - Personaladministration · Aufgaben (Information / Abwicklung)
### In der MD problematisch/fehlend
Die MD ist hier stark zerstört: Spaltentexte sind ineinander verschachtelt und mit Resten anderer Folien (Vorsorgeleistungen) vermischt (Zeilen 142-163), z. B. "VorsoIrngfoelremisattuionngen". Reihenfolge und Zuordnung nur über die Folie rekonstruierbar.
### Fehlende visuelle Inhalte
Zwei graue abgerundete Karten. Links fett zentriert "Information" mit Untertitel "Bereitstellung von aktuellen Daten für interne und externe Belange"; rechts fett zentriert "Abwicklung" mit Untertitel "Administrative Abwicklung personalwirtschaftlicher Vorgänge". Darunter jeweils quadratische Bullets (links 6, rechts 5).
### Visuelle Rekonstruktion
```
[ Information ]                       [ Abwicklung ]
Bereitstellung von aktuellen Daten    Administrative Abwicklung
für interne und externe Belange       personalwirtschaftlicher Vorgänge
 ▪ Gewinnung                           ▪ Einstellungen
 ▪ Speicherung                         ▪ Versetzungen
 ▪ Auswahl                             ▪ Beförderungen
 ▪ Aufbereitung                        ▪ Austritte
 ▪ Ausgabe von Personaldaten           ▪ Sonstige personelle Veränderungen
 ▪ Erstellung von Betriebsstatistiken
```
### Inhaltliche Rekonstruktion
| Information (Bereitstellung von aktuellen Daten für interne und externe Belange) | Abwicklung (Administrative Abwicklung personalwirtschaftlicher Vorgänge) |
| --- | --- |
| Gewinnung | Einstellungen |
| Speicherung | Versetzungen |
| Auswahl | Beförderungen |
| Aufbereitung | Austritte |
| Ausgabe von Personaldaten | Sonstige personelle Veränderungen |
| Erstellung von Betriebsstatistiken | |
### Fachliche Aussage
Zwei Aufgabenfelder der Personaladministration: die Information (Beschaffung, Speicherung und Bereitstellung von Personaldaten) und die Abwicklung (administrative Bearbeitung personeller Vorgänge wie Einstellung, Versetzung, Austritt).
### React-Vorschlag
`AufgabenKarten` – zwei `Card`-Spalten mit Titel, Untertitel und Bulletliste.

## Folie 12 - Personaladministration · Aufgaben (Abrechnung / Überwachung)
### In der MD problematisch/fehlend
Die MD ist erneut stark verstümmelt und mit Vorsorgeleistungs-Resten durchmischt (Zeilen 165-184), z. B. "VorsoArbgreelcehisntuunnggen". Inhaltlich nur über die Folie rekonstruierbar.
### Fehlende visuelle Inhalte
Zwei graue abgerundete Karten. Links fett zentriert "Abrechnung", Untertitel "Administrative und buchhalterische Bearbeitung der Personalzahlungsströme". Rechts fett zentriert "Überwachung", Untertitel "Kontinuierliche Überwachung von relevanten Personalkennzahlen". Quadratische Bullets (links 7, rechts 5).
### Visuelle Rekonstruktion
```
[ Abrechnung ]                       [ Überwachung ]
Administrative und buchhalterische   Kontinuierliche Überwachung von
Bearbeitung der Personalzahlungs-    relevanten Personalkennzahlen
ströme
 ▪ Entgeltabrechnungen                ▪ Arbeitszeiterfassung
 ▪ Lohn- und Gehaltszulagen           ▪ Fluktuation
 ▪ Steuern und Sozialvers.-abgaben    ▪ Krankenstand
 ▪ Reisekosten, Fahrtgeld             ▪ Überstundenanfall
 ▪ Darlehensgewährung                 ▪ Urlaubsinanspruchnahme
 ▪ Essenszuschüsse
 ▪ Werksverkäufe
```
### Inhaltliche Rekonstruktion
| Abrechnung | Überwachung |
| --- | --- |
| Entgeltabrechnungen | Arbeitszeiterfassung |
| Lohn- und Gehaltszulagen | Fluktuation |
| Steuern und Sozialversicherungsabgaben | Krankenstand |
| Reisekosten, Fahrtgeld | Überstundenanfall |
| Darlehensgewährung | Urlaubsinanspruchnahme |
| Essenszuschüsse | |
| Werksverkäufe | |
### Fachliche Aussage
Weitere Aufgabenfelder sind die Abrechnung (administrativ-buchhalterische Bearbeitung aller Zahlungsströme) und die Überwachung (laufendes Monitoring von Personalkennzahlen).
### React-Vorschlag
`AufgabenKarten` (Wiederverwendung von Folie 11) mit zwei Spalten.

## Folie 13 - Personaladministration · Meldeaufgaben
### In der MD vorhanden
Die MD enthält Einleitung und alle Punkte (Zeilen 186-203) inkl. Paragrafen (§ 312 SGB III; §28a-§28c SGB IV), teils in zerbrochene Tabellen aufgeteilt. Inhaltlich vollständig.
### Fehlende visuelle Inhalte
Reine Textfolie. Einleitungssatz, dann fett "Extern:" (4 Bullets) und "Intern:" (5 Bullets) mit quadratischen Bullets; Gesetzesverweise stehen jeweils in der Zeile.
### Visuelle Rekonstruktion
```
Übernahme, der mit der Personalverwaltung zusammenhängenden Meldepflichten
Extern:
 ▪ Arbeitsbescheinigungen ans Arbeitsamt § 312 SGB III
 ▪ Lohnnachweise für Berufsgenossenschaften,
 ▪ Lohnsteueranmeldungen beim Finanzamt,
 ▪ Meldung zur Sozialversicherung §28a - §28c SGB IV
Intern:
 ▪ Ablauf der Probezeit,
 ▪ Versetzungsmeldungen,
 ▪ Meldungen über Sonderzahlungen
 ▪ Jubiläums-, Geburtstagsmeldungen
 ▪ Schwerbeschädigtenverzeichnis
```
### Inhaltliche Rekonstruktion
Übernahme der mit der Personalverwaltung zusammenhängenden Meldepflichten.

**Extern:**
- Arbeitsbescheinigungen ans Arbeitsamt (§ 312 SGB III)
- Lohnnachweise für Berufsgenossenschaften
- Lohnsteueranmeldungen beim Finanzamt
- Meldung zur Sozialversicherung (§ 28a – § 28c SGB IV)

**Intern:**
- Ablauf der Probezeit
- Versetzungsmeldungen
- Meldungen über Sonderzahlungen
- Jubiläums-, Geburtstagsmeldungen
- Schwerbeschädigtenverzeichnis
### Fachliche Aussage
Die Personaladministration übernimmt gesetzlich vorgeschriebene externe Meldepflichten (Arbeitsamt, Berufsgenossenschaft, Finanzamt, Sozialversicherung) sowie interne Meldungen (z. B. Probezeit, Versetzungen, Jubiläen).
### React-Vorschlag
`ExternInternListe` (Wiederverwendung von Folie 8); Gesetzesverweise als `code`/Hervorhebung.

## Folie 14 - Personaladministration · Strukturdaten (Quantitativ / Qualitativ)
### In der MD problematisch/fehlend
Die MD ist hier stark verstümmelt und mit Vorsorgeleistungs-Resten durchsetzt (Zeilen 206-228), z. B. "VorsSotrrgueklteuisrdtuantegnen". Inhalt nur über die Folie rekonstruierbar.
### Fehlende visuelle Inhalte
Zwei graue abgerundete Karten. Links fett zweizeilig zentriert "Quantitative Strukturdaten", rechts fett zweizeilig zentriert "Qualitative Strukturdaten". Quadratische Bullets, jeweils mit eingerückten Beispielblöcken (nicht gebulletet).
### Visuelle Rekonstruktion
```
[ Quantitative Strukturdaten ]          [ Qualitative Strukturdaten ]
 ▪ Strukturierung nach der Art des       ▪ Strukturierung nach Ausbildungsabschluss:
   Anstellungsverhältnisses:               Ungelernte, Angelernte, Facharbeiter,
   Arbeiter / gewerbliche, technische,     kaufmännisch Angestellte, Techniker,
   kaufmännische Angestellte /             Akademiker
   Aushilfen / Festangestellte           ▪ Strukturierung nach Fortbildungsstand:
 ▪ Strukturierung nach                      Maschinenkenntnisse, PC-Kenntnisse,
   Vergütungsgruppen:                        Fremdsprachen, Kommunikationsschulung, etc.
   Tariflich / Außertariflich
```
### Inhaltliche Rekonstruktion
| Quantitative Strukturdaten | Qualitative Strukturdaten |
| --- | --- |
| Strukturierung nach der Art des Anstellungsverhältnisses: Arbeiter / gewerbliche, technische, kaufmännische Angestellte / Aushilfen / Festangestellte | Strukturierung nach Ausbildungsabschluss: Ungelernte, Angelernte, Facharbeiter, kaufmännisch Angestellte, Techniker, Akademiker |
| Strukturierung nach Vergütungsgruppen: Tariflich / Außertariflich | Strukturierung nach Fortbildungsstand: Maschinenkenntnisse, PC-Kenntnisse, Fremdsprachen, Kommunikationsschulung, etc. |
### Fachliche Aussage
Strukturdaten gliedern die Belegschaft quantitativ (nach Anstellungsverhältnis und Vergütungsgruppe) und qualitativ (nach Ausbildungsabschluss und Fortbildungsstand).
### React-Vorschlag
`StrukturdatenKarten` – zwei `Card`-Spalten mit Bulletliste und eingerückten Beispieltexten.

## Folie 15 - Personaladministration · Ereignis- und Leistungsdaten
### In der MD problematisch/fehlend
Die MD ist stark verstümmelt und mit Vorsorge-Resten gemischt (Zeilen 231-246), z. B. "Be(tSrieoblll-i/ItseAAnlwteerssevonrhseoitr)ge". Inhalt nur über die Folie rekonstruierbar.
### Fehlende visuelle Inhalte
Zwei graue abgerundete Karten. Links fett zentriert "Ereignisdaten" (6 Bullets), rechts fett zentriert "Leistungsdaten" (6 Bullets). Quadratische Bullets, einige mit eingeklammerten Erläuterungen in einer zweiten Zeile.
### Visuelle Rekonstruktion
```
[ Ereignisdaten ]                        [ Leistungsdaten ]
 ▪ Fehlzeitenquote                        ▪ Umsatz pro Mitarbeiter
   (Soll-/Ist Anwesenheit)                ▪ Wertschöpfung pro Mitarbeiter
 ▪ Fluktuationsrate                        ▪ Leistungs-/Anwesenheitszeit
   (Anz. Ausgeschiedene/ Ø MA-Zahl)        ▪ Unproduktive Zeiten
 ▪ Anzahl Schwangerschaften                ▪ Ausschussquote
 ▪ Anzahl Umgruppierungen                  ▪ Fahr- und Einsatzzeiten
 ▪ Anzahl Arbeitsausfälle
 ▪ Anzahl Arbeitsunfälle
```
### Inhaltliche Rekonstruktion
| Ereignisdaten | Leistungsdaten |
| --- | --- |
| Fehlzeitenquote (Soll-/Ist Anwesenheit) | Umsatz pro Mitarbeiter |
| Fluktuationsrate (Anz. Ausgeschiedene / Ø MA-Zahl) | Wertschöpfung pro Mitarbeiter |
| Anzahl Schwangerschaften | Leistungs-/Anwesenheitszeit |
| Anzahl Umgruppierungen | Unproduktive Zeiten |
| Anzahl Arbeitsausfälle | Ausschussquote |
| Anzahl Arbeitsunfälle | Fahr- und Einsatzzeiten |
### Fachliche Aussage
Ereignisdaten erfassen personalbezogene Vorkommnisse (Fehlzeiten, Fluktuation, Unfälle), Leistungsdaten messen den Output je Mitarbeiter (Umsatz, Wertschöpfung, Produktivkennzahlen).
### React-Vorschlag
`DatenKarten` (zwei `Card`-Spalten mit Bulletliste, Klammertexte als gedämpfter Subtext).

## Folie 16 - Personaladministration · Weitere Daten
### In der MD problematisch/fehlend
Die MD ist hier stark zerbrochen und mit Vorsorge-Resten gemischt (Zeilen 249-272), z. B. "VorsorgDealetiesntungen". Die Dreigliederung ist in der MD nicht erkennbar.
### Fehlende visuelle Inhalte
Drei nebeneinander stehende graue abgerundete Karten, jeweils fetter zweizeiliger zentrierter Titel + zentrierter Untertitel + quadratische Bullets:
- "Personenbezogene Daten" – Untertitel "Zahlen, Werte und sonstige Informationen, die die gesamte Belegschaft oder Teile der Belegschaft betreffen:" (3 Bullets)
- "Stellen- und Arbeitsplatzbezogene Daten" – Untertitel "Informationen über Stellen bzw. Arbeitsplätze" (3 Bullets)
- "Produktionsbezogene Daten" – Untertitel "Daten über die Produktivität des Betriebs" (2 Bullets)
### Visuelle Rekonstruktion
```
[ Personenbezogene Daten ]  [ Stellen- und Arbeits-       ]  [ Produktionsbezogene Daten ]
 Zahlen, Werte und sonstige  [ platzbezogene Daten         ]   Daten über die Produktivität
 Informationen, die die       Informationen über Stellen        des Betriebs
 gesamte Belegschaft oder     bzw. Arbeitsplätze
 Teile der Belegschaft
 betreffen:
 ▪ Personendaten,            ▪ Aufgabenrahmen               ▪ Kennzahlen der Effizienz
   persönliche Daten         ▪ Anforderungs- und              des Personaleinsatzes
 ▪ Verhaltensdaten             Fähigkeitsprofile            ▪ Personalkostenanteil am Umsatz
   z.B. Urlaubsinanspruchn.  ▪ Organisatorische Einordnung
 ▪ Qualifikationsdaten
```
### Inhaltliche Rekonstruktion
| Personenbezogene Daten | Stellen- und Arbeitsplatzbezogene Daten | Produktionsbezogene Daten |
| --- | --- | --- |
| (Zahlen, Werte und sonstige Informationen, die die gesamte Belegschaft oder Teile der Belegschaft betreffen) | (Informationen über Stellen bzw. Arbeitsplätze) | (Daten über die Produktivität des Betriebs) |
| Personendaten, persönliche Daten | Aufgabenrahmen | Kennzahlen der Effizienz des Personaleinsatzes |
| Verhaltensdaten (z. B. Urlaubsinanspruchnahme) | Anforderungs- und Fähigkeitsprofile | Personalkostenanteil am Umsatz |
| Qualifikationsdaten | Organisatorische Einordnung | |
### Fachliche Aussage
Personaldaten gliedern sich in personenbezogene, stellen-/arbeitsplatzbezogene und produktionsbezogene Daten – jeweils mit charakteristischen Inhalten.
### React-Vorschlag
`WeitereDatenKarten` – 3-spaltiges `CardGrid` (auf Mobile gestapelt) mit Titel, Untertitel und Bulletliste.

## Folie 17 - Personaladministration · Ziele
### In der MD vorhanden
Die MD enthält alle nummerierten Ziele 1)-6) inkl. Unterpunkte und Beispiele (Zeilen 275-292), in zerbrochene Tabellen aufgeteilt. Inhaltlich vollständig.
### Fehlende visuelle Inhalte
Reine Textfolie. Nummerierte Liste; Punkt 1) hat drei eingerückte quadratische Bullets mit "z. B."-Beispielen (jeweils in zweiter Zeile); 2)-6) einfach nummeriert ohne Sub-Bullets.
### Visuelle Rekonstruktion
```
1) Transparenz personalwirtschaftlicher Vorgänge:
    ▪ Strukturen und ihre Veränderung
      z.B. Altersaufbau, Bildungsstand
    ▪ Bewegungen im Personalbestand und ihre Auswirkungen:
      z.B. Fluktuation
    ▪ Entwicklungen und ihre Bedeutung für das Unternehmen:
      z.B. Lohnkostenentwicklung
2) Aktualität der Daten
3) Fehlerfreiheit der Daten
4) Aussagekraft der Daten
5) Wirtschaftlichkeit der Datenverarbeitung / kostengünstige Erarbeitung
6) Einhaltung des Datenschutzes
```
### Inhaltliche Rekonstruktion
1. Transparenz personalwirtschaftlicher Vorgänge:
   - Strukturen und ihre Veränderung (z. B. Altersaufbau, Bildungsstand)
   - Bewegungen im Personalbestand und ihre Auswirkungen (z. B. Fluktuation)
   - Entwicklungen und ihre Bedeutung für das Unternehmen (z. B. Lohnkostenentwicklung)
2. Aktualität der Daten
3. Fehlerfreiheit der Daten
4. Aussagekraft der Daten
5. Wirtschaftlichkeit der Datenverarbeitung / kostengünstige Erarbeitung
6. Einhaltung des Datenschutzes
### Fachliche Aussage
Die Personaladministration soll personalwirtschaftliche Vorgänge transparent machen und dabei Aktualität, Fehlerfreiheit, Aussagekraft, Wirtschaftlichkeit und Datenschutz der Daten sicherstellen.
### React-Vorschlag
`ZieleNummerListe` (geordnete Liste mit eingerücktem Sub-Bullet-Block für Punkt 1).

## Folie 18 - Personalkosten · Unterteilung
### In der MD problematisch/fehlend
Die MD enthält nur "Personalkosten / Unterteilung / Quelle: BWL-Lexikon.de" (Zeilen 295-297) – das gesamte Baumdiagramm fehlt. Inhalte nicht extrahiert.
### Fehlende visuelle Inhalte
Blaues Baum-/Organigramm-Schaubild. Oben ein dunkelblauer Wurzelknoten "Personalkosten", mit waagerechten/senkrechten Verbindungslinien zu vier dunkelblauen Knoten der zweiten Ebene: "Löhne", "Gehälter", "Personal-zusatzkosten" (zweizeilig), "sonstige Personalkosten" (zweizeilig). Unter "Löhne" zwei hellblaue Unterknoten: "Fertigungslöhne", "Hilfslöhne". Unter "Personalzusatzkosten" drei hellblaue Unterknoten: "Gesetzlich", "Tariflich", "Freiwillig". Der Knoten "Personalzusatzkosten" inkl. seiner drei Unterknoten ist mit einem roten Kreis (Highlight) hervorgehoben. (Hinweis: "Gehälter" und "sonstige Personalkosten" haben KEINE Unterknoten.)
### Visuelle Rekonstruktion
```
                     ┌───────────────┐
                     │ Personalkosten│
                     └──────┬────────┘
        ┌───────────┬───────┴─────────────┬──────────────┐
   ┌────────┐  ┌────────┐ ┌─────────────┐ ┌───────────────┐
   │ Löhne  │  │Gehälter│ │ Personal-   │ │ sonstige      │
   │        │  │        │ │ zusatzkosten│ │ Personalkosten│
   └───┬────┘  └────────┘ └──────┬──────┘ └───────────────┘
  Fertigungslöhne            Gesetzlich   (rot eingekreist:
  Hilfslöhne                 Tariflich     Personalzusatzkosten
                             Freiwillig    + 3 Unterknoten)
```
### Inhaltliche Rekonstruktion
- Personalkosten
  - Löhne → Fertigungslöhne, Hilfslöhne
  - Gehälter
  - Personalzusatzkosten → Gesetzlich, Tariflich, Freiwillig  *(rot hervorgehoben)*
  - sonstige Personalkosten

*Quelle: BWL-Lexikon.de*
### Fachliche Aussage
Personalkosten gliedern sich in Löhne, Gehälter, Personalzusatzkosten und sonstige Personalkosten; die Personalzusatzkosten (gesetzlich, tariflich, freiwillig) stehen im Fokus.
### React-Vorschlag
`PersonalkostenBaum` – hierarchisches `TreeDiagram` (CSS-Grid/Flex mit Verbindungslinien); Hervorhebung des Personalzusatzkosten-Astes per Akzentrahmen statt rotem Kreis. Quelle als `source-note`.

## Folie 19 - Personalzusatzkosten · Zusammensetzung
### In der MD vorhanden
Die MD enthält beide Spalten als Pseudo-Tabelle (Zeilen 300-319) inkl. Fußzeile "Personalzusatzkosten (ca 40% des Bruttolohns)". Inhaltlich rekonstruierbar.
### Fehlende visuelle Inhalte
Zwei abgerundete schwarz umrandete (weiße) Boxen nebeneinander; links fett zentriert "Gesetz und Tarif" (10 Bullets), rechts fett zentriert "Freiwillig" (10 Bullets). Quadratische Bullets. Unter beiden Boxen eine graue, nach unten zeigende Trichter-/Pfeilform (Zusammenführung), darunter Text "Personalzusatzkosten (ca 40 % des Bruttolohns)".
### Visuelle Rekonstruktion
```
[ Gesetz und Tarif ]               [ Freiwillig ]
 ▪ Bezahlte Ausfallzeiten           ▪ Betriebliche Altersversorgung
 ▪ Arbeitgeberbeiträge zur          ▪ Küchen und Kantinen/Essenzuschüsse
   gesetzlichen Sozial- und         ▪ Wohnungsbeihilfen / Umzugskosten
   Unfallversicherung               ▪ Fahrtkosten
 ▪ Urlaub, Urlaubsgeld              ▪ Urlaub / Urlaubsgeld
 ▪ Schwerbehinderte                 ▪ Soziale Fürsorge
 ▪ Betriebsärztliche Betreuung      ▪ Betriebskrankenkasse
 ▪ Arbeitssicherheit                ▪ Versicherungen und Zuschüsse
 ▪ Kosten für Betriebsverfassung    ▪ Bezahlung von Ausfallszeiten
   und Mitbestimmung                ▪ Aus- und Fortbildung
 ▪ Vermögenswirksame Leistungen     ▪ Sonstige Leistungen
 ▪ Aus- und Fortbildung
 ▪ Sonstige Kosten
         \________ ▼ ________/
   Personalzusatzkosten (ca 40 % des Bruttolohns)
```
### Inhaltliche Rekonstruktion
| Gesetz und Tarif | Freiwillig |
| --- | --- |
| Bezahlte Ausfallzeiten | Betriebliche Altersversorgung |
| Arbeitgeberbeiträge zur gesetzlichen Sozial- und Unfallversicherung | Küchen und Kantinen/Essenzuschüsse |
| Urlaub, Urlaubsgeld | Wohnungsbeihilfen / Umzugskosten |
| Schwerbehinderte | Fahrtkosten |
| Betriebsärztliche Betreuung | Urlaub / Urlaubsgeld |
| Arbeitssicherheit | Soziale Fürsorge |
| Kosten für Betriebsverfassung und Mitbestimmung | Betriebskrankenkasse |
| Vermögenswirksame Leistungen | Versicherungen und Zuschüsse |
| Aus- und Fortbildung | Bezahlung von Ausfallszeiten |
| Sonstige Kosten | Aus- und Fortbildung |
| | Sonstige Leistungen |

Fazit/Fußzeile: **Personalzusatzkosten (ca. 40 % des Bruttolohns).**
### Fachliche Aussage
Personalzusatzkosten setzen sich aus gesetzlich/tariflich bedingten und freiwilligen Bestandteilen zusammen und betragen insgesamt ca. 40 % des Bruttolohns.
### React-Vorschlag
`ZusatzkostenBoxen` – zwei umrandete `Card`-Spalten mit Bulletliste, darunter ein zentrierter Trichter/`Callout` mit dem 40 %-Hinweis.

## Folie 20 - Personalkosten · Brutto- / Nettorechnung
### In der MD vorhanden
Die MD enthält alle Inhalte (Zeilen 322-337): Brutto-/Nettorechnung, Zahlungs- und Auswertungsrechnung mit Bullets. Inhaltlich vollständig.
### Fehlende visuelle Inhalte
Flussdiagramm: links Block "Bruttorechnung" (fett) mit darunter geschweifter Klammer und Erläuterung; nach rechts ein grauer horizontaler Pfeil zu "Nettorechnung" (fett, mit geschweifter Klammer/Erläuterung darunter). Von der Nettorechnung zwei graue nach unten gerichtete Pfeile auf zwei Blöcke: "Zahlungsrechnung" (links, 7 Bullets) und "Auswertungsrechnung" (rechts, 4 Bullets), jeweils mit quadratischer Bulletliste.
### Visuelle Rekonstruktion
```
Bruttorechnung  ──grauer Pfeil──►  Nettorechnung
(Ermittlung des                    (Ermittlung des Nettoverdienstes
 Bruttoentgelts für eine            durch Verrechnung der Abzüge)
 Periode: Löhne, Provisionen,        │              │
 Gehälter, Azubivergütungen)         ▼              ▼
                              Zahlungsrechnung   Auswertungsrechnung
                               ▪ Steuerabrechnung  ▪ Buchhaltung
                               ▪ Mitarbeiterabr.   ▪ Kostenrechnung
                               ▪ Sozialvers.abr.   ▪ Controlling
                               ▪ Verm.wirks. Leist.▪ Kostenstellenkontrolle
                               ▪ Lohnpfändungen
                               ▪ Mieteinbehaltungen
                               ▪ Vorschusszahlungen
```
### Inhaltliche Rekonstruktion
- **Bruttorechnung:** Ermittlung des Bruttoentgelts für eine Periode (Löhne, Provisionen, Gehälter, Azubivergütungen).
- **Nettorechnung:** Ermittlung des Nettoverdienstes durch Verrechnung der Abzüge.

| Zahlungsrechnung | Auswertungsrechnung |
| --- | --- |
| Steuerabrechnung | Buchhaltung |
| Mitarbeiterabrechnung | Kostenrechnung |
| Sozialversicherungsabrechnung | Controlling |
| Vermögenswirksame Leistungen | Kostenstellenkontrolle |
| Lohnpfändungen | |
| Mieteinbehaltungen | |
| Vorschusszahlungen | |
### Fachliche Aussage
Die Entgeltabrechnung führt von der Bruttorechnung (Bruttoentgelt) zur Nettorechnung (Nettoverdienst nach Abzügen), die sich in Zahlungs- und Auswertungsrechnung aufgliedert.
### React-Vorschlag
`BruttoNettoFlow` – Flow-Layout (zwei Stufen mit Pfeil, darunter zwei verzweigte Blöcke mit Bulletlisten); Pfeile per CSS/SVG, auf Mobile vertikal gestapelt.

## Folie 21 - Aufgabe · Gruppenübung
### In der MD vorhanden
Die MD enthält den vollständigen Aufgabentext (Zeilen 340-353) inkl. Leitfrage. Vollständig. (Folientitel lautet nur "Aufgabe / Gruppenübung"; "Dr. Mustermann" stammt aus dem Fließtext.)
### Fehlende visuelle Inhalte
Gleiches Foto wie Folie 7 (lachende Personen im Kreis, Köpfe zur Mitte) links; rechts der Fallbeschreibungstext, Leitfrage fett. Abweichendes Layout wie Folie 7.
### Visuelle Rekonstruktion
```
[Foto: Personen im Kreis] | Fallbeschreibung Dr. Mustermann ...
                          | **Warum ist das rechtens bzw. warum ist es das nicht?**
```
### Inhaltliche Rekonstruktion
Per Aushang und im Internet werden die Beschäftigten der „Minimum AG" darüber informiert, dass für sie in Zukunft Dr. med. Mustermann zuständig sei. Angesichts der im gesamten Unternehmen viel zu hohen Fehlzeiten müssten sie ihn statt ihres bisherigen Hausarztes aufsuchen, wenn sie erkranken. Dr. Mustermann werde den Personalleiter über jede Krankheit genauestens informieren.
**Warum ist das rechtens bzw. warum ist es das nicht?**
### Fachliche Aussage
Fallübung zu Datenschutz/Persönlichkeitsrechten: Zulässigkeit der Pflicht-Betriebsarzt-Regelung und der Weitergabe von Gesundheitsdaten an den Personalleiter.
### React-Vorschlag
`AufgabenKarte` (Wiederverwendung von Folie 7).

## Folie 22 - Datenschutz · Definition
### In der MD vorhanden
Die MD enthält Definition und die drei Ziele (Zeilen 356-363). Vollständig.
### Fehlende visuelle Inhalte
Rechts ein großes schwarzes Vorhängeschloss-Icon (geschlossenes Schloss mit rundem Schlüsselloch). Links oben der Definitionssatz, darunter fett "Ziele" mit drei quadratischen Bullets.
### Visuelle Rekonstruktion
```
Maßnahmen zum Schutz vor dem Missbrauch personenbezogener Daten
Ziele                                              [Schloss-Icon]
 ▪ Sicherung der Privatsphäre der Mitarbeiter
 ▪ Bewahrung der Vertraulichkeit der Daten
 ▪ Verhüten des Missbrauchs der Daten
```
### Inhaltliche Rekonstruktion
**Definition:** Maßnahmen zum Schutz vor dem Missbrauch personenbezogener Daten.

**Ziele:**
- Sicherung der Privatsphäre der Mitarbeiter
- Bewahrung der Vertraulichkeit der Daten
- Verhüten des Missbrauchs der Daten
### Fachliche Aussage
Datenschutz umfasst alle Maßnahmen zum Schutz vor Missbrauch personenbezogener Daten und zielt auf Privatsphäre, Vertraulichkeit und Missbrauchsverhütung.
### React-Vorschlag
`DefinitionMitIcon` (Text links, dekoratives Lock-Icon rechts; Bulletliste für Ziele).

## Folie 23 - Datenschutz · DSGVO (Inkrafttreten / Geltung)
### In der MD vorhanden
Die MD enthält alle Inhalte (Zeilen 366-380), in zerbrochene Tabellen aufgeteilt. Inhaltlich rekonstruierbar. (Folienuntertitel lautet schlicht "DSGVO".)
### Fehlende visuelle Inhalte
Rechts ein schwarzes Silhouetten-Icon des europäischen Kontinents (Umriss Europas). Links Einleitungssatz und Bulletliste (3 quadratische Bullets + 2 weitere); der Klammerzusatz "(auch für Firmen ...)" steht als eigene, nicht gebulletete Zeile unter "Gilt in ganz Europa".
### Visuelle Rekonstruktion
```
Am 25.05.2018 trat die Datenschutz-Grundverordnung (DSGVO) in Kraft   [Europa-Umriss, schwarz]
 ▪ Europäisches Recht
 ▪ Unmittelbar anwendbar
 ▪ Gilt in ganz Europa
 (auch für Firmen, die anderswo ihren Firmensitz haben, wenn sie sich
  mit ihren Dienstleistungsangeboten an Personen in der EU richten)
 ▪ Das Bundesdatenschutzgesetz (BDSG) neue Fassung füllt nur noch Lücken aus.
   Es sind Öffnungsklauseln im DSGVO vorgesehen.
 ▪ Andere Gesetze mit datenschutzrechtlichen Vorschriften mussten, falls erforderlich,
   an die DSGVO angepasst werden.
```
### Inhaltliche Rekonstruktion
Am 25.05.2018 trat die Datenschutz-Grundverordnung (DSGVO) in Kraft.
- Europäisches Recht
- Unmittelbar anwendbar
- Gilt in ganz Europa (auch für Firmen, die anderswo ihren Firmensitz haben, wenn sie sich mit ihren Dienstleistungsangeboten an Personen in der EU richten)
- Das Bundesdatenschutzgesetz (BDSG) neue Fassung füllt nur noch Lücken aus. Es sind Öffnungsklauseln im DSGVO vorgesehen.
- Andere Gesetze mit datenschutzrechtlichen Vorschriften mussten, falls erforderlich, an die DSGVO angepasst werden.
### Fachliche Aussage
Die DSGVO gilt seit 25.05.2018 als unmittelbar anwendbares EU-Recht europaweit (auch für Drittstaaten-Firmen mit EU-Bezug); das BDSG-neu füllt nur noch Lücken über Öffnungsklauseln.
### React-Vorschlag
`DsgvoInfo` (Text/Bulletliste links, dekoratives Europa-Icon rechts).

## Folie 24 - Datenschutz · DSGVO (Neuerungen)
### In der MD vorhanden
Die MD enthält alle sieben Punkte (Zeilen 383-392) und die Quelle "vgl. Wickert R. Dornbach (2018)". Vollständig.
### Fehlende visuelle Inhalte
Rechts erneut das schwarze Europa-Umriss-Icon. Links eine Bulletliste mit sieben quadratischen Bullets (großzügige Zeilenabstände); Quelle klein unter dem Icon rechts.
### Visuelle Rekonstruktion
```
 ▪ Drastisch erhöhte Bußgelder            [Europa-Umriss, schwarz]
 ▪ Erweitere zivilrechtliche Haftung
 ▪ Stark erweiterte Dokumentations- und Nachweispflichten
 ▪ Risikobasierter Datenschutz
 ▪ Erweiterte Meldepflichten bei Datenpannen
 ▪ Verschärfte Löschvorschriften
 ▪ Recht auf Vergessenwerden (im Internet)
                                          Quelle: vgl. Wickert R. Dornbach (2018)
```
### Inhaltliche Rekonstruktion
- Drastisch erhöhte Bußgelder
- Erweiterte zivilrechtliche Haftung *(auf der Folie als „Erweitere" geschrieben)*
- Stark erweiterte Dokumentations- und Nachweispflichten
- Risikobasierter Datenschutz
- Erweiterte Meldepflichten bei Datenpannen
- Verschärfte Löschvorschriften
- Recht auf Vergessenwerden (im Internet)

*Quelle: vgl. Wickert R. Dornbach (2018)*
### Fachliche Aussage
Die DSGVO bringt zentrale Neuerungen: höhere Bußgelder, erweiterte Haftung und Dokumentationspflichten, risikobasierten Ansatz, Meldepflichten bei Datenpannen, verschärfte Löschvorschriften und das Recht auf Vergessenwerden.
### React-Vorschlag
`DsgvoNeuerungen` (Bulletliste + dekoratives Europa-Icon, Quelle als `source-note`).

## Folie 25 - Datenschutz · DSGVO (Artikel 1)
### In der MD vorhanden
Die MD enthält die Inhalte zu Artikel 1, Abs. 1 und Abs. 2 (Zeilen 396-406). Vollständig. (Folienuntertitel: "DSGVO".)
### Fehlende visuelle Inhalte
Rechts ein großes schwarzes Richterhammer-Icon (Gavel mit Klangblock darunter). Links Bulletliste mit drei quadratischen Bullets; die Abs.-Zitate stehen in Anführungszeichen.
### Visuelle Rekonstruktion
```
 ▪ In Artikel 1 werden Gegenstand und Ziele dargestellt   [Richterhammer-Icon]
 ▪ Abs. 1: „Diese Verordnung enthält Vorschriften zum Schutz
   natürlicher Personen bei der Verarbeitung personenbezogener
   Daten und zum freien Verkehr solcher Daten."
 ▪ Abs. 2: „Diese Verordnung schützt die Grundrechte natürlicher
   Personen und insbesondere deren Recht auf Schutz
   personenbezogener Daten."
```
### Inhaltliche Rekonstruktion
- In Artikel 1 werden Gegenstand und Ziele dargestellt.
- Abs. 1: „Diese Verordnung enthält Vorschriften zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten und zum freien Verkehr solcher Daten."
- Abs. 2: „Diese Verordnung schützt die Grundrechte natürlicher Personen und insbesondere deren Recht auf Schutz personenbezogener Daten."
### Fachliche Aussage
Artikel 1 DSGVO legt Gegenstand und Ziele fest: Schutz natürlicher Personen bei der Datenverarbeitung, freier Datenverkehr sowie Schutz des Grundrechts auf Datenschutz.
### React-Vorschlag
`GesetzesArtikel` (Zitatblöcke als `blockquote`, dekoratives Gavel-Icon rechts).

## Folie 26 - DSGVO · Artikel 4 Nr. 1 – Personenbezogene Daten
### In der MD vorhanden
Die MD enthält den vollständigen Definitionstext aus Art. 4 Nr. 1 (Zeilen 409-425). Vollständig.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Ausweiskarten-/ID-Icon (Karte mit Person-Silhouette links und drei Textbalken rechts, oben ein Lanyard-Clip/Aufhänger). Links der zusammenhängende Definitionstext (Zitat, schmaler linker Textblock).
### Visuelle Rekonstruktion
```
„Personenbezogene Daten" sind alle Informationen, die sich   [ID-Karten-Icon]
auf eine identifizierte oder identifizierbare natürliche
Person (… „betroffene Person") beziehen; … mittels Zuordnung
zu Namen, Kennnummer, Standortdaten, Online-Kennung … oder
besonderen Merkmalen (physisch, physiologisch, genetisch,
psychisch, wirtschaftlich, kulturell, sozial) identifiziert
werden kann;
```
### Inhaltliche Rekonstruktion
„Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
### Fachliche Aussage
Art. 4 Nr. 1 DSGVO definiert personenbezogene Daten als alle Informationen über eine identifizierte oder identifizierbare natürliche Person (direkt/indirekt, z. B. über Name, Kennnummer, Standort- oder Online-Daten).
### React-Vorschlag
`GesetzesArtikel` (Wiederverwendung von Folie 25; Zitatblock + dekoratives ID-Card-Icon).

## Folie 27 - DSGVO · Artikel 4 Nr. 2 – Verarbeitung
### In der MD vorhanden
Der Definitionstext ist (zerbrochen, mit eingestreuten Tabellenfragmenten) vorhanden: „Jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verarbeitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.“
### Fehlende visuelle Inhalte
Rechts ein schwarzes Piktogramm (Icon): unten links ein Desktop-Monitor auf Standfuß, oben rechts eine Wolke (Cloud); zwei gebogene Pfeile bilden einen Kreislauf zwischen Monitor und Cloud (ein Pfeil oben links nach oben/zur Wolke gerichtet, ein Pfeil rechts nach unten zurück) — symbolisiert Datenaustausch/Datenverarbeitung zwischen lokalem Rechner und Cloud.
### Visuelle Rekonstruktion
```
[Monitor]  ⇄  [Cloud]
   (zwei kreisende Pfeile = Datenverarbeitung)
```
### Inhaltliche Rekonstruktion
Legaldefinition „Verarbeitung“ (Art. 4 Nr. 2 DSGVO) umfasst u. a.: Erheben, Erfassen, Organisation, Ordnen, Speicherung, Anpassung/Veränderung, Auslesen, Abfragen, Verwendung, Offenlegung durch Übermittlung, Bereitstellung, Abgleich, Verknüpfung, Einschränkung, Löschen, Vernichtung.
### Fachliche Aussage
Praktisch jeder Umgang mit personenbezogenen Daten – ob automatisiert oder nicht – fällt unter den weiten Verarbeitungsbegriff der DSGVO.
### React-Vorschlag
`DefinitionCallout` mit zentralem Definitionszitat und begleitendem Icon (Monitor↔Cloud); die Verarbeitungsarten als `TagList`/Chips.

## Folie 28 - DSGVO · Artikel 5
### In der MD vorhanden
Vollständig: Überschrift „Grundsätze für die Verarbeitung personenbezogener Daten“ plus die sieben Aufzählungspunkte.
### Fehlende visuelle Inhalte
Rechts dasselbe schwarze Piktogramm wie Folie 27 (Monitor + Cloud mit zwei kreisenden Pfeilen). Die sieben Punkte sind im Original als Bullet-Liste (gefüllte Quadrate ▪) gesetzt. Hinweis: Der erste Punkt lautet auf der Folie exakt „Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz“ (drei Teilaspekte in einer Zeile).
### Visuelle Rekonstruktion
```
Liste (▪):
1 Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz
2 Zweckbindung
3 Datenminimierung
4 Richtigkeit
5 Speicherbegrenzung
6 Integrität und Vertraulichkeit
7 Rechenschaftspflicht
```
### Inhaltliche Rekonstruktion
Grundsätze (Art. 5 DSGVO): Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz · Zweckbindung · Datenminimierung · Richtigkeit · Speicherbegrenzung · Integrität und Vertraulichkeit · Rechenschaftspflicht.
### Fachliche Aussage
Art. 5 DSGVO formuliert die sieben tragenden Verarbeitungsgrundsätze, an denen jede Datenverarbeitung gemessen wird.
### React-Vorschlag
`PrincipleList` (nummerierte Karten/Chips für die 7 Grundsätze) mit Begleit-Icon.

## Folie 29 - DSGVO · Artikel 7
### In der MD vorhanden
Vollständig: „Bedingungen für die Einwilligung“ mit den vier Punkten (Freiwillige Entscheidung der betroffenen Person, Informierte Entscheidung der betroffenen Person, Für einen oder mehrere bestimmte Zwecke, Jederzeit widerrufbar mit Wirkung ab sofort).
### Fehlende visuelle Inhalte
Rechts ein schwarzes Icon: ein Klemmbrett (Clipboard) mit Klammer oben; auf dem Blatt vier Zeilen, jeweils ein abgehaktes Häkchen (✓) links und ein ausgefüllter Balken rechts — symbolisiert eine Checkliste/erfüllte Bedingungen.
### Visuelle Rekonstruktion
```
[Clipboard]
 ✓ ▬▬
 ✓ ▬▬
 ✓ ▬▬
 ✓ ▬▬
```
### Inhaltliche Rekonstruktion
Einwilligung (Art. 7 DSGVO) muss sein: 1) Freiwillige Entscheidung der betroffenen Person · 2) Informierte Entscheidung der betroffenen Person · 3) Für einen oder mehrere bestimmte Zwecke · 4) Jederzeit widerrufbar, mit Wirkung ab sofort.
### Fachliche Aussage
Eine wirksame Einwilligung ist freiwillig, informiert, zweckbestimmt und jederzeit widerrufbar.
### React-Vorschlag
`ChecklistCard` mit vier Häkchen-Items neben dem Clipboard-Icon.

## Folie 30 - DSGVO · Bußgelder (10 Mio. / 2 %)
### In der MD vorhanden
Inhalte vorhanden, aber zerbrochen: „Verstoß gegen“ mit den vier Stichpunkten und die Aussage „Verschärfung Bußgeldrahmens: Bußgelder bis 10 Mio. Euro oder 2 % vom Umsatz“.
### Fehlende visuelle Inhalte
1) Rechts ein schwarzes Geldschein-Icon (Banknote mit ovalem Porträtkreis in der Mitte, zwei kleinere Punkte links/rechts, dahinter zwei aufgefächerte weitere Scheine). 2) Unter den Stichpunkten ein großer, nach unten zeigender grauer Pfeil (Dreieckspfeil) als visuelle „führt-zu“-Verbindung zur Konsequenz darunter.
### Visuelle Rekonstruktion
```
Verstoß gegen:
 ▪ Schutzmaßnahmen
 ▪ Auftragsdatenverarbeitung
 ▪ Datenschutz-Folgeabschätzung
 ▪ Bestellung Datenschutzbeauftragten
            ▼ (grauer Pfeil)
 Verschärfung Bußgeldrahmens:
 Bußgelder bis 10 Mio. € oder 2 % vom Umsatz   [Geldschein-Icon]
```
### Inhaltliche Rekonstruktion
Verstoß gegen: Schutzmaßnahmen · Auftragsdatenverarbeitung · Datenschutz-Folgeabschätzung · Bestellung Datenschutzbeauftragten. → Verschärfung des Bußgeldrahmens: Bußgelder bis 10 Mio. Euro oder 2 % vom Umsatz.
### Fachliche Aussage
Bei Verstößen gegen organisatorisch-formale Pflichten drohen Bußgelder bis 10 Mio. € oder 2 % des Umsatzes (untere Stufe, Art. 83 Abs. 4 DSGVO).
### React-Vorschlag
`PenaltyCard` mit Verstoßliste, Abwärtspfeil-Konnektor und hervorgehobenem Bußgeld-Betrag (gepaart mit Folie 31 in einem `Tabs`/`SplitCompare`).

## Folie 31 - DSGVO · Bußgelder (20 Mio. / 4 %)
### In der MD vorhanden
Inhalte vorhanden, aber zerbrochen: „Verstoß gegen“ mit fünf Stichpunkten und „Verschärfung Bußgeldrahmens: Bußgelder bis 20 Mio. Euro oder 4 % vom Umsatz“.
### Fehlende visuelle Inhalte
Identisches Geldschein-Icon wie Folie 30 rechts; identischer großer grauer Abwärtspfeil unter der Liste, der zur Bußgeld-Konsequenz führt.
### Visuelle Rekonstruktion
```
Verstoß gegen:
 ▪ Gegen die Grundsätze des Art. 5 DSGVO
 ▪ Rechtmäßigkeit der Verarbeitung
 ▪ Einwilligungsgrundsätze
 ▪ Rechte der Betroffenen
 ▪ Zusammenarbeit mit Aufsichtsbehörde
            ▼ (grauer Pfeil)
 Verschärfung Bußgeldrahmens:
 Bußgelder bis 20 Mio. € oder 4 % vom Umsatz   [Geldschein-Icon]
```
### Inhaltliche Rekonstruktion
Verstoß gegen: die Grundsätze des Art. 5 DSGVO · Rechtmäßigkeit der Verarbeitung · Einwilligungsgrundsätze · Rechte der Betroffenen · Zusammenarbeit mit Aufsichtsbehörde. → Verschärfung des Bußgeldrahmens: Bußgelder bis 20 Mio. Euro oder 4 % vom Umsatz.
### Fachliche Aussage
Schwere Verstöße (gegen Grundsätze, Betroffenenrechte etc.) lösen die obere Bußgeldstufe von bis zu 20 Mio. € oder 4 % des Umsatzes aus (Art. 83 Abs. 5 DSGVO).
### React-Vorschlag
`PenaltyCard` (zweite Stufe), als Gegenstück zu Folie 30 in einer `SplitCompare`-Darstellung 10/2 % vs. 20/4 %.

## Folie 32 - DSGVO · Sanktionen
### In der MD vorhanden
Vollständig vorhanden (sauber als Liste): Datenpannen/Datenverlust (Art. 33), kleinere Verstöße (Art. 83 Abs. 4), größere Verstöße (Art. 83 Abs. 5), Recht auf Schadenersatz (Art. 82). Hinweis: Auf der Folie steht wörtlich „Kleiner Verstöße“ (Tippfehler im Original) und „Art-33“ (mit Bindestrich statt Punkt); inhaltlich gemeint sind „Kleinere Verstöße“ bzw. „Art. 33“.
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik. Struktur: Haupt-Bullets (▪) mit eingerückten Unter-Bullets (–) für Betrag/Erläuterung.
### Visuelle Rekonstruktion
```
▪ Datenpannen/Datenverlust (Art. 33 DSGVO)
   – „vergleichbar wirksame“ öffentliche Bekanntmachung der „Datenpanne“,
     wenn eine Mitteilung an die Betroffenen nicht möglich ist
▪ Kleiner[e] Verstöße (Art. 83 Abs. 4 DSGVO)
   – bis zu 10.000.000 € Strafe oder bis zu 2 % des gesamten weltweit
     erzielten Jahresumsatzes des vorangegangenen Geschäftsjahres
▪ Größere Verstöße (Art. 83 Abs. 5 DSGVO)
   – bis zu 20.000.000 € Strafe oder bis zu 4 % des gesamten weltweit
     erzielten Jahresumsatzes des vorangegangenen Geschäftsjahres
▪ Recht auf Schadenersatz des Betroffenen (Art. 82 DSGVO)
```
### Inhaltliche Rekonstruktion
| Sanktion | Norm | Höhe/Folge |
|---|---|---|
| Datenpannen/Datenverlust | Art. 33 | „Vergleichbar wirksame“ öffentliche Bekanntmachung, wenn Mitteilung an Betroffene nicht möglich |
| Kleinere Verstöße | Art. 83 Abs. 4 | bis zu 10 Mio. € oder bis zu 2 % Weltjahresumsatz (Vorjahr) |
| Größere Verstöße | Art. 83 Abs. 5 | bis zu 20 Mio. € oder bis zu 4 % Weltjahresumsatz (Vorjahr) |
| Schadenersatzanspruch | Art. 82 | Recht des Betroffenen |
### Fachliche Aussage
Die DSGVO sieht ein abgestuftes Sanktionssystem mit Melde-/Bekanntmachungspflichten, zwei Bußgeldstufen und einem zivilrechtlichen Schadenersatzanspruch vor.
### React-Vorschlag
`SanctionTable` bzw. verschachtelte `NestedList` mit Artikel-Badges.

## Folie 33 - DSGVO · Anklage
### In der MD vorhanden
Vollständig (zerbrochen in Tabellenzeilen): Leitfrage „Wer kann wen verklagen und abmahnen?“, die zwei Textabschnitte und die Quelle.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Icon eines Richterhammers (Gavel) samt Schlagklotz/Sockel darunter — symbolisiert Justiz/behördliches Einschreiten.
### Visuelle Rekonstruktion
```
Frage: Wer kann wen verklagen und abmahnen?   [Richterhammer-Icon]
Text 1: Als kleines oder mittelgroßes Unternehmen ist es eher unwahrscheinlich
        ins Visier der Datenschutzbehörden zu gelangen.
Text 2: Die Aufgabe Datenschutzverstößen nachzugehen und ggf. einzuschreiten
        liegt bei den Landesdatenschutzbehörden.
```
### Inhaltliche Rekonstruktion
- Leitfrage: Wer kann wen verklagen und abmahnen?
- Als kleines oder mittelgroßes Unternehmen ist es eher unwahrscheinlich, ins Visier der Datenschutzbehörden zu gelangen.
- Die Aufgabe, Datenschutzverstößen nachzugehen und ggf. einzuschreiten, liegt bei den Landesdatenschutzbehörden.

*Quelle: https://www.impulse.de/recht-steuern/rechtsratgeber/dsgvo/7297860.html*
### Fachliche Aussage
Zuständig für die Verfolgung von Datenschutzverstößen sind die Landesdatenschutzbehörden; KMU stehen seltener im Fokus.
### React-Vorschlag
`QuestionAnswerCard` mit Gavel-Icon und Quellenhinweis (`source-note`).

## Folie 34 - DSGVO · Regeln
### In der MD vorhanden
Vollständig (teils zerbrochen): die drei Regelpunkte inkl. der Klammererläuterung zum Widerrufsmanagement. Hinweis: Auf der Folie steht „Double-Opt in“ (so geschrieben).
### Fehlende visuelle Inhalte
Rechts dasselbe Clipboard-Checklisten-Icon wie Folie 29 (Klemmbrett mit vier Häkchen-Zeilen ✓ + Balken).
### Visuelle Rekonstruktion
```
▪ Double-Opt in bei Newsletter-Anmeldungen
▪ Richtige Datenschutzerklärung auf der Website
▪ Widerrufsmanagement für Datenprozesse ( das heißt: eine
   Aufklärung darüber, wie zum Beispiel Kunden die Erlaubnis,
   ihre Daten zu verarbeiten, widerrufen können)
                                         [Clipboard ✓✓✓✓]
```
### Inhaltliche Rekonstruktion
Praktische Regeln: Double-Opt-in bei Newsletter-Anmeldungen · Richtige Datenschutzerklärung auf der Website · Widerrufsmanagement für Datenprozesse (das heißt: eine Aufklärung darüber, wie zum Beispiel Kunden die Erlaubnis, ihre Daten zu verarbeiten, widerrufen können).
### Fachliche Aussage
Zur praktischen DSGVO-Umsetzung gehören Double-Opt-in, eine korrekte Datenschutzerklärung und ein Widerrufsmanagement.
### React-Vorschlag
`RuleChecklist` mit Clipboard-Icon.

## Folie 35 - DSGVO · Vorgabe Datenschutz
### In der MD vorhanden
Vollständig (zerbrochen): Leitfrage „Schreibt das Gesetz vor, wie man seine Daten schützen muss?“ und die drei Antwortpunkte.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Icon eines Dokuments/Listenblatts: rechteckiger Rahmen, darin vier Zeilen, jeweils ein längerer Balken links und ein kleines Quadrat rechts (stilisierte Liste/Formular).
### Visuelle Rekonstruktion
```
Frage: Schreibt das Gesetz vor, wie man seine Daten schützen muss?
▪ Nein. Unternehmen müssen selbst beurteilen welche
  Datenverarbeitungen sie auf welche Rechtsgrundlage stellen können.
▪ Der Schutz muss auf dem aktuellem Stand der Technik sein.
▪ Im Zweifel bei den Datenschutzbehörden nachfragen
                                        [Dokument-/Listen-Icon]
```
### Inhaltliche Rekonstruktion
- Nein. Unternehmen müssen selbst beurteilen, welche Datenverarbeitungen sie auf welche Rechtsgrundlage stellen können.
- Der Schutz muss auf dem aktuellen Stand der Technik sein.
- Im Zweifel bei den Datenschutzbehörden nachfragen.
### Fachliche Aussage
Die DSGVO schreibt keine konkreten Schutzmaßnahmen vor; Unternehmen wählen risikoangemessen die Rechtsgrundlage und müssen den Stand der Technik einhalten.
### React-Vorschlag
`QuestionAnswerCard` mit „Nein …“-Hervorhebung und Dokument-Icon.

## Folie 36 - Datenschutz · Aufgaben
### In der MD vorhanden
Vollständig: die fünf Aufgabenpunkte (Bestellung eines Datenschutzbeauftragten, Verzeichnis der Verarbeitungstätigkeiten anlegen, Prozesse festlegen und Prozesshandbuch schreiben, Datenschutz-Folgeabschätzung durchführen wenn nötig, alle Anstrengungen dokumentieren).
### Fehlende visuelle Inhalte
Rechts dasselbe Clipboard-Checklisten-Icon wie Folien 29/34 (Klemmbrett mit vier Häkchen ✓ + Balken).
### Visuelle Rekonstruktion
```
▪ Bestellung eines Datenschutzbeauftragten
▪ Verzeichnis der Verarbeitungstätigkeiten anlegen
▪ Prozesse festlegen und Prozesshandbuch schreiben
▪ Datenschutz-Folgeabschätzung durchführen, wenn nötig
▪ Alle Anstrengungen dokumentieren          [Clipboard ✓✓✓✓]
```
### Inhaltliche Rekonstruktion
Aufgaben im Datenschutz: DSB bestellen · Verzeichnis der Verarbeitungstätigkeiten anlegen · Prozesse festlegen und Prozesshandbuch schreiben · Datenschutz-Folgeabschätzung durchführen (wenn nötig) · alle Anstrengungen dokumentieren.
### Fachliche Aussage
Die organisatorischen Pflichtaufgaben zur DSGVO-Compliance reichen von DSB-Bestellung über Dokumentation bis zur Folgeabschätzung.
### React-Vorschlag
`TaskChecklist` mit Clipboard-Icon.

## Folie 37 - Datenschutzbeauftragte(r) · Benennungspflicht
### In der MD vorhanden
Vollständig: Einleitung zur Benennungspflicht (Art. 37 Abs. 1 DSGVO i.V.m. § 38 Abs. 1 BDSG-neu) und die drei Kriterien.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Icon einer Person mit langen Haaren, die an einem Laptop sitzt; auf dem Laptop-Display Code-Klammern „</>“ (symbolisiert IT/Datenverarbeitung). Dieses Icon wiederholt sich auf Folien 38–41.
### Visuelle Rekonstruktion
```
Einleitung: Benennungspflicht des Datenschutzbeauftragten entspricht
            grundsätzlich dem derzeitigen Recht
            (Art. 37 Abs. 1 DSGVO i.V.m. § 38 Abs. 1 BDSG-neu)
▪ Ab 20 Personen, die ständig mit der automatisierten
  personenbezogenen Datenverarbeitung beschäftigt sind
▪ Kerntätigkeit: umfangreiche und systematische Überwachung von
  Betroffenen oder Verarbeitung sensibler Daten i.S.d. Art. 9 oder 10 DSGVO
▪ Unabhängig von der Anzahl der Personen, wenn Verarbeitungen pbD
  vorliegen, die einer Datenschutz-Folgeabschätzung unterliegen
                                                  [Person@Laptop-Icon]
```
### Inhaltliche Rekonstruktion
DSB-Benennungspflicht (Art. 37 Abs. 1 DSGVO i.V.m. § 38 Abs. 1 BDSG-neu):
- Ab 20 Personen, die ständig mit der automatisierten personenbezogenen Datenverarbeitung beschäftigt sind.
- Kerntätigkeit: umfangreiche und systematische Überwachung von Betroffenen oder Verarbeitung sensibler Daten i.S.d. Art. 9 oder 10 DSGVO.
- Unabhängig von der Anzahl der Personen, wenn Verarbeitungen pbD vorliegen, die einer Datenschutz-Folgeabschätzung unterliegen.
### Fachliche Aussage
Ein DSB ist insbesondere ab 20 ständig mit automatisierter Datenverarbeitung Beschäftigten, bei sensibler Kerntätigkeit oder bei DSFA-pflichtigen Verarbeitungen zu benennen.
### React-Vorschlag
`ObligationCard` mit drei Trigger-Kriterien und Person@Laptop-Icon.

## Folie 38 - Datenschutzbeauftragte(r) · Aufgaben (1)
### In der MD vorhanden
Vollständig (zerbrochen): die fünf Aufgabenpunkte (berät Verantwortliche – ohne sie keine Entscheidung, sensibilisiert/schult MitarbeiterInnen – Stichwort sicheres Passwort, arbeitet mit Datenschutzbehörde zusammen, Ansprechpartner für Betroffene, berät bei DSFA).
### Fehlende visuelle Inhalte
Rechts das Person-am-Laptop-Icon mit „</>“-Code-Symbol (wie Folie 37).
### Visuelle Rekonstruktion
```
▪ Er/Sie berät die Verantwortlichen im Unternehmen in Sachen
  Datenschutz – kann aber ohne sie keine Entscheidung treffen.
▪ Er/Sie sensibilisiert und schult andere MitarbeiterInnen.
  Stichwort: sicheres Passwort
▪ Er/Sie arbeitet mit der Datenschutzbehörde zusammen
▪ Er/Sie ist AnsprechpartnerIn für betroffene Personen.
▪ Er/Sie berät die Verantwortlichen bei einer
  Datenschutz-Folgeabschätzung                  [Person@Laptop-Icon]
```
### Inhaltliche Rekonstruktion
Aufgaben des DSB: berät die Verantwortlichen (ohne sie keine Entscheidung) · sensibilisiert und schult MitarbeiterInnen (Stichwort: sicheres Passwort) · arbeitet mit der Datenschutzbehörde zusammen · ist AnsprechpartnerIn für betroffene Personen · berät die Verantwortlichen bei einer Datenschutz-Folgeabschätzung.
### Fachliche Aussage
Der DSB hat eine beratende, schulende und vermittelnde Rolle, trifft aber selbst keine Entscheidungen.
### React-Vorschlag
`RoleTaskList` (Teil 1 von 3) mit Person@Laptop-Icon.

## Folie 39 - Datenschutzbeauftragte(r) · Aufgaben (2)
### In der MD vorhanden
Vollständig (zerbrochen): die sechs Aufgabenpunkte (Übersicht über Art der gespeicherten Daten, Liste der Empfänger, Überwachung Software/Datensicherheit, Veranlassen von Berichtigung/Löschung/Sperrung, Belehrung der Mitarbeiter, Verpflichtung auf Datenschutzgeheimnis).
### Fehlende visuelle Inhalte
Rechts das Person-am-Laptop-Icon mit „</>“ (wie Folie 37/38).
### Visuelle Rekonstruktion
```
▪ Führen einer Übersicht über die Art der personenbezogenen gespeicherten Daten
▪ Führen einer Liste über alle regelmäßigen Empfänger von personenbezogenen Daten
▪ Überwachung der ordnungsgemäßen Anwendung der Software und das die Daten geschützt sind
▪ Veranlassen der ordnungsgemäßen Berichtigung, Löschung und Sperrung von Daten
▪ Belehrung der betroffenen Mitarbeiter über Datenschutz
▪ Verpflichtung aller Mitarbeiter auf Datenschutzgeheimnis   [Person@Laptop-Icon]
```
### Inhaltliche Rekonstruktion
Weitere DSB-Aufgaben: Übersicht über die Art der gespeicherten pbD führen · Liste aller regelmäßigen Empfänger führen · ordnungsgemäße Anwendung der Software und Datensicherheit überwachen · Berichtigung/Löschung/Sperrung von Daten veranlassen · betroffene Mitarbeiter über Datenschutz belehren · alle Mitarbeiter auf das Datenschutzgeheimnis verpflichten.
### Fachliche Aussage
Der DSB führt zentrale Verzeichnisse, überwacht Datensicherheit und Betroffenenrechte und verpflichtet/belehrt die Belegschaft.
### React-Vorschlag
`RoleTaskList` (Teil 2 von 3) mit Person@Laptop-Icon.

## Folie 40 - Datenschutzbeauftragte(r) · Aufgaben (3)
### In der MD vorhanden
Vollständig (zerbrochen): Schutz von pbD – keine Unternehmensdaten (mit Unterpunkten Kundendaten mit Personenbezug / Personaldaten und deren Verarbeitung), Erstellung/Pflege Verarbeitungsverzeichnis, Beratung des Unternehmens, Erstellung datenschutzrelevanter Verträge, Kommunikation mit Aufsicht/Behörden auf Wunsch.
### Fehlende visuelle Inhalte
Rechts das Person-am-Laptop-Icon mit „</>“ (wie Folie 37–39). Erste Aufzählung mit eingerückten Unter-Bullets (–).
### Visuelle Rekonstruktion
```
▪ Schutz von personenbezogenen Daten – keine Unternehmensdaten
   – Kundendaten mit Personenbezug
   – Personaldaten und deren Verarbeitung
▪ Erstellung und Pflege des Verarbeitungsverzeichnisses
▪ Beratung des Unternehmens in datenschutzrelevanten Angelegenheiten
▪ Erstellung von datenschutzrelevanten Verträgen
▪ Kommunikation mit Datenschutzaufsicht und Behörden auf Wunsch   [Person@Laptop-Icon]
```
### Inhaltliche Rekonstruktion
DSB-Aufgaben (Fortsetzung): Schutz von pbD – keine Unternehmensdaten (Kundendaten mit Personenbezug; Personaldaten und deren Verarbeitung) · Erstellung und Pflege des Verarbeitungsverzeichnisses · Beratung in datenschutzrelevanten Angelegenheiten · Erstellung datenschutzrelevanter Verträge · Kommunikation mit Datenschutzaufsicht und Behörden auf Wunsch.
### Fachliche Aussage
Der DSB schützt ausschließlich personenbezogene (nicht reine Unternehmens-)Daten und ist für Verzeichnis, Beratung, Verträge und Behördenkommunikation zuständig.
### React-Vorschlag
`RoleTaskList` (Teil 3 von 3) mit verschachtelter Unterliste und Person@Laptop-Icon.

## Folie 41 - Datenschutzbeauftragte(r) · Schutzrechte
### In der MD vorhanden
Vollständig (zerbrochen): Leitfrage „Welche Besonderheiten gelten für den Datenschutzbeauftragten im Unternehmen?“ und die drei Punkte (Abberufungsschutz und Benachteiligungsverbot, Kündigungsschutz – nur fristlose Kündigung aus wichtigem Grund/BDSG-neu, Anspruch auf Einbindung/Fortbildung/Unterstützung).
### Fehlende visuelle Inhalte
Rechts das Person-am-Laptop-Icon mit „</>“ (wie Folie 37–40).
### Visuelle Rekonstruktion
```
Frage: Welche Besonderheiten gelten für den Datenschutzbeauftragten
       im Unternehmen?
▪ Abberufungsschutz und Benachteiligungsverbot
▪ Kündigungsschutz. Möglich ist nur eine fristlose Kündigung aus
  wichtigem Grund. Basis ist das deutsche Ergänzungsgesetz BDSG-neu.
▪ Anspruch auf Einbindung, Fortbildung und Unterstützung   [Person@Laptop-Icon]
```
### Inhaltliche Rekonstruktion
Schutzrechte des DSB: Abberufungsschutz und Benachteiligungsverbot · Kündigungsschutz (nur fristlose Kündigung aus wichtigem Grund; Basis: deutsches Ergänzungsgesetz BDSG-neu) · Anspruch auf Einbindung, Fortbildung und Unterstützung.
### Fachliche Aussage
Der DSB genießt einen besonderen Status mit Abberufungs- und Kündigungsschutz sowie Anspruch auf Unterstützung.
### React-Vorschlag
`ProtectionRightsCard` mit Frage-Überschrift und Person@Laptop-Icon.

## Folie 42 - Datenschutz · Aufgaben (3-Fragen-Schema)
### In der MD vorhanden
Vollständig (zerbrochen): die drei Leitfragen mit Unterpunkten und der Kasteninhalt „Grundlage für: Betroffenenrechte, Erstellung von Verzeichnissen von Verfahrenstätigkeiten, Meldung von Datenpannen, Erfüllung von Dokumentationspflicht en etc.“.
### Fehlende visuelle Inhalte
Rechts ein schwarzes Monitor-Icon (Bildschirm auf Standfuß), in dessen Bildschirmfläche der Erläuterungstext „Grundlage für: …“ steht — der Text ist also in das Monitor-Icon eingebettet. (Auf der Folie steht „Verfahrenstätigkeiten“ und „Dokumentationspflicht en“ — letztere mit Trennfehler.)
### Visuelle Rekonstruktion
```
1. Welche pbD werden verarbeitet?
   • Mitarbeiterdaten (Name, Anschrift, Geburtstag, etc.)
   • Kundendaten (Rechnung, Anschrift, E-Mail etc.)
   • Systemwartung, Einzelgesprächsnachweise etc.
2. Wo werden die pbD verarbeitet?
   • Personalabteilung
   • Vertrieb, Buchhaltung
   • IT-Abteilung
3. Wie werden die pbD verarbeitet?
   • Bewerberverwaltung, etc.
   • Rechnungsstellung, Newsletter-Versand, etc.
   • Wartung, etc.
                          [Monitor: "Grundlage für: Betroffenenrechte,
                           Erstellung von Verzeichnissen von Verfahrens-
                           tätigkeiten, Meldung von Datenpannen,
                           Erfüllung von Dokumentationspflicht en etc."]
```
### Inhaltliche Rekonstruktion
| Leitfrage | Beispiele |
|---|---|
| 1. Welche pbD werden verarbeitet? | Mitarbeiterdaten (Name, Anschrift, Geburtstag, …); Kundendaten (Rechnung, Anschrift, E-Mail …); Systemwartung, Einzelgesprächsnachweise |
| 2. Wo werden die pbD verarbeitet? | Personalabteilung; Vertrieb, Buchhaltung; IT-Abteilung |
| 3. Wie werden die pbD verarbeitet? | Bewerberverwaltung; Rechnungsstellung, Newsletter-Versand; Wartung |

Grundlage für: Betroffenenrechte, Erstellung von Verzeichnissen von Verfahrenstätigkeiten, Meldung von Datenpannen, Erfüllung von Dokumentationspflichten etc.
### Fachliche Aussage
Die drei Fragen Was/Wo/Wie der Datenverarbeitung bilden die Grundlage für Betroffenenrechte, Verarbeitungsverzeichnis, Datenpannenmeldung und Dokumentation.
### React-Vorschlag
`ProcessQuestionGrid` (drei nummerierte Frageblöcke) plus hervorgehobenes `Callout` für den „Grundlage für …“-Text.

## Folie 43 - Verarbeitungstätigkeiten · Verzeichnis
### In der MD problematisch/fehlend
Die MD enthält nur Titel/Untertitel und die Quelle; der eigentliche Inhalt ist eine eingebettete Bildschirmgrafik und wurde nicht als Text extrahiert.
### Fehlende visuelle Inhalte
Die Folie zeigt einen verkleinerten Screenshot einer Vorlagen-Tabelle „Verzeichnis der Verarbeitungstätigkeiten“ (mehrspaltig, in der Renderauflösung nicht zuverlässig lesbar). Erkennbare Tabellenstruktur (visuell abgelesen, nicht sicher): eine farbig hinterlegte Kopfzeile mit mehreren Spalten (sinngemäß u. a. Nr./Bezeichnung & Zweck, Personengruppen, Datenkategorien, Empfänger, Berechtigung/Zugriff, Löschfristen) und eine Beispielzeile zu „Personaldaten und Personalverwaltung“ mit längeren Stichpunktlisten in den Zellen. Konkrete Zellwerte sind aus der Grafik nicht sicher lesbar und werden hier nicht erfunden.
### Visuelle Rekonstruktion
```
[ Screenshot einer Tabellen-Vorlage "Verzeichnis der Verarbeitungstätigkeiten" ]
Kopfzeile (visuell abgelesen, unsicher): | Nr | Bezeichnung/Zweck | Personengruppen |
   Datenkategorien | Empfänger | Berechtigung | Löschfristen |
Beispielzeile: "Personaldaten und Personalverwaltung" + Stichpunktlisten pro Spalte
```
### Inhaltliche Rekonstruktion
Inhalt nicht als Text verfügbar (eingebettete Grafik, in der Renderauflösung nicht lesbar). Es handelt sich um eine Muster-/Vorlagentabelle für ein Verzeichnis von Verarbeitungstätigkeiten; konkrete Spalten-/Zellwerte werden nicht erfunden.

*Quelle: https://datenschutzadvokat.de/verzeichnis-verarbeitungstaetigkeiten/ (Linktext auf der Folie nur teilweise lesbar; URL visuell abgelesen)*
### Fachliche Aussage
Beispielhafte Vorlage, wie ein Verzeichnis der Verarbeitungstätigkeiten strukturiert dokumentiert wird (Zweck, Datenkategorien, Empfänger, Fristen).
### React-Vorschlag
`ImageFigure` mit Bildunterschrift und Quellenlink; alternativ ein generisches `TemplateTable`-Gerüst mit Platzhalterspalten (ohne erfundene Inhalte).

## Folie 44 - Aufgabe · Übung (Alkoholverbot)
### In der MD vorhanden
Vollständig: der Übungstext zum generellen Alkoholverbot der „Minimum AG“ und die Schlussfrage „Was halten Sie davon?“.
### Fehlende visuelle Inhalte
Links ein Foto: eine Gruppe von Menschen (im Business-Outfit) liegt im Kreis, Köpfe von oben fotografiert, lächelnd in die Kamera (Team-/Belegschaftsmotiv). Kein fachlicher Informationsgehalt, reine Bebilderung.
### Visuelle Rekonstruktion
```
[Foto: Team von oben im Kreis liegend]  |  Übungstext + "Was halten Sie davon?"
```
### Inhaltliche Rekonstruktion
Fallübung: Nach einigen tragischen Vorfällen entschließt sich der Personalleiter, für die „Minimum AG“ ein generelles Alkoholverbot einzuführen. Per Aushang und im Intranet informiert er die Belegschaft, dass jeglicher Alkoholgenuss während der Arbeitszeit untersagt ist und alle Beschäftigten bei der Arbeit nüchtern sein müssen. Die Belegschaft ist entsetzt und der Betriebsrat wendet ein, so gehe das nicht. Frage: Was halten Sie davon?
### Fachliche Aussage
Diskussionsaufgabe zur Mitbestimmung des Betriebsrats und zur Zulässigkeit eines generellen betrieblichen Alkoholverbots.
### React-Vorschlag
`CaseStudyPrompt` (Foto + Fallbeschreibung + Leitfrage), Foto über `ImageFigure`.

## Folie 45 - Personalcontrolling · Definition
### In der MD vorhanden
Vollständig (zerbrochen): die drei Definitionspunkte (Anwendung des Controllinggedankens der BWL auf die Personalwirtschaft; Controlling = steuern/regeln/lenken, Regelkreis; Controlling ≠ Kontrolle, sondern auch Gestaltung der Zukunft ex ante).
### Fehlende visuelle Inhalte
Rechts ein Foto: ein aufgeklappter Laptop, auf dessen Bildschirm eine farbige Balken-/Diagrammgrafik (Statistik) zu sehen ist; warmer/holzfarbener Hintergrund. Reine Bebilderung.
### Visuelle Rekonstruktion
```
▸ PC = Anwendung des Controllinggedankens der BWL auf die Personalwirtschaft
▸ Controlling = steuern/regeln/lenken; oft als Regelkreis (kontinuierlich, wiederholend)
▸ Controlling ≠ "Kontrolle" (ex post); zusätzlich Gestaltung der Zukunft (ex ante:
  Steuerung, Regelung, Koordination, Evaluation, etc.)        [Foto: Laptop mit Diagramm]
```
### Inhaltliche Rekonstruktion
- Personalcontrolling = Anwendung des Controllinggedankens der Betriebswirtschaftslehre auf die Personalwirtschaft.
- Controlling bedeutet steuern, regeln, lenken und wird häufig als Regelkreis interpretiert (kontinuierliches, sich wiederholendes Geschehen).
- Controlling ist nicht gleichbedeutend mit „Kontrolle“ (ex post, vergangenheitsorientiert), sondern umfasst zusätzlich die Gestaltung der Zukunft (ex ante: via Steuerung, Regelung, Koordination, Evaluation, etc.).
### Fachliche Aussage
Personalcontrolling ist ein zukunftsgerichteter Steuerungsprozess (Regelkreis) – mehr als reine vergangenheitsbezogene Kontrolle.
### React-Vorschlag
`DefinitionList` mit drei Punkten und dekorativem `ImageFigure`.

## Folie 46 - Personalcontrolling · Controlling-Regelkreis
### In der MD problematisch/fehlend
Die MD-Wörter zu dieser Folie sind stark durcheinandergewürfelt (Diagrammbeschriftungen ineinander verschachtelt); die Kreislaufstruktur ist nicht erkennbar.
### Fehlende visuelle Inhalte
Ein farbiger Kreislaufprozess (Regelkreis) mit vier äußeren Knoten um einen zentralen Knoten, verbunden durch hellblaue rechtwinklige Pfeile, die im Uhrzeigersinn laufen:
- Oben (rot): „Ziel-Planung (Humanressourcen in div. Kennzahlen und Ergebnissen)“
- Rechts (grün): „Messung der jeweils aktuellen Personaldaten (Ist-Analyse)“
- Unten (lila): „Soll-Ist-Vergleich (Abweichungsanalyse)“
- Links (blau/türkis): „Empfehlung und Durchführung von Maßnahmen“
- Zentrum (orange, Sechseck): „Personal-informationssystem“
Rechts außen, abgesetzt durch eine schwarze geschweifte Klammer, der Text: „Dieser ständig ablaufende Prozess leistet einen wichtigen Beitrag zum Erreichen qualitäts-, mengen-, kosten- und zeitbezogenen HR-Ziele im Unternehmen“.
### Visuelle Rekonstruktion
```
            [Ziel-Planung] (rot)
                 │ ↓
[Empfehlung &  ← (zentrum) →  [Messung Ist-
 Maßnahmen]      Personal-      Daten / Ist-
 (blau/türkis)   informations-  Analyse] (grün)
                 system (orange)
                 ↑ │
           [Soll-Ist-Vergleich /
            Abweichungsanalyse] (lila)
   Pfeile im Uhrzeigersinn (hellblau): oben→rechts, rechts→unten,
   unten→links, links→oben
   } Klammer rechts: "Dieser ständig ablaufende Prozess … HR-Ziele im Unternehmen"
```
### Inhaltliche Rekonstruktion
Controlling-Regelkreis (im Uhrzeigersinn): Ziel-Planung (Humanressourcen in div. Kennzahlen und Ergebnissen) → Messung der jeweils aktuellen Personaldaten (Ist-Analyse) → Soll-Ist-Vergleich (Abweichungsanalyse) → Empfehlung und Durchführung von Maßnahmen → zurück zur Ziel-Planung. Zentrum: Personal-informationssystem. Begleittext: Dieser ständig ablaufende Prozess leistet einen wichtigen Beitrag zum Erreichen qualitäts-, mengen-, kosten- und zeitbezogener HR-Ziele im Unternehmen.
### Fachliche Aussage
Personalcontrolling ist ein zyklischer Regelkreis aus Planung, Ist-Messung, Soll-Ist-Vergleich und Maßnahmen, gespeist aus dem Personalinformationssystem.
### React-Vorschlag
`CycleDiagram` (vier Knoten + Zentrum, kreisende Pfeile, farbcodiert) mit seitlichem Erläuterungstext.

## Folie 47 - Personalcontrolling · Gegenstandsbereich
### In der MD vorhanden
Vollständig (zerbrochen): Leitfrage „Was ist zu ‚controllen‘ im Personalwesen?“, die beiden Hauptobjekte (Personalarbeit/ihre Produkte; das Personal des Unternehmens) und die zwei Ausprägungspaare (quantitativ/qualitativ; strategisch/operativ).
### Fehlende visuelle Inhalte
Rechts ein schwarzes Piktogramm: mehrere kleine Personensymbole, pyramidenartig angeordnet (oben wenige, nach unten mehr/breiter, ca. vier Reihen — exakte Reihenzahl visuell nur grob ablesbar) — symbolisiert die Belegschaft/Organisation.
### Visuelle Rekonstruktion
```
Was ist zu "controllen" im Personalwesen?
• Die Personalarbeit selbst und ihre Produkte:
  Prozesse, Verfahren, Projekte, Programme und Strukturen der Personalabteilung
  (z. B. Anzahl der laufenden Rekrutierungsprozesse, Stand des Projektes
   "elektronische Personalakte", …)
• Das Personal des Unternehmens:
  Art, Zustand und Menge des "Produktionsfaktors" Arbeit
  (z. B. Anzahl der Mitarbeiter nach Funktion und Regionen, Anzahl der Azubis)
Je nach Gegenstandsbereich und Zielperspektive ergeben sich unterschiedliche
Ausprägungen des Personalcontrolling:
 • Quantitatives oder qualitatives Personalcontrolling
 • Strategisches oder operatives Personalcontrolling     [Personen-Pyramide-Icon]
```
### Inhaltliche Rekonstruktion
Gegenstand des Personalcontrollings:
- Die Personalarbeit selbst und ihre Produkte: Prozesse, Verfahren, Projekte, Programme und Strukturen der Personalabteilung (z. B. Anzahl der laufenden Rekrutierungsprozesse, Stand des Projektes „elektronische Personalakte“).
- Das Personal des Unternehmens: Art, Zustand und Menge des „Produktionsfaktors“ Arbeit (z. B. Anzahl der Mitarbeiter nach Funktion und Regionen, Anzahl der Azubis).
- Ausprägungen je nach Gegenstandsbereich/Zielperspektive: quantitatives oder qualitatives PC; strategisches oder operatives PC.
### Fachliche Aussage
Personalcontrolling betrachtet sowohl die Personalarbeit (Prozesse/Produkte) als auch das Personal selbst und gliedert sich in quantitativ/qualitativ bzw. strategisch/operativ.
### React-Vorschlag
`ScopeCard` mit zwei Objektblöcken und Ausprägungs-Chips; Personen-Pyramide-Icon dekorativ.

## Folie 48 - Personalcontrolling · Strategisch vs. operativ
### In der MD vorhanden
Vollständig (zerbrochen): beide Blöcke (strategisches PC: WOHIN/„die richtigen Dinge tun“, Feedforward, Beispiel; operatives PC: WIE/„die Dinge richtig tun“, Feedback, Beispiel).
### Fehlende visuelle Inhalte
Zwei abgerundete graue Beschriftungs-Blöcke links („Strategisches Personalcontrolling“ oben, „Operatives Personalcontrolling“ unten), jeweils mit einem rechts anschließenden Textfeld (kein echtes Diagramm, sondern zweispaltiges Label-/Text-Layout).
### Visuelle Rekonstruktion
```
[Strategisches      | Das strategische PC beschäftigt sich mit den strategischen
 Personalcontrolling] | Zielen und Potenzialen des Unternehmens, also dem
                      | WOHIN ("die richtigen Dinge tun").
                      | - Aufgabe: Überprüfung der Maßnahmen i.H.a. Personal-/
                      |   Unternehmensstrategie, Änderungen früh erkennen und
                      |   rechtzeitig korrigieren (langfristig, zukunftsbezogen)
                      | - Zeitliche Perspektive ist langfristig (Feedforward-Kontrollen)
                      | - Beispiel: Anteil flexibler Personalkosten, Arbeitgeberattraktivität
[Operatives         | Das operative PC befasst sich mit den Kosten, Erfolg und
 Personalcontrolling] | Nutzen von Maßnahmen, also dem WIE ("die Dinge richtig tun").
                      | - Zeitliche Perspektive ist kurzfristig (Feedback-Kontrollen)
                      | - Beispiel: Anzahl der offenen Stellen, durchschnittliche
                      |   Besetzungsdauer, etc.
```
### Inhaltliche Rekonstruktion
| Dimension | Strategisches PC | Operatives PC |
|---|---|---|
| Fokus | Strategische Ziele/Potenziale – WOHIN („die richtigen Dinge tun“) | Kosten, Erfolg, Nutzen von Maßnahmen – WIE („die Dinge richtig tun“) |
| Aufgabe | Maßnahmen i.H.a. Personal-/Unternehmensstrategie überprüfen, Änderungen früh erkennen, rechtzeitig korrigieren | – |
| Zeitperspektive | langfristig (Feedforward-Kontrollen) | kurzfristig (Feedback-Kontrollen) |
| Beispiele | Anteil flexibler Personalkosten, Arbeitgeberattraktivität | Anzahl offener Stellen, durchschnittliche Besetzungsdauer |
### Fachliche Aussage
Strategisches PC sichert langfristig die „richtigen Dinge“ (Feedforward), operatives PC steuert kurzfristig deren effiziente Umsetzung (Feedback).
### React-Vorschlag
`CompareTwoColumns` (strategisch vs. operativ) mit Label-Blöcken und Beispiel-Chips.

## Folie 49 - Personalcontrolling · Quantitativ vs. qualitativ
### In der MD vorhanden
Vollständig (zerbrochen): beide Blöcke (quantitatives PC: messbare Daten, Personalstruktur-/Personalkostendaten; qualitatives PC: „weiche Faktoren“, Indikatoren wie Commitment-Index, Innovationsindex).
### Fehlende visuelle Inhalte
Layout wie Folie 48: zwei abgerundete graue Label-Blöcke links („Quantitatives Personalcontrolling“, „Qualitatives Personalcontrolling“) mit anschließenden Textfeldern. Kein echtes Diagramm.
### Visuelle Rekonstruktion
```
[Quantitatives      | Das Personalcontrolling kennt eine große Anzahl an
 Personalcontrolling] | quantitativen Daten, welche meist direkt messbar sind:
                      | - Personalstrukturdaten (Anzahl der Mitarbeiter nach
                      |   Funktion, Region, Qualifikation, Alter, Geschlecht,
                      |   Vertragsstatus, Betriebszugehörigkeit, etc.)
                      | - Personalkostendaten (fixe und variable Entgelte,
                      |   Personalzusatzkosten, Kostenentwicklung nach Mengen
                      |   und "Preis"-Effekten, etc.)
[Qualitatives       | Qualitative Größen – die "weichen Faktoren" wie
 Personalcontrolling] | Mitarbeiterzufriedenheit, Leistungskultur,
                      | Führungsverhalten, Potentialanalysen, können jedoch
                      | nicht direkt gemessen werden, sondern über
                      | operationalisierbare Indikatoren abgebildet werden müssen:
                      | - Commitment-Index (emotionale Bindung zum Unternehmen)
                      | - Innovationsindex (Ideen- und Kreativitätslevel im Unternehmen)
```
### Inhaltliche Rekonstruktion
| Dimension | Quantitatives PC | Qualitatives PC |
|---|---|---|
| Wesen | Große Anzahl meist direkt messbarer Daten | „Weiche Faktoren“, nicht direkt messbar → über Indikatoren abgebildet |
| Beispiele | Personalstrukturdaten (Anzahl MA nach Funktion, Region, Qualifikation, Alter, Geschlecht, Vertragsstatus, Betriebszugehörigkeit); Personalkostendaten (fixe/variable Entgelte, Personalzusatzkosten, Kostenentwicklung nach Mengen-/„Preis“-Effekten) | Mitarbeiterzufriedenheit, Leistungskultur, Führungsverhalten, Potentialanalysen → Commitment-Index (emotionale Bindung), Innovationsindex (Ideen-/Kreativitätslevel) |
### Fachliche Aussage
Quantitatives PC nutzt direkt messbare Struktur-/Kostendaten, qualitatives PC bildet „weiche“ Faktoren über operationalisierbare Indizes ab.
### React-Vorschlag
`CompareTwoColumns` (quantitativ vs. qualitativ), Indikatoren als hervorgehobene Items.

## Folie 50 - Personalcontrolling · Ausgewählte Instrumente (1)
### In der MD vorhanden
Vollständig (lesbar): die vier Instrumente Soll-Ist-Vergleiche/Kennzahlen, Benchmarking, Zeitreihen, Szenario-Technik mit Erläuterungen.
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik; Gliederung über fettgedruckte Zwischenüberschriften.
### Visuelle Rekonstruktion
```
Soll-Ist-Vergleiche / Kennzahlen
Benchmarking
Zeitreihen
Szenario-Technik
(jeweils mit Fließtext-Erläuterung)
```
### Inhaltliche Rekonstruktion
- **Soll-Ist-Vergleiche / Kennzahlen:** (Laufende) Soll-Ist-Vergleiche sollten zu einer Ursachenanalyse führen, um Maßnahmen zu entscheiden; Kennzahlen zeigen Ansatzpunkte für Maßnahmen (z. B. Fluktuationsquote, Führungsquote, Prozesskostenanalyse).
- **Benchmarking:** interne Vergleiche (z. B. verschiedene Vertriebsregionen) oder externe Vergleiche (andere Unternehmen) via Kennzahlen → Orientierung an Best-Practices für Prozess- und Effizienzverbesserungen.
- **Zeitreihen:** zeitliche Vergleiche lassen Entwicklungen/Trends ex post beschreiben und ex ante prognostizieren/extrapolieren; dienen der Evaluierung von Maßnahmen und der Früherkennung von Fehlentwicklungen.
- **Szenario-Technik:** durch (meist computergestützte) Abbildung der Auswirkungen interner Handlungsoptionen und systematische Variation interner/externer Faktoren lassen sich verschiedene Zukunftsszenarien und eine bestmögliche Bewältigungsstrategie erarbeiten.
### Fachliche Aussage
Vier Kerninstrumente des Personalcontrollings: Kennzahlen/Soll-Ist-Vergleiche, Benchmarking, Zeitreihen und Szenario-Technik.
### React-Vorschlag
`InstrumentList` (vier Akkordeon-/Karteneinträge mit Erläuterung).

## Folie 51 - Personalcontrolling · Ausgewählte Instrumente (2)
### In der MD vorhanden
Vollständig (lesbar): die vier Instrumente Mitarbeiterbefragungen, Human Resource Scorecard, Human Resource Due Diligence / HR Audits, Humanvermögensrechnung mit Erläuterungen.
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik; Gliederung über fettgedruckte Zwischenüberschriften.
### Visuelle Rekonstruktion
```
Mitarbeiterbefragungen
Human Resource Scorecard
Human Resource Due Diligence / HR Audits
Humanvermögensrechnung
(jeweils mit Fließtext-Erläuterung)
```
### Inhaltliche Rekonstruktion
- **Mitarbeiterbefragungen:** im Rahmen von MA-Befragungen (z. B. Austrittsinterviews) lassen sich wertvolle Informationen über Stärken und Defizite des Unternehmens erkennen.
- **Human Resource Scorecard:** im Rahmen der Balanced Scorecard werden erfolgskritische Ziele und KPIs (Key Performance Indicators) auch für den Bereich „Mitarbeiter“ definiert; ein ausgewogenes, auf das Personalmanagement ausgerichtetes Kennzahlensystem.
- **Human Resource Due Diligence / HR Audits:** Chancen und Risiken der Ressource „Personal“ frühzeitig erkennen (meist im Vorfeld von Unternehmenskäufen und -fusionen).
- **Humanvermögensrechnung (HVR):** Grundannahme: Der in den Aktiva der handelsrechtlichen Bilanz dargestellte Wert gibt das Unternehmensvermögen nicht ausreichend wieder. Immaterielle Vermögensteile (engagierte, motivierte, kompetente Mitarbeiter) werden als zunehmend wichtiger Wertschöpfungsfaktor erkannt; die Erfassung/Bewertung dieses Humanvermögens mittels HVR gewinnt an Bedeutung für ein effizientes Personalmanagement.
### Fachliche Aussage
Weitere PC-Instrumente: Mitarbeiterbefragungen, HR Scorecard, HR Due Diligence/Audits und die Humanvermögensrechnung zur Bewertung des immateriellen Personalwerts.
### React-Vorschlag
`InstrumentList` (Teil 2) – vier Akkordeon-/Karteneinträge, konsistent mit Folie 50.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 9: Sozialversicherungssystem-Infografik (komplett fehlend, fünf Zweige + Rollen-Schaubild)
2. Folie 18: Personalkostenbaum (Tree-Diagramm, Hervorhebung Personalzusatzkosten)
3. Folie 19: Zusammensetzung der Personalzusatzkosten (zwei Boxen + Trichter, 40 %-Hinweis)
4. Folie 20: Brutto-/Nettorechnung-Flow mit Verzweigung in Zahlungs-/Auswertungsrechnung
5. Folie 46: Controlling-Regelkreis (vier Knoten + Zentrum, kreisende Pfeile)
6. Folien 4, 5, 6, 11, 12, 14, 15, 16: zwei-/dreispaltige Karten-Layouts mit korrekter Spaltenzuordnung (aus der MD nicht ableitbar)
7. Folie 32: abgestuftes DSGVO-Sanktionssystem als Tabelle/verschachtelte Liste
8. Folien 30/31: Bußgeldstufen 10/2 % vs. 20/4 % als Vergleich mit Abwärtspfeil-Konnektor

## Kann vereinfacht werden

- Thematische Icons auf Folien 22–42 (Schloss, Europa-Umriss, Richterhammer, ID-Karte, Monitor↔Cloud, Clipboard, Geldschein, Person-am-Laptop, Monitor, Personen-Pyramide) als einfache dekorative SVGs
- Übungs-/Stockfotos auf Folien 7, 21, 44 sowie das Laptop-Foto auf Folie 45 als optionale `ImageFigure`/Illustration ohne Fachgehalt
- Reine Textfolien (1, 2, 3, 8, 10, 13, 17, 28, 32, 50, 51) als strukturierte Listen/Cards
- Strategisch/operativ und quantitativ/qualitativ (48/49) als zwei wiederverwendbare `CompareTwoColumns`

## Nicht fachlich relevant

- HBW-Logo
- graue Kopf-/Footerleiste
- Copyright-Zeile (`© 2026 – Hochschule der Bayerischen Wirtschaft`)
- exakte Folienpositionierung
- dekorative Bildästhetik ohne inhaltliche Zusatzinformation (Stockfotos auf 7, 21, 44, 45)
- Creative-Commons-Logo (Folie 9) — Quellenhinweis bleibt, das Logo selbst ist dekorativ

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich vorhandenen Skript-Inhalten):

```js
export const freiwilligeSozialleistungen = [
  {
    gruppe: 'Vorsorgeleistungen',
    items: [
      'Betriebliche Altersvorsorge',
      'Invaliditätsversorgung',
      'Hinterbliebenenversorgung',
      'Unfallversicherung',
      'Lebensversicherung',
      'Vermögenswirksame Leistung',
    ],
  },
  {
    gruppe: 'Geldleistungen',
    items: [
      'Weihnachtsgeld',
      'Urlaubsgeld',
      '13. Monatsgehalt',
      'Beihilfen',
      'Dienstaltersprämie',
      'Jubiläumszuwendung',
      'Fahrkostenzuschuss',
      'Essenszuschuss',
      'Umzugszuschuss',
      'Firmendarlehen',
    ],
  },
  {
    gruppe: 'Sachleistungen',
    items: [
      'Firmenwagen',
      'Arbeitskleidung',
      'Mitarbeiterrabatte',
      'Preisnachlässe',
      'Kostenlose Getränke und Früchte bzw. sonstige Verpflegung',
    ],
  },
  {
    gruppe: 'Fürsorge- und Gesundheitspflege',
    items: [
      'Kostenlose Vorsorgeuntersuchung',
      'Grippenschutzimpfung',
      'Gesundheitsdienst und Werksfürsorge',
      'Wellnessprogramme',
      'Krankenrückkehrgespräche',
    ],
  },
  {
    gruppe: 'Sonstige Leistungen',
    items: [
      'Bildungs- und Freizeitangebote',
      'Werkswohnungen',
      'Kinderbetreuung',
      'Beratungs- und Betreuungsangebote',
    ],
  },
]

export const sozialversicherungszweige = [
  { zweig: 'Arbeitslosenversicherung', aufgabe: 'Grundsicherung durch Arbeitslosengeld und Unterstützung bei der Arbeitsplatzsuche' },
  { zweig: 'Krankenversicherung', aufgabe: 'Wiederherstellung der Gesundheit und Maßnahmen zur gesundheitlichen Prävention' },
  { zweig: 'Unfallversicherung', aufgabe: 'Leistungen bei Arbeitsunfällen und bei Berufskrankheit' },
  { zweig: 'Pflegeversicherung', aufgabe: 'Unterstützung bei Pflegeleistungen für dauerhaft pflegebedürftige Personen' },
  { zweig: 'Rentenversicherung', aufgabe: 'Sicherung des Lebensstandard im Alter durch eine Rentenzahlung' },
]
// Quelle: www.einfach-rente.de (Creative Commons)

export const dsgvoSanktionen = [
  { sanktion: 'Datenpannen/Datenverlust', norm: 'Art. 33', folge: '„Vergleichbar wirksame“ öffentliche Bekanntmachung, wenn Mitteilung an Betroffene nicht möglich' },
  { sanktion: 'Kleinere Verstöße', norm: 'Art. 83 Abs. 4', folge: 'bis zu 10 Mio. € oder bis zu 2 % Weltjahresumsatz (Vorjahr)' },
  { sanktion: 'Größere Verstöße', norm: 'Art. 83 Abs. 5', folge: 'bis zu 20 Mio. € oder bis zu 4 % Weltjahresumsatz (Vorjahr)' },
  { sanktion: 'Recht auf Schadenersatz des Betroffenen', norm: 'Art. 82', folge: 'zivilrechtlicher Schadenersatzanspruch' },
]

export const dsgvoGrundsaetze = [
  'Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz',
  'Zweckbindung',
  'Datenminimierung',
  'Richtigkeit',
  'Speicherbegrenzung',
  'Integrität und Vertraulichkeit',
  'Rechenschaftspflicht',
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
