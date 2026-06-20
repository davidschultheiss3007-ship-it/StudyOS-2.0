# BF6 - Prospect Theory und ihre Konsequenzen: Abbildungs- und Diagramm-Beschreibungen

**Zweck dieser Datei:** Ergänzung zur Markitdown-Extraktion. Die Markitdown-Datei enthält den Großteil des Fließtexts, verliert aber zentrale visuelle Informationen aus der PDF: Fotos, Diagrammlogik, Kurvenverläufe, Pfeile, Flächenmarkierungen, farbliche Bedeutungen, Achsenbeschriftungen, Callouts und teilweise Formeln. Diese Datei beschreibt alle relevanten Abbildungen, Diagramme, Tabellen und visuellen Formeln so, dass das Thema in React/HTML umgesetzt werden kann, ohne fachliche oder didaktische Information zu verlieren.

**Quelle:** Behavioral Finance, Kapitel 6, Folien 191-235.

---

## 1. Vergleich Markitdown-Datei vs. PDF

### Was Markitdown bereits gut erfasst

- Die linearen Folientexte, Überschriften und Stichpunkte sind weitgehend vorhanden.
- Viele einfache Tabellen sind als Markdown-Tabellen erkennbar.
- Quellenzeilen und Foliennummern sind größtenteils vorhanden.

### Was Markitdown nicht oder nur fehlerhaft erfasst

- **Bilder/Fotos:** Deckblatt-Collage, Personenporträts, Econometrica-Artikel-Faksimile, Abschlussfoto mit Hürde.
- **Diagramme:** Wertfunktion, Gewichtungsfunktion, Sunk-Cost-Kurven, Dispositionseffekt, Mental-Accounting-Grafiken.
- **Layoutlogik:** Zwei-Phasen-Pfeil, Transformationsfluss der Editing Phase, Integration-vs.-Segregation-Vergleiche.
- **Farbliche Semantik:** Gewinnbereiche grün/blau, Verlustbereiche orange/rot, Referenzpunkte/Einstandspreise als Ursprung oder Kreis.
- **Pfeile und Vergleichszeichen:** Viele visuelle Relationen wie `+`, `>`, `<`, Pfeile, gestrichelte Hilfslinien und hervorgehobene Flächen gehen verloren.
- **Formeln:** Folie 200 ist in Markitdown beschädigt. Korrekt ist:
  
  ```text
  V = v(x,p;y,q) = v(x) π(p) + v(y) π(q)
  V(x,p) = v(x) · π(p)
  ```

### Konkrete Markitdown-Fehler mit Umsetzungsrelevanz

- **Folie 193:** Der diagonale Hinweistext ist in Markitdown spiegelverkehrt/verdreht. Inhaltlich lautet er: `Erwartungswert A: 2409 > 2400 Erwartungswert B: Entscheidung für A rational`.
- **Folie 194:** Der diagonale Hinweistext ist ebenfalls nicht sauber lesbar. Inhaltlich: `Erwartungswert C: 825 > 816 Erwartungswert D`.
- **Folie 200:** Die Bewertungsfunktion wurde falsch extrahiert. Sie muss wie oben angegeben korrigiert werden.
- **Folie 202:** Die zentrale Aussage entsteht aus der visuellen Durchstreichung eines komplexeren Prospekts und der Vereinfachung zu einem gerundeten Prospekt. Markitdown bildet diese Logik nur fragmentiert ab.
- **Folie 203:** Das Transformationsdiagramm der Editing Phase fehlt als Struktur.
- **Folie 210, 215, 216, 218, 219, 222, 223, 228, 230, 231:** Die entscheidenden fachlichen Inhalte stecken in Kurven, Flächen, Achsen und Pfeilen; Markitdown enthält hier fast nur Begleittext.

---

## 2. Allgemeine Umsetzungshinweise für React/HTML

- Jede Abbildung sollte als eigenständige, semantisch benannte Komponente gedacht werden, nicht als reine Textbox.
- Diagramme sollten bevorzugt als **SVG oder Canvas** rekonstruiert werden, damit Achsen, Kurven, Pfeile und Flächen responsiv bleiben.
- Tabellen sollten nicht nur als Plain-HTML-Tables erscheinen, sondern mit klarer Hervorhebung von Dominanzen, Präferenzen und Entscheidungslogik.
- Für alle rekonstruierten Grafiken sollten `aria-label` oder sichtbare Kurzinterpretationen ergänzt werden.
- Die Foliennummer sollte bei jeder Lernkarte sichtbar bleiben, z. B. `Quelle: BF6, Folie 210`.
- Fotos und urheberrechtlich unklare Originalbilder müssen nicht 1:1 übernommen werden. Für die Lernapp reicht häufig eine abstrakte, nachgebaute Visualisierung.
- Farbsemantik:
  - Gewinne: grün oder blau.
  - Verluste: orange oder rot.
  - Referenzpunkt/Einstandspreis: Kreis am Ursprung oder markierter Punkt.
  - Unsicherheit/Wahrscheinlichkeiten: Achsen, Raster und gestrichelte Linien.

---

# 3. Detaillierte Abbildungsbeschreibungen nach Folie

## Folie 191 - Titelbild / Corporate-Cover

**Art der Abbildung:** Deckblatt mit HDBW-Corporate-Bildstreifen.

**Beschreibung:**

- Oben links steht groß `Behavioral Finance`.
- Oben rechts ist das HDBW-Logo platziert.
- Darunter verläuft ein horizontaler Fotostreifen mit vier Bildmotiven:
  1. HDBW-Schild/Logo auf einer Glas- oder Acrylfläche.
  2. Portrait-/Campus-Situation mit junger Person im Vordergrund, unscharfe Personen im Hintergrund.
  3. Gesprächssituation mit zwei Business-Personen.
  4. Außenansicht eines modernen HDBW-/Campusgebäudes mit Wasserbecken/Brunnen im Vordergrund.
- Unter dem Bildstreifen liegt ein großer hellblauer Titelkasten.
- Im Titelkasten steht links eingerückt:
  - `Kapitel 6`
  - `Die Prospect Theory und ihre Konsequenzen`
- Rechts unten im Titelkasten steht die Versionsangabe `V26-04-23`.

**Didaktische Bedeutung:**

- Reines Cover; fachlich nicht prüfungsrelevant.
- Für eine Lernapp reicht eine neutrale Kapitel-Startkarte mit Titel, Modul und Folienbereich.

**Umsetzungshinweis:**

- Nicht zwingend als Bild übernehmen.
- Besser: Hero-Komponente mit Kapitelnummer, Titel, Quelle und kurzer Inhaltsvorschau.

---

## Folie 193 - Allais-Paradoxon: Entscheidungsproblem I

**Art der Abbildung:** Entscheidungstabelle mit Erwartungswert-Hinweis.

**Tabellenstruktur:**

| Alternative | Zustand 1: 33% | Zustand 2: 66% | Zustand 3: 1% |
|---|---:|---:|---:|
| Alternative A | 2.500 € | 2.400 € | 0 € |
| Alternative B | 2.400 € | 2.400 € | 2.400 € |

**Visuelle Details:**

- Die Tabelle hat eine blaue Kopfzeile mit den drei Zuständen.
- Die Alternativen A und B stehen links in einer graublauen Zeilenbeschriftung.
- Unterhalb/rechts im Folienraum ist ein diagonal gesetzter, sehr heller Hinweistext platziert. Dieser ist in der Markitdown-Datei gespiegelt/verdreht.
- Korrekte Aussage des Hinweistexts:
  - `Erwartungswert A: 2409 > 2400 Erwartungswert B: Entscheidung für A rational`

