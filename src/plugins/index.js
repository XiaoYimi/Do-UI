/* 加载所有组件 */

const { createComponent } = require('../utils/Create')
const DoProtoPlugins = require('./prototype/index')

const DoCompPlugins = {}

DoCompPlugins.install = (Vue, options) => {
  const DoComps = require('./components/index')
  for (const [k, v] of Object.entries(DoComps)) {
    Vue.component('do' + k, createComponent(v))
  }
}

module.exports = {
  DoCompPlugins,
  DoProtoPlugins
}
