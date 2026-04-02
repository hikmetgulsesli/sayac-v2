import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should initialize with 0 when no saved value exists', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should load saved value from localStorage', () => {
    localStorage.setItem('sayac-v2-counter-value', '42');
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(42);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.decrement();
    });
    expect(result.current.count).toBe(1);
  });

  it('should reset count to 0', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });

  it('should save count to localStorage', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(localStorage.getItem('sayac-v2-counter-value')).toBe('1');
  });

  it('should detect when decrement is not possible at 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.canDecrement).toBe(false);
  });

  it('should detect when decrement is possible above 0', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.canDecrement).toBe(true);
  });

  it('should handle invalid localStorage values gracefully', () => {
    localStorage.setItem('sayac-v2-counter-value', 'invalid');
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
});
