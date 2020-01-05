<template>
  <div class="settings">
    <PicList :img-list="options.navs" :is-nav="true" @on-change-list="changeOptions" />
  </div>
</template>

<script>
import PicList from "./pic-list";
export default {
  components: {
    PicList
  },
  props: {
    component: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      options: {}
    };
  },
  created() {
    this.options = this.component.options;
  },
  methods: {
    changeOptions(e) {
      this.options.navs = e;
      this.$emit("on-change-options", this.options);
    }
  },
  watch: {
    component: {
      handler(newValue) {
        this.options = newValue.options;
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
.settings {
  font-size: 14px;
}
</style>
