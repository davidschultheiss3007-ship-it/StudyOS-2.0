// Small italic source reference, placed at the end of a section.
// Styling lives in FullContentView.css (.lc-source) — Tailwind utilities are not
// compiled in this build, so palette visuals are styled with real CSS.
export function SourceNote({ children }) {
  return (
    <p className="lc-source">
      Quelle: {children}
    </p>
  );
}

export default SourceNote;
