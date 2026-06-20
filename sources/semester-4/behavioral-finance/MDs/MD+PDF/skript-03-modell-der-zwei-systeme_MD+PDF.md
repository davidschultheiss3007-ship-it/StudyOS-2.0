# skript-03-modell-der-zwei-systeme_MD+PDF - Modell der zwei Systeme: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die Markitdown-Datei `skript-03-modell-der-zwei-systeme.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-03-modell-der-zwei-systeme.pdf` verloren gegangen sind (Demonstrationsbilder, Vexierbild, Flussdiagramm, Stroop-Tabelle, große Aufgaben-Layouts). Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Schaubilder, Bildaussagen, Tabellenlogiken oder gestalterischen Hervorhebungen verloren gehen.

**Quelle:** `skript-03-modell-der-zwei-systeme.pdf` mit 16 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, grauer Kopfbereich, Folientitel, Folien-Footer (z. B. "Behavioral Finance / CS / Folie 33") und Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln/Aufgaben, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Demonstrationsbilder als optionale Assets behandeln:** Die Fotos (zorniges Gesicht, Vexier-/Schädelbild, Publikations-Faksimile) sind Demonstrationsobjekte zu System 1 bzw. Belege. Sie sollten als optionale Bilder mit beschreibendem Platzhalter umgesetzt werden, falls keine Lizenz vorliegt - die fachliche Aussage steht im Begleittext.
2. **Große, zentrierte Aufgaben-Layouts erhalten:** Die Rechenaufgabe "17 × 24 = ?" steht auf den Folien bewusst groß und zentriert. Diese visuelle Betonung sollte als eigenes Prompt-/Badge-Element nachgebaut werden, nicht als Fließtext.
3. **Flussdiagramm semantisch nachbauen:** Das Schaubild "Kognitive Leichtigkeit" (Folie 13) trägt fachliche Bedeutung (Ursachen → Zentrum → Wirkungen). Es darf nicht nur als Wortliste dargestellt werden, sondern als gerichtetes Diagramm mit zentralem Knoten.
4. **Stroop-Tabelle datengetrieben rekonstruieren:** Die Wortspalten auf Folie 16 (Groß-/Kleinschreibung, Links-/Rechts-Position) sind der eigentliche Lerninhalt und fehlen in der MD vollständig. Sie sollten datengetrieben als interaktive Übung umgesetzt werden.
5. **Selbsttest-/Aufdecker-Folien interaktiv markieren:** CRT-Aufgaben (Folie 11), Moses-Illusion (Folie 14) und Rosen-Syllogismus (Folie 15) sind Selbsttests mit verzögerter Auflösung. Sie sollten als Quiz-/Reveal-Komponenten umgesetzt werden, nicht als reiner Lesetext.
6. **Farbige Hervorhebungen erhalten:** Blau hervorgehobene Schlüsselsätze (z. B. auf Folie 10) und der aktive Agendapunkt (Folie 2) tragen Bedeutung und sollten als Akzent-Hervorhebung übernommen werden.
7. **Quellenhinweise erhalten:** Quellen wie `Kahneman (2012)`, `Frederick (2005)` und `Eugen von Philippovich (1966)` als `.source-note` beibehalten.
8. **Folienfehler nicht korrigieren:** Inkonsistenzen der Folien (z. B. "Kahnemann" mit Doppel-n, der Titel "automatische Aktivitäten von System 2", "nach eine speziellen Person") werden inhaltlich beibehalten und ggf. als Hinweis kenntlich gemacht.

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Kapiteltitelfolie mit Modul, Kapitelnummer und Titel |
| `CourseAgendaList` | 2 | Gesamtagenda mit hervorgehobenem aktivem Kapitel |
| `SystemDemoSlide` | 3, 6 | Demonstration von System 1 / System 2 mit Stichpunkten und Demo-Element |
| `AmbiguousImagePrompt` | 4 | Vexierbild (Kinder/Schädel) mit optionaler Auflösung |
| `BigPromptSlide` | 5 | Große zentrierte Rechenaufgabe als Einstieg |
| `SystemComparisonCards` | 7 | Gegenüberstellung System 1 vs. System 2 als zwei Karten |
| `ExampleList` | 8, 9 | Beispiellisten für System-1- bzw. System-2-Aktivitäten |
| `KeyPointsCallout` | 10 | Zusammenspiel der Systeme mit farbig hervorgehobenen Kernaussagen |
| `SelfTestQuiz` | 11 | Cognitive Reflection Test mit drei Single-Choice-Fragen |
| `SolutionCallout` | 12 | Lösung/Befunde mit hervorgehobenen Stats (90% / 35%) |
| `CognitiveEaseDiagram` | 13 | Flussdiagramm Ursachen → Leichtigkeit → Wirkungen |
| `RevealQuestionCard` | 14 | Moses-Illusion mit ausklappbarer Auflösung |
| `SyllogismCheckCard` | 15 | Rosen/Blumen-Syllogismus mit Logik-Aufdecker |
| `StroopConflictExercise` | 16 | Stroop-Aufgabe mit zwei Wortspalten und zweistufiger Instruktion |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 2: Das Modell der zwei Systeme nach Kahneman (Titelfolie)

