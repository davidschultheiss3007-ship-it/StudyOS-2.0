// Neutral content card for grouping a single block (heading + bullets, a
// short definition, a note). Lighter than DefinitionBox/Callout — use it to
// visually separate the distinct content blocks inside a section, and place
// several side by side inside <Columns>.
//
// `title`   optional card header
// `tone`    accent role for title + top border
// `compact` tighter padding for dense side-by-side use
// `exam`    marks the whole card as exam-relevant (badge + accent frame)
//
// Styling lives in FullContentView.css (.lc-card*) so it renders reliably
// regardless of Tailwind content scanning.
const TONE_VARS = {
  neutral: 'var(--color-border-strong)',
  accent: 'var(--color-accent)',
  purple: 'var(--color-module-purple)',
  positive: 'var(--color-success)',
  negative: 'var(--color-error)',
  warning: 'var(--color-warning)',
  teal: 'var(--color-module-teal)',
  orange: 'var(--color-module-orange)',
};

export function Card({ title, tone = 'neutral', compact = false, exam = false, children }) {
  // Exam cards always use the exam-focus accent regardless of tone.
  const color = exam ? 'var(--learning-purple-text)' : (TONE_VARS[tone] ?? TONE_VARS.neutral);
  return (
    <div
      className={`lc-card${compact ? ' lc-card--compact' : ''}${exam ? ' lc-card--exam' : ''}`}
      style={{ '--lc-tone': color }}
    >
      {exam && <span className="lc-card__exam-badge">Prüfungsrelevant</span>}
      {title && <p className="lc-card__title">{title}</p>}
      <div className="lc-card__body">{children}</div>
    </div>
  );
}

export default Card;
