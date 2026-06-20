# skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF - Altersvorsorge und private Finanzplanung: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene Markitdown-Datei `skript-07-altersvorsorge-und-private-finanzplanung.md` um die visuellen Inhalte, die bei der Extraktion aus `skript-07-altersvorsorge-und-private-finanzplanung.pdf` verloren gingen, nur als zerbrochene Tabellen übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Tabellenlogiken, Schaubilder, Icons oder Bildaussagen verloren gehen.

**Quelle:** `skript-07-altersvorsorge-und-private-finanzplanung.pdf` mit 37 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die Kopfzeile, der Folien-Footer ("Behavioral Finance / CS / Folie XXX") und die Copyright-Zeile ("© 2026 – Hochschule der Bayerischen Wirtschaft") sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Diagramme, Formeln, Tabellen, Schaubilder und Icons.

---

## Globale Umsetzungsregeln für React

1. **Zerbrochene Markdown-Tabellen nicht übernehmen:** Mehrere Diagramme dieses Skripts (Organspende, Sparraten-Verteilungen, 401(k)-Teilnahme, Aktienallokation) sind in der MD als zufällige Einzelbuchstaben- oder Wertlisten zerlegt und teils spiegelverkehrt. Diese Inhalte in React als echte Charts (Recharts/SVG) oder strukturierte Tabellen neu aufbauen.
2. **Diagramme semantisch nachbauen:** Balken-, Linien- und gruppierte Balkendiagramme tragen die zentrale fachliche Aussage (Default-Effekte, Choice Overload, Menüeffekte, Trendfolge). Sie dürfen nicht auf reinen Text reduziert werden; Datenwert-Labels und Farbkodierungen (Opt-In/Opt-Out, Vorher/Nachher, Jahre, Serien) erhalten.
3. **Visuell abgelesene Werte als solche markieren:** Werte aus Liniendiagrammen (Folien 13, 16) und einigen Balkendiagrammen sind visuell rekonstruiert und sollten als "ca." bzw. "visuell abgelesen" gekennzeichnet werden.
4. **Farbliche Hervorhebungen erhalten:** Blaue/fette Schlüsselbegriffe, blaue Banner mit weißer Schrift sowie die grün eingefärbten "Lösungen"-Blöcke der Zwischenresumees sind fachliche Signale (Problem vs. Lösung, aktiver Abschnitt) und sollten als Akzentfarben umgesetzt werden.
5. **Gliederungsfolien als wiederverwendbare Schritt-Komponente:** Die Folien 6, 19, 27 zeigen dieselbe dreiteilige Gliederung (I/II/III) mit jeweils aktivem Schritt - als eine Komponente mit `active`-Prop umsetzen.
6. **Bilder/Cartoons als Illustration kennzeichnen:** Stockfotos (Titelfolie), das gealterte "zukünftige Selbst" (Folie 25), die Marmeladenglas-Icons (Folie 12), die Obst/Schokolade-Fotos (Folie 23) und der Börsen-Cartoon (Folie 34) sind teils dekorativ, teils didaktisch - klar trennen.
7. **Quellenhinweise erhalten:** Quellenangaben (Johnson et al. 2003; Iyengar und Lepper 2000; Choi et al.; Benartzi und Thaler; Hershfield et al. 2011; Mitchell et al. 2009 usw.) beibehalten und als `.source-note` darstellen.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `AgendaList` | 2 | Nummerierte Agenda mit hervorgehobenem aktivem Punkt (7) |
| `BulletList` | 3, 7, 11, 14 | Zweistufige Listen mit hervorgehobenen Schlüsselbegriffen |
| `LifecycleHypothesisCard` | 4 | Zwei Bullet-Gruppen plus blaues `CalloutBanner` |
| `DecisionQuestionList` | 5 | Drei farbig hervorgehobene Frage-Header mit Unterpunkten |
| `SectionProgressList` / `SectionDivider` | 6, 19, 27 | Dreiteilige Gliederung mit aktivem Schritt |
| `QuestionPromptCard` | 8 | Frage-Setup mit hervorgehobenem Schlüsselbegriff |
| `PollRevealCard` | 9 | Auswahloptionen plus Antwort-Badge "51 %!" |
| `BarChart` | 10 | Organspende: zweifarbige Balken (Opt-In/Opt-Out) |
| `ChoiceOverloadComparison` | 12 | 6 vs. 24 Marmeladen mit Icon-Reihen und Kennzahlen |
| `LineChart` | 13, 16 | Teilnahmequote über Fondszahl / 401(k) über Betriebszugehörigkeit |
| `GroupedBarChart` | 15 | Vorher/Nachher je Fall (Choi et al.) |
| `BeforeAfterBarChart` | 17 | Schnellanmelde-Option Vorher 9 % / Nachher 34 % |
| `ObstacleSolutionSummary` / `SummaryTwoColumn` | 18, 26, 37 | Zwischenresumee Hindernisse vs. Lösungen (grün) |
| `HeuristicsCallout` / `InvestmentChoiceIntro` | 20, 28 | Einleitung mit Reflexionsfrage und Faustregeln/Faktoren |
| `SavingsRateBarChart` | 21 | Sparraten-Verteilung 2001/2002 mit Spitzen |
| `MatchingEffectChart` | 22 | Sparraten 1999/2001 mit Annotations (Matching, runde Zahlen) |
| `PresentBiasTimeline` | 23 | Zeitstrahl Obst vs. Schokolade, Ergebnis 70 % |
| `AutoIncreaseChart` | 24 | 3-Serien-Balken (Advice/Auto Increase/Neither) |
| `FutureSelfComparison` | 25 | Aktuelles vs. gealtertes Selbst, 172 $ vs. 80 $ |
| `OneOverNTable` | 29 | 1/N-Tabelle mit hervorgehobener Aktienquote |
| `ComplexityEffectList` | 30 | Drei Effekt-Kacheln mit Pfeil-Indikatoren |
| `FormQuoteCallout` | 31 | Blockzitat des Formulartextes mit Link-Optik |
| `FormLinesChart` | 32 | 4 vs. 8 Zeilen, Anteil nach gewählter Fondszahl |
| `KeyFactsList` | 33 | Vier Fakten-Kacheln (26,5 %, >50 %) |
| `CartoonIllustration` | 34 | Börsen-Cartoon "I CAN/CAN'T RETIRE" |
| `EquityAllocationChart` | 35 | New vs. All participants 1992-2002 mit 2002-Marker |
| `SolutionCard` | 36 | Lebenszyklusfonds mit Studien-Kennzahl und Verbesserungen |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 7: Altersvorsorge und private Finanzplanung (Titelfolie)
### In der MD vorhanden
Die MD enthält den Titeltext: "Behavioral Finance", "Kapitel 7", "Altersvorsorge und private Finanzplanung", Versionskennung "V26-05-04" und die Foliennummer 236.
### Fehlende visuelle Inhalte
- Titelfolien-Layout mit hellblauem/grau abgesetztem Inhaltsfeld.
- Vier kleine quasi-quadratische Stockfotos in einer horizontalen Reihe oben: links eine Person, die auf ein Tablet/Gerät mit dem HBW-Logo auf dem Display tippt; eine lächelnde Frau; zwei Personen im Gespräch; rechts ein modernes Gebäude (Glasfassade).
- Reine Layout-Elemente: HBW-Logo oben rechts, graue Trennlinie, Fußzeile "Behavioral Finance / CS / Folie 236" sowie "© 2026 - Hochschule der Bayerischen Wirtschaft". Nicht fachlich relevant.
### Visuelle Rekonstruktion
Keine fachliche Grafik (reine Designfolie).
### Inhaltliche Rekonstruktion
Kapitel 7 - Altersvorsorge und private Finanzplanung. (Teil der Vorlesung Behavioral Finance.)
### Fachliche Aussage
Kapiteltitelfolie; leitet das Thema verhaltensökonomische Aspekte der Altersvorsorge und privaten Finanzplanung ein.
### React-Vorschlag
Kein eigener React-Block nötig (Titelfolie). Inhalt als Kapitelüberschrift/Intro in `TopicHeader` übernehmen.

## Folie 2 - Agenda
### In der MD vorhanden
Die MD enthält die vollständige nummerierte Agenda (Punkte 1-10).
### Fehlende visuelle Inhalte
- Punkt 7 "Altersvorsorge und private Finanzplanung" ist auf der Folie in blauer, fetter Schrift hervorgehoben (markiert das aktuelle Kapitel). Alle übrigen Punkte sind schwarz.
- Layout-Elemente (Logo, blauer Kopfzeilenbalken, graue Trennlinie) ohne fachliche Bedeutung.
### Visuelle Rekonstruktion
nicht erforderlich (einfache Liste).
### Inhaltliche Rekonstruktion
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. **Altersvorsorge und private Finanzplanung** (aktuelles Kapitel, hervorgehoben)
8. Spekulationsblasen an Finanzmärkten
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance
### Fachliche Aussage
Verortet das aktuelle Kapitel (7) innerhalb der Gesamtvorlesung.
### React-Vorschlag
`AgendaList` - nummerierte Liste mit einer Hervorhebungs-Prop für den aktiven Punkt (z. B. `activeIndex={6}`, Akzentfarbe blau).

## Folie 3 - Einführung in die Altersvorsorge
### In der MD vorhanden
Vollständig vorhanden: zwei Hauptbullets mit Unterpunkten.
### Fehlende visuelle Inhalte
Keine Grafiken; reine Textfolie. Beide Haupt-Bullets sowie alle Unterpunkte stehen in schwarzer Schrift (keine farbliche Hervorhebung). Nur Layout-Elemente.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
- Verhaltensökonomische Forschung ist generell wichtig
  - Menschliche Entscheidungsfindung ist anfällig für Verzerrungen (siehe frühere Vorlesungen)
- Verhaltensökonomische Forschung von besonderer Bedeutung für die Herausforderungen der Altersvorsorge
  - Außergewöhnlich langer Anlagehorizont
  - Begrenzte Lernmöglichkeiten
  - Menschen mit geringen oder fehlenden Kenntnissen über Finanzmärkte
  - Spar- und Anlageentscheidungen
### Fachliche Aussage
Altersvorsorge ist ein besonders anfälliges Feld für Verhaltensverzerrungen, weil der Anlagehorizont extrem lang ist, Lernmöglichkeiten fehlen und viele Menschen finanzielles Wissen vermissen lassen.
### React-Vorschlag
`BulletList` mit zwei Ebenen (nested list).