### In der MD vorhanden
Der Titeltext ist vorhanden: "Behavioral Finance", "Kapitel 2", "Das Modell der zwei Systeme nach Kahneman" sowie Versionskennung "V26-03-22". Fußzeile: "Behavioral Finance / CS / Folie 33" und "© 2026 - Hochschule der Bayerischen Wirtschaft".

### Fehlende visuelle Inhalte
Oben eine Reihe von vier dekorativen Fotos (Querformat-Streifen, links nach rechts): (1) ein dunkler Laptop/Tablet mit HBW-Logo auf dem Display, (2) eine lächelnde Frau (Porträt), (3) zwei Personen im Gespräch (Beratungsszene), (4) ein modernes Bürogebäude/Glasfassade. Diese Fotos sind rein dekorativ ohne fachliche Aussage. Rechts oben das HBW-Logo.

### Visuelle Rekonstruktion
Nicht erforderlich (reines Titel-/Layoutbild).

### Inhaltliche Rekonstruktion
- Modul: Behavioral Finance
- Kapitel: 2
- Kapiteltitel: Das Modell der zwei Systeme nach Kahneman

### Fachliche Aussage
Kapiteltitelfolie: leitet das zweite Kapitel ein, das die zwei Denksysteme nach Daniel Kahneman behandelt.

### React-Vorschlag
`ChapterTitleSlide` mit Modulname, Kapitelnummer und Kapiteltitel. Dekorative Fotostreifen optional als statisches Banner; nicht als Lerninhalt.

---

## Folie 2 - Agenda

### In der MD vorhanden
Die komplette nummerierte Agenda (10 Punkte) ist als Text vorhanden. Fußzeile "Folie 34".

### Fehlende visuelle Inhalte
Keine Fachgrafik. Punkt 2 "Das Modell der zwei Systeme nach Kahneman" ist als aktuelles Kapitel blau und fett hervorgehoben (visuell als aktiver Agendapunkt markiert).

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
1. Einführung
2. **Das Modell der zwei Systeme nach Kahneman** (aktiv/hervorgehoben)
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Prospect Theory und ihre Konsequenzen
7. Altersvorsorge und private Finanzplanung
8. Spekulationsblasen an Finanzmärkten
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance

### Fachliche Aussage
Gesamtgliederung der Vorlesung; das aktuelle Kapitel (Punkt 2) wird hervorgehoben.

### React-Vorschlag
`CourseAgendaList` mit `activeIndex`-Prop; aktiver Punkt in Modul-Akzentfarbe hervorgehoben.

---

## Folie 3 - System 1 (Bild des wütenden Gesichts)

### In der MD vorhanden
Der Stichpunktblock zu System 1 ist vollständig vorhanden inklusive Quelle "Kahneman (2012), S. 31". Das Foto fehlt naturgemäß.

### Fehlende visuelle Inhalte
Rechts ein großes Schwarz-Weiß-Foto: Nahaufnahme des Gesichts einer Frau mit aufgerissenem Mund und zornig/aggressivem Ausdruck (offener, schreiender Mund, dunkles Haar). Das Bild dient als Demonstration von System 1: Beim bloßen Betrachten erkennt man automatisch, mühelos und ohne willentliche Steuerung Emotion (Wut/Bedrohung) und antizipiert ein mögliches Verhalten/einen Affekt der Person. Die Quellenangabe "Quelle: Kahneman (2012), S. 31" steht klein unter dem Foto.

### Visuelle Rekonstruktion
```text
[Stichpunkte System 1]      [SW-Foto: zorniges Frauengesicht,
                             offener schreiender Mund]
```

### Inhaltliche Rekonstruktion
System 1
- Was denken Sie?
- Betrachten des Bildes → Beobachten des eigenen Denkens im automatischen Modus
- Spontanes Denkmuster mit Spiegelung und Antizipation von Affekten und Signalen
- Automatisch, schnell, weitgehend mühelos
- Ohne willentliche Steuerung
- Erzeugung komplexer Vorstellungsmuster
- ➢ Schnelles Denken

Quelle: Kahneman (2012), S. 31

### Fachliche Aussage
System 1 verarbeitet einen emotionalen Gesichtsausdruck automatisch, schnell und mühelos: Man "liest" Wut und antizipiert Verhalten, ohne bewusst nachzudenken - das veranschaulicht "schnelles Denken".

### React-Vorschlag
`SystemDemoSlide` mit Stichpunktliste links und Demo-Bild/Platzhalter rechts (Caption "schnelles Denken"). Bild als optionales Asset; bei fehlender Lizenz neutraler Platzhalter mit Beschreibung.

---

## Folie 4 - Und was sehen Sie hier? (Vexierbild / Schädel-Illusion)

### In der MD vorhanden
Nur die Frage "Und was sehen Sie hier?" und die Quelle "Eugen von Philippovich (1966) Kuriositäten/Antiquitäten, S. 32".

