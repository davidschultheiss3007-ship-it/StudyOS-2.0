# skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF - Spekulationsblasen an Finanzmärkten: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die Markitdown-Datei `skript-08-spekulationsblasen-an-finanzmaerkten.md` um die bei der Extraktion aus `skript-08-spekulationsblasen-an-finanzmaerkten.pdf` verloren gegangenen visuellen Inhalte. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Phasen-Schaubilder, Tabellenlogiken, Cartoons oder Diagrammaussagen verloren gehen. Erfasst werden vor allem die Phasenleisten des Kindleberger/Minsky-Modells, die Blasenkurven und die Effekt-Gegenüberstellung.

**Quelle:** `skript-08-spekulationsblasen-an-finanzmaerkten.pdf` mit 21 Folien und die dazugehörige Markitdown-Datei.

**Wichtig:** Wiederkehrende Layout-Elemente wie das HBW-Logo, die Kopfzeile, der Folien-Footer (z. B. „Behavioral Finance / CS / Folie 273“) und die Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme, Formeln, Tabellen, Schaubilder und Icons – hier insbesondere die Phasenleisten, die Blasen-Kurvendiagramme, die Fallbeispiel-Tabellen und die Pro/Contra-Gegenüberstellung.

---

## Globale Umsetzungsregeln für React

1. **Kaputte Markdown-Tabellen nicht übernehmen:** Mehrere Folien (insbesondere die Phasenübersicht Folie 8, die Blasentypen Folie 7 und die Fallbeispiele Folien 15–17, 19) sind in der MD als zerbrochene Tabellen oder verschobene Spaltenzuordnungen extrahiert. Diese Inhalte in React als echte Tabellen, Cards oder Phasen-Komponenten neu aufbauen.
2. **Phasenmodell als wiederverwendbare Komponente:** Das Kindleberger/Minsky-5-Phasen-Modell (Verlagerung → Positives Feedback → Euphorie → Kritische Phase → Abscheu) erscheint auf Folie 8 als Übersicht, auf Folien 9–13 als Einzel-Highlight und auf Folien 15–17, 19 als Fallbeispiel-Raster. Eine zentrale Phasenleiste mit `activePhase`-Prop verwenden.
3. **Diagramme semantisch nachbauen:** Die Blasenkurve nach Kindleberger/Minsky (Folie 14), der Neuer-Markt-Verlauf mit Anomalie-Annotationen (Folie 18) und der Blasenvergleich „Rise and fall of some famous asset bubbles“ (Folie 20) tragen fachliche Bedeutung und fehlen in der MD weitgehend; als SVG-/Chart-Komponenten umsetzen.
4. **Hervorhebungen erhalten:** Blau/fett ausgezeichnete Leitbegriffe (z. B. „Spekulationsblasen“, „Herdentrieb“, die vier Herdentrieb-Treiber, die Effekt-Titel auf Folie 21) und der aktive Agendapunkt (Folie 2) als Akzentfarbe/`font-weight` darstellen.
5. **Pfeile und Feedback-Ketten erhalten:** In der MD als „à“ extrahierte Zeichen stehen für Rechtspfeile (→) in Feedback-Ketten (Folie 4, Folie 5) und sind logisch bedeutsam.
6. **Quellenhinweise erhalten:** Quellen wie „Putnoki (2018)“ (Folie 3), „Quelle: vv / Grafik: FuW, sk“ (Folie 14) und „Elliot Wave International, Yale SOM, St. Louis FRED, GlobalFin, and Convoy analysis“ (Folie 20) beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleHero` | 1 | Kapitel-Titeltemplate mit Modulname, Kapitelnummer, Titel |
| `AgendaList` | 2 | Agenda mit hervorgehobenem aktivem Kapitel |
| `BubbleAnalogyCard` | 3 | Kaugummi-Blasen-Analogie mit Phasen-Icons und Quelle |
| `KeyPointsList` | 4 | Stichpunkte mit Leitbegriff + Inline-`ArrowFlow` |
| `DefinitionWithQuote` | 5 | Definition, Shiller-Blockquote, Le-Bon-`NestedList` |
| `CategoryCards` | 6 | Vier nummerierte Herdentrieb-Kategorien |
| `LabeledRowList` | 7 | Blasentypen-Label-Badges mit Bullet-Listen |
| `PhaseModelTable` | 8-13 | Fünfspaltige Phasenleiste, mit `activePhase` für Detailfolien |
| `BubbleCurveChart` | 14 | Glockenkurve mit fünf Phasen-Annotationen |
| `PhaseCaseStudy` | 15-17, 19 | Phasen-Badges + zugeordnete Fallbeispiel-Bullets |
| `AnomalyAnnotatedChart` | 18 | Neuer-Markt-Indexkurve mit Anomalie-Pins |
| `AssetBubblesComparisonChart` | 20 | Überlagerter Vergleich berühmter Blasen um den Peak |
| `ProsConsColumns` | 21 | Positive vs. negative volkswirtschaftliche Effekte |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 8: Spekulationsblasen an Finanzmärkten

### In der MD vorhanden
Titel vollständig vorhanden: "Behavioral Finance", "Kapitel 8", "Spekulationsblasen an Finanzmärkten", Versionskennung "V26-05-17".

### Fehlende visuelle Inhalte
Reines Titelfolien-Layout. Oben links der Modulname "Behavioral Finance", oben rechts das HBW-Logo. Darunter ein Streifen aus vier dekorativen Fotos (querformatige Bildkacheln: ein Tablet/Bildschirm mit HBW-Logo, eine lächelnde Person, zwei Personen im Gespräch, ein modernes Bürogebäude). Diese Bilder sind rein dekorativ, ohne Fachbezug. Oberhalb der Fotoleiste ein blauer Trennbalken. Fußzeile: links "Behavioral Finance / CS / Folie 273", rechts "© 2026 – Hochschule der Bayerischen Wirtschaft".

### Visuelle Rekonstruktion
Nicht erforderlich (Titelfolie).

### Inhaltliche Rekonstruktion
Kapitelnummer: 8. Kapiteltitel: "Spekulationsblasen an Finanzmärkten".

### Fachliche Aussage
Einstieg in das achte Kapitel der Vorlesung Behavioral Finance zum Thema Entstehung, Verlauf und Folgen von Spekulationsblasen.

### React-Vorschlag
`ChapterTitleHero` – globales Kapitel-Titeltemplate mit Modulname, Kapitelnummer, Titel; dekorative Bildleiste optional als statisches Banner.

---

## Folie 2 - Agenda

### In der MD vorhanden
Vollständige Agenda-Liste mit zehn Punkten ist textlich vorhanden.

### Fehlende visuelle Inhalte
Nur Formatierung verloren: Punkt 8 "Spekulationsblasen an Finanzmärkten" ist auf der Folie blau und fett hervorgehoben (aktueller Kapitelmarker). Alle anderen Punkte sind schwarz.

### Visuelle Rekonstruktion
```text
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Altersvorsorge und private Finanzplanung
>> 8. Spekulationsblasen an Finanzmärkten   <-- aktiv (blau/fett)
9. Kapitalmarktanomalien
10. Behavioral Corporate Finance
```

### Inhaltliche Rekonstruktion
Zehn Kapitel des Moduls; Kapitel 8 ist Gegenstand dieses Skripts.

### Fachliche Aussage
Verortung des Kapitels Spekulationsblasen innerhalb des gesamten Modulaufbaus.

### React-Vorschlag
`AgendaList` mit `activeIndex={7}`; aktiver Punkt über Akzentfarbe (`--color-module-*`) und `font-weight` hervorgehoben.

---

## Folie 3 - Spekulanten und Spekulationsblasen

### In der MD vorhanden
Der erläuternde Fließtext zum Cartoon ist vollständig vorhanden (Phasen der Kaugummiblase: Auslösung, Boom/Euphorie, Crash, Schadensbegrenzung; Analogie Kaugummi=Aktien, Luft=Geld). Quelle "Putnoki (2018)" vorhanden und auf der Folie sichtbar.

### Fehlende visuelle Inhalte
Links steht ein Cartoon mit dem Titel "Phasen der Blasenbildung". Er zeigt in mehreren Bildfeldern eine Esel-Comicfigur, die eine Kaugummiblase aufbläst. Beschriftete Phasen (visuell abgelesen, Beschriftungen oben am Cartoon):
- "Auslösung" – Figur kaut Kaugummi, Blase noch klein.
- "Boom und Euphorie" – die Blase wächst, wird groß und dünnwandig.
- "Crash" / "Schadenbegrenzung" – die Blase ist geplatzt, klebt der Figur (und einer unbeteiligten zweiten Figur) im Gesicht.
Der Cartoon illustriert die Phasen als humoristische Bildfolge. Die genaue Bildgestaltung ist visuell, nicht textlich relevant.

### Visuelle Rekonstruktion
```text
Phasen der Blasenbildung (Cartoon)
[Auslösung] -> [Boom und Euphorie] -> [Crash] -> [Schadenbegrenzung]
 kauen          Blase wächst           platzt      Reinigung/Folgen
