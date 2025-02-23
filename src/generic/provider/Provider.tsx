import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from 'react';

import { Children } from '@/src/generic/types/Children.type.ts';
import { LanguageProvider } from '@/src/generic/i18n/Language.provider.tsx';
import { HeaderProvider } from '@/src/generic/common/components/header/Header.provider.tsx';
import { ThemeProvider } from '@/src/generic/theme/Theme.provider.tsx';

type ProvidersType = [
  ComponentType<{ children: Children }>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const allProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>
  );

export const Provider: FunctionComponent<{ children: Children }> = allProviders(
  [[LanguageProvider], [HeaderProvider], [ThemeProvider]]
);
