import { Link } from 'react-router-dom';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { Button } from '@/src/generic/common/components/button/Button.type.ts';
import styles from '@/src/generic/common/components/button/Button.module.scss';

export const ButtonComponent = ({
  children,
  className,
  href,
  to,
  disabled,
  innerRef,
  onClick,
  ...props
}: Button<HTMLButtonElement & HTMLAnchorElement>) => {
  const link = (
    <Link
      to={to!}
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </Link>
  );

  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </a>
  );

  const button = (
    <button
      type="button"
      ref={innerRef}
      disabled={disabled}
      onClick={onClick}
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </button>
  );

  return href ? a : to ? link : button;
};