**Didaktische Bedeutung:**

- Nach Erwartungswertlogik wäre Alternative A rational, weil der Erwartungswert 2.409 € beträgt und damit über dem sicheren Wert von 2.400 € liegt.
- Das Problem dient als Ausgangspunkt für den späteren Widerspruch zwischen tatsächlichen Präferenzen und Erwartungsnutzenlogik.

**Umsetzungshinweis:**

- Tabelle als interaktive Vergleichskarte umsetzen.
- Erwartungswerte automatisch sichtbar berechnen:
  - A: `0,33 · 2500 + 0,66 · 2400 + 0,01 · 0 = 2409`
  - B: `2400`
- Ergebnisbadge: `Rational nach Erwartungswert: A`.

---

## Folie 194 - Allais-Paradoxon: Entscheidungsproblem II

**Art der Abbildung:** Entscheidungstabelle mit Erwartungswert-Hinweis.

**Tabellenstruktur:**

| Alternative | Zustand 1: 33% | Zustand 2: 66% | Zustand 3: 1% |
|---|---:|---:|---:|
| Alternative C | 2.500 € | 0 € | 0 € |
| Alternative D | 2.400 € | 0 € | 2.400 € |

**Visuelle Details:**

- Tabellenlayout entspricht Folie 193.
- Diagonal gesetzter, heller Hinweistext unten rechts ist in der Markitdown-Datei nicht korrekt lesbar.
- Korrekte Aussage:
  - `Erwartungswert C: 825 > 816 Erwartungswert D`

**Didaktische Bedeutung:**

- Nach Erwartungswertlogik wäre C rational, weil `0,33 · 2500 = 825` größer ist als `0,34 · 2400 = 816`.
- In Kombination mit Entscheidungsproblem I zeigt sich später das Allais-Paradoxon.

**Umsetzungshinweis:**

- Als zweiter Zustand derselben Allais-Komponente umsetzen.
- Direkter Vergleich mit Folie 193: Nutzer kann zwischen Problem I und II wechseln.

---

## Folie 195 - Allais-Paradoxon: Erwartungsnutzen-Widerspruch

**Art der Abbildung:** Formel-/Argumentationsfolie mit orangefarbener Anomalie-Markierung.

**Visuelle Details:**

- Links oben steht `Beispiel:` und darunter die Darstellung in Erwartungsnutzen.
- Drei Formelblöcke sind vertikal angeordnet:
  1. Präferenz von B gegenüber A:
     `0,33 × u(2.500) + 0,66 × u(2.400) < u(2.400)`
  2. Präferenz von C gegenüber D:
     `0,33 × u(2.500) > 0,34 × u(2.400)`
  3. Folgerung aus Präferenz 1:
     `0,33 × u(2.500) < 0,34 × u(2.400)`
- Unten rechts befindet sich ein orangefarbener Stern-/Explosions-Callout mit dem Text `Anomalie`.

**Didaktische Bedeutung:**

- Die beiden beobachteten Präferenzen erzeugen einen logischen Widerspruch in der Erwartungsnutzentheorie.
- Der orange Callout markiert genau diesen Bruch als Anomalie.

**Umsetzungshinweis:**

- In React als Schritt-für-Schritt-Beweis darstellen:
  1. Annahme: Präferenz B > A.
  2. Annahme: Präferenz C > D.
  3. Mathematische Folgerung.
  4. Roter/oranger Konfliktbadge: `Widerspruch / Anomalie`.

---

## Folie 196 - Prospect Theory: Personenporträts

**Art der Abbildung:** Zwei Porträtfotos mit Beschriftungen.

**Beschreibung:**

- Links steht eine große farbige Porträtaufnahme, darunter die Beschriftung `Daniel Kahneman (1934)`.
- Rechts steht eine kleinere schwarz-weiße Porträtaufnahme, darunter die Beschriftung `Amos Tversky (1937-1996)`.
- Unten links ist als Bildquelle `Wikipedia Commons` angegeben.

**Didaktische Bedeutung:**

- Visuelle Einführung der beiden zentralen Autoren der Prospect Theory.
- Kein fachliches Diagramm, aber historischer Kontext.

**Umsetzungshinweis:**

- Für eine Lernapp genügt eine Autorenkarte mit Namen, Rolle und Jahresangaben.
- Fotos nur übernehmen, wenn Lizenzlage geklärt ist; alternativ neutrale Avatar-/Initialen-Karten verwenden.

---

## Folie 197 - Prospect Theory: Econometrica-Artikel-Faksimile

**Art der Abbildung:** Artikel-/Paper-Screenshot.

**Beschreibung:**

- Links unten ist ein schräg dargestelltes Faksimile einer Econometrica-Artikelseite.
- Kopfzeile des Faksimiles:
  - `ECONOMETRICA`
  - `Volume 47`
  - `March, 1979`
  - `Number 2`
- Artikeltitel im Faksimile:
  - `Prospect Theory: An Analysis of Decision under Risk`
- Darunter sind Autorennamen und Fließtext erkennbar, aber nicht als Lerninhalt vollständig lesbar gedacht.
- Das Faksimile hat einen Schatten und eine leichte Spiegelung/reflektierende Fläche unterhalb.

**Didaktische Bedeutung:**

- Zeigt den Ursprung der Theorie als wissenschaftlichen Artikel von 1979.
- Unterstützt die Einordnung als Grundlagenpapier der Verhaltensökonomik.

**Umsetzungshinweis:**

- Als kleine `SourceCard` umsetzen: Titel, Jahr, Journal, Autoren.
- Original-Faksimile nicht zwingend übernehmen.

---

## Folie 200 - Phasen der Entscheidungsfindung: Bewertungsformel

**Art der Abbildung:** Formelblock mit farblicher Hervorhebung.

**Korrekte Formel aus der PDF:**

```text
V = v(x,p;y,q) = v(x) π(p) + v(y) π(q)
```

**Weitere Formel:**

```text
V(x,p) = v(x) · π(p)
```

**Visuelle Details:**

- Die zentrale Bewertungsfunktion ist blau hervorgehoben.
- Die Phase `Editierphase` und die Phase `Evaluierungsphase` sind als nummerierte Liste gesetzt.
- Unter der Formel werden die Symbole erklärt:
  - `π` = Wahrscheinlichkeitsgewichtungsfunktion.
  - `p, q` = Wahrscheinlichkeiten, mit denen Alternativen eintreten.
  - `v(x,y)` = subjektiver Wert für das Ergebnis einer Alternative, also Abweichung vom Referenzpunkt.

**Didaktische Bedeutung:**

- Diese Folie ist zentral, weil sie die Kombination aus Wertfunktion und Gewichtungsfunktion formalisiert.
- Die Markitdown-Datei enthält hier eine stark beschädigte Formel. Für die Umsetzung muss die Formel aus der PDF verwendet werden.

**Umsetzungshinweis:**

- Formel als gut lesbarer Math-/Code-Block oder mit KaTeX/MathJax darstellen.
- Didaktisch sinnvoll: Wertfunktion und Gewichtungsfunktion als zwei nebeneinanderliegende Module visualisieren, die in `V` zusammenlaufen.

---

## Folie 202 - Editing Phase: Simplifikation

**Art der Abbildung:** Entscheidungsbaum-Skizze mit Durchstreichung und gerundetem Ersatzprospekt.

**Beschreibung:**

