import styles from './css/ProfileCard.module.css';
import profileInfo from '../../icons/profileInfo.svg';

function ProfileCard(props) {
    return (
        <div className={styles.container}>
            <img className={styles.profileImg} src={props.link} alt={props.alt} />
            <div className={styles.userInfo}>
                <p>{props.name}</p>
                <p className={styles.userName}>{props.userName}</p>
            </div>
            <img className={styles.infologo} src={profileInfo} alt='Profile Info logo' />
        </div>
    );
}

export default ProfileCard;
