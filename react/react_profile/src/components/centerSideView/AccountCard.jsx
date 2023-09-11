import styles from './css/AccountCard.module.css';
import profileIcon from '../../icons/profile.svg';
import { profiles } from '../../data/users';
import FollowBtn from '../reusable/FollowBtn';

function AccountCard({ currentProfile, id }) {

    const selectedProfile = profiles.find((profile) => profile.id === id);

    const matchedFollowers = selectedProfile.followers.users.filter((follower) =>
        currentProfile.following.users.includes(follower)
    );

    const displayedFollowers = matchedFollowers.slice(0, 1);
    const remainingFollowersCount = matchedFollowers.length - 1;

    return (
        <div className={styles.container}>
            <div className={styles.matchedFollowers}>
                <img src={profileIcon} alt="Profile" />
                <div className={styles.followersNames}>
                    {displayedFollowers.map((follower) => {
                        const findProfile = profiles.find((profile) => profile.userName === follower);
                        return <p key={follower}>{findProfile ? findProfile.name : follower},</p>;
                    })}
                    {remainingFollowersCount > 0 && <p>{`+ ${remainingFollowersCount} others follow`}</p>}
                </div>
            </div>
            <div className={styles.accountInfo}>
                <div>
                    <img src={selectedProfile.profilePicture} alt="Profile" />
                    <div className={styles.profileName}>
                        <p>{selectedProfile.name}</p>
                        <p className={styles.userName}>{selectedProfile.userName}</p>
                    </div>
                </div>
                <FollowBtn />
            </div>
            <p>{selectedProfile.description}</p>
        </div>
    );
}

export default AccountCard;
