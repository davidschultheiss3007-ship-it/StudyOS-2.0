# HR7_md+PDF - Personalauswahl: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die Markitdown-Datei `skript-07-personalauswahl.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-07-personalauswahl.pdf` verloren gegangen, nur als kaputte Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Flussdiagramme, Farbräder, Skalen, Tabellenlogiken, Schaubilder und Bildaussagen verloren gehen.

**Quelle:** `skript-07-personalauswahl.pdf` mit 21 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, graue Kopfzeile, Folien-Footer und Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons (Flussdiagramm der Auswahlinstrumente, Insights-Farbräder, ProfileXT-Skalen, Säulendiagramme).

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** Mehrere Folien (insb. Folie 10 und Folie 18) sind in der MD als zerbrochene Tabellen extrahiert. Diese Inhalte in React als strukturierte Cards, echte Tabellen, Farbräder oder Bullet-Listen neu aufbauen.
2. **Diagramme und Räder semantisch nachbauen:** Das Personalauswahl-Flussdiagramm (Folie 1), das schrittweise aufgebaute Insights-Rad (Folien 6-9), das vollständige Rad (Folie 9), die Selbst-/Fremdbild-Räder (Folie 10), das Acht-Typen-Rad (Folie 11) und die Säulendiagramme der Stilanalyse (Folie 12) tragen fachliche Bedeutung und dürfen nicht nur als Textabschnitt erscheinen.
3. **Pfeile, Ebenen und Zuordnungen erhalten:** Im Flussdiagramm der Folie 1 unterscheiden durchgezogene und gestrichelte Pfeile sowie das Band "= Assessment Center" (nur unter drei der vier mittleren Boxen) die Auswahllogik. Diese Struktur muss erhalten bleiben.
4. **Skalen mit Anforderungsband nachbauen:** Die ProfileXT-Skalen (Folien 15-17) zeigen je eine 1-10-Leiste mit dunklem Anforderungsband und hervorgehobenem individuellem Ergebnis. Werte sind visuell abgelesen und als `ca.`/`(visuell abgelesen)` zu kennzeichnen.
5. **Farbcodierung über Design-Tokens:** Die Insights-Farben (Rot, Gelb, Grün, Blau) und die DISG-Dimensionen (D rot, I gelb, S grün, G blau) konsistent über Module-Tokens setzen, nicht hart kodieren.
6. **Übungs- und Illustrationsfolien separat markieren:** Gruppenübung (Folie 20) und der humoristische Comic (Folie 19) sind keine reinen Lernstoff-Folien und sollten als eigene Karten/Illustrationsblöcke umgesetzt werden.
7. **Quellen- und Studienhinweise erhalten:** Die Fußnote der Stilanalyse "Basis: deutschsprachige Normierungsstudie 2017 R4" (Folie 12) als `.source-note` beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `PersonalauswahlFlowDiagram` | 1 | Auswahlinstrumente als dreistufiges Flussdiagramm mit durchgezogenen/gestrichelten Pfeilen darstellen |
| `AnforderungsmerkmalCard` | 2-3 | Anforderungsmerkmal mit Definition und Umsetzungskriterien als Karte zeigen |
| `AnalyseTriadeGraphic` | 4 | Kompetenzen / Verhalten / Motive als Drei-Segment-Schaubild |
| `InsightsFarbtypologieTable` | 5 | Vier Farbtypen mit Bild und Eigenschaften tabellarisch |
| `InsightsRadStep` | 6-8 | Schrittweisen Aufbau des Insights-Rads animieren |
| `InsightsRadComplete` | 9, 10 | Vollständiges Vier-Quadranten-Farbrad mit Figuren |
| `InsightsSelbstVsFremdbild` | 10 | Selbst- vs. Fremdwahrnehmung als zwei verbundene Räder |
| `InsightsAchtTypenRad` | 11 | Achtsegmentiges Farbrad mit Typ-Labels und Cartoons |
| `StilanalyseBarChart` | 12 | Adaptierter vs. Basis-Stil als zwei Säulendiagramme |
| `ExternerTestHinweis` | 13 | Hinweis-Karte auf externen DISG-Kurztest |
| `ProfileXTUeberblickTable` | 14 | Fünf ProfileXT-Bausteine mit Leitfragen |
| `ProfileXTSkala` | 15-17 | 1-10-Skala mit Anforderungsband und Ergebniswert |
| `BewerbungsgespraechAblaufList` | 18 | Gesprächsphasen als Timeline/Liste |
| `ComicBeispielFigure` | 19 | Cartoon-Illustration ohne fachliche Daten |
| `UebungAufgabenCard` | 20 | Gruppenübung mit Symbolbild und Aufgabentext |
| `GehaltsverhandlungFehlerList` | 21 | Fünf typische Fehler mit Gegenmaßnahmen |

---

# Folienweise Ergänzungen

## Folie 1 - Personalauswahl / Übersicht

### In der MD vorhanden
Die MD listet alle Kästchen-Beschriftungen als zusammenhanglose Zeilen (Z. 1-11): "Analyse der Bewerbung", "oder Daten", "Fragebogen", "Background-Check", "Vorstellungs-", "gespräch", "Grafologische", "Testverfahren Situative Verfahren", "Gutachten", "= Assessment Center", "Ärztliche Eignungsuntersuchung". Die Box-Struktur, die Pfeilrichtungen und die durchgezogenen vs. gestrichelten Verbindungen gehen vollständig verloren.

### Fehlende visuelle Inhalte
Ein Flussdiagramm/Prozess-Schaubild des Personalauswahl-Ablaufs mit grauen, leicht 3D-schattierten Boxen:
- Obere Ebene, zwei Boxen nebeneinander, durch einen waagerechten Doppelpfeil (links↔rechts) verbunden: links "Analyse der Bewerbung oder Daten", rechts "Fragebogen".
- Von beiden oberen Boxen führt je ein gestrichelter Pfeil schräg nach innen unten auf eine kleinere mittlere Box "Background-Check" (linker Pfeil von "Analyse" nach rechts-unten, rechter Pfeil von "Fragebogen" nach links-unten).
- Aus der linken oberen Box geht zusätzlich ein durchgezogener senkrechter Pfeil nach unten auf eine waagerechte Sammelleiste; aus der rechten oberen Box ebenso ein durchgezogener senkrechter Pfeil nach unten. Die Sammelleiste verteilt sich auf vier nach unten gerichtete Pfeile.
- Die mittlere Ebene besteht aus vier Boxen nebeneinander (von links nach rechts): "Vorstellungsgespräch", "Testverfahren", "Situative Verfahren", "Grafologische Gutachten". Senkrechte durchgezogene Pfeile von oben treffen diese Boxen.
- Unter den ERSTEN DREI Boxen (Vorstellungsgespräch, Testverfahren, Situative Verfahren) liegt eine zusammenfassende Klammer-/Sammelleiste mit der Beschriftung "= Assessment Center". Die Box "Grafologische Gutachten" liegt RECHTS daneben und gehört NICHT zum Assessment-Center-Band.
- Von der untersten Ebene führen vier senkrechte durchgezogene Pfeile nach unten auf die unterste, breite Box "Ärztliche Eignungsuntersuchung" (je ein Pfeil aus dem Assessment-Center-Band-Bereich sowie ein separater Pfeil von "Grafologische Gutachten").

