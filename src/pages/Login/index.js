import { useUsuarioContext } from 'contextos/Usuario';
import styles from './Login.module.css'
import { logarUsuario } from 'services/usuarios';

function Login({ onLogin }) {
    const { usuario, setUsuario } = useUsuarioContext();

    const handleChange = (event) => {
        const { value, name } = event.target;
        // console.log(event);
        setUsuario((objetoAtual) => ({
            ...objetoAtual,
            [name]: value
        }));
    }

    const handleLogin = (event) => {
        event.preventDefault();
        logarUsuario(usuario).then((usuario) => {
            console.log('usuario!!!', usuario);
            if (usuario) {
                onLogin(usuario);
            }
        }).catch((error) => {
            console.error('Erro ao logar', error);
            alert('Erro ao logar');
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card_body}>
                    <form>
                        <div className={styles.form_group}>
                            <label>Usuário</label>
                            <input
                                type="text"
                                className={styles.form_control}
                                name="email"
                                placeholder="Usuário"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label>Senha</label>
                            <input
                                type="password"
                                className={styles.form_control}
                                name="password"
                                placeholder="Senha"
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.btn}
                            onClick={handleLogin}>
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;