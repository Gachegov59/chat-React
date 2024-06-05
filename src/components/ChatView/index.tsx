import { FC, useState } from 'react';
import styles from './index.module.scss';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
import { currentChatAPI } from './chatMock';
import { ICurrentChat } from '../../interfaces/IChat';
import ChatViewPagination from './ChatViewPagination/ChatViewPagination';
import ChatInputPanel from './ChatInputPanel/ChatInputPanel';

const ChatView: FC = () => {
  const [loaded] = useState<boolean>(true);
  const [currentChat] = useState<ICurrentChat>(currentChatAPI);
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
      <ChatInputPanel message={message} setMessage={setMessage} clickChatBtn={clickChatBtn} />
    </div>
  );
};

export default ChatView;
