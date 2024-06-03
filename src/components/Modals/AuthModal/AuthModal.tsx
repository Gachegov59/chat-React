import { FC, useState } from 'react';
import styles from './AuthModal.module.scss';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
import InputBase from '@/components/UI/Input/InputBase/InputBase';
import { IInputColors } from '@/components/UI/Input/IInput';
interface AuthModalProps {
  isShowAuthModal: boolean;
  closeAuthModal: () => void;
}

interface User {
  name: string;
  surname: string;
  nickname: string;
}
/**
 * @deprecated The component is deprecated
 */
export const oldFunc = () => {}
const AuthModal: FC<AuthModalProps> = ({ isShowAuthModal, closeAuthModal }) => {
  const [user, setUser] = useState<User>({ name: '', surname: '', nickname: '' });
  const handleInputChange = (fieldName: keyof User) => (value: string) => {
    console.log("🚀 ~ handleInputChange ~ value:", value)
    console.log("🚀 ~ handleInputChange ~ fieldName:", fieldName)
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value.trim(),
    }));
  };

  return (
    <ModalBase isShowModal={isShowAuthModal} closeModal={closeAuthModal}>
      <div className={styles['auth-modal']}>
        <div className={styles['auth-modal__container']}>
          <div className={styles['auth-modal__circle']}>
            <div className={styles['auth-modal__logo']} />
          </div>
          <div className={styles['auth-modal__title']}>Авторизация</div>
          <div className={styles['auth-modal__text']}>Введите пожалуйста своё фио и ник для дальнейшей авторизации</div>
          <form className={styles['auth-modal__form']}>
            <div className={styles['auth-modal__input']}>
              <InputBase
                placeholder="Введите имя"
                color={IInputColors.grey}
                onInputChange={handleInputChange('name')}
              />
              <p className="auth-modal__input-error"></p>
            </div>
            <div className="auth-modal__input">
              <InputBase
                placeholder="Введите фамилию"
                color={IInputColors.grey}
                onInputChange={handleInputChange('surname')}
              />
              <p className={styles['auth-modal__input-error']}></p>
            </div>
            <div className={styles['auth-modal__input']}>
              <InputBase
                placeholder="Введите псевдоним"
                color={IInputColors.grey}
                onInputChange={handleInputChange('nickname')}
              />
              <p className={styles['auth-modal__input-error']}></p>
            </div>
          </form>
        </div>
      </div>
    </ModalBase>
  );
};

export default AuthModal;
