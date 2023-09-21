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

        try {
            fetch(`${API_BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newList),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setLists((prev) => [...prev, data]);
                setNewListTitle('');
            });
        } catch (error) {
            console.error('Error adding new list:', error);
        }
    }
};


export const updateListTitle = async (id, newTitle, lists, setLists) => {
    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === id);

    updatedList.title = newTitle;

    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setLists(updatedLists);
    } catch (error) {
        console.error('Error updating list title:', error);
    }
};

export const deleteList = async (listId, lists, setLists) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this list?");
    
    if (confirmDelete) {
        const updatedLists = lists.filter((list) => list._id !== listId);

        try {
            const response = await fetch(`${API_BASE_URL}/${listId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setLists(updatedLists);
        } catch (error) {
            console.error('Error deleting list:', error);
        }
    } else {
        return;
    }
};

export const addCard = async (listId, newCard, lists, setLists) => {

    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === listId);

    updatedList.cards.push(newCard);

    try {
        const response = await fetch(`${API_BASE_URL}/${listId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setLists(updatedLists);
    } catch (error) {
        console.error('Error adding new card:', error);
    }
};

export const updateCard = async (listId, cardId, newCard, lists, setCards) => {

    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === listId);

    const updatedCards = [...updatedList.cards];
    const updatedCard = updatedCards.find((card) => card._id === cardId);

    updatedCard.title = newCard.title;
    updatedCard.description = newCard.description;

    updatedList.cards = updatedCards;

    try {
        const response = await fetch(`${API_BASE_URL}/${listId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setCards(updatedCards);
    } catch (error) {
        console.error('Error updating card:', error);
    }
};

export const deleteCard = async (listId, cardId, lists, setCards) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");

    if (confirmDelete) {
        const updatedLists = [...lists];
        const updatedList = updatedLists.find((list) => list._id === listId);
    
        const updatedListCards = updatedList.cards.filter((card) => card._id !== cardId);
        
        updatedList.cards = updatedListCards;

        try {
            const response = await fetch(`${API_BASE_URL}/${listId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedList),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setCards(updatedListCards);
        } catch (error) {
            console.error('Error deleting card:', error);
        }
    } else {
        return;
    }
};

export const updateBgColor = async (listId, newColor, lists, setLists) => {

    const updatedLists = [...lists];
    const updatedList = updatedLists.find((list) => list._id === listId);

    updatedList.bgColor = newColor;

    try {
        const response = await fetch(`${API_BASE_URL}/${listId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setLists(updatedLists);
    } catch (error) {
        console.error('Error updating title background color:', error);
    }
};

export const searchCards = async (searchQuery, lists, setSearchResults) => {
    if (!searchQuery) {
        setSearchResults(lists);
        return;
    }

    const results = lists.filter((list) =>
        list.cards.some((card) =>
            card.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
    );

    try {
        const response = await fetch(`${API_BASE_URL}/search/${searchQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        setSearchResults(results);
    } catch (error) {
        console.error('Error searching cards:', error);
    }
};

