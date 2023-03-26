import { useState } from 'react';

import { Book } from '../services';

export function useLocalStorage(key: string, initialValue: Book[]) {
  const [storedValue, setStoredValue] = useState<Book[]>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: Book[] | ((val: Book[]) => Book[])) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  const removeValue = (item: Book) => {
    const idx = storedValue.findIndex((val) => val.title === item.title);

    if (idx > -1) {
      const newStoredValue = storedValue.filter((val) => val.title !== item.title);
      setStoredValue(newStoredValue);
      window.localStorage.setItem(key, JSON.stringify(newStoredValue));      
    }
  };

  return [storedValue, setValue, removeValue] as const;
}
