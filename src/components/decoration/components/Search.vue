<template>
  <div class="wrap" :style="{background:options.bgColor}" :class="options.textAlign">
    <input type="text" :placeholder="options.placeholder" :style="{borderColor:options.color,borderRadius:options.border==0?'none':'50px',textAlign:options.textAlign}">
    <button :style="{borderColor:options.color,borderRadius:options.border==0?'none':'50px'}">取消</button>
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
  display: flex;
  box-sizing: border-box;
  padding: 10px 15px;
  position: relative;
  .border{
    border: 1px dashed #cccccc;
  }
  input,button{
    border-width: 1px;
    border-style: solid;
    font-size: 14px;
    padding: 6px 0;
    color: #666;
    background-color: #fff;
    outline: none;
  }
  input{
    flex: 1;
    margin-right: 10px;
    position: relative;
  }
  button{
    padding: 6px 20px;
  }
}
.wrap::before{
  content: '';
  display: inline-block;
  background-image: url('../../../assets/decoration/search.png');
  position: absolute;
  left: 35px;
  top: 18px;
  width: 13px;
  height: 13px;
  background-size: cover;
  z-index: 99;
}
.wrap.center::before{
  left: 20%;
  top: 18px;
}
.wrap.left input{
  padding-left: 40px;
}
</style>
