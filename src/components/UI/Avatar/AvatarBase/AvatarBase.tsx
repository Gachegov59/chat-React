import { FC } from 'react';
import styles from './AvatarBase.module.scss';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';
import { getImageUrl } from '@/utils/getImagesUrl';

interface AvatarBaseProps {
  image: string;
  size: number;
  imageTitle?: string;
  className?: string;
}

const AvatarBase: FC<AvatarBaseProps> = ({ image, size, imageTitle = '' }) => {
  const sizeStyle = () => {
    return { height: `${size}px`, width: `${size}px` };
  };
  return (
    <div className={styles.avatar} style={sizeStyle()} title={imageTitle}>
      <div className={styles['avatar__block']} style={sizeStyle()}>
        <img src={getImageUrl(image)} alt="Avatar" loading="lazy" />
      </div>

      {/* {image ? (
        <div className={styles['avatar__block']} style={sizeStyle()}>
          <img src={imageUrl} alt="Avatar" loading="lazy" />
        </div>
      ) : (
        <div className={styles['avatar__container']}>
          <LoaderSpinner size={50} />
        </div>
      )} */}
    </div>
  );
};

export default AvatarBase;
