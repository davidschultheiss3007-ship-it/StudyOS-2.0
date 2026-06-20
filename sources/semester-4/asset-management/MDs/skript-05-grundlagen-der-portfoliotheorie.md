Asset Management
Kapitel 5
Grundlagen der Portfoliotheorie
V26-04-23
Asset Management / CS / Folie 153 © 2026 – Hochschule der Bayerischen Wirtschaft

Agenda
1. Einführung
2. Traditionelle Assetklassen
3. Alternative Assetklassen
4. Mathematische und statistische Grundlagen
5. Grundlagen der Portfoliotheorie
6. Portfoliomanagement
7. Performanceanalyse
8. Indizes / Aktives vs. Passives Management
9. FinTechs im Asset Management / Robo Advisors
Asset Management / CS / Folie 154 © 2026 – Hochschule der Bayerischen Wirtschaft

Diversifikation nach Markowitz
Harry Max Markowitz
§ * 24. August 1927, † 22. Juni 2023
§ Begründer der modernen Portfoliotheorie
§ Wirtschaftsnobelpreis 1990
(zusammen mit Merton H. Miller und William Sharpe)
„for their pioneering work in the theory of financial economics”
§ „Contribution: Constructed a micro theory of portfolio management for
individual wealth holders”
§ "To reduce risk it is necessary to avoid a portfolio whose securities
are all highly correlated with each other. “
§ Fazit: Handlungsanweisungen zur bestmöglichen Kombination von
Anlagealternativen für die Bildung eines optimalen Portfolios
Asset Management / CS / Folie 155 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
§ Portfolio aus 2 Wertpapieren: Aktie und Corporate Bond
|     |                     |     | Aktie  |     | Bond   |
| --- | ------------------- | --- | ------ | --- | ------ |
|     | Erwartete Rendite   |     | 16,0%  |     | 6,0%   |
|     | Standardabweichung  |     | 14,0%  |     | 11,0%  |
Korrelation  0,5
| § w: Anteil, mit w | + w | = 1  |     |     |     |
| ------------------ | --- | ---- | --- | --- | --- |
A B
| § ρ | : Korrelation zwischen A(ktie) und B(ond): -1<ρ<+1  |     |     |     |     |
| --- | --------------------------------------------------- | --- | --- | --- | --- |
A,B
| § Wenn w | =1 dann E(r | ) = E(r | ) und σ | = σ  |     |
| -------- | ----------- | ------- | ------- | ---- | --- |
|          | A           | P       | A       | P A  |     |
| § Wenn w | =0 dann E(r | ) = E(r | ) und σ | = σ  |     |
|          | A           | P       | B       | P B  |     |
Asset Management / CS / Folie 156 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
2-Wertpapier-Portfolio
§ Erwartungswert 2-WP-Portfolio
|     |     |     | 8   | )   | =   | 9 ∗ | 8 ) | +   | 9   | ∗ 8 | )   |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     | @   |     | A   |     | A   |     | B   | B   |     |     |
§ Risiko 2-WP-Portfolio
|     | C   |     | C   | C   |     | C     | C   |     |     |     |     |        |       |
| --- | --- | --- | --- | --- | --- | ----- | --- | --- | --- | --- | --- | ------ | ----- |
|     | +   | = 9 | ∗   | +   | + 9 | ∗ +   | +   | 2   | ∗ 9 | ∗ 9 | ∗   | 234 ;, | =     |
|     | @   |     | A   | A   |     | B     | B   |     | A   |     | B   |        |       |
| +   | C = | 9 C | ∗ + | C + | 9 C | ∗ + C | + 2 | ∗   | 9 ∗ | 9   | ∗ + | ∗ +    | ∗ 7   |
|     | @   | A   |     | A   | B   | B     |     |     | A   | B   | A   | B      | A,B   |
|     |     |     | C   | C   | C   | C     |     |     |     |     |     |        |       |
| +   | =   | 9   | ∗   | + + | 9   | ∗ +   | +   | 2 ∗ | 9   | ∗ 9 | ∗ + | ∗ +    | ∗ 7   |
| @   |     |     |     |     |     |       |     |     | A   | B   |     | A      | B A,B |
|     |     | A   |     | A   | B   | B     |     |     |     |     |     |        |       |
Asset Management / CS / Folie 157 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Risiko großer Portfolios
C
§ Für große Portfolios ergibt sich die Varianz + durch:
D
1
C C C
+ = > 9 + + 2 > 9 9 + + 7
D * * * E * E *E
*+,
mit n = Anzahl der Wertpapiere
§ Zur Berechnung von Rendite und Risiko großer Portfolios mit n
Wertpapieren werden folgende Inputdaten benötigt:
– n Rendite-Erwartungen
– n Volatilitäten
– n(n-1)/2 Korrelationen
– Summe: n(n+3)/2
Asset Management / CS / Folie 158 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
2-Wertpapier-Portfolio
§ Beispiel: Portfolio aus Aktien und Bonds
rj
| p q   |         | r      | s      | s       |     |
| ----- | ------- | ------ | ------ | ------- | --- |
| h     | i       | h      | k      | l       |     |
| 6,0%  | 0,0121  | 11,0%  | 0,0%   | 100,0%  |     |
| 7,0%  | 0,0114  | 10,7%  | 10,0%  | 90,0%   |     |
↑	und P, ↓
t 2
m n
| 8,0%   | 0,0110  | 10,5%  | 20,0%  | 80,0%  |     |
| ------ | ------- | ------ | ------ | ------ | --- |
| 9,0%   | 0,0109  | 10,5%  | 30,0%  | 70,0%  |     |
| 10,0%  | 0,0112  | 10,6%  | 40,0%  | 60,0%  |     |
| 11,0%  | 0,0118  | 10,9%  | 50,0%  | 50,0%  |     |
| 12,0%  | 0,0127  | 11,3%  | 60,0%  | 40,0%  |     |
↑	und P,	↑
| 13,0%  | 0,0139  | 11,8%  | 70,0%  | 30,0%  | t 2 |
| ------ | ------- | ------ | ------ | ------ | --- |
m n
| 14,0%  | 0,0155  | 12,4%  | 80,0%   | 20,0%  |     |
| ------ | ------- | ------ | ------- | ------ | --- |
| 15,0%  | 0,0174  | 13,2%  | 90,0%   | 10,0%  |     |
| 16,0%  | 0,0196  | 14,0%  | 100,0%  | 0,0%   |     |
Asset Management / CS / Folie 159 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Das Minimum-Varianz-Portfolio
Der Diversifikationseffekt
§ Da A und B nicht perfekt miteinander korreliert sind, führt ein Portfolio aus
beiden Wertpapieren zu einem besseren μ-σ-Profil als ein Portfolio aus
nur einem der beiden Wertpapiere.
§ Diesen Effekt nennt man Diversifikation.
Asset Management / CS / Folie 160 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve
Effizienzkurve
§ Effiziente Portfolios liegen auf der sog. „Efficient Curve“.
§ Ein Portfolio ist genau dann effizient, wenn es zu diesem kein zweites gibt,
welches
– bei gegebenem Risiko eine höhere Renditeerwartung impliziert,
– bei gegebener Renditeerwartung mit einem geringeren Risiko einhergeht,
– sowohl eine höhere Rendite als auch niedrigeres Risiko aufweist.
§ = der positiv geneigte, konkav verlaufende Bereich oberhalb des Minimum-Varianz-
Portfolios
§ Portefeuilles auf der Effizienzkurve bieten dem Investor die höchst mögliche
Rendite bei einem gegebenem Risikolevel.
§ Rationale Investoren, deren Asset Allocation ausschließlich auf Rendite und Risiko
basiert, werden nur Portefeuilles auf der Effizienzgrenze akzeptieren.
§ Investoren, die ihre Risikotoleranz kennen, können so ihr optimales Portfolio
ableiten.
à Erhebliche Vereinfachung des Asset Allocation-Prozesses
Asset Management / CS / Folie 161 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve: Weiteres Beispiel
2 Aktien: Coca-Cola & Intel
ρ = 0
Coca-Cola,Intel
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 162 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Einfluss des Korrelationskoeffizienten
Der Einfluss des Korrelationskoeffizienten
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 163 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve
Der Einfluss des Korrelationskoeffizienten
§ Identische Endpunkte der Effizienzgrenze für alle
Korrelationskoeffizienten
§ ρ = 1 → Diversifikation sinnlos: Wertpapiere bewegen sich
stets und vollständig gleichläufig
§ ρ < 1 → ein bestimmtes Renditeniveau kann mit einer
geringeren Varianz erreicht werden als bei ρ=1
§ ρ = 0 → Risiken sind unabhängig voneinander,
keine Tendenz zu einer gemeinsamen Entwicklung
§ ρ = -1 → Minimum-Varianz-Grenze besteht aus zwei Geraden
mit Schnittpunkt bei σ=0
à Je niedriger die Korrelation, desto größer die Vorteile der
Diversifikation
Asset Management / CS / Folie 164 © 2026 – Hochschule der Bayerischen Wirtschaft

