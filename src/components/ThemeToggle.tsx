import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

type ThemeMode = 'light' | 'dark' | 'system';

export const ThemeToggle: React.FC = () => {
  const { themeMode, setThemeMode, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { mode: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { mode: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
  ];

  const currentOption = themeOptions.find(option => option.mode === themeMode);

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 ${currentTheme.colors.surface} rounded-lg ${currentTheme.colors.text} hover:${currentTheme.colors.primaryLight} transition-colors border ${currentTheme.colors.border}`}
        aria-label="Toggle theme"
      >
        {currentOption?.icon}
        <span className="hidden sm:inline text-sm">{currentOption?.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 ${currentTheme.colors.surface} rounded-lg shadow-xl border ${currentTheme.colors.border} min-w-[140px] z-50 overflow-hidden`}>
          {themeOptions.map((option) => (
            <button
              key={option.mode}
              onClick={() => handleThemeChange(option.mode)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm ${currentTheme.colors.text} hover:${currentTheme.colors.primaryLight} transition-colors ${
                themeMode === option.mode ? currentTheme.colors.primaryLight : ''
              }`}
            >
              {option.icon}
              <span className="flex-1 text-left">{option.label}</span>
              {themeMode === option.mode && (
                <div className={`w-2 h-2 rounded-full ${currentTheme.colors.primary.replace('bg-', 'bg-')}`} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
