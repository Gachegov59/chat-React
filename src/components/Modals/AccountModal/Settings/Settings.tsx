import Form from '@/components/Form/Form';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { SettingsFormFields } from './SetingsConfig';

interface SettingsProps {}
export type SettingsFormValues = {
  // email: string;
  // password: string;
};

const Settings: React.FC<SettingsProps> = () => {
  const settingsHandler: SubmitHandler<SettingsFormValues> = (data) => {
    // dispatch(login({ ...data }));
    // console.log('🚀 ~ RoutesСonstant.BASE:', RoutesСonstant.BASE);
    // navigate(RoutesСonstant.BASE);
  };
  return (
    <div>
      <Form fields={SettingsFormFields} onSubmit={settingsHandler} submitButtonText="settings.save" />
    </div>
  );
};

export default Settings;
