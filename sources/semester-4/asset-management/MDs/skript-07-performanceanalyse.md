Asset Management
Kapitel 7
Performanceanalyse
V26-05-17
Asset Management / CS / Folie 231 © 2026 –Hochschule der Bayerischen Wirtschaft

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
Asset Management / CS / Folie 232 © 2026 –Hochschule der Bayerischen Wirtschaft

Finanzcontrolling
Finanzcontrolling
Reporting
| Performanceanalyse | Risikoanalyse |     |
| ------------------ | ------------- | --- |
Renditekontrolle und  Risikokontrolle und – internes Berichtswesen
-steuerung des gesamten  steuerung des gesamten  § Performanceberichte
| oder Teile des Portfolios  | Portfolios           | § Risikoberichte   |
| -------------------------- | -------------------- | ------------------ |
| inkl. Benchmarking         | § Limitkontrollen    | § Bestandsberichte |
| § intern:                  | § Derivatekontrollen | § Spezialberichte  |
selbstgesteuertes PF § Einhaltungskontrollen der  externes Berichtswesen
| § extern: | Gesetze | § BaFin (pflichtgemäß) |
| --------- | ------- | ---------------------- |
(Spezial)fonds § Insurance-Strategien § GDV (vereinbarungsgem.)
|     | § Asset Liability- | § Analysten & Presse  |
| --- | ------------------ | --------------------- |
|     | Management         | (freiwillig)          |
§ Stress Tests
Asset Management / CS / Folie 233 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Definition
Definition Performanceanalyse
§ Die Performanceanalyse ermöglicht die Messung und leistungsorientierte
Bewertung des Kapitalanlageerfolges eines (institutionellen) Investors.
Messung
§ Was?
– Rendite, Risiko, risikoadjustierte Rendite
§ Wer?
– Gesamte oder Teile des Portfolios (Objekt)
• intern: Versicherungsportfolio (Gesamte Portfolio)
• extern: Spezial- und Publikumfonds (Mandate)
– Portfoliomanager (Subjekt)
§ Warum?
– Erfolgskontrolle
– Steuerung
Asset Management / CS / Folie 234 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Ziele
Ziele der Performanceanalyse
§ Kontrollfunktion
– Messung des Anlageerfolges in Relation zur Benchmark
§ Steuerungsfunktion
– Eingreifen in die Asset Allocation bei Fehlentwicklungen
§ Beurteilungs- und Anreizfunktion
– Bewertung und leistungsgerechte Entlohnung des Portfoliomanagers
§ Marketingfunktion
– Vergleich mit den Wettbewerbern und Kundenwerbung
Asset Management / CS / Folie 235 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Performancekennzahlen
Performancekennzahlen
Performancemaße
risikoadjustierte
Rendite
Rendite
Geldgewichtete Zeitgewichtete
Sharpe-Ratio Treynor-Ratio Jensen-Alpha
Rendite* Rendite**
* money-weighted *‘ time-weighted
rate ofreturn(MWR) rate ofreturn(TWR)
Asset Management / CS / Folie 236 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Geldgewichtete vs. Zeitgewichtete Rendite
Geldgewichtete vs. Zeitgewichtete Rendite
Beispiel
§ Ein Investor investiert heute 100 € in eine Aktie. Nach einem Jahr ist die
Aktie um 100% im Wert gestiegen. Daraufhin investiert der Investor
nochmals 300 € in die gleiche Aktie. Am Ende des zweiten Jahres ist die
Aktie um 50 % gefallen, so dass sein Endvermögen 250 € beträgt.
Asset Management / CS / Folie 237 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Geldgewichtete vs. Zeitgewichtete Rendite
Geldgewichtete vs. Zeitgewichtete Rendite
Beispiel
| § Zeitgewichtete Rendite (Time-Weighted      |              |         | Rate of        | Return, TWR) |
| -------------------------------------------- | ------------ | ------- | -------------- | ------------ |
| – tatsächliche absolute Performance: 250 € - |              |         | 400 € = -150 € |              |
| – Periodenrenditen: 1                        | = 100% und 1 | = −50%  |                |              |
|                                              | 8            | 7       |                |              |
– Zeitgewichtete Rendite: 1 = 1 + 1 1 + 1 − 1 = 2 7 0,5 − 1 = 0%
|     | N(O'P(Q. |     | 8 7 |     |
| --- | -------- | --- | --- | --- |
Asset Management / CS / Folie 238 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Geldgewichtete vs. Zeitgewichtete Rendite
Geldgewichtete vs. Zeitgewichtete Rendite
Beispiel
§ Geldgewichtete Rendite (Money-Weighted Rate of Return, TWR)
| – tatsächliche absolute Performance: 250 € - |      | 400 € = -150 € |     |     |     |
| -------------------------------------------- | ---- | -------------- | --- | --- | --- |
|                                              |      |                | 9CC | 7<C |     |
| – Geldgewichtete Rendite:                    | B 1 | = −100         | −   | +   | = 0 |
P(&)P(Q.
|     |     |     | 8R$ |     | '   |
| --- | --- | --- | --- | --- | --- |
. 8R$
.
– Lösung: Ermittlung des internen Zinsfußes
|     |     |     | → 5 | =   | −32,06% |
| --- | --- | --- | --- | --- | ------- |
)&>4)(.
Asset Management / CS / Folie 239 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Geldgewichtete vs. Zeitgewichtete Rendite
Geldgewichtete vs. Zeitgewichtete Rendite
Geldgewichtete Rendite (MWR) Zeitgewichtete Rendite (TWR)
§ Renditekennzahl, die den Anlageerfolg unter § Renditekennzahl, die den durchschnittlichen
Berücksichtigung der Zeitpunkte und Höhen Anlageerfolg auf Basis von Periodenrenditen
der zwischenzeitlichen Einlagen und bestimmt.
Entnahmen des Investors berücksichtigt.
§ Berechnungsperioden in Abhängigkeit der
§ wert- oder geldgewichtete Rendite Kapitalzu- und -abflüsse
interner Zinsfuß eines Zahlungsstroms
§ geometrische Durchschnittsrendite zweck-
§ IRR (Internal Rate of Return) zweckmäßig bei mäßig, wenn verschiedene Portfoliomanager
bewusster Beeinflussung der Kapitalzu- und miteinander verglichen werden sollen
abflüsse durch den Investor
§ Weltweit akzeptierter Standard der
Performancemessung (z. B. nach den Global
Investment Performance Standards GIPS)
z.B. Versicherung als Investor z.B. Portfoliomanager / Fonds
Asset Management / CS / Folie 240 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Geldgewichtete vs. Zeitgewichtete Rendite
Geldgewichtete vs. Zeitgewichtete Rendite
Fazit
Die geldgewichtete Rendite (MWR) drückt zwei Effekte in einer Kennzahl
aus.
1. Das (persönliche) Timing der Zahlungen.
2. Das Marktgeschehen.
§ Die zeitgewichtete Rendite (TWR) drückt hingegen nur das
Marktgeschehen aus.
§ Man kann daher den MWR gut mit dem TWR vergleichen.
§ Im Fall MWR < TWR hat der Investor ein ungünstiges Timing seiner Inflows
und Outflows vorgenommen oder hingenommen. Im Fall MWR > TWR war
das Timing günstig.
Asset Management / CS / Folie 241 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
(risikoadjustierte) Performancekennzahlen
(risikoadjustierte) Performancekennzahlen
risikoadjustierte Rendite
| Sharpe-Ratio     | Treynor-Ratio    | Jensen-Alpha        |
| ---------------- | ---------------- | ------------------- |
| Überrendite zum  | Überrendite zum  | Renditeunterschied  |
risikolosen Zinssatz  risikolosen Zinssatz  zur betaadjustierten
| gemessen         | gemessen am            | Benchmark  |
| ---------------- | ---------------------- | ---------- |
| am Gesamtrisiko  | systematischen Risiko  |            |
(Beta)
Asset Management / CS / Folie 242 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Sharpe-Ratio
Sharpe-Ratio
Definition
§ Sharpe-Ratio als Risikoprämie pro einer Einheit des übernommenen
Gesamtrisikos. (siehe: CML)
x − 5
= '
tJ =
=
s
=
§ Risikoprämie: erzielte Portfoliorendite x abzüglich einer risikolosen
=
Verzinsung 5 = Überschussrendite (Excess Return)
'
§ Gesamtrisiko: Volatilität = Standardabweichung des Portfolios s
=
§ Wichtig: Alle verwendeten Größen sollten für den selben Zeitraum (z. B.
annualisiert) betrachtet werden
§ Verdichtung der Rendite und des Risikos zu einer Kennzahl
§ 1966 entwickelt von William F. Sharpe (Nobelpreisträger 1990)
Asset Management / CS / Folie 243 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Sharpe-Ratio
Sharpe-Ratio
Beispiel
§ Gegeben ist die monatliche Entwicklung zweier Portfolios A und B sowie
der Benchmark BM über ein ganzes Jahr.
Tag 1.1. 1.2. 1.3. 1.4. 1.5. 1.6. 1.7. 1.8. 1.9. 1.10. 1.11. 1.12. 31.12.
A 40 41 39 42 44 40 38 38 41 37 38 45 50
B 80 80 81 79 80 82 81 82 83 84 83 84 88
BM 160 165 158 164 173 159 150 156 160 158 172 186 192
§ Die monatlichen Renditen ergeben sich entsprechend zu:
Monat J F M A M J J A S O N D
A 2,5% -4,9% 7,7% 4,8% -9,1% -5,0% 0,0% 7,9% -9,8% 2,7% 18,4% 11,1%
B 0,0% 1,3% -2,5% 1,3% 2,5% -1,2% 1,2% 1,2% 1,2% -1,2% 1,2% 4,8%
BM 3,1% -4,2% 3,8% 5,5% -8,1% -5,7% 4,0% 2,6% -1,3% 8,9% 8,1% 3,2%
Quelle: Spremann (2003)
Asset Management / CS / Folie 244 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Sharpe-Ratio
Sharpe-Ratio
Beispiel
§ Auf 100 (Euro) normiert ergeben sich folgende Wertentwicklungen der
Portfolios A und B bzw. der Benchmark:
Quelle: Spremann (2003)
Asset Management / CS / Folie 245 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Sharpe-Ratio
Sharpe-Ratio
Beispiel
§ Ermittlung der Sharpe-Ratio der Portfolios A und B sowie der Benchmark
|     | bei einem risikolosen Einjahreszinssatz |     |     |     |     |     |     | 5 von 4%: |     |     |     |     |     |
| --- | --------------------------------------- | --- | --- | --- | --- | --- | --- | --------- | --- | --- | --- | --- | --- |
'
|     | Portfolio A |     |     |       |     | Portfolio B |     |       |     |     | Benchmark |     |           |
| --- | ----------- | --- | --- | ----- | --- | ----------- | --- | ----- | --- | --- | --------- | --- | --------- |
|     |             | 50  | €   |       |     | 88          | €   |       |     |     | 192       | €   |           |
|     | ! =         |     | − 1 | = 25% | !   | =           | − 1 | = 10% |     | !   | =         |     | − 1 = 20% |
/
|     |        | 40      | €    |          |     | 3 80    | €      |          |     | 30     | 160     | €      |          |
| --- | ------ | ------- | ---- | -------- | --- | ------- | ------ | -------- | --- | ------ | ------- | ------ | -------- |
|     |        | =;0$#12 |      |          |     | =;0$#12 |        |          |     |        | =;0$#12 |        |          |
|     | ;      |         |      | B 12     |     | ;       |        | B 12     |     | ;      |         |        | B 12     |
|     | /      | /       |      |          |     | 3       | 3      |          |     |        | 30      | 30     |          |
|     | = 8,5% | B       | 12   | = 29,4%  | =   | 1,9%    | B 12   | = 6,6%   |     | = 5,4% |         | B 12   | = 18,7%  |
|     |        | ! −     | !    | 25% − 4% |     | ! −     | !      |          |     |        | !       | − !    | 20% − 4% |
|     |        | /       | "    |          |     |         |        | 10% − 4% |     |        | 30      | "      |          |
| 1-  | =      |         | =    |          |     | 3       | "      |          | 1-  | =      |         |        | =        |
|     |        |         |      |          | 1-  | =       | =      |          |     |        |         |        |          |
|     | /      | ;       |      | 29,4%    | 3   | ;       |        | 6,6%     |     | /      | ;       |        | 18,7%    |
|     |        | /       |      |          |     | 3       |        |          |     |        | 30      |        |          |
|     |        | =       | F,GH |          |     |         | = F,JH |          |     |        |         | = F,LM |          |
|     |        |         |      | 3        |     |         |        | 1        |     |        |         |        |          |
2
Ranking
Quelle: Spremann (2003)
Asset Management / CS / Folie 246 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Sharpe-Ratio
Sharpe-Ratio
§ Regel: Je höher die Sharpe-Ratio, desto besser die Performance des
Portfoliomanager und desto mehr hat sich das Eingehen von Risiko gelohnt (Ex
post-Analyse).
§ Ein geschickter (guter) Portfoliomanager wird Renditen erreichen, die über der
CML liegen.
§ Ranking zu anderen Portfolios und zur Benchmark möglich
§ Nur sinnvoll, wenn Renditen normalverteilt sind und 1 > 1 .
5 F
§ Vorsicht: Vergleich verschiedener Sharpe-Ratios nur aussagekräftig, wenn die
Portefeuilles dasselbe regionale Exposure haben. Denn Teile der
Standardabweichung regionaler Portefeuilles können in globalen Portfolios „weg-
diversifiziert“ werden. (je diversifizierter das Portfolio, desto höher die Sharpe
Ratio)
§ Nachteil: Maß nur für normalverteilte Risiken anwendbar, nicht aber für
asymmetrische Renditen wie Optionen.
§ Fazit: Performancemaß für die gesamte Vermögensanlage.
Asset Management / CS / Folie 247 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Sharpe-Ratio
Exkurs: Anpassungen der Sharpe-Ratio
§ Bei nicht-normalverteilten Renditen wird eine Anpassung der Sharpe-
Ratio notwendig:
|                          |     |     | x − | 5   |     |     |     |
| ------------------------ | --- | --- | --- | --- | --- | --- | --- |
| § bei negativer Schiefe: |     |     | =   | '   |     |     |     |
tJ =
=
-
|     |     | s   | − <;Y | 0, t |     |     |     |
| --- | --- | --- | ----- | ---- | --- | --- | --- |
C
=
| § bei Fat | Tails: |     | x   | − 5 |     |     |     |
| --------- | ------ | --- | --- | --- | --- | --- | --- |
|           |        |     | =   | '   |     |     |     |
tJ =
=
-
|     |     | s + | <@8 | 0, í − | 3 D |     |     |
| --- | --- | --- | --- | ------ | --- | --- | --- |
=
| § bei negativer Schiefe  |     |     |     | x − | 5   |     |     |
| ------------------------ | --- | --- | --- | --- | --- | --- | --- |
|                          |     |     |     | =   | '   |     |     |
tJ =
| und Fat | Tails: |     |     |          |     |        |     |
| ------- | ------ | --- | --- | -------- | --- | ------ | --- |
|         |        | =   |     | -        |     |        | -   |
|         |        | s − | <;Y | 0, t C + | <@8 | 0, í − | 3 D |
=
Asset Management / CS / Folie 248 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Treynor-Ratio
Treynor-Ratio
Definition
§ Sharpe-Ratio als Risikoprämie pro einer Einheit des übernommenen
systematischen Risikos. (siehe: CML)
x − 5
! '
"J =
!
ê
!
§ Risikoprämie: erzielte Portfoliorendite x abzüglich einer risikolosen
!
Verzinsung 5 = Überschussrendite (Excess Return)
'
§ Systematisches Risiko: Betafaktor des Portfolios s
!
§ Verdichtung der Rendite und des Risikos zu einer Kennzahl
§ 1965 entwickelt von Jack L. Treynor
Asset Management / CS / Folie 249 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Treynor-Ratio
Treynor-Ratio
Beispiel
§ Gegeben sind die Renditen von zwei Portfolien A und B sowie eines Index 1.
Der risikolose Zinssatz 5 beträgt 3%.
'
§ Aus den Renditen wurden bereits folgende Daten ermittelt:
Beurteilen Sie die Performance
nach der Treynor-Ratio
Quelle: Bruns/ Meyer-Bullerdiek(2013)
Asset Management / CS / Folie 250 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Treynor-Ratio
Treynor-Ratio
Beispiel
| § Der risikolose Zinssatz 5 |     |     | beträgt 3%.  |
| --------------------------- | --- | --- | ------------ |
'
§ Aus den Renditen wurden bereits folgende Daten ermittelt:
Lösung
" :" D,N%:C%
|      | A   | :   |          |
| ---- | --- | --- | -------- |
| § "J | =   | =   | = 0,0117 |
8
v -,/ww/
A
" :"
|      | B   | : D,C%:C% |          |
| ---- | --- | --------- | -------- |
| § "J | =   | . =       | = 0,0131 |
B
v 0,MM--
B
|      | "   | :"      |        |
| ---- | --- | ------- | ------ |
|      | BC  | : D%:C% |        |
| § "J | =   | =       | = 0,01 |
B?
v BC -
Portfolio A und B haben - bezogen auf das systematische Risiko - besser
performt als die Benchmark. Portfolio B schlägt A.
Quelle: Bruns/ Meyer-Bullerdiek(2013)
Asset Management / CS / Folie 251 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Treynor-Ratio
Treynor-Ratio vs. Sharpe-Ratio
Beispiel
§ Der risikolose Zinssatz 5 beträgt 3%.
'
Lösung
|     |     | 1   | 3   | 2   |
| --- | --- | --- | --- | --- |
1
|        |             | 2   |      | 3   |
| ------ | ----------- | --- | ---- | --- |
| SR >SR | >SR aber TR | >TR | >TR  |     |
| A      | BM B        | B   | A BM |     |
§ Bezogen auf das Gesamtrisiko weist Portfolio A eine höhere Performance als B auf.
§ B hat gegenüber der Benchmark sogar underperformt.
§ B ist nicht so gut diversifiziert wie A und hat ein höheres unsystematisches Risiko.
Quelle: Bruns/ Meyer-Bullerdiek(2013)
Asset Management / CS / Folie 252 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Treynor-Ratio
Treynor-Ratio
Bewertung
§ relatives Performancemaß
§ Benchmark wird zur Ermittlung des Betafaktors benötigt
§ Kritik an Beta betrifft auch Treynor-Ratio: Die Auswahl des Marktportfolios
hat erheblichen Einfluß auf den Beta-Faktor
§ Ranking zu anderen Portfolios und zur Benchmark möglich
§ Falls Portfolio gut diversifiziert, gleiches Ranking wie bei Sharpe-Ratio
§ erhöhter Daten- bzw. Schätzaufwand (erzielte Jahresrendite, historische
Volatilität des PF/ BM sowie Korrelation/ Beta zwischen PF und BM).
§ keine Berücksichtigung des unsystematischen Risikos des Portfolios
Fazit
§ Performancemaß für diversifizierte Teilportfolios mit ex-ante Benchmark
Asset Management / CS / Folie 253 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Jensen-Alpha
Jensen-Alpha
Definition
§ Jensen-Alpha als absolutes Performancemaß für den Renditeunterschied
des Portfolios P zur Benchmark BM unter Beachtung des Betas β des
Portfolios.
|       |          |       | Ç = | 5 − 5 | − 5 | − 5 | 0 ê |
| ----- | -------- | ----- | --- | ----- | --- | --- | --- |
| Ç = 5 | − 5      | bzw.  | =   | = '   | B?  | '   | =   |
| =     | = = x8=? |       |     |       |     |     |     |
Gemessene Überrendite
Erwartete Überrendite
§ Differenz aus erzielter Portfoliorendite 5 und erwarteter Rendite 5
|     |     |     |     | =   |     |     | = x8=? |
| --- | --- | --- | --- | --- | --- | --- | ------ |
nach CAPM gibt die Leistung des Portfoliomanagers (PM) wieder.
§ Maß für Teil der Gesamtrendite, der nicht mit der Benchmark korreliert ist à
Maß zur Bestimmung der Wertpapierselektionsfähigkeit des PM.
§ Regel: Je höher das Jensen-Alpha, desto besser die Performance des PM.
§ 1968 entwickelt von Michael C. Jensen.
Asset Management / CS / Folie 254 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Jensen-Alpha
Jensen-Alpha
§ Alpha ist die Überschussrendite eines Assets verglichen mit der Rendite,
die den Anleger für das systematische Risiko entschädigt.
Schematische Darstellung
î
| 5 = | 5 + Ç + | 5 − | 5 0 ê | 5 = Çì | + ê 0 5 | + w |
| --- | ------- | --- | ----- | ------ | ------- | --- |
| =   | ' =     | B?  | ' =   | =      | = = B?  | =   |
Asset Management / CS / Folie 255 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Jensen-Alpha
Jensen-Alpha
Beispiel
| §   | Der risikolose Zinssatz 5 |     |     |     | beträgt 3%.  |     |     |
| --- | ------------------------- | --- | --- | --- | ------------ | --- | --- |
'
§ Aus den Renditen der PF A und B wurden bereits folgende Daten ermittelt:
Lösung
|     | Ç = | 5 −                   | 5 −  | 5 −                   | 5 0 ê |          |          |
| --- | --- | --------------------- | ---- | --------------------- | ----- | -------- | -------- |
|     | =   | =                     | '    | B?                    | ' =   |          |          |
|     |     | Gemessene Überrendite |      | Erwartete Überrendite |       |          |          |
| §   | Ç = | 4,5%                  | − 3% | − 4%                  | − 3%  | 0 1,2772 | = ~, áá% |
8
| §   | Ç = | 4,3% | − 3% | − 4% | − 3% | 0 0,9911 | = ~, }+% |
| --- | --- | ---- | ---- | ---- | ---- | -------- | -------- |
B
§ Portfolio A und B haben - bezogen auf das systematische Risiko - besser
performt als die Benchmark.
Quelle: Bruns/ Meyer-Bullerdiek(2013)
Asset Management / CS / Folie 256 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Jensen-Alpha
Jensen-Alpha
Bewertung
§ absolutes Performancemaß (keine Relation der Überrendite zum Risiko).
§ Benchmark zur Ermittlung des Betafaktors und zum direkten Vergleich.
§ hohe Ergebnis-Sensitivität zur gewählten Benchmark.
§ Ranking zu anderen Portfolios und zur Benchmark problematisch.
§ erhöhter Daten- bzw. Schätzaufwand (erzielte Jahresrendite, historische
Volatilität des PF/ BM sowie Korrelation/ Beta zwischen PF und BM).
§ Beurteilung der Wertpapierselektionsfähigkeit des PM nur eingeschränkt
§ Keine Diskriminierung zwischen einem großen, aber variablen Alpha und
einem kleineren, aber weniger variablen Alpha.
Asset Management / CS / Folie 257 © 2026 –Hochschule der Bayerischen Wirtschaft

Performanceanalyse
Jensen-Alpha
Jensen-Alpha
Bewertung
§ Bei signifikant positivem Ç kann auf die überlegenden Fähigkeiten des
Portfoliomanagers geschlossen werden.
§ Vergleich des Alphas unterschiedlicher Portfolios problematisch, da nur
Renditen verglichen werden. Für den Investor ist jedoch relevant, wie viel
Risiko für die Erzielung des Alphas zusätzlich in Kauf genommen wurde.
§ Das Jensen-Alpha erlaubt im Gegensatz zu Sharpe- und Treynor-Ratio kein
einwandfreies Ranking der Portfolios, da sie unterschiedliche Risiken
aufweisen können.
Fazit
§ Absolutes Maß für Out-/Underperformance eines PF gegenüber
Benchmark
Asset Management / CS / Folie 258 © 2026 –Hochschule der Bayerischen Wirtschaft