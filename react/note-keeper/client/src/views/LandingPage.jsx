import { useState, useEffect } from 'react';
import Note from '../components/Note';
import NoteNewInput from '../components/NoteNewInput';
import SearchBar from '../components/SearchBar';
import styles from './css/LandingPage.module.css';
import { API_BASE_URL } from '../data/config';

const  LandingPage = () => {
    const [notes, setNotes] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_BASE_URL);
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div className={styles.container}>
            <header>
                <h1>My Note Keeper</h1>
                <SearchBar />
            </header>
            <main>
                <NoteNewInput
                    setNotes={setNotes}
                />
                <div className={styles.notesContainer}>
                    {notes.map((note) => (
                        <Note
                        key={note._id}
                        note={note}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default LandingPage;
