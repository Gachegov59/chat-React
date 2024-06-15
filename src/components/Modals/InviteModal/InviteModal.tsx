import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
import { useAppSelector } from '@/hooks/redux';
import { IUser } from '@/interfaces/IUser';
import UserService from '@/services/UserService';
import { FC, useEffect, useState } from 'react';
import styles from './InviteModal.module.scss';
import { t } from 'i18next';
interface InviteModalProps {
  chat: any;
  isShowInviteModal: boolean;
  closeInviteModal: () => void;
}

const invite = () => {
  console.log(invite);
};

const InviteModal: FC<InviteModalProps> = ({ chat, isShowInviteModal, closeInviteModal }) => {
  const [users, setUsers] = useState<(Pick<IUser, 'firstName' | 'lastName'> & { _id: string })[]>([]);

  const { isAuth, isLoading } = useAppSelector((state) => state.auth);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getUsers();
  });
  return (
    <ModalBase isShowModal={isShowInviteModal} closeModal={closeInviteModal}>
      <div className={styles['invite-modal']}>
        <div className={styles['invite-modal__container']}>
          {isAuth ? (
            <div className={`${styles['invite-modal__users']} scroll`}>
              {users.map((user) => (
                <div key={user._id}>
                  {user.firstName} {user.lastName}
                </div>
              ))}
            </div>
          ) : (
            isLoading && <LoaderSpinner size={100}></LoaderSpinner>
          )}
          <BtnBase
            className="mt-5 text-lg py- px-6 self-end"
            btnColor={IBtnColors.BlueDark}
            clickBtn={() => invite}
            btnText={t('ChatView.invite')}
          />
        </div>
      </div>
    </ModalBase>
  );
};

export default InviteModal;
