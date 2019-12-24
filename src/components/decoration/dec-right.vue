<template>
  <div class="plane">
    <div>设置</div>
    <component :is="component.name" :component="component" @on-change-options="changeOptions"/>
  </div>
</template>

<script>
import Search from '@/components/decoration/right-settings/search'
import Banner from '@/components/decoration/right-settings/banner'
import Nav from '@/components/decoration/right-settings/nav'
export default {
  components:{
    Search,
    Banner,
    Nav
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
  >.view{
    border: 1px solid #D7D7D7;
  }
}
</style>
