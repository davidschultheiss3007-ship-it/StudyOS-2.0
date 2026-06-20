import { Badge } from '../ui/Badge.jsx';
import { ExamTask } from './ExamTask.jsx';
import { renderPoints } from './examUtils.jsx';
import './Exam.css';

export function ExamSection({ section, startIndex, showSolutions }) {
  return (
    <section className="exam-section">
      <div className="exam-section__header">
        <div>
          <h3 className="exam-section__title">{section.title}</h3>
          {section.description && <p className="exam-section__description">{section.description}</p>}
        </div>
        {section.points !== undefined && (
          <Badge variant="default" size="sm">{renderPoints(section.points)}</Badge>
        )}
      </div>

      <div className="exam-section__tasks">
        {(section.tasks ?? []).map((task, index) => (
          <ExamTask
            key={task.id}
            task={task}
            index={startIndex + index}
            showSolutions={showSolutions}
          />
        ))}
      </div>
    </section>
  );
}
