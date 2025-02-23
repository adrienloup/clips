import { createContext, Dispatch } from 'react';
import { initialState } from '@/src/pages/game/Game.state.ts';
import { Action, State } from '@/src/pages/game/Game.type.ts';

export const GameContext = createContext<State>(initialState);
export const GameDispatchContext = createContext<Dispatch<Action>>(() => {});
