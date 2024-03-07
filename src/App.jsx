import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import clsx from "clsx";
import { getPictures } from "./api/controller";
import styles from "./App.module.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#root");

  useEffect(() => {
    if (!filter) {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true);
        const { results } = await getPictures(filter, currPage);

        if (results.length > 0) {
          setItems((prevImages) => [...prevImages, ...results]);
          setHasMorePages(true);
        } else {
          setHasMorePages(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [filter, currPage]);

  const handleSearch = (inputValue) => {
    setFilter(inputValue);
    setItems([]);
    setCurrPage(1);
    setHasMorePages(false);
  };

  const handleMore = () => setCurrPage(currPage + 1);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={clsx(styles.content, styles.section)}>
        <ErrorMessage isError={error} />
        <ImageGallery images={items} openModal={openModal} />
        <Loader isLoading={loading} />

        <LoadMoreBtn
          isVisible={hasMorePages && !loading}
          onClick={handleMore}
        ></LoadMoreBtn>
       
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseClick={closeModal}
      />
    </div>
  );
};

export default App;
