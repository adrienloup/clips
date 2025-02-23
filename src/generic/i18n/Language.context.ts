import { createContext, Dispatch } from 'react';
import { Language } from '@/src/generic/i18n/Language.type.ts';

export const LanguageContext = createContext<[Language, Dispatch<Language>]>([
  'en',
  () => {},
]);
