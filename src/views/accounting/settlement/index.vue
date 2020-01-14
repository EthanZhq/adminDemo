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
              placeholder="请选择项目"
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
              placeholder="请选择佣金类型"
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
              placeholder="请选择结算类型"
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
              placeholder="是否退佣"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-left: 150px;">
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
      </div>

      <div class="head">
        <el-button
          type="primary"
          plain
          @click="open(0)"
        >申请结算</el-button>
        <el-button
          type="primary"
          plain
          @click="open(1)"
        >退 佣</el-button>
        <el-button
          plain
          style="background:#F3F3F3;color:#1c1c1c;"
          @click="open(2)"
        >导 出</el-button>
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
            label="结算编号"
            width="180"
          >U2019100001</el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="150"
          >万科新都荟
          </el-table-column>
          <el-table-column
            prop="address"
            label="房源信息"
            width="150"
          >1期99栋1单元202</el-table-column>
          <el-table-column
            prop="commissioned"
            label="面积（m²）"
            width="120"
          >99.87</el-table-column>

          <el-table-column
            prop="commission"
            label="成交总价(元)"
            width="120"
          >5436123.31</el-table-column>
          <el-table-column
            prop="lossCommission"
            label="购房者名称"
            width="120"
          >李四</el-table-column>
          <el-table-column
            prop="organization"
            label="联系方式"
            width="120"
          >未结算</el-table-column>
          <el-table-column
            prop="whether"
            label="开票状态"
            width="120"
          >15295549911</el-table-column>

          <el-table-column
            prop="date"
            label="交易状态"
            width="120"
          >认筹</el-table-column>
          <el-table-column
            prop="state"
            label="业绩确认"
            width="120"
          >己确认</el-table-column>
          <el-table-column
            prop="state"
            label="推荐人"
            width="160"
          >张三</el-table-column>

          <el-table-column
            prop="state"
            label="经纪门店"
            width="120"
          >集庆门店</el-table-column>
          <el-table-column
            prop="state"
            label="经纪公司"
            width="120"
          >链家</el-table-column>
          <el-table-column
            prop="state"
            label="佣金类型"
            width="120"
          >带看费</el-table-column>
          <el-table-column
            prop="state"
            label="佣金方式"
            width="120"
          >按次定价</el-table-column>
          <el-table-column
            prop="state"
            label="定价方式"
            width="120"
          >固定定价</el-table-column>
          <el-table-column
            prop="state"
            label="定价标准"
            width="120"
          >50000</el-table-column>
          <el-table-column
            prop="state"
            label="应结佣金"
            width="120"
          >50000</el-table-column>

          <el-table-column
            prop="state"
            label="己结佣金"
            width="120"
          >50000</el-table-column>
          <el-table-column
            prop="state"
            label="剩余佣金"
            width="120"
          >50000</el-table-column>
          <el-table-column
            prop="state"
            label="结算状态"
            width="120"
          ><span style="color:#108EE9">分批结</span>
          </el-table-column>
          <el-table-column
            prop="state"
            label="己收票据额"
            width="120"
          >50000</el-table-column>
          <el-table-column
            prop="state"
            label="是否退佣"
            width="160"
          >否
          </el-table-column>
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

    <applyPage
      :apply-page="applyPage"
      @cancel="cancels(0)"
    />
    <returnCommission
      :return-commission="returnCommission"
      @cancel="cancels(1)"
    />
  </div>
</template>

<script>
import ApplyPage from './applyPage'
import ReturnCommission from './returnCommission'
export default {
  components: {
    ApplyPage, ReturnCommission
  },
  data() {
    return {
      applyPage: false,
      returnCommission: false,
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
      if (state === 0) {
        console.log(this.applyPage)
        this.applyPage = true
        console.log(this.applyPage)
      }
      if (state === 1) {
        console.log(this.returnCommission)
        this.returnCommission = true
        console.log(this.returnCommission)
      }
    },
    cancels(state) {
      if (state === 0) {
        this.applyPage = false
        console.log(this.applyPage)
      }
      if (state === 1) {
        this.returnCommission = false
        console.log(this.returnCommission)
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
