<template>
  <div class="container">
    <el-tabs v-model="active">
      <el-tab-pane label="基础组件" name="first" style="height:600px;overflow-y:auto;overflow-x:hidden;">
        <div class="base">
          <div v-for="(item,index) in list.filter(item=>item.type==0)" :key="index" @click="addItem(item)">
            <img :src="item.pic" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="营销组件" name="second" style="height:600px;overflow-y:auto;overflow-x:hidden;">
        <div class="market">
          <div v-for="(item,index) in list.filter(item=>item.type==1)" :key="index" @click="addItem(item)">
            <img :src="item.pic" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:'first',
      list:[
        {
          name:"Banner",
          title:'轮播图片',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{interval:3,imgList:[{pic:require('../../assets/decoration/banner.jpg')}]}
        },
        {
          name:"Nav",
          title:'店铺导航',
          pic:require('../../assets/decoration/nav.png'),
          type:0,
          options:{navs:[{name:'断码清仓',pic:require('../../assets/decoration/pic.gif'),color:'#555'},{name:'全球购',pic:require('../../assets/decoration/pic.gif'),color:'#555'},{name:'幸运砸金蛋',pic:require('../../assets/decoration/pic.gif'),color:'#555'},{name:'潮人穿搭',pic:require('../../assets/decoration/pic.gif'),color:'#555'}]}
        },
        {
          name:"Title",
          title:'标题栏',
          pic:require('../../assets/decoration/title.png'),
          view:[{pic:require('../../assets/decoration/defalut.png')},{pic:require('../../assets/decoration/defalut.png')}],
          type:0,
          options:{type:1,title:'热销推荐',bgColor:'#fff',color:"#666",fontSize:16,fontWeight:'0',lineColor:'#333',arrowColor:'#666'}
        },
        {
          name:"Product",
          title:'商品模块',
          pic:require('../../assets/decoration/product.png'),
          type:0,
          options:{color:"#e4e4e4",bgColor:'#fff',placeholder:'搜索店铺内商品',border:1,textAlign:'center'}
        },
        {
          name:"Discount",
          title:'限时秒杀',
          pic:require('../../assets/decoration/discount.png'),
          type:0,
          options:{color:"pink"}
        },
        {
          name:"MagicCube",
          title:'魔方',
          view:[{pic:require('../../assets/decoration/defalut.png')},{pic:require('../../assets/decoration/defalut.png')},{pic:require('../../assets/decoration/defalut.png')},{pic:require('../../assets/decoration/defalut.png')}],
          pic:require('../../assets/decoration/magicCube.png'),
          type:0,
          options:{type:0,space:10,picList:[{pic:require('../../assets/decoration/defalut.png')},{pic:require('../../assets/decoration/defalut.png')},{pic:require('../../assets/decoration/defalut.png')}]}
        },
        {
          name:"Search",
          title:'搜索模块',
          pic:require('../../assets/decoration/search.png'),
          type:0,
          options:{color:"#e4e4e4",bgColor:'#E02E24',placeholder:'搜索店铺内商品',border:'1',textAlign:'center'}
        },
        {
          name:"Coupon",
          title:'优惠券',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"deeppink"}
        },
        
        {
          name:"Freeshipping",
          title:'满包邮',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        },
        {
          name:"Group",
          title:'拼团',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        },
        {
          name:"Thematic",
          title:'专题推荐',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        }
      ]
    }
  },
  methods: {
    addItem(e){
      this.$emit('on-add-component',e)
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  width: 215px;
  height: 700px;
  margin: 0 45px;
  border: 1px solid #e4e4ee;
  border-radius: 5px;
  .base,.market{
    display: flex;
    flex-wrap: wrap;
    >div:nth-child(2n){
      margin-left: 10%;
    }
    >div{
      width: 45%;
      background: #ffffff;
      margin-bottom: 20px;
      text-align: center;
      padding: 5px 0;
      cursor: pointer;
      >img{
        width: 80%;
        margin-bottom: 10px;
      }
      >span{
        display: block;
        color: #595961;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
</style>
