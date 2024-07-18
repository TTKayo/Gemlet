function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

document.addEventListener("DOMContentLoaded", () => {
    const username = getCookie("username");
    const tokens = getCookie("tokens");
    const roles = getCookie("roles");

    document.getElementById("username-display").textContent = `${username}`;
    document.getElementById("tokens-display").textContent = ` Tokens: ${tokens}`;
    document.getElementById("roles-display").textContent = ` ${roles}`;
});
