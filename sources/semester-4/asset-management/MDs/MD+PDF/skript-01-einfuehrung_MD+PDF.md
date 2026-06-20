# skript-01-einfuehrung_MD+PDF - Einführung in das Asset Management: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-01-einfuehrung.md` um jene visuellen Inhalte, die bei der Extraktion aus `skript-01-einfuehrung.pdf` verloren gegangen, nur als zerbrochene Tabellen übertragen oder fachlich unzureichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Tabellenlogiken, Roadmaps, Beziehungsschemata und Bildaussagen verloren gehen.

**Quelle:** `skript-01-einfuehrung.pdf` mit 17 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, grauer Kopfbereich, Folientitel-/Footer-Layout und Copyright-Zeile sind keine fachlichen Inhalte. Diese können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme, Formeln, Tabellen, Schaubilder und Icons – insbesondere die Curriculum-Roadmap (Folie 3), die Spielregeln-Tabellen (Folie 5) und das Beziehungsdiagramm der beteiligten Parteien (Folie 14).

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Mehrere Folien (v.a. Folie 5 und Folie 14) sind durch die PDF-Konvertierung als zerfallene Textzeilen oder Pseudo-Tabellen dargestellt. Diese Inhalte in React als strukturierte Cards, echte `<table>`-Elemente oder Diagramme neu aufbauen.
2. **Diagramme semantisch nachbauen:** Die Curriculum-Roadmap (Folie 3) und das Beziehungsdiagramm der beteiligten Parteien (Folie 14) tragen die zentrale fachliche Bedeutung des Skripts. Sie sollten nicht als reiner Fließtext, sondern als Roadmap- bzw. Flow-Komponente umgesetzt werden.
3. **Farbsemantik erhalten:** Hervorhebungen tragen Bedeutung – die orange Modulkachel (aktives Modul, Folie 3), der aktive Agenda-Punkt in blau/fett (Folie 9) und die grün/rot eingefärbten Vorteil-/Nachteil-Labels (Folie 11). Diese Farbkodierung über Akzent-Tokens nachbilden.
4. **Pfeile, Aufsichts- und Auftragsbeziehungen erhalten:** Im Parteien-Diagramm zeigen gerichtete, beschriftete Pfeile die fachliche Logik (kontrolliert, beauftragt, verwahrt, investiert, Anteile). Pfeilrichtung und Beschriftung sind inhaltlich tragend.
5. **Trenn-/Titelfolien als wiederverwendbares Template:** Titel- und Kapiteltrenner (Folien 1, 2, 8) folgen demselben Banner-Layout; einmal als `SectionDivider`/`ModuleTitleHero` umsetzen.
6. **Illustrative Logos/Cover als optionalen Schmuck behandeln:** Buchcover (Folie 7), KVG-Logos (Folie 16) und Verwahrstellen-Logos (Folie 17) sind rein illustrativ und tragen keinen über die Textliste hinausgehenden Fachinhalt.
7. **Quellen- und Versionshinweise erhalten:** Literaturangaben (Folie 7) und die Versionskennung `V26-03-22` beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ModuleTitleHero` | 1 | Modultitel, Semester und Dozent als Banner darstellen |
| `SectionDivider` | 2, 8 | Wiederverwendbare Abschnitts-/Kapiteltrennfolie |
| `CurriculumRoadmap` | 3 | Schwerpunkt-Roadmap über drei Semester mit hervorgehobenem Modul |
| `LearningObjectivesList` | 4 | Sechs Lernziele als Checklisten-/Badge-Liste |
| `CourseRulesCard` | 5 | Lehrmethoden-/Leistungsbewertungstabellen plus Klausur-Bulletliste |
| `AgendaList` | 6, 9 | Nummerierte Agenda; optional aktiver Punkt hervorgehoben |
| `LiteratureList` | 7 | Quellenliste mit optionalen Cover-Thumbnails |
| `DefinitionTopic` | 10 | Definition und Einführung Asset Management |
| `AssetManagementFormsCompare` | 11 | Klassisch vs. fondsgestützt mit Vorteil-/Nachteil-Kodierung |
| `ServiceProviderCards` | 12 | Anbieter nach Kundentyp (Banken / Privat / institutionell) |
| `InstitutionalInvestorTraits` | 13 | Merkmale und Erscheinungsformen institutioneller Anleger |
| `AssetManagementPartiesDiagram` | 14 | Beziehungsdiagramm der am Fondsgeschäft beteiligten Parteien |
| `RegulatorInfoCard` | 15 | BaFin-Steckbrief mit FMA/FINMA-Ländervergleich |
| `KVGTopic` + `ProviderLogoGrid` | 16 | KVG-Erläuterung plus optionale Anbieter-Logos |
| `DepotbankTopic` + `ProviderLogoGrid` | 17 | Depotbank/Sondervermögen plus optionale Verwahrstellen-Logos |

---

# Folienweise Ergänzungen

## Folie 1 - Modul Asset Management - SS 2026 (Titelfolie)

### In der MD vorhanden
Der Text ist vollständig: "Asset Management" (kleiner Header oben links), "Modul / Asset Management – SS 2026", "Prof. Dr. Christian Schmitt", Versionskennung "V26-03-22" (unten rechts). Fußzeile unten links: "Asset Management / CS / Folie 1", unten rechts Copyright "© 2026 – Hochschule der Bayerischen Wirtschaft".

### Fehlende visuelle Inhalte
Oben rechts das HBW-Logo (Schriftzug "HBW" mit Bogen-/Halbkreismotiv über dem "B"). Darunter eine horizontale Bilderleiste aus vier Fotos (von links nach rechts): (1) eine Hand, die eine Karte/ein Objekt mit HBW-Logo hält, (2) eine junge Person mit Brille im Profil, (3) zwei lächelnde Studierende im Freien, (4) ein modernes Hochschulgebäude (Glasfassade). Diese Fotoleiste ist das wiederkehrende Titelfolien-Bannermotiv der HBW. Der untere Folienbereich ist eine hellblaue, abgerundete Inhaltsfläche mit dem Modultitel.

### Visuelle Rekonstruktion
```text
Asset Management                                   [HBW-Logo]
[Foto1: Hand+Logo][Foto2: Person][Foto3: Studierende][Foto4: Gebäude]
+--------------------------------------------------------------+
|  Modul                                                       |
|  Asset Management – SS 2026                                  |
|                                                              |
|  Prof. Dr. Christian Schmitt                                 |
+--------------------------------------------------------------+
Asset Management / CS / Folie 1      © 2026 – HBW        V26-03-22
```

### Inhaltliche Rekonstruktion
- Modul: Asset Management – SS 2026
- Dozent: Prof. Dr. Christian Schmitt
- Version: V26-03-22

### Fachliche Aussage
Reine Titelfolie zur Modulvorstellung; vermittelt keinen Fachinhalt, nur Modul- und Dozenteninformation.

### React-Vorschlag
`ModuleTitleHero` - Banner-Komponente mit Modultitel, Semesterangabe und Dozent. Die Fotoleiste als rein dekoratives Bildband (oder weglassen), kein Fachinhalt.

---

## Folie 2 - Organisatorisches (Abschnittstrenner)

### In der MD vorhanden
Text vorhanden: "Asset Management" (Header), "Organisatorisches", "V26-03-22". Fußzeile "Asset Management / CS / Folie 2".

### Fehlende visuelle Inhalte
Identisches Layout wie Folie 1: oben das HBW-Logo und die vierteilige HBW-Fotoleiste (Hand mit Logo, Person mit Brille, Studierende, Gebäude), darunter eine hellblaue, abgerundete Inhaltsfläche mit dem Abschnittstitel "Organisatorisches".

### Visuelle Rekonstruktion
```text
[Foto-Banner HBW: 4 Bilder]                        [HBW-Logo]
+----------------------------------+
|  Organisatorisches               |
+----------------------------------+
```

### Inhaltliche Rekonstruktion
- Abschnittsüberschrift: Organisatorisches

### Fachliche Aussage
Kapitel-/Abschnittstrennfolie, die zum organisatorischen Teil des Moduls überleitet. Kein eigener Fachinhalt.

### React-Vorschlag
`SectionDivider` - wiederverwendbare Trennfolie mit Abschnittstitel; gleiches Banner-Motiv wie Titelfolie.

---

## Folie 3 - Einordnung im Rahmen des Schwerpunktes Finance & Risk Management

### In der MD problematisch/fehlend
Die MD enthält die Texte zerbrochen und ohne Struktur ("3. Semester / Finanzinstrumente und Risikomanagement / 4. Semester / Asset Management Behavioral Finance / 5. Semester / Analyse von Finanzdaten und Data Science / Corporate Financial Management"). Die räumliche Anordnung als Modul-Roadmap über drei Semester und die farbliche Hervorhebung gehen verloren.

### Fehlende visuelle Inhalte
Die Folie ist eine Roadmap mit drei Semesterzeilen. Vor jeder Semesterbezeichnung steht ein quadratischer Aufzählungspunkt (kleines dunkles Quadrat). Jedes Modul ist eine rechteckige Kachel mit weißem, fettem Text und leichtem Schlagschatten. Alle Modulkacheln sind dunkelblau (Petrol/Marineblau), AUSSER der Kachel "Asset Management", die orange hervorgehoben ist (= das aktuell behandelte Modul). Anordnung: 3. Semester hat eine zentrierte Kachel; 4. und 5. Semester haben je zwei nebeneinanderliegende Kacheln (links/rechts). Im 4. Semester steht links "Asset Management" (orange), rechts "Behavioral Finance" (blau).

### Visuelle Rekonstruktion
```text
■ 3. Semester
            [ Finanzinstrumente und Risikomanagement ]   (blau, zentriert)

