import { FC } from 'react';
import ModalBase from '@/components/UI/Modal/ModalBase/ModalBase';
import FormCreateChat from './FormCreateChat/FormCreateChat';
import { closeCreateChatModal } from '@/store/modal/modalSlice';
import { useAppDispatch } from '@/hooks/redux';
interface CreateChatModalProps {
  isCreateChatModalOpen: boolean;
}

const CreateChatModal: FC<CreateChatModalProps> = ({ isCreateChatModalOpen }) => {
  const dispatch = useAppDispatch();
  return (
    <ModalBase isShowModal={isCreateChatModalOpen} closeModal={() => dispatch(closeCreateChatModal())}>
      <FormCreateChat />
    </ModalBase>
  );
};

export default CreateChatModal;
