import styles from './css/ShowMoreBtn.module.css';

function ShowMoreBtn() {
    return (
        <div className={styles.container}>
            <input type="button" value="Show more"/>
        </div>
    );
}

export default ShowMoreBtn;
