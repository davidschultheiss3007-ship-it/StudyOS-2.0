import { Lightbulb, AlertTriangle, Target, Info, Sparkles } from 'lucide-react';

// Didactic emphasis box. `type` selects icon + colour role.
// Styling lives in FullContentView.css (.lc-callout*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
const VARIANTS = {
  merksatz: { icon: Lightbulb, label: 'Merksatz', tone: 'accent' },
  examfocus: { icon: Target, label: 'Prüfungsfokus', tone: 'purple' },
  pitfall: { icon: AlertTriangle, label: 'Prüfungsfalle', tone: 'warning' },
  info: { icon: Info, label: 'Hinweis', tone: 'info' },
  tip: { icon: Sparkles, label: 'Tipp', tone: 'success' },
  warn: { icon: AlertTriangle, label: 'Achtung', tone: 'warning' },
};

export function Callout({ type = 'info', title, children }) {
  const v = VARIANTS[type] ?? VARIANTS.info;
  const Icon = v.icon;
  return (
    <div className={`lc-callout lc-callout--${v.tone}`}>
      <span className="lc-callout__icon" aria-hidden="true"><Icon size={18} /></span>
      <div className="lc-callout__body">
        <p className="lc-callout__title">{title ?? v.label}</p>
        <div className="lc-callout__content">{children}</div>
      </div>
    </div>
  );
}

export default Callout;
