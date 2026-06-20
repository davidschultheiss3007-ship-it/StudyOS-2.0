# skript-09-fintechs-im-asset-management_MD+PDF - FinTechs im Asset Management / Robo Advisors: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-09-fintechs-im-asset-management.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-09-fintechs-im-asset-management.pdf` verloren gegangen, nur als kaputte Tabellen bzw. zerbrochene Achsenbeschriftungen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Taxonomien, Tabellenlogiken, Prozessflüsse oder Bildaussagen verloren gehen.

**Quelle:** `skript-09-fintechs-im-asset-management.pdf` mit 17 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die graue Kopfzeile, der Folien-Footer ("Asset Management / CS / Folie XXX") und die Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme, Formeln, Tabellen, Schaubilder und Icons (Balken-/Säulendiagramme, Treemap, Taxonomie-Baum, Generationen-Diagramm, Profiling-Fragebogen, Prozessschritte).

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Achsenbeschriftungen ignorieren:** In der MD erscheinen Achsentitel als Buchstabensalat (z. B. "nemulovsnoititsevnI", "ralloD-SU", "oruE", "negömreV", "setetlawreV"). Das sind vertikal/gespiegelt gesetzte Achsenbeschriftungen ("Investitionsvolumen in Mrd. US-Dollar", "Verwaltetes Vermögen in Mrd. Euro") und dürfen nicht als Text übernommen werden.
2. **Diagramme als Datenobjekte nachbauen:** Die Balken-, Säulen- und Treemap-Diagramme (Folien 4, 10, 11) tragen die fachliche Kernaussage. Sie sollten aus den rekonstruierten Werten als echte Charts gerendert werden, nicht als Fließtext.
3. **Fehlende Grafiken vollständig rekonstruieren:** Mehrere Schlüsselgrafiken fehlen in der MD komplett (Klassifikationsbaum Folie 5, Treemap Folie 10, Generationen-Diagramm Folie 16, Profiling-Fragebogen Folie 13). Diese sind hier inhaltlich rekonstruiert und müssen in React neu aufgebaut werden.
4. **Hervorhebungen/Farbcodierung erhalten:** Aktiver Agenda-Punkt (blau), orange hervorgehobener Taxonomie-Pfad (Vermögensverwaltung -> Robo-Advice), Pro/Con-Farbcodierung (grün/rot) und Prognose-Sternchen (* ab 2022) tragen Bedeutung.
5. **Prozessschritte konsistent nummerieren:** Der Robo-Advisory-Prozess (Folien 12-15) gliedert sich in 1) Onboarding, 2) Investmentstrategie-Implementierung, 3) Monitoring/Rebalancing. Diese Nummerierung als roten Faden beibehalten.
6. **Quellen- und Stand-Angaben erhalten:** Quellen wie "Grüner (2022), S. 60/62/65/187", "Statista, abgerufen am 17.05.2026", "Dorfleitner et al. (2020)" und "Seidel (Hrsg.): Banking Innovation 2017" beibehalten.
7. **Nicht zuverlässig lesbare Inhalte als unsicher markieren:** Die Anbieterlogos der Weltkarte (Folie 9) sind im Detail nicht lesbar; keine erfundenen Anbieternamen ergänzen.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Kapitelnummer, Titel und Untertitel als Hero |
| `AgendaList` | 2 | Agenda mit hervorgehobenem aktivem Eintrag (Punkt 9) |
| `DefinitionCard` | 3 | FinTech-Definition als Bullet-Liste mit Schlüsselbegriffen |
| `InvestmentBarCharts` | 4 | Zwei Balkendiagramme der FinTech-Investitionen |
| `FinTechTaxonomyTree` | 5 | Klassifikationsbaum mit hervorgehobenem Robo-Advice-Pfad |
| `TwoColumnConcept` | 6 | Intensive vs. Extensive Komplexität gegenüberstellen |
| `DeficitList` | 7 | Defizite des traditionellen AM + Conclusion-Callout |
| `CharacteristicsList` | 8 | Charakteristika Robo Advisor mit Gebühren-Badges |
| `RoboWorldMap` | 9 | Weltkarte mit Anbieter-Clustern (Originalbild) |
| `RoboAumTreemap` | 10 | Treemap des verwalteten Vermögens weltweit 2021 |
| `GermanyAumBarChart` | 11 | Säulendiagramm AuM Deutschland 2017-2026 (Prognose abgesetzt) |
| `ProcessStepProsCons` | 12 | Onboarding-Schritt mit Pro/Con-Listen |
| `ProfilingQuestionnaireGrid` | 13 | 2x2-Raster des Kundenprofiling-Fragebogens |
| `EtfFilterFunnel` | 14 | Sechsstufige ETF-Filterkaskade |
| `OfferingComparison` | 15 | Einfache vs. aufwendigere Angebote + Anbieter-Badges |
| `GenerationPathDiagram` | 16 | Vier Generationen der digitalen Vermögensanlage |
| `CourseCompleteSlide` | 17 | Abschluss-/Glückwunschkarte |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 9: FinTechs im Asset Management / Robo Advisors (Titelfolie)

### In der MD vorhanden
Vollständig: "Asset Management", "Kapitel 9", "FinTechs im Asset Management", "Robo Advisors", Versionskennung "V26-05-17", Folie 289.

### Fehlende visuelle Inhalte
Titelfolien-Layout mit hellblauem Trennbalken. Oben rechts das HBW-Logo. Oben eine Reihe aus vier quadratischen Fotos (Bildband): (1) eine Hand, die ein "HBW"-Schild/Logo-Tafel hält, (2) ein junger Mann mit Brille (Nahaufnahme), (3) eine Gruppe lächelnder junger Personen (Studierende) im Freien, (4) ein modernes Gebäude (Campus/Hochschule). Diese Fotos sind reines Branding und nicht fachlich. Fußzeile: "Asset Management / CS / Folie 289" sowie "© 2026 - Hochschule der Bayerischen Wirtschaft".

### Visuelle Rekonstruktion
```
[Foto1: HBW-Schild] [Foto2: Mann m. Brille] [Foto3: Studierendengruppe] [Foto4: Gebäude]
------------------------------------------------------------
Kapitel 9
FinTechs im Asset Management
Robo Advisors                                   V26-05-17
```

### Inhaltliche Rekonstruktion
Titel: Kapitel 9 - FinTechs im Asset Management - Robo Advisors. Version V26-05-17.

