# skript-05-zeit-in-der-oekonomie_MD+PDF - Zeit in der Ökonomie: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-05-zeit-in-der-oekonomie.md` um jene visuellen Inhalte, die bei der Extraktion aus `skript-05-zeit-in-der-oekonomie.pdf` verloren gegangen, nur als zerbrochene Tabellen/Formeln übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Formeln, Diskontierungstabellen, Banknoten-Visuals, Studiendaten oder Bildaussagen verloren gehen.

**Quelle:** `skript-05-zeit-in-der-oekonomie.pdf` mit 26 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, Kopfzeile, Folien-Footer ("Behavioral Finance / CS / Folie XXX") und Copyright ("© 2026 – Hochschule der Bayerischen Wirtschaft") sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Formeln rekonstruieren, nicht übernehmen:** Mehrere Folien (8, 10, 11, 18) enthalten in der MD völlig zerbrochene mathematische Formeln (Diskontierung, DU-Modell, hyperbolisches Diskontieren). Diese sind verbatim aus der Folie rekonstruiert und sollten in React über KaTeX/MathJax sauber gesetzt werden.
2. **Fehlende Bildtabellen neu aufbauen:** Die Diskontierungstabellen (Folien 11, 15, 20, 23) waren als Bild eingebettet und fehlen in der MD ganz oder teilweise. Sie sind hier rekonstruiert und müssen als echte, mehrspaltige Tabellen mit Situationsblöcken umgesetzt werden.
3. **Banknoten-Visuals als dekorative Bilder behandeln:** Die 500-Euro-Schein-Abbildungen (Folien 4-7) tragen keinen eigenständigen fachlichen Inhalt; sie illustrieren nur den steigenden Zeithorizont und können als dezente Bild-/Icon-Komponente umgesetzt werden.
4. **Hervorhebungen erhalten:** Aktiver Agendapunkt (blau/fett), Schlüsselbegriffe ("hyperbolisches Diskontieren"), orange Pfeile/Umkreisungen (Folien 18, 20) und fett gesetzte Stichworte tragen Lerninformation und sollten als Akzent-Markup erhalten bleiben.
5. **Studien als Lernobjekte kapseln:** Thaler (1981), Rubinstein (2003), Marshmallow-Test und das 2002er-Experiment sollten als eigenständige Studien-/Anomalie-Karten mit Daten-Tabellen und Quellenangaben dargestellt werden.
6. **Quellenhinweise erhalten:** Quellen wie `Vgl. Beck (2014), S 205 f.` (Folie 9) als `.source-note` beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleHero` | 1 | Kapiteltitel mit Nummer und dezenter Foto-/Akzentleiste |
| `AgendaList` | 2 | Nummerierte Agenda mit hervorgehobenem aktivem Punkt |
| `ExampleCallout` | 3 | Hervorgehobener Beispiel-Block mit Reflexionsfrage |
| `DiscountQuestionCard` | 4-7 | Zahlungsbereitschaftsfrage mit Banknoten-Visual und Zeithorizont |
| `FormulaList` | 8 | Beschriftete Auf-/Abzinsungsformeln per KaTeX |
| `ReasonGrid` | 9 | Sechs Gründe für die Existenz eines Zinssatzes |
| `FormulaWithExplanation` | 10 | DU-Modell-Summenformel mit Annahmeblock |
| `ConsumptionProfileTable` + `WorkedFormula` | 11 | Konsumprofil-Tabelle und schrittweise Beispielrechnung |
| `NestedBulletList` | 12 | Zweistufige Probleme-Liste des DU-Modells |
| `ConceptExplainer` | 13, 16 | Definition + Beispiel-Block (Zeitinkonsistenz, hyperbolisches Diskontieren) |
| `OptionComparison` | 14, 19 | Optionspaare zum Vergleich von Zeiträumen |
| `DiscountingTable` | 15 | Diskontierungstabelle (exponentiell, zwei Situationen) |
| `StudyResultTable` | 17 | Thaler-(1981)-Daten als kompakte Tabelle |
| `FormulaWithAnnotation` | 18 | Hyperbolische Formel mit hervorgehobenem `i·n` und Pfeil |
| `HyperbolicDiscountingTable` | 20 | Diskontierungstabelle (hyperbolisch) mit Präferenzumkehr |
| `StudyCard` | 21 | Marshmallow-Test als Versuchsbeschreibung |
| `ScenarioComparison` | 22 | Rubinsteins zwei Stereoanlagen-Situationen |
| `ExperimentTable` | 23 | 2002er-Experiment mit Alternative-A/B-Tabelle |
| `AnomalyCard` | 24-26 | Zeitanomalien (Vorzeichen-, Größeneffekt, steigende Profile) |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 5: Zeit in der Ökonomie (Titelfolie)
### In der MD vorhanden
Zeilen 1-5: "Behavioral Finance / Kapitel 5 / Zeit in der Ökonomie / V26-04-23 / Folie 165". Der Textinhalt ist vollständig erfasst.
### Fehlende visuelle Inhalte
Klassische HBW-Kapiteltitelfolie. Oben links Schriftzug "Behavioral Finance". Darunter eine horizontale Leiste mit vier rechteckigen Fotos (von links): (1) eine Hand vor einem Bildschirm/Tablet mit HBW-Logo, (2) eine lächelnde junge Frau, (3) zwei Personen im Gespräch/Beratungssituation, (4) ein modernes Bürogebäude. Darunter mittig der Kapiteltitel "Kapitel 5 / Zeit in der Ökonomie". Oben rechts das HBW-Logo. Rechts unten Versionskennung "V26-04-23". Footer: "Behavioral Finance / CS / Folie 165" sowie "© 2026 – Hochschule der Bayerischen Wirtschaft".
### Visuelle Rekonstruktion
```
Behavioral Finance                              [HBW-Logo]
[Foto1][Foto2][Foto3][Foto4]   (Bildleiste)

            Kapitel 5
            Zeit in der Ökonomie
                                          V26-04-23
