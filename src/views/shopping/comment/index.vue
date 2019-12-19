<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.search"
              placeholder="用户"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-input
              v-model="listQuery.search"
              placeholder="商品名称"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-select v-model="listQuery.type" placeholder="评价时间" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="商品评价等级" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="是否显示" clearable class="filter-item select-box" style="width: 110px">
              <el-option v-for="item in flag" :key="item.key" :label="item.isShow" :value="item.key" />
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
              >删除</el-button>
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
        <el-table-column label="用户" align="center" width="180">
          <template slot-scope="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评价内容" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.container }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品" align="center"  width="120">
          <template slot-scope="{ row }">
            <span>{{ row.shopping }}</span>
          </template>
        </el-table-column>
        <el-table-column label="规格" align="center" width="180px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.specification }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评价等级" align="center" width="100px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.grade }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" align="center" width="200px">
          <template slot-scope="{ row }">
            <el-switch
              v-model="row.flag"
              inactive-color="#999"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="评论时间" width="180px" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" prop="code" sortable="custom" align="center" width="80px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.code }}</span>
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
      flag:[
        {
          key:0,
          isShow:'是'
        },
        {
          key:1,
          isShow:'否'
        }
      ],
      list: [
        {
          code: 1,
          name: '骑着毛驴上高速',
          container: '哎，一言难尽',
          shopping: '敌敌畏',
          specification: '600ml,1瓶',
          grade: '好评',
          timestamp: '2019-12-12 18:00:00',
          flag: 0
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
