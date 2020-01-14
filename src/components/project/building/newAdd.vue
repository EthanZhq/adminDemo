<template>
  <div class="wrap">
    <div class="tittle">
      <div>新增</div>
      <div>
        <i class="el-icon-close" />
      </div>
    </div>
    <div class="msg">
      <div class="msg-tittle">基础设施</div>

      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="dis">
          <div style="flex:3;">
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="所属城市">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
          </div>
          <div style="flex:9;">
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </div>
        </div>

        <div class="dis">
          <el-form-item label="期数" prop="name" placeholder="请输入期数">
            <el-input v-model="ruleForm.name" />
          </el-form-item>

          <el-form-item label="物业类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择物业类型">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>

          <el-form-item label="楼栋" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </div>
        <div class="dis">
          <el-form-item label="单元数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="单元户数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="架空层数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </div>
        <div class="submit">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div class="msg">
      <div class="msg-tittle">基础设施</div>

      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="dis">
          <div style="flex:3;">
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="所属城市">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
          </div>
          <div style="flex:9;">
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </div>
        </div>

        <div class="dis">
          <el-form-item label="期数" prop="name" placeholder="请输入期数">
            <el-input v-model="ruleForm.name" />
          </el-form-item>

          <el-form-item label="物业类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择物业类型">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>

          <el-form-item label="楼栋" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </div>
        <div class="dis">
          <el-form-item label="单元数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="单元户数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="架空层数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </div>
        <div class="submit">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="table">6262</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.submit {
  display: flex;
  justify-content: flex-end;
  border: 1px solid #f5f5f5;
}
.dis {
  display: flex;
  font-display: row;
}
.wrap {
  width: 1000px;
  padding-left: 30px;
  .tittle {
    line-height: 60px;
    border: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
  }
  .msg-tittle {
    line-height: 30px;
  }
}
</style>
