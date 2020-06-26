<template>
  <div :class="carouselClass">
    <div :id="carouselId" :class="originClass + '-container'">
      <span v-if="showArrow" @click="clickLeft" class="arrow arrow-left">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path
            d="M700.269 930.666c-14.331 0-27.677-5.512-37.657-15.529l-365.34-365.99c-1.337-1.306-2.38-2.417-3.234-3.607l-2.16-2.723c-10.653-10.703-15.888-23.296-15.888-36.627 0-13.571 5.351-26.26 15.053-35.73l367.853-363.953c9.951-9.813 23.238-15.222 37.401-15.222 13.848 0 26.931 5.25 36.832 14.769 9.841 9.549 15.507 22.867 15.506 36.518 0 13.484-5.365 26.259-15.134 35.969l-331.846 328.283 336.081 336.964c9.607 9.666 14.915 22.296 14.915 35.619 0 13.958-5.673 27.055-15.937 36.876-9.768 9.271-22.734 14.381-36.444 14.381z"
          />
        </svg>
      </span>
      <span v-if="showArrow" @click="clickRight" class="arrow arrow-right">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path
            d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z"
          />
        </svg>
      </span>

      <slot />

      <ul v-if="showIndicator" class="indicator">
        <li
          v-for="(item, id) of carouselItems" :key="id"
          @click="oppointActiveIndex(id)"
          :class="['indicator-item', id === activeIndex ? 'indicator-item-on' : '']"
        ></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'do-carousel',
  props: {
    direction: {
      type: String,
      default: 'horizonal',
      validator: v => ['horizonal', 'vertical'].filter(item => item === v).length
    },
    index: {
      type: Number,
      default: 0
    },
    animate: {
      type: String,
      default: 'ease-in-out',
      validator: v => ['ease-in-out', 'linear', 'ease', 'ease-in', 'ease-out'].filter(item => item === v).length
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    slideArrow: {
      type: String,
      default: 'right',
      validator: v => ['top', 'bottom', 'left', 'right'].filter(item => item === v).length
    },
    interval: {
      type: Number,
      default: 2500
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    showArrow: {
      type: Boolean,
      default: true
    }
    
  },
  data () {
    return {
      originClass: 'do-carousel',
      carouselId: 'carousel_' + Math.random().toString().slice(2, 6),
      carouselItems: null,
      carouselItemsLength: 0,
      activeIndex: this.index
    };
  },
  computed: {
    carouselClass () {
      const { direction , animate, originClass } = this;
      return [
        originClass,
        direction  !== 'vertical' ? originClass + '-horizonal' : originClass + '-vertical',
      ];
    },
    preIndex () {
      const { carouselItemsLength, activeIndex } = this;
      return activeIndex - 1 < 0 ? carouselItemsLength - 1 : activeIndex - 1;
    },
    nextIndex () {
      const { carouselItemsLength, activeIndex } = this;
      return activeIndex + 1 > (carouselItemsLength - 1) ? 0 : activeIndex + 1;
    },
  },
  methods: {
    async execCarousel () {
      const { direction, animate, carouselContainer, carouselItems, carouselItemsLength, activeIndex } = this;
      const { offsetWidth, offsetHeight } = carouselContainer;
      const { offsetPos, position } = direction !== 'vertical' ? { offsetPos: offsetWidth, position: 'X' } : { offsetPos: offsetHeight, position: 'Y' };
      
      carouselItems.forEach((item, index) => {
        if (index <= activeIndex) {
          item.style.cssText = `
            transform: translate${position}(${-offsetPos * (activeIndex - index)}px) scale(1);
          `;
        } else {
          item.style.cssText = `
            transform: translate${position}(${(index - activeIndex) * offsetPos}px) scale(1);
          `;
        }
      })
      
      carouselItems[activeIndex].style.cssText = `
        transform: translate${position}(0px) scale(1);
        transition: transform .4s ${animate}
      `;

      if (activeIndex === 0) {
        carouselItems[carouselItemsLength - 1].style.cssText = `
          transform: translate${position}(${-offsetPos}px) scale(1);
        `;
      }
      else if (activeIndex === carouselItemsLength -1) {
        carouselItems[0].style.cssText = `
          transform: translate${position}(${offsetPos}px) scale(1);
        `;
      }
    },

    clickLeft () {
      this.activeIndex = this.preIndex;
      this.execCarousel();
      this.$emit('change', this.activeIndex);
    },

    clickRight () {
      this.activeIndex = this.nextIndex;
      this.execCarousel();
      this.$emit('change', this.activeIndex);
    },

    oppointActiveIndex (index) {
      this.activeIndex = index;
      this.execCarousel();
      this.$emit('change', this.activeIndex);
    },

    autoArrowLeft () {
      this.carouselTimeId = setInterval(() => {
        this.clickLeft();
      }, this.interval);
    },
    autoArrowRight () {
      this.carouselTimeId = setInterval(() => {
        this.clickRight();
      }, this.interval);
    }
  },

  created() {

    // 异步获取 DOM 节点
    setTimeout(() =>{
      const dom = document.querySelectorAll(`#${this.carouselId} .do-carousel-item`);
      this.carouselContainer = document.querySelector(`#${this.carouselId}`);
      this.carouselItems = dom;
      this.carouselItemsLength = dom.length;
      this.execCarousel();

      // 自动切换
      if (this.autoplay) {
        this.slideArrow === 'right' || this.slideArrow === 'bottom' ? this.autoArrowRight() : this.autoArrowLeft()
      
        // 监听盒子事件(移入 => 停止切换, 移出 => 重新自定切换)
        this.carouselContainer.onmouseover = () => {
          if (this.autoplay && this.carouselTimeId) {
            clearInterval(this.carouselTimeId);
            this.carouselTimeId = null;
          }
        }
        this.carouselContainer.onmouseout = () => {
          if (this.autoplay) {
            this.slideArrow === 'right' || this.slideArrow === 'bottom' ? this.autoArrowRight() : this.autoArrowLeft();
          }
        }
      }
    })
  },
}
</script>
 
<style lang="scss" scoped>
</style>