### Fachliche Aussage
Kapiteleinstieg: Das Kapitel behandelt FinTechs im Asset Management mit Schwerpunkt Robo Advisors.

### React-Vorschlag
`ChapterTitleSlide` - Hero-Komponente mit Kapitelnummer, Titel und Untertitel. Die dekorative Fotoreihe wird weggelassen.

---

## Folie 2 - Agenda

### In der MD vorhanden
Vollständig: Punkte 1-9 der Agenda, Folie 290.

### Fehlende visuelle Inhalte
Nummerierte Liste (1.-9.). Punkt 9 "FinTechs im Asset Management / Robo Advisors" ist farblich hervorgehoben (blau, fett) als aktuelles Kapitel; die Punkte 1-8 sind in Schwarz gesetzt.

### Visuelle Rekonstruktion
```
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors   <-- aktiv (blau/fett)
```

### Inhaltliche Rekonstruktion
Kapitelübersicht; aktiv ist Kapitel 9.

### Fachliche Aussage
Verortung des Kapitels innerhalb der Gesamtvorlesung Asset Management.

### React-Vorschlag
`AgendaList` - Liste mit hervorgehobenem aktivem Eintrag (Akzentfarbe für Punkt 9).

---

## Folie 3 - FinTech: Definition

### In der MD vorhanden
Vollständig: Definition FinTech mit allen fünf Spiegelstrichen (Begriffsherkunft "Financial Services" + "Technology", Geschäftsmodelle, historischer Ursprung 19. Jh./Fedwire 1918, Kreditkarten/Geldautomaten Mitte 20. Jh., Aufkommen mit Finanzkrise 2008). Quelle: Grüner (2022), S. 60, Folie 291.

### Fehlende visuelle Inhalte
Reine Textfolie mit Überschrift "Definition FinTech" (blau) und fünf Aufzählungspunkten. Hervorhebungen (fett): "Financial Services", "Technology" sowie der letzte Punkt zur Finanzkrise 2008 vollständig fett. Keine Grafik.

### Visuelle Rekonstruktion
Nicht erforderlich (reiner Text).

### Inhaltliche Rekonstruktion
- FinTech = "Financial Services" + "Technology": innovative Unternehmen, die mit moderner Technologie Finanzdienstleistungen erbringen.
- Geschäftsmodelle vielfältig: u. a. alternative Bezahlverfahren, automatisiertes Portfoliomanagement, Plattformen zur automatisierten Anlageberatung.
- Ursprung lt. Historikern bis ins 19. Jh. (erstes transatlantisches Kabel als Infrastruktur der Finanzglobalisierung); 1918 Fedwire als erstes Überweisungssystem.
- Mitte 20. Jh.: erste Kreditkarten und Geldautomaten.
- FinTechs i. S. der Definition mit der Finanzkrise 2008 aufgekommen (zahlreiche Start-ups mit neuen Lösungen drängten auf den Markt für Finanzdienstleistungen).

### Fachliche Aussage
Definiert den Begriff FinTech und ordnet ihn historisch ein; moderner FinTech-Begriff ist eine Folge der Finanzkrise 2008.

### React-Vorschlag
`DefinitionCard` mit Bullet-Liste; Schlüsselbegriffe als `<strong>` hervorgehoben.

---

## Folie 4 - FinTech: Investitionen in FinTechs

### In der MD problematisch/fehlend
Die MD enthält die Zahlen beider Diagramme, aber chaotisch und ohne Achsenzuordnung: Werte 239,7 / 168,4 / 138,8 / 119,3 / 116 / 95,5 mit Jahren 2020-2025 für das zweite Diagramm; das erste Diagramm (Werte 2012-2021) fehlt in der MD komplett. Achsentitel sind zu Buchstabensalat zerbrochen ("nemulovsnoititsevnI", "ralloD-SU", "oruE" usw. = vertikal/gespiegelt gesetzte Achsenbeschriftungen).

### Fehlende visuelle Inhalte
Zwei Balkendiagramme:
1) Oben links, graue Balken, Titel "Gesamtwert der Investitionen in FinTechs weltweit". Y-Achse "Gesamtwert der Investitionen in Mrd. USD", Skala 0-250 (Schritte 50). X-Achse Jahre 2012-2021. Balken mit Werten: 2012=4, 2013=19, 2014=45, 2015=67, 2016=63, 2017=59, 2018=149, 2019=214, 2020=125, 2021=210. Quelle: Grüner (2022), S. 62 (unter dem Diagramm).
2) Unten rechts, blaue Balken, gepunktetes Gitter. Y-Achse "Investitionsvolumen in Mrd. US-Dollar", Skala 0-300 (Schritte 50). X-Achse Jahre 2020-2025. Balken: 2020=138,8; 2021=239,7; 2022=168,4; 2023=119,3; 2024=95,5; 2025=116. Datenquelle: Statista, abgerufen am 17.05.26 (unter dem Diagramm).

### Visuelle Rekonstruktion
```
Diagramm 1 (grau, 2012-2021, Mrd. USD):
2012| 4
2013| 19
2014| 45
2015| 67
2016| 63
2017| 59
2018| 149
2019| 214   <- Höchstwert
2020| 125
2021| 210

Diagramm 2 (blau, 2020-2025, Mrd. USD):
2020| 138,8
2021| 239,7  <- Höchstwert
2022| 168,4
2023| 119,3
2024| 95,5   <- Tiefstwert im Zeitraum
2025| 116
```

### Inhaltliche Rekonstruktion
| Jahr | Diagramm 1 (Grüner) | Diagramm 2 (Statista) |
|---|---|---|
| 2012 | 4 | - |
| 2013 | 19 | - |
| 2014 | 45 | - |
| 2015 | 67 | - |
| 2016 | 63 | - |
| 2017 | 59 | - |
| 2018 | 149 | - |
| 2019 | 214 | - |
| 2020 | 125 | 138,8 |
| 2021 | 210 | 239,7 |
| 2022 | - | 168,4 |
| 2023 | - | 119,3 |
| 2024 | - | 95,5 |
| 2025 | - | 116 |
Alle Werte in Mrd. US-Dollar. Folie 292.

### Fachliche Aussage
Die globalen FinTech-Investitionen sind bis 2019/2021 stark gestiegen; im zweiten Diagramm (Statista) ist das Volumen nach dem Höchststand 2021 (239,7) rückläufig.

### React-Vorschlag
`InvestmentBarCharts` - zwei nebeneinander/untereinander gesetzte Balkendiagramme (z. B. mit einfacher CSS/SVG-Bar-Komponente), klar getrennte Datenquellen.

