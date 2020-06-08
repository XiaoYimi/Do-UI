const Vue = require('vue')
const Router = require('vue-router')
Vue.use(Router)

const { createRouters } = require('../utils/Create')

// // 引入模板文件
const examples = require('@/examples/1.0.0/index')

const routes_1_0_0 = createRouters(examples, '1.0.0')

const router = new Router({
  routes: [
    ...routes_1_0_0
  ]
})

export default router
