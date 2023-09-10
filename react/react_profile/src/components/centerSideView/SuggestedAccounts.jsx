import AccountCard from './AccountCard';
import ShowMoreBtn from '../reusable/ShowMoreBtn';
import styles from './css/SuggestedAccounts.module.css';

function SuggestedAccounts(props) {
    const {currentProfile} = props


    return (
        <div className={styles.container}>
            <h2>Who to follow</h2>
            <AccountCard currentProfile={currentProfile} id={6}/>
            <AccountCard currentProfile={currentProfile} id={8}/>
            <AccountCard currentProfile={currentProfile} id={7}/>
            <AccountCard currentProfile={currentProfile} id={3}/>
            <AccountCard currentProfile={currentProfile} id={9}/>
            <AccountCard currentProfile={currentProfile} id={10}/>
            <AccountCard currentProfile={currentProfile} id={11}/>
            <AccountCard currentProfile={currentProfile} id={5}/>
            <AccountCard currentProfile={currentProfile} id={4}/>
            <ShowMoreBtn />
        </div>
    );
}

export default SuggestedAccounts;