### Fehlende visuelle Inhalte
Rechts ein gerahmtes, sepia-/graustufiges historisches Bild (Vexier-/Kippbild im Stil der "All is Vanity"-Schädelillusionen). Die Szene zeigt zwei kleine Kinder, die sich über einen Tisch/eine Schale lehnen, eingefasst von einem dunklen steinernen Torbogen. Betrachtet man das Bild aus Distanz bzw. als Ganzes, fügen sich Torbogen, helle Tischfläche und die dunklen Köpfe der Kinder zu einem menschlichen TOTENSCHÄDEL zusammen (Bogen = Augenhöhlen, helle Fläche = Stirn/Schädeldecke, Kinderköpfe = Mund-/Zahnpartie). Es handelt sich also nicht um eine bloße Genreszene, sondern um eine doppeldeutige Schädel-/Vanitas-Illusion. Unter dem Bild eine Beschriftung in Versalien, gelesen als "BLÜTE UND VERWELKT" (visuell abgelesen, kleine Schrift). Quellenzeile rechts unter dem Bild: "Quelle: Eugen von Philippovich (1966) Kuriositäten/Antiquitäten, S. 32".

### Visuelle Rekonstruktion
```text
[Frage: "Und was sehen Sie hier?"]   [gerahmtes Sepia-Vexierbild:
                                       Nahsicht = zwei Kinder über Schale,
                                       Distanzsicht = menschlicher Totenschädel;
                                       Bildunterschrift "BLÜTE UND VERWELKT"
                                       (visuell abgelesen)]
```

### Inhaltliche Rekonstruktion
- Und was sehen Sie hier? (offene Frage zum Vexier-/Kippbild)
- Bilddeutung 1 (Nahsicht): zwei Kinder an einem Tisch/einer Schale
- Bilddeutung 2 (Distanzsicht): ein Totenschädel
- Bildunterschrift: "BLÜTE UND VERWELKT" (visuell abgelesen) - thematisiert den Doppelsinn Leben/Vergänglichkeit
- Quelle: Eugen von Philippovich (1966) Kuriositäten/Antiquitäten, S. 32

### Fachliche Aussage
Das mehrdeutige Bild (Kinder vs. Totenschädel) zeigt, dass System 1 sofort eine Deutung "anbietet" - die Wahrnehmung kann aber zwischen zwei Interpretationen kippen. Es veranschaulicht, wie automatisch und vorgeprägt Wahrnehmung abläuft und wie unterschiedlich derselbe Reiz interpretiert werden kann.

### React-Vorschlag
`AmbiguousImagePrompt` mit Frage und Bild (oder Platzhalter mit Beschreibung der beiden Deutungen Kinder/Schädel). Optional Toggle "Auflösung anzeigen". Quellenhinweis als `.source-note`.

---

## Folie 5 - 17 × 24 = ? (Rechenaufgabe)

### In der MD vorhanden
Vorhanden: "17 × 24 = ?" und Quelle "Kahneman (2012), S. 32".

### Fehlende visuelle Inhalte
Keine echte Grafik, aber das Layout ist gestalterisch: die Rechenaufgabe "17 × 24 = ?" steht zentriert und sehr groß in fetter schwarzer Schrift mitten auf der ansonsten leeren Folie. Die Quelle "Quelle: Kahneman (2012), S. 32" steht klein rechts unten. Diese visuelle Größe/Zentrierung geht in der MD verloren.

### Visuelle Rekonstruktion
```text
        17 × 24 = ?      (groß, zentriert, fett)
```

### Inhaltliche Rekonstruktion
- Aufgabe: 17 × 24 = ?
- Quelle: Kahneman (2012), S. 32

### Fachliche Aussage
Die Multiplikationsaufgabe ist der Einstieg zur Demonstration von System 2: Im Gegensatz zum mühelosen Gesichtslesen verlangt das Rechnen bewusste, anstrengende mentale Arbeit.

### React-Vorschlag
`BigPromptSlide` mit großem zentriertem Aufgaben-Display und Quellenhinweis.

---

## Folie 6 - System 2 (mit 17 × 24)

### In der MD vorhanden
Der Stichpunktblock zu System 2 ist vorhanden, allerdings durch die Extraktion in der Reihenfolge etwas zerrissen (Aufgabe "17 × 24" und Quelle stehen mitten im Text eingeschoben). Die eigentliche Listenlogik ist erhalten.

### Fehlende visuelle Inhalte
Rechts neben der Stichpunktliste steht "17 × 24" sehr groß und fett (ohne "= ?"), darunter klein "Quelle: Kahneman (2012), S. 32". Das visuell als Block abgesetzte Aufgaben-Element wird in der MD nur als loser Text wiedergegeben.

### Visuelle Rekonstruktion
```text
[Stichpunkte System 2]        17 × 24   (groß, fett)
                              Quelle: Kahneman (2012), S. 32
```

### Inhaltliche Rekonstruktion
System 2
- Was denken Sie?
- Lösen der Multiplikationsaufgabe → Erleben geistiger Arbeit mit Beteiligung des Körpers
- Bewusster Ablauf programmierter Prozesse
- Lenkung der Aufmerksamkeit auf die anstrengenden mentalen Aktivitäten
- Oft subjektives Erleben von Handlungsmacht, Entscheidungsfreiheit und Konzentration
- Konstruktion von Gedanken in geordneter Folge
- Ermüdet schnell
- ➢ Langsames Denken

### Fachliche Aussage
System 2 steht für bewusstes, konzentriertes, anstrengendes Denken in geordneter Folge, das schnell ermüdet - "langsames Denken", hier am Multiplizieren veranschaulicht.

