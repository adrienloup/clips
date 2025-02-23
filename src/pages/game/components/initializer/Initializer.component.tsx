import { useCallback, useState } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { initialState } from '@/src/pages/game/Game.state.ts';
import { Initializer } from '@/src/pages/game/components/initializer/Initializer.type.ts';
import styles from '@/src/pages/game/components/initializer/Initializer.module.scss';

const InputField = ({ label, name, value, onChange }: Initializer) => (
  <label>
    {label}&nbsp;
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
    <br />
  </label>
);

export const InitializerComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  const [formState, setFormState] = useState({
    clips: game.clips,
    clipsStock: game.clipsStock,
    funds: game.funds,
    wiresStock: game.wiresStock,
    marketing: game.marketing,
    autoClippers: game.autoClippers,
    megaClippers: game.megaClippers,
    trust: game.trust,
    processors: game.processors,
    memory: game.memory,
    operations: game.operations,
    creativity: game.creativity,
  });

  const handleChange = useCallback(
    (e: { target: { name: string; value: string } }) => {
      const { name, value } = e.target;
      const newValue =
        name === 'marketing' && Number(value) > 10
          ? 10
          : name === 'trust' && Number(value) > 100
            ? 100
            : Number(value);

      setFormState((prev) => ({
        ...prev,
        [name]: newValue,
      }));

      setGame({
        type: 'INITIALIZE_STATE',
        state: {
          ...game,
          [name]: newValue,
        },
      });
    },
    [game, setGame]
  );

  const clearGameLocalItem = () => {
    ['_3mma_0_game', '_3mma_0_notifications'].forEach((k) => localStorage.removeItem(k));
    window.location.reload();
  };

  const clearAllLocalItems = () => {
    localStorage.clear();
    setGame({
      type: 'INITIALIZE_STATE',
      state: initialState,
    });
    window.location.href = 'http://localhost:5173/paperclips/';
  };

  return (
    <div className={styles.initializater}>
      <div>
        <div>Supprimer localStorage :</div>
        <div>
          <button
            type="button"
            onClick={clearGameLocalItem}
          >
            Réinitialiser
          </button>
          <button
            type="button"
            onClick={clearAllLocalItems}
          >
            Tout réinitialiser
          </button>
        </div>
      </div>
      <div>
        <div>
          Bonus de production :
          <br />
          Marketing ({game.marketing}) + Bonus clips ({game.clipsBonus * 100})
          <br />
          {game.marketing / 20} + {game.clipsBonus} = {game.marketing / 20 + game.clipsBonus}
          <br />
          Public ({(game.publicDemand * 100).toFixed(2)}) =&nbsp;
          {game.productionBonus}
        </div>
        <div>
          <button onClick={() => setGame({ type: 'UPDATE_CLIPS_BONUS', bonus: 0 })}>0%</button>
          <button onClick={() => setGame({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.1 })}>10%</button>
          <button onClick={() => setGame({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.2 })}>20%</button>
          <button onClick={() => setGame({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.3 })}>30%</button>
          <button onClick={() => setGame({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.4 })}>40%</button>
          <button onClick={() => setGame({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.5 })}>50%</button>
        </div>
      </div>
      <div>
        <div>Quantité d'achat de fer : {game.wires}</div>
        <div>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 5e2 })}>
            500
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e3 })}>
            1K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 2e3 })}>
            2K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 4e3 })}>
            4K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 8e3 })}>
            8K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e4 })}>
            10K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 2e4 })}>
            20K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 5e4 })}>
            50K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e5 })}>
            100K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 5e5 })}>
            500K
          </button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e6 })}>
            1M
          </button>
        </div>
      </div>
      <div>
        <div>Bonus d'achat de fer : {game.wiresBonus}</div>
        <div>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0 })}>0%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.1 })}>10%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.2 })}>20%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.3 })}>30%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.4 })}>40%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.5 })}>50%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.6 })}>60%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.7 })}>70%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.8 })}>80%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 0.9 })}>90%</button>
          <button onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 1 })}>100%</button>
        </div>
      </div>
      <div>
        <div>
          Trust : {game.trust} {game.trustTransit}
        </div>
        <div>
          <button onClick={() => setGame({ type: 'UPDATE_TRUST', trust: 1 })}>+1</button>
          <button onClick={() => setGame({ type: 'UPDATE_TRUST', trust: 10 })}>+10</button>
        </div>
      </div>
      <div>
        <div>Initiales valeurs :</div>
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          {Object.entries(formState).map(([key, value]) => (
            <InputField
              key={key}
              label={key}
              name={key}
              value={value}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
