'use client';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  nextLabel?: string;
}

export function NavigationButtons({ onPrev, onNext, isFirst, isLast, nextLabel }: NavigationButtonsProps) {
  return (
    <div className="nav-buttons">
      {!isFirst && (
        <button type="button" className="btn btn--secondary" onClick={onPrev}>
          ← Back
        </button>
      )}
      <button type="button" className="btn btn--primary" onClick={onNext}>
        {isLast ? (nextLabel ?? 'Submit') : 'Continue →'}
      </button>
    </div>
  );
}
