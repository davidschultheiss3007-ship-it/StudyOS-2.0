# BF7 · Altersvorsorge und private Finanzplanung  
## Abbildungs- und Diagrammbeschreibungen für die Umsetzung in React/HTML

**Quelle:** Behavioral Finance · Kapitel 7 · Folien 236–272  
**Vergleichsbasis:** PDF-Datei vs. Markitdown-Extraktion  
**Ziel:** Die Markitdown-Datei enthält den linearen Text, verliert aber bei vielen Folien die visuelle Logik von Diagrammen, Tabellen, Hervorhebungen und Layouts. Diese Datei beschreibt die Abbildungen und fehleranfälligen visuellen Inhalte so detailliert, dass das Kapitel als hochwertiger interaktiver Lerninhalt umgesetzt werden kann, ohne fachliche Bedeutung zu verlieren.

---

## 1. Gesamtvergleich Markitdown vs. PDF

### Was Markitdown gut erfasst

- Die meisten Fließtexte, Bulletpoints und Überschriften sind grundsätzlich vorhanden.
- Die Kapitelstruktur bleibt erhalten: Einführung, Entscheidung über Sparplanbeitritt, Beitragshöhe, Anlageentscheidung.
- Tabellenwerte werden teilweise extrahiert, allerdings oft ohne saubere visuelle Struktur.
- Quellenangaben sind überwiegend vorhanden.

### Zentrale Verluste gegenüber der PDF

1. **Diagramme werden nicht als Diagramme verstanden.**  
   Balkendiagramme und Liniendiagramme werden häufig nur als Zahlen- oder Textfragmente extrahiert. Achsen, Legenden, visuelle Trends und Vergleichslogik gehen verloren.

2. **Achsenbeschriftungen sind teilweise verdreht oder zerstückelt.**  
   Besonders bei Folien 245, 251, 256, 270 wird Text aus der Grafik vertikal oder gespiegelt extrahiert.

3. **Visuelle Evidenz geht verloren.**  
   Bei Organspende, automatischer Anmeldung, Menüeffekten und Trendfolge ist die Aussage primär in der Grafik sichtbar. Ohne Beschreibung ist der Lerneffekt deutlich schwächer.

4. **Bildhafte Beispiele fehlen fast vollständig.**  
   Marmeladen-Auswahl, Obst-vs.-Schokolade, Cartoon zur Trendfolge und visuelle Hervorhebungen werden in Markitdown nur unvollständig oder gar nicht erklärt.

5. **Layout-Hierarchien fehlen.**  
   Blaue Hervorhebungen, Zwischenresümees, Abschnittswechsel und visuelle Schwerpunktsetzung werden in Markdown zu einfachem Text nivelliert.

---

## 2. Empfohlene Struktur für die Umsetzung

Das Kapitel sollte nicht als reine Textzusammenfassung umgesetzt werden, sondern als Entscheidungslogik entlang von drei Leitfragen:

1. **Sollte man einem Sparplan beitreten?**  
   Hindernisse: Trägheit, Status quo, Default-Effekte, Komplexität.  
   Lösungen: automatische Anmeldung, einfache Auswahlmöglichkeiten.

2. **Wie viel soll man einzahlen?**  
   Hindernisse: Menüeffekte, runde Zahlen, Matching-Effekte, Gegenwartspräferenzen.  
   Lösungen: automatische Erhöhung, Zukunft greifbarer machen.

3. **Wie soll man anlegen?**  
   Hindernisse: naive Diversifikation, 1/N-Regel, Menüeffekte, Extrapolation.  
   Lösung: automatisches Rebalancing / Lebenszyklusfonds.

Für React bietet sich eine dreistufige Lernseite an:

- **Entscheidungs-Timeline:** Beitreten → Beitrag festlegen → Anlage wählen.
- **Bias-Karten:** Jeder Bias mit Mechanismus, Beleg, Beispiel, Gegenmaßnahme.
- **Diagramm-Rekonstruktionen:** Balken-/Liniencharts nicht als Bild kopieren, sondern als interaktive, saubere Charts nachbauen.

---

# 3. Folienweise Abbildungs- und Layoutbeschreibungen

---

## Folie 236 · Titelfolie

### PDF-Inhalt

Titelfolie mit HDBW-Branding, Bildstreifen im oberen Bereich und großem hellblauem Titelblock. Titel: **Kapitel 7 · Altersvorsorge und private Finanzplanung**.

### Visuelle Bedeutung

Keine fachliche Grafik, aber klare Kapitelmarkierung. Für die Umsetzung reicht ein Hero-Bereich mit:

- Modul: Behavioral Finance
- Kapitelnummer: 7
- Titel: Altersvorsorge und private Finanzplanung
- Optional: dezente Finanzplanungs-/Ruhestands-Illustration statt Hochschulbildstreifen.

### Markitdown-Verlust

Markitdown extrahiert nur Text; Branding und Startseitenwirkung fehlen.

---

## Folie 237 · Agenda

### PDF-Inhalt

Agenda mit zehn Kapiteln. Kapitel 7 ist blau hervorgehoben: **Altersvorsorge und private Finanzplanung**.

### Visuelle Bedeutung

Die Folie ordnet das Kapitel im Gesamtmodul ein. Die blaue Hervorhebung zeigt: aktueller Abschnitt ist Kapitel 7.

### Umsetzungshinweis

Als kleine Kapitel-Navigation oder Breadcrumb umsetzen:

`Behavioral Finance → Kapitel 7 → Altersvorsorge und private Finanzplanung`

---

## Folie 238 · Einführung in die Altersvorsorge

### PDF-Inhalt

Textfolie ohne eigenständige Abbildung. Kernaussage: Verhaltensökonomische Forschung ist für Altersvorsorge besonders relevant, weil Entscheidungen langfristig, selten korrigierbar und für viele Menschen fachlich komplex sind.

### Visuelle Umsetzung

Als Problembox mit vier Gründen darstellen:

| Grund | Bedeutung |
|---|---|
| Außergewöhnlich langer Anlagehorizont | Fehler wirken über Jahrzehnte. |
| Begrenzte Lernmöglichkeiten | Man erlebt den Ruhestand typischerweise nur einmal. |
| Geringe Finanzmarktkenntnisse | Entscheidungen werden trotz Unsicherheit getroffen. |
| Spar- und Anlageentscheidungen | Mehrere komplexe Entscheidungen greifen ineinander. |

