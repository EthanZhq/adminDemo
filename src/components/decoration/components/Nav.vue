<template>
  <div class="wrap">
    <div v-for="(item,index) in options.navs" :key="index">
      <img :src="item.pic" alt="">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:"我是导航"
    }
  },
  props:['options']
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
  display: flex;
  background: #fff;
  padding: 15px 5px;
  margin-top: 10px;
  justify-content: space-between;
  >div{
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 13px;
    >img{
      width: 80%;
      margin: 0px auto 5px;
    }
  }
}
</style>
