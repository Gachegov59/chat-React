import { useState, useCallback, FC } from 'react';
import styles from './MenuBase.module.scss';
import BtnBurger from '../../UI/Button/BtnBurger/BtnBurger';
import BtnBase from '../../UI/Button/BtnBase/BtnBase';
import { IMenuChat } from '../../../interfaces/IMenu';
import MenuChat from '../MenuChat/MenuChat';
import { useTranslation } from 'react-i18next';
import { IBtnColors } from '../../UI/Button/BtnBase/IBtn';
import { logout } from '@/store/auth/authActions';
import { useAppDispatch } from '@/hooks/redux';
import AccountModal from '@/components/Modals/AccountModal/AccountModal';

interface MenuBaseProps {
  menuChats: IMenuChat[];
}

const MenuBase: FC<MenuBaseProps> = ({ menuChats }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowAccountModal, setIsShowAccountModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  
  const clickBtnBurger = () => {
    setIsMenuOpen(!isMenuOpen);
    switсhKeyListener();
  };
  const switсhKeyListener = () => {
    !isMenuOpen ? window.addEventListener('keydown', onKeyDown) : window.removeEventListener('keydown', onKeyDown);
  };
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
      window.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  const closeAuthModal = () => {
    setIsShowAccountModal(false);
  };

  const openAuthModal = () => {
    console.log(12313)
    setIsShowAccountModal(true)
  };

  const { t, i18n } = useTranslation();
  const changeLng = (lng: 'en' | 'ru' | 'iw') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles['menu-base']}>
      <div className={styles['menu-base__container']}>
        <div className={styles['menu-base__top']}></div>
        <div className={styles['menu-base__btn']}>
          <BtnBurger clickBtn={clickBtnBurger} parentState={isMenuOpen} />
        </div>
        <div className={`${styles['menu-base__chats']} scroll`}>
          <MenuChat menuChats={menuChats} />
        </div>
      </div>

      <div className={`${styles['menu-base__sidebar']} ${isMenuOpen ? styles._open : ''}`}>
        <div className={styles['menu-base__btn']}>
          <BtnBurger clickBtn={clickBtnBurger} parentState={isMenuOpen} />
        </div>
        <div className={styles['menu-base__btn']}>
          <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={openAuthModal} btnText="Войти">
            {t('Account')}
          </BtnBase>
          <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => dispatch(logout())} btnText="Logout" />
        </div>

        {/* remove languages in new component */}
        <div className={styles['menu-base__btn']}>
          <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => changeLng('en')} btnText="EN" />
          <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => changeLng('ru')} btnText="RU" />
          <BtnBase btnColor={IBtnColors.BlueDark} clickBtn={() => changeLng('iw')} btnText="HE" />
        </div>
      </div>

      <div className={styles['menu-base__modal']}>
        <AccountModal isShowAccountModal={isShowAccountModal} closeAccountModal={closeAuthModal} />
      </div>
    </div>
  );
};

export default MenuBase;