---

## Folie 239 · Lebenszyklus-Hypothese

### PDF-Inhalt

Textfolie mit blauem Balken unten: **Argumente gegen das neoklassische Modell**.

### Fachliche Aussage

Das neoklassische Modell erwartet ein buckelförmiges Alterssparprofil: Menschen bauen Vermögen in der Erwerbsphase auf und verbrauchen es nach Eintritt in den Ruhestand. Empirisch zeigt sich aber:

- ältere Haushalte weisen oft weiterhin positive Sparquoten auf,
- das Konsumprofil wird stark vom Einkommensprofil beeinflusst.

### Umsetzungsidee

Eine Gegenüberstellung ist sinnvoll:

| Neoklassisches Modell | Empirischer Befund |
|---|---|
| Vermögen wird im Ruhestand abgebaut | Ältere Haushalte sparen teils weiter |
| Konsum soll geglättet sein | Konsum folgt häufig dem Einkommen |
| rational geplante Lebenszyklusoptimierung | Verhalten wird durch Biases und Unsicherheit beeinflusst |

Optional als kleines Diagramm: idealtypischer Vermögenshügel vs. empirische Abweichung.

---

## Folie 240 · Altersvorsorge bringt viele Entscheidungen mit sich

### PDF-Inhalt

Drei zentrale Entscheidungsfragen sind blau hervorgehoben:

1. Soll man einem Sparplan beitreten?
2. Wie hoch soll der Beitrag sein?
3. Wie soll man investieren?

### Visuelle Bedeutung

Diese Folie ist die zentrale Strukturfolie für das gesamte Kapitel. Sie bildet die spätere Dreiteilung.

### Umsetzungshinweis

Als drei große interaktive Karten darstellen:

| Karte | Leitfrage | Typische Risiken |
|---|---|---|
| Beitritt | Soll ich teilnehmen? | Trägheit, Status quo, Komplexität |
| Beitrag | Wie viel spare ich? | Gegenwartspräferenz, Faustregeln, Menüeffekte |
| Anlage | Wie investiere ich? | naive Diversifikation, Trendfolge, falsche Defaults |

---

## Folie 241 · Sparen für den Ruhestand I

### PDF-Inhalt

Abschnittsfolie mit drei Fragen. Frage I ist blau hervorgehoben: **Sollte man einem Sparplan beitreten?**

### Umsetzungshinweis

Als Fortschrittsindikator verwenden:

`1 Beitritt` aktiv, `2 Beitrag`, `3 Anlage` inaktiv.

---

## Folie 242 · Warum sollte man beitreten?

### PDF-Inhalt

Textfolie. Beitragsorientierte Vorsorgepläne werden als attraktive Sparinstrumente dargestellt:

- Übertragbarkeit und Flexibilität,
- Steuervorteile,
- Zuschuss des Arbeitgebers.

Trotzdem melden sich nicht alle an, wegen Ungeduld und Liquiditätsengpässen.

### Umsetzungsidee

Als Spannungsfeld visualisieren:

| Rationaler Nutzen | Verhaltensbarriere |
|---|---|
| Steuervorteile | Ungeduld |
| Arbeitgeberzuschuss | Liquiditätsengpass |
| langfristiger Vermögensaufbau | kurzfristiger Konsumdruck |

---

## Folie 243 · Free Lunch aus Großbritannien

### PDF-Inhalt

Fragefolie: Wie viele berechtigte Arbeitnehmer in Großbritannien nehmen an vollständig arbeitgeberfinanzierten leistungsorientierten Pensionsplänen teil?

### Visuelle Bedeutung

Die Folie funktioniert als Schätzfrage. Wichtig ist, dass keine Arbeitnehmerbeiträge anfallen. Es handelt sich also scheinbar um einen „free lunch“.

### Umsetzungsidee

Als interaktive Schätzfrage / Quiz-Karte:

> Wie hoch ist die Teilnahmequote, wenn der Arbeitgeber vollständig finanziert und Arbeitnehmer nichts einzahlen müssen?

Antwort erst nach Klick anzeigen lassen.

---

## Folie 244 · Free-Lunch-Antwort: 51 %

### PDF-Inhalt

Multiple-Choice-Liste mit Optionen 100 %, 90 %, 80 %, 70 %, 60 %, 50 %. Rechts unten ist ein großer blau umrandeter Kreis mit **51 %!**.

### Fachliche Aussage

Nur 51 % nehmen teil, obwohl der Plan vollständig arbeitgeberfinanziert ist. Das zeigt, dass selbst objektiv vorteilhafte Entscheidungen nicht automatisch getroffen werden.

### Markitdown-Verlust

Markitdown erkennt die Liste und die Zahl, aber nicht die visuelle Pointe: Der große Kreis macht die niedrige Quote als Überraschung sichtbar.

### Umsetzungshinweis

Als Reveal-Komponente:

- erst Schätzoptionen anzeigen,
- dann große Zahl **51 %** als Shock-Stat einblenden,
- darunter Interpretation: „Selbst kostenlose Vorteile werden wegen Trägheit und Entscheidungsvermeidung nicht vollständig genutzt.“

---

## Folie 245 · Organspende: Trägheit und Default-Effekt

### PDF-Inhalt

Balkendiagramm **Zustimmungsraten zur Organspende**. Länder mit Opt-in-System haben sehr niedrige Zustimmungsraten, Länder mit Opt-out-System sehr hohe.

### Diagrammwerte

| Land | System | Zustimmungsrate |
|---|---:|---:|
| Dänemark | Opt-in | 4 % |
| Niederlande | Opt-in | 28 % |
| Großbritannien | Opt-in | 17 % |
| Deutschland | Opt-in | 12 % |
| Österreich | Opt-out | 100 % |
| Belgien | Opt-out | 98 % |
| Frankreich | Opt-out | 100 % |
| Ungarn | Opt-out | 100 % |
| Polen | Opt-out | 100 % |
| Portugal | Opt-out | 100 % |
| Schweden | Opt-out | 86 % |

### Visuelle Logik

Die Grafik kontrastiert zwei Gruppen:

- **Opt-in:** Bürger müssen aktiv zustimmen → niedrige Zustimmungsraten.
- **Opt-out:** Bürger gelten standardmäßig als Zustimmung, sofern sie nicht widersprechen → extrem hohe Zustimmungsraten.