## Folie 4 - Lebenszyklus-Hypothese
### In der MD vorhanden
Text vollständig vorhanden, inkl. Kernaussagen, empirischer Belege und des Schlusssatzes "Argumente gegen das neoklassische Modell".
### Fehlende visuelle Inhalte
- Der Schlusssatz "Argumente gegen das neoklassische Modell" ist auf der Folie als breiter, kräftig blau (Mittelblau) hinterlegter Balken mit zentrierter weißer Schrift dargestellt (Hervorhebungs-Banner unter den beiden Bullet-Gruppen), nicht als normaler Text. (Hinweis: der Banner-Text endet ohne Doppelpunkt/ohne Fragezeichen.)
- Die beiden Hauptpunkte ("Kernaussagen des neoklassischen Modells:" und "Empirische Belege:") sind fett dargestellt.
### Visuelle Rekonstruktion
```
[ KERNAUSSAGEN DES NEOKLASSISCHEN MODELLS: ]
   - Buckelförmiges Alterssparprofil ...
   - Form der Konsumprofile unabhängig von Einkommensprofilen ...
[ EMPIRISCHE BELEGE: ]
   - "Ältere" Haushalte: positive Sparquoten ...
   - Konsumprofil stark vom Einkommensprofil beeinflusst
+============================================================+
|   Argumente gegen das neoklassische Modell  (blauer Balken,|
|                                              weiße Schrift) |
+============================================================+
```
### Inhaltliche Rekonstruktion
Kernaussagen des neoklassischen Modells:
- Buckelförmiges Alterssparprofil (angesammeltes Vermögen wird nach dem Eintritt in den Ruhestand verbraucht).
- Die Form der Konsumprofile sollte unabhängig von der Form der Einkommensprofile sein, sofern das Konsumniveau konstant bleibt.

Empirische Belege:
- "Ältere" Haushalte weisen tendenziell positive Sparquoten auf - kein Abbau von Ersparnissen im Ruhestand.
- Das Konsumprofil wird stark vom Einkommensprofil beeinflusst.

Schlussbanner: "Argumente gegen das neoklassische Modell"
### Fachliche Aussage
Die empirischen Befunde (positive Sparquoten im Alter, Kopplung von Konsum an Einkommen) widersprechen den Vorhersagen der neoklassischen Lebenszyklus-Hypothese.
### React-Vorschlag
`LifecycleHypothesisCard` - zwei Bullet-Gruppen plus eine `CalloutBanner`-Komponente (blau, weiße zentrierte Schrift) für die Schlussaussage.

## Folie 5 - Die Altersvorsorge bringt viele Entscheidungen mit sich
### In der MD vorhanden
Vollständig vorhanden: drei Frageblöcke mit Unterpunkten.
### Fehlende visuelle Inhalte
Keine Grafiken. Die drei Leitfragen ("Soll man einem Sparplan beitreten?", "Wie hoch soll der Beitrag sein?", "Wie soll man investieren?") sind als blaue, fette Bullet-Überschriften gesetzt, die jeweiligen Unterpunkte schwarz. Nur Layout-Elemente sonst.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
- **Soll man einem Sparplan beitreten?**
  - Steuerliche Vergünstigungen, Arbeitgeberzuschüsse…
- **Wie hoch soll der Beitrag sein?**
  - Die Sparquote festlegen, um den Konsum über den Lebenszyklus hinweg zu glätten
  - Anlagerisiko, Langlebigkeitsrisiko, Ertragsrisiko, Gesundheitsrisiko…
- **Wie soll man investieren?**
  - Sinkende Renditen an den Aktienmärkten, erhöhte Volatilität
  - Erwartungen hinsichtlich künftiger Anlagerenditen beeinflussen wiederum die Sparquoten!
### Fachliche Aussage
Altersvorsorge erfordert drei zentrale, jeweils fehleranfällige Entscheidungen: Beitritt, Beitragshöhe und Anlageform.
### React-Vorschlag
`DecisionQuestionList` - drei farbig hervorgehobene Frage-Header mit eingerückten Unterpunkten.

## Folie 6 - Sparen für den Ruhestand (Gliederung I-III, Fokus I)
### In der MD vorhanden
Vollständig vorhanden: drei nummerierte Leitfragen (I, II, III).
### Fehlende visuelle Inhalte
- Punkt I "Sollte man einem Sparplan beitreten?" ist in blauer, fetter Schrift hervorgehoben (aktueller Abschnitt). II und III schwarz.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
I. **Sollte man einem Sparplan beitreten?** (hervorgehoben)
II. Wieviel soll man einzahlen?
III. Wie soll man anlegen?
### Fachliche Aussage
Kapitelgliederungs-/Übergangsfolie; markiert den Beginn von Teil I (Beitritt zum Sparplan).
### React-Vorschlag
`SectionProgressList` - dreiteilige Gliederung mit aktiv hervorgehobenem Schritt (wiederverwendbar für Folien 6, 19, etc.).

## Folie 7 - Warum sollte man beitreten?
### In der MD vorhanden
Vollständig vorhanden.
### Fehlende visuelle Inhalte
Keine Grafiken; reine Textfolie. Sämtliche Bullets in schwarzer Schrift (keine farbliche Hervorhebung).
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
- Beitragsorientierte Vorsorgepläne (DC) sind ein attraktives Sparinstrument:
  - Übertragbarkeit und Flexibilität
  - Steuervorteile
  - Zuschuss des Arbeitgebers
- Wir würden erwarten, dass sich jeder anmeldet, aber:
  - Die Menschen sind sehr ungeduldig
  - Personen mit Liquiditätsengpässen
### Fachliche Aussage
Beitragsorientierte (DC-)Pläne sind objektiv attraktiv; trotzdem melden sich viele nicht an - aus Ungeduld (Gegenwartspräferenz) und wegen Liquiditätsengpässen.
### React-Vorschlag
`BulletList` mit zwei Hauptpunkten und Unterpunkten.

## Folie 8 - Ein Beispiel für ein "free lunch" aus Großbritannien
### In der MD vorhanden
Vollständig vorhanden: die Frage und der Hinweis.
### Fehlende visuelle Inhalte
- Im Titel ist "ein 'free lunch'" kursiv gesetzt.
- "Frage:" ist als fette schwarze Überschrift gesetzt; die beiden Punkte darunter sind Bullets.
- Im zweiten Bullet ist "keine Arbeitnehmerbeiträge" in blauer, fetter Schrift hervorgehoben.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
Frage:
- Wie viel Prozent der berechtigten Arbeitnehmer in Großbritannien nehmen an vom Arbeitgeber finanzierten leistungsorientierten Pensionsplänen teil?
- Beachten Sie, dass der Plan vollständig vom Arbeitgeber finanziert wird und **keine Arbeitnehmerbeiträge** anfallen.
### Fachliche Aussage
Aufbau einer rhetorischen Frage: Obwohl die Teilnahme völlig kostenlos ("free lunch") ist, ist die Teilnahmequote überraschend niedrig (Auflösung auf Folie 9).
### React-Vorschlag
`QuestionPromptCard` - Frage-Setup mit hervorgehobenem Schlüsselbegriff; Antwort folgt auf der nächsten Folie (interaktiv ausklappbar denkbar).

## Folie 9 - Prozentsatz der Beschäftigten ... (Auflösung: 51 %)
### In der MD vorhanden
Die MD listet die Antwortoptionen (100 %, 90 %, 80 %, 70 %, 60 %, 50 %) und die Auflösung "51 %!" sowie die Quelle, aber unstrukturiert / mit Platzhalterzeichen "q" für die Checkboxen.
### Fehlende visuelle Inhalte
- Titel der Folie (mehrzeilig): "Prozentsatz der Beschäftigten, die an vom Arbeitgeber finanzierten leistungsorientierten Pensionsplänen teilnehmen" (das Wort "teilnehmen" ist unterstrichen).
- Linke Spalte: sechs leere Ankreuz-Kästchen (Checkbox-Symbole), je gefolgt von einer Prozentoption mit Fragezeichen: 100 %?, 90 %?, 80 %?, 70 %?, 60 %?, 50 %?
- Rechts mittig in der Folie: ein großes, dick blau umrandetes Oval/Ellipse mit der zentrierten, fetten schwarzen Aufschrift "51 %!" (die Auflösung der Frage).
- Quelle unten links (klein): "Quellen: David Blake; DWP".
### Visuelle Rekonstruktion
```
[ ] 100 %?
[ ]  90 %?                       .-----------.
[ ]  80 %?                      (             )
[ ]  70 %?                      (    51 %!    )   <- blau umrandetes Oval
[ ]  60 %?                      (             )
[ ]  50 %?                       '-----------'

Quellen: David Blake; DWP
```
### Inhaltliche Rekonstruktion
Antwortoptionen (Auswahl): 100 % / 90 % / 80 % / 70 % / 60 % / 50 %
Auflösung: **51 %** der berechtigten Arbeitnehmer nehmen teil - obwohl die Teilnahme komplett vom Arbeitgeber finanziert wird (kostenlos).
Quelle: David Blake; DWP
### Fachliche Aussage
Selbst bei einem vollständig kostenlosen ("free lunch") leistungsorientierten Plan nimmt nur rund die Hälfte (51 %) der Berechtigten teil - ein starker Beleg für Trägheit/Status-quo-Bias.
### React-Vorschlag
`PollRevealCard` - Liste von Auswahloptionen plus eine hervorgehobene Antwort-Badge (Oval/Pill, blaue Umrandung) "51 %!"; ggf. Reveal-Interaktion.

## Folie 10 - Hindernis Nr. 1: Trägheit ist eine mächtige Kraft! (Organspende-Diagramm)
### In der MD problematisch/fehlend
Die MD enthält den Titel und die Überschrift "Zustimmungsraten zur Organspende" sowie verstreute Prozentwerte (98%, 86%, 28%, 17%, 12%, 4%, mehrere 100%), aber das Balkendiagramm ist komplett zerbrochen: Ländernamen sind in zufällige Einzelbuchstaben-Tabellen zerlegt und Werte sind keinem Land zugeordnet. Die Zuordnung Land/Wert/Opt-In-vs-Opt-Out fehlt.
### Fehlende visuelle Inhalte
- Vertikales Balkendiagramm mit blauer, fetter Überschrift "Zustimmungsraten zur Organspende".
- Legende (kleine Quadrate, links über der Balkengruppe): dunkelblau = "Opt-In", hellblau = "Opt-Out".
- 11 Balken (Länder von links nach rechts), Datenwerte als Labels oben über den Balken. Die ersten vier Länder (Opt-In) haben sehr niedrige Balken, die übrigen sieben (Opt-Out) nahezu volle Balken:
  - Dänemark: 4 % (Opt-In) - sehr niedriger Balken
  - Niederlande: 28 % (Opt-In, dunkelblau)
  - Großbritannien: 17 % (Opt-In, dunkelblau)
  - Deutschland: 12 % (Opt-In, dunkelblau)
  - Österreich: 100 % (Opt-Out, hellblau)
  - Belgien: 98 % (Opt-Out, hellblau)
  - Frankreich: 100 % (Opt-Out, hellblau)
  - Ungarn: 100 % (Opt-Out, hellblau)
  - Polen: 100 % (Opt-Out, hellblau)
  - Portugal: 100 % (Opt-Out, hellblau)
  - Schweden: 86 % (Opt-Out, hellblau)
  (Hinweis: Der Dänemark-Balken ist so niedrig, dass die exakte Farbe schwer ablesbar ist; laut Legende/Systemzuordnung gehört Dänemark zu den Opt-In-Ländern, also dunkelblau.)
