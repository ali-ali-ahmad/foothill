import React, { useState, useEffect } from 'react';
import styles from './css/ListsContainer.module.css';
import List from '../components/List';
import axios from 'axios';
import { addNewList } from './utils';
import { API_BASE_URL } from './config';
import SearchBar from '../components/SearchBar';
import { icons } from '../data/icons';

const ListsContainer = () => {
    const [lists, setLists] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [newListTitle, setNewListTitle] = useState('');
    const [isAddingNewList, setIsAddingNewList] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        axios.get(API_BASE_URL)
            .then((response) => {
                setLists(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleAddNewList = () => {
        addNewList(setLists,newListTitle,setNewListTitle);
        setIsAddingNewList(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>ToDo List</h1>
                <div className={styles.headerButtons}>
                    <SearchBar 
                        lists={lists} 
                        setSearchResults={setSearchResults} 
                        setIsSearching={setIsSearching}
                        />
                    <div className={styles.newCategory}>
                        {isAddingNewList?
                        <div className={styles.newCategoryInput}>
                            <input
                                type="text"
                                placeholder="Enter new category title"
                                value={newListTitle}
                                onChange={(e) => setNewListTitle(e.target.value)}
                            />
                            <div className={styles.doneCloseButtons}>
                                <img 
                                src={icons.done} alt="Add Icon" 
                                onClick={handleAddNewList} 
                                />
                                <img 
                                src={icons.close} alt="Close Icon" 
                                onClick={() => setIsAddingNewList(false)} 
                                />
                            </div>
                        </div>
                            :
                            <img 
                            src={icons.add} alt="Add Icon" 
                            onClick={() => setIsAddingNewList(true)} 
                            />
                        }
                    </div>
                </div>
            </div>
            <div className={styles.listsContainer}>
                {isSearching?
                    searchResults.map((list) => (
                        <List
                        key={list._id}
                        list={list}
                        setLists={setLists}
                        lists={lists}
                        />
                    ))
                    :
                    lists.map((list) => (
                        <List
                        key={list._id}
                        list={list}
                        setLists={setLists}
                        lists={lists}
                        />
                    ))
                }
            </div>
        </div>
    );
};
export default ListsContainer;

