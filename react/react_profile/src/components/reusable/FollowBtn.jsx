import React, {useState} from 'react';
import styles from './css/FollowBtn.module.css';

function FollowBtn(props) {
    const [followStatus, setFollowStatus] = useState(false);
    const [btnValue, setBtnValue] = useState('Follow');

    const handleMouseEnter = () => {
        if(followStatus){
            setBtnValue('Unfollow');
        }
    };

    const handleMouseLeave = () => {
        if(followStatus){
            setBtnValue('Following');
        }
    };

    const handleClick = () => {
        if(followStatus){
            setFollowStatus(false)
            setBtnValue('Follow')
        }else {
            setFollowStatus(true)
            setBtnValue('Following')
        }
    }

    return (
        <input 
            className={followStatus? styles.followingBtn: styles.followBtn} 
            type='submit' 
            value={btnValue}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}

export default FollowBtn;
