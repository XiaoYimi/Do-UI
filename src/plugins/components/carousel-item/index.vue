<template>
  <div :class="carouselItemClass">
    <slot/>
  </div>
</template>
 
<script>
export default {
  name: 'do-carousel-item',
  data () {
    return {
      originClass: 'do-carousel-item',
    };
  },
  computed: {
    carouselItemClass () {
      const { originClass } = this;
      return [
        originClass
      ];
    },
  },
}
</script>
 
<style lang="scss" scoped>
</style>