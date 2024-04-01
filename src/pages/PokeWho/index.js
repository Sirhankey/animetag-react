import styles from './PokeWho.module.css';

function PokeWho() {
    return (
        <div className={styles.container}>

            <div className={styles.carrousell}></div>
            <div className={styles.parentContainer}>
                <div className={styles.pokemon}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
                </div>
                <div className={styles.placar}>
                    <h2>5</h2>
                </div>
            </div>
            <div className={styles.grid_container}>
                <div className={styles.grid_item}>Item 1</div>
                <div className={styles.grid_item}>Item 2</div>
                <div className={styles.grid_item}>Item 3</div>
                <div className={styles.grid_item}>Item 4</div>
            </div>
        </div>
    );
}

export default PokeWho;