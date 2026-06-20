// Side-by-side comparison of 2–3 items, each with a title, optional subtitle,
// accent role and a list of points. For binary/ternary contrasts.
// Styling lives in FullContentView.css (.lc-compare*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
const ACCENTS = {
  neutral: 'var(--color-border-strong)',
  positive: 'var(--color-success)',
  negative: 'var(--color-error)',
  warning: 'var(--color-warning)',
  accent: 'var(--color-accent)',
  purple: 'var(--color-module-purple)',
  teal: 'var(--color-module-teal)',
  orange: 'var(--color-module-orange)',
};

// Lightweight inline renderer: turns **bold** segments inside a plain string
// (props like points/subtitle are not parsed by MDX) into real <strong>.
function renderRich(text) {
  if (typeof text !== 'string') return text;
  if (!text.includes('**')) return text;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part,
  );
}

export function CompareCard({ items = [] }) {
  return (
    <div className="lc-compare" data-cols={items.length}>
      {items.map((item, i) => {
        const color = ACCENTS[item.accent] ?? ACCENTS.neutral;
        return (
          <div key={i} className="lc-compare__card" style={{ '--lc-tone': color }}>
            <div className="lc-compare__head">
              {item.tag && <span className="lc-compare__tag">{item.tag}</span>}
              <h4 className="lc-compare__title">{item.title}</h4>
              {item.subtitle && <p className="lc-compare__subtitle">{renderRich(item.subtitle)}</p>}
            </div>
            <ul className="lc-compare__points">
              {(item.points ?? []).map((p, j) => (
                <li key={j}>{renderRich(p)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CompareCard;