- Ländernamen auf der X-Achse sind schräg (ca. 45°) gedreht beschriftet.
- Quelle unten links: "Quelle: Johnson et al. (2003)".
### Visuelle Rekonstruktion
```
Zustimmungsraten zur Organspende
[ Opt-In = dunkelblau ]   [ Opt-Out = hellblau ]

100% |                  ██   ██  ██  ██  ██  ██       (100/98/100/100/100/100)
 86% |                                          ██    Schweden
     |          ██
 28% |          ██
 17% |          ██  ██
 12% |      ▆   ██  ██
  4% |  ▁   ▆   ██  ██  ██  ██  ██  ██  ██  ██  ██
     +--------------------------------------------------
       DK  NL  GB  DE  AT  BE  FR  HU  PL  PT  SE
       <--- Opt-In --->  <-------- Opt-Out -------->
```
### Inhaltliche Rekonstruktion
| Land | Zustimmungsrate | System |
|---|---|---|
| Dänemark | 4 % | Opt-In |
| Niederlande | 28 % | Opt-In |
| Großbritannien | 17 % | Opt-In |
| Deutschland | 12 % | Opt-In |
| Österreich | 100 % | Opt-Out |
| Belgien | 98 % | Opt-Out |
| Frankreich | 100 % | Opt-Out |
| Ungarn | 100 % | Opt-Out |
| Polen | 100 % | Opt-Out |
| Portugal | 100 % | Opt-Out |
| Schweden | 86 % | Opt-Out |

Quelle: Johnson et al. (2003)
### Fachliche Aussage
Der Default (Opt-In vs. Opt-Out) entscheidet bei der Organspende dramatisch über die Zustimmungsrate: Opt-In-Länder ~4-28 %, Opt-Out-Länder ~86-100 %. Trägheit/Status-quo-Bias ist eine mächtige Kraft.
### React-Vorschlag
`BarChart` (Recharts) mit zweifarbiger Kodierung (Opt-In dunkelblau / Opt-Out hellblau), Datenwert-Labels über den Balken, gruppiert nach System; Quellen-Fußnote via `.source-note`.

## Folie 11 - Hindernis Nr. 1: Trägheit und Default-Effekte
### In der MD vorhanden
Vollständig vorhanden inkl. vollständiger Quellenliste.
### Fehlende visuelle Inhalte
- "Default-Effekte" im ersten Bullet ist blau/fett hervorgehoben.
- Sonst nur Textliste; keine Grafik.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
- **Default-Effekte** stellen "eines der robustesten Ergebnisse in der angewandten Wirtschaftsliteratur der letzten 10 Jahre" dar.
- Default-Effekte wurden in einer Vielzahl unterschiedlicher Kontexte dokumentiert:
  - Organspenden
  - Auswahl von Auto-Optionen
  - Kfz-Versicherungsschutz
  - Internet-Datenschutzeinstellungen
  - Altersvorsorge

Quelle: Della Vigna (2008): ((Della Vigna, 2008), (Johnson und Goldstein, 2003), (Park et al., 2003), (Johnson et al., 1993), (Johnson et al., 2003), (Madrian und Shea, 2001))
### Fachliche Aussage
Default-Effekte sind ein extrem robustes, kontextübergreifend belegtes Phänomen - von Organspenden über Versicherungen bis zur Altersvorsorge.
### React-Vorschlag
`BulletList` mit hervorgehobenem Schlüsselbegriff; Quellen als `.source-note`.

## Folie 12 - Hindernis Nr. 2: Eine größere Auswahl ist attraktiv (60% gegenüber 40%), aber... lähmend (3 zu 30) (Marmeladen-Experiment)
### In der MD problematisch/fehlend
Die MD enthält den Titel, die beiden Erklärblöcke ("Begrenzte Auswahl" / "Umfangreiche Auswahl") mit Zahlen und die Quelle. Die beiden Bildgruppen (Marmeladengläser-Icons "6 JAMS" / "24 JAMS") sind in der MD nur als Textfragmente erkennbar; ihre visuelle Bedeutung (Mengenkontrast) fehlt.
### Fehlende visuelle Inhalte
- Linke Seite, oben: fette Beschriftung "6 JAMS" mit einer kleinen einzelnen Reihe von ca. 6 Marmeladenglas-Icons (begrenztes Sortiment).
- Linke Seite, unten: fette Beschriftung "24 JAMS" mit mehreren Reihen / einem großen Block von ca. 24 Marmeladenglas-Icons (großes Sortiment, visuell deutlich mehr Gläser).
- Rechte Seite: zwei Erklärblöcke mit fetten Überschriften "Begrenzte Auswahl:" und "Umfangreiche Auswahl:".
- Quelle unten links: "Quelle: Iyengar und Lepper (2000)".
### Visuelle Rekonstruktion
```
6 JAMS    [jam][jam][jam][jam][jam][jam]
24 JAMS   [jam][jam][jam][jam][jam][jam][jam][jam]
          [jam][jam][jam][jam][jam][jam][jam][jam]
          [jam][jam][jam][jam][jam][jam][jam][jam]
```
### Inhaltliche Rekonstruktion
**Begrenzte Auswahl (6 Sorten):**
- Von 260 Kunden, die vorbeikamen, hielten nur 40 % (104) an.
- Fast 30 % (31) dieser Gruppe kauften anschließend ein Glas Marmelade.

**Umfangreiche Auswahl (24 Sorten):**
- Von 242 Kunden, die vorbeikamen, hielten 60 % (145) an.
- Nur 3 % (4) dieser Gruppe kauften anschließend ein Glas Marmelade.

| Bedingung | Stehen geblieben | Kauf |
|---|---|---|
| Begrenzt (6 Sorten) | 40 % (104 von 260) | 30 % (31) |
| Umfangreich (24 Sorten) | 60 % (145 von 242) | 3 % (4) |

Quelle: Iyengar und Lepper (2000)
### Fachliche Aussage
Große Auswahl wirkt attraktiver (mehr bleiben stehen: 60 % vs. 40 %), führt aber zu Entscheidungslähmung (deutlich weniger Käufe: 3 % vs. 30 %) - "Choice Overload".
### React-Vorschlag
`ChoiceOverloadComparison` - zwei Spalten (6 vs. 24) mit Icon-Reihen (CSS-Grid aus Glas-Icons) plus Kennzahlen; optional kleine Vergleichs-Balken für die zwei Kennziffern.

## Folie 13 - Hindernis Nr. 2: Komplexität und Vermeidung von Entscheidungen (Liniendiagramm)
### In der MD problematisch/fehlend
Die MD enthält Titel, Achsenwerte (80%/70%/60%/50%; 2 7 12 ... 57) und Beschriftungen ("Teilnahmequote", "Anzahl der angebotenen Fonds") sowie die Quelle, aber den Kurvenverlauf selbst nicht. Die Achsenbeschriftung "Teilnahmequote" steht spiegelverkehrt/zerbrochen in der MD.
### Fehlende visuelle Inhalte
- Liniendiagramm in einem rechteckigen Rahmen, fette Überschrift oben mittig: "Teilnahmequote".
- Y-Achse: 50 %, 60 %, 70 %, 80 % (gestrichelte horizontale Hilfslinien bei 60 % und 70 %).
- X-Achse: Beschriftung "Anzahl der angebotenen Fonds", Werte 2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57.
- Eine dicke rote Kurve: startet links bei ca. 75 % (bei 2 Fonds), fällt sanft auf ein Plateau um ca. 69-70 % (ca. 12-27 Fonds), zeigt eine kleine Aufwärtsbeule auf ca. 71 % um 30 Fonds, fällt dann deutlicher auf ca. 65 % (um 37) und sinkt weiter bis ca. 61 % am rechten Rand (ca. 58 Fonds). (Werte visuell abgelesen.)
- Quelle unten links: "Quelle: Iyengar und Kamenica (2010)".
### Visuelle Rekonstruktion
```
              Teilnahmequote
80% |
75% |\
70% |-\____/\____            (kleine Beule ~30 Fonds)
65% |            \___
60% |-               \____
50% +-----------------------------
     2  7 12 17 22 27 32 37 42 47 52 57
       Anzahl der angebotenen Fonds
```
### Inhaltliche Rekonstruktion
- Teilnahmequote ca. 75 % bei 2 angebotenen Fonds (visuell abgelesen).
- Sinkt mit steigender Fondszahl auf ca. 61 % bei rund 58 Fonds (visuell abgelesen).
- Quelle: Iyengar und Kamenica (2010)
### Fachliche Aussage
Je mehr Fonds (Optionen) angeboten werden, desto niedriger die Teilnahmequote - Komplexität führt zur Vermeidung der Entscheidung.
### React-Vorschlag
`LineChart` (Recharts) mit roter Linie, X = Anzahl Fonds, Y = Teilnahmequote (%); gestrichelte Y-Gridlines; Quellen-Fußnote.

## Folie 14 - Lösungsvorschläge
### In der MD vorhanden
Vollständig vorhanden: zwei nummerierte Leitfragen.
### Fehlende visuelle Inhalte
- "Trägheit" (Punkt 1) und "Entscheidungsunfähigkeit" (Punkt 2) sind blau/fett hervorgehoben; der übrige Text der beiden Fragen ist schwarz.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
1. Um **Trägheit** zu überwinden?
2. Um die durch Komplexität bedingte **Entscheidungsunfähigkeit** zu überwinden?
### Fachliche Aussage
Überleitungsfolie: Es folgen Lösungsansätze für die beiden zuvor genannten Hindernisse (Trägheit, komplexitätsbedingte Entscheidungslähmung).
### React-Vorschlag
`BulletList`/`SectionIntro` mit zwei nummerierten Punkten und hervorgehobenen Schlüsselbegriffen.

