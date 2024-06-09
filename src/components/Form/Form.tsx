import React, { FC } from 'react';
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
}

const Form: FC<FormProps<any>> = ({ fields, onSubmit, submitButtonText, ...useFormProps }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>(useFormProps);
  const { t } = useTranslation();
  return (
    <div>
      <form className={styles['form']} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
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
          <BtnBase btnText={submitButtonText} className="bg-teal-500 mt-7 text-base mr-7" btnColor={IBtnColors.Blue} />
        </div>
      </form>
    </div>
  );
};

export default Form;
