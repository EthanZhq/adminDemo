<template>
  <div class="wrap" :style="{background:options.color}">
    <h1 ref="title">{{title}}</h1> 
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:"我是标题栏"
    }
  },
  props:['options']
}
</script>

<style scoped lang="scss">
.wrap{
	width: 100%;
}
h1{
  color: #ccc;
}
</style>
