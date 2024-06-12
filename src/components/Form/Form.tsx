import { FC, ReactNode } from 'react';
import { useForm, SubmitHandler, Controller, FieldValues, UseFormProps } from 'react-hook-form';
import styles from './Form.module.scss';
import InputBase from '../UI/Input/InputBase/InputBase';
import { IInputColors } from '../UI/Input/IInput';
import BtnBase from '../UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '../UI/Button/BtnBase/IBtn';
import FormGroup from './FormGroup/FormGroup';
import { useTranslation } from 'react-i18next';

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  validation: Record<string, any>;
}

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  fields: FormField[];
  onSubmit: SubmitHandler<T>;
  submitButtonText: string;
  children?: ReactNode;
  classList?: string;
}

const Form: FC<FormProps<any>> = ({ children, classList ='', fields, onSubmit, submitButtonText, ...useFormProps }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>(useFormProps);
  const { t } = useTranslation();
  return (
    <div>
      <form className={`${styles['form']} ${classList}`} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <FormGroup key={field.name} label={t(field.label)} error={errors[field.name]?.message as string | undefined}>
            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: controllerField }) => (
                <InputBase
                  id={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  color={IInputColors.grey}
                  autoComplete={field.autoComplete}
                  onInputChange={controllerField.onChange}
                  value={controllerField.value || ''}
                />
              )}
            />
          </FormGroup>
        ))}
        {/* todo submit button change - universal */}
        <div className="flex flex-wrap">
          {children ? children : <BtnBase className='w-full p-2 text-xl' btnText={t(submitButtonText)} btnColor={IBtnColors.Blue} />}
        </div>
      </form>
    </div>
  );
};

export default Form;
