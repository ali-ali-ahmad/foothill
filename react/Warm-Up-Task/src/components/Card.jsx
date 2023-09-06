import React, { useState } from 'react';
import styles from './Card.module.css';

function Card({ name }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.card}>
            <img src={require('../user_icon.png')} alt="Profile Icon" />
            <label>{name}</label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}

export default Card;
