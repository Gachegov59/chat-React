import { FC, ReactNode } from 'react';
import styles from './layouts.module.scss';
interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

const AuthLayout: FC<DefaultLayoutProps> = ({children}) => {
  return (
    <div className={styles['auth-layout']}>
      <main className={styles['auth-page']}>{children}</main>
    </div>
  );
};

export default AuthLayout;
