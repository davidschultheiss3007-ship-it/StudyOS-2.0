// Structured table with optional row highlighting. `columns` = [{key,label,align}].
// `rows` = array of objects keyed by column.key. `highlight` = predicate(row,i).
// Styling lives in FullContentView.css (.lc-table*) — Tailwind utilities are not
// compiled in this build, so palette visuals are styled with real CSS.
export function DataTable({ columns = [], rows = [], caption, highlight }) {
  return (
    <figure className="lc-table">
      {caption && <figcaption className="lc-table__caption">{caption}</figcaption>}
      <div className="lc-table__scroll">
        <table className="lc-table__table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} className={col.align === 'right' ? 'lc-table__cell--right' : undefined}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const hot = highlight?.(row, i);
              return (
                <tr key={i} className={hot ? 'lc-table__row--hot' : undefined}>
                  {columns.map(col => (
                    <td key={col.key} className={col.align === 'right' ? 'lc-table__cell--right' : undefined}>
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export default DataTable;
