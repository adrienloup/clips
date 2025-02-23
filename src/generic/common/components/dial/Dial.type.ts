import { Number } from '@/src/generic/common/components/number/Number.type';

export interface Dial extends Number {
  label: string;
  disabled?: boolean;
  animate?: boolean;
  onAnimationEnd?: () => void;
}
