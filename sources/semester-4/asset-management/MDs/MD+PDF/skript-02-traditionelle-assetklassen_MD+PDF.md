# skript-02-traditionelle-assetklassen_MD+PDF - Traditionelle Assetklassen: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-02-traditionelle-assetklassen.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-02-traditionelle-assetklassen.pdf` verloren gegangen, nur als kaputte Tabellen oder Formeln übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Formeln, Tabellen, Schaubilder, Marktdaten oder Bildaussagen verloren gehen.

**Quelle:** `skript-02-traditionelle-assetklassen.pdf` mit 33 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, graue Kopfzeile, Folien-Footer (z. B. "Asset Management / CS / Folie XX") und die Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme, Formeln, Tabellen, Schaubilder, Organigramme, Marktdaten und Icons.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen und Formeln nicht übernehmen:** Mehrere Folien (Säulendiagramm Folie 17, Praktikerformeln Folie 24, Rechenbeispiel Folie 26, Ratingtabelle Folie 30) sind in der MD als zerbrochene Zahlen-/Zeichenketten dargestellt. Diese Inhalte in React als echte Tabellen, Diagramme oder gesetzte Formeln (KaTeX/MathJax) neu aufbauen.
2. **Formeln semantisch setzen:** Effektivverzinsung (Praktikerformel) und das Rechenbeispiel zur erwarteten vs. versprochenen Verzinsung tragen fachliche Bedeutung und müssen in korrekter Bruch-/Indexdarstellung erscheinen.
3. **Diagramme und Schaubilder nachbauen:** Risiko-Rendite-Diagramm (Folie 3), Systematisierungstabelle (Folie 4), Organigramm der AG-Organe (Folie 10), Weltkarten-Indexübersicht (Folie 16) und gestapeltes Säulendiagramm (Folie 17) sollten nicht nur als Text dargestellt werden.
4. **Reale Marktdaten als Beispiel kennzeichnen:** Index-Stände (Folie 16) und der comdirect-Anleihescreenshot (Folie 21) sind reale Werte zum Stichtag und sollten als Beispiel markiert, nicht als Prüfungsformelwerte gelernt werden.
5. **Callouts/Merksätze erhalten:** Pari-Zusammenhang (Folie 24), Aktiengattungs-Ausschluss (Folie 15) und Übernahmeschutz-Hinweis (Folie 14) sind als hervorgehobene Kästen gestaltet und sollten als `.callout`-Boxen umgesetzt werden.
6. **Kapiteltrenner einheitlich behandeln:** Die Foto-Banner der Trennfolien (1, 5, 18) sind reine Dekoration; stattdessen eine Akzentfläche in Modulfarbe verwenden.
7. **Quellenhinweise erhalten:** Quellen wie `finanzen.net`, `comdirect.de`, `statista, DAI` und `vgl. Bösch S. 191` beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterDivider` | 1, 5, 18 | Kapiteltrenner mit Kapitelnummer und -titel |
| `AgendaList` | 2 | Nummerierte Agenda mit aktivem Kapitelpunkt |
| `RiskReturnScatter` | 3 | Idealtypisches Risiko-Rendite-Diagramm mit Punkten |
| `TwoColumnCategoryTable` | 4 | Traditionelle vs. alternative Assetklassen farbig gegenüberstellen |
| `ContentSection` / `DefinitionList` | 6, 7, 9, 11, 13, 19, 22, 23, 25, 28, 31, 32, 33 | Strukturierte Bullet-/Definitionslisten |
| `ExampleList` | 8 | KGaA-Beispielunternehmen |
| `OrgRelationDiagram` | 10 | Organigramm der AG-Organe mit Pfeilen |
| `ContentWithImage` / `TopicWithAside` | 12, 20 | Text mit illustrierender Bild-Card |
| `ComparisonTwoCol` | 13 | Stammaktien vs. Vorzugsaktien |
| `WorldIndexMap` | 16 | Indexstände weltweit (Tabelle/Karte) |
| `StackedBarChart` | 17 | Gestapeltes Säulendiagramm Aktionäre/Fondsbesitzer |
| `MarketScreenshotCard` | 21 | comdirect-Anleihescreenshot rekonstruieren |
| `FormulaBlock` / `WorkedExample` | 24, 26 | Praktikerformeln und Rechenbeispiel |
| `Callout` / `InfoBox` | 14, 15, 24 | Merksatz-/Hinweiskästen |
| `RiskGrid` | 29 | Risikoarten von Anleihen als Card-Grid |
| `RatingTable` | 30 | Ratingskala Moody's/S&P mit Gruppierung |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 2: (Traditionelle) Assetklassen

### In der MD vorhanden
Die MD enthält die Titeltexte (MD-Zeilen 1-4): "Asset Management", "Kapitel 2", "(Traditionelle) Assetklassen", "V26-03-22". Interne Foliennummer laut Fußzeile: Folie 18.

### Fehlende visuelle Inhalte
Reine Titel-/Kapiteltrennfolie im HBW-Layout. Im oberen Bereich vier nebeneinander liegende Foto-Kacheln (Bannerstreifen): (1) Hand hält ein Schild/Karte mit HBW-Logo, (2) lächelnde junge Frau mit Brille, (3) Gruppe junger Studierender im Freien, (4) modernes Hochschulgebäude. Darunter auf grau-blauem Flächenblock der Kapiteltitel. Oben links Kopfzeile "Asset Management", rechts das HBW-Logo. Keine fachlichen Diagramme.

### Visuelle Rekonstruktion
```
[Foto Schild/HBW] [Foto Frau] [Foto Gruppe] [Foto Gebäude]
-------------------------------------------------------
          Kapitel 2
          (Traditionelle) Assetklassen
```

### Inhaltliche Rekonstruktion
Kapitel 2: (Traditionelle) Assetklassen. Versionsstand V26-03-22.

### Fachliche Aussage
Einstiegs-/Trennfolie, die das zweite Kapitel der Vorlesung zu (traditionellen) Assetklassen einleitet.

### React-Vorschlag
`ChapterDivider` - schlichte Kapiteltrennkomponente mit Kapitelnummer und -titel; Fotobanner nicht nachbauen, rein dekorativ.

---

## Folie 2 - Agenda

### In der MD vorhanden
Die MD listet die neun Agendapunkte vollständig (MD-Zeilen 7-16): 1. Einführung, 2. Traditionelle Assetklassen, 3. Alternative Assetklassen, 4. Mathematische und statistische Grundlagen, 5. Grundlagen der Portfoliotheorie, 6. Portfoliomanagement, 7. Performanceanalyse, 8. Indizes / Aktives vs. Passives Management, 9. FinTechs im Asset Management / Robo Advisors.

### Fehlende visuelle Inhalte
Die MD verliert die visuelle Hervorhebung: Punkt 2 "Traditionelle Assetklassen" ist blau und fett gesetzt (aktueller Kapitelfokus). Alle übrigen Punkte schwarz. Nummerierte Liste 1.-9.

### Visuelle Rekonstruktion
```
1. Einführung
2. Traditionelle Assetklassen     <- blau/fett (aktiv)
3. Alternative Assetklassen
...
9. FinTechs im Asset Management / Robo Advisors
```

### Inhaltliche Rekonstruktion
Gliederung der gesamten Vorlesung in 9 Kapiteln; aktuell behandelt wird Kapitel 2 (Traditionelle Assetklassen).

### Fachliche Aussage
Überblick über den Aufbau der Vorlesung; das vorliegende Kapitel 2 ordnet sich in eine Reihe von Asset-Management-Themen ein.

### React-Vorschlag
`AgendaList` - nummerierte Liste mit einem `active`-Flag, das den aktuellen Kapitelpunkt in der Modul-Akzentfarbe hervorhebt.

---

## Folie 3 - Assetklassen (Definition)

### In der MD vorhanden
Die MD enthält die Definition vollständig (MD-Zeilen 19-29): Assetklassen sind Anlagen und Anlageinstrumente mit vergleichbaren Eigenschaften, die auf Veränderungen von Fundamentalfaktoren einer Wirtschaft ähnlich reagieren; Fundamentalfaktoren = Wirtschaftswachstum, Inflation, technischer Fortschritt, Infrastruktur, Arbeit oder Ressourcen; Unterscheidung in standardisierte (höhere Liquidität, geringe Transaktionskosten) und nicht standardisierte Assetklassen (nicht austauschbare Einzelstücke, kein regelmäßiger Handel, meist keine laufenden Erträge).

### In der MD problematisch/fehlend
Die MD-Zeilen 30-32 ("Idealtypische, stark vereinfachte Darstellung") sind aus der Grafik herausgelöste Textfetzen ohne Bezug. Das gesamte Risiko-Rendite-Diagramm fehlt in der MD.

### Fehlende visuelle Inhalte
Risiko-Rendite-Diagramm (unten links). Y-Achse: "Rendite" (Pfeil nach oben), X-Achse: "Risiko" (Pfeil nach rechts). Eine aufsteigende graue Gerade von links unten nach rechts oben, auf der mehrere graue Punkte (Assetklassen) der Reihe nach mit steigendem Risiko/Rendite angeordnet sind. Beschriftungen der Punkte (von links unten nach rechts oben): Kurzfristige Bundesanleihen (am Ursprung, knapp unterhalb), Spareinlagen, Langfristige Bundesanleihen, Rentenfonds, Aktienfonds, Aktien, Optionen, Futures (rechts oben). Eine hellblaue Textbox auf dem Diagramm trägt den Hinweis "Idealtypische, stark vereinfachte Darstellung". (Visuell bestätigt: Reihenfolge und Achsen wie beschrieben; Futures liegt rechts oben am Rand.)

### Visuelle Rekonstruktion
```
Rendite ^
        |                                      • Futures
        | [Idealtypische, stark        • Optionen
        |  vereinfachte Darstellung]  • Aktien
        |                          • Aktienfonds
        |                    • Rentenfonds
        |        • Langfristige Bundesanleihen
        |   • Spareinlagen
        | • Kurzfristige Bundesanleihen
        +------------------------------------> Risiko
