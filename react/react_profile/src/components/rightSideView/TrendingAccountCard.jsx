import styles from './css/TrendingAccountCard.module.css';
import moreHoriz from '../../icons/moreHoriz.svg';


function TrendingAccountCard(props) {
    const {title, category, posts} = props;

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.category}>{category}</p>
                <p>{title}</p>
                <p className={styles.posts}>{posts} Posts</p>
            </div>
            <img src={moreHoriz} alt="More Logo" />
        </div>
    );
}

export default TrendingAccountCard;
