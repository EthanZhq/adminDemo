<template>
  <div class="theme-view">
    <div>展示样式</div>
    <div>
      <div>
        <div :style="{color:theme.primary}">积分抵扣<i class="el-icon-circle-check"></i></div>
        <div>
          <div :style="{backgroundColor:theme.auxiliary}">加入购物车</div>
          <div :style="{backgroundColor:theme.primary}">立即购买</div>
        </div>
        <div :style="{color:theme.primary}">￥54.50+<span>120积分</span></div>
      </div>
      <div>
        <div :style="{backgroundColor:theme.primary}">确定</div>
        <div :style="{color:theme.primary}">￥54.50+<span>100积分</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    theme:{
      type:Object,
      default:{}
    }
  }
}
</script>
<style scoped lang="scss">
.theme-view{
  margin-left: 150px;
  >div:nth-child(1){
    margin-bottom: 30px;
  }
  >div:nth-child(2){
    display: flex;
    >div:nth-child(1),>div:nth-child(2){
      background-repeat: no-repeat;
      background-image: url('../../assets/theme/rendering2.png');
      width: 320px;
      height: 647px;
      background-size: 100% auto;
      position: relative;
      >div{
        color: #fff;
        display: inline-block;
        position: absolute;
        font-size: 6px;
        transform: scale(0.9);
      }
      
    }
    >div:nth-child(1)>div:nth-child(3),>div:nth-child(2)>div:nth-child(2){
      font-weight: 700;
      background: #fff;
      font-size: 18px;
      >span{
        font-size: 14px;
      }
    }
    >div:nth-child(1){
      >div:nth-child(1){
        border-width: 1px;
        border-style: solid;
        right: 88px;
        bottom: 191px;
        border-radius: 20px;
        padding: 2.2px 9px;
        transform: scale(0.7);
        i{
          margin-left: 2px;
        }
      }
      >div:nth-child(2){
        display: flex;
        bottom: 80px;
        right: 14px;
        >div{
          width: 90px;
          height: 37px;
          line-height: 37px;
          text-align: center;
        }
      }
      >div:nth-child(3){
        bottom: 170px;
        left: 22px;
      }
    }
    >div:nth-child(2){
      background-image: url('../../assets/theme/rendering1.png');
      margin-left: 60px;
      >div{
        bottom: 93px;
        right: 19px;
        border-radius: 20px;
        padding: 6px 129px;
      }
    }
  }
}
</style>
