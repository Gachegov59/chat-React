import { FC, ReactNode } from 'react';
import styles from './layouts.module.scss';
interface DefaultLayoutProps {
  children: ReactNode;
  classNameContainer?: string;
  classNameMain?: string;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, classNameMain = '', classNameContainer = '' }) => {
  return (
    <div className={`${classNameContainer}`}>
      <main className={`${classNameMain}`}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