■ 4. Semester
   [ Asset Management ]                  [ Behavioral Finance ]
   (ORANGE, hervorgehoben)               (blau)

■ 5. Semester
   [ Analyse von Finanzdaten            [ Corporate Financial
     und Data Science ]                   Management ]
   (blau)                                (blau)
```

### Inhaltliche Rekonstruktion
| Semester | Modul(e) |
|---|---|
| 3. Semester | Finanzinstrumente und Risikomanagement |
| 4. Semester | Asset Management (aktuell, orange hervorgehoben); Behavioral Finance |
| 5. Semester | Analyse von Finanzdaten und Data Science; Corporate Financial Management |

### Fachliche Aussage
Asset Management ist ein Modul des Schwerpunkts "Finance & Risk Management" und im 4. Semester verortet; es baut auf "Finanzinstrumente und Risikomanagement" (3. Sem.) auf und steht neben "Behavioral Finance".

### React-Vorschlag
`CurriculumRoadmap` - drei Semesterzeilen mit Modulkacheln; aktive Kachel ("Asset Management") via Akzentfarbe (`--color-module-orange`) hervorgehoben, übrige in neutralem Blau.

---

## Folie 4 - Modulziele

### In der MD vorhanden
Die Lernziele sind vollständig als Aufzählung vorhanden (Modellimplikationen/-grenzen der modernen Portfoliotheorie diskutieren; Asset-Klassen abgrenzen und Chance-/Risikoverhältnisse bewerten; Optimierungspotenzial in strategischer und taktischer Asset Allokation identifizieren; CAPM und Wertpapierbewertung beschreiben/erläutern; Indexkonzepte systematisieren; Performance-Kennzahlen berechnen).

### Fehlende visuelle Inhalte
Keine Fachgrafik. Reine Bullet-Liste (quadratische Spiegelstriche) unter der Überschrift "Modulziele" mit Vorspann "Die Studierenden können nach erfolgreichem Abschluss des Moduls:".

### Inhaltliche Rekonstruktion
Die Studierenden können nach erfolgreichem Abschluss des Moduls:
- die Modellimplikationen und -grenzen der modernen Portfoliotheorie kritisch diskutieren
- Abgrenzungen zwischen Asset-Klassen durchführen und unter Berücksichtigung von Chance-/Risikoverhältnissen bewerten
- bei gegebenen Portfolios Optimierungspotenzial in der strategischen und taktischen Asset Allokation identifizieren
- die Portfoliotheorie des CAPM sowie die Bewertung von Wertpapieren bzw. Wertpapierportfolien beschreiben und erläutern
- Indexkonzepte systematisieren und deren Vor- und Nachteile analysieren
- gängige Kennzahlen zur Performance-Messung berechnen

### Fachliche Aussage
Definiert die Lernergebnisse (Learning Outcomes) des Moduls: kritisches Verständnis der Portfoliotheorie, Asset-Allokation, CAPM/Bewertung, Indexkonzepte und Performancemessung.

### React-Vorschlag
`LearningObjectivesList` - Checklisten-/Badge-Liste der sechs Lernziele.

---

## Folie 5 - Spielregeln (Lehrmethoden, Leistungsbewertung, Klausur)

### In der MD problematisch/fehlend
Die MD enthält die Werte, aber die beiden Tabellen sind als lose Textzeilen zerfallen ("Lehrmethoden: SWS / Präsenz 52 / E-Learning/Selbststudium 88 ... Leistungsbewertung Klausur ... Klausur 100%"). Die Tabellenstruktur (Kopfzeile grau, Werte zentriert) und die rechte Klausur-Bulletliste sind nicht als Struktur erkennbar.

### Fehlende visuelle Inhalte
Der gesamte Inhalt liegt auf einer hellblauen, abgerundeten Inhaltsfläche mit fetter Überschrift "Spielregeln:". Links zwei kleine Tabellen mit dunkelgrauer Kopfzeile (weiße Schrift) und hellgrauen Wertzeilen. Bei der zweiten Tabelle ist die rechte Kopfzelle leer (kein Spaltentitel über "100%"). Rechts ein Textblock "Klausur" (fett) mit vier runden Bullet-Punkten.

### Visuelle Rekonstruktion
```text
Spielregeln:

