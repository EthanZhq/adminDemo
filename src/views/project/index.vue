<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.search"
              placeholder="订单编号/用户/联系电话"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-select
              v-model="listQuery.status"
              placeholder="原订单状态"
              clearable
              class="filter-item select-box"
              style="width: 130px"
            >
              <el-option
                v-for="item in orderStatusArray"
                :key="item"
                :label="item.display_name"
                :value="item"
              />
            </el-select>
            <el-select
              v-model="listQuery.type"
              placeholder="申请类型"
              clearable
              class="filter-item select-box"
              style="width: 130px"
            >
              <el-option
                v-for="item in typeArray"
                :key="item"
                :label="item.display_name"
                :value="item"
              />
            </el-select>
            <el-select
              v-model="listQuery.exchange"
              placeholder="退换状态"
              clearable
              class="filter-item select-box"
              style="width: 130px"
            >
              <el-option
                v-for="item in exchangeStatusArray"
                :key="item"
                :label="item.display_name"
                :value="item"
              />
            </el-select>
            <el-select
              v-model="listQuery.process"
              placeholder="处理状态"
              clearable
              class="filter-item select-box"
              style="width: 130px"
            >
              <el-option
                v-for="item in processStatusArray"
                :key="item"
                :label="item.display_name"
                :value="item"
              />
            </el-select>
          </div>
          <div class="date">
            <div class="block">
              <el-date-picker
                v-model="time"
                align="left"
                type="date"
                placeholder="申请退款时间"
                :picker-options="pickerOption"
              />
            </div>
            <div class="block">
              <el-date-picker
                v-model="orderTime"
                align="left"
                type="date"
                placeholder="下单时间"
                :picker-options="pickerOption"
              />
            </div>
          </div>
        </div>
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-search"
        >搜索</el-button>
      </div>
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="tableData"
        stripe
        border
        fit
        highlight-current-row
        class="table"
      >
        <el-table-column
          type="selection"
          align="center"
          width="50"
          style="background-color:#000"
        />
        <el-table-column
          v-for="(item,idx) in tableHeader"
          :key="idx"
          :label="item.lable"
          :width="item.width"
          :align="item.align"
          :property="item.property"
        >
          <template slot-scope="scope">
            <router-link :to="'/after-sales-order/details/' + scope.row.id">
              <span>{{ scope.row[scope.column.property] }}</span>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="120"
        >
          <template slot-scope="scope">
            <router-link :to="'/after-sales-order/details/' + scope.row.id">
              <el-button
                type="primary"
                size="small"
              >查看</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show="total>0"
      :page.sync="listQuery.page"
      :total="total"
      :limit.sync="listQuery.limit"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      listQuery: {
        search: '',
        type: '',
        status: '',
        exchange: '',
        process: '',
        page: 10,
        limit: 10
      },
      orderStatusArray: ['待发货', '待收货', '待评价', '已完成', '全部'],
      typeArray: ['仅退款', '退货退款', '换货', '全部'],
      exchangeStatusArray: ['待付款', '待发货', '待收货', '待评价', '已完成', '交易关闭', '全部'],
      processStatusArray: ['待通过', '已通过', '未通过', '全部'],
      listLoading: false,
      downloadLoading: false,
      total: 60,
      pickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
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
        }]
      },
      orderTime: '',
      time: '',
      tableHeader: [
        {
          lable: '订单编号',
          width: '180',
          align: 'center',
          property: 'id'
        },
        {
          lable: '退款编号',
          width: '180',
          align: 'center',
          property: 'id'
        },
        {
          lable: '用户',
          width: '180',
          align: 'center',
          property: 'user'
        },
        {
          lable: '下单时间',
          width: '180',
          align: 'center',
          property: 'timestamp'
        },
        {
          lable: '联系电话',
          width: '160',
          align: 'center',
          property: 'tel'
        },
        {
          lable: '原订单状态',
          width: '100',
          align: 'center',
          property: ''
        },
        {
          lable: '订单总价',
          width: '180',
          align: 'center',
          property: 'price'
        },
        {
          lable: '申请退款时间',
          width: '180',
          align: 'center',
          property: 'timestamp'
        },
        {
          lable: '订单状态',
          width: '180',
          align: 'center',
          property: 'status'
        },
        {
          lable: '处理状态',
          width: '',
          align: 'center',
          property: ''
        }
      ],
      tableData: [
        {
          id: 2019112809346666,
          user: '骑着毛驴上高速',
          name: '洛冰河',
          time: '2019-12-12 12:00:00',
          tel: '13609249980',
          company: '韵达快递',
          cost: '10.00',
          number: '2',
          status: '未发货',
          price: '120.00 + 8000积分',
          timestamp: '2019-12-12 12:00:00'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="scss">
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
    margin: 0 16px;
    .title {
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search-inp {
        margin-right: 12px;
      }
      .date {
        display: flex;
        margin-top: 16px;
      }
      .select-box {
        margin-right: 16px;
      }
      .block {
        margin-right: 16px;
      }
    }
    .table {
      width: 100%;
      margin-top: 12px;
      border-radius: 10px;
    }
    .el-table,
    .el-table__expanded-cell {
      background: none;
      width: 100%;
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .pagination-container {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
}
.el-switch__label * {
  font-size: 12px;
}
.flag .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
</style>
