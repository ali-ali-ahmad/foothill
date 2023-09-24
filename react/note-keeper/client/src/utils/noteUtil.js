
import { API_BASE_URL } from "../data/config";

export const formatedDate = (timestamp) => {
    const date = new Date(timestamp);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
};

export const addNewNote = (newNote, setNotes) => {

    try {
        fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setNotes((prev) => [...prev, data]);
        });
    } catch (error) {
        console.error('Error adding new note:', error);
    }

};

export const deleteNote = async (noteId, notes, setNotes) => {
    
    const updatedNotes = notes.filter((note) => note._id !== noteId);

    try {
        const response = await fetch(`${API_BASE_URL}/${noteId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setNotes(updatedNotes);
    } catch (error) {
        console.error('Error deleting note:', error);
    }

};
