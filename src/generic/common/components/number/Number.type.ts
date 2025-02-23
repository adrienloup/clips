export interface Number {
  className?: string;
  value: number;
  limit?: number;
  style?: 'currency' | 'percent';
  notation?: 'compact';
}
