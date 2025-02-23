import { classNames } from '@/src/generic/utils/classNames';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import { Bonus } from '@/src/generic/common/components/bonus/Bonus.type';
import styles from '@/src/generic/common/components/bonus/Bonus.module.scss';

export const BonusComponent = ({ className, value, style }: Bonus) => {
  return (
    <div className={classNames([styles.bonus, className])}>
      +
      <NumberComponent
        value={value}
        style={style}
      />
    </div>
  );
};
