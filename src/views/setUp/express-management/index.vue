<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.search"
              placeholder="快递公司名称"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-input
              v-model="listQuery.search"
              placeholder="快递公司编码"
              style="width: 200px;"
              class="filter-item search-inp"
            />
          </div>
          <div class="btn">
            <el-button
                class="filter-item"
                type="primary"
            >批量删除</el-button>
            <el-button
                class="filter-item"
                type="primary"
            >添加快递公司</el-button>
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
        <el-table-column label="物流公司名称" align="center" width="">
          <template slot-scope="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="快递公司编码" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开启状态" align="center" width="200px">
          <template slot-scope="{ row }">
            <el-switch
              v-model="row.flag"
              inactive-color="#999"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px" align="center">
          <el-button
              class="filter-item"
              type="primary"
              icon="el-icon-edit"
          >编辑</el-button>
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
          code: 'yunda',
          name: '韵达快递',
          flag: 1
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
