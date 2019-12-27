<template>
  <div class="pic">
    <draggable element="div" v-model="list">
      <div v-for="(item,index) in list" :key="index" class="imgList" v-show="index==0&&length">
        <div>{{isNav?'导航':'图片'}}{{index+1}}<i v-if="index>0&&!isMagic" class="el-icon-delete" @click="delImg(index)"></i></div>
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
          <img :src="item.pic" alt="" :class="{'nav':isNav}">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="iconSuccess">
            <el-button>选择{{isNav?'图标':'图片'}}</el-button>
          </el-upload>
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
    </draggable>
    <div class="add" v-if="!isMagic">
      <el-button @click="addImg">添加{{isNav?'导航':'图片'}}</el-button><span>最多{{isNav?'5个':'十张'}}，上下拖动可排序</span>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import colorPicker from '../../../plugin/colorPicker.vue'
export default {
  components:{
    draggable,
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
    },
    isMagic:{
      type:Boolean,
      default:false
    },
    length:{
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
    iconSuccess (response, file, fileList) {
      if(fileList.length>1){
        fileList.splice(0,1)
      }
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
button{
  padding: 7px 15px;
}
.imgList,.add{
  padding: 30px 20px;
}
.imgList{
  border-bottom: 1px solid #D7D7D7;
  >div{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    >img{
      border-radius: 5px;
      border: 1px solid #e4e4e4;
      width: 85px;
      height: 100%;
      margin-right: 18px;
    }
    >img.nav{
      width: 55px;
    }
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
.imgList:last-child{
  border: none;
}
.add{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #D7D7D7;
  >span{
    color: #999;
    font-size: 13px;
  }
}
</style>
