import { useState } from 'react';
import { QuestionCard } from './QuestionCard.jsx';
import { QuizResult } from './QuizResult.jsx';
import { Button } from '../ui/Button.jsx';
import { saveQuizResult } from '../../app/storage.js';
import './QuizRunner.css';

export function QuizRunner({ questions, moduleId }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const isLast = current === questions.length - 1;

  function checkAnswer() {
    if (selected === null || (Array.isArray(selected) && selected.length === 0)) return;
    setRevealed(true);
  }

  function isCurrentCorrect() {
    if (q.type === 'multiple') {
      const sel = Array.isArray(selected) ? [...selected].sort().join(',') : '';
      const cor = [...q.correctAnswers].sort().join(',');
      return sel === cor;
    }
    return selected === q.correctAnswer;
  }

  function next() {
    const correct = isCurrentCorrect();
    const newAnswers = [...answers, { questionId: q.id, correct }];
    setAnswers(newAnswers);
    setSelected(null);
    setRevealed(false);

    if (isLast) {
      const score = newAnswers.filter(a => a.correct).length;
      saveQuizResult(moduleId, { score, total: questions.length });
      setDone(true);
    } else {
      setCurrent(c => c + 1);
    }
  }

  function retry() {
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
    setDone(false);
  }

  if (done) {
    const score = answers.filter(a => a.correct).length;
    return <QuizResult score={score} total={questions.length} moduleId={moduleId} onRetry={retry} />;
  }

  return (
    <div className="quiz-runner">
      <div className="quiz-runner__progress">
        <span className="quiz-runner__counter">Frage {current + 1} von {questions.length}</span>
        <div className="quiz-runner__progress-bar">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`quiz-runner__progress-dot ${i < current ? 'quiz-runner__progress-dot--done' : i === current ? 'quiz-runner__progress-dot--current' : ''}`}
            />
          ))}
        </div>
      </div>

      <QuestionCard
        question={q}
        selected={selected}
        onSelect={setSelected}
        revealed={revealed}
      />

      <div className="quiz-runner__actions">
        {!revealed ? (
          <Button
            variant="primary"
            onClick={checkAnswer}
            disabled={selected === null || (Array.isArray(selected) && selected.length === 0)}
          >
            Antwort prüfen
          </Button>
        ) : (
          <Button variant="primary" onClick={next}>
            {isLast ? 'Ergebnis anzeigen' : 'Nächste Frage'}
          </Button>
        )}
      </div>
    </div>
  );
}
