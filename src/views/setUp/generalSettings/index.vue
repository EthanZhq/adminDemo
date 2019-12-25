<template>
  <div class="wrap">
    <div class="app-container container">
       <div class="add">
          <h3>订单流程设置</h3>
           <div class="express-box">
            <span class="express-title">未支付订单</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">分钟后，自动关闭</span>
          </div>
          <div class="express-box">
            <span class="express-title">已发货订单</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，自动确认收货</span>
          </div>
          <div class="express-box">
            <span class="express-title">已收货订单</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，关闭申请售后功能</span>
            <span class="tips">最长可设置365天，0代表买家在确认收货后无法申请售后</span>
          </div>
        </div>
        <div class="add">
          <h3>订单流程设置</h3>
           <div class="express-box">
            <span class="express-titles">买家发起退款申请</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，商家未处理，系统将自动拒绝退款</span>
          </div>
          <div class="express-box">
            <span class="express-titles">买家发起退货退款申请</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，商家未处理，系统将自动拒绝退货退款</span>
          </div>
          <div class="express-box">
            <span class="express-titles">买家发起换货申请</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，商家未处理，系统将自动拒绝换货退款</span>
          </div>
          <div class="express-box">
            <span class="express-titles">买家已退货</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，商家未处理，系统将自动拒绝退款</span>
          </div>
          <div class="express-box">
            <span class="express-titles">商家同意退货</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，买家未处理，系统将自动拒绝售后</span>
          </div>
           <div class="express-box explain">
            <span class="express-titles">说明：</span>
            <div class="explain-main">
              1、系统默认的时间为7天，手动设置时间最长不超过90天。
            </div>
          </div>
        </div>
        <div class="add">
          <h3>评论设置</h3>
          <div class="express-box">
            <span class="express-title">买家交易成功</span>
            <el-input
              placeholder=""
              style="width: 120px;"
              class="filter-item"
            />
            <span class="close">天后，买家未评论，系统将自动评论</span>
            <span class="tips">系统默认的时间为7天，手动设置时间最长不超过90天</span>
          </div>
          <div class="express-box">
            <span class="express-title" style="width:120px">自动评论内容：</span>
            <el-input type="textarea" placeholder="用户评论超时，系统自动好评" :autosize="{ minRows: 1, maxRows: 20}" style="width:40%"></el-input>
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
    .add{
      background: #fff;
      padding: 0 32px;
      h3{
        padding: 32px 0 0;
        margin: 0
      }
      .express-box{
        padding: 24px 0 0 24px;
        display: flex;
        align-items: center;
        color: #666;
        .express-title{
          font-size: 14px;
          padding-right: 12px;
          width: 100px;
          display: block
        }
        .express-titles{
          font-size: 14px;
          padding-right: 12px;
          width: 160px;
          display: block
        }
        .close{
          font-size: 14px;
          padding-left: 32px;
        }
        .tips{
          color: #999;
          padding-left: 16px;
          font-size: 12px
        }
      }

      .dec{
        display: flex;
        align-items: flex-start;
        .area{
          width: 50%;
        }
      }
      .explain{
        color: #999;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .explain-main{
          padding-top: 16px
        }
      }
      .btn-box{
        padding: 60px 0;
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