### React-Vorschlag
`SystemDemoSlide` (analog Folie 3) mit Stichpunkten links und großem Aufgaben-Badge "17 × 24" + Quelle rechts. Caption "langsames Denken".

---

## Folie 7 - System 1 vs. System 2 (Definition)

### In der MD vorhanden
Vollständig vorhanden: Überschriften System 1 vs. System 2 und die zugehörigen Stichpunkte.

### Fehlende visuelle Inhalte
Keine Grafik. Reine Textfolie mit blauen Zwischenüberschriften ("System 1 vs. System 2", "System 1", "System 2").

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
System 1 vs. System 2
- Menschliches Denken funktioniert über zwei verschiedene Systeme ("System 1" und "System 2" - Kahnemann (2012)) [Hinweis: auf der Folie ist der Name als "Kahnemann" mit Doppel-n geschrieben]

System 1
- Funktioniert automatisch, schnell und unbewusst
- ist zuständig für rasche, eher unbewusste Handlungen und Entscheidungen ("schnelles Denken")
- Emotionale Menschen, mit denen sich Psychologen häufig auseinandersetzen, arbeitet mit System 1 (und nutzen dabei z. B. Heuristiken)
- Angeborene Fähigkeiten und durch Übung erworbene automatische Routinen

System 2
- Bewusstes, konzentriertes (aber faules) System
- Zuständig für aufwendige Entscheidungs- und Denkprozesse ("langsames Denken")
- Der Homo Oeconomicus arbeitet (ausschließlich) mit System 2

### Fachliche Aussage
Grundlegende Gegenüberstellung: System 1 = automatisch/schnell/unbewusst (Heuristiken), System 2 = bewusst/aufwendig/faul. Der Homo Oeconomicus wäre ein reiner System-2-Akteur.

### React-Vorschlag
`SystemComparisonCards` mit zwei nebeneinanderstehenden Karten (System 1 / System 2) und je einer Merkmalsliste.

---

## Folie 8 - System 1: Typische Beispiele

### In der MD vorhanden
Vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik; reine Aufzählung.

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
System 1 - Typische Beispiele für automatische Aktivitäten von System 1:
- Erkennen, dass ein Gegenstand weiter entfernt ist als ein anderer
- Zuwenden der Quelle eines Geräusches
- Beantworten Sie: 2 + 2 = ?
- angewidertes Gesicht bei grauenvollem Bild ziehen
- Feindseligkeit aus einer Stimme heraushören
- Mit dem Auto über eine leere Straße fahren
- Einfache Sätze verstehen
- Große Wörter auf Reklamefläche lesen

### Fachliche Aussage
Beispiele für mühelose, automatische Leistungen von System 1 (Wahrnehmung, Routine, einfache Reaktionen).

### React-Vorschlag
`ExampleList` (System-1-Beispiele), evtl. als ankreuzbare Beispielkarten.

---

## Folie 9 - System 2: Typische Beispiele

### In der MD vorhanden
Weitgehend vorhanden; ein Listenpunkt ("in schmaler Parklücke einparken") war in der MD versetzt/zerrissen. Auf der Folie steht der Punkt regulär an seiner Position.

### Fehlende visuelle Inhalte
Keine Grafik; reine Aufzählung.

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
System 2 - Typische Beispiele für automatische Aktivitäten von System 2:
- bei Wettlauf auf den Startschuss konzentrieren
- auf eine Stimme in einem lauten, überfüllten Raum konzentrieren
- nach eine speziellen Person Ausschau halten
- schneller gehen, als man es normalerweise tut
- in schmaler Parklücke einparken
- Steuererklärung anfertigen
- Angemessenheit des Verhaltens in sozialer Situation beurteilen
- Gültigkeit einer logischen Beweisführung prüfen

Hinweis: Die Folienüberschrift lautet wörtlich "Typische Beispiele für automatische Aktivitäten von System 2" - dies ist offenbar ein Tippfehler/eine Inkonsistenz in der Folie, da die genannten Beispiele kontrollierte, aufmerksamkeitsfordernde System-2-Tätigkeiten sind (nicht "automatische"). Ebenso steht auf der Folie "nach eine speziellen Person" (grammatikalischer Folienfehler, nicht korrigieren).

### Fachliche Aussage
Beispiele für Tätigkeiten, die bewusste Aufmerksamkeit und Anstrengung erfordern - typische System-2-Leistungen. Der Folientitel "automatische Aktivitäten" ist hier inhaltlich missverständlich (vermutlich vom System-1-Slide übernommen).

### React-Vorschlag
`ExampleList` (System-2-Beispiele) analog Folie 8.

---

## Folie 10 - Zusammenspiel von System 1 und 2

