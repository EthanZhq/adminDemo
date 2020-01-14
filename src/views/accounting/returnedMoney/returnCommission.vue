<template>
  <div>
    <el-dialog
      title="退佣"
      :visible.sync="isShow"
      width="50%"
      :before-close="handleClose"
      @close="cancel"
    >
      <div class="topCaption">
        <div class="twoSpan">
          <span class="firstSpan">购房信息</span>
          <span class="secondSpan">结算信息</span>
        </div>
      </div>
      <table
        v-for="(item,index) in requireTable"
        :key="index"
        border="0"
        style=" border:1px solid #CCCCCC;"
        cellspacing="0"
        cellpadding="4"
      >
        <tr>
          <td>
            签约姓名：张先生
          </td>
          <td>电话：13900001111</td>
          <td>身份证号：123123122342245677</td>
          <td>签约时间：2019-01-31&nbsp;09:00:00</td>
          <td style=" border-left:1px solid #CCCCCC;">累计单套损失：50000</td>
        </tr>
        <tr>
          <td>
            购买房源：1期99栋1单元2202室
          </td>
          <td>面积(m²)：93m²</td>
          <td>成交总价(元)：3655333.12</td>
          <td>费用类型：带看费</td>
          <td style=" border-left:1px solid #CCCCCC;">累计分摊损失：0</td>
        </tr>
        <tr>
          <td>
            佣金方式：按套定价
          </td>
          <td>定价方式：阶梯定价</td>
          <td>佣金标准（元）：20000</td>
          <td>应结佣金：50000</td>
          <td style=" border-left:1px solid #CCCCCC;">累计结算佣金：0</td>
        </tr>
      </table>
      <el-form
        :model="formInline"
        :rules="rules"
        class="demo-form-inline"
        autosize
        size="mini"
        :inline="true"
      >
        <el-form-item
          label="活动区域"
          prop="region"
        >
          <el-select
            v-model="formInline.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="冲抵"
              value="冲抵"
            />
            <el-option
              label="现金"
              value="现金"
            />
            <el-option
              label="转账"
              value="转账"
            />
          </el-select>
          <el-form-item
            label="预计结算日期："
            prop="region"
            style="margin-left:12px;"
          >
            <el-input
              v-model="formInline.user"
              placeholder="请选择预计日期"
              style="width: 300px;"
            />
          </el-form-item>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    returnCommission: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isShow: false,
      formInline: {
        user: '',
        region: '',
        date1: '',
        textarea: ''
      },
      requireTable: [{}, {}],
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
    returnCommission(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.returnCommission = newVal
    }
  },
  created() {
    console.log(this.returnCommission)
    this.isShow = this.returnCommission
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
  padding: 5px 0;
  background-color: #f9f9f9;
  .twoSpan {
    display: flex;
    .firstSpan {
      margin-left: 300px;
    }
    .secondSpan {
      margin-left: auto;
      margin-right: 150px;
    }
  }
}
</style>
