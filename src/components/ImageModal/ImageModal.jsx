import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, onCloseClick }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseClick}
        overlayClassName={styles.backdrop}
        className={styles.modal}
      >
        <div className={styles.modalcontainer}>
          {image && (
            <>
              <div className={styles.imgContainer}>
                <img
                  src={image.urls.regular}
                  alt={image.description}
                  className={styles.image}
                />
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
