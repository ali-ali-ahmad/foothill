import { useState, useEffect } from 'react';
import Note from '../components/Note';
import NoteNewInput from '../components/NoteNewInput';
import SearchBar from '../components/SearchBar';
import styles from './css/LandingPage.module.css';
import { fetchAllNotes } from '../utils/noteUtil';

const  LandingPage = () => {
    const [notes, setNotes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);


    useEffect(() => {
        fetchAllNotes(setNotes);
    }, []);
    
    return (
        <div className={styles.container}>
            <header>
                <h1>My Note Keeper</h1>
                <SearchBar
                notes={notes}
                setSearchResults={setSearchResults}
                isSearching={isSearching}
                setIsSearching={setIsSearching}
                />
            </header>
            <main>
                <NoteNewInput
                    setNotes={setNotes}
                />
                <div className={styles.notesContainer}>
                    {isSearching?
                        searchResults.map((note) => (
                            <Note
                            key={note._id}
                            note={note}
                            notes={notes}
                            setNotes={setNotes}
                            />
                        )):
                        notes.map((note) => (
                            <Note
                            key={note._id}
                            note={note}
                            notes={notes}
                            setNotes={setNotes}
                            />
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default LandingPage;
