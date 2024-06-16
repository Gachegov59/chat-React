import { FC, ReactNode } from 'react';
import styles from './BtnBase.module.scss';
import { IBtnColors } from './IBtn';

interface BtnBaseProps {
  btnText: string;
  btnColor: IBtnColors;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  clickBtn?: () => void;
}

const BtnBase: FC<BtnBaseProps> = ({
  className = '',
  btnText,
  btnColor = IBtnColors.Blue,
  children,
  clickBtn,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} className={`${styles.button} ${className} ${styles[btnColor]}`} onClick={clickBtn}>
      {children || btnText}
    </button>
  );
};

export default BtnBase;
