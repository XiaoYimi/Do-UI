<template>
  <div :class="toastClass" :ref="toastTag">
    <span class="icon">
      <template v-if="isCustomIcon">
        <img :src="customIconUrl" :alt="toastTag" class="icon-custom">
      </template>
      <template v-else>
        <svg class="icon-info" viewBox="0 0 1024 1024" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M512 85.333333c-235.733333 0-426.666667 190.933333-426.666667 426.666667s190.933333 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667-190.933333-426.666667-426.666667-426.666667zM554.666667 725.333333l-85.333333 0 0-256 85.333333 0 0 256zM554.666667 384l-85.333333 0 0-85.333333 85.333333 0 0 85.333333z"></path>
        </svg>
      </template>
    </span>
    <span class="msg">{{ msg }}</span>
    <span v-if="hasCancel" @click="hide" class="icon cancel">
      <svg class="icon-cancel" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512s190.933333 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667S747.733333 85.333333 512 85.333333z m213.333333 579.626667L664.96 725.333333 512 572.373333 359.04 725.333333 298.666667 664.96 451.626667 512 298.666667 359.04 359.04 298.666667 512 451.626667 664.96 298.666667 725.333333 359.04 572.373333 512 725.333333 664.96z"></path></svg>
    </span>
  </div>
</template>

<script>

export default {
  name: 'do-toast',
  data () {
    return {
      originClass: 'do-toast',

      position: 'top',
      type: 'default',
      isCustomIcon: false,
      customIconUrl: '',
      msg: '信息文本提示',
      timeout: 3000,
      hasCancel: false,
      
    };
  },
  methods: {
    show (cb) {
      // 将 this 绑定到 cb 回调函数
      typeof cb === 'function' && cb.call(this, this)

      if (this.timeout) {
        let timeId = setTimeout(() => {
          this.hide();
          timeId = null;
        }, this.timeout);
      }

      return this
    },
    hide () {
      const { position, toastTag, $el, $refs } = this;
      const wrap = document.querySelector(`#toast_${position}_wrap`)
      
      wrap.childElementCount > 1 ? wrap.removeChild($el) : document.body.removeChild(wrap)

      // 销毁组件依赖
      this.$destroy()
    }
  },
  computed: {
    toastClass () {
      const { type, originClass } = this;
      return [
        originClass,
        type ? originClass + '-' + type : ''
      ]
    },
    toastTag () {
      return 'toast_' + Math.random().toString().slice(2,6)
    }
  }
}
</script>
 
<style lang="scss" scoped>
</style>