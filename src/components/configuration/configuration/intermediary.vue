<template>
  <div>
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
          <el-button type="text" @click="dialogVisible = true">配置机构</el-button>
          <div>
            <el-dialog
              title="配置机构"
              :visible.sync="dialogVisible"
              width="60%"
              :append-to-body="true"
              :before-close="handleClose"
            >
              <span>
                <organization />
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
          <el-button type="text" style="color:red;">删除规则</el-button>
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
      <div class="dis">
        <div class="column">
          阶梯区间
          <div class="dis">
            <el-input v-model="input" placeholder="请输入" />
            <span style="line-height: 40px;margin:0 10px;">-</span>
            <el-input v-model="input" placeholder="请输入" />
          </div>
        </div>
        <div class="column">
          佣金标准（%）
          <el-select v-model="value" placeholder="请选择定金方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div style="line-height:100px;">
          <el-button type="text">新增</el-button>
        </div>
      </div>
      <div class="dis">
        <div class="column">
          阶梯区间
          <div class="dis">
            <el-input v-model="input" placeholder="请输入" />
            <span style="line-height: 40px;margin:0 10px;">-</span>
            <el-input v-model="input" placeholder="请输入" />
          </div>
        </div>
        <div class="column">
          佣金标准（%）
          <el-select v-model="value" placeholder="请选择定金方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div style="line-height:100px;">
          <el-button type="text" style="color:red;">删除</el-button>
        </div>
      </div>
    </div>
    <div class="addNewRule">
      <i class="el-icon-plus" />
      <el-button type="text">添加新规则</el-button>
    </div>
  </div>
</template>

<script>
import organization from '@/components/project/building/organization.vue'
export default {
  components: {
    organization
  },
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
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
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