```
### Inhaltliche Rekonstruktion
Kein fachlicher Tabelleninhalt. Reine Kapiteleinstiegsfolie.
### Fachliche Aussage
Einleitung in Kapitel 5 "Die Rolle der Zeit in der Ökonomie" der Vorlesung Behavioral Finance.
### React-Vorschlag
`ChapterTitleHero` - Hero-Komponente mit Kapitelnummer, Titel und dezenter Foto-/Akzentleiste; Fotos rein dekorativ (kein fachlicher Inhalt).

## Folie 2 - Agenda
### In der MD vorhanden
Zeilen 7-17: vollständige nummerierte Agenda (Punkte 1-10).
### Fehlende visuelle Inhalte
Standard-Agendafolie. Der aktuelle Kapitelpunkt "5. Die Rolle der Zeit in der Ökonomie" ist optisch hervorgehoben: in Blau (HBW-Akzentblau) und fett gesetzt, während die übrigen neun Punkte in schwarzer Normalschrift stehen. Diese farbliche Markierung des aktiven Kapitels geht im MD-Text verloren. Footer: "Behavioral Finance / CS / Folie 166".
### Visuelle Rekonstruktion
```
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie   <-- BLAU + FETT (aktiv)
6. Die Prospect Theory und ihre Konsequenzen
7. Altersvorsorge und private Finanzplanung
8. Spekulationsblasen an Finanzmärkten
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance
```
### Inhaltliche Rekonstruktion
| Nr. | Kapitel |
|---|---|
| 1 | Einführung |
| 2 | Das Modell der zwei Systeme nach Kahneman |
| 3 | Heuristiken und kognitive Verzerrungen |
| 4 | Entscheidungen unter Unsicherheit |
| 5 | **Die Rolle der Zeit in der Ökonomie** (aktiv) |
| 6 | Die Prospect Theory und ihre Konsequenzen |
| 7 | Altersvorsorge und private Finanzplanung |
| 8 | Spekulationsblasen an Finanzmärkten |
| 9 | Kapitalmarktanomalien |
| 10 | Behavioral Corporate Finance |
### Fachliche Aussage
Gliederung der Vorlesung; das Kapitel 5 ist Gegenstand dieses Skripts.
### React-Vorschlag
`AgendaList` - nummerierte Liste mit `activeIndex={5}`; aktiver Punkt erhält Akzentfarbe und fetten Font.

## Folie 3 - Einleitung: Beispiel Abendessen
### In der MD vorhanden
Zeilen 22-29: Beispieltext vollständig vorhanden (EUR 100, Rückzahlung EUR 110 in einem Jahr, EUR 10,00 Entlohnung, "Ist das Angebot fair?").
### Fehlende visuelle Inhalte
Reine Textfolie ohne Grafik. Untertitel der Kopfzeile "Einleitung"; Überschrift "Beispiel" in Blau/fett. Keine visuellen Verluste außer der Aufzählungszeichen-Struktur (quadratische Bullets). Footer: "Behavioral Finance / CS / Folie 167".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Ausgangslage: Sie haben EUR 100 und würden gerne zu einem Abendessen gehen.
- Jemand macht Ihnen einen Vorschlag:
  - Sie überlassen diesem jemand EUR 100 und er zahlt Ihnen in einem Jahr EUR 110 zurück.
  - Ihr Verzicht auf ein Abendessen heute Abend wird also mit EUR 10,00 entlohnt.
- Frage: Ist das Angebot fair?
### Fachliche Aussage
Einstiegsbeispiel zur Zeitpräferenz des Geldes: Lohnt sich heutiger Konsumverzicht gegen eine spätere Mehrzahlung von 10 % (Zins)?
### React-Vorschlag
`ExampleCallout` - hervorgehobener Beispiel-Block mit Frage am Ende; optional interaktive "Fair?"-Reflexion.

## Folie 4 - Einleitung: Zahlungsbereitschaft, 500 EUR in einer Stunde
### In der MD problematisch/fehlend
Zeilen 34-35: Fragetext erfasst ("Wie viel würden Sie jetzt bezahlen, wenn ich Ihnen in einer Stunde eine sichere Zahlung von 500 Euro versprechen würde?"). Die dominante Bildgrafik (500-Euro-Schein) fehlt vollständig im MD.
### Fehlende visuelle Inhalte
Großes Foto/Abbildung einer 500-Euro-Banknote (violett-purpurner Farbton mit EZB/ECB-Aufschrift, Wertzahl "500" und Schriftzug "EURO"), das den größten Teil der Folie ausfüllt. Hier nur EIN Schein abgebildet. Über dem Schein die blaue Frage. Footer: "Behavioral Finance / CS / Folie 168".
### Visuelle Rekonstruktion
```
[blaue Frage]
+-----------------------------+
|   500   EURO-Banknote       |  <- 1 Schein
+-----------------------------+
```
### Inhaltliche Rekonstruktion
Frage: "Wie viel würden Sie jetzt bezahlen, wenn ich Ihnen in einer Stunde eine sichere Zahlung von 500 Euro versprechen würde?"
### Fachliche Aussage
Erste von vier aufeinander aufbauenden Vergleichsfragen: Bei sehr kurzem Zeithorizont (1 Stunde) ist der Barwert nahezu identisch mit 500 EUR. Dient zum Aufbau der intuitiven Diskontierung über verschiedene Fristen.
### React-Vorschlag
`DiscountQuestionCard` - Karte mit Frage + Banknoten-Visual; `horizon="1 Stunde"`. Visual über eine Bild-/Icon-Komponente; Schein dekorativ.

## Folie 5 - Einleitung: Zahlungsbereitschaft, 500 EUR in einem Monat
### In der MD problematisch/fehlend
Zeilen 40-41: Fragetext erfasst ("...in einem Monat..."). Die Bildgrafik fehlt im MD.
### Fehlende visuelle Inhalte
Mehrere (visuell: ca. drei) überlappend gestaffelte 500-Euro-Scheine, gegenüber Folie 4 also eine zahlreichere Darstellung. Gleicher violetter Banknoten-Look. Frage in Blau oben. Footer: "Behavioral Finance / CS / Folie 169".
### Visuelle Rekonstruktion
```
[blaue Frage]
+---+---+---+
|500|500|500|   <- mehrere gestaffelte Scheine
+---+---+---+
```
### Inhaltliche Rekonstruktion
Frage: "Wie viel würden Sie jetzt bezahlen, wenn ich Ihnen in einem Monat eine sichere Zahlung von 500 Euro versprechen würde?"
### Fachliche Aussage
Zweite Vergleichsfrage: Längere Frist (1 Monat). Die Folien dienen dazu, die intuitive Diskontierung über zunehmende Zeithorizonte zu illustrieren. (Hinweis: Die genaue Reaktion der Zahlungsbereitschaft ist auf der Folie selbst nicht angegeben.)
### React-Vorschlag
`DiscountQuestionCard` mit `horizon="1 Monat"`; gestaffeltes Banknoten-Visual.

## Folie 6 - Einleitung: Zahlungsbereitschaft, 500 EUR in einem Jahr
### In der MD problematisch/fehlend
Zeilen 46-47: Fragetext erfasst ("...in einem Jahr..."). Bildgrafik fehlt im MD.
### Fehlende visuelle Inhalte
Erneut mehrere gestaffelte/überlappende 500-Euro-Scheine (violett). Layout vergleichbar mit Folie 5. Frage in Blau oben. Footer: "Behavioral Finance / CS / Folie 170".
### Visuelle Rekonstruktion
```
[blaue Frage]
+---+---+---+
|500|500|500|   <- gestaffelte Scheine
+---+---+---+
```
### Inhaltliche Rekonstruktion
Frage: "Wie viel würden Sie jetzt bezahlen, wenn ich Ihnen in einem Jahr eine sichere Zahlung von 500 Euro versprechen würde?"
### Fachliche Aussage
Dritte Vergleichsfrage: Frist 1 Jahr; weiter steigender Zeithorizont gegenüber Folie 5.
### React-Vorschlag
`DiscountQuestionCard` mit `horizon="1 Jahr"`.

## Folie 7 - Einleitung: Zahlungsbereitschaft, 500 EUR von einem Fremden in einem Jahr
### In der MD problematisch/fehlend
Zeilen 52-54: Fragetext erfasst ("...wenn Ihnen ein Fremder in einem Jahr eine sichere Zahlung von 500 Euro versprechen würde?"). Bildgrafik fehlt im MD.
### Fehlende visuelle Inhalte
Mehrere gestaffelte 500-Euro-Scheine (violett), Layout wie Folien 5/6. Entscheidender Unterschied liegt nur im Fragetext: Zahlungsversprechen von einem "Fremden" (Bonitäts-/Vertrauensaspekt). Footer: "Behavioral Finance / CS / Folie 171".
### Visuelle Rekonstruktion
```
[blaue Frage: "...ein Fremder ... in einem Jahr ... 500 Euro"]
+---+---+---+
|500|500|500|
+---+---+---+
```
### Inhaltliche Rekonstruktion
Frage: "Wie viel würden Sie jetzt bezahlen, wenn Ihnen ein Fremder in einem Jahr eine sichere Zahlung von 500 Euro versprechen würde?"
### Fachliche Aussage
Vierte Vergleichsfrage: Bei gleichem Zeithorizont (1 Jahr), aber unbekanntem/fremdem Zahlungsversprechen kommt das Vertrauens-/Ausfallrisiko hinzu. Überleitung zu den Gründen für die Existenz eines Zinssatzes (u. a. Risikoprämie).
### React-Vorschlag
`DiscountQuestionCard` mit `horizon="1 Jahr"` und `payer="Fremder"`; ggf. Hinweisbadge "Ausfallrisiko".

## Folie 8 - Einleitung: Diskontierung (Wiederholung Finanzmathematik)
### In der MD problematisch/fehlend
Zeilen 59-79: Die Formeln sind im MD völlig zerbrochen/unleserlich (z. B. `" = " 1 + &`, `'!`). Die vier Formeln müssen aus der Folie rekonstruiert werden.
### Fehlende visuelle Inhalte
Überschrift "Diskontierung – Wiederholung Vorlesung Finanzmathematik" (schwarz/fett). Darunter vier mathematische Formeln (sauber gesetzt, K mit Indizes, Brüche, Exponenten), jeweils unter einer blau/fett gesetzten Zwischenüberschrift. Variablen: K_n = Kapital nach n Perioden, K_0 = Barwert/Anfangskapital, i = Zinssatz, n = Periodenzahl, e = Eulersche Zahl. Footer: "Behavioral Finance / CS / Folie 172".
### Visuelle Rekonstruktion
```
Allgemeine Aufzinsungsformel:           K_n = K_0 (1 + i)^n
Allgemeine Abzinsungsformel:            K_0 = K_n / (1 + i)^n
Allgemeine stetige Aufzinsungsformel:   K_n = K_0 · e^n
Allgemeine stetige Abzinsungsformel:    K_0 = K_n / e^n
```
### Inhaltliche Rekonstruktion
- Aufzinsung (diskret): K_n = K_0 · (1 + i)^n
- Abzinsung (diskret): K_0 = K_n / (1 + i)^n
- Stetige Aufzinsung: K_n = K_0 · e^n
- Stetige Abzinsung: K_0 = K_n / e^n
### Fachliche Aussage
Wiederholung der finanzmathematischen Grundformeln für Auf- und Abzinsung (diskret und stetig), die die Basis der Diskontierung in den Folgefolien bilden.
### React-Vorschlag
`FormulaList` - Liste von beschrifteten Formeln, gerendert per KaTeX/MathJax; jede Formel mit Titel-Badge.