```

### Inhaltliche Rekonstruktion
Idealtypische Risiko-Rendite-Rangfolge (steigendes Risiko = steigende erwartete Rendite):
Kurzfristige Bundesanleihen < Spareinlagen < Langfristige Bundesanleihen < Rentenfonds < Aktienfonds < Aktien < Optionen < Futures.

### Fachliche Aussage
Assetklassen reagieren ähnlich auf Fundamentalfaktoren; sie lassen sich nach Risiko und erwarteter Rendite in eine idealtypische, stark vereinfachte Rangfolge bringen, in der höheres Risiko mit höherer erwarteter Rendite einhergeht.

### React-Vorschlag
`RiskReturnScatter` - schematisches Risiko-Rendite-Diagramm mit beschrifteten Punkten entlang einer Geraden; Achsen "Risiko"/"Rendite". Optional als statische SVG-Skizze.

---

## Folie 4 - Systematisierung Assetklassen

### In der MD vorhanden
Die MD enthält die Inhalte als zerbrochene Textfolge (MD-Zeilen 35-50): Überschriften "Asset Klassen", "Traditionelle (standardisierte) Assetklassen", "Alternative (nicht standardisierte) Assetklassen" sowie beide Listen.

### In der MD problematisch/fehlend
Die zweispaltige farbige Tabellenstruktur geht verloren; die beiden Spalteninhalte verschmelzen zeilenweise und sind ohne das Original schwer zuzuordnen.

### Fehlende visuelle Inhalte
Zweispaltige Tabelle mit Kopfzeilen. Oberste Kopfzeile (grau, weiße Schrift, über beide Spalten): "Asset Klassen". Darunter zwei Spaltenköpfe: links blau "Traditionelle (standardisierte) Assetklassen", rechts grün "Alternative (nicht standardisierte) Assetklassen". Spalteninhalte als Aufzählungen mit quadratischen Bullets; linke Spalte hellblau hinterlegt, rechte Spalte hellgrün hinterlegt. In der linken Spalte folgt nach "Währungen" eine Leerzeile vor "entsprechende Derivate"/"und Fonds"; "etc." steht ohne Bullet.

### Visuelle Rekonstruktion
```
+-----------------------------------------------+
|                 Asset Klassen (grau)          |
+---------------------+-------------------------+
| Traditionelle       | Alternative             |
| (standardisierte)   | (nicht standardisierte) |
| Assetklassen (blau) | Assetklassen (grün)     |
+---------------------+-------------------------+
| Aktien              | Immobilien              |
| Anleihen            | Hedge Fonds             |
| Geldmarktinstrumente| Private Equity,         |
| Währungen           |   Venture Capital       |
|                     | Rohstoffe               |
| entsprechende       | Volatilität            |
|   Derivate          | Sammlerstücke, z.B.     |
| und Fonds           |   - Oldtimer, Kunst     |
| etc.                |   - Briefmarken, Uhren  |
|                     | und entsprechende Fonds |
|                     | etc.                    |
+---------------------+-------------------------+
```

### Inhaltliche Rekonstruktion
| Traditionelle (standardisierte) Assetklassen | Alternative (nicht standardisierte) Assetklassen |
|---|---|
| Aktien | Immobilien |
| Anleihen | Hedge Fonds |
| Geldmarktinstrumente | Private Equity, Venture Capital |
| Währungen | Rohstoffe |
| entsprechende Derivate | Volatilität |
| und Fonds | Sammlerstücke, z.B. Oldtimer, Kunst, Briefmarken, Uhren |
| etc. | und entsprechende Fonds |
|  | etc. |

### Fachliche Aussage
Assetklassen werden in traditionelle (standardisierte) und alternative (nicht standardisierte) Klassen systematisiert; die traditionellen umfassen v.a. Aktien, Anleihen, Geldmarktinstrumente und Währungen, die alternativen u.a. Immobilien, Hedge Fonds, Private Equity und Rohstoffe.

### React-Vorschlag
`TwoColumnCategoryTable` - zweispaltige Tabelle mit farbigen Spaltenköpfen (blau/grün) und gemeinsamer Überschrift, je Spalte eine Aufzählung.

---

## Folie 5 - Kapitel 2.1: Aktien

### In der MD vorhanden
Die MD enthält die Titeltexte (MD-Zeilen 53-56): "Asset Management", "Kapitel 2.1", "Aktien", "V26-03-22". Interne Foliennummer: Folie 22.

### Fehlende visuelle Inhalte
Unterkapitel-Trennfolie im selben HBW-Layout wie Folie 1: oben vier dekorative Fotokacheln (HBW-Schild, Frau mit Brille, Studierendengruppe, Gebäude), darunter Flächenblock mit Kapiteltitel. Keine fachlichen Grafiken.

### Visuelle Rekonstruktion
```
[Fotobanner]
   Kapitel 2.1
   Aktien
```

### Inhaltliche Rekonstruktion
Unterkapitel 2.1: Aktien.

### Fachliche Aussage
Leitet den Abschnitt zur traditionellen Assetklasse Aktien ein.

### React-Vorschlag
`ChapterDivider` (Wiederverwendung) - mit Unterkapitelnummer 2.1 und Titel "Aktien".

---

## Folie 6 - Aktien / Kapitalgesellschaften: Aktiengesellschaft (AG)

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 59-74): Definition (Kapitalgesellschaften, deren Grundkapital in Aktien zerlegt ist, Regelung durch AktG), Organe (Vorstand, Aufsichtsrat, Aktionär, Hauptversammlung), Haftung nur mit Gesellschaftsvermögen, Mindestnennbetrag Grundkapital EUR 50.000 (mind. 25% einzuzahlen), Einpersonengesellschaft/-gründung möglich, Aktien Mindestnennwert 1 €, Vorteile der AG (organisierter Markt/Börse, hohe Fungibilität, klare Trennung Management/Eigentum).

### Fehlende visuelle Inhalte
Reine Textfolie, gegliedert in Bullet-Liste mit eingerückten Unterpunkten unter "Vorteile der AG". Titelzeile: "Aktien" (groß) / "Kapitalgesellschaften" (Unterzeile). Blaue Abschnittsüberschrift "Aktiengesellschaft (AG)". Keine Diagramme, Tabellen oder Bilder. Fett: "Definition", "Organe", "Vorteile der AG".

### Inhaltliche Rekonstruktion
- Definition: Aktiengesellschaften sind Kapitalgesellschaften, deren Grundkapital in Aktien zerlegt ist; Regelung durch AktG.
- Organe: Vorstand, Aufsichtsrat, Aktionär, Hauptversammlung.
- Haftung: nur mit dem Gesellschaftsvermögen, keine persönliche Haftung.
- Mindestnennbetrag des Grundkapitals: EUR 50.000, hiervon sind mindestens 25% einzuzahlen.
- Einpersonengesellschaft und Einpersonengründung möglich (vergleichbar mit GmbH).
- Aktien: Mindestnennwert 1 €.
- Vorteile der AG: Vorliegen eines organisierten Marktes für Beteiligungsfinanzierungen (Börse); hohe Fungibilität der Anteile; klare Trennung von Management und Eigentum möglich.

### Fachliche Aussage
Die AG ist eine Kapitalgesellschaft mit in Aktien zerlegtem Grundkapital, beschränkter Haftung und festen Mindestkapitalanforderungen; ihre Vorteile liegen in Börsenhandel, Fungibilität und Trennung von Management und Eigentum.

### React-Vorschlag
`ContentSection` (Standard-HTML-Bullet-Liste) mit hervorgehobenen Schlüsselbegriffen via `<strong>`.

---

## Folie 7 - Aktien / Kapitalgesellschaften: Kommanditgesellschaft auf Aktien (KGaA)

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 77-93): Definition (AG, die anstelle eines Vorstandes über persönlich haftende Gesellschafter/Komplementäre verfügt), Organe (Komplementäre, Kommanditisten, Aufsichtsrat, Hauptversammlung), Eigenschaften der Komplementäre (Personengesellschaftsrecht § 278 Abs. 2 AktG, geschäftsführungs-/vertretungsbefugt, Ausschluss möglich) und der Kommanditaktionäre (mitgliedschaftliche Rechte wie AG-Aktionär, bringen Grundkapital auf, keine weitere Haftung).

### Fehlende visuelle Inhalte
Reine Textfolie mit gegliederter Bullet-Liste; Titelzeile "Aktien" / "Kapitalgesellschaften", blaue Abschnittsüberschrift "Kommanditgesellschaft auf Aktien (KGaA)". Fett: "Definition", "Organe", "Kommanditaktionäre". Keine Grafiken.

### Inhaltliche Rekonstruktion
- Definition: Aktiengesellschaft, die anstelle eines Vorstands über persönlich haftende Gesellschafter (Komplementäre) verfügt.
- Organe: Komplementäre, Kommanditisten, Aufsichtsrat, Hauptversammlung.
- Komplementäre: persönlich haftend; unterliegen dem Personengesellschaftsrecht (§ 278 Abs. 2 AktG); geschäftsführungs- und vertretungsbefugt, d.h. die Geschäftsführung der KGaA leitet die KGaA; Ausschluss einzelner von Geschäftsführung/Vertretung möglich.
- Kommanditaktionäre: mitgliedschaftliche Rechte des Aktionärs einer AG; bringen das in Aktien zerlegte Grundkapital der KGaA auf; keine weitere Haftung (z.B. für Forderungen gegen die Gesellschaft).

### Fachliche Aussage
Die KGaA verbindet AG-Strukturen mit persönlich haftenden Komplementären; Kommanditaktionäre haben die Rechte normaler Aktionäre, während die Geschäftsführung bei den Komplementären liegt.

### React-Vorschlag
`ContentSection` - strukturierte Bullet-Liste mit Unterebenen.

---

## Folie 8 - Aktien / KGaA: KGaA an der Frankfurter Börse

### In der MD vorhanden
Die MD enthält die vollständige Liste der Beispielunternehmen (MD-Zeilen 96-112).

### In der MD problematisch/fehlend
MD-Zeile 112 "STOSE&Co.KGaA" ist ein OCR-/Extraktionsartefakt; auf der Folie ist die letzte Position ebenfalls als "STOSE&Co.KGaA" lesbar (vermutlich abgeschnittener/verkürzter Eigenname; so wie sichtbar beibehalten).

### Fehlende visuelle Inhalte
Reine Bullet-Liste mit 14 Einträgen (quadratische Bullets), keine Grafiken. Blaue Abschnittsüberschrift "KGaA an der Frankfurter Börse". Titelzeile "Aktien" / "Kommanditgesellschaft auf Aktien (KGaA)".

### Inhaltliche Rekonstruktion
Beispiele für KGaA an der Frankfurter Börse (14 Einträge):
- Borussia Dortmund GmbH & Co. KGaA
- CTS Eventim AG & Co. KGaA
- CEWE Stiftung & Co. KGaA
- Drägerwerk AG & Co. KGaA
- EUROKAI GmbH & Co. KGaA
- Fresenius Medical Care AG & Co. KGaA
- Fresenius SE & Co. KGaA
- Henkel AG & Co. KGaA
- Heliad Equity Partners GmbH & Co. KGaA
- Hella KGaA
- Merck KGaA
- Merkur Bank KGaA
- Sedlmayr KGaA
- STOSE&Co.KGaA

### Fachliche Aussage
Die KGaA ist eine in der Praxis verbreitete Rechtsform; zahlreiche bekannte börsennotierte Unternehmen sind als KGaA organisiert.

### React-Vorschlag
`ExampleList` - einfache zweispaltig umbrechende Beispiel-Liste (Unternehmensnamen).

---

## Folie 9 - Aktien / Aktiengesellschaft: Organe der Aktiengesellschaft

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 115-131): Hauptversammlung (7 Aufgaben), Aufsichtsrat (überwachendes Organ; mind. 3, höchstens 21 Mitglieder, abhängig von der Höhe des Grundkapitals), Vorstand (laufende Geschäftsführung; mind. 2 bei Grundkapital > EUR 3 Mio.).

### Fehlende visuelle Inhalte
Reine Textfolie, gegliedert nach den drei Organen (fette schwarze Zwischenüberschriften: Hauptversammlung, Aufsichtsrat, Vorstand) unter blauer Abschnittsüberschrift "Organe der Aktiengesellschaft". Titelzeile "Aktien" / "Aktiengesellschaft". Keine Grafik.

### Inhaltliche Rekonstruktion
Hauptversammlung:
- Entscheidung über die Verwendung des Bilanzgewinns
- Bestellung des Abschlussprüfers
- Abstimmung bei Satzungsänderungen
- Kapitalerhöhungen und Kapitalherabsetzungen
- Auflösung der Gesellschaft
- Bestellung des Aufsichtsrates
- Entlastung von Vorstand und Aufsichtsrat

Aufsichtsrat:
- Überwachendes Organ
- Mindestens 3, höchstens 21 Mitglieder, abhängig von der Höhe des Grundkapitals

Vorstand:
- Verantwortlich für die laufende Geschäftsführung
- Mindestens 2 bei Grundkapital > EUR 3 Mio.

### Fachliche Aussage
Die drei AG-Organe haben klar abgegrenzte Aufgaben: Die Hauptversammlung entscheidet über Grundsatzfragen, der Aufsichtsrat überwacht, der Vorstand führt die laufenden Geschäfte.

### React-Vorschlag
`ContentSection` mit drei thematischen Unterabschnitten (eine Bullet-Liste je Organ).

---

## Folie 10 - Aktien / Aktiengesellschaft: Organe der Aktiengesellschaft (Organigramm)

### In der MD vorhanden
Die MD enthält nur zerbrochene Diagrammtexte (MD-Zeilen 134-144): "Arbeitnehmer", "wählt (ab 500 Beschäftigte)", "Aktionäre Aufsichtsrat", "wählt und entlastet", "bestellt, kontrolliert und entlastet", "Hauptversammlung Vorstand", "entlastet".

### In der MD problematisch/fehlend
Das komplette Organigramm (Kästen + Pfeile + Pfeilbeschriftungen) ist in der MD zu losen Wortgruppen zerfallen; die Beziehungen sind ohne das Original nicht rekonstruierbar.

### Fehlende visuelle Inhalte
Beziehungsdiagramm/Organigramm mit fünf beschrifteten Kästen und verbindenden grauen Pfeilen (visuell bestätigt). Kastenfarben: "Arbeitnehmer" und "Aktionäre" grün; "Aufsichtsrat", "Vorstand" und "Hauptversammlung" blau. Anordnung: oben mittig "Arbeitnehmer"; links Mitte "Aktionäre"; rechts Mitte "Aufsichtsrat"; unten links/mittig "Hauptversammlung"; unten rechts "Vorstand". Pfeile mit Beschriftungen:
- Arbeitnehmer -> Aufsichtsrat (nach unten/rechts): "wählt (ab 500 Beschäftigte)"
- Aktionäre -> Hauptversammlung (nach unten, ohne Beschriftung)
- Hauptversammlung -> Aufsichtsrat (nach oben/rechts): "wählt und entlastet"
- Aufsichtsrat -> Vorstand (nach unten): "bestellt, kontrolliert und entlastet"
- Hauptversammlung -> Vorstand (nach rechts): "entlastet"

### Visuelle Rekonstruktion
```
                 [Arbeitnehmer] (grün)
                        | wählt (ab 500 Beschäftigte)
                        v
