import {useState} from 'react';
import styles from './css/NoteNewInput.module.css';
import { addNewNote } from '../utils/noteUtil';
import { colors } from '../data/colors';

const NoteNewInput = ({setNotes}) => {
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleNewNote = (e) => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];

        e.stopPropagation();
        if (newTitle) {
            const newNote = {
                title: newTitle,
                content: newContent,
                backgroundColor: randomColor
            }
            addNewNote(newNote, setNotes)
            setNewTitle('');
            setNewContent('');
            setIsAddingNote(false);
        }
    };

    const handleCloseContainer = (e) => {
        e.stopPropagation();
        setIsAddingNote(false)
    }

    return (
        <div className={styles.newInputContainer} onClick={() => setIsAddingNote(true)}>
            <input 
                className={styles.titleInput}
                value={newTitle}
                type="text" 
                placeholder='Title'
                
                onChange={(e) => setNewTitle(e.target.value)}
            />
            {
                isAddingNote && 
                <div className={styles.contentContainer}>
                    <input 
                        className={styles.contentInput}
                        value={newContent}
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
