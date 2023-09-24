import styles from './App.module.css';
import LandingPage from './views/LandingPage';

const  App = () => {
  return (
    <div className={styles.container}>
      <LandingPage />
    </div>
  );
}

export default App;
