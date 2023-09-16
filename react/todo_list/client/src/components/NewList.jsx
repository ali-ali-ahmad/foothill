import React, { useState } from 'react';
import Card from './Card';
import styles from './css/NewList.module.css';
import addIcon from '../icons/add.svg';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';
import moreIcon from '../icons/more.svg';
import doneIcon from '../icons/done.svg';
import ColorPicker from './ColorPicker';

const NewList = ({ list, handleDeleteList, addNewCard, updateBgColor, updateListTitle, updateCardTitle, handleDeletedCard }) => {
    const [listTitle, setListTitle] = useState(list.title);
    const [cardTitles, setCardTitles] = useState(list.cards);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(list.bgColor);
    const [showColorPicker, setShowColorPicker] = useState(false);


    const addCard = () => {
        if (newCardTitle) {
            const newCard = {
                title: newCardTitle,
                description: ""
            }
            setCardTitles([...cardTitles, newCard]);
            addNewCard(list._id, newCard)
            setNewCardTitle('');
        }
    };
    

    const handleEditTitleClick = (e) => {
        e.stopPropagation();
        setIsEditingTitle(!isEditingTitle);
    };

    const handleTitleChange = (e) => {
        setListTitle(e.target.value);
        updateListTitle(list._id, e.target.value);
    };

    const handleMoreIconClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorClick = (color) => {
        setBackgroundColor(color);
        updateBgColor(list._id, color)
        setShowColorPicker(false);
    };

    const handleDeleteCard = (cardId) => {
        const updatedCards = cardTitles.filter((card) => card._id !== cardId);
        setCardTitles(updatedCards);
        handleDeletedCard(list._id, updatedCards);
    };

    const handleEditCard = (cardId, newTitle, newDescription) => {
        const cardIndex = cardTitles.findIndex((card) => card._id === cardId);
        if (cardIndex !== -1) {
            const editedCard = {
                title: newTitle,
                description: newDescription
            }
            const updatedCardTitles = [...cardTitles];
            updatedCardTitles[cardIndex] = editedCard;
            setCardTitles(updatedCardTitles);
            updateCardTitle(list._id, cardId, editedCard);
        }
    };

    return (
        <div className={styles.container} >
            <div className={styles.listTitle}>
                {isEditingTitle ? (
                    <div className={styles.editInput}>
                        <input
                            type="text"
                            value={listTitle}
                            onChange={handleTitleChange}
                            onBlur={() => setIsEditingTitle(false)}
                        />
                        <img src={doneIcon} alt="Edit Icon" onClick={handleEditTitleClick} />
                    </div>
                ) : (
                    <span style={{ backgroundColor }}>{listTitle}</span>
                )}
                <div className={styles.titleOption}>
                    <img src={editIcon} alt="Done Icon" onClick={handleEditTitleClick} />
                    <img src={deleteIcon} alt="Delete icon" onClick={handleDeleteList}/>
                    <img src={moreIcon} alt="" onClick={handleMoreIconClick} />
                </div>
                {showColorPicker && (
                    <ColorPicker
                        onSelectColor={handleColorClick}
                    />
                )}
            </div>
            <div className={styles.newInput}>
                <img src={addIcon} alt="add Icon" onClick={addCard} />
                <input
                    type="text"
                    placeholder="Enter card title"
                    value={newCardTitle}
                    onChange={(e) => setNewCardTitle(e.target.value)}
                />
            </div>
            <div className={styles.cardList}>
                {cardTitles.map((card) => (
                    <Card 
                    key={card._id} 
                    card={card}
                    handleDeleteCard={handleDeleteCard}
                    handleEditCard={handleEditCard}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewList;