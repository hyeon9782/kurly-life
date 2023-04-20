const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/kurly-life/'
  //   : '/',
  // outputDir: "../src/main/resources/static",
  devServer:{
    proxy:{
      '/api':{
        target: 'http:/localhost:8080',
        changeOrigin: true // cross origin 허용c
      }
    }
  }
}
