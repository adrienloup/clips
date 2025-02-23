import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/pages/game/components/clips/Clips.module.scss';

export const ClipsComponent = () => {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <TitleComponent
      tag={'h1'}
      className={styles.clips}
    >
      <IconComponent
        icon="attach_file"
        arial-label={t('game.title')}
      />
      <NumberComponent value={game.clips} />
    </TitleComponent>
  );
};
