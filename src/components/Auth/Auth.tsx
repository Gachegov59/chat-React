import { FC, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/hooks/redux';
import { useNavigate } from 'react-router-dom';
import { login, registration } from '@/store/auth/authActions';
import Form from '../Form/Form';
import { LoginFormFields, LoginFormValues } from './configs/LoginConfig';
import { RegisterFormFields, RegisterFormValues } from './configs/RegistrationConfig';
import styles from './Auth.module.scss';
import FormSwitcher from './FormSwitcher/FormSwitcher';
import ConfirmationBlock from './ConfirmationBlock/ConfirmationBlock';
import SocialLogin from './SocialLogin/SocialLogin';
import RoutesСonstant from '@/router/constant';


const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [registeredEmail, setRegisteredEmail] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registrationHandler: SubmitHandler<RegisterFormValues> = (data) => {
    console.log('🚀 ~ registrationHandler:', data);
    setRegisteredEmail(data.email);
    dispatch(registration({ ...data }))
      .unwrap()
      .then(() => {
        setShowConfirmation(true);
      })
      .catch((error) => {
        setShowConfirmation(false);
        console.error('Registration failed:', error);
      });
  };

  const loginHandler: SubmitHandler<LoginFormValues> = (data) => {
    dispatch(login({ ...data }));
    navigate(RoutesСonstant.BASE);
  };

  return (
    <div className={styles['auth']}>
      <div className={styles['auth-container']}>
        <FormSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />

        {isLogin ? (
          <Form fields={LoginFormFields} onSubmit={loginHandler} submitButtonText="Login" />
        ) : (
          <>
            {!showConfirmation ? (
              <Form fields={RegisterFormFields} onSubmit={registrationHandler} submitButtonText="Register" />
            ) : (
              <ConfirmationBlock registeredEmail={registeredEmail} />
            )}
          </>
        )}
      </div>
      <SocialLogin />
    </div>
  );
};

export default Auth;
