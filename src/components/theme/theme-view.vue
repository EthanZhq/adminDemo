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
        <div :style="{color:theme.primary}" class="price">￥54.50+<span>120积分</span></div>
        <div>
          <span :style="{backgroundColor:theme.primary,color:theme.auxiliary}">80元无门槛商品券</span>
          <span :style="{backgroundColor:theme.primary,color:theme.auxiliary}">满199元减10元</span>
        </div>
      </div>
      <div>
        <div :style="{backgroundColor:theme.primary}">确定</div>
        <div :style="{color:theme.primary}" class="price">￥54.50+<span>100积分</span></div>
        <div class="specs"><div :style="{borderColor:theme.primary,color:theme.primary,backgroundColor:primary}">豆沙绿</div></div>
        <div class="specs"><div :style="{borderColor:theme.primary,color:theme.primary,backgroundColor:primary}">S</div></div>
        <div class="specs"><div :style="{borderColor:theme.primary,color:theme.primary,backgroundColor:primary}">0元购</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      primary:''
    }
  },
  props:{
    theme:{
      type:Object,
      default:{}
    }
  },
  created(){
    this.hexToRgb(this.theme.primary)
  },
  watch:{
    theme:{
      handler(newVal){
        this.hexToRgb(newVal.primary)
      },
      deep:true
    }
  },
  methods:{
    hexToRgb(val){
      let a,b,c;
      a = val.slice(1,3);
      b = val.slice(3,5);
      c = val.slice(5,7);
      this.primary='rgba(' + parseInt(a,16) + ',' + parseInt(b,16) + ',' + parseInt(c,16) + ',.15)'
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
      >div.price{
        font-weight: 700;
        background: #fff;
        font-size: 18px;
        >span{
          font-size: 15px;
        }
      }
      >div:nth-child(4){
        right: 46px;
        bottom: 115px;
        transform: scale(.75);
        >span{
          color: #ffc77f;
          font-weight: 700;
          padding: 1px 6px;
          position: relative;
          border-left: 1.2px dotted #fff;
          border-right: 1.2px dotted #fff;
        }
        >span:nth-child(1){
          margin-right: 3px;
        }
        // >span::before,>span::after{
        //   content: '';
        //   position: absolute;
        //   width: 7px;
        //   height: 7px;
        //   top: 4px;
        //   background: #fff;
        //   border-radius: 50%;
        // }
        // >span::before{
        //   left: -4px;
        // }
        // >span::after{
        //   right: -4px;
        // }
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
      >div:first-child{
        bottom: 93px;
        right: 19px;
        border-radius: 20px;
        padding: 6px 129px;
      }
      >div:nth-child(2){
        left: 84px;
        top: 270px;
      }
      >div.specs{
        background-color:#fff;
        transform: scale(0.75);
        width: 73px;
        height: 27px;
        left: 24px;
        bottom: 289px;
        >div{
          width: 100%;
          height: 27px;
          border: 1px solid;
          border-radius: 20px;
          text-align: center;
          line-height: 27px;
        }
      }
      >div.specs:nth-child(4){
        bottom: 208px;
      }
      >div.specs:nth-child(5){
        bottom: 158px;
      }
    }
  }
}
</style>