[Aktionäre](grün)         [Aufsichtsrat] (blau)
     |                       ^   |
     | (ohne Label)          |   | bestellt, kontrolliert
     v          wählt und    |   |   und entlastet
[Hauptversammlung] ---entlastet---+   v
       (blau)   ----- entlastet -----> [Vorstand] (blau)
```

### Inhaltliche Rekonstruktion
Beziehungen zwischen den Organen:
- Arbeitnehmer wählen (ab 500 Beschäftigten) den Aufsichtsrat.
- Aktionäre bilden die Hauptversammlung (Pfeil ohne Beschriftung).
- Die Hauptversammlung wählt und entlastet den Aufsichtsrat.
- Der Aufsichtsrat bestellt, kontrolliert und entlastet den Vorstand.
- Die Hauptversammlung entlastet (auch) den Vorstand.

### Fachliche Aussage
Das Organigramm zeigt das Zusammenspiel der AG-Organe: Arbeitnehmer (ab 500 Beschäftigten) und die von den Aktionären gebildete Hauptversammlung wählen/entlasten den Aufsichtsrat, der wiederum den Vorstand bestellt, kontrolliert und entlastet; die Hauptversammlung entlastet zusätzlich den Vorstand.

### React-Vorschlag
`OrgRelationDiagram` - Box-und-Pfeil-Diagramm (statisches SVG oder CSS-Grid mit beschrifteten Konnektoren), Farbkodierung grün (Arbeitnehmer/Aktionäre) vs. blau (Organe).

---

## Folie 11 - Aktien / Aktiengesellschaft: Europäische Aktiengesellschaft (Societas Europaea / SE)

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 147-164): auch Europa-AG genannt; Rechtsform für AGs in der EU und im Europäischen Wirtschaftsraum; seit 2004 Gründung nach weitgehend einheitlichen Rechtsprinzipien; für Konzerne in mind. zwei EU-Mitgliedsstaaten; zwei Arten (dualistisch: Vorstand + Aufsichtsrat; monistisch: Verwaltungsrat mit Executive/Non-Executive Board Members bzw. externen geschäftsführenden Direktoren); Erleichterung von Sitzverlegungen/Fusionen; keine Behinderung durch unterschiedliches nationales Recht; Mindestkapital EUR 120.000.

### Fehlende visuelle Inhalte
Reine Textfolie, gegliederte Bullet-Liste mit Untereinrückungen unter "Zwei Arten". Blaue Abschnittsüberschrift "Europäische Aktiengesellschaft (Societas Europaea oder SE)". Titelzeile "Aktien" / "Aktiengesellschaft". Keine Grafik.

### Inhaltliche Rekonstruktion
- Auch Europa-AG genannt.
- Rechtsform für Aktiengesellschaften in der EU und im Europäischen Wirtschaftsraum.
- Seit 2004 ermöglicht die EU die Gründung von Gesellschaften nach weitgehend einheitlichen Rechtsprinzipien.
- Für Konzerne geeignet, die in mindestens zwei EU-Mitgliedsstaaten vertreten sind.
- Zwei Arten:
  - Dualistisches System aus Vorstand und Aufsichtsrat.
  - Monistisches System aus einem Verwaltungsrat, der Executive Board Member zur Führung der Geschäfte bestimmt (dann müssen Non-Executive Board Member die Mehrheit haben) oder externe geschäftsführende Direktoren bestimmt.
- Erleichterung von Sitzverlegungen und Fusionen in der EU.
- Keine Behinderung durch unterschiedliches nationales Recht.
- Mindestkapital: EUR 120.000.

### Fachliche Aussage
Die SE ist eine EU-weit weitgehend einheitliche AG-Rechtsform, die grenzüberschreitende Konzerne erleichtert und in einem dualistischen oder monistischen Leitungssystem geführt werden kann; Mindestkapital EUR 120.000.

### React-Vorschlag
`ContentSection` - Bullet-Liste; "Zwei Arten" als Unterliste mit dualistisch/monistisch.

---

## Folie 12 - Aktien (Definition Anteilsrecht)

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 167-180): Definition (Anteilsrecht an Aktiengesellschaften -> Aktionär wird Teilhaber an einem beschränkt haftenden Unternehmen); Ziel des Aktionärs (Partizipation am Unternehmenserfolg, an der Wertentwicklung, an Kapitalaufstockungen und am Liquidationserlös); Ziel des Emittenten (Unternehmensfinanzierung mit unbegrenzter Laufzeit); hohe Fungibilität im Vergleich zu anderen EK-Finanzierungsformen; bei Investment in nicht-börsennotierte Unternehmen spricht man von "Private Equity"; Unterscheidung in Nennbetrags- vs. Stückaktien, Inhaber- vs. Namensaktien, Stamm- vs. Vorzugsaktien.

### In der MD problematisch/fehlend
Das eingebettete Foto (historische Aktienurkunde) fehlt vollständig in der MD.

### Fehlende visuelle Inhalte
Rechts unten ein Foto einer historischen Aktienurkunde (vergilbtes Wertpapier). Lesbarer Text auf der Urkunde: "ADAM OPEL AG" sowie "AKTIE" und ein Reichsmark-Betrag (historische Aktie der Adam Opel AG, auf Reichsmark lautend). Dient als illustratives Beispiel für eine verbriefte Aktie. Titelzeile nur "Aktien"; blaue Abschnittsüberschrift "Definition: Anteilsrecht an Aktiengesellschaften".

### Visuelle Rekonstruktion
```
[Textspalte links]            [Foto rechts unten:
                               historische Aktienurkunde
                               "ADAM OPEL AG" / "AKTIE" / Reichsmark]
