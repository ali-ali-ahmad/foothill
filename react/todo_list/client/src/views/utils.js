import { colors } from "../data/colors";
import { API_BASE_URL } from "./config";

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getAllLists = async (setLists) => {
  try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setLists(data);
  } catch (error) {
      console.error('Error fetching data:', error.message);
  }
};


export const addNewList = (setLists, newListTitle, setNewListTitle) => {
  if (newListTitle) {
    const newList = {
      title: newListTitle,
      bgColor: getRandomColor(),
      cards: [],
    };

    try {
      fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newList),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setLists((prev) => [...prev, data]);
          setNewListTitle("");
        });
    } catch (error) {
      console.error("Error adding new list:", error);
    }
  }
};

export const updateListTitle = async (listId, title, lists, setLists) => {

  try {
    const response = await fetch(`${API_BASE_URL}/${listId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const updatedLists = lists.map((list) => {
      if (list._id === listId) {
        return data;
      }
      return list;
    });
    setLists(updatedLists);
  } catch (error) {
    console.error("Error updating list title:", error);
  }
};

export const deleteList = async (listId, lists, setLists) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this list?"
  );

  if (confirmDelete) {
    
    try {
      const response = await fetch(`${API_BASE_URL}/${listId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const updatedLists = lists.filter((list) => list._id !== listId);
      setLists(updatedLists);
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  } else {
    return;
  }
};

export const addCard = async (listId, newCard, lists, setLists) => {

  const updatedList = lists.find((list) => list._id === listId);
  updatedList.cards.push(newCard);

  try {
    const response = await fetch(`${API_BASE_URL}/${listId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedList),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const updatedLists = lists.map((list) => {
      if (list._id === listId) {
        return data;
      }
      return list;
    });
    setLists(updatedLists);
  } catch (error) {
    console.error("Error adding new card:", error);
  }
};

export const updateCard = async (listId, cardId, newCard, lists, setCards) => {

  const updatedList = lists.find((list) => list._id === listId);
  const updatedCard = updatedList.cards.map((card) => {
    if (card._id === cardId) {
      return { ...card, ...newCard };
    }
    return card;
  });

  try {
    const response = await fetch(`${API_BASE_URL}/${listId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cards: updatedCard }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setCards(data.cards);
  } catch (error) {
    console.error("Error updating card:", error);
  }
};

export const deleteCard = async (listId, cardId, lists, setCards) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this card?"
  );

  if (confirmDelete) {
    const updatedList = lists.find((list) => list._id === listId);

    const updatedCards = updatedList.cards.filter(
      (card) => card._id !== cardId
    );

    try {
      const response = await fetch(`${API_BASE_URL}/${listId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cards: updatedCards }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  } else {
    return;
  }
};

export const updateBgColor = async (listId, newColor, lists, setLists) => {

  try {
    const response = await fetch(`${API_BASE_URL}/${listId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bgColor: newColor }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const updatedLists = lists.map((list) => {
      if (list._id === listId) {
        return data;
      }
      return list;
    });
    setLists(updatedLists);
  } catch (error) {
    console.error("Error updating title background color:", error);
  }
};

export const searchCards = async (searchQuery, setSearchResults, setIsSearching) => {
  if (!searchQuery) {
    setIsSearching(false);
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/search/${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setSearchResults(data);
  } catch (error) {
    console.error("Error searching cards:", error);
  }
};
