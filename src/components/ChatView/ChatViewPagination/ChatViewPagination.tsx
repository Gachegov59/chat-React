import { FC, useEffect } from 'react';
import styles from './ChatViewPagination.module.scss';
import ChatMessage from '../ChatMessage/ChatMessage';
import { ICurrentChat } from '@/interfaces/IChat';
// import { chatMessagesAPI } from './chatMessagesAPIMock';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openCreateChatModal } from '@/store/modal/modalSlice';
import { IRoom } from '@/interfaces/IMenu';
import { Room } from '@/models/Room';

interface ChatViewPaginationProps {
  currentChat: Room | null;
}
const ChatViewPagination: FC<ChatViewPaginationProps> = ({ currentChat }) => {
  const dispatch = useAppDispatch();
  const { activeRoom } = useAppSelector((state) => state.room);
  const {messages} = useAppSelector((state) => state.messages);
  const handleOpenCreateChatModal = () => {
    dispatch(openCreateChatModal());
  };

  useEffect(() => {
    if (activeRoom) {
      // dispatch(fetchMessages(activeRoom._id));
      // console.log('fetchMessages----', activeRoom._id);
      // socket.emit('joinRoom', activeRoom._id);
    }
  }, [activeRoom]);

  return (
    <div className={styles['chat-view-pagination']}>
      {currentChat ? (
        <>
          {messages.map((message) => (
            <ChatMessage key={message._id} chatMessage={message} user={message.user} />
          ))}
        </>
      ) : (
        <div className={styles['chat-placeholder']}>
          <Title size={TitleSize.H1} className=" text-center text-xl sm:text-2xl lg:text-4xl p-4">
            <span className="text-light-blue">{t('ChatView.chat-placeholder')}</span>
            <div className="text-white mt-2">{t('ChatView.or-create-new')}</div>
          </Title>
          <BtnBase
            clickBtn={handleOpenCreateChatModal}
            className="text-xl"
            btnText={t('ChatView.create-room')}
            btnColor={IBtnColors.Blue}
          />
        </div>
      )}
    </div>
  );
};

export default ChatViewPagination;