Die Balkenhöhen zeigen drastisch, wie stark Defaults Verhalten steuern. Der Unterschied ist nicht primär durch Präferenzen erklärbar, sondern durch die vorgegebene Standardoption.

### Markitdown-Verlust

Markitdown extrahiert die Grafik stark fehlerhaft: Länderbeschriftungen werden zerlegt und teilweise vertikal/unsinnig ausgegeben. Die klare Gruppenlogik Opt-in vs. Opt-out geht verloren.

### Umsetzungshinweis

Als gruppiertes Balkendiagramm oder Split-Chart umsetzen:

- linke Gruppe: Opt-in mit niedrigen Balken,
- rechte Gruppe: Opt-out mit hohen Balken,
- visuelle Annotation: „Default entscheidet oft stärker als Präferenz“.

---

## Folie 246 · Trägheit und Default-Effekte

### PDF-Inhalt

Textfolie. Default-Effekte werden als eines der robustesten Ergebnisse der angewandten Wirtschaftsliteratur beschrieben. Beispiele:

- Organspenden,
- Auswahl von Auto-Optionen,
- Kfz-Versicherungsschutz,
- Internet-Datenschutzeinstellungen,
- Altersvorsorge.

### Umsetzungsidee

Als „Default-Effekt-Matrix“ darstellen:

| Kontext | Wirkung des Defaults |
|---|---|
| Organspende | Zustimmung hängt stark vom Opt-in/Opt-out-System ab |
| Auto-Optionen | voreingestellte Pakete werden häufiger übernommen |
| Versicherungen | Standarddeckung beeinflusst Auswahl |
| Datenschutz | Nutzer behalten oft voreingestellte Optionen |
| Altersvorsorge | automatische Anmeldung erhöht Teilnahme |

---

## Folie 247 · Jam-Experiment: große Auswahl zieht an, lähmt aber

### PDF-Inhalt

Zweiteilige Abbildung mit Marmeladengläsern:

- oben: **6 JAMS** mit 6 kleinen Gläsern,
- unten: **24 JAMS** mit vielen Gläsern.

Daneben die Befunde:

| Auswahl | Vorbeikommende Kunden | Am Stand angehalten | Gekauft |
|---|---:|---:|---:|
| 6 Sorten | 260 | 40 % = 104 | fast 30 % = 31 |
| 24 Sorten | 242 | 60 % = 145 | nur 3 % = 4 |

### Visuelle Logik

Die große Auswahl ist zunächst attraktiver: 60 % halten an statt 40 %. Aber die Kaufentscheidung bricht ein: 3 % kaufen statt fast 30 %. Die Folie visualisiert den Unterschied durch die Menge der Marmeladengläser.

### Fachliche Aussage

Mehr Auswahl kann Aufmerksamkeit erhöhen, aber Entscheidung und Handlung verhindern. Das ist der Mechanismus der **Choice Overload / Entscheidungsüberlastung**.

### Markitdown-Verlust

Markitdown erfasst die Zahlen, aber die Bildlogik der zwei Auswahlsituationen und der Kontrast „attraktiv vs. lähmend“ wird nicht ausreichend deutlich.

### Umsetzungshinweis

Als Vergleichskarte mit zwei Spalten:

- **6 Sorten:** weniger attraktiv, aber höhere Conversion.
- **24 Sorten:** attraktiver, aber niedrigere Conversion.

Optional: Funnel-Diagramm `Vorbeikommen → Anhalten → Kaufen`.

---

## Folie 248 · Komplexität und Vermeidung von Entscheidungen

### PDF-Inhalt

Liniendiagramm zur Teilnahmequote in Abhängigkeit von der Anzahl angebotener Fonds.

- x-Achse: Anzahl der angebotenen Fonds von ca. 2 bis 57.
- y-Achse: Teilnahmequote von 50 % bis 80 %.
- rote Linie: sinkender Verlauf.

### Diagrammverlauf

Die Teilnahmequote liegt bei sehr wenigen Fonds ungefähr im Bereich von 74–75 %. Mit zunehmender Anzahl der Fonds sinkt sie schrittweise auf etwa 61 %. Kurzzeitig gibt es kleinere Schwankungen, aber der Gesamttrend ist klar negativ.

### Fachliche Aussage

Mehr Fondsoptionen erhöhen die Komplexität und senken die Teilnahmequote. Menschen vermeiden Entscheidungen, wenn die Auswahl zu umfangreich wird.

### Markitdown-Verlust

Markitdown enthält Achsen und Titel, aber nicht den Kurvenverlauf. Die zentrale Aussage „mehr Optionen → geringere Teilnahme“ muss ergänzt werden.

### Umsetzungshinweis

Als interaktives Line-Chart:

- x: Anzahl Fonds,
- y: Teilnahmequote,
- Annotation am rechten Rand: „Komplexität senkt Teilnahme“.

---

## Folie 249 · Lösungsvorschläge

### PDF-Inhalt

Textfolie mit zwei Fragen:

1. Wie kann man Trägheit überwinden?
2. Wie kann man komplexitätsbedingte Entscheidungsunfähigkeit überwinden?

### Umsetzungshinweis

Als Übergangsfolie / Decision-Checkpoint nutzen. Danach folgen automatische Anmeldung und einfache Auswahlmöglichkeiten.

---

## Folie 250 · Lösung 1: Automatische Anmeldung

### PDF-Inhalt

Balkendiagramm mit zwei Fällen von Choi et al. Es zeigt jeweils Teilnahmequoten vor und nach automatischer Anmeldung.

### Diagrammwerte

| Fall | Vor automatischer Anmeldung | Nach automatischer Anmeldung |
|---|---:|---:|
| Fall A von Choi et al. | 53 % | 91 % |
| Fall B von Choi et al. | 53 % | 88 % |

Zusätzlich nennt die Folie:

- Madrian und Shea (2001): 37 % Opt-in vs. 86 % Opt-out.
- Benartzi und Thaler (2007): durchschnittlicher Anstieg in 13 Unternehmen von 83 % auf 95 %.

### Visuelle Logik

Die Grafik zeigt, dass automatische Anmeldung die Teilnahmequote stark erhöht. Die grauen Balken stehen für die Situation vor automatischer Anmeldung, die blauen für danach.

