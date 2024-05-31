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
  const imageUrl = image ? getImageUrl(image) : '';
  const sizeStyle = () => {
    return { height: `${size}px`, width: `${size}px` };
  };
  return (
    //todo add cheking if image exist for loader or dummy
    //todo cache images
    //todo all images from onother sevice - cloudinary?
    <div className={styles.avatar} style={sizeStyle()} title={imageTitle}>
      {image ? (
        <div className={styles['avatar__block']} style={sizeStyle()}>
          <img src={imageUrl} alt="Avatar" loading="lazy" />
        </div>
      ) : (
        <div className={styles['avatar__container']}>
          <LoaderSpinner size={50} />
        </div>
      )}
    </div>
  );
};

export default AvatarBase;
