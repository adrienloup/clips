import { useContext } from 'react';
import { LanguageContext } from '@/src/generic/i18n/Language.context.ts';

export function useLanguage() {
  return useContext(LanguageContext);
}
