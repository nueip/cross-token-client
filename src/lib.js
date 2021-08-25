export function queryString(params) {
    return Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");
}

export function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}