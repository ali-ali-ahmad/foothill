import { useState } from 'react';
import styles from './css/Note.module.css';

const  Note = ({note}) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    return (
        <div className={styles.noteContainer}>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    );
}

export default Note;