```

### Inhaltliche Rekonstruktion
Phasenanalogie: Auslösung (Vorbereitung der Blasenbildung) -> Boom und Euphorie (Luft/Geld wird hinzugefügt, Blase wird größer, Außenhaut dünner, Volatilität höher) -> Crash (Blase platzt, auch Unbeteiligte werden in Mitleidenschaft gezogen) -> Schadensbegrenzung. Ersetzt man Kaugummi durch Aktien und Luft durch Geld, ergibt sich eine Börsenblase.

### Fachliche Aussage
Eine Spekulationsblase durchläuft – wie eine Kaugummiblase – Aufbau-, Wachstums- und Platzphasen; das Platzen schädigt auch unbeteiligte Marktteilnehmer.

### React-Vorschlag
`BubbleAnalogyCard` – Text rechts, links eine vierstufige Icon-Phasenkette (Kaugummi-Metapher) mit Quellenfußnote "Putnoki (2018)".

---

## Folie 4 - Spekulationsblasen als Zeichen für Anomalien an Finanzmärkten

### In der MD vorhanden
Alle fünf Stichpunkte vollständig vorhanden (Definition Spekulationsblasen, soziale Ansteckung/Spekulationsfieber, Epidemie-Analogie, Preis-Story-Preis-Schleife, Informationskaskaden).

### Fehlende visuelle Inhalte
Keine Grafik. Reine Bulletpoint-Folie. Der erste Begriff "Spekulationsblasen:" ist blau/fett hervorgehoben. Die Pfeile (in der MD ggf. als "à" extrahiert) stehen für Rechtspfeile (→) in der Feedback-Kette des zweiten Bullets.

### Visuelle Rekonstruktion
Feedback-Kette (Spekulationsfieber):
```text
Beobachtungen + mediale Berichterstattung
  → steigende Kurse
  → Geschichten, die den Glauben an Fortsetzung des Booms bestärken