+---------------------------+--------+      Klausur
| Lehrmethoden:             |  SWS   |      • Dauer 90 Minuten
+---------------------------+--------+      • Wissensfragen beantworten
| Präsenz                   |   52   |      • Praxisbezogene Fragen
| E-Learning/Selbststudium  |   88   |        bewältigen
+---------------------------+--------+      • Multiple Choice Fragen
                                              beantworten
+---------------------------+--------+
| Leistungsbewertung        |        |   <- rechte Kopfzelle leer
+---------------------------+--------+
| Klausur                   |  100%  |
+---------------------------+--------+
```

### Inhaltliche Rekonstruktion
Lehrmethoden (SWS):
| Lehrmethode | SWS |
|---|---:|
| Präsenz | 52 |
| E-Learning/Selbststudium | 88 |

Leistungsbewertung:
| Form | Anteil |
|---|---:|
| Klausur | 100% |

Klausur:
- Dauer 90 Minuten
- Wissensfragen beantworten
- Praxisbezogene Fragen bewältigen
- Multiple Choice Fragen beantworten

### Fachliche Aussage
Organisatorische Eckdaten: 52 Präsenz und 88 E-Learning/Selbststudium (Spaltenüberschrift "SWS"); die Leistungsbewertung erfolgt zu 100% über eine 90-minütige Klausur, die Wissens-, Praxis- und Multiple-Choice-Fragen kombiniert. Hinweis: Die Folie überschreibt die Spalte mit "SWS"; angesichts der Werte 52/88 handelt es sich der Sache nach um Zeitstunden, nicht um klassische Semesterwochenstunden – diese Bezeichnung wird hier aber 1:1 von der Folie übernommen (nicht umdeuten).

### React-Vorschlag
`CourseRulesCard` - hellblaue Card mit zwei echten Tabellen (`<table>`) und einer Klausur-Bulletliste daneben.

---

## Folie 6 - Agenda

### In der MD vorhanden
Die nummerierte Agenda ist vollständig vorhanden (Punkte 1-9). Punkt 7 heißt hier "Finanzcontrolling / Performancemessung".

### Fehlende visuelle Inhalte
Keine Grafik. Schlichte nummerierte Liste 1-9 (Dezimalnummerierung "1.", "2." …) ohne farbliche Hervorhebung; alle Punkte schwarz.

### Inhaltliche Rekonstruktion
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Finanzcontrolling / Performancemessung
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors

### Fachliche Aussage
Gibt die Gesamtgliederung der Vorlesung über neun Kapitel vor.

### React-Vorschlag
`AgendaList` - nummerierte Liste; wiederverwendbar mit optionaler Hervorhebung des aktiven Kapitels (siehe Folie 9).

---

## Folie 7 - Literaturempfehlungen

### In der MD vorhanden
Die Literaturliste ist textlich vollständig vorhanden (Albrecht/Maurer 2016; Bruns/Meyer-Bullerdiek 2013; Franzen/Schäfer 2018; Grüner/Gutknecht 2022; Steiner/Bruns).

### Fehlende visuelle Inhalte
Rechts neben der Liste sind die Buchcover der empfohlenen Werke als kleine, teils überlappend angeordnete Cover-Abbildungen dargestellt (u.a. "Investment- und Risikomanagement", "Wertpapiermanagement", "INVESTMENTS", "Professionelles Portfoliomanagement", "Assetmanagement"). Diese Cover sind rein illustrativ und tragen keinen über die Textliste hinausgehenden Fachinhalt.

### Inhaltliche Rekonstruktion
| Autor(en) | Jahr | Titel | Auflage |
|---|---|---|---|
| Albrecht, P. / Maurer, R. | 2016 | Investment- und Risikomanagement | 4. Auflage |
| Bruns / Meyer-Bullerdiek | 2013 | Professionelles Portfoliomanagement | 5. Auflage |
| Franzen, D. / Schäfer, K. | 2018 | Assetmanagement | (keine Auflage auf Folie genannt) |
| Grüner, A. / Gutknecht, D. | 2022 | Investments | (keine Auflage auf Folie genannt) |
| Steiner, M. / Bruns, C. | (kein Jahr auf Folie genannt) | Wertpapiermanagement | 11. Auflage |

### Fachliche Aussage
Listet die fünf empfohlenen Lehrbücher zum Modul.

### React-Vorschlag
`LiteratureList` - Quellenliste; Buchcover optional als kleine dekorative Thumbnails, kein Pflichtinhalt.

---

## Folie 8 - Kapitel 1: Einführung (Kapiteltrenner)

### In der MD vorhanden
Text vorhanden: "Asset Management" (Header), "Kapitel 1", "Einführung", "V26-03-22". Fußzeile "Asset Management / CS / Folie 8".

### Fehlende visuelle Inhalte
Kapiteltrennfolie im Titelfolien-Layout: oben das HBW-Logo und die vierteilige HBW-Fotoleiste (Hand mit Logo, Person, Studierende, Gebäude), darunter die hellblaue abgerundete Inhaltsfläche mit "Kapitel 1 / Einführung".

### Visuelle Rekonstruktion
```text
[Foto-Banner HBW: 4 Bilder]                        [HBW-Logo]
+----------------------------------+
|  Kapitel 1                       |
|  Einführung                      |
+----------------------------------+
```

### Inhaltliche Rekonstruktion
- Kapitel 1: Einführung

### Fachliche Aussage
Leitet inhaltlich in das erste Kapitel "Einführung" über. Kein eigener Fachinhalt.

### React-Vorschlag
`SectionDivider` (wie Folie 2) mit Kapitelnummer und -titel.

---

## Folie 9 - Agenda (Kapitel 1 aktiv)

### In der MD vorhanden
Die Agenda ist erneut vollständig vorhanden. Abweichung zu Folie 6: Punkt 7 heißt hier "Performanceanalyse" (statt "Finanzcontrolling / Performancemessung").

### Fehlende visuelle Inhalte
Visuell wird Punkt 1 "Einführung" hervorgehoben dargestellt: blaue, fette Schrift (Nummer "1." und Text "Einführung" beide blau/fett, alle übrigen Punkte schwarz). Diese Markierung zeigt den aktuellen Standort in der Gliederung und geht in der reinen Textextraktion verloren.

### Visuelle Rekonstruktion
```text
1. Einführung                                   <- BLAU + FETT (aktiv)
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
```

### Inhaltliche Rekonstruktion
1. Einführung (aktiv)
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors

### Fachliche Aussage
Wiederholt die Agenda als "Fortschrittsanzeiger" und markiert, dass nun Kapitel 1 (Einführung) behandelt wird. Hinweis: Punkt 7 ist hier mit "Performanceanalyse" verkürzt benannt (auf Folie 6 noch "Finanzcontrolling / Performancemessung").

### React-Vorschlag
`AgendaList` mit `activeIndex={0}`; aktiver Punkt blau/fett (Akzentfarbe).

---

## Folie 10 - Grundlagen des Asset Management: Definition und Einführung

### In der MD vorhanden
Vollständig vorhanden: Definition, Synonyme, Ertragsabhängigkeit, Kundentypen, Investment-Komittee, beschäftigte Rollen und das Magische Viereck.

### Fehlende visuelle Inhalte
Keine Grafik; reine Bulletliste (quadratische Spiegelstriche) mit blauer, fetter Zwischenüberschrift "Definition und Einführung". Es gibt KEIN gezeichnetes "magisches Viereck" auf der Folie – das "Magische Viereck" ist nur als Textbullet genannt (Rendite, Risiko, Liquidität, Steuern).

### Inhaltliche Rekonstruktion
- Asset Management ist die systematische Dienstleistung der professionellen Kapitalanlage mit dem Ziel, risikoeffiziente Portefeuilles zu bilden.
- Synonyme: Portfolio Management, Wertpapiermanagement, Fondsmanagement, Investment Management, Vermögensverwaltung
- Erträge der Asset Manager abhängig von: Assets under Management (AuM), Performance, Anlagestil
- Private vs. institutionelle Kunden (Versicherungen, Pensionsfonds, Stiftungen)
- Anlageentscheidungen werden häufig vom Investment-Komittee getroffen
- Asset Manager beschäftigen: Portfoliomanager, Buyside-Analysten, Händler und Mitarbeiter im Backoffice
- Magisches Viereck: Rendite, Risiko, Liquidität, Steuern

### Fachliche Aussage
Definiert Asset Management und seine Synonyme, beschreibt das Ertragsmodell, die Kundentypen, die organisatorische Entscheidungsfindung und nennt mit dem "Magischen Viereck" (Rendite, Risiko, Liquidität, Steuern) das Zielspannungsfeld der Kapitalanlage.

### React-Vorschlag
`DefinitionTopic` mit Begriffs-Card. Das Magische Viereck könnte optional als kleines `MagicSquareDiagram` ergänzt werden (vier Eck-Labels: Rendite, Risiko, Liquidität, Steuern) – auf der Folie selbst ist es jedoch nur als Aufzählung vorhanden, also kein zwingender visueller Inhalt.

---

## Folie 11 - Grundlagen des Asset Management: Formen des Asset Management

### In der MD vorhanden
Beide Formen sind mit Vor-/Nachteilen vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Strukturierung durch zwei blaue, fette Zwischenüberschriften ("Klassisches Asset Management", "Fondsgestütztes Asset Management"). Die "Vorteil:"-Labels sind grün, die "Nachteil:"-Labels rot eingefärbt (jeweils das Label farbig, der nachfolgende Text schwarz) - diese Farbsemantik geht in der MD verloren.

### Inhaltliche Rekonstruktion
**Klassisches Asset Management**
- Verwaltung des Wertpapiervermögens eines Privatanlegers oder institutionellen Investors durch Bank oder Vermögensverwalter
- Selbstständige Entscheidung des Vermögensverwalters im Rahmen eines Vermögensverwaltungsmandats
- Vorteil: Berücksichtigung der individuellen Anlagevorstellungen
- Nachteil: Hohe Kosten und Gebühren, geringe Streuung

**Fondsgestütztes Asset Management**
- Investition in Fonds, nicht in einzelne Wertpapiere
- Vorteil: Jederzeitige Überwachung des Fondsvermögens, breite Streuung möglich
- Vorteil: Möglich bereits ab deutlich kleinerem Vermögen
- Nachteil: Geringere Berücksichtigung der individuellen Anlegerinteressen

### Fachliche Aussage
Stellt die zwei grundlegenden Formen des Asset Management gegenüber: klassisch (individuell, aber teuer und wenig gestreut) vs. fondsgestützt (breit gestreut, schon bei kleinem Vermögen, aber weniger individuell).

### React-Vorschlag
`AssetManagementFormsCompare` - zwei Cards mit Vorteil-/Nachteil-Listen; Vorteile grün, Nachteile rot kodiert.

---

## Folie 12 - Grundlagen des Asset Management: Anbieter von Asset Management-Dienstleistungen

### In der MD vorhanden
Alle drei Anbieterblöcke mit Unterpunkten sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Drei blaue, fette Zwischenüberschriften strukturieren die Folie ("Banken", "Vermögensverwaltung für Privatkunden", "Vermögensverwaltung für institutionelle Anleger"); darunter jeweils quadratische Spiegelstrich-Bullets.

### Inhaltliche Rekonstruktion
**Banken**
- Information des Anlegers durch Berater
- Entscheidung des Anlegers

**Vermögensverwaltung für Privatkunden**
- Beispiel: Musterdepots für Privatkunden
- Definition von Anlagerichtlinien
- Einzeldisposition durch Verwalter

**Vermögensverwaltung für institutionelle Anleger**
- Spezialfonds
- Wertpapier- und Liquiditätsmanagement, Asset Allocation
- Asset-Liability-Management (ALM), also die Abstimmung der Fälligkeitsstruktur der aktiven und passiven Bilanzpositionen

### Fachliche Aussage
Systematisiert die Anbieter von Asset-Management-Dienstleistungen nach Kundentyp: beratende Banken, Vermögensverwaltung für Privatkunden (mit Einzeldisposition) und für institutionelle Anleger (Spezialfonds, Asset Allocation, ALM).

### React-Vorschlag
`ServiceProviderCards` - drei Cards (Banken / Privatkunden / institutionelle Anleger) mit jeweiliger Bulletliste.

---

## Folie 13 - Grundlagen des Asset Management: Charakteristika institutioneller Anleger

### In der MD vorhanden
Alle Charakteristika und Erscheinungsformen sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik; reine Bulletliste (quadratische Spiegelstriche). Die letzte Aufzählung (Erscheinungsformen) ist optisch durch eine Leerzeile vom übrigen Block abgesetzt, ist aber selbst ein eigener Bulletpunkt (kein eingerückter Unterpunkt).

### Inhaltliche Rekonstruktion
Charakteristika institutioneller Anleger:
- Juristische Person,
- i.d.R. hohe Anlagebeträge und -bestände,
- Anlage überwiegend fremder, von Dritten überlassener Mittel,
- hohe gesetzliche Restriktionen (KAGG, WpHG, KWG),
- Informationsverhalten: Nachfrage nach professionellem Research, strukturierte Informationsverarbeitung,
- häufig Entscheidungsfindung in Gruppen,
- hohe, regelmäßige Entscheidungsintensität.

Erscheinungsformen: Kreditinstitute, Versicherungen, Pensionskassen, Kapitalanlagegesellschaften bzw. Investmentfonds, Stiftungen ...

### Fachliche Aussage
Beschreibt, was institutionelle Anleger kennzeichnet (juristische Person, hohe Volumina, fremde Mittel, starke Regulierung, professionelles und gruppenbasiertes Entscheiden) und nennt typische Erscheinungsformen.

### React-Vorschlag
`InstitutionalInvestorTraits` - Merkmalsliste plus abgesetzter Block "Erscheinungsformen".

---

## Folie 14 - Grundlagen des Asset Management: Beteiligte Parteien (Beziehungsdiagramm)

### In der MD problematisch/fehlend
Dies ist die zentrale Grafikfolie. Die MD hat das Diagramm vollständig zerstört: nur Begriffsfetzen ("Finanzdienstleister", "§32 KWG", "Depotbank", "KVG Kapitalverwaltungsgesellschaft", "Fondsmanager", "Investment Advisor", "Verwahrstelle") und zwei zerbrochene Pseudo-Tabellen sind übrig. Pfeilrichtungen, Beziehungslabels und der Sprechblasentext sind unbrauchbar/verschachtelt extrahiert.

### Fehlende visuelle Inhalte
Ein Beziehungsdiagramm aller am Fondsgeschäft beteiligten Parteien. Knoten sind dunkelblaue Kästen mit weißer Schrift; Beziehungen sind beschriftete, gerichtete Pfeile (Pfeilfarbe graublau). Oben links das BaFin-Logo (rotes/gelbes Wellen-Streifensymbol + schwarzer Schriftzug "BaFin"). Oben rechts eine hellblaue, abgerundete Sprechblase, die nach links auf den Finanzdienstleister zeigt. In der Bildmitte das Sondervermögen als Foto eines gerollten Geldscheinbündels (graue Beschriftung "Sondervermögen" darüber). Rechts daneben eine dunkle Silhouette eines Mannes, der ein Dokument liest (Label "Investor"). Eine dünne Rahmenlinie umschließt den Bereich Sondervermögen/Investor/Verwahrstelle.

Knoten (dunkelblaue Kästen): "Finanz-dienstleister §32 KWG", "Depotbank", "KVG / Kapitalverwaltungsgesellschaft", "Fonds-manager", "Investment Advisor" (zweimal: einmal unten links, einmal unten Mitte), "Verwahr-stelle" (unten rechts). Zusätzlich Foto "Sondervermögen" und Silhouette "Investor".

Beschriftete, gerichtete Pfeile (geprüft am Bild):
- BaFin --"kontrolliert"--> Finanzdienstleister (§32 KWG)  [Pfeil zeigt nach rechts in den Finanzdienstleister]
- BaFin --"kontrolliert"--> KVG  [Pfeil zeigt nach unten in die KVG]
- BaFin --"überwacht"--> Depotbank  [Linie führt nach rechts, Pfeil in die Depotbank]
- Finanzdienstleister --"beauftragt"--> Depotbank  [Pfeil zeigt nach unten in die Depotbank]
- KVG --"beauftragt"--> Depotbank  [Pfeil zeigt in die Depotbank; KORRIGIERT gegenüber Entwurf, dort fälschlich "Depotbank -> KVG"]
- KVG --"beschäftigt"--> Fondsmanager  [Pfeil nach unten in den Fondsmanager]
- Fondsmanager --"verwaltet"--> Sondervermögen  [Pfeil nach rechts auf das Geldbündel]
- Depotbank --"verwahrt"--> Sondervermögen  ["verwahrt" beschriftete Linie zwischen Depotbank und Sondervermögen]
- Investment Advisor (unten links) --"berät"--> Fondsmanager  [Pfeil nach oben in den Fondsmanager]
- Investment Advisor (unten Mitte) --"beliefert"--> Verwahrstelle (unten rechts)  [Pfeil nach rechts in die Verwahrstelle]
- Investor --"investiert"--> Sondervermögen  [Pfeil zeigt nach LINKS, vom Investor zum Geldbündel]
- Sondervermögen --"Anteile"--> Investor  [Pfeil zeigt nach RECHTS, zurück zum Investor]

### Visuelle Rekonstruktion
```text
 ≈ BaFin   --kontrolliert-->   +--------------------+
   |  \                        | Finanz-            |
 kontrolliert  \  überwacht    | dienstleister      |
   |            \              |     §32 KWG        |
   v             \             +---------+----------+
 +----------+     \                      | beauftragt
 |  KVG     |      \                     v
 |(Kapital- |       \  beauftragt   +----------+
 |verwalt.- |--------+------------> | Depotbank|
 |gesellsch.)|                      +----+-----+
 +----+-----+                            | verwahrt
 beschäftigt                             v
   |              "Sondervermögen"
   v          +---------------------+        _O_
 +----------+ |  [Foto Geldbündel]  | <-investiert-  /|\ Investor
 | Fonds-   |-+   ---- verwaltet --->|  --Anteile-->  / \
 | manager  |                        +---------------------+
 +----+-----+
   ^ berät
   |
 +-----------+    --beliefert-->    +-----------+
 |Investment |  [Investment        | Verwahr-  |
 | Advisor   |   Advisor (Mitte)]  |  stelle   |
 +-----------+                      +-----------+
