<template>
  <div class="container">

    <header class="fixed-top header">
      <div class="logo">Do UI</div>
      <div class="flex-full xs-hide search">
        <input type="search" placeholder="搜索文档(后期做帅选)" class="input-search">
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
        <div id="introduce" class="sub-body-item">
          <div class="sub-body-item-title">介绍</div>
          <div class="sub-body-item-content">
            一款轻量、可靠、高质量的 Vue 组件库,支持按需引入.
          </div>
        </div>
        <div id="quickUse" class="sub-body-item">
          <div class="sub-body-item-title">快速上手</div>
          <div class="sub-body-item-content">
            <section>
              <h3>安装</h3>
              <div>npm i do-ui -S</div>
            </section>
            <section>
              <h3>按需引入</h3>
              <div>import Vue from 'vue'
                import { Button } from 'do-ui'
                Vue.use(Button)
              </div>
            </section>
          </div>
        </div>
        <div id="updateLog" class="sub-body-item">
          <div class="sub-body-item-title">更新日志</div>
          <div class="sub-body-item-content">
            请点击前往<a :href="'/#' + $route.path.replace('index', 'log')">日志更新列表</a>查看.
          </div>
        </div>

        <temp id="Button" comp-title="Button 按钮">
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
                &lt;do-button :disabled="true"&gt;禁用按钮&lt;/do-button&gt;
                
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
                  <td>按钮点击</td>
                  <td>event</td>
                </tr>
              </tbody>
            </table>
          </template>
        </temp>

        <temp id="Link" comp-title="Link 文字链接">
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

            <section class="example-instance-block">
              <div class="example-instance-title">链接状态</div>
              <div class="example-instance-column">
                <do-link disabled>默认链接</do-link>
                <do-link type="success" disabled>成功链接</do-link>
                <do-link type="error" disabled>失败链接</do-link>
                <do-link type="warning" disabled>警告链接</do-link>
                <do-link type="info" disabled>信息链接</do-link>
              </div>
              <div class="example-instance-source">
                &lt;do-link type="success" :disabled="true"&gt;禁用链接&lt;/do-link&gt;

              </div>
              <div class="example-instance-tip">
                链接类型(<code>disabled</code>)支持 <code>Boolean</code> 类型值, 无默认设置.
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

        <temp id="Switch" comp-title="Switch 开关">
          <template v-slot:install>
            import Vue from 'vue';
            import { Switch } from 'do-ui';

            Vue.use(Switch);
          </template>

          <template v-slot:demonstration>
            <section class="example-instance-block">
              <div class="example-instance-title">Switch 类型</div>
              <div class="example-instance-column">
                <do-switch/>
                <do-switch type="red"/>
                <do-switch type="orange"/>
                <do-switch type="yellow"/>
                <do-switch type="green"/>
                <do-switch type="cyan"/>
                <do-switch type="blue"/>
                <do-switch type="violet"/>
              </div>
              <div class="example-instance-source">
                &lt;do-switch type="green"/&gt;

              </div>
              <div class="example-instance-tip">
                链接类型(<code>type</code>)支持 <code>default</code>, <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>green</code>, <code>cyan</code>, <code>blue</code>, <code>violet</code> 等, 默认 <code>default</code>.
              </div>
            </section>
            <section class="example-instance-block">
              <div class="example-instance-title">Switch 大小</div>
              <div class="example-instance-column">
                <do-switch size="small"/>
                <do-switch/>
                <do-switch size="medium"/>
                <do-switch size="large"/>
              </div>
              <div class="example-instance-source">
                &lt;do-switch size="small"/&gt;

              </div>
              <div class="example-instance-tip">
                链接类型(<code>type</code>)支持 <code>default</code>, <code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code> 等, 默认 <code>default</code>.
              </div>
            </section>
            <section class="example-instance-block">
              <div class="example-instance-title">Switch 默认状态</div>
              <div class="example-instance-column">
                <do-switch :value="true"/>
              </div>
              <div class="example-instance-source">
                &lt;do-switch :value="true"/&gt;

              </div>
              <div class="example-instance-tip">
                Switch 默认状态(<code>value</code>)支持<code>Boolean</code>类型值 等, 无默认设置.
              </div>
            </section>
            <section class="example-instance-block">
              <div class="example-instance-title">Switch 文本提示</div>
              <div class="example-instance-column">
                <do-switch left-text="按年收费" right-text="按月收费"/>
              </div>
              <div class="example-instance-source">
                &lt;do-switch left-text="按年收费" right-text="按月收费"/&gt;

              </div>
              <div class="example-instance-tip">
                Switch 默认状态(<code>value</code>)支持<code>Boolean</code>类型值 等, 无默认设置.
              </div>
            </section>
            <section class="example-instance-block">
              <div class="example-instance-title">Switch 禁用状态</div>
              <div class="example-instance-column">
                <do-switch left-text="关闭" right-text="开启" :disabled="true" />
              </div>
              <div class="example-instance-source">
                &lt;do-switch left-text="关闭" right-text="开启" :disabled="true"/&gt;

              </div>
              <div class="example-instance-tip">
                Switch 禁用状态(<code>disabled</code>)支持<code>Boolean</code>类型值 等, 无默认设置.
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
                  <td>switch 类型</td>
                  <td>String</td>
                  <td>default, red, orange, yellow, green, cyan, blue, violet</td>
                  <td>default</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>switch 大小</td>
                  <td>String</td>
                  <td>small, medium, large</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>switch 状态</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>leftText</td>
                  <td>switch 左边文本提示</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>rightText</td>
                  <td>switch 右边文本提示</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
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

          <template v-slot:api-event-table>
            <div class="example-instance-title">Events</div>
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
                  <td>toggle</td>
                  <td>切换状态</td>
                  <td>{value}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </temp>

        <temp id="Radio" comp-title="Radio 单选框">
          <template v-slot:install>
            import Vue from 'vue';
            import { Radio } from 'do-ui';

            Vue.use(Radio);
          </template>

          <template v-slot:demonstration>
            <section class="example-instance-block">
              <div class="example-instance-title">Radio 颜色</div>
              <div class="example-instance-column">
                <do-radio name="group1" label="Default" text="默认" color="default" @change="getGroupOption" />
                <do-radio name="group1" label="Red" text="红色" color="red" @change="getGroupOption" />
                <do-radio name="group1" label="Orange" text="橙色" color="orange" @change="getGroupOption" />
                <do-radio name="group1" label="Yellow" text="黄色" color="yellow" @change="getGroupOption" />
                <do-radio name="group1" label="Green" text="绿色" color="green" @change="getGroupOption" />
                <do-radio name="group1" label="Cyan" text="青色" color="cyan" @change="getGroupOption" />
                <do-radio name="group1" label="Blue" text="蓝色" color="blue" @change="getGroupOption" />
                <do-radio name="group1" label="Violet" text="紫色" color="violet" @change="getGroupOption" />
              </div>
              <div class="example-instance-source">
                &lt;do-radio name="group1" label="Green" color="green" @change="getGroupOption"/&gt;

                &lt;script&gt;
                在 methods 内定义方法

                getGroupOption (obj) {
                &nbsp;&nbsp; console.log(obj.value) // 输出选中值
                }
                &lt;script&gt;

              </div>
              <div class="example-instance-tip">
                单选框颜色(<code>color</code>)支持 <code>default</code>, <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>green</code>, <code>cyan</code>, <code>blue</code>, <code>violet</code> 等, 默认 <code>default</code>.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">Radio 默认值</div>
              <div class="example-instance-column">
                <do-radio name="def" label="0" text="Pending" @change="getGroupOption" />
                <do-radio name="def" label="1" text="Resolved" value="1" @change="getGroupOption" />
                <do-radio name="def" label="2" text="Rejected" value="2" @change="getGroupOption" />
              </div>
              <div class="example-instance-source">
                &lt;do-radio name="def" label="no-ban" text="无默认" value="no-ban" @change="getGroupOption"/&gt;
                &lt;do-radio name="def" label="is-ban" text="默认" value="is-ban" @change="getGroupOption"/&gt;

                &lt;script&gt;
                在 methods 内定义方法

                getGroupOption (obj) {
                &nbsp;&nbsp; console.log(obj.value) // 输出选中值
                }
                &lt;script&gt;

              </div>
              <div class="example-instance-tip">
                单选框默认值(<code>value</code>): 只有<code>label</code> 与 <code>value</code> 相等;当多个单选框同时设置,以<code>最后一个</code>为基准设置.无默认设置.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">Radio 禁用</div>
              <div class="example-instance-column">
                <do-radio name="ban" label="no-ban" text="未禁" @change="getGroupOption" />
                <do-radio name="ban" label="is-ban" text="禁止" :disabled="true" @change="getGroupOption" />
              </div>
              <div class="example-instance-source">
                &lt;do-radio name="ban" label="0" text="未禁" @change="getGroupOption"/&gt;
                &lt;do-radio name="ban" label="1" text="禁止" :disabled="true" @change="getGroupOption"/&gt;

                &lt;script&gt;
                在 methods 内定义方法

                getGroupOption (obj) {
                &nbsp;&nbsp; console.log(obj.value) // 输出选中值
                }
                &lt;script&gt;

              </div>
              <div class="example-instance-tip">
                单选框禁用(<code>disabled</code>)支持 <code>Boolean</code>类型值.无默认设置.
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
                  <td>name</td>
                  <td>原生 name</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>原生 value</td>
                  <td>String, Number, Value</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>text</td>
                  <td>显示的文本</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>默认选中值,必须与label一致</td>
                  <td>String, Number, Value</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>单选框颜色</td>
                  <td>String</td>
                  <td>default, red, orange, yellow, green, cyan, blue, violet</td>
                  <td>default</td>
                </tr>
              </tbody>
            </table>
          </template>

          <template v-slot:api-event-table>
            <div class="example-instance-title">Events</div>
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
                  <td>change</td>
                  <td>切换选项</td>
                  <td>{group, radioId, value}</td>
                </tr>
              </tbody>
            </table>
          </template>

        </temp>

        <temp id="Checkbox" comp-title="Checkbox 复选框">
          <template v-slot:install>
            import Vue from 'vue';
            import { Checkbox } from 'do-ui';

            Vue.use(Checkbox);
          </template>

          <template v-slot:demonstration>
            <section class="example-instance-block">
              <div class="example-instance-title">Checkbox 颜色</div>
              <div class="example-instance-column">
                <do-checkbox name="cg1" label="default" color="default" text="Default" @change="checkboxChange" />
                <do-checkbox name="cg1" label="red" color="red" text="Red" @change="checkboxChange" />
                <do-checkbox name="cg1" label="orange" color="orange" text="Orange" @change="checkboxChange" />
                <do-checkbox name="cg1" label="yellow" color="yellow" text="Yellow" @change="checkboxChange" />
                <do-checkbox name="cg1" label="green" color="green" text="Green" @change="checkboxChange" />
                <do-checkbox name="cg1" label="cyan" color="cyan" text="Cyan" @change="checkboxChange" />
                <do-checkbox name="cg1" label="blue" color="blue" text="Blue" @change="checkboxChange" />
                <do-checkbox name="cg1" label="violet" color="violet" text="Violet" @change="checkboxChange" />
              </div>
              <div class="example-instance-source">
                &lt;do-checkbox name="cg1" label="red" text="Red" color="red" @change="checkboxChange"/&gt;
                &lt;do-checkbox name="cg1" label="orange" text="Orange" color="orange" @change="checkboxChange"/&gt;
                &lt;do-checkbox name="cg1" label="green" text="Green" color="green" @change="checkboxChange"/&gt;

                &lt;script&gt;

                在 data 对象定义属性

                checkboxOption: []

                在 methods 内定义方法

                checkboxChange (obj) {
                &nbsp;  &nbsp;  const { value, state } = obj
                &nbsp;  &nbsp;   if (state) {
                &nbsp;  &nbsp;&nbsp;  &nbsp;    this.checkboxOption.push(value)
                &nbsp;  &nbsp;  } else {
                &nbsp;  &nbsp;&nbsp;  &nbsp;    this.checkboxOption = this.checkboxOption.filter(item => item !== value)
                &nbsp;  &nbsp;  }
                &nbsp;  &nbsp; console.log(this.checkboxOption) /* checkbox 选中值列表 */
                },
                &lt;script&gt;

              </div>
              <div class="example-instance-tip">
                复选框颜色(<code>color</code>)支持 <code>default</code>, <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>green</code>, <code>cyan</code>, <code>blue</code>, <code>violet</code> 等, 默认 <code>default</code>.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">Checkbox 默认值</div>
              <div class="example-instance-column">
                <do-checkbox name="cg2" label="dog" text="Dog" @change="checkboxChange" />
                <do-checkbox name="cg2" label="cat" value="cat" text="Cat" @change="checkboxChange" />
                <do-checkbox name="cg2" label="rabbit" value="rabbit" text="Rabbit" @change="checkboxChange" />
              </div>
              <div class="example-instance-source">
                &lt;do-checkbox name="cg2" label="dog" text="Dog" @change="checkboxChange"/&gt;
                &lt;do-checkbox name="cg2" label="cat" value="cat" text="Cat" @change="checkboxChange"/&gt;
                &lt;do-checkbox name="cg2" label="rabbit" value="rabbit" text="Rabbit" @change="checkboxChange"/&gt;

                &lt;script&gt;

                在 data 对象定义属性

                checkboxOption: []

                在 methods 内定义方法

                checkboxChange (obj) {
                &nbsp;  &nbsp;  const { value, state } = obj
                &nbsp;  &nbsp;   if (state) {
                &nbsp;  &nbsp;&nbsp;  &nbsp;    this.checkboxOption.push(value)
                &nbsp;  &nbsp;  } else {
                &nbsp;  &nbsp;&nbsp;  &nbsp;    this.checkboxOption = this.checkboxOption.filter(item => item !== value)
                &nbsp;  &nbsp;  }
                &nbsp;  &nbsp; console.log(this.checkboxOption) /* checkbox 选中值列表 */
                },
                &lt;script&gt;

              </div>
              <div class="example-instance-tip">
                复选框默认值(<code>value</code>): 只有<code>label</code> 与 <code>value</code> 相等;无默认设置.
              </div>
            </section>

            <section class="example-instance-block">
              <div class="example-instance-title">Checkbox 禁用</div>
              <div class="example-instance-column">
                <do-checkbox name="cg3" label="pear" text="Pear" :disabled="true" @change="checkboxChange" />
                <do-checkbox name="cg3" label="apple" value="apple" text="Apple" :disabled="true" @change="checkboxChange" />
              </div>
              <div class="example-instance-source">
                &lt;do-checkbox name="cg3" label="pear" text="Pear" :disabled="true" @change="checkboxChange"/&gt;
                &lt;do-checkbox name="cg3" label="apple" value="apple" text="Apple" :disabled="true" @change="checkboxChange"/&gt;

                &lt;script&gt;

                在 data 对象定义属性

                checkboxOption: []

                在 methods 内定义方法

                checkboxChange (obj) {
                &nbsp;  &nbsp;  const { value, state } = obj
                &nbsp;  &nbsp;   if (state) {
                &nbsp;  &nbsp;&nbsp;  &nbsp;    this.checkboxOption.push(value)
                &nbsp;  &nbsp;  } else {
                &nbsp;  &nbsp;&nbsp;  &nbsp;    this.checkboxOption = this.checkboxOption.filter(item => item !== value)
                &nbsp;  &nbsp;  }
                &nbsp;  &nbsp; console.log(this.checkboxOption) /* checkbox 选中值列表 */
                },
                &lt;script&gt;

              </div>
              <div class="example-instance-tip">
                复选框禁用(<code>color</code>)支持 <code>Boolean</code> 类型值,无默认设置.
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
                  <td>name</td>
                  <td>原生 name</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>原生 value</td>
                  <td>String, Number, Value</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>text</td>
                  <td>显示的文本</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>默认选中值,必须与label一致</td>
                  <td>String, Number, Value</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>单选框颜色</td>
                  <td>String</td>
                  <td>default, red, orange, yellow, green, cyan, blue, violet</td>
                  <td>default</td>
                </tr>
              </tbody>
            </table>
          </template>

          <template v-slot:api-event-table>
            <div class="example-instance-title">Events</div>
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
                  <td>change</td>
                  <td>切换选项</td>
                  <td>{group, checkboxId, value, state}</td>
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
            { name: 'Button 按钮', href: '#Button' },
            { name: 'Link 文字链接', href: '#Link' },
            { name: 'Switch 开关', href: '#Switch' },
            { name: 'Radio 单选框', href: '#Radio' },
            { name: 'Checkbox 复选框', href: '#Checkbox' }
          ]
        }
      ],
      asideState: false,

      /* Radio Default */
      radioOption: 'Male',

      /* Checkbox Default */
      checkboxOption: []



    };
  },
  methods: {

    /* Radio Events */
    getGroupOption (obj) {
      console.log(obj)
      this.radioOption = obj.value
    },

    /* Checkbox Events */
    checkboxChange (obj) {
      console.log(obj) /* checkbox 选中值 */
      const { value, state } = obj
      if (state) {
        this.checkboxOption.push(value)
      } else {
        this.checkboxOption = this.checkboxOption.filter(item => item !== value)
      }
      
    },

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