- Links steht eine sichere Auszahlung `50 €`.
- Daneben steht `oder`.
- In der Mitte ist ein grüner zweistufiger Entscheidungsbaum mit zwei Ästen:
  - oberer Ast: `49%` zu `101 €`
  - unterer Ast: `51%` zu `0 €`
- Dieser mittlere Baum ist mit einem großen orangefarbenen X durchgestrichen.
- Rechts ist ein vereinfachter grüner Entscheidungsbaum:
  - oberer Ast: `50%` zu `100 €`
  - unterer Ast: `50%` zu `0 €`

**Didaktische Bedeutung:**

- Die Folie zeigt visuell, wie Menschen komplexe/krumme Prospekte vereinfachen.
- Die Unterschiede `49%` vs. `50%`, `51%` vs. `50%` und `101 €` vs. `100 €` werden mental vernachlässigt.
- Dadurch wird die Entscheidungssituation subjektiv einfacher, aber nicht mehr exakt identisch zur objektiven Ausgangslage.

**Umsetzungshinweis:**

- Als Vorher-Nachher-Karte umsetzen:
  - `Originalprospekt`: 49%/101 € und 51%/0 €.
  - `Editing/Simplifikation`: orangefarbenes Durchstreichen.
  - `Subjektiv vereinfachter Prospekt`: 50%/100 € und 50%/0 €.
- Kurzer Hinweis darunter: `Runden + Vernachlässigung kleiner Unterschiede`.

---

## Folie 203 - Editing Phase: Auswahl von Alternativen durch Operationen

**Art der Abbildung:** Prozess-/Transformationsdiagramm von Alternative X zu Prospect X.

**Beschreibung:**

- Links steht ein Entscheidungsbaum `Alternative X` mit vier Ausgängen:
  - Wahrscheinlichkeit `0,4` führt zu Ergebnis `100`.
  - Wahrscheinlichkeit `0,2` führt ebenfalls zu Ergebnis `100`.
  - Wahrscheinlichkeit `0,3999` führt zu Ergebnis `200,1`.
  - Wahrscheinlichkeit `0,0001` führt zu Ergebnis `50`.
- Die zwei oberen 100er-Ausgänge sind mit einer geschweiften Klammer gruppiert.
- Die Ausgänge `200,1` und `50` sind ebenfalls durch Klammern markiert.
- In der Mitte steht ein vertikaler, hellblauer Bearbeitungsblock mit den Editing-Operationen:
  1. `Editierung`
  2. `Kombination`
  3. `Kodierung von r`
  4. `Vereinfachung`
  5. `Streichung`
  6. `ggf. Segregation`
- Rechts steht der transformierte `Prospect X` mit zwei Ausgängen:
  - Wahrscheinlichkeit `0,6` zu `100-r`
  - Wahrscheinlichkeit `0,4` zu `200-r`
- Unten läuft ein breiter Pfeilbalken von `Alternative X` nach `Prospect X`.
- Quelle: `Daxhammer/Facsar (2017)`.

**Didaktische Bedeutung:**

- Zeigt, dass die Prospect Theory nicht direkt die objektive Alternative bewertet, sondern einen vorher editierten Prospekt.
- Einzelne Operationen verändern die Darstellung:
  - Kombination identischer Ergebnisse: `0,4 + 0,2 = 0,6` für Ergebnis 100.
  - Kodierung relativ zu Referenzpunkt `r`: Ergebnisse werden zu `100-r` und `200-r`.
  - Vereinfachung: `200,1` wird zu `200`.
  - Streichung: sehr kleine Wahrscheinlichkeit `0,0001` mit Ergebnis `50` verschwindet.

**Umsetzungshinweis:**

- Als interaktives Transformationsdiagramm bauen.
- Jeder Schritt sollte anklickbar sein und die Veränderung erklären.
- Besonders wichtig: Wahrscheinlichkeiten und Ergebnisse nicht nur als Text, sondern als sichtbare Baumstruktur zeigen.

---

## Folie 204 - Editing Phase: Kombination

**Art der Abbildung:** Zwei Entscheidungstabellen zur Dominanzverschleierung.

### Entscheidungssituation 1: A oder B

| Kategorie | Weiß | Rot | Grün | Blau | Gelb |
|---|---:|---:|---:|---:|---:|
| Wahrscheinlichkeit | 90% | 6% | 1% | 1% | 2% |
| Auszahlung A | 0 | 45 | 30 | -15 | -15 |
| Auszahlung B | 0 | 45 | 45 | -10 | -15 |

**Interpretation:**

- B dominiert A, weil B bei Grün besser ist (`45 > 30`), bei Blau besser ist (`-10 > -15`) und sonst gleich ist.

### Entscheidungssituation 2: C oder D

| Kategorie | Weiß | Rot | Grün | [zusammengefasst/leer] | Gelb |
|---|---:|---:|---:|---:|---:|
| Wahrscheinlichkeit C | 90% | 6% | 1% |  | 3% |
| Auszahlung C | 0 | 45 | 30 |  | -15 |
| Wahrscheinlichkeit D | 90% | 7% | 1% |  | 2% |
| Auszahlung D | 0 | 45 | -10 |  | -15 |

**Visuelle Details:**

- Beide Tabellen haben blaue Kopfzeilen und hellblau/grau wechselnde Zeilen.
- Die zweite Tabelle ist nicht einfach dieselbe Darstellung; sie bündelt Ergebnisse mit gleicher Auszahlung.

**Didaktische Bedeutung:**

- In Situation 1 ist die Dominanz von B sofort sichtbar.
- In Situation 2 wird durch Kombination/Zusammenfassung identischer Ergebnisse die Dominanz von D verschleiert.

**Umsetzungshinweis:**

- Als `Before/After Combination`-Komponente umsetzen.
- Zusätzlich visuelle Markierung einbauen:
  - In Tabelle 1: grüne Hervorhebung der Felder, in denen B besser ist.
  - In Tabelle 2: Hinweis `Dominanz wird durch Aggregation weniger offensichtlich`.

---

## Folie 206 - Prospect Theory: Zwei Phasen der Entscheidungsfindung

**Art der Abbildung:** Zwei nebeneinanderliegende Phasenblöcke mit Pfeil-/Chevron-Form.

**Beschreibung:**

- Links steht ein großer hellgrauer Block `Phase 1 - Editing`.
- Der linke Block ist rechts pfeilförmig/chevronartig angeschnitten und zeigt dadurch eine Prozessrichtung nach rechts.
- Rechts steht ein hellblauer Block `Phase 2 - Evaluation`.
- Inhalt Phase 1:
  - Konsequenzen und Wahrscheinlichkeiten werden transformiert.
  - Operationen: Kombination, Vereinfachung, Segregation, Streichung gemeinsamer Bestandteile, Eliminierung dominierender Alternativen, Kodierung durch Referenzpunkt.
- Inhalt Phase 2:
  - Durch Editing aufbereitete Prospects werden bewertet.
  - Bewertung erfolgt durch Wertfunktion und Gewichtungsfunktion.
  - Gewinne und Verluste werden relativ zum gesetzten Referenzpunkt bewertet.
  - Wahrscheinlichkeiten werden subjektiv gewichtet.

**Didaktische Bedeutung:**

- Dies ist die zentrale Prozessübersicht des Modells.
- Wichtig ist nicht nur die Liste, sondern die Reihenfolge: erst Aufbereitung, dann Bewertung.

**Umsetzungshinweis:**

- Als zweistufiger Prozess mit Pfeilrichtung darstellen.
- Phase 1 und Phase 2 sollten in der Lernapp als klickbare Tabs oder Cards wiederkehren.

---

## Folie 209 - Präferenzen bei positiven und negativen Prospekten

