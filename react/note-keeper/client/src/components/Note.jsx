import { useState } from 'react';
import styles from './css/Note.module.css';

const  Note = ({title, content}) => {
    const [note, setNote] = useState();

    return (
        <div className={styles.noteContainer}>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    );
}

export default Note;
