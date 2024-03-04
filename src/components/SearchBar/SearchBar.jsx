import { Toaster } from "react-hot-toast";
// import { HiOutlineSearch } from "react-icons/hi";

import { errorMessage, errNotify } from "../../notification/messages";

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchStr = form.elements.search.value;
    if (searchStr.trim() === "") {
      errNotify(errorMessage.emptySearch);
      return;
    }
    onSearch(searchStr);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Toaster />
        </div>

        <button className={styles.button} type="submit">
          {/* <HiOutlineSearch /> */}
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
