<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app{
  background: #f8f8f8
}
.el-button--primary{
  background: #2f66ff;
  border-color: #2f66ff
}
.el-button--primary:focus, .el-button--primary:hover{
  background: #2f66ff;
  border-color: #2f66ff
}
</style>
 
