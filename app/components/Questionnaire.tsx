'use client';

import { useState, useCallback } from 'react';
import { ProgressBar, NavigationButtons } from '@/lib/components';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section6 } from './Section6';
import { Section7 } from './Section7';
import { Section8 } from './Section8';
import { SummaryPage } from './SummaryPage';
import { defaultFormState } from '@/lib/types';
import type { FormState } from '@/lib/types';

const TOTAL_SECTIONS = 8;

export function Questionnaire() {
  const [step, setStep] = useState(0); // 0 = intro, 1–8 = sections, 9 = summary
  const [form, setForm] = useState<FormState>(defaultFormState);

  const onChange = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleNext = () => setStep((s) => Math.min(s + 1, TOTAL_SECTIONS + 1));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));
  const handleReset = () => { setStep(0); setForm(defaultFormState); };

  const progressStep = step === 0 ? 0 : step > TOTAL_SECTIONS ? TOTAL_SECTIONS : step;

  if (step === 0) {
    return (
      <div className="intro-page">
        <div className="intro-page__badge">Hair Assessment</div>
        <h1 className="intro-page__title">
          Comprehensive<br />
          <span className="intro-page__title--accent">Hair Profile</span>
        </h1>
        <p className="intro-page__desc">
          Answer 26 questions across 8 sections to build your complete hair profile.
          This assessment covers texture, porosity, chemical history, your current routine, and your goals.
        </p>
        <div className="intro-stats">
          <div className="intro-stat">
            <span className="intro-stat__num">26</span>
            <span className="intro-stat__label">Questions</span>
          </div>
          <div className="intro-stat">
            <span className="intro-stat__num">8</span>
            <span className="intro-stat__label">Sections</span>
          </div>
          <div className="intro-stat">
            <span className="intro-stat__num">~5</span>
            <span className="intro-stat__label">Minutes</span>
          </div>
        </div>
        <button type="button" className="btn btn--primary btn--large" onClick={handleNext}>
          Begin Assessment →
        </button>
      </div>
    );
  }

  if (step > TOTAL_SECTIONS) {
    return <SummaryPage form={form} onReset={handleReset} />;
  }

  const sectionProps = { form, onChange };

  return (
    <div className="questionnaire">
      <ProgressBar current={progressStep} total={TOTAL_SECTIONS} />

      <div className="questionnaire__body">
        {step === 1 && <Section1 {...sectionProps} />}
        {step === 2 && <Section2 {...sectionProps} />}
        {step === 3 && <Section3 {...sectionProps} />}
        {step === 4 && <Section4 {...sectionProps} />}
        {step === 5 && <Section5 {...sectionProps} />}
        {step === 6 && <Section6 {...sectionProps} />}
        {step === 7 && <Section7 {...sectionProps} />}
        {step === 8 && <Section8 {...sectionProps} />}
      </div>

      <NavigationButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={step === 1}
        isLast={step === TOTAL_SECTIONS}
        nextLabel="See My Results"
      />
    </div>
  );
}
