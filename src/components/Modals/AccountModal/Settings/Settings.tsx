import Form from '@/components/Form/Form';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { SettingsFormFields } from './SetingsConfig';

interface SettingsProps {}
export type SettingsFormValues = {
};

const Settings: FC<SettingsProps> = () => {
  const settingsHandler: SubmitHandler<SettingsFormValues> = () => {

  };
  return (
    <div>
      <Form fields={SettingsFormFields} classListBtn='w-min px-4' onSubmit={settingsHandler} submitButtonText="settings.save" />
    </div>
  );
};

export default Settings;