### In der MD vorhanden
Vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine eigentliche Grafik. Gestaltung: einige Schlüsselbegriffe sind farbig (blau) hervorgehoben - "System 1 ... automatische Reaktionen, System 2 ... schwieriger" sowie der Abschlusssatz "Intuitive Denkfehler sind schwer zu verhindern". Diese Hervorhebungen gehen in der MD verloren.

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
- System 1 und 2 arbeiten meistens effizient zusammen.
- System 1 erledigt automatische Reaktionen, System 2 übernimmt, sobald es schwieriger wird.
- Das Gehirn ist faul und nutzt gern System 1, dieses ist jedoch recht anfällig für Fehler durch kognitive Verzerrungen.
- Menschen setzen bei Entscheidung spontan das als zureichend an, was wir wissen und kennen - System 1 springt an.
- Menschen suchen unbewusst nach Orientierung - System 1 erkundet das automatisch.
- Menschen sind schlecht darin, mit Zeit sachlich, logisch und rational umzugehen (wegen System 1).
- Intuitive Denkfehler sind schwer zu verhindern, da System 1 nicht abgestellt werden kann und automatisch reagiert.

### Fachliche Aussage
System 1 und 2 kooperieren arbeitsteilig; weil das "faule" Gehirn System 1 bevorzugt, entstehen systematische, schwer vermeidbare Denkfehler/Verzerrungen.

### React-Vorschlag
`KeyPointsCallout` mit Hervorhebung der zentralen Aussagen (farbige Schlüsselsätze).

---

## Folie 11 - Mentale Anstrengung und Trägheit: Beispiel (CRT-Aufgaben)

### In der MD vorhanden
Vollständig vorhanden inkl. der drei Aufgaben mit Antwortoptionen und Quelle Frederick (2005). Folientitel auf der Folie: "Mentale Anstrengung und Trägheit", Zwischenüberschrift "Beispiel".

### Fehlende visuelle Inhalte
Keine Grafik. Struktur: drei Aufgaben (Schläger/Ball, Maschinen, Seerosen) mit je drei eingerückten Antwortoptionen. Die richtige Lösung ist auf der Folie nicht markiert (offene Selbsttest-Frage).

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
Beispiel
1. Ein Schläger und ein Ball kosten zusammen EUR 1,10. Wenn der Schläger 1 Euro mehr kostet als der Ball, wie viel kostet dann der Ball?
   - EUR 1,05
   - EUR 0,10
   - EUR 0,05
2. Wenn es bei 5 Maschinen 5 Minuten braucht um 5 Produkte zu fertigen, wie lange brauchen 100 Maschinen um 100 Produkte zu fertigen?
   - 1 Minuten
   - 5 Minuten
   - 100 Minuten
3. In einem See wird eine Fläche von Seerosen bedeckt. Da die Seerosen neue Blätter bilden, verdoppelt sich die bedeckte Fläche jeden Tag. Wenn es 48 Tage dauert, bis die Seerosen den gesamten See bedecken, wie lange dauert es, bis die Seerosen den halben See bedecken?
   - 12 Tage
   - 24 Tage
   - 47 Tage

Quelle: Frederick, S. (2005): Cognitive Reflection and Decision Making, in: Journal of Economic Perspectives, Volume 19, S. 25-42

Hinweis: Die Bezeichnung "Cognitive Reflection Test" steht NICHT auf der Folie selbst (nur "Beispiel"); sie ergibt sich aus der Quelle. In der Inhaltlichen Rekonstruktion daher als "Beispiel" wiedergegeben.

### Fachliche Aussage
Klassischer Cognitive Reflection Test (Frederick 2005): System 1 liefert eine schnelle, intuitive (falsche) Antwort, die nur durch Aktivierung von System 2 korrigiert wird.

### React-Vorschlag
`SelfTestQuiz` mit drei Single-Choice-Fragen und Antwortoptionen; Auflösung erst nach Auswahl. Quelle als `.source-note`.

---

## Folie 12 - Mentale Anstrengung und Trägheit: Lösung

### In der MD vorhanden
Vollständig vorhanden. Die Folie enthält rechts ein eingebettetes Bild, das in der MD fehlt.

### Fehlende visuelle Inhalte
Rechts ein kleiner Ausschnitt der wissenschaftlichen Publikation: Titelkopf "Cognitive Reflection and Decision Making", darunter "Journal of Economic Perspectives - Volume 19..." und Autor "Shane Frederick", gefolgt von einem mehrspaltigen, eng gesetzten (kaum lesbaren) Fließtext-Auszug der Originalarbeit. Rein illustrativ als Quellbeleg.

### Visuelle Rekonstruktion
```text
[Lösungstext]      [Faksimile-Ausschnitt:
                    "Cognitive Reflection and Decision Making"
                    Journal of Economic Perspectives, Vol. 19
                    Shane Frederick
                    (kleiner zweispaltiger Fließtext)]
```

### Inhaltliche Rekonstruktion
Lösung
- 90% der Studenten, die den Test in normaler Schrift sahen, machten bei dem Test wenigstens einen Fehler.
- War die Schrift kaum lesbar, fiel dieser Prozentsatz auf 35%.
- Eine starke kognitive Beanspruchung mobilisiert, unabhängig von ihrer Ursache, System 2, das die von System 1 vorgeschlagene intuitive Antwort verwirft.

### Fachliche Aussage
Paradox: Erschwerte Lesbarkeit ("disfluency") reduziert die Fehlerquote, weil die kognitive Anstrengung System 2 aktiviert und die falsche Intuition von System 1 überprüft/verwirft.

### React-Vorschlag
`SolutionCallout` mit den drei Befunden; Publikations-Faksimile optional als dekoratives Bild/Platzhalter. Schlüsselzahlen (90% / 35%) als hervorgehobene Stats.

