<template>
  <div class="wrap" :style="{background:options.bgColor,textAlign:options.type=='2'?'left':'center'}">
    <span :style="{color:options.color,fontWeight:options.fontWeight=='0'?'normal':'bold',fontSize:options.fontSize+'px',borderColor:options.lineColor}" :class="{'type':options.type=='2'}">{{options.title}}</span>
    <i class="el-icon-arrow-right" :style="{color:options.arrowColor}"></i>
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
  padding: 12px 20px;
  margin-bottom: 10px;
  >span.type{
    text-align: left;
    border-left: 3px solid;
    padding-left: 8px;
  }
}
</style>
