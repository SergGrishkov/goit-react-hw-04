import styles from "./ImageCard.module.css";

export const ImageCard = ({
  imageCard,
  onOpen
  }) => {
 return (
   <div className={styles.card}>
     <div className={styles.imgContainer}>
       <img
         className={styles.img}
         src={imageCard.urls.small}
         alt={imageCard.description}
         onClick={() => onOpen(imageCard)}
       />
     </div>
   </div>
 );
};
