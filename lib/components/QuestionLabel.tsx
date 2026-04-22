'use client';

interface QuestionLabelProps {
  number: number;
  children: React.ReactNode;
}

export function QuestionLabel({ number, children }: QuestionLabelProps) {
  return (
    <div className="question-label">
      <span className="question-number">{String(number).padStart(2, '0')}</span>
      <p className="question-text">{children}</p>
    </div>
  );
}
