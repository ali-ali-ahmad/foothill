import React, {useRef} from 'react';
import LeftSide from './views/LeftSide';
import RightSide from './views/RightSide';
import CenterSide from './views/CenterSide';
import styles from './App.module.css';
import MobileNavBtns from './views/MobileNavBtns';
import { profiles } from './data/users';

function App() {
    const firstDivRef = useRef();
    const secondDivRef = useRef();

    const user = profiles.find(profile => profile.id === 2);
    const displayedProfile = profiles.find(profile => profile.id === 1);

    const handleScrollFirst = (scroll) => {
        secondDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    
    const handleScrollSecond = (scroll) => {
        firstDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    
    return (
        <div className={styles.container}>
            <LeftSide className={styles.leftSide} user={user} />
            <div className={styles.centerPage} onScroll={handleScrollFirst} ref={firstDivRef}>
                <CenterSide  
                    displayedProfile={displayedProfile} 
                    user={user}
                />
            </div>
            <div className={styles.rightSide} onScroll={handleScrollSecond} ref={secondDivRef}>
                <RightSide  />
            </div>
            <MobileNavBtns className={styles.MobileView}/>
        </div>
    );
}

export default App;