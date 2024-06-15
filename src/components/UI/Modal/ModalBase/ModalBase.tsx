import { FC, ReactNode } from 'react';
import styles from './ModalBase.module.scss';
import CloseButton from '@/assets/svg/close-button';

interface ModalBaseProps {
  isShowModal: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const ModalBase: FC<ModalBaseProps> = ({ isShowModal, closeModal, children }) => {
  if (!isShowModal) return null;

  return (
    <div className={styles['modal-wrap']}>
      <div className={styles['modal-overlay']} onClick={closeModal} />
      <div className={styles.modal}>
        <div className={styles['modal__close']} onClick={closeModal}>
          <CloseButton />
        </div>
        <div className={styles['modal__container']}>{children}</div>
      </div>
    </div>
  );
};

export default ModalBase;