### Visuelle Rekonstruktion
```
[Analyse der Bewerbung oder Daten] <----------> [Fragebogen]
   |       \ (gestrichelt)        (gestrichelt) /      |
   |          \                              /          |
   |           [ Background-Check ]                     |
   v            v              v                        v
[Vorstellungs-][Test-]   [Situative]      [Grafologische]
[gespräch     ][verfahren][Verfahren]     [Gutachten    ]
[======= = Assessment Center =======]
   |          |          |                              |
   v          v          v                              v
[============ Ärztliche Eignungsuntersuchung ============]
```

### Inhaltliche Rekonstruktion
Auswahlinstrumente der Personalauswahl:
- Analyse der Bewerbung / Daten (mit Fragebogen verknüpft)
- Fragebogen
- Background-Check
- Vorstellungsgespräch, Testverfahren, Situative Verfahren = Assessment Center
- Grafologische Gutachten (eigenständig, neben dem Assessment Center)
- Ärztliche Eignungsuntersuchung (abschließend)

### Fachliche Aussage
Die Folie gibt einen Gesamtüberblick über die Instrumente der Personalauswahl und ihre Reihenfolge: von der Bewerbungs-/Datenanalyse und dem Fragebogen über Background-Check und verschiedene Verfahren (von denen Vorstellungsgespräch, Test- und situative Verfahren das Assessment Center bilden, während grafologische Gutachten daneben stehen) bis hin zur abschließenden ärztlichen Eignungsuntersuchung.

### React-Vorschlag
`PersonalauswahlFlowDiagram` - ein dreistufiges Flussdiagramm aus `<div>`-Boxen mit CSS-Grid; durchgezogene und gestrichelte Verbindungslinien per SVG-Overlay; die Klammer "= Assessment Center" als hervorgehobenes Band NUR unter den drei mittleren Boxen (Grafologische Gutachten außerhalb).

## Folie 2 - Anforderungsmerkmale / Umsetzungskriterien

### In der MD vorhanden
Vollständig vorhanden (Z. 14-27): Definition der Kommunikationsfähigkeit und die Liste der Umsetzungskriterien. Keine relevanten Grafiken auf der Folie.

### Fehlende visuelle Inhalte
Keine Diagramme oder Bilder. Reine Text-/Aufzählungsfolie. Fett hervorgehobener Begriff "Kommunikationsfähigkeit:" gefolgt von der Definition, darunter eine Bullet-Liste mit Quadrat-Aufzählungszeichen.

### Inhaltliche Rekonstruktion
**Kommunikationsfähigkeit:** Fähigkeit, durch eigene Aktionen und Reaktionen eine vertrauensvolle Beziehung zum Gesprächspartner oder zur Gruppe aufzubauen und weiterzuentwickeln.

Umsetzungskriterien:
- Dem Gesprächspartner zugewandte Körperhaltung
- Sucht und hält Blickkontakt
- Zeigt seinem Gesprächspartner Wertschätzung
- Achtet die Person des anderen
- Stellt sich auf seine Gesprächspartner ein
- Dokumentiert durch Fragen sein Interesse
- Lässt andere ausreden
- Bezieht passive Gesprächspartner in die Kommunikation ein
- Löst emotionale Spannungen im Gespräch auf

### Fachliche Aussage
Anforderungsmerkmale werden über konkrete, beobachtbare Umsetzungskriterien operationalisiert. Am Beispiel "Kommunikationsfähigkeit" wird gezeigt, wie ein abstraktes Merkmal in beobachtbares Verhalten übersetzt wird (Grundlage für die Bewertung im Assessment Center).

### React-Vorschlag
`AnforderungsmerkmalCard` - Karte mit fettem Merkmal-Titel, kursiver Definition und einer Bullet-Liste der Umsetzungskriterien.

## Folie 3 - Anforderungsmerkmale / Umsetzungskriterien

### In der MD vorhanden
Vollständig vorhanden (Z. 30-39): Definition der Beobachtungsfähigkeit und die Kriterienliste. Keine Grafiken.

### Fehlende visuelle Inhalte
Keine Diagramme oder Bilder. Gleiches Layout wie Folie 2: fett "Beobachtungsfähigkeit:" + Definitionsfrage, darunter Bullet-Liste mit Quadrat-Aufzählungszeichen.

### Inhaltliche Rekonstruktion
**Beobachtungsfähigkeit:** Inwieweit geht der/die Teilnehmer/in auf die Bedürfnisse des Kunden ein?

Umsetzungskriterien:
- Baut positive Atmosphäre auf
- Hört aktiv zu
- Hält Blickkontakt
- Achtet die Person des anderen
- Lässt den Kunden ausreden
- Zeigt seinem Gesprächspartner Wertschätzung

### Fachliche Aussage
Zweites Beispiel für die Operationalisierung eines Anforderungsmerkmals: "Beobachtungsfähigkeit" wird über kundenorientierte, beobachtbare Verhaltensweisen messbar gemacht.

### React-Vorschlag
Wiederverwendung von `AnforderungsmerkmalCard` (siehe Folie 2) mit den Inhalten der Beobachtungsfähigkeit.

## Folie 4 - Personalauswahl / Kommunikations- und Verhaltensanalyse

### In der MD problematisch/fehlend
Die MD enthält nur die drei isolierten Begriffe "Verhalten", "Kompetenzen", "Motive" (Z. 44-46). Das zugrundeliegende Drei-Segment-Schaubild mit den abgebildeten Analyse-Werkzeugen (Diagramme/Räder) fehlt komplett. Hinweis: Diese Folie trägt als einzige die Fußzeile "© 2025" (alle übrigen Folien "© 2026").

### Fehlende visuelle Inhalte
Ein kreisförmiges, in drei Segmente geteiltes graues 3D-Schaubild mit je einer kleinen eingebetteten Grafik und einem Außen-Label:
- Oben links Segment "Kompetenzen": eingebettet ein kleines Dokument/Bericht (gelb-weißes Blatt mit Tabelle/Zeilen und kleinen Balken/Skalen rechts, wie ein Kompetenz-Auswertungsbogen).
- Oben rechts Segment "Verhalten": eingebettet ein kreisförmiges, mehrfarbiges Rad (Insights-Rad) mit blau/rot/grün/gelben Bereichen und feinem Netz-/Speichenraster; am oberen Rand das Wort "OPTIONS" und am unteren Rand eine weitere kleine Beschriftung (sehr klein, (visuell abgelesen)).
- Unten (mittiges Segment) "Motive": eingebettet ein rundes, in farbige Tortenstücke (rot, gelb, grün, violett/lila, blau) geteiltes Rad mit Skalenring außen.

