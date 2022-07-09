const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
  },
  devServer: {
    port: '3334',
    open: true,
    host: '0.0.0.0',
    client: {
      webSocketURL: 'ws://0.0.0.0:8081/ws',
    },
    proxy: {
      '/api': {
        target: 'http://dev.coder-spring.litup.me:12500/',
        ws: false,
        changeOrigin: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
};
