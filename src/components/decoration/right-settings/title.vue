<template>
  <div class="settings">
    <div>
      <span>标题名称</span>
      <el-input type="text" show-word-limit=true placeholder="不超过10个字" v-model="options.title" maxlength="10"></el-input>
    </div>
    <div>
      <span>字号</span>
      <el-select v-model="options.fontSize" style="width: 25%;">
        <el-option
          v-for="index of 36"
          v-show="index>11"
          :key="index"
          :value="index">
        </el-option>
      </el-select>
    </div>
    <div>
      <span>文本样式</span>
      <el-radio-group v-model="options.fontWeight" size="mini">
        <el-radio label="0">常规</el-radio>
        <el-radio label="1">加粗</el-radio>
      </el-radio-group>
    </div>
    <div>
      <span>字体颜色</span>
      <div class="color">
        <span>{{options.color}}</span>
        <colorPicker v-model="options.color" />
      </div>
    </div>
    <div>
      <span>背景颜色</span>
      <div class="color">
        <span>{{options.bgColor}}</span>
        <colorPicker v-model="options.bgColor" />
      </div>
    </div>
    <div v-if="options.type==1">
      <span>箭头颜色</span>
      <div class="color">
        <span>{{options.arrowColor}}</span>
        <colorPicker v-model="options.arrowColor" />
      </div>
    </div>
    <div v-if="options.type==1">
      <span>线条颜色</span>
      <div class="color">
        <span>{{options.lineColor}}</span>
        <colorPicker v-model="options.lineColor" />
      </div>
    </div>
    <div v-if="options.type==1">
      <span>链接</span>
      <el-button @click="showLink()">选择链接</el-button>
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
  methods:{
    showLink(i){
      console.log(i+'显示系统链接')
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
button{
  padding: 7px 12px;;
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
