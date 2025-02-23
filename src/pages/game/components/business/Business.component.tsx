import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const BusinessComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <CardComponent>
      <TitleComponent className={styles.title}>Business</TitleComponent>
      {game.fundsPerSecondFeature.show ? (
        <DialComponent
          value={game.fundsPerSecond}
          style="currency"
          label="Funds per second"
          animate={game.fundsPerSecondFeature.animate}
          onAnimationEnd={() =>
            setGame({
              type: 'UPDATE_FEATURE',
              feature: 'fundsPerSecondFeature',
              show: true,
              animate: false,
            })
          }
        />
      ) : null}
      <DialComponent
        value={game.funds}
        style="currency"
        label="Fonds disponibles"
      />
      <GroupComponent>
        <DialComponent
          value={game.clipsStock}
          notation="compact"
          label="Unsold Inventory"
        />
        <BonusComponent
          value={game.productionBonus}
          style="percent"
        />
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.clipsCost}
          style="currency"
          label="Prix trombone"
        />
        <DialComponent
          value={game.publicDemand}
          style="percent"
          label="Public demand"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.clipsCost === 1}
          onClick={() => setGame({ type: 'INCREASE_CLIPS_COST' })}
        >
          {t('common.button.raise')}
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.clipsCost === 0.1}
          onClick={() => setGame({ type: 'DECREASE_CLIPS_COST' })}
        >
          {t('common.button.lower')}
        </ButtonComponent>
      </GroupComponent>
      {game.clips >= 1e3 && game.marketingFeature.show ? (
        <>
          <GroupComponent>
            <DialComponent
              value={game.marketingCost}
              style="currency"
              label="Prix marketing"
              disabled={game.marketing >= 10}
              animate={game.marketingFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'marketingFeature',
                  show: true,
                  animate: false,
                })
              }
            />
            <DialComponent
              value={game.marketing}
              limit={10}
              notation="compact"
              label="Marketing"
              animate={game.marketingFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'marketingFeature',
                  show: true,
                  animate: false,
                })
              }
            />
          </GroupComponent>
          <ButtonComponent
            className={styles.button}
            disabled={game.marketingCost > game.funds || game.marketing >= 10}
            onClick={() => setGame({ type: 'BUY_MARKETING' })}
          >
            {t('common.button.buy')}
          </ButtonComponent>
        </>
      ) : null}
    </CardComponent>
  );
};
