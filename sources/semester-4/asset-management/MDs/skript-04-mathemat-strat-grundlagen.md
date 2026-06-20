Asset Management
Kapitel 4
Mathematische und statistische
Grundlagen
V26-04-13
Asset Management / CS / Folie 97 © 2026 – Hochschule der Bayerischen Wirtschaft

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
Asset Management / CS / Folie 98 © 2026 – Hochschule der Bayerischen Wirtschaft

Bilden von Durchschnittswerten
W
Arithmetisches Mittel ie
d
e
rh
o
F
I&
lu
n
R
M
g
Arithmetisches Mittel
§ Frage: Wie berechnet man den Durchschnittswert bei mehrjährigen Daten, sofern
keine Wiederanlage der Erträge (Zinseszinsen) stattfindet?
§ Es wird also unterstellt, dass der Ertrag vom Anleger am Ende jeder Periode
entnommen wird und keiner Zinseszinseffekte unterliegt
§ Definition: Summe der Beobachtungswerte dividiert durch die Zahl der
Beobachtungen
+
1
4 = 64
"#$%&'. $
(
$)*
§ Ideales Maß für die Bestimmung durchschnittlicher Einperiodenrenditen
§ Anwendungsbeispiele:
– Berechnung der durchschnittlichen Verzinsung mehrerer
Unternehmensanleihen
– Berechnung des durchschnittlichen BIP-Wachstums in der Euro-Zone
– Berechnung von Abweichungen nach oben und nach unten
§ Nachteil: Hohe Sensitivität gegenüber Extremwerten
Asset Management / CS / Folie 99 © 2026 – Hochschule der Bayerischen Wirtschaft

Bilden von Durchschnittswerten
W
Median, Modus & gewichtetes Mittel ie
d
e
rh
o
F
I&
lu
n
R
M
g
Median
§ Definition: Mittlerer Wert einer der Größe nach sortierten Gruppe von
Beobachtungswerten
– Ungerade Anzahl an Beobachtungswerten: Median ist die (n+1)/2-Position
– Gerade Anzahl: Median als Durchschnittswert der n/2- und (n+2)/2-Position
§ Anwendungsbeispiele
– Geeigneterer Durchschnittswert bei Auftreten von Extremwerten
Modus (Modalwert)
§ Definition: Der häufigste Wert einer diskreten Häufigkeitsverteilung bzw. der
maximale Wert einer stetigen Häufigkeitsverteilung
§ Anwendung dann, wenn häufigster Wert den „Sieger“ bestimmt, z. B. in Umfragen
Gewichteter Durchschnittswert
§ Definition: Unterschiedliche Gewichtung einzelner Komponenten
+
2 = 67 8 4 mit 7 = Anteil Asset %
$ $ $
$)*
Asset Management / CS / Folie 100 © 2026 – Hochschule der Bayerischen Wirtschaft

Bilden von Durchschnittswerten
W
| Geometrisches Mittel  |     |     |     |     |     |     |     |     | ie  |     |     |
| --------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
d e
rh
o
|     |     |     |     |     |     |     |     |     | F   | lu  |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |     |     | I&  | n   |     |
R g
M
Geometrisches Mittel
§ Verwendung bei der Berechnung von Durchschnittswerten bei Zeitreihen oder bei
der Berechnung durchschnittlicher Wachstumsraten über einen längeren Zeitraum
und Wiederanlage der Zinsen
§ Allgemeine Definition:
|     |     |     | 9    | = ! | 9 0 9 | 0	⋯	0 | 9   |     |     |     |     |
| --- | --- | --- | ---- | --- | ----- | ----- | --- | --- | --- | --- | --- |
|     |     |     | )&#$ |     | -     | /     | *   |     |     |     |     |
Geometrisches Mittel von Renditen
|     |      | *   |     |     |     |      | !   |     |        | .   |     |
| --- | ---- | --- | --- | --- | --- | ---- | --- | --- | ------ | --- | --- |
|     |      |     | ∏*  |     |     |      |     | ∏*  |        | !   | !   |
| 1 + | 5    | =   | 1 + | 5 	 | ⇔ 	 | 5    | =   | 1 + | 5 − 1  | =   | − 1 |
|     | )&#$ |     | +,- | +   |     | )&#$ |     | +,- | +      |     |     |
.
"
Asset Management / CS / Folie 101 © 2026 – Hochschule der Bayerischen Wirtschaft

Bilden von Durchschnittswerten
W

Übung ie
d e
rh
o
F lu
I& n
R g
M
§ Berechnen Sie die arithmetische und geometrische Rendite für folgende Aktie:
t  Kurs (EUR)
|     |     |     | 1   | 100,00  |     |     |
| --- | --- | --- | --- | ------- | --- | --- |
|     |     |     | 2   | 200,00  |     |     |
|     |     |     | 3   | 100,00  |     |     |
Lösung
|     |     | ,-- |     |     |     | *-- |
| --- | --- | --- | --- | --- | --- | --- |
§ Rendite in Jahr 1:    − 1 = 100,0%      Rendite in Jahr 2:    − 1 = -50,0%
|     |     | *-- |     |     |     | ,-- |
| --- | --- | --- | --- | --- | --- | --- |
*--%/0-%
| § 2 | =   | = 9:% |     |     |     |     |
| --- | --- | ----- | --- | --- | --- | --- |
#$%&ℎ(
,
|      | & ∏4 |       |       | '        |         |           |
| ---- | ---- | ----- | ----- | -------- | ------- | --------- |
| § 2  | =    | 1 + 2 | − 1 = | 1 + 100% | 1 − 50% | − 1 = A%  |
| 123' | $)*  | $     |       |          |         |           |
§ Das arithmetische Mittel liefert also einen falschen Wert!
Asset Management / CS / Folie 102 © 2026 – Hochschule der Bayerischen Wirtschaft

Stetige Rendite
W
ie
|     |     |     |     |     |     |     | d   | e   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
rh
o
|     |     |     |     |     |     |     | F   | lu  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
I& n
R g
M
§ Verzinsungsformel bei unterjähriger Verzinsung
$1* $
|     |         | <   |     |       |           |      |     | <   |
| --- | ------- | --- | --- | ----- | --------- | ---- | --- | --- |
| ;   | = ; 1 + |     | 	   | >ü5	" | = 1	@Aℎ5	 | ⟹ 	; | = ; | 1 + |
| *   | 0       |     |     |       |           |      | * 0 |     |
|     |         | =   |     |       |           |      |     | =   |
§ Verzinsungsformel bei stetiger Verzinsung
$
<
G+
| ; = | ; lim | 1 + | =   | ; 0 | ⟺ 1 | + 5     | = G "  |     |
| --- | ----- | --- | --- | --- | --- | ------- | ------ | --- |
| -   | 0     |     |     | 0   |     |         | )*+*,- |     |
|     |       | =   |     |     |     | 4+56"&7 |        |     |
$→3
§ Umrechnungsformeln
"
| 5   | = G )*+*,- | − 1 |     |     | ln 1 | + 5     | = 5    |     |
| --- | ---------- | --- | --- | --- | ---- | ------- | ------ | --- |
|     |            |     |     |     |      | 4+56"&7 | 57&7+) |     |
4+56"&7
Asset Management / CS / Folie 103 © 2026 – Hochschule der Bayerischen Wirtschaft