**Art der Abbildung:** Vergleichstabelle mit positiven und negativen Prospekten.

**Tabellenstruktur:**

| Fall | Positive Prospects: Alternative A | Positive Prospects: Alternative B | Negative Prospects: Alternative C | Negative Prospects: Alternative D |
|---|---:|---:|---:|---:|
| Fall 1 - Prospect | (4.000;0,8) | (3.000) | (-4.000;0,8) | (-3.000) |
| Fall 1 - Antworthäufigkeit | 20% | **80%** | **92%** | 8% |
| Fall 2 - Prospect | (3.000;0,9) | (6.000;0,45) | (-3.000;0,9) | (-6.000;0,45) |
| Fall 2 - Antworthäufigkeit | **86%** | 14% | 8% | **92%** |

**Visuelle Details:**

- Obere Tabellenüberschrift ist zweigeteilt:
  - `Positive Prospects`
  - `Negative Prospects`
- Dominante bzw. auffällige Antwortwerte sind fett gesetzt: 80%, 92%, 86%, 92%.
- Im Text darunter ist das Wort `widerspricht` orange hervorgehoben.

**Didaktische Bedeutung:**

- Bei positiven Prospekten dominiert Risikoaversion.
- Bei negativen Prospekten dominiert Risikofreude.
- Diese Asymmetrie widerspricht der klassischen ökonomischen Theorie.

**Umsetzungshinweis:**

- Als Split-Table mit farblicher Trennung `Gewinnbereich` vs. `Verlustbereich` bauen.
- Die fett markierten Präferenzen als Ergebnis-Badges darstellen.

---

## Folie 210 - Wertfunktion der Prospect Theory

**Art der Abbildung:** Zentrale S-förmige Wertfunktion mit Gewinn-/Verlustbereich.

**Beschreibung:**

- Diagramm mit horizontaler Achse und vertikaler Achse.
- Vertikale Achse: `Nutzen`.
- Horizontale Achse:
  - links: `Verluste` in Rot.
  - rechts: `Gewinne` in Grau.
- Ursprung ist mit einem Kreis markiert und als `Referenzpunkt` beschriftet.
- Im Gewinnbereich rechts oben verläuft eine blaue konkave Kurve:
  - steigt zunächst steil an,
  - flacht dann ab.
- Beschriftung im Gewinnbereich:
  - `konkaver Verlauf im Gewinnbereich -> risikoscheu`
  - `Freude über zusätzlichen Gewinn wird geringer`
- Im Verlustbereich links unten verläuft eine rote konvexe Kurve:
  - fällt vom Referenzpunkt zunächst steil,
  - flacht bei größeren Verlusten ab.
- Beschriftung im Verlustbereich:
  - `konvexer Verlauf im Verlustbereich -> risikofreudig`
  - `Leid über zusätzlichen Verlust wird geringer`
- Zusätzlich steht rechts unten:
  - `Funktionsverlauf für Verluste steiler als für Gewinne -> Verlustaversion`
- Fußzeile/Interpretationssatz:
  - Nutzen bemisst sich nicht an absoluten Werten, sondern an Veränderungen relativ zum Referenzpunkt.

**Didaktische Bedeutung:**

- Das Diagramm enthält die drei Kernideen:
  1. Referenzpunktabhängigkeit.
  2. Abnehmende Sensitivität.
  3. Verlustaversion.
- Es ist eines der wichtigsten Diagramme des Kapitels.

**Umsetzungshinweis:**

- Als großes interaktives SVG umsetzen.
- Achsen, Referenzpunkt und Kurven müssen beschriftet sein.
- Beim Hover über Kurvenabschnitte:
  - Gewinnbereich: `risikoscheu, abnehmender Grenznutzen`.
  - Verlustbereich: `risikofreudig, abnehmender zusätzlicher Schmerz`.
  - Steilheit: `Verluste wiegen stärker als Gewinne`.

---

## Folie 215 - Besitztumseffekt: Mentale Konten in Kauf- und Verkaufssituation

**Art der Abbildung:** Vier Mini-Wertfunktionen in zwei Boxen.

**Beschreibung:**

- In der Mitte befinden sich zwei große Rahmen:
  1. `Mental accounts in der Kaufsituation`
  2. `Mental accounts in der Verkaufssituation`
- Jede Box enthält zwei kleine Koordinatensysteme mit S-förmiger Wertfunktion.

### Linke Box: Kaufsituation

- Erster Mini-Graph `Gut:`
  - x-Achse nach rechts mit Ergebnis `x`.
  - Auf der Kurve ist der positive subjektive Wert `v(x)` markiert.
  - Das Gut wird als Gewinn kodiert.
- Zweiter Mini-Graph `Geld:`
  - Geldzahlung wird links vom Ursprung als Verlust markiert, etwa `-y_k`.
  - Dazu gehört ein negativer Wert `-v(x)` bzw. ein negativer Nutzenbereich.
  - Geldabfluss wird als Verlust empfunden.

### Rechte Box: Verkaufssituation

- Erster Mini-Graph `Gut:`
  - Aufgabe des Guts liegt links vom Ursprung als `-x`.
  - Dazu ist der negative subjektive Wert `v(-x)` eingezeichnet.
  - Das Weggeben des Gutes wird als Verlust kodiert.
- Zweiter Mini-Graph `Geld:`
  - Erhalt des Verkaufserlöses liegt rechts vom Ursprung als `y_v`.
  - Horizontale und vertikale gestrichelte Hilfslinien markieren den notwendigen positiven Gegenwert.

**Didaktische Bedeutung:**

- Der Verkauf eines bereits besessenen Gutes wird als Verlust erlebt.
- Wegen Verlustaversion muss der Verkaufspreis subjektiv höher sein als der Kaufpreis.
- Dies erklärt, warum `Willingness to Accept` oft über `Willingness to Pay` liegt.

**Umsetzungshinweis:**

- Als 2x2-Matrix mit Mini-SVGs umsetzen.
- Kauf: `Gut = Gewinn`, `Geld = Verlust`.
- Verkauf: `Gut = Verlust`, `Geld = Gewinn`.
- Eine Erklärungslinie ergänzen: `Verlust des Besitzes wiegt stärker als gleich hoher Geldgewinn`.

---

## Folie 216 - Mental Accounting bei Investmententscheidungen

**Art der Abbildung:** Portfolio-Mental-Accounts-Grafik plus relatives Wertfunktionsdiagramm.

**Beschreibung:**

### Linker Teil: isolierte Konten

- Links ist ein großer ovaler Rahmen.
- Im Oval stehen sieben getrennte mentale Konten:
  - `Konto "Aktie 1"`
  - `Konto "Aktie 2"`
  - `Konto "Aktie 3"`
  - `Konto "Aktie 4"`
  - `Konto "Aktie 5"`
  - `Konto "Aktie 6"`
  - `Konto "Aktie 7"`
- Überschrift darüber:
  - `"Mental Accounting" (Isoliertes Bewerten jedes einzelnen Engagements)`

### Übergang

- Ein blauer Pfeil zeigt vom Oval nach rechts.
- Beschriftung: `z. B. für Konto "Aktie 1"`.

### Rechter Teil: relative Bewertung innerhalb eines Kontos

- Rechts steht ein Koordinatensystem.
- Horizontale Achse:
  - links `Relativer Verlust`
  - rechts `Relativer Gewinn`
