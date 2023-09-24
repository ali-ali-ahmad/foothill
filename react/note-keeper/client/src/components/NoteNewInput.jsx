import {useState} from 'react';
import styles from './css/NoteNewInput.module.css';

const  NoteNewInput = () => {
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [newTitle, setNewTitle] = useState();
    const [newContent, setNewContent] = useState();


    const handleNewNote = () => {
        const newNote = {
            title: newTitle,
            content: newContent
        }
    }

    const handleCloseContainer = (e) => {
        e.stopPropagation();
        setIsAddingNote(false)
    }

    return (
        <div className={styles.newInputContainer} onClick={() => setIsAddingNote(true)}>
            <input 
                className={styles.titleInput}
                type="text" 
                placeholder='Title'
                
                onChange={(e) => setNewTitle(e.target.value)}
            />
            {
                isAddingNote && 
                <div className={styles.contentContainer}>
                    <input 
                        className={styles.contentInput}
                        type="text" 
                        placeholder='Take a note...'
                        onChange={(e) => setNewContent(e.target.value)}
                    />
                    <div className={styles.actionButtons}>
                        <button 
                        type='button' 
                        className={styles.addButton}
                        onClick={handleNewNote}
                        >Add</button>
                        <button type='button' className={styles.closeButton} onClick={handleCloseContainer}>Close</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default NoteNewInput;