Mittlere stetige Rendite
W
ie
d e
rh
o
|     |     |     |     |     |     |     |     |     |     |     |     |     |     | F   | lu  |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     | I&  |     | n   |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     | R   |     | g   |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     | M   |     |     |
W
iederholung
§ Geometrisches Mittel von (diskreten) Renditen
|     |     |      | *   |     |     |     |       |     |      |     | !   |     |     |     |     | .   |     |
| --- | --- | ---- | --- | --- | --- | --- | ----- | --- | ---- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |      |     | ∏*  |     |     |       |     |      |     | ∏*  |     |     |     |     | !   | !   |
|     | 1   | + 5  |     | =   | 1   | + 5 | 	 ⇔ 	 |     | 5    | =   |     | 1   | + 5 | −   | 1   | =   | − 1 |
|     |     | )&#$ |     |     | +,- | +   |       |     | )&#$ |     | +,- |     |     | +   |     |     |     |
.
"
§ Arithmetisches Mittel von (stetigen) Renditen
|     |     |       |     |     |       |     | ;       |     |     |     |     | ,   |     |     |     |     |     |
| --- | --- | ----- | --- | --- | ----- | --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     | "     | )(  | (   | "     |     | ∑ "     |     |     |     |     |     | (   |     |     |     |     |
|     |     | % 567 | =   | ∏   | % 8 = | %   | 89: 8 	 | ⇔   | 	   | )   | =   | ∑   |     | ) 	 |     |     |     |
|     |     |       |     |     |       |     |         |     |     | ./0 |     |     |     | *   |     |     |     |
|     |     |       |     | *+, |       |     |         |     |     |     |     |     | *+, |     |     |     |     |
(
§ Bei der Verwendung von stetigen Renditen erfolgt die
Durchschnittsbildung über die Zeit mittels des arithmetischen Mittelwerts.
| Diskrete Rendite |     |     |     | -50% | -10% |     | -5% | 0%  |     | +5% | +10% |     | +11,1% |     | +50% |     | +100% |
| ---------------- | --- | --- | --- | ---- | ---- | --- | --- | --- | --- | --- | ---- | --- | ------ | --- | ---- | --- | ----- |
Stetige Rendite -0,693 -0,105 -0,051 0 0,049 +0,095 +0,105 +0,405 +0,693
Asset Management / CS / Folie 104 © 2026 – Hochschule der Bayerischen Wirtschaft

Erwartete Rendite
W
ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Problem: Die Zukunft ist ungewiss à Entwicklung der Assets ist unbekannt.
§ Investoren basieren ihre Entscheidungen auf ihren Erwartungen über die Zukunft.
Erwartete Renditen sind daher Zufallsvariablen.
§ Dennoch kann ein Investor Erwartungen über die Zukunft haben und aus diesen
erwartete Renditen μ bilden.
§ Die erwartete Rendite μ wird als gewichteter Durchschnitt der möglichen
Renditen r in unterschiedlichen Szenarien i berechnet, wobei die Gewichte
i
den Eintrittswahrscheinlichkeiten p entsprechen.
i
+
B = 62 8 -
$ $
$)*
§ Beispiel: Die Aktie von Birne wird aktuell zu 100 EUR gehandelt. Mit einer
25%-Wahrscheinlichkeit steht der Kurs in einem Jahr bei 140 EUR, mit
50%-Wahrscheinlichkeit bei 110 EUR und mit 25%-Wahrscheinlichkeit bei 80 EUR.
µ = 0,25 8 20% + 0,5 8 10% + 0,25 8 −20% = 10%
<=>
Asset Management / CS / Folie 105 © 2026 – Hochschule der Bayerischen Wirtschaft

Anleihen
W
Preisbildung von Anleihen ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Der Wert einer Anleihe K kann mit Hilfe des Barwertprinzips bestimmt werden:
A
* RK = Rückzahlungskurs (in %, i.d.R. = 100%)
5 K;
9 r = Renditeforderung des Kapitalgebers
; = J +
T = Restlaufzeit der Anleihe
8 1 + 5 7 (1 + 5)*
r = Nominalzinssatz
n
7,-
§ Die Renditeforderung des Kapitalgebers hängt u.a. ab vom Bonitätsrisiko des
Emittenten oder der Liquidität der Anleihe.
§ r > r: Kurs der Anleihe über Nennwert (über pari)
n
§ r < r: Kurs der Anleihe unter Nennwert (unter pari)
n
§ r > r: Kurs der Anleihe gleich Nennwert (zu pari)
n
§ In einer Welt vollständiger Kapitalmarkteffizienz sind Wert und Kurs einer Anleihe
identisch
Asset Management / CS / Folie 106 © 2026 – Hochschule der Bayerischen Wirtschaft