---

## Folie 13 - System 1 vs. System 2: Kognitive Leichtigkeit (Schaubild)

### In der MD problematisch/fehlend
Die MD enthält nur lose Wortfetzen ohne Struktur. Die Diagrammlogik (Ursachen → Zentrum → Wirkungen) ist verloren. Folientitel ist "System 1 vs. System 2", die blaue Zwischenüberschrift lautet "Kognitive Leichtigkeit".

### Fehlende visuelle Inhalte
Ein horizontales Flussdiagramm mit drei Spalten:
- Links 4 dunkelblaue Kästen (Ursachen/Auslöser von Leichtigkeit, von oben nach unten): "Wiederholte Erfahrung", "Klare Darstellung", "Geprimte Vorstellung", "Gute Laune".
- Mitte ein oranger Kasten "Leichtigkeit" (Zentrum, weiße fette Schrift).
- Rechts 4 dunkelblaue Kästen (Folgen/Wirkungen, von oben nach unten): "Fühlt sich vertraut an", "Erscheint wahr", "Fühlt sich gut an", "Erscheint mühelos".
- Graue Verbindungslinien: von den vier linken Kästen sammeln sich Linien und führen mit einem Pfeil in den orangen "Leichtigkeit"-Kasten; vom orangen Kasten gehen vier Pfeile nach rechts zu den vier Wirkungs-Kästen.

### Visuelle Rekonstruktion
```text
Wiederholte Erfahrung ┐                       ┌─► Fühlt sich vertraut an
Klare Darstellung     ├─►  [ LEICHTIGKEIT ] ──┼─► Erscheint wahr
Geprimte Vorstellung  │       (orange)         ├─► Fühlt sich gut an
Gute Laune            ┘                        └─► Erscheint mühelos
       (Ursachen)         (Zentrum)                  (Wirkungen)
```

### Inhaltliche Rekonstruktion
Kognitive Leichtigkeit
Ursachen kognitiver Leichtigkeit: Wiederholte Erfahrung; Klare Darstellung; Geprimte Vorstellung; Gute Laune.
Wirkungen kognitiver Leichtigkeit: Fühlt sich vertraut an; Erscheint wahr; Fühlt sich gut an; Erscheint mühelos.

### Fachliche Aussage
Kognitive Leichtigkeit ("ease") hat Auslöser (Wiederholung, Klarheit, Priming, Stimmung) und Konsequenzen (Vertrautheit, gefühlte Wahrheit, Wohlbefinden, Mühelosigkeit) - sie ist beidseitig mit System-1-Bewertungen verbunden.

### React-Vorschlag
`CognitiveEaseDiagram`: zentraler oranger Knoten "Leichtigkeit", links Ursachen-Spalte, rechts Wirkungs-Spalte, verbunden durch Pfeile (CSS/SVG). Auf Mobil als zwei gestapelte Listen (Ursachen / Wirkungen) mit Zentrum dazwischen.

---

## Folie 14 - Mentale Anstrengung und Trägheit: Moses-Illusion

### In der MD vorhanden
Vollständig vorhanden. Die Antwortzeile "Antwort: Keine, Noah war das!" ist auf der Folie um 90° gedreht/quergestellt (kleiner gedrehter Texthinweis), wird in der MD aber als normaler Text geführt.

### Fehlende visuelle Inhalte
Keine Grafik; lediglich die hervorgehobene blaue Überschrift "Einfluss der kognitiven Leichtigkeit: 'Moses Illusion'", das blau hervorgehobene Wort "Erklärung:" sowie der gedreht gesetzte Antwort-Spoiler "Antwort: Keine, Noah war das!".

### Visuelle Rekonstruktion
Nicht erforderlich (Layout-/Rotationsdetail; siehe oben).

### Inhaltliche Rekonstruktion
Einfluss der kognitiven Leichtigkeit: "Moses Illusion"
- Wie viele Tiere nahm Moses auf seine Arche?  (Antwort: Keine, Noah war das!)
- Die Vorstellung, dass Tiere in die Arche gehen, ruft einen biblischen Kontext auf und Moses ist in diesem Zusammenhang keine ungewöhnliche Figur.
- Sein Name ist keine Überraschung (anders wäre es gewesen, wenn ich gefragt hätte "Wie viele Tiere nahm George Washington auf seine Arche").
- Das System erkennt also nicht die Anomalie.
- Erklärung: Die Funktion von System 1 besteht darin, ein Modell unserer persönlichen Welt, in dem das repräsentiert ist, was normal ist in unserer Welt, aufrechtzuerhalten und zu aktualisieren.
- System 1 ist auf Assoziationen aufgebaut, die Vorstellungen mit Situationen, Ereignissen und Handlungen verknüpfen.

### Fachliche Aussage
Die "Moses-Illusion" zeigt, dass kognitive Leichtigkeit (vertrauter biblischer Kontext) verhindert, dass System 1 die Anomalie im Namen erkennt - Assoziationen überdecken die Prüfung.

### React-Vorschlag
`RevealQuestionCard` mit Frage und ausklappbarer Auflösung ("Keine, Noah war das!") plus Erklärungstext.

---

## Folie 15 - Mentale Anstrengung und Trägheit: Beispiel (Rosen/Blumen-Syllogismus)

