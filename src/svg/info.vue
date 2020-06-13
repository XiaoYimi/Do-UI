<template>
  <svg 
    :t="time" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    :width="width" 
    :height="height"
    :fill="color"
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="1134">
    <path d="M512 85.333333c-235.733333 0-426.666667 190.933333-426.666667 426.666667s190.933333 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667-190.933333-426.666667-426.666667-426.666667zM554.666667 725.333333l-85.333333 0 0-256 85.333333 0 0 256zM554.666667 384l-85.333333 0 0-85.333333 85.333333 0 0 85.333333z"
    :p-id="pid">
    </path>
  </svg>
</template>
 
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 16
    },
    height: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#333'
    }
  },
  data () {
    return {
      time: +new Date(),
      pid: Math.random().toString().slice(2,6)
    };
  }
}
</script>
 
<style lang="scss" scoped>
</style>