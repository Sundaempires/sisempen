import cookie from 'js-cookie';

export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1, // Cookie akan berlaku selama 1 hari
            path: '/',
        });
    }
};

export const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

export const getCookie = (key) => {
    return process.browser ? cookie.get(key) : null;
};
