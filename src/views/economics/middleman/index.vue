<template>
  <div>
    <div style="padding:0 30px">
      <div>
        <div style="margin-top: 15px;display:flex;">
          <el-input
            v-model="input"
            style="width:200px;marging-right:20px;"
            placeholder="请输入人员名称/手机号"
            clearable
          />
          <div style="margin-left: 20px;">
            <el-select v-model="personnelValue" clearable placeholder="请选择人员类型">
              <el-option
                v-for="item in selectPersonnel"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 20px;">
            <el-select v-model="companyValue" clearable placeholder="请选择所属公司">
              <el-option
                v-for="item in selectCompany"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div style="margin-left: 20px;">
            <el-select v-model="auditValue" clearable placeholder="请选择审核状态">
              <el-option
                v-for="item in selectAudit"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div style="margin-left: 20px;">
            <el-select v-model="value" clearable placeholder="请选择人员状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 20px;">
            <el-button type="primary">搜索</el-button>
            <el-button type="primary" @click="dialogVisible = true">新增</el-button>

            <el-dialog
              title="新增"
              :visible.sync="dialogVisible"
              width="70%"
              :before-close="handleClose"
            >
              <span>
                <newAdd />
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="head">
        <el-button type="primary" plain>编辑</el-button>
        <el-button type="primary" plain>审核</el-button>
        <el-button type="primary" plain>启用</el-button>
        <el-button type="primary" plain>禁用</el-button>
        <el-button type="primary" plain>设置角色</el-button>
      </div>
      <!-- 表格 -->
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="name" label="人员编号" width="150">zj00000001</el-table-column>
          <el-table-column prop="address" label="人员名称" width="10">张三</el-table-column>
          <el-table-column prop="date" label="联系方式" width="150">15244651158</el-table-column>
          <el-table-column prop="name" label="类型" width="150">门店经纪人</el-table-column>
          <el-table-column prop="address" label="门店名称" width="120">南京南站店</el-table-column>
          <el-table-column prop="date" label="公司名称" width="120">链家</el-table-column>
          <el-table-column prop="date" label="角色" width="120">店长</el-table-column>
          <el-table-column prop="date" label="审核状态" width="150">
            <span style="color:#4171f9;">待审核</span>
          </el-table-column>
          <el-table-column prop="name" label="状态" width="150">
            <el-switch
              v-model="value1"
              active-color="#13ce66"
              inactive-color="#13ce66"
              active-text="是"
              inactive-text="否"
            />
          </el-table-column>
          <el-table-column prop="address" label="创建时间" width="230">2019-11-15 09：00：00</el-table-column>
          <el-table-column prop="address" label="创建人" width="150">張三</el-table-column>
        </el-table>
      </div>
      <div class="paging">
        <div class="paging-right">
          <el-pagination
            :current-page="currentPage4"
            :page-size="100"
            :total="400"
            :pager-count="5"
            :page-sizes="[100, 200, 300, 400]"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newAdd from '@/components/broke/broker/newAdd.vue'
export default {
  components: {
    newAdd
  },
  data() {
    return {
      // 选择人员leix
      selectPersonnel: [
        {
          value: '选项1',
          label: '工人'
        },
        {
          value: '选项2',
          label: '农名'
        },
        {
          value: '选项3',
          label: '学生'
        },
        {
          value: '选项4',
          label: '老师'
        },
        {
          value: '选项5',
          label: '教授'
        }
      ],
      personnelValue: '',
      // 选择所属公司
      selectCompany: [
        {
          value: '选项1',
          label: '镇江房地产'
        },
        {
          value: '选项2',
          label: '南京房地产'
        }
      ],
      companyValue: '',
      // 审核状态
      // 审核状态
      selectAudit: [
        {
          value: '选项1',
          label: '未审核'
        },
        {
          value: '选项2',
          label: '审核中'
        },
        {
          value: '选项3',
          label: '审核成功'
        },
        {
          value: '选项4',
          label: '审核失败'
        }
      ],
      // 人员状态
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
      value: '',
      auditValue: '',
      dialogVisible: false,

      input: '',
      // input1: '',
      // input2: '',
      // input3: '',
      // select: '',
      value1: true,
      currentPage4: 10,
      tableData: [{}, {}, {}, {}, {}, {}, {}]
    }
  },
  // created() {
  //   this.theme = this.list[0]
  // },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped lang="scss">
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.head {
  margin-left: 30px;
  height: 100px;
  align-items: center;
  display: flex;
  font-display: row;
  button {
    background: #4171f9;
    color: #ffffff;
  }
}
.paging {
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .paging-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.container {
  position: relative;
  display: flex;
  padding: 15px 30px;
  color: #333;
  font-size: 15px;
}
</style>

