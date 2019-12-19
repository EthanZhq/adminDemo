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
            <el-select v-model="listQuery.type" placeholder="原订单状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="申请类型" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="退换状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="处理状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="下单时间" clearable class="filter-item select-box" style="width: 240px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="申请退款时间" clearable class="filter-item select-box" style="width: 240px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
            >查看</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >通过</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >不通过</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >退款</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :key="tableKey"
        ref="multipleTable"
        v-loading="listLoading"
        :data="list"
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
        <el-table-column label="订单编号"  align="center" width="180">
          <template slot-scope="{ row }">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.user }}</span>
          </template>
        </el-table-column>
        <el-table-column label="下单时间" prop="classify" align="center" width="200">
          <template slot-scope="{ row }">
            <span>{{ row.time }}</span>
          </template>
        </el-table-column>
         <el-table-column label="数量" prop="classify" align="center" width="80">
          <template slot-scope="{ row }">
            <span>{{ row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="收货人" align="center" width="100">
          <template slot-scope="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="联系电话" align="center" width="160">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.tel }}</span>
          </template>
        </el-table-column>
        <el-table-column label="快递公司" align="center" width="120">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.company }}</span>
          </template>
        </el-table-column>
        <el-table-column label="物流费用" align="center" width="80">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.cost }}</span>
          </template>
        </el-table-column>
        <el-table-column label="发货状态" width="120" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column label="下单时间" align="center" width="180">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.timestamp }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单总价" align="center" width="180">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.price }}</span>
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
      tableKey: 0,
      list: [
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
