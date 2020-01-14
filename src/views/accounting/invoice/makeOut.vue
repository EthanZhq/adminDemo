<template>
  <div>
    <el-dialog
      title="开票"
      :visible.sync="isShow"
      width="65%"
      :before-close="handleClose"
      @close="cancel"
    >
      <div class="topCaption">
        <h4
          style="margin:0 auto"
          class="cap"
          align="center"
        >南京绿地之窗业绩确认单</h4>
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
          <td style="border-left:1px solid #CCCCCC;">
            单套损失：
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
          <td style=" border-left:1px solid #CCCCCC;">分摊损失：0</td>
        </tr>
        <tr>
          <td>
            佣金方式：按套定价
          </td>
          <td>定价方式：阶梯定价</td>
          <td>佣金标准（元）：20000</td>
          <td>应结佣金：50000</td>
          <td style=" border-left:1px solid #CCCCCC;">累计结算佣金：0</td>
          <td style=" border-left:1px solid #CCCCCC;">
            结算损失：
            <input
              type="text"
              style="width:40px;"
            >
          </td>
        </tr>
      </table>
      <div class="content-center">
        <span>损失佣金： 50000</span>
        <span>本次应回款： 1000</span>
        <span>开票金额： 100</span>
        <span>累积开票金额： 0</span>
      </div>
      <div>
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item
            label="发票抬头："
            size="mini"
          >
            <el-input
              v-model="formInline.user"
              placeholder="发票号："
              style="width:140px;"
            />
          </el-form-item>
          <el-form-item
            label="付款方："
            size="mini"
            style="margin-right:90px;"
          >
            南京绿地之窗
          </el-form-item>
          <el-form-item
            label="审批人"
            size="mini"
          >
            <el-input
              v-model="formInline.user"
              placeholder="审批人"
              style="width:150px;"
            />
          </el-form-item>
          <el-form-item
            label="开票时间："
            size="mini"
          >
            <el-input
              v-model="formInline.user"
              placeholder="2015-10-02"
              suffix-icon="el-icon-date"
              style="width:150px;"
            />
          </el-form-item>
        </el-form>
      </div>
      <div>
        <span>业绩确认单文件：</span>
        <span>绿地之窗业绩确认单确定版.pdf</span>
        <el-link type="primary">下载文件</el-link>
      </div>
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
    makeOut: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      input1: '',
      requireTable: [{}, {}],
      selectShow: true,
      isShow: false,
      formInline: {
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
    makeOut(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.makeOut = newVal
    }
  },
  created() {
    console.log(this.makeOut)
    this.isShow = this.makeOut
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
  }
}
.content-center {
  margin-top: 20px;
  margin-bottom: 20px;
  span {
    margin-right: 120px;
  }
}
</style>
