import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { gameReducer } from '@/src/pages/game/Game.reducer.ts';
import {
  GameContext,
  GameDispatchContext,
} from '@/src/pages/game/Game.context.ts';
import { initialState } from '@/src/pages/game/Game.state.ts';
import { State } from '@/src/pages/game/Game.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function GameProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>(
    '_3mma_0_game',
    initialState
  );
  const [game, setGame] = useReducer(gameReducer, state);

  const update = useCallback(() => {
    setState(game);
  }, [game, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={setGame}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
