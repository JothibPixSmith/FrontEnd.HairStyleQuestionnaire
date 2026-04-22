'use client';

import { OptionCard, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section8Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const GOAL_OPTIONS = [
  { value: 'healthy', label: 'Healthy, Strong Hair', icon: '💪' },
  { value: 'curl-definition', label: 'Better Curl Definition', icon: '🌀' },
  { value: 'easier-routine', label: 'Easier Daily Routine', icon: '⚡' },
  { value: 'faster-styling', label: 'Faster Styling', icon: '🏎️' },
  { value: 'moisture', label: 'More Moisture Retention', icon: '💧' },
  { value: 'less-frizz', label: 'Less Frizz', icon: '✨' },
  { value: 'volume', label: 'More Volume', icon: '🌸' },
  { value: 'length', label: 'Length Retention', icon: '📏' },
];

const KNOWLEDGE_OPTIONS = [
  { value: 'beginner', label: 'Beginner', icon: '🌱', sub: 'Still figuring things out' },
  { value: 'intermediate', label: 'Intermediate', icon: '🌿', sub: 'Know some things, not everything' },
  { value: 'advanced', label: 'Advanced', icon: '🌳', sub: 'Pretty knowledgeable' },
  { value: 'expert', label: 'Expert', icon: '🏆', sub: 'I could teach others' },
];

export function Section8({ form, onChange }: Section8Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={8} title="Goals & Expectations" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={25}>What's your ultimate hair goal?</QuestionLabel>
        <div className="options-grid options-grid--2">
          {GOAL_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.ultimateGoal === opt.value}
              onSelect={(v) => onChange('ultimateGoal', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={26}>How would you describe your hair knowledge level?</QuestionLabel>
        <div className="options-grid options-grid--2">
          {KNOWLEDGE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('knowledgeLevel', opt.value)}
              className={`option-card option-card--tall ${form.knowledgeLevel === opt.value ? 'option-card--selected' : ''}`}
            >
              <span className="option-card__icon">{opt.icon}</span>
              <span className="option-card__label">{opt.label}</span>
              <span className="option-card__sub">{opt.sub}</span>
              <span className="option-card__check">{form.knowledgeLevel === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
