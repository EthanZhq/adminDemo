<template>
  <div class="wrap" :style="{background:options.color}">
    <h1 ref="title">{{title}}</h1> 
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
}
</style>
