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
    <path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z"
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