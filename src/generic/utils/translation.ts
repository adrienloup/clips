import { Resource, ResourceKey, ResourceLanguage } from 'i18next';
import { Translations } from '@/src/generic/types/Translation.type.ts';

const languages = ([key, value]: [string, ResourceKey]): [
  string,
  ResourceLanguage,
] => [
  key,
  {
    translation: value,
  },
];

const merge = (translations: Translations[]): Translations =>
  translations
    .flatMap((translations) => Object.entries(translations))
    .reduce(
      (prev, [key, translation]) => ({
        ...prev,
        [key]: prev[key] ? { ...prev[key], ...translation } : translation,
      }),
      {} as Translations
    );

export const translation = (...translations: Translations[]): Resource =>
  Object.entries(merge(translations))
    .map(languages)
    .reduce(
      (prev, current) => ({
        ...prev,
        [current[0]]: current[1],
      }),
      {}
    );
