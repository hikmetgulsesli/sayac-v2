import type { FC } from 'react';

interface HeaderProps {
  onHistoryClick?: () => void;
  onSettingsClick?: () => void;
}

export const Header: FC<HeaderProps> = ({ onHistoryClick, onSettingsClick }) => {
  return (
    <header className="bg-slate-950 flex justify-between items-center w-full px-6 py-4 border-b-0 sticky top-0 z-50">
      <div className="text-xl font-black tracking-tighter text-emerald-500 font-headline">
        SAYAC_V2
      </div>
      <div className="flex items-center gap-6">
        <span className="font-label uppercase tracking-widest text-[10px] text-emerald-500 hidden sm:block">
          SİSTEM ÇALIŞIYOR
        </span>
        <div className="flex gap-4">
          <button 
            onClick={onHistoryClick}
            className="text-slate-500 hover:bg-slate-800 transition-colors p-2"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button 
            onClick={onSettingsClick}
            className="text-slate-500 hover:bg-slate-800 transition-colors p-2"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};
