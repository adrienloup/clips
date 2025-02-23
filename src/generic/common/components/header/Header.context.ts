import { createContext, Dispatch } from 'react';

export const HeaderContext = createContext<[boolean, Dispatch<boolean>]>([
  false,
  () => {},
]);
