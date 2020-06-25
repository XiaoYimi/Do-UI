<template>
  <div :class="selectClass" :id="selectId">
    <div @click="toggle" class="title">
      {{ showLabel }}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024" width="16" height="16">
        <path fill="#333333" d="M512 626.752l265.344-265.408c30.208-30.144 75.456 15.104 45.312 45.312l-288 288a30.976 30.976 0 0 1-24.064 9.856c-5.184 0.512-13.696-2.368-21.248-9.856l-288-288c-30.144-30.208 15.104-75.456 45.312-45.312L512 626.752z"></path>
      </svg>
    </div>
    <ul class="list">
      <li v-for="(item, id) of options" :key="id"
        @click="selectItem(id, $event)"
        :class="[
          'list-item',
          activeIndex === id ? 'list-item-active' : '',
          item.disabled ? 'list-item-disabled' : ''
        ]">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'do-select',
  props: {
    index: { type: Number, default: NaN },
    options: {
      type: Array,
      default: () => {
        return [
          { label: '选项1', value: '1', disabled: true },
          { label: '选项2', value: '2', disabled: false },
          { label: '选项3', value: '3', disabled: false }
        ];
      },
      validator: v => Array.isArray(v)
    },

    type: {
      type: String,
      default: 'default',
      validator: v => ['default', 'red', 'orange', 'green', 'blue'].filter(item => item === v).length
    },
    state: Boolean,  /* 下拉伸缩状态 */
  },
  data () {
    return {
      originClass: 'do-select',
      selectState: this.state, // 下拉框伸缩状态
      activeIndex: this.index,  // 选中项的索引
    };
  },
  computed: {
    selectClass () {
      const { type, originClass, selectState } = this;
      return [
        originClass,
        type ? originClass + '-' + type : '',
        selectState ? originClass + '-on' : ''
      ];
    },
    selectId () { return 'select-' + Math.random().toString().slice(2, 6); },
    showLabel () {
      const { activeIndex, options } = this;
      return isNaN(activeIndex) ? '请选择' : options[activeIndex].label;
    }
  },
  methods: {
    toggle () {
      const { selectState, selectId } = this;
      this.selectState = !selectState;
      const dom_title = document.querySelector(`#${selectId}`);
      const dom_list = document.querySelector(`#${selectId} .list`);
      dom_list.style.height = this.selectState ? dom_title.offsetHeight * dom_list.childElementCount + 'px' : 0;
    },
    selectItem (index, event) {
      const that = this;
      const { disabled, label, value } = this.options[index];
      if (!disabled) {
        this.activeIndex = index;
        const obj = {
          index: index,
          label: label,
          value: value ? value : label
        }
        this.$emit('select', obj);
        setTimeout(() => { that.toggle() }, 200);
      }
    }
  },
}
</script>
 
<style lang="scss" scoped>
</style>