import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'sayac-v2-counter-value';

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  canDecrement: boolean;
  error: string | null;
  clearError: () => void;
}

export function useCounter(): UseCounterReturn {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [storageAvailable, setStorageAvailable] = useState<boolean>(true);

  // Check localStorage availability
  useEffect(() => {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      setStorageAvailable(true);
    } catch (e) {
      setStorageAvailable(false);
      setError('Tarayıcı depolama erişimi engellendi. Lütfen gizli modu kapatın veya izinleri kontrol edin.');
    }
  }, []);

  // Load initial value from localStorage
  useEffect(() => {
    if (!storageAvailable) return;
    
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed)) {
          setCount(parsed);
        }
      }
    } catch (e) {
      setError('Depolama alanından veri okunamadı.');
    }
  }, [storageAvailable]);

  // Save to localStorage whenever count changes
  useEffect(() => {
    if (!storageAvailable) return;
    
    try {
      localStorage.setItem(STORAGE_KEY, count.toString());
    } catch (e) {
      setError('Depolama alanına veri yazılamadı.');
    }
  }, [count, storageAvailable]);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    canDecrement: count > 0,
    error,
    clearError,
  };
}