### Visuelle Rekonstruktion
```
        Kompetenzen        Verhalten
        [Doku/Bericht]     [Insights-Farbrad]
                 \           /
                  \  Motive /
                  [Tortenrad]
```

### Inhaltliche Rekonstruktion
Drei Analysedimensionen der Kommunikations- und Verhaltensanalyse:
- Kompetenzen (Bericht/Skalen)
- Verhalten (Insights-Farbrad)
- Motive (farbiges Tortenrad)

### Fachliche Aussage
Eine ganzheitliche Personalauswahl betrachtet drei Ebenen: Kompetenzen, Verhalten und Motive. Verschiedene diagnostische Instrumente liefern Daten zu jeder dieser drei Dimensionen.

### React-Vorschlag
`AnalyseTriadeGraphic` - drei gleichgroße Segmente (CSS conic-gradient oder drei abgerundete Panels) mit jeweils Icon-Platzhalter und Label (Kompetenzen / Verhalten / Motive).

## Folie 5 - Insights-MDI® / Farbtypologien

### In der MD vorhanden
Die Begriffspaare sind vorhanden (Z. 51-62): ROT, GELB, GRÜN, BLAU mit ihren Eigenschaften. Die Foto-Symbole und die Farbzuordnung fehlen.

### Fehlende visuelle Inhalte
Vier Zeilen, je mit einem quadratischen Foto links, dann der Farbname (in der jeweiligen Farbe gesetzt, fett), dann die Eigenschaften (in der jeweiligen Farbe, fett, zweizeilig):
- Foto rotes Feuer/Flammen → "ROT" (rot) → "bestimmt, risikofreudig / zielorientiert, positiv"
- Foto gelbe Blüte (Chrysantheme) → "GELB" (orange/gelb) → "fröhlich, aufmunternd / schwungvoll, lebhaft"
- Foto grünes Blatt → "GRÜN" (grün) → "besänftigend, gelassen / mitfühlend, zurückhaltend"
- Foto blaue Wasseroberfläche mit Tropfen-Ringen → "BLAU" (blau) → "taktvoll, scharfsinnig / anspruchsvoll"

### Inhaltliche Rekonstruktion
| Farbe | Foto | Eigenschaften |
|---|---|---|
| ROT | Feuer | bestimmt, risikofreudig, zielorientiert, positiv |
| GELB | gelbe Blüte | fröhlich, aufmunternd, schwungvoll, lebhaft |
| GRÜN | grünes Blatt | besänftigend, gelassen, mitfühlend, zurückhaltend |
| BLAU | Wasser | taktvoll, scharfsinnig, anspruchsvoll |

### Fachliche Aussage
Das Insights-MDI®-Modell ordnet vier Grund-Persönlichkeitstypen je einer Farbe (Rot, Gelb, Grün, Blau) mit charakteristischen Eigenschaften zu. Die Naturfotos veranschaulichen die emotionale Anmutung jeder Farbe.

### React-Vorschlag
`InsightsFarbtypologieTable` - vier Zeilen mit farbcodiertem Badge/Bildplatzhalter, farbigem Farbnamen und Eigenschaftsliste; Farben über Design-Tokens.

## Folie 6 - Insights-MDI® / Farbtypologien

### In der MD vorhanden
Die Begriffe sind vorhanden (Z. 67-72): fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert. Die rote Viertelkreis-Grafik und die Comic-Figur fehlen.

### Fehlende visuelle Inhalte
Aufbau des Insights-Rads, Schritt 1 (nur das rote Segment):
- Ein rotes Tortensegment/Viertelkreis (Position rechts der Folienmitte) mit weißer Schrift.
- Im roten Segment die Eigenschaften: fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert.
- Rechts daneben eine Comic-Figur: selbstbewusster Mann im blau-grauen Anzug mit roter Krawatte, der ein kleines Gerät/Smartphone in der Hand hält (verkörpert den roten Typ).

### Inhaltliche Rekonstruktion
Roter Typ (Eigenschaften): fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert.

### Fachliche Aussage
Beginn des schrittweisen Aufbaus der Insights-Farbtypologie. Der rote ("dominante") Typ wird mit seinen Kerneigenschaften eingeführt und durch eine charakterisierende Comic-Figur veranschaulicht.

### React-Vorschlag
`InsightsRadStep` (Variante "rot") - animierbares Viertelkreis-Segment (SVG/conic-gradient) mit Eigenschaftsliste und Figuren-Illustration; geeignet für eine Step-by-Step-Aufbau-Animation über die Folien 6-9.

## Folie 7 - Insights-MDI® / Farbtypologien

### In der MD vorhanden
Begriffe vorhanden (Z. 77-88): rote Eigenschaften plus neu die gelben (umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend). Die Halbkreis-Grafik und die Figuren fehlen.

### Fehlende visuelle Inhalte
Aufbau Schritt 2 (rotes + gelbes Segment übereinander, ergibt die rechte Hälfte des Rads):
- Oberes Segment rot mit weißer Schrift: fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert; rechts daneben der Mann im Anzug (roter Typ).
- Unteres Segment gelb mit schwarzer Schrift: umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend; rechts daneben eine fröhlich gestikulierende Comic-Frau im gelben Kostüm (gelber Typ).

### Visuelle Rekonstruktion
```
[ROT  : fordernd ... sachorientiert]   (Mann)
[GELB : umgänglich ... überzeugend]    (Frau)
```

### Inhaltliche Rekonstruktion
- Roter Typ: fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert
- Gelber Typ: umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend

### Fachliche Aussage
Zweiter Aufbauschritt: Neben dem roten wird der gelbe ("inspirierende/initiative") Typ ergänzt; gemeinsam bilden sie die rechte Hälfte des Insights-Rads.

### React-Vorschlag
`InsightsRadStep` (Variante "rot+gelb") - zwei Segmente des Rads mit zugehörigen Figuren; Teil der Step-Animation.

## Folie 8 - Insights-MDI® / Farbtypologien

### In der MD vorhanden
Begriffe vorhanden (Z. 93-104): rot, gelb und neu die grünen Eigenschaften (vertrauenvoll, ermutigend, mitfühlend, geduldig, freundlich, entspannt). Die Grafik und die Figuren fehlen.

