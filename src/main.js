const Vue = require('vue')
const App = require('./App.vue').default
const router = require('./router/index').default

/* 加载初始化样式 reset */
import './assets/scss/reset.scss'

/* 加载所有组件及样式 */
import './plugins/assets/scss/index.scss'
const DoComps = require('./plugins/index');
Vue.use(DoComps);

// 加载 Vue.prototype.$[name] 方法类型组件
const DoPrototyoes = require('./plugins/prototype/index')
for (const k of Object.values(DoPrototyoes)) { Vue.use(k) }

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
