import styles from './css/NavBtn.module.css';

function NavBtn(props) {
    return (
        <a href={props.link} className={styles.container}>
            <img src={props.logo} alt={props.alt} />
            <h4>{props.title}</h4>
        </a>
    );
}

export default NavBtn;