### Fehlende visuelle Inhalte
Aufbau Schritt 3 (rot + gelb + grün, drei Segmente):
- Oben rechts rotes Segment (weiße Schrift): fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert; rechts der Mann im Anzug.
- Unten rechts gelbes Segment (schwarze Schrift): umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend; rechts die gelbe Frau.
- Links grünes Segment (schwarze Schrift, rechtsbündig): vertrauenvoll, ermutigend, mitfühlend, geduldig, freundlich, entspannt; links daneben eine ruhige Comic-Frau im grünen Kostüm (grüner Typ).

### Inhaltliche Rekonstruktion
- Roter Typ: fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert
- Gelber Typ: umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend
- Grüner Typ: vertrauenvoll, ermutigend, mitfühlend, geduldig, freundlich, entspannt

### Fachliche Aussage
Dritter Aufbauschritt: Der grüne ("stetige/unterstützende") Typ kommt hinzu. Das Rad ist nun zu drei Vierteln aufgebaut.

### React-Vorschlag
`InsightsRadStep` (Variante "rot+gelb+grün") - drei Segmente mit Figuren; Teil der Step-Animation.

## Folie 9 - Insights-MDI® / Farbtypologien

### In der MD vorhanden
Alle vier Begriffsgruppen vorhanden (Z. 109-120), neu die blauen Eigenschaften (vorsichtig, präzise, besonnen, hinterfragend, formal, analytisch). Das vollständige Rad und die vier Figuren fehlen.

### Fehlende visuelle Inhalte
Aufbau Schritt 4 - vollständiges Insights-Rad (Kreis in vier farbige Viertel):
- Oben links blaues Segment (weiße Schrift, rechtsbündig): vorsichtig, präzise, besonnen, hinterfragend, formal, analytisch; links eine seriöse Comic-Figur (Mann mit Brille, hält ein Blatt; blauer Typ).
- Oben rechts rotes Segment: fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert; rechts der rote Mann.
- Unten links grünes Segment: vertrauenvoll, ermutigend, mitfühlend, geduldig, freundlich, entspannt; links die grüne Frau.
- Unten rechts gelbes Segment: umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend; rechts die gelbe Frau.

### Visuelle Rekonstruktion
```
        BLAU | ROT
   vorsichtig | fordernd
      ...     | ...
   ----------+----------
        GRÜN | GELB
 vertrauenvoll| umgänglich
      ...     | ...
```

### Inhaltliche Rekonstruktion
| Farbe (Position) | Eigenschaften |
|---|---|
| BLAU (oben links) | vorsichtig, präzise, besonnen, hinterfragend, formal, analytisch |
| ROT (oben rechts) | fordernd, entschlossen, entschieden, zielgerichtet, willensstark, sachorientiert |
| GRÜN (unten links) | vertrauenvoll, ermutigend, mitfühlend, geduldig, freundlich, entspannt |
| GELB (unten rechts) | umgänglich, enthusiastisch, ausdrucksstark, dynamisch, offen, überzeugend |

### Fachliche Aussage
Das vollständige Insights-Farbrad mit allen vier Typen (Blau = analytisch, Rot = dominant, Grün = stetig, Gelb = initiativ) und ihren jeweiligen Kerneigenschaften.

### React-Vorschlag
`InsightsRadComplete` - vollständiger Vier-Quadranten-Kreis (conic-gradient oder vier SVG-Sektoren) mit Eigenschaftslisten und vier Figuren-Slots an den Außenseiten.

## Folie 10 - Insights-MDI® / Farbtypologien

### In der MD problematisch/fehlend
Die MD versucht, die zwei Tabellen abzubilden (Z. 125-150), bricht sie aber stark zusammen. Die Gegenüberstellung "Wie uns unser Gegenüber sehen könnte" (linkes Rad) vs. "Wie wir uns selbst sehen" (rechtes Rad) und die positiven/negativen Eigenschaftspaare sind nur fragmentiert lesbar. Die Quadranten-Zuordnung der negativen Eigenschaften wurde im Entwurf falsch/unsicher gemischt; sie ist im gerenderten Bild bei starker Vergrößerung eindeutig lesbar (siehe unten).

### Fehlende visuelle Inhalte
Zwei nebeneinander stehende, jeweils vierfarbige Insights-Räder (blau oben links, rot oben rechts, grün unten links, gelb unten rechts), je mit vier kleinen Comic-Figuren außen, verbunden durch einen grauen Doppelpfeil in der Mitte:
- Linkes Rad: Überschrift "Wie uns unser Gegenüber sehen könnte" - enthält die NEGATIVEN Eigenschaften (Fremdwahrnehmung). Farbnamen außen markiert (BLAU oben links, ROT oben rechts, GRÜN unten links, GELB unten rechts).
- Rechtes Rad: Überschrift "Wie wir uns selbst sehen" - enthält die POSITIVEN Eigenschaften (Selbstwahrnehmung).
Die genauen Zellinhalte (visuell abgelesen, je 5 Begriffe pro Quadrant):

### Inhaltliche Rekonstruktion
Linkes Rad - Fremdwahrnehmung (negativ):
| BLAU (oben links) | ROT (oben rechts) |
|---|---|
| steif, misstrauisch, kalt, reserviert, unentschlossen | aggressiv, beherrschend, antreibend, intolerant, anmassend |

| GRÜN (unten links) | GELB (unten rechts) |
|---|---|
| fügsam, indifferent, beleidigt, abhängig, stur | erregt, hektisch, indiskret, extravagant, voreilig |

Rechtes Rad - Selbstwahrnehmung (positiv):
| BLAU (oben links) | ROT (oben rechts) |
|---|---|
| vorsichtig, präzise, besonnen, hinterfragend, formal | fordernd, entschlossen, willensstark, zielgerichtet, sachorientiert |

| GRÜN (unten links) | GELB (unten rechts) |
|---|---|
| vertrauensvoll, ermutigend, mitfühlend, geduldig, entspannt | umgänglich, enthusiastisch, offen, überzeugend, redegewandt |

### Fachliche Aussage
Ein und dieselben Persönlichkeitseigenschaften können positiv (Selbstbild) oder negativ (Fremdbild) wahrgenommen werden. Die Gegenüberstellung sensibilisiert dafür, dass jede Stärke aus Außensicht auch als Schwäche erscheinen kann (z. B. "fordernd/willensstark" → "beherrschend/antreibend").

### React-Vorschlag
`InsightsSelbstVsFremdbild` - zwei nebeneinanderliegende `InsightsRadComplete`-Instanzen (links negativ/Fremdbild, rechts positiv/Selbstbild) mit verbindendem Doppelpfeil; Tooltip pro Quadrant.

## Folie 11 - Insights-MDI® / 8 Haupttypen

### In der MD problematisch/fehlend
Die MD enthält nur die Überschrift "8 Haupttypen" (Z. 153-154). Das zentrale Rad-Schaubild mit den acht Typen und den umgebenden Comic-Szenen fehlt vollständig.

