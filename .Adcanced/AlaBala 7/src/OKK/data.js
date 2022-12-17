import * as okk from './okk.js'
const endpoint = {
    "login": "users/login",
    "register": "users/register",
    "logout": "users/logout",
    "create": "data/catalog",
    "getAllItem": "data/catalog",
    "getItimeById": "data/catalog/",
    "myItem": "data/catalog?where=_ownerId%3D%22"
}

export async function login(email, password) {
    const res = await okk.post(endpoint.login, {email, password});
    sessionStorage.setItem("userData", JSON.stringify(res));
    return res
}
export async function register(email, password) {
    const res = await okk.post(endpoint.register, {email, password});
    sessionStorage.setItem("userData", JSON.stringify(res));
    return res
}
export async function logout(email, password) {
    const res = await okk.get(endpoint.logout, {email, password});
    sessionStorage.setItem("userData");
    return res
}
export async function createItem(data) {
    const res = await okk.get(endpoint.createItem, data);
    return res;
}
export async function getAllItem() {
    const res = await okk.get(endpoint.getAllItem);
    return res
}

export async function getItimeById(id) {
    const res = await okk.get(endpoint.getItimeById + id);
}
export async function updateById(id, data) {
    const res = await okk.put(endpoint.getItimeById + id, data);
    return res
}
export async function deleteItem(id) {
    const res = await okk.get(endpoint.getItimeById + id);
    return res
}
export async function getMyItem(data) {
    const userData = JSON.parse(sessionStorage.getItem(userData));
    const userId = userData && userData._id;
    let id = `${userId}%22`
    const res = await okk.get(endpoint.myItem + id)
    return res;
}
