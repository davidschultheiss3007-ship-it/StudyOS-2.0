// Inline exam-relevance marker. Wrap a word or phrase to highlight it like a
// text marker so it pops out of dense content when skimming. Use sparingly —
// only for genuinely exam-critical facts, figures, definitions or distinctions.
//
//   Mindestkapital der AG: <Exam>50.000 €</Exam>
//
// Styling lives in FullContentView.css (.lc-exam).
export function Exam({ children }) {
  return <mark className="lc-exam">{children}</mark>;
}

export default Exam;
