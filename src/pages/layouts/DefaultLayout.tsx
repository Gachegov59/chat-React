import { FC, ReactNode } from 'react';
import styles from './defaultLayout.module.scss';
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className={styles['default-layout']}>
      <main className={styles['chat-page']}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
