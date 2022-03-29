import { $log } from './logger';

export default {

    setAuthCookie(authObj) {
        // $log("Setting cookie for : ", authObj.refreshToken);
        this.setCookie(
            process.env.VUE_APP_AUTH_COOKIE,
            parseInt(process.env.VUE_APP_COOKIE_EXPD),
            JSON.stringify(authObj));
    },

    setCookie(cname, ctime, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (ctime * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "no-cookie";
    }
};