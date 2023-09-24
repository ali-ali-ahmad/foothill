import { useState } from 'react';
import styles from './css/Note.module.css';
import { formatedDate } from '../utils/noteUtil';
import { icons } from '../data/icons';
import NoteDelete from './NoteDelete';

const  Note = ({note, notes, setNotes}) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = (e) => {
        e.stopPropagation();
        setIsDeleting(true);
    }

    return (
        <>
            <div className={styles.noteContainer}>
                <p className={styles.noteTitle}>{title}</p>
                <p className={styles.noteContent}>{content}</p>
                <div>
                    <p className={styles.noteDate}>{formatedDate(note.createdAt)}</p>
                    <img 
                        className={styles.deleteIcon} 
                        src={icons.remove} 
                        alt="Delete Icon"
                        onClick={handleDelete}
                    />
                </div>
            </div>
            {
                isDeleting && 
                <NoteDelete
                key={note._id}
                setIsDeleting={setIsDeleting}
                noteId={note._id}
                notes={notes}
                setNotes={setNotes}
                />
            }
        </>
    );
}

export default Note;
