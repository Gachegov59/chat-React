import { FC, ReactNode } from 'react';
import styles from './FormGroup.module.scss';
import { t } from 'i18next';
interface FormGroupProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ label, error, children }) => {
  return (
    <div className={styles['form-group']}>
      <div className={`${styles['form-group__container']} ${error ? styles['_error'] : ''}`}>
        <label className="text-white">{label}</label>
        {children}
      </div>
      <div className={styles['form-group__error']}>{error && <p>{t(error)}</p>}</div>
    </div>
  );
};

export default FormGroup;
