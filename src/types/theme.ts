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
  blue: {
    name: 'Ocean Blue',
    colors: {
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      primaryLight: 'bg-blue-50',
      secondary: 'bg-blue-100',
      accent: 'bg-blue-500',
      text: 'text-blue-900',
      textLight: 'text-blue-700',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-blue-200',
    },
  },
  green: {
    name: 'Forest Green',
    colors: {
      primary: 'bg-green-600',
      primaryHover: 'hover:bg-green-700',
      primaryLight: 'bg-green-50',
      secondary: 'bg-green-100',
      accent: 'bg-green-500',
      text: 'text-green-900',
      textLight: 'text-green-700',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-green-200',
    },
  },
  purple: {
    name: 'Royal Purple',
    colors: {
      primary: 'bg-purple-600',
      primaryHover: 'hover:bg-purple-700',
      primaryLight: 'bg-purple-50',
      secondary: 'bg-purple-100',
      accent: 'bg-purple-500',
      text: 'text-purple-900',
      textLight: 'text-purple-700',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-purple-200',
    },
  },
  orange: {
    name: 'Sunset Orange',
    colors: {
      primary: 'bg-orange-600',
      primaryHover: 'hover:bg-orange-700',
      primaryLight: 'bg-orange-50',
      secondary: 'bg-orange-100',
      accent: 'bg-orange-500',
      text: 'text-orange-900',
      textLight: 'text-orange-700',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-orange-200',
    },
  },
  red: {
    name: 'Ruby Red',
    colors: {
      primary: 'bg-red-600',
      primaryHover: 'hover:bg-red-700',
      primaryLight: 'bg-red-50',
      secondary: 'bg-red-100',
      accent: 'bg-red-500',
      text: 'text-red-900',
      textLight: 'text-red-700',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-red-200',
    },
  },
  yellow: {
    name: 'Golden Yellow',
    colors: {
      primary: 'bg-yellow-600',
      primaryHover: 'hover:bg-yellow-700',
      primaryLight: 'bg-yellow-50',
      secondary: 'bg-yellow-100',
      accent: 'bg-yellow-500',
      text: 'text-yellow-900',
      textLight: 'text-yellow-700',
      background: 'bg-white',
      surface: 'bg-gray-50',
      border: 'border-yellow-200',
    },
  },
};