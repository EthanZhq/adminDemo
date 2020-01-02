<template>
  <div class="wrap">
    <div :class="[options.type!=1?'type'+options.type:'',options.border!='0'?'border'+options.border:'']">
      <div v-for="(item,index) in product" :key="index">
        <img :src="item.pic" alt="">
        <div>
          <div>{{item.name}}</div>
          <div>{{item.pay}}</div>
          <div>￥{{item.price.money}}<span>+{{item.price.points}}积分</span></div>
          <div><span>￥{{item.originalCost}}</span><span>已售{{item.num}}件</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['options'],
  data(){
    return {
      product:[
        {pic:require('../../../assets/decoration/defalut.png'),name:'商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',pay:'积分抵扣',price:{money:160.50,points:120},originalCost:248.00,num:12312},
        {pic:require('../../../assets/decoration/defalut.png'),name:'商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',pay:'积分抵扣',price:{money:160.00,points:120},originalCost:248.55,num:12312}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
  img{
    width: 100%;
    vertical-align: middle;
  }
  div.border1>div{
    box-shadow: 0 0 7px 0 rgba(0,0,0,.1)
  }
  div.border2>div{
    border: 1px solid #E0E0E0;
  }
  div.border3>div{
    background: transparent;
  }
  >div{
    padding: 10px;
    font-size: 13px;
    >div{
      background: #fff;
      margin-bottom: 8px;
      >div{
        padding: 8px;
        >div:nth-child(1),>div:nth-child(3){
          margin: 5px 0;
        }
        >div:nth-child(1){
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        >div:nth-child(2){
          font-size: 12px;
          padding: 2px 4px;
          display: inline-block;
          border: 1px solid #E02E24;
          border-radius: 20px;
          color: #E02E24;
        }
        >div:nth-child(3){
          font-weight: 700;
          color: #E02E24;
          font-size: 15px;
          >span{
            font-size: 14px;
          }
        }
        >div:nth-child(4){
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #999;
          >span:first-child{
            text-decoration: line-through;
          }
        }
      }
    }
    >div:last-child{
      margin-bottom: 0px;
    }
  }
  >div.type0{
    display: flex;
    flex-wrap: wrap;
    >div{
      width: 49%;
    }
    >div:nth-child(2n){
      margin-left: 2%;
    }
  }
  >div.type2{
    >div{
      display: flex;
      >img{
        width: 35%;
      }
      >div{
        width: 65%;
        margin-left: 5px;
      }
    }
  }
}
</style>
