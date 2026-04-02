import type { FC } from 'react';

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: FC<CounterDisplayProps> = ({ count }) => {
  return (
    <div className="relative group">
      <h1 
        className="font-headline text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-on-surface flex items-baseline"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {count}
      </h1>
      <div className="absolute -top-4 -right-8 opacity-40">
        <span className="font-label text-[12px] uppercase tracking-[0.2em] text-primary rotate-90 origin-left">
          PR_V2
        </span>
      </div>
    </div>
  );
};
