import { FC } from 'react';
// import styles from './AuthModal.module.scss';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
interface AccountModalProps {
  isShowAccountModal: boolean;
  closeAccountModal: () => void;
}

// interface User {
//   name: string;
//   surname: string;
//   nickname: string;
// }
export const oldFunc = () => {}
const AccountModal: FC<AccountModalProps> = ({ isShowAccountModal: isShowAuthModal, closeAccountModal: closeAuthModal }) => {
  // const [setUser] = useState<User>({ name: '', surname: '', nickname: '' });
  // const handleInputChange = (fieldName: keyof User) => (value: string) => {
  //   console.log("🚀 ~ handleInputChange ~ value:", value)
  //   console.log("🚀 ~ handleInputChange ~ fieldName:", fieldName)
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     [fieldName]: value.trim(),
  //   }));
  // };

  return (
    <ModalBase isShowModal={isShowAuthModal} closeModal={closeAuthModal}>
      <h1> hi</h1>
    </ModalBase>
  );
};

export default AccountModal;
