import { useCounter } from './hooks/useCounter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterControls } from './components/CounterControls';
import { ErrorState } from './components/ErrorState';
import './index.css';

function App() {
  const { 
    count, 
    increment, 
    decrement, 
    reset, 
    canDecrement, 
    error,
  } = useCounter();

  const handleRetry = () => {
    window.location.reload();
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background text-on-background font-body">
        <Header />
        <ErrorState onRetry={handleRetry} />
        <Footer />
      </div>
    );
  }

  const isZero = count === 0;

  return (
    <div className="min-h-screen bg-background text-on-background font-body flex flex-col overflow-hidden">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative px-4">
        <div className="absolute top-0 left-0 w-full status-bar"></div>
        
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 border-l border-t border-primary w-12 h-12"></div>
          <div className="absolute top-10 right-10 border-r border-t border-primary w-12 h-12"></div>
          <div className="absolute bottom-10 left-10 border-l border-b border-primary w-12 h-12"></div>
          <div className="absolute bottom-10 right-10 border-r border-b border-primary w-12 h-12"></div>
        </div>

        <div className="w-full max-w-xl text-center flex flex-col items-center">
          <div className="mb-12 flex items-center gap-4">
            <div className="bg-surface-container-highest px-3 py-1 flex items-center">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary">
                {isZero ? 'DURUM: HAZIR' : 'DURUM: AKTİF'}
              </span>
            </div>
            <div className="h-[1px] w-12 bg-outline-variant opacity-30"></div>
            <div className="bg-surface-container-lowest px-3 py-1 flex items-center">
              <span className="font-label text-[10px] uppercase tracking-widest text-secondary-fixed-dim">
                OTURUM_01
              </span>
            </div>
          </div>

          <CounterDisplay count={count} />

          <div className="mt-4 mb-16">
            <p className="font-label text-sm uppercase tracking-[0.4em] text-primary font-bold">
              {isZero ? 'BAŞLANGIÇ NOKTASI' : 'SAYAÇ AKTİF'}
            </p>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-2 bg-primary"></div>
              <div className="h-1 w-8 bg-surface-container mx-1"></div>
              <div className="h-1 w-2 bg-primary"></div>
            </div>
          </div>

          <CounterControls
            onIncrement={increment}
            onDecrement={decrement}
            onReset={reset}
            canDecrement={canDecrement}
          />

          <div className="mt-12 flex items-center justify-between w-full max-w-lg px-2">
            <div className="flex flex-col items-start">
              <span className="font-label text-[9px] text-slate-600">SİSTEM_GİRİŞİ</span>
              <span className="font-headline text-xs text-on-surface">LOC_TR_EST</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-label text-[9px] text-slate-600">VERİ_AKIŞI</span>
              <span className="font-headline text-xs text-primary">AKTİF</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
