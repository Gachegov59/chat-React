import Form from '@/components/Form/Form';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FormCreateChatFields } from './FormCreateChatConfig';
import { t } from 'i18next';

interface FormCreateChatProps {}
export type FormCreateChatFormValues = {
  // email: string;
  // password: string;
};

const FormCreateChat: FC<FormCreateChatProps> = () => {
  const FormCreateChatHandler: SubmitHandler<FormCreateChatFormValues> = (data) => {};
  return (
    <div>
      <Form fields={FormCreateChatFields} classListBtn='w-min px-4' onSubmit={FormCreateChatHandler} submitButtonText={t('createChat.create')} />
    </div>
  );
};

export default FormCreateChat;
