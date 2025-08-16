import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme, themes } from '../types/theme';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  currentThemeName: string;
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
  const [currentThemeName, setCurrentThemeName] = useState('blue');
  const currentTheme = themes[currentThemeName];

  const setTheme = (themeName: string) => {
    setCurrentThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, currentThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};