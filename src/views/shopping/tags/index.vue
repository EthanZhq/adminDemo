<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.search"
              placeholder="标签名称"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-select v-model="listQuery.type" placeholder="创建时间" clearable class="filter-item select-box" style="width: 240px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
            >添加</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >修改</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >批量删除</el-button>
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
        <el-table-column label="标签名称"  align="center" width="300">
          <template slot-scope="{ row }">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品个数" align="center"  width="400">
          <template slot-scope="{ row }">
            <span>{{ row.user }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评论时间" align="center"  sortable="custom">
          <template slot-scope="{ row }">
            <span>{{ row.time }}</span>
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
