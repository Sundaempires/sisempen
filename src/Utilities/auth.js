import { getCookie } from './cookies';

export const isAuthenticated = () => {
    const role = getCookie('role');
    return role === 'admin' || role === 'mahasiswa' || role === 'dosen';
};