- Der Ursprung ist als `Einstandspreis` markiert, mit einem kleinen Kreis und Pfeilbeschriftung.
- Vom Ursprung nach rechts oben verläuft eine grüne konkave Gewinnkurve.
- Vom Ursprung nach links unten verläuft eine blaue/teal Verlustkurve, deutlich steiler im Verlustbereich.

**Didaktische Bedeutung:**

- Anleger betrachten einzelne Positionen getrennt statt das Gesamtportfolio aggregiert.
- Dadurch werden Diversifikationseffekte vernachlässigt.
- Der Einstandspreis einer einzelnen Aktie wird zum Referenzpunkt.

**Umsetzungshinweis:**

- Links als Portfolio-Cluster mit einzelnen Karten `Aktie 1` bis `Aktie 7` darstellen.
- Rechts als Wertfunktion für ein einzelnes Konto.
- Lernhinweis: `Gegensteuern durch Aggregation: Gesamtportfolio statt Einzelposition betrachten`.

---

## Folie 217 - Mental Accounting: Integration vs. Segregation

**Art der Abbildung:** Entscheidungsschema mit zwei Pfaden.

**Beschreibung:**

- Oben werden Hedonic-Framing-Regeln als Bulletpoints erklärt.
- Unten befindet sich ein breiter hellblauer Kasten:
  - `Hedonic Framing beschreibt eine Konstruktion von mentalen Konten, so dass die Gesamtzufriedenheit maximiert wird.`
- Von diesem Kasten gehen zwei Pfeile nach unten:
  - Links zu `Integration (Konten zusammenfassen)`.
  - Rechts zu `Segregation (Konten trennen)`.

**Didaktische Bedeutung:**

- Die Folie schafft den Übergang zu den folgenden Diagrammen.
- Integration und Segregation sind zwei Arten, Gewinne und Verluste mental zu verbuchen.

**Umsetzungshinweis:**

- Als Entscheidungsbaum mit zwei großen Buttons umsetzen:
  - `Konten zusammenfassen`
  - `Konten trennen`
- Darunter die vier Hedonic-Framing-Regeln aus Folien 218-219 verlinken.

---

## Folie 218 - Hedonic Framing: Gewinne segregieren, Verluste integrieren

**Art der Abbildung:** Zwei Reihen mit Wertfunktions-Miniaturen, Pluszeichen und Vergleichszeichen.

### Obere Reihe: Gewinne werden segregiert

**Visuelle Struktur:**

- Links stehen zwei kleine Gewinn-Wertfunktionsdiagramme mit jeweils grün markierter positiver Fläche.
- Zwischen den beiden Diagrammen steht ein großes blaues Pluszeichen `+`.
- Danach folgt ein großes blaues Vergleichszeichen `>`.
- Rechts steht ein einzelnes Gewinn-Wertfunktionsdiagramm mit größerer grüner Fläche.

**Interpretation:**

- Zwei getrennt verbuchte Gewinne erzeugen subjektiv mehr Nutzen als ein zusammengefasster Gewinn gleicher Gesamthöhe.
- Formal: `v(x) + v(y) > v(x+y)` bei Gewinnen, weil die Wertfunktion im Gewinnbereich konkav ist.

### Untere Reihe: Verluste werden integriert

**Visuelle Struktur:**

- Links stehen zwei kleine Verlustdiagramme mit orange markierten Verlustflächen.
- Zwischen ihnen steht ein großes blaues Pluszeichen `+`.
- Danach folgt ein großes blaues Vergleichszeichen `<`.
- Rechts steht ein einzelnes Verlustdiagramm mit größerer orangefarbener Fläche.

**Interpretation:**

- Zwei getrennte Verluste sind subjektiv schmerzhafter als ein zusammengefasster Verlust gleicher Gesamthöhe.
- Formal: `v(-x) + v(-y) < v(-(x+y))` aus Sicht der empfundenen Zufriedenheit.
- Deshalb werden Verluste mental eher integriert.

**Umsetzungshinweis:**

- Die Mini-Diagramme als SVG-Kacheln darstellen.
- Grün für Gewinne, Orange für Verluste.
- Die Vergleichszeichen sollten zentral und groß bleiben, weil sie die Kernlogik transportieren.

---

## Folie 219 - Hedonic Framing: großer Gewinn/kleiner Verlust und kleiner Gewinn/großer Verlust

**Art der Abbildung:** Zwei Reihen mit gemischten Gewinn-Verlust-Diagrammen.

### Obere Reihe: Großer Gewinn + kleiner Verlust werden integriert

**Visuelle Struktur:**

- Links: ein großes grünes Gewinn-Diagramm.
- Mitte: ein kleines orangefarbenes Verlust-Diagramm.
- Zwischen ihnen steht ein blaues Pluszeichen `+`.
- Danach folgt ein blaues Vergleichszeichen `<`.
- Rechts: ein integriertes Diagramm mit großem positiven Nettogewinnbereich.

**Interpretation:**

- Ein kleiner Verlust sollte mental mit einem großen Gewinn verrechnet werden.
- Der Verlust fällt dann subjektiv weniger stark ins Gewicht.
- Formal/didaktisch: Integration erhöht die Gesamtzufriedenheit gegenüber getrennter Betrachtung.

### Untere Reihe: Kleiner Gewinn + großer Verlust werden segregiert

**Visuelle Struktur:**

- Links: kleines grünes Gewinn-Diagramm.
- Mitte: großes orangefarbenes Verlust-Diagramm.
- Zwischen ihnen steht ein blaues Pluszeichen `+`.
- Danach folgt ein blaues Vergleichszeichen `>`.
- Rechts: ein Verlustdiagramm mit großem orangefarbenen Bereich.

**Interpretation:**

- Ein kleiner Gewinn sollte mental vom großen Verlust getrennt werden.
- Der kleine Gewinn bleibt als eigener positiver Nutzen erhalten, statt im großen Verlust unterzugehen.
- Daher werden kleine Gewinne von großen Verlusten segregiert.

**Umsetzungshinweis:**

- Als vier Hedonic-Framing-Regeln darstellen:
  1. Gewinne trennen.
  2. Verluste bündeln.
  3. Kleine Verluste mit großen Gewinnen bündeln.
  4. Kleine Gewinne von großen Verlusten trennen.

---

## Folie 220 - Hedonic Framing: Anwendungsbeispiel Autokauf

**Art der Abbildung:** Große Vergleichstabelle mit vier Preis-/Rabatt-Darstellungsformen.

**Tabellenstruktur:**

| Position | Preisentbündelung, Rabattbündelung | Preisbündelung, Rabattbündelung | Preisentbündelung, Rabattentbündelung | Preisbündelung, Rabattentbündelung |
|---|---:|---:|---:|---:|
| Grundmodell | 30.000 |  | 30.000 |  |
| Rabatt Grundmodell |  |  | -1.500 | -1.500 |
| Klimaanlage | 3.000 |  | 3.000 |  |
| Rabatt Klimaanlage |  |  | -150 | -150 |
| Radio | 2.000 |  | 2.000 |  |
| Rabatt Radio |  |  | -100 | -100 |
| Total |  | 35.000 |  | 35.000 |
| Rabatt total | -1.750 | -1.750 |  |  |
| Gesamtpreis | **33.250** | **33.250** | **33.250** | **33.250** |

**Visuelle Details:**

- Vier Spalten stellen unterschiedliche Framings dar.
- Die rechte Spalte ist hellblau hinterlegt.
- Alle Varianten führen zum identischen Gesamtpreis `33.250`.
- Unterschiede liegen nur in Bündelung/Entbündelung von Preisen und Rabatten.

**Didaktische Bedeutung:**

