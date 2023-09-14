// ColorPicker.js
import React from 'react';
import styles from './css/ColorPicker.module.css';

const ColorPicker = ({ onSelectColor }) => {

    const colors = ['red', 'blue', 'yellow', 'green', 'grey', 'purple', 'orange', 'pink', 'brown'];

    return (
        <div className={styles.container}>
            <span>Colors</span>
            <div className={styles.colorList}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={styles.colorOption}
                        onClick={() => onSelectColor(color)}
                    >
                        <div style={{ backgroundColor: color }}></div>
                        <p>{color}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;
