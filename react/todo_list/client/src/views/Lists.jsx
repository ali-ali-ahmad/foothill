import React, { useState } from 'react';
import styles from './css/Lists.module.css';
import NewList from '../components/NewList';

const Lists = () => {
    const [lists, setLists] = useState([]);
    const [newListTitle, setNewListTitle] = useState('');

    const addNewList = () => {
        if (newListTitle) {
            setLists([...lists, { title: newListTitle }]);
            setNewListTitle('');
        }
    };

    const handleDeleteList = (title) => {
        const updatedLists = lists.filter((list) => list.title !== title);
        setLists(updatedLists);
    };

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
                    <button className={styles.newCategoryBtn} onClick={addNewList}>
                        Add new category
                    </button>
                </div>
            </div>
            <div className={styles.listsContainer}>
                {lists.map((list, index) => (
                    <NewList key={index} title={list.title} handleDeleteList={() => handleDeleteList(list.title)}/>
                ))}
            </div>
        </div>
    );
};

export default Lists;