### Fehlende visuelle Inhalte
Ein großes kreisförmiges Insights-Rad (in metallisch-grauem Ring gefasst) mit 8 Segmenten (Farbverlauf blau → violett → rot → orange → gelb → grün rundherum), in jedem Segment eine kleine Comic-Figur. Am Außenrand des Rades stehen die acht Typ-Bezeichnungen entlang des Kreises (im Uhrzeigersinn ab oben): REFORMER (oben), DIREKTOR, MOTIVATOR, INSPIRATOR, BERATER (unten), UNTERSTÜTZER, KOORDINATOR, BEOBACHTER. Die Segmente sind außen mit kleinen Ziffern (1-8) nummeriert.
Um das Rad herum sind mehrere kleine schwarz-weiße Comic-Cartoons mit Sprechblasen verteilt (Büro-/Alltagsszenen), u. a. oben rechts eine Szene mit der Sprechblase "Laß uns aufhören zu schwatzen und endlich anfangen" (Text grob lesbar, (visuell abgelesen)); weitere Cartoons links und unten (Texte in der Rendergröße nicht sicher lesbar).

### Visuelle Rekonstruktion
```
                REFORMER
        BEOBACHTER        DIREKTOR
   KOORDINATOR    (Farbrad   )   MOTIVATOR
        UNTERSTÜTZER      INSPIRATOR
                 BERATER
```

### Fachliche Aussage
Aus den vier Grundfarben werden acht differenzierte Haupttypen abgeleitet (Mischtypen zwischen den Farbquadranten): Reformer, Direktor, Motivator, Inspirator, Berater, Unterstützer, Koordinator, Beobachter. Die Cartoons illustrieren typisches Verhalten in Alltags-/Arbeitssituationen.

### React-Vorschlag
`InsightsAchtTypenRad` - achtsegmentiges Farbrad (SVG) mit Figuren-Slots und randständigen Typ-Labels (Reformer/Direktor/Motivator/Inspirator/Berater/Unterstützer/Koordinator/Beobachter); optional umgebende Cartoon-Karten.

## Folie 12 - Insights-MDI® / Stilanalyse

### In der MD problematisch/fehlend
Die MD enthält nur "Stilanalyse" (Z. 158). Die beiden Säulendiagramme mit den Werten fehlen komplett.

### Fehlende visuelle Inhalte
Zwei nebeneinander stehende Säulendiagramme mit identischer Achse (y-Achse 0-100 in 10er-Schritten, mit einer durchgezogenen waagerechten Markierungslinie bei 50). Auf der x-Achse je vier Kategorien D, I, S, G, jeweils als farbige Säule (D = rot, I = gelb, S = grün, G = blau). Unter den Säulen die Prozentwerte (mit vorangestelltem "%"):
- Linkes Diagramm: Überschrift "Adaptierter - Stil" / Untertitel "Grafik I" - Werte: D 42, I 38, S 58, G 82.
- Rechtes Diagramm: Überschrift "Basis - Stil" / Untertitel "Grafik II" - Werte: D 55, I 42, S 54, G 62.
- Gemeinsame Fußzeile unter beiden Diagrammen: "Basis: deutschsprachige Normierungsstudie 2017 R4".

### Visuelle Rekonstruktion
```
Adaptierter Stil (Grafik I)      Basis Stil (Grafik II)
D  I  S  G                       D  I  S  G
42 38 58 82                      55 42 54 62
(rot gelb grün blau)             (rot gelb grün blau)
--- Linie bei 50 ---             --- Linie bei 50 ---
```

### Inhaltliche Rekonstruktion
| Dimension | Farbe | Adaptierter Stil (Grafik I) | Basis-Stil (Grafik II) |
|---|---|---|---|
| D | rot | 42 | 55 |
| I | gelb | 38 | 42 |
| S | grün | 58 | 54 |
| G | blau | 82 | 62 |

Quelle: Basis: deutschsprachige Normierungsstudie 2017 R4.

### Fachliche Aussage
Die Insights-Stilanalyse stellt den "adaptierten" (situativ angepassten) und den "Basis"-Stil (Grundprägung) einer Person über die vier Dimensionen D/I/S/G gegenüber, um Unterschiede zwischen gezeigtem und natürlichem Verhalten sichtbar zu machen.

### React-Vorschlag
`StilanalyseBarChart` - zwei nebeneinander gestellte Balkendiagramme (CSS/SVG, vier farbcodierte Balken je Diagramm) mit Wertelabels und 50er-Referenzlinie; Quellen-Footnote als `.source-note`.

## Folie 13 - Insights-MDI® / Kurztest

### In der MD problematisch/fehlend
Die MD enthält nur "Kurztest" (Z. 162). Der abgebildete Screenshot einer Test-Website fehlt vollständig.

### Fehlende visuelle Inhalte
Ein Screenshot einer Website (oben eine dunkle Navigationsleiste mit "test"-Logo links und Reitern/Buttons, darunter eine farbige Social-Media-/Provider-Leiste). Zentrale Überschrift: "DISG-Persönlichkeitstest" mit einem orangefarbenen Badge "100% kostenlos" rechts daneben; eine kleine Quellzeile darunter ("Von … Zuletzt aktualisiert am …, (visuell abgelesen)"). Links ein orangefarbener vertikaler Button "Zum Test". Darunter mehrere Absätze Fließtext, der den kostenlosen DISG-Persönlichkeitstest beschreibt (ermittelt ein persönliches DISG-Profil über die vier DISG-Dimensionen; Verweise/Links im Text sind orange hervorgehoben). Die Fließtexte sind im Render nur grob lesbar, (visuell abgelesen).

### Inhaltliche Rekonstruktion
DISG-Persönlichkeitstest (100% kostenlos) - Online-Kurztest, der das individuelle DISG-Profil über die vier Dimensionen bestimmt; Button "Zum Test".

### Fachliche Aussage
Verweis auf einen frei verfügbaren Online-Kurztest, mit dem das eigene DISG/Insights-Profil ermittelt werden kann (didaktischer Selbstanwendungs-Hinweis).

### React-Vorschlag
`ExternerTestHinweis` - Hinweis-/Callout-Karte mit Screenshot-Platzhalter, Titel "DISG-Persönlichkeitstest", "100% kostenlos"-Badge und Call-to-Action-Button "Zum Test".

## Folie 14 - ProfileXT® / Überblick

### In der MD vorhanden
Vollständig vorhanden (Z. 167-171): die fünf Begriffspaare. Keine Grafiken auf der Folie.

### Fehlende visuelle Inhalte
Keine Diagramme. Zwei-Spalten-Textlayout: links fett gesetzte Begriffe, rechts die zugehörige Leitfrage.

### Inhaltliche Rekonstruktion
| Begriff | Leitfrage |
|---|---|
| Anforderungsprofil | Welche Anforderungen hat die Arbeit? |
| Denkmuster | Kann die Person die Arbeit leisten? |
| Verhaltensmerkmale | Wie wird die Person die Arbeit machen? |
| Berufsinteressen | Will die Person die Arbeit machen? |
| Job-Match | Passen die Person und die Arbeit zusammen? |

