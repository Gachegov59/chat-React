import { FC } from 'react';
import styles from './FormSwitcher.module.scss';
import { t } from 'i18next';

interface FormSwitcherProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const FormSwitcher: FC<FormSwitcherProps> = ({ isLogin, setIsLogin }) => {
  return (
    <div className={styles['form-switcher']}>
      <button
        className={`${styles['switch-button']} ${isLogin ? styles['active'] : ''}`}
        onClick={() => setIsLogin(true)}
      >
        {t('Login')}
      </button>
      <button
        className={`${styles['switch-button']} ${!isLogin ? styles['active'] : ''}`}
        onClick={() => setIsLogin(false)}
      >
        {t('Register')}
      </button>
    </div>
  );
};

export default FormSwitcher;
