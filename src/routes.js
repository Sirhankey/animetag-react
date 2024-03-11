import React, { useState } from 'react';
import Cabecalho from 'components/Cabecalho';
import Container from 'components/Container';
import Rodape from 'components/Rodape';
import { FavoritosProvider } from 'contextos/Favoritos';
import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import Pokemon from 'pages/Pokemon';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from 'pages/Login';
import { UsuarioProvider } from 'contextos/Usuario';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { PokemonListProvider } from 'contextos/PokemonList';

function AppRoutes() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (onLogin) => {
        console.log('handleLogin', onLogin);
        if (onLogin) {
            setLoggedIn(true);
        }
    };

    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <UsuarioProvider>
                    <FavoritosProvider>
                        <PokemonListProvider>
                            <ThemeProvider theme={theme}>
                                <Routes>
                                    <Route
                                        path="/login"
                                        element={!loggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
                                    />
                                    <>
                                        <Route path="/" element={loggedIn ? <Inicio /> : <Navigate to="/login" />} />
                                        <Route path="/favoritos" element={loggedIn ? <Favoritos /> : <Navigate to="/login" />} />
                                        <Route path="/:id" element={loggedIn ? <Pokemon /> : <Navigate to="/login" />} />
                                    </>
                                </Routes>
                            </ThemeProvider>
                        </PokemonListProvider>
                    </FavoritosProvider>
                </UsuarioProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;