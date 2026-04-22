'use client';

interface SectionHeaderProps {
  sectionNumber: number;
  title: string;
  totalSections: number;
}

export function SectionHeader({ sectionNumber, title, totalSections }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-badge">
        <span className="section-badge__num">Section {sectionNumber}</span>
        <span className="section-badge__of">of {totalSections}</span>
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
