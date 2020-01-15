<template>
  <div>
    <div>
      <div>
        <div class="m1">
          <div class="m1-tittle dis">
            <div>基础信息</div>
            <div>
              <el-button type="text">取消</el-button>
              <el-button type="text">保存</el-button>
            </div>
          </div>
          <div class="dis m1-one line">
            <div>项目名称：陆地之窗</div>
            <div>区域：江苏-南京-雨花</div>
          </div>
          <div class="dis m1-one">
            <div>
              <el-form
                ref="numberValidateForm"
                :model="numberValidateForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="驻场电话"
                  prop="age"
                  :rules="[
                    { required: true, message: '电话不能为空'},
                    { type: 'number', message: '年电话必须为数字值'}
                  ]"
                >
                  <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-form
                ref="numberValidateForm"
                :model="numberValidateForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="负责人电话"
                  prop="age"
                  :rules="[
                    { required: true, message: '电话不能为空'},
                    { type: 'number', message: '电话必须为数字值'}
                  ]"
                >
                  <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="report-msg">
            <div class="dis line">
              <div class="result">报备规则一：报备提前</div>
              <div style="margin: 0 30px;">
                <el-input v-model="input" placeholder="请输入内容" />
              </div>
              <div style="margin-left:20px;">
                <el-time-picker
                  v-model="value1"
                  :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                  }"
                  placeholder="任意时间点"
                />
              </div>以内视为有效报备
            </div>
            <div class="dis line">
              <div class="result">报备规则二：客户报备有效保护期</div>
              <div style="margin: 0 30px;">
                <el-input v-model="input" placeholder="请输入内容" />
              </div>
              <div style="margin-left:20px;">
                <el-time-picker
                  v-model="value1"
                  :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                  }"
                  placeholder="任意时间点"
                />
              </div>
            </div>
            <div class="dis line">
              <div class="result">报备规则三：客户到访有效保护期</div>
              <div style="margin: 0 30px;">
                <el-input v-model="input" placeholder="请输入内容" />
              </div>
              <div style="margin-left:20px;">
                <el-time-picker
                  v-model="value1"
                  :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                  }"
                  placeholder="任意时间点"
                />
              </div>
            </div>
            <div class="dis line">
              <div class="result">报备规则四：客户到访有效</div>
              <div style="margin: 0 30px;">
                <el-input v-model="input" placeholder="请输入内容" />
              </div>
              <div style="margin-left:20px;">
                <el-time-picker
                  v-model="value1"
                  :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                  }"
                  placeholder="任意时间点"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="开发商规则" name="first">
          <intermediary />
        </el-tab-pane>
        <el-tab-pane label="中介规则" name="second">
          <developers />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 导入开发商
import developers from '@/components/configuration/configuration/developers.vue'
// // 导入中介规则
import intermediary from '@/components/configuration/configuration/intermediary.vue'
export default {
  components: { intermediary, developers },
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      numberValidateForm: {
        age: ''
      },
      input: '',
      value1: new Date(2016, 9, 10, 18, 40),
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
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
.addNewRule {
  width: 1200px;
  padding-left: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.change {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.result {
  width: 250px;
}
.line {
  line-height: 60px;
}
.m1-one {
  div {
    flex: 6;
  }
}
.column {
  display: flex;
  margin: 10px 20px 10px 0;
  flex-direction: column;
}
.dis {
  display: flex;
  font-display: row;
}
.m1 {
  width: 1200px;
  padding-left: 20px;
  background: #ece9e9;
  margin-bottom: 20px;
  .m1-tittle {
    line-height: 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
    justify-content: space-between;
  }
}
</style>
