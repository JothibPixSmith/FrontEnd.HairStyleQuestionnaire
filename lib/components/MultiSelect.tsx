'use client';

interface MultiSelectProps {
  options: { label: string; value: string; icon?: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
}

export function MultiSelect({ options, selected, onChange }: MultiSelectProps) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="multi-select">
      {options.map((opt) => {
        const isSelected = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className={`option-card ${isSelected ? 'option-card--selected' : ''}`}
            aria-pressed={isSelected}
          >
            {opt.icon && <span className="option-card__icon">{opt.icon}</span>}
            <span className="option-card__label">{opt.label}</span>
            <span className="option-card__check">{isSelected ? '✓' : ''}</span>
          </button>
        );
      })}
    </div>
  );
}
