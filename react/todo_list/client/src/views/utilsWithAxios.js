// import axios from 'axios';
// import { colors } from '../data/colors';

// export const addNewList = (setLists, newListTitle, setNewListTitle) => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const randomColor = colors[randomIndex];

//     if (newListTitle) {
//         const newList = {
//             title: newListTitle,
//             bgColor: randomColor,
//             cards: []
//         };
//         axios.post('http://localhost:8000/', newList)
//             .then((response) => {
//                 setLists(prev=>[...prev, response.data]);
//                 setNewListTitle('');
//             })
//             .catch((error) => {
//                 console.error('Error adding new list:', error);
//             });
//     }
// };

// export const updateListTitle = (id, newTitle, lists, setLists) => {
//     const updatedLists = [...lists];
//     const updatedList = updatedLists.find((list) => list._id === id);

//     updatedList.title = newTitle;
//     axios.put(`http://localhost:8000/${id}`, updatedList)
//     .then(() => {
//         setLists(updatedLists);
//     })
//     .catch((error) => {
//         console.error('Error adding new list:', error);
//     });
// };

// export const deleteList = (listId, lists, setLists) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this list?");
    
//     if (confirmDelete) {
//         const updatedLists = lists.filter((list) => list._id !== listId);
//         axios.delete(`http://localhost:8000/${listId}`)
//             .then(() => {
//                 setLists(updatedLists);
//             })
//             .catch((error) => {
//                 console.error('Error deleting list:', error);
//             });
//     } else {
//         return
//     }
// };


// export const addCard = (id, newCard, lists, setLists) => {

//     const updatedLists = [...lists];
//     const updatedList = updatedLists.find((list) => list._id === id);

//     updatedList.cards.push(newCard);
//     axios.put(`http://localhost:8000/${id}`, updatedList)
//     .then(() => {
//         setLists(updatedLists);
//     })
//     .catch((error) => {
//         console.error('Error adding new list:', error);
//     });
// };

// export const updateCard = (listId, cardId, newCard, lists, setCards) => {

//     const updatedLists = [...lists];
//     const updatedList = updatedLists.find((list) => list._id === listId);

//     const updatedCards = [...updatedList.cards];
//     const updatedCard = updatedCards.find((card) => card._id === cardId);

//     updatedCard.title = newCard.title;
//     updatedCard.description = newCard.description;

//     updatedList.cards = updatedCards;
//     axios.put(`http://localhost:8000/${listId}`, updatedList)
//     .then(() => {
//         setCards(updatedCards);
//     })
//     .catch((error) => {
//         console.error('Error adding new list:', error);
//     });
// };

// export const deleteCard = (listId, cardId, lists, setCards) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this card?");

//     if (confirmDelete) {
//         const updatedLists = [...lists];
//         const updatedList = updatedLists.find((list) => list._id === listId);
    
//         const updatedListCards = updatedList.cards.filter((card) => card._id !== cardId);
        
//         updatedList.cards = updatedListCards;
//         axios.put(`http://localhost:8000/${listId}`, updatedList)
//         .then(() => {
//             setCards(updatedListCards);
//         })
//         .catch((error) => {
//             console.error('Error deleting card:', error);
//         });
//     } else {
//         return;
//     }
// };

// export const updateBgColor = (id, newColor, lists, setLists) => {

//     const updatedLists = [...lists];
//     const updatedList = updatedLists.find((list) => list._id === id);

//     updatedList.bgColor = newColor;
//     axios.put(`http://localhost:8000/${id}`, updatedList)
//     .then(() => {
//         setLists(updatedLists);
//     })
//     .catch((error) => {
//         console.error('Error adding new list:', error);
//     });
// };