```

### Inhaltliche Rekonstruktion
- Definition: Anteilsrecht an Aktiengesellschaften; der Aktionär wird Teilhaber an einem beschränkt haftenden Unternehmen.
- Ziel des Aktionärs: Partizipation am Unternehmenserfolg, an der Wertentwicklung, an Kapitalaufstockungen und am Liquidationserlös.
- Ziel des Emittenten: Unternehmensfinanzierung mit unbegrenzter Laufzeit.
- Hohe Fungibilität im Vergleich zu anderen EK-Finanzierungsformen.
- Bei einem Investment in nicht-börsennotierte Unternehmen spricht man von "Private Equity".
- Unterscheidung: Nennbetragsaktien vs. Stückaktien; Inhaberaktien vs. Namensaktien; Stammaktien vs. Vorzugsaktien.

### Fachliche Aussage
Die Aktie verbrieft ein Anteilsrecht an einer AG; sie dient dem Aktionär zur Partizipation am Unternehmenserfolg und dem Emittenten zur dauerhaften Eigenkapitalfinanzierung und lässt sich nach mehreren Gattungsmerkmalen unterscheiden.

### React-Vorschlag
`ContentWithImage` - Textspalte mit nebenstehendem dekorativem Bild (historische Aktienurkunde) als Illustration; Bild optional/lazy.

---

## Folie 13 - Aktien / Aktiengesellschaft: Stammaktien vs. Vorzugsaktien

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 183-196): Stammaktien (St.) = Aktie mit Stimmrecht, engl. Voting Shares oder Common Shares; Vorzugsaktien (Vz.) = Aktie ohne Stimmrecht, Ausgleich durch Recht auf Vorzugsbehandlung (z.B. höhere Dividende oder bessere Rangstelle bei Unternehmensliquidation), maximal 50% des Grundkapitals, vorrangiger Dividendenbezug grundsätzlich kumulativ (Dividendenausfall ist nachzuzahlen), Sonderstimmrecht nach zwei Jahren Dividendenausfall, notieren meist mit Abschlag zur Stammaktie.

### Fehlende visuelle Inhalte
Reine Textfolie mit zwei blauen Unterüberschriften ("Stammaktien (St.)", "Vorzugsaktien (Vz.)") und jeweils einer Bullet-Liste. Titelzeile "Aktien" / "Aktiengesellschaft". Keine Grafik.

### Inhaltliche Rekonstruktion
Stammaktien (St.):
- Definition: Aktie mit Stimmrecht
- engl. Voting Shares oder Common Shares

Vorzugsaktien (Vz.):
- Definition: Aktie ohne Stimmrecht
- Ausgleich: Recht auf Vorzugsbehandlung, z.B. höhere Dividende oder bessere Rangstelle bei Unternehmensliquidation
- Maximal 50% des Grundkapitals
- Vorrangiger Dividendenbezug ist grundsätzlich kumulativ, d.h. ein Dividendenausfall ist nachzuzahlen
- Sonderstimmrecht für Vorzugsaktionäre nach zwei Jahren Dividendenausfall
- Notieren meist mit Abschlag zur Stammaktie

### Fachliche Aussage
Stammaktien gewähren Stimmrecht; Vorzugsaktien verzichten auf das Stimmrecht und erhalten dafür eine bevorzugte (grds. kumulative) Dividende, sind auf max. 50% des Grundkapitals begrenzt und notieren meist mit Abschlag.

### React-Vorschlag
`ComparisonTwoCol` oder `ContentSection` - zwei Unterabschnitte; optional Gegenüberstellung Stammaktie/Vorzugsaktie als zweispaltige Tabelle.

---

## Folie 14 - Aktien / Aktiengesellschaft: Inhaber-, Namens- und vinkulierte Namensaktien

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 199-219): Inhaberaktien (Rechte/Pflichten eng mit Aktienurkunde verbunden, Übertragung der Urkunde = Übertragung aller Rechte und Pflichten, hohe Fungibilität durch formlose Einigung und Übergabe, Aktionäre dem Unternehmen nicht namentlich bekannt); Namensaktien (Inhaber muss im Aktienregister eingetragen sein, Übermittlung der Angaben durch Banken); Spezialfall Vinkulierte Namensaktien (Übertragung erfordert Zustimmung der Emittentin, weitere Einschränkung der Fungibilität, Beispiel Rüstungs-/Luftfahrtindustrie).

### In der MD problematisch/fehlend
Die MD-Zeilen 211-219 vermischen den Spezialfall-Text mit einem seitlichen Hinweistext-Kasten ("Namens- und vinkulierte Namensaktien bieten einen besonderen Übernahmeschutz. Das 'Heranpirschen' bleibt nicht geheim."), wodurch der Lesefluss zerbricht.

### Fehlende visuelle Inhalte
Rechts ein abgesetzter Hinweis-/Callout-Textblock (kleiner, vom Fließtext getrennt): "Namens- und vinkulierte Namensaktien bieten einen besonderen Übernahmeschutz. Das 'Heranpirschen' bleibt nicht geheim." Sonst reine Textfolie mit drei blauen Unterüberschriften (Inhaberaktien, Namensaktien, Spezialfall Vinkulierte Namensaktien). Titelzeile "Aktien" / "Aktiengesellschaft".

### Inhaltliche Rekonstruktion
Inhaberaktien:
- Rechte und Pflichten des Aktionärs sind eng mit der Aktienurkunde verbunden
- Übertragung der Urkunde bedeutet Übertragung aller Rechte und Pflichten
- Hohe Fungibilität, formlos durch Einigung und Übergabe
- Aktionäre sind dem Unternehmen nicht namentlich bekannt

Namensaktien:
- Inhaber muss im Aktienregister eingetragen sein, um seine Rechte geltend machen zu können
- Übermittlung der erforderlichen Angaben durch Banken

Spezialfall Vinkulierte Namensaktien:
- Übertragung erfordert Zustimmung der Emittentin
- Weitere Einschränkung der Fungibilität
- Rüstungs- und Luftfahrtindustrie (z.B. sind Landerechte mit Sitz in Deutschland verbunden)

Callout: Namens- und vinkulierte Namensaktien bieten einen besonderen Übernahmeschutz. Das "Heranpirschen" bleibt nicht geheim.

### Fachliche Aussage
Inhaberaktien sind anonym und hoch fungibel; Namensaktien erfordern einen Registereintrag; vinkulierte Namensaktien benötigen zusätzlich die Zustimmung der Emittentin und bieten dadurch einen besonderen Übernahmeschutz.

### React-Vorschlag
`ContentSection` mit `.callout`-Hinweisbox für den Übernahmeschutz-Vermerk (gemäß bestehender Merksatz-/Callout-Konvention).

---

## Folie 15 - Aktien / Aktiengesellschaft: Nennwertaktien vs. Stückaktien

### In der MD vorhanden
Die MD enthält den Inhalt vollständig (MD-Zeilen 222-237): Nennwert-/Nennbetragsaktien (Aktie mit festem Nennwert als Anteil am Grundkapital, mind. EUR 1,00 oder ein Vielfaches davon, Gegenbeispiel Schweiz, Verbot der Unterpari-Emission bei Kapitalerhöhungen); Stückaktien (nennwertlose Aktie mit gleichem Anteil am Grundkapital, anteiliger Betrag darf 1 € nicht unterschreiten – sonst nichtig, in Deutschland erst seit 1998 zugelassen, häufig Zusatz "o. N."); Hinweis: ein Unternehmen kann nicht beide Gattungen ausgeben.

### In der MD problematisch/fehlend
Der abgesetzte Hinweiskasten am Folienende ("Ein Unternehmen kann nicht beide Aktiengattungen ausgeben. Entweder Nennwertaktien oder Stückaktien.") erscheint in der MD (Zeilen 236-237) als angehängter Text, ist auf der Folie aber als hervorgehobener Callout-Kasten gestaltet.

### Fehlende visuelle Inhalte
Reine Textfolie mit zwei blauen Unterüberschriften ("Nennwertaktien, Nennbetragsaktien", "Stückaktien") und einem abgesetzten Hinweiskasten (hellblauer Callout) am unteren Folienrand mit dem Text "Ein Unternehmen kann nicht beide Aktiengattungen ausgeben. Entweder Nennwertaktien oder Stückaktien." Titelzeile "Aktien" / "Aktiengesellschaft".

### Inhaltliche Rekonstruktion
Nennwertaktien / Nennbetragsaktien:
- Definition: Aktie, die über einen festen Nennwert einen Anteil am Grundkapital einer Aktiengesellschaft darstellt
- Mindestens EUR 1,00 oder ein Vielfaches davon (Gegenbeispiel: Schweiz)
- Verbot der Unterpari-Emission bei Kapitalerhöhungen

Stückaktien:
- Definition: Nennwertlose Aktie, die am Grundkapital einer Gesellschaft mit dem gleichen Anteil beteiligt ist
- Der auf eine einzelne Aktie anfallende anteilige Betrag des Grundkapitals darf 1 € nicht unterschreiten (sonst ist die Ausgabe nichtig)
- In Deutschland erst seit 1998 zugelassen
- Häufig erkennbar durch den Namenszusatz "o. N." (ohne Nennwert)

Hinweis (Callout): Ein Unternehmen kann nicht beide Aktiengattungen ausgeben. Entweder Nennwertaktien oder Stückaktien.

### Fachliche Aussage
Aktien gibt es als Nennwertaktien (fester Anteilsbetrag am Grundkapital) oder als nennwertlose Stückaktien; beide Gattungen schließen sich für ein Unternehmen gegenseitig aus, und der rechnerische Anteilswert je Aktie darf 1 € nicht unterschreiten.

### React-Vorschlag
`ContentSection` mit zwei Unterabschnitten + `.callout`-Box für den Ausschluss-Hinweis.

---

## Folie 16 - Die wichtigsten Aktienmärkte und Indizes weltweit

### In der MD vorhanden
Die MD enthält nur Titel, Quelle und Schlusssatz (MD-Zeilen 240-244): Titel, "Quelle: https://www.finanzen.net/indizes, abgerufen am 22. März 2026", und "Jeder Index setzt sich aus einem repräsentativ gewählten Korb von Unternehmen aus dem jeweiligen Land zusammen."

### In der MD problematisch/fehlend
Die gesamte Weltkarte mit den Indexständen fehlt in der MD vollständig; keine der Index-Werte wurde extrahiert.

### Fehlende visuelle Inhalte
Eine Weltkarte mit Markern an den jeweiligen Finanzplätzen; an jedem Marker eine Info-Box mit Landesflagge, Land/Stadt, Indexname, aktuellem Indexstand und Tagesveränderung in Prozent (alle abgelesenen Veränderungen sind rote negative Werte). Die Boxen sind über die Karte verteilt (Nord-/Südamerika links, Europa Mitte, Asien/Australien rechts). Alle Werte sind Stände vom 22. März 2026. (Sämtliche Werte unten sind klar lesbar visuell bestätigt.)

### Visuelle Rekonstruktion
```
[Weltkarte mit Markern]
 Kanada ── USA ── Brasilien (linke Seite)
 GB ── Frankreich ── Spanien ── Europa ── Deutschland ── Schweiz (Mitte)
 Russland ── Japan ── China ── HongKong ── Singapur ── Indien ── Australien (rechts)
```

### Inhaltliche Rekonstruktion
(Stände vom 22. März 2026, visuell von der Folie abgelesen)
| Land/Stadt | Index | Stand | Veränderung |
|---|---|---|---|
| Kanada, Toronto | S&P / TSX | 31.854,98 | -1,42% |
| GB, London | FTSE 100 | 9.918,33 | -1,44% |
| Frankreich, Paris | CAC 40 | 7.665,62 | -1,82% |
| USA, New York | S&P 500 | 6.506,48 | -1,51% |
| USA, New York | Dow Jones | 45.577,47 | -0,96% |
| USA, New York | Nasdaq | 21.647,61 | -2,01% |
| Spanien, Madrid | IBEX 35 | 16.714,00 | -1,14% |
| Brasilien, Rio | Bovespa | 186.540,00 | -0,17% |
| Europa | Euro STOXX 50 | 5.501,28 | -2,00% |
| Indien, Bombay | Sensex | 74.207,24 | -3,26% |
| Deutschland, Frankfurt | DAX | 22.380,19 | -2,01% |
| Schweiz, Zürich | SMI | 12.320,99 | -1,11% |
| Russland, Moskau | RTS | 915,60 | -1,85% |
| Japan, Tokio | Nikkei | 53.372,53 | -3,38% |
| China, Shanghai | SCI | 4.006,55 | -1,39% |
| HongKong | Hang Seng | 25.277,32 | -0,88% |
| Singapur | Straits Times | 3.280,87 | -5,87% |
| Australien, Sydney | ASX | 7.243,50 | -0,60% |

Hinweis: Jeder Index setzt sich aus einem repräsentativ gewählten Korb von Unternehmen aus dem jeweiligen Land zusammen.

Quelle: https://www.finanzen.net/indizes, abgerufen am 22. März 2026

### Fachliche Aussage
Weltweit gibt es zahlreiche bedeutende Aktienindizes, die jeweils einen repräsentativen Korb von Unternehmen ihres Landes abbilden; die Folie zeigt deren Stände und Tagesveränderungen am 22. März 2026 (durchgehend negativ am Stichtag).

### React-Vorschlag
`WorldIndexMap` - responsive Tabelle oder Karten-/Marker-Liste der Indizes (Flagge, Indexname, Stand, farbcodierte Veränderung rot/grün). Karte optional; auf Mobile als sortierbare Tabelle.

---

## Folie 17 - Zahl der Aktionäre und Aktienfondsbesitzer in Deutschland von 1997 bis 2025 (in Millionen)

### In der MD vorhanden
Die MD enthält den Titel und die Quelle (MD-Zeilen 247-248, 287): Titel und "Quelle: statista, DAI".

### In der MD problematisch/fehlend
Das gesamte gestapelte Säulendiagramm ist in der MD zu einem unbrauchbaren Wirrwarr aus zerstreuten Zahlen, gespiegeltem Text ("...reztisebsdnoF dnu eränoitkA red lhaZ" = "Zahl der Aktionäre und Fondsbesitzer in Mio.") und fragmentierten Achsenjahren (MD-Zeilen 249-287) zerfallen; die Zuordnung der Werte zu Jahren/Segmenten ist aus der MD nicht möglich.

### Fehlende visuelle Inhalte
Gestapeltes Säulendiagramm. Y-Achse "Zahl der Aktionäre und Fondsbesitzer in Mio." von 0 bis 16 (Schritte von 2). X-Achse: Jahre 1997 bis 2025 (jährliche Säulen, jedes Jahr eine Säule). Drei gestapelte Segmente je Säule mit Legende oben: hellblau = "nur Aktien" (unten), dunkelblau/navy = "Aktien und Aktienfonds" (Mitte), grau = "nur Aktienfonds" (oben). WICHTIG: Datenbeschriftungen sind NICHT an jeder Säule vorhanden – beschriftet sind nur die ungeraden Jahre 1997, 1999, 2001, ... 2025 (jeweils mit allen drei Segmentwerten); die geraden Jahre (1998, 2000, 2002, …) haben Säulen, aber KEINE Zahlenlabels. Tendenz: Gesamtzahl hoch um 2000/2001, sinkt bis ~2009-2011, steigt danach wieder stark bis 2025 an (höchste Gesamtwerte am rechten Rand, ~14 Mio.).

### Visuelle Rekonstruktion
```
Mio ^   nur Aktien (hellblau) | Aktien+Aktienfonds (navy) | nur Aktienfonds (grau)
16 |
14 |                                                              ____ (2025)
12 |          __         __  __ __                __ __ __ __  __  |  |
10 |       __ |  | __ __ |  ||  |  | ...        __ |  |  |  |  |  |  |  |
 8 |    __ |  ||  |...                                            |  |
 6 | __ |  |
 0 +--1997--1998--...------------------------------------2024--2025-->
