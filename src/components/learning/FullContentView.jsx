import { MDXProvider } from '@mdx-js/react';
import { ContentSection } from './ContentSection.jsx';
import { ExamFocusBox } from './ExamFocusBox.jsx';
import { SectionNav } from '../navigation/SectionNav.jsx';
import { mdxComponents } from './visuals/index.jsx';
import './FullContentView.css';

export function FullContentView({ topic }) {
  if (!topic.sections?.length) {
    return (
      <div className="full-content-view topic-detail full-content-view--empty">
        <p>Kein Inhalt verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="full-content-view topic-detail">
      <SectionNav sections={topic.sections} />

      <div className="full-content-view__content topic-content">
        <div className="full-content-view__sections">
          {topic.Content ? (
            <MDXProvider components={mdxComponents}>
              <topic.Content />
            </MDXProvider>
          ) : (
            topic.sections?.map(s => (
              <ContentSection key={s.id} section={s} />
            ))
          )}
        </div>

        {topic.keyTakeaways?.length > 0 && (
          <div className="full-content-view__takeaways">
            <h3 className="full-content-view__takeaways-title">Key Takeaways</h3>
            <ul>
              {topic.keyTakeaways.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        <ExamFocusBox examFocus={topic.examFocus} pitfalls={topic.pitfalls} />
      </div>
    </div>
  );
}
