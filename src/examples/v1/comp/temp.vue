<template>
  <div :id="id" class="example">
    <h2>{{ compTitle }}</h2>
    <div class="example-title">引入</div>
    <div class="example-code"><slot name="install"/></div>
    <div class="example-title">代码演示</div>
    <div class="example-instance"><slot name="demonstration"/></div>
    <div class="example-title">API</div>
    <div class="example-api">
      <div class="example-instance-block">
        <slot name="api-attr-table"></slot>
        <slot name="api-event-table"></slot>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    id: String,
    compTitle: String
  },
  data () {
    return {};
  }
}
</script>
 
<style lang="scss" scoped>
.example {
  margin-bottom: 80px;

  .example-title {
    padding-left: 10px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 400;
  }

  .example-code {
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px 0;
    padding: 20px 10px;
    font-size: 14px;
    font-weight: bold;
    white-space: pre-line;
    word-spacing: 5px;
    background-color: #e0edff;
  }

  .example-instance,
  .example-api {
    box-sizing: border-box;
    padding: 20px;

    .example-instance-block {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 20px;
      }

      .example-instance-title {
        margin-bottom: 8px;
        font-size: 15px;
        color: #6dabff;
      }
    
      .example-instance-column { margin-bottom: 10px; }
      .example-instance-source {
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius: 8px;
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
        white-space: pre-line;
        overflow-wrap: break-word;
        background-color: #e0edff;
      }
      .example-instance-tip {
        margin-bottom: 20px;
        line-height: 26px;
        font-size: 14px;
        code {
          font-weight: bold;
          color: #ff9060;
        }
      }


      .example-api-table {
        box-sizing: border-box;
        margin-bottom: 40px;
        border-collapse: collapse;

        thead, tbody {
          th,
          td {
            box-sizing: border-box;
            border-bottom: 1px solid #dcdfe6;
            padding: 12px;
            max-width: 200px;
            text-align: left;

            &:first-child { padding-left: 0; }
            &:last-child { padding-right: 0; }
          }
        }

      }
    }
  }
}


</style>