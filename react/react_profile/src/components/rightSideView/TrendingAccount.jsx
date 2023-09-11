import TrendingAccountCard from './TrendingAccountCard';
import styles from './css/TrendingAccount.module.css';
import { trendingAccounts } from '../../data/trendingAccounts';
import ShowMoreBtn from '../reusable/ShowMoreBtn';

function TrendingAccount() {
    return (
        <div className={styles.container}>
            <h2>Trending for you</h2>
            <div className={styles.navLinks}>
                {trendingAccounts.map((item) => (
                    <TrendingAccountCard
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        posts={item.posts}
                    />
                ))}
                <ShowMoreBtn />
            </div>
        </div>
    );
}

export default TrendingAccount;
