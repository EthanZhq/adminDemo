<template>
  <div class="wrap">
    <div class="app-container container">
       <div class="add">
          <h3>会员等级</h3>
          <div class="express-box">
            <span class="express-title">等级名称</span>
            <el-input
              placeholder="设置会员等级名称，不超过10字"
              style="width: 270px;"
              class="filter-item"
            />
          </div>
          <div class="express-box">
            <span class="express-title">累计消耗额度</span>
            <el-input
              placeholder="会员累计所需消耗的额度，单位：元"
              style="width: 270px;"
              class="filter-item"
            />
          </div>
          <div class="express-box dec">
            <span class="express-title">等级描述</span>
            <el-input
              v-model="describe"
              placeholder="会员等级描述，不超过20字"
              style="width:360px"
            />
          </div>
          <div class="btn-box">
            <el-button
              class="filter-item"
              type="primary"
            >确定</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >取消</el-button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      describe: ''
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 55px);
  .container{
    flex: 1;
    overflow-y: scroll;
    padding: 16px;
    background: #f1f4f6;
    border-radius: 10px;
    margin: 0 16px 16px;
    height: 100%;
    .add{
      background: #fff;
      height: 100%;
      padding: 0 32px;
      h3{
        padding: 32px 0 0;
        margin: 0
      }
      .express-box{
        padding: 24px 0 0 24px;
        display: flex;
        align-items: center;
        .express-title{
          font-size: 14px;
          padding-right: 12px;
          width: 100px;
          display: block
        }
      }
      .dec{
        display: flex;
        align-items: flex-start
      }
      .btn-box{
        padding-top: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }
}
</style>
