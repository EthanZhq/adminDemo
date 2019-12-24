<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="order-info">
        <div class="info-title">
          <div class="info-picture">
            <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="">
          </div>
          <div class="main">
            <div class="data">
              <span class="name">用户</span>
              <span>青丘先生</span>
            </div>
            <div class="data">
              <span class="name">评论时间</span>
              <span>2020-12-12 11:59:59</span>
            </div>
            <div class="data">
              <span class="name">商品名称</span>
              <span class="shopping-name">银色星芒刺绣网纱底裤</span>
            </div>
            <div class="data">
              <span class="name">购买时间</span>
              <span>2020-12-12 11:59:59</span>
            </div>
            <div class="data">
              <span class="name">属性</span>
              <span>裤子</span>
            </div>
            <div class="data">
              <span class="name">是否显示</span>
              <span>显示</span>
            </div>
            <div class="data">
              <span class="name">订单编号</span>
              <span>201908702145555554</span>
            </div>
          </div>
          <el-button
            class="filter-item"
            type="primary"
          >查看订单详情</el-button>
        </div>
        <div class="content">
          <div class="rate">
            <span>商品评价</span>
            <el-rate
              v-model="value"
              :colors="['#2f66ff', '#2f66ff', '#2f66ff']"
              show-text
              disabled>
            </el-rate>
          </div>
          <div class="mid">
            <div class="comment-content">商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒。商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒商品很棒。</div>
            <div class="comment-pic">
              <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png " alt="">
            </div>
          </div>
          <div class="rate">
            <span>物流评价</span>
            <el-rate
              v-model="value"
              :colors="['#ff866e', '#ff866e', '#ff866e']"
              disabled>
            </el-rate>
          </div>
          <div class="rate">
            <span>服务评价</span>
            <el-rate
              v-model="value"
              :colors="['#ffd43f', '#ffd43f', '#ffd43f']"
              disabled>
            </el-rate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4
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
    font-size: 15px;
    .order-info{
      .info-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        border-radius: 10px;
        padding: 24px;
        .info-picture{
          width: 120px;
          height: 120px;
          border-radius: 50%;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .main{
          flex: 1;
          margin: 0 24px;
          color: #a7a8aa;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .data{
            width: 50%;
            display: flex;
            align-items: center;

            .name{
              display: flex;
              width: 90px;
              line-height: 36px;
            }
            .shopping-name{
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              width: 80%
            }
          }
        }
      }
      .content{
        margin-top: 10px;
        border-radius: 10px;
        background: #fff;
        padding: 24px;
        .mid{
          padding-bottom: 16px
        }
        .rate{
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          span{
            margin-right: 20px;
          }
        }
        .comment-pic{
          width: 100px;
          height: 100px;
          border-radius: 6px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 6px;
          }
        }
        .comment-content{
          padding-bottom: 16px
        }
      }
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }
}
</style>
<style>
.el-rate__icon{
  font-size: 36px
}
.el-rate{
  height: auto;
}
</style>
