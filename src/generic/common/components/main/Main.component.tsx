import { Main } from '@/src/generic/common/components/main/Main.type.ts';
import styles from '@/src/generic/common/components/main/Main.module.scss';

export const MainComponent = ({ children }: Main) => {
  return (
    <main
      className={styles.main}
      role="main"
    >
      {children}
    </main>
  );
};
