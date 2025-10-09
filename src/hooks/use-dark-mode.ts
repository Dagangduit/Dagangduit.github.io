import { createContext, useEffect, useState } from 'react';

export const DarkModeValueContext = createContext(false);

export default function useDarkMode() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    const stored = localStorage.getItem('dark-mode-enabled');
    return stored ? JSON.parse(stored) : true; // Default to dark mode
  });

  useEffect(() => {
    localStorage.setItem('dark-mode-enabled', JSON.stringify(enabled));
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [enabled]);

  return [enabled, setEnabled] as const;
}