## Folie 15 - Lösung Nr. 1: Automatische Anmeldung (Vergleichsbalken Fall A / Fall B)
### In der MD problematisch/fehlend
Die MD enthält die Werte 91 %, 88 %, 53 %, 53 % und die Beschriftungen ("Vor der automatischen Anmeldung", "Fall A von Choi et al.", "Fall B von Choi et al.") sowie die beiden Textbullets und die Quelle - aber als zusammenhanglose Fragmente; die Balkenpaar-Struktur fehlt.
### Fehlende visuelle Inhalte
- Gruppiertes Balkendiagramm mit zwei Gruppen ("Fall A von Choi et al.", "Fall B von Choi et al.", fett beschriftet auf der X-Achse).
- Pro Gruppe zwei Balken: grauer Balken = "Vor der automatischen Anmeldung" (53 %); kräftig blauer Balken = nach automatischer Anmeldung (höher).
  - Fall A: grau 53 %, blau 91 %
  - Fall B: grau 53 %, blau 88 %
- Legende oben über dem Diagramm: graues Kästchen + fetter Text "Vor der automatischen Anmeldung".
- Werte als Labels über den Balken (53 %, 91 %, 53 %, 88 %).
- Quelle rechts neben dem Diagramm: "Quellen: Choi et al. (2004, 2002)".
- Darunter zwei Textbullets mit fetten Autorennamen.
### Visuelle Rekonstruktion
```
[grau] = Vor der automatischen Anmeldung

         91%             88%
 53%   ┌──┐        53%  ┌──┐
┌──┐   │  │       ┌──┐  │  │
│gr│   │bl│       │gr│  │bl│
└──┘   └──┘       └──┘  └──┘
 Fall A von Choi   Fall B von Choi
       et al.            et al.
```
### Inhaltliche Rekonstruktion
| Fall | Vor autom. Anmeldung | Nach autom. Anmeldung |
|---|---|---|
| Fall A (Choi et al.) | 53 % | 91 % |
| Fall B (Choi et al.) | 53 % | 88 % |

- **Madrian und Shea (2001):** 37 % traten dem Plan per Opt-in bei, während 86 % im Rahmen des Opt-out-Verfahrens beitraten.
- **Benartzi und Thaler (2007):** In 13 Unternehmen wurde ein durchschnittlicher Anstieg von 83 % auf 95 % festgestellt.

Quellen: Choi et al. (2004, 2002)
### Fachliche Aussage
Automatische Anmeldung (Opt-out statt Opt-in) erhöht die Teilnahmequoten massiv: von ca. 53 % auf 88-91 % (Choi), von 37 % auf 86 % (Madrian/Shea), von 83 % auf 95 % (Benartzi/Thaler).
### React-Vorschlag
`GroupedBarChart` (Recharts) mit zwei Gruppen, je Vorher (grau)/Nachher (blau); darunter `BulletList` für die Studienzitate.

## Folie 16 - Lösung Nr. 1: Automatische Anmeldung (401(k)-Teilnahme nach Betriebszugehörigkeit)
### In der MD problematisch/fehlend
Die MD enthält Titel, Achsenwerte (100%/80%/.../0%; Monate 0-48), englische Beschriftungen und Legenden-/Kurventexte - aber alles zerbrochen/spiegelverkehrt ("seeyolpme fo noitcarF ..."), Kurvenverläufe und Farbzuordnung fehlen.
### Fehlende visuelle Inhalte
- Liniendiagramm in grauem Panel, fette Überschrift: "401(k) participation by tenure at firm".
- Y-Achse (fette, gedrehte Beschriftung): "Fraction of employees ever participated", Werte 0 % bis 100 % in 20er-Schritten.
- X-Achse (fett): "Tenure at company (months)", Werte 0, 6, 12, 18, 24, 30, 36, 42, 48.
- Drei Kurven (Beschriftung am Diagramm: NUR zwei Inline-Textlabels "Opt-out" und "Opt-in" sichtbar - es gibt KEINE Legende mit "Hired during/before/after automatic enrollment"):
  - Orange Kurve mit Rauten-Markern (◆) = "Opt-out": steigt extrem steil in den ersten ~3 Monaten von ca. 0 % auf ca. 78-80 %, dann nahezu flaches Plateau bei ca. 85 % bis Monat 48. Inline-Label "Opt-out" direkt unterhalb des Plateaus.
  - Grüne Kurve mit Quadrat-Markern (■) = unbeschriftete obere Anstiegskurve: startet bei ca. 13 % (Monat 0) und steigt nahezu linear bis ca. 54 % bei Monat 48.
  - Blaue Kurve mit X-Markern (×) = "Opt-in": startet bei ca. 0-3 %, steigt linear, verläuft etwas unterhalb der grünen Kurve und endet bei ca. 38 % um Monat ~24 (Kurve endet vor dem rechten Rand). Inline-Label "Opt-in" rechts neben dem Kurvenende.
- Vertikal an der linken Seite die Quelle: "Quelle: Madrian und Shea (2001); Choi, Laibson, Madrian, Metrick (2004)".
### Visuelle Rekonstruktion
```
401(k) participation by tenure at firm
100% |
 80% |   ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆  <- Opt-out (orange, Rauten, steiler Sprung)
 60% |  ◆                  ■■■■■  <- grün (unbeschriftet, ~54% bei 48)
 40% | ◆          ■■■■××××        <- Opt-in (blau, X, endet ~Monat 24)
 20% |◆◆    ■■××××
  0% +-------------------------------
     0  6 12 18 24 30 36 42 48
        Tenure at company (months)
```
### Inhaltliche Rekonstruktion
- "Opt-out" (orange, Rauten): rascher Anstieg auf ca. 78-80 % in den ersten ~3 Monaten, Plateau bei ca. 85 % (visuell abgelesen).
- grüne Kurve (auf der Folie unbeschriftet, Quadrate): von ca. 13 % langsam steigend auf ca. 54 % nach 48 Monaten (visuell abgelesen).
- "Opt-in" (blau, X-Marker): langsamer linearer Anstieg von ca. 0-3 % auf ca. 38 %, Kurve endet ca. bei Monat 24 (visuell abgelesen).
- Quelle: Madrian und Shea (2001); Choi, Laibson, Madrian, Metrick (2004)
### Fachliche Aussage
Bei automatischer Anmeldung (Opt-out) erreichen Mitarbeiter sofort eine hohe Teilnahmequote (~80-85 %), während bei Opt-in die Teilnahme nur langsam über die Betriebszugehörigkeit und auf deutlich niedrigerem Niveau ansteigt.
### React-Vorschlag
`LineChart` (Recharts) mit drei Serien (orange/grün/blau), eigene Marker-Formen (Raute/Quadrat/X); nur zwei Inline-Labels "Opt-out"/"Opt-in"; X = Monate Betriebszugehörigkeit.

## Folie 17 - Lösung Nr. 2: Eindeutige, einfache Auswahlmöglichkeiten (Vorher/Nachher-Balken)
### In der MD problematisch/fehlend
Die MD enthält die Bullets zur Schnellanmelde-Option, die Werte 34 % und 9 %, die Beschriftungen "Vorher"/"Nachher", den Diagrammtitel und die Quelle - aber die Balken-Struktur (welcher Wert zu welchem Balken) ist nur aus dem Kontext erschließbar.
### Fehlende visuelle Inhalte
- "Die Schnellanmelde-Option:" als blaue, fette Bullet-Überschrift; im Folientitel ist "einfache" kursiv gesetzt.
- Balkendiagramm mit fettem, zentriertem Titel "Teilnahmequoten (in den ersten 4 Monaten der Beschäftigung)".
- Zwei Balken:
  - "Vorher": grauer, niedriger Balken = 9 %
  - "Nachher": kräftig blauer, deutlich höherer Balken = 34 %
- Werte als Labels über den Balken; "Vorher"/"Nachher" fett unter den Balken.
- Quelle unten links: "Quelle: Choi et al. (2005)".
### Visuelle Rekonstruktion
```
Teilnahmequoten (erste 4 Monate)
                    34%
                   ┌────┐
        9%         │blau│
      ┌────┐       │    │
      │grau│       │    │
      └────┘       └────┘
      Vorher       Nachher
```
### Inhaltliche Rekonstruktion
Die Schnellanmelde-Option:
- 2 % Sparquote
- Voreingestellte Vermögensaufteilung
- "Ja"- oder "Nein"-Entscheidung

| Zeitpunkt | Teilnahmequote (erste 4 Monate) |
|---|---|
| Vorher | 9 % |
| Nachher | 34 % |

Quelle: Choi et al. (2005)
### Fachliche Aussage
Eine vereinfachte "Schnellanmelde"-Option (feste 2 % Sparquote, vordefinierte Allokation, reine Ja/Nein-Entscheidung) steigert die Teilnahmequote in den ersten 4 Monaten von 9 % auf 34 %.
### React-Vorschlag
`BeforeAfterBarChart` - zwei Balken (grau/blau) mit Wert-Labels; darüber `BulletList` der Optionsmerkmale.

## Folie 18 - Zwischenresumee: I. Sollte man einem Sparplan beitreten?
### In der MD vorhanden
Vollständig vorhanden: Hindernisse und Lösungen.
### Fehlende visuelle Inhalte
- Der Folientitel ist zweizeilig: "Zwischenresumee" (groß) mit Untertitel "I. Sollte man einem Sparplan beitreten?".
- "Hindernisse:" als fette schwarze Überschrift mit zwei schwarzen Bullets.
- "Lösungen" als fette grüne Überschrift, die beiden Lösungs-Bullets sind ebenfalls in grüner Schrift (farbliche Trennung: Probleme = schwarz, Lösungen = grün). Hinweis: "Lösungen" steht ohne Doppelpunkt, "Hindernisse:" mit Doppelpunkt.
### Visuelle Rekonstruktion
nicht erforderlich (farbcodierte Liste).
### Inhaltliche Rekonstruktion
Hindernisse:
- Trägheit und Status quo
- Komplexität und Vermeidung von Entscheidungen

Lösungen (grün):
- Automatische Anmeldung
- Eindeutige (einfache) Auswahlmöglichkeiten
### Fachliche Aussage
Zusammenfassung Teil I: Die Hindernisse beim Sparplan-Beitritt (Trägheit, Komplexität) lassen sich durch automatische Anmeldung und vereinfachte Auswahl überwinden.
### React-Vorschlag
`ObstacleSolutionSummary` - zweiblockige Liste, Probleme neutral/schwarz, Lösungen in grüner Akzentfarbe.

## Folie 19 - Sparen für den Ruhestand (Gliederung, Fokus II)
### In der MD vorhanden
Vollständig vorhanden: drei nummerierte Leitfragen.
### Fehlende visuelle Inhalte
- Punkt II "Wieviel soll man einzahlen?" ist blau/fett hervorgehoben (aktueller Abschnitt); I und III schwarz.
### Visuelle Rekonstruktion
nicht erforderlich.
### Inhaltliche Rekonstruktion
I. Sollte man einem Sparplan beitreten?
II. **Wieviel soll man einzahlen?** (hervorgehoben)
III. Wie soll man anlegen?
### Fachliche Aussage
Übergangsfolie zu Teil II (Beitragshöhe / Sparrate).
### React-Vorschlag
`SectionProgressList` - dieselbe Gliederungskomponente wie Folie 6, jetzt mit aktivem Schritt II.

