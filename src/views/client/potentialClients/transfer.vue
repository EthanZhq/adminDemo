<template>
  <div>
    <el-dialog
      title="转商机"
      :visible.sync="isShow"
      width="30%"
      :before-close="handleClose"
      @close="cancel"
    >
      <el-form
        ref="formInline"
        :model="formInline"
        :rules="rules"
        label-width="110px"
        size="mini"
      >
        <el-form-item label="客户姓名：">
          <el-input
            v-model="formInline.user"
            placeholder="张三"
          />
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input
            v-model="formInline.name"
            placeholder="12312341234"
          />
        </el-form-item>
        <el-form-item
          label="项目名称："
          prop="user"
        >
          <el-select
            v-model="formInline.region"
            placeholder="请选择项目名称"
          >
            <el-option
              label="方式一"
              value="客户来电"
            />
            <el-option
              label="方式二"
              value="短信跟进"
            />
            <el-option
              label="方式三"
              value="电话跟进"
            />
            <el-option
              label="方式四"
              value="微信跟进"
            />
            <el-option
              label="方式五"
              value="其他方式"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="负责人："
          prop="user"
        >
          <el-select
            v-model="formInline.region"
            placeholder="请选择商机负责人"
          >
            <el-option
              label="级别一"
              value="客户来电"
            />
            <el-option
              label="级别二"
              value="短信跟进"
            />
            <el-option
              label="级别三"
              value="电话跟进"
            />
            <el-option
              label="级别四"
              value="微信跟进"
            />
            <el-option
              label="级别五"
              value="其他方式"
            />
          </el-select>
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
    transfer: {
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
    transfer(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.transfer = newVal
    }
  },
  created() {
    console.log(this.transfer)
    this.isShow = this.transfer
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
