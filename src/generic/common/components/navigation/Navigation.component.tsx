import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const NavigationComponent = () => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <Link to={'/clips/summary'}>summary</Link>
      <br />
      <Link to={'/clips/explore'}>explore</Link>
      <br />
      <Link to={'/clips/'}>game</Link>
    </nav>
  );
};
