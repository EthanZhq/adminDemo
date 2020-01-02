<template>
  <div class="settings">
    <div>
      <span>样式设置</span>
      <el-radio-group v-model="options.border" size="mini">
        <el-radio label="0">扁平式</el-radio>
        <el-radio label="1">卡片式</el-radio>
        <el-radio label="2">描边式</el-radio>
        <el-radio label="3">透明式</el-radio>
      </el-radio-group>
    </div>
    <div>
      <span>选择商品</span>
      <el-radio-group v-model="checkType" size="mini">
        <el-radio label="1">自动</el-radio>
        <el-radio label="2">手动</el-radio>
      </el-radio-group>
    </div>
    <div v-if="checkType=='1'">
      <span>商品分类</span>
      <el-select v-model="options.classify" placeholder="请选择">
        <el-option
          v-for="item in classifyList"
          :key="item.label"
          :label="item.value"
          :value="item.label">
        </el-option>
      </el-select>
    </div>
    <div v-if="checkType=='1'">
      <span>商品排序</span>
      <el-select v-model="options.sort" placeholder="请选择">
        <el-option
          v-for="item in sortList"
          :key="item.label"
          :label="item.value"
          :value="item.label">
        </el-option>
      </el-select>
    </div>
    <div v-if="checkType=='1'">
      <span>商品数量</span>
      <el-input-number size="small" :max='10' :min="1" :step="1" :step-strictly='true' ></el-input-number>
    </div>
    <div v-else class="add-product">
      <div>
        <el-button>添加商品</el-button>
        <span>上下拖动可排序</span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    component:{
      type:Object,
      default:{}
    }
  },
  data(){
    return{
      options:{},
      checkType:'1',
      sortList:[{value:'销量从高到低',label:'1'},{value:'最新上架',label:'2'},{value: '价格从高到低',label:'3'}, {value:'价格从低到高',label:'4'}],
      classifyList:[{value:'北京烤鸭',label:'1'},{value:'蛋黄酥',label:'2'},{value: '人肉包子',label:'3'}, {value:'狗皮膏药',label:'4'}],
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
.settings{
  padding: 30px 15px;
  font-size: 14px;
  >div:first-child{
    .el-radio-group{
      width: 190px;
      .el-radio:nth-child(1),.el-radio:nth-child(2){
        margin-bottom: 8px;
      }
      .el-radio:nth-child(2n){
        margin-right: 0px;
      }
    }
  }
  >div{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    >span{
      margin-right: 7%;
      text-align: right;
      width: 26%;
    }
  }
  >div:last-child{
    margin-bottom: 0px;
  }
  >div.add-product{
    >div:first-child{
      padding: 0 18px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      >span{
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
