<template>
  <div>
    <div style="padding:0 30px">
      <div>
        <div style="margin-top: 15px;display:flex;">
          <el-input
            v-model="input"
            style="width:200px;marging-right:20px;"
            placeholder="请输入经纪管理公司名称"
            clearable
          />

          <div style="margin-left: 20px;">
            <el-select v-model="storeValue" clearable placeholder="请输入门店名称">
              <el-option
                v-for="item in selectStore"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 20px;">
            <el-select v-model="araeValue" clearable placeholder="请选择区域">
              <el-option
                v-for="item in selectArae"
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
            <el-select v-model="value" clearable placeholder="请选择门店状态">
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
            <el-button type="primary" @click="newAdd = true">添加</el-button>

            <el-dialog title="添加" :visible.sync="newAdd" width="60%" :before-close="handleClose">
              <span>
                <newAdd />
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="newAdd = false">取 消</el-button>
                <el-button type="primary" @click="newAdd = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="head">
        <el-button type="primary" plain>编辑</el-button>
        <div style="margin:0 10px;">
          <el-popconfirm title="你确定要审核此门店吗">
            <el-button slot="reference">审核</el-button>
          </el-popconfirm>
        </div>

        <el-button type="primary" plain>启用</el-button>
        <el-button type="primary" plain>禁用</el-button>
        <el-button type="primary" plain>修改负责人</el-button>
        <el-button plain style="background:none;color:#1c1c1c;">删除</el-button>
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
          <el-table-column prop="name" label="门店编号" width="150">zj00000001</el-table-column>
          <el-table-column prop="address" label="门店名称" width="150">南京南站店</el-table-column>
          <el-table-column prop="address" label="省市区" width="150">南京市雨花台区</el-table-column>
          <el-table-column prop="address" label="地址" width="150">xx路xx号xx栋</el-table-column>
          <el-table-column prop="date" label="联系人" width="120">張三</el-table-column>
          <el-table-column prop="name" label="负责人" width="120">李四</el-table-column>
          <el-table-column prop="address" label="公司名称" width="100">链家</el-table-column>
          <el-table-column prop="date" label="审核状态" width="120">
            <span style="color:#4171f9;">待审核</span>
          </el-table-column>
          <el-table-column prop="name" label="状态" width="120">
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
import newAdd from '@/components/stop/broker/newAdd.vue'
export default {
  components: {
    newAdd
  },
  data() {
    return {
      // 选择门店
      selectStore: [
        {
          value: '选项1',
          label: '大新华府店'
        },
        {
          value: '选项2',
          label: '东门店'
        },
        {
          value: '选项3',
          label: '天润城店'
        },
        {
          value: '选项4',
          label: '明发店'
        }
      ],
      storeValue: '',
      // 选择区域
      selectArae: [
        {
          value: '选项1',
          label: '浦口'
        },
        {
          value: '选项2',
          label: '柳州东路'
        },
        {
          value: '选项3',
          label: '大华'
        },
        {
          value: '选项4',
          label: '顶山'
        },
        {
          value: '选项5',
          label: '东门'
        }
      ],
      araeValue: '',
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
      auditValue: '',
      // 门店状态
      options: [
        {
          value: '选项1',
          label: '关门'
        },
        {
          value: '选项2',
          label: '歇业'
        },
        {
          value: '选项3',
          label: '营业中'
        }
      ],
      value: '',
      newAdd: false,

      input: '',
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

