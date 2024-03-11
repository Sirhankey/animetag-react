
import { useFavoritosContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeDesfavoritar from './desfavoritar.png';
import iconeFavoritar from './favoritar.png';
import { Link } from 'react-router-dom';
import { getTypeColor } from 'utils/util';


function Card({ id, name, sprites, types, heightInMeters, weightInKilograms }) {
    const { favorito, adicionarFavorito } = useFavoritosContext();
    const ehFavorito = favorito ? favorito.some((item) => item.id === id) : false;
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    function getPokemonCardStyles() {
        let backgroundStyle;

        if (types.length === 1) {
            backgroundStyle = {
                backgroundColor: getTypeColor(types[0])
            };
        } else if (types.length > 1) {
            const gradientColors = types.map(type => getTypeColor(type));
            backgroundStyle = {
                background: `linear-gradient(to right, ${gradientColors.join(', ')})`
            };
        }
        return backgroundStyle;
    }
    const cardStyles = getPokemonCardStyles();
    // console.log(sprites);
    return (
        <div className={`${styles.container} ${styles.card}`} style={cardStyles}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={sprites.front_default} alt={name} className={styles.capa} />
                <div className={styles.id}>{id}</div>
                <h2 className={styles.name}>{name}</h2>
            </Link>
            <img src={icone}
                alt='Favoritar pokemon'
                className={styles.favoritar}
                onClick={() =>
                    adicionarFavorito({ id, name, sprites, types, heightInMeters, weightInKilograms })
                }
            />
        </div>
    );
}

export default Card;