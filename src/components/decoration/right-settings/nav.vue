<template>
  <div class="right">
    <div class="top">{{component.title}}</div>
    <div>
      <Nav :options="options" />
    </div>
    <div class="settings">
      <PicList :img-list="options.navs" :is-nav='true'/>
      <div>
        <el-button type="primary" plain @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import PicList from './pic-list'
export default {
  components:{
    Nav,
    PicList
  },
  props:{
    component:{
      type:Object,
      default:{}
    }
  },
  data(){
    return{
      options:{}
    }
  },
  created(){
    this.options=this.component.options
  },
  methods:{
    submit(){
      this.$emit('on-change-options',this.options)
    }
  },
  watch:{
    component:{
      handler(newValue){
        this.options=newValue.options
      },
      deep:true
    }
  }
}
</script>

<style scoped lang="scss">

.right{
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
  >.settings{
    font-size: 14px;
    >div:last-child{
      padding: 20px 0;
      margin: 0;
      text-align: center;
      >button{
        padding: 8px 30px;
      }
    }
  }
}
</style>
