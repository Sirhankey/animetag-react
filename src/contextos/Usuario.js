import { createContext, useContext, useState } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario';

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState({
        id: null,
        email: '',
        password: ''
    });

    return (
        <UsuarioContext.Provider
            value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export function useUsuarioContext() {
    const { usuario, setUsuario } = useContext(UsuarioContext);

    return { usuario, setUsuario };
}