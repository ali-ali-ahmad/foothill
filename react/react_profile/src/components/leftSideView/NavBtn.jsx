import styles from './css/NavBtn.module.css';

function NavBtn({link, title, logo, alt}) {

    return (
        <a href={link} className={styles.container}>
            <img src={logo} alt={alt} />
            <p>{title}</p>
        </a>
    );
}

export default NavBtn;
