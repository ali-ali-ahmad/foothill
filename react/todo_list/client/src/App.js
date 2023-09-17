import styles from './App.module.css';
import Lists from './views/Lists';


const App = () => {
  return (
    <div className={styles.appContainer}>
      <Lists />
    </div>
  );
}

export default App;
