import React, { useState } from 'react';
import Card from './Card';
import styles from './css/NewList.module.css';
import addIcon from '../icons/add.svg';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';
import moreIcon from '../icons/more.svg';
import doneIcon from '../icons/done.svg';
import ColorPicker from './ColorPicker';

const NewList = ({ list, handleDeleteList, updateList, updateBgColor }) => {
    const [listTitle, setListTitle] = useState(list.title);
    const [cardTitles, setCardTitles] = useState(list.cards);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(list.bgColor);
    const [showColorPicker, setShowColorPicker] = useState(false);


    const addCard = () => {
        if (newCardTitle) {
            setCardTitles([...cardTitles, newCardTitle]);
            updateList(list._id, newCardTitle)
            setNewCardTitle('');
        }
    };
    

    const handleEditTitleClick = () => {
        setIsEditingTitle(!isEditingTitle);
    };

    const handleTitleChange = (e) => {
        setListTitle(e.target.value);
    };

    const handleMoreIconClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorClick = (color) => {
        setBackgroundColor(color);
        updateBgColor(list._id, color)
        setShowColorPicker(false);
    };

    const handleDeleteCard = (title) => {
        const updatedList = cardTitles.filter((card) => card !== title);
        setCardTitles(updatedList);
    };

    const handleEditCard = (title, newTitle) => {
        const cardIndex = cardTitles.findIndex((card) => card === title);
        if (cardIndex !== -1) {
            const updatedCardTitles = [...cardTitles];
            updatedCardTitles[cardIndex] = newTitle;
            setCardTitles(updatedCardTitles);
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
                {cardTitles.map((title, index) => (
                    <Card 
                    key={index} 
                    title={title} 
                    handleDeleteCard={() => handleDeleteCard(title)}
                    handleEditCard={() => handleEditCard(title)}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewList;