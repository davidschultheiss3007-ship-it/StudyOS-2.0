import { useEffect, useId, useRef, useState } from 'react';
import mermaid from 'mermaid';

let initialized = false;
function ensureInit() {
  if (initialized) return;
  // theme: 'base' lets us drive colours from CSS variables resolved at runtime.
  const styles = getComputedStyle(document.documentElement);
  const v = name => styles.getPropertyValue(name).trim();
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    fontFamily: v('--font-family') || 'Inter, sans-serif',
    theme: 'base',
    // htmlLabels:false → labels are real SVG <text>, measured by the SVG
    // engine itself, so they are never clipped by a CSS-driven foreignObject.
    flowchart: { htmlLabels: false, useMaxWidth: true, padding: 16, nodeSpacing: 50, rankSpacing: 56 },
    themeVariables: {
      primaryColor: v('--color-accent-subtle') || '#e8effe',
      primaryBorderColor: v('--color-accent') || '#3b76f6',
      primaryTextColor: v('--color-text-primary') || '#15213b',
      lineColor: v('--color-border-strong') || '#cbd5e1',
      secondaryColor: v('--color-bg-elevated') || '#eef2f8',
      tertiaryColor: v('--color-bg-card') || '#ffffff',
      fontSize: '14px',
    },
  });
  initialized = true;
}

export default function DiagramImpl({ chart, code }) {
  const source = (chart ?? code ?? '').trim();
  const ref = useRef(null);
  const rawId = useId();
  const id = `mmd-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    // Render only after the web font is ready — otherwise Mermaid measures
    // label widths against a fallback font and clips text once Inter loads.
    const ready = document.fonts?.ready ?? Promise.resolve();
    ready.then(() => {
      if (cancelled) return;
      ensureInit();
      mermaid
        .render(id, source)
        .then(({ svg }) => { if (!cancelled && ref.current) ref.current.innerHTML = svg; })
        .catch(err => { if (!cancelled) setError(err?.message ?? 'Diagramm konnte nicht gerendert werden.'); });
    });
    return () => { cancelled = true; };
  }, [id, source]);

  if (error) {
    return <p className="text-sm text-[var(--color-error)]">Diagrammfehler: {error}</p>;
  }
  return <div ref={ref} className="flex justify-center [&_svg]:h-auto [&_svg]:max-w-full" aria-label="Diagramm" />;
}
