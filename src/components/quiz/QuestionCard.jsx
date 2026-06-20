import './QuestionCard.css';

export function QuestionCard({ question, selected, onSelect, revealed }) {
  const isMultiple = question.type === 'multiple';

  function isCorrect(idx) {
    if (isMultiple) return question.correctAnswers.includes(idx);
    return question.correctAnswer === idx;
  }

  function isSelected(idx) {
    if (isMultiple) return Array.isArray(selected) && selected.includes(idx);
    return selected === idx;
  }

  function handleClick(idx) {
    if (revealed) return;
    if (isMultiple) {
      const cur = Array.isArray(selected) ? selected : [];
      const next = cur.includes(idx) ? cur.filter(i => i !== idx) : [...cur, idx];
      onSelect(next);
    } else {
      onSelect(idx);
    }
  }

  return (
    <div className="question-card">
      <div className="question-card__meta">
        <span className="question-card__type">
          {isMultiple ? 'Multiple Choice' : 'Single Choice'}
        </span>
      </div>
      <p className="question-card__text">{question.question}</p>

      <div className="question-card__options">
        {question.options.map((opt, idx) => {
          let state = '';
          if (revealed) {
            if (isCorrect(idx)) state = 'correct';
            else if (isSelected(idx)) state = 'wrong';
          } else if (isSelected(idx)) {
            state = 'selected';
          }

          return (
            <button
              key={idx}
              className={`question-card__option question-card__option--${state || 'default'}`}
              onClick={() => handleClick(idx)}
              disabled={revealed}
            >
              <span className="question-card__option-letter">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="question-card__option-text">{opt}</span>
              {revealed && isCorrect(idx) && (
                <span className="question-card__option-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              )}
              {revealed && isSelected(idx) && !isCorrect(idx) && (
                <span className="question-card__option-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {revealed && question.explanation && (
        <div className="question-card__explanation">
          <strong>Erklärung:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}
