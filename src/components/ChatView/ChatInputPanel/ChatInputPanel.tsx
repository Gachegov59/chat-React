import { FC } from 'react';
import styles from './ChatInputPanel.module.scss';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
interface ChatInputPanelProps {
  message: string;
  setMessage: (message: string) => void;
  clickChatBtn: () => void;
}

const ChatInputPanel: FC<ChatInputPanelProps> = ({ message, setMessage, clickChatBtn }) => {
  const { t } = useTranslation();

  return (
    <div className={styles['chat-inputPanel']}>
      <div className={styles['chat-inputPanel__textarea']}>
        <textarea
          placeholder={t('ChatView.placeholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={styles['chat-inputPanel__help']}>shift + enter</div>
      </div>
      <div className={styles['chat-inputPanel__btn']}>
        <BtnBase btnText={t('ChatView.send')} btnColor={IBtnColors.Blue} clickBtn={clickChatBtn} />
      </div>
    </div>
  );
};

export default ChatInputPanel;
