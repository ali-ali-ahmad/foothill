import Card from '../components/Card';
import { newMemebers } from '../data/NewMembers';
import Search from '../components/Search';
import styles from './MemberAdding.module.css';
import Button from '../components/Button';


function MemberAdding() {
    return (
        <div className={styles.container}>
            <h2>Add members to Front-end development team</h2>
            <Search />
            {newMemebers.map((member) => (
                <Card name={member.name}/>
            ))}
            <div className={styles.actionButtons}>
                <Button className={styles.cancelButton} buttonValue="Cancel"/>
                <Button className={styles.saveButton} buttonValue="Save"/>
            </div>
        </div>
    );
}

export default MemberAdding;
