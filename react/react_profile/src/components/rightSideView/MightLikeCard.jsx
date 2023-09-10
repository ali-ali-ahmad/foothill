import styles from './css/MightLikeCard.module.css';
import { profiles } from '../../data/users';
import FollowBtn from '../reusable/FollowBtn';

function MightLikeCard(props) {

    const selectedProfile = profiles.find(profile => profile.id === props.id);

    return (
        <div className={styles.container}>
            <div className={styles.accountInfo}>
                <img src={selectedProfile.profilePicture} alt="Profile" />
                <div className={styles.profileName}>
                    <p className={styles.name}>{selectedProfile.name}</p>
                    <p className={styles.userName}>{selectedProfile.userName}</p>
                </div>
            </div>
            <FollowBtn />
        </div>
    );
}

export default MightLikeCard;
