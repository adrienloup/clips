import { createContext, Dispatch } from 'react';
import { Theme } from '@/src/generic/theme/Theme.type.ts';

export const ThemeContext = createContext<[Theme, Dispatch<Theme>]>([
  'system',
  () => {},
]);