## Folie 20 - Wie wählen die Teilnehmer die Sparbeiträge aus?
### In der MD vorhanden
Vollständig vorhanden (Zeilen 268–278): USC-Beispiel (weniger als eine Stunde für die Auswahl), Frage "Welche Sparrate würden Sie wählen?", drei Faustregeln (Runde Zahlen, Maximal zulässiger Beitrag, Beiträge zum maximalen Arbeitgeberzuschuss). (Footer der Folie: "Folie 255".)
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik. Layout: Aufzählung mit drei Hauptpunkten; die mittlere Frage "Welche Sparrate würden Sie wählen?" ist blau und fett hervorgehoben (Frage an das Publikum).
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
- Laut Angaben von Dozenten und Mitarbeitern der USC investieren sie weniger als eine Stunde für ihre Auswahl.
- (blau, fett hervorgehoben) Welche Sparrate würden Sie wählen?
- Die Forschungsergebnisse deuten darauf hin, dass Menschen sich an einfache Faustregeln halten:
  - Runde Zahlen
  - Maximal zulässiger Beitrag
  - Beiträge, um den maximalen Arbeitgeberzuschuss zu erhalten
### Fachliche Aussage
Teilnehmer investieren kaum Zeit in die Wahl ihrer Sparrate und verlassen sich auf naive Faustregeln statt auf eine optimierte Berechnung der Sparquote.
### React-Vorschlag
`HeuristicsCallout` - Einleitungsfolie mit hervorgehobener Reflexionsfrage (Akzentfarbe) und einer kurzen Liste der drei Faustregeln als Chips/Badges.

## Folie 21 - Hindernis Nr. 3: Menüeffekte (1)
### In der MD problematisch/fehlend
Die MD (Zeilen 280–296) enthält Titel, Achsenbeschriftung und die Quelle, aber das Balkendiagramm ist vollständig zerbrochen: Y-Achsenwerte als lose Liste (30%, 25%, 20%, 15%, 10%, 5%, 0%), X-Achsen-Kategorien gespiegelt/verdreht, Legende "2001 2002", Achsentitel ("remhenlieT red lietnA relautnezorP" = "Prozentualer Anteil der Teilnehmer", "Höhe der Sparrate"). Keine Balkenwerte extrahiert.
### Fehlende visuelle Inhalte
Gruppiertes vertikales Balkendiagramm. Y-Achse: "Prozentualer Anteil der Teilnehmer", 0%–30% in 5%-Schritten. X-Achse: "Höhe der Sparrate", Kategorien 1%, 2%, 3%, 4%, 5%, 6%, 7%, 8%, 9%, 10%, 11%, 12%, 13%, 14%, 15%, 16%, 17%, 18%, 20%, 25%, 30%, 35%, 40%, 42%, 100%. Zwei Balken je Kategorie: grau = 2001, blau = 2002 (Legende oben rechts). Markante Spitzen an runden Sparraten: 6% (höchster Balken, beide ca. 28%), 10% (grau ca. 17,5%, blau ca. 20%) und 16% (grau ca. 21%, blau ca. 5,5%); zusätzlich auffällig bei 15% (grau ca. 3,7%, blau ca. 8,2%) und 5% (beide ca. 8%). Die übrigen Raten haben sehr niedrige Balken (meist unter 5%); bei 100% steht nur ein kleiner blauer Balken (ca. 2,5%) ohne grauen Balken. Alle Werte visuell abgelesen.
### Visuelle Rekonstruktion
```
Anteil
30% |              █(6%)
25% |              ██
20% |              ██        ▐(10%)        █(16%, grau)
15% |              ██        ▐▐            █
10% |              ██        ▐▐            █
 5% |  ▌▌ ▌▌ ▌▌ ▌▌ ██ ▌▌ ... ▐▐  ...  ▐(15%) █  ... ▌(100%, nur blau)
 0% +----------------------------------------------------
     1% 2% 3% 4% 5% 6% ... 10% ... 15% 16% ... 100%
     ░=2001 (grau)   █=2002 (blau)
```
### Inhaltliche Rekonstruktion
Markante Häufungen an runden/auffälligen Sparraten (visuell abgelesen):
| Sparrate | 2001 (grau) | 2002 (blau) |
|---|---|---|
| 5 % | ca. 8 % | ca. 8 % |
| 6 % | ca. 28 % | ca. 28 % |
| 10 % | ca. 17,5 % | ca. 20 % |
| 15 % | ca. 3,7 % | ca. 8,2 % |
| 16 % | ca. 21 % | ca. 5,5 % |
| 100 % | – | ca. 2,5 % |
| übrige Raten | meist < 5 % | meist < 5 % |

Quelle: Benartzi und Thaler (2007)
### Fachliche Aussage
Die Verteilung der gewählten Sparraten klumpt an "runden"/auffälligen Werten (5%, 6%, 10%, 15%, 16%) - ein Menüeffekt: Die angebotenen Auswahlmöglichkeiten lenken die Entscheidung, statt einer rationalen Optimierung der Sparquote.
### React-Vorschlag
`SavingsRateBarChart` - gruppiertes Balkendiagramm (recharts oder reines SVG) mit zwei Serien (2001/2002), Hervorhebung der Spitzen bei runden Raten; Quellenfußnote.

## Folie 22 - Hindernis Nr. 3: Menüeffekte (2)
### In der MD problematisch/fehlend
Die MD (Zeilen 298–308) enthält Titel, die Annotationen "Matching-Effekt" und "Effekt runder Zahlen", Y-Werte (4% 3% 2% 1% 0%), X-Kategorien (1%–15%), Legende "1999 / 2001 (Matching bei 4%)" und Quelle. Das Diagramm selbst inkl. Balkenwerte und Pfeilzuordnung ist nicht extrahiert.
### Fehlende visuelle Inhalte
Gruppiertes vertikales Balkendiagramm. Y-Achse: 0%–4% in 1%-Schritten. X-Achse: Sparraten 1% bis 15% (Einzelschritte). Zwei Balken je Kategorie: grau = 1999, blau = 2001 (Matching bei 4%). Zwei Textannotationen mit Pfeilen: "Matching-Effekt" (Pfeil zeigt schräg nach unten links auf den hohen blauen Balken bei 4%), "Effekt runder Zahlen" (drei Pfeile zeigen auf die Balken bei 5%, 10% und 15%). Auffällig: Der blaue Balken (2001) bei 4% springt auf ca. 3,7%, deutlich höher als grau (1999, ca. 0,4%) - der durch das Matching ab 4% ausgelöste Sprung. Werte visuell abgelesen.
### Visuelle Rekonstruktion
```
        Matching-Effekt        Effekt runder Zahlen
              \                /        |        \
 4% |          █(4%,2001)
 3% |          █
 2% |          █                       ▐(10%)        ▐▐(15%)
 1% |  ▌ ▌▌ ▌▌ █  ▌▌ ▌▌ ▌ ▌  ▌  ▐▐      ▐▐            ▐▐
 0% +-----------------------------------------------------
     1% 2% 3% 4% 5% 6% 7% 8% 9% 10% 11% 12% 13% 14% 15%
     ░=1999   █=2001 (Matching bei 4%)
```
### Inhaltliche Rekonstruktion
Auffällige Werte (visuell abgelesen):
| Sparrate | 1999 (grau) | 2001 (blau, Matching bei 4%) | Annotation |
|---|---|---|---|
| 4 % | ca. 0,4 % | ca. 3,7 % | Matching-Effekt |
| 5 % | ca. 1,8 % | ca. 1,8 % | Effekt runder Zahlen |
| 10 % | ca. 1,45 % | ca. 1,65 % | Effekt runder Zahlen |
| 15 % | ca. 1,9 % | ca. 1,85 % | Effekt runder Zahlen |

Quelle: Choi et al. (2001)
### Fachliche Aussage
Die Einführung eines Arbeitgeber-Matchings ab 4 % verschiebt die Sparraten massiv auf genau 4 % (Matching-Effekt), während sich die übrige Häufung an runden Werten (5/10/15 %) zeigt - beides Belege für Menüeffekte und Ankerverhalten.
### React-Vorschlag
`MatchingEffectChart` - gruppiertes Balkendiagramm mit zwei Annotations-Callouts (Pfeile/Labels) für "Matching-Effekt" (bei 4%) und "Effekt runder Zahlen" (5/10/15%).

## Folie 23 - Hindernis Nr. 4: Gegenwartsgerichtete Präferenzen
### In der MD problematisch/fehlend
Die MD (Zeilen 311–324) enthält die Textfragmente "Heute wählen", "nächste Woche essen", "Zeit", die Frage "Wenn Sie heute entscheiden würden, würden sie Obst oder Schokolade für die nächste Woche wählen?", "70 % wählen Schokolade" und die Quelle - jedoch zerrissen und ohne den Zeitstrahl/die Bilder.
### Fehlende visuelle Inhalte
Schaubild mit horizontalem Zeitstrahl: schwarzer Pfeil von links ("Heute wählen") nach rechts ("nächste Woche essen") zur Achsenbeschriftung "Zeit" (kursiv). Links der Fragetext, wobei die Wörter "heute" und "die nächste Woche" rot hervorgehoben sind. Rechts zwei Fotos übereinander: oben ein Foto von Orangen/Mandarinen (steht für "Obst"), darunter eine Lindt "SWISS PREMIUM CHOCOLATE / Milk Chocolate"-Tafel (steht für "Schokolade"). Ein grauer Blockpfeil zeigt von der Schokolade nach rechts auf das Ergebnis "70 % wählen Schokolade".
### Visuelle Rekonstruktion
```
Heute wählen ────────── nächste Woche essen ──▶ Zeit

Fragetext               [Foto: Orangen]
(heute, die nächste
 Woche rot)             [Foto: Lindt Schokolade] ──▶ 70 % wählen Schokolade
```
### Inhaltliche Rekonstruktion
- Entscheidung heute für den Konsum in der nächsten Woche: Obst oder Schokolade?
- Ergebnis: 70 % wählen Schokolade.

Quelle: Read und van Leeuwen (1998)
### Fachliche Aussage
Trotz der zeitlichen Distanz (Konsum erst nächste Woche) entscheiden sich 70 % für die sofort verlockende Option - Illustration gegenwartsgerichteter Präferenzen/hyperbolischer Diskontierung.
### React-Vorschlag
`PresentBiasTimeline` - horizontaler Zeitstrahl mit zwei Wahloptionen (Icons Obst vs. Schokolade) und Ergebnis-Badge "70 % Schokolade"; Schlüsselwörter farblich akzentuiert.

