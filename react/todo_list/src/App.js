
import styles from './App.module.css';
import Doing from './views/Doing';
import Done from './views/Done';
import ToDo from './views/ToDo';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>ToDo List</h1>
      <div className={styles.listDisplay}>
        <ToDo />
        <Doing />
        <Done />
      </div>
    </div>
  );
}

export default App;
