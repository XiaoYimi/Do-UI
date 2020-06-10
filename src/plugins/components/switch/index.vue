<template>
  <div class="switch-box" :disabled="disabled">
    <template v-if="disabled">
        <span v-if="leftText" :class="leftTextClass">{{ leftText }}</span>
        <div :class="switchClass">
          <div :class="originClass+'-block'"></div>
        </div>
        <span v-if="rightText" :class="rightTextClass">{{ rightText }}</span>
    </template>
    <template v-else>
      <span v-if="leftText" :class="['left-text', !originValue ? 'left-text-on': '']">{{ leftText }}</span>
      <div :class="switchClass" @click="toggle">
        <div :class="originClass+'-block'"></div>
      </div>
      <span v-if="rightText" :class="['right-text', originValue ? 'right-text-on': '']">{{ rightText }}</span>
    </template>
  </div>
</template>
 
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator: v => ['default', 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'].filter(item => item === v).length
    },
    size: {
      type: String,
      validator: v => ['small', 'medium', 'large'].filter(item => item === v).length
    },
    leftText: String,
    rightText: String,
    value: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      originLeftTextClass: 'left-text',
      originRightTextClass: 'right-text',
      originClass: 'do-switch',
      originValue: false
    };
  },
  methods: {
    toggle () {
      this.originValue = !this.originValue
      console.log(this.originValue)
      this.$emit('toggle', { value: this.originValue })
    }
  },
  computed: {
    switchClass () {
      const { type, size, disabled, originClass, originValue } = this
      return [
        originClass,
        type && originValue ? originClass + '-' + type : '',
        size ? originClass + '-' + size : '',
        disabled ? originClass + '-disabled' : ''
      ]
    },
    leftTextClass () {
      const { disabled, originValue, originLeftTextClass } = this
      return [
        originLeftTextClass,
        !originValue ? originLeftTextClass + '-on': '',
        disabled ? originLeftTextClass + '-disabled' : ''
      ]
    },
    rightTextClass () {
      const { disabled, originValue, originRightTextClass } = this
      return [
        originRightTextClass,
        originValue ? originRightTextClass + '-on': '',
        disabled ? originRightTextClass + '-disabled' : ''
      ]
    }
  },
  created() {
    this.originValue = this.value ? this.value : this.originValue  
  },
}
</script>
 
<style lang="scss" scoped>
</style>