Preisbildung von Anleihen
W
Beispiel ie
d e
rh
o
|     |     |     |     |     |     |     |     | F   | lu  |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |     | I&  | n   |     |
|     |     |     |     |     |     |     |     |     | R   | g   |
|     |     |     |     |     |     |     |     |     | M   |     |
4
")ℎG0(H
%
| /023 | =	6 |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
%)%
|     |     | (1  | +   |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
%)*
|        | 5,0	€   |     | 5,0	€ |     | 5,0	€ |      | 5,0	€ |     | 105,0	€ |     |
| ------ | ------- | --- | ----- | --- | ----- | ---- | ----- | --- | ------- | --- |
| 98,5	€ | =       |     | +     |     | +     | + ⋯+ |       |     | +       |     |
|        |         | 2)* |       | 2), |       | 2)?  |       | 2)@ |         | 2)A |
|        | (1      | +   | (1    | +   | (1    | +    | (1    | +   | (1      | +   |
| 2      | = 5,26% |     |       |     |       |      |       |     |         |     |
vgl. Bösch S. 238
Asset Management / CS / Folie 107 © 2026 – Hochschule der Bayerischen Wirtschaft

Auswirkungen von Zinsänderungen auf
W
Anleihekurse
ie
d e
rh
o
|     |     |     |     |     | F   | lu  |
| --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     | I&  | n   |
|     |     |     |     |     | R   | g   |
|     |     |     |     |     |     | M   |
Zinsänderungen und Laufzeit
§ Die Auswirkungen von Zinsänderungen variieren von Bond zu Bond und
sind von mehreren Faktoren abhängig
§ Regel: Je länger die Laufzeit eines Bonds, desto sensibler reagiert er auf
Zinsänderungen von Vergleichsanleihen. Begründung: Bei einem
Zinsanstieg sinkt der Barwert von Cashflows in weiter Zukunft stärker als
der Barwert von frühen Cashflows.
RUE 200
Wenn die Zinsen ansteigen, geht
|     |     |     | -5  | d e r  B a | r w e r t  e i n e r |  A n l e ih e   m it   |
| --- | --- | --- | --- | ---------- | -------------------- | ---------------------- |
150 8
|     | -27,7% | -4  | ,0  |     |     |     |
| --- | ------ | --- | --- | --- | --- | --- |
-16,3% 1 % la n g e r  L a u f z e i t  d e ut li c h  s t ä rk e r
,9
%
100 zurück als der Barwert einer
Anleihe mit kurzer Laufzeit.
Im vorliegenden Beispiel sinkt
50
der Barwert der 50J-Anleihe um
58,0% während der Barwert der
0
5J-Anleihe nur um 16,3%
| 5 Jahre | 10 Jahre | 20 Jahre | 50 Jahre |     |     |     |
| ------- | -------- | -------- | -------- | --- | --- | --- |
zurückgeht
Laufzeit
| 2% 3% | 4% 5% | 6%  |     |     |     |     |
| ----- | ----- | --- | --- | --- | --- | --- |
Marktzinssatz
Asset Management / CS / Folie 108 © 2026 – Hochschule der Bayerischen Wirtschaft

Auswirkungen von Zinsänderungen auf
Anleihekurse
Zinsänderungen und Nominalverzinsung
§ Regel: Je niedriger der Nominalzins eines Bonds, desto sensibler reagiert
der Bond auf Zinsänderungen von Vergleichsanleihen.
§ Begründung: Höhere Kupons führen zu höheren Cashflows in einem
früheren Stadium des Bonds. Der Barwert wird sich durch
Zinsänderungen daher weniger verändern. Im Extremfall eines Zero-
Bonds wird der Barwert auf Zinsänderungen besonders stark reagieren.
30%
20%
Rückgang um 2%
10%
Rückgang um 1%
Anstieg um 1%
0%
Anstieg um 2%
-10%
-20%
0% 2% 4% 6% 8%
Nominalzinssatz / Coupon der Anleihe
Asset Management / CS / Folie 109 © 2026 – Hochschule der Bayerischen Wirtschaft
sed
gnurednäreV
setrewehielnA
W
ie
d
e
rh
o
F
I&
lu
n
R
M
g

Zinsänderungsrisiken
W
Macauley-Duration ie
d
e
rh
o
F
I&
lu
n
R
M
g
Macauley-Duration (nach Frederick R. Macaulay, 1938)
§ Definition: Durchschnittliche Kapitalbindungsdauer des eingesetzten Kapitals
(Angabe in Jahren)
§ Hierzu wird der Quotient aus der zeitgewichteten Summe der Barwerte
zukünftiger Einzahlungsströme und dem aktuellen Marktwert gebildet.
BC =BDEℎ CGHI JK LMJNOPQRN N
∑9 $ % &' % 1 + * :7 !
7,- 7 S = TDSRNUJQEEDNU
! =
∑9 &' % 1 + * :7 V = WMENGDPXUMJt
7,- 7 t = Zeitindex / Gewichtungsfaktor
§ Annahmen:
– Flache Zinsstrukturkurve
– Zinsänderungen nur in Form von Parallelverschiebungen der Zinsstrukturkurve
§ Aussage: Maß des Zinsänderungsrisikos einer Anleihe, das Laufzeit, Rendite,
Nominalzins (und Call-Features) berücksichtigt
§ Interpretation: Je höher die Duration, desto stärker fällt der Kurs der Anleihe bei
einem Anstieg des allgemeinen Zinsniveaus u. u.
à Risikoaverse Investoren sollten Anleihen mit kurzer Duration bevorzugen
Asset Management / CS / Folie 110 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Duration ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Zinsänderungen führen zu Marktwerteffekten (Änderung des Kurses der Anleihe)
und zu Wiederanlageeffekten (da sich die vom Investor zu erzielende Verzinsung
auf die zwischenzeitlich ausgeschütteten Zinszahlungen verändert)
§ Beispiel: Steigt der Marktzins, fällt der Kurs der Anleihe (negativer
Marktwerteffekt), während die Kuponzinszahlungen zu höheren Zinsen wieder
angelegt werden können (positiver Wiederanlageeffekt)
§ Gegenläufiger Effekt auf den Vermögensendwert des Anlegers
§ Kerngedanke der Duration ist es, den Zeitpunkt zu bestimmen, an dem sich diese
beiden gegenläufigen Effekte gerade aufheben
§ Darstellung als Barwerte-Waage
(Bsp.: 5%-Anleihe, Rendite 5,26%, 7 Jahre)
D=6,07
Asset Management / CS / Folie 111 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Sensitivitäten der Duration ie
d
e
rh
o
F
I&
lu
n
R
M
g
Sensitivitäten der Duration
§ Die Duration ist umso höher
Je kleiner der Coupon, umso geringer der Anteil
– je niedriger der Coupon einer Anleihe ist, der Zinszahlungen am Barwert der Anleihe
– je niedriger die Rendite einer Anleihe ist,
Je geringer die Rendite, umso höher das
Gewicht der späteren Zahlungsströme
– je länger die Restlaufzeit einer Anleihe ist,
– je niedriger die vorzeitigen Tilgungen sind und
– je später diese anfallen (falls vorhanden)
§ Erhöhung der Duration durch
– Ersetzen kurzlaufender Wertpapiere durch langlaufende
– Ergänzen des Portefeuilles durch Langläufer
§ Die Duration eines Zero-Bonds entspricht seiner Restlaufzeit.
§ Duration ist c.p. umso höher, je länger die Restlaufzeit der Anleihe ist. In der Praxis
kann beobachtet werden, dass mit steigender Restlaufzeit die Duration nur
unterproportional ansteigt. Auch wenn die Laufzeit einer Anleihe unendlich wäre,
würde die Duration diesen Wert nie erreichen. Es gilt:
1
! = − 1
$;<
*
Asset Management / CS / Folie 112 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Duration eines Portfolios ie
d
e
rh
o
F
I&
lu
n
R
M
g
Duration eines Portfolios
§ Die Duration eines Portfolios entspricht der mit den Barwertanteilen
gewichteten Summe der Durations der einzelnen Zahlungsströme
9
! = ,- % !
=#"7'#>+# + +
+,-
§ - ist der Anteil des Portfolio-Wertes, der in Anleihe i investiert ist.
+
à Durations-Maße können additiv verknüpft werden
§ Die Duration jedes im Portfolio enthaltenen Zahlungsstromes wird mit
seinem Barwertanteil gewichtet. Die Summe der gewichteten Durationen
entspricht der Gesamt-Duration des Portfolios.
Asset Management / CS / Folie 113 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Modified Duration ie
d
e
rh
o
F
I&
lu
n
R
M
g
Modified Duration
§ Problem: Messung der Macauley-Duration in Jahren ► Komplexe
Anwendbarkeit in der Praxis
§ Definition: Modified Duration MD ist eine Maßzahl für die Sensitivität
einer Anleihe. Sie gibt die relative Veränderung des Anleihekurses
aufgrund einer relativen Veränderung des Marktzinses an.
§ Interpretation: MD als Elastizität des Anleihekurses gegenüber
Marktzinssatz r
M
./0/12/3 − !1*/4567
.! =
1 + *
?
Asset Management / CS / Folie 114 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Zusammenhang zwischen Anleihekurs und Rendiiete
d
e
rh
o
F
I&
lu
n
R
M
g
Tatsächlicher Zusammenhang zwischen Anleihe-Kurs und
Rendite
AAnnlleeiihhee
--pprreeiiss
BB
33
BB
22
BB
11
rr rr rr AAnnlleeiihheerreennddiittee
33 22 11
BBeezziieehhuunngg zzwwiisscchheenn AAnnlleeiihheepprreeiisseenn uunndd AAnnlleeiihheerreennddiitteenn zzuumm ZZeeiittppuunnkktt tt
Abbildung nach: Hull (2019): Optionen, Futures und andere Derivate
Asset Management / CS / Folie 115 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Konvexität: Erweiterung des Duration-Konzepts ie
d
e
rh
o
F
I&
lu
n
R
M
g
Konvexität
§ Da der tatsächliche Zusammenhang zwischen Anleihekurs und Renditeforderung
konvex und nicht linear ist, unterschätzt die Modified Duration die Wirkung von
Marktzinsänderungen.
§ Zur Ermittlung der Konvexität C wird die Formel der Duration angepasst:
– Im Zähler wird der Term (1+t) hinzugefügt.
– Der aus der Duration bekannte Nenner wird mit (1+r)2 multipliziert.
1 *234* Änderungen gegenüber
∑ -A7
*/0 056 * der Durationsformel
& =
∑ 1 34* -A7 7
*/0 *
056
§ Die Konvexität beschreibt die Änderung der Duration in Abhängigkeit der Änderung
Renditeforderung (=Krümmung).
Asset Management / CS / Folie 116 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
Konvexität ie
d e
rh
o
F lu
I& n
R g
M
Konvexität
1 *234*
|     | ∑   | -A7 |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
|     | */0 | *   |     |     |     |     |
056
| &   | =   |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
34*
|     | 1   |     | 7   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
|     | ∑   | -A7 |     |     |     |     |
|     | */0 | *   |     |     |     |     |
056
§ Bezogen auf das vorherige Beispiel ergibt sich:
| 1 % 2 % 4,54 | + 2 % | 3 % 4,13 | + 3 % 4 | % 3,76 | + 4 % 5 | % 71,72 |
| ------------ | ----- | -------- | ------- | ------ | ------- | ------- |
& = = 14,86
|     |     | 1,1/ | % 84,15 |     |     |     |
| --- | --- | ---- | ------- | --- | --- | --- |
§ Unter Berücksichtigung von Duration und Konvexität ergibt sich die relative
Kursänderung der Anleihe bei Marktzinsänderung durch:
/
| *A2/45BA	C1*Dä7FA*17G |     |     | = −.! | % ∆* | + 0,5 % | & % ∆* |
| --------------------- | --- | --- | ----- | ---- | ------- | ------ |
§ Aus Investorensicht ist diejenige Anlagealternative wertvoller, die bei gleicher
Modified Duration eine höhere Konvexität aufweist: Fallende Zinsen führen zu
höheren Kursgewinnen, während steigende Zinsen zu weniger hohen Abschlägen
führen.
Asset Management / CS / Folie 117 © 2026 – Hochschule der Bayerischen Wirtschaft

Zinsänderungsrisiken
W
| Beispiele: Duration und Konvexität |     |     |     | ie  |     |
| ---------------------------------- | --- | --- | --- | --- | --- |
d e
rh
o
|     |     |     |     | F lu |     |
| --- | --- | --- | --- | ---- | --- |
|     |     |     |     | I& n |     |
|     |     |     |     | R    | g   |
M
|                        | Kurs am    | Rendite   | Duration  | Modified   |      |
| ---------------------- | ---------- | --------- | --------- | ---------- | ---- |
| Nr. Anleihebezeichnung |            |           |           | Konvexität |      |
|                        | 30.11.2009 | p.a. in % | in Jahren | Duration   |      |
| 8,5% ThyssenKrupp AG   | 111.000    | 6.302     | 4.88      | 4.73       | 0.28 |
1
25.02.2016
| 8,0% Daimler Finance NA | 103.350 | 1.694 | 0.52 | 0.51 | 0.01 |
| ----------------------- | ------- | ----- | ---- | ---- | ---- |
2
15.06.2010
| 4,375% E.ON AG | 105.161 | 3.438 | 5.44 | 5.34 | 0.34 |
| -------------- | ------- | ----- | ---- | ---- | ---- |
3
18.02.2016
| 4,375% Daimler Finance  | 100.780 | 1.576 | 0.28 | 0.28 | 0.00 |
| ----------------------- | ------- | ----- | ---- | ---- | ---- |
4 NA
16.03.2010
| 3,5% Bundesrepublik  | 105.240 | 2.559 | 5.44 | 5.37 | 0.35 |
| -------------------- | ------- | ----- | ---- | ---- | ---- |
5 Deutschland
04.01.2016
| 3,125% Bundesobligation | 100.942 | 0.547 | 0.35 | 0.35 | 0.00 |
| ----------------------- | ------- | ----- | ---- | ---- | ---- |
6
09.04.2010
Quelle: Frère/Rojahn/Schyra, Risikomanagement von Bond-Portfolios, in: Handelsblatt Business Briefing, 2010, Nr. 1, S. 7ff.
Asset Management / CS / Folie 118 © 2026 – Hochschule der Bayerischen Wirtschaft

Risiko
W
Abweichung vom Erwartungswert ie
d
e
rh
o
F
I&
lu
n
R
M
g
Risiko: Abweichung vom Erwartungswert
§ Je höher (geringer) die Abweichung (=Streuung), desto geringer (höher)
ist die Wahrscheinlichkeit, dass der angestrebte Zielwert erreicht wird.
Investment mit niedriger
Abweichung/Streuung
Mittelwert=Median
=Modalwert
Investment mit hoher
Abweichung/Streuung
Erwartete Rendite
Asset Management / CS / Folie 119 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Standardabweichung / Volatilität ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Das Risiko wird gemessen durch die Standardabweichung s Renditen r.
i
$
1
§ Definition: Wurzel der Varianz der Renditen: Y = ] S −S̅ %
!
Q−1
!"#
§ Je höher die Standardabweichung, desto höher ist die Abweichung z. B. der
beobachteten Aktienkurse von ihrem Mittelwert und desto höher ist das mit einer
Investition in diese Aktie verbundene Risiko
§ Wird in den Finanzwissenschaften auch als Volatilität bezeichnet
§ An der Börse: Volatilität ist ein Maß für die Intensität der Schwankungen eines
Wertpapierkurses, eines Index oder der Rendite eines Anlageobjekts um den
eigenen Mittelwert
§ Vorteil: Gleiche Dimension wie Erwartungswert (z. B. % bei Renditen)
§ Asset A ist damit vorteilhafter als Asset B, wenn Asset A
– bei gleicher Standardabweichung eine höhere Rendite als Asset B erwirtschaftet (μ-Regel)
– dieselbe Rendite wie Asset B bei geringerer Standardabweichung erzielt (σ-Regel)
Asset Management / CS / Folie 120 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Annualisierung der Standardabweichung ie
d
e
rh
o
F
I&
lu
n
R
M
g
Annualisierung der Standardabweichung
§ + = 250 / + = 52 / + = 12 / + = 4 / +
.11$.2*3*4"5 6 7 8 9
§ Aus der annualisierten Standardabweichung (Volatilität) lässt sich
die erwartete Tagesschwankung eines Wertpapiers berechnen
und umgekehrt
Asset Management / CS / Folie 121 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
Volatilität am US-Kapitalmarkt
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 122 © 2026 – Hochschule der Bayerischen Wirtschaft

Schätzfehler
Schätzfehler: Die Verwendung von Renditen aus der Vergangenheit
zur Prognose der Zukunft
§ Wenn wir der Ansicht sind, dass Anleger im Durchschnitt weder
übermäßig optimistisch noch übermäßig pessimistisch sind, würde im
Laufe der Zeit die durchschnittliche realisierte Rendite der erwarteten
Rendite der Anleger entsprechen.
§ Mit Hilfe dieser Annahme können wir die durchschnittliche historische
Rendite zur Ableitung der erwarteten Rendite heranziehen.
§ Die durchschnittliche Rendite ist nur eine Schätzung der
tatsächlichen erwarteten Rendite und kann einem Schätzfehler
unterliegen!
§ Standardfehler: Statistische Maßzahl für den Schätzfehler.
Asset Management / CS / Folie 123 © 2026 – Hochschule der Bayerischen Wirtschaft

Mit vergangenen Renditen die Zukunft
vorhersagen: Schätzfehler
Schätzfehler
§ Standardfehler der Schätzung der erwarteten Rendite
P(individuelles Risiko)
P(Durchschnitt unabhängiger,identischer Risiken) =
Anzahl Beobachtungen
§ 95% Konfidenzintervall (circa)*
Historische durchschnittliche Rendite ± (2 × Standardfehler)
§ Für den S&P 500 (1926 – 2017) gilt:
19,8%
12,0% ± 2 = 12,0% ± 4,1%
92
oder ein Bereich von 7,9% bis 16,1%.
* “Circa“, da der mathematisch exakte Wert 1,96 beträgt.
Asset Management / CS / Folie 124 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Volatilität in der Praxis ie
d
e
rh
o
F
I&
lu
n
R
M
g
Historische vs. implizite Volatilität am Beispiel des DAX30 (jetzt:DAX40)
Asset Management / CS / Folie 125 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
ie
d
e
rh
o
F
I&
lu
n
R
M
g
Normalverteilung: Aus der Natur in die Wissenschaften
§ Beispiele für Normalverteilung: Schadensfälle einer Versicherung, Einkommen,
Intelligenz oder Körpergröße eines Geschlechts
§ Bei Annahme von Markteffizienz und Random Walk kann eine Normalverteilung
stetiger Renditen angenommen werden
§ Bei hinreichend großen Messintervallen ist die Annahme einer Normalverteilung
der Renditen eine gute Annäherung
§ Definition: Die Normalverteilung ist eine stetige Wahrscheinlichkeitsverteilung.
– Charakterisierung einer Normalverteilung durch Erwartungswert und Varianz
– Ihre Dichtefunktion heißt auch Gauß- oder Glockenfunktion
– Ihr Mittelwert entspricht ihrem Median
– Sie ist durch den Erwartungswert und die Standardabweichung definiert
– Sigma-Band: 68,3% der Werte einer normalverteilten Zufallsvariable liegen im
Intervall plus bzw. minus eine Standardabweichung um den Mittelwert
– 99,7% der Werte einer normalverteilten Zufallsvariable liegen im Intervall plus
bzw. minus drei Standardabweichungen um den Mittelwert
Asset Management / CS / Folie 126 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
Normalverteilungshypothese
§ Die Volatilität ist nur dann ein geeignetes Risikomaß, wenn die
zugrundeliegenden Renditen normalverteilt sind.
Asset Management / CS / Folie 127 © 2026 – Hochschule der Bayerischen Wirtschaft
tiekhcilniehcsrhaW
W
ie
d
e
rh
o
F
I&
lu
n
R
M
g
Bsp.: μ = Erwartete Rendite = 10%
σ = Standardabweichung = 20 %
68.3%
95.5%
99.7%
0.13% 2.14% 13.59% 34.13% 3 4.13% 1 3.59% 2.14% 0.13%
Rendite
9 ! ± 1;
-10% +30%
9 ! ± 2;
-30% +50%
9 ! ± 3;
-50% +70%

Risikokennzahlen
Kritik am Volatilitätskonzept
§ Beispiel: Zwei Wertpapiere haben folgende Performance erwirtschaftet.
Wie hoch sind die jeweiligen Standardabweichungen? Interpretieren Sie
das Ergebnis?
| Wertpapier A  |     | 1   | 2   | 3   |
| ------------- | --- | --- | --- | --- |
a = 4,1%
8
|     | r   | 5%  | 15%  | 10%  |
| --- | --- | --- | ---- | ---- |
A
| Wertpapier B  |     | 1   | 2   | 3   |
| ------------- | --- | --- | --- | --- |
a = 0%
B
|     | r   | -15%  | -15%  | -15%  |
| --- | --- | ----- | ----- | ----- |
B
§ Wertpapier A mit einer Gesamtperformance von 32,8% ist riskanter als
Wertpapier B mit einer Performance von -38,6%
§ Der Verlust von 38,6% kam völlig risikolos zustande!
Asset Management / CS / Folie 128 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Höhere Momente der Verteilung ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Die Volatilität ist eine symmetrische Risikokennzahl. Intuitiv sind aber nur
negative Abweichungen als Risiko zu interpretieren. Positive
Abweichungen sind Chancen.
§ Neben Rendite und Risiko hängt der Nutzen einer Anlagealternative von
den höheren Momenten der Verteilung ab, wenn die Renditen nicht
normalverteilt sind.
§ 4 Momente einer Wahrscheinlichkeitsverteilung:
– Erwartungswert (erwartete Rendite bzw. Mean),
– Standardabweichung bzw. Volatilität,
– Schiefe (Skewness),
– Wölbung (Kurtosis).
Asset Management / CS / Folie 129 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Schiefe ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Eine nicht symmetrische Verteilung wird schiefe Verteilung (englisch:
Skewness) genannt
§ Beispiel: Einkommensverteilung einer Gesellschaft
§ Definition: Die Skewness gibt den Grad der Asymmetrie einer Verteilung
an
1 ∑9 * − *̅ C
+,- +
bcA-7ADD =
7 aC
§ Schiefekoeffizient =0 bei sym. Verteilungen (also auch Normalverteilung),
bei rechtsschiefer Verteilung > 0.
§ Linksschiefe Verteilungen: höhere Wahrscheinlichkeit von Werten
oberhalb des Erwartungswerts, jedoch gleichfalls höhere Gefahr von
niedrigen Extremwerten.
Asset Management / CS / Folie 130 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Schiefe ie
d
e
rh
o
F
I&
lu
n
R
M
g
Rechtsschiefe (linkssteile) Verteilung Linksschiefe (rechtssteile) Verteilung
Mean > Median > Modus Mean < Median < Modus
Dichtefunktion Dichtefunktion
Rechtsschiefe
Linksschiefe
Verteilung
Verteilung
Rendite Rendite
Abbildung nach Bruns/Meyer-Bullerdiek,
Professionelles Portfoliomanagement, 2008, S. 34.
§ Risikoaverse Anleger bevorzugen rechtsschiefe Verteilungen, da der
Erwartungswert rechts vom Median liegt. Relativ zum Erwartungswert führt positive
Skewness zu einem begrenzten, wenngleich häufigen Downside und einem
unbegrenzten, jedoch seltenen Upside.
§ Bei gleichem Erwartungswert und gleicher Standardabweichung ist bei
linksschiefen Verteilungen die Gefahr hoher negativer Extremwerte größer.
Asset Management / CS / Folie 131 © 2026 – Hochschule der Bayerischen Wirtschaft

Beispiel
W
Schiefe auf Basis erwarteter Renditen ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Am Kapitalmarkt werden zwei Wertpapiere (A und B) mit nachfolgenden erwarteten
Renditen in den Szenarien s betrachtet. Die Szenarien s treten mit den
Wahrscheinlichkeiten p ein.
s(1) s(2) s(3) s(4)
p 5,00% 56,25% 22,50% 16,25%
r(A) -10% 0% 10% 20%
r(B) 20% 10% 0% -10%
§ Als erwartete Rendite bzw. erwartete Volatilität ergibt sich jeweils 5% bzw. 8,215%.
§ Auf der Grundlage des µ-σ-Prinzips ist keine adäquate Auswahl möglich.
Erwartungswert und Volatilität der Wertpapiere sind identisch.
§ Erst unter Zuhilfenahme der Schiefe kann eine eindeutige Rangordnung erstellt
werden.
Asset Management / CS / Folie 132 © 2026 – Hochschule der Bayerischen Wirtschaft

Beispiel
W
Schiefe auf Basis erwarteter Renditen ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ Die normierte Schiefe auf Basis erwarteter Renditen ergibt sich durch:
∑9 e * − f C % g
+,- + +
bcA-7ADD =
aC
§ Mit: ε(r)= Erwartete Rendite im Szenario i, μ= Erwartungswert,
i
p= Eintrittswahrscheinlichkeit des Szenarios i, σ= Volatilität des Assets.
i
§ Für Wertpapier A beträgt der Schiefe-Koeffizient 0,61,
für Wertpapier B - 0,61.
Asset Management / CS / Folie 133 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Wölbung (Kurtosis) ie
d
e
rh
o
F
I&
lu
n
R
M
g
Wölbung (Kurtosis)
§ Vierter Einflussfaktor auf die Verteilung
§ Definition: Maßzahl für die Steilheit („Spitzigkeit“) einer Verteilung
§ Die Wölbung erfasst, ob im Vergleich zu einer Normalverteilung mehr
oder weniger Wahrscheinlichkeitsmasse in den Rändern und der Mitte
der Verteilung liegt
1 ∑9 * − *̅ D
+,- +
C1*46D5D = %
7 aD
§ Wölbungskoeffizient bei Normalverteilung = 3,
bei fetten Enden > 3: „leptokurtisch“
bei dünnen Enden < 3: „platykurtisch“
§ Dünne Enden: Renditeausprägungen in unmittelbarer Nähe des
Erwartungswert. Extremwerte sind weniger wahrscheinlich.
Asset Management / CS / Folie 134 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Wölbung (Kurtosis) ie
d
e
rh
o
F
I&
lu
n
R
M
g
§ An Kapitalmärkten dominieren Linksschiefe und fette Enden.
§ Folge der fetten Enden und der Linksschiefe: Wird mit der
Normalverteilungsannahme gearbeitet, werden Risiken systematisch
unterschätzt.
Dichtefunktion
Leptokurtisch gewölbte
Verteilung
Normalverteilung
Handlungsempfehlung für
das Portfoliomanagement:
Maximiere die ungerade
Momente (erwartete Rendite
und Schiefe) und minimiere
gerade Momente (Volatilität
und Wölbung).
Rendite
Asset Management / CS / Folie 135 © 2026 – Hochschule der Bayerischen Wirtschaft

Risikokennzahlen
W
Schiefe und Wölbung an Kapitalmärkten
ie
d e
rh
o
F lu
I& n
R g
M
Rendite- und Risikokennzahlen gängiger Assetklassen
|     | Rendite         V  o  l a  | tilität | Schiefe             |     |
| --- | -------------------------- | ------- | ------------------- | --- |
Assetklasse Kurtosis
|                           | in % p.a. | in % p.a. | Koeffizient |      |
| ------------------------- | --------- | --------- | ----------- | ---- |
| EURO-Staatsanleihen 5-7J. | 5,94      | 3,71      | -0,43       | 3,46 |
| MSCI Europe               | 5,74      | 17,43     | -0,76       | 3,77 |
| DAX                       | 6,08      | 23,99     | -0,83       | 5,23 |
| MDAX                      | 7,07      | 20,36     | -0,88       | 6,46 |
| MSCI North America        | 5,44      | 18,63     | -0,51       | 3,16 |
| Dow Jones China Offshore  | 7,90      | 43,11     | 0,01        | 5,05 |
| MSCI Latin America        | 13,32     | 31,20     | -1,24       | 6,63 |
| XETRA GOLD                | 8,56      | 15,25     | 0,54        | 4,27 |
| RICI Rogers Metals        | 10,04     | 17,07     | -0,35       | 4,37 |
| Crude Oil DJ-AIGCI        | 9,97      | 34,87     | -0,71       | 5,36 |
| Agriculture DJ-AIGCI      | 1,60      | 18,67     | -0,18       | 3,21 |
Basis: monatliche Renditen Jan. 1996 bis Jun. 2010
Quelle: Rojahn et al. (2010): Optimum Portfolio Indices
Asset Management / CS / Folie 136 © 2026 – Hochschule der Bayerischen Wirtschaft

Value-at-Risk
Value-at-Risk (VaR)
§ Frage, die sich für den VaR stellt:
“Bei welchem Verlustniveau können wir zu X % sicher sein,
dass es nach N Geschäftstagen nicht überschritten wird?”
§ Definition: Schätzung des Verlustbetrags, von dem wir erwarten, dass er mit einer
bestimmten Wahrscheinlichkeit in einem bestimmten Zeitraum nicht überschritten
wird.
§ Wahrscheinlichkeitsbasiertes Maß des Verlustpotenzials eines Unternehmens,
Funds, Portfolios oder einer Transaktion
§ Wird i.d.R. als ein Prozentsatz oder in Währungseinheiten ausgedrückt
Vorteile des VaR-Konzepts
§ Ein wichtiger Aspekt des Risikos lässt sich mit Hilfe einer einzelnen Zahl
ausdrücken.
§ Es ist leicht zu verstehen.
§ Hinter dem Konzept stehen die einfachen Fragen: „Wie schlimm kann es werden?“
oder „Wie schlecht können sich die Dinge entwickeln?“
Asset Management / CS / Folie 137 © 2026 – Hochschule der Bayerischen Wirtschaft

Value-at-Risk
§ Beispiel: VaR eines Portfolios ist EUR 1,5 Mio. pro Tag mit
Wahrscheinlichkeit von 5,0%.
– Interpretation (1): Mit 95%iger Wahrscheinlichkeit wird der Portfolioverlust
nicht mehr als EUR 1,5 Mio. an einem einzigen Handelstag betragen.
– Interpretation (2): er besteht eine 5%ige Wahrscheinlichkeit, dass das
Portfolio an einem Tag EUR 1,5 Mio. oder mehr verliert.
§ Folgen:
– Beschreibung eines Mindestverlustes: Der tatsächliche Verlust kann viel
größer sein, ohne dass die Richtigkeit des VaR-Konzeptes in Frage steht.
– Angenommen, VaR ist EUR 5,0 Mio. mit einer Wahrscheinlichkeit von 5%.
Setzen wir die Wahrscheinlichkeit von 5% auf 1% herab, wird der VaR steigen,
da er sich auf einen Verlust bezieht, der nur mit 1% Wahrscheinlichkeit eintritt.
– VaR bezieht sich auf ein Zeitintervall. à Unterschiedliche VaR-Konzepte
müssen auf denselben Zeithorizont bezogen werden.
Asset Management / CS / Folie 138 © 2026 – Hochschule der Bayerischen Wirtschaft

Berechnung des VaR
Quelle: Hull (2019): Optionen, Futures und andere Derivate
Asset Management / CS / Folie 139 © 2026 – Hochschule der Bayerischen Wirtschaft

Parameter des VaR
§ Konfidenzniveau
– Sicherheitsniveau, welches nicht überschritten wird.
– In der Regel zwischen 95 % und 99,9 %.
– Sollte bei einem Unternehmen kleiner sein als die „eigene
Ausfallwahrscheinlichkeit“.
– Risiken sind nur dann vergleichbar, wenn sie dasselbe Konfidenzniveau und
derselbe Dispositionshorizont aufweisen.
§ Verteilungsannahme
– Normalverteilung?
– Schiefe?
– Gleichverteilung?
– Sind Parameter der Verteilung wie Median, Mittelwert und
Standardabweichung überhaupt ermittelbar?
à Dies determiniert die Wahl des VaR Ansatzes
Asset Management / CS / Folie 140 © 2026 – Hochschule der Bayerischen Wirtschaft

Parameter des VaR
§ Haltedauer
– Marktpreisrisiko: meist 10 Tage: „Mit 99 %iger Wahrscheinlichkeit wird die
Aktie der ABC AG in den nächsten 10 Tagen um nicht mehr als 7,4% fallen,
d.h. unter 19 € sinken“.
– Adressrisiken: meist 1 Jahr / 250 Handelstage.
– Skalierung mit der Wurzel-T-Funktion – Annahme: Normalverteilung
(statistische Unabhängigkeit).
– Formel:
250
h%3%ij = h%3%ij 8
_"&# `"a%2b"c2#
k)G'&l)0&2
– Beispiel: Soll das Risiko von 10 Tagen auf 250 skaliert werden, so muss das
5-fache des 10-Tage-Risikos verwendet werden: Wurzel (250/10) = 5.
Asset Management / CS / Folie 141 © 2026 – Hochschule der Bayerischen Wirtschaft

Arten des VaR
Varianz-Kovarianz Historische Simulation Monte-Carlo-Simulation
Definition Annahme einer Wird vor allem zur Ermittlung von Die Monte-Carlo-Simulation schließlich
Normalverteilung mit Marktpreisrisiken verwendet. Es stellt den zurzeit am weitesten
konstantem Mittelwert und werden in der Vergangenheit entwickelten Ansatz dar. Er ist quasi
Standardabweichung für beobachtetete Änderungen in die als Erweiterung der historischen
Wertveränderungen, z. B. Zukunft projiziert. Hierdurch ist die Simulation zu verstehen, da die
Ausfallraten, Aktienkurs-, Korrelation inhärent vorhanden historischen Werte um Zufallszahlen
Wechselkurs- und und muss nicht erst separat angereichert werden. Hiermit werden
Zinsveränderungen. errechnet werden. auch möglich, un der Vergangenheit
jedoch (noch) nicht beobachtete
Der VaR ergibt sich als Der VaR ergibt sich dann als Wertveränderungen mit erfasst. Das
Multiplikation des x-%igen Abzählen der sortierten Ergebnis ist ein Tool, welches im
Quantils bzw. Z-Wertes mit der Wertveränderungen der sich Prinzip unbegrenzte Szenarien
Standardabweichung, korrigiert ergebenden Verteilungsfunktion. simulieren und somit die Risiken
um den Mittelwert, der hier den soweit wie möglich quantifizieren
erwarteten Verlusten entspricht. kann.
Vorteil § Relativ einfache Anwendung § Intuitiv nachvollziehbar § Nahezu unbegrenzte Anzahl an
§ auch bei einer Nicht- simulierbaren Szenarien.
Normalverteilung anwendbar § Für beliebige Verteilungen
einsetzbar
Nachteil § Abstraktion der § Vergangenheit als einziger § In der komplexen Form nur schwer
Normalverteilung kann zur Maßstab für die Zukunft. und nicht intuitiv nachvollziehbar.
Unterschätzung von Risiken Außerdem hoher Rechenaufwand.
führen.
Quelle: Reuse (2006)
Asset Management / CS / Folie 142 © 2026 – Hochschule der Bayerischen Wirtschaft

Berechnung des VaR
Varianz-Kovarianz-Ansatz
B ∶ Erwartete Rendite über den Zeithorizont
%
P ∶ Erwartete Volatilität über den Zeithorizont
%
n : o-Quantil der Normalverteilung
d
e 95% 99%
U 1,645 2,326
'
f
7
f − h ∗ a
7 E 7
§ Bei Annahme einer Normalverteilung errechnet sich bei bekanntem Mittelwert
und Volatilität für die (Portfolio-)Renditen der Value-at-Risk als
!"# = & − ( ∗ *
% d %
§ Für kurze Zeithorizonte, z.B. 1 Tag oder 10 Tage ist die Annahme das die
erwartete Portfolioänderung den Erwartungswert „Null“ hat, durchaus
legitim
!"# = −( ∗ *
d %
Asset Management / CS / Folie 143 © 2026 – Hochschule der Bayerischen Wirtschaft

Berechnung des VaR
Varianz-Kovarianz-Ansatz - Beispiel
§ Unser Portfolio besteht aus Birnen-Aktien im Wert von 200.000 €.
§ Die Volatilität der Birnen-Aktie beträgt j = kl% m. o. .
a) Berechnen Sie den Value-at-Risk zum Konfidenzniveau p = 95% für eine
Haltedauer von 1 Tag
b) Den VaR für eine Haltedauer von 10 (Handels)tagen
95%,10d
c) Den VaR gemessen als Wertveränderung des Portfolios in €
95%,10d
Asset Management / CS / Folie 144 © 2026 – Hochschule der Bayerischen Wirtschaft

