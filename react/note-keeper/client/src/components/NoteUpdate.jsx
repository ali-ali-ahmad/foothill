import styles from './css/NoteUpdate.module.css';
import { useState } from 'react';
import { noteUpdate, formatedDate } from '../utils/noteUtil';

const NoteUpdate = ({ setIsEditing, noteId, notes, setNotes, note }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [link, setLink] = useState(note.link);


    const handleUpdate = (e) => {
        e.stopPropagation();

        const updatedNote = {
            title: title,
            content: content,
            link: link
        }

        noteUpdate(noteId, updatedNote, notes, setNotes)
        setIsEditing(false);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setIsEditing(false);
    };

    return (
        <div className={styles.updateContainer}>
            <input 
                className={styles.titleInput}
                value={title}
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                className={styles.contentInput}
                value={content}
                type="text" 
                onChange={(e) => setContent(e.target.value)}
            />
            <input 
                className={styles.urlInput}
                value={link}
                type="text" 
                onChange={(e) => setLink(e.target.value)}
            />
            <p>{formatedDate(note.createdAt)}</p>
            <div className={styles.actionButtons}>
                <button type='button' className={styles.closeButton} onClick={handleClose}>
                Close
                </button>
                <button type='button' className={styles.doneButton} onClick={handleUpdate}>
                Done
                </button>
            </div>
        </div>
    );
};

export default NoteUpdate;
