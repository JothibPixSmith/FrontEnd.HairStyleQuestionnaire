'use client';

import { OptionCard, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section7Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const TIME_OPTIONS = [
  { value: '10-15min', label: '10–15 minutes', icon: '⚡' },
  { value: '30min', label: '30 minutes', icon: '🕐' },
  { value: '1h', label: '1 hour', icon: '🕑' },
  { value: '2h+', label: '2+ hours', icon: '🕒' },
  { value: 'varies', label: 'It Varies Wildly', icon: '🌀' },
];

const BUDGET_OPTIONS = [
  { value: 'under-25', label: 'Under $25', icon: '💚' },
  { value: '25-50', label: '$25–$50', icon: '💛' },
  { value: '50-100', label: '$50–$100', icon: '🧡' },
  { value: '100-200', label: '$100–$200', icon: '❤️' },
  { value: '200+', label: '$200+', icon: '💎' },
];

const SHOP_OPTIONS = [
  { value: 'drugstore', label: 'Drugstore', icon: '🏪' },
  { value: 'target-walmart', label: 'Target / Walmart', icon: '🛒' },
  { value: 'sally', label: 'Sally Beauty', icon: '✂️' },
  { value: 'ulta-sephora', label: 'Ulta / Sephora', icon: '💄' },
  { value: 'salon', label: 'Professional Salon', icon: '💈' },
  { value: 'online', label: 'Online Specialty', icon: '📦' },
  { value: 'natural', label: 'Natural / Organic Stores', icon: '🌿' },
];

export function Section7({ form, onChange }: Section7Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={7} title="Lifestyle & Preferences" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={22}>How much time do you typically spend on your hair routine?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {TIME_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.timeSpent === opt.value}
              onSelect={(v) => onChange('timeSpent', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={23}>What's your budget range for hair products monthly?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {BUDGET_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.budget === opt.value}
              onSelect={(v) => onChange('budget', v)}
            />
          ))}
        </div>
      </div>

      <div className="question-block">
        <QuestionLabel number={24}>Where do you typically shop for hair products?</QuestionLabel>
        <div className="options-grid options-grid--3">
          {SHOP_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.value}
              label={opt.label}
              value={opt.value}
              icon={opt.icon}
              selected={form.shoppingLocation === opt.value}
              onSelect={(v) => onChange('shoppingLocation', v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
