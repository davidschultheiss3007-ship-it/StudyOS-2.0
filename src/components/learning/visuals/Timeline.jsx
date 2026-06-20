// Vertical ordered sequence of steps/events: each {label, title, text}.
// Styling lives in FullContentView.css (.lc-timeline*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
export function Timeline({ events = [] }) {
  return (
    <ol className="lc-timeline">
      {events.map((evt, i) => {
        const last = i === events.length - 1;
        return (
          <li key={i} className="lc-timeline__item">
            <div className="lc-timeline__rail">
              <span className="lc-timeline__marker">{evt.label ?? i + 1}</span>
              {!last && <span className="lc-timeline__line" aria-hidden="true" />}
            </div>
            <div className="lc-timeline__content">
              <h4 className="lc-timeline__title">{evt.title}</h4>
              {evt.text && <p className="lc-timeline__text">{evt.text}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
