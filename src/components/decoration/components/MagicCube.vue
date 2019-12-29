<template>
  <div class="wrap">
    <div v-if="options.type==0">
      <img :src="options.picList[0].pic" alt="">
    </div>
    <div v-if="options.type==1" class="type1">
      <div><img :src="options.picList[0].pic" alt=""></div>
      <div :style="{marginLeft:options.space+'px'}">
        <img :src="options.picList[1].pic" alt="">
        <img :src="options.picList[2].pic" alt="">
      </div>
    </div>
    <div v-if="options.type==2" class="type2">
      <div>
        <img :src="options.picList[0].pic" alt="">
        <img :src="options.picList[1].pic" alt="">
      </div>
      <div :style="{marginLeft:options.space+'px'}"><img :src="options.picList[2].pic" alt=""></div>
    </div>
    <div v-if="options.type==3" class="type3">
      <div :style="{marginRight:index!=options.picList.length-1?options.space+'px':0}" v-for="(item,index) in options.picList" :key="index">
        <img :src="item.pic" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['options']
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
  >div{
    img{
      width: 100%;
      vertical-align: middle;
    }
  }
  >div.type1,div.type2,div.type3{
    display: flex;
    padding: 10px;
    align-items: center;
    >div{
      width: 49%;
    }
  }
  >div.type1>div:nth-child(1),>div.type2>div:nth-child(2){
    >img{
      height: 170px;
    }
  }
  >div.type1>div:nth-child(2),>div.type2>div:nth-child(1){
    img:nth-child(1){
      margin-bottom: 5px;
    }
  }
  >div.type3{
    display: flex;
    width: 100%;
    >div{
      flex: 1;
    }
    >div:last-child{
      margin-right: 0;
    }
  }
}
</style>
