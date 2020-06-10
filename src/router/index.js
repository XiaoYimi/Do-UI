const Vue = require('vue')
const Router = require('vue-router')
Vue.use(Router)

const { createRouters } = require('../utils/Create')

// // 引入模板文件
const examples = require('@/examples/v1/index')

const routes_v1 = createRouters(examples, 'v1')

const router = new Router({
  routes: [
    ...routes_v1
  ]
})

export default router
