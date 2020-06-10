import { computed } from 'vue';
<template>
  <button @click="hand_btn" :class="btnClass" :disabled="disabled">
    <slot> Btn </slot>
  </button>
</template>
 
<script>
export default {
  name: 'do-button',
  props: {
    // 按钮状态
    disabled: Boolean,
    // 按钮形状(圆角|直角)
    shape: { type: String, validator: v => (['circle', 'rectangle'].filter(item => item === v)).length },
    // 按钮类型 (success 成功, error 失败, info 信息, warning 警告)
    type: { type: String, validator: v => (['default', 'success', 'error', 'info', 'warning'].filter(item => item === v)).length},
    // 按钮大小
    size: { type: String, validator: v => (['large', 'medium', 'small'].filter(item => item === v)).length },
  },
  data () {
    return {
      originClass: 'do-button'
    };
  },
  methods: {
    hand_btn (ev) { this.$emit('click', ev) }
  },
  computed: {
    btnClass () {
      const { shape, type, size } = this
      return [
        this.originClass,
        type ? this.originClass + '-' + type : this.originClass + '-' + 'default',
        size ? this.originClass + '-' + size : '',
        shape ? this.originClass + '-' + shape : ''
      ]
    }
  }
}
</script>
 
<style lang="scss" scoped>
</style>