<template>
  <div class="container">
    <el-tabs v-model="active">
      <el-tab-pane label="基础组件" name="first" style="height:600px;overflow-y:auto;overflow-x:hidden;">
        <div class="base">
          <div v-for="(item,index) in list.filter(item=>item.type==0)" :key="index" @click="addItem(item)">
            <img :src="item.pic" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="营销组件" name="second" style="height:600px;overflow-y:auto;overflow-x:hidden;">
        <div class="market">
          <div v-for="(item,index) in list.filter(item=>item.type==1)" :key="index" @click="addItem(item)">
            <img :src="item.pic" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {
  },
  props:['list'],
  data() {
    return {
      active:'first'
    }
  },
  created() {
  },
  methods: {
    addItem(e){
      this.$emit('on-add-component',e)
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  width: 215px;
  height: 700px;
  margin: 0 35px;
  border: 1px solid #e4e4ee;
  .base,.market{
    display: flex;
    flex-wrap: wrap;
    >div:nth-child(2n){
      margin-left: 4%;
    }
    >div{
      width: 48%;
      background: #ffffff;
      margin-bottom: 20px;
      text-align: center;
      padding: 5px 0;
      cursor: pointer;
      >img{
        width: 80%;
        margin-bottom: 10px;
      }
      >span{
        display: block;
        color: #595961;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
</style>
