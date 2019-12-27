<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div>
          <div style="display:flex">
            <el-input
              v-model="listQuery.name"
              placeholder="标签名称"
              style="width: 200px;"
              class="filter-item search-inp"
            />
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
              @click="dialogVisible = true"
            >新建标签</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >批量删除</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" @click="handleSearch">查询</el-button>
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
          width="200">
          <template>
            <el-button type="primary" size="small">修改</el-button>
          </template>
          <template>
            <el-button type="primary" size="small" @click="handleDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination v-show="total>0" :page.sync="listQuery.page" :total="total" :limit.sync="listQuery.limit"/>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      top="16%"
    >
      <div>
        <span>标签名称</span>
        <el-input
          v-model="listQuery.name"
          placeholder="不超过10个字"
          style="width: 200px;"
          class="filter-item tags-inp"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getList } from '@/api/shopping'
export default {
  components: { Pagination },
  data() {
    return {
      total: 60,
      listQuery: {
        name: '',
        page: 10,
        limit: 10
      },
      listLoading: false,
      downloadLoading: false,
      dialogVisible: false,
      tableKey: 0,
      tableHeader: [
        {
          lable: '标签名称',
          width: '300',
          align: 'center',
          property: 'name'
        },

        {
          lable: '数量',
          width: '420',
          align: 'center',
          property: 'number'
        },
        {
          lable: '评论时间',
          width: '',
          align: 'center',
          property: 'time'
        }
      ],
      list: [
        {
          name: '最新',
          number: '2',
          time: '2020-12-12 12:00:00'
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
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await getList()
      console.log('商品列表')
    },
    handleSearch() {
      if(this.listQuery.name == '') {
        this.$message.error('请输入标签名称');
      }
    },
    handleDelete() {
      this.$confirm('确定删除此条标签?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteRole(row.key)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
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
  .tags-inp{
    margin-left: 12px
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