```

### Inhaltliche Rekonstruktion
NUR die ungeraden Jahre tragen Zahlenlabels (visuell von der Folie abgelesen). Reihenfolge je Säule: "nur Aktien" (unten) / "Aktien und Aktienfonds" (Mitte) / "nur Aktienfonds" (oben). Die geraden Jahre (1998, 2000, …) sind im Diagramm als Säulen vorhanden, aber unbeschriftet – für sie liegen KEINE Zahlen vor (nicht schätzen).

| Jahr | nur Aktien | Aktien u. Aktienfonds | nur Aktienfonds |
|---|---|---|---|
| 1997 | 3,29 | 0,63 | 1,68 |
| 1999 | 3,49 | 1,52 | 3,23 |
| 2001 | 3,09 | 2,61 | 7,16 |
| 2003 | 2,96 | 2,09 | 6,08 |
| 2005 | 2,73 | 2,01 | 6,05 |
| 2007 | 2,37 | 1,68 | 6,27 |
| 2009 | 2,22 | 1,41 | 5,19 |
| 2011 | 2,36 | 1,53 | 4,59 |
| 2013 | 2,81 | 1,75 | 4,36 |
| 2015 | 2,89 | 1,52 | 4,6 |
| 2017 | 2,89 | 2,03 | 5,14 |
| 2019 | 2,55 | 1,61 | 5,49 |
| 2021 | 3,15 | 2,02 | 6,9 |
| 2023 | 2,03 | 2,64 | 7,65 |
| 2025 | 2 | 2,9 | 9,2 |

Hinweis: Gesamtsummen sind auf der Folie nicht ausgewiesen; sie ergäben sich rechnerisch aus den drei Segmenten (z.B. 2025 = 2 + 2,9 + 9,2 = ca. 14,1 Mio.), wurden aber nicht als Label dargestellt.

Quelle: statista, DAI

### Fachliche Aussage
Die Zahl der Aktien- und Aktienfondsbesitzer in Deutschland war um 2000/2001 hoch, sank danach bis um 2009-2011 und stieg seither – getrieben v.a. durch Aktienfondsbesitzer – wieder deutlich an, mit dem höchsten Stand (~14 Mio.) im Jahr 2025.

### React-Vorschlag
`StackedBarChart` - gestapeltes Balkendiagramm (drei Segmente: nur Aktien / Aktien u. Aktienfonds / nur Aktienfonds) über die Jahre 1997-2025, mit Legende und Quellennachweis; auf Mobile horizontal scrollbar. Datenlabels nur für die ungeraden, auf der Folie beschrifteten Jahre setzen.

---

## Folie 18 - Asset Management · Kapitel 2.2 · Anleihen (Kapiteltrenner)

### In der MD vorhanden
Die MD führt diesen Kapiteltrenner unter den Zeilen 290-294: "Asset Management / Kapitel 2.2 / Anleihen / V26-03-22". Der Text ist vollständig erfasst.

### Fehlende visuelle Inhalte
Reine Trenner-/Titelfolie im Layout der Kapiteleinstiege. Oben links steht "Asset Management", oben rechts das HBW-Logo. Darunter ein dünner blau-grauer Trennbalken. In der oberen Bildreihe vier nebeneinander liegende Fotos im Hochschul-Look (visuell abgelesen): ein Smartphone/Tablet mit dem HBW-Logo, eine Person mit Brille, eine Gruppe Studierender im Freien, ein Hochschulgebäude. Darunter mittig der Kapiteltitel ("Kapitel 2.2 / Anleihen"). Rechts unten der Versionsstempel "V26-03-22". Fußzeile links "Asset Management / CS / Folie 35" (interne Foliennummer), rechts "© 2026 – Hochschule der Bayerischen Wirtschaft". Die Fotos sind reine Deko und nicht fachlich.

### Visuelle Rekonstruktion
```
Asset Management                                  [HBW-Logo]
----------------------------------------
[Foto: HBW-Tablet] [Brille] [Studierende] [Gebäude]

   Kapitel 2.2
   Anleihen
                                                  V26-03-22
```

### Inhaltliche Rekonstruktion
Kapitelnummer: 2.2
Kapiteltitel: Anleihen

### Fachliche Aussage
Übergang vom Themenblock Aktien (Kapitel 2.1) zum neuen Unterkapitel 2.2 "Anleihen" als zweite große traditionelle Assetklasse.

### React-Vorschlag
`ChapterDivider` – Komponente für Kapiteltrenner mit großem Kapitellabel ("Kapitel 2.2") und Titel ("Anleihen"); Deko-Fotoreihe nicht nachbauen, stattdessen Akzentfläche in Modulfarbe.

---

## Folie 19 - Anleihen · Definition

### In der MD vorhanden
Vollständig vorhanden (Zeilen 296-308): Definition "Als Wertpapier verbrieftes Forderungsrecht", Synonyme, Emittent unabhängig von der Rechtsform, Gläubiger/Schuldner-Zuordnung, unbedingte Zinszahlungs- und Tilgungspflichten, Verkauf ohne Zustimmung des Gläubigers, umfangreiche Dokumentation sowie die Unterscheidung in börsennotierte Inhaberschuldverschreibungen (Normalfall) und nicht-börsennotierte Namensschuldverschreibungen.

### Fehlende visuelle Inhalte
Reine Aufzählungsfolie, keine Grafiken. Layout: Kopfzeile "Anleihen", farbig hervorgehobene Schlagworte "Definition:", "Synonyme:" und "Unterscheidung" in Modulblau, Aufzählung mit quadratischen Bullets und eingerückten Spiegelstrichen für die zwei Unterpunkte. Keine fehlenden visuellen Inhalte.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Definition: Als Wertpapier verbrieftes Forderungsrecht
- Synonyme: Renten(papiere), Schuldverschreibungen, Obligationen, Bonds
- Emittent unabhängig von der Rechtsform
- Käufer wird zum Gläubiger, Emittent zum Schuldner
- Unbedingte Zinszahlungs- und Tilgungspflichten des Schuldners zu fest definierten Zeitpunkten
- Verkauf der Anleihe ohne Zustimmung des Gläubigers möglich
- Umfangreiche Dokumentation: Anleihebedingungen, evtl. Wertpapierprospekt
- Unterscheidung:
  - Börsennotierte Inhaberschuldverschreibungen (Normalfall)
  - Nicht-börsennotierte Namensschuldverschreibungen (Registered Bond, Namenspfandbriefe, Kommunalobligationen und Landesbodenbriefe)

### Fachliche Aussage
Eine Anleihe verbrieft ein Forderungsrecht: Der Käufer wird Gläubiger, der Emittent Schuldner mit unbedingter Zins- und Tilgungspflicht. Standardfall ist die börsennotierte Inhaberschuldverschreibung.

### React-Vorschlag
`DefinitionList` mit hervorgehobenen Begriffs-Labels (Definition/Synonyme/Unterscheidung) und verschachtelten Listenpunkten.

---

## Folie 20 - Anleihen · Festverzinsliche Anleihen

### In der MD vorhanden
Der Textinhalt ist vollständig vorhanden (Zeilen 311-327): Definition, Synonyme (Straight Bonds, Plain Vanilla Bonds), nachschüssige Zinszahlung, Zinszahlungstermine, Tilgung am Laufzeitende, Laufzeitenspektrum 1-30 Jahre sowie Stufenzinsanleihen mit Step-Up- und Step-Down-Covenant.

### Fehlende visuelle Inhalte
Auf der rechten Folienhälfte sind zwei dekorative Foto-Elemente eingebettet, die die Textextraktion nicht erfasst hat:
1. Oben rechts: Abbildung einer historischen Aktien-/Wertpapierurkunde (visuell abgelesen, Betragsangabe ggf. "10.000"; Detailwerte nicht sicher lesbar).
2. Unten rechts: Abbildung einer FC-St.-Pauli-Anleihe mit dem Totenkopf-Logo des Vereins (Schriftzug "ST. PAULI" und Wertpapier-Coupons sichtbar) – als reales Beispiel einer festverzinslichen (Fan-)Anleihe.
Beide Bilder dienen als Illustration; keine numerischen Pflichtinhalte.

### Visuelle Rekonstruktion
```
[ Text-Bullets links ]              [ Bild: alte Wertpapierurkunde ]

                                    [ Bild: FC St. Pauli Anleihe
                                      mit Totenkopf-Logo + Coupons ]
```

### Inhaltliche Rekonstruktion
- Definition: Schuldverschreibung mit fixem Nominalzins während der gesamten Laufzeit
- Synonyme: Straight Bonds, Plain Vanilla Bonds
- Meist konstante, jährlich nachschüssig zu zahlende Zinsverpflichtungen, in Prozent des Nominalwertes festgelegt
- Zinszahlungstermine: jährlich, halbjährlich oder vierteljährlich
- Tilgung durch Rückzahlung des Anleihebetrags am Ende der Laufzeit
- Laufzeitenspektrum: 1-30 Jahre
- Aber: Veränderung der laufenden Verzinsung möglich (Stufenzinsanleihen):
  - Zins Step-Up-Covenant
  - Zins Step-Down-Covenant

### Fachliche Aussage
Festverzinsliche Anleihen (Straight/Plain Vanilla Bonds) zahlen einen über die Laufzeit fixen Nominalzins und werden endfällig getilgt; Stufenzinsanleihen erlauben eine vertraglich vorab geregelte Zinsanpassung nach oben oder unten.

### React-Vorschlag
`TopicWithAside` – Hauptspalte mit Bullet-Liste, Seitenspalte mit Beispiel-/Bild-Cards (z. B. "Beispiel: FC-St.-Pauli-Anleihe"); reale Urkundenbilder durch beschreibende Caption ersetzen.

---

## Folie 21 - Anleihen · Kurs vs. Verzinsung

### In der MD problematisch/fehlend
Die MD enthält nur Titel und Quelle (Zeilen 330-332): "Anleihen / Kurs vs. Verzinsung / Quelle: comdirect.de, abgerufen am 22.3.2026". Der gesamte Inhalt der Folie ist ein als Bild eingebetteter comdirect-Screenshot und fehlt in der Textextraktion vollständig.

### Fehlende visuelle Inhalte
Die Folie zeigt einen comdirect-Screenshot zu einer konkreten Anleihe. Die Werte sind im hochaufgelösten Rendering klar lesbar (nicht "unscharf"):
- Titel: "BMW Finance N.V. EO-Medium-Term Notes 2023(33)", Untertitel "Euro-Anleihe".
- WKN: A3LPBM; ISIN: XS2698773913.
- Großer Kurswert: 101,861 % (grüner Punkt für positiv markierte Notiz), darunter die Tages-Veränderung in Rot: -0,595 % / -0,61.
- Börse: Tradegate; Stand: 20.03.26 – 20:01:44 Uhr; Rendite p. a.: 3,826 %; Realtime-Hinweis.
- Links ein gelb gefülltes Kurs-Flächendiagramm über etwa ein Jahr: x-Achse mit Monatslabels (visuell abgelesen ca. Apr, Jun, Aug, Okt, Dez, Feb), y-Achse mit den sichtbaren Linien 103, 104, 105, 106. Der Verlauf ist volatil mit Spitzen bis ~106 und fällt am rechten Rand steil Richtung ~103 ab.
- Rechts der Block "Stammdaten": Restlaufzeit 7,5 Jahre; Fälligkeit 04.10.2033; Ausgabedatum 04.10.2023; Nominalzinssatz 4,125 %; Anleihevolumen 500 Mio.; Coupon-Art Fest; Zinszahlung Jährlich; Zinstermin 04.10.; Emittent BMW Finance N.V.; Sitz Emitt. Niederlande; (Gattung) Anleihe; Währung EUR.
- Rechts der Block "Renditekennzahlen": Berechnung 22.03.26 02:00; Rendite p. a. 3,826 %; Stückzinsen 1,955; Duration 6,51; Mod. Duration 6,273; Konvexität 51,141; Zinselastizität 0,240.
- Darunter "News": Kein Eintrag; "Prospekte": Basisinformationsblatt … (Hinweistext angeschnitten).

Quelle: comdirect.de, abgerufen am 22.3.2026

### Visuelle Rekonstruktion
```
BMW Finance N.V. EO-Medium-Term Notes 2023(33)   | Stammdaten              | Renditekennzahlen
Euro-Anleihe   WKN A3LPBM   ISIN XS2698773913     | Restlaufzeit  7,5 Jahre | Berechnung   22.03.26 02:00
                                                  | Fälligkeit    04.10.2033| Rendite p.a. 3,826 %
