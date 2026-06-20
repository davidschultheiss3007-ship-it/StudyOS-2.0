// Compact chip set for flat enumerations (synonyms, examples, named items)
// where a bullet list reads as undifferentiated prose. Each entry becomes a
// bordered pill so the set scans as a discrete group of items.
//
// `items`  array of strings (preferred), or pass MDX list children
// `tone`   accent role for the chip border/text
//
// Styling lives in FullContentView.css (.lc-tags*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
const TONES = {
  neutral: 'var(--color-border-strong)',
  accent: 'var(--color-accent)',
  purple: 'var(--color-module-purple)',
  teal: 'var(--color-module-teal)',
  orange: 'var(--color-module-orange)',
  positive: 'var(--color-success)',
};

export function TagList({ items = [], tone = 'neutral', label }) {
  const color = TONES[tone] ?? TONES.neutral;
  return (
    <div className="lc-tags" style={{ '--lc-tone': color }}>
      {label && <span className="lc-tags__label">{label}</span>}
      <ul className="lc-tags__set">
        {items.map((item, i) => <li key={i} className="lc-tags__chip">{item}</li>)}
      </ul>
    </div>
  );
}

export default TagList;
