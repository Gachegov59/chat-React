import { FC, ReactNode } from 'react';
import styles from './FormGroup.module.scss';
interface FormGroupProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ label, error, children }) => {
  return (
    <div className={styles['form-group']}>
      <label className="text-white">{label}</label>
      {children}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormGroup;
