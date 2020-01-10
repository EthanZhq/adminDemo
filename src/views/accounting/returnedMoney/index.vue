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
          <div style="margin-left: 200px;">
            <el-button type="primary">搜索</el-button>
          </div>

        </div>
      </div>

      <div class="head">
        <el-button
          type="primary"
          plain
        >生成业绩确认单</el-button>
        <el-button
          type="primary"
          plain
        >业绩确认</el-button>
        <el-button
          type="primary"
          plain
        >跟进</el-button>
        <el-button
          type="primary"
          plain
        >退佣</el-button>
        <el-button
          plain
          style="background:#F3F3F3;color:#1c1c1c;"
        >查看</el-button>
        <el-button
          plain
          style="background:#F3F3F3;color:#1c1c1c;"
        >修改记录</el-button>
        <el-button
          plain
          style="background:#F3F3F3;color:#1c1c1c;"
        >修改记录</el-button>
      </div>
      <!-- 表格 -->
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width:95%"
          height="550"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            prop="id"
            label="回款编号"
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
          >1期99栋1单元</el-table-column>
          <el-table-column
            prop="area"
            label="面积（m²）"
            width="100"
          >99.87</el-table-column>
          <el-table-column
            prop="totalPrice"
            label="成交总价(元)"
            width="120"
          >5436123.31</el-table-column>
          <el-table-column
            prop="buyName"
            label="购房人姓名"
            width="100"
          >李四
          </el-table-column>
          <el-table-column
            prop="tel"
            label="联系方式"
            width="120"
          >
            15295549911
          </el-table-column>
          <el-table-column
            prop="state"
            label="交易状态"
            width="100"
          > 认筹</el-table-column>
          <el-table-column
            prop="type"
            label="佣金类型"
            width="100"
          >带看费</el-table-column>
          <el-table-column
            prop="commissionMeans"
            label="佣金方式"
            width="100"
          >按次定价</el-table-column>
          <el-table-column
            prop="pricingMode"
            label="定价方式"
            width="100"
          >固定定价</el-table-column>
          <el-table-column
            prop="standard"
            label="佣金标准"
            width="100"
          >带看费</el-table-column>
          <el-table-column
            prop="referrer"
            label="推荐人"
            width="100"
          >张三</el-table-column>
          <el-table-column
            prop="organization"
            label="推荐机构"
            width="100"
          >链家</el-table-column>
          <el-table-column
            prop="commissioned"
            label="应结佣金"
            width="100"
          >50000</el-table-column>
          <el-table-column
            prop="commission"
            label="实结佣金"
            width="100"
          >30000</el-table-column>
          <el-table-column
            prop="lossCommission"
            label="损失佣金"
            width="100"
          >20000</el-table-column>
          <el-table-column
            prop="organization"
            label="回款状态"
            width="100"
          > <span style="color:#108EE9">未结算</span> </el-table-column>
          <el-table-column
            prop="whether"
            label="是否退佣"
            width="100"
          >否</el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
            width="100"
          >2019-11-15 08:00:00</el-table-column>
          <el-table-column
            prop="创建人"
            label="创建人"
            width="100"
          >李四</el-table-column>
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
      tableData: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
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

