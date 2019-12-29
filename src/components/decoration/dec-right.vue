<template>
  <div class="plane">
    <div>设置</div>
    <div class="right">
      <div class="top">{{component.title}}</div>
      <div class="view">
        <img src="../../assets/decoration/defalut.png" alt="">
        <div v-if="type!=-1" @click="dialogVisible = true"><i class="el-icon-edit"></i>修改样式</div>
      </div>
      <component :is="component.name" :component="component" @on-change-options="changeOptions"/>
    </div>
    <el-dialog
      :title="'选择'+component.title+'样式'"
      :visible.sync="dialogVisible"
      width="40%"
      custom-class="dialog">
      <div class="view">
        <img v-for="(item,index) in component.view" :key="index" :src="item.pic" :class="{'active':index==type}" @click="changeCurrent(index)" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="submit(0)">取 消</el-button>
        <el-button type="primary" @click="submit(1)">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Search from '@/components/decoration/right-settings/search'
import Banner from '@/components/decoration/right-settings/banner'
import Nav from '@/components/decoration/right-settings/nav'
import Title from '@/components/decoration/right-settings/title'
import MagicCube from '@/components/decoration/right-settings/magicCube'
export default {
  components:{
    Search,
    Banner,
    Nav,
    Title,
    MagicCube
  },
  data() {
    return {
      component:{},
      dialogVisible:false,
      type:-1
    }
  },
  props:{
    currentComponent:{
      type:Object,
      default:{}
    }
  },
  created() {
    this.component=this.currentComponent
    this.type=this.component.options.type||this.component.options.type==0?this.component.options.type:-1
  },
  methods: {
    changeOptions(e){
      this.$emit('on-change-list',e)
    },
    changeCurrent(type){
      this.type=type
    },
    submit(e){
      if(e==0){
        this.type=this.component.options.type
      }else{
        this.component.options.type=this.type
        this.$emit('on-change-list',this.component.options)
      }
      this.dialogVisible = false
    }
  },
  watch:{
    currentComponent:{
      handler(newValue){
        this.component=newValue
        this.type=newValue.options.type||newValue.options.type==0?newValue.options.type:-1
        console.log(this.type)
      },
      deep:true
    }
  }
}
</script>
<style scoped lang="scss">
.plane{
  >div:nth-child(1){
    margin-bottom: 15px;
  }
  >.right{
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
    >.view{
      border-bottom: 1px solid #D7D7D7;
      >img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
      >div{
        padding: 12px 0;
        text-align: center;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        border-top: 1px solid #D7D7D7;
        >i{
          margin-right: 5px;
          font-size: 20px;
        }
      }
      >div:hover{
        color: #409EFF;
      }
    }
  }
  .dialog{
    div.view{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 15px 0;
      img{
        width: 21%;
        min-width: 21%;
        max-width: 21%;
        border-radius: 5px;
        border: 1px solid #E3E2E5;
        transition: all 0.5s ease 0s;
        margin-bottom: 20px;
      }
      img:hover,img.active{
        transform: scale(1.2);
      }
      img.active{
        border-color: #409EFF;
        box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, .19);
      }
    } 
  }
}
</style>