- Objektiv identischer Gesamtpreis kann subjektiv unterschiedlich wahrgenommen werden.
- Hedonic Framing erklärt, warum getrennte Rabatte oder gebündelte Rabatte unterschiedlich attraktiv wirken.

**Umsetzungshinweis:**

- Als interaktive Tabelle mit Umschalter bauen:
  - `Preise getrennt/gebündelt`
  - `Rabatte getrennt/gebündelt`
- Ergebniszeile `Gesamtpreis = 33.250` immer fix anzeigen.
- Ergänzen: `Objektiv gleich, subjektiv anders gerahmt`.

---

## Folie 222 - Sunk Cost Effekt: Begründung durch relative Bewertung

**Art der Abbildung:** Drei Wertfunktionsdiagramme für Projektalternativen.

**Beschreibung:**

- Überschrift: `Begründung der Sunk Cost-Falle durch relative Bewertung`.
- In der Mitte stehen drei kleine Diagramme mit derselben S-förmigen Wertfunktion.

### Linkes Diagramm: Verlustprojekt

- Beschriftung: `"Verlustprojekt"`.
- Die Kurve liegt sichtbar im Verlustbereich.
- Ein grauer Rechteck-/Flächenbereich markiert einen Bewertungsabschnitt im Verlustbereich.
- Markierungen/Beschriftungen:
  - `-1000`
  - `1500`
- Die Fläche liegt um einen Verlustreferenzpunkt herum und zeigt, dass zusätzliche Veränderungen im Verlustbereich wegen abnehmender Sensitivität relativ anders wahrgenommen werden.

### Mittleres Diagramm: Neues Projekt

- Beschriftung: `"Neues Projekt"`.
- Graue Fläche liegt im Gewinnbereich ab dem Referenzpunkt.
- Markierung/Beschriftung:
  - `1600`
- Zeigt eine Alternative ohne bereits vorhandenen Verlustanker.

### Rechtes Diagramm: Gewinnprojekt

- Beschriftung: `"Gewinnprojekt"`.
- Kurve und graue Fläche liegen im positiven Bereich.
- Markierungen/Beschriftungen:
  - `1000`
  - `1700`
- Zeigt Bewertung eines Projekts relativ zu bereits positivem Referenzzustand.

**Kernaussage am Folienende:**

- `Abnehmende Sensitivität unterstützt die Präferenz für Verlustprojekte`.

**Didaktische Bedeutung:**

- Bereits entstandene Verluste verschieben den mentalen Referenzrahmen.
- Menschen investieren häufig weiter in Verlustprojekte, weil zusätzliche Verluste im bereits negativen Bereich subjektiv weniger stark auffallen bzw. die Chance auf Rückkehr zum Referenzpunkt attraktiv erscheint.

**Umsetzungshinweis:**

- Als drei nebeneinanderliegende `Projektkarten` mit Mini-Wertfunktion umsetzen.
- Wichtig ist die relative Lage zur S-Kurve, nicht eine numerisch exakte Kurvenberechnung.

---

## Folie 223 - Sunk Cost-Falle an der Börse: Dispositionseffekt

**Art der Abbildung:** Wertfunktionsdiagramm mit Positionsbereichen nach Gewinn/Verlust.

**Beschreibung:**

- Zentrales Koordinatensystem mit S-förmiger Prospect-Theory-Wertfunktion.
- Horizontale Achse:
  - links: `Relativer Verlust`
  - rechts: `Relativer Gewinn`
- Vertikale Achse: `v`.
- Ursprung ist als Bezugspunkt markiert:
  - `Bezugspunkt (z. B. Einstandspreis von 125 €)`.
- Im linken unteren Verlustbereich ist ein grauer Flächenbereich mit Pfeil markiert:
  - `Position nach Verlust`
- Im rechten oberen Gewinnbereich ist ein grauer Flächenbereich mit Pfeil markiert:
  - `Position nach Gewinn`
- Die Kurve ist im Verlustbereich steiler und konvex, im Gewinnbereich konkav.
- Unten steht die Kernaussage:
  - `Verluste werden ausgesessen und Gewinne werden zu schnell realisiert`

**Didaktische Bedeutung:**

- Der Einstandspreis wird mentaler Referenzpunkt.
- Anleger verkaufen Gewinner zu früh, um Gewinne zu sichern.
- Anleger halten Verlierer zu lange, um den Verlust nicht realisieren zu müssen.

**Umsetzungshinweis:**

- Als interaktives Börsenbeispiel umsetzen:
  - Startpreis/Einstandspreis = 125 €.
  - Kurs über Referenzpunkt: `Gewinnposition -> Tendenz Verkauf`.
  - Kurs unter Referenzpunkt: `Verlustposition -> Tendenz Halten/Aussitzen`.

---

## Folie 228 - Risikoeinstellung und Gewichtungsfunktion

**Art der Abbildung:** Achsendiagramm zum Zusammenhang von objektiver und empfundener Wahrscheinlichkeit.

**Beschreibung:**

- Zentrales quadratisches Koordinatensystem.
- Horizontale Achse unten: `Gewinnwahrscheinlichkeiten` von `0%` links nach `100%` rechts.
- Oben ist eine gegenläufige Achse: `Verlustwahrscheinlichkeiten` von `100%` links nach `0%` rechts.
- Linke vertikale Achse: `π(p) für Gewinne`.
- Rechte vertikale Achse: `π(p) für Verluste`.
- Links zusätzlich ein vertikaler hellblauer Balken mit der Beschriftung `Empfundene Wahrscheinlichkeit`.
- Unten steht ein hellblauer Balken: `Objektive Eintrittswahrscheinlichkeit`.
- Im Diagramm:
  - Eine gestrichelte Diagonale von links unten nach rechts oben ist mit `risikoneutral` beschriftet.
  - Eine gekrümmte Linie unter/über der Diagonalen zeigt veränderte Gewichtung.
  - Oberhalb/links davon steht `risikofreudig`.
  - Unterhalb/rechts davon steht `risikoscheu`.

**Didaktische Bedeutung:**

- Zeigt, dass Risikoeinstellung von der subjektiven Gewichtung der Eintrittswahrscheinlichkeiten abhängt.
- Objektive Wahrscheinlichkeit und empfundene Wahrscheinlichkeit fallen auseinander.

**Umsetzungshinweis:**

- Als erklärendes SVG mit drei Bereichen umsetzen:
  - Diagonale = objektiv/neutral.
  - Oberhalb = Überschätzung/risikofreudig.
  - Unterhalb = Unterschätzung/risikoscheu.
- Gewinne und Verluste über obere/untere Achsen klar trennen.

---

## Folie 230 - Gewichtungsfunktion: Wie Menschen Wahrscheinlichkeiten gewichten

**Art der Abbildung:** Hauptdiagramm der Wahrscheinlichkeitsgewichtungsfunktion.

**Beschreibung:**

- Großes Koordinatensystem mit Raster.
- x-Achse: objektive Wahrscheinlichkeit `p`, von `0%` bis `100%`.
- y-Achse: gewichtete/subjektive Wahrscheinlichkeit `π(p)`, von `0%` bis `100%`.
- Eine gerade Diagonale von links unten nach rechts oben zeigt `π(p)=p` bzw. neutrale Gewichtung.
- Zusätzlich sind mehrere Kurven eingezeichnet:
  - Kurve für `Verlustwahrscheinlichkeiten`: verläuft im mittleren Bereich oberhalb der Diagonalen.
  - Kurve für `Gewinnwahrscheinlichkeiten`: verläuft im mittleren Bereich unterhalb bzw. anders gekrümmt und steigt zum rechten oberen Ende steil an.
  - Eine gestrichelte Kurve liegt zwischen den anderen Linien und zeigt eine alternative/vereinfachte Gewichtung.