• 101,861 %   (rot: -0,595 % / -0,61)             | Ausgabedatum  04.10.2023| Stückzinsen  1,955
Börse Tradegate · Stand 20.03.26 · Rendite 3,826% | Nominalzins   4,125 %   | Duration     6,51
                                                  | Anleihevol.   500 Mio.  | Mod.Duration 6,273
[Kurs-Flächenchart ~1 J, y: 103..106 (gelb)]      | Coupon-Art    Fest      | Konvexität   51,141
Spitzen ~106, Endabfall Richtung ~103             | Zinszahlung   Jährlich  | Zinselast.   0,240
                                                  | Emittent BMW Finance N.V|
                                                  | Sitz Emitt.  Niederlande| News: Kein Eintrag
                                                  | Währung      EUR        | Prospekte: …
```

### Inhaltliche Rekonstruktion
Beispielhafter Anleihe-Screenshot (BMW Finance N.V., EO-MTN 2023/2033, ISIN XS2698773913). Kernaussage über die konkreten Zahlen hinaus: Der Kurs einer festverzinslichen Anleihe notiert in Prozent des Nominalwerts (hier über pari, 101,861 %) und schwankt am Sekundärmarkt; die Rendite p. a. (3,826 %) liegt hier unter dem Nominalzins (4,125 %) – konsistent mit dem Pari-Zusammenhang "Kurs > pari → ytm < Nominalzins". Die Werte sind reale Marktdaten zum Stichtag und sollten als Beispiel gekennzeichnet, nicht als Prüfungsformelwerte gelernt werden.

### Fachliche Aussage
Anhand eines realen comdirect-Screenshots wird gezeigt, dass Anleihekurse in Prozent des Nominals notieren und am Markt schwanken; Kurs und Rendite hängen unmittelbar zusammen. Hier notiert die Anleihe über pari (101,861 %), weshalb die Rendite (3,826 %) unter dem Nominalzins (4,125 %) liegt.

### React-Vorschlag
`MarketScreenshotCard` – Card mit Titelzeile (inkl. WKN/ISIN), großem Kurswert + farblicher Tagesveränderung, gefülltem Sparkline-/Area-Chart (Recharts, y 103–106) und zwei Datenblöcken "Stammdaten" / "Renditekennzahlen"; Werte als reales Beispiel zum Stichtag klar kennzeichnen.

---

## Folie 22 - Anleihen · Variabel verzinsliche Anleihen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 335-350): Synonyme (Floater/Floating Rate Notes/FRN), Abhängigkeit von externer Referenzgröße, EURIBOR zzgl. Credit-Spread, Bestimmung des Credit-Spreads, Zinsadjustierung alle 3/6 Monate mit limitiertem Kursrisiko, Laufzeit 5-7 Jahre, Cap Floater sowie die Varianten.

### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafiken; farbig hervorgehoben ist nur das Label "Synonyme:". Es fehlen keine visuellen Inhalte.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Synonyme: Floater oder Floating Rate Notes (FRN)
- Abhängigkeit der Verzinsung von Entwicklung einer externen Referenzgröße
- Verzinsung meist abhängig von EURIBOR zzgl. Kreditrisikoprämie (Credit-Spread)
- Credit-Spread abhängig von Erwartung über Ausfallwahrscheinlichkeit und erwarteter Recovery Rate bei Kreditausfall
- Adjustierung des Zinssatzes in regelmäßigen Abständen von 3/6 Monaten → Limitiertes Kursrisiko des Anlegers
- Laufzeitenspektrum: 5-7 Jahre
- Beschränkung des Zinsänderungsrisikos für Emittenten durch Cap Floater
- Varianten: Floor Floater, Collared Floater (Mini-Max-Floater), Reverse Floater, Indexanleihen (Inflation-Linked-Bonds)

### Fachliche Aussage
Floater (FRN) koppeln ihren Zins an eine Referenzgröße (meist EURIBOR + Credit-Spread) und werden regelmäßig angepasst; dadurch sinkt das Kursrisiko des Anlegers. Es existieren diverse Varianten (Floor/Collared/Reverse Floater, Inflation-Linked-Bonds).

### React-Vorschlag
`BulletList` mit hervorgehobenem Synonyme-Label; optional `TermChips` für die Varianten am Ende.

---

## Folie 23 - Anleihen · Nullkuponanleihen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 353-368): Definition (ohne laufenden Zinskupon), Synonym Zero Bonds, Thesaurierung der Zinsen und Ausschüttung zum Fälligkeitstag, Zinseffekt aus Differenz Ausgabe-/Rückzahlungsbetrag (Disagio / Zuwachsanleihe), Laufzeit 10-30 Jahre sowie Vorteile für Emittenten und Gläubiger und Kurspotenzial bei rückläufigen Zinsen.

### Fehlende visuelle Inhalte
Reine Textfolie; hervorgehoben sind die Labels "Definition:" und "Synonyme:". Keine Grafiken, keine fehlenden visuellen Inhalte.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Definition: Schuldverschreibung ohne laufenden Zinskupon
- Synonyme: Zero Bonds
- Thesaurierung der Zinsen und Ausschüttung zum Fälligkeitstag gemeinsam mit Nominal
- Zinseffekt durch Differenz zwischen Ausgabe- und Rückzahlungsbetrag:
  - Ausgabe mit Disagio zum Nennwert (Normalfall)
  - Emission zu pari und Tilgung über pari (Zuwachsanleihe)
- Laufzeitenspektrum: 10-30 Jahre
- Vorteil für Emittenten: Finanzierte Investitionsprojekte müssen nicht zwingend laufende Cashflows zur Finanzierung der Zinszahlungen erwirtschaften
- Vorteil für Gläubiger: Verlagerung von Zinseinnahmen und Steuern, kein Wiederanlagerisiko
- Hohes Kurspotenzial im Umfeld rückläufiger Zinsen

### Fachliche Aussage
Nullkuponanleihen (Zero Bonds) zahlen keinen laufenden Kupon; der Ertrag entsteht aus der Differenz zwischen (Disagio-)Ausgabe- und Rückzahlungsbetrag. Vorteile: kein laufender Cashflow-Bedarf für Emittenten, kein Wiederanlagerisiko für Gläubiger, hohes Kurspotenzial bei fallenden Zinsen.

### React-Vorschlag
`BulletList` mit zwei hervorgehobenen Labels und verschachtelter Liste für den Zinseffekt.

---

## Folie 24 - Berechnung der Effektivverzinsung · Praktikerformel (Näherungslösung)

### In der MD problematisch/fehlend
Die MD hat den Text grob, aber die beiden Formeln völlig zerbrochen extrahiert (Zeilen 371-411). Die mathematischen Bezeichner sind als Platzhalter-Zeichenketten zerfallen; die Bruchstruktur ist verloren. Auch die orangefarbene Eck-Markierung "Wiederholung I&FRM" wird als zerstreute Buchstaben ausgegeben.

### Fehlende visuelle Inhalte
Oben rechts ein diagonales orangefarbenes Eck-Band mit dem Text "Wiederholung I&FRM" (Hinweis: Wiederholung aus Investment & Financial Risk Management). Zentral fehlen zwei als Bild gesetzte Formeln in Bruchdarstellung. Rechts neben dem zweiten Bullet ein hervorgehobener blauer Merkkasten "Es gilt folgender Zusammenhang:" mit drei Zeilen (visuell verifiziert):
- Kurs = pari ► ytm = Nominalzins
- Kurs < pari ► ytm > Nominalzins
- Kurs > pari ► ytm < Nominalzins

### Visuelle Rekonstruktion
```
[orangefarbenes Eckband: "Wiederholung I&FRM"]

Merkkasten:
  Es gilt folgender Zusammenhang:
  Kurs = pari  ►  ytm = Nominalzins
  Kurs < pari  ►  ytm > Nominalzins
  Kurs > pari  ►  ytm < Nominalzins
