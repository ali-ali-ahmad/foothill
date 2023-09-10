import MightLikeCard from './MightLikeCard';
import ShowMoreBtn from '../reusable/ShowMoreBtn';
import styles from './css/MightLike.module.css';

function MightLike(props) {
    return (
        <div className={styles.container}>
            <h2>You might like</h2>
            <MightLikeCard id={7}/>
            <MightLikeCard id={6}/>
            <MightLikeCard id={8}/>
            <ShowMoreBtn />
        </div>
    );
}

export default MightLike;
