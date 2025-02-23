import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const NavigationComponent = () => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <Link to={'/paperclips/summary'}>summary</Link>
      <br />
      <Link to={'/paperclips/explore'}>explore</Link>
      <br />
      <Link to={'/paperclips/'}>game</Link>
    </nav>
  );
};
