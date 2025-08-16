import React from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { themes } from '../types/theme';

export const ThemeSelector: React.FC = () => {
  const { currentThemeName, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const themeColors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
        aria-label="Change theme"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border p-2 min-w-[160px] z-50">
          <div className="text-sm font-medium text-gray-700 mb-2 px-2">Choose Theme</div>
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                setTheme(key);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
            >
              <div className={`w-4 h-4 rounded-full ${themeColors[key as keyof typeof themeColors]}`} />
              <span className="flex-1 text-left">{theme.name}</span>
              {currentThemeName === key && (
                <Check className="w-4 h-4 text-green-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};