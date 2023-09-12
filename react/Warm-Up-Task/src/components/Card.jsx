import React, { useState } from 'react';
import styles from './Card.module.css';
import userIcon from '../user_icon.png';

function Card({ name }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(prev=>!prev);
    };
    

    return (
        <div className={styles.card}>
            <div>
                <img src={userIcon} alt="Profile Icon" />
                <label>{name}</label>
            </div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}

export default Card;
