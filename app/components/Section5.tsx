'use client';

import { OptionCard, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section5Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const HEAT_OPTIONS = [
  { value: 'daily', label: 'Daily', icon: '🔥' },
  { value: '2-3x-week', label: '2–3× per Week', icon: '♨️' },
  { value: 'weekly', label: 'Weekly', icon: '☁️' },
  { value: 'rarely', label: 'Rarely', icon: '🌿' },
  { value: 'never', label: 'Never', icon: '❄️' },
];

const WATER_OPTIONS = [
  { value: 'soft', label: 'Soft Water', icon: '💧', sub: 'Low mineral content' },
  { value: 'hard', label: 'Hard Water', icon: '💠', sub: 'High mineral content' },
  { value: 'unknown', label: "I Don't Know", icon: '🤷', sub: '' },
  { value: 'filter', label: 'I Use a Filter', icon: '🔵', sub: 'Filtered water' },
];

const CLIMATE_OPTIONS = [
  { value: 'humid', label: 'Humid Year-Round', icon: '🌧️' },
  { value: 'dry', label: 'Dry Year-Round', icon: '☀️' },
  { value: 'seasonal', label: 'Seasonal Changes', icon: '🍂' },
  { value: 'cold-dry', label: 'Very Cold/Dry Winters', icon: '❄️' },
];

export function Section5({ form, onChange }: Section5Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={5} title="Styling & Environment" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={16}>How often do you use heat styling tools?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {HEAT_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.heatFrequency === opt.value}
              onSelect={(v) => onChange('heatFrequency', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={17}>What's your water situation?</QuestionLabel>
        <div className="options-grid options-grid--2">
          {WATER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('waterType', opt.value)}
              className={`option-card option-card--tall ${form.waterType === opt.value ? 'option-card--selected' : ''}`}
            >
              <span className="option-card__icon">{opt.icon}</span>
              <span className="option-card__label">{opt.label}</span>
              {opt.sub && <span className="option-card__sub">{opt.sub}</span>}
              <span className="option-card__check">{form.waterType === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={18}>What climate do you live in?</QuestionLabel>
        <div className="options-grid options-grid--2">
          {CLIMATE_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.climate === opt.value}
              onSelect={(v) => onChange('climate', v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
