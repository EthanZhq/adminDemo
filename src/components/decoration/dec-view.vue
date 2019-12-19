<template>
  <div class="container">
    <div class="top"></div>
    <draggable element="div" v-model="list">
      <div v-for="(item,index) in list" :key="index">
        <component :is="item.name" :options="item.options"></component>
      </div>
    </draggable>
    <div class="bottom"></div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Top from './components/Top'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Search from './components/Search'
import Title from './components/Title'
export default {
  components: {
    draggable,
    Top,
    Banner,
    Nav,
    Search,
    Title
  },
  props:['components'],
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.list=this.components
  },
  methods: {
  },
  watch:{
    components:{
      handler(newValue){
        this.list=this.components
      },
      deep:true
    },
    list:{
      handler(newValue){
        this.$emit('on-change-list',newValue)
      },
      deep:true
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  height: 800px;
  border: 1px solid #e4e4e4;
  border-radius: 50px;
  .top{

  }
  >div:nth-child(2){
    border: 1px solid #e4e4e4;
    width: 450px;
  }
}
</style>
