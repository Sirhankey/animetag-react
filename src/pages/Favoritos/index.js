import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import { useFavoritosContext } from 'contextos/Favoritos';
import { onValue, ref } from 'firebase/database';
import { auth, db } from 'infra/firebase';
import { useEffect } from 'react';

function Favoritos() {
    const { favorito, adicionarFavorito, setFavorito } = useFavoritosContext();

    useEffect(() => {
        const getFromDatabase = async () => {
            onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
                const data = snapshot.val();
                if (data !== null) {
                    let favoritoMaisRecente = null;
                    let timestampMaisAlto = 0;

                    Object.values(data).forEach((favorito) => {
                        // console.log('favorito:', favorito);
                        if (favorito.timeStamp > timestampMaisAlto) {
                            timestampMaisAlto = favorito.timeStamp;
                            favoritoMaisRecente = favorito;
                        }
                    });
                    // console.log('favoritoMaisRecente:', favoritoMaisRecente);
                    setFavorito(favoritoMaisRecente.favorito);
                } else {
                    setFavorito([]);
                }
            });
        }

        getFromDatabase();

    }, []); // Sem dependências, executado apenas uma vez ao montar o componente

    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito ? favorito.map((item) => (
                    <Card key={item.id} {...item} />
                )) : null}
            </section>

        </>
    )
}

export default Favoritos;