## Folie 9 - Zeitpräferenz des Geldes: Gründe für die Existenz eines Zinssatzes
### In der MD vorhanden
Zeilen 84-100: alle sechs Gründe sowie Quelle "Vgl. Beck (2014), S 205 f." vollständig erfasst.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Zeitpräferenz des Geldes". Reine Textfolie (Bullet-Liste mit fett gesetzten Schlagworten am Zeilenanfang). Keine Diagramme/Grafiken. Verloren geht im MD nur die Hervorhebung der fettgesetzten Stichworte (Unsicherheit, Kompensation für Risiko, Opportunitätskosten, Inflation, Ungeduld, Multiple Persönlichkeiten). Footer: "Behavioral Finance / CS / Folie 173".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
| Grund | Erläuterung |
|---|---|
| Unsicherheit | Unsicherheit über eigenes Leben und zukünftige Ereignisse verlangt nach Entschädigung |
| Kompensation für Risiko (Finanzmarkt = Risikoprämie) | Ausfall-, Kredit- oder Default-Risiko (Kreditnehmer erfüllt Verpflichtungen nicht oder wird insolvent) |
| Opportunitätskosten | Entschädigung für entgangenen Nutzen der nächstbesten Alternative; Gegenwartspräferenz als Basiskonzept der Ökonomie |
| Inflation | Kaufkraftverlust des Geldes verlangt nach Inflationsausgleich |
| Ungeduld | "Lieber heute als morgen"; kann zur Reduktion des Gesamtnutzens führen |
| Multiple Persönlichkeiten | Unterscheidung "heutiges Ich" versus "späteres Selbst = Unbekannter"; Konsum zugunsten des heutigen Ich, das eine wenig am Herzen liegt |
Quelle: Vgl. Beck (2014), S 205 f.
### Fachliche Aussage
Sechs Begründungen, warum ein positiver Zinssatz (= Zeitpräferenz des Geldes) existiert; Brücke zwischen klassischer Finanzmathematik und verhaltensökonomischer Sicht.
### React-Vorschlag
`ReasonGrid` - sechs Karten/Listeneinträge mit fettem Schlagwort + Erläuterung; Quellennote als `.source-note`.

## Folie 10 - Erwartungsnutzentheorie: Exponentielles Diskontieren (DU-Modell)
### In der MD problematisch/fehlend
Zeilen 105-118: Erklärtext vorhanden, aber die zentrale Formel ist zerbrochen (`& 1 / ( ) ) , … , ) = - ( ) / 1 + &`). Formel muss aus der Folie rekonstruiert werden.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Erwartungsnutzentheorie"; blau/fett gesetzte Überschrift "Erwartungsnutzentheorie: Exponentielles Diskontieren". Eine groß gesetzte mathematische Summenformel mittig auf der Folie. Summe von n=0 bis T über den Diskontfaktor (1/(1+i))^n multipliziert mit dem Periodennutzen U(c_n). Footer: "Behavioral Finance / CS / Folie 174".
### Visuelle Rekonstruktion
```
U(c_0, c_1, ..., c_n) = Σ_{n=0}^{T} ( 1 / (1 + i) )^n · U(c_n)
```
### Inhaltliche Rekonstruktion
DU-Modell (Discounted-Utility-Modell):
U(c_0, c_1, …, c_n) = Σ_{n=0}^{T} (1/(1+i))^n · U(c_n)
- In der traditionellen Ökonomie wird der zukünftige Nutzen einer Entscheidung durch exponentielles Diskontieren berechnet (Discounted-Utility-Modell = DU-Modell).
- Annahme: Menschen planen ihren Konsum über alle zukünftigen Perioden und gewichten die zukünftigen Konsumzahlungen mit einem individuellen Diskontsatz, der zukünftigem Konsum ein geringeres Gewicht verleiht als heutigem.
### Fachliche Aussage
Das traditionelle DU-Modell bewertet den Gesamtnutzen als Summe abgezinster Periodennutzen mit konstantem exponentiellem Diskontfaktor.
### React-Vorschlag
`FormulaWithExplanation` - zentrierte KaTeX-Formel + darunter Annahme-Block; Begriff "exponentielles Diskontieren" hervorgehoben.

## Folie 11 - Grundidee des Discounted Utility-Modells
### In der MD problematisch/fehlend
Zeilen 122-143: Erklärung vorhanden, aber die als Bild eingebettete Tabelle und die Beispielrechnung sind völlig zerbrochen (`7 8 8,…,8`, Sonderzeichen). Tabelle und Formelzeilen müssen rekonstruiert werden.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Grundidee des Discounted Utility-Modells", gleichlautende blau/fett gesetzte Inhaltsüberschrift. (1) Eine farbige Tabelle mit blauem Kopfband "Ein hypothetisches Konsumprofil über vier Jahre", darunter zwei hellblau hinterlegte Zeilen (Periode / Zahlung) und vier Spalten (n=0 bis n=3). (2) Zwei gesetzte Formelzeilen darunter: die allgemeine DU-Summenformel und die eingesetzte Beispielrechnung mit Endergebnis 371,97. Footer: "Behavioral Finance / CS / Folie 175".
### Visuelle Rekonstruktion
```
+--------------------------------------------------+
| Ein hypothetisches Konsumprofil über vier Jahre  |  (blauer Header)
+----------+------+------+------+------+
| Periode  | n=0  | n=1  | n=2  | n=3  |
| Zahlung  | 100  | 100  | 110  | 120  |
+----------+------+------+------+------+

U(c0,...,cn) = Σ_{n=0}^{T} (1/(1+i))^n · U(c_n)
U(...) = (1/(1+i))^0·100 + (1/(1+i))^1·100 + (1/(1+i))^2·110 + (1/(1+i))^3·120 = 371,97
```
### Inhaltliche Rekonstruktion
Annahmen: Menschen verlangen Zinsen (beispielsweise i = 10 %); sie möchten gerne ihren Gesamtlebensnutzen maximieren, beschrieben durch eine intertemporale Nutzenfunktion u = (c_0, c_1, c_2).

| Periode | n=0 | n=1 | n=2 | n=3 |
|---|---|---|---|---|
| Zahlung | 100 | 100 | 110 | 120 |

