<template>
  <div class="wrap">
    <div class="app-container container">
       <div class="ingertal">
          <h3>积分增长设置</h3>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A">
              <div class="express-box">
                <span class="express-title">通过现金购物获取积分，购物每满</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">元，获得</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分</span>
              </div>
            </el-checkbox>
            <el-checkbox label="复选框">
              <div class="express-box">
                <span class="express-title">签到</span>
                <span class="express-title">每日签到可获得</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分</span>
              </div>
            </el-checkbox>
            <el-checkbox label="复选框 B">
               <div class="express-box">
                <span class="express-title">每日首次分享获得</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分</span>
              </div>
            </el-checkbox>
            <el-checkbox label="复选框 C">
               <div class="express-box">
                <span class="express-title">每次分享商品获得</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分，每日限</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">次</span>
              </div>
            </el-checkbox>
            <el-checkbox label="禁用">
               <div class="express-box">
                <span class="express-title">每次分享文章获得</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分，每日限</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">次</span>
              </div>
            </el-checkbox>
            <el-checkbox label="选中且禁用">
               <div class="express-box">
                <span class="express-title">每次分享活动获得</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分，每日限</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">次</span>
              </div>
            </el-checkbox>
             <el-checkbox label="复选框">
               <div class="express-box">
                <span class="express-title">每日获取积分上限</span>
                <el-input
                  style="width: 60px;"
                  class="filter-item"
                />
                <span class="txt">积分</span>
              </div>
            </el-checkbox>
          </el-checkbox-group>



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
      checkList: ['选中且禁用','复选框 A']
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
    .ingertal{
      background: #fff;
      height: 100%;
      padding: 0 32px;
      h3{
        padding: 32px 0 0;
        margin: 0
      }
      .express-box{
        padding: 24px 0 0;
        display: flex;
        align-items: center;
        .express-title{
          font-size: 14px;
          padding-right: 12px;
          display: block
        }
        .txt{
          padding: 0 12px
        }
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
<style>
.el-checkbox-group{
  display: flex;
  flex-direction: column
}
</style>
