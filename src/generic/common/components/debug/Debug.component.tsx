import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Debug } from '@/src/generic/common/components/debug/Debug.type';
import styles from '@/src/generic/common/components/debug/Debug.module.scss';

export const DebugComponent = ({ children }: Debug) => {
  const location = useLocation();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const debug =
      location.search.split('=')[0] === '?debug' ? location.search.split('=').pop() : '';

    if (debug === '1') {
      window.localStorage.setItem('_3mma_0_debug', '1');
    } else if (debug === '0') {
      window.localStorage.removeItem('_3mma_0_debug');
    }

    setDisplay(!!window.localStorage.getItem('_3mma_0_debug'));
  }, []);

  return (
    <>
      {display && (
        <div className={styles.debug}>
          <div className={styles.inner}>{children}</div>
        </div>
      )}
    </>
  );
};