- Links unten ist ein grauer Kreis/Ellipsenbereich um sehr kleine Wahrscheinlichkeiten.
  - Beschriftung: `Überbewertung von geringen Wahrscheinlichkeiten`.
- Rechts oben ist ein grauer Kreis/Ellipsenbereich bei sehr hohen Wahrscheinlichkeiten nahe `100%`.
  - Beschriftung: `Certainty-Effekt`.

**Didaktische Bedeutung:**

- Kleine Wahrscheinlichkeiten werden übergewichtet.
- Mittlere und hohe Wahrscheinlichkeiten werden häufig untergewichtet.
- Der Sprung von hoher Wahrscheinlichkeit zu Sicherheit ist subjektiv besonders groß.
- Gewinn- und Verlustwahrscheinlichkeiten werden unterschiedlich bewertet.

**Umsetzungshinweis:**

- Als zentrales Diagramm im Kapitel umsetzen.
- Die zwei grauen Hervorhebungszonen müssen erhalten bleiben:
  - links unten: `Overweighting small probabilities`.
  - rechts oben: `Certainty effect`.
- Nutzer sollte per Toggle zwischen `Gewinnwahrscheinlichkeiten` und `Verlustwahrscheinlichkeiten` wechseln können.

---

## Folie 231 - Gewichtungsfunktion: Merkmale plus Mini-Diagramm

**Art der Abbildung:** Textliste mit verkleinerter Wiederholung des Diagramms aus Folie 230.

**Beschreibung:**

- Links stehen die wichtigsten Merkmale der Wahrscheinlichkeitsgewichtungsfunktion.
- Rechts oben ist eine kleinere Version des Diagramms aus Folie 230 eingebettet.
- Die Mini-Grafik enthält weiterhin:
  - Achsen `π(p)` und `p`.
  - Kurven für Gewinn- und Verlustwahrscheinlichkeiten.
  - Markierung `Überbewertung von geringen Wahrscheinlichkeiten` links unten.
  - Markierung `Certainty-Effekt` rechts oben.

**Didaktische Bedeutung:**

- Folie 231 fasst Folie 230 in Textform zusammen.
- Mini-Diagramm dient als visuelle Erinnerung.

**Umsetzungshinweis:**

- In der Lernapp nicht separat als zweite große Grafik nötig.
- Besser: Folie 230 als großes interaktives Diagramm, Folie 231 als danebenliegende Merkmalskarte.

---

## Folie 232 - Überbewertung geringer Eintrittswahrscheinlichkeiten: Fahrradversicherung

**Art der Abbildung:** Rechen-/Vergleichsdiagramm mit Formelkarten.

**Beschreibung:**

- Thema: `Der Abschluss von kleinen Versicherungen`.
- Beispiel: `Fahrradversicherung`.
- Rechts oben steht ein grauer Infokasten mit drei Parametern:
  - `Jahresprämie: 40 €`
  - `Wert des Fahrrads: 600 €`
  - `Diebstahlwahrscheinlichkeit: 5%`
- In der Mitte stehen zwei blau umrandete Boxen als objektiver Erwartungswertvergleich:
  - Links: `Erwartungswert "Keine Versicherung"`
    - `0,05 · -600 € + 0,95 · 0 € = -30 €`
  - Rechts: `Erwartungswert "Versicherung"`
    - `-40 €`
- Zwischen den beiden oberen Boxen steht ein `>`.
  - Objektiv ist keine Versicherung besser, weil `-30 € > -40 €`.
- Darunter steht links eine weitere blau umrandete Box mit `aber:`:
  - `π(0,05) · v(-600 €) + π(0,95) v(0 €)`
- Rechts unten steht eine blau umrandete Box:
  - `v(-40 €)`
- Zwischen den unteren Boxen steht ein `<`.
- Unter der linken unteren Box zeigen zwei Pfeile auf die Gewichtungen:
  - unter `π(0,05)`: `>>0,05`
  - unter `π(0,95)`: `<<0,95`
- Unten steht ein hellblauer Ergebnisbalken:
  - `Versicherung im Erwartungswert teurer, aber subjektiv attraktiv!`

**Didaktische Bedeutung:**

- Die Versicherung ist objektiv im Erwartungswert schlechter.
- Subjektiv kann sie attraktiv sein, weil die kleine Diebstahlwahrscheinlichkeit übergewichtet wird.
- Die Prospect-Theory-Bewertung kann daher von der Erwartungswertlogik abweichen.

**Umsetzungshinweis:**

- Als dreistufige Rechenkarte darstellen:
  1. Objektive Daten.
  2. Erwartungswertvergleich.
  3. Prospect-Theory-Vergleich mit Gewichtung `π`.
- Besonders wichtig: `>>0,05` und `<<0,95` sichtbar machen, da dies die Über-/Untergewichtung zeigt.

---

## Folie 233 - Bewertungsfunktionen: Zusammenfassung Wertfunktion

**Art der Abbildung:** Zusammenfassungsbox mit großem grauem Ausrufezeichen-Hintergrund.

**Beschreibung:**

- Große blau umrandete Inhaltsbox.
- Links in der Box liegt ein sehr großes, hellgraues Ausrufezeichen als dekoratives Warn-/Merksymbol.
- Rechts stehen drei zentrale Bulletpoints zur Wertfunktion.
- Überschrift:
  - `Merkmale der Bewertungsfunktionen - Wertfunktion`
- Kernaussagen:
  1. Wertfunktion konkav im Gewinnbereich und konvex im Verlustbereich.
  2. Wertfunktion steiler im Verlustbereich als im Gewinnbereich; Verluste werden etwa doppelt so stark bewertet wie gleich hohe Gewinne.
  3. Wertfunktion stellt relative Gewinne und Verluste dar, definiert durch einen Referenzpunkt.
- Quelle unten rechts: `Vgl. Daxhammer/Facsar (2017)`.

**Didaktische Bedeutung:**

- Merkslide zur Wertfunktion.
- Das Ausrufezeichen dient als visuelle Hervorhebung, hat aber keinen zusätzlichen fachlichen Inhalt.

**Umsetzungshinweis:**

- Als `KeyTakeaways`-Card umsetzen.
- Das Ausrufezeichen kann durch ein dezentes Icon ersetzt werden.

---

## Folie 234 - Bewertungsfunktionen: Zusammenfassung Gewichtungsfunktion

**Art der Abbildung:** Zusammenfassungsbox mit großem grauem Ausrufezeichen-Hintergrund.

**Beschreibung:**

- Layout entspricht Folie 233.
- Überschrift:
  - `Merkmale der Bewertungsfunktionen - Gewichtungsfunktion`
- Kernaussagen:
  1. Wenn Marktteilnehmer die objektive Wahrscheinlichkeitsverteilung beachten, basiert Risikoverhalten allein auf der S-förmigen Wertfunktion.
  2. Bei objektiver Verteilung: im Gewinnbereich risikoscheu, im Verlustbereich risikofreudig.
  3. Wenn objektive Wahrscheinlichkeiten nicht beachtet werden, kann Verhalten entgegen der Wertfunktion entstehen.
  4. Überschätzung geringer Wahrscheinlichkeiten erhöht Risikobereitschaft.
  5. Unterschätzung mittlerer/hoher Wahrscheinlichkeiten senkt Risikobereitschaft.
- Quelle unten rechts: `Vgl. Daxhammer/Facsar (2017)`.

