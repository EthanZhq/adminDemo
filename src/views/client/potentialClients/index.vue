<template>
  <div>
    <div style="padding:0 30px">
      <div>
        <div style="margin-top: 15px;display:flex;">
          <el-input
            v-model="input"
            style="width:215px;marging-right:20px;"
            placeholder="请输入客户手名称/手机号"
            clearable
          />
          <div style="margin-left: 20px;">
            <el-select
              v-model="value"
              clearable
              placeholder="请选择意向项目"
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
              placeholder="请选择跟进状态"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 300px;">
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
      </div>

      <div class="head">
        <el-button
          type="primary"
          plain
          @click="open(0)"
        >报备审核</el-button>
        <el-button
          type="primary"
          plain
          @click="open(1)"
        >到访确认</el-button>
        <el-button
          type="primary"
          plain
          @click="open(2)"
        >跟 进</el-button>
        <el-button
          type="primary"
          plain
          @click="open(3)"
        >转商机</el-button>
        <el-button
          type="primary"
          plain
          @click="open(4)"
        >详 细</el-button>

      </div>
      <!-- 表格 -->
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width:95%"
          height="450"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            prop="id"
            label="客户编号"
            width="220"
          >U2019100001</el-table-column>
          <el-table-column
            prop="name"
            label="客户名称"
            width="220"
          >万科新都荟
          </el-table-column>
          <el-table-column
            prop="organization"
            label="联系方式"
            width="200"
          >12312341234</el-table-column>
          <el-table-column
            prop="whether"
            label="跟进状态"
            width="160"
          >报备审核</el-table-column>

          <el-table-column
            prop="date"
            label="意向项目"
            width="160"
          >万科新都荟</el-table-column>
          <el-table-column
            prop="state"
            label="预约到访时间"
            width="180"
          >2019-11-15</el-table-column>
          <el-table-column
            prop="state"
            label="推荐时间"
            width="200"
          >2019-11-15 08:00:00</el-table-column>

          <el-table-column
            prop="state"
            label="推荐人"
            width="120"
          >张三</el-table-column>
        </el-table>
      </div>
      <div class="paging">
        <div class="paging-right">
          <el-pagination
            :current-page="currentPage4"
            :page-size="100"
            :total="400"
            :pager-count="5"
            :page-sizes="[5,100, 200, 300, 400]"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>

    <followUp
      :follow-up="followUp"
      @cancel="cancels(2)"
    />
    <transfer
      :transfer="transfer"
      @cancel="cancels(3)"
    />
    <detailsPage
      :details-page="detailsPage"
      @cancel="cancels(4)"
    />
  </div>
</template>

<script>
import FollowUp from './followUp'
import Transfer from './transfer'
import DetailsPage from './detailsPage'
export default {
  components: {
    FollowUp, Transfer, DetailsPage
  },
  data() {
    return {
      followUp: false,
      transfer: false,
      detailsPage: false,
      options: [{
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
      tableData: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      requireTable: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  created() {
    // this.theme = this.list[0]
  },
  methods: {
    // 打开生成页面
    open(state) {
      if (state === 2) {
        console.log(this.followUp)
        this.followUp = true
        console.log(this.followUp)
      }
      if (state === 3) {
        console.log(this.transfer)
        this.transfer = true
        console.log(this.transfer)
      }
      if (state === 4) {
        console.log(this.detailsPage)
        this.detailsPage = true
        console.log(this.detailsPage)
      }
    },
    cancels(state) {
      if (state === 2) {
        this.followUp = false
        console.log(this.followUp)
      }
      if (state === 3) {
        this.transfer = false
        console.log(this.transfer)
      }
      if (state === 4) {
        this.detailsPage = false
        console.log(this.detailsPage)
      }
    },
    // 关闭弹框
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
<style
  scoped
  lang="scss"
    >
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.head {
  margin-right: 30px;
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
  margin-right: 120px;
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
