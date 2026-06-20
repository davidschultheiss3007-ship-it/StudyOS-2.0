import './TopicVisuals.css';

const chartColors = {
  blue: 'var(--color-accent)',
  green: 'var(--color-success)',
  amber: 'var(--color-warning)',
  purple: 'var(--color-module-purple)',
  red: 'var(--color-error)',
  muted: 'var(--color-text-muted)',
};

function VisualShell({ eyebrow, title, children, className = '' }) {
  return (
    <article className={`topic-visual ${className}`}>
      <div className="topic-visual__header">
        <span>{eyebrow}</span>
        <h4>{title}</h4>
      </div>
      {children}
    </article>
  );
}

function MiniLegend({ items }) {
  return (
    <div className="topic-visual__legend">
      {items.map(item => (
        <span key={item.label}>
          <i style={{ background: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

function SvgLineChart({ data, lines, xKey, yDomain, height = 230, showZero = false }) {
  const width = 520;
  const padding = { top: 22, right: 24, bottom: 34, left: 38 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const values = lines.flatMap(line => data.map(item => item[line.key]));
  const minY = yDomain?.[0] ?? Math.min(...values);
  const maxY = yDomain?.[1] ?? Math.max(...values);
  const scaleX = index => padding.left + (data.length === 1 ? 0 : (index / (data.length - 1)) * innerWidth);
  const scaleY = value => padding.top + (1 - (value - minY) / (maxY - minY || 1)) * innerHeight;
  const gridLines = [0, 0.25, 0.5, 0.75, 1];

  return (
    <svg className="svg-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Diagramm">
      {gridLines.map(level => (
        <line
          key={level}
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top + level * innerHeight}
          y2={padding.top + level * innerHeight}
          className="svg-chart__grid"
        />
      ))}
      {showZero && minY < 0 && maxY > 0 && (
        <line x1={padding.left} x2={width - padding.right} y1={scaleY(0)} y2={scaleY(0)} className="svg-chart__zero" />
      )}
      {data.map((item, index) => (
        <text key={item[xKey]} x={scaleX(index)} y={height - 10} textAnchor="middle" className="svg-chart__tick">
          {item[xKey]}
        </text>
      ))}
      {lines.map(line => {
        const points = data.map((item, index) => `${scaleX(index)},${scaleY(item[line.key])}`).join(' ');
        const areaPoints = `${padding.left},${height - padding.bottom} ${points} ${width - padding.right},${height - padding.bottom}`;
        return (
          <g key={line.key}>
            {line.area && <polygon points={areaPoints} fill={line.fill} opacity="0.35" />}
            <polyline points={points} fill="none" stroke={line.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {data.map((item, index) => (
              <circle key={`${line.key}-${item[xKey]}`} cx={scaleX(index)} cy={scaleY(item[line.key])} r="4" fill={line.color} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function EquityDebtMap() {
  const rows = [
    ['Rechtsstellung', 'Miteigentümer', 'Gläubiger'],
    ['Anspruch', 'Dividende und Kursgewinn', 'Kupon und Rückzahlung'],
    ['Laufzeit', 'grundsätzlich unbegrenzt', 'vertraglich begrenzt'],
    ['Einfluss', 'Stimmrechte je nach Aktienart', 'kein Einfluss auf Unternehmensentscheidungen'],
  ];

  return (
    <VisualShell eyebrow="Vergleich" title="Aktie und Anleihe als zwei unterschiedliche Kapitalrollen">
      <div className="comparison-map" role="table" aria-label="Aktien und Anleihen im Vergleich">
        <div className="comparison-map__head comparison-map__cell">Kriterium</div>
        <div className="comparison-map__head comparison-map__cell comparison-map__cell--equity">Aktie</div>
        <div className="comparison-map__head comparison-map__cell comparison-map__cell--debt">Anleihe</div>
        {rows.flatMap(([label, equity, debt]) => [
          <div className="comparison-map__cell comparison-map__label" key={`${label}-label`}>{label}</div>,
          <div className="comparison-map__cell" key={`${label}-equity`}>{equity}</div>,
          <div className="comparison-map__cell" key={`${label}-debt`}>{debt}</div>,
        ])}
      </div>
    </VisualShell>
  );
}

export function BondCashflowVisual() {
  const bonds = [
    { label: 'Fixed Bond', bars: [28, 28, 28, 84], note: 'gleichbleibender Kupon plus Rückzahlung' },
    { label: 'Floater', bars: [18, 36, 24, 78], note: 'Kupon passt sich dem Referenzzins an' },
    { label: 'Zero Bond', bars: [0, 0, 0, 96], note: 'keine laufenden Kupons, Ertrag am Ende' },
  ];

  return (
    <VisualShell eyebrow="Zahlungsströme" title="Kuponlogik der wichtigsten Bondtypen">
      <div className="cashflow-grid">
        {bonds.map(bond => (
          <section className="cashflow-card" key={bond.label}>
            <h5>{bond.label}</h5>
            <div className="cashflow-bars" aria-label={bond.note}>
              {bond.bars.map((height, index) => (
                <span key={index} style={{ '--bar-height': `${height}%` }}>
                  <i />
                  <small>t{index + 1}</small>
                </span>
              ))}
            </div>
            <p>{bond.note}</p>
          </section>
        ))}
      </div>
    </VisualShell>
  );
}

export function YieldPriceVisual() {
  const priceYield = [
    { price: 82, ytm: 8.5 },
    { price: 90, ytm: 6.2 },
    { price: 100, ytm: 4.0 },
    { price: 108, ytm: 2.6 },
    { price: 116, ytm: 1.4 },
  ];
  const scenario = [
    { name: 'Kein Ausfall', value: 18.9 },
    { name: 'Erwartet', value: 9.4 },
    { name: 'Default', value: -28.7 },
  ];

  return (
    <VisualShell eyebrow="Bewertung" title="Preis-Rendite-Beziehung und Ausfallwirkung">
      <div className="chart-split">
        <div className="chart-panel">
          <SvgLineChart
            data={priceYield}
            xKey="price"
            yDomain={[0, 9]}
            lines={[{ key: 'ytm', color: chartColors.blue }]}
          />
          <p>Kurs unter Pari erhöht die versprochene YTM; ein Kurs über Pari senkt sie.</p>
        </div>
        <div className="scenario-bars" aria-label="YTM-Szenarien">
          {scenario.map(item => (
            <div className={`scenario-bars__row ${item.value < 0 ? 'scenario-bars__row--negative' : ''}`} key={item.name}>
              <span>{item.name}</span>
              <strong>{item.value.toLocaleString('de-DE')} %</strong>
              <i style={{ '--value': `${Math.abs(item.value) * 2.6}px` }} />
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

export function BondStructureVisual() {
  const structures = [
    ['Wandelanleihe', 'Naked Bond', 'Call', 'Wandlung in Aktie'],
    ['Optionsanleihe', 'Anleihe bleibt', 'Bezugsrecht', 'Ausübung separat'],
    ['Hybridanleihe', 'Nachrang', 'sehr lange Laufzeit', 'EK-nahe Bilanzlogik'],
  ];

  return (
    <VisualShell eyebrow="Struktur" title="Hybride Bondformen als Bausteinlogik">
      <div className="structure-flow">
        {structures.map(([title, first, second, result]) => (
          <section key={title}>
            <h5>{title}</h5>
            <div>
              <span>{first}</span>
              <b>+</b>
              <span>{second}</span>
              <b>=</b>
              <strong>{result}</strong>
            </div>
          </section>
        ))}
      </div>
    </VisualShell>
  );
}

export function BondRiskMatrix() {
  const risks = [
    ['Bonität', 'Emittent', 'Kursverlust oder Ausfall'],
    ['Zinsänderung', 'Markt', 'Kursverlust bei steigendem Zins'],
    ['Liquidität', 'Marktstruktur', 'Preisabschläge bei Verkauf'],
    ['Wiederanlage', 'Cashflow', 'Kupons nur niedriger wiederanlegbar'],
    ['Währung', 'FX', 'Euro-Aufwertung schmälert Rendite'],
    ['Call/Auslosung', 'Vertrag', 'vorzeitige Rückzahlung'],
  ];

  return (
    <VisualShell eyebrow="Risikoradar" title="Anleiherisiken nach Quelle und Wirkung">
      <div className="risk-matrix">
        {risks.map(([risk, source, effect]) => (
          <section key={risk}>
            <span>{source}</span>
            <h5>{risk}</h5>
            <p>{effect}</p>
          </section>
        ))}
      </div>
    </VisualShell>
  );
}

export function HedgeStrategyVisual() {
  const distribution = [
    { x: -4, normal: 6, hedge: 22 },
    { x: -3, normal: 14, hedge: 28 },
    { x: -2, normal: 32, hedge: 24 },
    { x: -1, normal: 62, hedge: 35 },
    { x: 0, normal: 86, hedge: 76 },
    { x: 1, normal: 62, hedge: 58 },
    { x: 2, normal: 32, hedge: 26 },
    { x: 3, normal: 14, hedge: 10 },
    { x: 4, normal: 6, hedge: 4 },
  ];

  return (
    <VisualShell eyebrow="Strategien" title="Hedge-Fund-Strategien und Renditeform">
      <div className="chart-split">
        <div className="strategy-lanes">
          <section><span>marktneutral</span><strong>Relative Value</strong><p>Fehlbewertungen nutzen, Marktrisiken reduzieren.</p></section>
          <section><span>ereignisorientiert</span><strong>Event Driven</strong><p>Merger Arbitrage oder Distressed Securities.</p></section>
          <section><span>direktional</span><strong>Global Macro / Long-Short</strong><p>Markteinschätzung prägt Risiko und Rendite.</p></section>
        </div>
        <div className="chart-panel">
          <SvgLineChart
            data={distribution}
            xKey="x"
            yDomain={[0, 90]}
            lines={[
              { key: 'normal', color: chartColors.blue, area: true, fill: 'color-mix(in srgb, var(--color-accent) 24%, transparent)' },
              { key: 'hedge', color: chartColors.amber, area: true, fill: 'color-mix(in srgb, var(--color-warning) 28%, transparent)' },
            ]}
          />
          <MiniLegend items={[
            { label: 'Normalverteilung', color: chartColors.blue },
            { label: 'linksschief/fette Enden', color: chartColors.amber },
          ]} />
        </div>
      </div>
    </VisualShell>
  );
}

export function RealEstateDecisionVisual() {
  return (
    <VisualShell eyebrow="Entscheidungspfad" title="Direkte und indirekte Immobilienanlage">
      <div className="decision-tree">
        <strong>Immobilienanlage</strong>
        <div>
          <section>
            <h5>Direkt</h5>
            <span>Wohn- und Gewerbeimmobilien</span>
            <span>hoher Kapitalbedarf</span>
            <span>geringe Fungibilität</span>
          </section>
          <section>
            <h5>Indirekt</h5>
            <span>geschlossene/offene Fonds</span>
            <span>Immobilien-AGs</span>
            <span>REITs</span>
          </section>
        </div>
      </div>
    </VisualShell>
  );
}

export function RealEstateRiskAxis() {
  const data = [
    { label: 'Core', risk: 18, return: 25, note: 'stabil' },
    { label: 'Value-Added', risk: 55, return: 58, note: 'Entwicklung' },
    { label: 'Opportunistic', risk: 88, return: 86, note: 'hoch' },
  ];

  return (
    <VisualShell eyebrow="Risikoachse" title="Core, Value-Added und Opportunistic als Risiko-Rendite-Bild">
      <div className="risk-axis" aria-label="Risiko-Rendite-Achse Immobilien">
        <span className="risk-axis__x">Risiko</span>
        <span className="risk-axis__y">Renditepotenzial</span>
        {data.map(item => (
          <section
            key={item.label}
            style={{ '--x': `${item.risk}%`, '--y': `${100 - item.return}%` }}
          >
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </section>
        ))}
      </div>
    </VisualShell>
  );
}

export function SmoothingVisual() {
  const data = [
    { period: 't1', market: 4, appraisal: 3 },
    { period: 't2', market: -7, appraisal: 1 },
    { period: 't3', market: 9, appraisal: 3 },
    { period: 't4', market: -5, appraisal: 1 },
    { period: 't5', market: 7, appraisal: 3 },
    { period: 't6', market: -3, appraisal: 2 },
  ];

  return (
    <VisualShell eyebrow="Indexproblem" title="Smoothing: Marktschwankung wirkt in Bewertungsindizes geglättet">
      <div className="chart-panel">
        <SvgLineChart
          data={data}
          xKey="period"
          height={250}
          yDomain={[-8, 10]}
          showZero
          lines={[
            { key: 'market', color: chartColors.amber },
            { key: 'appraisal', color: chartColors.blue },
          ]}
        />
      </div>
    </VisualShell>
  );
}

export function CommodityDriversVisual() {
  const drivers = ['Kartelle', 'Rohstofffunde', 'Nachfrageschocks', 'Wechselkurse', 'Inflation', 'politische Risiken', 'Wetter/Klima', 'Transportkosten'];

  return (
    <VisualShell eyebrow="Ursache-Wirkung" title="Kurzfristige Rohstoffpreise als Bündel externer Schocks">
      <div className="driver-map">
        <strong>Rohstoffpreis</strong>
        {drivers.map((driver, index) => (
          <span key={driver} style={{ '--position': index }}>{driver}</span>
        ))}
      </div>
    </VisualShell>
  );
}

export function FuturesCurveVisual() {
  const data = [
    { month: 'nah', contango: 72, backwardation: 72 },
    { month: '+1', contango: 78, backwardation: 66 },
    { month: '+2', contango: 84, backwardation: 60 },
    { month: '+3', contango: 90, backwardation: 55 },
  ];

  return (
    <VisualShell eyebrow="Terminkurve" title="Contango und Backwardation aus Long-Sicht">
      <div className="chart-panel">
        <SvgLineChart
          data={data}
          xKey="month"
          height={250}
          yDomain={[50, 94]}
          lines={[
            { key: 'contango', color: chartColors.amber },
            { key: 'backwardation', color: chartColors.green },
          ]}
        />
      </div>
    </VisualShell>
  );
}

export function BlockchainVisual() {
  return (
    <VisualShell eyebrow="Technische Struktur" title="Blockchain als verkettete, nachvollziehbare Datenstruktur">
      <div className="blockchain-flow">
        {['Datensatz', 'Block', 'Hash/Verknüpfung', 'nächster Block', 'unveränderbare Historie'].map((item, index) => (
          <section key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </section>
        ))}
      </div>
    </VisualShell>
  );
}