Berechnung des VaR
Varianz-Kovarianz-Ansatz - Beispiel
§ Unser Portfolio besteht aus Birnen-Aktien im Wert von PF = 200.000 €.
| § Die Volatilität der Birnen-Aktie beträgt j |     |     |     |     |     |     | =   | kl%. |     |     |     |     |
| -------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- | --- | --- |
a) Berechnen Sie den Value-at-Risk zum Konfidenzniveau p = 95% für eine
Haltedauer von 1 Tag
|     | a   |     | 0,30 |          |         |      |            |     |      |         |     |         |
| --- | --- | --- | ---- | -------- | ------- | ---- | ---------- | --- | ---- | ------- | --- | ------- |
| a   | =   | =   |      | = 0,019	 |         | 17F	 | p          | =   | 95%	 | ⇢       | h   | = 1,645 |
|     | -4  |     |      |          |         |      |            |     |      |         | E   |         |
|     | 250 |     | 250  |          |         |      |            |     |      |         |     |         |
|     | rst |     | =    | 0,019    | ∗ 1,645 |      | = l, lkuv	 |     | (=   | k, uv%) |     |         |
FG%,JK
b)  Den VaR
95%,10d
|             | rst     |                                                  | = w/x |        | 	∗  | 10  | = l, | lyz{	 |     | (= y, | z{%)	 |     |
| ----------- | ------- | ------------------------------------------------ | ----- | ------ | --- | --- | ---- | ----- | --- | ----- | ----- | --- |
|             | FG%,JLK |                                                  |       | MN%,-4 |     |     |      |       |     |       |       |     |
| c)  Den VaR |         | gemessen als Wertveränderung des Portfolios in € |       |        |     |     |      |       |     |       |       |     |
95%,10d
| rst |            | =   | w/x |         | ∗ |' | =   | 0,0987	 | ∗   | 200.000€ |     | =   | uy. {~l€	 |
| --- | ---------- | --- | --- | ------- | ---- | --- | ------- | --- | -------- | --- | --- | --------- |
|     | FG%,JLK,OP |     |     | MN%,-04 |      |     |         |     |          |     |     |           |
Asset Management / CS / Folie 145 © 2026 – Hochschule der Bayerischen Wirtschaft

Kovarianz und Korrelation
W
ied
erh
o
S tatistik
lu
n g
§ Kovarianz beschreibt die Stärke des (linearen) Zusammenhang zwischen
zwei Variablen (den Renditen x und y):
,
1
234 = ∑ ) − )6 ) − )6 .
:& *+, *,: : *,& &
1%,
§ Der Korrelationskoeffizient
<=/
fg
7 =
:,&
> ) >
f g
normiert die Kovarianz auf den Wertebereich −1 bis +1.
Asset Management / CS / Folie 146 © 2026 – Hochschule der Bayerischen Wirtschaft

