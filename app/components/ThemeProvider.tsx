'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type ThemeContextType = {
  isLight: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsLight((prev) => {
      const nextLight = !prev;
      requestAnimationFrame(() => {
        if (nextLight) {
          document.documentElement.classList.add('light');
          document.documentElement.setAttribute('data-theme', 'light');
        } else {
          document.documentElement.classList.remove('light');
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      });
      return nextLight;
    });
  }, []);

  return (
    <ThemeContext value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}
