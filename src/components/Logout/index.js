import { signOut } from 'firebase/auth';
import styles from './Logout.module.css';
import { auth } from 'infra/firebase';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login');
        })
            .catch((error) => {
                alert('Error signing out:', error);
            });
    }
    return (
        <div className={styles.logout}>
            <button type="button" onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Logout;