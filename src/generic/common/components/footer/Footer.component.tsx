import { version } from '@/package.json';
import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/footer/Footer.module.scss';

export const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      <ButtonComponent
        className={styles.button}
        href="https://github.com/adrienloup/clips"
      >
        {t('common.copy', { version: version })}
      </ButtonComponent>
    </footer>
  );
};
