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
    port: 8080,
    proxy: {
      '/': {
        target: 'https://dev.coder-spring.litup.me:12500/',
        changeOrigin: true,
      }
    }

  }
};
