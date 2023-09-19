import { colors } from '../data/colors';
import { API_BASE_URL } from './config';

export const addNewList = (setLists, newListTitle, setNewListTitle) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    if (newListTitle) {
        const newList = {
            title: newListTitle,
            bgColor: randomColor,
            cards: []
        };

        fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newList),
        })
        .then((response) => response.json())
        .then((data) => {
            setLists((prev) => [...prev, data]);
            setNewListTitle('');
        })
        .catch((error) => {
            console.error('Error adding new list:', error);
        });
    }
};

export const updateListTitle = (id, newTitle, lists, setLists) => {
    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === id);

    updatedList.title = newTitle;

    fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedList),
    })
    .then(() => {
        setLists(updatedLists);
    })
    .catch((error) => {
        console.error('Error updating list title:', error);
    });
};

export const deleteList = (listId, lists, setLists) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this list?");
    
    if (confirmDelete) {
        const updatedLists = lists.filter((list) => list._id !== listId);
        
        fetch(`${API_BASE_URL}/${listId}`, {
            method: 'DELETE',
        })
        .then(() => {
            setLists(updatedLists);
        })
        .catch((error) => {
            console.error('Error deleting list:', error);
        });
    } else {
        return;
    }
};

export const addCard = (listId, newCard, lists, setLists) => {

    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === listId);

    updatedList.cards.push(newCard);

    fetch(`${API_BASE_URL}/${listId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedList),
    })
    .then(() => {
        setLists(updatedLists);
    })
    .catch((error) => {
        console.error('Error adding new card:', error);
    });
};

export const updateCard = (listId, cardId, newCard, lists, setCards) => {

    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === listId);

    const updatedCards = [...updatedList.cards];
    const updatedCard = updatedCards.find((card) => card._id === cardId);

    updatedCard.title = newCard.title;
    updatedCard.description = newCard.description;

    updatedList.cards = updatedCards;

    fetch(`${API_BASE_URL}/${listId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedList),
    })
    .then(() => {
        setCards(updatedCards);
    })
    .catch((error) => {
        console.error('Error updating card:', error);
    });
};

export const deleteCard = (listId, cardId, lists, setCards) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");

    if (confirmDelete) {
        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === listId);
    
        const updatedListCards = updatedList.cards.filter((card) => card._id !== cardId);
        
        updatedList.cards = updatedListCards;

        fetch(`${API_BASE_URL}/${listId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        })
        .then(() => {
            setCards(updatedListCards);
        })
        .catch((error) => {
            console.error('Error deleting card:', error);
        });
    } else {
        return;
    }
};

export const updateBgColor = (listId, newColor, lists, setLists) => {

    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === listId);

    updatedList.bgColor = newColor;

    fetch(`${API_BASE_URL}/${listId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedList),
    })
    .then(() => {
        setLists(updatedLists);
    })
    .catch((error) => {
        console.error('Error updating title background color:', error);
    });
};





