
import LeftSide from './views/LeftSide';
import RightSide from './views/RightSide';
import CenterSide from './views/CenterSide';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <LeftSide className={styles.leftSide} />
            <CenterSide className={styles.centerPage} />
            <RightSide className={styles.rightSide} />
        </div>
    );
}

export default App;