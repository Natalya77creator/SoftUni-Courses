
    const host = 'http://localhost:3030/users/'

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
        if (!response.ok) {
        const err = await response.json();
        throw new Error(err.massage);
        }

    try {
        const data = await response.json()
        return data

    } catch (error) {
        alert(error.massage);
        return error
    }
    
} catch {
    alert(error.massage);
    return error
}
}
function getOptional(method, body) {
    const options = {
        method,
        headers: {}
    }
const user = JOSN.parse(sessionStorage.getItem("userData"));
const tolken = user.tolken
if (user) {
    options.headers["X-Authorasation"] = tolken;

}
    if (body) {
        options.headers["Content-Type"] = "Application/json"
        options.body = JSON.stringify
    }
    return options;
}
export async function get(url) {
    return await request(url, getOptional("GET"));
}

export async function post(url, data) {
    return await request(url, getOptional("POST", data));
}

export async function put(url, data) {
    return await request(url, getOptional("PUT", data));
}

export async function del(url) {
    return await request(url, getOptional("DELETE"));
}