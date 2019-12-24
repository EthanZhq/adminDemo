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
.el-pagination.is-background .el-pager li:not(.disabled):hover{
  color: #2f66ff
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background: #2f66ff;
  color: #fff;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background: #2f66ff;
  border-color: #2f66ff
}
.el-date-table td.current:not(.disabled) span{
  color: #fff;
  background: #2f66ff;
}
.el-date-table td.today span{
  color: #2f66ff;
  font-weight: 700
}
.el-date-table td.today span:hover{
  color: #2f66ff;
  font-weight: 700
}
.el-radio__input.is-checked .el-radio__inner{
  background: #2f66ff;
  border-color: #2f66ff
}
.el-radio__input.is-checked+.el-radio__label{
  color: #2f66ff
}
</style>
