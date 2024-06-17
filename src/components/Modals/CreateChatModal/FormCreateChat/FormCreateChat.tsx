import Form from '@/components/Form/Form';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FormCreateChatFields } from './FormCreateChatConfig';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { createRoom, getRoomsForUser } from '@/store/room/roomActions';
import { closeCreateChatModal } from '@/store/modal/modalSlice';
import { setActiveRoom } from '@/store/room/roomSlice';
import { Room } from '@/models/Room';

interface FormCreateChatProps {}
export type FormCreateChatFormValues = {
  name: string;
};

const FormCreateChat: FC<FormCreateChatProps> = () => {
  const dispatch = useAppDispatch();
  const userId: string = useAppSelector((state) => state.auth.user?.id);

  const FormCreateChatHandler: SubmitHandler<FormCreateChatFormValues> = async (data) => {
    if (!userId) return;

    try {
      const newRoom = await dispatch(createRoom({ name: data.name, userId })).unwrap();
      console.log('🚀 ~ file: FormCreateChat.tsx:FormCreateChatHandler ~ data:', newRoom);
      if (newRoom && newRoom.room) {
        dispatch(setActiveRoom(newRoom.room));
      }

      await dispatch(getRoomsForUser(userId));

      dispatch(closeCreateChatModal());
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  return (
    <div>
      <Form
        fields={FormCreateChatFields}
        classListBtn="w-min px-4"
        onSubmit={FormCreateChatHandler}
        submitButtonText={t('createChat.create')}
      />
    </div>
  );
};

export default FormCreateChat;
