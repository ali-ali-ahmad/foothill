
import NavBtn from "../components/leftSideView/NavBtn";
import { navBtnInfo } from '../data/navBtnInfo';
import PostBtn from '../components/leftSideView/PostBtn';
import ProfileCard from '../components/leftSideView/ProfileCard';
import TwitterXLogo from '../icons/TwitterXLogo.jpg';
import styles from './css/LeftSide.module.css';

function LeftSide({user, className}) {

    return (
        <div className={className}>
            <div className={styles.upperPart}>
                <img
                    className={styles.xLogo}
                    src={TwitterXLogo}
                    alt="Page logo"
                    />
                <div className={styles.navLinks}>
                    {navBtnInfo.map((item) => (
                        <NavBtn
                            key={item.id}
                            title={item.title}
                            logo={item.logo}
                            alt={item.alt}
                            link={item.link}
                        />
                    ))}
                </div>
                <PostBtn />
            </div>
            <ProfileCard
                name={user.name}
                picture={user.profilePicture}
                userName={user.userName}
            />
        </div>
    );
}

export default LeftSide;