```

### Inhaltliche Rekonstruktion
- Spekulationsblasen: starke und langfristige Übertreibung bei Preisen für Wertpapiere, Immobilien oder andere Anlagegüter.
- Soziale Ansteckung durch Boom-Denken ("Spekulationsfieber"); Beobachtungen und mediale Berichterstattung → steigende Kurse → Geschichten, die den Glauben an Fortsetzung des Booms bestärken (auch: Feedback-Theorie).
- Analogie zu Epidemien in der Medizin: Ansteckungsrate steigt über Abklingrate, optimistische Markteinschätzung breitet sich aus, breite Akzeptanz der ausschließlich positiven Argumente.
- Preis-Story-Preis-Schleife durch Medien.
- Informationskaskaden: rationale Marktteilnehmer übernehmen überzogene Ansichten (Qualität der Informationen in der Gruppe sinkt).

### Fachliche Aussage
Spekulationsblasen sind Marktanomalien, die durch soziale Ansteckung, mediale Feedback-Schleifen und Informationskaskaden befeuert werden.

### React-Vorschlag
`KeyPointsList` mit hervorgehobenem Leitbegriff; die Feedback-Kette als kleiner Inline-`ArrowFlow`.

---

## Folie 5 - Herdentrieb

### In der MD vorhanden
Vollständig vorhanden: Definition Herdentrieb, Shiller-Zitat (englisch), Le-Bon-Merkmale (Kollektivseele, Verbundenheit, emotionale Ansteckung, Impulsivität, Meinungsbildung der Masse).

### Fehlende visuelle Inhalte
Keine Grafik. Reine Aufzählungsfolie mit verschachtelten Unterpunkten. "Herdentrieb:" ist blau hervorgehoben; das Shiller-Zitat ist kursiv.

### Visuelle Rekonstruktion
Nicht erforderlich (reine Liste).

### Inhaltliche Rekonstruktion
- Herdentrieb: Menschen als soziale Wesen "schwimmen mit dem Strom" und suchen Leitfiguren.
- Shiller: "The meaning of herd behaviors is that investors tend to do as other investors do. They imitate the behavior of others and disregard their own information."
- Begründer der Massenpsychologie – Gustave Le Bon (1841–1931):
  - Massen entwickeln eine Kollektivseele (abgestimmte Handlungsweisen)
  - hohe Verbundenheit innerhalb der Masse (unbewusste Persönlichkeit)
  - Gesamtinteresse infiziert Einzelinteresse – emotionale Ansteckung
  - einfache Gefühle dominieren – Impulsivität und Reizbarkeit
  - einzelne Meinungen/Gerüchte führen zur Meinungsbildung der Masse → Tendenz zur unverzüglichen Verwirklichung suggerierter Ideen

### Fachliche Aussage
Herdentrieb erklärt, warum Investoren eigene Informationen zugunsten des Massenverhaltens ignorieren – fundiert in der Massenpsychologie nach Le Bon.

### React-Vorschlag
`DefinitionWithQuote` – Definition oben, abgesetztes Shiller-`Blockquote`, darunter `NestedList` der Le-Bon-Merkmale.

---

## Folie 6 - Kategorien des Herdentriebs

### In der MD vorhanden
Alle vier nummerierten Kategorien vollständig vorhanden mit Erläuterungen.

### Fehlende visuelle Inhalte
Keine eigentliche Grafik, aber inhaltliche Schlüsselbegriffe sind farbig hervorgehoben: "Herdenverhalten" (Einleitung) blau, sowie die vier Treiber "Informationskaskaden", "Reputationsinteressen", "Informationsquellen", "historischen Marktbewegungen" jeweils blau/fett innerhalb der nummerierten Punkte.

### Visuelle Rekonstruktion
```text
Herdenverhalten – 4 Kategorien
(1) Informationskaskaden
(2) Reputationsinteressen
(3) Informationsquellen
(4) historische Marktbewegungen
```

### Inhaltliche Rekonstruktion
| Nr. | Kategorie | Mechanismus |
|---|---|---|
| 1 | Informationskaskaden | Marktteilnehmer ignorieren eigene Informationen und schließen sich der Meinung der Masse an (eigene Meinung kann Masse nicht umstimmen) |
| 2 | Reputationsinteressen | Aus Sorge um den eigenen Ruf schließt man sich der Gruppenmeinung an und vernachlässigt eigene Infos |
| 3 | Informationsquellen | Man nutzt Quellen, von denen man glaubt, dass auch andere Marktteilnehmer sie nutzen werden |
| 4 | Historische Marktbewegungen | Analyse historischer Marktbewegungen (Chart-Analyse) in der Annahme, dass auch andere Marktteilnehmer auf diese Weise entscheiden |

### Fachliche Aussage
Herdenverhalten lässt sich nach seinem Auslöser in vier Kategorien einteilen.

### React-Vorschlag
`CategoryCards` – vier nummerierte Karten mit hervorgehobenem Kategorienamen und Erläuterungstext.

---

## Folie 7 - Arten von Spekulationsblasen (Überblick)

### In der MD problematisch/fehlend
Die MD bildet die Inhalte ab, aber die Zuordnung der linken Kategorie-Labels (Blasentypen) zu den jeweiligen Bulletpoints ist durch die Spaltenkonvertierung verloren gegangen / verschoben.

### Fehlende visuelle Inhalte
Linke Spalte: vier gestapelte abgerundete Label-Boxen in dunkelblau/grau-blau mit weißem Text, jeweils einem Bullet-Block rechts daneben zugeordnet. Die vier Labels lauten (von oben nach unten):
1. "Rationale / fast-rationale Blasen"
2. "Intrinsische Blasen"
3. "Launen und Moden"
4. "Informationsbedingte Blasen"

### Visuelle Rekonstruktion
```text
[Rationale / fast-rationale Blasen] -> Bullets
[Intrinsische Blasen]               -> Bullets
[Launen und Moden]                  -> Bullets
[Informationsbedingte Blasen]       -> Bullets
```

### Inhaltliche Rekonstruktion
| Blasentyp | Merkmale |
|---|---|
| Rationale / fast-rationale Blasen | Bei rationalen Erwartungen ist der Preis Funktion des erwarteten (Wieder-)Verkaufswerts; Marktteilnehmer wissen, dass die Blase platzen wird, kennen aber den Zeitpunkt nicht; auch als "Markt der größeren Narren" bezeichnet |
| Intrinsische Blasen | Abhängig von Fundamentaldaten; übertriebene Reaktion auf Nachrichten über die Fundamentaldaten; Projektion vergangener Wachstumsraten in die Zukunft |
| Launen und Moden | Verursacht durch sozialpsychologische Faktoren; übertriebener Optimismus bzgl. künftiger Entwicklungen; stark steigende Erwartungen bzgl. langfristiger Wachstums- und Renditeaussichten |
| Informationsbedingte Blasen | Verursacht durch unzureichende Einpreisung aller Informationen in die Anlage; Preis der Anlage spiegelt nicht den Fundamentalwert wider |

### Fachliche Aussage
Spekulationsblasen lassen sich nach ihrer Entstehungsursache in vier Typen klassifizieren.

### React-Vorschlag
`LabeledRowList` – linke Label-Badge (Blasentyp) + rechte Bullet-Liste je Zeile, vier Zeilen.

---

## Folie 8 - Anatomie einer Spekulationsblase nach Kindleberger/Minsky (5-Phasen-Modell)

### In der MD problematisch/fehlend
Diese Folie ist in der MD als stark zerbrochene Tabelle extrahiert: Spaltenüberschriften und Bullet-Texte sind ineinander verschachtelt und kaum lesbar. Der eigentliche Inhalt ist eine fünfspaltige Phasen-Übersichtstabelle.

### Fehlende visuelle Inhalte
Oben fünf nebeneinander liegende, abgerundete Phasen-Boxen (dunkelblau, weißer Text) in Chevron-Anordnung von links nach rechts: "Verlagerung" → "Positives Feedback" → "Euphorie" → "Kritische Phase" → "Abscheu". Darunter je Spalte eine eigene Bullet-Liste. Dies ist die vollständige Übersicht; die Folien 9–13 zoomen jeweils eine Phase heran.

### Visuelle Rekonstruktion
```text
[Verlagerung] -> [Positives Feedback] -> [Euphorie] -> [Kritische Phase] -> [Abscheu]
    |                  |                    |               |                  |
  Bullets            Bullets              Bullets         Bullets            Bullets
```

### Inhaltliche Rekonstruktion
| Phase | Inhalte |
|---|---|
| Verlagerung | Beginn eines Booms durch steigende Preise; exogener Schock, der zu Verlagerung von Investitionen (Profitchancen) auf einen anderen Vermögenssektor führt; entstehende Chancen führen zu Zunahme an Investitionen und Produktion |
| Positives Feedback | Ausweitung der Investitionen durch Einsatz von Fremdkapital; weitere Preissteigerungen, da Nachfrage das Angebot übersteigt; steigende Preise führen zu weiteren Investitionen mit weiter steigenden Preisen; soziale Ansteckung der Gesellschaft durch Boom-Denken |
| Euphorie | Spekulation über Preissteigerung führt zu zusätzlichen Investitionen; Marktteilnehmer überschätzen die zu erwartenden Renditen; neue Bewertungsmodelle, um steigende Aktienkurse zu rechtfertigen |
| Kritische Phase | Insider realisieren zunehmend ihre Gewinne; Phase der finanziellen Not, in der Unternehmen merken, dass sie ihre Schulden möglicherweise nicht bedienen können; Tendenz zur Umschichtung in Liquidität (z. B. als Folge der Aufdeckung von Betrügereien) |
| Abscheu | Kapitulation verbleibender Marktteilnehmer in Form der "entarteten Panik"; massiver Rückzug der Marktteilnehmer; Zunahme regulatorischer Bemühungen seitens der Politik |

### Fachliche Aussage
Das Kindleberger/Minsky-Modell beschreibt den Verlauf einer Spekulationsblase in fünf aufeinanderfolgenden Phasen.

### React-Vorschlag
`PhaseModelTable` – fünfspaltige Phasenleiste (Chevron-Header) über Bullet-Spalten; Basis für die Detailfolien 9–13.

---

## Folie 9 - Anatomie einer Spekulationsblase nach Kindleberger/Minsky – Phase 1: Verlagerung

### In der MD vorhanden
Die Bullets der Phase Verlagerung sind vorhanden. Die Phasenleiste ist nur als Wortliste extrahiert.

### Fehlende visuelle Inhalte
Identische fünfteilige Phasenleiste wie Folie 8, aber nur die erste Box "Verlagerung" ist aktiv (kräftiges Blau hervorgehoben), die übrigen vier Boxen sind ausgegraut/blass. Ein weißes Overlay-Kästchen zeigt die Bullets nur dieser Phase; der Hintergrundtext der anderen Phasen ist blass durchscheinend.

### Visuelle Rekonstruktion
```text
[VERLAGERUNG] -> (Positives Feedback) (Euphorie) (Kritische Phase) (Abscheu)
   aktiv          ausgegraut
