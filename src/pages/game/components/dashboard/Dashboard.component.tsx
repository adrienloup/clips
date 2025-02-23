import { useCallback, useEffect, useRef } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { ClipsComponent } from '@/src/pages/game/components/clips/Clips.component.tsx';
import { CardsComponent } from '@/src/generic/common/components/cards/Cards.component.tsx';
import { ManufacturingComponent } from '@/src/pages/game/components/manufacturing/Manufacturing.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { InitializerComponent } from '@/src/pages/game/components/initializer/Initializer.component.tsx';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component.tsx';
import { BusinessComponent } from '@/src/pages/game/components/business/Business.component.tsx';
import { ResourcesComponent } from '@/src/pages/game/components/resources/Resources.component.tsx';
import { ProjectsComponent } from '@/src/pages/game/components/projects/Projects.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setGame = useGameDispatch();
  const game = useGame();
  const gameRef = useRef(game);

  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  // SELL_CLIPS
  const sellClips = useCallback(() => {
    const { clipsTransit } = gameRef.current;
    if (clipsTransit > 0) {
      setGame({ type: 'SELL_CLIPS' });
    }
  }, []);

  // PRODUCE_AUTOMATIC_CLIPS, UPDATE_PER_SECOND
  const updatePerSecond = useCallback(() => {
    const { autoClippers, megaClippers, wiresStock } = gameRef.current;
    if ((autoClippers > 0 || megaClippers > 0) && wiresStock > 0) {
      setGame({ type: 'PRODUCE_AUTOMATIC_CLIPS' });
    }
    setGame({ type: 'UPDATE_PER_SECOND' });
  }, []);

  // UPDATE_WIRE_COST
  const updateWireCost = useCallback(() => {
    setGame({ type: 'UPDATE_WIRE_COST' });
  }, []);

  useInterval(sellClips, 4e2);
  useInterval(updatePerSecond, 1e3);
  useInterval(updateWireCost, 1e4);

  return (
    <>
      <DebugComponent>
        <InitializerComponent />
      </DebugComponent>
      <article className={styles.dashboard}>
        <ClipsComponent />
        <CardsComponent>
          <ManufacturingComponent />
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          {/*<ManufacturingComponent />*/}
          {/*<BusinessComponent />*/}
          {/*<ResourcesComponent />*/}
          {/*<ProjectsComponent />*/}
        </CardsComponent>
      </article>
    </>
  );
}

export default DashboardComponent;
