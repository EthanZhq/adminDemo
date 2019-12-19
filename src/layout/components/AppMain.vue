<template>
  <section class="app-main">
    <breadcrumb class="breadcrumb-container" />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  height:calc(100vh - 90px);
  overflow-y: scroll;
  width: 100%;
  position: relative;
  background: #fff;
}
.app-main::-webkit-scrollbar {display:none}
.fixed-header+.app-main {
  margin: 70px 0 20px;
  box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, .19);
  border-radius: 12px
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
.breadcrumb-container{
  width: 100%;
  background: #fff;
}
</style>
