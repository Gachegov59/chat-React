// src/components/LanguageSwitcher.tsx
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanSwitcher.module.scss';
import languages from './types';

interface changeLanguageProps {
  classNames?: string;
  changeLanguage: (lan: languages) => void;
}
// todo !add initial lang from backend
const LanSwitcher: FC<changeLanguageProps> = ({changeLanguage, classNames = ''}) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value as languages);
  };

  return (
    <div className={`${styles.lanSwitcher} ${classNames}`}>
      <select onChange={handleLanguageChange} value={i18n.language} className="">
        <option value="es">En</option>
        <option value="ru">Ru</option>
        <option value="iw">He</option>
      </select>
    </div>
  );
};

export default LanSwitcher;
