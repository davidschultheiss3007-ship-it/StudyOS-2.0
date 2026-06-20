import './StatCard.css';

export function StatCard({ title, value, sub, icon, trend, accent }) {
  return (
    <div className="stat-card" style={accent ? { '--stat-accent': accent } : undefined}>
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        {icon && (
          <span className={`stat-card__icon${accent ? ' stat-card__icon--accent' : ''}`}>
            {icon}
          </span>
        )}
      </div>
      <div className="stat-card__value">{value}</div>
      {sub && <div className="stat-card__sub">{sub}</div>}
      {trend && <div className="stat-card__trend">{trend}</div>}
    </div>
  );
}
