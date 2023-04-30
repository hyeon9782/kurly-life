const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // publicPath: '/kurly-life/',
  devServer: {
    proxy: {
      "/api": {
        target: "http:/localhost:8080",
        changeOrigin: true, // cross origin 허용c
      },
    },
  },
};
