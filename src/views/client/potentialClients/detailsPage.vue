<template>
  <div>
    <el-dialog
      title="查看详情"
      :visible.sync="isShow"
      width="40%"
      :before-close="handleClose"
      @close="cancel"
    >
      <div style="border-top:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;">
        <el-form
          ref="formInline"
          :model="formInline"
          label-width="100px"
          size="mini"
          :inline="true"
          style="margin-top:10px;"
        >
          <el-form-item
            label="客户姓名："
            style="width:45%"
          >
            张三
          </el-form-item>
          <el-form-item label="手机号：">
            12312341234
          </el-form-item>
          <el-form-item
            label="意向项目："
            style="width:45%"
          >
            绿地之窗
          </el-form-item>
          <el-form-item label="来源：">
            布点
          </el-form-item>
          <el-form-item
            label="意向户型："
            style="width:40.5%"
          >
            A户型、B户型
          </el-form-item>
          <el-form-item
            label="价格区间（万）："
            label-width="130px"
          >
            100-200
          </el-form-item>
          <el-form-item
            label="特色要求："
            style="width:45%"
          >
            品牌房产
          </el-form-item>
          <el-form-item label="创建时间：">
            2019-10-09
          </el-form-item>
        </el-form>
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
    detailsPage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ],
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
    detailsPage(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.detailsPage = newVal
    }
  },
  created() {
    console.log(this.detailsPage)
    this.isShow = this.detailsPage
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
