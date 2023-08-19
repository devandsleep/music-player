import styles from "./SearchInput.module.scss"

const SearchInput = () => {
    return (
        <input
            className={styles.search_input}
            type="text"
            placeholder="Search by title, artist, or album..."
        />
    );
}

export default SearchInput;