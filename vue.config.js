const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        extraFiles: [
          "simples.db"
        ]
      }
      
    },
  },
  transpileDependencies: [
    'vuetify'
  ],

})
