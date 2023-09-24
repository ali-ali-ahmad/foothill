import { useState } from 'react';
import styles from './css/SearchBar.module.css';
import { icons } from '../data/icons';
import { searchNote } from '../utils/noteUtil';

const  SearchBar = ({notes, setSearchResults, isSearching, setIsSearching}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        e.stopPropagation();
        setIsSearching(true);
        setSearchQuery(query);
        searchNote(query, notes, setSearchResults);
    };

    const handleSearchCancel = (e) => {
        e.stopPropagation();
        setSearchQuery('');
        setIsSearching(false);
    };
    return (
        <div className={styles.searchContainer}>
            <img src={icons.search} alt="Search Icon" />
            <input 
                type="text" 
                value={searchQuery}
                placeholder='Search'
                onChange={handleSearch}
            />
            {
                isSearching && 
                <img src={icons.close} alt="Close Icon" onClick={handleSearchCancel}/>
            }
        </div>
    );
}

export default SearchBar;
