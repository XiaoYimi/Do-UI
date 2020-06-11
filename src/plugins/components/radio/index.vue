<template>
  <div :class="radioClass">
    <input type="radio" :name="name" :id="radioId" :ref="radioId" :disabled="disabled">
    <label :for="radioId" :option="label" @click="checkedOption">{{ text }}</label>
  </div>
</template>
 
<script>
export default {
  name: 'do-radio',
  props: {
    name: String,
    text: String,
    label: [String, Number, Boolean], /* 原生 value */
    /* 选中值 */
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    color: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
  },
  data () {
    return {
      originClass: 'do-radio'
    };
  },
  methods: {
    checkedOption () {
      if (!this.disabled) { this.$emit('change', { value: this.label }) }
    }
  },
  computed: {
    radioId () {
      return 'radio_' + Math.random().toString().slice(2,6)
    },
    radioClass () {
      const { color, disabled, originClass } = this
      return [
        originClass,
        color ? originClass + '-' + color : '',
        disabled ? originClass + '-disabled' : ''
      ]
    },
  },
  mounted () {
    /*初始化默认值 */
    const { value, label, radioId } = this
    if (value === label) { this.$refs[radioId].checked = true }
  },
}
</script>
 
<style lang="scss" scoped>
</style>