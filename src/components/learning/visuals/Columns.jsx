// Responsive multi-column layout for placing content blocks side by side.
// Stacks to one column on narrow screens. Use it to make better use of
// horizontal space — e.g. two or three bullet-point Cards next to each other.
//
// `count` target columns on wide screens (2 or 3; default 2)
//
// Styling lives in FullContentView.css (.lc-columns) so the responsive grid
// renders reliably regardless of Tailwind content scanning.
export function Columns({ count = 2, children }) {
  const n = count === 3 ? 3 : 2;
  return <div className="lc-columns" data-cols={n}>{children}</div>;
}

export default Columns;
