<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div style="width:100%;">
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
            <div class="block" style="margin-right:16px">
              <el-date-picker
                v-model="orderTime"
                align="right"
                type="date"
                placeholder="评论时间"
                :picker-options="pickerOption">
              </el-date-picker>
            </div>
            <el-select v-model="listQuery.type" placeholder="商品评价等级" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.flag" placeholder="是否显示" clearable class="filter-item select-box" style="width: 110px">
              <el-option v-for="item in flag" :key="item" :label="item.isShow" :value="item" />
            </el-select>
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
            >批量删除</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
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
          style="background-color:#000;"
        >
        </el-table-column>
        <el-table-column label="用户" align="center" width="180">
          <template slot-scope="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评价内容" :show-overflow-tooltip = 'true' align="center" width="500">
          <template slot-scope="{ row }">
            <span>{{ row.container }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品" align="center"  width="120">
          <template slot-scope="{ row }">
            <span>{{ row.shopping }}</span>
          </template>
        </el-table-column>
        <el-table-column label="规格" align="center" width="180">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.specification }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评价等级" align="center" width="100">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.grade }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" align="center" width="200">
          <template slot-scope="{ row }">
            <el-switch
              v-model="row.flag"
              active-color="#2f66ff"
              inactive-color="#999"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="评论时间" width="180" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" prop="code" sortable="custom" align="center" width="80">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <router-link :to="'/comment/detail/' + scope.row.id">
              <el-button type="primary" size="small">查看</el-button>
            </router-link>
            <router-link :to="'/comment/creat-comment/' + scope.row.id">
              <el-button type="primary" size="small">创建评论</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination v-show="total>0" hide-on-single-page :page.sync="listQuery.page" :total="total" :limit.sync="listQuery.limit"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      orderTime: '',
      total: 10,
      listQuery: {
        search: '',
        type: '',
        flag: '',
        page: 6,
        limit: 10
      },
      listLoading: false,
      downloadLoading: false,
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
      flag: [
        {
          key: 0,
          isShow: '是'
        },
        {
          key: 1,
          isShow: '否'
        }
      ],
      list: [
        {
          id: '0',
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
<style lang="scss" scoped>
.wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 55px);
  width: 100%;
  padding: 16px 16px 0;
  .container{
    flex: 1;
    overflow-y: scroll;
    background: #f1f4f6;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    .title{
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
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
  width: 100%;
}
</style>
