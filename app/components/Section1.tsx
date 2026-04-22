'use client';

import { OptionCard, ScaleSelector, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section1Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const TEXTURE_OPTIONS = [
  { value: 'straight', label: 'Straight', icon: '〰️', sub: 'Type 1' },
  { value: 'wavy', label: 'Wavy', icon: '〜', sub: 'Type 2a / 2b / 2c' },
  { value: 'curly', label: 'Curly', icon: '🌀', sub: 'Type 3a / 3b / 3c' },
  { value: 'coily', label: 'Coily', icon: '⭕', sub: 'Type 4a / 4b / 4c' },
  { value: 'mixed', label: 'Mixed Textures', icon: '✨', sub: 'Multiple types' },
];

const THICKNESS_OPTIONS = [
  { value: 'fine', label: 'Fine', icon: '🪶' },
  { value: 'medium', label: 'Medium', icon: '〰️' },
  { value: 'coarse', label: 'Coarse', icon: '🧵' },
];

const DENSITY_OPTIONS = [
  { value: 'thin', label: 'Thin', icon: '💨', sub: 'Can see scalp easily' },
  { value: 'medium', label: 'Medium', icon: '🌿', sub: 'Some scalp visibility' },
  { value: 'thick', label: 'Thick', icon: '🌳', sub: 'Little to no scalp visibility' },
];

export function Section1({ form, onChange }: Section1Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={1} title="Basic Hair Information" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={1}>How would you describe your hair texture?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {TEXTURE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('hairTexture', opt.value)}
              className={`option-card option-card--tall ${form.hairTexture === opt.value ? 'option-card--selected' : ''}`}
            >
              <span className="option-card__icon">{opt.icon}</span>
              <span className="option-card__label">{opt.label}</span>
              {opt.sub && <span className="option-card__sub">{opt.sub}</span>}
              <span className="option-card__check">{form.hairTexture === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={2}>
          On the L'Oréal Professional scale of 1–8 (straightest to curliest), where would you place your hair?
        </QuestionLabel>
        <ScaleSelector
          min={1}
          max={8}
          minLabel="Straightest"
          maxLabel="Curliest"
          value={form.lorealScale}
          onChange={(v) => onChange('lorealScale', v)}
        />
      </div>

      <div className="question-block">
        <QuestionLabel number={3}>How would you describe your individual hair strands?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {THICKNESS_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.strandThickness === opt.value}
              onSelect={(v) => onChange('strandThickness', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={4}>How would you describe your hair density?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {DENSITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('hairDensity', opt.value)}
              className={`option-card option-card--tall ${form.hairDensity === opt.value ? 'option-card--selected' : ''}`}
            >
              <span className="option-card__icon">{opt.icon}</span>
              <span className="option-card__label">{opt.label}</span>
              {opt.sub && <span className="option-card__sub">{opt.sub}</span>}
              <span className="option-card__check">{form.hairDensity === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
