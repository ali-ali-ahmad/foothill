import TrendingAccountCard from './TrendingAccountCard';
import styles from './css/TrendingAccount.module.css';
import { trendingAccounts } from '../data/trendingAccounts';

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
            </div>
        </div>
    );
}

export default TrendingAccount;
