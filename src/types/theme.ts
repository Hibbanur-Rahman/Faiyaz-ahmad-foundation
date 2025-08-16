export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    text: string;
    textLight: string;
    background: string;
    surface: string;
    border: string;
  };
}

export const themes: Record<string, Theme> = {
  light: {
    name: 'Light Mode',
    colors: {
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      primaryLight: 'bg-blue-50',
      secondary: 'bg-[#f6851f]',
      accent: 'bg-blue-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-gray-200',
    },
  },
  dark: {
    name: 'Dark Mode',
    colors: {
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      primaryLight: 'bg-blue-900/20',
      secondary: 'bg-[#f6851f]',
      accent: 'bg-blue-500',
      text: 'text-white',
      textLight: 'text-gray-300',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      border: 'border-gray-700',
    },
  },
};