export type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginFormFields = [
  {
    name: 'email',
    label: 'Auth.email',
    type: 'text',
    placeholder: 'Auth.placeholder.username',
    autoComplete: 'username',
    validation: { required: 'Auth.validation.requiredEmail' },
  },
  {
    name: 'password',
    label: 'Auth.password',
    type: 'password',
    placeholder: 'Auth.placeholder.password',
    autoComplete: 'current-password',
    validation: { required: 'Auth.validation.requiredPassword' },
  },
];

//   import { useTranslation } from 'react-i18next';

// export type LoginFormValues = {
//   email: string;
//   password: string;
// };

// export const LoginFormFields = () => {
//   const { t } = useTranslation();
//   return [
//     {
//       name: 'email',
//       label: t('Auth.email'),
//       type: 'text',
//       placeholder: t('Auth.placeholder.username'),
//       autoComplete: 'username',
//       validation: { required: t('Auth.validation.requiredEmail') },
//     },
//     {
//       name: 'password',
//       label: t('Auth.password'),
//       type: 'password',
//       placeholder: t('Auth.placeholder.password'),
//       autoComplete: 'current-password',
//       validation: { required: t('Auth.validation.requiredPassword') },
//     },
//   ];
// };