### In der MD vorhanden
Vollständig vorhanden inkl. Quelle "Kahneman (2012), S. 61". Folientitel "Mentale Anstrengung und Trägheit", Zwischenüberschrift "Beispiel".

### Fehlende visuelle Inhalte
Keine Grafik; reine Aufzählung mit Leerzeilen zur optischen Trennung der drei Prämissen/Schlussfolgerung von den Reflexionsfragen.

### Visuelle Rekonstruktion
Nicht erforderlich.

### Inhaltliche Rekonstruktion
Beispiel
- Alle Rosen sind Blumen.
- Einige Blumen verwelken schnell.
- Deshalb verwelken einige Rosen schnell.
- Stimmen Sie spontan zu?
- Auch hier kommt die Schlussfolgerung zuerst (System 1), bevor die Argumente folgen. Es bedarf harter Arbeit, sich über die erste Schlussfolgerung hinwegzusetzen.

Quelle: Kahneman (2012), S. 61

Hinweis: Der Schluss ist logisch ungültig; intuitiv erscheint er jedoch plausibel.

### Fachliche Aussage
Ein logisch ungültiger Syllogismus wirkt intuitiv überzeugend: System 1 zieht den Schluss vor der Prüfung; nur System 2 kann die Ungültigkeit erkennen.

### React-Vorschlag
`SyllogismCheckCard` mit Prämissen, intuitiver Schlussfolgerung und einem "Stimmt das logisch?"-Aufdecker. Quelle als `.source-note`.

---

## Folie 16 - Konflikt der Systeme (Stroop-Aufgabe)

### In der MD problematisch/fehlend
Die MD enthält nur "Konflikt der Systeme" und die Quelle "Kahneman (2012), S. 39". Die gesamte Stroop-Tabelle und die Instruktion fehlen. Folientitel: "Das Modell der zwei Systeme nach Kahneman", blaue Zwischenüberschrift "Konflikt der Systeme".

### Fehlende visuelle Inhalte
Ein hellgrau hinterlegter Kasten mit Instruktionstext und darunter zwei Spalten von Wörtern (Stroop-Test). Instruktion (wörtlich von der Folie abgelesen):
"Als Erstes lesen Sie die beiden Spalten von oben nach unten durch, wobei Sie laut aussprechen, ob das jeweilige Wort in Klein- oder Großbuchstaben geschrieben ist. Wenn Sie die erste Aufgabe erledigt haben, gehen Sie die beiden Spalten abermals durch und erklären bei jedem Wort, ob es links oder rechts der Mitte abgedruckt ist, indem Sie »links« oder »rechts« sagen (oder sich selbst zuflüstern)."

Darunter zwei Wortspalten. Die Wörter sind teils klein-/teils großgeschrieben und zusätzlich teils links bzw. rechts der jeweiligen Spaltenmitte positioniert. Die linke Spalte enthält ausschließlich Richtungswörter (links/rechts), die rechte Spalte ausschließlich Größenwörter (groß/klein) - der Konflikt entsteht zwischen Wortbedeutung und der zu nennenden Eigenschaft (Schreibweise bzw. Position). Die tatsächlich sichtbaren Wörter (visuell abgelesen, Reihenfolge oben → unten):

Linke Spalte: LINKS, links, rechts, RECHTS, RECHTS, links, LINKS
Rechte Spalte: groß, klein, KLEIN, groß, GROSS, klein, KLEIN

Quellenzeile rechts: "Quelle: Kahneman (2012), S. 39".

### Visuelle Rekonstruktion
```text
┌───────────────────────────────────────────────────────────┐
│ Instruktion: 1) Jedes Wort laut benennen, ob es in Klein-  │
│ oder Großbuchstaben geschrieben ist.                       │
│ 2) Beide Spalten erneut durchgehen und je Wort »links«     │
│ oder »rechts« sagen (Position zur Spaltenmitte).           │
│                                                            │
│   Spalte 1 (Richtung)        Spalte 2 (Größe)              │
│   LINKS                          groß                      │
│         links                    klein                     │
│   rechts                              KLEIN                │
│   RECHTS                         groß                      │
│         RECHTS                   GROSS                     │
│         links                         klein                │
│   LINKS                               KLEIN                │
└───────────────────────────────────────────────────────────┘
```
(Wörter, Groß-/Kleinschreibung und Links-/Rechts-Position visuell abgelesen; sie dienen als Stroop-Reiz. Linke Spalte = Richtungswörter, rechte Spalte = Größenwörter.)

### Inhaltliche Rekonstruktion
Konflikt der Systeme
- Aufgabe 1: Jedes Wort laut als "klein" oder "groß" benennen (nach Schreibweise/Buchstabengröße).
- Aufgabe 2: Jedes Wort als "links" oder "rechts" benennen (nach Position relativ zur Spaltenmitte).
- Linke Spalte: Richtungswörter (LINKS, links, rechts, RECHTS, RECHTS, links, LINKS).
- Rechte Spalte: Größenwörter (groß, klein, KLEIN, groß, GROSS, klein, KLEIN).
- Konflikt: Die Wortbedeutung (z. B. "rechts", "groß") widerspricht der zu nennenden Eigenschaft (Position bzw. Schreibweise) → System 1 (automatisches Lesen) kollidiert mit System 2 (kontrollierte Aufgabe).

