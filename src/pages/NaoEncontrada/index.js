import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <div className={styles.NaoEncontrada}>
            <h1>Ops!</h1>
            <p>A página que você está procurando não foi encontrada.</p>
        </div>
    );
}

export default NaoEncontrada;