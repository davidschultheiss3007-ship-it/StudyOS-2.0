import { lazy, useEffect, useRef, useState } from 'react';
import { VisualFrame, VisualSkeleton } from './VisualFrame.jsx';

const Scene3DImpl = lazy(() => import('./Scene3DImpl.jsx'));

// Public palette component for genuine 3D content. R3F + three are heavy, so:
//  1. lazy-loaded only when this component mounts, and
//  2. mounted only once scrolled into view (IntersectionObserver), and
//  3. skipped entirely under prefers-reduced-motion (static note instead).
export function Scene3D({ title, source, hint, height = 360, ...props }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  }, []);

  useEffect(() => {
    if (reducedMotion || !ref.current) return undefined;
    const obs = new IntersectionObserver(
      entries => { if (entries[0]?.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: '200px' },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reducedMotion]);

  return (
    <VisualFrame title={title} source={source} height={height}>
      <div ref={ref}>
        {reducedMotion ? (
          <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-muted/40 p-6 text-center text-sm text-muted-foreground" style={{ height }}>
            <span>3D-Ansicht deaktiviert (reduzierte Bewegung).</span>
            {hint && <span className="text-xs">{hint}</span>}
          </div>
        ) : inView ? (
          <Scene3DImpl height={height} {...props} />
        ) : (
          <VisualSkeleton height={height} />
        )}
      </div>
      {hint && !reducedMotion && <p className="mt-2 text-center text-xs text-muted-foreground">{hint}</p>}
    </VisualFrame>
  );
}

export default Scene3D;