## Folie 24 - Lösung Nr. 3: Automatische Erhöhung
### In der MD problematisch/fehlend
Die MD (Zeilen 327–333) enthält den Studientext (286 Mitarbeiter; N=79/28%, N=162/57%, N=45/15%) und die Quelle. Das Balkendiagramm darunter fehlt vollständig (keine Werte, keine Legende in der MD). **Korrektur gegenüber Entwurf:** Auf der Folie ist NICHT von "USC" die Rede, und die Aufteilung lautet anders als im Entwurf formuliert (siehe unten).
### Fehlende visuelle Inhalte
Gruppiertes vertikales Balkendiagramm mit drei Serien pro Jahr (Legende oben): "Advice" (dunkelblau), "Auto Increase" (hellblau), "Neither" (beige/hellgrau). X-Achse: Jahre 1998, 1999, 2000, 2001, 2002. Über jedem Balken steht der Wert (Sparquoten in %). Auffällig: Die "Auto Increase"-Serie steigt stark über die Jahre (von 3,5% 1998 auf 13,6% 2002), während "Advice" weitgehend konstant bleibt (~8,7–9,1%) und "Neither" leicht bei ~6,2–6,8% verharrt.
### Visuelle Rekonstruktion
```
%
14 |                                    ▒(13,6 Auto)
12 |                          ▒(11,6)
10 |        █(9,1) ▒(9,4)  █▒        █▒
 8 |  █ ▒ ░ █  ░    █  ░    █  ░       █  ░
 6 |  █ ▒ ░
 4 |  █(4,4)
 2 |  █ ▒(3,5)
 0 +-------------------------------------------
    1998   1999   2000   2001   2002
   █=Advice (dunkelblau)  ▒=Auto Increase (hellblau)  ░=Neither (beige)
```
### Inhaltliche Rekonstruktion
Sparquoten nach Gruppe (Werte direkt von der Folie):
| Jahr | Advice | Auto Increase | Neither |
|---|---|---|---|
| 1998 | 4,4 % | 3,5 % | 6,6 % |
| 1999 | 9,1 % | 6,5 % | 6,5 % |
| 2000 | 8,9 % | 9,4 % | 6,8 % |
| 2001 | 8,7 % | 11,6 % | 6,6 % |
| 2002 | 8,8 % | 13,6 % | 6,2 % |

Studientext (wörtlich von der Folie): "Mitarbeiter eines mittelständischen Fertigungsunternehmens im Jahr 1998. Sie alle (286) trafen sich mit einem Finanzberater, woraufhin:
- N = 79 (28 %) seine Empfehlung annahmen
- N = 162 (57 %) das SMarT-Programm annahmen
- N = 45 (15 %) das SMarT-Programm ablehnten"

Quelle: Thaler und Benartzi (2004)
### Fachliche Aussage
Das SMarT-Programm ("Save More Tomorrow", automatische Erhöhung) führt zu einem kontinuierlichen Anstieg der Sparquote über die Jahre, deutlich stärker als bei einmaliger Beratung - automatische Erhöhung überwindet gegenwartsgerichtete Präferenzen.
### React-Vorschlag
`AutoIncreaseChart` - gruppiertes 3-Serien-Balkendiagramm (Advice/Auto Increase/Neither) über 5 Jahre mit Wert-Labels; ergänzt um eine kompakte Studien-Faktenleiste (286 / 28% / 57% / 15%).

## Folie 25 - Lösung Nr. 4: Triff dein "altes" Ich
### In der MD problematisch/fehlend
Die MD (Zeilen 336–342) enthält den Ergebnistext (zukünftiges Selbst: M=172$, SD=214$ vs. aktuelles Selbst: M=80$, SD=130$) und die vollständige Literaturangabe Hershfield et al. (2011). Das zentrale Foto fehlt.
### Fehlende visuelle Inhalte
Ein Foto zeigt nebeneinander dieselbe Frau in zwei Versionen: links das aktuelle (junge) Gesicht, rechts eine "altersprogressierte" (gealterte, graue Haare, Falten) Darstellung desselben Gesichts - die Visualisierung des "zukünftigen Selbst" (age-progressed rendering).
### Visuelle Rekonstruktion
```
[ junges Gesicht ]  [ gealtertes Gesicht ]
   aktuelles Selbst     zukünftiges Selbst
```
### Inhaltliche Rekonstruktion
- Teilnehmer, die mit ihrem zukünftigen Selbst konfrontiert wurden: Einzahlung M = 172 $; SD = 214 $
- Teilnehmer, die mit ihrem aktuellen Selbst konfrontiert wurden: Einzahlung M = 80 $; SD = 130 $
- Effekt: mehr als doppelt so hohe Einzahlung bei Konfrontation mit dem zukünftigen Selbst.

Quelle: Hershfield, H.E., Goldstein, D.G., Sharpe, W.F., Fox, J., Yeykelvis, L., Carstensen, L.L., & Bailenson, J. (2011). Increasing saving behavior through age-progressed renderings of the future self. Journal of Marketing Research, 48, S23-S37.
### Fachliche Aussage
Wer mit einem realistischen Bild seines gealterten Selbst konfrontiert wird, identifiziert sich stärker mit der eigenen Zukunft und spart mehr als doppelt so viel - die Zukunft "greifbar machen" als Lösung gegen gegenwartsgerichtete Präferenzen.
### React-Vorschlag
`FutureSelfComparison` - zweispaltiges Bild/Karten-Layout (aktuelles vs. gealtertes Selbst) mit Ergebnis-Kennzahlen (172$ vs. 80$) als Gegenüberstellung.

## Folie 26 - Zwischenresumee: II. Wie viel soll man einzahlen?
### In der MD vorhanden
Vollständig vorhanden (Zeilen 345–352): Hindernisse (Menüeffekte; Gegenwartsorientierte Präferenzen) und Lösungen (Intelligente Standardeinstellungen und automatische Erhöhung; Die Zukunft greifbarer machen).
### Fehlende visuelle Inhalte
Reine Textfolie. Farbcodierung: Überschrift "Hindernisse:" und die zugehörigen Punkte schwarz/fett (Überschrift fett), Überschrift "Lösungen" und die zugehörigen Punkte grün hervorgehoben.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Hindernisse:
- Menüeffekte
- Gegenwartsorientierte Präferenzen

Lösungen (grün):
- Intelligente Standardeinstellungen und automatische Erhöhung
- Die Zukunft greifbarer machen
### Fachliche Aussage
Zusammenfassung von Teil II: Menüeffekte und Gegenwartspräferenzen verzerren die Höhe der Beiträge; smarte Defaults/Auto-Erhöhung und das Greifbarmachen der Zukunft wirken dem entgegen.
### React-Vorschlag
`SummaryTwoColumn` - Gegenüberstellung "Hindernisse" (neutral) vs. "Lösungen" (grüner Akzent) als zwei Listenspalten.

## Folie 27 - Sparen für den Ruhestand
### In der MD vorhanden
Vollständig vorhanden (Zeilen 355–358): drei nummerierte Leitfragen.
### Fehlende visuelle Inhalte
Reine Gliederungsfolie (Abschnittstrenner). Punkt "III. Wie soll man anlegen?" ist blau und fett hervorgehoben (aktueller Abschnitt), I. und II. in schwarz.
### Visuelle Rekonstruktion
```
I.   Sollte man einem Sparplan beitreten?
II.  Wie viel soll man einzahlen?
III. Wie soll man anlegen?   ← (blau, fett hervorgehoben)
```
### Inhaltliche Rekonstruktion
I. Sollte man einem Sparplan beitreten?
II. Wie viel soll man einzahlen?
III. Wie soll man anlegen? (aktiver Abschnitt)
### Fachliche Aussage
Abschnittsübergang: Nach Beitritt und Beitragshöhe folgt nun die dritte Leitfrage - die Anlageentscheidung.
### React-Vorschlag
`SectionDivider` - Gliederungsfolie mit drei Schritten, aktiver Schritt (III) farblich hervorgehoben.

## Folie 28 - Wie entscheiden sich die Teilnehmer für eine Anlage?
### In der MD vorhanden
Vollständig vorhanden (Zeilen 361–371): naive Anlagestrategien, Frage zur Asset Allocation, drei Einflussfaktoren (Anzahl der Optionen; Präsentation; Form des Arbeitgeberzuschusses).
### Fehlende visuelle Inhalte
Reine Textfolie. Die mittlere Frage "Welche Vermögensaufteilung (Asset Allocation) würden Sie wählen?" ist blau und fett hervorgehoben (Publikumsfrage).
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
- Auch hier scheinen die Teilnehmer naiven Anlagestrategien zu folgen.
- (blau, fett) Welche Vermögensaufteilung (Asset Allocation) würden Sie wählen?
- Es gibt Hinweise darauf, dass die Wahl der Vorsorgepläne beeinflusst wird durch:
  - Die Anzahl der im Plan angebotenen Optionen
  - Wie diese präsentiert werden
  - Die Form des Arbeitgeberzuschusses
### Fachliche Aussage
Auch die Anlageentscheidung folgt naiven Mustern und wird stark durch das Design des Plans (Anzahl/Präsentation der Optionen, Matching-Form) beeinflusst.
### React-Vorschlag
`InvestmentChoiceIntro` - Einleitungsfolie mit hervorgehobener Reflexionsfrage und drei Einflussfaktoren als Liste/Chips.

## Folie 29 - Hindernis Nr. 5: Menüeffekte und die 1/N-Regel
### In der MD problematisch/fehlend
Die MD (Zeilen 374–388) enthält die Tabellenzellen, aber als Bild eingebettet und zerbrochen: Spaltenüberschriften ("Anzahl der festverzinslichen Fonds", "Anzahl der Aktienfonds", "Allokation in Aktien"), die Zeilen "University of California" und "TWA" sind durcheinandergeraten. Der Text zur bedingten 1/N-Heuristik ist vorhanden.
### Fehlende visuelle Inhalte
Vierspaltige Tabelle mit grauem Header (Header fett). Spalten: "Plan", "Anzahl der festverzinslichen Fonds", "Anzahl der Aktienfonds", "Allokation in Aktien" (letzte Spalte mit großer, fetter Schrift, hervorgehoben). Zwei Datenzeilen. Darunter Aufzählung "Bedingte 1/N-Heuristik" (Wort "Bedingte" fett).
### Visuelle Rekonstruktion
```
| Plan                  | # festverz. Fonds | # Aktienfonds | Allokation in Aktien |
| University of Calif.  |        4          |       1       |        34 %          |
| TWA                   |        1          |       5       |        75 %          |
```
### Inhaltliche Rekonstruktion
| Plan | Anzahl der festverzinslichen Fonds | Anzahl der Aktienfonds | Allokation in Aktien |
|---|---|---|---|
| University of California | 4 | 1 | 34 % |
| TWA | 1 | 5 | 75 % |

