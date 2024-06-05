import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './Auth.module.scss';
import InputBase from '../UI/Input/InputBase/InputBase';
import { IInputColors } from '../UI/Input/IInput';
import BtnBase from '../UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '../UI/Button/BtnBase/IBtn';
import FormGroup from './FormGroup/FormGroup';
import { login, logout, registration } from '@/store/auth/authActions';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { t } from 'i18next';
// import toast from 'react-hot-toast';
// const notify = (data: string) => toast(data);

type AuthFormValues = {
  email: string;
  password: string;
};

const Auth: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const registrationHendler: SubmitHandler<AuthFormValues> = (data) => {
    dispatch(registration({ ...data }));
  };

  const loginHendler: SubmitHandler<AuthFormValues> = (data) => {
    dispatch(login({ ...data }));
    navigate('/');
  };

  type formFields = {
    name: keyof AuthFormValues;
    label: string;
    type: string;
    placeholder: string;
    autoComplete: string;
    validation: Record<string, any>;
  };
  const formFields: formFields[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter username',
      autoComplete: 'username',
      validation: { required: 'Email is required' },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      autoComplete: 'current-password',
      validation: { required: 'Password is required' },
    },
  ];

  return (
    <div className={styles['auth-form']}>
      <form className={styles['auth-form']} autoComplete="on">
        {formFields.map((field) => (
          <FormGroup key={field.name} label={field.label} error={errors[field.name]?.message}>
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
                  value={controllerField.value}
                />
              )}
            />
          </FormGroup>
        ))}
        <div className="flex flex-wrap">
          <BtnBase
            btnText="registration"
            className="bg-teal-500 mt-7 text-2xl mr-7"
            btnColor={IBtnColors.Blue}
            clickBtn={handleSubmit(registrationHendler)}
          />
          {isAuth ? (
            <BtnBase
              btnText="logout"
              className="bg-teal-500 mt-7 text-2xl mr-7"
              btnColor={IBtnColors.Blue}
              clickBtn={() => dispatch(logout())}
            />
          ) : (
            <BtnBase
              btnText="login"
              className="bg-teal-500 mt-7 text-2xl mr-7"
              btnColor={IBtnColors.Blue}
              clickBtn={handleSubmit(loginHendler)}
            />
          )}

          {isAuth ? (
            <BtnBase
              btnText="Chat"
              className="bg-white border-2 text-teal-500 mt-7 text-2xl ml-auto "
              btnColor={IBtnColors.Blue}
            >
              <Link to="/">Chat</Link>
            </BtnBase>
          ) : (
            ''
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