```

### Inhaltliche Rekonstruktion
Phase Verlagerung:
- Beginn eines Booms durch steigende Preise
- Exogener Schock, der zu einer Verlagerung von Investitionen (Profitchancen) auf einen anderen Vermögenssektor führt
- Entstehende Chancen führen zu einer Zunahme an Investitionen und Produktion

### Fachliche Aussage
Die Blase beginnt mit einem exogenen Schock, der Investitionen in einen neuen Sektor lenkt und einen Boom auslöst.

### React-Vorschlag
`PhaseModelTable` mit `activePhase="verlagerung"`; aktive Phase farblich hervorgehoben, Detail-Bullets im Overlay.

---

## Folie 10 - Anatomie einer Spekulationsblase nach Kindleberger/Minsky – Phase 2: Positives Feedback

### In der MD vorhanden
Bullets der Phase Positives Feedback vorhanden.

### Fehlende visuelle Inhalte
Phasenleiste wie Folie 8; aktiv ist die zweite Box "Positives Feedback", übrige Boxen ausgegraut. Overlay mit den Phasen-Bullets.

### Visuelle Rekonstruktion
```text
(Verlagerung) -> [POSITIVES FEEDBACK] -> (Euphorie) (Kritische Phase) (Abscheu)
                       aktiv
```

### Inhaltliche Rekonstruktion
Phase Positives Feedback:
- Ausweitung der Investitionen durch Einsatz von Fremdkapital
- Weitere Preissteigerungen zu beobachten, da die Nachfrage das Angebot übersteigt
- Steigende Preise führen zu weiteren Investitionen mit weiter steigenden Preisen (Positive Feedback Loop)
- Soziale Ansteckung der Gesellschaft durch das Boom-Denken

### Fachliche Aussage
In der zweiten Phase verstärken Fremdkapital, Nachfrageüberhang und soziale Ansteckung die Preissteigerung in einer selbstverstärkenden Schleife.

### React-Vorschlag
`PhaseModelTable` mit `activePhase="positives-feedback"`.

---

## Folie 11 - Anatomie einer Spekulationsblase nach Kindleberger/Minsky – Phase 3: Euphorie

### In der MD vorhanden
Bullets der Phase Euphorie vorhanden.

### Fehlende visuelle Inhalte
Phasenleiste wie Folie 8; aktiv ist die dritte Box "Euphorie", übrige ausgegraut. Overlay mit Phasen-Bullets.

### Visuelle Rekonstruktion
```text
(Verlagerung) (Positives Feedback) -> [EUPHORIE] -> (Kritische Phase) (Abscheu)
                                          aktiv
```

### Inhaltliche Rekonstruktion
Phase Euphorie:
- Spekulation über Preissteigerung führt zu zusätzlichen Investitionen
- Marktteilnehmer überschätzen die zu erwartenden Renditen
- Neue Bewertungsmodelle, um steigende Aktienkurse zu rechtfertigen

### Fachliche Aussage
In der Euphoriephase werden Renditen überschätzt und neue Bewertungsmodelle erfunden, um die überhöhten Kurse zu rechtfertigen.

### React-Vorschlag
`PhaseModelTable` mit `activePhase="euphorie"`.

---

## Folie 12 - Anatomie einer Spekulationsblase nach Kindleberger/Minsky – Phase 4: Kritische Phase

### In der MD vorhanden
Bullets der Kritischen Phase vorhanden.

### Fehlende visuelle Inhalte
Phasenleiste wie Folie 8; aktiv ist die vierte Box "Kritische Phase", übrige ausgegraut. Overlay mit Phasen-Bullets.

### Visuelle Rekonstruktion
```text
(Verlagerung) (Positives Feedback) (Euphorie) -> [KRITISCHE PHASE] -> (Abscheu)
                                                       aktiv
```

### Inhaltliche Rekonstruktion
Kritische Phase:
- Insider realisieren zunehmend ihre Gewinne
- Phase der finanziellen Not, in der die Unternehmen merken, dass sie ihre Schulden möglicherweise nicht bedienen können
- Tendenz zur Umschichtung in Liquidität (z. B. als Folge der Aufdeckung von Betrügereien)

### Fachliche Aussage
In der kritischen Phase steigen Insider aus, finanzielle Not setzt ein und Kapital wird in Liquidität umgeschichtet.

### React-Vorschlag
`PhaseModelTable` mit `activePhase="kritische-phase"`.

---

## Folie 13 - Anatomie einer Spekulationsblase nach Kindleberger/Minsky – Phase 5: Abscheu

### In der MD vorhanden
Bullets der Phase Abscheu vorhanden.

### Fehlende visuelle Inhalte
Phasenleiste wie Folie 8; aktiv ist die fünfte Box "Abscheu", übrige ausgegraut. Overlay mit Phasen-Bullets.

### Visuelle Rekonstruktion
```text
(Verlagerung) (Positives Feedback) (Euphorie) (Kritische Phase) -> [ABSCHEU]
                                                                       aktiv
```

### Inhaltliche Rekonstruktion
Phase Abscheu:
- Kapitulation verbleibender Marktteilnehmer in Form der "entarteten Panik"
- Massiver Rückzug der Marktteilnehmer
- Zunahme regulatorischer Bemühungen seitens der Politik

### Fachliche Aussage
In der Schlussphase kapitulieren die Anleger in Panik, ziehen sich massiv zurück, und die Politik reagiert mit Regulierung.

### React-Vorschlag
`PhaseModelTable` mit `activePhase="abscheu"`.

---

## Folie 14 - Anatomie der Spekulationsblase nach Kindleberger/Minsky (Kurvendiagramm)

### In der MD problematisch/fehlend
In der MD existiert nur die Überschrift "Anatomie der Spekulationsblase nach Kindleberger / Minsky". Das eigentliche Kurvendiagramm wurde gar nicht extrahiert. Hinweis: Die Folien-Kopfzeile lautet zusätzlich "Spekulationsblasen als Zeichen für Anomalien an Finanzmärkten"; die blaue Diagramm-Überschrift darunter ist "Anatomie der Spekulationsblase nach Kindleberger / Minsky".

### Fehlende visuelle Inhalte
Ein Liniendiagramm zeigt den glockenförmigen Preisverlauf einer Blase:
- X-Achse: "Zeit" (keine Skalenwerte).
- Y-Achse: "Preis" (keine Skalenwerte).
- Eine rote Kurve (schraffierte Fläche darunter) steigt langsam an, beschleunigt zu einem steilen Anstieg, erreicht einen scharfen Gipfel und fällt danach steil ab (asymmetrische Glockenform).
- Entlang der Kurve sind die fünf Phasen als nummerierte Punkte markiert (visuell abgelesen):
  - "1. Verlagerung" – ganz links am flachen Anfang
  - "2. Positives Feedback, Boom" – beginnender Anstieg
  - "3. Euphorie" – steiler Aufwärtsast
  - "4. Finanzielle Not" – am Gipfel (Hochpunkt)
  - "5. Abscheu" – am abfallenden rechten Ast
- Quellenhinweis klein unten rechts (visuell abgelesen): "Quelle: vv / Grafik: FuW, sk".

### Visuelle Rekonstruktion
```text
Preis
  ^                4. Finanzielle Not (Gipfel)
  |                   /\
  |        3.Euphorie /  \ 5. Abscheu
  |                 /     \
  |   2.Pos.Feedback,     \
  |     Boom    /           \____
  | 1.Verlag._/                  \________
  +-------------------------------------------> Zeit
