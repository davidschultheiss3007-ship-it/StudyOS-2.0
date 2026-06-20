import { useMemo } from 'react';
import katex from 'katex';

// Renders a block (or inline) math formula via KaTeX. The MDX text pipeline
// also supports `$…$`, but <Formula> adds an optional titled card + variable
// legend for didactic emphasis. KaTeX output is library-generated HTML.
// Styling lives in FullContentView.css (.lc-formula*) — Tailwind utilities are
// not compiled in this build, so palette visuals are styled with real CSS.
export function Formula({ expr, children, display = true, title, legend, inline = false }) {
  const tex = expr ?? (typeof children === 'string' ? children : '');
  const html = useMemo(
    () => katex.renderToString(tex, { displayMode: display && !inline, throwOnError: false, output: 'html' }),
    [tex, display, inline],
  );

  if (inline) {
    return <span className="katex-inline" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <figure className="lc-formula">
      {title && <figcaption className="lc-formula__title">{title}</figcaption>}
      <div className="lc-formula__body" dangerouslySetInnerHTML={{ __html: html }} />
      {legend?.length > 0 && (
        <dl className="lc-formula__legend">
          {legend.map((item, i) => (
            <div key={i} className="lc-formula__legend-row">
              <dt dangerouslySetInnerHTML={{ __html: katex.renderToString(item.sym, { throwOnError: false, output: 'html' }) }} />
              <dd>{item.desc}</dd>
            </div>
          ))}
        </dl>
      )}
    </figure>
  );
}

export default Formula;
