import { HTMLProps } from 'react';
import { Children } from '@/src/generic/types/Children.type';

export interface Title extends HTMLProps<HTMLElement> {
  children: Children;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
