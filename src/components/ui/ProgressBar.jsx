import './ProgressBar.css';

export function ProgressBar({ value = 0, max = 100, color, size = 'md', showLabel = false }) {
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={`progress-bar progress-bar--${size}`}>
      <div
        className="progress-bar__fill"
        style={{ width: `${pct}%`, ...(color ? { background: color } : {}) }}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      {showLabel && <span className="progress-bar__label">{pct}%</span>}
    </div>
  );
}
