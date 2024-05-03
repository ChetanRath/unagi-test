import React, { FC, useState } from 'react';
import { URLS } from '../../utils/constant';
import { LazyImageProps } from '../../utils/type';
import { CardImage } from './style';

const LazyImage: FC<LazyImageProps> = ({ id }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);

  return (
    <CardImage
      src={
        imageError ? URLS.DUMMY_IMAGE_URL : `${URLS.PLAYER_IMAGE_URL}/${id}.png`
      }
      onError={handleImageError}
      alt="Profile"
      className="card-image"
    />
  );
};

export default LazyImage;
