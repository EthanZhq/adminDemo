<template>
  <div>
    <el-dialog
      title="确认支付"
      :visible.sync="isShow"
      width="75%"
      :before-close="handleClose"
      @close="cancel"
    >
      <div class="topCaption">
        <h4
          style="margin:0 auto"
          class="cap"
          align="center"
        >南京绿地之窗佣金开票</h4>
        <div class="twoSpan">
          <span class="firstSpan">购房信息</span>
          <span class="secondSpan">结算信息</span>
          <span class="thirdSpan">支付信息</span>
        </div>
      </div>
      <table
        v-for="(item,index) in requireTable"
        :key="index"
        border="0"
        style=" border:1px solid #CCCCCC;"
        cellspacing="0"
        cellpadding="5"
      >
        <tr>
          <td rowspan="3">1</td>
          <td>
            签约姓名：张先生
          </td>
          <td>电话：13900001111</td>
          <td>身份证号：123123122342245677</td>
          <td>签约时间：2019-01-31&nbsp;09:00:00</td>
          <td style="border-left:1px solid #CCCCCC;">累计单套损失：50000</td>
          <td style="border-left:1px solid #CCCCCC;">本次单套损失：50000</td>
          <td style="border-left:1px solid #CCCCCC;">
            本次支付金额：
            <input
              type="text"
              style="width:40px;"
            >
          </td>
        </tr>
        <tr>
          <td>
            购买房源：1期99栋1单元2202室
          </td>
          <td>面积(m²)：93m²</td>
          <td>成交总价(元)：3655333.12</td>
          <td>费用类型：带看费</td>
          <td style=" border-left:1px solid #CCCCCC;">累计分摊损失：0</td>
          <td style=" border-left:1px solid #CCCCCC;">本次分摊损失：0</td>
          <td style=" border-left:1px solid #CCCCCC;">累积开票金额：1000</td>
        </tr>
        <tr>
          <td>
            佣金方式：按套定价
          </td>
          <td>定价方式：阶梯定价</td>
          <td>佣金标准（元）：20000</td>
          <td>应结佣金：50000</td>
          <td style=" border-left:1px solid #CCCCCC;">累计结算佣金：0</td>
          <td style=" border-left:1px solid #CCCCCC;">本次结算佣金：0</td>
          <td style=" border-left:1px solid #CCCCCC;">累积支付金额：100</td>
        </tr>
      </table>
      <div style="margin-top:30px;">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item
            label="本次支付金额："
            size="mini"
            style="margin-right:90px;"
          >
            20000
          </el-form-item>
          <el-form-item
            label="支付时间："
            size="mini"
          >
            <el-input
              v-model="formInline.user"
              placeholder="2015-10-02"
              suffix-icon="el-icon-date"
              style="width:150px;margin-right:20px;"
            />
            <el-form-item
              label="累计支付金额："
              size="mini"
              style="margin-right:90px;"
            >
              100
            </el-form-item>
            <el-form-item
              label="收款方："
              size="mini"
              style="margin-right:90px;"
            >
              南京绿地之窗
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancel">导 出</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    payment: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      requireTable: [{}, {}],
      selectShow: true,
      isShow: false, formInline: {
        user: '',
        region: '',
        date1: '',
        textarea: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]

      }
    }
  },
  watch: {
    payment(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.payment = newVal
    }
  },
  created() {
    console.log(this.payment)
    this.isShow = this.payment
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
.topCaption {
  background-color: #f9f9f9;
  .cap {
    padding: 10px;
  }
  .twoSpan {
    display: flex;
    .firstSpan {
      margin-left: 300px;
    }
    .secondSpan {
      margin-left: auto;
      margin-right: 150px;
    }
    .thirdSpan {
      // margin-left: auto;
      margin-right: 90px;
    }
  }
}
</style>
