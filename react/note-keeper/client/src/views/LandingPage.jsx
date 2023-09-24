
import Note from '../components/Note';
import NoteNewInput from '../components/NoteNewInput';
import SearchBar from '../components/SearchBar';
import styles from './css/LandingPage.module.css';

const  LandingPage = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>My Note Keeper</h1>
                <SearchBar />
            </header>
            <main>
                <NoteNewInput />
                <Note />
            </main>
        </div>
    );
}

export default LandingPage;
