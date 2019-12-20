<template>
  <div class="plane">
    <div>设置</div>
    <Search :component="component"/>
  </div>
</template>

<script>
import Search from '@/components/decoration/right-settings/search'
export default {
  components:{
    Search
  },
  data() {
    return {
      component:{}
    }
  },
  props:['components'],
  created() {
    this.component=this.components.list[this.components.current]
  },
  methods: {
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
  margin-left: 35px;
  >div:nth-child(1){
    margin-bottom: 15px;
  }
  >.view{
    border: 1px solid #D7D7D7;
  }
}
</style>
