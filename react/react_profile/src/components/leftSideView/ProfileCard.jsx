import styles from './css/ProfileCard.module.css';
import profileInfo from '../../icons/profileInfo.svg';

function ProfileCard({name, picture, alt, userName}) {

    return (
        <div className={styles.container}>
            <img className={styles.profileImg} src={picture} alt={alt} />
            <div className={styles.userInfo}>
                <p>{name}</p>
                <p className={styles.userName}>{userName}</p>
            </div>
            <img className={styles.infologo} src={profileInfo} alt='Profile Info logo' />
        </div>
    );
}

export default ProfileCard;
