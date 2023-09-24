import styles from './css/NoteUpdate.module.css';
import { useState } from 'react';
import { noteUpdate, formatedDate } from '../utils/noteUtil';
import ColorPicker from './ColorPicker';

const NoteUpdate = ({ setIsEditing, noteId, notes, setNotes, note }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [backgroundColor, setBackgroundColor] = useState(note.backgroundColor);
    const [colorList, setColorList] = useState(false);

    const handleUpdate = (e) => {
        e.stopPropagation();

        const updatedNote = {
            title: title,
            content: content,
            backgroundColor: backgroundColor
        }
        console.log(updatedNote);

        noteUpdate(noteId, updatedNote, notes, setNotes)
        setIsEditing(false);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setIsEditing(false);
    };

    const handleColorsListOpen = (e) => {
        e.stopPropagation();
        setColorList(!colorList);
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
            <p>{formatedDate(note.createdAt)}</p>
            <div className={styles.actionButtons}>
                <button type='button' className={styles.closeButton} onClick={handleClose}>
                Close
                </button>
                <button type='button' className={styles.doneButton} onClick={handleUpdate}>
                Done
                </button>
            </div>
            <div className={styles.colorSelector} style={{ backgroundColor }} onClick={handleColorsListOpen}>
                {colorList && 
                <ColorPicker
                setBackgroundColor={setBackgroundColor}
                />
                }
            </div>
        </div>
    );
};

export default NoteUpdate;