---

## Folie 5 - FinTech: Klassifikation von FinTechs

### In der MD problematisch/fehlend
Die MD enthält nur Titel und Quelle ("Grüner (2022), S. 65, in Anlehnung an Dorfleitner et al. (2020)", Folie 293). Das komplette Klassifikations-Organigramm fehlt - Markitdown konnte es nicht extrahieren.

### Fehlende visuelle Inhalte
Ein hierarchisches Baumdiagramm mit der Wurzel "FinTech-Segmente" und vier Hauptästen (graue Boxen, Verbindungslinien). Zwei Boxen sind orange umrandet hervorgehoben: "Vermögensverwaltung" (Hauptast) und darunter "Robo-Advice". Struktur:
- Wurzel: FinTech-Segmente.
- Ast 1 - Finanzierung -> zwei Unterboxen "Crowdfunding" und "Kredite & Factoring". Unter "Crowdfunding" eine weitere Detailspalte mit vier Boxen: Gegenleistungsbasiertes CF, Spendenbasiertes CF, Crowdinvesting, Crowdlending.
- Ast 2 - Vermögensverwaltung (orange) -> Social Trading, Robo-Advice (orange), Personal Financial Management, Anlage & Banking.
- Ast 3 - Zahlungsverkehr -> Alternative Bezahlverfahren, Blockchain & Kryptowährungen, Sonstige FinTechs.
- Ast 4 - Sonstige FinTechs -> Versicherungen, Suchmaschinen & Vergleichsportale, Technik, IT & Infrastruktur, Sonstige FinTechs.

### Visuelle Rekonstruktion
```
                         FinTech-Segmente
   ┌──────────────┬────────────────────────┬──────────────────┬──────────────────┐
 Finanzierung   Vermögens-              Zahlungsverkehr     Sonstige FinTechs
               verwaltung (orange)
  Crowdfunding   Social Trading        Alternative          Versicherungen
   ├─ Gegenleistungs- Robo-Advice(orange) Bezahlverfahren    Suchmaschinen &
   │   basiertes CF   Personal Financial Blockchain &          Vergleichsportale
   ├─ Spenden-        Management          Kryptowährungen     Technik, IT &
   │   basiertes CF   Anlage & Banking   Sonstige FinTechs     Infrastruktur
   ├─ Crowdinvesting                                          Sonstige FinTechs
   └─ Crowdlending
  Kredite &
   Factoring
```

### Inhaltliche Rekonstruktion
Vier Hauptsegmente: Finanzierung, Vermögensverwaltung, Zahlungsverkehr, Sonstige FinTechs. Unter Finanzierung: Crowdfunding (mit den vier Unterformen Gegenleistungsbasiertes CF, Spendenbasiertes CF, Crowdinvesting, Crowdlending) und Kredite & Factoring. Robo-Advice ist als Unterkategorie der Vermögensverwaltung verortet (beide orange hervorgehoben = Fokus des Kapitels). Quelle: Grüner (2022), S. 65, in Anlehnung an Dorfleitner et al. (2020).

### Fachliche Aussage
Robo-Advice ist innerhalb der FinTech-Landschaft dem Segment Vermögensverwaltung zuzuordnen - das ist der inhaltliche Fokus des Kapitels.

### React-Vorschlag
`FinTechTaxonomyTree` - hierarchisches Baum-/Tree-Diagramm mit hervorgehobenem Pfad "Vermögensverwaltung -> Robo-Advice" (Akzent-Rahmen).

---

## Folie 6 - Robo Advisory: Komplexität im Asset Management

### In der MD vorhanden
Vollständig: "2 Dimensionen der Komplexität im Asset Management", Intensive Komplexität (4 Unterpunkte) und Extensive Komplexität (3 Unterpunkte), Folie 294.

### Fehlende visuelle Inhalte
Reine Textfolie, zweistufige Bullet-Liste. Fett hervorgehoben: Überschrift, die beiden Dimensionen "Intensive Komplexität"/"Extensive Komplexität" sowie "Rat eines Experten" und "Herausforderungen auch für Experten". Keine Grafik.

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
- Intensive Komplexität: Komplexität für die individuelle Person; die Fähigkeit und der Wille zur Übernahme von Risiken hängt von demografischen, individual- und makroökonomischen Einflüssen ab; diese Variablen können sich im Zeitablauf verändern (z. B. Inflation); bei intensiver Komplexität wird i. d. R. der Rat eines Experten gesucht.
- Extensive Komplexität: Komplexität durch Unterschiede zwischen Personen; Folge: hohe Herausforderungen auch für Experten; hängt von demografischen und ökonomischen Einflüssen ab, aber nicht von makroökonomischen Größen, da diese Rahmenbedingungen für alle Marktteilnehmer identisch sind.

### Fachliche Aussage
Das Asset Management ist auf zwei Ebenen komplex: individuell (intensiv) und durch Heterogenität der Kunden (extensiv).

### React-Vorschlag
`TwoColumnConcept` - zwei gegenübergestellte Konzeptkarten (Intensiv vs. Extensiv) mit Bullet-Listen.

---

## Folie 7 - Robo Advisory: Defizite des traditionellen Asset Managements

### In der MD vorhanden
Vollständig: alle Defizit-Punkte plus Schlussfolgerung "Potenzielle Lösung ... Robo Advisory", Folie 295.

### Fehlende visuelle Inhalte
Reine Textfolie. Überschrift "Defizite des traditionellen Asset Managements" (blau). Bullet-Liste mit fünf Defiziten plus "…" als sechstem Punkt. Abschluss-Zeile mit Pfeil-Aufzählungszeichen und fettem Text; "Robo Advisory." in blauer Akzentfarbe hervorgehoben.

### Visuelle Rekonstruktion
```
Defizite des traditionellen Asset Managements:
- Geringer Grad der Financial Literacy.
- Interessenskonflikte zwischen Anleger und Portfoliomanager.
- Starke Abhängigkeit von den Fähigkeiten des Portfoliomanagers.
- Grds. geringere Erfolgsaussichten des aktiven Portfoliomanagements.
- Verhalten/Entscheidungen von Kunden und Berater durch Heuristiken und Verzerrungen beeinflusst (s. Behavioral Finance).
- …
=> Potenzielle Lösung für Komplexität und Defizite im traditionellen Asset Management: Robo Advisory.
```

