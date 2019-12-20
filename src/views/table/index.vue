<template>
  <div class="container">
    <DecLeft :list="list" @on-add-component="addComponent"/>
    <DecView :components="components" @on-change-list="changeComponents"/>
    <DecRight :components="components"/>
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
          name:"Banner",
          title:'轮播图片',
          pic:require('../../assets/decoration/pic.gif'),
          type:0,
          options:{interval:3000,imgList:[require('../../assets/decoration/banner.jpg'),require('../../assets/decoration/banner.jpg'),require('../../assets/decoration/banner.jpg'),require('../../assets/decoration/banner.jpg')]}
        },
        {
          name:"Nav",
          title:'店铺导航',
          pic:require('../../assets/decoration/nav.png'),
          type:0,
          options:{navs:[{name:'断码清仓',pic:require('../../assets/decoration/pic.gif')},{name:'全球购',pic:require('../../assets/decoration/pic.gif')},{name:'幸运砸金蛋',pic:require('../../assets/decoration/pic.gif')},{name:'潮人穿搭',pic:require('../../assets/decoration/pic.gif')},{name:'每日签到',pic:require('../../assets/decoration/pic.gif')}]}
        },
        {
          name:"Title",
          title:'标题栏',
          pic:require('../../assets/decoration/title.png'),
          type:0,
          options:{color:"pink"}
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
          pic:require('../../assets/decoration/magicCube.png'),
          type:0,
          options:{color:"pink"}
        },
        {
          name:"Search",
          title:'搜索模块',
          pic:require('../../assets/decoration/search.png'),
          type:0,
          options:{color:"#e4e4e4",bgColor:'#E02E24',placeholder:'搜索店铺内商品',border:1,textAlign:'left'}
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
      ],
      components:{
        current:0,
        list:[
          {
            name:"Search",
            title:'搜索模块',
            pic:require('../../assets/decoration/search.png'),
            type:0,
            options:{color:"#e4e4e4",bgColor:'#E02E24',placeholder:'搜索店铺内商品',border:1,textAlign:'left'}
          },
          {
            name:"Banner",
            title:'轮播图片',
            pic:require('../../assets/decoration/pic.gif'),
            type:0,
            options:{interval:3000,imgList:[require('../../assets/decoration/banner.jpg'),require('../../assets/decoration/banner.jpg'),require('../../assets/decoration/banner.jpg'),require('../../assets/decoration/banner.jpg')]}
          },
          {
            name:"Nav",
            title:'店铺导航',
            pic:require('../../assets/decoration/nav.png'),
            type:0,
            options:{navs:[{name:'断码清仓',pic:require('../../assets/decoration/pic.gif')},{name:'全球购',pic:require('../../assets/decoration/pic.gif')},{name:'幸运砸金蛋',pic:require('../../assets/decoration/pic.gif')},{name:'潮人穿搭',pic:require('../../assets/decoration/pic.gif')},{name:'每日签到',pic:require('../../assets/decoration/pic.gif')}]}
          }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    addComponent(e){
      this.components.list.push(e)
    },
    changeComponents(e){
      if(typeof(e)=='number'||typeof(e)=='string'){
        this.components.current=e
      }else{
        this.components.list=e
      }
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
