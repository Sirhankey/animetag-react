import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ url, children }) {
    return (
        <header>
            <Link to={url} className={styles.link}>
                {children}
            </Link>
        </header>
    );
}

export default CabecalhoLink;