```

### Inhaltliche Rekonstruktion
Phasenfolge entlang der Kurve: 1 Verlagerung → 2 Positives Feedback/Boom → 3 Euphorie → 4 Finanzielle Not (Maximum) → 5 Abscheu (Absturz). Achsen: Preis (y) gegen Zeit (x), keine konkreten Werte.

### Fachliche Aussage
Der Blasenverlauf ist eine asymmetrische Glockenkurve: langsamer Aufbau, euphorischer Steilanstieg, scharfer Gipfel bei "finanzieller Not" und anschließender Crash in der Abscheu-Phase.

### React-Vorschlag
`BubbleCurveChart` – SVG-/Chart-Linie mit fünf beschrifteten Annotationspunkten; Achsen "Zeit"/"Preis" ohne Skala; Quellenfußnote "Quelle: vv / Grafik: FuW, sk".

---

## Folie 15 - Ablauf von Spekulationsblasen – Beispiel: Die Tulpenmanie im 17. Jahrhundert

### In der MD problematisch/fehlend
Die MD bildet die Bullets ab, die Zuordnung der linken Phasen-Labels zu den jeweiligen Inhalten ist aber durch die Spaltenkonvertierung teils verschoben.

### Fehlende visuelle Inhalte
Linke Spalte: fünf gestapelte dunkelblaue, abgerundete Label-Boxen (weißer Text) – die Kindleberger/Minsky-Phasen "Verlagerung", "Positives Feedback", "Euphorie", "Kritische Phase", "Abscheu" – jeweils einem Bullet-Block rechts zugeordnet.

### Visuelle Rekonstruktion
```text
[Verlagerung]       -> Begeisterung nach Import / Mode
[Positives Feedback]-> Verschuldung, Zwiebel als Zahlungsmittel
[Euphorie]          -> Nachfrageanstieg 1636, 10x Besitzerwechsel/Tag
[Kritische Phase]   -> Zwiebel > Grachtenhaus; Kursverluste, Furcht
[Abscheu]           -> -95% in Wochen; Annullierung von Verträgen
```

### Inhaltliche Rekonstruktion
| Phase | Inhalt (Tulpenmanie) |
|---|---|
| Verlagerung | Beginn der Begeisterung für Tulpen im Zuge des Imports nach Europa; Interesse durch Mode und Ausweitung der Tulpenzüchtung auf alle interessierten Züchter angefacht |
| Positives Feedback | Bürger verschuldeten sich, um in Tulpen zu investieren; Tulpenzwiebeln neben nationalem auch als allgemeines Zahlungsmittel anerkannt |
| Euphorie | Massiver Nachfrageanstieg 1636, eigene Handelstische für Tulpen an den Börsen; Floristen verkauften nicht lieferbare Tulpen an Investoren, die sie nicht pflanzen wollten → Tulpen wechselten z. T. 10-mal am Tag den Besitzer |
| Kritische Phase | Wert einer Tulpenzwiebel z. T. höher als ein Grachtenhaus in bester Lage in Amsterdam; einsetzende Kursverluste steigerten die Furcht vor Vermögensverlusten und den Wunsch, zügig weiterzuveräußern |
| Abscheu | Die Preise für Tulpenzwiebeln fielen ins Bodenlose – 95 % des Wertes binnen Wochen vernichtet; vertrauensbildende Maßnahmen wie Annullierung von Handelsvereinbarungen sollten die Auswirkungen der geplatzten Spekulationsblase eindämmen |

### Fachliche Aussage
Die Tulpenmanie ist ein historisches Lehrbeispiel, das exakt dem Kindleberger/Minsky-5-Phasen-Schema folgt.

### React-Vorschlag
`PhaseCaseStudy` – linke Phasen-Badges, rechts zugeordnete Bullet-Blöcke; wiederverwendbar für Folien 16, 17, 19.

---

## Folie 16 - Ablauf von Spekulationsblasen – Der Börsenboom und -crash von 1929

### In der MD problematisch/fehlend
Bullets vorhanden; Phasen-Label-Zuordnung links durch Spaltenkonvertierung teils verschoben.

### Fehlende visuelle Inhalte
Gleiche fünf dunkelblauen Phasen-Label-Boxen links wie Folie 15 ("Verlagerung", "Positives Feedback", "Euphorie", "Kritische Phase", "Abscheu") mit zugeordneten Bullet-Blöcken rechts.

### Visuelle Rekonstruktion
```text
[Verlagerung]       -> Konsolidierungsdrang, euphorische Kommentare
[Positives Feedback]-> kreditfinanzierter Konsum, Fremdkapital
[Euphorie]          -> Dow Jones x4 (1924-1929), hebelgetrieben, Fonds
[Kritische Phase]   -> steigende Leitzinsen, Kreditzinsen, Nachfrage sinkt
[Abscheu]           -> Crash, SEC-Gründung, 40% Bankenpleiten bis 1933
```

### Inhaltliche Rekonstruktion
| Phase | Inhalt (1929) |
|---|---|
| Verlagerung | Wirtschaftliches Umfeld geprägt vom Konsolidierungsdrang der Unternehmen; euphorische Kommentare einflussreicher Marktteilnehmer |
| Positives Feedback | Steigerung des Lebensstandards durch kreditfinanzierte Konsumausgaben; Nutzung von Fremdkapital für Investitionszwecke |
| Euphorie | Dow Jones Industrial Index vervierfachte sich zwischen 1924 und 1929; Marktteilnehmer handelten verstärkt mittels Krediten hebelgetrieben; Zunahme der Gründung von Investmentfonds |
| Kritische Phase | Stetig steigende Leitzinsen der US-Notenbank leiteten die kritische Phase ein; Kreditgeber erhöhten ebenfalls zunehmend die Kreditzinsen – Nachfrage ging signifikant zurück |
| Abscheu | Börseneinbruch ausgelöst durch massive Verkäufe kreditfinanzierter Investitionen; Gründung der US-Börsenaufsicht SEC als Reaktion auf die Kursverluste; Bankrott von 40 Prozent aller Banken bis 1933 |

### Fachliche Aussage
Der Börsencrash von 1929 zeigt das Phasenmodell mit kreditgetriebener Euphorie, Zinswende als Auslöser und massiven realwirtschaftlichen Folgen (Bankenpleiten).

### React-Vorschlag
`PhaseCaseStudy` (Wiederverwendung) mit Datensatz "Crash 1929".

---

## Folie 17 - Ablauf von Spekulationsblasen – Dot.com-Spekulationsblase ab 1997

### In der MD problematisch/fehlend
Bullets vorhanden; Phasen-Label-Zuordnung links teils verschoben.

### Fehlende visuelle Inhalte
Gleiche fünf dunkelblaue Phasen-Label-Boxen links ("Verlagerung", "Positives Feedback", "Euphorie", "Kritische Phase", "Abscheu") mit zugeordneten Bullet-Blöcken rechts.

### Visuelle Rekonstruktion
```text
[Verlagerung]       -> Internetzugang, Tech-Firmen ins Anlegerblickfeld
[Positives Feedback]-> mediale Berichterstattung, niedrige US-Leitzinsen
[Euphorie]          -> IPO-Welle New Economy, Zeichnungsgewinne bis 100%
[Kritische Phase]   -> Misstrauen gg. Geschäftsmodelle, steigende Leitzinsen
[Abscheu]           -> Bilanzmanipulationen, Nemax >10.000 -> <300 Punkte (Ende 2002)
```

### Inhaltliche Rekonstruktion
| Phase | Inhalt (Dot.com) |
|---|---|
| Verlagerung | Zugang zum Internet entfachte Investitionen in Infrastruktur und e-Commerce; Internet- und Technologieunternehmen, die die Technik bereit stellten, gerieten in das Blickfeld der Anleger |
| Positives Feedback | Mediale Berichterstattung über zunehmende Kurssteigerungen sorgte für soziale Ansteckung durch das Boom-Denken; niedrige US-Leitzinsen erwiesen sich als Katalysator für die Kurssteigerungen |
| Euphorie | Signifikante Zunahme von Börsengängen im Bereich New Economy; Börsengänge erbrachten Zeichnungsgewinne von bis zu 100 Prozent in den ersten Tagen der Börsennotierung |
| Kritische Phase | Zunehmendes Misstrauen der Anleger gegenüber Geschäftsmodellen grenzte das Interesse an künftigen Börsengängen ein; steigende Leitzinsen beschränkten Investitionspläne der Unternehmen |
| Abscheu | Herbe Kursverluste im Zuge der Veröffentlichung von Bilanzmanipulationen; Einstellung des Nemax All Share Index in Deutschland Ende 2002, nachdem er von über 10.000 Punkten auf unter 300 Punkte gefallen war |

### Fachliche Aussage
Die Dot.com-Blase folgt demselben Muster, getrieben von Technologie-Euphorie, IPO-Gewinnen und billiger Liquidität bis zum Kollaps des Neuen Marktes.

### React-Vorschlag
`PhaseCaseStudy` (Wiederverwendung) mit Datensatz "Dot.com 1997".

---

## Folie 18 - Verlauf von Spekulationsblasen und Verhaltensanomalien – Beispiel: Neuer Markt

### In der MD problematisch/fehlend
Die MD hat das Diagramm zerlegt: die Y-Achsen-Werte und die rückwärts/verstümmelt extrahierten Datumsachsen-Labels sind als Textfragmente vorhanden; die Verhaltensanomalien-Beschriftungen folgen als lose Liste. Der Diagrammbezug ist verloren.

### Fehlende visuelle Inhalte
Ein Liniendiagramm des Neuen-Markt-Index:
- Y-Achse: 0 bis 9000 in 1000er-Schritten (0, 1000, 2000, …, 9000).
- X-Achse: monatliche Datumslabels "Mrz. 97", "Jul. 97", "Nov. 97", "Mrz. 98" … bis "Nov. 02" (im MD-Text rückwärts extrahiert: zrM=Mrz, luJ=Jul, voN=Nov; Jahre 97–02).
- Die blaue Kurve steigt ab 1997 moderat (mit einem Zwischenhoch um Anfang 1999 bei ca. 4000), schießt Ende 1999/Anfang 2000 steil auf einen Gipfel von ca. 8500 (visuell abgelesen, um Mrz. 00) und stürzt danach bis Ende 2002 auf ca. 500–1000 ab – klassische Blasenkurve.
- Entlang des Verlaufs sind Verhaltensanomalien als Textannotationen an den Kurvenabschnitten platziert (visuell abgelesen, Positionen):
  - Aufwärtsast: "Selbstwertdienliche Attribution", "Schematisches Denken", "Kontrollillusion", "Verzerrte Interpretation von Informationen"
  - Gipfel: "Erlernte Sorglosigkeit"
  - Beginn des Abstiegs: "Selektive Wahrnehmung", "Herding"
  - Abwärtsast: "Verluste aussitzen", "Schönfärberei"
  - Ganz unten/spät: "Gelernte Hilflosigkeit"

### Visuelle Rekonstruktion
```text
9000|                  Erlernte Sorglosigkeit
    |                       /\  (~8500, Mrz 00)
    |  Verzerrte Interpr.  /  \ Selektive Wahrnehmung
    |  Kontrollillusion   /    \ Verluste aussitzen
    |  Schemat. Denken   /      \ Schönfärberei
    |  Selbstwertd.Attr./ Herding\
    |                  /          \____ Gelernte Hilflosigkeit
   0+----------------------------------------------> Mrz.97 ... Nov.02
