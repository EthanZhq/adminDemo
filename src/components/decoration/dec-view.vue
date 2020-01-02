<template>
  <div class="content">
    <div>展示样式</div>
    <div class="view">
      <div class="top" style="background:#E02E24;">商城</div>
      <draggable element="div" v-model="list">
        <div v-for="(item,index) in list" :key="index" @click="changeCurrent(index)">
          <div class="del"><span>{{item.title}}</span><i class="el-icon-delete" @click="delComponent(index)"></i></div>
          <component :is="item.name" :options="item.options"></component>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
// import draggable from 'vuedraggable'
import Top from './components/Top'
import Banner from './components/banner'
import Nav from './components/nav'
import Search from './components/search'
import Title from './components/title'
import MagicCube from './components/magicCube'
import Product from './components/product'
import Discount from './components/discount'
export default {
  components: {
    draggable,
    Top,
    Banner,
    Nav,
    Search,
    Title,
    MagicCube,
    Product,
    Discount
  },
  props:{
    components:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      list:[],
      current:0
    }
  },
  created() {
    this.list=this.components.list
  },
  methods: {
    changeCurrent(i){
      this.current=i
      this.$emit('on-change-list',i)
    },
    delComponent(i){
      this.list.splice(i,1)
    }
  },
  watch:{
    components:{
      handler(newValue){
        this.list=this.components.list
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
.content{
  color: #333;
  display: flex;
  flex-direction: column;
  margin: 0 100px;
  >div:nth-child(1){
    margin-bottom: 15px;
  }
  >.view{
    flex: 1;
    width: 400px;
    height: 700px;
    background: #F5F5F5;
    border: 1px solid #D7D7D7;
    display: flex;
    flex-direction: column;
    .top{
      height: 50px;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 18px;
      line-height: 50px;
    }
    >div:nth-child(2){
      width: 100%;
      flex: 1;
      >div:hover{
        border: 1px dashed #2589FF;
        box-sizing: border-box;
        >div.del{
          display: block;
        }
      }
      >div{
        >div.del{
          z-index: 99;
          font-size: 13px;
          color: #2589FF;
          width: 100%;
          background: #fff;
          padding: 8px 15px;
          display: none;
          >i{
            float: right;
            cursor: pointer;
            font-size: 15px;
          }
        }
      }
    }
  }

}
</style>
