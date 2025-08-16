import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, themes } from '../types/theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  currentThemeName: string;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [currentThemeName, setCurrentThemeName] = useState('dark');
  
  // Function to get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Effect to handle theme changes and system preference
  useEffect(() => {
    const applyTheme = (theme: 'light' | 'dark') => {
      setCurrentThemeName(theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (themeMode === 'system') {
      const systemTheme = getSystemTheme();
      applyTheme(systemTheme);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (themeMode === 'system') {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      applyTheme(themeMode);
    }
  }, [themeMode]);

  const currentTheme = themes[currentThemeName];

  const setTheme = (themeName: string) => {
    if (themeName === 'light' || themeName === 'dark') {
      setThemeMode(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme, 
      currentThemeName, 
      themeMode, 
      setThemeMode 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};