import { useState } from 'react';

export function useLocalStorage<V>(
  key: string,
  initialValue: V
): [V, (v: V) => void] {
  const localValue = () => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? '') as V;
    } catch {
      return initialValue;
    }
  };

  const [value, setNewValue] = useState(localValue);

  const setValue = (newValue: V) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setNewValue(newValue);
  };

  return [value, setValue];
}
