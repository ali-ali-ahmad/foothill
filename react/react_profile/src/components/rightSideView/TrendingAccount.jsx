import TrendingAccountCard from './TrendingAccountCard';
import styles from './css/TrendingAccount.module.css';
import { trendingAccounts } from '../../data/trendingAccounts';
import ShowMoreBtn from '../reusable/ShowMoreBtn';

function TrendingAccount(props) {
    return (
        <div className={styles.container}>
            <h2>Trending for you</h2>
            <div className={styles.navLinks}>
                {Object.keys(trendingAccounts).map((key) => (
                    <TrendingAccountCard
                        key={key}
                        title={trendingAccounts[key].title}
                        category={trendingAccounts[key].category}
                        posts={trendingAccounts[key].posts}
                    />
                ))}
                <ShowMoreBtn />
            </div>
        </div>
    );
}

export default TrendingAccount;