### Fachliche Aussage
ProfileXT® analysiert die Eignung über fünf Bausteine: das Anforderungsprofil der Stelle sowie Denkmuster (Können), Verhaltensmerkmale (Wie), Berufsinteressen (Wollen) und das daraus resultierende Job-Match (Passung).

### React-Vorschlag
`ProfileXTUeberblickTable` - zweispaltige Definitionsliste/Tabelle (Begriff fett ↔ Leitfrage).

## Folie 15 - ProfileXT® / Denkmuster

### In der MD problematisch/fehlend
Die MD enthält nur die Überschrift "Denkmuster" (Z. 175). Die abgebildete Profil-Skala mit Bewertungswerten fehlt vollständig.

### Fehlende visuelle Inhalte
Ein Ausschnitt eines ProfileXT®-Auswertungsbogens "Profil des Denkmusters" (blauer Titel). Einleitungstext: "Bei der Betrachtung der Skalen auf dieser und der folgenden Seite zeigen die dunkel markierten Bereiche das Anforderungsprofil für die Position: ZZ_Business Coach. Die jeweils größeren Boxen zeigen die individuellen Ergebnisse für jede Skala an."
Darunter fünf Skalen, jede mit blauem unterstrichenem Titel, Beschreibungssatz und einer waagerechten 1-10-Leiste aus kleinen Kästchen; das Anforderungsband ist dunkelblau gefüllt, das individuelle Ergebnis als größere/gelb hervorgehobene Box markiert (Werte visuell abgelesen):
- Lernindex - "Index für Lernfähigkeit, Denkvermögen und Problemlösungspotenzial." - Anforderungsband 5-8, kein gelb hervorgehobenes Ergebnis (Ergebnis liegt im dunklen Band, ca. 8).
- Verbaler Ausdruck - "Bewertung der Kommunikationsstärke mit Hilfe des verfügbaren Wortschatzes." - Band 5-8 (Ergebnis im Band, ca. 8).
- Verbales Denken - "Anwendung von Wörtern als Grundlage für Überlegungen und Problemlösungen." - Band 5-8; individuelles Ergebnis 9 (gelb hervorgehoben).
- Umgang mit Zahlen - "Maßstab für die Fähigkeit, Berechnungen anzustellen." - Band 5-8 (Ergebnis im Band, ca. 8).
- Numerisches Denken - "Anwendung von Zahlen als Grundlage für Überlegungen und Problemlösungen." - Band 5-8 (Ergebnis im Band, ca. 8).

### Inhaltliche Rekonstruktion
Profil des Denkmusters (Anforderungsprofil Position: ZZ_Business Coach; dunkle Boxen = Anforderungsband, große/gelbe Box = individuelles Ergebnis):
| Skala | Beschreibung | Anforderungsband / Ergebnis (visuell) |
|---|---|---|
| Lernindex | Index für Lernfähigkeit, Denkvermögen und Problemlösungspotenzial | Band 5-8 |
| Verbaler Ausdruck | Kommunikationsstärke über verfügbaren Wortschatz | Band 5-8 |
| Verbales Denken | Wörter als Grundlage für Überlegungen/Problemlösungen | Band 5-8, Ergebnis 9 (gelb) |
| Umgang mit Zahlen | Fähigkeit, Berechnungen anzustellen | Band 5-8 |
| Numerisches Denken | Zahlen als Grundlage für Überlegungen/Problemlösungen | Band 5-8 |

### Fachliche Aussage
Die Denkmuster-Dimension von ProfileXT® misst auf 1-10-Skalen kognitive Fähigkeiten (Lernen, verbale und numerische Fähigkeiten). Das individuelle Ergebnis wird mit dem positionsspezifischen Anforderungsband verglichen.

### React-Vorschlag
`ProfileXTSkala` - wiederverwendbare Komponente pro Skala: Titel, Beschreibung und eine 1-10-Leiste mit dunklem Anforderungsband und hervorgehobenem Ergebniswert. Hier mehrfach für die Denkmuster-Skalen instanziiert.

## Folie 16 - ProfileXT® / Verhaltensmerkmale

### In der MD problematisch/fehlend
Die MD enthält nur die Überschrift "Verhaltensmerkmale" (Z. 179). Die Skalen mit Werten und Beschreibungen fehlen vollständig.

### Fehlende visuelle Inhalte
Ausschnitt "Profil der Verhaltensmerkmale" (blauer Titel). Sechs 1-10-Skalen mit blauem unterstrichenem Titel, Beschreibungssatz, dunkel markiertem Anforderungsband und (bei abweichendem Ergebnis) gelb hervorgehobenem individuellem Ergebniswert (Werte visuell abgelesen):
- Energie-Ebene - "Tendenz zur Ausdauer und Potenzial für Schnelligkeit." - Anforderungsband 2-6, Ergebnis 9 (gelb).
- Durchsetzungsstärke - "Tendenz, Menschen zu führen und Situationen zu kontrollieren." - Band 4-7, Ergebnis 2 (gelb).
- Soziale Ausrichtung - "Kommunikationsorientierung; geht auf Menschen zu, arbeitet gern mit ihnen." - Band 5-8, Ergebnis 1 (gelb).
- Lenkbarkeit - "Tendenz, Vorschriften zu beachten, externe Kontrolle zu akzeptieren und Regeln einzuhalten." - Band 6-9, Ergebnis 3 (gelb).
- Grundeinstellung - "Tendenz zu einer positiven Haltung gegenüber Menschen und erwarteten Ergebnissen." - Band 6-9, kein gelb hervorgehobenes Ergebnis (Ergebnis im Band).
- Entscheidungsstärke - "Nutzt verfügbare Informationen für schnelle Entscheidungen." - Band 3-7, Ergebnis 5 (im Band hervorgehoben).

### Inhaltliche Rekonstruktion
| Verhaltensmerkmal | Beschreibung | Anforderungsband / Ergebnis (visuell) |
|---|---|---|
| Energie-Ebene | Ausdauer und Potenzial für Schnelligkeit | Band 2-6, Ergebnis 9 |
| Durchsetzungsstärke | Menschen führen, Situationen kontrollieren | Band 4-7, Ergebnis 2 |
| Soziale Ausrichtung | Kommunikationsorientierung, auf Menschen zugehen | Band 5-8, Ergebnis 1 |
| Lenkbarkeit | Vorschriften beachten, Kontrolle akzeptieren, Regeln einhalten | Band 6-9, Ergebnis 3 |
| Grundeinstellung | positive Haltung gegenüber Menschen/Ergebnissen | Band 6-9 |
| Entscheidungsstärke | verfügbare Infos für schnelle Entscheidungen nutzen | Band 3-7, Ergebnis 5 |

