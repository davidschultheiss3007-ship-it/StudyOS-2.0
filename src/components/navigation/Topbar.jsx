import './Topbar.css';

export function Topbar({ title, actions }) {
  return (
    <header className="topbar">
      {title && <h1 className="topbar__title">{title}</h1>}
      {actions && <div className="topbar__actions">{actions}</div>}
    </header>
  );
}
