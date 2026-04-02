import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 w-full flex justify-center items-center py-2 px-4 bg-slate-950 border-t border-slate-900 z-50">
      <div className="font-label uppercase tracking-[0.1em] text-[9px] font-bold text-slate-600">
        SISTEM_AKTIF | BUILD_v2.4.0-STABLE
      </div>
    </footer>
  );
};
