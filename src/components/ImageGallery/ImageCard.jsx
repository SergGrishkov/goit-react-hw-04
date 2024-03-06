import styles from './ImageCard.module.css';

export const ImageCard = ({ image: { urls, description } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={urls.small} alt={description} />
        <div className={styles.imgDarkened}></div>
      </div>
    </div>
  );
};
