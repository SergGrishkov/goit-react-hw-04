import { ImageCard } from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        {images.map((image) => (
          <li key={image.id} >
            <ImageCard imageCard={image} onOpen={openModal} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
