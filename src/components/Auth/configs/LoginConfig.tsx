export type LoginFormValues = {
  email: string;
  password: string;
};


export const LoginFormFields = [
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
