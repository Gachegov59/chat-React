import { FC, useContext, useEffect, useState } from 'react';
import styles from './ChatView.module.scss';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
import ChatViewPagination from './ChatViewPagination/ChatViewPagination';
import ChatInputPanel from './ChatInputPanel/ChatInputPanel';
import InviteModal from '../Modals/InviteModal/InviteModal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import ChatControls from './ChatControls/ChatControls';
import { SocketContext } from '@/socket';
// import { fetchMessages } from '@/store/message/messageActions';

const ChatView: FC = () => {
  const [loaded] = useState<boolean>(true);
  const [isShowInviteModal, setIsShowInvitetModal] = useState<boolean>(false);
  const { activeRoom } = useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();
  const socket = useContext(SocketContext);
  const closeInviteModal = () => setIsShowInvitetModal(false);

  useEffect(() => {
    if (activeRoom) {
      // dispatch(fetchMessages(activeRoom._id));
      // socket.emit('joinRoom', activeRoom._id);

      // Clean up the socket event listener when the component unmounts or the room changes
      return () => {
        socket.emit('leaveRoom', activeRoom._id);
      };
    }
  }, [activeRoom, dispatch, socket]);

  return (
    <div className={styles['chat-view']}>
      <div className={styles['chat-view__top']}>
        {activeRoom && (
          <>
            <div className={styles['chat-view__top']}>{activeRoom.name}</div>
            <ChatControls setIsShowInviteModal={setIsShowInvitetModal} />
          </>
        )}
      </div>
      <div className={`${styles['chat-view__content']} scroll`}>
        {!loaded && (
          <div className={styles['chat-view__loader']}>
            <LoaderSpinner size={100} />
          </div>
        )}
        <ChatViewPagination currentChat={activeRoom} />
      </div>
      <ChatInputPanel />
      <InviteModal chat={null} isShowInviteModal={isShowInviteModal} closeInviteModal={() => closeInviteModal()} />
    </div>
  );
};

export default ChatView;