### Inhaltliche Rekonstruktion
Defizite des traditionellen AM: geringer Grad der Financial Literacy; Interessenskonflikte zwischen Anleger und Portfoliomanager; starke Abhängigkeit von den Fähigkeiten des Portfoliomanagers; grds. geringere Erfolgsaussichten des aktiven Portfoliomanagements; Verhalten und Entscheidungen von Kunden und Berater können durch Heuristiken und Verzerrungen beeinflusst sein (Behavioral Finance). Schlussfolgerung: Robo Advisory als potenzielle Lösung für Komplexität und Defizite im traditionellen Asset Management.

### Fachliche Aussage
Robo Advisory wird als Antwort auf die strukturellen Defizite und die Komplexität des traditionellen Asset Managements eingeführt.

### React-Vorschlag
`DeficitList` mit abschließendem hervorgehobenem `ConclusionCallout` ("=> Robo Advisory").

---

## Folie 8 - Robo Advisors: Charakteristika

### In der MD vorhanden
Vollständig: alle acht Charakteristika-Punkte inkl. Gebührenangaben und Kundenbeschreibung, Folie 296.

### Fehlende visuelle Inhalte
Reine Textfolie. Überschrift "Charakteristika Robo Advisor" (blau). Bullet-Liste; fett hervorgehoben sind u. a. die Schlüsselbegriffe am Punktanfang ("FinTech Lösung", "Automatisierte Asset Management Prozesse", "Relativ geringe Verwaltungsgebühren", "Sehr hohe Wachstumsraten") sowie "Trend zu hybriden Lösungen" (blau). Keine Grafik.

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
- FinTech-Lösung für Asset- bzw. Wealth Management; Entwicklungen seit 2008.
- Automatisierte Asset-Management-Prozesse.
- Robo Advice i. S. der Anlageberatung = einzelne/einmalige Anlageempfehlung; eine fortlaufende Vermögensverwaltung (z. B. durch Rebalancing) entspricht der Finanzportfolioverwaltung.
- Relativ geringe Verwaltungsgebühren: in den USA zwischen 0,15 % und 0,67 % der AuM p. a.; in Europa unter Berücksichtigung aller Anbieter Ø ca. 0,8 % der AuM p. a.
- Sehr hohe Wachstumsraten v. a. in den USA; die größten Märkte in Europa: UK und Deutschland.
- Kunden: in der Anfangsphase insb. technologie-affine "Millenials"; aktuell zunehmend vermögende, gut ausgebildete Privatpersonen in den 40ern und 50ern.
- Aktuell: Trend zu hybriden Lösungen (Robo Advisory und Human Advice) zu beobachten.

### Fachliche Aussage
Robo Advisors automatisieren das Asset/Wealth Management zu niedrigen Gebühren; der Markt wächst stark und entwickelt sich hin zu hybriden Modellen.

### React-Vorschlag
`CharacteristicsList` mit hervorgehobenen Kennzahlen (Gebühren-Badges) im Fließtext.

---

## Folie 9 - Robo Advisors: The Robo Advisors in the world for 2020

### In der MD problematisch/fehlend
Die MD enthält nur den als zerbrochene Tabelle extrahierten Titel ("The Robo Advisors in the world for 2020") und die Quelle (publish0x.com). Die eigentliche Grafik (Weltkarte mit Logos) fehlt komplett.

### Fehlende visuelle Inhalte
Eine Weltkarte (Infografik, Titel "ROBO-ADVISORS AROUND THE WORLD") mit Länder-/Regionsclustern, in denen jeweils mehrere Robo-Advisor-Logos und -Namen gruppiert sind. Erkennbare Namen/Cluster (visuell abgelesen, teils sehr klein und daher unsicher): u. a. "Wealthsimple", "Betterment", "Wealthfront", "Personal Capital", "SigFig" im nordamerikanischen Raum; "Nutmeg", "moneyfarm", "Scalable Capital", "LIQID" im europäischen/UK-Raum. Die Logos sind über die Kontinente verteilt und farblich nach Anbieter unterschiedlich. (Anmerkung: Die genaue, vollständige Anbieterliste ist nicht zuverlässig lesbar; die genannten Namen sind die deutlichst erkennbaren - keine erfundenen Werte ergänzen.)

### Visuelle Rekonstruktion
```
[Weltkarte] ROBO-ADVISORS AROUND THE WORLD
 Nordamerika: Wealthsimple, Betterment, Wealthfront, Personal Capital, SigFig ... (visuell abgelesen)
 Europa/UK:   Nutmeg, moneyfarm, Scalable Capital, LIQID ... (visuell abgelesen)
 (weitere Regionscluster mit Anbieterlogos, im Detail nicht lesbar)
```

### Inhaltliche Rekonstruktion
Übersichtsgrafik der weltweit aktiven Robo-Advisor-Anbieter (Stand 2020), regional gruppiert. Exakte Anbieterliste nicht vollständig lesbar (Logos sehr klein). Quelle: https://www.publish0x.com/engineeringrobo/the-robo-advisors-in-the-world-for-2020-xjwzgl. Folie 297.

### Fachliche Aussage
Verdeutlicht die globale Verbreitung und Vielzahl von Robo-Advisor-Anbietern weltweit (2020).

### React-Vorschlag
`RoboWorldMap` - statisches Bild/Infografik (Karte mit Logo-Clustern). Da Detailtreue nötig, am besten das Originalbild einbinden statt nachbauen.

---

## Folie 10 - Robo Advisors: Verwaltetes Vermögen ausgewählter Robo-Advisors weltweit

### In der MD problematisch/fehlend
Die MD enthält nur Titel und Quelle (Statista, abgerufen am 17.05.2026, Folie 298). Die Werte und das Diagramm fehlen komplett in der MD.

### Fehlende visuelle Inhalte
Ein Treemap-Diagramm (flächenproportionale Rechtecke in Blautönen) mit dem Titel "Verwaltetes Vermögen ausgewählter Robo-Advisors weltweit 2021 (in Milliarden US-Dollar)". Jedes Rechteck trägt ein Anbieter-Logo und unten links den Wert. Flächen proportional zum AuM:
- Vanguard (dunkelblau, größtes Feld, links): 206,6
- Charles Schwab Intelligent Portfolios (mittelblau, Mitte): 65,8
- Betterment: 26,8
- Wealthfront: 21,4
- Personal Capital: 16,1
- Scalable (.Capital): 10,7
- Nutmeg: 5,5

