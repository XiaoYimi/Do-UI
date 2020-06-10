<template>
  <a :href="aLink" :class="linkClass">
    <slot>文字链接</slot>
  </a>
</template>
 
<script>
export default {
  props: {
    href: String,
    type: {
      type: String,
      default: 'default',
      validator: v => ['default', 'success', 'error', 'warning', 'info'].filter(item => item === v).length
    },
    underline: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      preClass: 'do-link'
    };
  },
  computed: {
    linkClass () {
      const { type, underline } = this
      return [
        this.preClass,
        type ? this.preClass + '-' + type : '',
        underline ? this.preClass + '-underline' : ''
      ]
    },
    aLink () {
      const { href, disabled } = this
      return disabled ? 'javascript:void(0);' : href
    }
  },

}
</script>
 
<style lang="scss" scoped>
</style>