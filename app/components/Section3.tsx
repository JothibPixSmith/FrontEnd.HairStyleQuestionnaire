'use client';

import { OptionCard, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section3Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const COLOR_OPTIONS = [
  { value: 'natural', label: 'Natural', icon: '🌿', sub: 'Never colored' },
  { value: 'semi', label: 'Semi-Permanent', icon: '🎨', sub: 'Fades gradually' },
  { value: 'demi', label: 'Demi-Permanent', icon: '🖌️', sub: 'Longer lasting' },
  { value: 'permanent', label: 'Permanent Color', icon: '🔒', sub: 'Full commitment' },
  { value: 'highlights', label: 'Highlights / Lowlights', icon: '✨', sub: 'Dimensional color' },
  { value: 'bleached', label: 'Bleached', icon: '⚡', sub: 'Lightened' },
];

const LAST_COLOR_OPTIONS = [
  { value: '2-weeks', label: 'Within 2 weeks', icon: '📅' },
  { value: '3-6-weeks', label: '3–6 weeks ago', icon: '🗓️' },
  { value: '2-3-months', label: '2–3 months ago', icon: '📆' },
  { value: '6-months+', label: '6+ months ago', icon: '⏰' },
];

const CHEMICAL_OPTIONS = [
  { value: 'relaxer', label: 'Relaxer', icon: '🧪' },
  { value: 'perm', label: 'Perm', icon: '🌀' },
  { value: 'keratin', label: 'Keratin Treatment', icon: '💎' },
  { value: 'brazilian', label: 'Brazilian Blowout', icon: '🌺' },
  { value: 'none', label: 'None of the Above', icon: '✅' },
];

export function Section3({ form, onChange }: Section3Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={3} title="Chemical History" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={10}>What's your current color situation?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {COLOR_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('colorSituation', opt.value)}
              className={`option-card option-card--tall ${form.colorSituation === opt.value ? 'option-card--selected' : ''}`}
            >
              <span className="option-card__icon">{opt.icon}</span>
              <span className="option-card__label">{opt.label}</span>
              {opt.sub && <span className="option-card__sub">{opt.sub}</span>}
              <span className="option-card__check">{form.colorSituation === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      </div>

      {form.colorSituation && form.colorSituation !== 'natural' && (
        <div className="question-block">
          <QuestionLabel number={11}>When was your last color service?</QuestionLabel>
          <div className="options-grid options-grid--2">
            {LAST_COLOR_OPTIONS.map((opt) => (
              <OptionCard
                key={opt.value}
                label={opt.label}
                value={opt.value}
                icon={opt.icon}
                selected={form.lastColorService === opt.value}
                onSelect={(v) => onChange('lastColorService', v)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="question-block">
        <QuestionLabel number={12}>Have you ever had chemical processing?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {CHEMICAL_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.chemicalProcessing === opt.value}
              onSelect={(v) => onChange('chemicalProcessing', v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
