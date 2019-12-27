<template>
  <div class="settings">
    <PicList :img-list="options.picList" @on-change-list="changeOptions" :isMagic="true" :length='true'/>
    <div v-if="options.type!=0" class="space">
      <div>图片间隔（PX）</div>
      <div>
        <el-slider v-model="options.space" :min=0 :max=20></el-slider>{{options.space}}
      </div>
    </div>
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
      this.options.picList=e
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
  >div.space{
    padding: 30px 25px;
    border-top: 1px solid #d7d7d7;
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
