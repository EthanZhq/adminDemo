<template>
  <div class="settings">
    <div>
      <div>轮播间隔（S）</div>
      <div>
        <el-slider v-model="options.interval" :min=2 :max=10></el-slider>{{options.interval}}
      </div>
    </div>
    <PicList :img-list="options.imgList" @on-change-list="changeOptions"/>
  </div>
</template>

<script>
import PicList from './pic-list'
export default {
  components:{
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
    changeOptions(e){
      this.options.imgList=e
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
.settings{
  font-size: 14px;
  >div:first-child{
    padding: 30px 25px;
    border-bottom: 1px solid #d7d7d7;
    >div:nth-child(2){
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 8px;
      >div{
        width: 85%;
        margin-right: 20px;
      }
    }
  }
}
</style>
