import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './Auth.module.css';
import InputBase from '../UI/Input/InputBase/InputBase';
import { IInputColors } from '../UI/Input/IInput';
import BtnBase from '../UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '../UI/Button/BtnBase/IBtn';
import FormGroup from './FormGroup/FormGroup';
import { checkAuth, login, logout, registration } from '@/store/auth/authActions';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import UserService from '@/services/UserService';
import { Link } from 'react-router-dom';
import { UserAuth } from '@/models/UserAuth';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
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
    setValue,
    formState: { errors },
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();
  const registrationHendler: SubmitHandler<AuthFormValues> = (data) => {
    dispatch(registration({ ...data }));
  };

  const loginHendler: SubmitHandler<AuthFormValues> = (data) => {
    dispatch(login({ ...data }));
  };

  const { isAuth, isLoading } = useAppSelector((state) => state.auth);
  const [users, setUsers] = useState<UserAuth[]>([]);
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  type formFields = {
    name: keyof AuthFormValues;
    label: string;
    type: string;
    placeholder: string;
    validation: Record<string, any>;
  };
  const formFields: formFields[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter username',
      validation: { required: 'Email is required' },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      validation: { required: 'Password is required' },
    },
  ];

  return (
    <>
      <form className={styles['auth-form']}>
        {formFields.map((field) => (
          <FormGroup key={field.name} label={field.label} error={errors[field.name]?.message}>
            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: controllerField }) => (
                <InputBase
                  placeholder={field.placeholder}
                  type={field.type}
                  color={IInputColors.grey}
                  onInputChange={controllerField.onChange}
                  value={controllerField.value}
                />
              )}
            />
          </FormGroup>
        ))}
        <div className="flex">
          <BtnBase
            btnText="registration"
            className="bg-teal-500 mt-7 text-2xl"
            btnColor={IBtnColors.Blue}
            clickBtn={handleSubmit(registrationHendler)}
          />
          <BtnBase
            btnText="login"
            className="bg-teal-500 mt-7 text-2xl mx-8"
            btnColor={IBtnColors.Blue}
            clickBtn={handleSubmit(loginHendler)}
          />
          <BtnBase
            btnText="logout"
            className="bg-teal-500 mt-7 text-2xl mx-8"
            btnColor={IBtnColors.Blue}
            clickBtn={() => dispatch(logout())}
          />
          {isAuth ? (
            <BtnBase
              btnText="Chat"
              className="bg-white border-2 text-teal-500 mt-7 text-2xl ml-auto "
              btnColor={IBtnColors.Blue}
            >
              <Link to="/chat">Chat</Link>
            </BtnBase>
          ) : (
            ''
          )}
        </div>
      </form>
      {isAuth ? (
        <>
          <BtnBase
            btnText="getUsers"
            className="bg-white border-2 text-teal-500 mt-7 text-2xl"
            btnColor={IBtnColors.BlueDark}
            clickBtn={getUsers}
          />
          {users.map((user) => (
            <div key={user.email}>{user.email}</div>
          ))}
        </>
      ) : (
        isLoading && <LoaderSpinner size={100}></LoaderSpinner>
      )}
    </>
  );
};

export default Auth;