```

Sprechblase (oben rechts, zeigt nach links auf den Finanzdienstleister): siehe inhaltliche Rekonstruktion.

### Inhaltliche Rekonstruktion
Beziehungsmatrix (Quelle -> Beziehung -> Ziel), am Bild geprüfte Pfeilrichtungen:
| Quelle | Beziehung | Ziel |
|---|---|---|
| BaFin | kontrolliert | Finanzdienstleister (§32 KWG) |
| BaFin | kontrolliert | KVG |
| BaFin | überwacht | Depotbank |
| Finanzdienstleister | beauftragt | Depotbank |
| KVG | beauftragt | Depotbank |
| KVG | beschäftigt | Fondsmanager |
| Fondsmanager | verwaltet | Sondervermögen |
| Depotbank | verwahrt | Sondervermögen |
| Investment Advisor (unten links) | berät | Fondsmanager |
| Investment Advisor (unten Mitte) | beliefert | Verwahrstelle |
| Investor | investiert | Sondervermögen |
| Sondervermögen | (gibt) Anteile | Investor |

Sprechblase "2 Modelle des Finanzdienstleisters":
- Normale **Anlageberatung im klassischen Sinn:** Einverständnis des Kunden muss vor jedem Geschäft eingeholt werden
- **Finanzportfolioverwaltung:** Kunde erteilt Generalvollmacht, BaFin fordert höhere EK-Richtlinien

### Fachliche Aussage
Zeigt das Zusammenspiel der am Fondsgeschäft beteiligten Parteien und die Aufsichts-, Auftrags- und Verwahrbeziehungen: Die BaFin kontrolliert Finanzdienstleister und KVG und überwacht die Depotbank; sowohl der Finanzdienstleister als auch die KVG beauftragen die Depotbank; die KVG beschäftigt den Fondsmanager, der das von der Depotbank verwahrte Sondervermögen verwaltet; der Investor investiert Geld in das Sondervermögen und erhält dafür Anteile. Der Finanzdienstleister kann zwei Modelle wählen (klassische Anlageberatung mit Einzelzustimmung vs. Finanzportfolioverwaltung per Generalvollmacht mit höheren EK-Anforderungen).

### React-Vorschlag
`AssetManagementPartiesDiagram` - SVG-/Flow-Diagramm mit beschrifteten Knoten und gerichteten, beschrifteten Pfeilen (Beziehungsmatrix als Datenquelle). Die beiden Finanzdienstleister-Modelle als ausklappbare `Callout`-Sprechblase. Für mobile Ansicht alternativ als gestaffelte Beziehungs-Cards rendern.

---

## Folie 15 - Grundlagen des Asset Management: Beteiligte Parteien - BaFin

### In der MD vorhanden
Der gesamte Text zur BaFin ist vollständig und korrekt vorhanden, inkl. der eingerückten Unterpunkte zur laufenden Aufsicht und der Hinweise zu FMA/FINMA.

### Fehlende visuelle Inhalte
Keine Fachgrafik. Blaue, fette Zwischenüberschrift "Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)"; verschachtelte Bulletliste mit quadratischen Spiegelstrichen auf erster Ebene und eingerückten Strich-Unterpunkten (–) auf der zweiten Ebene unter dem "Beaufsichtigt und kontrolliert …"-Punkt.

### Inhaltliche Rekonstruktion
Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin):
- Rechtsfähige Bundesanstalt mit Sitz in Frankfurt am Main und Bonn
- Untersteht der Rechts- und Fachaufsicht des Bundesministeriums der Finanzen
- Rechtsgrundlage: Kreditwesengesetz (KWG)
- Beaufsichtigt und kontrolliert als Finanzmarktaufsichtsbehörde im Rahmen einer Allfinanzaufsicht alle Bereiche des Finanzwesens in Deutschland, insbesondere Banken, Versicherungen und den Handel mit Wertpapieren:
  - Neugründungen von Banken
  - Laufende Aufsicht: Überwachung der finanziellen Situation nach der Solvabilitätsverordnung (SolvV) und Liquiditätsverordnung (LiqV) sowie die ordnungsgemäße Organisation inkl. geeigneter Risikocontrolling- und Managementsysteme (MaRisk)
  - Prüfung der Berufung von Bankvorständen
- In Österreich: Finanzmarktaufsichtsbehörde (FMA)
- In der Schweiz: Eidgenössische Finanzmarktaufsicht (FINMA)
- Umgehung staatlicher Kontrolle nur durch Sitzverlegung in Offshore-Gebiete möglich

### Fachliche Aussage
Beschreibt Rolle, Rechtsgrundlage (KWG) und Aufgaben der BaFin als deutsche Allfinanzaufsicht (inkl. laufender Aufsicht nach SolvV/LiqV/MaRisk) sowie ihre Pendants in Österreich (FMA) und der Schweiz (FINMA).

### React-Vorschlag
`RegulatorInfoCard` - strukturierte Card mit verschachtelter Liste; FMA/FINMA als kleine Ländervergleichs-Badges.

---

## Folie 16 - Grundlagen des Asset Management: Beteiligte Parteien - KVG

### In der MD vorhanden
Der Text zu Kapitalverwaltungsgesellschaften (KVG) ist vollständig und korrekt vorhanden.

### Fehlende visuelle Inhalte
Im unteren Drittel der Folie eine Logoleiste realer Anbieter (KVGs/Asset Manager), in zwei Reihen angeordnet. Diese Logos sind illustrative Praxisbeispiele und gehen in der MD verloren.
Reihe 1: Allianz Global Investors, DWS, Union Investment, J.P.Morgan Asset Management.
Reihe 2: BlackRock, Deka Investments, Amundi Asset Management.

### Visuelle Rekonstruktion
```text
[Allianz Global Investors] [DWS] [Union Investment] [J.P.Morgan AM]
        [BlackRock]   [Deka Investments]   [Amundi AM]
