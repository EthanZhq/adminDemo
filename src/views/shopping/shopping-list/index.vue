<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.GName"
              placeholder="搜索"
              style="width: 200px;"
              class="filter-item search-inp"
            />
            <el-select v-model="listQuery.isOnSale" placeholder="上架状态" clearable class="filter-item select-box" style="width: 130px">
              <el-option v-for="item in isOnSale" :key="item.key" :label="item.state" :value="item.key" />
            </el-select>
          </div>
          <div class="btn">
            <el-button
                class="filter-item"
                type="primary"
                @click="handleDelete"
              >批量删除</el-button>
              <el-button
                class="filter-item"
                type="primary"
                @click="goAdd"
              >新建</el-button>
              <el-button
                class="filter-item"
                type="primary"
              >修改</el-button>
              <el-button
                v-waves
                :loading="downloadLoading"
                class="filter-item"
                type="primary"
                @click="handleDownload"
              >导出</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" @click="handleFilter">查询</el-button>
      </div>
      <el-table
        :key="tableKey"
        ref="multipleTable"
        v-loading="listLoading"
        element-loading-spinner="el-icon-loading"
        :data="tableData"
        stripe
        border
        fit
        highlight-current-row
        class="table"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          align="center"
          width="50"
          style="background-color:#000"
        >
        </el-table-column>
        <el-table-column label="商品名称" fixed width="250px">
          <template slot-scope="{ row }">
            <div class="shopping-box">
              <div class="img">
                <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="" class="shopping-pic">
              </div>
              <span class="shopping-name">{{ row.gname }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="商品编码" align="center" width="160">
          <template slot-scope="{ row }">
            <span>{{ row.gcode }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品分类" prop="classify" align="center" width="120">
          <template slot-scope="{ row }">
            <span>{{ row.typeName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="560" align="center">
          <template slot-scope="{ row }">
            <div class="card-box" v-if="row.priceList != ''">
              <div class="card"
                v-for="(item,index) in row.priceList"
                :key="index"
              >
                <div class="way">{{item.type}}</div>
                <div class="price">{{ item.price }}</div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="总销量" align="center" width="100px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.scount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="实际销量" align="center" width="100px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.salesNum }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品上下架" align="center" width="200px">
          <template slot-scope="{ row }">
            <el-switch
              v-model="row.gstatus"
              class="flag"
              active-text="上架"
              inactive-text="下架"
              :active-value="1"
              :inactive-value="0"
              @change="switchChange(row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="上下架时间" width="180px" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.ptime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" prop="id" sortable="custom" align="center" width="80px">
          <template slot-scope="{ row }">
            <span class="link-type">{{ row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="240">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="creat(scope)">评论</el-button>
            <el-button type="primary" size="small">查看</el-button>
            <el-button type="primary" size="small" @click="handleDel(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination v-show="total>0" :page.sync="listQuery.page" :total="total" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'
import { getList, batchDelete, searchList, upDown } from '@/api/shopping'
export default {
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      total: 0,
      listQuery: {
        GName: '',
        isOnSale: '',
        page: 1,
        limit: 10
      },
      listLoading: false,
      downloadLoading: false,
      tableKey: 0,
      tableData: [],
      tableDataAmount: [],
      gIds: [],
      isOnSale: [
        { key: '1', state: '上架' },
        { key: '0', state: '下架' }
      ]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.tableData = response.data
        this.tableData.forEach(item => {
          item.priceList.forEach(j => {
            if(j.type === 0) {
              j.type = '0元购'
            } else if (j.type === 1) {
              j.type = '积分抵扣'
            } else {
              j.type = '现金购'
            }
          })
        })
        this.total = response.count
        setTimeout(() => {
          this.listLoading = false
        }, 1000)
      })
    },
    handleFilter() {
      if (this.listQuery.GName === '' && this.listQuery.isOnSale === '') {
        this.$message.error('请输入查询内容')
      } else {
        this.listQuery.page = 1
        this.getList()
      }
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data
    },
    handleDelete() {
      const idArray = this.tableDataAmount
      if (idArray != '') {
        idArray.forEach(k => {
          this.gIds.push(k.gid)
        })
        this.$confirm('确定删除此组标签?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async() => {
            await batchDelete(this.gIds)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getList()
          })
          .catch(err => { console.error(err) })
      } else {
        this.$message.error('请选择需要删除的商品')
      }
    },
    handleDel({ $index, row }) {
      this.gIds.push(row.gid)
      this.$confirm('确定删除此条标签?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await batchDelete(this.gIds)
          this.tableData.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getList()
        })
        .catch(err => { console.error(err) })
    },
    switchChange(row) {
      console.log(row)
      const data = {
        gId: row.gid,
        status: row.gstatus
      }
      upDown(data).then(response => {
        this.getList()
      })
    },
    goAdd() {
      this.$router.push({ path: '/shopping-list/add' })
    },
    creat(scope) {
      this.$router.push({
        path:'/shopping-list/creat/',
        query: {
          id: scope.row.gid,
          container: scope.row.gname
        }
      })
    },
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
        flex-wrap: wrap;
        .card{
          padding: 2px 12px;
          display: flex;
          align-items: center;
          border: 1px solid #e0242e;
          border-radius: 20px;
          font-size: 14px;
          margin-right: 16px;
          color: #e0242e;
          .price{
            padding-left: 4px
          }
        }
        .card:last-child{
          margin: 0
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
