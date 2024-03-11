import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../infra/firebase';

export function logarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario && usuario.email && usuario.password) {
            signInWithEmailAndPassword(auth, usuario.email, usuario.password)
                .then((userCredential) => {
                    const user = {
                        ...usuario,
                        id: userCredential.user.uid,
                    };
                    resolve(user);
                })
                .catch((error) => {
                    console.error('Login inválido', error);
                    reject('Login inválido');
                });
        } else {
            reject('Preencha os campos de email e senha');
        }
    });
}

export function criarUsuario(usuario, setUsuario) {
    if (usuario) {
        createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
            .then((userCredential) => {
                setUsuario((objetoAtual) => {
                    const user = {
                        ...objetoAtual,
                        id: userCredential.user.uid
                    };
                    return user;
                });
            })
            .catch((error) => {
                console.error('Erro ao criar usuário', error);
                alert('Erro ao criar usuário');
            });
    } else {
        alert('Preencha os campos de email e senha');
    }
}

export function deslogarUsuario(setUsuario) {
    signOut(auth)
        .then(() => {
            setUsuario(null);
        })
        .catch((error) => {
            console.error('Erro ao deslogar', error);
            alert('Erro ao deslogar');
        });
}
