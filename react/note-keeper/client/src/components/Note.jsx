import { useState } from 'react';
import styles from './css/Note.module.css';
import { formatedDate } from '../utils/noteUtil';

const  Note = ({note}) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    return (
        <div className={styles.noteContainer}>
            <p>{title}</p>
            <p>{content}</p>
            <p>{formatedDate(note.createdAt)}</p>
        </div>
    );
}

export default Note;
