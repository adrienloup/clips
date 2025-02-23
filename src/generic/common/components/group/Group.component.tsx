import { classNames } from '@/src/generic/utils/classNames';
import { Group } from '@/src/generic/common/components/group/Group.type';
import styles from '@/src/generic/common/components/group/Group.module.scss';

export const GroupComponent = ({ children, className, direction = 'row' }: Group) => {
  return <div className={classNames([styles.group, className, styles[direction]])}>{children}</div>;
};
