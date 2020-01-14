<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="中介规则" name="first">
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
                    <el-input
                      v-model.number="numberValidateForm.age"
                      type="age"
                      autocomplete="off"
                    />
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
                    <el-input
                      v-model.number="numberValidateForm.age"
                      type="age"
                      autocomplete="off"
                    />
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
                </div>以内视为有效宝贝
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
          <div class="m1">
            <div class="m1-tittle dis">
              <div class="dis">
                <el-input v-model="input" placeholder="请输入规格名称" />
                <div style="margin-left:20px;">
                  <el-date-picker
                    v-model="value1"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </div>
              </div>
              <div>
                <el-button type="text">取消</el-button>
                <el-button type="text">保存</el-button>
              </div>
            </div>
            <div>
              <div class="change">
                <div class="column">
                  物业类型
                  <el-select v-model="value" placeholder="请选择物业类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  期数
                  <el-select v-model="value" placeholder="请选择期数">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  期数
                  <el-select v-model="value" placeholder="请选择楼栋">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  单元号
                  <el-select v-model="value" placeholder="请选择单元号">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  户型
                  <el-select v-model="value" placeholder="请选择户型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  营销类型
                  <el-select v-model="value" placeholder="请选择营销类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  判断状态
                  <el-select v-model="value" placeholder="请选择判断状态">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  佣金方式
                  <el-select v-model="value" placeholder="请选择佣金方式">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="column">
                  定金方式
                  <el-select v-model="value" placeholder="请选择定金方式">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
              </div>
            </div>
          </div>
          <div class="m1">
            <div class="m1-tittle dis">
              <div class="dis">
                <el-input v-model="input" placeholder="阶梯式" />
                <div style="margin-left:20px;">
                  <el-date-picker
                    v-model="value1"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </div>
              </div>
              <div>
                <el-button type="text">编辑</el-button>
                <el-button type="text">配置机构</el-button>
                <el-button type="text" style="color:red;">删除规则</el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="开发商规则" name="second">配置561管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
  margin: 20px 20px 20px 0;
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
