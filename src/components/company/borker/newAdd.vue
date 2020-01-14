<template>
  <div class="wrap">
    <div class="wrap-msg">
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              placeholder="请输入内容"
              label="公司名称"
              prop="age"
              :rules="[
                { required: true, message: '名称不能为空'},
                { type: 'string', message: '必填'}
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
            placeholder="请选择51区域"
          >
            <el-form-item
              label="公司电话"
              prop="age"
              placeholder="请选择区域"
              :rules="[
                { required: true, message: '公司电话不能为空'},
                { type: 'number', message: '电话必须为数字值'}
              ]"
            >
              <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;" />
      </div>
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="公司地址"
              prop="age"
              :rules="[
                { required: true, message: ' '},
                { type: 'number', message: ' '}
              ]"
            >
              <el-cascader style="width:100%" placeholder="请选择区域" :options="options" filterable />
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
              label="详细地址"
              prop="age"
              :rules="[
                { required: true, message: '地址不能为空'},
                { type: 'string', message: '必填'}
              ]"
            >
              <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;" />
      </div>
    </div>
    <div class="wrap-msg">
      <div class="tittle">
        <div>账户信息</div>
      </div>
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              placeholder="请输入内容"
              label="开户行"
              prop="age"
              :rules="[
                { required: true, message: '名称不能为空'},
                { type: 'string', message: '必填'}
              ]"
            >
              <el-select v-model="value" filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
            placeholder="请选择51区域"
          >
            <el-form-item
              label="账号"
              prop="age"
              placeholder="请选择区域"
              :rules="[
                { required: true, message: '公司电话不能为空'},
                { type: 'number', message: '电话必须为数字值'}
              ]"
            >
              <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;">
          <el-button type="text">新增</el-button>
        </div>
      </div>
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="开户行"
              prop="age"
              :rules="[
                { required: true, message: ' '},
                { type: 'number', message: ' '}
              ]"
            >
              <el-select v-model="value" filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
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
              label="账号"
              prop="age"
              :rules="[
                { required: true, message: '地址不能为空'},
                { type: 'string', message: '必填'}
              ]"
            >
              <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;">
          <el-button type="text">删除</el-button>
        </div>
      </div>
    </div>
    <div class="wrap-msg">
      <div class="tittle">
        <div>联系人</div>
      </div>
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              placeholder="请输入内容"
              label="姓名"
              prop="age"
              :rules="[
                { required: true, message: '名称不能为空'},
                { type: 'string', message: '必填'}
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
            placeholder="请选择51区域"
          >
            <el-form-item
              label="手机号"
              prop="age"
              placeholder="请选择区域"
              :rules="[
                { required: true, message: '公司电话不能为空'},
                { type: 'number', message: '电话必须为数字值'}
              ]"
            >
              <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;">
          <el-button type="text">新增</el-button>
        </div>
      </div>
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="职位"
              prop="age"
              :rules="[
                { required: true, message: ' '},
                { type: 'number', message: ' '}
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
              label="邮箱"
              prop="age"
              :rules="[
                { required: true, message: '地址不能为空'},
                { type: 'string', message: '必填'}
              ]"
            >
              <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;">
          <el-button type="text">删除</el-button>
        </div>
      </div>
    </div>
    <div class="wrap-msg">
      <div class="tittle">
        <div>合同管理</div>
      </div>
      <div class="dis msg">
        <div>
          <el-form
            ref="numberValidateForm"
            :model="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              placeholder="请输入内容"
              label="合作时间"
              prop="age"
              :rules="[
                { required: true, message: '名称不能为空'},
                { type: 'string', message: '必填'}
              ]"
            >
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']"
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
            placeholder="请选择51区域"
          >
            <el-form-item label="文件上传" prop="age" placeholder="请选择区域">
              <el-upload
                ref="upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
        <div style="line-height：20px;margin-left:30px;flex:1;">
          <el-button type="text">新增</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: '',
      numberValidateForm: {
        age: ''
      },
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      value: '',
      value1: '',
      value2: ''
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
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
<style lang="scss" scoped>
.msg {
  div {
    flex: 5;
  }
}
.dis {
  display: flex;
  font-display: row;
}
.wrap {
  width: 1200px;
}
.wrap-msg {
  margin-left: 20px;
}
.tittle {
  line-height: 60px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
</style>
