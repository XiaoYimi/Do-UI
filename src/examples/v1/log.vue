<template>
  <div>
    <header><span>Do UI</span> 更新日志</header>
    <section class="body">
      <section v-for="(logItem, lid) of newLogRecord" :key="lid" class="version-block">
        <div class="version-block-head">
          <span class="head-version">{{ logItem.version }}</span>
          <span class="head-datetime">{{ logItem.datetime | datetime }}</span>
        </div>
        <ol class="version-block-body">
          <li v-for="(cItem, cid) of logItem.content" :key="cid">
            {{ cItem }}
          </li>
        </ol>
      </section>
    </section>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      /* 主版本 全面更新, 副版本 添加插件, 小版本 修复bug */
      logObj: [
        {
          version: '1.0.0',
          content: [ '初始化插件包', '添加插件 Button 按钮' ],
          datetime: 1591630800000
        },
        {
          version: '1.1.0',
          content: [ '添加插件 Link 文本链接' ],
          datetime: 1591765680000
        },
        {
          version: '1.2.0',
          content: [ '添加插件 Switch 开关' ],
          datetime: 1591792200000
        },
        {
          version: '1.3.0',
          content: [ '添加插件 Radio 单选框' ],
          datetime: 1591844520000
        },
        {
          version: '1.4.0',
          content: [ '添加插件 Checkbox 复选框' ],
          datetime: 1591930560000
        },
        {
          version: '1.4.1',
          content: [ '修复移动端页面导航栏内容溢出问题,table 样式导致' ],
          datetime: 1591932840000
        }
      ]
    };
  },
  computed: {
    newLogRecord () {
       return this.logObj.reverse()
    }
  },
  filters: {
    datetime: dt => {
      const addPreZero = v => v.toString()[1]? v : '0' + v
      const ndt = new Date(dt)
      const [year, month, date] = [ndt.getFullYear(), ndt.getMonth() + 1, ndt.getDate()]
      return [addPreZero(year), addPreZero(month), addPreZero(date)].join('-')
    }
  }
}
</script>
 
<style lang="scss" scoped>
header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  color: #ffffff;
  font-size: 20px;
  background-color: #001938;

  span {
    margin-right: 20px;
    font-size: 26px;
    font-weight: bold;
  }
}
.body {
  box-sizing: border-box;
  padding: 0 20px;
}

.version-block {
  margin-bottom: 50px;

  .version-block-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    .head-version { font-size: 20px; }
    .head-datetime { font-size: 14px; }
  }

  .version-block-body {
    margin: 0;
    font-size: 14px;
  }
}
</style>