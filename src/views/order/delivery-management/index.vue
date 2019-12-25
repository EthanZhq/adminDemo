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
            <el-select v-model="listQuery.way" placeholder="请选择交易方式" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in TradingArray" :key="item" :label="item.display_name" :value="item" />
            </el-select>
            <el-select v-model="listQuery.company" placeholder="快递公司" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in companyArray" :key="item" :label="item.display_name" :value="item" />
            </el-select>
            <el-select v-model="listQuery.status" placeholder="发货状态" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in deliveryStatusArray" :key="item" :label="item.display_name" :value="item" />
            </el-select>
             <div class="block">
              <el-date-picker
                v-model="orderTime"
                align="right"
                type="date"
                placeholder="下单时间"
                :picker-options="pickerOption">
              </el-date-picker>
            </div>
            <div class="block">
              <el-date-picker
                v-model="time"
                align="right"
                type="date"
                placeholder="支付时间"
                :picker-options="pickerOption">
              </el-date-picker>
            </div>
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
            >批量取消订单</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >拆单</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :key="tableKey"
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
        >
        </el-table-column>
        <el-table-column
          v-for="(item,idx) in tableHeader"
          :key='idx'
          :label="item.lable"
          :width="item.width"
          :align="item.align"
          :property="item.property"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[scope.column.property]}}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="180">
          <template>
              <el-button type="primary" size="small">查看</el-button>
              <el-button
                type="primary"
                size="small"
              >发货</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination v-show="total>0" :page.sync="listQuery.page" :total="total" :limit.sync="listQuery.limit"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      total: 60,
      listQuery: {
        search: '',
        status: '',
        way: '',
        company: '',
        page: 10,
        limit: 10
      },
      TradingArray: ['0元购', '积分抵扣', '现金购', '全部'],
      companyArray: ['全部', 'EMS', '顺丰快递', '申通快递'],
      deliveryStatusArray: ['待发货', '已发货', '全部'],
      listLoading: false,
      downloadLoading: false,
      tableKey: 0,
      pickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        },
        {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        },
        {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      orderTime: '',
      time: '',
      tableHeader:[
        {
          lable: '订单编号',
          width: '180',
          align: 'center',
          property: 'id'
        },
        {
          lable: '用户',
          width: '160',
          align: 'center',
          property: 'user'
        },
        {
          lable: '下单时间',
          width: '200',
          align: 'center',
          property: 'time'
        },
        {
          lable: '数量',
          width: '80',
          align: 'center',
          property: 'number'
        },
        {
          lable: '收货人',
          width: '100',
          align: 'center',
          property: 'name'
        },
        {
          lable: '联系电话',
          width: '160',
          align: 'center',
          property: 'tel'
        },
        {
          lable: '快递公司',
          width: '120',
          align: 'center',
          property: 'company'
        },
        {
          lable: '物流费用',
          width: '80',
          align: 'center',
          property: 'cost'
        },
        {
          lable: '发货状态',
          width: '120',
          align: 'center',
          property: 'status'
        },
        {
          lable: '下单时间',
          width: '180',
          align: 'center',
          property: 'timestamp'
        },
        {
          lable: '订单总价',
          width: '180',
          align: 'center',
          property: 'price'
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
      ],
      calendarTypeOptions: [
        { key: 'CN', display_name: 'China' },
        { key: 'US', display_name: 'USA' },
        { key: 'JP', display_name: 'Japan' },
        { key: 'EU', display_name: 'Eurozone' }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 55px);
  .container{
    flex: 1;
    overflow-y: scroll;
    padding: 16px;
    background: #f1f4f6;
    border-radius: 10px;
    margin: 0 16px;
    .title{
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search-inp {
        margin-right: 12px;
      }
      .btn{
        margin-top: 16px
      }
      .select-box{
        margin-right: 16px
      }
      .block{
        margin-right: 16px
      }
    }
    .table{
      width: 100%;
      margin-top:12px;
      border-radius:10px;
    }
    .el-table, .el-table__expanded-cell{
      background: none;
      width: 100%
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }
  .pagination-container{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0
  }
}
.el-switch__label *{
  font-size: 12px
}
.flag .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
</style>
