<template>
  <div>
    <do-button shape="circle" size="medium" @click="btnClick">8552</do-button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {};
  },
  methods: {
    btnClick () { console.log('ok btn') }
  },
}
</script>
 
<style lang="scss" scoped>
</style>