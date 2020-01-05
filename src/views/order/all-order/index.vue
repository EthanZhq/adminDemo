<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="search-container">
        <div style="display:flex">
          <el-input
            v-model="listQuery.condition"
            placeholder="订单编号/用户"
            style="width: 200px;"
            class="filter-item block"
          />
          <el-select
            v-model="listQuery.payBy"
            placeholder="请选择支付方式"
            clearable
            class="filter-item block"
            style="width: 160px"
          >
            <el-option v-for="row in payBy" :key="row.key" :label="row.way" :value="row.key" />
          </el-select>
          <el-select
            v-model="listQuery.OStatus"
            placeholder="订单状态"
            clearable
            class="filter-item block"
            style="width: 130px"
          >
            <el-option
              v-for="item in orderStatus"
              :key="item.key"
              :label="item.status"
              :value="item.key"
            />
          </el-select>
          <div class="block">
            <el-date-picker
              v-model="listQuery.time"
              align="right"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="下单时间"
              style="width:160px"
              :picker-options="pickerOption"
            />
          </div>
          <el-button class="filter-item" type="primary" @click="handleFilter">查询</el-button>
        </div>
        <div class="btn">
          <el-button class="filter-item" type="primary">批量取消订单</el-button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        element-loading-spinner="el-icon-loading"
        :data="tableData"
        stripe
        border
        fit
        highlight-current-row
        class="table"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" width="50" style="background-color:#000" />
        <el-table-column
          v-for="(item,idx) in tableHeader"
          :key="idx"
          :label="item.lable"
          :width="item.width"
          :align="item.align"
          :property="item.property"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[scope.column.property] }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show="total>0"
      :page.sync="listQuery.page"
      :total="total"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getList } from '@/api/order'
export default {
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        OStatus: '',
        condition: '',
        payBy: '',
        time: '',
        page: 1,
        limit: 10
      },
      tableDataAmount: [],
      listLoading: false,
      pickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      payBy: [
        { key: '0', way: '微信支付' },
        { key: '1', way: '银联支付' },
        { key: '2', way: '余额支付' }
      ],
      orderStatus: [
        { key: '0', status: '待支付' },
        { key: '1', status: '待发货' },
        { key: '2', status: '待收货' },
        { key: '3', status: '待评价' },
        { key: '4', status: '已完成' },
        { key: '5', status: '交易完成' }
      ],
      tableHeader: [
        {
          lable: '订单编号',
          width: '180',
          align: 'center',
          property: 'ocode'
        },

        {
          lable: '用户',
          width: '',
          align: 'center',
          property: 'memberName'
        },
        {
          lable: '下单时间',
          width: '200',
          align: 'center',
          property: 'addTime'
        },
        {
          lable: '数量',
          width: '100',
          align: 'center',
          property: 'num'
        },
        {
          lable: '支付方式',
          width: '120',
          align: 'center',
          property: 'payBy'
        },
        {
          lable: '订单总金额',
          width: '200',
          align: 'center',
          property: 'totalPrice'
        },
        {
          lable: '应付金额',
          width: '200',
          align: 'center',
          property: 'payable'
        },
        {
          lable: '订单状态',
          width: '120',
          align: 'center',
          property: 'ostatus'
        },
        {
          lable: '快递',
          width: '120',
          align: 'center',
          property: 'shippingName'
        }
      ],
      tableData: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取表格数据
    getList() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.tableData = response.data
        this.total = response.count
        setTimeout(() => {
          this.listLoading = false
        }, 1000)
      })
    },
    // 查询
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    // 查看、修改
    handleEdit(scope) {
      this.$router.push({
        path: '/all-order/detail/',
        query: {
          id: scope.row.oid
        }
      })
    },
    // 批量选中
    handleSelectionChange(data) {
      this.tableDataAmount = data
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 55px);
  .container {
    flex: 1;
    overflow-y: scroll;
    padding: 16px;
    background: #f1f4f6;
    border-radius: 10px;
    margin: 0 16px 16px;
    .search-container {
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      .block {
        margin-right: 16px;
      }
      .btn {
        margin-top: 16px;
      }
    }
    .table {
      width: 100%;
      margin-top: 12px;
      border-radius: 10px;
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
}
</style>
<style>
.pagination-container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.el-table,
.el-table__expanded-cell {
  background: none;
  width: 100%;
}
</style>
