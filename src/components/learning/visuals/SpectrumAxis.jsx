// Positions labelled markers along a single horizontal axis (e.g. a
// risk/return or correlation spectrum). markers = [{at: 0..100, label, sub}].
// Styling lives in FullContentView.css (.lc-spectrum*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
export function SpectrumAxis({ min, max, markers = [], caption }) {
  return (
    <figure className="lc-spectrum">
      {caption && <figcaption className="lc-spectrum__caption">{caption}</figcaption>}
      <div className="lc-spectrum__track-wrap">
        <div className="lc-spectrum__track" />
        {markers.map((m, i) => (
          <div key={i} className="lc-spectrum__marker" style={{ left: `${m.at}%` }}>
            <span className="lc-spectrum__label">{m.label}</span>
            <span className="lc-spectrum__dot" aria-hidden="true" />
          </div>
        ))}
        {markers.map((m, i) => (
          m.sub ? (
            <div key={`s${i}`} className="lc-spectrum__sub" style={{ left: `${m.at}%` }}>
              {m.sub}
            </div>
          ) : null
        ))}
        {(min || max) && (
          <div className="lc-spectrum__bounds">
            <span>{min}</span><span>{max}</span>
          </div>
        )}
      </div>
    </figure>
  );
}

export default SpectrumAxis;
