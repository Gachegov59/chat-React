import { FC, useEffect, useState } from 'react';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
import { t } from 'i18next';
import React from 'react';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { closeConfirmationModal } from '@/store/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import { deleteRoom, getRoomsForUser } from '@/store/room/roomActions';
import { clearActiveRoom } from '@/store/room/roomSlice';
interface ConfirmationModalProps {
  isShowModal: boolean;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({ isShowModal }) => {
  const { activeRoom } = useAppSelector((state) => state.room);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (user.id && activeRoom) {
      // dispatch(deleteRoom({ roomId: activeRoom._id, userId: user._id }));
      // dispatch(closeConfirmationModal());
      dispatch(deleteRoom({ roomId: activeRoom?._id, userId: user.id }))
        .unwrap()
        .then(() => {
          dispatch(clearActiveRoom());
          dispatch(getRoomsForUser(user.id));
        });
      dispatch(closeConfirmationModal());
    }
  };

  const buttomButtons = (
    <div>
      <BtnBase
        className="mt-5 text-lg py- px-6 self-end"
        btnColor={IBtnColors.BlueDark}
        clickBtn={handleDelete}
        btnText={t('btns.delete')}
      />
      <BtnBase
        className="mt-5 text-lg py- px-6 self-end"
        btnColor={IBtnColors.BlueDark}
        clickBtn={() => dispatch(closeConfirmationModal())}
        btnText={t('btns.cancel')}
      />
    </div>
  );
  return (
    <ModalBase
      isShowModal={isShowModal}
      childrenBtnButtom={buttomButtons}
      closeModal={() => dispatch(closeConfirmationModal())}
    >
      <Title size={TitleSize.H1} className="text-base sm:text-xl lg:text-2xl p-0 lg:p-4">
        <span className="text-light-blue">{t('ChatView.confirmation-delete-room')} </span>
        <p>{activeRoom?.name}</p>
      </Title>
    </ModalBase>
  );
};

export default ConfirmationModal;
