import './Panel.css';

export function Panel({ children, title, className = '', padding = true }) {
  return (
    <div className={`panel ${padding ? 'panel--padded' : ''} ${className}`}>
      {title && <h3 className="panel__title">{title}</h3>}
      {children}
    </div>
  );
}
