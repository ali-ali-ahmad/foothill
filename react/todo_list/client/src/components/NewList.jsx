import React, { useState } from 'react';
import Card from './Card';
import styles from './css/NewList.module.css';
import addIcon from '../icons/add.svg';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';
import moreIcon from '../icons/more.svg';
import ColorPicker from './ColorPicker';

const NewList = ({ title }) => {
    const [listTitle, setListTitle] = useState(title);
    const [cardTitles, setCardTitles] = useState([]);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const updateListTitle = (newTitle) => {
        setListTitle(newTitle);
    };

    const addCard = () => {
        if (newCardTitle) {
            setCardTitles([...cardTitles, newCardTitle]);
            setNewCardTitle('');
        }
    };

    const handleEditTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleTitleChange = (e) => {
        setListTitle(e.target.value);
    };

    const handleMoreIconClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setBackgroundColor(color);
        setShowColorPicker(false);
    };

    const primaryColors = ['red', 'blue', 'yellow', 'green', 'grey', 'purple', 'orange', 'pink', 'brown'];

    return (
        <div className={styles.container}>
            <div className={styles.listTitle}>
                {isEditingTitle ? (
                    <input
                        type="text"
                        value={listTitle}
                        onChange={handleTitleChange}
                        onBlur={() => setIsEditingTitle(false)}
                    />
                ) : (
                    <span style={{ backgroundColor }}>{listTitle}</span>
                )}
                <div className={styles.titleOption}>
                    <img src={editIcon} alt="" onClick={handleEditTitleClick} />
                    <img src={deleteIcon} alt="" />
                    <img src={moreIcon} alt="" onClick={handleMoreIconClick} />
                </div>
                {showColorPicker && (
                    <ColorPicker
                        colors={primaryColors}
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
                    <Card key={index} title={title} />
                ))}
            </div>
        </div>
    );
};

export default NewList;