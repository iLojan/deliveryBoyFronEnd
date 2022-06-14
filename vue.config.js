module.exports = {

 
    // devServer: {
    //   proxy: 'http://localhost:9191'
    // },
    pwa: {
      iconPaths: {
         favicon32: './public/title.png',
         favicon16: './public/title.png',
         appleTouchIcon: "./public/title.png",
         maskIcon: "./public/title.png",
         msTileImage: "./public/title.png"
      }
    },
    devServer: {
      proxy: {
        "/api/*": {
        target: "http://localhost:9191",
        changeOrigin: true,
        ws: true,
        pathRewrite: {'/api' : '/api'},
        logLevel: 'debug'
        }
      }
    },
    configureWebpack: {
      devtool: 'source-map',    
      }
  };
  