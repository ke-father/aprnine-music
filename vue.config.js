// vue的配置文件

// 导入path
const path = require('path')
// 配置element-plus按需导入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

/**
 * 处理全局样式
 * @param rule 传入的处理类型
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/globalVariables.less'),
      ],
    })
}

module.exports = {
  // 配置webpack
  configureWebpack: {
    // 配置@指向src
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    },
    // 配置element-plus
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  // 配置less全局变量
  chainWebpack: config => {
    const types = ['normal',
      'normal-modules',
      'vue',
      'vue-modules']
    types.forEach(type =>  addStyleResource(config.module.rule('less').oneOf(type)))
  },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     patterns: [
  //       path.resolve(__dirname, './src/assets/css/globalVariables.less')
  //     ],
  //     preProcessor: 'less'
  //   }
  // }
  // css: {
  //   loaderOptions: {
  //     less: {
  //       globalVars: {
  //         hack: 'true; @import "~@/assets/css/globalVariables.less"'
  //       }
  //     }
  //   }
  // }
}
