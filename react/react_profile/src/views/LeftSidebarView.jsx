import React from 'react';
import NavBtn from "../components/NavBtn";
import { navBtnInfo } from '../data/navBtnInfo';
import PostBtn from '../components/PostBtn';
import ProfileCard from '../components/ProfileCard';
import { profiles } from '../data/users';





function LeftSideView(props) {
    const userProfile = profiles["@MohamadDewiekat"];

    const imageStyle = {
        width: '40px',
        borderRadius: '50%'
    };

    return (
        <div className={props.className}>
            <img
                src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg"
                alt="Page logo"
                style={imageStyle}
                />
            {Object.keys(navBtnInfo).map((key) => (
                <NavBtn
                    key={key}
                    title={navBtnInfo[key].title}
                    logo={navBtnInfo[key].logo}
                    alt={navBtnInfo[key].alt}
                    link={navBtnInfo[key].link}
                />
            ))}
            <PostBtn />
            <ProfileCard
                name={userProfile.name}
                link={userProfile.profilePicture}
                userName="@MohamadDewiekat"
            />
        </div>
    );
}

export default LeftSideView;
