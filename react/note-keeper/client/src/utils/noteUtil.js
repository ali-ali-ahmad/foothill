
import { API_BASE_URL } from "../data/config";

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
