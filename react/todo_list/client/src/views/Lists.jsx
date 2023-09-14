import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './css/Lists.module.css';
import NewList from '../components/NewList';

const Lists = () => {
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

    const addNewList = () => {
        if (newListTitle) {
            const newList = {
                title: newListTitle,
                cards: []
            };
            axios.post('http://localhost:8000/', newList)
                .then((response) => {
                    setLists([...lists, response.data]);
                    setNewListTitle('');
                })
                .catch((error) => {
                    console.error('Error adding new list:', error);
                });
        }
    };

    const updateList = (id, newCardTitle) => {

        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === id);

        updatedList.cards.push(newCardTitle);
        axios.put(`http://localhost:8000/${id}`, updatedList)
        .then((response) => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });
    };

    const handleDeleteList = (id) => {
        axios.delete(`http://localhost:8000/${id}`)
            .then(() => {
                const updatedLists = lists.filter((list) => list._id !== id);
                setLists(updatedLists);
            })
            .catch((error) => {
                console.error('Error deleting list:', error);
            });
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
                    <NewList 
                    key={index} 
                    id={list._id} 
                    title={list.title} 
                    updateList={updateList}
                    cards={Array.isArray(list.cards) ? list.cards : []}
                    handleDeleteList={() => handleDeleteList(list._id)}/>
                ))}
            </div>
        </div>
    );
};

export default Lists;

