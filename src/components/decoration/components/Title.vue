<template>
  <div class="wrap" :style="{background:options.bgColor}">
    <span :style="{color:options.color,fontWeight:options.style==0?'normal':'bold',fontSize:options.size}">{{options.title}}</span>
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
  padding: 10px 0;
  text-align: center;
}
</style>
