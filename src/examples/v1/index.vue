<template>
  <div class="container">

    <header class="fixed-top header">
      <div class="logo">Do UI</div>
      <div class="flex-full xs-hide search">
        <input type="search" placeholder="搜索文档" class="input-search">
      </div>
      <div class="options xs-hide">
        <select name="version" id="version" @change="SelectVersion">
          <option value="v1">v1</option>
          <option value="v2">v2</option>
        </select>
      </div>
      <div class="flex-full box-menu">
        <span class="menu"><i/></span>
      </div>
    </header>

    <div class="body">

      <aside :class="asideClass">
        <div v-for="(block, bid) of asideObj" :key="bid">
          <div class="block-title">{{ block.title }}</div>
          <div v-for="(item, cid) of block.column" :key="cid" :class="['block-column', $route.hash === item.href ? 'block-column-active' : '']">
            <a :href="'#' + $route.path + item.href">{{ item.name }}</a>
          </div>
        </div>
      </aside>

      <section class="sub-body">
        <div id="introduce">
          introduce
        </div>
        <div id="quickUse">
          quickUse
        </div>
        <div id="updateLog">
          updateLog
        </div>

        <temp id="compButton" comp-title="Button 按钮">
          <template v-slot:install>
            import Vue from 'vue';
            import { Button } from 'do-ui';

            Vue.use(Button);
          </template>
          <template v-slot:demonstration>
            <section class="example-instance-block">
              <div class="example-instance-title">按钮类型</div>
              <div class="example-instance-column">
                <do-button>普通按钮</do-button>
                <do-button type="success">成功按钮</do-button>
                <do-button type="error">失败按钮</do-button>
                <do-button type="warning">警告按钮</do-button>
                <do-button type="info">信息按钮</do-button>
              </div>
              <div class="example-instance-source">
                &lt;do-button type="info"&gt;信息按钮&lt;/do-button&gt;

              </div>
              <div class="example-instance-tip">
                按钮类型(<code>type</code>)支持 <code>default</code>, <code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code> 等, 默认 <code>default</code>.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">按钮大小</div>
              <div class="example-instance-column">
                <do-button size="small">小号按钮</do-button>
                <do-button>普通按钮</do-button>
                <do-button size="medium">中号按钮</do-button>
                <do-button size="large">大号按钮</do-button>
              </div>
              <div class="example-instance-source">
                &lt;do-button size="medium"&gt;中号按钮&lt;/do-button&gt;
                
              </div>
              <div class="example-instance-tip">
                按钮大小(<code>size</code>)支持 <code>small</code>, <code>medium</code>, <code>large</code> 等, 无默认设置.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">按钮形状</div>
              <div class="example-instance-column">
                <do-button>普通按钮</do-button>
                <do-button shape="circle">圆角按钮</do-button>
                <do-button shape="rectangle">直角按钮</do-button>
              </div>
              <div class="example-instance-source">
                &lt;do-button shape="circle"&gt;圆角按钮&lt;/do-button&gt;
                
              </div>
              <div class="example-instance-tip">
                按钮形状(<code>shape</code>)支持 <code>circle</code>, <code>rectangle</code> 等, 无默认设置.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">按钮状态</div>
              <div class="example-instance-column">
                <do-button>普通按钮</do-button>
                <do-button disabled>禁用按钮</do-button>
              </div>
              <div class="example-instance-source">
                &lt;do-button disabled&gt;禁用按钮&lt;/do-button&gt;
                
              </div>
              <div class="example-instance-tip">
                按钮状态(<code>disabled</code>)支持 <code>Boolean</code> 类型值, 无默认设置.
              </div>
            </section>
          </template>
          
          <template v-slot:api-attr-table>
            <div class="example-instance-title">Attributes</div>
            <table class="example-api-table">
              <thead>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>可选值</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>type</td>
                  <td>按钮类型</td>
                  <td>String</td>
                  <td>default, success, error, warning, info</td>
                  <td>default</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>按钮大小</td>
                  <td>String</td>
                  <td>small, medium, large</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>shape</td>
                  <td>按钮形状</td>
                  <td>String</td>
                  <td>circle, rectangle</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>按钮状态</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </template>

          <template v-slot:api-event-table>
            <div class="example-instance-title">Event</div>
            <table class="example-api-table">
              <thead>
                <tr>
                  <th>事件名称</th>
                  <th>说明</th>
                  <th>回调参数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>click</td>
                  <td>点击事件</td>
                  <td>自定义接收值</td>
                </tr>
              </tbody>
            </table>
          </template>
        </temp>

        <temp id="compLink" comp-title="Link 文字链接">
          <template v-slot:install>
            import Vue from 'vue';
            import { Link } from 'do-ui';

            Vue.use(Link);
          </template>
          <template v-slot:demonstration>
            <section class="example-instance-block">
              <div class="example-instance-title">链接类型</div>
              <div class="example-instance-column">
                <do-link>默认链接</do-link>
                <do-link type="success">成功链接</do-link>
                <do-link type="error">失败链接</do-link>
                <do-link type="warning">警告链接</do-link>
                <do-link type="info">信息链接</do-link>
              </div>
              <div class="example-instance-source">
                &lt;do-link type="success"&gt;成功链接&lt;/do-link&gt;

              </div>
              <div class="example-instance-tip">
                链接类型(<code>type</code>)支持 <code>default</code>, <code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code> 等, 默认 <code>default</code>.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">启用下划线</div>
              <div class="example-instance-column">
                <do-link underline>默认链接</do-link>
                <do-link type="success" underline>成功链接</do-link>
                <do-link type="error" underline>失败链接</do-link>
                <do-link type="warning" underline>警告链接</do-link>
                <do-link type="info" underline>信息链接</do-link>
              </div>
              <div class="example-instance-source">
                &lt;do-link type="success" underline &gt;成功链接&lt;/do-link&gt;

              </div>
              <div class="example-instance-tip">
                链接类型(<code>underline</code>)支持 <code>Boolean</code> 类型值, 无默认设置.
              </div>
            </section>
          </template>

          <template v-slot:api-attr-table>
            <div class="example-instance-title">Attributes</div>
            <table class="example-api-table">
              <thead>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>可选值</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>href</td>
                  <td>原生 href</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>链接类型</td>
                  <td>String</td>
                  <td>default, success, error, warning, info</td>
                  <td>default</td>
                </tr>
                <tr>
                  <td>underline</td>
                  <td>是否下划线</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </template>
        </temp>

      </section>
    </div>

  </div>
