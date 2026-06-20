import { useState } from 'react';
import { Badge } from '../ui/Badge.jsx';
import { Button } from '../ui/Button.jsx';
import { getTaskTypeLabel, renderPoints, renderTextBlock } from './examUtils.jsx';
import './Exam.css';

export function ExamTask({ task, index, showSolutions }) {
  const [localSolutionVisible, setLocalSolutionVisible] = useState(false);
  const solutionVisible = showSolutions || localSolutionVisible;

  return (
    <article className="exam-task">
      <div className="exam-task__header">
        <div className="exam-task__title-group">
          <span className="exam-task__eyebrow">Aufgabe {index + 1}</span>
          <h4 className="exam-task__title">{task.title}</h4>
        </div>
        <div className="exam-task__badges">
          <Badge variant="default" size="sm">{getTaskTypeLabel(task.type)}</Badge>
          <Badge variant="primary" size="sm">{renderPoints(task.points)}</Badge>
        </div>
      </div>

      <div className="exam-task__prompt">
        {renderTextBlock(task.task)}
      </div>

      {task.sourceRef && (
        <p className="exam-task__source">{task.sourceRef}</p>
      )}

      {!showSolutions && task.solution && (
        <Button
          variant="ghost"
          size="sm"
          className="exam-task__solution-button"
          onClick={() => setLocalSolutionVisible(value => !value)}
        >
          {localSolutionVisible ? 'Lösung ausblenden' : 'Lösung anzeigen'}
        </Button>
      )}

      {solutionVisible && task.solution && (
        <div className="exam-task__solution">
          <h5 className="exam-task__solution-title">Musterlösung</h5>
          <div className="exam-task__solution-body">
            {renderTextBlock(task.solution)}
          </div>
          {task.gradingHints?.length > 0 && (
            <div className="exam-task__grading">
              <h6 className="exam-task__grading-title">Bewertungshinweise</h6>
              <ul>
                {task.gradingHints.map(hint => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
