const webpack = require('webpack')
const path = require('path')
// const appData = require('./data.json')
// const seller = appData.seller
// const goods = appData.goods
// const ratings = appData.ratings

// 在根目录下找到内容f:\BaiduYunDownload\elema\elemaPractice\practice-elema\vue.config.js
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    // before(app) {
    //   app.get('/api/seller', function (req, res) {
    //     res.json({
    //       errno: 0,
    //       data: seller
    //     })
    //   })
    //   app.get('/api/goods', function (req, res) {
    //     res.json({
    //       errno: 0,
    //       data: goods
    //     })
    //   })
    //   app.get('/api/ratings', function (req, res) {
    //     res.json({
    //       errno: 0,
    //       data: ratings
    //     })
    //   })
    // }
  },
  // 这样可以~线的去寻找
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  },
  baseUrl: ''
}
