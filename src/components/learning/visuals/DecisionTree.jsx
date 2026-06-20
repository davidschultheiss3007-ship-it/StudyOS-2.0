import { CornerDownRight } from 'lucide-react';

// Simple nested decision/branch structure. node = { label, detail?, children?[] }.
// Styling lives in FullContentView.css (.lc-tree*) — Tailwind utilities are not
// compiled in this build, so palette visuals are styled with real CSS.
function Node({ node, depth = 0 }) {
  return (
    <li className="lc-tree__node">
      <div className="lc-tree__row">
        {depth > 0 && <CornerDownRight size={16} className="lc-tree__arrow" aria-hidden="true" />}
        <div className="lc-tree__copy">
          <span className="lc-tree__label">{node.label}</span>
          {node.detail && <p className="lc-tree__detail">{node.detail}</p>}
        </div>
      </div>
      {node.children?.length > 0 && (
        <ul className="lc-tree__children">
          {node.children.map((child, i) => <Node key={i} node={child} depth={depth + 1} />)}
        </ul>
      )}
    </li>
  );
}

export function DecisionTree({ root, nodes }) {
  const items = nodes ?? (root ? [root] : []);
  return (
    <div className="lc-tree">
      <ul className="lc-tree__list">
        {items.map((n, i) => <Node key={i} node={n} />)}
      </ul>
    </div>
  );
}

export default DecisionTree;
