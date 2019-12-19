<template>
  <div class="container">
    <DecLeft :list="list" @on-add-component="addComponent"/>
    <DecView :components="components" @on-change-list="changeComponents"/>
    <DecRight :list="list"/>
  </div>
</template>

<script>
import DecLeft from '@/components/decoration/dec-left'
import DecRight from '@/components/decoration/dec-right'
import DecView from '@/components/decoration/dec-view'
export default {
  components:{
    DecLeft,
    DecView,
    DecRight
  },
  data() {
    return {
      list:[
        {
          name:"Top",
          title:'店铺头部',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{color:"deeppink"}
        },
        {
          name:"Search",
          title:'搜索模块',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{color:"#e4e4e4",bgColor:'#fff',placeholder:'搜索店铺内商品',border:1,textAlign:'center'}
        },
        {
          name:"Nav",
          title:'图片导航',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{color:"pink"}
        },
        {
          name:"Title",
          title:'标题栏',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{color:"pink"}
        },
        {
          name:"Banner",
          title:'轮播广告',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{color:"pink"}
        },
        {
          name:"Coupon",
          title:'优惠券',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"deeppink"}
        },
        {
          name:"Discount",
          title:'限时折扣',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        },
        {
          name:"Nav",
          title:'满包邮',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        },
        {
          name:"Title",
          title:'拼团',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        },
        {
          name:"Banner",
          title:'专题推荐',
          pic:require('../../assets/decoration/pic.gif'),
          type:1,
          options:{color:"pink"}
        }
      ],
      components:[]
    }
  },
  created() {
  },
  methods: {
    addComponent(e){
      this.components.push(e)
    },
    changeComponents(e){
      this.components=e
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  display: flex;
  padding: 20px 30px;
}
</style>
