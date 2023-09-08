import React from 'react';
import NavBtn from "../components/NavBtn";
import { navBtnInfo } from '../data/navBtnInfo';
import PostBtn from '../components/PostBtn';


function LeftSideView(props) {
    return (
        <div className={props.className}>
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
        </div>
    );
}

export default LeftSideView;