```

### Inhaltliche Rekonstruktion
Index Neuer Markt, Skala 0–9000. Verlauf: moderater Anstieg ab 1997 (Zwischenhoch ~4000 Anfang 1999) → Steilanstieg → Gipfel um Mrz. 2000 (ca. 8500, visuell abgelesen) → Absturz bis Ende 2002 auf ca. 500–1000. Den Phasen sind Verhaltensanomalien zugeordnet:
- Anstieg/Euphorie: Selbstwertdienliche Attribution, Schematisches Denken, Kontrollillusion, Verzerrte Interpretation von Informationen, Erlernte Sorglosigkeit
- Wende/Abstieg: Selektive Wahrnehmung, Herding, Verluste aussitzen, Schönfärberei, Gelernte Hilflosigkeit

### Fachliche Aussage
Am realen Neuer-Markt-Verlauf wird gezeigt, welche Verhaltensanomalien typischerweise in welcher Phase der Blase auftreten – vom übersteigerten Optimismus bis zur gelernten Hilflosigkeit nach dem Crash.

### React-Vorschlag
`AnomalyAnnotatedChart` – Indexkurve (0–9000, Mrz. 97–Nov. 02) mit positionsgebundenen Anomalie-Labels als Annotation-Tooltips/Pins.

---

## Folie 19 - Ablauf von Spekulationsblasen – Die U.S. Subprime-Kreditkrise ab 2007

### In der MD problematisch/fehlend
Bullets vorhanden; Phasen-Label-Zuordnung links teils verschoben.

### Fehlende visuelle Inhalte
Gleiche fünf dunkelblaue Phasen-Label-Boxen links ("Verlagerung", "Positives Feedback", "Euphorie", "Kritische Phase", "Abscheu") mit zugeordneten Bullet-Blöcken rechts.

### Visuelle Rekonstruktion
```text
[Verlagerung]       -> Gesetzesänderungen, Kredite an niedrige Bonität
[Positives Feedback]-> schwache Kreditkontrollen, Verbriefung weltweit
[Euphorie]          -> House-flipping, +92% Immobilienpreise 1996-2007
[Kritische Phase]   -> "This time is different", Bear-Stearns-Fonds, Ausfälle
[Abscheu]           -> Lehman-Zusammenbruch, Bank-Runs, Verstaatlichungen
```

### Inhaltliche Rekonstruktion
| Phase | Inhalt (Subprime 2007) |
|---|---|
| Verlagerung | Gesetzliche Änderungen begünstigten bereits seit den 80er Jahren die Kreditgewährung an Schuldner mit niedriger Bonität; Lockvogelangebote ohne anfängliche Tilgung erhöhten die Kreditnachfrage |
| Positives Feedback | Unzureichende Kreditkontrollen begünstigten Kreditvergabe sowie Produktentwicklung im Rahmen des Versuchs, liquide Mittel anzulegen; Verbriefung der Kreditverpflichtungen und Weitergabe an internationale Investoren |
| Euphorie | Immobilien vielfach für schnellen Weiterverkauf erworben (House-flipping); kumulierter Preisanstieg der Immobilien von 1996 bis 2007 betrug 92 Prozent |
| Kritische Phase | "This time is different"-Syndrom ergriff die Marktteilnehmer; Initialzündung war die Schieflage zweier Bear-Stearns-Fonds; Zunahme von Kreditausfällen bei Schuldnern mit niedriger Bonität |
| Abscheu | Sinkende Aktienkurse im Zuge der Verstaatlichung zahlreicher Kreditinstitute; Höhepunkt der Subprime-Kreditkrise im Zuge des Zusammenbruchs der Investmentbank Lehman Brothers; einsetzende Bank-Runs ausgelöst durch Vertrauenskrise der Marktteilnehmer |

### Fachliche Aussage
Die Subprime-Krise illustriert das Phasenmodell anhand lockerer Kreditvergabe, Verbriefung, House-flipping und dem durch Lehman ausgelösten Vertrauenskollaps.

### React-Vorschlag
`PhaseCaseStudy` (Wiederverwendung) mit Datensatz "Subprime 2007".

---

## Folie 20 - Verlauf von Spekulationsblasen (Rise and fall of some famous asset bubbles)

### In der MD problematisch/fehlend
In der MD ist nur die Überschrift "Verlauf von Spekulationsblasen" vorhanden. Das gesamte Vergleichsdiagramm fehlt.

### Fehlende visuelle Inhalte
Ein Liniendiagramm mit dem Titel "Rise and fall of some famous asset bubbles" (Logo "CONVOY / convoyinvestments.com" rechts oben):
- Y-Achse: "Multiple of starting price", Skala 0 bis 70 (in 10er-Schritten: 0, 10, 20, …, 70).
- X-Achse: "Years around peak" – zentriert um den Blasen-Gipfel ("0"), reicht etwa von -2 bis +2 (negative und positive Jahre um den Peak).
- Mehrere farbige Kurven, die um den gemeinsamen Peak-Bereich gelegt sind und bei unterschiedlichen Zeitpunkten kulminieren. Legende (Farbe = Blase, mit Zeiträumen, visuell abgelesen):
  - Bitcoin (2014-Today) – rot, mit dem höchsten/steilsten Ausschlag (Spitze ca. 65)
  - Tulip Mania (1634-1637)
  - Mississippi Bubble (1718-1720)
  - South Sea Bubble (1719-1721)
  - Tech Bubble (1994-2002)
  - Financial Crisis Stocks (2006-2009)
  - Japanese Stocks (1982-1992)
  - Great Depression Stocks (1923-1932)
  - S&P500 Today (?)
- Die Kurven steigen vor dem Peak an, kulminieren um "0" (Peak) und fallen danach ab; Bitcoin (rot) sticht mit dem extremsten Vielfachen heraus.
- Quelle unten: "Source: Elliot Wave International, Yale SOM, St. Louis FRED, GlobalFin, and Convoy analysis".

### Visuelle Rekonstruktion
```text
Multiple of
starting price
70|              | (Peak = Year 0)
  | Bitcoin --> /\  (~65)
  |            /  \
  | Tulip,    /    \
  | South Sea/      \
  | Tech... _/        \___
 0+-----------------------------> Years around peak
       -2     -1   0   +1   +2
