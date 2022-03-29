const LOGGING_ALLOWED = process.env.VUE_APP_LOGGING_ENABLED === 'true' ? true : false;

const LOG = (...msg) => {
    if (LOGGING_ALLOWED) {
        console.log(...msg);
    }
}

const LOGGER = {
    // this method is called by .use() in main.js
    install: (app, options) => {
        console.log(options);
        // app.config.globalProperties includes properties such as $store and $router
        app.config.globalProperties.$log = LOG;
    }
}

export { LOGGER as default, LOG as $log }