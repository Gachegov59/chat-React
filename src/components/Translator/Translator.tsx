import { useTranslation } from 'react-i18next';
import BtnBase from '../UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '../UI/Button/BtnBase/IBtn';
import { FC } from 'react';

const { i18n } = useTranslation();
const changeLng = (lng: 'en' | 'ru' | 'iw') => {
  i18n.changeLanguage(lng);
};

const Translator: FC = () => {
  return (
    <>
      <div>
        <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => changeLng('en')} btnText="EN" />
        <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => changeLng('ru')} btnText="RU" />
        <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => changeLng('iw')} btnText="HE" />
      </div>
    </>
  );
};

export default Translator;