```

### Inhaltliche Rekonstruktion
Vergleich der relativen Preisvielfachen mehrerer historischer Blasen, zeitlich um ihren jeweiligen Gipfel ("Year 0") synchronisiert; X-Achse "Years around peak" von ca. -2 bis +2. Aufgeführte Blasen (mit Zeiträumen): Bitcoin (2014-Today), Tulip Mania (1634-1637), Mississippi Bubble (1718-1720), South Sea Bubble (1719-1721), Tech Bubble (1994-2002), Financial Crisis Stocks (2006-2009), Japanese Stocks (1982-1992), Great Depression Stocks (1923-1932), S&P500 Today (?). Y-Achse: Multiple of starting price (0–70). Quelle: Elliot Wave International, Yale SOM, St. Louis FRED, GlobalFin, and Convoy analysis.

### Fachliche Aussage
Trotz unterschiedlicher Epochen und Anlageklassen folgen alle berühmten Blasen demselben charakteristischen Auf- und Abstiegsmuster um ihren Gipfel; Bitcoin zeigt dabei das extremste Preisvielfache.

### React-Vorschlag
`AssetBubblesComparisonChart` – mehrere überlagerte Kurven, x-Achse zentriert um den Peak (Years around peak), y-Achse "Multiple of starting price" (0–70), Legende mit Blasennamen/Zeiträumen, Quellenfußnote.

---

## Folie 21 - Bedeutung von Spekulationsblasen für Volkswirtschaften

### In der MD problematisch/fehlend
Inhalt als zweispaltige Gegenüberstellung vorhanden, aber durch Spaltenkonvertierung sind Überschriften und Bullet-Texte ineinander verschachtelt; die Zuordnung positiv/negativ und die Fettbegriffe sind verloren.

### Fehlende visuelle Inhalte
Zweispaltiges Layout mit zwei Spaltenüberschriften: links "Positive Effekte von Spekulationsblasen", rechts "Negative Effekte von Spekulationsblasen". Je Spalte mehrere Bulletpoints mit fett hervorgehobenen Effekt-Bezeichnungen (links: Einkommens- und Vermögenseffekt, Bilanzeffekt, Übertragungseffekt; rechts: Verlust der Informationsfunktion von Preisen, Verlust Kaufkraft, Vertrauensverlust der Marktteilnehmer).

### Visuelle Rekonstruktion
```text
+------------------------------+------------------------------+
| Positive Effekte             | Negative Effekte             |
+------------------------------+------------------------------+
| - Einkommens-/Vermögenseff.  | - Verlust Informationsfunkt. |
| - Bilanzeffekt               |   von Preisen                |
| - Übertragungseffekt         | - Verlust Kaufkraft          |
|                              | - Vertrauensverlust          |
+------------------------------+------------------------------+
```

### Inhaltliche Rekonstruktion
| Positive Effekte | Negative Effekte |
|---|---|
| **Einkommens- und Vermögenseffekt:** steigende Konsummöglichkeiten mit positiver Auswirkung auf die Nachfrageseite im realen Sektor aufgrund steigender Vermögenspreise | **Verlust der Informationsfunktion von Preisen:** Gefahr von Fehleinschätzungen und Fehlsteuerungen, wenn sich im Zuge einer Blase die Preise der Vermögenswerte von ihren Fundamentalwerten abkoppeln |
| **Bilanzeffekt:** steigende Vermögenswerte können über den Bilanzeffekt die Investitionstätigkeit beeinflussen | **Verlust Kaufkraft:** infolge starker Produktionsrückgänge durch extreme Korrekturen der Vermögenspreise besteht Gefahr des Übergreifens auf die Realwirtschaft |
| **Übertragungseffekt** zwischen Aktienmärkten und Investitionsentscheidungen: hohe Aktienkurse begünstigen Investitionsentscheidungen, geringe beschränken diese | **Vertrauensverlust der Marktteilnehmer:** Investitions- und Konsumtätigkeiten nehmen ab |

### Fachliche Aussage
Spekulationsblasen haben volkswirtschaftlich ambivalente Wirkungen: kurzfristig konsum- und investitionsfördernd, langfristig jedoch mit Verlust der Preisfunktion, Kaufkraft- und Vertrauensverlust und Gefahr des Übergreifens auf die Realwirtschaft.

### React-Vorschlag
`ProsConsColumns` – zweispaltige Card-Gegenüberstellung (positiv/negativ) mit fett ausgezeichneten Effekt-Titeln je Bullet.

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 8: Fünfspaltige Phasenübersicht Kindleberger/Minsky (in der MD zerbrochene Tabelle)
2. Folien 9-13: Phasenleiste mit jeweils aktiver Einzelphase
3. Folie 14: Blasen-Glockenkurve mit fünf Phasen-Annotationen (in der MD nur Titel)
4. Folie 18: Neuer-Markt-Indexkurve mit positionsgebundenen Verhaltensanomalien
5. Folie 20: Vergleichsdiagramm "Rise and fall of some famous asset bubbles" (in der MD fehlend)
6. Folie 7: Blasentypen-Zuordnung (Label-Badges zu Bullets)
7. Folien 15-17, 19: Fallbeispiele als Phasen-Fallstudien
8. Folie 21: Pro/Contra-Gegenüberstellung volkswirtschaftlicher Effekte

## Kann vereinfacht werden

- Folie 3: Kaugummi-Cartoon als vierstufige Icon-Phasenkette
- Folien 4-6: Bullet-/Definitions-/Kategorien-Folien als strukturierte Listen und Cards
- Folie 2: Agenda als Liste mit hervorgehobenem aktivem Punkt

## Nicht fachlich relevant

- HBW-Logo
- Kopfzeile und Folien-Footer (z. B. "Behavioral Finance / CS / Folie 273")
- Copyright-Zeile
- dekorative Bildleiste der Titelfolie (Folie 1)
- exakte Folienpositionierung und Bildästhetik

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden:

```js
export const bubblePhases = [
  {
    id: 'verlagerung',
    title: 'Verlagerung',
    bullets: [
      'Beginn eines Booms durch steigende Preise',
      'Exogener Schock, der zu einer Verlagerung von Investitionen (Profitchancen) auf einen anderen Vermögenssektor führt',
      'Entstehende Chancen führen zu einer Zunahme an Investitionen und Produktion',
    ],
  },
  {
    id: 'positives-feedback',
    title: 'Positives Feedback',
    bullets: [
      'Ausweitung der Investitionen durch Einsatz von Fremdkapital',
      'Weitere Preissteigerungen zu beobachten, da die Nachfrage das Angebot übersteigt',
      'Steigende Preise führen zu weiteren Investitionen mit weiter steigenden Preisen (Positive Feedback Loop)',
      'Soziale Ansteckung der Gesellschaft durch das Boom-Denken',
    ],
  },
  {
    id: 'euphorie',
    title: 'Euphorie',
    bullets: [
      'Spekulation über Preissteigerung führt zu zusätzlichen Investitionen',
      'Marktteilnehmer überschätzen die zu erwartenden Renditen',
      'Neue Bewertungsmodelle, um steigende Aktienkurse zu rechtfertigen',
    ],
  },
  {
    id: 'kritische-phase',
    title: 'Kritische Phase',
    bullets: [
      'Insider realisieren zunehmend ihre Gewinne',
      'Phase der finanziellen Not, in der die Unternehmen merken, dass sie ihre Schulden möglicherweise nicht bedienen können',
      'Tendenz zur Umschichtung in Liquidität (z. B. als Folge der Aufdeckung von Betrügereien)',
    ],
  },
  {
    id: 'abscheu',
    title: 'Abscheu',
    bullets: [
      'Kapitulation verbleibender Marktteilnehmer in Form der "entarteten Panik"',
      'Massiver Rückzug der Marktteilnehmer',
      'Zunahme regulatorischer Bemühungen seitens der Politik',
    ],
  },
]
```

```js
export const economicEffects = {
  positive: [
    { title: 'Einkommens- und Vermögenseffekt', text: 'Steigende Konsummöglichkeiten mit positiver Auswirkung auf die Nachfrageseite im realen Sektor aufgrund steigender Vermögenspreise' },
    { title: 'Bilanzeffekt', text: 'Steigende Vermögenswerte können über den Bilanzeffekt die Investitionstätigkeit beeinflussen' },
    { title: 'Übertragungseffekt', text: 'Zwischen Aktienmärkten und Investitionsentscheidungen: hohe Aktienkurse begünstigen Investitionsentscheidungen, geringe beschränken diese' },
  ],
  negative: [
    { title: 'Verlust der Informationsfunktion von Preisen', text: 'Gefahr von Fehleinschätzungen und Fehlsteuerungen, wenn sich die Preise der Vermögenswerte von ihren Fundamentalwerten abkoppeln' },
    { title: 'Verlust Kaufkraft', text: 'Infolge starker Produktionsrückgänge durch extreme Korrekturen der Vermögenspreise besteht Gefahr des Übergreifens auf die Realwirtschaft' },
    { title: 'Vertrauensverlust der Marktteilnehmer', text: 'Investitions- und Konsumtätigkeiten nehmen ab' },
  ],
}
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern die Komponenten (`PhaseModelTable`, `PhaseCaseStudy`, `ProsConsColumns`) steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Phasen-Highlights möglich bleiben.
