const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    proxy: {
        '/sources': {
            target: 'http://localhost:8080/sources',
            ws: true,
            changeOrigin: true
        }
    }
  }
})
