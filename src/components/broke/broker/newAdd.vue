<template>
  <div>
    <div class="wrap">
      <div class="msg dis">
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="经纪人姓名" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="电话" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="msg dis">
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="性别" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择性别" style="width:100%">
                <el-option label="男" value="shanghai" />
                <el-option label="女" value="beijing" />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="类型" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>门店经纪人
    <div class="wrap">
      <div class="msg dis">
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="经纪人姓名" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="电话" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="msg dis">
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="性别" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择性别" style="width:100%">
                <el-option label="男" value="shanghai" />
                <el-option label="女" value="beijing" />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="类型" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="msg dis">
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="公司名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="门店名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
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
        desc: '',
        fileList: [
          {
            name: 'food.jpeg',
            url:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: 'food2.jpeg',
            url:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ]
      },
      rules: {
        name: [
          { required: true, message: '请正确输入', trigger: 'blur' },
          { min: 3, max: 1000, message: '长度在3个字符以上', trigger: 'blur' }
        ]
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

<style lang="scss" scope>
.msg div {
  flex: 6;

  margin-right: 30px;
}
.wrap {
  width: 1200px;
  border: 1px solid #f5f5f5;
  padding: 0 20px;
  margin-left: 20px;
}
.dis {
  display: flex;
  font-display: row;
}
.tittle {
  line-height: 40px;
  margin-bottom: 10px;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  justify-content: space-between;
}
</style>>

