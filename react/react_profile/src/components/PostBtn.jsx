import styles from './css/PostBtn.module.css';

function PostBtn(props) {
    return (
        <input className={styles.postBtn} type='submit' value='Post'/>
    );
}

export default PostBtn;
