'use client';

import { OptionCard, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section4Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const WASH_OPTIONS = [
  { value: 'daily', label: 'Daily', icon: '🚿' },
  { value: 'every-other', label: 'Every Other Day', icon: '📅' },
  { value: '2-3x-week', label: '2–3× per Week', icon: '🗓️' },
  { value: 'weekly', label: 'Once a Week', icon: '📆' },
  { value: 'less-weekly', label: 'Less Than Once a Week', icon: '🌙' },
];

const SHAMPOO_OPTIONS = [
  { value: 'sulfate', label: 'Sulfate Shampoo', icon: '🧴' },
  { value: 'sulfate-free', label: 'Sulfate-Free Shampoo', icon: '🌿' },
  { value: 'co-wash', label: 'Co-Wash Only', icon: '💧' },
  { value: 'clay', label: 'Clay Wash', icon: '🪨' },
  { value: 'unknown', label: "I Don't Know", icon: '🤷' },
];

const DEEP_COND_OPTIONS = [
  { value: 'weekly', label: 'Weekly', icon: '💚' },
  { value: 'bi-weekly', label: 'Bi-Weekly', icon: '💛' },
  { value: 'monthly', label: 'Monthly', icon: '🧡' },
  { value: 'rarely', label: 'Rarely', icon: '🔶' },
  { value: 'never', label: 'Never', icon: '❌' },
];

export function Section4({ form, onChange }: Section4Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={4} title="Current Routine" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={13}>How often do you wash your hair?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {WASH_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.washFrequency === opt.value}
              onSelect={(v) => onChange('washFrequency', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={14}>What's your current shampoo situation?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {SHAMPOO_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.shampooType === opt.value}
              onSelect={(v) => onChange('shampooType', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={15}>Do you deep condition?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {DEEP_COND_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.deepCondition === opt.value}
              onSelect={(v) => onChange('deepCondition', v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
