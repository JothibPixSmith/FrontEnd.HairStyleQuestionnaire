'use client';

import { SummaryCard } from '@/lib/components';
import type { FormState } from '@/lib/types';

interface SummaryPageProps {
  form: FormState;
  onReset: () => void;
}

function labelFor(map: Record<string, string>, value: string): string {
  return map[value] ?? value;
}

const TEXTURE_LABELS: Record<string, string> = {
  straight: 'Straight (Type 1)',
  wavy: 'Wavy (Type 2)',
  curly: 'Curly (Type 3)',
  coily: 'Coily (Type 4)',
  mixed: 'Mixed Textures',
};

const FRUSTRATION_LABELS: Record<string, string> = {
  dryness: 'Dryness',
  frizz: 'Frizz',
  'curl-definition': 'Lack of Curl Definition',
  moisture: "Won't Hold Moisture",
  products: "Products Don't Work",
  tangles: 'Tangles Easily',
  breakage: 'Breakage',
  dullness: 'Dullness',
  growth: "Won't Grow",
  unpredictable: 'Unpredictable Behavior',
};

const GOAL_LABELS: Record<string, string> = {
  healthy: 'Healthy, Strong Hair',
  'curl-definition': 'Better Curl Definition',
  'easier-routine': 'Easier Daily Routine',
  'faster-styling': 'Faster Styling',
  moisture: 'More Moisture Retention',
  'less-frizz': 'Less Frizz',
  volume: 'More Volume',
  length: 'Length Retention',
};

export function SummaryPage({ form, onReset }: SummaryPageProps) {
  const frustrationsText = form.frustrations.map((f) => FRUSTRATION_LABELS[f] ?? f).join(', ');

  return (
    <div className="summary-page">
      <div className="summary-hero">
        <div className="summary-hero__icon">🎉</div>
        <h1 className="summary-hero__title">Assessment Complete!</h1>
        <p className="summary-hero__subtitle">
          Here's a summary of your hair profile. Share this with your stylist or use it to guide your routine.
        </p>
      </div>

      <div className="summary-grid">
        <SummaryCard
          section="Basic Hair Info"
          items={[
            { question: 'Texture', answer: labelFor(TEXTURE_LABELS, form.hairTexture) },
            { question: "L'Oréal Scale", answer: form.lorealScale ? `${form.lorealScale} / 8` : '' },
            { question: 'Strand Thickness', answer: form.strandThickness },
            { question: 'Density', answer: form.hairDensity },
          ]}
        />
        <SummaryCard
          section="Porosity"
          items={[
            { question: 'Water Soak Time', answer: form.waterSoakTime },
            { question: 'Air Dry Time', answer: form.airDryTime },
            { question: 'Oil Absorption', answer: form.oilAbsorption },
            { question: 'Protein Response', answer: form.proteinResponse },
            { question: 'Heavy Products', answer: form.heavyProductResponse },
          ]}
        />
        <SummaryCard
          section="Chemical History"
          items={[
            { question: 'Color', answer: form.colorSituation },
            { question: 'Last Color Service', answer: form.lastColorService },
            { question: 'Chemical Processing', answer: form.chemicalProcessing },
          ]}
        />
        <SummaryCard
          section="Current Routine"
          items={[
            { question: 'Wash Frequency', answer: form.washFrequency },
            { question: 'Shampoo Type', answer: form.shampooType },
            { question: 'Deep Condition', answer: form.deepCondition },
          ]}
        />
        <SummaryCard
          section="Environment"
          items={[
            { question: 'Heat Tools', answer: form.heatFrequency },
            { question: 'Water Type', answer: form.waterType },
            { question: 'Climate', answer: form.climate },
          ]}
        />
        <SummaryCard
          section="Struggles"
          items={[
            { question: 'Frustrations', answer: frustrationsText },
            { question: "What Didn't Work", answer: form.didntWork },
            { question: 'Best Hair Ever', answer: form.bestHairEver },
          ]}
        />
        <SummaryCard
          section="Lifestyle"
          items={[
            { question: 'Time on Routine', answer: form.timeSpent },
            { question: 'Monthly Budget', answer: form.budget },
            { question: 'Shopping Preference', answer: form.shoppingLocation },
          ]}
        />
        <SummaryCard
          section="Goals"
          items={[
            { question: 'Ultimate Goal', answer: labelFor(GOAL_LABELS, form.ultimateGoal) },
            { question: 'Knowledge Level', answer: form.knowledgeLevel },
          ]}
        />
      </div>

      <div className="summary-actions">
        <button type="button" className="btn btn--secondary" onClick={onReset}>
          Start Over
        </button>
        <button type="button" className="btn btn--primary" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>
    </div>
  );
}
