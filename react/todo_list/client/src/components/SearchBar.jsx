import React, { useState } from 'react';
import { icons } from '../data/icons';
import styles from './css/SearchBar.module.css';
import { searchCards } from '../views/utils';

const SearchBar = ({setSearchResults, setIsSearching}) => {
    const [isSearchingCards, setIsSearchingCards] = useState(false);


    const handleSearch = (e) => {
        e.stopPropagation();
        setIsSearching(true);
        searchCards(e.target.value, setSearchResults, setIsSearching);
    };

    const handleDoneIcon = (e) => {
        e.stopPropagation();
        setIsSearchingCards(false);
        setIsSearching(false);
    };

    return (
        <header>
            <div className={styles.searchContainer}>
            {isSearchingCards ? (
                    <div className={styles.searchInput}>
                        <input 
                            type="text" 
                            id="search"
                            placeholder="Search Cards"
                            onChange={handleSearch}/>
                        <img src={icons.done} alt="Done Icon" onClick={handleDoneIcon} />
                    </div>
                ) : (
                    <img src={icons.search} alt="Search Icon" onClick={() => setIsSearchingCards(true)} />
                )}
            </div>
        </header>
    )
}

export default SearchBar;