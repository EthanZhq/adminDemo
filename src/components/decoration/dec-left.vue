<template>
  <div class="container">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="基础组件" key="1">
        <div class="base">
          <div v-for="(item,index) in list.filter(item=>item.type==0)" :key="index" @click="addItem(item)">
            <img :src="item.pic" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane tab="营销组件" key="2" forceRender>
        <div class="market">
          <div v-for="(item,index) in list.filter(item=>item.type==1)" :key="index">
            <img :src="item.pic" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  components: {
  },
  props:['list'],
  data() {
    return {
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
  width: 300px;
  margin-right: 20px;
  border: 1px solid #e4e4ee;
  div.ant-tabs{
    overflow-y: auto;
  }
  .base,.market{
    display: flex;
    flex-wrap: wrap;
    >div:nth-child(2n){
      margin-left: 4%;
    }
    >div{
      width: 48%;
      background: #ffffff;
      margin-bottom: 10px;
      text-align: center;
      border: 1px solid #E3E2E5;
      padding: 5px 0;
      cursor: pointer;
      >img{
        width: 60%;
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
