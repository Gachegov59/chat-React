export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const RegisterFormFields = [
  {
    name: 'firstName',
    label: 'Auth.firstName',
    type: 'text',
    placeholder: 'Auth.placeholder.firstName',
    autoComplete: 'given-name',
    validation: { required: 'Auth.validation.requiredFirstName' },
  },
  {
    name: 'lastName',
    label: 'Auth.lastName',
    type: 'text',
    placeholder: 'Auth.placeholder.lastName',
    autoComplete: 'family-name',
    validation: { required: 'Auth.validation.requiredLastName' },
  },
  {
    name: 'email',
    label: 'Auth.email',
    type: 'text',
    placeholder: 'Auth.placeholder.email',
    autoComplete: 'email',
    validation: { required: 'Auth.validation.requiredEmail' },
  },
  {
    name: 'password',
    label: 'Auth.password',
    type: 'password',
    placeholder: 'Auth.placeholder.password',
    autoComplete: 'new-password',
    validation: { required: 'Auth.validation.requiredPassword' },
  },
];