### Visuelle Rekonstruktion
```
+-----------------------------+----------------+--------+----------+
|                             |                |Betterment|Wealthfront|
|        Vanguard             | Charles Schwab |  26,8  |   21,4   |
|         206,6               |  Intelligent   +--------+----------+
|                             |  Portfolios    |Personal|Scalable  |
|                             |     65,8       |Capital | 10,7     |
|                             |                | 16,1   +----------+
|                             |                |        |Nutmeg 5,5|
+-----------------------------+----------------+--------+----------+
```

### Inhaltliche Rekonstruktion
| Robo-Advisor | Verwaltetes Vermögen 2021 (Mrd. USD) |
|---|---|
| Vanguard | 206,6 |
| Charles Schwab (Intelligent Portfolios) | 65,8 |
| Betterment | 26,8 |
| Wealthfront | 21,4 |
| Personal Capital | 16,1 |
| Scalable Capital | 10,7 |
| Nutmeg | 5,5 |
Quelle: Statista, abgerufen am 17.05.2026.

### Fachliche Aussage
Der Markt ist stark konzentriert: Vanguard dominiert das verwaltete Vermögen ausgewählter Robo-Advisors weltweit (2021) deutlich vor allen anderen Anbietern.

### React-Vorschlag
`RoboAumTreemap` - Treemap-Komponente (flächenproportionale Kacheln) oder ersatzweise sortiertes Balkendiagramm mit den AuM-Werten.

---

## Folie 11 - Robo Advisors: Entwicklung des verwalteten Vermögens in Deutschland

### In der MD problematisch/fehlend
Die MD enthält die Werte und Jahre vollständig (0,76 bis 31,98), jedoch in falscher Reihenfolge/durcheinander und mit zerbrochenen vertikalen Achsenbeschriftungen ("oruE", "drM", "negömreV", "setetlawreV" = gespiegeltes "Verwaltetes Vermögen in Mrd. Euro"). Folie 299.

### Fehlende visuelle Inhalte
Ein Säulendiagramm (dunkelblaue Säulen, gepunktetes horizontales Gitter), Titel "Prognose zur Entwicklung des verwalteten Vermögens der Robo-Advisors in Deutschland von 2017 bis 2026 (in Milliarden Euro)". Y-Achse "Verwaltetes Vermögen in Mrd. Euro", Skala 0-35 (Schritte 5). X-Achse Jahre 2017-2026, ab 2022 mit Sternchen* (= Prognosewerte). Datenwerte über den Säulen.

### Visuelle Rekonstruktion
```
Mrd. Euro
35 |
30 |                                          29,91  31,35  31,98
   |                                   27,29   ▆▆▆▆▆  ▆▆▆▆▆  ▆▆▆▆▆
25 |                           22,37   ▆▆▆▆▆   ▆▆▆▆▆  ▆▆▆▆▆  ▆▆▆▆▆
   |                   15,26   ▆▆▆▆▆   ▆▆▆▆▆   ▆▆▆▆▆  ▆▆▆▆▆  ▆▆▆▆▆
15 |                   ▆▆▆▆▆   ▆▆▆▆▆   ▆▆▆▆▆   ▆▆▆▆▆  ▆▆▆▆▆  ▆▆▆▆▆
   |            8,31   ▆▆▆▆▆   ...
 0 |0,76 1,8  4,18 ▆ ...
    2017 2018 2019 2020 2021 2022* 2023* 2024* 2025* 2026*
```

### Inhaltliche Rekonstruktion
| Jahr | Verwaltetes Vermögen (Mrd. Euro) |
|---|---|
| 2017 | 0,76 |
| 2018 | 1,8 |
| 2019 | 4,18 |
| 2020 | 8,31 |
| 2021 | 15,26 |
| 2022* | 22,37 |
| 2023* | 27,29 |
| 2024* | 29,91 |
| 2025* | 31,35 |
| 2026* | 31,98 |
(* = Prognosewerte). Quelle: Statista.

### Fachliche Aussage
Das von Robo-Advisors in Deutschland verwaltete Vermögen wächst stark (von 0,76 auf prognostizierte ca. 32 Mrd. Euro), mit abflachendem Wachstum in den Prognosejahren.

### React-Vorschlag
`GermanyAumBarChart` - Säulendiagramm; Prognosejahre (2022-2026) visuell abgesetzt (z. B. gestrichelte Kontur oder hellerer Farbton).

---

## Folie 12 - Robo Advisors: Robo Advisory Prozess - 1) Investor Screening & Onboarding

### In der MD problematisch/fehlend
Die Struktur der MD muss präzisiert werden. Auf der Folie gibt es ZWEI gleichrangige Hauptpunkte mit jeweils drei eingerückten Unterpunkten:
- "Investorenanalyse durch Online-Fragebögen (i.d.R. Multiple Choice)" -> darunter drei grüne **Pro**-Unterpunkte.
- "Advisor" (eigener Hauptpunkt!) -> darunter drei rote **Con**-Unterpunkte.
Der Block "Advisor" ist also tatsächlich als eigenständiger Aufzählungspunkt auf der Folie vorhanden (kein MD-Strukturfehler des Layouts); die drei Con-Punkte gehören per Einrückung zu "Advisor", nicht zum Online-Fragebogen. Folie 300.

### Fehlende visuelle Inhalte
Textfolie mit Prozessschritt-Überschrift "1) Investor Screening & Onboarding" (blau, nummeriert). Bullet-Liste; die Vor-/Nachteile sind als "Pro:" (grün) und "Con:" (rot) farbcodiert. "Folge: Response Bias" fett. Keine eigentliche Grafik.

### Visuelle Rekonstruktion
```
1) Investor Screening & Onboarding
- Nutzerfreundliche Websites oder Smartphone Apps
- Kooperationen zwischen FinTechs und traditionellen Asset Management Anbietern
- Investorenanalyse durch Online-Fragebögen (i.d.R. Multiple Choice)
    Pro: Geringere Kosten als bei persönlichem Interview. Ø ca. 15 Minuten Dauer
    Pro: Flexible Anpassung der Investmentziele durch Kunden möglich
    Pro: Einfache und kostengünstige Dokumentation der Investmentziele durch Robo Advisor
- Advisor
    Con: Informationsverlust durch Multiple-Choice-Fragebogen-Format
    Con: Kunden interpretieren die Fragen unterschiedlich
    Con: Fragebögen unterstellen implizit vergleichbare Anlegertypen. Die
         Antworten sind aber subjektiv. Folge: Response Bias
```

