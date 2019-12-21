<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.search"
              placeholder="搜索"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-select v-model="listQuery.type" placeholder="商品三级分类" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="上架状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="商品二级分类" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="选择商品标签" clearable class="filter-item select-box" style="width: 160px">
              <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
          </div>
          <div class="btn">
            <el-button
                class="filter-item"
                type="primary"
              >批量删除</el-button>
              <el-button
                class="filter-item"
                type="primary"
              >新建评论</el-button>
              <el-button
                class="filter-item"
                type="primary"
              >新建</el-button>
              <el-button
                class="filter-item"
                type="primary"
                icon="el-icon-edit"
              >修改</el-button>
              <el-button
                v-waves
                :loading="downloadLoading"
                class="filter-item"
                type="primary"
                icon="el-icon-download"
                @click="handleDownload"
              >导出</el-button>
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
        <el-table-column label="商品名称" width="250px">
          <template slot-scope="{ row }">
            <div class="shopping-box">
              <div class="img">
                <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="" class="shopping-pic">
              </div>
              <span class="shopping-name">{{ row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="商品编码" align="center" width="160">
          <template slot-scope="{ row }">
            <span>{{ row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品分类" prop="classify" align="center" width="120">
          <template slot-scope="{ row }">
            <span>{{ row.classify }}</span>
          </template>
        </el-table-column>
        <el-table-column label="价格" align="center">
          <template slot-scope="{ row }">
            <div class="card-box">
              <div class="card">
                <div class="way">积分抵扣</div>
                <div class="price">{{ row.price }}</div>
              </div>
              <div class="card-way">
                <div class="buy-way">现金购</div>
                <div class="price">{{ row.money }}</div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="总销量" align="center" width="100px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.num }}</span>
          </template>
        </el-table-column>
        <el-table-column label="实际销量" align="center" width="100px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品上下架" align="center" width="200px">
          <template slot-scope="{ row }">
            <el-switch
              v-model="row.flag"
              class="flag"
              active-text="上架"
              inactive-text="下架"
              active-color="#2f66ff"
              inactive-color="#999"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="上下架时间" width="180px" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" prop="id" sortable="custom" align="center" width="80px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.id }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination v-show="total>0" :page.sync="listQuery.page" :total="total" :limit.sync="listQuery.limit"/>
  </div>
</template>

<script>
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  directives: { waves },
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
          code: 1,
          name: '陕西红富士苹果',
          classify: '鞋子',
          num: '2000000',
          number: '43',
          price: '120.00 + 8000积分',
          money: '10000积分',
          timestamp: '2019-12-12 18:00:00',
          flag: 0
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200000',
          number: '43',
          price: '120.00 + 8000积分',
          money: '999',
          timestamp: '2019-12-12 20:00:00',
          flag: 1
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '360.00 + 8000积分',
          money: '521',
          timestamp: '2019-12-12 20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '250.00 + 8000积分',
          money: '1000',
          timestamp: '2019-12-12  20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '1200.00 + 8000积分',
          money: '100',
          timestamp: '2019-12-12 20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '250.00 + 8000积分',
          money: '1000',
          timestamp: '2019-12-12  20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '250.00 + 8000积分',
          money: '1000',
          timestamp: '2019-12-12  20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '250.00 + 8000积分',
          money: '1000',
          timestamp: '2019-12-12  20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '250.00 + 8000积分',
          money: '1000',
          timestamp: '2019-12-12  20:00:00'
        },
        {
          code: 1,
          name: '运动鞋',
          classify: '鞋子',
          num: '200',
          number: '43',
          price: '250.00 + 8000积分',
          money: '1000',
          timestamp: '2019-12-12  20:00:00'
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
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    }
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
      .shopping-box{
        display: flex;
        .img{
          width: 30px;
          height: 30px;
          border-radius: 8px;
          margin-right: 16px;
          .shopping-pic{
            width: 100%;
            height: 100%;
          }
        }
        .shopping-name{
          width: 80%;
        }
      }
      .card-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .card{
          width: 210px;
          padding: 0;
          display: flex;
          align-items: center;
          border: 1px solid #EBEEF5;
          border-radius: 6px;
          font-size: 14px;
          .way{
            background: #7cf2cf;
            color:#fff;
            padding: 4px 6px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          }
          .price{
            padding: 4px 6px;
          }
        }
        .card-way{
          width: 150px;
          padding: 0;
          display: flex;
          align-items: center;
          border: 1px solid #EBEEF5;
          border-radius: 6px;
          .buy-way{
            background: #f9d45c;
            color:#fff;
            padding: 4px 6px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          }
          .price{
            padding: 4px 6px;
          }
        }
      }
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
  /*打开时文字位置设置*/
  .flag .el-switch__label--right {
   z-index: 1;
   right: 0;
 }
 /*关闭时文字位置设置*/
 .flag .el-switch__label--left {
   z-index: 1;
   left: 19px;
 }
 /*显示文字*/
 .flag .el-switch__label.is-active {
   display: block;
 }
 .flag.el-switch .el-switch__core,
 .el-switch .el-switch__label {
   width: 60px !important;
   padding-right: 20px
 }
</style>
