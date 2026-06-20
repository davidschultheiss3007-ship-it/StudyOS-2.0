// Compact grid of key figures: each {value, label, accent?}.
// Styling lives in FullContentView.css (.lc-kpi*) — Tailwind utilities are not
// compiled in this build, so palette visuals are styled with real CSS.
const ACCENTS = {
  default: 'var(--color-text-primary)',
  positive: 'var(--color-success)',
  negative: 'var(--color-error)',
  warning: 'var(--color-warning)',
  accent: 'var(--color-accent)',
};

export function KpiGrid({ items = [], columns }) {
  const cols = columns ?? Math.min(items.length, 4);
  const min = cols >= 4 ? '8rem' : '10rem';
  return (
    <div
      className="lc-kpi"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))` }}
    >
      {items.map((item, i) => (
        <div key={i} className="lc-kpi__tile">
          <div className="lc-kpi__value" style={{ color: ACCENTS[item.accent] ?? ACCENTS.default }}>
            {item.value}
          </div>
          <div className="lc-kpi__label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default KpiGrid;
