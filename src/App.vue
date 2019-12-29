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
.el-loading-spinner i{
  font-size: 36px
}
.dialog{
  border-radius: 5px;
}
.dialog .el-dialog__title{
  font-size: 15px;
  color: #333;
  font-weight: 700;
}
.dialog .dialog-footer button{
  padding: 8px 16px;
}
.dialog .dialog-footer button.el-button--primary{
  background: #409EFF;
  border-color: #2589FF;
}
.dialog .dialog-footer button.el-button--primary:hover{
  opacity: 0.7;
}
</style>

