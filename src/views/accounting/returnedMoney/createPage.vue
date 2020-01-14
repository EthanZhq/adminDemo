/* 生成确认单*/
<template>
  <div class="createPage">
    <el-dialog
      title="回款确认单"
      :visible.sync="isShow"
      width="47%"
      :before-close="handleClose"
      @close="cancel"
    >
      <h4
        style="margin:0 auto"
        class="cap"
        align="center"
      >南京绿地之窗业绩确认单</h4>
      <table
        v-for="(item,index) in requireTable"
        :key="index"
        border="0"
        style=" border:1px solid #CCCCCC;"
        cellspacing="0"
        cellpadding="10"
      >
        <tr>
          <td
            rowspan="3"
            style="border-right:1px solid #CCCCCC;"
          >1</td>
          <td>
            签约姓名：张先生
          </td>
          <td>电话：13900001111</td>
          <td>身份证号：123123122342245677</td>
          <td>签约时间：2019-01-31&nbsp;09:00:00</td>
        </tr>
        <tr>
          <td>
            购买房源：1期99栋1单元2202室
          </td>
          <td>面积(m²)：93m²</td>
          <td>成交总价(元)：3655333.12</td>
          <td>费用类型：带看费</td>
        </tr>
        <tr>
          <td>
            佣金方式：按套定价
          </td>
          <td>定价方式：阶梯定价</td>
          <td>佣金标准（元）：20000</td>
          <td>应结佣金：50000</td>
        </tr>
      </table>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary">导 出</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    createPage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isShow: false,
      requireTable: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  watch: {
    createPage(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.createPage = newVal
    }
  },
  created() {
    console.log(this.createPage)
    this.isShow = this.createPage
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
