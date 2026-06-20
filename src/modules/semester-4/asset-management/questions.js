export const questions = [
  // ───────────────────────────────────────────────────────────
  // Kapitel 1 · Einführung in das Asset Management
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k1-q1',
    type: 'single',
    question:
      'Welche Begriffe werden im Skript als Synonyme bzw. nahe Verwandte des Asset Managements genannt?',
    options: [
      'Portfolio-, Wertpapier-, Fonds-, Investment Management und Vermögensverwaltung',
      'Risikomanagement, Compliance und interne Revision',
      'Wirtschaftsprüfung, Steuerberatung und Treuhand',
      'Mergers & Acquisitions, Corporate Finance und Leveraged Buyouts',
    ],
    correctAnswer: 0,
    explanation:
      'Asset Management ist die systematische, professionelle Kapitalanlage; die genannten Synonyme sind Portfolio-, Wertpapier-, Fonds-, Investment Management und Vermögensverwaltung.',
  },
  {
    id: 'am-k1-q2',
    type: 'multiple',
    question: 'Welche vier Ecken bilden das „Magische Viereck" der Kapitalanlage?',
    options: ['Rendite', 'Risiko', 'Liquidität', 'Steuern', 'Transparenz', 'Diversifikation'],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Das Magische Viereck spannt die Zielkonflikte aus Rendite, Risiko, Liquidität und Steuern auf.',
  },
  {
    id: 'am-k1-q3',
    type: 'single',
    question:
      'Welche Aussage trennt klassisches von fondsgestütztem Asset Management korrekt?',
    options: [
      'Klassisches AM ist individuell, aber teuer und wenig gestreut; fondsgestütztes AM ist breit gestreut und schon bei kleinem Vermögen möglich, dafür weniger individuell.',
      'Klassisches AM ist breit gestreut und günstig; fondsgestütztes AM ist teuer und individuell.',
      'Beide Formen sind in Streuung, Kosten und Individualität identisch.',
      'Fondsgestütztes AM ist nur institutionellen Anlegern zugänglich.',
    ],
    correctAnswer: 0,
    explanation:
      'Klassisches Asset Management ist individuell, aber teuer und wenig gestreut; fondsgestütztes Asset Management ist breit gestreut und schon bei kleinem Vermögen möglich, dafür weniger individuell.',
  },
  {
    id: 'am-k1-q4',
    type: 'single',
    question:
      'Wie ist die Aufsichtsbeziehung der BaFin zur Depotbank im Fondsgeschäft korrekt beschrieben?',
    options: [
      'Die BaFin „überwacht" die Depotbank, während sie Finanzdienstleister und KVG „kontrolliert".',
      'Die BaFin „kontrolliert" die Depotbank ebenso wie Finanzdienstleister und KVG.',
      'Die Depotbank unterliegt keiner BaFin-Aufsicht.',
      'Die Depotbank kontrolliert ihrerseits die BaFin.',
    ],
    correctAnswer: 0,
    explanation:
      'Die BaFin kontrolliert Finanzdienstleister und KVG, überwacht aber die Depotbank — die Begriffe sind hier zu unterscheiden.',
  },
  {
    id: 'am-k1-q5',
    type: 'single',
    question: 'Was kennzeichnet das Sondervermögen eines Fonds?',
    options: [
      'Es ist vom Vermögen der KVG getrennt und dadurch vor deren Gläubigern geschützt.',
      'Es haftet bei Insolvenz der KVG vollumfänglich für deren Verbindlichkeiten.',
      'Es wird von der KVG selbst verwahrt, nicht von der Depotbank.',
      'Es darf ausschließlich aus Aktien bestehen.',
    ],
    correctAnswer: 0,
    explanation:
      'Das Sondervermögen ist vom Vermögen der KVG getrennt und damit vor deren Gläubigern geschützt; verwahrt wird es von der Depotbank.',
  },
  {
    id: 'am-k1-q6',
    type: 'multiple',
    question: 'Welche Merkmale charakterisieren institutionelle Anleger?',
    options: [
      'Juristische Person',
      'Hohe Anlagevolumina',
      'Anlage fremder Mittel',
      'Bindung an Regelwerke wie KAGG, WpHG, KWG',
      'Stets Einzelentscheidung durch eine Privatperson',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Institutionelle Anleger sind juristische Personen mit hohen Volumina, legen fremde Mittel an, sind regulatorisch gebunden und entscheiden in der Gruppe — nicht als Einzelperson.',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 2 · Traditionelle Assetklassen
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k2-q1',
    type: 'multiple',
    question: 'Welche Assetklassen zählen zu den traditionellen (standardisierten) Klassen?',
    options: ['Aktien', 'Anleihen', 'Geldmarktinstrumente', 'Währungen', 'Hedge Fonds', 'Private Equity'],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Traditionelle (standardisierte) Assetklassen sind Aktien, Anleihen, Geldmarktinstrumente und Währungen; Hedge Fonds und Private Equity gehören zu den alternativen Klassen.',
  },
  {
    id: 'am-k2-q2',
    type: 'single',
    question: 'Welche Kennzahlen gelten für die Gründung einer AG?',
    options: [
      'Grundkapital mind. 50.000 €, davon mind. 25 % einzuzahlen, Mindestnennwert je Aktie 1 €.',
      'Grundkapital mind. 120.000 €, davon 50 % einzuzahlen.',
      'Grundkapital mind. 25.000 €, voll einzuzahlen.',
      'Kein gesetzliches Mindestgrundkapital erforderlich.',
    ],
    correctAnswer: 0,
    explanation:
      'Die AG hat ein Mindestgrundkapital von 50.000 € (davon mind. 25 % einzuzahlen) und einen Mindestnennwert je Aktie von 1 €. Die SE benötigt 120.000 €.',
  },
  {
    id: 'am-k2-q3',
    type: 'single',
    question: 'Wodurch unterscheidet sich die KGaA von der AG?',
    options: [
      'Bei der KGaA tritt an die Stelle des Vorstands mindestens ein persönlich haftender Komplementär.',
      'Die KGaA hat kein Grundkapital.',
      'Die KGaA besitzt keine Hauptversammlung.',
      'Die KGaA haftet ihren Aktionären gegenüber unbeschränkt.',
    ],
    correctAnswer: 0,
    explanation:
      'Die KGaA ersetzt den Vorstand der AG durch persönlich haftende Komplementäre; Hauptversammlung und Aufsichtsrat bleiben erhalten.',
  },
  {
    id: 'am-k2-q4',
    type: 'multiple',
    question: 'Welche Aussagen zur Vorzugsaktie sind nach Skript korrekt?',
    options: [
      'Sie verzichtet auf das Stimmrecht zugunsten einer bevorzugten Dividende.',
      'Sie darf maximal 50 % des Grundkapitals ausmachen.',
      'Die Dividende ist kumulativ (nachzahlbar).',
      'Bei zweijährigem Dividendenausfall entsteht ein Sonderstimmrecht.',
      'Sie gewährt ein doppeltes Stimmrecht gegenüber der Stammaktie.',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Die Vorzugsaktie hat kein Stimmrecht, ist auf max. 50 % des Grundkapitals begrenzt, hat eine kumulative Dividende und erhält nach zwei Jahren Ausfall ein Sonderstimmrecht.',
  },
  {
    id: 'am-k2-q5',
    type: 'single',
    question:
      'Eine Anleihe notiert unter pari (Kurs < Nennwert). In welchem Verhältnis stehen Effektivverzinsung (ytm) und Nominalzins?',
    options: [
      'Die ytm liegt über dem Nominalzins.',
      'Die ytm liegt unter dem Nominalzins.',
      'Die ytm entspricht genau dem Nominalzins.',
      'Es besteht kein Zusammenhang zwischen Kurs und ytm.',
    ],
    correctAnswer: 0,
    explanation:
      'Kurs unter pari → ytm > Nominalzins; Kurs zu pari → ytm = Nominalzins; Kurs über pari → ytm < Nominalzins.',
  },
  {
    id: 'am-k2-q6',
    type: 'single',
    question: 'Was passiert bei der Wandlung im Vergleich Wandelanleihe vs. Optionsanleihe?',
    options: [
      'Bei der Wandelanleihe geht die Anleihe bei Wandlung unter, bei der Optionsanleihe bleibt sie neben den bezogenen Aktien bestehen.',
      'Bei beiden Formen bleibt die Anleihe nach Bezug der Aktien bestehen.',
      'Bei beiden Formen geht die Anleihe nach Bezug der Aktien unter.',
      'Bei der Optionsanleihe geht die Anleihe unter, bei der Wandelanleihe bleibt sie bestehen.',
    ],
    correctAnswer: 0,
    explanation:
      'Bei der Wandelanleihe wird die Anleihe in Aktien umgewandelt und geht damit unter; bei der Optionsanleihe bleibt die Anleihe bestehen, das Optionsrecht erlaubt zusätzlichen Aktienbezug.',
  },
  {
    id: 'am-k2-q7',
    type: 'single',
    question:
      'Wo verläuft die Grenze zwischen Investment Grade und spekulativem Bereich in der Ratingskala von Moody’s und S&P?',
    options: [
      'Investment Grade bis Baa3/BBB−, spekulativ ab Ba1/BB+.',
      'Investment Grade bis Ba1/BB+, spekulativ ab Baa3/BBB−.',
      'Investment Grade bis A3/A−, spekulativ ab Baa1/BBB+.',
      'Es gibt keine Grenze; alle Ratings gelten als Investment Grade bis zum Ausfall D.',
    ],
    correctAnswer: 0,
    explanation:
      'Investmentqualität reicht bis Baa3/BBB−, der spekulative Bereich beginnt bei Ba1/BB+ und reicht bis zum Ausfall (D).',
  },
  {
    id: 'am-k2-q8',
    type: 'single',
    question:
      'Im Skriptbeispiel sinkt die versprochene Verzinsung von 18,9 % auf eine erwartete Verzinsung von 9,4 %. Worauf beruht diese Differenz?',
    options: [
      'Auf der Berücksichtigung des Ausfallrisikos (PD 20 %, Recovery 60 %).',
      'Auf Stückzinsen, die vom Käufer nachgezahlt werden.',
      'Auf einer Währungsumrechnung.',
      'Auf der Wandlung der Anleihe in Aktien.',
    ],
    correctAnswer: 0,
    explanation:
      'Die versprochene ytm überzeichnet die Rendite, weil sie das Ausfallrisiko ignoriert; mit Ausfallwahrscheinlichkeit und Recovery sinkt die erwartete ytm von 18,9 % auf 9,4 %.',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 3 · Alternative Assetklassen
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k3-q1',
    type: 'single',
    question:
      'Warum werden alternative Assetklassen vor allem ins Portfolio aufgenommen?',
    options: [
      'Wegen ihrer geringen Korrelation zu traditionellen Anlagen (Diversifikation).',
      'Wegen ihrer hohen Liquidität und einfachen Bewertbarkeit.',
      'Weil sie regulatorisch besonders stark geschützt sind.',
      'Weil sie garantiert höhere Renditen als Aktien liefern.',
    ],
    correctAnswer: 0,
    explanation:
      'Alternative Assetklassen sind weniger liquide und schwerer bewertbar; gehalten werden sie vor allem wegen der geringen Korrelation zu traditionellen Anlagen.',
  },
  {
    id: 'am-k3-q2',
    type: 'multiple',
    question: 'Welche Merkmale kennzeichnen Hedge Funds (Absolute Return Funds)?',
    options: [
      'Streben nach absoluter Performance unabhängig vom Gesamtmarkt',
      'Hohe Strategiefreiheit (Short Selling, Leverage, Derivate)',
      'Erfolgsabhängige Vergütung mit High Water Marks',
      'Geringe Regulierung',
      'Gesetzlich garantierte Kapitalerhaltung',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Hedge Funds suchen absolute Performance, nutzen Short Selling/Leverage/Derivate, vergüten erfolgsabhängig mit High Water Marks und sind gering reguliert; eine Kapitalgarantie gibt es nicht.',
  },
  {
    id: 'am-k3-q3',
    type: 'single',
    question:
      'Was zeigen Event Studies zur Merger Arbitrage hinsichtlich der kumulierten abnormalen Renditen (CAR)?',
    options: [
      'Für Targets deutlich positive CAR, für Bieter nahe Null.',
      'Für Bieter deutlich positive CAR, für Targets stark negative.',
      'Für beide Seiten stark negative CAR.',
      'Für beide Seiten exakt Null.',
    ],
    correctAnswer: 0,
    explanation:
      'Targets erzielen deutlich positive abnormale Renditen, Bieter liegen nahe Null — Grundlage der Merger-Arbitrage-Strategie.',
  },
  {
    id: 'am-k3-q4',
    type: 'single',
    question:
      'Wie berechnet sich der Liegenschaftszins (LZ) und was ist der Vervielfältiger?',
    options: [
      'LZ = Mieteinnahmen p.a. / Kaufpreis; der Vervielfältiger ist sein Kehrwert (Kaufpreis / Mieteinnahmen).',
      'LZ = Kaufpreis / Mieteinnahmen p.a.; der Vervielfältiger ist mit dem LZ identisch.',
      'LZ = Mieteinnahmen p.a. × Kaufpreis; der Vervielfältiger ist die Wurzel daraus.',
      'LZ = Kaufpreis − Mieteinnahmen; der Vervielfältiger ist die Differenz.',
    ],
    correctAnswer: 0,
    explanation:
      'Der Liegenschaftszins LZ = Mieteinnahmen p.a. / Kaufpreis; sein Kehrwert ist der Vervielfältiger, mit dem aus nachhaltigen Mieteinnahmen der Marktwert geschätzt wird.',
  },
  {
    id: 'am-k3-q5',
    type: 'single',
    question: 'Was bewirkt der Smoothing-Effekt bei appraisal-basierten Immobilienindizes?',
    options: [
      'Er senkt durch gutachterbasierte, ankerorientierte und zeitversetzte Bewertungen die gemessene Volatilität künstlich.',
      'Er erhöht die gemessene Volatilität gegenüber dem wahren Wert.',
      'Er macht Immobilienrenditen exakt normalverteilt.',
      'Er betrifft ausschließlich transaktionsbasierte Indizes.',
    ],
    correctAnswer: 0,
    explanation:
      'Gutachterbasierte Bewertungen sind ankerorientiert und zeitversetzt; der Smoothing-Effekt unterschätzt damit die wahre Volatilität. Normalverteilungstests (Jarque-Bera, Shapiro-Wilk) lehnen die Normalverteilung klar ab.',
  },
  {
    id: 'am-k3-q6',
    type: 'single',
    question:
      'Wie lautet das Cost-of-Carry-Modell für Rohstoff-Futures und wie wirken Lagerkosten u und Convenience Yield y?',
    options: [
      'F0 = S0·e^((r_f + u − y)·T): u wirkt preissteigernd (+), y preissenkend (−).',
      'F0 = S0·e^((r_f − u + y)·T): u wirkt preissenkend, y preissteigernd.',
      'F0 = S0·(1 + r_f)·u·y: beide multiplikativ.',
      'F0 = S0 − (r_f + u − y): rein additiv.',
    ],
    correctAnswer: 0,
    explanation:
      'F0 = S0·e^((r_f + u − y)·T). Lagerhaltungskosten u erhöhen den Futurespreis (+), die Convenience Yield y senkt ihn (−).',
  },
  {
    id: 'am-k3-q7',
    type: 'single',
    question: 'Welches Vorzeichen hat die Rollrendite in Backwardation bzw. Contango?',
    options: [
      'In Backwardation positiv, in Contango negativ.',
      'In Backwardation negativ, in Contango positiv.',
      'In beiden Fällen positiv.',
      'In beiden Fällen negativ.',
    ],
    correctAnswer: 0,
    explanation:
      'Bei Backwardation (fallende Terminkurve) ist die Rollrendite positiv, bei Contango (steigende Terminkurve) negativ.',
  },
  {
    id: 'am-k3-q8',
    type: 'single',
    question: 'Wie sind Digital Assets / Bitcoin nach dem Skript einzuordnen?',
    options: [
      'Nicht von Zentralbanken emittierte, blockchainbasierte Werte ohne Geldstatus; sehr hohe Volatilität, aber geringe Korrelation zu klassischen Assets.',
      'Von Zentralbanken emittiertes digitales Geld mit gesetzlichem Zahlungsmittelstatus.',
      'Niedrig volatile Anlage mit hoher Korrelation zu Aktien.',
      'Eine traditionelle, standardisierte Assetklasse.',
    ],
    correctAnswer: 0,
    explanation:
      'Digital Assets sind nicht von Zentralbanken emittiert und haben keinen Geldstatus; Bitcoin zeigt extreme Wertentwicklung bei sehr hoher Volatilität und geringer Korrelation (Aktien 0,22; Anleihen 0,02; Immobilien 0,16; Gold 0,12).',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 4 · Mathematische und statistische Grundlagen
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k4-q1',
    type: 'single',
    question:
      'Eine Aktie steigt von 100 auf 200 (+100 %) und fällt zurück auf 100 (−50 %). Welches Durchschnittsmaß bildet die tatsächliche Entwicklung korrekt ab?',
    options: [
      'Das geometrische Mittel (0 %).',
      'Das arithmetische Mittel (25 %).',
      'Der Median (+25 %).',
      'Der Modus (+100 %).',
    ],
    correctAnswer: 0,
    explanation:
      'Bei Mehrperiodenrenditen mit Wiederanlage ist das geometrische Mittel korrekt: ((1+1)(1−0,5))^(1/2)−1 = 0 %. Das arithmetische Mittel (25 %) überschätzt die Entwicklung.',
  },
  {
    id: 'am-k4-q2',
    type: 'single',
    question: 'Wie rechnet man eine stetige in eine diskrete Rendite um?',
    options: [
      'r_diskret = e^(r_stetig) − 1 bzw. ln(1 + r_diskret) = r_stetig.',
      'r_diskret = ln(r_stetig).',
      'r_diskret = r_stetig².',
      'r_diskret = r_stetig / e.',
    ],
    correctAnswer: 0,
    explanation:
      'Es gilt 1 + r_diskret = e^(r_stetig), also r_diskret = e^(r_stetig) − 1 und umgekehrt ln(1 + r_diskret) = r_stetig.',
  },
  {
    id: 'am-k4-q3',
    type: 'single',
    question: 'Warum werden stetige Renditen über das arithmetische Mittel gemittelt?',
    options: [
      'Weil stetige Renditen zeitadditiv sind.',
      'Weil stetige Renditen multiplikativ verknüpft werden.',
      'Weil das geometrische Mittel bei stetigen Renditen undefiniert ist.',
      'Weil stetige Renditen stets positiv sind.',
    ],
    correctAnswer: 0,
    explanation:
      'Stetige Renditen sind additiv über die Zeit (e^(Σ r_i)), daher wird arithmetisch gemittelt — anders als bei diskreten Renditen.',
  },
  {
    id: 'am-k4-q4',
    type: 'single',
    question: 'Was misst die Macauley-Duration?',
    options: [
      'Die barwertgewichtete mittlere Kapitalbindungsdauer als Maß des Zinsänderungsrisikos.',
      'Die Wahrscheinlichkeit eines Anleiheausfalls.',
      'Die Differenz zwischen Nominal- und Effektivzins.',
      'Die jährliche Kuponhöhe einer Anleihe.',
    ],
    correctAnswer: 0,
    explanation:
      'Die Macauley-Duration ist die barwertgewichtete mittlere Kapitalbindungsdauer (in Jahren) und misst das Zinsänderungsrisiko. Die Modified Duration normiert sie auf (1 + r).',
  },
  {
    id: 'am-k4-q5',
    type: 'multiple',
    question: 'Welche Aussagen zur Duration sind korrekt?',
    options: [
      'Je niedriger der Coupon, desto höher die Duration.',
      'Je länger die Restlaufzeit, desto höher (unterproportional) die Duration.',
      'Ein Zero-Bond hat eine Duration gleich seiner Restlaufzeit.',
      'Die Konvexität korrigiert die lineare Unterschätzung der Modified Duration.',
      'Je höher der Coupon, desto höher die Duration.',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Die Duration steigt bei niedrigem Coupon, niedriger Rendite und langer Laufzeit (unterproportional). Der Zero-Bond hat Duration = Restlaufzeit. Die Konvexität korrigiert die lineare Unterschätzung.',
  },
  {
    id: 'am-k4-q6',
    type: 'single',
    question:
      'Wertpapier B liefert konstant −15 % pro Periode. Welche Aussage zur Standardabweichung trifft zu?',
    options: [
      'σ_B = 0 %, obwohl ein realer Verlust entsteht — σ misst Schwankung, nicht Verlust.',
      'σ_B ist hoch, weil die Rendite negativ ist.',
      'σ_B entspricht genau −15 %.',
      'σ_B kann nicht berechnet werden.',
    ],
    correctAnswer: 0,
    explanation:
      'Konstante Renditen haben σ = 0, unabhängig vom Vorzeichen. Volatilität misst nur Schwankung; trotz σ_B = 0 entsteht ein realer Verlust von −38,6 %.',
  },
  {
    id: 'am-k4-q7',
    type: 'single',
    question:
      'Reale Assetrenditen sind meist linksschief und leptokurtisch. Welche Konsequenz hat das für die Normalverteilungsannahme?',
    options: [
      'Sie unterschätzt systematisch das Risiko.',
      'Sie überschätzt systematisch das Risiko.',
      'Sie hat keine Auswirkung auf die Risikoeinschätzung.',
      'Sie macht die Volatilität zum perfekten Risikomaß.',
    ],
    correctAnswer: 0,
    explanation:
      'Linksschiefe (Skewness < 0) und fette Enden (Kurtosis > 3) bedeuten häufigere extreme Verluste, als die Normalverteilung annimmt — das Risiko wird systematisch unterschätzt.',
  },
  {
    id: 'am-k4-q8',
    type: 'single',
    question:
      'Was beschreibt der Value-at-Risk und welche z-Werte gelten im Varianz-Kovarianz-Ansatz?',
    options: [
      'Verlust, der mit gegebener Wahrscheinlichkeit über einen Zeithorizont nicht überschritten wird; z = 1,645 (95 %), z = 2,326 (99 %).',
      'Garantierter Maximalverlust; z = 1,0 (95 %), z = 2,0 (99 %).',
      'Erwartete Rendite; z = 0,5 (95 %), z = 1,0 (99 %).',
      'Mittlerer Gewinn; z = 1,96 (95 %), z = 2,58 (99 %).',
    ],
    correctAnswer: 0,
    explanation:
      'Der VaR schätzt einen Verlustbetrag, der mit gegebener Wahrscheinlichkeit nicht überschritten wird (VaR = −z_α·σ). z = 1,645 bei 95 %, z = 2,326 bei 99 %.',
  },
  {
    id: 'am-k4-q9',
    type: 'single',
    question:
      'Welche Aussage zum Value-at-Risk ist korrekt?',
    options: [
      'Der VaR beschreibt einen Mindestverlust beim gegebenen Konfidenzniveau; der tatsächliche Verlust kann größer sein.',
      'Der VaR ist der absolute Maximalverlust, der nie überschritten werden kann.',
      'VaR-Werte sind über beliebige Konfidenzniveaus hinweg direkt vergleichbar.',
      'Eine Senkung von 5 % auf 1 % senkt den VaR.',
    ],
    correctAnswer: 0,
    explanation:
      'Der VaR ist ein Mindestverlust beim gegebenen Konfidenzniveau (tatsächlicher Verlust kann größer sein); er ist nur bei gleichem Konfidenzniveau und Zeithorizont vergleichbar, und die Senkung 5 %→1 % erhöht den VaR.',
  },
  {
    id: 'am-k4-q10',
    type: 'single',
    question: 'Wie ist der Korrelationskoeffizient definiert und welche Spanne hat er?',
    options: [
      'ρ = cov_xy / (σ_x · σ_y), Spanne −1 bis +1.',
      'ρ = cov_xy · σ_x · σ_y, Spanne 0 bis 1.',
      'ρ = σ_x / σ_y, Spanne 0 bis unendlich.',
      'ρ = cov_xy − (σ_x + σ_y), Spanne −∞ bis +∞.',
    ],
    correctAnswer: 0,
    explanation:
      'Die Korrelation normiert die Kovarianz auf [−1; +1]: ρ_x,y = cov_xy / (σ_x · σ_y).',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 5 · Grundlagen der Portfoliotheorie
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k5-q1',
    type: 'single',
    question: 'Wie berechnet sich die erwartete Rendite eines 2-Wertpapier-Portfolios?',
    options: [
      'E(r_P) = w_A·E(r_A) + w_B·E(r_B) (gewichteter Mittelwert).',
      'E(r_P) = √(w_A²·E(r_A)² + w_B²·E(r_B)²).',
      'E(r_P) = E(r_A) · E(r_B).',
      'E(r_P) = (E(r_A) + E(r_B)) / 2 unabhängig von den Gewichten.',
    ],
    correctAnswer: 0,
    explanation:
      'Die erwartete Portfoliorendite ist der gewichtete Mittelwert der Einzelrenditen: E(r_P) = w_A·E(r_A) + w_B·E(r_B).',
  },
  {
    id: 'am-k5-q2',
    type: 'single',
    question:
      'Warum ist das Portfoliorisiko KEIN gewichteter Mittelwert der Einzelvolatilitäten?',
    options: [
      'Weil der Kovarianz-/Korrelationsterm den Diversifikationseffekt erzeugt.',
      'Weil die Volatilitäten stets gleich groß sind.',
      'Weil das Risiko immer der Summe der Einzelrisiken entspricht.',
      'Weil Gewichte beim Risiko keine Rolle spielen.',
    ],
    correctAnswer: 0,
    explanation:
      'σ_P enthält den Term 2·w_A·w_B·σ_A·σ_B·ρ; nur über die Kovarianz/Korrelation entsteht der Diversifikationseffekt — daher ist σ_P kein einfacher gewichteter Mittelwert.',
  },
  {
    id: 'am-k5-q3',
    type: 'single',
    question: 'Bei welcher Korrelation ist eine Diversifikation wirkungslos?',
    options: [
      'Bei ρ = +1 (Verbindungslinie ist eine Gerade, kein Diversifikationsnutzen).',
      'Bei ρ = −1 (Minimum-Varianz bei σ = 0).',
      'Bei ρ = 0 (keine Tendenz).',
      'Diversifikation ist immer wirkungslos.',
    ],
    correctAnswer: 0,
    explanation:
      'Bei ρ = +1 ist keine Diversifikation möglich (gerade Verbindungslinie). Bei ρ = −1 lässt sich theoretisch σ = 0 erreichen.',
  },
  {
    id: 'am-k5-q4',
    type: 'multiple',
    question: 'Welche Aussagen zu systematischem und unsystematischem Risiko sind korrekt?',
    options: [
      'Unsystematisches Risiko ist idiosynkratisch und wegdiversifizierbar.',
      'Systematisches Risiko ist Marktrisiko und nicht diversifizierbar.',
      'Mit steigender Aktienzahl sinkt das Risiko nur bis zum systematischen Sockel.',
      'Das CAPM bepreist allein das systematische Risiko.',
      'Auch systematisches Risiko lässt sich vollständig wegdiversifizieren.',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Nur das unsystematische Risiko ist wegdiversifizierbar; das systematische Marktrisiko bleibt als Sockel bestehen und wird im CAPM allein bepreist.',
  },
  {
    id: 'am-k5-q5',
    type: 'single',
    question: 'Was leistet die Tobin-Separation und die Kapitalmarktlinie (CML)?',
    options: [
      'Die CML verbindet r_f mit dem Tangential-/Marktportfolio M und trennt Anlage- von Finanzierungsentscheidung.',
      'Die CML verläuft durch den Ursprung und ignoriert den risikolosen Zins.',
      'Die CML bewertet einzelne Aktien nach ihrem Beta.',
      'Die Tobin-Separation schließt eine risikolose Anlage aus.',
    ],
    correctAnswer: 0,
    explanation:
      'Die Tobin-Separation ergänzt Markowitz um eine risikolose Anlage; die CML verbindet r_f mit dem Tangentialportfolio M und trennt die Anlage- von der Finanzierungsentscheidung.',
  },
  {
    id: 'am-k5-q6',
    type: 'single',
    question: 'Wie lautet die CAPM-Gleichung?',
    options: [
      'E(r_i) = r_f + β_i · (E(r_M) − r_f).',
      'E(r_i) = r_f · β_i + E(r_M).',
      'E(r_i) = β_i · E(r_M) − r_f.',
      'E(r_i) = r_f + σ_i · (E(r_M) − r_f).',
    ],
    correctAnswer: 0,
    explanation:
      'Das CAPM bepreist nur systematisches Risiko: E(r_i) = r_f + β_i · (E(r_M) − r_f), mit β = Cov(r_i, r_M)/σ²_M.',
  },
  {
    id: 'am-k5-q7',
    type: 'single',
    question: 'Worin unterscheiden sich CML und SML?',
    options: [
      'Die CML hat die Gesamtvolatilität auf der x-Achse (nur effiziente Portfolios), die SML das Beta (alle Wertpapiere).',
      'Die CML hat das Beta auf der x-Achse, die SML die Gesamtvolatilität.',
      'Beide haben dieselbe x-Achse und sind identisch.',
      'Die CML gilt nur für einzelne Aktien, die SML nur für Portfolios.',
    ],
    correctAnswer: 0,
    explanation:
      'CML: x-Achse Gesamtvolatilität, nur effiziente Portfolios liegen auf der Linie. SML: x-Achse Beta, im Gleichgewicht liegen alle Titel darauf; Marktportfolio bei β = 1.',
  },
  {
    id: 'am-k5-q8',
    type: 'multiple',
    question: 'Welche Aussagen zur Arbitrage Pricing Theory (APT) sind korrekt?',
    options: [
      'Sie erklärt erwartete Renditen über mehrere Faktorprämien.',
      'Sie benötigt kein Marktportfolio.',
      'Sie verlangt keine Verteilungsannahme.',
      'Ihre Risikofaktoren sind schwer identifizierbar und zeitinstabil.',
      'Sie ist eindimensional wie das CAPM.',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Die APT ist mehrdimensional, kommt ohne Marktportfolio und ohne Verteilungsannahme aus; ihr Nachteil sind schwer identifizierbare, zeitinstabile Faktoren.',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 6 · Portfoliomanagement
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k6-q1',
    type: 'single',
    question: 'In welcher Reihenfolge verläuft der zyklische Investmentprozess?',
    options: [
      'Investmentziele → Strategische Asset Allocation → Portfoliomanagement i.e.S. → Finanzcontrolling.',
      'Finanzcontrolling → Investmentziele → SAA → Portfoliomanagement i.e.S.',
      'SAA → Investmentziele → Finanzcontrolling → Portfoliomanagement i.e.S.',
      'Portfoliomanagement i.e.S. → SAA → Investmentziele → Finanzcontrolling.',
    ],
    correctAnswer: 0,
    explanation:
      'Der Vier-Schritte-Prozess lautet: Investmentziele, Strategische Asset Allocation, Portfoliomanagement i.e.S., Finanzcontrolling. Die Schritte 2 und 3 bilden den Asset-Allocation-Prozess.',
  },
  {
    id: 'am-k6-q2',
    type: 'multiple',
    question: 'Welche drei Grundziele bilden das „magische Dreieck" der Anlageziele?',
    options: ['Rendite', 'Sicherheit', 'Liquidität', 'Transparenz', 'Steuerersparnis'],
    correctAnswers: [0, 1, 2],
    explanation:
      'Die drei Grundziele Rendite, Sicherheit und Liquidität stehen im Zielkonflikt zueinander (magisches Dreieck) und münden im Investment Policy Statement.',
  },
  {
    id: 'am-k6-q3',
    type: 'single',
    question: 'Wodurch lässt sich das systematische Risiko reduzieren?',
    options: [
      'Nur durch Mischung mehrerer Assetklassen (Markowitz).',
      'Durch Streuung innerhalb einer einzigen Assetklasse.',
      'Es lässt sich gar nicht beeinflussen.',
      'Durch häufiges Rebalancing innerhalb einer Aktie.',
    ],
    correctAnswer: 0,
    explanation:
      'Streuung innerhalb einer Assetklasse baut nur das unsystematische Risiko ab; das systematische Marktrisiko sinkt nur durch Mischung mehrerer Assetklassen.',
  },
  {
    id: 'am-k6-q4',
    type: 'single',
    question:
      'Welchen Anteil der Performance-Varianz erklärt laut Brinson et al. (1986) die Asset Allocation?',
    options: ['91,5 %', '50,0 %', '33,3 %', '4,6 %'],
    correctAnswer: 0,
    explanation:
      'Empirisch (Brinson et al. 1986) erklärt die Asset Allocation mit 91,5 % den größten Teil der Performance-Varianz — sie gilt als Königsdisziplin.',
  },
  {
    id: 'am-k6-q5',
    type: 'single',
    question: 'Wie unterscheiden sich Portfolio Rebalancing und Portfolio Upgrading?',
    options: [
      'Rebalancing stellt die Ausgangsstruktur wieder her, Upgrading verändert sie bewusst aufgrund neuer Informationen.',
      'Rebalancing verändert die Struktur, Upgrading stellt sie wieder her.',
      'Beide bezeichnen denselben Vorgang.',
      'Rebalancing betrifft nur Anleihen, Upgrading nur Aktien.',
    ],
    correctAnswer: 0,
    explanation:
      'Rebalancing führt zur ursprünglichen Struktur zurück; Upgrading verändert die Struktur bewusst aufgrund neuer Informationen.',
  },
  {
    id: 'am-k6-q6',
    type: 'single',
    question:
      'Welche Diversifikationsebenen ordnet das Skript der strategischen bzw. taktischen Asset Allocation zu?',
    options: [
      'Strategisch: Assetklassen, Länder, Währungen — taktisch: Branchen, Titel/Emittenten.',
      'Strategisch: Branchen, Titel — taktisch: Assetklassen, Länder.',
      'Beide Ebenen betreffen ausschließlich einzelne Titel.',
      'Strategisch und taktisch betreffen dieselben Ebenen.',
    ],
    correctAnswer: 0,
    explanation:
      'Die SAA legt Assetklassen, Länder und Währungen fest (größerer Performance-Einfluss), die TAA betrifft Branchen und Titel/Emittenten.',
  },
  {
    id: 'am-k6-q7',
    type: 'multiple',
    question:
      'Welche Anlagegrundsätze nennt das VAG (§ 54 I bzw. § 115) für institutionelle Investoren?',
    options: [
      'Sicherheit',
      'Rentabilität',
      'Jederzeitige Liquidität',
      'Angemessene Mischung und Streuung',
      'Maximale Renditeorientierung ohne Nebenbedingungen',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Das VAG verlangt Sicherheit, Rentabilität, jederzeitige Liquidität sowie angemessene Mischung und Streuung — daher reicht das reine Markowitz-Modell nicht aus.',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 7 · Performanceanalyse
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k7-q1',
    type: 'single',
    question: 'Worin unterscheiden sich geldgewichtete (MWR) und zeitgewichtete (TWR) Rendite?',
    options: [
      'Die MWR ist der interne Zinsfuß und enthält Investor-Timing + Marktgeschehen; die TWR ist die geometrische Durchschnittsrendite und misst nur das Marktgeschehen.',
      'Die MWR misst nur das Marktgeschehen, die TWR auch das Investor-Timing.',
      'Beide messen ausschließlich das Investor-Timing.',
      'Die TWR ist der interne Zinsfuß des Zahlungsstroms.',
    ],
    correctAnswer: 0,
    explanation:
      'Die MWR (interner Zinsfuß) enthält Timing + Marktgeschehen; die TWR (geometrische Durchschnittsrendite, GIPS-Standard) misst nur das Marktgeschehen und eignet sich für PM-Vergleiche.',
  },
  {
    id: 'am-k7-q2',
    type: 'single',
    question:
      'Im Skriptbeispiel ergibt dieselbe Anlage TWR = 0 %, aber MWR = −32,06 %. Was ist die Ursache?',
    options: [
      'Das ungünstig getimte Nachschießen von 300 €.',
      'Eine Währungsumrechnung.',
      'Ein Berechnungsfehler in der TWR.',
      'Die unterschiedliche Steuerbelastung.',
    ],
    correctAnswer: 0,
    explanation:
      'Die TWR ist neutral (Marktgeschehen 0 %), während die MWR durch das ungünstig getimte Nachschießen von 300 € auf −32,06 % fällt — MWR < TWR signalisiert ungünstiges Timing.',
  },
  {
    id: 'am-k7-q3',
    type: 'single',
    question: 'Welches Risikomaß steht im Nenner der Sharpe-Ratio?',
    options: [
      'Das Gesamtrisiko (Standardabweichung σ_P).',
      'Das systematische Risiko (Beta β_P).',
      'Die Renditedifferenz zur Benchmark.',
      'Die Tracking-Error-Volatilität.',
    ],
    correctAnswer: 0,
    explanation:
      'Die Sharpe-Ratio misst die Überschussrendite (μ_P − r_f) je Einheit Gesamtrisiko σ_P.',
  },
  {
    id: 'am-k7-q4',
    type: 'single',
    question: 'Welches Risikomaß verwendet die Treynor-Ratio?',
    options: [
      'Das systematische Risiko (Beta β_P).',
      'Das Gesamtrisiko (Standardabweichung σ_P).',
      'Die Schiefe der Renditeverteilung.',
      'Den maximalen Drawdown.',
    ],
    correctAnswer: 0,
    explanation:
      'Die Treynor-Ratio bezieht die Überschussrendite auf das systematische Risiko β_P; sie eignet sich für diversifizierte Teilportfolios mit ex-ante Benchmark.',
  },
  {
    id: 'am-k7-q5',
    type: 'single',
    question: 'Warum erlaubt das Jensen-Alpha kein einwandfreies Ranking?',
    options: [
      'Weil es eine absolute Renditedifferenz ohne Bezug zum eingegangenen Risiko ist.',
      'Weil es das Gesamtrisiko doppelt berücksichtigt.',
      'Weil es nur für risikolose Anlagen definiert ist.',
      'Weil es identisch mit der Sharpe-Ratio ist.',
    ],
    correctAnswer: 0,
    explanation:
      'Das Jensen-Alpha ist die absolute Über-/Unterrendite gegenüber der CAPM-erwarteten Rendite; ohne Risikobezug unterscheidet es nicht zwischen großem variablem und kleinem stabilem Alpha.',
  },
  {
    id: 'am-k7-q6',
    type: 'single',
    question:
      'Sharpe- und Treynor-Ranking können sich widersprechen. Worauf beruht dieser Widerspruch?',
    options: [
      'Auf unterschiedlicher Diversifikation und damit unterschiedlich hohem unsystematischem Risiko.',
      'Auf einer unterschiedlichen Definition der Überschussrendite.',
      'Auf der Verwendung verschiedener risikoloser Zinssätze.',
      'Auf einem Rechenfehler in der Treynor-Ratio.',
    ],
    correctAnswer: 0,
    explanation:
      'Sharpe nutzt das Gesamtrisiko, Treynor nur das systematische Risiko. Unterschiedliche Diversifikation (unterschiedliches unsystematisches Risiko) führt zu widersprüchlichen Rankings.',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 8 · Indizes / Aktives vs. Passives Management
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k8-q1',
    type: 'single',
    question: 'Welche Markteffizienz-Annahme liegt aktivem bzw. passivem Management zugrunde?',
    options: [
      'Aktiv unterstellt nicht-effiziente, passiv effiziente Märkte.',
      'Aktiv unterstellt effiziente, passiv nicht-effiziente Märkte.',
      'Beide unterstellen vollkommen effiziente Märkte.',
      'Beide unterstellen nicht-effiziente Märkte.',
    ],
    correctAnswer: 0,
    explanation:
      'Aktives Management setzt auf nicht-effiziente Märkte (Alpha-Ziel); passives Management unterstellt effiziente Märkte und bildet kostenminimal einen Index nach.',
  },
  {
    id: 'am-k8-q2',
    type: 'single',
    question: 'Welche Rolle hat die Benchmark im aktiven Management?',
    options: [
      'Das durch Über-/Untergewichtungen zu „schlagende" Portfolio.',
      'Das exakt zu replizierende Zielportfolio.',
      'Sie spielt im aktiven Management keine Rolle.',
      'Eine reine Verwahrstelle für das Sondervermögen.',
    ],
    correctAnswer: 0,
    explanation:
      'Im aktiven Management ist die Benchmark das zu schlagende Portfolio; im passiven Management das zu replizierende Zielportfolio.',
  },
  {
    id: 'am-k8-q3',
    type: 'multiple',
    question: 'Welche drei Kriterien differenzieren Indizes?',
    options: [
      'Anzahl der Mitglieder (Auswahl- vs. Benchmarkindex)',
      'Gewichtung (preis- vs. kapitalisierungsgewichtet)',
      'Berechnung (Kurs- vs. Performanceindex)',
      'Rechtsform des Emittenten',
      'Währung des Heimatmarktes',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Indizes differenzieren sich nach Anzahl der Mitglieder, Gewichtung und Berechnung (Kurs- vs. Performanceindex).',
  },
  {
    id: 'am-k8-q4',
    type: 'single',
    question:
      'Im Übungsbeispiel steigt der preisgewichtete Index um 9,2 %, der kapitalisierungsgewichtete um 14,5 %. Was zeigt das?',
    options: [
      'Die Gewichtungsmethode verändert das Ergebnis erheblich.',
      'Beide Methoden liefern stets denselben Wert.',
      'Der preisgewichtete Index ist immer überlegen.',
      'Renditen hängen nicht von der Gewichtung ab.',
    ],
    correctAnswer: 0,
    explanation:
      'Der hochpreisige, fallende Titel D wirkt im Preisindex stark, im Kapitalisierungsindex schwächer — die Gewichtungsmethode verändert das Ergebnis (9,2 % vs. 14,5 %).',
  },
  {
    id: 'am-k8-q5',
    type: 'single',
    question: 'Worin unterscheidet sich ein Performanceindex von einem Kursindex?',
    options: [
      'Der Performanceindex reinvestiert Erträge (Total Return, z. B. DAX), der Kursindex nicht (z. B. DJIA).',
      'Der Kursindex reinvestiert Erträge, der Performanceindex nicht.',
      'Beide reinvestieren Erträge identisch.',
      'Der Performanceindex existiert nur für Anleihen.',
    ],
    correctAnswer: 0,
    explanation:
      'Der Performanceindex unterstellt Reinvestition (Total Return, z. B. DAX), der Kursindex keine Wiederanlage (z. B. DJIA). Ein Index kann in beiden Varianten existieren.',
  },
  {
    id: 'am-k8-q6',
    type: 'single',
    question: 'Wodurch unterscheidet sich ein Indexzertifikat von Indexfonds und ETFs?',
    options: [
      'Es ist eine Schuldverschreibung mit Totalverlustrisiko bei Emittenteninsolvenz, kein Sondervermögen.',
      'Es ist insolvenzgeschütztes Sondervermögen wie ein ETF.',
      'Es wird nicht an der Börse gehandelt.',
      'Es hat höhere Gebühren als jeder ETF.',
    ],
    correctAnswer: 0,
    explanation:
      'Indexfonds und ETFs sind insolvenzgeschütztes Sondervermögen; Indexzertifikate sind Schuldverschreibungen mit Totalverlustrisiko bei Insolvenz des Emittenten.',
  },
  {
    id: 'am-k8-q7',
    type: 'single',
    question: 'Was misst der Tracking-Error?',
    options: [
      'Die Volatilität der Renditedifferenz zur Benchmark (Qualität der Nachbildung).',
      'Die absolute Rendite des Fonds.',
      'Die Höhe der Verwaltungsgebühren.',
      'Den maximalen Verlust des Fonds.',
    ],
    correctAnswer: 0,
    explanation:
      'Der Tracking-Error ist die Volatilität der Renditedifferenz zur Benchmark — ein Maß für die Qualität der Nachbildung, nicht für die absolute Rendite.',
  },
  {
    id: 'am-k8-q8',
    type: 'single',
    question: 'Wie ordnet das Skript die Evidenz zu aktivem Management ein?',
    options: [
      'Nach Kosten ist aktives Management ein Nullsummenspiel mit medianer Unterperformance; nur eine Minderheit schlägt die Benchmark.',
      'Die Mehrheit aktiver Fonds schlägt nach Kosten dauerhaft die Benchmark.',
      'Aktives und passives Management liefern nach Kosten identische Ergebnisse.',
      'Passives Management führt empirisch zu Unterperformance.',
    ],
    correctAnswer: 0,
    explanation:
      'Empirisch schlägt nur eine Minderheit aktiver Fonds die Benchmark; nach Kosten ist aktives Management ein Nullsummenspiel mit medianer Unterperformance (Vanguard zero-sum game).',
  },

  // ───────────────────────────────────────────────────────────
  // Kapitel 9 · FinTechs im Asset Management / Robo Advisors
  // ───────────────────────────────────────────────────────────
  {
    id: 'am-k9-q1',
    type: 'single',
    question: 'Woraus setzt sich der Begriff „FinTech" zusammen und worauf geht der moderne Begriff zurück?',
    options: [
      'Aus „Financial Services" und „Technology"; der moderne Begriff ist eine Folge der Finanzkrise 2008.',
      'Aus „Finance" und „Technician"; er entstand mit Fedwire 1918.',
      'Aus „Final" und „Technology"; er entstand mit dem Internet 1995.',
      'Aus „Fiscal" und „Technique"; er entstand nach 2020.',
    ],
    correctAnswer: 0,
    explanation:
      'FinTech = Financial Services + Technology; der moderne Begriff ist eine Folge der Finanzkrise 2008 (historisch wird Fedwire 1918 genannt).',
  },
  {
    id: 'am-k9-q2',
    type: 'single',
    question: 'Welchem FinTech-Segment ist Robo-Advice zugeordnet?',
    options: [
      'Dem Segment Vermögensverwaltung.',
      'Dem Segment Zahlungsverkehr.',
      'Dem Segment Kreditvergabe.',
      'Dem Segment Versicherung.',
    ],
    correctAnswer: 0,
    explanation:
      'Robo-Advice ist innerhalb der FinTech-Landschaft dem Segment Vermögensverwaltung zugeordnet und bildet den Fokus des Kapitels.',
  },
  {
    id: 'am-k9-q3',
    type: 'single',
    question: 'In welchem Bereich liegen die Gebühren von Robo Advisors laut Skript?',
    options: [
      'USA 0,15–0,67 %, Europa Ø ca. 0,8 % der AuM p. a.',
      'USA 2–3 %, Europa Ø ca. 5 % der AuM p. a.',
      'Weltweit einheitlich 0,01 % der AuM p. a.',
      'Robo Advisors arbeiten gebührenfrei.',
    ],
    correctAnswer: 0,
    explanation:
      'Robo Advisors automatisieren das Asset-/Wealth-Management zu relativ geringen Gebühren: USA 0,15–0,67 %, Europa Ø ca. 0,8 % der AuM p. a.',
  },
  {
    id: 'am-k9-q4',
    type: 'single',
    question: 'In welche drei Schritte gliedert sich der Robo-Advisory-Prozess?',
    options: [
      '1) Investor Screening & Onboarding, 2) Investmentstrategie-Implementierung, 3) Monitoring & Rebalancing.',
      '1) Marketing, 2) Vertragsabschluss, 3) Kündigung.',
      '1) Kreditprüfung, 2) Auszahlung, 3) Tilgung.',
      '1) Research, 2) Handel, 3) Steuererklärung.',
    ],
    correctAnswer: 0,
    explanation:
      'Der Robo-Advisory-Prozess gliedert sich in Investor Screening & Onboarding, Investmentstrategie-Implementierung sowie Monitoring & Rebalancing.',
  },
  {
    id: 'am-k9-q5',
    type: 'single',
    question:
      'Auf welchen Anteil reduzieren Robo Advisors das ETF-Universum über ihre Ausschlusskaskade?',
    options: [
      'Auf ca. 3–6 % der investierbaren ETFs.',
      'Auf ca. 50 % der ETFs.',
      'Auf genau 100 % (kein Ausschluss).',
      'Auf ca. 30–40 % der ETFs.',
    ],
    correctAnswer: 0,
    explanation:
      'Über eine mehrstufige (sechsstufige) Ausschlusskaskade reduzieren Robo Advisors das ETF-Universum auf ca. 3–6 % investierbarer ETFs.',
  },
  {
    id: 'am-k9-q6',
    type: 'single',
    question:
      'Was ist laut Skript das wichtigste Unterscheidungskriterium der Robo-Angebotstypen, und was trennt einfache von lizenzierten Angeboten?',
    options: [
      'Das Rebalancing ist das wichtigste Kriterium; einfache Angebote arbeiten unter § 34f GewO, aufwendigere benötigen eine Lizenz.',
      'Die Farbe der App; einfache Angebote sind blau, lizenzierte grün.',
      'Die Mindestanlage; einfache Angebote starten bei 1 Mio. €.',
      'Die Anzahl der Mitarbeiter; einfache Angebote haben keine.',
    ],
    correctAnswer: 0,
    explanation:
      'Einfache Angebote arbeiten unter § 34f GewO, aufwendigere lizenzierte Angebote benötigen eine Lizenz; das Rebalancing ist das wichtigste Unterscheidungskriterium (Robo Advice vs. fortlaufende Finanzportfolioverwaltung).',
  },
];

export default questions;
