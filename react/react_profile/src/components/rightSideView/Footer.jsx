import styles from './css/Footer.module.css';

function Footer(props) {

    return (
        <div className={styles.container}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Accessibility</p>
            <p>Ads info</p>
            <p>More...</p>
            <p>&copy; 2023 X Corp.</p>
        </div>
    );
}

export default Footer;
