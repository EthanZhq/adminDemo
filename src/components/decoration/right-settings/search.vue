<template>
  <div class="settings">
    <div>
      <span>预设关键字</span>
      <el-input type="text" show-word-limit=true placeholder="不超过10个字" v-model="options.placeholder" maxlength="10"></el-input>
    </div>
    <div>
      <span>关键字设置</span>
      <el-radio-group v-model="options.textAlign" size="mini">
        <el-radio label="left">居左</el-radio>
        <el-radio label="center">居中</el-radio>
      </el-radio-group>
    </div>
    
    <div>
      <span>背景颜色</span>
      <div class="color">
        <span>{{options.bgColor}}</span>
        <colorPicker v-model="options.bgColor" />
      </div>
    </div>
    <div>
      <span>内容颜色</span>
      <div class="color">
        <span>{{options.color}}</span>
        <colorPicker v-model="options.color" />
      </div>
    </div>
    <div>
      <span>边角样式</span>
      <el-radio-group v-model="options.border" size="mini">
        <el-radio label='1'>圆角</el-radio>
        <el-radio label='0'>方角</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import colorPicker from '../../../plugin/colorPicker.vue'
export default {
  components:{
    colorPicker
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
.color{
  display: flex;
  align-items: center;
  border: 1px solid #E3E2E5;
  border-radius: 6px;
  padding: 6px;
  >span{
    margin-right: 5px;
  }
}
.settings{
  padding: 30px 15px;
  font-size: 14px;
  >div{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    >span{
      margin-right: 7%;
      text-align: right;
      width: 26%;
    }
    .el-input{
      width: 65%
    }
    input{
      padding: 6px 15px;
      font-size: 13px;
      color: #999999;
      outline: none;
    }
  }
}
</style>
