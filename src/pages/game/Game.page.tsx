import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { LayoutComponent } from '@/src/generic/common/components/layout/Layout.component.tsx';
import styles from '@/src/pages/game/Game.module.scss';

const DashboardComponent = lazy(() =>
  fallback(import('./components/dashboard/Dashboard.component'), 1e3)
);

function GamePage() {
  const { t } = useTranslation();

  useTitle(t('game.title'));

  return (
    <Suspense
      fallback={
        <LoaderComponent
          className={styles.loader}
          aria-label={t('game.loading')}
          duration={1e3}
        />
      }
    >
      <LayoutComponent>
        <DashboardComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default GamePage;
