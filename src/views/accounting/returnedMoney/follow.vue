<template>
  <div>
    <el-dialog
      title="跟进"
      :visible.sync="isShow"
      width="30%"
      :before-close="handleClose"
      @close="cancel"
    >
      <el-form
        :model="formInline"
        :rules="rules"
        class="demo-form-inline"
        autosize
        size="mini"
      >
        <el-form-item
          label="是否同意结算："
          prop="region"
          style="margin-left:12px;"
        >
          <el-switch
            v-model="selectShow"
            active-color="#87D068"
            inactive-color="#CCCCCC"
            active-text="是"
            inactive-text="否"
          />
        </el-form-item>

        <el-form-item
          v-show="selectShow"
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
        <el-form-item
          v-show="!selectShow"
          label="原因："
          prop="region"
          style="margin-left:68px;"
        >
          <el-input
            v-model="formInline.textarea"
            type="textarea"
            placeholder="请选择计划期数"
            style="width: 300px;"
            maxlength="30"
            show-word-limit
          />
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
    follow: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
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
    follow(newVal) {
      this.isShow = newVal
    },
    isShow(newVal) {
      this.follow = newVal
    }
  },
  created() {
    console.log(this.follow)
    this.isShow = this.follow
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
