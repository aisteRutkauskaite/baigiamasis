export function login() {
}

export function loginFromToken() {

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return user;
    }
    return false;
}

export const user = {
    token: ''
};
