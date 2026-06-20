import './ExamFocusBox.css';

export function ExamFocusBox({ examFocus = [], pitfalls = [] }) {
  return (
    <div className="exam-focus-boxes">
      {examFocus.length > 0 && (
        <div className="exam-focus-box exam-focus-box--focus">
          <div className="exam-focus-box__header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Prüfungsfokus</span>
          </div>
          <ul className="exam-focus-box__list">
            {examFocus.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {pitfalls.length > 0 && (
        <div className="exam-focus-box exam-focus-box--pitfall">
          <div className="exam-focus-box__header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span>Prüfungsfallen</span>
          </div>
          <ul className="exam-focus-box__list">
            {pitfalls.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
