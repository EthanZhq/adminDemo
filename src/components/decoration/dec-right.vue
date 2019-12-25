<template>
  <div class="plane">
    <div>设置</div>
    <div class="right">
      <div class="top">{{component.title}}</div>
      <div class="view">
        <img src="../../assets/decoration/defalut.png" alt="">
        <div v-if="component.options.type">修改样式</div>
      </div>
      <component :is="component.name" :component="component" @on-change-options="changeOptions"/>
    </div>
  </div>
</template>

<script>
import Search from '@/components/decoration/right-settings/search'
import Banner from '@/components/decoration/right-settings/banner'
import Nav from '@/components/decoration/right-settings/nav'
import Title from '@/components/decoration/right-settings/title'
export default {
  components:{
    Search,
    Banner,
    Nav,
    Title
  },
  data() {
    return {
      component:{}
    }
  },
  props:{
    components:{
      type:Object,
      default:{}
    }
  },
  created() {
    this.component=this.components.list[this.components.current]
  },
  methods: {
    changeOptions(e){
      this.$emit('on-change-list',e)
    }
  },
  watch:{
    components:{
      handler(newValue){
        this.component=newValue.list[newValue.current]
      },
      deep:true
    }
  }
}
</script>
<style scoped lang="scss">
.plane{
  >div:nth-child(1){
    margin-bottom: 15px;
  }
  >.right{
    border: 1px solid #D7D7D7;
    border-radius: 5px;
    width: 350px;
    font-size: 15px;
    color: #333;
    >.top{
      border-bottom: 1px solid #D7D7D7;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    >.view{
      border-bottom: 1px solid #D7D7D7;
      >img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
      >div{
        padding: 12px 0;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        border-top: 1px solid #D7D7D7;
      }
      >div:hover{
        color: #409EFF;
      }
    }
  }
}
</style>
