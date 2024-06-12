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
import LanSwitcher from '../LanSwitcher/LanSwitcher';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
// import i18n from '@/i18n';

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [registeredEmail, setRegisteredEmail] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

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
    console.log('🚀 ~ RoutesСonstant.BASE:', RoutesСonstant.BASE);
    navigate(RoutesСonstant.BASE);
  };

  const changeLanguage = (lan: string) => {
    console.log('🚀 ~ changeLanguage ~ event.target.value:', lan);
    i18n.changeLanguage(lan);
  };

  const AuthForm = () => {
    if (isLogin) {
      return <Form  classList='text-lg' fields={LoginFormFields} onSubmit={loginHandler} submitButtonText="Auth.btn.login" />;
    }
    return <Form classList='text-lg' fields={RegisterFormFields} onSubmit={registrationHandler} submitButtonText="Auth.btn.registration" />;
  };
  return (
    <div className={styles['auth']}>
      <div className={styles['auth-container']}>
        <LanSwitcher changeLanguage={(e) => changeLanguage(e)} />
        <FormSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
        {!showConfirmation ? <AuthForm /> : <ConfirmationBlock registeredEmail={registeredEmail} />}
      </div>
      <SocialLogin />
    </div>
  );
};

export default Auth;
