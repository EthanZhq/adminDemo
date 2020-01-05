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
#app {
  background: #f8f8f8;
}
img {
  vertical-align: middle;
}
.el-loading-spinner i {
  font-size: 36px;
}
.el-dialog {
  border-radius: 6px;
}
.dialog .el-dialog__title {
  font-size: 15px;
  color: #333;
  font-weight: 700;
}
</style>