### Fachliche Aussage
Die Verhaltensmerkmale-Dimension von ProfileXT® beschreibt das typische Arbeitsverhalten anhand von 1-10-Skalen und vergleicht es mit dem Stellen-Anforderungsband.

### React-Vorschlag
Wiederverwendung von `ProfileXTSkala` (siehe Folie 15) für die sechs Verhaltensmerkmal-Skalen.

## Folie 17 - ProfileXT® / Verhaltensmerkmale

### In der MD problematisch/fehlend
Die MD enthält nur erneut die Überschrift "Verhaltensmerkmale" (Z. 183). Die drei weiteren Skalen fehlen vollständig.

### Fehlende visuelle Inhalte
Fortsetzung der Verhaltensmerkmal-Skalen (gleiches Layout: blauer Titel, Beschreibung, 1-10-Leiste mit Anforderungsband und hervorgehobenem Ergebnis; Werte visuell abgelesen):
- Kompromissfähigkeit - "Tendenz zur Freundlichkeit, Kooperation und Einvernehmlichkeit. Ein Team-Player." - Anforderungsband 5-8, Ergebnis 9 (gelb).
- Unabhängigkeit - "Tendenz, autark zu sein, unabhängig zu handeln und selbst Entscheidungen zu treffen." - Band 5-7, Ergebnis 8 (hervorgehoben).
- Objektivität - "Die Fähigkeit, sachlich zu denken und objektiv in den Entscheidungen zu sein." - Band 5-7, Ergebnis 4 (hervorgehoben).

### Inhaltliche Rekonstruktion
| Verhaltensmerkmal | Beschreibung | Anforderungsband / Ergebnis (visuell) |
|---|---|---|
| Kompromissfähigkeit | Freundlichkeit, Kooperation, Einvernehmlichkeit; Team-Player | Band 5-8, Ergebnis 9 |
| Unabhängigkeit | autark sein, unabhängig handeln, selbst entscheiden | Band 5-7, Ergebnis 8 |
| Objektivität | sachlich denken, objektiv entscheiden | Band 5-7, Ergebnis 4 |

### Fachliche Aussage
Abschluss der Verhaltensmerkmale-Auswertung: drei weitere Skalen (Kompromissfähigkeit, Unabhängigkeit, Objektivität) runden das Verhaltensprofil im Abgleich mit dem Anforderungsprofil ab.

### React-Vorschlag
Erneute Verwendung von `ProfileXTSkala` für die drei verbleibenden Verhaltensmerkmal-Skalen.

## Folie 18 - Bewerbungsgespräch / Merkmale

### In der MD vorhanden
Inhalt vorhanden, aber durch Markitdown teilweise als zerbrochene Pseudotabellen dargestellt (Z. 188-199): "Gesprächsbeginn", "Freies Gespräch", "Gesprächsabschluss" erscheinen als Tabellenfragmente. Tatsächlich ist es eine einfache Bullet-Liste mit Quadrat-Aufzählungszeichen.

### Fehlende visuelle Inhalte
Keine echten Grafiken; reine Bullet-Liste mit Quadrat-Aufzählungszeichen. Die in der MD entstandenen Tabellen sind Artefakte und kein Folieninhalt.

### Inhaltliche Rekonstruktion
Bewerbungsgespräch - Merkmale:
- Gesprächsbeginn: kurze informelle Unterhaltung
- Selbstvorstellung des Bewerbers
- Freies Gespräch: Der Bewerber kann offene Fragen stellen
- Berufsinteressen, Berufs-/Organisationswahl warden erfragt
- Biografiebezogene Fragen
- Tätigkeitsinformationen: Informationen über Arbeitsplatz und Unternehmen
- Situative Fragen: "Erzählen Sie mir von einem Ereignis, bei dem Sie mit eine Kunden….."
- Gesprächsabschluss: Fragen des Bewerbers, Zusammenfassung

### Fachliche Aussage
Strukturierter Ablauf eines Bewerbungsgesprächs in typischen Phasen: vom informellen Einstieg über Selbstvorstellung, freies/biografisches/situatives Fragen und Tätigkeitsinformationen bis zum zusammenfassenden Abschluss.

### React-Vorschlag
`BewerbungsgespraechAblaufList` - geordnete Phasenliste (ggf. als nummerierte Timeline) mit fett gesetztem Phasennamen und Erläuterung.

## Folie 19 - Bewerbungsgespräch / Beispiel

### In der MD problematisch/fehlend
Die MD enthält nur die Überschrift "Beispiel" (Z. 203). Der humoristische Comic fehlt vollständig.

### Fehlende visuelle Inhalte
Ein vierteiliger Comic (Strichmännchen-/Cartoon-Stil, farbig dezent):
- Panel 1 (links): Bewerber und Personaler sitzen am Schreibtisch gegenüber; Personaler sagt "Sie sind zu spät".
- Panel 2 (oben rechts): Nahaufnahme des Bewerbers, Sprechblase "ist mir scheissegal".
- Panel 3 (unten rechts): Personaler am Schreibtisch (am Laptop), Sprechblase "Sie sind eingestellt".
- Panel 4 (unten, mittig): Bild eines Gebäude-/Bahnhofseingangs mit großem rotem "DB"-Logo (Deutsche Bahn); durch die offene Tür sieht man dieselbe Gesprächsszene am Schreibtisch. Signatur unten rechts "VOLOL.de" (o. ä., (visuell abgelesen)).

### Fachliche Aussage
Humoristisches Beispiel (Satire): Spitze auf den Umgang mit Unpünktlichkeit/Personalmangel - trotz unhöflichem Verhalten wird der Bewerber "eingestellt". Dient als auflockernder Diskussionsanstoß zum Thema Bewerbungsgespräch.

### React-Vorschlag
`ComicBeispielFigure` - Bild-/Cartoon-Platzhalter mit Bildunterschrift; reiner Illustrationsblock ohne fachliche Daten.

## Folie 20 - Gruppenarbeit / Übung

### In der MD vorhanden
Vollständig vorhanden (Z. 207-213): die Aufgabenstellung. Das Foto fehlt.

### Fehlende visuelle Inhalte
Links ein Foto: mehrere lächelnde, formell gekleidete Personen (Geschäftsleute), von oben fotografiert, die Köpfe im Kreis zusammengesteckt (Teamwork-Symbolbild). Rechts der Aufgabentext.

### Inhaltliche Rekonstruktion
Vorstellungsgespräch (Übung):
- Jeweils zwei von Euch bereiten sich als Arbeitgeber auf das Gespräch vor.
- Eine/Einer ist der Bewerbungskandidat.

### Fachliche Aussage
Praktische Gruppenübung: Rollenspiel eines Vorstellungsgesprächs zur Anwendung der zuvor behandelten Inhalte (Arbeitgeberseite vs. Bewerber).

