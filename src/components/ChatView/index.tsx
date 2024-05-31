import { FC, useState } from 'react';
import styles from './index.module.scss';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
import { currentChatAPI } from './CurrentChatMock';
import { ICurrentChat } from '../../interfaces/IChat';
import ChatViewPagination from './ChatViewPagination/ChatViewPagination';
import ChatInputPanel from './ChatInputPanel/ChatInputPanel';

const ChatView: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(true);
  const [currentChat, setCurrentChat] = useState<ICurrentChat>(currentChatAPI);
  const [message, setMessage] = useState<string>('');
  const clickChatBtn = () => {
    console.log('clickChatBtn');
    setMessage('');
  };

  return (
    <div className={styles['chat-view']}>
      <div className={styles['chat-view__top']}></div>
      <div className={`${styles['chat-view__content']} scroll`}>
        {!loaded && (
          <div className={styles['chat-view__loader']}>
            <LoaderSpinner size={100} />
          </div>
        )}
        <ChatViewPagination currentChat={currentChat} />
      </div>
      <div className={styles['chat-view__textarea-pannel']}>
        <div className={styles['chat-view__textarea']}>
          <ChatInputPanel message={message} setMessage={setMessage} clickChatBtn={clickChatBtn} />
        </div>
      </div>
    </div>
  );
};

export default ChatView;
