import React, {useState} from 'react';
import NavBtn from "../components/NavBtn";
import { navBtnInfo } from '../data/navBtnInfo';
import PostBtn from '../components/PostBtn';
import ProfileCard from '../components/ProfileCard';
import { profiles } from '../data/users';
import TwitterXLogo from '../icons/TwitterXLogo.jpg';
import styles from './LeftSideBarView.module.css';





function LeftSideView(props) {
    const [currentId, setCurrentId] = useState(2);

    const selectedProfile = profiles.find(profile => profile.id === currentId);


    return (
        <div className={props.className}>
            <div className={styles.upperPart}>
                <img
                    className={styles.xLogo}
                    src={TwitterXLogo}
                    alt="Page logo"
                    />
                <div className={styles.navLinks}>
                    {Object.keys(navBtnInfo).map((key) => (
                        <NavBtn
                            key={key}
                            title={navBtnInfo[key].title}
                            logo={navBtnInfo[key].logo}
                            alt={navBtnInfo[key].alt}
                            link={navBtnInfo[key].link}
                        />
                    ))}
                </div>
                <PostBtn />
            </div>
            <ProfileCard
                name={selectedProfile.name}
                link={selectedProfile.profilePicture}
                userName={selectedProfile.userName}
            />
        </div>
    );
}

export default LeftSideView;
