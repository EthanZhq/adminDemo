<template>
  <div class="container">
    <ThemeSettings :list="list" @on-change-theme="changeTheme"/>
    <ThemeView :theme="theme"/>
  </div>
</template>

<script>
import ThemeSettings from '@/components/theme/theme-settings'
import ThemeView from '@/components/theme/theme-view'
export default {
  components:{
    ThemeSettings,
    ThemeView
  },
  data() {
    return {
      theme:{},
      list:[
        {
          id:1,
          primary:'#F5001F',
          auxiliary:'#FF7D00'
        },
        {
          id:2,
          primary:'#D81E06',
          auxiliary:'#FF835A'
        },
        {
          id:3,
          primary:'#FF4444',
          auxiliary:'#616161'
        },
        {
          id:4,
          primary:'#EEB336',
          auxiliary:'#1D262E'
        },
        {
          id:5,
          primary:'#D82B80',
          auxiliary:'#F9AEB0'
        },
        {
          id:6,
          primary:'#EC567C',
          auxiliary:'#454552'
        },
        {
          id:7,
          primary:'#A042A0',
          auxiliary:'#777777'
        },
        {
          id:8,
          primary:'#46CCB2',
          auxiliary:'#999999'
        },
        {
          id:9,
          primary:'#09BB07',
          auxiliary:'#383838'
        },
        {
          id:10,
          primary:'#0289FF',
          auxiliary:'#999999'
        },
        {
          id:11,
          primary:'#0A248E',
          auxiliary:'#6A82E7'
        },
        {
          id:12,
          primary:'#B8741A',
          auxiliary:'#81D3F8'
        },
        {
          id:13,
          primary:'#0000BF',
          auxiliary:'#EC808D'
        },
        {
          id:14,
          primary:'#F8F8F8',
          auxiliary:'#F8F8F8'
        }
      ]
    }
  },
  created(){
    this.theme=this.list[0]
  },
  methods: {
    changeTheme(e){
      this.theme=this.list[e]
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  position: relative;
  display: flex;
  padding: 15px 30px;
  color: #333;
  font-size: 15px;
}
</style>

