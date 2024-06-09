// src/components/LanguageSwitcher.tsx
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanSwitcher.module.scss';

interface changeLanguageProps {
  classNames?: string;
  changeLanguage: (lan: string) => void;
}

const LanSwitcher: FC<changeLanguageProps> = ({changeLanguage, classNames = ''}) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
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
