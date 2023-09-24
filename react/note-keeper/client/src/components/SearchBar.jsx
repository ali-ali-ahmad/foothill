import { useState } from 'react';
import styles from './css/SearchBar.module.css';
import { icons } from '../data/icons';

const  SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState();

    return (
        <div className={styles.container}>
            <img src={icons.search} alt="Search Icon" />
            <input 
                type="text" 
                placeholder='Search'
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
