<template>
  <div class="wrap">
    <div v-for="(item,index) in options.navs" :key="index">
      <img :src="item.pic" alt="">
      <div :style="{color:item.color}">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    options:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
  display: flex;
  background: #fff;
  padding: 12px;
  margin-bottom: 10px;
  justify-content: space-around;
  >div{
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 13px;
    >img{
      width: 60px;
      height: 60px;
      margin: 0px auto 5px;
    }
  }
}
</style>
