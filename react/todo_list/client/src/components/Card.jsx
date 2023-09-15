import React, { useState } from 'react';
import styles from './css/Card.module.css';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';
import doneIcon from '../icons/done.svg';

const Card = ({ card, handleEditCard, handleDeleteCard }) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [editedTitle, setEditedTitle] = useState(card.title);

    const handleEditTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleSaveTitle = () => {
        handleEditCard(card._id, editedTitle);
        setIsEditingTitle(false);
    };

    return (
        <div className={styles.container}>
            {isEditingTitle ? (
                <div className={styles.editInput}>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={handleTitleChange}
                        onBlur={handleSaveTitle}
                    />
                    <img src={doneIcon} alt="Edit Icon" onClick={handleSaveTitle} />
                </div>
            ) : (
                <span>{editedTitle}</span>
            )}
            <div className={styles.cardOptions}>
                <img src={editIcon} alt="Done Icon" onClick={handleEditTitleClick} />
                <img src={deleteIcon} alt="Delete icon" onClick={handleDeleteCard}/>
            </div>
        </div>
    );
};

export default Card;
