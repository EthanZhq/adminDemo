<template>
  <div>
    <div style="padding:0 30px">
      <div>
        <div style="margin-top: 15px;display:flex;">
          <el-input
            v-model="input"
            style="width:200px;marging-right:20px;"
            placeholder="请输入内容"
            clearable
          />
          <div style="margin-left: 20px;">
            <el-select
              v-model="value"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div style="margin-left: 20px;">
            <el-select
              v-model="value"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 20px;">
            <el-select
              v-model="value"
              clearable
              placeholder="请选择"
            >
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

      <div class="head">
        <el-button
          type="primary"
          plain
        >编辑</el-button>
        <el-button
          type="primary"
          plain
        >审核</el-button>
        <el-button
          type="primary"
          plain
        >启用</el-button>
        <el-button
          type="primary"
          plain
        >禁用</el-button>
        <el-button
          plain
          style="background:none;color:#1c1c1c;"
        >删除</el-button>
        <el-button
          plain
          style="background:none;color:#1c1c1c;"
        >历史合作记录</el-button>
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
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            prop="name"
            label="公司编号"
            width="180"
          >zj00000001</el-table-column>
          <el-table-column
            prop="address"
            label="公司名称"
            width="150"
          >鏈家</el-table-column>
          <el-table-column
            prop="date"
            label="联系人"
            width="150"
          >張三</el-table-column>
          <el-table-column
            prop="name"
            label="联系电话"
            width="150"
          >15225846698</el-table-column>
          <el-table-column
            prop="address"
            label="最近合作时间段"
            width="230"
          >2001-12-99至2018-09-95</el-table-column>
          <el-table-column
            prop="date"
            label="审核状态"
            width="150"
          >
            <span style="color:#4171f9;">待审核</span>
          </el-table-column>
          <el-table-column
            prop="name"
            label="状态"
            width="150"
          >
            <el-switch
              v-model="value1"
              active-color="#13ce66"
              inactive-color="#13ce66"
              active-text="是"
              inactive-text="否"
            />
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建时间"
            width="230"
          >2019-11-15 09：00：00</el-table-column>
          <el-table-column
            prop="address"
            label="创建人"
            width="150"
          >張三</el-table-column>
        </el-table>
        <!-- <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>-->
      </div>
      <div class="paging">
        <div class="paging-right">
          <el-pagination
            :current-page="currentPage4"
            :page-size="100"
            :total="400"
            pager-count="5"
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
// import ThemeSettings from '@/components/theme/theme-settings'
// import ThemeView from '@/components/theme/theme-view'
export default {
  components: {
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
      tableData: [{}, {}, {}, {}, {}, {}, {}]
    }
  },
  created() {
    this.theme = this.list[0]
  },
  methods: {
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

