// 每个单文件组件都是个模块，想获取模板必须使用 createComponent() 或直接获取 VueComponent.default
const createComponent = comp => comp.default

/* 处理由 module.exports 导出的路由集合,并生成指定版本路由地址 */
const createRouters = (routers, version = '1.0.0') => {
  const routes = []
  routes.push({ name: `examples`, path: '/', redirect:  `/${version}/examples/index` })
  for (const [k, v] of Object.entries(routers)) {
    routes.push({ name: `${version}-${k}`, path: `/${version}/examples/${k}`,  component: createComponent(v) })
  }
  return routes
} 

module.exports = {
  createComponent,
  createRouters
}