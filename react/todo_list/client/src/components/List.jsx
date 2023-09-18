import React, { useState } from 'react';
import Card from './Card';
import styles from './css/List.module.css';
import ColorPicker from './ColorPicker';
import { icons } from '../data/icons';
import { 
    addCard as addNewCard, 
    updateListTitle, 
    updateBgColor,
    deleteList
} from '../views/utils';

const NewList = ({ list, setLists, lists }) => {
    const [listTitle, setListTitle] = useState(list.title);
    const [cards, setCards] = useState(list.cards);
    const [backgroundColor, setBackgroundColor] = useState(list.bgColor);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const addCard = () => {
        if (newCardTitle) {
            const newCard = {
                title: newCardTitle,
                description: ""
            }
            setCards([...cards, newCard]);
            addNewCard(list._id, newCard, lists, setLists)
            setNewCardTitle('');
        }
    };
    
    const handleTitleEditIcon = (e) => {
        e.stopPropagation();
        setIsEditingTitle(true);
    };

    const handleTitleDoneIcon = (e) => {
        e.stopPropagation();
        setIsEditingTitle(false);
        updateListTitle(list._id, listTitle, lists, setLists);
    };

    const handleMoreIcon = (e) => {
        e.stopPropagation();
        setShowColorPicker(!showColorPicker);
    };

    const handleColorChange = (color) => {
        setBackgroundColor(color);
        updateBgColor(list._id, color, lists, setLists)
        setShowColorPicker(false);
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
                            onChange={(e) => setListTitle(e.target.value)}
                            onBlur={handleTitleDoneIcon}
                        />
                        <img src={icons.done} alt="Done Icon" onClick={handleTitleDoneIcon} />
                    </div>
                ) : (
                    <div className={styles.titleAndCount}>
                        <span style={{ backgroundColor }}>{listTitle}</span>
                        <span>{cards.length}</span>
                    </div>
                )}
                <div className={styles.titleOption}>
                    <img src={icons.edit} alt="Edit Icon" onClick={handleTitleEditIcon} />
                    <img src={icons.remove} alt="Delete icon" onClick={() => deleteList(list._id, lists, setLists)}/>
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
                {cards.map((card) => (
                    <Card 
                    key={card._id} 
                    card={card}
                    lists={lists}
                    listId={list._id}
                    setCards={setCards}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewList;