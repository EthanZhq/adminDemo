<template>
  <div class="theme">
    <div>主题颜色配置</div>
    <div>
      <div v-for="(item,index) in list" :key="index" @click="changeTheme(index)" :class="current==index?'active':''">
        <div :style="{backgroundColor:item.primary}"></div>
        <div :style="{backgroundColor:item.auxiliary}"></div>
      </div>
      <div class="customize">
        <div @click="setCustomize(0)">
          <colorPicker v-model="customize.primary" :isOpen="true" @click.stop v-if="colorBox1"/>
        </div>
        <div @click="setCustomize(1)">
          <colorPicker v-model="customize.auxiliary" :isOpen="true" @click.stop v-if="colorBox2"/>
        </div>
      </div>
      <span>建议：自定义主题配色不要设置白色</span>
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
      current:-1,
      customize:{
        primary:'',
        auxiliary:''
      },
      colorBox1:false,
      colorBox2:false
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
    setCustomize(e){
      if(e==0){
        this.colorBox1=true
      }else{
        this.colorBox2=true
      }
    }
  }
}
</script>
<style scoped lang="scss">
.theme{
  >div:nth-child(2){
    width: 300px;
    height: 600px;
    border: 1px solid #e4e4ee;
    border-radius: 4px;
    margin-top: 30px;
    padding: 35px 10%;
    display: flex;
    flex-wrap: wrap;
    >div{
      width: 40%;
      display: flex;
      margin-bottom: 25px;
      transition: all 0.5s ease 0s;
      >div{
        width: 50%;
        height: 0px;
        padding-top: 42%;
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
      transform: scale(1.1);
    }
    >div.customize{
      >div{
        background: #F8F8F8;
        border-style: dashed;
      }
    }
    >div.customize:hover{
      transform: scale(1);
      >div{
        border-color: #8A8A8F;
        position: relative;
      }
      >div:hover::before{
        content: '+';
        font-size: 38px;
        color: #8A8A8F;
        position: absolute;
        left: 10px;
        top: 0;
      }
      >div:hover{
        background: #D9D9D9;
      }
    }
    >span{
      font-size: 12px;
      color: #9797a1;
    }
  }
}
</style>
