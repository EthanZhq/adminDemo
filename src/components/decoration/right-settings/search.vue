<template>
  <div class="wrap">
    <div class="top">{{component.title}}</div>
    <div>
      <Search :options="component.options" />
    </div>
    <div class="settings">
      <div>
        <span>预设关键字</span>
        <input type="text" placeholder="不超过10个字" class="keywords">
      </div>
      <div>
        <span>字体颜色</span>
        <div>{{component.options.color}}<div></div></div>
      </div>
      <div>
        <span>背景颜色</span>
        <div>{{component.options.bgColor}}<div></div></div>
      </div>
      <div>
        <span>关键字设置</span>
        <input type="text" placeholder="不超过10个字" class="keywords">
      </div>
      <div>
        <span>边角样式</span>
        <input type="text" placeholder="不超过10个字" class="keywords">
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  components:{
    Search
  },
  props:['component']
}
</script>

<style scoped lang="scss">
.wrap{
  border: 1px solid #D7D7D7;
  border-radius: 5px;
  width: 350px;
  font-size: 15px;
  color: #333;
  >.top{
    border-bottom: 1px solid #D7D7D7;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  >.settings{
    padding: 35px 20px;
    font-size: 14px;
    >div{
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      >span{
        margin-right: 10px;
      }
      >input.keywords{
        padding: 6px 15px;
        border-radius: 5px;
        border: 1px solid #E3E2E5;
        font-size: 13px;
        color: #999999;
      }
      >div{
        border: 1px solid #E3E2E5;
        border-radius: 5px;
        font-size: 12px;
        padding: 5px;
      }
    }
    >div:nth-child(2),>div:nth-child(3){
      >span{
        margin-left: 8px;
        margin-right: 15px;
      }
    }
  }
}
</style>
