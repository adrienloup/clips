import { Children } from '@/src/generic/types/Children.type';
import { HTMLProps } from 'react';

export interface Card extends HTMLProps<HTMLDivElement> {
  children: Children;
}
