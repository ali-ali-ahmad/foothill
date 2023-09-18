import styles from './App.module.css';
import ListsContainer from './views/ListsContainer';


const App = () => {
  return (
    <div className={styles.appContainer}>
      <ListsContainer />
    </div>
  );
}

export default App;
