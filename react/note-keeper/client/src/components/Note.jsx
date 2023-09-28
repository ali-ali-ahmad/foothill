import { useState } from 'react';
import styles from './css/Note.module.css';
import { formatedDate } from '../utils/noteUtil';
import { icons } from '../data/icons';
import NoteDelete from './NoteDelete';
import NoteUpdate from './NoteUpdate';

const  Note = ({note, notes, setNotes}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (e) => {
        e.stopPropagation();
        setIsEditing(true);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        setIsDeleting(true);
    }

    return (
        <>
            <div className={styles.noteContainer} onClick={handleEdit}>
                <p className={styles.noteTitle}>{note.title}</p>
                <p className={styles.noteContent}>{note.content}</p>
                <p className={styles.noteLink}>{note.link}</p>
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
            {
                isEditing && 
                <NoteUpdate
                key={note._id}
                setIsEditing={setIsEditing}
                noteId={note._id}
                notes={notes}
                setNotes={setNotes}
                note={note}
                />
            }
        </>
    );
}

export default Note;
