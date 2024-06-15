import Form from '@/components/Form/Form';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FormCreateChatFields } from './FormCreateChatConfig';

interface FormCreateChatProps {}
export type FormCreateChatFormValues = {
  // email: string;
  // password: string;
};

const FormCreateChat: FC<FormCreateChatProps> = () => {
  const FormCreateChatHandler: SubmitHandler<FormCreateChatFormValues> = (data) => {};
  return (
    <div>
      <Form fields={FormCreateChatFields} onSubmit={FormCreateChatHandler}/>
    </div>
  );
};

export default FormCreateChat;