Berechnung:
U = (1/(1+i))^0·100 + (1/(1+i))^1·100 + (1/(1+i))^2·110 + (1/(1+i))^3·120 = 371,97
### Fachliche Aussage
Anwendung des DU-Modells auf ein konkretes vierperiodiges Zahlungsprofil: Der Barwert des Gesamtnutzens beträgt rund 371,97 (Beispiel mit i = 10 %).
### React-Vorschlag
`ConsumptionProfileTable` + `WorkedFormula` - getokte Tabelle mit Akzent-Header und darunter die schrittweise eingesetzte Formel (KaTeX), Ergebnis 371,97 hervorgehoben.

## Folie 12 - Probleme des Discounted Utility-Modells
### In der MD vorhanden
Zeilen 147-164: alle sechs Problempunkte mit Unterpunkten vollständig erfasst.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel und blau/fett gesetzte Inhaltsüberschrift "Probleme des Discounted Utility-Modells". Reine Text-/Bullet-Folie ohne Grafik. Verloren geht im MD nur die hierarchische Struktur (Hauptpunkte mit fettem Schlagwort, eingerückte Unterpunkte/Fragen). Footer: "Behavioral Finance / CS / Folie 176".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Weitere (Konsum-)Alternativen werden nicht berücksichtigt
- Unabhängigkeit im Nutzen und im Konsum
  - Wie wollen Menschen ihren Nutzen über die Zeit verteilen (gleichmäßig, zunehmend …)?
  - Welchen Einfluss hat mein Konsum heute auf meine Konsumentscheidung morgen?
- Konstante Nutzenfunktion
  - Bleibt die Nutzenfunktion über den gesamten Zeitraum stabil?
- Konstanter Diskontierungsfaktor
  - Zu unterschiedlichen Zeitpunkten konsumierte Güter werden (möglicherweise) mit unterschiedlichen Diskontierungsfaktoren diskontiert
- Zeitinkonsistenz
  - Unabhängigkeit des Nutzens vom Zeitpunkt des Konsums?
- Positive Zeitpräferenzen
  - In der Regel wollen Menschen mehr für einen Verzicht
### Fachliche Aussage
Kritik am DU-Modell: Seine Annahmen (Unabhängigkeit, konstante Nutzenfunktion, konstanter Diskontfaktor) werden empirisch verletzt, u. a. durch Zeitinkonsistenz.
### React-Vorschlag
`NestedBulletList` - zweistufige Liste; Hauptpunkte mit fettem Stichwort, Unterpunkte als Reflexionsfragen.

## Folie 13 - Zeitinkonsistenz
### In der MD vorhanden
Zeilen 168-182: Definition und Zahlenbeispiel (1.100 in 13 Monaten vs. 1.000 in 12 Monaten; bzw. 1.100 in 1 Monat vs. 1.000 sofort) vollständig erfasst.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Zeitinkonsistenz", blau/fett gesetzte Inhaltsüberschrift "Zeitinkonsistenzen". Reine Textfolie, keine Grafik. Verloren geht nur die Einrückung der beiden "Also wenn"-Unterpunkte. Footer: "Behavioral Finance / CS / Folie 177".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Definition: Eine Entscheidung zwischen zwei verschiedenen Optionen sollte sich nicht ändern, wenn man beide Optionen um die gleiche Zeitspanne verschiebt.
- Beispiel: Wer heute bekundet, dass er lieber 13 Monate auf EUR 1.100 wartet statt 12 Monate auf EUR 1.000, der sollte nach Ablauf der 12 Monate die EUR 1.100 in einem Monat den EUR 1.000 sofort vorziehen.
- Also wenn:
  - 1.100 in 13 Monaten gleich ist zu 1.000 in 12 Monaten, dann muss auch
  - 1.100 in 1 Monat gleich sein zu 1.000 sofort.
- Verletzung der intertemporalen Nutzenmaximierung, z. B. durch Selbstkontrollprobleme.
- Verletzung des Discounted-Utility-Ansatzes (DU-Modell).
### Fachliche Aussage
Zeitinkonsistenz: Präferenzen kehren sich um, wenn beide Optionen zeitlich verschoben werden — ein zentraler Widerspruch zum DU-Modell.
### React-Vorschlag
`ConceptExplainer` - Definition + Beispiel-Block + "Also wenn"-Schlusskette; ggf. Zeitstrahl-Illustration.

## Folie 14 - Zeit(in)konsistenz (Optionsvergleich)
### In der MD vorhanden
Zeilen 186-201: beide Optionspaare (Option 1-4) und die Aussagen zu Zinssatz/Gegenwartspräferenz vollständig erfasst.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Zeit(in)konsistenz", blau/fett gesetzte Inhaltsüberschrift "Zeit(in)konsistenz". Reine Textfolie, keine Grafik. Verloren geht nur die Hierarchie (Optionen als eingerückte Unterpunkte). Footer: "Behavioral Finance / CS / Folie 178".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Welche der folgenden Optionen würden Sie bevorzugen?
  - Option 1: EUR 1.000 in einem Jahr
  - Option 2: EUR 1.100 in zwei Jahren
- Haben Sie einen persönlichen Zinssatz von i = 0,1 = 10 %, so werden Sie sich gemäß der "normalen" (= exponentiellen) Diskontierungsmethode abzinsen.
- Welche der folgenden Optionen würden Sie bevorzugen?
  - Option 3: EUR 1.000 in zwei Jahren
  - Option 4: EUR 1.100 in drei Jahren
- Menschen haben evtl. unterschiedliche Zinssätze für unterschiedliche Zeiträume.
- Je länger der Zeitraum des Verzichts ist, um so geringer ist die Verzinsung, die gefordert wird.
  - Hoher Zinssatz (niedriger Diskontfaktor) bedeutet hohe Gegenwartspräferenz.
  - Niedriger Zinssatz (höherer Diskontfaktor) bedeutet niedrigere Gegenwartspräferenz.
### Fachliche Aussage
Zwei Optionspaare zeigen, dass Menschen für unterschiedliche Zeiträume unterschiedliche implizite Zinssätze ansetzen — Vorbereitung auf hyperbolisches Diskontieren.
### React-Vorschlag
`OptionComparison` - zwei Frageblöcke mit Optionspaaren; Zusatzbox erläutert Zusammenhang Zinssatz <-> Gegenwartspräferenz.

## Folie 15 - Zeitkonsistentes Verhalten bei exponentiellem Diskontieren
### In der MD problematisch/fehlend
Zeilen 205-206: nur Titel "Zeitkonsistentes Verhalten bei exponentiellem Diskontieren" vorhanden. Die komplette Tabelle (Kern der Folie) fehlt im MD vollständig — als Bild eingebettet, nicht extrahiert.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Zeitkonsistentes Verhalten". Eine Tabelle mit zwei Situationsblöcken. Kopf: links "i = 0,1" und Spalte "Diskontfaktor (1/(1+i))", dann Situation 1 (Option 1: 1000 € in einem Jahr / Option 2: 1100 € in zwei Jahren) und Situation 2 (Option 3: 1000 € in zwei Jahren / Option 4: 1100 € in drei Jahren). Zeilen für Gegenwartswert sowie Ein Jahr (n=1), Zwei Jahre (n=2), Drei Jahre (n=3) mit den jeweiligen Diskontfaktoren und Zahlungen. Nicht befüllte Zellen in den befüllten Zeilen sind mit "–" markiert. Footer: "Behavioral Finance / CS / Folie 179".
### Visuelle Rekonstruktion
```
i=0,1 | Diskont- | Situation 1                  | Situation 2
      | faktor   | Opt.1: 1000€| Opt.2: 1100€   | Opt.3: 1000€| Opt.4: 1100€
      |(1/(1+i)) | in 1 Jahr   | in 2 Jahren    | in 2 Jahren | in 3 Jahren
----------------------------------------------------------------------------
Gegenwartswert    |  909,09     |  909,09        |  826,45     |  826,45
Ein Jahr  (n=1) | 0,90909 |  1000 |   –        |   –         |   –
Zwei Jahre(n=2) | 0,82644 |   –   |  1100      |  1000       |   –
Drei Jahre(n=3) | 0,75131 |   –   |   –        |   –         |  1100
```
### Inhaltliche Rekonstruktion
| i = 0,1 | Diskontfaktor (1/(1+i)) | Sit.1 Opt.1: 1000€ in 1 Jahr | Sit.1 Opt.2: 1100€ in 2 Jahren | Sit.2 Opt.3: 1000€ in 2 Jahren | Sit.2 Opt.4: 1100€ in 3 Jahren |
|---|---|---|---|---|---|
| Gegenwartswert | | 909,09 | 909,09 | 826,45 | 826,45 |
| Ein Jahr (n=1) | 0,90909 | 1000 | – | – | – |
| Zwei Jahre (n=2) | 0,82644 | – | 1100 | 1000 | – |
| Drei Jahre (n=3) | 0,75131 | – | – | – | 1100 |
### Fachliche Aussage
Bei exponentiellem Diskontieren bleiben die Gegenwartswerte beider Optionen je Situation gleich (Sit.1: 909,09 = 909,09; Sit.2: 826,45 = 826,45). Die Präferenz bleibt also bei zeitlicher Verschiebung stabil = zeitkonsistentes Verhalten.
### React-Vorschlag
`DiscountingTable` - mehrspaltige Tabelle mit zwei Situationsgruppen, Gegenwartswert-Zeile hervorgehoben; gleiche Barwerte je Situation farblich markiert.

