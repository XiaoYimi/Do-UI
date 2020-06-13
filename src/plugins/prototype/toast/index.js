import Vue from 'vue'
import toast from './index.vue'

let toastConstructor = Vue.extend(toast)

let toastInstance = null
// 初始化
let init = options => {
  // 实例化 Toast
  toastInstance = new toastConstructor()
  // 合并配置
  Object.assign(toastInstance, options)
  
  /* 显示位置(定位) */
  toastInstance.position = toastInstance.position ? toastInstance.position : 'top';

  if (toastInstance.position) {
    let wrap = document.querySelector(`#toast_${toastInstance.position}_wrap`);

    if (!wrap) {
      wrap = document.createElement('div');
      wrap.setAttribute('id', `toast_${toastInstance.position}_wrap`)
    }

    wrap.appendChild(toastInstance.$mount().$el)
    document.body.appendChild(wrap);
  }
}

// 调用组件时触发, options 为组件配置项
let caller = options => {
  if (!toastInstance) { init(options) }
  return toastInstance.show(vm => {
    toastInstance = null
  })
}

export default {
  install () { Vue.prototype.$toast = caller }
}