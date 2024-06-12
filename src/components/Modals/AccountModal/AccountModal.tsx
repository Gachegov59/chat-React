import { FC } from 'react';
// import styles from './AuthModal.module.scss';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
import LanSwitcher from '@/components/LanSwitcher/LanSwitcher';
import { useTranslation } from 'react-i18next';
import Settings from './Settings/Settings';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { useAppDispatch } from '@/hooks/redux';
import { logout } from '@/store/auth/authActions';
import languages from '@/components/LanSwitcher/types';
interface AccountModalProps {
  isShowAccountModal: boolean;
  closeAccountModal: () => void;
}

// interface User {
//   name: string;
//   surname: string;
//   nickname: string;
// }
export const oldFunc = () => {};
const AccountModal: FC<AccountModalProps> = ({
  isShowAccountModal: isShowAuthModal,
  closeAccountModal: closeAuthModal,
}) => {

  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  
  const changeLanguage = (lan: languages) => {
    console.log('🚀 ~ changeLanguage ~ event.target.value:', lan);
    i18n.changeLanguage(lan);
  };
  
  return (
    <ModalBase isShowModal={isShowAuthModal} closeModal={closeAuthModal}>
      <LanSwitcher classNames='ml-auto inline-block mb-4' changeLanguage={(e) => changeLanguage(e)} />
      <Settings/>
      <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => dispatch(logout())} btnText="Logout" />
    </ModalBase>
  );
};

export default AccountModal;
