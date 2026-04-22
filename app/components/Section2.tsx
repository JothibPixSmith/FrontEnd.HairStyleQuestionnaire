'use client';

import { OptionCard, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section2Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const SOAK_TIME_OPTIONS = [
  { value: 'immediately', label: 'Immediately', icon: '💧', sub: 'Less than 30 seconds' },
  { value: 'moderate', label: 'Moderately', icon: '🌊', sub: '1–2 minutes' },
  { value: 'forever', label: 'Takes Forever', icon: '⏳', sub: '3+ minutes' },
];

const DRY_TIME_OPTIONS = [
  { value: '1-2h', label: '1–2 hours', icon: '⚡' },
  { value: '3-4h', label: '3–4 hours', icon: '🌤️' },
  { value: '5-6h', label: '5–6 hours', icon: '🌙' },
  { value: '7h+', label: '7+ hours', icon: '🌑' },
  { value: 'never', label: 'Never air dry', icon: '💨' },
];

const OIL_OPTIONS = [
  { value: 'immediately', label: 'Absorbs Immediately', icon: '✨' },
  { value: 'some-work', label: 'Takes Some Work', icon: '🔄' },
  { value: 'surface', label: 'Sits on Surface', icon: '💦' },
  { value: 'never', label: 'Never Absorbs', icon: '🚫' },
];

const PROTEIN_OPTIONS = [
  { value: 'stronger', label: 'Gets Stronger & More Defined', icon: '💪' },
  { value: 'no-change', label: 'No Noticeable Change', icon: '😐' },
  { value: 'stiff', label: 'Gets Stiff or Brittle', icon: '🪨' },
  { value: 'never-tried', label: 'Never Used Them', icon: '🙅' },
];

const HEAVY_PRODUCT_OPTIONS = [
  { value: 'loves', label: 'My hair loves them!', icon: '❤️' },
  { value: 'okay', label: 'Work okay with effort', icon: '👍' },
  { value: 'weigh', label: 'Weighs my hair down', icon: '⬇️' },
  { value: 'greasy', label: 'Makes hair look greasy', icon: '😬' },
];

export function Section2({ form, onChange }: Section2Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={2} title="Porosity Assessment" totalSections={8} />

      <div className="subsection-title">Water Behavior</div>

      <div className="question-block">
        <QuestionLabel number={5}>When you get in the shower, how long does it take your hair to get completely soaked?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {SOAK_TIME_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('waterSoakTime', opt.value)}
              className={`option-card option-card--tall ${form.waterSoakTime === opt.value ? 'option-card--selected' : ''}`}
            >
              <span className="option-card__icon">{opt.icon}</span>
              <span className="option-card__label">{opt.label}</span>
              <span className="option-card__sub">{opt.sub}</span>
              <span className="option-card__check">{form.waterSoakTime === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={6}>After washing, how long does your hair take to air dry completely?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {DRY_TIME_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.airDryTime === opt.value}
              onSelect={(v) => onChange('airDryTime', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={7}>When you apply oil to your hair, what happens?</QuestionLabel>
        <div className="options-grid options-grid--2">
          {OIL_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.oilAbsorption === opt.value}
              onSelect={(v) => onChange('oilAbsorption', v)}
            />
          ))}
        </div>
      </div>

      <div className="subsection-title">Product Response</div>

      <div className="question-block">
        <QuestionLabel number={8}>How does your hair typically respond to protein treatments?</QuestionLabel>
        <div className="options-grid options-grid--2">
          {PROTEIN_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.proteinResponse === opt.value}
              onSelect={(v) => onChange('proteinResponse', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={9}>When you use heavy creams or butters:</QuestionLabel>
        <div className="options-grid options-grid--2">
          {HEAVY_PRODUCT_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.heavyProductResponse === opt.value}
              onSelect={(v) => onChange('heavyProductResponse', v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
