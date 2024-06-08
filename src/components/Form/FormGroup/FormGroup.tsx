import React, { FC } from 'react';
import styles from './FormGroup.module.scss';
interface FormGroupProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ label, error, children }) => {
  return (
    <div className={styles['form-group']}>
      <label className="text-white text-base">{label}</label>
      {children}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormGroup;
