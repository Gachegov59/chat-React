import { useState, useEffect, FC } from 'react';
import styles from './BtnBurger.module.scss';

interface BtnBurgerProps {
  btnColor?: string;
  parentState?: boolean;
  clickBtn: () => void;
}

const BtnBurger: FC<BtnBurgerProps> = ({ btnColor = 'grey', parentState = null, clickBtn }) => {
  const [isButtonBurgerActive, setIsButtonBurgerActive] = useState<boolean>(false);
  const [propParentState, setPropParentState] = useState<boolean | null>(parentState);

  useEffect(() => {
    setPropParentState(parentState);
  }, [parentState]);

  const btnState = propParentState !== null ? propParentState : isButtonBurgerActive;

  const handleClick = () => {
    setIsButtonBurgerActive(!isButtonBurgerActive);
    clickBtn();
  };

  return (
    <button
      className={`${styles['btn-burger']} ${btnState ? styles._isActive : ''} ${btnColor}`}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <span className={styles['btn-burger__line-top']}></span>
      <span className={styles['btn-burger__line-middle']}></span>
      <span className={styles['btn-burger__line-bottom']}></span>
    </button>
  );
};

export default BtnBurger;
