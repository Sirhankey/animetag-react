import { auth, db } from "infra/firebase";
import { createContext, useContext, useState } from "react";
import { set, ref, onValue } from 'firebase/database';
import { uid } from 'uid';

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}

const writeToDatabase = (favorito) => {
    const newUid = uid();
    const timeStamp = new Date().getTime();
    set(ref(db, `${auth.currentUser.uid}/${newUid}`), {
        favorito: favorito,
        uid: newUid,
        timeStamp: timeStamp
    });
}

export function useFavoritosContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    async function adicionarFavorito(novoFavorito, userId) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            writeToDatabase(novaLista);
            setFavorito(novaLista);
        } else {
            novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
            writeToDatabase(novaLista);
            setFavorito(novaLista);
        }
    }

    return { favorito, adicionarFavorito, setFavorito };
}