Quelle: Kahneman (2012), S. 39

### Fachliche Aussage
Die Stroop-artige Aufgabe demonstriert den Konflikt zwischen automatischem Lesen (System 1) und der bewussten Aufgabe (System 2): Das Unterdrücken der automatischen Reaktion kostet Anstrengung und verlangsamt.

### React-Vorschlag
`StroopConflictExercise`: zwei Wortspalten mit gesteuerter Groß-/Kleinschreibung und Links-/Rechts-Position, dazu die zweistufige Instruktion. Wörter datengetrieben (`{ text, case, side }`); linke Spalte Richtungswörter, rechte Spalte Größenwörter. Quelle als `.source-note`.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 13: Schaubild "Kognitive Leichtigkeit" als Flussdiagramm (Ursachen → Leichtigkeit → Wirkungen)
2. Folie 16: Stroop-Aufgabe mit zweistufiger Instruktion und beiden Wortspalten (Richtungs- vs. Größenwörter, Groß-/Kleinschreibung und Position)
3. Folien 5/6: große, betonte Aufgabe "17 × 24" als eigenes Prompt-/Badge-Element
4. Folie 11: CRT-Selbsttest mit drei Single-Choice-Fragen und verzögerter Auflösung
5. Folien 14 und 15: Moses-Illusion und Rosen-Syllogismus als Reveal-/Aufdecker-Karten

## Kann vereinfacht werden

- Demonstrationsbilder auf Folien 3, 4 und das Faksimile auf Folie 12 als optionale Bilder/Platzhalter mit Beschreibung
- Beispiellisten auf Folien 8 und 9 als einfache `ExampleList`
- Gegenüberstellung auf Folie 7 als zwei `SystemComparisonCards`
- farbige Hervorhebungen auf Folie 10 als Akzent-Callout

## Nicht fachlich relevant

- HBW-Logo
- dekorative Fotostreifen der Titelfolie (Folie 1)
- grauer Kopf-/Folientitelbereich und Folien-Footer ("Behavioral Finance / CS / Folie 33" usw.)
- Copyright-Zeile und Versionskennung
- exakte Folienpositionierung und Rotationsdetails (z. B. gedrehter Antwort-Spoiler auf Folie 14)

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
// Folie 13: Kognitive Leichtigkeit (Ursachen → Zentrum → Wirkungen)
export const cognitiveEase = {
  center: 'Leichtigkeit',
  causes: [
    'Wiederholte Erfahrung',
    'Klare Darstellung',
    'Geprimte Vorstellung',
    'Gute Laune',
  ],
  effects: [
    'Fühlt sich vertraut an',
    'Erscheint wahr',
    'Fühlt sich gut an',
    'Erscheint mühelos',
  ],
}

// Folie 11: Cognitive Reflection Test (Antwortoptionen wie auf der Folie; Lösung dort nicht markiert)
export const crtQuestions = [
  {
    prompt:
      'Ein Schläger und ein Ball kosten zusammen EUR 1,10. Wenn der Schläger 1 Euro mehr kostet als der Ball, wie viel kostet dann der Ball?',
    options: ['EUR 1,05', 'EUR 0,10', 'EUR 0,05'],
  },
  {
    prompt:
      'Wenn es bei 5 Maschinen 5 Minuten braucht um 5 Produkte zu fertigen, wie lange brauchen 100 Maschinen um 100 Produkte zu fertigen?',
    options: ['1 Minuten', '5 Minuten', '100 Minuten'],
  },
  {
    prompt:
      'In einem See verdoppelt sich die von Seerosen bedeckte Fläche jeden Tag. Wenn es 48 Tage dauert, bis der gesamte See bedeckt ist, wie lange dauert es bis zum halben See?',
    options: ['12 Tage', '24 Tage', '47 Tage'],
  },
]
```

```js
// Folie 16: Stroop-Aufgabe; case = 'upper' | 'lower', side = 'left' | 'right'
// Linke Spalte: Richtungswörter, rechte Spalte: Größenwörter (visuell abgelesen)
export const stroopColumns = {
  directions: [
    { text: 'LINKS', case: 'upper', side: 'left' },
    { text: 'links', case: 'lower', side: 'right' },
    { text: 'rechts', case: 'lower', side: 'left' },
    { text: 'RECHTS', case: 'upper', side: 'left' },
    { text: 'RECHTS', case: 'upper', side: 'right' },
    { text: 'links', case: 'lower', side: 'right' },
    { text: 'LINKS', case: 'upper', side: 'left' },
  ],
  sizes: [
    { text: 'groß', case: 'lower', side: 'left' },
    { text: 'klein', case: 'lower', side: 'left' },
    { text: 'KLEIN', case: 'upper', side: 'right' },
    { text: 'groß', case: 'lower', side: 'left' },
    { text: 'GROSS', case: 'upper', side: 'left' },
    { text: 'klein', case: 'lower', side: 'right' },
    { text: 'KLEIN', case: 'upper', side: 'right' },
  ],
}
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern die Komponenten steuern, damit spätere Features wie Quiz, Suche und interaktive Übungen möglich bleiben.