```

### Inhaltliche Rekonstruktion
Kapitalverwaltungsgesellschaften (KVG):
- Gesellschaft, die liquide Mittel von Anlegern einsammelt und diese nach vorgegebenen Grundsätzen in diverse Anlageklassen investiert
- KVG steuert die Anlagepolitik des Sondervermögens durch Initiierung von Käufen und Verkäufen
- Unterscheidung zwischen:
  - Spezial-Sondervermögen: Sondervermögen, das auf Vereinbarungen zwischen institutionellen Anlegern und der KVG basiert
  - Publikums-Sondervermögen: alle übrigen Sondervermögen
- Wert des Sondervermögens entspricht der Summe der mit dem aktuellen Rücknahmepreis bewerteten Anteilscheine

Beispiel-Anbieter (Logos): Allianz Global Investors, DWS, Union Investment, J.P.Morgan Asset Management, BlackRock, Deka Investments, Amundi Asset Management.

### Fachliche Aussage
Erklärt Funktion und Aufgabe der KVG (Einsammeln und Anlegen von Anlegergeldern, Steuerung der Anlagepolitik), die Unterscheidung Spezial- vs. Publikums-Sondervermögen und die Bewertung des Sondervermögens; nennt reale KVGs als Marktbeispiele.

### React-Vorschlag
`KVGTopic` mit Erläuterungsliste plus `ProviderLogoGrid` (reale Anbieter als Logo-Galerie; optional, da rein illustrativ).

---

## Folie 17 - Grundlagen des Asset Management: Beteiligte Parteien - Depotbank & Sondervermögen

### In der MD vorhanden
Der Text zu Depotbank und Sondervermögen ist vollständig und korrekt vorhanden.

### Fehlende visuelle Inhalte
Rechts/im rechten Bereich eine Logoleiste realer Verwahrstellen/Depotbanken: State Street, BNY Mellon, BNP Paribas Securities Services, CACEIS Investor Services. Diese Logos sind illustrative Praxisbeispiele und fehlen in der MD. Strukturierung durch zwei blaue, fette Zwischenüberschriften ("Depotbank", "Sondervermögen") mit quadratischen Spiegelstrichen und eingerückten Strich-Unterpunkten unter dem "Überwacht Geschäftstätigkeit …"-Punkt.

### Visuelle Rekonstruktion
```text
Depotbank          [State Street]   [BNY Mellon]
...                [BNP Paribas Securities Services]
Sondervermögen     [CACEIS Investor Services]
...
```

### Inhaltliche Rekonstruktion
Depotbank:
- Übernimmt Verwahrung der Anlagegelder
- Überwacht Geschäftstätigkeit der KVG bzgl.:
  - Rechtmäßigkeit der Geschäfte
  - Korrekte Ermittlung des Anteilspreises
  - Collateral Management
  - Anlagegrenzprüfung
  - Marktgerechtigkeit

Sondervermögen:
- Anlagekapital der Fondsanleger
- Abgetrennt vom Vermögen der KVG (Verwahrung durch Depotbank)
- Schutz vor Wertänderungen der anderen Fonds der KAG, vor deren Zugriff oder ihrer Gläubiger
- Wert: Summe der mit aktuellem Rücknahmepreis bewerteten Anteilscheine

Beispiel-Anbieter (Logos): State Street, BNY Mellon, BNP Paribas Securities Services, CACEIS Investor Services.

### Fachliche Aussage
Beschreibt die Depotbank (Verwahrung der Anlagegelder, Überwachung der KVG hinsichtlich Rechtmäßigkeit, Anteilspreis, Collateral, Anlagegrenzen und Marktgerechtigkeit) und das Sondervermögen als vom KVG-Vermögen getrenntes, insolvenzgeschütztes Anlegerkapital; reale Verwahrstellen dienen als Marktbeispiele.

### React-Vorschlag
`DepotbankTopic` mit zwei Abschnitten (Depotbank / Sondervermögen) und `ProviderLogoGrid` für die Verwahrstellen-Logos (optional, illustrativ).

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 3: Curriculum-Roadmap (drei Semester, "Asset Management" orange hervorgehoben)
2. Folie 5: Spielregeln-Tabellen (Lehrmethoden, Leistungsbewertung) plus Klausur-Bulletliste
3. Folie 14: Beziehungsdiagramm der beteiligten Parteien mit gerichteten, beschrifteten Pfeilen und der Sprechblase "2 Modelle des Finanzdienstleisters"
4. Folie 9: Agenda mit hervorgehobenem aktivem Punkt (Kapitel 1)
5. Folie 11: Vorteil-/Nachteil-Vergleich der beiden Asset-Management-Formen mit Farbkodierung (grün/rot)

## Kann vereinfacht werden

- Titel-/Trennfolien 1, 2, 8 als gemeinsames Banner-/Divider-Template
- Folien 4, 10, 12, 13, 15 als strukturierte Card-/Listen-Komponenten
- Folie 7 als Quellenliste; Buchcover als optionale Thumbnails
- "Magisches Viereck" (Folie 10) optional als kleines Eck-Diagramm, da auf der Folie nur als Aufzählung vorhanden

## Nicht fachlich relevant

- HBW-Logo und vierteilige HBW-Fotoleiste
- grauer Kopfbereich / Folientitel-Layout
- Folien-Footer ("Asset Management / CS / Folie N") und Copyright-Zeile
- Versionskennung als reines Layout-Element (Inhalt "V26-03-22" dennoch beibehalten)
- Buchcover (Folie 7), KVG-Logos (Folie 16) und Verwahrstellen-Logos (Folie 17) als reine Illustration
- exakte Folienpositionierung und dekorative Bildästhetik

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden – ausschließlich aus den tatsächlich auf den Folien vorhandenen Inhalten:

```js
export const curriculumRoadmap = [
  {
    semester: '3. Semester',
    modules: [
      { title: 'Finanzinstrumente und Risikomanagement', active: false },
    ],
  },
  {
    semester: '4. Semester',
    modules: [
      { title: 'Asset Management', active: true },     // orange hervorgehoben
      { title: 'Behavioral Finance', active: false },
    ],
  },
  {
    semester: '5. Semester',
    modules: [
      { title: 'Analyse von Finanzdaten und Data Science', active: false },
      { title: 'Corporate Financial Management', active: false },
    ],
  },
]

