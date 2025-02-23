import { useEffect, useState } from 'react';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { Loader } from '@/src/generic/common/components/loader/Loader.type.ts';
import styles from '@/src/generic/common/components/loader/Loader.module.scss';

export const LoaderComponent = ({
  className,
  duration = 1e3,
  size = 'large',
  ...props
}: Loader) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 100) return;

    const interval: NodeJS.Timeout = setInterval(
      () => setCount((count: number) => count + 1),
      duration / 200
    );

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className={classNames([styles.loader, styles[size], className])}
      style={
        {
          '--duration': `${duration}ms`,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className={styles.label}>{count}%</span>
    </div>
  );
};
