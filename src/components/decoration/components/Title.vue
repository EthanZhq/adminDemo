<template>
  <div
    class="wrap"
    :style="{
      background: options.bgColor,
      textAlign: options.type == 1 ? 'left' : 'center'
    }"
  >
    <span
      :style="{
        color: options.color,
        fontWeight: options.fontWeight == '0' ? 'normal' : 'bold',
        fontSize: options.fontSize + 'px',
        borderColor: options.lineColor
      }"
      :class="{ type: options.type == 1 }"
    >{{ options.title }}</span>
    <i v-if="options.type == 1" class="el-icon-arrow-right" :style="{ color: options.arrowColor }" />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  padding: 12px 20px;
  > span.type {
    text-align: left;
    border-left: 3px solid;
    padding-left: 8px;
  }
  > i {
    float: right;
  }
}
</style>
