import styles from './Search.module.css';
import searchIcon from '../search_icon.png';

function Search() {

    return (
        <div className={styles.container}>
            <img className={styles.searchIcon} src={searchIcon} alt="Search Icon" />
            <input
            className={styles.searchInput}
                type="text"
                placeholder='Find Members'
            />
        </div>
    );
}

export default Search;