## Folie 16 - Diskontierung in der Verhaltensökonomik: Hyperbolisches Diskontieren
### In der MD vorhanden
Zeilen 210-224: vollständig erfasst (Konzept, drei Beispiele für Zeitinkonsistenzen, mögliche Erklärung).
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Diskontierung in der Verhaltensökonomik", blau/fett gesetzte Inhaltsüberschrift "Hyperbolisches Diskontieren". Reine Textfolie, keine Grafik. Verloren geht im MD nur die farbliche Hervorhebung des Begriffs "hyperbolisches Diskontieren" (blau) und die Listenhierarchie. Footer: "Behavioral Finance / CS / Folie 180".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
- Die Verhaltensökonomik verwendet das Konzept des hyperbolischen Diskontierens, bei dem Zeitinkonsistenzen berücksichtigt werden.
- Beispiele für Zeitinkonsistenzen:
  - Gute Vorsätze: langfristige Gesundheitsvorteile werden gegen kurzfristige Belohnungen eingetauscht.
  - Sparvorhaben: kurzfristiger Konsum statt Alterssicherung.
  - Klausurvorbereitung: Freizeit wird gegen die langfristigen Vorteile einer guten Klausurvorbereitung eingetauscht.
- Mögliche Erklärung:
  - Hohe Gegenwartspräferenz, die umso größer ist, je näher das Ereignis rückt (z. B. wegen Ungeduld).
  - Oder: Je näher wir in die Gegenwart rücken, desto höher ist der Diskontierungssatz.
### Fachliche Aussage
Hyperbolisches Diskontieren erklärt Zeitinkonsistenz dadurch, dass der Diskontsatz mit Annäherung an die Gegenwart steigt (sehr starke Gegenwartspräferenz für nahe Ereignisse).
### React-Vorschlag
`ConceptExplainer` mit Beispiel-Liste; Schlüsselbegriff "hyperbolisches Diskontieren" als Akzent-Highlight.

## Folie 17 - Zeitinkonsistenzen: Erklärungsmöglichkeit (Thaler 1981)
### In der MD vorhanden
Zeilen 228-241: vollständig erfasst (Thaler 1981, Kompensationen 20/50/100 $, Verzinsungen ca. 400/233/21 % p.a.).
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Diskontierung in der Verhaltensökonomik", blau/fett gesetzte Inhaltsüberschrift "Zeitinkonsistenzen – Erklärungsmöglichkeit". Reine Textfolie, keine Grafik. Im MD verloren gehen nur die fett markierten Beträge (20 $, 50 $, 100 $) und die Listeneinrückung. Footer: "Behavioral Finance / CS / Folie 181".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Menschen verlangen für unterschiedliche Zeiträume unterschiedliche Zinssätze (Vgl. Thaler (1981)). Man fragte Probanden, was man ihnen zahlen muss, damit sie heute auf 15 $ verzichten:

| Verzichtsdauer | geforderte Kompensation | implizite Verzinsung |
|---|---|---|
| 1 Monat | 20 $ | ca. 400 % p.a. |
| 1 Jahr | 50 $ | ca. 233 % p.a. |
| 10 Jahre | 100 $ | ca. 21 % p.a. |
### Fachliche Aussage
Thalers Experiment belegt sinkende implizite Jahreszinsen mit zunehmender Wartezeit — empirischer Beleg für hyperbolisches Diskontieren.
### React-Vorschlag
`StudyResultTable` - kompakte Tabelle (Dauer / Kompensation / Verzinsung) plus Kurzkontext zu Thaler (1981); Quelle als Note.

## Folie 18 - Anpassung des Diskontierungszinssatz: Hyperbolisches Diskontieren (Formel)
### In der MD problematisch/fehlend
Zeilen 246-262: Erklärtext vorhanden, aber die zentrale Formel ist völlig zerbrochen (`/ 1 ; < < < = / ; < ... 1 + ? ∗ A`). Formel muss aus der Folie rekonstruiert werden.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Anpassung des Diskontierungszinssatz" (Singular, exakt wie auf der Folie), blau/fett gesetzte Inhaltsüberschrift "Hyperbolisches Diskontieren". Eine groß gesetzte Summenformel mit Diskontfaktor 1/(1+i·n). Direkt unter dem Term steht ein oranger Aufwärtspfeil, der auf den Nenner (1 + i·n) bzw. den Faktor "i·n" zeigt. Das Wort "Jahr" im Fließtext ist orange hervorgehoben; "n" und "i" im letzten Absatz sind fett gesetzt. Footer: "Behavioral Finance / CS / Folie 182".
### Visuelle Rekonstruktion
```
U(c_0, c_1,..., c_n) = Σ_{n=0}^{T} ( 1 / (1 + i · n) ) · U(c_n)
                                        ▲ (oranger Pfeil)
                                  (zeigt auf 1 + i·n)
```
### Inhaltliche Rekonstruktion
Hyperbolische Barwertformel (Barwertformel des exponentiellen Diskontierens leicht abgeändert):
U(c_0, c_1, …, c_n) = Σ_{n=0}^{T} (1/(1 + i·n)) · U(c_n)
- Der Diskontierungszinssatz wird mit dem Jahr, in dem die jeweilige Zinszahlung erfolgen soll, multipliziert. Dadurch hängt er vom Zeitpunkt ab, in dem man sich befindet.
- Je weiter ein Ereignis in der Zukunft liegt, desto mehr Geduld wird aufgebracht und desto eher besteht Bereitschaft, noch länger auf dieses Ereignis zu warten.
- Je weiter das Ereignis, das man abdiskontieren will, in der Zukunft liegt, um so größer ist die Zahl der Jahre n, mit der der Zinssatz i im Nenner multipliziert wird, – um so kleiner wird der gesamte Diskontierungsfaktor.
### Fachliche Aussage
Beim hyperbolischen Diskontieren steht im Nenner (1 + i·n) statt (1+i)^n; der effektive Diskontfaktor fällt mit der Zeit langsamer, was die abnehmende Ungeduld bei fernen Ereignissen abbildet.
### React-Vorschlag
`FormulaWithAnnotation` - KaTeX-Formel mit hervorgehobenem Term `i·n` (Akzentfarbe) und annotierendem Pfeil/Callout.

