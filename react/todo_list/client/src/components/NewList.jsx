import React, { useState, useRef } from 'react';
import Card from './Card';
import styles from './css/NewList.module.css';
import ColorPicker from './ColorPicker';
import { icons } from '../data/icons';

const NewList = ({ 
    list, 
    listDelete, 
    addNewCard, 
    updateBgColor, 
    updateListTitle, 
    updateCardTitle, 
    cardDelete,
    dropInside,
    dropOutside,
    moveToListId
}) => {
    const [listTitle, setListTitle] = useState(list.title);
    const [cardTitles, setCardTitles] = useState(list.cards);
    const [backgroundColor, setBackgroundColor] = useState(list.bgColor);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;

    };


    const handleDrop = (cardId) => {
        if(moveToListId === list._id) {
            const copyCardTitles = [...cardTitles]; 
            const dragItemContent = copyCardTitles[dragItem.current];
            copyCardTitles.splice(dragItem.current, 1);
            copyCardTitles.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
            setCardTitles(copyCardTitles);
            dropInside(list._id, copyCardTitles); 
        } else {
            const copyCards = [...cardTitles]; 
            const removedCard = copyCards.filter((card) => card._id !== cardId);
            
            setCardTitles(removedCard);
            dropOutside(list._id, cardId); 
        }
    };
    

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
    
    const handleTitleEditClick = (e) => {
        e.stopPropagation();
        setIsEditingTitle(!isEditingTitle);
    };

    const handleTitleChange = (e) => {
        setListTitle(e.target.value);
        updateListTitle(list._id, e.target.value);
    };

    const handleMoreIcon = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorChange = (color) => {
        setBackgroundColor(color);
        updateBgColor(list._id, color)
        setShowColorPicker(false);
    };

    const handleCardDelete = (cardId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this card?");

        if (confirmDelete) {
            const updatedCards = cardTitles.filter((card) => card._id !== cardId);
            setCardTitles(updatedCards);
            cardDelete(list._id, updatedCards);
        } else {
            return
        }
    };

    const handleCardEdit = (cardId, newTitle, newDescription) => {
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
        <div 
        className={styles.listContainer} 
        id={list._id}
        >
            <div className={styles.listTitle}>
                {isEditingTitle ? (
                    <div className={styles.editInput}>
                        <input
                            type="text"
                            value={listTitle}
                            onChange={handleTitleChange}
                            onBlur={() => setIsEditingTitle(false)}
                        />
                        <img src={icons.done} alt="Done Icon" onClick={handleTitleEditClick} />
                    </div>
                ) : (
                    <span style={{ backgroundColor }}>{listTitle}</span>
                )}
                <div className={styles.titleOption}>
                    <img src={icons.edit} alt="Edit Icon" onClick={handleTitleEditClick} />
                    <img src={icons.remove} alt="Delete icon" onClick={listDelete}/>
                    <img src={icons.more} alt="" onClick={handleMoreIcon} />
                </div>
                {showColorPicker && (
                    <ColorPicker
                        onSelectColor={handleColorChange}
                        />
                )}
            </div>
            <div className={styles.newInput}>
                <img src={icons.add} alt="add Icon" onClick={addCard} />
                <input
                    type="text"
                    placeholder="Enter card title"
                    value={newCardTitle}
                    onChange={(e) => setNewCardTitle(e.target.value)}
                    />
            </div>
            <div 
            className={styles.cardList}>
                {cardTitles.map((card, index) => (
                    <div
                    draggable
                    key={index}
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={() => handleDrop(card._id)}
                    >
                        <Card 
                        key={card._id} 
                        card={card}
                        cardDelete={handleCardDelete}
                        cardEdit={handleCardEdit}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewList;