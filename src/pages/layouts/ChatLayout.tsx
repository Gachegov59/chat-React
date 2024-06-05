import { FC, ReactNode } from 'react';
import styles from './ChatLayout.module.scss';
interface DefaultLayoutProps {
  children: ReactNode;
}

const ChatLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className={styles['default-layout']}>
      <main className={styles['chat-page']}>{children}</main>
    </div>
  );
};

export default ChatLayout;
