export interface Project {
  title: string;
  text: string;
  animate: boolean;
  disabled?: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
}
