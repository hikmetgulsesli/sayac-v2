import type { FC } from 'react';

interface ErrorStateProps {
  onRetry: () => void;
}

export const ErrorState: FC<ErrorStateProps> = ({ onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <div className="w-full max-w-xl bg-surface-container relative overflow-hidden error-glow">
        <div className="h-1 w-full bg-gradient-to-r from-error to-error-container"></div>
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="w-20 h-20 flex items-center justify-center bg-error-container text-tertiary">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-tertiary mb-6 uppercase">
            HATA: TARAYICI DEPOLAMA ERİŞİMİ ENGELLENDİ
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Uygulamanın çalışması için yerel depolama alanı gereklidir. Lütfen gizli modu kapatın veya izinleri kontrol edin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10 text-left bg-surface-container-lowest p-6">
            <div className="flex flex-col gap-1">
              <span className="font-label text-[10px] tracking-widest text-slate-500 uppercase">Module ID</span>
              <span className="font-headline text-lg font-medium text-on-surface">SYS_STORAGE_01</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label text-[10px] tracking-widest text-slate-500 uppercase">Protocol Status</span>
              <span className="font-headline text-lg font-medium text-tertiary">DISABLED</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <button
              onClick={onRetry}
              className="w-full bg-primary-container text-on-primary-container font-headline font-bold py-4 tracking-tight tactical-glow transition-all active:opacity-80"
            >
              SAYFAYI YENİLE
            </button>
            <button
              onClick={() => window.open('https://github.com/hikmetgulsesli/sayac-v2/issues', '_blank')}
              className="w-full bg-transparent text-on-surface font-label text-[11px] tracking-[0.2em] uppercase py-3 border border-outline-variant hover:bg-surface-container-highest transition-colors"
            >
              DESTEK KAYDI OLUŞTUR
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-9xl">lock</span>
        </div>
      </div>
    </div>
  );
};
