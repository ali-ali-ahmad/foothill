import React from 'react';
import styles from './css/ColorPicker.module.css';
import { colors } from '../data/colors';

const ColorPicker = ({ setBackgroundColor }) => {

    return (
        <div className={styles.colorsContainer}>
            <span>Colors</span>
            <div className={styles.colorList}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={styles.colorOption}
                        onClick={() => setBackgroundColor(color)}
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
