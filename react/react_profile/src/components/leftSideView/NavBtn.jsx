import styles from './css/NavBtn.module.css';

function NavBtn(props) {
    return (
        <a href={props.link} className={styles.container}>
            <img src={props.logo} alt={props.alt} />
            <p>{props.title}</p>
        </a>
    );
}

export default NavBtn;
