import { FC } from 'react';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
import FormCreateChat from './FormCreateChat/FormCreateChat';
import { closeCreateChatModal } from '@/store/modal/modalSlice';
import { useAppDispatch } from '@/hooks/redux';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { t } from 'i18next';
interface CreateChatModalProps {
  isCreateChatModalOpen: boolean;
}


const CreateChatModal: FC<CreateChatModalProps> = ({ isCreateChatModalOpen }) => {
  const dispatch = useAppDispatch();
  const handlerCancel = () => {
    //todo: cler inputs
    dispatch(closeCreateChatModal())
  };
  const createChatButton = (
    <BtnBase
      className="mt-5 text-lg py-2 px-6"
      btnColor={IBtnColors.BlueDark}
      clickBtn={handlerCancel}
      btnText={t('createChat.cancel')}
    />
  );
  return (
    <ModalBase
      isShowModal={isCreateChatModalOpen}
      childrenBtnButtom={createChatButton}
      closeModal={() => dispatch(closeCreateChatModal())}
    >
      <FormCreateChat/>
    </ModalBase>
  );
};

export default CreateChatModal;
