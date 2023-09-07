
import LeftSideView from './views/LeftSidebarView';
import RightSideView from './views/RightSidebarView';
import UserProfileView from './views/UserProfileView';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <LeftSideView className={styles.leftSide} />
            <UserProfileView className={styles.centerPage} />
            <RightSideView className={styles.rightSide} />
        </div>
    );
}

export default App;