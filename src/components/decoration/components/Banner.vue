<template>
  <div class="wrap">
    <el-carousel @change="changeCurrent" indicator-position="none" :interval="options.interval*1000" height="193px">
      <el-carousel-item v-for="(item,index) in options.imgList" :key="index">
        <img :src='item.pic' alt="" style="width:100%;">
      </el-carousel-item>
    </el-carousel>
    <div class="indicator" v-if="options.imgList.length>1" :style="{width:options.imgList.length*20+'px',marginLeft:-options.imgList.length*20/2+'px'}">
      <div v-for="(item,index) in options.imgList" :key="index" :class="current==index?'active':''"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      current:0
    }
  },
  props:['options'],
  methods:{
    changeCurrent(i){
      this.current=i
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
  position: relative;
  .indicator{
    position: absolute;
    bottom: 10px;
    left: 50%;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    >div{
      width: 10px;
      height: 10px;
      background: #AD251C;
      border-radius: 50%;
    }
    >div.active{
      background: #E02E24;
    }
  }
}
</style>
