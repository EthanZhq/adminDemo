<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <el-button class="filter-item" type="primary" @click="goAdd">新增会员等级</el-button>
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
         <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="200">
          <template>
            <el-button type="primary" size="small">编辑</el-button>
            <el-button type="primary" size="small">删除</el-button>
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
          lable: '等级',
          width: '180',
          align: 'center',
          property: 'id'
        },

        {
          lable: '等级名称',
          width: '80',
          align: 'center',
          property: 'user'
        },
        {
          lable: '消费额度',
          width: '200',
          align: 'center',
          property: 'time'
        },
        {
          lable: '等级描述',
          width: '',
          align: 'center',
          property: 'number'
        }
      ],
      tableData: [
        {
          id: '2019112809346666',
          user: 'vip10',
          time: '2019-12-12 12:00:00',
          company: '韵达快递',
          cost: '10.00',
          number: '2',
          orderStatus: '待付款',
          deliveryStatus: '已发货',
          status: '未支付',
          price: '20',
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
    goAdd() {
      this.$router.push({path:'/memberGrade/add'})
    }
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
      padding: 24px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
