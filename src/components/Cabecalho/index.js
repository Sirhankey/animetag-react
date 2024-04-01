import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from 'components/CabecalhoLink';
import Logout from 'components/Logout';

function Cabecalho() {
    const location = useLocation();
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img className={styles.logo} src={logo} alt="Logo do Anime Tag" />
            </Link>
            <nav className={styles.nav}>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
                <CabecalhoLink url="./PokeWho">
                    PokeWho?
                </CabecalhoLink>
                {location.pathname !== '/login' && <Logout />}
            </nav>
        </header>
    )
}

export default Cabecalho;