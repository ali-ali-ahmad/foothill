import styles from './css/ProfileHeader.module.css';
import backArrow from '../icons/backArrow.svg';
import moreHoriz from '../icons/moreHoriz.svg';
import link from '../icons/link.svg';
import calendar from '../icons/calendar.svg';
import notificationAdd from '../icons/notificationAdd.svg';
import FollowBtn from './followBtn';
import { profiles } from '../data/users';

function ProfileHeader(props) {
    const { profile, matchedFollowers } = props;

    const displayedFollowers = matchedFollowers.slice(0, 3);
    const remainingFollowersCount = matchedFollowers.length - 3; 

    return (
        <div className={styles.container}>
            <div className={styles.accountName}>
                <img src={backArrow} alt="Back Arrow" />
                <div className={styles.textContent}>
                    <h3>{profile.name}</h3>
                    <p>{profile.postsNumber} Posts</p>
                </div>
            </div>
            <div className={styles.profileInfo}>
                <img className={styles.coverPhoto} src={profile.profileCover} alt="CoverPhoto" />
                <img className={styles.profilePhoto} src={profile.profilePicture} alt="ProfilePhoto" />
            </div>
            <div className={styles.profileBtns}>
                <img className={styles.moreBtn} src={moreHoriz} alt="More Arrow" />
                <img className={styles.notificationBtn} src={notificationAdd} alt="notification Add" />
                <FollowBtn />
            </div>
            <div className={styles.profileContent}>
                <div className={styles.accountName2}>
                    <h3>{profile.name}</h3>
                    <h5>{profile.userName}</h5>
                </div>
                <p>{profile.description}</p>
                <div className={styles.linkAndDate}>
                    <a href={profile.webLink}>
                        <img src={link} alt="Link" />
                        <p>{profile.webLink}</p>
                    </a>
                    <div>
                        <img src={calendar} alt="Calendar" />
                        <p>Joined {profile.joinedDate}</p>
                    </div>
                </div>
                <div className={styles.followingInfo}>
                    <p>{profile.following.number} <span>Following</span></p>
                    <p>{profile.followers.number} <span>Followers</span></p>
                </div>
                <div className={styles.matchedFollowers}>
                    <div className={styles.profilePictures}>
                        {displayedFollowers.map((follower) => {
                            const findProfile = profiles.find((profile) => profile.userName === follower);
                            return (
                            <img
                                key={follower}
                                src={findProfile ? findProfile.profilePicture : ''}
                                alt={findProfile ? findProfile.name : follower}
                                className={styles.smallProfilePicture}
                            />
                            );
                        })}
                    </div>
                    <div className={styles.followersNames}>
                        <p>Followed By</p>
                        {displayedFollowers.map((follower) => {
                            const findProfile = profiles.find((profile) => profile.userName === follower);
                            return <p key={follower}>{findProfile ? findProfile.name : follower},</p>;
                        })}
                        {remainingFollowersCount > 0 && <p>{`+ ${remainingFollowersCount} more`}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;