Bedingte 1/N-Heuristik:
- Die Teilnehmer wählen 3 bis 4 Fonds aus
- Anschließend verteilen sie ihr Geld gleichmäßig

Quelle: Benartzi und Thaler (2001), Huberman und Jiang (2006)
### Fachliche Aussage
Teilnehmer verteilen ihr Geld naiv gleichmäßig (1/N) auf die gewählten Fonds; dadurch hängt die Aktienquote allein vom Verhältnis Aktien-/Anleihefonds im Menü ab (UC 34 % vs. TWA 75 %) - ein reiner Menüeffekt.
### React-Vorschlag
`OneOverNTable` - schlichte Tabelle mit hervorgehobener Aktienquoten-Spalte; darunter Merksatz-Callout zur bedingten 1/N-Heuristik.

## Folie 30 - Hindernis Nr. 5: Menüeffekte und Komplexität
### In der MD vorhanden
Vollständig vorhanden (Zeilen 391–398): "Pro 10 hinzugefügte Fonds" mit drei Effekten (+4 % Geldmarkt; +5,4 % Geldmarkt und Anleihen; -3,1 % bis -4,6 % Wahrscheinlichkeit für Aktienbestände) und Quelle.
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Pro 10 hinzugefügte Fonds:
- Erhöht sich die Allokation im Geldmarkt um 4 %
- Erhöht sich die Allokation in Geldmarkt und Anleihen um 5,4 %
- sinkt die Wahrscheinlichkeit, dass ein Teilnehmer über einige Aktienbestände verfügt, um 3,1 % bis 4,6 %

Quelle: Iyengar und Kamenica (2006)
### Fachliche Aussage
Je mehr Fonds das Menü enthält, desto konservativer legen Teilnehmer an (mehr Geldmarkt/Anleihen, geringere Aktienquote) - Komplexität führt zu Entscheidungsvermeidung und konservativen Defaults.
### React-Vorschlag
`ComplexityEffectList` - drei Effekt-Kacheln mit Pfeil-Indikatoren (+4 % / +5,4 % / -3,1 bis -4,6 %) und Quellenfußnote.

## Folie 31 - Hindernis Nr. 5: Menüeffekte und Anzahl der Zeilen
### In der MD vorhanden
Vollständig vorhanden (Zeilen 401–407): das Zitat des Auswahlformulars ("... geben Sie bitte an, wie Sie Ihre Altersvorsorgebeiträge aufteilen möchten. Sie können bis zu vier Fonds auswählen. (Wenn Sie mehr als vier Fonds auswählen möchten, klicken Sie bitte hier.)") und Quelle.
### Fehlende visuelle Inhalte
Reine Textfolie. Die Formulierungen "klicken Sie" und "hier" sind als blaue unterstrichene Hyperlinks dargestellt (imitieren das echte Web-Formular).
### Visuelle Rekonstruktion
(keine Grafik; Hyperlink-Optik)
### Inhaltliche Rekonstruktion
Zitat des Auswahlformulars: „… geben Sie bitte an, wie Sie Ihre Altersvorsorgebeiträge aufteilen möchten. Sie können bis zu vier Fonds auswählen. (Wenn Sie mehr als vier Fonds auswählen möchten, klicken Sie bitte hier.)“

Quelle: Benartzi und Thaler (2007)
### Fachliche Aussage
Schon die Gestaltung des Formulars (Standard 4 Zeilen, weitere Fonds nur per zusätzlichem Klick) lenkt die Anzahl der gewählten Fonds - die "Anzahl der Zeilen" wirkt als Default/Anker.
### React-Vorschlag
`FormQuoteCallout` - Callout/Blockzitat des Formulartextes mit als Links gestylten Schlüsselwörtern; leitet zur folgenden Datenfolie über.

## Folie 32 - Hindernis Nr. 5: Menüeffekte und Anzahl der Zeilen (Diagramm)
### In der MD problematisch/fehlend
Die MD (Zeilen 410–417) enthält nur Titel, gespiegelte Quelle ("...relahT dnu iztraneB") und keinerlei Diagrammdaten - das Balkendiagramm ist vollständig verloren.
### Fehlende visuelle Inhalte
Gruppiertes vertikales Balkendiagramm in einem hellen Rahmen. Legende oben: "4 lines on form" (orange), "8 lines on form" (blau). X-Achse: "Number of Funds Selected", Werte 1 bis 8. Y-Achse ohne sichtbare Skalenbeschriftung; jeder Balken trägt ein Prozent-Label. Auffällig: Bei 4 Fonds dominiert die orange Serie (4 Zeilen) mit 50 %, während die blaue Serie (8 Zeilen) bei höheren Fondzahlen (5: 20 %, 6: 12 %) stärker ist. Quelle vertikal links: "Benartzi und Thaler (2007)".
### Visuelle Rekonstruktion
```
   ■ 4 lines on form (orange)   ■ 8 lines on form (blau)
50%|                █(4,orange)
40%|
30%|            █(3) ▐(3)   ▐(4 blau 29)
20%|                       ▐(5 blau)
10%| █▐ █▐  █▐         ▐    ▐(6 blau)  ▐ ▐
 0%+----------------------------------------
    1   2   3   4    5    6    7    8
   Number of Funds Selected
```
### Inhaltliche Rekonstruktion
Anteil der Teilnehmer nach gewählter Fondszahl (Werte direkt von der Folie):
| Anzahl Fonds | 4 lines on form (orange) | 8 lines on form (blau) |
|---|---|---|
| 1 | 8 % | 8 % |
| 2 | 10 % | 5 % |
| 3 | 23 % | 19 % |
| 4 | 50 % | 29 % |
| 5 | 4 % | 20 % |
| 6 | 4 % | 12 % |
| 7 | 1 % | 4 % |
| 8 | 1 % | 4 % |

Quelle: Benartzi und Thaler (2007)
### Fachliche Aussage
Die Zahl der vorgegebenen Formularzeilen steuert die Zahl der gewählten Fonds: Bei 4 Zeilen wählen 50 % genau 4 Fonds; bei 8 Zeilen verschiebt sich die Verteilung zu mehr Fonds (5-8) - klarer Beleg für Menüeffekte durch Layout.
### React-Vorschlag
`FormLinesChart` - gruppiertes Balkendiagramm (orange/blau) mit Wert-Labels; visuelle Hervorhebung der 50%-Spitze bei 4 Fonds (4-Zeilen-Formular).

## Folie 33 - Hindernis Nr. 5: Menüeffekte und Unternehmensaktien
### In der MD vorhanden
Vollständig vorhanden (Zeilen 419–429): vier Aussagen (Arbeitgeberzuschuss früher in Unternehmensaktien; Ende 2004 durchschnittlich 26,5 % des Planvermögens; mehr als jeder vierte Arbeitnehmer >50 % in Arbeitgeberaktien; seitdem stetiger Rückgang) und Quelle.
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
- Einige Unternehmen zahlten ihren Arbeitgeberzuschuss früher in Form von Unternehmensaktien.
- Ende 2004 machten Unternehmensaktien durchschnittlich 26,5 % des typischen Planvermögens aus.
- Mehr als jeder vierte Arbeitnehmer hielt mehr als 50 % seines Guthabens in Aktien seines Arbeitgebers.
- Seitdem ist der Anteil der Altersvorsorge in Form von Unternehmensaktien im Laufe der Zeit stetig zurückgegangen.

Quelle: Benartzi und Thaler (2007)
### Fachliche Aussage
Wird der Arbeitgeberzuschuss in Unternehmensaktien gewährt, halten viele Beschäftigte gefährlich hohe Anteile am eigenen Arbeitgeber (Klumpenrisiko) - die Form des Zuschusses verzerrt die Allokation; der Anteil sank später wieder.
### React-Vorschlag
`KeyFactsList` - vier Fakten-Kacheln mit hervorgehobenen Kennzahlen (26,5 %, >50 %, "jeder vierte") und Quellenfußnote.

## Folie 34 - Hindernis Nr. 6: Trendfolge (Extrapolation) [Cartoon]
### In der MD problematisch/fehlend
Die MD (Zeilen 432–434) enthält nur Titel und Footer - der Cartoon ist als Bild eingebettet und gar nicht extrahiert.
### Fehlende visuelle Inhalte
Schwarz-weißer Comic/Cartoon im Rahmen, zentriert auf der Folie. Eine Person sitzt in einem Sessel vor einem Fernseher/Monitor, auf dem eine zackige Börsenkurve mit der Beschriftung "STOCK MARKET" läuft. Aus einer Sprechblase wiederholt sich im Takt der Kursschwankungen der Text "I CAN RETIRE! / I CAN'T RETIRE! / I CAN RETIRE! / I CAN'T RETIRE! ..." - jede Zeile abwechselnd, passend zum Auf und Ab des Kurses.
### Visuelle Rekonstruktion
```
[Person im Sessel vor TV mit zackiger Kurve "STOCK MARKET"]
      "I CAN RETIRE!"
      "I CAN'T RETIRE!"
      "I CAN RETIRE!"
      "I CAN'T RETIRE!" ...
```
### Inhaltliche Rekonstruktion
Cartoon ohne Fließtext; Aussage über die wechselnde Selbsteinschätzung ("Ich kann in Rente gehen / Ich kann nicht in Rente gehen") im Gleichtakt mit den Börsenschwankungen.
### Fachliche Aussage
Karikatur der Trendfolge/Extrapolation: Anleger leiten ihre Ruhestandsfähigkeit unmittelbar aus den jüngsten Kursbewegungen ab und extrapolieren kurzfristige Schwankungen naiv in die Zukunft.
### React-Vorschlag
`CartoonIllustration` - eingebettetes Cartoon-Bild mit kurzer erklärender Bildunterschrift zur Trendfolge/Extrapolation (kein Datenchart).

