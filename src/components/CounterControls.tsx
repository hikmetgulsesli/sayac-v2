import type { FC } from 'react';

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  canDecrement: boolean;
}

export const CounterControls: FC<CounterControlsProps> = ({
  onIncrement,
  onDecrement,
  onReset,
  canDecrement,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-lg">
      <button
        onClick={onDecrement}
        disabled={!canDecrement}
        className={`
          font-label uppercase tracking-widest text-xs py-8 flex flex-col items-center justify-center
          border-r border-slate-900/50 transition-all
          ${canDecrement 
            ? 'bg-surface-container text-on-surface hover:bg-surface-container-highest active:opacity-80' 
            : 'bg-surface-container-lowest text-slate-600 opacity-40 cursor-not-allowed'
          }
        `}
      >
        <span className="material-symbols-outlined mb-3 text-2xl">remove</span>
        Azalt
      </button>

      <button
        onClick={onIncrement}
        className="
          bg-primary-container text-on-primary-container 
          font-label uppercase tracking-widest text-xs py-8 
          flex flex-col items-center justify-center 
          tactical-glow active:opacity-80 transition-all
        "
      >
        <span className="material-symbols-outlined mb-3 text-2xl font-bold">add</span>
        Artır
      </button>

      <button
        onClick={onReset}
        className="
          bg-surface-container text-secondary 
          font-label uppercase tracking-widest text-xs py-8 
          flex flex-col items-center justify-center 
          hover:bg-surface-container-highest transition-colors active:opacity-80
          border-l border-slate-900/50
        "
      >
        <span className="material-symbols-outlined mb-3 text-2xl">refresh</span>
        Sıfırla
      </button>
    </div>
  );
};
