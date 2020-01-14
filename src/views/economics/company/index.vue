<template>
  <div>
    <div style="padding:0 30px">
      <div>
        <div style="margin-top: 15px;display:flex;">
          <el-input
            v-model="input"
            style="width:200px;marging-right:20px;"
            placeholder="请输入经纪公司名称"
            clearable
          />
          <div style="margin-left: 20px;">
            <el-select v-model="value" clearable placeholder="请输入审核状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div style="margin-left: 20px;">
            <el-select v-model="value" clearable placeholder="请选择公司状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 20px;">
            <el-select v-model="value" clearable placeholder="请选择合作状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left:100px;">
            <el-button type="primary">搜索</el-button>
            <el-button type="primary" @click="newAdd = true">添加</el-button>
            <el-dialog title="添加" :visible.sync="newAdd" width="70%" :before-close="handleClose">
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
        <el-popover v-model="visible" placement="top" width="400">
          <p>
            <i class="el-icon-circle-close" />
            <span style="margin-left:20px;">你确定要审核此公司吗？</span>
          </p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-button slot="reference" style="margin:0 10px;">审核</el-button>
        </el-popover>
        <el-button type="primary" plain>启用</el-button>
        <el-button type="primary" plain>禁用</el-button>

        <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <span>
            <div>
              <i class="el-icon-warning" style="margin-right:10px;color:#e9640b;" />确定删除所选中数据吗？
            </div>
            <div>
              <span style="color:#ee5e5e;">数据删后不可恢复</span>
              您还要继续吗？
            </div>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-button
          plain
          style="background:none;color:#1c1c1c;margin-left:10px;"
          @click="dialogVisible = true"
        >删除</el-button>
        <el-button plain style="background:none;color:#1c1c1c;">历史合作记录</el-button>
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
          <el-table-column prop="name" label="公司编号" width="180">zj00000001</el-table-column>
          <el-table-column prop="address" label="公司名称" width="150">鏈家</el-table-column>
          <el-table-column prop="date" label="联系人" width="150">張三</el-table-column>
          <el-table-column prop="name" label="联系电话" width="150">15225846698</el-table-column>
          <el-table-column prop="address" label="最近合作时间段" width="230">2001-12-99至2018-09-95</el-table-column>
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
    <A />
  </div>
</template>

<script>
import newAdd from '@/components/company/borker/newAdd.vue'
// import ThemeSettings from '@/components/theme/theme-settings'
// import ThemeView from '@/components/theme/theme-view'
export default {
  components: {
    newAdd
    // ThemeSettings,
    // ThemeView
  },
  data() {
    return {
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
      input: '',
      // input1: '',
      // input2: '',
      // input3: '',
      // select: '',
      value1: true,
      currentPage4: 10,
      tableData: [{}, {}, {}, {}, {}, {}, {}],
      visible: false,
      dialogVisible: false,
      newAdd: false
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

