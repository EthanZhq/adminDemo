<template>
  <div class="wrap">
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
          <el-form-item label="单元数" prop="name" placeholder="请输入期数">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="单元户数" prop="name" placeholder="请输入期数">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="总层数" prop="name" placeholder="请输入楼栋">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </div>
        <div class="dis">
          <el-form-item label="架空层数" prop="name" placeholder="请输入期数">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </div>
      </el-form>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange"
      >
        <el-table-column type="index" width="50" />
        <el-table-column property="date" label="A户型" width="200">501</el-table-column>
        <el-table-column property="name" label="B户型" width="200">620</el-table-column>
        <el-table-column property="address" label="C户型" width="200">520</el-table-column>
        <el-table-column property="address" label="D户型" width="200">1314</el-table-column>
      </el-table>
      <div class="dis" style="text-align: center;line-height:60px;">
        <div style="flex:6;border:1px solid #f5f5f5;">一单元</div>
        <div style="flex:6;border:1px solid #f5f5f5;">二单元</div>
      </div>

      <!-- <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>-->
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
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      currentRow: null
    }
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange(val) {
      this.currentRow = val
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
  width: 900px;
  border: 1px solid #f5f5ff;
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
