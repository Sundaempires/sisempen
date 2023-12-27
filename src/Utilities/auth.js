import { getCookie } from './cookies';

export const isAuthenticated = () => {
    const getCookieUser = getCookie('user');
    if (getCookieUser) {
        const user = JSON.parse(getCookieUser);

        if (user) {
            const role = user.role;
            return role === 'admin' || role === 'mahasiswa' || role === 'dosen';
        }
    }
    return false;
};

export const isAdmin = () => {
    const getCookieUser = getCookie('user');
    if (getCookieUser) {
        const user = JSON.parse(getCookieUser);

        if (user) {
            const role = user.role;
            return role === 'admin';
        }
    }
    return false;
}

export const isMahasiswa = () => {
    const getCookieUser = getCookie('user');
    if (getCookieUser) {
        const user = JSON.parse(getCookieUser);

        if (user) {
            const role = user.role;
            return role === 'mahasiswa';
        }
    }
    return false;
}

export const isDosen = () => {
    const getCookieUser = getCookie('user');
    if (getCookieUser) {
        const user = JSON.parse(getCookieUser);

        if (user) {
            const role = user.role;
            return role === 'dosen';
        }
    }
    return false;
}