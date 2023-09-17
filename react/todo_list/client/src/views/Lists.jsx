import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './css/Lists.module.css';
import NewList from '../components/NewList';
import { colors } from '../data/colors';

const Lists = () => {
    const [lists, setLists] = useState([]);
    const [newListTitle, setNewListTitle] = useState('');

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    let moveToListId;


    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then((response) => {
                setLists(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleHover = (event) => {
        const hoveredDivId = event.target.id;
        moveToListId = hoveredDivId;
        console.log(`moveToListId: ${moveToListId}`);
    };

    const dropInside = (moveFromListId, cardsArray) => {

        const updatedLists = [...lists];
        const movedFromList = updatedLists.find((list) => list._id === moveFromListId);
        
        movedFromList.cards = cardsArray;
        
        axios.put(`http://localhost:8000/${moveFromListId}`, movedFromList)
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });

    };
    const dropOutside = (moveFromListId, cardId) => {

        const updatedLists = [...lists];
        const movedFromList = updatedLists.find((list) => list._id === moveFromListId);
        
        const updatedCards = [...movedFromList.cards];
        const movedCard = updatedCards.find((card) => card._id === cardId);
        const removedCard = updatedCards.filter((card) => card._id !== cardId);
        
        movedFromList.cards = removedCard;
        
        const moveToList = updatedLists.find((list) => list._id === moveToListId);
        moveToList.cards.push(movedCard);

        axios.put(`http://localhost:8000/${moveFromListId}`, movedFromList)
        .then(() => {
            axios.put(`http://localhost:8000/${moveToListId}`, moveToList)
            .then(() => {
                setLists(updatedLists); 
            })
            .catch((error) => {
                console.error('Error adding new list:', error);
            });
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });

    };

    const addNewList = () => {
        if (newListTitle) {
            const newList = {
                title: newListTitle,
                bgColor: randomColor,
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

    const updateListTitle = (id, newTitle) => {

        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === id);

        updatedList.title = newTitle;
        axios.put(`http://localhost:8000/${id}`, updatedList)
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });
    };

    const handleListDelete = (listId) => {
        axios.delete(`http://localhost:8000/${listId}`)
            .then(() => {
                const updatedLists = lists.filter((list) => list._id !== listId);
                setLists(updatedLists);
            })
            .catch((error) => {
                console.error('Error deleting list:', error);
            });
    };

    const addCard = (id, newCard) => {

        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === id);

        updatedList.cards.push(newCard);
        axios.put(`http://localhost:8000/${id}`, updatedList)
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });
    };

    const updateCardTitle = (listId, cardId, newCard) => {

        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === listId);
        
        const updatedCards = [...updatedList.cards];
        const updatedCard = updatedCards.find((card) => card._id === cardId);

        updatedCard.title = newCard.title;
        updatedCard.description = newCard.description;

        updatedList.cards = updatedCards;
        axios.put(`http://localhost:8000/${listId}`, updatedList)
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });
    };

    const handleCardDelete = (listId, updatedCards) => {
        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === listId);
        
        updatedList.cards = updatedCards;
        axios.put(`http://localhost:8000/${listId}`, updatedList)
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });
    };

    const updateBgColor = (id, newColor) => {

        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === id);

        updatedList.bgColor = newColor;
        axios.put(`http://localhost:8000/${id}`, updatedList)
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
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
            <div className={styles.listsContainer} >
                {lists.map((list) => (
                    <div onDragEnter={handleHover}>
                        <NewList 
                        key={list._id} 
                        list={list}
                        addNewCard={addCard}
                        updateBgColor={updateBgColor}
                        updateListTitle={updateListTitle}
                        updateCardTitle={updateCardTitle}
                        cardDelete={handleCardDelete}
                        moveToListId={moveToListId}
                        dropInside={dropInside}
                        dropOutside={dropOutside}
                        listDelete={() => handleListDelete(list._id)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Lists;

