import styles from './NavBtn.module.css';

function NavBtn(props) {
    return (
        <a href={props.link} className={styles.container}>
            <img src={props.logo} alt={props.alt} />
            <h3>{props.title}</h3>
        </a>
    );
}

export default NavBtn;