## Folie 19 - Hyperbolisches Diskontieren: Beispiel (Präferenzumkehr, Text)
### In der MD vorhanden
Zeilen 266-282: vollständig erfasst (Option 1-4, Hinweis Präferenzumkehr, Erläuterung naher vs. ferner Ereignisse).
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Hyperbolisches Diskontieren", blau/fett gesetzte Überschrift "Beispiel". Reine Textfolie, keine Grafik. Im MD verloren gehen nur die blaue Hervorhebung von "Ergebnis:" und die Listenhierarchie der Optionen. Footer: "Behavioral Finance / CS / Folie 183".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie; Tabelle folgt auf Folie 20).
### Inhaltliche Rekonstruktion
- Welche Option würden Sie bevorzugen?
  - Option 1: EUR 1.000 in einem Jahr
  - Option 2: EUR 1.060 in zwei Jahren
- Haben Sie einen persönlichen Zinssatz von i = 0,1 = 10 %, so werden Sie sich für Option 1 entscheiden.
- Welche Option würden Sie bevorzugen?
  - Option 3: EUR 1.000 in neun Jahren
  - Option 4: EUR 1.060 in zehn Jahren
- Ergebnis: Präferenzumkehr (siehe nächste Seite).
- Je näher das Ereignis rückt, umso wichtiger ist es, umso höher der Unterschied der abdiskontierten Alternativen sein und umso stärker greifen wir zur sofortigen Alternative.
- Je weiter das Ereignis weg liegt, umso geringer wird der Unterschied zwischen den zwei abdiskontierten Alternativen sein und um so eher ist man bereit, einen Verzicht zu leisten.
### Fachliche Aussage
Beispiel zur Präferenzumkehr: Dieselbe Differenz (1.000 vs. 1.060) wird je nach zeitlicher Nähe unterschiedlich bewertet — nahes Ereignis = Sofortpräferenz, fernes Ereignis = Wartebereitschaft.
### React-Vorschlag
`OptionComparison` mit Hinweisbadge "Präferenzumkehr"; Verweis auf Folgefolie mit Berechnungstabelle.

## Folie 20 - Hyperbolisches Diskontieren: Beispiel (Berechnungstabelle)
### In der MD problematisch/fehlend
Zeilen 286-287: nur Titel "Beispiel" vorhanden. Die komplette Berechnungstabelle (Kern der Folie) fehlt im MD vollständig — als Bild eingebettet.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Hyperbolisches Diskontieren", blau/fett gesetzte Überschrift "Beispiel". Eine Tabelle mit zwei Situationsblöcken. Kopf: "i = 0,1", Spalte "Diskontfaktor (1/(1+i·n))", Situation 1 (Option 1: 1000 € in einem Jahr / Option 2: 1060 € in zwei Jahren) und Situation 2 (Option 3: 1000 € in neun Jahren / Option 4: 1060 € in zehn Jahren). Zeilen: Gegenwartswert sowie Ein Jahr (n=1), Zwei Jahre (n=2), Neun Jahre (n=9), Zehn Jahre (n=10). Zwei Gegenwartswerte sind orange umkreist (hervorgehoben): 909,09 (Option 1) und 530 (Option 4). Footer: "Behavioral Finance / CS / Folie 184".
### Visuelle Rekonstruktion
```
i=0,1 | Diskont- | Situation 1                  | Situation 2
      | faktor   | Opt.1: 1000€| Opt.2: 1060€   | Opt.3: 1000€| Opt.4: 1060€
      |(1/(1+in))| in 1 Jahr   | in 2 Jahren    | in 9 Jahren | in 10 Jahren
----------------------------------------------------------------------------
Gegenwartswert    | (909,09)    |  883,33        |  526,32     | (530)
                  |  ^umkreist  |                |             |  ^umkreist
Ein Jahr (n=1)   | 0,9091 | 1000  |   –           |   –         |   –
Zwei Jahre(n=2)  | 0,8333 |  –    |  1060         |   –         |   –
Neun Jahre(n=9)  | 0,5263 |  –    |   –           |  1000       |   –
Zehn Jahre(n=10) | 0,5    |  –    |   –           |   –         |  1060
```
### Inhaltliche Rekonstruktion
| i = 0,1 | Diskontfaktor (1/(1+i·n)) | Sit.1 Opt.1: 1000€ in 1 Jahr | Sit.1 Opt.2: 1060€ in 2 Jahren | Sit.2 Opt.3: 1000€ in 9 Jahren | Sit.2 Opt.4: 1060€ in 10 Jahren |
|---|---|---|---|---|---|
| Gegenwartswert | | **909,09** (umkreist) | 883,33 | 526,32 | **530** (umkreist) |
| Ein Jahr (n=1) | 0,9091 | 1000 | | | |
| Zwei Jahre (n=2) | 0,8333 | | 1060 | | |
| Neun Jahre (n=9) | 0,5263 | | | 1000 | |
| Zehn Jahre (n=10) | 0,5 | | | | 1060 |
### Fachliche Aussage
Präferenzumkehr beim hyperbolischen Diskontieren: In Situation 1 ist Option 1 (909,09) > Option 2 (883,33) -> man wählt sofort; in Situation 2 ist Option 4 (530) > Option 3 (526,32) -> man wartet. Die Rangfolge kehrt sich allein durch zeitliche Verschiebung um.
### React-Vorschlag
`HyperbolicDiscountingTable` - Tabelle wie Folie 15, aber mit Diskontfaktor 1/(1+i·n); die zwei jeweils höheren Barwerte (909,09 und 530) per Akzent-Ring/Badge hervorheben.

## Folie 21 - Der Marshmallow-Test (Selbstbeherrschung bei Kindern)
### In der MD vorhanden
Zeilen 291-304: vollständig erfasst (Testbeschreibung, Brezel/Marshmallow, Glocke, Ablenkung, Korrelation mit Sozialkompetenz/akademischen Fähigkeiten).
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Der Marshmallow-Test", blau/fett gesetzte Inhaltsüberschrift "Der Marshmallow-Test – Selbstbeherrschung bei Kindern". Reine Textfolie, keine Fotos/Grafiken. Im MD verloren geht nur die Listenhierarchie. Footer: "Behavioral Finance / CS / Folie 185".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Klassischer Test, um die Fähigkeit von Kindern, auf Belohnung zu warten, zu testen:
- Kind im Raum werden Brezel und Marshmallow gezeigt und gefragt, was das Kind lieber haben möchte.
- Betreuer verlässt den Raum mit Angebot: Kind darf die gewählte Leckerei essen, wenn es auf Rückkehr wartet, oder vorher eine Glocke läuten, dann kommt der Betreuer sofort. Nun darf aber nur die nicht bevorzugte Leckerei gegessen werden.
- Geduld wurde gesteigert durch Möglichkeiten der Ablenkung (Spielzeug) bzw. reduziert durch Zeigen der Objekte.
- Fähigkeit zu warten korreliert eng mit Sozialkompetenz und akademischen Fähigkeiten.
### Fachliche Aussage
Der Marshmallow-Test illustriert Selbstkontrolle/Belohnungsaufschub als verhaltensökonomisches Pendant zur Gegenwartspräferenz; Wartefähigkeit ist prädiktiv für späteren Erfolg.
### React-Vorschlag
`StudyCard` - Karte mit Versuchsbeschreibung als Liste; optional dezentes Icon (Marshmallow), rein dekorativ.

