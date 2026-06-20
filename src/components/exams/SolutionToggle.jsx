export function SolutionToggle({ showSolutions, onChange }) {
  return (
    <div className="exam-solution-toggle" role="group" aria-label="Lösungsanzeige">
      <button
        type="button"
        className={`exam-solution-toggle__button ${!showSolutions ? 'exam-solution-toggle__button--active' : ''}`}
        aria-pressed={!showSolutions}
        onClick={() => onChange(false)}
      >
        Nur Aufgaben
      </button>
      <button
        type="button"
        className={`exam-solution-toggle__button ${showSolutions ? 'exam-solution-toggle__button--active' : ''}`}
        aria-pressed={showSolutions}
        onClick={() => onChange(true)}
      >
        Aufgaben + Lösungen
      </button>
    </div>
  );
}
