
export function getUserData() {
    const data = JSON.parse(sessionStorage.getItem('userdata'));
    return data;
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}