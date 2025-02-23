import { classNames } from '@/src/generic/utils/classNames';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component';
import { Project } from '@/src/pages/game/components/projects/Project.type';
import styles from '@/src/pages/game/components/projects/Project.module.scss';

export const ProjectComponent = ({
  title,
  text,
  animate,
  disabled,
  onClick,
  onAnimationEnd,
}: Project) => {
  return (
    <ButtonComponent
      className={classNames([styles.project, animate ? styles.animate : ''])}
      disabled={disabled}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd!}
    >
      <IconComponent
        className={styles.icon}
        icon="error_med"
      />
      <span>
        {title} <span>{text}</span>
      </span>
    </ButtonComponent>
  );
};