Korrelation
Asset Management / CS / Folie 147 © 2026 – Hochschule der Bayerischen Wirtschaft

Korrelationskoeffizient
W
ied
erh
o lu
S n
tatistik g
| −1   | −0.9 | −0.75 |
| ---- | ---- | ----- |
| −0.3 | 0    | 0.3   |
| 0.75 | 0.9  | 1     |
Asset Management / CS / Folie 148 © 2026 – Hochschule der Bayerischen Wirtschaft

Die Bestimmung von Kovarianz und Korrelation
Beispiel
Quelle: Berk / DeMarzo (2020)
Asset Management / CS / Folie 149 © 2026 – Hochschule der Bayerischen Wirtschaft

Korrelationen können schwanken (1/2)
Asset Management / CS / Folie 150 © 2026 – Hochschule der Bayerischen Wirtschaft

Korrelationen können schwanken (2/2)
Asset Management / CS / Folie 151 © 2026 – Hochschule der Bayerischen Wirtschaft

Diversifikationseffekte
Keine Diversifikation Vollständige Diversifikation
Portfolio 2
Portfolio 1
Investment C
Investment A
Investment B Investment D
Mittlere Diversification
Portfolio 3
Investment E
Investment F
Asset Management / CS / Folie 152 © 2026 – Hochschule der Bayerischen Wirtschaft