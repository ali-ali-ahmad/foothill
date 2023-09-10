import AccountCard from './AccountCard';
import styles from './css/SuggestedAccounts.module.css';
// import profileInfo from '../icons/profileInfo.svg';

function SuggestedAccounts(props) {


    return (
        <div className={styles.container}>
            <h2>Who to follow</h2>
            <AccountCard currentProfile={props.currentProfile} id={8}/>
            <AccountCard currentProfile={props.currentProfile} id={6}/>
            <AccountCard currentProfile={props.currentProfile} id={7}/>
        </div>
    );
}

export default SuggestedAccounts;
