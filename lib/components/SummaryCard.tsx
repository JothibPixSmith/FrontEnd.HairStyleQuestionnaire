'use client';

interface SummaryCardProps {
  section: string;
  items: { question: string; answer: string }[];
}

export function SummaryCard({ section, items }: SummaryCardProps) {
  return (
    <div className="summary-card">
      <h3 className="summary-card__section">{section}</h3>
      <ul className="summary-card__list">
        {items.map((item, i) => (
          <li key={i} className="summary-card__item">
            <span className="summary-card__q">{item.question}</span>
            <span className="summary-card__a">{item.answer || '—'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