export const agenda = [
  'Einführung',                                   // Folie 9: activeIndex = 0
  'Traditionelle Assetklassen',
  'Alternative Assetklassen',
  'Mathematische und statistische Grundlagen',
  'Grundlagen der Portfoliotheorie',
  'Portfoliomanagement',
  'Performanceanalyse',                           // Folie 6: 'Finanzcontrolling / Performancemessung'
  'Indizes / Aktives vs. Passives Management',
  'FinTechs im Asset Management / Robo Advisors',
]
```

```js
export const partiesRelations = [
  { from: 'BaFin', label: 'kontrolliert', to: 'Finanzdienstleister (§32 KWG)' },
  { from: 'BaFin', label: 'kontrolliert', to: 'KVG' },
  { from: 'BaFin', label: 'überwacht', to: 'Depotbank' },
  { from: 'Finanzdienstleister', label: 'beauftragt', to: 'Depotbank' },
  { from: 'KVG', label: 'beauftragt', to: 'Depotbank' },
  { from: 'KVG', label: 'beschäftigt', to: 'Fondsmanager' },
  { from: 'Fondsmanager', label: 'verwaltet', to: 'Sondervermögen' },
  { from: 'Depotbank', label: 'verwahrt', to: 'Sondervermögen' },
  { from: 'Investment Advisor (unten links)', label: 'berät', to: 'Fondsmanager' },
  { from: 'Investment Advisor (unten Mitte)', label: 'beliefert', to: 'Verwahrstelle' },
  { from: 'Investor', label: 'investiert', to: 'Sondervermögen' },
  { from: 'Sondervermögen', label: 'Anteile', to: 'Investor' },
]

export const finanzdienstleisterModelle = [
  {
    name: 'Anlageberatung im klassischen Sinn',
    detail: 'Einverständnis des Kunden muss vor jedem Geschäft eingeholt werden',
  },
  {
    name: 'Finanzportfolioverwaltung',
    detail: 'Kunde erteilt Generalvollmacht, BaFin fordert höhere EK-Richtlinien',
  },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Diagramme möglich bleiben.