### React-Vorschlag
`UebungAufgabenCard` - Aufgaben-Karte mit Symbolbild-Platzhalter links und Aufgabentext rechts (zweispaltiges Layout).

## Folie 21 - Gehaltsverhandlungen / Fehler

### In der MD vorhanden
Vollständig vorhanden (Z. 218-225): die fünf nummerierten Fehler. Keine Grafiken auf der Folie.

### Fehlende visuelle Inhalte
Keine Diagramme oder Bilder. Reine nummerierte Liste (1.-5.).

### Inhaltliche Rekonstruktion
Gehaltsverhandlungen - typische Fehler:
1. Bescheiden sein – viele Führungskräfte kommen nicht von sich aus
2. „Ich bin jetzt schon vier Jahre dabei, habe aber immer noch keine Gehaltserhöhung bekommen!" – Aufzählen, was geleistet wurde und welche Stärken ihr habt
3. Auf fairen Vorschlag warten – selbst recherchieren und Vorstellung nennen
4. „Das bringt unser Gehaltsgefüge durcheinander" – nicht abspeisen lassen, andere Leistungen einbringen: Bonus, Fortbildung, Urlaubstage, etc.
5. Chef weiß nach dem Gespräch noch alle Details – Protokoll verfassen

### Fachliche Aussage
Praxisorientierte Liste der fünf häufigsten Fehler bei Gehaltsverhandlungen, jeweils mit konkreter Gegenstrategie (selbstbewusst auftreten, Leistungen belegen, recherchieren, Alternativen verhandeln, schriftlich festhalten).

### React-Vorschlag
`GehaltsverhandlungFehlerList` - nummerierte Liste, je Punkt der Fehler (ggf. fett/Zitat) und die empfohlene Gegenmaßnahme abgesetzt.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 1: Personalauswahl-Flussdiagramm mit durchgezogenen/gestrichelten Pfeilen und Assessment-Center-Band
2. Folie 4: Drei-Segment-Schaubild Kompetenzen / Verhalten / Motive
3. Folien 6-9: schrittweiser Aufbau des Insights-Farbrads bis zum vollständigen Vier-Quadranten-Rad
4. Folie 10: Selbst- vs. Fremdbild als zwei verbundene Insights-Räder (positiv/negativ)
5. Folie 11: Acht-Typen-Rad mit randständigen Typ-Labels
6. Folie 12: Stilanalyse als zwei Säulendiagramme (adaptierter vs. Basis-Stil) mit 50er-Referenzlinie
7. Folien 15-17: ProfileXT-Skalen mit 1-10-Leiste, Anforderungsband und Ergebniswert
8. Folie 18: Bewerbungsgespräch-Phasen als saubere Liste (kaputte MD-Tabellen verwerfen)

## Kann vereinfacht werden

- Folien 2-3: Anforderungsmerkmale als Cards mit Definition + Bullet-Liste
- Folie 5: Farbtypologie-Tabelle mit Bildplatzhaltern
- Folie 13: externer DISG-Kurztest als Hinweis-Karte (Screenshot nur als Platzhalter)
- Folie 14: ProfileXT-Überblick als zweispaltige Tabelle
- Folie 20: Gruppenübung als `UebungAufgabenCard`
- Folie 21: Gehaltsverhandlungs-Fehler als nummerierte Liste

## Nicht fachlich relevant

- HBW-Logo
- graue Kopf-/Footerleiste
- Copyright-Zeile (inkl. abweichendes "© 2025" auf Folie 4)
- exakte Folienpositionierung
- Comic auf Folie 19 (reine Illustration), dekorative Fotos auf Folien 5 und 20
- Cartoon-Sprechblasen rund um das Acht-Typen-Rad (Folie 11)

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
export const insightsFarbtypen = [
  {
    farbe: 'ROT',
    quadrant: 'oben rechts',
    eigenschaften: ['fordernd', 'entschlossen', 'entschieden', 'zielgerichtet', 'willensstark', 'sachorientiert'],
  },
  {
    farbe: 'GELB',
    quadrant: 'unten rechts',
    eigenschaften: ['umgänglich', 'enthusiastisch', 'ausdrucksstark', 'dynamisch', 'offen', 'überzeugend'],
  },
  {
    farbe: 'GRÜN',
    quadrant: 'unten links',
    eigenschaften: ['vertrauenvoll', 'ermutigend', 'mitfühlend', 'geduldig', 'freundlich', 'entspannt'],
  },
  {
    farbe: 'BLAU',
    quadrant: 'oben links',
    eigenschaften: ['vorsichtig', 'präzise', 'besonnen', 'hinterfragend', 'formal', 'analytisch'],
  },
]

export const stilanalyse = [
  { dimension: 'D', farbe: 'rot', adaptiert: 42, basis: 55 },
  { dimension: 'I', farbe: 'gelb', adaptiert: 38, basis: 42 },
  { dimension: 'S', farbe: 'grün', adaptiert: 58, basis: 54 },
  { dimension: 'G', farbe: 'blau', adaptiert: 82, basis: 62 },
]
// Quelle: deutschsprachige Normierungsstudie 2017 R4; Werte (visuell abgelesen)
```

```js
export const profileXTUeberblick = [
  { begriff: 'Anforderungsprofil', leitfrage: 'Welche Anforderungen hat die Arbeit?' },
  { begriff: 'Denkmuster', leitfrage: 'Kann die Person die Arbeit leisten?' },
  { begriff: 'Verhaltensmerkmale', leitfrage: 'Wie wird die Person die Arbeit machen?' },
  { begriff: 'Berufsinteressen', leitfrage: 'Will die Person die Arbeit machen?' },
  { begriff: 'Job-Match', leitfrage: 'Passen die Person und die Arbeit zusammen?' },
]

export const profileXTVerhaltensmerkmale = [
  { merkmal: 'Energie-Ebene', band: [2, 6], ergebnis: 9 },
  { merkmal: 'Durchsetzungsstärke', band: [4, 7], ergebnis: 2 },
  { merkmal: 'Soziale Ausrichtung', band: [5, 8], ergebnis: 1 },
  { merkmal: 'Lenkbarkeit', band: [6, 9], ergebnis: 3 },
  { merkmal: 'Grundeinstellung', band: [6, 9], ergebnis: null },
  { merkmal: 'Entscheidungsstärke', band: [3, 7], ergebnis: 5 },
  { merkmal: 'Kompromissfähigkeit', band: [5, 8], ergebnis: 9 },
  { merkmal: 'Unabhängigkeit', band: [5, 7], ergebnis: 8 },
  { merkmal: 'Objektivität', band: [5, 7], ergebnis: 4 },
]
// Position: ZZ_Business Coach; Werte (visuell abgelesen) -> als ca. markieren
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
