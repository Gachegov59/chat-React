import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openConfirmationModal } from '@/store/modal/modalSlice';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import styles from './ChatControls.module.scss';

interface ChatControlsProps {
  setIsShowInviteModal: (show: boolean) => void;
}

const ChatControls: FC<ChatControlsProps> = ({ setIsShowInviteModal }) => {
  const { i18n } = useTranslation();
  const { activeRoom } = useAppSelector((state) => state.room);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleOpenConfirmationModal = () => {
    dispatch(openConfirmationModal());
  };

  return (
    <div className={styles['chat-controls']}>
      {user?.id === activeRoom?.creator && (
        <>
          <BtnBase
            btnText={i18n.t('ChatView.invite')}
            btnColor={IBtnColors.Blue}
            className="mx-1 bg-gray-800 outline outline-1 outline-teal-50"
            clickBtn={() => setIsShowInviteModal(true)}
          />
          <BtnBase
            btnText={i18n.t('ChatView.delete')}
            className="mx-1 bg-rose-950 outline outline-1 outline-teal-50"
            btnColor={IBtnColors.Blue}
            clickBtn={handleOpenConfirmationModal}
          />
        </>
      )}
      <BtnBase
        btnText={i18n.t('ChatView.leave')}
        className="mx-1 bg-gray-800 outline outline-1 outline-teal-50"
        btnColor={IBtnColors.Blue}
        clickBtn={() => setIsShowInviteModal(true)}
      />
    </div>
  );
};

export default ChatControls;