## Folie 35 - Hindernis Nr. 6: Trendfolge (Extrapolation) [Diagramm]
### In der MD problematisch/fehlend
Die MD (Zeilen 436–516) enthält die Diagrammbeschriftungen und englischen Quelltext (Heuristics and Biases in Retirement Savings Behavior, Figure 2, Panel A/B), aber das eigentliche Diagramm ist als zerbrochene Tabelle/Wertliste extrahiert; Jahre und Werte sind durcheinander. **Korrektur gegenüber Entwurf:** Die Folie selbst enthält KEINE "Panel A/B"-Beschriftung und keinen englischen Quelltext - sie zeigt nur ein Diagramm mit deutschem Titel und der Quelle "Benartzi und Thaler (2007)". Die Panel-A/B-/Figure-2-Angaben stammen ausschließlich aus dem in der MD eingebetteten Quelltext, nicht aus der Folie.
### Fehlende visuelle Inhalte
Gruppiertes vertikales Balkendiagramm. Titel (blau, fett): "Die Aktienallokation neuer Teilnehmer im Vergleich zu allen Planteilnehmern". Y-Achse: "% of new contributions in equities", 50%–80% in 5%-Schritten. X-Achse: Jahre 1992–2002. Zwei Serien (Legende oben links): "New participants" (weiße/leere Balken mit dünnem Rand), "All participants" (schwarze/gefüllte Balken). Werte über jedem Balken. Der weiße Balken 2002 (54 %) ist mit einem orangen Oval/Ring hervorgehoben (markiert den Einbruch der Neu-Allokation nach fallenden Märkten).
### Visuelle Rekonstruktion
```
% in equities
80|        □         □  □     □  □
75|     □  □(74)  □(74)
70|  □     ▮  ▮     ▮  ▮  □(72)□(74)□(70)
65|  □  ▮              ▮     ▮  ▮  ■(67) ■(64)
60|  □  ▮
55|  ■(52)        ...                   (○54 markiert)
50+------------------------------------------------
   1992 93 94 95 96 97 98 99 2000 01 02
   □=New participants  ■=All participants
```
### Inhaltliche Rekonstruktion
Aktienanteil neuer Beiträge (Werte direkt von der Folie):
| Jahr | New participants | All participants |
|---|---|---|
| 1992 | 58 % | 52 % |
| 1993 | 61 % | 53 % |
| 1994 | 59 % | 53 % |
| 1995 | 69 % | 55 % |
| 1996 | 74 % | 57 % |
| 1997 | 74 % | 58 % |
| 1998 | 71 % | 59 % |
| 1999 | 72 % | 63 % |
| 2000 | 74 % | 65 % |
| 2001 | 70 % | 67 % |
| 2002 | 54 % (orange markiert) | 64 % |

Quelle: Benartzi und Thaler (2007)
### Fachliche Aussage
Neue Teilnehmer richten ihre Aktienquote stark nach der jüngsten Marktentwicklung aus: In Hausse-Jahren (Ende 1990er) sehr hohe Aktienanteile, nach dem Markteinbruch 2002 dramatischer Rückgang auf 54 % - während die Quote aller (träger) Teilnehmer kaum schwankt. Beleg für Trendfolge/Extrapolation.
### React-Vorschlag
`EquityAllocationChart` - gruppiertes Balkendiagramm (New vs. All participants, 1992-2002) mit Wert-Labels und Hervorhebung (Ring/Marker) des 2002-Einbruchs bei New participants.

## Folie 36 - Lösung Nr. 5: Automatische Neugewichtung von Fonds
### In der MD vorhanden
Vollständig vorhanden (Zeilen 518–529): Mitchell et al. (2009)-Datensatz (Viertelmillion 401(k)-Teilnehmer, über 250 Pläne, Lebenszyklusfonds), drei Portfolioverbesserungen (höherer Aktienanteil; weniger extreme Allokationen; geringeres nicht-systematisches Risiko) und Hinweis auf Lebenszyklus-/Target-Maturity-Fonds.
### Fehlende visuelle Inhalte
Reine Textfolie, keine Grafik.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
- Mitchell et al. (2009) analysieren einen Datensatz von einer Viertelmillion 401(k)-Teilnehmern von über 250 Plänen, in denen Lebenszyklusfonds eingeführt wurden.
- Teilnehmer, die sich für Lebenszyklusfonds entscheiden, verbessern ihre Portfolios:
  - erhöhen ihren Aktienanteil
  - reduzieren extreme Vermögensallokationen
  - verringern das nicht-systematische Risiko
- Lebenszyklus- oder sog. Target Maturity Funds fallen in diese Kategorie.
### Fachliche Aussage
Lebenszyklus-/Target-Maturity-Fonds übernehmen das Rebalancing automatisch und führen empirisch zu besser diversifizierten, weniger extremen Portfolios - Lösung gegen naive Diversifizierung und Trendfolge.
### React-Vorschlag
`SolutionCard` - Textfolie mit Studien-Kennzahl (Viertelmillion Teilnehmer / >250 Pläne) und drei Verbesserungspunkten als Checkliste.

## Folie 37 - Zwischenresumee: III. Wie soll man anlegen?
### In der MD vorhanden
Vollständig vorhanden (Zeilen 532–538): Hindernisse (Naive Diversifizierung und Menüeffekte; Trendfolge) und Lösung (Automatisches Rebalancing der Fonds).
### Fehlende visuelle Inhalte
Reine Textfolie. Farbcodierung: Überschrift "Hindernisse:" und die zugehörigen Punkte schwarz (Überschrift fett), Überschrift "Lösung" und der zugehörige Punkt grün hervorgehoben.
### Visuelle Rekonstruktion
(keine Grafik)
### Inhaltliche Rekonstruktion
Hindernisse:
- Naive Diversifizierung und Menüeffekte
- Trendfolge

Lösung (grün):
- Automatisches Rebalancing der Fonds
### Fachliche Aussage
Zusammenfassung von Teil III: Naive Diversifizierung, Menüeffekte und Trendfolge verzerren die Anlageentscheidung; automatisches Rebalancing (z. B. via Lebenszyklusfonds) wirkt dem entgegen.
### React-Vorschlag
`SummaryTwoColumn` - Gegenüberstellung "Hindernisse" vs. "Lösung" (grüner Akzent); konsistent mit den anderen Zwischenresumee-Folien.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 10: Organspende-Balkendiagramm (Opt-In/Opt-Out, 11 Länder)
2. Folie 12: Marmeladen-Experiment (Choice Overload, 6 vs. 24)
3. Folie 13: Liniendiagramm Teilnahmequote über Fondszahl
4. Folie 15: Vorher/Nachher-Balken (Fall A/B Choi)
5. Folie 16: 401(k)-Teilnahme nach Betriebszugehörigkeit (drei Kurven)
6. Folie 17: Schnellanmelde-Option Vorher/Nachher (9 % -> 34 %)
7. Folie 21: Sparraten-Verteilung 2001/2002 (Menüeffekte)
8. Folie 22: Sparraten 1999/2001 mit Matching-Effekt-Annotationen
9. Folie 24: Auto-Increase-Diagramm (3 Serien, 1998-2002)
10. Folie 29: 1/N-Tabelle (UC vs. TWA)
11. Folie 32: Formularzeilen-Diagramm (4 vs. 8 lines)
12. Folie 35: Aktienallokation New vs. All participants (1992-2002, 2002-Marker)

## Kann vereinfacht werden

- Zeitstrahl-/Schaubild auf Folie 23 (Obst/Schokolade) als `PresentBiasTimeline` mit Icons
- Bilder auf Folien 1 (Stockfotos), 25 (gealtertes Selbst) und 34 (Cartoon) als Illustration/Bildunterschrift
- Gliederungs-/Übergangsfolien 6, 19, 27 als eine wiederverwendbare Schritt-Komponente
- Zwischenresumees 18, 26, 37 als gemeinsame Zwei-Spalten-Summary (Hindernisse/Lösungen)
- Reine Textfolien (3, 5, 7, 11, 14, 20, 28, 30, 31, 33, 36) als strukturierte Listen/Callouts

## Nicht fachlich relevant

- HBW-Logo
- Kopfzeile / blauer Kopfzeilenbalken / graue Trennlinie
- Folien-Footer ("Behavioral Finance / CS / Folie XXX")
- Copyright-Zeile ("© 2026 - Hochschule der Bayerischen Wirtschaft")
- exakte Folienpositionierung und dekorative Bildästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich im Skript vorhandenen Inhalten):

```js
// Folie 10 - Zustimmungsraten zur Organspende (Johnson et al. 2003)
export const organDonationConsent = [
  { country: 'Dänemark', value: 4, system: 'Opt-In' },
  { country: 'Niederlande', value: 28, system: 'Opt-In' },
  { country: 'Großbritannien', value: 17, system: 'Opt-In' },
  { country: 'Deutschland', value: 12, system: 'Opt-In' },
  { country: 'Österreich', value: 100, system: 'Opt-Out' },
  { country: 'Belgien', value: 98, system: 'Opt-Out' },
  { country: 'Frankreich', value: 100, system: 'Opt-Out' },
  { country: 'Ungarn', value: 100, system: 'Opt-Out' },
  { country: 'Polen', value: 100, system: 'Opt-Out' },
  { country: 'Portugal', value: 100, system: 'Opt-Out' },
  { country: 'Schweden', value: 86, system: 'Opt-Out' },
]

// Folie 12 - Marmeladen-Experiment (Iyengar und Lepper 2000)
export const jamExperiment = [
  { condition: 'Begrenzt (6 Sorten)', stopped: 40, bought: 30 },
  { condition: 'Umfangreich (24 Sorten)', stopped: 60, bought: 3 },
]
```

```js
// Folie 15 - Automatische Anmeldung, Fall A/B (Choi et al. 2004, 2002)
export const autoEnrollmentCases = [
  { label: 'Fall A von Choi et al.', before: 53, after: 91 },
  { label: 'Fall B von Choi et al.', before: 53, after: 88 },
]

// Folie 29 - Bedingte 1/N-Regel (Benartzi und Thaler 2001; Huberman und Jiang 2006)
export const oneOverNPlans = [
  { plan: 'University of California', fixedIncomeFunds: 4, equityFunds: 1, equityAllocation: 34 },
  { plan: 'TWA', fixedIncomeFunds: 1, equityFunds: 5, equityAllocation: 75 },
]

// Folie 35 - Aktienallokation New vs. All participants (Benartzi und Thaler 2007)
export const equityAllocationByYear = [
  { year: 1992, newParticipants: 58, allParticipants: 52 },
  { year: 1993, newParticipants: 61, allParticipants: 53 },
  { year: 1994, newParticipants: 59, allParticipants: 53 },
  { year: 1995, newParticipants: 69, allParticipants: 55 },
  { year: 1996, newParticipants: 74, allParticipants: 57 },
  { year: 1997, newParticipants: 74, allParticipants: 58 },
  { year: 1998, newParticipants: 71, allParticipants: 59 },
  { year: 1999, newParticipants: 72, allParticipants: 63 },
  { year: 2000, newParticipants: 74, allParticipants: 65 },
  { year: 2001, newParticipants: 70, allParticipants: 67 },
  { year: 2002, newParticipants: 54, allParticipants: 64 }, // 2002 New: orange markiert
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern die Chart-/Tabellen-Komponenten steuern, damit spätere Features wie Quiz, Suche und Tooltips möglich bleiben.
