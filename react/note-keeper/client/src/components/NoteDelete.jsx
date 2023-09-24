import styles from './css/NoteDelete.module.css';
import { deleteNote } from '../utils/noteUtil';

const  NoteDelete = ({setIsDeleting, noteId, notes, setNotes}) => {

    const handleDeletion = (e) => {
        e.stopPropagation();
        deleteNote(noteId, notes, setNotes);
        setIsDeleting(false);
    }

    const handleClose = (e) => {
        e.stopPropagation();
        setIsDeleting(false);
    }

    return (
        <div className={styles.deleteContainer}>
            <h2>Note Deletion</h2>
            <p>Are you certain you wish to delete this Note?</p>
            <div className={styles.actionButtons}>
                <button 
                    type='button' 
                    className={styles.closeButton}
                    onClick={handleClose}
                >Close</button>
                <button 
                type='button' 
                className={styles.deleteButton} 
                onClick={handleDeletion}
                >Delete</button>
            </div>
        </div>
    );
}

export default NoteDelete;