</template>
 
<script>
const Temp = require('./comp/temp').default

export default {
  name: 'index',
  components: { Temp },
  data () {
    return {
      asideObj: [
        {
          title: '开发指南',
          column: [
            { name: '介绍', href: '#introduce' },
            { name: '快速上手', href: '#quickUse' },
            { name: '更新日志', href: '#updateLog' }
          ]
        },
        {
          title: '基础组件',
          column: [
            { name: 'Button 按钮', href: '#compButton' },
            { name: 'Link 文字链接', href: '#compLink' }
          ]
        }
      ],
      asideState: false
    };
  },
  methods: {
    listenWinClick (e) {
      const target = e.target
      const state = target.classList.contains('menu') || target.parentElement.classList.contains('menu')
      state ? this.asideState = true : setTimeout(() => this.asideState = false, 200)
    },
    listenWinScreen (e) {
      const screenW = document.body.clientWidth || document.documentElement.clientWidth
      const asideEl = document.querySelector('.aside')
      if (screenW >= 768 && asideEl.classList.contains('xs-show')) {
        asideEl.classList.remove('xs-show')
        this.asideState = false
      }
    },
    SelectVersion (e) {
      const version = e.target.value
      this.$router.push({ path: `/${version}/examples/index` })
    }
  },
  computed: {
    asideClass () {
      return [
        'aside',
        'xs-hide',
        this.asideState ? 'xs-show' : ''
      ]
    }
  },
  created() {
    // 在手机类型设备点击菜单按钮进行弹出菜单栏
    window.addEventListener('click', this.listenWinClick, true)
    window.addEventListener('resize', this.listenWinScreen, true)
  },
  // 监听当前页面路由变化,从而进行页面锚点滚动
  beforeRouteUpdate (to, from, next) {
    if (to.path === from.path && to.hash !== from.hash) {
      if (to.hash === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        var positionTop = document.querySelector(to.hash).offsetTop - 65
        positionTop = positionTop < 0 ? 0 : positionTop
        
        window.scrollTo({ top: positionTop, behavior: 'smooth' })
      }
    }
    next()
  },
  beforeRouteLeave (to, from, next) {
    /* 不是当前页面则移除监听 window click 事件 */
    if (to.path !== from.path) {
      window.removeEventListener('click', this.listenWinClick, true)
      window.removeEventListener('resize', this.listenWinScreen, true)
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/examples/index.scss';
</style>