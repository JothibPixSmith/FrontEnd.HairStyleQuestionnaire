'use client';

import { MultiSelect, TextArea, SectionHeader, QuestionLabel } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface Section6Props {
  form: FormState;
  onChange: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}

const FRUSTRATION_OPTIONS = [
  { value: 'dryness', label: 'Dryness', icon: '🏜️' },
  { value: 'frizz', label: 'Frizz', icon: '⚡' },
  { value: 'curl-definition', label: 'Lack of Curl Definition', icon: '🌀' },
  { value: 'moisture', label: "Won't Hold Moisture", icon: '💧' },
  { value: 'products', label: "Products Don't Work", icon: '🚫' },
  { value: 'tangles', label: 'Tangles Easily', icon: '🪢' },
  { value: 'breakage', label: 'Breakage', icon: '💔' },
  { value: 'dullness', label: 'Dullness', icon: '🌫️' },
  { value: 'growth', label: "Won't Grow", icon: '📏' },
  { value: 'unpredictable', label: 'Unpredictable Behavior', icon: '🎲' },
];

export function Section6({ form, onChange }: Section6Props) {
  return (
    <div className="section-content">
      <SectionHeader sectionNumber={6} title="Current Struggles" totalSections={8} />

      <div className="question-block">
        <QuestionLabel number={19}>What's your biggest hair frustration? (Select all that apply)</QuestionLabel>
        <MultiSelect
          options={FRUSTRATION_OPTIONS}
          selected={form.frustrations}
          onChange={(v) => onChange('frustrations', v)}
        />
      </div>

      <div className="question-block">
        <QuestionLabel number={20}>What have you tried that DIDN'T work?</QuestionLabel>
        <TextArea
          value={form.didntWork}
          onChange={(v) => onChange('didntWork', v)}
          placeholder="Tell us what you've tried — products, routines, techniques..."
          rows={5}
        />
      </div>

      <div className="question-block">
        <QuestionLabel number={21}>What's the best your hair has ever looked, and what were you doing then?</QuestionLabel>
        <TextArea
          value={form.bestHairEver}
          onChange={(v) => onChange('bestHairEver', v)}
          placeholder="Describe your hair at its best — vacation, season, specific product or routine..."
          rows={5}
        />
      </div>
    </div>
  );
}
