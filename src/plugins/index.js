/* 加载所有组件 */

const { createComponent } = require('@/utils/Create')

const DoPlugins = {}

DoPlugins.install = (Vue, options) => {
  const DoComps = require('./components/index')
  for (const [k, v] of Object.entries(DoComps)) {
    Vue.component('do' + k, createComponent(v))
  }
}

module.exports = DoPlugins
