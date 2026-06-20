import { Button } from '../ui/Button.jsx';

export function ExamPrintButton() {
  return (
    <Button variant="secondary" size="sm" onClick={() => window.print()}>
      Drucken
    </Button>
  );
}
