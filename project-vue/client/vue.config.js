const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 8082,     // port du serveur de développement // connecter avec corsOption:origin (dans server.js)
  }
}
