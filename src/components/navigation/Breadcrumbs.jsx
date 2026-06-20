import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

export function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="breadcrumbs__item">
              {!isLast && item.to
                ? <Link to={item.to} className="breadcrumbs__link">{item.label}</Link>
                : <span className={`breadcrumbs__current ${isLast ? 'breadcrumbs__current--active' : ''}`}>{item.label}</span>
              }
              {!isLast && (
                <span className="breadcrumbs__sep" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