### Inhaltliche Rekonstruktion
Prozessschritt 1: nutzerfreundliche Websites/Apps; Kooperationen zwischen FinTechs und traditionellen Asset-Management-Anbietern; Investorenanalyse über Online-Fragebögen (Multiple Choice).
- Pro (zum Online-Fragebogen): geringere Kosten als beim persönlichen Interview (Ø ca. 15 Minuten Dauer); flexible Anpassung der Investmentziele durch den Kunden möglich; einfache und kostengünstige Dokumentation der Investmentziele durch den Robo Advisor.
- Con (zum Hauptpunkt "Advisor"): Informationsverlust durch das Multiple-Choice-Format; Kunden interpretieren die Fragen unterschiedlich; Fragebögen unterstellen implizit vergleichbare Anlegertypen, obwohl die Antworten subjektiv sind -> Folge: Response Bias.

### Fachliche Aussage
Beim Onboarding profilieren Robo-Advisors Kunden kostengünstig per Online-Fragebogen; dies birgt jedoch Informationsverlust und Response Bias.

### React-Vorschlag
`ProcessStepProsCons` - Prozessschritt-Karte mit zwei farbcodierten Listen (Pro = grün / Con = rot); die Con-Liste dem Teilaspekt "Advisor" zuordnen.

---

## Folie 13 - Robo Advisors: Robo Advisory Prozess - 1) Onboarding (Kundenprofiling-Fragen)

### In der MD problematisch/fehlend
Die MD enthält nur Überschrift, Untertitel ("Typische Fragestellungen im Rahmen des (digitalen) Kundenprofiling") und Quelle (Grüner (2022), S. 187, Folie 301). Der vollständige Fragebogen (vier Frageboxen) fehlt in der MD.

### Fehlende visuelle Inhalte
Vier graue Frage-/Antwortboxen im 2x2-Raster, jeweils Frage (fett) und Antwortoptionen als Bullets:

Box oben links - "Was ist Ihnen bei der Geldanlage am wichtigsten?":
- Riskante Vermögensanlage
- Sorgenfrei Vermögen aufbauen
- Gewinne möglichst maximieren

Box oben rechts - "Wie lange möchten Sie Ihr Geld voraussichtlich anlegen?":
- Weniger als 3 Jahre
- 3 bis 10 Jahre
- Mehr als 10 Jahre

Box unten links - "Stellen Sie sich vor, Ihre Investition in Höhe von EUR 10.000 verliert an Wert. Wann verkaufen Sie?":
- Bei EUR 1.000 Verlust (-10 %)
- Bei EUR 2.000 Verlust (-20 %)
- Bei EUR 5.000 Verlust (-50 %)
- Ich verkaufe nicht
- Ich meide diese Investition

Box unten rechts - "Wie schätzen Sie Ihre Erfahrungen und Kenntnisse im Zusammenhang mit dem Thema Investieren ein?":
- Gering (erste Investition)
- Mittel (bereits erste Erfahrungen gemacht)
- Gut (investiere bereits seit längerer Zeit)
- Sehr gut (arbeite/studiere in diesem Bereich)

### Visuelle Rekonstruktion
```
+--------------------------------+  +--------------------------------+
| Was ist Ihnen am wichtigsten?  |  | Wie lange anlegen?             |
| - Riskante Vermögensanlage     |  | - Weniger als 3 Jahre          |
| - Sorgenfrei Vermögen aufbauen |  | - 3 bis 10 Jahre               |
| - Gewinne maximieren           |  | - Mehr als 10 Jahre            |
+--------------------------------+  +--------------------------------+
| 10.000 EUR verliert an Wert -  |  | Erfahrung/Kenntnisse?          |
|  wann verkaufen?               |  | - Gering (erste Investition)   |
| - -10% (1.000)                 |  | - Mittel (erste Erfahrungen)   |
| - -20% (2.000)                 |  | - Gut (seit längerem)          |
| - -50% (5.000)                 |  | - Sehr gut (Beruf/Studium)     |
| - Ich verkaufe nicht           |  +--------------------------------+
| - Ich meide diese Investition  |
+--------------------------------+
```

### Inhaltliche Rekonstruktion
Beispielhafter digitaler Profiling-Fragebogen mit vier Fragen zu (1) Anlagepräferenz/-ziel, (2) Anlagehorizont, (3) Risikotoleranz/Verlustverhalten, (4) Erfahrung/Kenntnisstand. Untertitel: "Typische Fragestellungen im Rahmen des (digitalen) Kundenprofiling". Quelle: Grüner (2022), S. 187.

### Fachliche Aussage
Konkretisiert das Kundenprofiling: Über wenige Multiple-Choice-Fragen werden Anlageziel, Horizont, Risikotoleranz und Erfahrung erhoben.

### React-Vorschlag
`ProfilingQuestionnaireGrid` - 2x2-Kartenraster, jede Karte mit Fragetitel und Antwort-Liste (rein darstellend).

---

## Folie 14 - Robo Advisors: Robo Advisory Prozess - 2) Investmentstrategie-Implementierung

### In der MD vorhanden
Vollständig: Portfoliobildung/Trade Execution sowie der sechsstufige ETF-Filterprozess (1)-(6), Folie 302.

### Fehlende visuelle Inhalte
Textfolie mit Prozessschritt "2) Investmentstrategie-Implementierung" (blau). Fett: Untertitel "Portfoliobildung und Trade Execution", "Ziel:". Die Punkte (1)-(6) sind eine nummerierte Liste (Filter-/Ausschlusskaskade), aber auf der Folie als reine Aufzählung dargestellt - kein eigentliches Funnel-/Trichter-Grafikelement. Keine Grafik.

### Visuelle Rekonstruktion
```
(1) Universum aller investierbaren ETFs
      |  Ausschluss Nischen- und Leveraged-ETFs
(2)   v
      |  Ausschluss ETFs mit kurzer Kurshistorie
(3)   v
      |  Ausschluss ETFs mit ungenügender Marktliquidität
(4)   v
      |  Ausschluss ETFs mit schlechter Performance
(5)   v
(6) Finales Set investierbarer ETFs; ca. 3-6 % aller ETFs unter (1)
```

