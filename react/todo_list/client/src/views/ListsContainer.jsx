import React, { useState, useEffect } from 'react';
import styles from './css/ListsContainer.module.css';
import List from '../components/List';
import axios from 'axios';
import { addNewList } from './utils';

const ListsContainer = () => {
    const [lists, setLists] = useState([]);
    const [newListTitle, setNewListTitle] = useState('');

    

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then((response) => {
                setLists(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>ToDo List</h1>
                <div className={styles.newCategory}>
                    <input
                        type="text"
                        placeholder="Enter new category title"
                        value={newListTitle}
                        onChange={(e) => setNewListTitle(e.target.value)}
                    />
                    <button className={styles.newCategoryBtn} onClick={()=>addNewList(setLists,newListTitle,setNewListTitle)}>
                        Add new category
                    </button>
                </div>
            </div>
            <div className={styles.listsContainer} >
                {lists.map((list) => (
                    <List 
                    key={list._id} 
                    list={list}
                    setLists={setLists}
                    lists={lists}
                    />
                ))}
            </div>
        </div>
    );
};
export default ListsContainer;

