import React, { useState } from 'react';
import styles from './css/Card.module.css';
import { icons } from '../data/icons';
import { updateCard, deleteCard } from '../views/utils';

const Card = ({ card, lists, listId, setCards }) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [cardTitle, setCardTitle] = useState(card.title);
    const [cardDescription, setCardDescription] = useState(card.description || "No description for this card");
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); 
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    const editedCard = {
        title: cardTitle,
        description: cardDescription
    }

    const handleEditTitle = (e) => {
        e.stopPropagation();
        setIsEditingTitle(true);
    };

    const handleSaveTitle = (e) => {
        e.stopPropagation();
        updateCard(listId, card._id, editedCard, lists, setCards);
        setIsEditingTitle(false);
    };

    const handleCardDelete = (e) => {
        e.stopPropagation();
        deleteCard(listId, card._id, lists, setCards);
    };

    const handleCardContainerClick = () => {
        if(!isEditingTitle){
            setIsDescriptionOpen(!isDescriptionOpen); 
        }
    };

    const handleSaveDescription = () => {
        updateCard(listId, card._id, editedCard, lists, setCards);
        setIsEditingDescription(false);
    };

    return (
        <div className={styles.cardContainer} >
            <div className={styles.cardTitle} onClick={handleCardContainerClick}>
                {isEditingTitle ? (
                    <div className={styles.editInput}>
                        <input
                            type="text"
                            value={cardTitle}
                            onChange={(e) => setCardTitle(e.target.value)}
                            onBlur={handleSaveTitle}
                        />
                        <img src={icons.done} alt="Done Icon" onClick={handleSaveTitle} />
                    </div>
                ) : (
                    <span>{cardTitle}</span>
                )}
                <div className={styles.cardOptions}>
                    <img src={icons.edit} alt="Edit Icon" onClick={handleEditTitle} />
                    <img src={icons.remove} alt="Delete icon" onClick={handleCardDelete}/>
                </div>
            </div>
            {isDescriptionOpen && (
                <div className={styles.cardContent}>
                    <div className={styles.descriptionHeader}>
                        <p>Description: </p>
                        <img src={icons.edit} alt="Edit Icon" onClick={() => setIsEditingDescription(true)} />
                    </div>
                    {isEditingDescription ? (
                        <div className={styles.editDescription}>
                            <span>Edit Description</span>
                            <textarea 
                                className={styles.textArea}
                                value={cardDescription}
                                onChange={(e) => setCardDescription(e.target.value)}
                                onBlur={handleSaveDescription}
                                spellCheck="false"
                            />
                            <img
                                src={icons.done}
                                alt="Done Icon"
                                onClick={handleSaveDescription}
                            />
                        </div>
                    ) : (
                        <div className={styles.description}>
                            <p>{cardDescription}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Card;