### Inhaltliche Rekonstruktion
- Portfoliobildung i. d. R. gemäß Portfolio Selection Theory; Anlageuniversum: ETFs.
- Ziel: Eliminierung von Interessenskonflikten; dennoch Gefahr von Agency-Problemen gegeben (z. B. bei Trade Execution durch Kooperationen).
- Grundlage bildet das Screening des Investorenprofils; Auswahl von Assets, die den Bedürfnissen des Kunden entsprechen.
- ETF-Filterkaskade: (1) Universum aller investierbaren ETFs -> (2) Ausschluss von Nischen-ETFs und Leveraged-ETFs -> (3) Ausschluss von ETFs mit kurzer Kurshistorie -> (4) Ausschluss von ETFs mit ungenügender Marktliquidität -> (5) Ausschluss von ETFs mit schlechter Performance -> (6) Finales Set investierbarer ETFs; ca. 3-6 % aller ETFs unter (1).

### Fachliche Aussage
Robo-Advisors bilden ETF-Portfolios nach Portfoliotheorie und reduzieren das ETF-Universum über mehrstufige Ausschlusskriterien auf ca. 3-6 % investierbarer ETFs.

### React-Vorschlag
`EtfFilterFunnel` - Trichter-/Step-Komponente, die die sechs Filterstufen visualisiert und den Endwert (ca. 3-6 %) hervorhebt.

---

## Folie 15 - Robo Advisors: Robo Advisory Prozess - 3) Monitoring und Rebalancing

### In der MD vorhanden
Vollständig: Rebalancing-Grundsätze sowie die beiden Angebotstypen "Einfache Angebote (§ 34f GewO)" und "Aufwendigere Angebote (mit Vermögensverwaltungs-Lizenz)", Folie 303.

### Fehlende visuelle Inhalte
Textfolie mit Prozessschritt "3) Monitoring und Rebalancing / Portfolioanpassungen" (blau). Darunter zwei umrahmte Boxen für die zwei Angebotstypen. Rechts in den Boxen sind Anbieter-Logos eingebettet:
- Box "Einfache Angebote (§ 34f GewO)": Logos "vaamo" und "GINMON".
- Box "Aufwendigere Angebote (mit Vermögensverwaltungs-Lizenz)": Logos "scalable.CAPITAL" und "investify".
Diese Logos fehlen vollständig in der MD.

### Visuelle Rekonstruktion
```
Einfache Angebote (§ 34f GewO)            [vaamo] [GINMON]
- Hilfe bei der Auswahl der passenden strategischen Asset Allocation
- Assetklassen werden dann mit entsprechenden kostengünstigen ETFs hinterlegt
- Rebalancing regelmäßig

Aufwendigere Angebote (mit Vermögensverwaltungs-Lizenz)  [scalable.CAPITAL] [investify]
- Hilfe bei der Auswahl der passenden strategischen Asset Allocation
- Hinterlegung mittels ETFs oder auch durch Zertifikate (z. B. Themenzertifikate)
- Aktive, automatische taktische Neugewichtung in Bandbreiten um die Target-Allokation
```

### Inhaltliche Rekonstruktion
- Rebalancing: i. d. R. regelbasiert und/oder periodisch; geringe Frequenz (Optimierung der Transaktionskosten); die genaue Ausgestaltung der Portfolioanpassungen ist das wohl wichtigste Unterscheidungskriterium für FinTechs im Bereich der Vermögensanlage.
- Einfache Angebote (§ 34f GewO): Hilfe bei der Auswahl der passenden strategischen Asset Allocation; Hinterlegung der Assetklassen mit kostengünstigen ETFs; regelmäßiges Rebalancing. Anbieterbeispiele: vaamo, GINMON.
- Aufwendigere Angebote (mit Vermögensverwaltungs-Lizenz): Hilfe bei der Auswahl der passenden strategischen Asset Allocation; Hinterlegung mittels ETFs oder durch Zertifikate (z. B. Themenzertifikate); aktive, automatische taktische Neugewichtung in Bandbreiten um die Target-Allokation. Anbieterbeispiele: scalable.CAPITAL, investify.

### Fachliche Aussage
Robo-Advisors unterscheiden sich v. a. in der Rebalancing-Ausgestaltung; es gibt einfache (§ 34f GewO, nur strategisch) und aufwendigere lizenzierte Angebote mit aktiver taktischer Neugewichtung.

### React-Vorschlag
`OfferingComparison` - zwei gegenübergestellte Karten (einfach vs. aufwendig) mit Merkmal-Liste und Anbieter-Beispiel-Badges.

---

## Folie 16 - Robo Advisors: Entwicklungspfad der digitalen Vermögensanlage

### In der MD problematisch/fehlend
Die MD enthält nur Titel, einen Satz ("Derzeit dominieren Angebote aus der zweiten Generation, z. B. Scalable Capital, LIQID") und die Quelle (Seidel (Hrsg.): Banking Innovation 2017, Folie 304). Das gesamte Achsen-/Stufendiagramm fehlt in der MD.

### Fehlende visuelle Inhalte
Ein Koordinatendiagramm mit vier überlappenden, ansteigend angeordneten Ellipsen/"Wolken" (Generationen 1-4), die treppenartig von links unten nach rechts oben verlaufen. Y-Achse: "Leistungsumfang", oben markiert mit "Vermögensverwaltung", unten mit "Einmalige Portfolio-Zusammenstellung". X-Achse: "Individualisierungsgrad". Die vier Ellipsen sind beschriftet "1. Generation" (links unten), "2. Generation", "3. Generation", "4. Generation" (rechts oben). Unter der X-Achse drei Spaltenbeschriftungen zur Entwicklungsstufe:
- links: "Beschränkung auf WpHG-Kriterien"
- Mitte: "zusätzliche produkt- und prozessbezogene Kundenpräferenzen"
- rechts: "Einbringung zusätzlicher Intelligenz"

### Visuelle Rekonstruktion
```
Leistungsumfang
^  Vermögens-                                  (4. Generation)
|  verwaltung                    (3. Generation)
|                    (2. Generation)
|  Einmalige      (1. Generation)
|  Portfolio-Zus.
+--------------------------------------------------------> Individualisierungsgrad
   Beschränkung auf   zusätzliche produkt-/    Einbringung
   WpHG-Kriterien     prozessbezogene          zusätzlicher
                      Kundenpräferenzen        Intelligenz
```

### Inhaltliche Rekonstruktion
Vier Generationen der digitalen Vermögensanlage, ansteigend in Leistungsumfang und Individualisierungsgrad:
- 1. Generation: Beschränkung auf WpHG-Kriterien.
- 2. Generation: zusätzliche produkt- und prozessbezogene Kundenpräferenzen.
- 3. Generation: Übergangsstufe (weiter steigender Leistungsumfang/Individualisierungsgrad; keine eigene Textbeschriftung unter der Achse).
- 4. Generation: Einbringung zusätzlicher Intelligenz.
Derzeit dominieren Angebote der zweiten Generation (z. B. Scalable Capital, LIQID). Quelle: Seidel (Hrsg.): Banking Innovation 2017.