### Markitdown-Verlust

Markitdown extrahiert die Zahlen, aber nicht sauber als Vorher-Nachher-Vergleich.

### Umsetzungshinweis

Als Before/After-Bar-Chart mit klarer Beschriftung:

- `Vorher: 53 %`,
- `Nachher: 91 % / 88 %`,
- Kernaussage: „Opt-out macht Teilnahme zum Standard.“

---

## Folie 251 · Automatische Anmeldung über Betriebszugehörigkeit

### PDF-Inhalt

Liniendiagramm **401(k) participation by tenure at firm**.

- x-Achse: Betriebszugehörigkeit in Monaten, 0 bis 48.
- y-Achse: Anteil der Mitarbeiter, die jemals teilgenommen haben, 0 % bis 100 %.
- Drei Kurven:
  - vor automatischer Anmeldung,
  - während automatischer Anmeldung,
  - nach Ende der automatischen Anmeldung.

### Diagrammverlauf

- **Opt-out / während automatischer Anmeldung:** Kurve steigt sehr schnell innerhalb der ersten Monate auf etwa 80 % und bleibt dann bei ca. 85 % stabil.
- **Opt-in / vor automatischer Anmeldung:** Kurve steigt langsam und erreicht nach 48 Monaten ungefähr 55–60 %.
- **Nach Ende der automatischen Anmeldung:** Kurve liegt ähnlich niedrig wie Opt-in und steigt langsam.

### Fachliche Aussage

Automatische Anmeldung wirkt sofort und stark. Ohne Default-Effekt steigt Teilnahme nur langsam mit der Betriebszugehörigkeit.

### Markitdown-Verlust

Markitdown enthält verdrehte Achsenbeschriftungen und Listenfragmente. Die drei Kurven und deren Bedeutung gehen weitgehend verloren.

### Umsetzungshinweis

Als Line-Chart mit drei Linien:

- Kurve `Opt-out`: steil nach oben, hohes Plateau,
- Kurve `Opt-in`: langsamer Anstieg,
- Annotation: „Default wirkt besonders in den ersten Monaten.“

---

## Folie 252 · Lösung 2: eindeutige, einfache Auswahlmöglichkeiten

### PDF-Inhalt

Balkendiagramm zur Schnellanmelde-Option:

- Vorher: 9 % Teilnahmequote in den ersten 4 Monaten der Beschäftigung.
- Nachher: 34 % Teilnahmequote.

Die Schnellanmelde-Option besteht aus:

- 2 % Sparquote,
- voreingestellter Vermögensaufteilung,
- einfacher Ja-/Nein-Entscheidung.

### Fachliche Aussage

Komplexität wird reduziert, indem nicht sofort viele Detailentscheidungen verlangt werden. Eine einfache, konkrete Option erhöht die Teilnahme deutlich.

### Umsetzungshinweis

Als Mini-Case darstellen:

> Aus vielen Einzelentscheidungen wird eine binäre Entscheidung: „Ja, ich starte mit 2 % und Default-Asset-Allocation.“

---

## Folie 253 · Zwischenresümee I

### PDF-Inhalt

Zwischenresümee zur Frage: **Sollte man einem Sparplan beitreten?**

Hindernisse:

- Trägheit und Status quo,
- Komplexität und Vermeidung von Entscheidungen.

Lösungen:

- automatische Anmeldung,
- eindeutige einfache Auswahlmöglichkeiten.

### Visuelle Bedeutung

Hindernisse sind schwarz, Lösungen grün. Dadurch wird klar zwischen Problem und Gegenmaßnahme getrennt.

### Umsetzungshinweis

Als Summary-Card mit zwei Spalten:

| Hindernis | Lösung |
|---|---|
| Trägheit / Status quo | Automatische Anmeldung |
| Komplexität | Einfache Auswahlmöglichkeiten |

---

## Folie 254 · Sparen für den Ruhestand II

### PDF-Inhalt

Abschnittsfolie. Frage II ist blau hervorgehoben: **Wie viel soll man einzahlen?**

### Umsetzungshinweis

Fortschrittsindikator aktualisieren:

`1 Beitritt` erledigt, `2 Beitrag` aktiv, `3 Anlage` inaktiv.

---

## Folie 255 · Wahl der Sparbeiträge

### PDF-Inhalt

Textfolie. Teilnehmer investieren laut USC weniger als eine Stunde in ihre Auswahl. Forschung zeigt, dass sie einfache Faustregeln nutzen:

- runde Zahlen,
- maximal zulässiger Beitrag,
- Beiträge, um maximalen Arbeitgeberzuschuss zu erhalten.

### Umsetzungsidee

Als Heuristik-Karte:

| Faustregel | Verhalten |
|---|---|
| Runde Zahlen | 5 %, 10 %, 15 % werden häufiger gewählt |
| Maximalbeitrag | Obergrenze wird als Orientierung genutzt |
| Arbeitgeber-Matching | Beitrag wird bis zur Zuschussgrenze gesetzt |

---

## Folie 256 · Menüeffekte (1): Verteilung der Sparraten

### PDF-Inhalt

Balkendiagramm mit Sparraten auf der x-Achse und prozentualem Anteil der Teilnehmer auf der y-Achse. Zwei Jahre werden verglichen: 2001 und 2002.

### Achsen

- x-Achse: Höhe der Sparrate: 1 %, 2 %, 3 %, 4 %, 5 %, 6 %, 7 %, 8 %, 9 %, 10 %, 11 %, 12 %, 13 %, 14 %, 15 %, 16 %, 17 %, 18 %, 20 %, 25 %, 30 %, 35 %, 40 %, 42 %, 100 %.
- y-Achse: Prozentualer Anteil der Teilnehmer, 0 % bis 30 %.

### Auffällige Balken

- Sehr hoher Peak bei **6 %**: ca. 28 % der Teilnehmer in beiden Jahren.
- Hoher Peak bei **10 %**: ca. 17 % in 2001 und über 20 % in 2002.
- Hoher Peak bei **15 %** in 2001: ca. 21 %, in 2002 deutlich niedriger.
- Weitere kleinere Peaks bei runden oder auffälligen Werten: 5 %, 8 %, 20 %, 25 %, 30 %, 40 %, 42 %, 100 %.

### Fachliche Aussage