**Didaktische Bedeutung:**

- Merkslide zur Gewichtungsfunktion.
- Verbindet Wertfunktion und Wahrscheinlichkeitsgewichtung.

**Umsetzungshinweis:**

- Direkt neben Folie 233 als zweite `KeyTakeaways`-Card darstellen.
- Gute Lernstruktur: `Wertfunktion` vs. `Gewichtungsfunktion` als Vergleichstabs.

---

## Folie 235 - Überblick Bewertung von Wertpapieren auf Basis der Prospect Theory

**Art der Abbildung:** Abschluss-/Übersichtsfolie mit Hürdenbild und vier Merkpunkten.

**Beschreibung:**

- Oben steht die Hauptaussage:
  - `Hürden für rationale Entscheidungen recht hoch`
- Links befindet sich ein bläulich-graues Foto einer Sport-/Leichtathletik-Hürde oder eines Hindernisses auf einer Bahn.
- Rechts befinden sich vier horizontale hellblaue Textfelder mit Bulletpoints:
  1. Marktteilnehmer bewerten Ergebnisse anhand eines bestimmten Referenzpunktes.
  2. Marktteilnehmer sind bestrebt, relative Verluste zu diesem Referenzpunkt zu vermeiden.
  3. Marktteilnehmer ändern ihre Risikoeinstellung, sobald sie mit Verlusten konfrontiert werden.
  4. Marktteilnehmer überschätzen die Wahrscheinlichkeit von Ereignissen, die höchst unwahrscheinlich sind.
- Quelle unten rechts: `Vgl. Daxhammer/Facsar (2017)`.

**Didaktische Bedeutung:**

- Abschlusszusammenfassung für Wertpapierbewertung.
- Das Hürdenbild visualisiert, dass rationale Entscheidungen durch Prospect-Theory-Effekte erschwert werden.

**Umsetzungshinweis:**

- Als finale `SummaryCard` mit vier nummerierten Takeaways umsetzen.
- Das Hürdenfoto kann durch abstraktes Hindernis-/Barrier-Icon ersetzt werden.

---

# 4. Folien ohne zusätzliche Abbildungsbeschreibung

Die folgenden Folien sind überwiegend textbasiert oder enthalten keine eigenständige Abbildung, die über den Markitdown-Text hinaus fachlich rekonstruiert werden müsste:

- Folie 192 - Agenda.
- Folie 198 - Abgrenzung zur Erwartungsnutzentheorie.
- Folie 199 - Darstellung der Prospekte.
- Folie 201 - Editing Phase als Textliste.
- Folie 205 - Kombination als textliche Interpretation der Tabellen aus Folie 204.
- Folie 207 - Evaluation Phase: Wert eines Prospekts.
- Folie 208 - Beispiel Münzwurf.
- Folie 211 - Wertfunktion als textliche Erklärung der Grafik aus Folie 210.
- Folie 212 - Zentrale kognitive Merkmale.
- Folie 213 - Framing.
- Folie 214 - Status-quo-Bias.
- Folie 221 - Sunk-Cost-Beispiele als Text.
- Folie 224 - Referenzpunkt.
- Folie 225 - Gewichtungsfunktion: Beispiel A/B.
- Folie 226 - Gewichtungsfunktion: Beispiel C/D.
- Folie 227 - Über-/Unterbewertung von Wahrscheinlichkeiten.
- Folie 229 - Eigenschaften der Gewichtungsfunktion.

Diese Folien sollten in der Umsetzung trotzdem enthalten bleiben, aber sie benötigen keine separate Diagrammrekonstruktion über die Markitdown-Extraktion hinaus.

---

# 5. Empfohlene Komponentenstruktur für die Umsetzung

```text
BF6ProspectTheoryTopic
├── AllaisParadox
│   ├── DecisionProblemTableI        // Folie 193
│   ├── DecisionProblemTableII       // Folie 194
│   └── UtilityContradictionProof    // Folie 195
├── ProspectTheoryIntro
│   ├── AuthorContextCard            // Folie 196
│   └── SourcePaperCard              // Folie 197
├── DecisionProcess
│   ├── ProspectFormula              // Folie 200
│   ├── EditingSimplification        // Folie 202
│   ├── EditingTransformFlow         // Folie 203
│   ├── CombinationDominanceTables   // Folie 204-205
│   └── TwoPhaseProcess              // Folie 206
├── EvaluationAndPreferences
│   ├── PositiveNegativeProspects    // Folie 209
│   └── ProspectValueFunction        // Folie 210-212
├── Consequences
│   ├── EndowmentEffectDiagram       // Folie 215
│   ├── MentalAccountingPortfolio    // Folie 216
│   ├── HedonicFramingDecisionTree   // Folie 217
│   ├── HedonicFramingRulesA         // Folie 218
│   ├── HedonicFramingRulesB         // Folie 219
│   ├── CarPurchaseFramingTable      // Folie 220
│   ├── SunkCostRelativeValuation    // Folie 222
│   └── DispositionEffectChart       // Folie 223
├── ProbabilityWeighting
│   ├── RiskAttitudeWeightingChart   // Folie 228
│   ├── WeightingFunctionChart       // Folie 230-231
│   └── BicycleInsuranceExample      // Folie 232
└── Summary
    ├── ValueFunctionTakeaways       // Folie 233
    ├── WeightingFunctionTakeaways   // Folie 234
    └── SecuritiesValuationOverview  // Folie 235
```

---

# 6. Mindestanforderungen gegen Inhaltsverlust

Für eine hochwertige Umsetzung darf Folgendes nicht fehlen:

1. **Allais-Paradoxon vollständig mit beiden Tabellen, Erwartungswerten und Widerspruchslogik.**
2. **Korrekte Prospect-Theory-Formel aus Folie 200.**
3. **Editing Phase als aktiver Transformationsprozess, nicht nur als Bullet-Liste.**
4. **Wertfunktion mit Referenzpunkt, konkavem Gewinnbereich, konvexem Verlustbereich und steilerem Verlustbereich.**
5. **Mental Accounting als isolierte Konten plus relative Bewertung am Einstandspreis.**
6. **Hedonic Framing mit vier Regeln: Gewinne trennen, Verluste bündeln, kleine Verluste mit großen Gewinnen integrieren, kleine Gewinne von großen Verlusten trennen.**
7. **Sunk Cost / Dispositionseffekt mit relativer Bewertung und Einstandspreis als Referenzpunkt.**
8. **Gewichtungsfunktion mit Überbewertung geringer Wahrscheinlichkeiten und Certainty-Effekt.**
9. **Fahrradversicherung mit objektivem Erwartungswertvergleich und subjektiver Prospect-Theory-Bewertung.**
10. **Finale Zusammenfassung zur Wertpapierbewertung anhand der Prospect Theory.**

---

# 7. Kurz-Prompt für Codex/Claude zur Weiterverarbeitung

```text
Nutze die Markitdown-Datei als Textbasis und diese Abbildungsbeschreibung als visuelle Ergänzung. Erstelle daraus ein hochwertiges React-Lerntopic zu BF6 "Prospect Theory und ihre Konsequenzen". Rekonstruiere alle fachlich relevanten Abbildungen als responsive SVG-/HTML-Komponenten, nicht als generische Textkarten. Übernimm die Foliennummern als Quellenhinweise. Korrigiere insbesondere die beschädigte Formel auf Folie 200 und die verdrehten Erwartungswert-Hinweise auf Folie 193/194. Ziel ist eine lernwirksame, visuell klare Umsetzung ohne Inhaltsverlust.
```