## Folie 22 - Diskontierung auf Grund von Ähnlichkeiten (Rubinstein 2003)
### In der MD vorhanden
Zeilen 308-320: vollständig erfasst (zwei Situationen Stereoanlage, Beträge 960/2/1080/120 Dollar, Ergebnis Angebot 1 abgelehnt / Angebot 2 angenommen, Ähnlichkeit zu hoch).
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Diskontierung auf Grund von Ähnlichkeiten". Reine Textfolie, keine Grafik. Im MD verloren geht nur die fett markierte Hervorhebung von "Situation 1"/"Situation 2" und die mit Pfeilsymbol (à/->) eingeleiteten Schlusszeilen. Footer: "Behavioral Finance / CS / Folie 186".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Alternativer Ansatz zur Modellierung von zeitinkonsistenten Präferenzen von Rubinstein (2003):
- Situation 1: In 60 Tagen Lieferung der neuen Stereoanlage. Bei Auslieferung müssen Sie 960 Dollar zahlen. Sind Sie bereit, die Auslieferung um einen Tag zu verschieben, wenn man Ihnen dafür 2 Dollar zahlt? -> mehrheitlich abgelehnt.
- Situation 2: Morgen soll Ihre neue Stereoanlage geliefert werden. Sie müssen bei Auslieferung 1080 Dollar zahlen. Sind Sie bereit, die Auslieferung um 60 Tage zu verschieben, wenn man Ihnen dafür einen Preisnachlass von 120 Dollar gewährt? -> angenommen.
- Angebot 1 wird mehrheitlich abgelehnt, Angebot 2 angenommen.
- Differenzbetrag in Situation 1 ist zu gering (Ähnlichkeit zu hoch).
### Fachliche Aussage
Rubinsteins Ähnlichkeitsansatz: Entscheidungen hängen davon ab, ob Beträge und/oder Zeitpunkte als "ähnlich" wahrgenommen werden — nicht allein vom Diskontfaktor.
### React-Vorschlag
`ScenarioComparison` - zwei Situations-Karten mit Beträgen + Annahme/Ablehnungs-Badge; Fazit "Ähnlichkeit zu hoch" als Callout.

## Folie 23 - Diskontierung auf Grund von Ähnlichkeiten: Experiment (durchgeführt 2002)
### In der MD vorhanden
Zeilen 324-334: erfasst (Experiment durchgeführt 2002, Alternativen A/B mit Datumsangaben und Beträgen, Schlussfolgerungen, Widerspruch zum hyperbolischen Diskontieren). Hinweis korrigiert: Diese Folie (PDF-Seite 23, Footer "Folie 187") ist KEIN Duplikat — sie ist die Originalfolie 187; die Foliennummerierung läuft lückenlos durch.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Diskontierung auf Grund von Ähnlichkeiten", schwarz/fett gesetzte Überschrift "Experiment (durchgeführt 2002)". Eine farbige Tabelle mit blauem Kopfband: Spalten "Alternative A" und "Alternative B" (weiße Schrift auf Blau); zwei hellblau hinterlegte Datenzeilen mit fett markierten Zeilennummern "1." und "2." (jeweils "Sie haben die Wahl zwischen:"). Footer: "Behavioral Finance / CS / Folie 187".
### Visuelle Rekonstruktion
```
+------------------------------+--------------------------+----------------------------+
|                              | Alternative A            | Alternative B              |  (blauer Header)
+------------------------------+--------------------------+----------------------------+
| 1. Sie haben die Wahl zw.:   | 467 Dollar am 17.06.2004 | 607,07 Dollar am 17.06.2005|
| 2. Sie haben die Wahl zw.:   | 467 Dollar am 16.06.2004 | 467,39 Dollar am 17.06.2004|
+------------------------------+--------------------------+----------------------------+
```
### Inhaltliche Rekonstruktion
| | Alternative A | Alternative B |
|---|---|---|
| 1. Sie haben die Wahl zwischen: | 467 Dollar am 17. Juni 2004 | 607,07 Dollar am 17. Juni 2005 |
| 2. Sie haben die Wahl zwischen: | 467 Dollar am 16. Juni 2004 | 467,39 Dollar am 17. Juni 2004 |

Bei 1. entscheiden sich mehr Menschen zu warten als bei 2., d. h.:
- Menschen sind nicht bereit, in drei Jahren einen Tag für 39 Cent zu warten, aber durchaus in zwei Jahren für unter 39 Cent pro Tag ein Jahr zu warten.
- Widerspruch zum hyperbolischen Diskontieren: geduldig auf kurze Frist, aber Ungeduld auf lange Frist.
### Fachliche Aussage
Das Experiment von 2002 zeigt einen Widerspruch zum hyperbolischen Diskontieren: Bei langer Frist (3 Jahre) sind Menschen ungeduldig (lehnen 39 Cent für einen Tag ab), bei mittlerer Frist (2 Jahre) jedoch geduldig.
### React-Vorschlag
`ExperimentTable` - getokte Tabelle mit Akzent-Header (Alternative A/B) und Datenzeilen; darunter Schlussfolgerungs-Liste.

## Folie 24 - Weitere Zeitanomalien: Vorzeicheneffekt
### In der MD vorhanden
Zeilen 338-348: vollständig erfasst (Vorzeicheneffekt, Thaler 1981, Lottogewinn 15 $ -> 60 $ = 300 %, Strafe 15/100 $ -> 20/118 $ = 33 % (18 %), Ergebnis). Hinweis korrigiert: PDF-Seite 24 (Footer "Folie 188") ist die Originalfolie 188, kein Duplikat.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Weitere Zeitanomalien", blau/fett gesetzte Inhaltsüberschrift "Vorzeicheneffekt". Reine Textfolie, keine Grafik. Im MD verloren gehen nur die blaue Überschrift, die fett gesetzte Hervorhebung von "Ergebnis:" und die Listeneinrückung. Footer: "Behavioral Finance / CS / Folie 188".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Vorzeicheneffekt:
- Viele Studien zeigen, dass Menschen Gewinne stärker diskontieren als Verluste.
- Experiment von Thaler (1981):
  - Befragung, Auszahlung eines Lottogewinns zu verschieben: anstatt 15 $ heute war man bereit nach einem Jahr für $ 60 zu verschieben = 300 % Zinssatz.
  - Befragung, wer eine Strafe von $ 15 (100) um ein Jahr verschieben wollte, war nur bereit $ 20 (118) zu zahlen = 33 % (18) Prozent.
- Ergebnis: Gewinne werden mit einem höheren Zinssatz abgezinst.

| Vorgang | heute | nach 1 Jahr | impliziter Zinssatz |
|---|---|---|---|
| Gewinn (Lotto) | 15 $ | 60 $ | 300 % |
| Verlust/Strafe | 15 $ | 20 $ | 33 % |
| Verlust/Strafe | 100 $ | 118 $ | 18 % |
### Fachliche Aussage
Vorzeicheneffekt: Gewinne werden stärker (höherer Zinssatz) diskontiert als Verluste — Menschen wollen Gewinne lieber sofort, Verluste dagegen aufschieben.
### React-Vorschlag
`AnomalyCard` - Überschrift "Vorzeicheneffekt" + Thaler-Daten als kleine Tabelle (Gewinn vs. Verlust); Ergebnis als Callout.

## Folie 25 - Weitere Zeitanomalien: Größeneffekt ("magnitude effect")
### In der MD vorhanden
Zeilen 352-369: vollständig erfasst (Größeneffekt, Thaler 1981, 15 $ -> 60 $ = 300 %, 250/3000 $ -> 350/4000 $ = 40 % (33 %), Erklärungen: absolute vs. relative Wahrnehmung, Mental Accounting). Hinweis korrigiert: PDF-Seite 25 (Footer "Folie 189") ist die Originalfolie 189, kein Duplikat.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Weitere Zeitanomalien", blau/fett gesetzte Inhaltsüberschrift 'Größeneffekt ("magnitude effect")'. Reine Textfolie (kleinere Schrift, viele Unterpunkte), keine Grafik. Im MD verloren geht nur die blaue Überschrift und die mehrstufige Listenhierarchie. Footer: "Behavioral Finance / CS / Folie 189".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Größeneffekt ("magnitude effect"):
- Menschen diskontieren kleine Beträge stärker als große Beträge.
- Experiment von Thaler (1981):
  - Befragung, Auszahlung eines Lottogewinns zu verschieben: anstatt USD 15 heute war man bereit, nach einem Jahr für USD 60 zu erhalten = 300 % Zinssatz.
  - Bei einem Gewinn von USD 250 (3000) verlangte man USD 350 (4000) = 40 % (33 %) Zinssatz.
- Ergebnis: Mit steigenden Beträgen reduziert sich der Zinssatz, den man als Ausgleich verlangt.

