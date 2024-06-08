export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const RegisterFormFields = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter first name',
    autoComplete: 'given-name',
    validation: { required: 'First name is required' },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter last name',
    autoComplete: 'family-name',
    validation: { required: 'Last name is required' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: 'Enter email',
    autoComplete: 'email',
    validation: { required: 'Email is required' },
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    autoComplete: 'new-password',
    validation: { required: 'Password is required' },
  },
];