```

### Inhaltliche Rekonstruktion
- Nominalverzinsung: Zinszahlung bezogen auf Nominalbetrag
- Effektivverzinsung / yield-to-maturity (ytm): Zins, bei dem der Barwert der Zahlungsströme eines Bonds gleich dem aktuellen Kurs plus Stückzinsen ist
- Wesentliche Einflussfaktoren auf ytm: Laufzeit & ggf. vorzeitige Tilgung; Stückzinsen; Währungsgewinne und -verluste
- Zusammenhang Kurs/ytm: Kurs = pari → ytm = Nominalzins; Kurs < pari → ytm > Nominalzins; Kurs > pari → ytm < Nominalzins

Praktikerformel zur Berechnung der statischen Effektivverzinsung:

`r_eff = ( r_nom + (100 − Kaufkurs) / RLZ ) / Kaufkurs * 100`

Praktikerformel unter Berücksichtigung von Stückzinsen:

`r_eff = ( r_nom + (100 − Kaufkurs) / RLZ ) / (Kaufkurs + Stückzinsen) * 100`

(r_nom = Nominalzins, RLZ = Restlaufzeit, Kaufkurs/Stückzinsen in % des Nominals)

### Fachliche Aussage
Die Effektivverzinsung (ytm) ist der Zins, bei dem der Barwert aller Zahlungsströme dem aktuellen Kurs (plus Stückzinsen) entspricht. Die Praktikerformel liefert eine statische Näherung; der Vergleich Kurs zu pari bestimmt, ob die ytm über oder unter dem Nominalzins liegt.

### React-Vorschlag
`FormulaBlock` (KaTeX/MathJax) für die zwei Praktikerformeln plus `Callout`/`InfoBox` für den Pari-Zusammenhang; ein kleines `Badge` "Wiederholung I&FRM" oben rechts.

---

## Folie 25 - Anleihen · Erwartete vs. versprochene Verzinsung

### In der MD vorhanden
Vollständig vorhanden (Zeilen 414-423): Annahme vertragsgemäßer Rückzahlung bei der ytm-Berechnung, Hinweis, dass die versprochene Rendite wegen Ausfallrisiko nicht gleich der erwarteten Rendite sein muss, und dass das Ausfallrisiko in der YTM-Berechnung zu berücksichtigen ist.

### Fehlende visuelle Inhalte
Reine Textfolie; farblich in Modulblau hervorgehoben sind die Schlüsselbegriffe "versprochene Rendite", "nicht gleich", "erwarteten Rendite" und "Ausfallrisiko". Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Bei der Berechnung der Rendite bis zur Fälligkeit wird davon ausgegangen, dass die Anleihe gemäß den Bedingungen des Anleihevertrags zurückgezahlt wird.
- Da Kredite einem Ausfallrisiko unterliegen, ist die versprochene Rendite bis zur Fälligkeit möglicherweise nicht gleich der erwarteten Rendite bis zur Fälligkeit.
- Dementsprechend muss das Ausfallrisiko in der YTM-Berechnung berücksichtigt werden.

### Fachliche Aussage
Wegen des Ausfallrisikos weicht die versprochene Rendite (ytm bei vertragsgemäßer Zahlung) von der erwarteten Rendite ab; das Ausfallrisiko muss daher in der ytm-Berechnung eingepreist werden.

### React-Vorschlag
`BulletList` mit farblich hervorgehobenen Schlüsselbegriffen (`<strong>`); leitet inhaltlich auf das Rechenbeispiel der Folge-Folie über.

---

## Folie 26 - Anleihen · Erwartete vs. versprochene Verzinsung (Beispiel)

### In der MD problematisch/fehlend
Die MD enthält den Fließtext, aber die drei zentralen Formeln sind zerstört (Zeilen 428-447): Platzhalter-Zeichen und falsch zusammengezogene Zahlen. Die Bruchstruktur und die Indizes (prom/Def/erw) fehlen.

### Fehlende visuelle Inhalte
Drei freigestellte, als Bild gesetzte Formeln (Bruchdarstellung mit Indizes YTM_prom, YTM_Def, YTM_erw). Ergebnisse sind farbig hervorgehoben (visuell verifiziert): 18,9 % (grün), 9,4 % (orange); −28,7 % in Schwarz.

### Visuelle Rekonstruktion
```
YTM_prom = (7 + 100) / 90 − 1 = 18,9 %        [grün]
YTM_Def  = ((7 + 100) · 0,6) / 90 − 1 = −28,7 %
YTM_erw  = (18,9 % · 0,8) + (−28,7 % · 0,2) = 9,4 %   [orange]
```

### Inhaltliche Rekonstruktion
Gegeben: einjährige Anleihe, Kupon 7 %, Handelskurs 90 %, Ausfallwahrscheinlichkeit 20 %, Recovery 60 % des versprochenen Betrags.

Versprochene Verzinsung:
`YTM_prom = (7 + 100) / 90 − 1 = 18,9 %`

YTM im Default:
`YTM_Def = ((7 + 100) · 0,6) / 90 − 1 = −28,7 %`

Erwartete YTM:
`YTM_erw = (18,9 % · 0,8) + (−28,7 % · 0,2) = 9,4 %`

### Fachliche Aussage
Das Rechenbeispiel zeigt: Die versprochene ytm (18,9 %) überzeichnet die tatsächlich zu erwartende Rendite. Mit 20 % Ausfallwahrscheinlichkeit und 60 % Recovery beträgt die erwartete ytm nur 9,4 %.

### React-Vorschlag
`WorkedExample` – nummerierte Rechenschritte mit `FormulaBlock` (KaTeX), farblich hervorgehobenen Ergebniswerten und einer Annahmen-Box (Kupon, Kurs, PD, Recovery).

---

## Folie 27 - Weitere Finanzierungsformen · Schuldschein(darlehen)

### In der MD vorhanden
Vollständig vorhanden (Zeilen 450-468): Definition, Kreditgeber-Kreis, Bank als Arrangeur, Ausreichung nur an bonitätsstarke Unternehmen, Vor-/Nachteile für Unternehmen und Investor.

### Fehlende visuelle Inhalte
Reine Textfolie. Farblich hervorgehoben sind die strukturierenden Labels "Vorteile"/"Nachteil(e)" (Vorteile grün, Nachteil rot) sowie die Begriffe "bonitätsstarke Unternehmen" und "kein Abschreibungsrisiko". Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Verzinsliches Wertpapier, das nicht an der Börse gehandelt wird
- Kapitalgeber v. a. Versicherungsunternehmen, Bundesländer, Kommunen, Träger der Sozialversicherung, Bundesanstalt für Arbeit
- Banken als Arrangeur des Schuldscheins; Investoren bleiben dem Unternehmen ggf. unbekannt
- Ausreichung nur an bonitätsstarke Unternehmen
- Vorteile für Unternehmen: keine Besicherung; keine Dokumentationspflichten (Wertpapierprospekt, IR-Aktivitäten); keine Verpflichtung zu externem Rating (wohl aber bankinternem Rating)
- Nachteil für Unternehmen: ca. 0,5 % höhere Nominalverzinsung im Vergleich zur Anleihe
- Vorteil für Investor: keine tägliche Börsenkursfeststellung → kein Abschreibungsrisiko
- Nachteil für Investor: erschwerte Möglichkeiten des vorzeitigen Verkaufs

### Fachliche Aussage
Das Schuldscheindarlehen ist ein nicht börsengehandeltes, bankarrangiertes Fremdkapitalinstrument für bonitätsstarke Unternehmen: geringer Dokumentationsaufwand und kein externes Rating, dafür leicht höhere Verzinsung und eingeschränkte Handelbarkeit.

### React-Vorschlag
`ProsConsList` – zweispaltige Vor-/Nachteile-Darstellung getrennt nach Unternehmen und Investor.

---

## Folie 28 - Weitere Finanzierungsformen · Sonstige Schuldverschreibungen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 471-480): Tilgungsanleihen, Annuitätenanleihen und Verlosungsanleihen mit jeweiliger Erläuterung.

### Fehlende visuelle Inhalte
Reine Textfolie; hervorgehoben sind die drei Anleihetyp-Labels in Modulblau. Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Tilgungsanleihen: Tilgung nicht in einem Betrag, sondern stetig über die Laufzeit oder über einen vereinbarten Zeitraum
- Annuitätenanleihen: Tilgung der Anleihe über die gesamte Laufzeit, aber mit steigendem Anteil am konstanten Jahresbetrag mit zunehmender Laufzeit
- Verlosungsanleihen: Auslosung von Tranchen zu regelmäßigen Terminen, die dann zurückgezahlt werden

### Fachliche Aussage
Neben der endfälligen Standardanleihe gibt es Tilgungsanleihen (laufende Teiltilgung), Annuitätenanleihen (konstanter Jahresbetrag aus Zins und Tilgung) und Verlosungsanleihen (per Los zurückgezahlte Tranchen).

### React-Vorschlag
`DefinitionList` mit drei hervorgehobenen Begriffs-Labels und Erläuterungstext.

---

## Folie 29 - Anleihen · Risiken von Anleihen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 483-498): acht Risikoarten von Anleihen mit Erläuterung.

### Fehlende visuelle Inhalte
Reine Textfolie; jedes Risiko-Label ist farblich in Modulblau hervorgehoben. Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Bonitäts-/Ausfallrisiken: Kursverluste nach Veränderung des Ratings des Emittenten oder aus Insolvenz
- Zinsänderungsrisiken: Kursverluste nach Veränderungen des allgemeinen Zinsniveaus
- Liquiditätsrisiken: Kursverluste durch Kauf- oder Verkaufsorders
- Sicherungsrisiken: Wertverluste der Sicherheiten
- Wiederanlagerisiken: Risiko, dass vereinnahmte Kupons nur zu niedrigeren Zinsen wiederangelegt werden können
- Währungsrisiken: Risiko einer Euro-Aufwertung bei Fremdwährungsanleihen
- Kündigungsrisiken: Risiko, dass der Emittent sein vereinbartes Kündigungsrecht ausübt
- Auslosungsrisiken: Risiko, dass die Anleihe des Gläubigers ausgelost und früher als gedacht zurückgezahlt wird (führt letztlich zu Wiederanlagerisiken)

### Fachliche Aussage
Anleihen unterliegen acht Risikoarten – von Bonitäts-/Ausfall- über Zinsänderungs-, Liquiditäts-, Sicherungs-, Wiederanlage-, Währungs- bis zu Kündigungs- und Auslosungsrisiken.

### React-Vorschlag
`RiskGrid` – Card-Grid mit je einem hervorgehobenen Risikonamen und Kurzbeschreibung.

---

## Folie 30 - Anleihen · Ratingklassen

### In der MD problematisch/fehlend
Die MD enthält nur Titel und Quelle (Zeilen 501-503): "Anleihen / Ratingklassen / vgl. Bösch S. 191". Die zentrale, als Bild eingebettete Ratingtabelle wurde komplett nicht extrahiert.

### Fehlende visuelle Inhalte
Eine Tabelle in Modulblau (blaue Schrift, blaue Linien) mit drei Inhaltsspalten – "Einschätzung des Ausfallrisikos", "Moody's", "S & P" – plus einer rechten Klammer-Spalte mit der vertikalen Gruppierung "Investment-qualität" (obere vier Datenzeilen) und "Spekulative Anlage" (untere vier Datenzeilen). Eine dicke horizontale Trennlinie verläuft zwischen Baa3/BBB− (Investmentgrade) und Ba1/BB+ (Spekulativ). Acht Datenzeilen (visuell verifiziert).

Quelle: vgl. Bösch S. 191

### Visuelle Rekonstruktion
```
Einschätzung des Ausfallrisikos                 | Moody's      | S&P      |  Klammer
------------------------------------------------+--------------+----------+---------------
Beste Qualität, geringes Ausfallrisiko          | Aaa          | AAA      |
Hohe Qualität, etwas größeres Ausfallrisiko     | Aa1/Aa2/Aa3  | AA+/AA/  | Investment-
  als Spitzenklasse                             |              |  AA−     |  qualität
Gute Qualität, viele gute Investmentattribute…  | A1/A2/A3     | A+/A/A−  |
Mittlere Qualität, aber mangelnder Schutz…      | Baa1/Baa2/   | BBB+/    |
                                                |  Baa3        | BBB/BBB− |
================================================+==============+==========+===============
Spekulative Anlage, nur mäßige Deckung…         | Ba1/Ba2/Ba3  | BB+/BB/  |
                                                |              |  BB−     |
