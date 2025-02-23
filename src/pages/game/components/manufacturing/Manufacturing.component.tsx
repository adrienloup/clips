import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ManufacturingComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <CardComponent>
      <TitleComponent className={styles.title}>Manufacturing</TitleComponent>
      <DialComponent
        value={game.clipsPerSecond}
        notation="compact"
        label={t('game.clips_per_second')}
      />
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.wiresStock < 1}
          onClick={() => setGame({ type: 'PRODUCE_MANUAL_CLIPS' })}
        >
          Fabriquer
        </ButtonComponent>
        +1
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.wiresCost}
          style="currency"
          label={t('game.wire_cost')}
        />
        <DialComponent
          value={game.wiresStock}
          notation="compact"
          label={t('game.wire_stock')}
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.funds < game.wiresCost}
          onClick={() => setGame({ type: 'BUY_WIRE' })}
        >
          Acheter
        </ButtonComponent>
        <span>
          +
          <NumberComponent
            className={styles.number}
            value={game.wires + game.wiresBonus * game.wires}
            notation="compact"
          />
        </span>
        {game.wiresBonus > 0 ? (
          <BonusComponent
            value={game.wiresBonus}
            style="percent"
          />
        ) : null}
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.autoClippersCost}
          style="currency"
          label="Prix machine"
        />
        <DialComponent
          value={game.autoClippers}
          notation="compact"
          label="Machines"
        />
      </GroupComponent>
      <ButtonComponent
        className={styles.button}
        disabled={game.autoClippersCost > game.funds}
        onClick={() => setGame({ type: 'BUY_AUTOCLIPPERS' })}
      >
        Acheter
      </ButtonComponent>
      {game.operations >= 12e3 && game.megaClippersFeature.show ? (
        <>
          <GroupComponent>
            <DialComponent
              value={game.megaClippersCost}
              style="currency"
              label="Prix mégamachine"
              animate={game.megaClippersFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'megaClippersFeature',
                  show: true,
                  animate: false,
                })
              }
            />
            <DialComponent
              value={game.megaClippers}
              notation="compact"
              label="Mégamachines"
              animate={game.megaClippersFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'megaClippersFeature',
                  show: true,
                  animate: false,
                })
              }
            />
          </GroupComponent>
          <ButtonComponent
            className={styles.button}
            disabled={game.megaClippersCost > game.funds}
            onClick={() => setGame({ type: 'BUY_MEGACLIPPERS' })}
          >
            Acheter
          </ButtonComponent>
        </>
      ) : null}
    </CardComponent>
  );
};
