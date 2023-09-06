import styles from './Search.module.css';

function Search() {

    return (
        <div className={styles.container}>
            <img className={styles.searchIcon} src={require('../search_icon.png')} alt="Search Icon" />
            <input
            className={styles.searchInput}
                type="text"
                placeholder='Search Members'
            />
        </div>
    );
}

export default Search;
