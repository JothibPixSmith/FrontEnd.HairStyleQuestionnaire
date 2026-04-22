'use client';

interface ScaleSelectorProps {
  min: number;
  max: number;
  minLabel?: string;
  maxLabel?: string;
  value: number | null;
  onChange: (value: number) => void;
}

export function ScaleSelector({ min, max, minLabel, maxLabel, value, onChange }: ScaleSelectorProps) {
  const steps = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  return (
    <div className="scale-selector">
      <div className="scale-selector__track">
        {steps.map((step) => (
          <button
            key={step}
            type="button"
            onClick={() => onChange(step)}
            className={`scale-selector__step ${value === step ? 'scale-selector__step--selected' : ''}`}
            aria-label={`Scale ${step}`}
          >
            {step}
          </button>
        ))}
      </div>
      <div className="scale-selector__labels">
        {minLabel && <span className="scale-selector__label-min">{minLabel}</span>}
        {maxLabel && <span className="scale-selector__label-max">{maxLabel}</span>}
      </div>
    </div>
  );
}
