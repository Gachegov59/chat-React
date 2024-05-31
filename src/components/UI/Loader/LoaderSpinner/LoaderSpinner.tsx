import styles from './LoaderSpinner.module.scss';
import { FC } from 'react';

interface LoaderSpinnerProps {
  size: number;
}

const LoaderSpinner: FC<LoaderSpinnerProps> = ({ size = 50 }) => {
  const loaderSize = () => {
    return { height: `${size}px`, width: `${size}px` };
  };
  return <div className={styles.loader} style={loaderSize()}></div>;
};

export default LoaderSpinner;