Korrelationsmatrix
Ausgewählte Asset Klassen
Quelle: Bloomberg, Goldman Sachs: Fünf-Jahres-Korrelationen auf Basis wöchentlicher Renditen, Stand 01.12.2017.
Asset Management / CS / Folie 165 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Verlängerung der Effizienzkurve durch Leerverkäufe
Leerverkäufe
§ Long Position (normale Situation)
– Positive Investition in ein Wertpapier.
§ Short Position
– Negative Investition in ein Wertpapier.
– Dabei handelt es sich um eine Transaktion, bei der ein Anleger heute
eine nicht in seinem Besitz befindliche Aktie mit der Verpflichtung
verkauft, die betreffende Aktie in der Zukunft zurückzukaufen.
– Der Leerverkauf ist profitabel, wenn erwartet wird, dass der Preis der
Aktie in der Zukunft sinkt.
Asset Management / CS / Folie 166 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Verlängerung der Effizienzkurve durch Leerverkäufe
Verlängerung der Effizienzkurve durch Leerverkäufe
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 167 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve für zahlreiche WP
Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren
§ Angenommen, in das Portfolio wird die Aktie von Bore Industries
aufgenommen.
§ Diese Aktie ist nicht mit Intel und Coca-Cola korreliert, sie weist eine sehr
niedrige Rendite von 2% und die gleiche Volatilität wie Coca-Cola (25%)
auf.
§ Obwohl Bore eine geringere Rendite und dieselbe Volatilität wie Coca-
Cola aufweist (also gegenüber Coca-Cola ineffizient ist), kann es
aufgrund von Diversifikationsvorteilen trotzdem nützlich sein, Bore in das
Portfolio aufzunehmen.
Asset Management / CS / Folie 168 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve für zahlreiche WP
Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 169 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve für zahlreiche WP
Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 170 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Effizienzkurve für zahlreiche WP
Effiziente Portfolios bestehend aus vielen Aktien / Wertpapieren
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 171 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Gemeinsames und unabhängiges Risiko
Gemeinsames und unabhängiges Risiko
Im folgenden wird analysiert, warum sich das Risiko eines einzelnen
Wertpapiers vom Risiko eines aus ähnlichen Wertpapieren bestehenden
Portfolios unterscheidet.
Begriffe
§ Gemeinsames Risiko: Risiko, das perfekt korreliert ist, Risiko, das alle
Wertpapiere betrifft
§ Unabhängiges Risiko: Risiko, das unkorreliert ist, Risiko, das eine
bestimmte Sicherheit betrifft
§ Diversifikation: Die Mittelwertbildung aus unabhängigen Risiken in
einem großen Portfolio
Asset Management / CS / Folie 172 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Gemeinsames und unabhängiges Risiko
Einbruchs- im Vergleich zur Erdbebenversicherung
Im Folgenden werden zwei Arten von Versicherungen betrachtet:
Einbruchsversicherungen und Erdbebenversicherungen.
§ In jedem Jahr besteht eine Wahrscheinlichkeit eines Einbruchs in das Haus von
einem Prozent sowie eine Wahrscheinlichkeit einer Beschädigung des Hauses
durch ein Erdbeben von circa einem Prozent.
§ Wir nehmen an, eine Versicherungsgesellschaft hat jeweils 100.000 Policen jedes
dieser Typen mit Eigenheimbesitzern in San Francisco abgeschlossen.
§ Da die Wahrscheinlichkeit eines Einbruchs in einem gegebenen Haus ein Prozent
beträgt, würden wir erwarteten, dass in circa ein Prozent der 100.000 Häuser
eingebrochen wird. Damit beläuft sich die Anzahl der Versicherungsansprüche
aufgrund eines Einbruchs auf circa 1.000 pro Jahr. Die tatsächliche Anzahl der
Ansprüche kann in jedem Jahr etwas, aber nicht viel höher oder niedriger sein.
§ In den meisten Jahren kommt es zu keinem Erdbeben. Da sich die Häuser aber in
der gleichen Stadt befinden, ist es im Falle eines Erdbebens wahrscheinlich, dass
alle Häuser betroffen sind und die Versicherungsgesellschaft in diesem Fall bis zu
100.000 Ansprüche zu erwarten hat.
Asset Management / CS / Folie 173 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Gemeinsames und unabhängiges Risiko
Einbruchs- im Vergleich zur Erdbebenversicherung
§ Damit führen die Erdbeben- und die Einbruchsversicherung, selbst wenn die
erwartete Anzahl der Ansprüche gleich ist, zu Portfolios mit sehr unterschiedlichen
Risikoeigenschaften.
§ Risikotypen
– Ein Risiko, das perfekt korreliert ist, wird als gemeinsames Risiko bezeichnet.
– Risiken, die keine Korrelation aufweisen, werden als unabhängige Risiken
bezeichnet.
– Das Ausgleichen unabhängiger Risiken in einem großen Portfolio wird als
Diversifikation bezeichnet.
Asset Management / CS / Folie 174 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Rolle der Diversifikation
Die Rolle der Diversifikation
Aus Sicht des Hausbesitzers
§ Für den Hausbesitzer ist die Standardabweichung für einen Verlust durch ein Erdbeben
und durch einen Diebstahl gleich hoch.
F(Anspruch) = RST(Anspruch)
= 0,99×(0 − 0,01)8 + 0,01×(1 − 0,01)8 = 9,95%
§ Der Prozentsatz der beim Erdbebenversicherer eingehenden Ansprüche ist ebenfalls
durchschnittlich gleich einem Prozent bei einer Standardabweichung von 9,95%.
Aus Sicht der Versicherung
§ Für die Standardabweichung des Einbruchsversicherers gilt:
Q(einzelner Anspruch)
Q(Prozentsatz Ansprüche aus Einbrüchen) =
Anzahl der Beobachtungen
9,95%
= = 0,03%
100.000
§ Somit besteht für den Versicherer kaum noch ein Risiko.
Asset Management / CS / Folie 175 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Rolle der Diversifikation
Diversifikation und Glücksspiel
In einem Roulettekessel sind normalerweise die Ziffern 1 bis 36 sowie die 0
angebracht. Jedes dieser Ergebnisse ist jedes Mal, wenn das Rad gedreht wird, gleich
wahrscheinlich. Wettet man auf eine Zahl und liegt richtig, ist die Auszahlung gleich
35:1. Wettet man EUR 1, so erhält man bei einem Gewinn EUR 36 (EUR 35 plus die
ursprünglichen EUR 1) oder nichts, wenn man verliert.
§ Sie setzen EUR 1 auf Ihre Lieblingszahl. Wie hoch ist der erwartete Gewinn des
Kasinos?
§ Wie hoch ist die Standardabweichung dieses Gewinns bei einem einzelnen
Spieleinsatz? Im gesamten Kasino werden in einem typischen Monat 9 Millionen
ähnliche Wetten abgegeben.
§ Wie hoch ist dann die Standardabweichung der durchschnittlichen Einnahmen des
Kasinos pro in jedem Monat gewetteten Euro?
Asset Management / CS / Folie 176 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Rolle der Diversifikation
Diversifikation und Glücksspiel
Lösung
Da im Roulettekessel 37 Zahlen angebracht sind, stehen die Chancen auf einen
Gewinn 1/37. Das Kasino verliert bei einem Gewinn EUR 35 und erzielt EUR 1, wenn
Sie verlieren. Erwarteter Gewinn des Kasinos:
|     |               |     | *   |         | ?@  |                 |     |
| --- | ------------- | --- | --- | ------- | --- | --------------- | --- |
|     |  t v03n)ℎG0(H |     | =   | ∗ −35	€ | +   | ∗ 1	€ = 0,027	€ |     |
|     |               |     | ?A  |         | ?A  |                 |     |
Diese Standardabweichung ist verglichen mit der Höhe der Gewinne recht hoch. Doch
wenn viele (im Monat 9 Millionen) solche Spieleinsätze erfolgen, wird das Risiko in
jedem Monat diversifiziert.
|               |     | *   |        |         | ?@  |              |            |
| ------------- | --- | --- | ------ | ------- | --- | ------------ | ---------- |
|  P v03n)ℎG0(H |     | =   | ∗ −35	 | − 0,027 | , + | ∗ 1	 − 0,027 | , = 5,84	€ |
|               |     | ?A  |        |         | ?A  |              |            |
0,pq	€
|     |  P l02{ℎ3{ℎ(.v03n)ℎG0(H |     |     |     | =   | = 0,0019	€ |     |
| --- | ----------------------- | --- | --- | --- | --- | ---------- | --- |
t.---.---
Asset Management / CS / Folie 177 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Diversifikation von Aktienportfolios
Unternehmensspezifisches und systematisches Risiko
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 178 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Diversifikation von Aktienportfolios
Unternehmensspezifisches und systematisches Risiko
§ Unternehmensspezifische Nachrichten: gute oder schlechte
Nachrichten über das Unternehmen an sich.
§ Marktweite Meldungen: Nachrichten, die alle Aktien beeinflussen, wie
z.B. über die Volkswirtschaft.
– Konjunkturschwankungen
– Zinsniveauveränderungen oder
– andere makroökonomische Größen.
Asset Management / CS / Folie 179 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Diversifikation von Aktienportfolios
Unternehmensspezifisches und systematisches Risiko
§ Schwankungen der Rendite einer Aktie aufgrund marktweiter Meldungen
stellen gemeinsame Risiken dar. Wie im Fall der Erdbeben betreffen
solche Nachrichten alle Aktien gleichzeitig. Diese Art Risiko wird auch als
systematisches, nicht diversifizierbares oder Marktrisiko bezeichnet.
§ Schwankungen der Rendite einer Aktie aufgrund
unternehmensspezifischer Risiken sind unabhängige Risiken. Diese
Art von Risiko wird auch als unternehmensspezifisches,
idiosynkratisches oder diversifizierbares Risiko bezeichnet. Wenn
viele Aktien in einem großen Portfolio kombiniert werden, dann gleichen
sich die firmenspezifischen Risiken für jede Aktie „im Mittel“ aus und
werden „wegdiversifiziert“.
Asset Management / CS / Folie 180 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Diversifikation von Aktienportfolios
Unternehmensspezifisches und systematisches Risiko
Wir betrachten nun zwei Arten von Unternehmen:
§ Unternehmen vom Typ S werden nur durch die wirtschaftliche Lage beeinflusst, im
Hinblick auf die eine Chance von 50 zu 50 besteht, dass sie gut oder schlecht ist.
§ Ist die wirtschaftliche Lage gut, erzielen Aktien von Unternehmen des Typs S eine
Rendite von 40%. Ist die wirtschaftliche Lage schlecht, beläuft sich die Rendite
dieser Unternehmen auf –20%.
§ Da diese Unternehmen mit systematischen Risiken der wirtschaftlichen Lage
konfrontiert werden, wird durch ein großes Portfolio aus Aktien von Unternehmen
des Typs S das Risiko nicht diversifiziert.
§ Unternehmen vom Typ I werden nur von idiosynkratischen,
unternehmensspezifischen Risiken beeinflusst.
§ Dabei ist es gleichermaßen wahrscheinlich, dass sich die Renditen aufgrund von
Faktoren, die für den lokalen Markt des Unternehmens spezifisch sind, auf 35%
oder –25% belaufen.
§ Da es sich hier um unternehmensspezifische Risiken handelt, wird das Risiko
eines Portfolios aus Aktien vieler Unternehmen des Typs I diversifiziert.
Asset Management / CS / Folie 181 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Diversifikation von Aktienportfolios
Unternehmensspezifisches und systematisches Risiko
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 182 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Diversifikation
Der Diversifikationseffekt in Abhängigkeit der Anzahl an Aktien
(Assets)
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 183 © 2026 – Hochschule der Bayerischen Wirtschaft
soiloftroP
sed
okisirtmaseG
Das Ausmaß der Diversifikationsgewinne
nimmt mit zunehmender Anzahl der Assets ab.
Unsystematisches Risiko
Systematisches Risiko
Anzahl Aktien (Assets)

Grundlagen der Portfoliotheorie
B
eisp
iel vo
n
 vo
rn
e
Portfolio aus 2 Wertpapieren: Aktie und Corporate Bond
|     |     |                     |     | Aktie  | Bond   |
| --- | --- | ------------------- | --- | ------ | ------ |
|     |     | Erwartete Rendite   |     | 16,0%  | 6,0%   |
|     |     | Standardabweichung  |     | 14,0%  | 11,0%  |
Korrelation  0,5
* #
| ( ) !  | " *            | !   + $   | + %     |     |     |
| ------ | -------------- | --------- | ------- | --- | --- |
| 6,0%   | 0,0121  11,0%  | 0,0%      | 100,0%  |     |     |
| 7,0%   | 0,0114  10,7%  | 10,0%     | 90,0%   |     |     |
| 8,0%   | 0,0110  10,5%  | 20,0%     | 80,0%   |     |     |
| 9,0%   | 0,0109  10,5%  | 30,0%     | 70,0%   |     |     |
| 10,0%  | 0,0112  10,6%  | 40,0%     | 60,0%   |     |     |
| 11,0%  | 0,0118  10,9%  | 50,0%     | 50,0%   |     |     |
| 12,0%  | 0,0127  11,3%  | 60,0%     | 40,0%   |     |     |
| 13,0%  | 0,0139  11,8%  | 70,0%     | 30,0%   |     |     |
| 14,0%  | 0,0155  12,4%  | 80,0%     | 20,0%   |     |     |
| 15,0%  | 0,0174  13,2%  | 90,0%     | 10,0%   |     |     |
| 16,0%  | 0,0196  14,0%  | 100,0%    | 0,0%    |     |     |
Asset Management / CS / Folie 184 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Bestimmung der Effizienkurve (2-Asset-Portfolio)
Bestimmung der Gewichtung von A (B) im Minimum-Varianz-Portfolio (MVP)
§ Betrachtet wird die Varianz
|     | P   | , = 7 , | ∗ P , | + 7 , | ∗ P , + | 2 ∗ 7 | ∗   | 7 ∗ | P ∗ P | ∗ | |
| --- | --- | ------- | ----- | ----- | ------- | ----- | --- | --- | ----- | --- |
|     |     |         |       |       |         |       | <   | =   | < =   | <,= |
|     |     | m <     | <     | =     | =       |       |     |     |       |     |
§ 7  wird ersetzt durch 1 − 7
= <
| ,   |     | , ,   |     |     | , ,   |     |     |     |       |         |
| --- | --- | ----- | --- | --- | ----- | --- | --- | --- | ----- | ------- |
| P   | = 7 | 8 P + | 1   | − 7 | 8 P + | 2 8 | 7 8 | 1 − | 7 8	P | 8 P 8 | |
| m   |     | < <   |     | <   | =     |     | <   |     | <     | < = <,= |
§ Die Funktion zur Bestimmung der Varianz wird nun nach 7 	abgeleitet und gleich
<
null gesetzt.
§ Man erhält:
|     |     |     |     |     | P, − | P P | |     |     |     |     |
| --- | --- | --- | --- | --- | ---- | --- | ----- | --- | --- | --- |
|     |     |     |     |     | =    | <   | = <,= |     |     |     |
7 =
|     |     |     |     | <   | P, P, |      |     |     |     |     |
| --- | --- | --- | --- | --- | ----- | ---- | --- | --- | --- | --- |
|     |     |     |     |     | +     | − 2P | P   | |   |     |     |
|     |     |     |     |     | < =   |      | < = | <,= |     |     |
Asset Management / CS / Folie 185 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Bestimmung der Effizienkurve (2-Asset-Portfolio)
Beispiel
|                     |     |          | Aktie  |         | Bond       |        |         |
| ------------------- | --- | -------- | ------ | ------- | ---------- | ------ | ------- |
| Erwartete Rendite   |     |          | 16,0%  |         | 6,0%       |        |         |
| Standardabweichung  |     |          | 14,0%  |         | 11,0%      |        |         |
| Korrelation         |     |          |        | 0,5     |            |        |         |
|                     | /   |          | 0,11/  |         |            |        |         |
|                     | t − | t t ç    |        | − 0,14  | 0 0,11     | 0 0,5  |         |
|                     | B   | 8 B 8,B  |        |         |            |        |         |
| S =                 |     |          | =      |         |            |        | = , àä |
| 8 t/                | t/  |          |        |         |            |        |         |
|                     | +   | − 2t t ç | 0,14/  | + 0,11/ | − 2 0 0,14 | 0 0,11 | 0 0,5   |
|                     |     | 8 B 8,B  |        |         |            |        |         |
8 B
§ Rendite im MVP = 8,7%
§ Volatilität im MVP = 10,45%
§ Realisierbare Renditen im effizienten Rand liegen daher zwischen 8,7%
und 16%.
§ Realisierbare Volatilitäten im effizienten Rand liegen daher zwischen 10,45%
und 14%.
Asset Management / CS / Folie 186 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Kritische Würdigung der Portfoliotheorie
§ Transaktionskosten:
– Portfoliotheorie nicht für beliebige Depotgrößen umsetzbar
(Depotgrößenproblematik).
§ Betrachtungszeitraum:
– 1 Periode. Timing-Problematik und Portfoliorevisions-Problematik
werden vernachlässigt.
§ Die Nutzung der Kennzahl Volatilität impliziert eine Normalverteilung der
Renditen.
§ Hohe Anzahl an Inputdaten:
– n Renditen, n Volatilitäten, n(n-1)/2 Korrelationen.
§ Input-Daten sind zeitlich instabil.
§ Irrationalität der Anleger.
Asset Management / CS / Folie 187 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Tobin-Separation
§ James Tobin (1918–2002) erweiterte 1958 den durch Harry M. Markowitz 1952
eingeführten Denkansatz zur Optimierung von Portfolios, indem er die Möglichkeit
der sicheren Geldanlage miteinbezog.
§ Annahmen:
– Vollkommener Kapitalmarkt
– Existenz eines risikolosen Assets F zu dem Anleger Kapital aufnehmen und
| anlegen können mit Zinssatz 2 |     |     | 	und Volatilität P |     |     | = 0 |     |     |
| ----------------------------- | --- | --- | ------------------ | --- | --- | --- | --- | --- |
|                               |     |     | u                  |     | u   |     |     |     |
– Existenz eines risikobehafteten Assets P erwarteter Rendite B 	und
n
| Volatilität P | = 0 |     |     |     |     |     |     |     |
| ------------- | --- | --- | --- | --- | --- | --- | --- | --- |
n
§ Aufteilung des Anlagebetrages in mit einem Anteil x und F mit einem Anteil 1-x
| ergibt eine erwartete Gesamtrendite B |     |       |         | 4         |       |         |         |     |
| ------------------------------------- | --- | ----- | ------- | --------- | ----- | ------- | ------- | --- |
|                                       |     | B 4   | = 4 8 B | + 1 −     | 4 8 2 |         |         |     |
|                                       |     |       |         | n         | u     |         |         |     |
| § Mit einem Gesamtrisiko P            |     | 4     |         |           |       |         |         |     |
| 4,                                    | P,  |       | , P,    |           |       |         |         |     |
| P 4 =                                 | 8 + | 1 − 4 | 8 +     | 2 8 4 8 1 | − 4   | 8	P 8 P | 8 | = 4 | 8 P |
|                                       | n   |       | u       |           |       | n u     | u,n     | n   |
Asset Management / CS / Folie 188 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Tobin-Separation
Herleitung der Kapitalmarktlinie (Capital Market Line, CML)
| (1)  | y 9 = | 9 0 y | + 1 − 9 | 0 5 	= | 5 + y | − 5 0 9 |     |     |
| ---- | ----- | ----- | ------- | ------ | ----- | ------- | --- | --- |
|      |       |       | !       | '      | ' !   | '       |     |     |
r <
| (2)  |  t 9 = | 9 0 t | ⟹ 9 = |     |     |     |     |     |
| ---- | ------ | ----- | ----- | --- | --- | --- | --- | --- |
!
r
9
(2) eingesetzt in (1) ergibt die Gleichung der Kapitalmarktlinie
s :"
9 ;
|     | y   | 9   | = 5 + | 0 t | 9     bzw.      | y 9 | = 5 + | é 0 t 9 |
| --- | --- | --- | ----- | --- | --------------- | --- | ----- | ------- |
|     |     |     | '     |     |                 |     | '     |         |
r
9
t
Asset Management / CS / Folie 189 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Tobin-Separation
Kapitalmarktlinie
v /#
( )
B 4 = 2 + 8 P 4
u
w
(
y
!
5
'
t
!
Asset Management / CS / Folie 190 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Tobin-Separation
§ Die Steigung der Kapitalmarktlinie + " ,- # setzt die Überrendite ins
.
"
Verhältnis zum eingegangenen Risiko à je höher umso besser
M =
M Marktportfolio als
Tangentialportfolio auf
der Kapitalmarktlinie
Asset Management / CS / Folie 191 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Tobin-Separation
Tobin-Separation
§ Das Marktportfolio der risikobehafteten Anlage kann unabhängig von
der Risikoeinstellung des Investors bestimmt werden. Es ist der
Tangentialpunkt auf der Tangente (Kapitalmarktlinie, Capital Market Line,
CML) mit der Effizienzkurve. Das Marktportfolio ist für alle Investoren
gleich, sofern von homogenen Erwartungen ausgegangen wird.
§ Das optimale Portfolio ist dagegen abhängig vom individuellen Zinssatz
sowie der individuellen Risikoeinstellung des Investors. Es liegt auf der
Kapitalmarktlinie, die alle effizienten Portfolios wiedergibt.
§ Die Trennung der Finanzierungsentscheidung (links oder rechts von M)
von der Anlageentscheidung (nur Punkte auf CML sind effizient) wird als
Tobin-Separation bezeichnet.
Asset Management / CS / Folie 192 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Tobin-Separation
Praktische Anwendung bei Investmentfonds
Asset Management / CS / Folie 193 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Die Capital Market Line (CML)
Die Capital Market Line (CML)
§ CML: Bestimmung des Marktpreises des Risikos unter
Unsicherheit
§ Die CML ist der geometrische Ort aller effizienten μ-σ-
Kombinationen, wenn alle Investoren homogene Erwartungen
bzgl. Erwartungsrenditen, Varianz und Korrelationskoeffizienten
riskanter Assets haben
§ Alle Anleger wollen in dasselbe Tangentialportfolio investieren
§ Im Gleichgewicht entspricht das Tangentialportfolio einem Portfolio
aller (!) riskanten Assets, gewichtet mit ihren Marktwerten
§ Marktportfolio ist vollständig diversifiziert à nicht beobachtbar
Asset Management / CS / Folie 194 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Das Marktportfolio
Marktwerte des globalen Marktportfolios 2012 (USD Bio.)
Quelle: Doeswijk R./Lam, T. (2014) The Global Multi-Asset Market Portfolio, 1959-2012, in: FAJ, Vol. 70, Nr. 2, S. 26-41
Asset Management / CS / Folie 195 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Das Capital Asset Pricing Modell (CAPM)
Welches Risiko ist in einer Welt mit Marktportfolio relevant?
§ Markowitz: Das Risiko, ein Wertpapier im Portefeuille aufzunehmen, wird durch
die Kovarianz mit allen anderen Wertpapieren im Portfolio bestimmt
§ CML: Das einzige relevante Portefeuille ist das Marktportefeuille
à Die einzige Überlegung, ein Wertpapier in ein Portefeuille aufzunehmen,
ist die Kovarianz des Wertpapiers mit dem Marktportefeuille
§ Die Kovarianz ist daher das relevante Risikomaß riskanter Assets
Zur Erinnerung:
Capital Market Line
< = = $ +
&&'('
2@ =
%
)&
Asset Management / CS / Folie 196 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Das Capital Asset Pricing Modell (CAPM)
§ Das unsystematische Risiko kann durch Diversifikation vollständig
vermieden werden. Das systematische Risiko lässt sich nicht
„wegdiversifizieren“.
§ Der Investor erhält eine Risikoprämie für die Übernahme von Risiken.
Dabei wird er jedoch nur für die Übernahme des systematischen Risikos
entlohnt.
§ Das CAPM ist ein Gleichgewichtsmodell, in dem die erwartete Rendite
eines Assets eine lineare Funktion seines systematische Risikos,
ausgedrückt durch den Beta-Faktor è, ist.
|     |       |         |               | u#v | " ," | r     |
| --- | ----- | ------- | ------------- | --- | ---- | ----- |
| ê 5 | = 5 + | ë 0 ê 5 | − 5    mit  ë | =   | , A  | = ç , |
| +   | '     | + $     | '             | +   | 7    | +,$   |
|     |       |         |               |     | r    | r     |
A A
§ Diese lineare Funktion (bzw. Gerade) wird Security Market Line (SML)
bzw. Wertpapierlinie genannt.
Asset Management / CS / Folie 197 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Das Capital Asset Pricing Modell (CAPM)
Beta
§ ß: Maß für die Sensitivität eines Assets auf Änderungen des
Gesamtmarktes.
§ Beta ist ein standardisiertes (einheitsloses) Maß für Risiko, da es die
Kovarianz ins Verhältnis setzt zur Varianz des Marktportfolios
§ Das Marktportefeuille hat daher ein Beta von 1.
§ Empirisch: Vergangenheits-Betas sind nur schlechte Indikatoren für das
zukünftige Betas.
§ Instabilität von Beta im Zeitablauf: Tendenz zur Mean Reversion.
Asset Management / CS / Folie 198 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
CML vs. SML
Kapitalmarktlinie Wertpapierlinie
(Capital Market Line, CML) (Security Market Line, SML)
Asset Management / CS / Folie 199 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Multifaktormodelle
Multifaktormodelle
§ Annahme: Asset-Renditen werden nicht nur von Marktrenditen bestimmt.
§ Beispiele: Zinsen, Inflationsraten, industriespezifische Einflussfaktoren.
§ Definition: Multifaktormodelle sind Gleichgewichtsmodelle, in denen
Wertpapierrenditen von mehreren makro- und mikroökonomischen Faktoren
abhängig sind. Ein Marktportfolio ist nicht mehr notwendig.
§ Allgemein: Faktor ist ein Element, zu dem mehrere Variablen korreliert sind
§ Beispiel eines Faktors: Marktfaktor (= systematischer Faktor).
§ Makroökonomische Faktormodelle: (Unerwartete) Ereignisse können
makroökonomische Variablen und damit zukünftige Cashflows von Unternehmen
beeinflussen.
§ Fundamentalfaktormodelle: Erklärung von Bewertungsunterschieden zwischen
einzelnen Segmenten (KBV, KGV etc.).
§ Statistische Faktormodelle: Erklärung historischer Portfoliorenditen anhand von
quantitativen Faktoren (Backtesting).
§ Heute werden Multifaktormodelle im aktiven wie passiven Portfoliomanagement
eingesetzt.
Asset Management / CS / Folie 200 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Arbitrage Pricing Theory (APT)
Die Alternative zum CAPM
§ APT ist ein Multifaktor-Gleichgewichtsmodell, in dem die erwartete Rendite eines
wohl diversifizierten Portfolios eine lineare Funktion der Faktorsensitivitäten dieses
Portfolios ist.
§ Annahmen (weniger streng als bei CAPM): u.a. Existenz eines Marktportfolios
nicht erforderlich.
§ Asset-Renditen werden von einem multivariaten Faktormodell beschrieben.
§ Die Bildung eines wohl diversifizierten Portefeuilles, mit dem asset-spezifische
Risiken eliminiert werden können, ist möglich (empirisch bestätigt für n à ∞).
§ Keine Arbitragemöglichkeiten in wohl diversifizierten Portefeuilles à Wertpapiere
sind stets richtig bewertet (Gleichgewichtsbedingung).
t 2 = 2 + } 8 ~ + } 8 ~ + ⋯+ } 8 ~
n u * n,* , n,, + n,+
x : Faktorrisikoprämie i
!
y : Sensitivität des Portfolios auf Faktor i
,,!
§ Die Faktorrisikoprämie λ ist die erwartete Überrendite (zu 2 ) eines Portfolios mit
u
einer Sensitivität von 1 zu Faktor i und einer Sensitivität von 0 zu allen anderen
Faktoren.
Asset Management / CS / Folie 201 © 2026 – Hochschule der Bayerischen Wirtschaft

Grundlagen der Portfoliotheorie
Unterschiede zwischen APT und CAPM
§ Eine Annahme über eine Verteilungshypothese der Wertpapierrenditen ist in der
APT irrelevant.
§ Mehrdimensionale Risikobetrachtung der APT.
§ Kenntnis eines Marktportfolios bei APT irrelevant.
Vorteile der APT:
§ Mehrdimensionale Risikobetrachtung.
§ Weniger rigide Annahme als CAPM.
Nachteile der APT:
§ Identifikation der Risikofaktoren.
§ Sensitivitäten und Einflussfaktoren sind nicht zeitstabil (gilt ebenso für Betafaktoren
und Marktrisikoprämie im CAPM).
– Hoher Wartungsaufwand des Systems
– Verringerung der Aussagekraft
Asset Management / CS / Folie 202 © 2026 – Hochschule der Bayerischen Wirtschaft