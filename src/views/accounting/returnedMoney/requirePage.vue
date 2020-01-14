/* 生成确认单*/
<template>
  <div class="requirePage">
    <el-dialog
      title="回款确认单"
      :visible.sync="isShow"
      width="58%"
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
        cellpadding="4"
      >
        <tr>
          <td rowspan="3">1</td>
          <td>
            签约姓名：张先生
          </td>
          <td>电话：13900001111</td>
          <td>身份证号：123123122342245677</td>
          <td>签约时间：2019-01-31&nbsp;09:00:00</td>
          <td style=" border-left:1px solid #CCCCCC;">累计单套损失：50000</td>
          <td>
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
      <div style="margin-top:10px;">
        <span>存在分摊损失佣金：</span>
        <el-switch
          v-model="selectShow"
          active-color="#87D068"
          inactive-color="#CCCCCC"
          active-text="是"
          inactive-text="否"
        />
      </div>
      <div
        v-show="selectShow"
        class="content-center"
      >
        <!-- 分摊损失 -->
        <div
          clas="content-center-text"
          style="overflow:hidden;border-bottom:1px solid #CCCCCC;;margin-bottom:7px;"
        >
          <h5
            class="firstSpan"
            style="float:left;"
          >分摊损失</h5>
          <el-button
            type="text"
            style="float:right;"
            @click="onSubmit"
          >新增</el-button>
        </div>
        <el-form
          :inline="true"
          :model="formInline"
          :rules="rules"
          class="demo-form-inline"
          autosize
          size="mini"
        >

          <el-form-item
            label="损失类型"
            prop="region"
          >
            <el-select
              v-model="formInline.region"
              placeholder="请选择损失类型"
            >
              <el-option
                label="损失类型一"
                value="shanghai"
              />
              <el-option
                label="损失类型2"
                value="beijing"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="金额"
            prop="region"
          >
            <el-input
              v-model="formInline.user"
              placeholder="请输入损失金额"
            />
          </el-form-item>
          <el-form-item
            label="说明"
            prop="region"
          >
            <el-input
              v-model="formInline.user"
              placeholder="请输入损失说明"
            />
          </el-form-item>
          <el-form-item style="float:right;margin-right:-1px;">
            <el-button
              type="text"
              @click="onSubmit"
            >删除</el-button>
          </el-form-item>
        </el-form>
        <div clas="content-center-text">
          <h5 class="firstSpan">冲抵</h5>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="签约姓名"
            width="180"
          >李四</el-table-column>
          <el-table-column
            prop="name"
            label="房源信息"
            width="180"
          >1期99栋1单元202</el-table-column>
          <el-table-column
            prop="address"
            label="面积（m²）"
          >99.87</el-table-column>
          <el-table-column
            prop="address"
            label="成交总价(元)"
          >5432145.31</el-table-column>
          <el-table-column
            prop="address"
            label="退佣状态"
          >未退佣</el-table-column>
          <el-table-column
            prop="address"
            label="总退佣金额"
          >20000</el-table-column>
          <el-table-column
            prop="address"
            label="未退佣金"
          >20000</el-table-column>
          <el-table-column
            prop="address"
            label="本次冲抵金额"
          >20000</el-table-column>
          <el-table-column
            prop="address"
            label="操作"
          >
            <el-button
              type="text"
              size="small"
              @click="innerVisible = true"
            >冲抵
            </el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="content-bottm">
        <div clas="content-center-text">
          <h5 class="firstSpan">回款汇总</h5>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="本次回款"
            width="180"
          >50000</el-table-column>
          <el-table-column
            prop="name"
            label="本次单套损失"
            width="180"
          >0</el-table-column>
          <el-table-column
            prop="address"
            label="本次公摊损失"
          >1000</el-table-column>
          <el-table-column
            prop="address"
            label="本次冲抵金额"
          >50000</el-table-column>
          <el-table-column
            prop="address"
            label="累计回款"
          >10000</el-table-column>
          <el-table-column
            prop="address"
            label="累计单套损失"
          >0</el-table-column>
          <el-table-column
            prop="address"
            label="累计公摊损失"
          >20000</el-table-column>
          <el-table-column
            prop="address"
            label="总应结佣金"
          >20000</el-table-column>
        </el-table>
        <!-- 上传图片 -->
        <el-upload
          style="margin-top:20px;"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <span style="font-weight:bold;margin:10px;">业绩确认单上传：</span>
          <el-button size="mini">点击上传</el-button>
          <span class="el-upload__tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</span>
        </el-upload>

        <!-- 确认形式 -->
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          size="mini"
          style="margin-top:20px;"
        >
          <el-form-item
            label="确认形式:"
            style="width: 500px; margin-left:45px;"
          >
            <el-select
              v-model="formInline.region"
              placeholder="请选择确实形式"
            >
              <el-option
                label="形式一"
                value="shanghai"
              />
              <el-option
                label="形式2"
                value="beijing"
              />
            </el-select>
          </el-form-item>
          <!-- 确认时间 -->
          <el-form-item
            label="确认时间:"
            style="margin-left:45px;"
          >
            <el-date-picker
              v-model="formInline.date1"
              type="date"
              placeholder="确认日期"
            />
          </el-form-item>
        </el-form>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancel">导 出</el-button>
        <el-button type="primary">确 认</el-button>
      </span>
    </el-dialog>
    <!-- 内部冲抵弹框 -->
    <el-dialog
      width="30%"
      title="冲抵"
      :visible.sync="innerVisible"
      append-to-body
    >
      <el-form
        :model="formInline"
        :rules="rules"
        class="demo-form-inline"
        autosize
        size="mini"
      >
        <el-form-item
          label="总退佣金额："
          prop="region"
          style="margin-left:12px;"
        >30000
        </el-form-item>

        <el-form-item
          label="未退佣金额："
          prop="region"
          style="margin-left:12px;"
        >30000
        </el-form-item>

        <el-form-item
          label="本次回款金额："
          prop="region"
        >30000
        </el-form-item>
        <el-form-item
          label="本次冲抵金额："
          prop="region"
        >
          <el-input
            v-model="formInline.user"
            placeholder="请输入本次冲抵金额"
            style="width: 300px;"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="innerVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    requirePage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      // 上传图片data数据
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      selectShow: true,
      innerVisible: false,
      tableData: [{}, {}],
      form: {
        user: '',
        region: '',
        date1: ''
      },
      formInline: {
        user: '',
        region: '',
        date1: ''
      },
      isShow: false,
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
    requirePage(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.requirePage = newVal
    }
  },
  created() {
    console.log(this.requirePage)
    this.isShow = this.requirePage
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    cancel() {
      this.$emit('cancel')
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    // 上传图片方法
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
<style lang="scss" scoped>
.requirePage {
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
}
</style>

