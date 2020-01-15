<template>
  <div>
    <div class="msg dis">
      <div class="msgRight">
        <div class="head">
          <div>
            <el-input v-model="input" style="width:200px;" placeholder="请输入项目名称" clearable />
          </div>
          <div>
            <el-select slot="prepend" v-model="select" placeholder="请选择">
              <el-option label="餐厅名" value="1" />
              <el-option label="订单号" value="2" />
              <el-option label="用户电话" value="3" />
            </el-select>
          </div>
          <div>
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 53%">
          <el-table-column fixed prop="date" label="经纪公司/独立经纪人" width="200" />
          <el-table-column prop="name" label="区域" width="120" />

          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button size="small" type="text" @click="handleClick(scope.row)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          :current-page="currentPage4"
          :total="400"
          layout="total, sizes, prev, pager, next, jumper"
          :page-size="100"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="msgRight">
        <div class="head">
          <div>
            <el-input v-model="input" style="width:200px;" placeholder="请输入项目名称" clearable />
          </div>
          <div>
            <el-select slot="prepend" v-model="select" placeholder="请选择">
              <el-option label="餐厅名" value="1" />
              <el-option label="订单号" value="2" />
              <el-option label="用户电话" value="3" />
            </el-select>
          </div>
          <div>
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 53%">
          <el-table-column fixed prop="date" label="经纪公司/独立经纪人" width="200" />
          <el-table-column prop="name" label="区域" width="120" />

          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                size="small"
                type="text"
                @click.native.prevent="deleteRow(scope.$index, tableData)"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          :page-size="100"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ],
      input: '',
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>
<style lang="scss" scoped>
.msgLeft,
.msgRight {
  flex: 6;
  margin: 0 0 0 30px;
}
.dis {
  display: flex;
  font-display: row;
}
.head {
  display: flex;
  font-display: row;
  div {
    margin: 0 20px 0 0;
  }
}
</style>
