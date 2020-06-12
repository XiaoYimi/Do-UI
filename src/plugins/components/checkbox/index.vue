<template>
  <div :class="checkboxClass">
    <input type="checkbox" :name="name" :id="checkboxId" :ref="checkboxId" :disabled="disabled">
    <label :for="checkboxId" :option="label" @click="checkedOption">{{ text }}</label>
  </div>
</template>
 
<script>
export default {
  name: 'do-checkbox',
  props: {
    name: String,
    label: [String, Number, Boolean],
    value: [String, Number, Boolean],
    text: String,
    disabled: Boolean,
    color: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      originClass: 'do-checkbox',
      state: false,
      initload: true,
    };
  },
  methods: {
    checkedOption () {
      const { disabled, checkboxId, name, label } = this;
      if (!disabled) {
        this.state = !this.$refs[checkboxId].checked
        this.$emit('change', {
          group: name,
          value: label,
          checkboxId,
          state: this.state
        })
      }
    }
  },
  computed: {
    checkboxId () { return 'checkbox_' + Math.random().toString().slice(2,6) },
    checkboxClass () {
      const { disabled, color, originClass, initload, state, $refs, checkboxId } = this;
      return [
        originClass,
        state && color ? originClass + '-' + color : '',
        disabled ? originClass + '-disabled' : ''
      ] 
    }
  },
  mounted () {
    const { name, label, value, checkboxId, $refs } = this
    if (label === value) {
      $refs[checkboxId].checked = true
      this.state = true
      this.$emit('change', {
        group: name,
        value: label,
        checkboxId,
        state: this.state
      })
    }
  }
}
</script>
 
<style lang="scss" scoped>
</style>