Teilnehmer wählen Sparraten nicht rein individuell optimal, sondern orientieren sich stark an angebotenen Menüpunkten, runden Zahlen und auffälligen Vorgaben. Die Verteilung ist nicht glatt, sondern zeigt Cluster.

### Markitdown-Verlust

Markitdown extrahiert die x-Achse teilweise als verdrehten Text und verliert die Balkenstruktur. Ohne Beschreibung ist der Menüeffekt nicht erkennbar.

### Umsetzungshinweis

Als Histogramm/Bar-Chart umsetzen. Zusätzlich Peaks markieren:

- `6 %` als möglicher Default-/Matching-/Menüanker,
- `10 %` als runde Zahl,
- `15 %` als auffälliger Menüpunkt.

---

## Folie 257 · Menüeffekte (2): Matching und runde Zahlen

### PDF-Inhalt

Balkendiagramm für Sparraten von 1 % bis 15 %. Vergleich:

- 1999,
- 2001 mit Matching bei 4 %.

### Achsen

- x-Achse: Sparrate 1 % bis 15 %.
- y-Achse: Anteil der Teilnehmer, 0 % bis 4 %.

### Auffällige Muster

- Bei **4 %** steigt der blaue Balken 2001 deutlich auf knapp 4 %. Das ist als **Matching-Effekt** markiert.
- Bei **5 %, 10 % und 15 %** sind auffällige Balken sichtbar. Diese werden als **Effekt runder Zahlen** beschriftet.
- Pfeile im Diagramm verweisen explizit auf den Matching-Effekt und den Effekt runder Zahlen.

### Fachliche Aussage

Teilnehmer setzen Beiträge nicht nur aufgrund optimaler Finanzplanung, sondern reagieren auf externe Anker:

- Arbeitgeber-Matching bei 4 % zieht Beiträge zu 4 %.
- Runde Zahlen wie 5 %, 10 %, 15 % wirken als kognitive Vereinfachung.

### Markitdown-Verlust

Die Pfeile und Beschriftungen sind fachlich entscheidend, werden aber nur als Textfragmente extrahiert.

### Umsetzungshinweis

Als Bar-Chart mit Annotationen:

- Pfeil bei 4 %: „Matching-Effekt“.
- Pfeile bei 5 %, 10 %, 15 %: „Runde-Zahlen-Effekt“.

---

## Folie 258 · Gegenwartsgerichtete Präferenzen: Obst vs. Schokolade

### PDF-Inhalt

Visualisierung eines Experiments:

- Zeitachse von links nach rechts.
- Links steht: **Heute wählen**.
- Rechts steht: **nächste Woche essen**.
- Frage: „Wenn Sie heute entscheiden würden, würden Sie Obst oder Schokolade für die nächste Woche wählen?“
- Abbildungen: Obst/Mandarinen und Lindt-Schokolade.
- Ergebnis rechts: Pfeil auf **70 % wählen Schokolade**.

### Visuelle Logik

Die Folie zeigt Gegenwartspräferenz bzw. dynamische Inkonsistenz. Obwohl die Entscheidung die nächste Woche betrifft, wählen viele Menschen die unmittelbar verlockende Option Schokolade.

### Fachliche Aussage

Menschen planen nicht immer nach langfristigem Nutzen. Gegenwartsnahe Belohnungen oder emotional attraktive Optionen beeinflussen Entscheidungen stark. Für Altersvorsorge bedeutet das: aktueller Konsum wird gegenüber künftigem Nutzen oft übergewichtet.

### Markitdown-Verlust

Markitdown nennt die Zeitstruktur und das Ergebnis, aber die Bildlogik mit Obst vs. Schokolade und dem Ergebnis-Pfeil geht verloren.

### Umsetzungshinweis

Als kleine Entscheidungs-Simulation:

- Nutzer wählt „Obst“ oder „Schokolade“.
- Danach Reveal: „In der Studie wählten 70 % Schokolade.“
- Transferbox: „Bei Altersvorsorge entspricht Schokolade dem heutigen Konsum, Obst dem langfristigen Nutzen.“

---

## Folie 259 · Lösung 3: Automatische Erhöhung

### PDF-Inhalt

Textfolie zum SMarT-Programm nach Thaler und Benartzi (2004): 286 Mitarbeiter trafen sich mit einem Finanzberater.

Ergebnisse:

| Gruppe | Anzahl | Anteil |
|---|---:|---:|
| Empfehlung angenommen | 79 | 28 % |
| SMarT-Programm angenommen | 162 | 57 % |
| SMarT-Programm abgelehnt | 45 | 15 % |

### Fachliche Aussage

Automatische oder vorab vereinbarte zukünftige Erhöhungen umgehen Gegenwartspräferenzen. Menschen akzeptieren höhere Sparquoten eher, wenn diese erst in Zukunft greifen.

### Umsetzungsidee

Als Donut-Chart oder Entscheidungsbaum:

`286 Mitarbeiter → 28 % direkte Empfehlung → 57 % SMarT → 15 % Ablehnung`

---

## Folie 260 · Lösung 4: Triff dein altes Ich

### PDF-Inhalt

Textfolie mit Studienbefund: Teilnehmer, die mit ihrem zukünftigen Selbst konfrontiert wurden, zahlten mehr als doppelt so viel in den Altersvorsorgeplan ein.

Werte:

| Bedingung | Durchschnittlicher Beitrag | Standardabweichung |
|---|---:|---:|
| aktuelles Selbst | 80 $ | 130 $ |
| zukünftiges Selbst | 172 $ | 214 $ |

### Fachliche Aussage

Wenn das zukünftige Selbst emotional greifbarer wird, steigt die Bereitschaft zu sparen. Altersvorsorge leidet oft darunter, dass der zukünftige Nutzen abstrakt bleibt.

### Umsetzungsidee

Als Split-Card:

- links: „Ich heute“ → 80 $
- rechts: „Ich im Alter“ → 172 $
- zentrale Aussage: „Zukunft greifbar machen verdoppelt ungefähr den Beitrag.“

---

## Folie 261 · Zwischenresümee II

### PDF-Inhalt

Zwischenresümee zur Frage: **Wie viel soll man einzahlen?**

Hindernisse:

- Menüeffekte,
- gegenwartsorientierte Präferenzen.

Lösungen:

- intelligente Standardeinstellungen und automatische Erhöhung,
- Zukunft greifbarer machen.

### Umsetzungshinweis

Als Summary-Card:

| Hindernis | Lösung |
|---|---|
| Menüeffekte | intelligente Defaults |
| Gegenwartspräferenzen | automatische Erhöhung / zukünftiges Selbst sichtbar machen |

---

## Folie 262 · Sparen für den Ruhestand III

### PDF-Inhalt

Abschnittsfolie. Frage III ist blau hervorgehoben: **Wie soll man anlegen?**

### Umsetzungshinweis

Fortschrittsindikator:

`1 Beitritt` erledigt, `2 Beitrag` erledigt, `3 Anlage` aktiv.

---

## Folie 263 · Anlageentscheidung

### PDF-Inhalt

Textfolie. Teilnehmer folgen naiven Anlagestrategien. Die Wahl der Vorsorgepläne wird beeinflusst durch:

- Anzahl der angebotenen Optionen,
- Präsentationsform,
- Form des Arbeitgeberzuschusses.

### Umsetzungsidee

Als „Was beeinflusst Asset Allocation?“-Karte:

| Einflussfaktor | Möglicher Effekt |
|---|---|
| Anzahl der Fonds | verändert wahrgenommene Normalverteilung |
| Präsentation | Anzahl der Zeilen, Reihenfolge, Defaults wirken als Anker |
| Arbeitgeberzuschuss | Unternehmensaktien können übergewichtet werden |

---

## Folie 264 · 1/N-Regel und Menüeffekte

### PDF-Inhalt

Große Tabelle mit zwei Vorsorgeplänen:

| Plan | Anzahl festverzinslicher Fonds | Anzahl Aktienfonds | Allokation in Aktien |
|---|---:|---:|---:|
| University of California | 4 | 1 | 34 % |
| TWA | 1 | 5 | 75 % |

Darunter: Bedingte 1/N-Heuristik:

- Teilnehmer wählen 3 bis 4 Fonds aus.
- Anschließend verteilen sie ihr Geld gleichmäßig.

### Visuelle Logik

Die Tabelle zeigt: Die angebotene Menüstruktur beeinflusst die Aktienquote. Wenn viele Aktienfonds angeboten werden, steigt die Aktienallokation. Wenn viele festverzinsliche Fonds angeboten werden, sinkt die Aktienallokation.

### Fachliche Aussage

Teilnehmer diversifizieren naiv über die angebotenen Optionen, statt eine strategisch optimale Asset Allocation zu wählen.

### Markitdown-Verlust

Markitdown erfasst die Tabelle, aber die visuelle Betonung der extrem unterschiedlichen Aktienallokationen 34 % vs. 75 % geht verloren.

### Umsetzungshinweis

Als Vergleichsmodul:

- zwei Plan-Karten nebeneinander,
- große Kennzahlen `34 % Aktien` vs. `75 % Aktien`,
- Erklärung: „Nicht Präferenz, sondern Menüstruktur verschiebt Allokation.“

---

## Folie 265 · Menüeffekte und Komplexität

### PDF-Inhalt

Textfolie mit quantitativen Effekten pro 10 zusätzliche Fonds:

- Geldmarktallokation steigt um 4 %.
- Geldmarkt + Anleihen steigt um 5,4 %.
- Wahrscheinlichkeit, dass ein Teilnehmer Aktienbestände hält, sinkt um 3,1 % bis 4,6 %.

### Fachliche Aussage

Mehr Fondsoptionen führen nicht automatisch zu besserer Diversifikation. Mehr Komplexität kann risikoärmere oder vermeidende Entscheidungen fördern.

### Umsetzungsidee

Als Impact-Card:

`+10 Fonds` → `+4 % Geldmarkt`, `+5,4 % Geldmarkt/Anleihen`, `-3,1 bis -4,6 % Aktienbeteiligung`.

---

## Folie 266 · Menüeffekte und Anzahl der Zeilen

### PDF-Inhalt

Zitat zur Auswahloberfläche:

> „… geben Sie bitte an, wie Sie Ihre Altersvorsorgebeiträge aufteilen möchten. Sie können bis zu vier Fonds auswählen. (Wenn Sie mehr als vier Fonds auswählen möchten, klicken Sie bitte hier.)“

### Visuelle Bedeutung

Die Folie bereitet die folgende Grafik vor: Schon die Anzahl sichtbarer Zeilen im Formular beeinflusst, wie viele Fonds ausgewählt werden.

### Umsetzungsidee

Als UI-Mockup darstellen:

- Formular mit 4 sichtbaren Fonds-Zeilen,
- Link „mehr als vier Fonds auswählen“,
- Hinweis: UI begrenzt gedanklich die normale Auswahl.

---

## Folie 267 · Menüeffekte und Anzahl der Zeilen: Balkendiagramm

### PDF-Inhalt

Balkendiagramm **Number of Funds Selected**. Vergleich zweier Formularvarianten:

- orange: **4 lines on form**,
- blau: **8 lines on form**.

### Diagrammwerte

| Anzahl ausgewählter Fonds | 4 Zeilen im Formular | 8 Zeilen im Formular |
|---:|---:|---:|
| 1 | 8 % | 8 % |
| 2 | 10 % | 5 % |
| 3 | 23 % | 19 % |
| 4 | 50 % | 29 % |
| 5 | 4 % | 20 % |
| 6 | 4 % | 12 % |
| 7 | 1 % | 4 % |
| 8 | 1 % | 4 % |

### Visuelle Logik

Bei 4 sichtbaren Zeilen wählen 50 % genau 4 Fonds. Bei 8 sichtbaren Zeilen verteilt sich die Auswahl stärker nach rechts: 5 bis 8 Fonds werden deutlich häufiger gewählt. Das Formularlayout setzt also einen Anker.

### Fachliche Aussage

Die Benutzeroberfläche beeinflusst die Anlageentscheidung. Menschen interpretieren sichtbare Zeilen als implizite Empfehlung oder Norm.

### Markitdown-Verlust

Markitdown erkennt die Folie nahezu gar nicht; die Grafikdaten fehlen fast vollständig. Diese Folie muss zwingend rekonstruiert werden.

### Umsetzungshinweis

Als interaktives Formular-Experiment:

