import styles from './css/SearchEngine.module.css';
import searchIcon from '../icons/search.svg';

function SearchEngine(props) {
    return (
        <div className={styles.container}>
            <img className={styles.SearchIcon} src={searchIcon} alt="Search Logo" />
            <input 
                className={styles.SearchInput}
                type="text"
                placeholder='Search'
            />
        </div>
    );
}

export default SearchEngine;
