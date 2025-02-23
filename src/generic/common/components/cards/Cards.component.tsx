import { classNames } from '@/src/generic/utils/classNames';
import { Cards } from '@/src/generic/common/components/cards/Cards.type';
import styles from '@/src/generic/common/components/cards/Cards.module.scss';

export const CardsComponent = ({ children, className }: Cards) => {
  return (
    <div className={classNames([styles.cards, className])}>{children}</div>
  );
};
