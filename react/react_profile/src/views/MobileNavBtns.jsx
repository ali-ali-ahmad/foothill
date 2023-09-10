
// import NavBtn from "../components/leftSideView/NavBtn";
import { navBtnInfo } from '../data/navBtnInfo';
import PostBtn from '../components/leftSideView/PostBtn';
import styles from './css/MobileNavBtns.module.css';

function MobileNavBtns(props) {

    return (
        <div className={props.className}>
            {Object.keys(navBtnInfo)
                .slice(0, 4)
                .map((key) => (
                    <img 
                        src={navBtnInfo[key].logo} 
                        alt={navBtnInfo[key].alt} 
                    />
            ))}
            <div className={styles.floatingBtn}>
                <PostBtn />
            </div>
        </div>
    );
}

export default MobileNavBtns;
