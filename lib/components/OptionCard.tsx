'use client';

interface OptionCardProps {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  icon?: string;
}

export function OptionCard({ label, value, selected, onSelect, icon }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`option-card ${selected ? 'option-card--selected' : ''}`}
      aria-pressed={selected}
    >
      {icon && <span className="option-card__icon">{icon}</span>}
      <span className="option-card__label">{label}</span>
      <span className="option-card__check">{selected ? '✓' : ''}</span>
    </button>
  );
}
