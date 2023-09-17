import React, { useState } from 'react';
import styles from './css/Card.module.css';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';
import doneIcon from '../icons/done.svg';



const Card = ({ card, cardEdit, cardDelete }) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [editedTitle, setEditedTitle] = useState(card.title);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); 
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [editedDescription, setEditedDescription] = useState(card.description || "No description for this card");


    const handleEditTitleClick = (e) => {
        e.stopPropagation();
        setIsEditingTitle(true);
    };

    const handleCardDelete = (e) => {
        e.stopPropagation();
        cardDelete(card._id);
    };

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleSaveTitle = () => {
        cardEdit(card._id, editedTitle, editedDescription);
        setIsEditingTitle(false);
    };

    const handleCardContainerClick = () => {
        if(!isEditingTitle){
            setIsDescriptionOpen(!isDescriptionOpen); 
        }
    };

    const handleEditDescriptionClick = () => {
        setIsEditingDescription(true);
        
    };

    const handleDescriptionChange = (e) => {
        setEditedDescription(e.target.value);
    };

    const handleSaveDescription = () => {
        cardEdit(card._id, editedTitle, editedDescription);
        setIsEditingDescription(false);
    };

    return (
        <div className={styles.cardContainer} >
            <div className={styles.cardTitle} onClick={handleCardContainerClick}>
                {isEditingTitle ? (
                    <div className={styles.editInput}>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={handleTitleChange}
                            onBlur={handleSaveTitle}
                        />
                        <img src={doneIcon} alt="done Icon" onClick={handleSaveTitle} />
                    </div>
                ) : (
                    <span>{editedTitle}</span>
                )}
                <div className={styles.cardOptions}>
                    <img src={editIcon} alt="Edit Icon" onClick={handleEditTitleClick} />
                    <img src={deleteIcon} alt="Delete icon" onClick={handleCardDelete}/>
                </div>
            </div>
            {isDescriptionOpen && (
                <div className={styles.cardContent}>
                    <div className={styles.descriptionHeader}>
                        <p>Description: </p>
                        <img src={editIcon} alt="Edit Icon" onClick={handleEditDescriptionClick} />
                    </div>
                    {isEditingDescription ? (
                        <div className={styles.editDescription}>
                            <span>Edit Description</span>
                            <textarea 
                                className={styles.textArea}
                                value={editedDescription}
                                onChange={handleDescriptionChange}
                                onBlur={handleSaveDescription}
                                spellCheck="false"
                            />
                            <img
                                src={doneIcon}
                                alt="Done Icon"
                                onClick={handleSaveDescription}
                            />
                        </div>
                    ) : (
                        <div className={styles.description}>
                            <p>{editedDescription}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Card;