- Toggle: `4 Zeilen` vs. `8 Zeilen`,
- darunter Balkendiagramm aktualisieren,
- Erklärung: „Die sichtbare Formularlänge beeinflusst die Anzahl ausgewählter Fonds.“

---

## Folie 268 · Menüeffekte und Unternehmensaktien

### PDF-Inhalt

Textfolie. Kernaussagen:

- Einige Unternehmen zahlten Arbeitgeberzuschüsse früher in Form von Unternehmensaktien.
- Ende 2004 machten Unternehmensaktien durchschnittlich 26,5 % des typischen Planvermögens aus.
- Mehr als jeder vierte Arbeitnehmer hielt mehr als 50 % seines Guthabens in Aktien seines Arbeitgebers.
- Seitdem ging der Anteil stetig zurück.

### Fachliche Bedeutung

Arbeitgeberaktien können durch Menüstruktur und Zuschussform übergewichtet werden. Dadurch entsteht Klumpenrisiko: Arbeits Einkommen und Vermögen hängen am gleichen Unternehmen.

### Umsetzungsidee

Als Risiko-Warnkarte:

| Befund | Risiko |
|---|---|
| 26,5 % Unternehmensaktien im Planvermögen | Konzentrationsrisiko |
| >25 % der Arbeitnehmer mit >50 % Arbeitgeberaktien | starke Abhängigkeit vom eigenen Arbeitgeber |
| Rückgang seit 2004 | Lernen/Regulierung/Bewusstseinswandel |

---

## Folie 269 · Trendfolge / Extrapolation: Cartoon

### PDF-Inhalt

Cartoon: Eine Person sitzt vor einem Fernseher/Monitor mit der Aufschrift **Stock Market**. Der Monitor zeigt eine stark schwankende Börsenlinie. In der Sprechblase steht mehrfach abwechselnd:

- „I can retire!“
- „I can't retire!“

Eine weitere Person steht daneben. Die Szene karikiert, dass der Ruhestandsplan emotional mit kurzfristigen Börsenschwankungen mitschwankt.

### Fachliche Aussage

Trendfolge und Extrapolation führen dazu, dass Menschen aktuelle Marktbewegungen überbewerten. Kurzfristige Gewinne erzeugen übertriebenen Optimismus, kurzfristige Verluste übertriebene Sorge.

### Markitdown-Verlust

Markitdown extrahiert nur den Titel, nicht den Cartoon. Dadurch fehlt die emotionale und didaktische Pointe der Folie.

### Umsetzungshinweis

Als Illustration oder Comic-Card nachbauen:

- links: Person verfolgt Marktchart,
- rechts: Anzeige „Retirement Confidence“ schwankt stark,
- Caption: „Kurzfristige Marktbewegungen werden fälschlich in die Zukunft extrapoliert.“

---

## Folie 270 · Trendfolge: Aktienallokation neuer Teilnehmer

### PDF-Inhalt

Balkendiagramm: **Die Aktienallokation neuer Teilnehmer im Vergleich zu allen Planteilnehmern**.

- x-Achse: Jahre 1992 bis 2002.
- y-Achse: Anteil neuer Beiträge in Aktien, ca. 50 % bis 80 %.
- weiße Balken: neue Teilnehmer.
- schwarze Balken: alle Teilnehmer.
- Orange Markierung um Wert 2002 bei neuen Teilnehmern: 54 %.

### Diagrammwerte

| Jahr | Neue Teilnehmer | Alle Teilnehmer |
|---:|---:|---:|
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
| 2002 | 54 % | 64 % |

### Visuelle Logik

Neue Teilnehmer reagieren stärker auf aktuelle Marktlage als bestehende Teilnehmer. Während der starken Aktienmarktphase steigt ihre Aktienallokation deutlich bis über 70 %. Nach dem Einbruch um 2001/2002 fällt sie bei neuen Teilnehmern stark auf 54 %, während alle Teilnehmer noch bei 64 % liegen.

### Fachliche Aussage

Neue Anleger extrapolieren jüngste Marktentwicklungen stärker. Sie investieren nach guten Aktienjahren mehr in Aktien und nach schlechten Phasen weniger. Das kann zu prozyklischem Anlageverhalten führen: teuer kaufen, nach Verlustphasen Risiko reduzieren.

### Markitdown-Verlust

Markitdown extrahiert hier sehr viele fremde Fragmente aus der eingebetteten Paper-Grafik, inklusive englischer Fußnoten und teilweise falscher Tabellenstruktur. Die eigentliche Balkengrafik muss neu beschrieben und sauber rekonstruiert werden.

### Umsetzungshinweis

Als grouped bar chart:

- x: Jahr,
- Serie 1: neue Teilnehmer,
- Serie 2: alle Teilnehmer,
- Highlight 2002: neuer Teilnehmerwert 54 %,
- Annotation: „Neue Teilnehmer reagieren stärker auf vergangene Marktperformance.“

---

## Folie 271 · Lösung 5: automatische Neugewichtung von Fonds

### PDF-Inhalt

Textfolie. Mitchell et al. (2009) analysieren einen Datensatz von einer Viertelmillion 401(k)-Teilnehmern aus über 250 Plänen mit Einführung von Lebenszyklusfonds.

Teilnehmer, die Lebenszyklusfonds wählen, verbessern ihre Portfolios:

- höherer Aktienanteil,
- weniger extreme Vermögensallokationen,
- geringeres nicht-systematisches Risiko.

Lebenszyklusfonds / Target Maturity Funds gehören in diese Kategorie.

### Fachliche Aussage

Automatisches Rebalancing und altersabhängige Zielportfolios können Anleger vor naiven, extremen oder trendgetriebenen Entscheidungen schützen.

### Umsetzungsidee

Als Rebalancing-Flow:

`Alter / Zieljahr` → `automatische Asset Allocation` → `regelmäßige Anpassung` → `reduziertes Klumpen-/Extremrisiko`

---

## Folie 272 · Zwischenresümee III

### PDF-Inhalt

Zwischenresümee zur Frage: **Wie soll man anlegen?**

Hindernisse:

- naive Diversifizierung und Menüeffekte,
- Trendfolge.

Lösung:

- automatisches Rebalancing der Fonds.

### Umsetzungshinweis

Als finale Summary-Card:

| Hindernis | Lösung |
|---|---|
| naive Diversifizierung / Menüeffekte | automatische, professionell voreingestellte Portfolios |
| Trendfolge | Rebalancing / Target-Maturity-Fonds |

