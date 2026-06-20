// Grid of label → value facts, for structured key/value data that reads as a
// flat bullet list otherwise (e.g. "Sitz: Frankfurt", "Rechtsgrundlage: KWG").
// Each fact is its own bordered tile, so the set reads as a scannable register.
//
// `items`   array of { label, value } (value may contain **bold**)
// `columns` target columns on wide screens (default: auto-fit)
//
// Styling lives in FullContentView.css (.lc-facts*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
function renderRich(text) {
  if (typeof text !== 'string') return text;
  if (!text.includes('**')) return text;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part,
  );
}

export function FactGrid({ items = [], columns }) {
  const style = columns
    ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
    : { gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))' };
  return (
    <dl className="lc-facts" style={style}>
      {items.map((item, i) => (
        <div key={i} className="lc-facts__tile">
          <dt className="lc-facts__label">{item.label}</dt>
          <dd className="lc-facts__value">{renderRich(item.value)}</dd>
        </div>
      ))}
    </dl>
  );
}

export default FactGrid;
