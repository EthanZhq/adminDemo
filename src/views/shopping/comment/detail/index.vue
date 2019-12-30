<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="order-info">
        <div class="info-title">
          <div class="info-picture">
            <img src="" alt="">
          </div>
          <div class="main">
            <div class="data">
              <span class="name">用户</span>
              <span>{{ temp.nname }}</span>
            </div>
            <div class="data">
              <span class="name">评论时间</span>
              <span>{{ temp.ctime }}</span>
            </div>
            <div class="data">
              <span class="name">商品名称</span>
              <span class="shopping-name">{{ temp.gname }}</span>
            </div>
            <div class="data">
              <span class="name">购买时间</span>
              <span>{{ temp.atime }}</span>
            </div>
            <div class="data">
              <span class="name">属性</span>
              <span>{{ temp.specChildName }}</span>
            </div>
            <div class="data">
              <span class="name">是否显示</span>
              <span>{{ temp.isShow }}</span>
            </div>
            <div class="data">
              <span class="name">订单编号</span>
              <span>{{ temp.code }}</span>
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
              v-model="temp.prank"
              :colors="['#2f66ff', '#2f66ff', '#2f66ff']"
              :texts="['非常差', '差', '一般', '好', '非常好']"
              show-text
              disabled
            />
          </div>
          <div class="mid">
            <div class="comment-content">{{ temp.content }}</div>
            <div class="picture">
                <div class="comment-pic">
                  <img src="" alt="">
                </div>
            </div>
          </div>
          <div class="rate">
            <span>物流评价</span>
            <el-rate
              v-model="temp.drank"
              :colors="['#ff866e', '#ff866e', '#ff866e']"
              disabled
            />
          </div>
          <div class="rate">
            <span>服务评价</span>
            <el-rate
              v-model="temp.srank"
              :colors="['#ffd43f', '#ffd43f', '#ffd43f']"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { detail } from '@/api/comment'
export default {
  data() {
    return {
      cId: '',
      temp: {
        atime: '',
        code: '',
        content: '',
        ctime: '',
        drank: '',
        gname: '',
        isShow: '',
        nname: '',
        prank: '',
        specChildName: '',
        srank: ''
      }
    }
  },
  mounted() {
    this.cId = this.$route.query.id
    this.getDeatil()
  },
  methods: {
    getDeatil() {
      detail(this.cId).then(response => {
        this.temp = response.data
        if (this.temp.isShow === 1) {
          this.temp.isShow = '显示'
        } else {
          this.temp.isShow = '不显示'
        }
      })
    }
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
          padding-left:36px;
          span{
            margin-right: 20px;
          }
        }
        .picture{
          padding-left:36px;
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
