<template>
  <div class="pic">
    <div v-for="(item,index) in imgList" :key="index" class="imgList">
      <div>{{isNav?'导航':'图片'}}{{index+1}}<i v-if="index>0" class="el-icon-delete" @click="delImg(index)"></i></div>
      <div v-if="isNav">
        <span>导航名称</span>
        <el-input type="text" show-word-limit=true placeholder="不超过4个字" v-model="item.name" maxlength="10"></el-input>
      </div>
      <div v-if="isNav">
        <span>字体颜色</span>
        <div class="color">
          <span>{{item.color}}</span>
          <colorPicker v-model="item.color" />
        </div>
      </div>
      <div>
        <span>{{isNav?'图标':'选择图片'}}</span>
        <el-button>选择{{isNav?'图标':'图片'}}</el-button>
      </div>
      <div>
        <span>{{isNav?'导航':'图片'}}链接</span>
        <el-radio-group v-model="item.type" size="mini">
          <el-radio label='0'>系统链接</el-radio>
          <el-radio label='1'>自定义链接</el-radio>
        </el-radio-group>
      </div>
      <div v-if="item.type=='1'">
        <span>H5链接</span>
        <el-input type="text" placeholder="请填写需要跳转的H5链接" v-model="item.link"></el-input>
      </div>
      <div v-if="item.type=='0'">
        <span></span>
        <el-button @click="showLink(index)">选择链接</el-button>
      </div>
    </div>
    <div class="add">
      <el-button @click="addImg">添加{{isNav?'导航':'图片'}}</el-button><span>最多可添加{{isNav?'5个':'十张'}}</span>
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
    imgList:{
      type:Array,
      default:[]
    },
    isNav:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      list:[]
    }
  },
  created(){
    this.list=this.imgList
  },
  methods:{
    addImg(){
      let num=this.list.length+1
      if(this.isNav&&num<6){
        this.list.push({pic:require('../../../assets/decoration/pic.gif'),color:'#555',name:'导航'+num})
      }else if(!this.isNav&&num<11){
        this.list.push({pic:require('../../../assets/decoration/defalut.png')})
      }else{
        this.$message({
          message: '已超出规定个数~',
          type: 'warning'
        });
      }
    },
    delImg(i){
      this.list.splice(i,1)
    },
    showLink(i){
      console.log(i+'显示系统链接')
    }
  },
  watch:{
    imgList:{
      handler(newValue){
        this.list=this.imgList
      },
      deep:true
    }
  }
}
</script>

<style scoped lang="scss">
button{
  padding: 7px 15px;
}
.imgList,.add{
  padding: 30px 20px;
  border-top: 1px solid #D7D7D7;
}
.imgList{
  >div{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .el-input{
      width: 65%;
      >.el-input__inner{
        height: 35px;
        line-height: 35px;
      }
    }
    >span{
      margin-right: 20px;
      display: inline-block;
      width: 20%;
      text-align: right;
    }
    >.color{
      display: flex;
      align-items: center;
      border: 1px solid #E3E2E5;
      border-radius: 6px;
      padding: 6px;
      >span{
        margin-right: 5px;
      }
    }
    i{
      margin-left: auto;
      cursor: pointer;
      font-size: 16px;
    }
    i:hover,>i:active{
      color: #409EFF;
    }
  }
}
.add{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D7D7D7;
  >span{
    color: #999;
    font-size: 13px;
  }
}
</style>