| Gewinn heute | nach 1 Jahr gefordert | impliziter Zinssatz |
|---|---|---|
| 15 $ | 60 $ | 300 % |
| 250 $ | 350 $ | 40 % |
| 3000 $ | 4000 $ | 33 % |

Mögliche Erklärungen:
- Menschen wenden nicht nur relative, sondern auch absolute Wahrnehmung an: Der Unterschied zwischen 100 und 150 erscheint größer als der zwischen 10 und 15 (obwohl relativ identisch).
- Mental Accounting: Kleine Beträge werden auf das mentale Konto "Laufende Posten" gebucht und sofort konsumiert, größere Beträge auf das mentale Sparkonto (höherer Zins für Konsumverzicht).
### Fachliche Aussage
Größeneffekt: Je größer der Betrag, desto niedriger der geforderte implizite Zinssatz; erklärt durch absolute Wahrnehmung und Mental Accounting.
### React-Vorschlag
`AnomalyCard` mit Betrags-Zins-Tabelle (fallende Zinssätze) + Erklärungsblock (absolute Wahrnehmung, Mental Accounting).

## Folie 26 - Weitere Zeitanomalien: Vorliebe für steigende Konsumprofile
### In der MD vorhanden
Zeilen 374-384: vollständig erfasst (Vorliebe für steigende Reihen, Lohnprofile (100,90,80) vs. (80,90,100), vier Erklärungen). Hinweis korrigiert: PDF-Seite 26 (Footer "Folie 190") ist die Originalfolie 190 und zugleich die Abschlussfolie des Kapitels — kein Duplikat.
### Fehlende visuelle Inhalte
Kopfzeilen-Untertitel "Weitere Zeitanomalien", zwei blau/fett gesetzte Überschriften ("Vorliebe für steigende Konsumprofile" und "Mögliche Erklärungen:") sowie der mit Pfeilsymbol (à/->) eingeleitete erste Bulletpunkt. Reine Textfolie, keine Grafik. Footer: "Behavioral Finance / CS / Folie 190".
### Visuelle Rekonstruktion
Nicht erforderlich (Textfolie).
### Inhaltliche Rekonstruktion
Vorliebe für steigende Konsumprofile:
- Vorliebe von Menschen für steigende Reihen.
- Vor die Wahl gestellt zwischen Lohnprofilen über drei Jahre mit Zahlungen (100, 90, 80) oder (80, 90, 100), neigen Probanden dazu, das zweite Profil zu wählen.

Mögliche Erklärungen:
- Verlustaversion (sinkender Lohn = Verlust)
- Nutzen des Konsums hängt vom bisherigen Konsum ab (Menschen gewöhnen sich an Konsumniveau)
- Antizipationsnutzen: man hat etwas, auf das man sich freut
- Geringer Lohn am Anfang = Zwangssparen
### Fachliche Aussage
Trotz gleicher Gesamtsumme bevorzugen Menschen steigende statt fallende Konsum-/Lohnprofile — ein Widerspruch zur reinen DU-Logik, erklärbar über Verlustaversion, Gewöhnung, Antizipationsnutzen und Zwangssparen.
### React-Vorschlag
`AnomalyCard` mit Vergleich zweier Lohnprofile (100,90,80) vs. (80,90,100) als kleines Balken-/Reihen-Visual + Erklärungsliste.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden
- Die zerbrochenen Formeln auf den Folien 8, 10, 11 und 18 (Auf-/Abzinsung, DU-Summenformel, hyperbolische Barwertformel) — sauber per KaTeX/MathJax.
- Die als Bild eingebetteten und in der MD fehlenden Diskontierungstabellen auf Folien 11 (Konsumprofil + Berechnung), 15 (zeitkonsistentes Verhalten), 20 (hyperbolisch, mit Präferenzumkehr) und 23 (Experiment Alternative A/B).
- Die Studiendaten Thaler (1981) auf Folien 17, 24, 25 als echte Tabellen (Dauer/Betrag/Zinssatz).
- Die fachlichen Hervorhebungen: aktiver Agendapunkt (Folie 2), oranger Pfeil auf `i·n` (Folie 18), orange umkreiste Barwerte 909,09 und 530 (Folie 20).

## Kann vereinfacht werden
- Banknoten-Visuals der Folien 4-7 (500-Euro-Schein, einzeln bzw. gestaffelt): rein dekorativ, als dezentes Bild/Icon ausreichend; entscheidend ist der jeweilige Zeithorizont im Fragetext.
- Reine Textfolien (3, 9, 12, 13, 14, 16, 19, 21, 22, 26): keine Grafik-Rekonstruktion nötig; nur Listenhierarchie und fett-/blaugesetzte Stichworte als Markup erhalten.
- Foto-/Akzentleiste der Titelfolie (Folie 1): dekorativ.

## Nicht fachlich relevant
- HBW-Logo, Kopfzeile, Folien-Footer ("Behavioral Finance / CS / Folie 165–190"), Versionskennung "V26-04-23" und Copyright "© 2026 – Hochschule der Bayerischen Wirtschaft".
- Die vier Titel-Fotos und die Banknoten-Abbildungen als Bildmotive an sich.

---

# Datenorientierter React-Hinweis

```js
// Folie 9 – Gründe für die Existenz eines Zinssatzes (Vgl. Beck 2014, S 205 f.)
const zinsGruende = [
  { begriff: 'Unsicherheit', erlaeuterung: 'Unsicherheit über eigenes Leben und zukünftige Ereignisse verlangt nach Entschädigung' },
  { begriff: 'Kompensation für Risiko', erlaeuterung: 'Risikoprämie für Ausfall-, Kredit- oder Default-Risiko' },
  { begriff: 'Opportunitätskosten', erlaeuterung: 'Entschädigung für entgangenen Nutzen der nächstbesten Alternative; Gegenwartspräferenz' },
  { begriff: 'Inflation', erlaeuterung: 'Kaufkraftverlust verlangt nach Inflationsausgleich' },
  { begriff: 'Ungeduld', erlaeuterung: '„Lieber heute als morgen“; kann Gesamtnutzen reduzieren' },
  { begriff: 'Multiple Persönlichkeiten', erlaeuterung: '„heutiges Ich“ vs. „späteres Selbst = Unbekannter“' },
];

// Folie 17 – Thaler (1981): Verzicht auf 15 $ heute
const thalerZeitraeume = [
  { dauer: '1 Monat', kompensation: '20 $', verzinsung: 'ca. 400 % p.a.' },
  { dauer: '1 Jahr', kompensation: '50 $', verzinsung: 'ca. 233 % p.a.' },
  { dauer: '10 Jahre', kompensation: '100 $', verzinsung: 'ca. 21 % p.a.' },
];
```

```js
// Folie 20 – Hyperbolisches Diskontieren: Berechnungstabelle (i = 0,1), Diskontfaktor 1/(1+i·n)
const hyperbolischTabelle = {
  zinssatz: 0.1,
  diskontfaktoren: { n1: 0.9091, n2: 0.8333, n9: 0.5263, n10: 0.5 },
  situation1: {
    option1: { betrag: 1000, jahre: 1, gegenwartswert: 909.09, hervorgehoben: true },  // orange umkreist
    option2: { betrag: 1060, jahre: 2, gegenwartswert: 883.33, hervorgehoben: false },
  },
  situation2: {
    option3: { betrag: 1000, jahre: 9, gegenwartswert: 526.32, hervorgehoben: false },
    option4: { betrag: 1060, jahre: 10, gegenwartswert: 530, hervorgehoben: true },     // orange umkreist
  },
  // Präferenzumkehr: Sit.1 Opt.1 > Opt.2 (sofort), Sit.2 Opt.4 > Opt.3 (warten)
};

// Folie 11 – Hypothetisches Konsumprofil über vier Jahre (DU-Modell, i = 10 %)
const konsumprofil = {
  perioden: ['n=0', 'n=1', 'n=2', 'n=3'],
  zahlungen: [100, 100, 110, 120],
  barwertGesamtnutzen: 371.97,
};
```