---

# 4. Wichtigste Markitdown-Korrekturen

## Korrektur 1 · Folie 245 Organspende

Markitdown erzeugt aus dem Balkendiagramm unlesbare Tabellenfragmente. Für die Umsetzung müssen Länder, Systeme und Zustimmungsraten manuell aus der PDF rekonstruiert werden.

## Korrektur 2 · Folie 248 Fondsanzahl und Teilnahmequote

Markitdown gibt nur Achsentexte aus. Die rote fallende Kurve muss als inhaltliche Aussage ergänzt werden: mehr angebotene Fonds senken die Teilnahmequote.

## Korrektur 3 · Folie 251 automatische Anmeldung

Die Achsenbeschriftung wird verdreht. Die Kernaussage der drei Kurven fehlt. Wichtig ist der starke Unterschied zwischen Opt-out und Opt-in.

## Korrektur 4 · Folie 256/257 Menüeffekte

Die Achsen und Balkenwerte werden nicht sauber übertragen. Besonders die Peaks bei 6 %, 10 %, 15 % sowie der Matching-Effekt bei 4 % sind prüfungsrelevant.

## Korrektur 5 · Folie 267 Formularzeilen

Diese Folie ist in Markitdown praktisch unbrauchbar. Das Balkendiagramm muss vollständig aus der PDF beschrieben oder nachgebaut werden.

## Korrektur 6 · Folie 269 Cartoon

Der Cartoon fehlt in Markitdown vollständig. Für das Verständnis von Trendfolge/Extrapolation sollte er als didaktische Illustration ersetzt oder beschrieben werden.

## Korrektur 7 · Folie 270 Trendfolge

Markitdown vermischt Grafikdaten mit Text aus einem eingebetteten Paper. Für die Umsetzung ausschließlich die sichtbare Grafik der Folie verwenden: Aktienallokation neuer Teilnehmer vs. alle Teilnehmer 1992–2002.

---

# 5. Priorität für visuelle Umsetzung

## Muss interaktiv oder visuell nachgebaut werden

1. **Folie 245:** Organspende Opt-in vs. Opt-out  
2. **Folie 247:** Jam-Experiment 6 vs. 24 Sorten  
3. **Folie 248:** Fondsanzahl vs. Teilnahmequote  
4. **Folie 250:** automatische Anmeldung Vorher/Nachher  
5. **Folie 251:** 401(k)-Teilnahme nach Betriebszugehörigkeit  
6. **Folie 256:** Sparraten-Menüeffekte  
7. **Folie 257:** Matching- und Rundezahlen-Effekt  
8. **Folie 258:** Obst-vs.-Schokolade / Gegenwartspräferenz  
9. **Folie 264:** 1/N-Regel mit UC vs. TWA  
10. **Folie 267:** Formularzeilen beeinflussen Fondsanzahl  
11. **Folie 269:** Cartoon zur Trendfolge  
12. **Folie 270:** Aktienallokation neuer Teilnehmer

## Kann als Text-/Summary-Card umgesetzt werden

- Folien 238–240 Einführung und Struktur,
- Folien 242–243 Free-Lunch-Frage,
- Folien 246, 249, 253, 255, 259–263, 265–266, 268, 271–272.

---

# 6. Empfohlene React-Komponenten

## `RetirementDecisionMap`

Drei Stationen:

1. Beitreten,
2. Beitrag festlegen,
3. Anlage wählen.

Jede Station enthält Hindernisse, Evidenz und Lösung.

## `BiasEvidenceCard`

Standardkomponente für jeden Bias:

- Name des Bias,
- Mechanismus,
- empirischer Beleg,
- Beispiel aus der Folie,
- Gegenmaßnahme.

## `DefaultEffectChart`

Für Organspende und automatische Anmeldung. Zeigt, dass Defaults Verhalten stark beeinflussen.

## `ChoiceOverloadDemo`

Interaktiver Vergleich 6 vs. 24 Marmeladensorten mit Funnel:

`Kunden → halten an → kaufen`.

## `SavingsRateMenuChart`

Balkendiagramm zu Menüeffekten bei Sparraten mit Highlight auf 4 %, 6 %, 10 %, 15 %.

## `FutureSelfCard`

Visualisiert aktuelles Selbst vs. zukünftiges Selbst mit Beitragswerten 80 $ vs. 172 $.

## `NaiveDiversificationSimulator`

Nutzer kann Anzahl Aktienfonds und Rentenfonds verändern. Die Komponente zeigt, wie naive 1/N-Aufteilung die Aktienquote verschiebt.

## `TrendFollowingChart`

Grouped Bar Chart 1992–2002 mit besonderem Fokus auf neue Teilnehmer und dem starken Rückgang 2002.

---

# 7. Kurze fachliche Zusammenfassung für Lernziel

Das Kapitel zeigt, dass Altersvorsorgeentscheidungen nicht nur durch Rendite, Risiko und Steuern bestimmt werden, sondern stark durch Verhaltensfaktoren:

- **Trägheit und Defaults** bestimmen, ob Menschen überhaupt teilnehmen.
- **Komplexität und Choice Overload** verhindern Entscheidungen, obwohl objektiv bessere Optionen verfügbar wären.
- **Menüeffekte** beeinflussen Sparquote und Asset Allocation.
- **Gegenwartspräferenzen** führen dazu, dass heutiger Konsum gegenüber zukünftiger Vorsorge übergewichtet wird.
- **Naive Diversifikation** und **Trendfolge** verzerren Anlageentscheidungen.
- Gute Gestaltung von Vorsorgeplänen nutzt daher automatische Anmeldung, einfache Auswahlmöglichkeiten, automatische Erhöhung, Zukunftsvisualisierung und automatisches Rebalancing.

---

# 8. Umsetzungssatz für Codex/Claude

Nutze diese Datei zusammen mit der Markitdown-Datei als verbindlichen visuellen Ergänzungsvertrag. Die Markitdown-Datei liefert den linearen Text, diese Datei liefert die verlorene visuelle und didaktische Logik der PDF. Rekonstruiere alle prüfungsrelevanten Diagramme nicht als statische Screenshots, sondern als saubere React-Komponenten mit erklärenden Captions, Quellenzeilen und interaktiven Highlights.
