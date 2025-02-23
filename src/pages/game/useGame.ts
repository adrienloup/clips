import { useContext } from 'react';
import { GameContext, GameDispatchContext } from '@/src/pages/game/Game.context.ts';

export function useGame() {
  return useContext(GameContext);
}
export function useGameDispatch() {
  return useContext(GameDispatchContext);
}
