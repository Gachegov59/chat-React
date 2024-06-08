import { useState, useCallback, FC } from 'react';
import styles from './MenuBase.module.scss';
import BtnBurger from '../../UI/Button/BtnBurger/BtnBurger';
import BtnBase from '../../UI/Button/BtnBase/BtnBase';
import { IMenuChat } from '../../../interfaces/IMenu';
import MenuChat from '../MenuChat/MenuChat';
import { IBtnColors } from '../../UI/Button/BtnBase/IBtn';
import { logout } from '@/store/auth/authActions';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import AccountModal from '@/components/Modals/AccountModal/AccountModal';
import { UserAuth } from '@/models/UserAuth';
import UserService from '@/services/UserService';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';
import { t } from 'i18next';

interface MenuBaseProps {
  menuChats: IMenuChat[];
}

const MenuBase: FC<MenuBaseProps> = ({ menuChats }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowAccountModal, setIsShowAccountModal] = useState<boolean>(false);
  const [users, setUsers] = useState<UserAuth[]>([]);
  const { isAuth, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  //todo: test - remove!
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {}
  }

  const clickBtnBurger = () => {
    setIsMenuOpen(!isMenuOpen);
    switchKeyListener();
  };
  const switchKeyListener = () => {
    !isMenuOpen ? window.addEventListener('keydown', onKeyDown) : window.removeEventListener('keydown', onKeyDown);
  };
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
      window.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  const closeAuthModal = () => setIsShowAccountModal(false);
  const openAuthModal = () => setIsShowAccountModal(true);

  return (
    <div className={styles['menu-base']}>
      <div className={styles['menu-base__container']}>
        {/* <div className={styles['menu-base__top']}></div> */}
        <div className={styles['menu-base__btn']}>
          <BtnBurger clickBtn={clickBtnBurger} parentState={isMenuOpen} />
        </div>
        <div className={`${styles['menu-base__chats']} scroll`}>
          <MenuChat menuChats={menuChats} />
        </div>
      </div>

      {/* // todo: menu-base__sidebar - separete component ? ...*/}
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

        {/* todo: temporarly for test */}
        {isAuth ? (
          <>
            <BtnBase
              btnText="getUsers"
              className=" border-2 mt-7 "
              btnColor={IBtnColors.BlueDark}
              clickBtn={getUsers}
            />
            {users.map((user) => (
              <div key={user.email}>{user.email}</div>
            ))}
          </>
        ) : (
          isLoading && <LoaderSpinner size={100}></LoaderSpinner>
        )}
      </div>

      <div className={styles['menu-base__modal']}>
        <AccountModal isShowAccountModal={isShowAccountModal} closeAccountModal={closeAuthModal} />
      </div>
    </div>
  );
};

export default MenuBase;
