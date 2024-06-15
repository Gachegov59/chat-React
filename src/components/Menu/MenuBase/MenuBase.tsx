import { useState, useCallback, FC, useEffect } from 'react';
import styles from './MenuBase.module.scss';
import BtnBurger from '../../UI/Button/BtnBurger/BtnBurger';
import BtnBase from '../../UI/Button/BtnBase/BtnBase';
import { IRoom } from '../../../interfaces/IMenu';
import MenuChat from '../MenuChat/MenuChat';
import { IBtnColors } from '../../UI/Button/BtnBase/IBtn';
import AccountModal from '@/components/Modals/AccountModal/AccountModal';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import RoomService from '@/services/RoomService';
import { Room } from '@/models/Room';
import CreateChatModal from '@/components/Modals/CreateChatModal/CreateChatModal';
import { getRoomsForUser } from '@/store/room/roomActions';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';

interface MenuBaseProps {
  menuChats: IRoom[];
}

const MenuBase: FC<MenuBaseProps> = ({ menuChats }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowAccountModal, setIsShowAccountModal] = useState<boolean>(false);
  const { rooms, isLoading, error } = useAppSelector((state) => state.room);
  const { user } = useAppSelector((state) => state.auth);
  const { isCreateChatOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  // async function getRooms() {
  // try {
  //   const response = await RoomService.getRoomsForUser(user.id);
  //   setRooms(response.data);
  // } catch (error) {
  //   console.error('Failed to fetch rooms:', error);
  // }
  // }

  useEffect(() => {
    if (user.id) {
      dispatch(getRoomsForUser(user.id));
    }
  }, [dispatch, user.id]);

  // const handleCloseCreateChatModal = () => {
  //   console.log('handleCloseCreateChatModal')
  // }

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
          {isLoading ? <LoaderSpinner size={150} /> : <MenuChat menuChats={rooms} />}
          {/* <MenuChat menuChats={menuChats} /> */}
          {/* <MenuChat menuChats={rooms} /> */}
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
        </div>
      </div>

      <div className={styles['menu-base__modal']}>
        <AccountModal isShowAccountModal={isShowAccountModal} closeAccountModal={closeAuthModal} />
        <CreateChatModal isCreateChatModalOpen={isCreateChatOpen} />
      </div>
    </div>
  );
};

export default MenuBase;
