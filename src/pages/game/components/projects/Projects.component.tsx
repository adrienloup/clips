import { useGame, useGameDispatch } from '@/src/pages/game/useGame';
import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { ProjectComponent } from '@/src/pages/game/components/projects/Project.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

/*
  Limerick (10 créativité) (+1 confiance)
  Traitement Lexical (50 créativité) (+1 confiance)
  Combinatoires Harmoniques (100 créativité) (+1 confiance)
  Le Problème Hadwiger (150 creat) (+1 trust)
  La Conjecture Tón Saucisse (200 creat) (+1 trust)
  Donkey Espace (250 creat) (+1 trust)
  Prise de contrôle d'Hostile ($1.000.000) (+1 trust)
  Le Monopoly complet (1.000 yomi, $10M) (+1 trust)
  Cohérente Extrapolée Volition (1000 yomi, 500 creat, 20k ops) (+1 trust)
  Mâle Modèle Calvitie (20.000 ops) (+20 trust)
  Cure pour Cancer (25.000 op) (+10 trust)
  La Paix mondiale (5.000 yomi30.000 Ops) (+12 trust)
  Réchauffement Global (1.500 yomi, 50.000 ops) (+15 trust)
  Un signe de bonne volonté... ($500.000) (+1 trust)
  Un autre Signe de Bonne Volonté.. (+1 trust, répétable jusqu'à Trust 100)
*/

export const ProjectsComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  const onRevTrackerClick = () => {
    setGame({
      type: 'UPDATE_FEATURE',
      feature: 'revTrackerFeature',
      show: false,
      animate: false,
    });
    setGame({
      type: 'UPDATE_FEATURE',
      feature: 'fundsPerSecondFeature',
      show: true,
      animate: true,
    });
    setGame({
      type: 'DECREASE_OPERATIONS',
      operations: 500,
    });
  };

  return (
    <>
      {game.clips >= 2e3 ? (
        <CardComponent>
          <TitleComponent className={styles.title}>Projects</TitleComponent>
          {game.revTrackerFeature.show ? (
            <ProjectComponent
              title="RevTracker"
              text="(500 Operations) Automatically calculates average revenue per second"
              disabled={game.operations < 500}
              animate={game.revTrackerFeature.animate}
              onClick={onRevTrackerClick}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'revTrackerFeature',
                  show: true,
                  animate: false,
                })
              }
            />
          ) : null}
          {game.creativity >= 100e3 && game.driosReInitializationFeature.show ? (
            <ProjectComponent
              title="Drios Re-initialization"
              text="Re-allocate accumulated trust"
              animate={game.driosReInitializationFeature.animate}
              onClick={() => console.log('clicked')}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'driosReInitializationFeature',
                  show: true,
                  animate: false,
                })
              }
            />
          ) : null}
        </CardComponent>
      ) : null}
    </>
  );
};
