import { useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

const trusts = [
  { clips: 3e3, trustTransit: 0 },
  { clips: 5e3, trustTransit: 1 },
  { clips: 8e3, trustTransit: 2 },
  { clips: 13e3, trustTransit: 3 },
];

export const ResourcesComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  useEffect(() => {
    trusts.forEach(({ clips, trustTransit }) => {
      if (game.clips >= clips && game.trustTransit === trustTransit) {
        setGame({ type: 'UPDATE_TRUST', trust: 0 });
      }
    });
  }, [game.clips, game.trustTransit]);

  return (
    <>
      {game.clips >= 2e3 && game.resourcesFeature.show ? (
        <CardComponent>
          <TitleComponent className={styles.title}>IT Resources</TitleComponent>
          <GroupComponent>
            <DialComponent
              value={game.trust}
              limit={100}
              notation="compact"
              label="Trust"
              animate={game.resourcesFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'resourcesFeature',
                  show: true,
                  animate: false,
                })
              }
            />
            <div className={styles.text}>
              +1 at&nbsp;
              <NumberComponent
                className={styles.number}
                value={game.trustCost}
                notation="compact"
              />
              &nbsp;Clips
            </div>
          </GroupComponent>
          <DialComponent
            value={game.processors}
            notation="compact"
            label="Processors"
            animate={game.resourcesFeature.animate}
            onAnimationEnd={() =>
              setGame({
                type: 'UPDATE_FEATURE',
                feature: 'resourcesFeature',
                show: true,
                animate: false,
              })
            }
          />
          <ButtonComponent
            className={styles.button}
            disabled={game.processors + game.memory >= game.trust}
            onClick={() => setGame({ type: 'INCREASE_PROCESSORS' })}
          >
            Créer
          </ButtonComponent>
          <DialComponent
            value={game.memory}
            notation="compact"
            label="Memory"
            animate={game.resourcesFeature.animate}
            onAnimationEnd={() =>
              setGame({
                type: 'UPDATE_FEATURE',
                feature: 'resourcesFeature',
                show: true,
                animate: false,
              })
            }
          />
          <ButtonComponent
            className={styles.button}
            disabled={game.memory + game.processors >= game.trust}
            onClick={() => setGame({ type: 'INCREASE_MEMORY' })}
          >
            Créer
          </ButtonComponent>
          <GroupComponent>
            <DialComponent
              value={game.operations}
              limit={game.operationsLimit}
              notation="compact"
              label="Operations"
              animate={game.resourcesFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'resourcesFeature',
                  show: true,
                  animate: false,
                })
              }
            />
            <DialComponent
              value={game.creativity}
              notation="compact"
              label="Creativity"
              animate={game.resourcesFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'resourcesFeature',
                  show: true,
                  animate: false,
                })
              }
            />
          </GroupComponent>
        </CardComponent>
      ) : null}
    </>
  );
};
