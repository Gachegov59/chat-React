import { FC } from 'react';
import styles from './ConfirmationBlock.module.scss';
import { t } from 'i18next';

interface ConfirmationBlockProps {
  registeredEmail: string;
}

const ConfirmationBlock: FC<ConfirmationBlockProps> = ({ registeredEmail }) => {
  return (
    <div className={styles['confirmation-block']}>
      <p>
        {t('Check your email')} <span>"{registeredEmail}" </span>{t('and follow the instructions to complete your registration.')}
      </p>
    </div>
  );
};

export default ConfirmationBlock;
