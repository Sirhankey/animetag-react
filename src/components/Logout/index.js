import { signOut } from 'firebase/auth';
import styles from './Logout.module.css';
import { auth } from 'infra/firebase';
import { Button } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';

function Logout() {
    // const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            window.location.reload();

        })
            .catch((error) => {
                alert('Error signing out:', error);
            });
    }
    return (
        <div className={styles.logout}>
            <Button
                color="secondary"
                onClick={handleLogout}
                size="sm">Sair
            </Button>
        </div>
    );
}

export default Logout;