import React from 'react';
import styles from './css/Card.module.css';

const Card = ({ title }) => {
    return (
        <div className={styles.container}>
            <span>{title}</span>
        </div>
    );
};

export default Card;
