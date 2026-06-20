import { Suspense } from 'react';

// Shared chrome for the heavy lazy visuals: optional title, framed surface,
// and a Suspense fallback skeleton sized to the chart.
// Styling lives in FullContentView.css (.lc-frame*) — Tailwind utilities are not
// compiled in this build, so palette visuals are styled with real CSS.
export function VisualFrame({ title, source, height = 320, children }) {
  return (
    <figure className="lc-frame">
      {title && <figcaption className="lc-frame__title">{title}</figcaption>}
      <div className="lc-frame__body">
        <Suspense fallback={<VisualSkeleton height={height} />}>{children}</Suspense>
      </div>
      {source && <p className="lc-frame__source">Quelle: {source}</p>}
    </figure>
  );
}

export function VisualSkeleton({ height = 320 }) {
  return (
    <div className="lc-frame__skeleton" style={{ height }}>
      Visualisierung wird geladen …
    </div>
  );
}
