import react, {useState} from 'react';
import styles from './css/SearchBar.module.css';

const  NoteNewInput = () => {
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [newTitle, setNewTitle] = useState();
    const [newContent, setNewContent] = useState();


    const handleSubmit = () => {
        const newNote = {
            title: newTitle,
            content: newContent
        }
    }

    return (
        <div className={styles.container} onClick={() => setIsAddingNote(true)}>
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
                        <button className={styles.addButton}>Add</button>
                        <button className={styles.closeButton} onClick={() => setIsAddingNote(false)}>Close</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default NoteNewInput;
