const Vue = require('vue')
const App = require('./App.vue').default
const router = require('./router/index').default

/* 加载初始化样式 reset */
import './assets/scss/reset.scss'

/* 加载所有组件及样式 */
import './plugins/assets/scss/index.scss'
const { DoCompPlugins, DoProtoPlugins } = require('./plugins/index');

Vue.use(DoCompPlugins);

// 加载 Vue.prototype.$[name] 方法类型组件
for (const k of Object.values(DoProtoPlugins)) { Vue.use(k) }

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
