<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.search"
              placeholder="订单编号/用户"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-select v-model="listQuery.type" placeholder="请选择交易方式" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="订单状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="支付状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="发货状态" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
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
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
            >取消订单</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >查看</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >修改金额</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >拆单</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >发货</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" icon="el-icon-search">搜索</el-button>
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
            <router-link :to="'/all-order/detail/' + scope.row.id">
              <span>{{ scope.row[scope.column.property]}}</span>
            </router-link>
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
        type: '',
        page: 10,
        limit: 10
      },
      listLoading: false,
      downloadLoading: false,
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
      tableHeader:[
        {
          lable: '订单编号',
          width: '180',
          align: 'center',
          property: 'id'
        },

        {
          lable: '用户',
          width: '',
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
          width: '100',
          align: 'center',
          property: 'number'
        },
        {
          lable: '交易方式',
          width: '120',
          align: 'center',
          property: 'way'
        },
        {
          lable: '订单总金额',
          width: '180',
          align: 'center',
          property: 'price'
        },
        {
          lable: '应付金额',
          width: '180',
          align: 'center',
          property: 'money'
        },
        {
          lable: '订单状态',
          width: '120',
          align: 'center',
          property: 'orderStatus'
        },
        {
          lable: '支付状态',
          width: '120',
          align: 'center',
          property: 'status'
        },
        {
          lable: '发货状态',
          width: '120',
          align: 'center',
          property: 'deliveryStatus'
        },
        {
          lable: '快递',
          width: '120',
          align: 'center',
          property: 'express'
        }
      ],
      tableData: [
        {
          id: '2019112809346666',
          user: '骑着毛驴上高速',
          time: '2019-12-12 12:00:00',
          company: '韵达快递',
          cost: '10.00',
          number: '2',
          orderStatus: '待付款',
          deliveryStatus: '已发货',
          status: '未支付',
          price: '120.00 + 8000积分',
          money: '120.00 + 8000积分',
          express: '申通快递'
        },
        {
          id: 2019112809346666,
          user: '骑着毛驴上高速',
          time: '2019-12-12 12:00:00',
          company: '韵达快递',
          cost: '10.00',
          number: '2',
          orderStatus: '待付款',
          deliveryStatus: '已发货',
          status: '未支付',
          price: '120.00 + 8000积分',
          money: '120.00 + 8000积分',
          express: '申通快递'
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
<style lang="scss" scoped>
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
    margin: 0 16px 16px;
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
    }
    .table{
      width: 100%;
      margin-top:12px;
      border-radius:10px;
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }

}

</style>
<style>
.el-switch__label *{
  font-size: 12px
}
.flag .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
.pagination-container{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0
}
.el-table, .el-table__expanded-cell{
  background: none;
  width: 100%
}
</style>
