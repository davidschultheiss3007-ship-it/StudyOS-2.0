import { BookMarked } from 'lucide-react';

// Highlights a key term with its definition and an optional source reference.
// Styling lives in FullContentView.css (.lc-def*) — Tailwind utilities are not
// compiled in this build, so palette visuals are styled with real CSS.
export function DefinitionBox({ term, source, children }) {
  return (
    <div className="lc-def">
      <div className="lc-def__head">
        <span className="lc-def__icon" aria-hidden="true"><BookMarked size={16} /></span>
        <h4 className="lc-def__term">{term}</h4>
      </div>
      <div className="lc-def__body">{children}</div>
      {source && <p className="lc-def__source">Quelle: {source}</p>}
    </div>
  );
}

export default DefinitionBox;
