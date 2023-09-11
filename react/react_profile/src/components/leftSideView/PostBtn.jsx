import styles from './css/PostBtn.module.css';
import postAdd from '../../icons/postAdd.svg';

function PostBtn() {
    return (
        <div>
            <input className={styles.postBtn} type='submit' value='Post'/>
            <img className={styles.postBtnLogo} src={postAdd} alt="Post logo" />
        </div>
    );
}

export default PostBtn;
