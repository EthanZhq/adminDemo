<template>
  <div class="container">
    <DecLeft @on-add-component="addComponent"/>
    <DecView :components="components" @on-change-list="changeComponents"/>
    <DecRight :components="components" @on-change-list="changeComponents"/>
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
      components:{
        current:0,
        list:[
          {
            name:"Search",
            title:'搜索模块',
            pic:require('../../assets/decoration/search.png'),
            type:0,
            options:{color:"#e4e4e4",bgColor:'#E02E24',placeholder:'搜索店铺内商品',border:'0',textAlign:'left'}
          },
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
          }
        ]
      }
    }
  },
  methods: {
    addComponent(e){
      this.components.list.unshift(e)
      this.components.current=0
      console.log('增加组件列表'+this.components)
    },
    changeComponents(e){
      if(typeof(e)=='number'||typeof(e)=='string'){
        this.components.current=e
      }else if(e instanceof Array){
        this.components.list=e
        console.log('修改组件列表'+this.components.list)
      }else if(typeof(e)=='object'){
        this.components.list[this.components.current].options=e
        console.log('修改组件列表'+this.components.list)
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
