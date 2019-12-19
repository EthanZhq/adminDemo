<template>
  <div class="wrap" :style="{background:options.bgColor}">
    <input type="text" :placeholder="options.placeholder" :style="{borderColor:options.color,borderRadius:options.border==0?none:'50px',textAlign:options.textAlign}">
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:"我是搜索栏"
    }
  },
  props:['options']
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
}
</style>
