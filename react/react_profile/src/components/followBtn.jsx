import React, {useState} from 'react';
import styles from './css/FollowBtn.module.css';

function FollowBtn(props) {
    const [followStatus, setFollowStatus] = useState(false);

    const handleClick = () => {
        if(followStatus){
            setFollowStatus(false)
        }else {
            setFollowStatus(true)
        }
    }

    return (
        <input 
            className={followStatus? styles.followingBtn: styles.followBtn} 
            // className={styles.followBtn} 
            type='submit' 
            value={followStatus? 'Following': 'Follow'}
            onClick={handleClick}
        />
    );
}

export default FollowBtn;
