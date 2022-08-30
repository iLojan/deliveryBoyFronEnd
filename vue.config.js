module.exports = {

 
    // devServer: {
    //   proxy: 'http://localhost:9191'
    // },
 
    devServer: {
      proxy: {
        "/api/*": {
        target: "http://localhost:9191",
        changeOrigin: true,
        pathRewrite: {'^/proxy' : ''},
        logLevel: 'debug'
        }
      }
    },
    configureWebpack: {
      devtool: 'source-map',    
      }
  };
  