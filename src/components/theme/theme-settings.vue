<template>
  <div class="theme">
    <div>主题颜色配置</div>
    <div>
      <div v-for="(item,index) in list" :key="index" @click="changeTheme(index)" :class="{'active':current==index,'customize':index==list.length-1}">
        <div :style="{backgroundColor:item.primary}" v-if="index<list.length-1"></div>
        <div :style="{backgroundColor:item.auxiliary}" v-if="index<list.length-1"></div>
        <colorPicker v-model="item.primary" :isOpen="true" v-if="index==list.length-1"/>
        <colorPicker v-model="item.auxiliary" :isOpen="true" v-if="index==list.length-1"/>
      </div>
      <span>建议：自定义主题不要设置白色哦~</span>
    </div>
    <div>
      <el-button type="primary" plain @click="saveTheme">保存</el-button>
    </div>
  </div>
</template>

<script>
import colorPicker from '../../plugin/colorPicker.vue'
export default {
  components:{
    colorPicker
  },
  data() {
    return {
      current:0
    }
  },
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  methods: {
    changeTheme(i){
      this.current=i
      this.$emit('on-change-theme',i)
    },
    saveTheme(){
      console.log(this.list[this.current])
    }
  },
  watch:{
    list:{
      handler(newValue){
        this.current=this.list.length-1
        this.$emit('on-change-theme',this.current)
      },
      deep:true
    }
  }
}
</script>
<style scoped lang="scss">
.theme{
  >div:nth-child(2){
    width: 300px;
    height: 590px;
    border: 1px solid #e4e4ee;
    border-radius: 5px;
    margin-top: 25px;
    padding: 33px 10%;
    display: flex;
    flex-wrap: wrap;
    >div{
      width: 40%;
      display: flex;
      margin-bottom: 30px;
      transition: all 0.5s ease 0s;
      >div{
        width: 45px;
        height: 43px;
        border-radius: 4px;
        border: 1px solid #e1e0e6;
        box-sizing: border-box;
      }
      >div:nth-child(2n){
        margin-left: 8%;
      }
    }
    >div:nth-child(2n){
      margin-left: 20%;
    }
    >div:hover,>div.active{
      transform: scale(1.15);
    }
    >div.customize>div{
      border: none;
    }
    >div.customize:hover{
      transform: scale(1);
    }
    >span{
      font-size: 12px;
      color: #9797a1;
    }
  }
  >div:last-child{
    text-align: center;
    margin-top: 20px;
    >button{
      padding: 8px 20px;
    }
  }
}
</style>
