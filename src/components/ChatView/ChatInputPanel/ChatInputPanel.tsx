import { FC, useContext, useState } from 'react';
import styles from './ChatInputPanel.module.scss';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { useTranslation } from 'react-i18next';
import { SocketContext } from '@/main';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
interface ChatInputPanelProps {
  // message: string;
  // setMessage: (message: string) => void;
  clickChatBtn: () => void;
}

const ChatInputPanel: FC<ChatInputPanelProps> = ({ clickChatBtn }) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<string>('');
  const socket = useContext(SocketContext);
  const { user } = useAppSelector((state) => state.auth);
  const { activeRoom } = useAppSelector((state) => state.room);
  const roomId = activeRoom?._id;
  const sendMessage = () => {
    const sender = user.id;

    if (!roomId || !message || !sender) {
      console.error('Invalid message data');
      return;
    }

    socket.emit('chatMessage', { roomId, message, sender });
    setMessage('');
  };

  return (
    <div className={`${styles['chat-inputPanel']} ${!roomId ? styles._disabled : ''}`}>
      <div className={styles['chat-inputPanel__textarea']}>
        <textarea
          placeholder={t('ChatView.placeholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!activeRoom}
        />
        <div className={styles['chat-inputPanel__help']}>shift + enter</div>
      </div>
      <div className={styles['chat-inputPanel__btn']}>
        <BtnBase
          disabled={!activeRoom}
          btnText={t('ChatView.send')}
          btnColor={IBtnColors.Blue}
          clickBtn={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatInputPanel;
