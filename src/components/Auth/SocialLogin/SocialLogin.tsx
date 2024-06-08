import { FC } from 'react';
import styles from './SocialLogin.module.scss';
import { t } from 'i18next';

const SocialLogin: FC = () => {
  return (
    <div className={styles['social-login']}>
      <button disabled className={`${styles['social-button']} ${styles['google-login']}`}>
        {t('Login with Google')}
      </button>
      <button disabled className={`${styles['social-button']} ${styles['facebook-login']}`}>
        {t('Login with Facebook')}
      </button>
    </div>
  );
};

export default SocialLogin;