### Fachliche Aussage
Die digitale Vermögensanlage entwickelt sich über vier Generationen mit steigendem Leistungsumfang und Individualisierungsgrad; aktuell dominiert die zweite Generation.

### React-Vorschlag
`GenerationPathDiagram` - SVG-Diagramm mit zwei Achsen (Leistungsumfang / Individualisierungsgrad) und vier treppenförmig angeordneten, beschrifteten Generations-Ellipsen.

---

## Folie 17 - Glückwunsch! Sie haben es geschafft!

### In der MD vorhanden
Vollständig: "Glückwunsch!", "Sie haben es geschafft!", Quelle (gifer.com/de/Mqh2), Folie 305.

### Fehlende visuelle Inhalte
Abschlussfolie. Überschrift "Glückwunsch!" (schwarz) und Untertitel "Sie haben es geschafft!" (blau). Großes (animiertes) Foto/GIF: ein applaudierendes Publikum in festlicher Kleidung (Awards-/Oscar-Szene), mehrere klatschende Personen im Vordergrund. Reines Motivationsbild, nicht fachlich.

### Visuelle Rekonstruktion
Nicht erforderlich (dekoratives GIF eines applaudierenden Publikums).

### Inhaltliche Rekonstruktion
Glückwunsch-/Abschlussfolie ohne fachlichen Inhalt. Quelle: https://gifer.com/de/Mqh2.

### Fachliche Aussage
Abschluss des Kapitels/der Vorlesung; kein Fachinhalt.

### React-Vorschlag
`CourseCompleteSlide` - schlichte Abschluss-/Glückwunschkarte (Titel + Subtext). GIF optional oder weglassen.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 4: Zwei Balkendiagramme der FinTech-Investitionen (Werte aus dem zerbrochenen MD-Text korrekt zugeordnet)
2. Folie 5: FinTech-Klassifikationsbaum mit orange hervorgehobenem Pfad Vermögensverwaltung -> Robo-Advice
3. Folie 10: Treemap des verwalteten Vermögens ausgewählter Robo-Advisors weltweit 2021
4. Folie 11: Säulendiagramm AuM Deutschland 2017-2026 mit abgesetzten Prognosejahren
5. Folie 13: Profiling-Fragebogen als 2x2-Raster
6. Folie 16: Generationen-Diagramm der digitalen Vermögensanlage

## Kann vereinfacht werden

- Folie 12: Pro/Con-Liste als farbcodierte Listen
- Folie 14: ETF-Filterkaskade als nummerierter Funnel/Steps
- Folie 15: Angebotsvergleich mit Anbieter-Badges
- Folie 9: Weltkarte am besten als Originalbild einbinden (Details nicht lesbar)
- Reine Textfolien (3, 6, 7, 8) als Definitions-/Konzeptkarten

## Nicht fachlich relevant

- HBW-Logo
- graue Kopfzeile und Folien-Footer ("Asset Management / CS / Folie XXX")
- Copyright-Zeile
- dekorative Fotoreihe der Titelfolie und das Glückwunsch-GIF
- exakte Folienpositionierung

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur tatsächlich im Skript vorhandene Werte):

```js
// Folie 4 - FinTech-Investitionen (in Mrd. US-Dollar)
export const fintechInvestmentsGruener = [
  { year: 2012, value: 4 },
  { year: 2013, value: 19 },
  { year: 2014, value: 45 },
  { year: 2015, value: 67 },
  { year: 2016, value: 63 },
  { year: 2017, value: 59 },
  { year: 2018, value: 149 },
  { year: 2019, value: 214 },
  { year: 2020, value: 125 },
  { year: 2021, value: 210 },
] // Quelle: Grüner (2022), S. 62

export const fintechInvestmentsStatista = [
  { year: 2020, value: 138.8 },
  { year: 2021, value: 239.7 },
  { year: 2022, value: 168.4 },
  { year: 2023, value: 119.3 },
  { year: 2024, value: 95.5 },
  { year: 2025, value: 116 },
] // Quelle: Statista, abgerufen am 17.05.26

// Folie 10 - Verwaltetes Vermögen weltweit 2021 (in Mrd. US-Dollar)
export const roboAumWorldwide2021 = [
  { provider: 'Vanguard', aum: 206.6 },
  { provider: 'Charles Schwab (Intelligent Portfolios)', aum: 65.8 },
  { provider: 'Betterment', aum: 26.8 },
  { provider: 'Wealthfront', aum: 21.4 },
  { provider: 'Personal Capital', aum: 16.1 },
  { provider: 'Scalable Capital', aum: 10.7 },
  { provider: 'Nutmeg', aum: 5.5 },
] // Quelle: Statista, abgerufen am 17.05.2026
```

```js
// Folie 11 - Verwaltetes Vermögen Robo-Advisors Deutschland (in Mrd. Euro)
export const roboAumGermany = [
  { year: '2017', value: 0.76, forecast: false },
  { year: '2018', value: 1.8, forecast: false },
  { year: '2019', value: 4.18, forecast: false },
  { year: '2020', value: 8.31, forecast: false },
  { year: '2021', value: 15.26, forecast: false },
  { year: '2022', value: 22.37, forecast: true },
  { year: '2023', value: 27.29, forecast: true },
  { year: '2024', value: 29.91, forecast: true },
  { year: '2025', value: 31.35, forecast: true },
  { year: '2026', value: 31.98, forecast: true },
] // Quelle: Statista; forecast=true => Prognosewert (*)

// Folie 14 - ETF-Filterkaskade (sechs Stufen)
export const etfFilterFunnel = [
  'Universum aller investierbaren ETFs',
  'Ausschluss von Nischen-ETFs und Leveraged-ETFs',
  'Ausschluss von ETFs mit kurzer Kurshistorie',
  'Ausschluss von ETFs mit ungenügender Marktliquidität',
  'Ausschluss von ETFs mit schlechter Performance',
  'Finales Set investierbarer ETFs; ca. 3-6 % aller ETFs unter (1)',
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten (Charts, Treemap, Funnel) steuern, damit spätere Features wie Quiz, Suche und Tooltips möglich bleiben.
