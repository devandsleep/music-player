import styles from "./Inputs.module.scss"

const SearchInput = ({ value, onChange }) => {
    return (
        <input
            className={styles.search_input}
            type="text"
            placeholder="Search by title, artist, or album..."
            value={value} 
            onChange={onChange}
        />
    );
}

export default SearchInput;