Sehr spekulativ, fehlende Charakteristika…      | B1/B2/B3     | B+/B/B−  | Spekulative
Niedrigste Qualität, Zahlungsverzug/Gefahr      | Caa/Ca/C     | CCC/CC/C |  Anlage
Ausfall (Default)                               | D            | D        |
```

### Inhaltliche Rekonstruktion
| Einschätzung des Ausfallrisikos | Moody's | S & P |
|---|---|---|
| Beste Qualität, geringes Ausfallrisiko | Aaa | AAA |
| Hohe Qualität, etwas größeres Ausfallrisiko als Spitzenklasse | Aa1 / Aa2 / Aa3 | AA+ / AA / AA− |
| Gute Qualität, viele gute Investmentattribute, aber auch Elemente, die sich bei veränderter Wirtschaftsentwicklung negativ auswirken können | A1 / A2 / A3 | A+ / A / A− |
| Mittlere Qualität, aber mangelnder Schutz gegen die Einflüsse sich verändernder Wirtschaftsentwicklung | Baa1 / Baa2 / Baa3 | BBB+ / BBB / BBB− |
| Spekulative Anlage, nur mäßige Deckung für Zins- und Tilgungsleistungen | Ba1 / Ba2 / Ba3 | BB+ / BB / BB− |
| Sehr spekulativ, generell fehlende Charakteristika eines wünschenswerten Investments, langfristige Zinszahlungserwartungen gering | B1 / B2 / B3 | B+ / B / B− |
| Niedrigste Qualität, geringster Anlegerschutz, in Zahlungsverzug oder in direkter Gefahr des Verzugs | Caa / Ca / C | CCC / CC / C |
| Ausfall (Default) | D | D |

Gruppierung: Aaa/AAA bis Baa3/BBB− = Investmentqualität; ab Ba1/BB+ abwärts = Spekulative Anlage.

### Fachliche Aussage
Die Ratingskala von Moody's und S&P bewertet das Ausfallrisiko von Anleihen; oberhalb von Baa3/BBB− liegt Investment Grade, darunter (ab Ba1/BB+) der spekulative Bereich bis zum Default (D).

### React-Vorschlag
`RatingTable` – mehrspaltige Tabelle mit visuell abgesetzter Gruppierung (Investmentgrade vs. spekulativ) durch farbige Zeilenbänder oder eine Trennlinie; rechte Klammer-Spalte als gruppiertes Label.

---

## Folie 31 - Weitere Finanzierungsformen · Wandelanleihen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 506-519): Definition (Umtauschrecht in Aktien, nur börsennotierte AGs), Untergang der Obligation nach Wandlung, Übergang zum Aktionär, hybrides Instrument aus Naked Bond und Call, Synonyme (Convertible Bonds, Convertibles), umfangreiche Dokumentation, Laufzeit 3-7 Jahre.

### Fehlende visuelle Inhalte
Reine Textfolie; hervorgehoben sind das Definition-Label und die Synonyme "Convertible Bonds, Convertibles". Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Definition: Schuldverschreibung mit Sonderrechten (Umtauschrecht der Anleihe in Aktien des Emittenten) → Nur für börsennotierte Aktiengesellschaften
- Nach Wandlung geht Obligation unter, für Emittenten entfällt Pflicht zur Zahlung von Zinsen und zur Tilgung der Anleihe
- Nach Wandlung wird Anleihegläubiger zum Aktionär der Gesellschaft und partizipiert an der Kursentwicklung der Aktien → Hybrides Finanzierungsinstrument aus Naked Bond und Call
- Synonyme: Convertible Bonds, Convertibles
- Umfangreiche Dokumentation
- Laufzeitenspektrum: 3-7 Jahre

### Fachliche Aussage
Eine Wandelanleihe gewährt das Recht, die Anleihe in Aktien des Emittenten umzutauschen; ökonomisch entspricht sie der Kombination aus Naked Bond und Call-Option. Nach Wandlung erlischt die Anleihe und der Gläubiger wird Aktionär.

### React-Vorschlag
`DefinitionCard` mit hervorgehobenem Definition-Label und Synonym-Chips; optional kleine Formel-/Bausteinzeile "Naked Bond + Call".

---

## Folie 32 - Weitere Finanzierungsformen · Optionsanleihen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 522-533): Definition (Anleihe mit Bezugsrecht auf Aktien zusätzlich zur Rückzahlung), Leistungen an den Anleger, Gläubiger wird nach Optionsausübung auch Aktionär, umfangreiche Dokumentation, Voraussetzung HV-Beschluss über bedingte Kapitalerhöhung.

### Fehlende visuelle Inhalte
Reine Textfolie; hervorgehoben ist das Definition-Label. Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Definition: Anleihe mit Zusatzrechten (= Bezugsrecht auf Aktien zusätzlich zum Rückzahlungsanspruch der Anleihe)
- Anleger erhält:
  - Verzinsung
  - Rückzahlung des Nominalbetrags
  - Aktien des Emittenten zu vorab festgelegtem Preis
- Nach Ausübung der Option ist der Gläubiger auch Aktionär
- Umfangreiche Dokumentation
- Voraussetzung: HV-Beschluss über bedingte Kapitalerhöhung

### Fachliche Aussage
Bei der Optionsanleihe bleibt die Anleihe nach Ausübung des Bezugsrechts bestehen; der Anleger erhält zusätzlich Aktien zum festgelegten Preis und wird damit neben dem Gläubiger- auch Aktionär. Sie setzt einen HV-Beschluss über eine bedingte Kapitalerhöhung voraus.

### React-Vorschlag
`DefinitionList` mit hervorgehobenem Definition-Label und verschachtelter Liste der Anlegerleistungen; ggf. Kontrast-Card zur Wandelanleihe.

---

## Folie 33 - Weitere Finanzierungsformen · Hybridanleihen

### In der MD vorhanden
Vollständig vorhanden (Zeilen 536-549): Definition (Mischform EK/FK), Synonyme (Consol/Perpetual Bonds, Perpetuals), bilanzielle/steuerliche Einstufung, Laufzeit > 99 Jahre, unbesichert mit Nachrang/hoher Zinssatz, Kündigungsrechte, Verschiebung/Aussetzung von Zinszahlungen (verpflichtend/optional).

### Fehlende visuelle Inhalte
Reine Textfolie; hervorgehoben ist das Definition-Label. Keine Grafiken.

### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).

### Inhaltliche Rekonstruktion
- Definition: Mischfinanzierungsform zwischen Eigen- und Fremdkapital
- Synonyme: Consol Bonds, Perpetual Bonds, Perpetuals
- Vorteil für Emittenten: handelsbilanzielle Einstufung als Kern- bzw. Eigenkapital ohne gesellschaftsrechtliche Mitspracherechte, steuerrechtlich Einstufung als Fremdkapital
- Laufzeitenspektrum > 99 Jahre
- Grundsätzlich unbesichert mit schuldrechtlichem Nachrang → Hoher Zinssatz
- Kein ordentliches Kündigungsrecht für Gläubiger, wohl aber für Emittenten
- Verschiebung oder Aussetzung von Zinszahlungen möglich:
  - Verpflichtende Zinszahlungsaussetzungen (z. B. bei Rating-Downgrade)
  - Optionale Zinszahlungsaussetzungen (im Ermessen des Managements)

### Fachliche Aussage
Hybridanleihen liegen zwischen Eigen- und Fremdkapital: bilanziell Eigenkapital ohne Mitspracherechte, steuerlich Fremdkapital, sehr lange/ewige Laufzeit, nachrangig und unbesichert (hoher Zins), mit nur emittentenseitigem Kündigungsrecht und möglicher Zinsaussetzung.

### React-Vorschlag
`DefinitionList` mit hervorgehobenem Definition-Label und verschachtelter Liste der Aussetzungstypen; optional `HybridScale`-Mini-Grafik (EK ↔ FK-Skala).

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 3: Risiko-Rendite-Diagramm mit beschrifteten Assetklassen
2. Folie 4: zweispaltige Systematisierungstabelle (traditionell vs. alternativ)
3. Folie 10: Organigramm der AG-Organe mit beschrifteten Pfeilen
4. Folie 16: Index-Übersicht weltweit als Tabelle/Karte (Stände 22.03.2026)
5. Folie 17: gestapeltes Säulendiagramm Aktionäre/Fondsbesitzer 1997-2025
6. Folie 21: comdirect-Anleihescreenshot als Daten-Card (BMW Finance N.V.)
7. Folie 24: zwei Praktikerformeln + Pari-Merkkasten
8. Folie 26: Rechenbeispiel erwartete vs. versprochene Verzinsung (drei Formeln)
9. Folie 30: Ratingtabelle Moody's/S&P mit Investment-/Spekulativ-Gruppierung

## Kann vereinfacht werden

- Kapiteltrenner (Folien 1, 5, 18) als `ChapterDivider` ohne Fotobanner
- Agenda (Folie 2) als `AgendaList` mit aktivem Punkt
- Callout-/Merkkästen (Folien 14, 15) als `.callout`-Boxen
- Dekorative Bild-Illustrationen (Folien 12, 20) als Bild-Cards mit Caption
- Reine Textfolien (6, 7, 9, 11, 13, 19, 22, 23, 25, 27, 28, 29, 31, 32, 33) als strukturierte Bullet-/Definitionslisten

## Nicht fachlich relevant

- HBW-Logo
- graue Kopfzeile und Folien-Footer (z. B. "Asset Management / CS / Folie XX")
- Copyright-Zeile "© 2026 – Hochschule der Bayerischen Wirtschaft"
- exakte Folienpositionierung
- dekorative Foto-Banner der Trennfolien ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
// Folie 16: Aktienindizes weltweit (Stände vom 22. März 2026, finanzen.net)
export const worldIndices = [
  { country: 'Kanada, Toronto', index: 'S&P / TSX', value: '31.854,98', change: -1.42 },
  { country: 'GB, London', index: 'FTSE 100', value: '9.918,33', change: -1.44 },
  { country: 'Frankreich, Paris', index: 'CAC 40', value: '7.665,62', change: -1.82 },
  { country: 'USA, New York', index: 'S&P 500', value: '6.506,48', change: -1.51 },
  { country: 'USA, New York', index: 'Dow Jones', value: '45.577,47', change: -0.96 },
  { country: 'USA, New York', index: 'Nasdaq', value: '21.647,61', change: -2.01 },
  { country: 'Spanien, Madrid', index: 'IBEX 35', value: '16.714,00', change: -1.14 },
  { country: 'Brasilien, Rio', index: 'Bovespa', value: '186.540,00', change: -0.17 },
  { country: 'Europa', index: 'Euro STOXX 50', value: '5.501,28', change: -2.00 },
  { country: 'Indien, Bombay', index: 'Sensex', value: '74.207,24', change: -3.26 },
  { country: 'Deutschland, Frankfurt', index: 'DAX', value: '22.380,19', change: -2.01 },
  { country: 'Schweiz, Zürich', index: 'SMI', value: '12.320,99', change: -1.11 },
  { country: 'Russland, Moskau', index: 'RTS', value: '915,60', change: -1.85 },
  { country: 'Japan, Tokio', index: 'Nikkei', value: '53.372,53', change: -3.38 },
  { country: 'China, Shanghai', index: 'SCI', value: '4.006,55', change: -1.39 },
  { country: 'HongKong', index: 'Hang Seng', value: '25.277,32', change: -0.88 },
  { country: 'Singapur', index: 'Straits Times', value: '3.280,87', change: -5.87 },
  { country: 'Australien, Sydney', index: 'ASX', value: '7.243,50', change: -0.60 },
]
```

```js
// Folie 17: Aktionäre und Aktienfondsbesitzer in Deutschland (in Mio., statista/DAI)
// Nur die auf der Folie beschrifteten (ungeraden) Jahre; gerade Jahre ohne Labels.
export const shareholderStats = [
  { year: 1997, nurAktien: 3.29, aktienUndFonds: 0.63, nurFonds: 1.68 },
  { year: 1999, nurAktien: 3.49, aktienUndFonds: 1.52, nurFonds: 3.23 },
  { year: 2001, nurAktien: 3.09, aktienUndFonds: 2.61, nurFonds: 7.16 },
  { year: 2003, nurAktien: 2.96, aktienUndFonds: 2.09, nurFonds: 6.08 },
  { year: 2005, nurAktien: 2.73, aktienUndFonds: 2.01, nurFonds: 6.05 },
  { year: 2007, nurAktien: 2.37, aktienUndFonds: 1.68, nurFonds: 6.27 },
  { year: 2009, nurAktien: 2.22, aktienUndFonds: 1.41, nurFonds: 5.19 },
  { year: 2011, nurAktien: 2.36, aktienUndFonds: 1.53, nurFonds: 4.59 },
  { year: 2013, nurAktien: 2.81, aktienUndFonds: 1.75, nurFonds: 4.36 },
  { year: 2015, nurAktien: 2.89, aktienUndFonds: 1.52, nurFonds: 4.6 },
  { year: 2017, nurAktien: 2.89, aktienUndFonds: 2.03, nurFonds: 5.14 },
  { year: 2019, nurAktien: 2.55, aktienUndFonds: 1.61, nurFonds: 5.49 },
  { year: 2021, nurAktien: 3.15, aktienUndFonds: 2.02, nurFonds: 6.9 },
  { year: 2023, nurAktien: 2.03, aktienUndFonds: 2.64, nurFonds: 7.65 },
  { year: 2025, nurAktien: 2, aktienUndFonds: 2.9, nurFonds: 9.2 },
]

// Folie 30: Ratingklassen (vgl. Bösch S. 191)
export const ratingClasses = [
  { risk: 'Beste Qualität, geringes Ausfallrisiko', moodys: 'Aaa', sp: 'AAA', grade: 'investment' },
  { risk: 'Hohe Qualität, etwas größeres Ausfallrisiko als Spitzenklasse', moodys: 'Aa1 / Aa2 / Aa3', sp: 'AA+ / AA / AA−', grade: 'investment' },
  { risk: 'Gute Qualität, viele gute Investmentattribute', moodys: 'A1 / A2 / A3', sp: 'A+ / A / A−', grade: 'investment' },
  { risk: 'Mittlere Qualität, aber mangelnder Schutz', moodys: 'Baa1 / Baa2 / Baa3', sp: 'BBB+ / BBB / BBB−', grade: 'investment' },
  { risk: 'Spekulative Anlage, nur mäßige Deckung', moodys: 'Ba1 / Ba2 / Ba3', sp: 'BB+ / BB / BB−', grade: 'speculative' },
  { risk: 'Sehr spekulativ, fehlende Charakteristika', moodys: 'B1 / B2 / B3', sp: 'B+ / B / B−', grade: 'speculative' },
  { risk: 'Niedrigste Qualität, in Zahlungsverzug oder Gefahr', moodys: 'Caa / Ca / C', sp: 'CCC / CC / C', grade: 'speculative' },
  { risk: 'Ausfall (Default)', moodys: 'D', sp: 'D', grade: 'speculative' },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Diagramme möglich bleiben.
