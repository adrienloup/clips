import { useContext } from 'react';
import { HeaderContext } from '@/src/generic/common/components/header/Header.context.ts';

export function useHeader() {
  return useContext(HeaderContext);
}
