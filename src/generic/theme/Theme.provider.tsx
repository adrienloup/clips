import { useCallback, useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { ThemeContext } from '@/src/generic/theme/Theme.context.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
import { Theme } from '@/src/generic/theme/Theme.type.ts';

export function ThemeProvider({ children }: { children: Children }) {
  const [theme, setTheme] = useLocalStorage<Theme>('_3mma_0_theme', 'system');

  const updateTheme = useCallback(
    (newTheme: Theme) => {
      if (newTheme === 'dark' || newTheme === 'system') {
        document.body.classList.add('_dark_3mma_0_');
      } else {
        document.body.classList.remove('_dark_3mma_0_');
      }
      setTheme(newTheme);
    },
    [setTheme]
  );

  useEffect(() => {
    if (theme === 'system') {
      updateTheme(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    } else {
      updateTheme(theme);
    }

    const changeTheme = (event: { matches: boolean }) => {
      updateTheme(event.matches ? 'dark' : 'light');
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', changeTheme);

    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', changeTheme);
  }, []);

  const handleThemeChange = useCallback(
    (newTheme: Theme) => {
      updateTheme(newTheme);
    },
    [updateTheme]
  );

  return (
    <ThemeContext.Provider value={[theme, handleThemeChange]}>
      {children}
    </ThemeContext.Provider>
  );
}
