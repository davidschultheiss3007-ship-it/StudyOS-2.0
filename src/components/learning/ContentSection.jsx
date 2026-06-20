import './ContentSection.css';

const htmlPattern = /<\/?[a-z][\s\S]*>/i;

function decorateHtml(html) {
  return html
    .trim()
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<p><em>(Quelle:[\s\S]*?)<\/em><\/p>/g, '<p class="source-note"><em>$1</em></p>')
    .replace(/<p>\s*(<strong>Merksatz:<\/strong>[\s\S]*?)<\/p>/g, '<div class="callout">$1</div>');
}

function renderContent(text) {
  if (text == null) {
    return null;
  }

  if (typeof text !== 'string') {
    return text;
  }

  if (htmlPattern.test(text)) {
    return (
      <div
        className="content-section__prose"
        dangerouslySetInnerHTML={{ __html: decorateHtml(text) }}
      />
    );
  }

  return text.split('\n\n').map((para, i) => {
    const html = para
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    return (
      <p key={i} dangerouslySetInnerHTML={{ __html: html.replace(/\n/g, '<br/>') }} />
    );
  });
}

function renderVisuals(visuals) {
  if (!visuals) {
    return null;
  }

  return (
    <div className="content-section__visuals" aria-label="Veranschaulichungen">
      {(Array.isArray(visuals) ? visuals : [visuals]).map((visual, index) => (
        <div className="content-section__visual" key={visual?.key ?? index}>
          {visual}
        </div>
      ))}
    </div>
  );
}

export function ContentSection({ section }) {
  return (
    <div id={section.id} className="content-section topic-section">
      <h3 className="content-section__title">{section.title}</h3>
      <div className="content-section__body topic-prose">
        {renderContent(section.content)}
        {renderVisuals(section.visuals)}
      </div>
    </div>
  );
}
