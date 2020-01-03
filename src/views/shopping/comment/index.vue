<template>
  <div class='wrap'>
    <div class='app-container container'>
      <div class='filter-container title'>
        <div style='width:100%;'>
          <div style='display:flex'>
            <el-input
              v-model='listQuery.NName'
              placeholder='用户'
              style='width: 200px;'
              class='filter-item search-inp'
            />
            <el-input
              v-model='listQuery.GName'
              placeholder='商品名称'
              style='width: 200px;'
              class='filter-item search-inp'
            />
            <div class='block' style='margin-right:16px'>
              <el-date-picker
                v-model='listQuery.CTime'
                align='right'
                type='date'
                placeholder='评论时间'
                value-format='yyyy-MM-dd'
                :picker-options='pickerOption'
              />
            </div>
            <el-select
              v-model='listQuery.PRank'
              placeholder='商品评价等级'
              clearable
              class='filter-item select-box'
              style='width: 130px'
            >
              <el-option
                v-for='item in PRank'
                :key='item.key'
                :label='item.rank'
                :value='item.key'
              />
            </el-select>
            <el-select
              v-model='listQuery.isShow'
              placeholder='是否显示'
              clearable
              class='filter-item select-box'
              style='width: 110px'
            >
              <el-option v-for='k in isShow' :key='k.key' :label='k.flag' :value='k.key' />
            </el-select>
          </div>
          <div class='btn'>
            <el-button class='filter-item' type='primary' @click='handleDel'>批量删除</el-button>
          </div>
        </div>
        <el-button class='filter-item' type='primary' icon='el-icon-search' @click='handleSearch'>查询</el-button>
      </div>
      <el-table
        ref='multipleTable'
        v-loading='listLoading'
        :data='tableData'
        element-loading-spinner='el-icon-loading'
        stripe
        border
        fit
        highlight-current-row
        class='table'
        @selection-change='handleSelectionChange'
      >
        <el-table-column type='selection' align='center' width='50' style='background-color:#000;'></el-table-column>
        <el-table-column label='商品名称' align='center' width='180'>
          <template slot-scope='{ row }'>
            <span>{{ row.gname }}</span>
          </template>
        </el-table-column>
        <el-table-column label='用户' align='center' width='180'>
          <template slot-scope='{ row }'>
            <span>{{ row.nname }}</span>
          </template>
        </el-table-column>
        <el-table-column label='评价内容' :show-overflow-tooltip='true' align='center' width='500'>
          <template slot-scope='{ row }'>
            <span>{{ row.content }}</span>
          </template>
        </el-table-column>
        <el-table-column label='商品规格' align='center' width='240'>
          <template slot-scope='{ row }'>
            <span>{{ row.specChildName }}</span>
          </template>
        </el-table-column>
        <el-table-column label='评价等级' align='center' width='100'>
          <template slot-scope='{ row }'>
            <span class='link-type'>{{ row.grade }}</span>
          </template>
        </el-table-column>
        <el-table-column label='是否显示' align='center' width='200'>
          <template slot-scope='{ row }'>
            <el-switch
              v-model='row.isShow'
              :active-value='1'
              :inactive-value='0'
              @change='switchChange(row)'
            />
          </template>
        </el-table-column>
        <el-table-column label='评论时间' width='180' align='center'>
          <template slot-scope='{ row }'>
            <span>{{ row.ctime }}</span>
          </template>
        </el-table-column>
        <el-table-column label='排序' prop='code' sortable='custom' align='center' width='80'>
          <template slot-scope='{ row }'>
            <span class='link-type'>{{ row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed='right' align='center' label='操作' width='200'>
          <template slot-scope='scope'>
            <el-button type='primary' size='small' @click='goDetail(scope)'>查看</el-button>
            <el-button type='primary' size='small'>置顶</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show='total>0'
      hide-on-single-page
      :page.sync='listQuery.page'
      :total='total'
      :limit.sync='listQuery.limit'
      @pagination='getList'
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getList, deleteComments, editFlag } from '@/api/comment'
export default {
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        NName: '',
        GName: '',
        CTime: '',
        PRank: '',
        isShow: '',
        page: 1,
        limit: 10
      },
      listLoading: false,
      downloadLoading: false,
      tableDataAmount: [],
      tempId: [],
      pickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
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
          }
        ]
      },
      isShow: [{ key: 1, flag: '是' }, { key: 0, flag: '否' }],
      tableData: [],
      PRank: [
        { key: '1', rank: '非常差' },
        { key: '2', rank: '差' },
        { key: '3', rank: '一般' },
        { key: '4', rank: '好' },
        { key: '5', rank: '非常好' }
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
        this.total = response.count
        setTimeout(() => {
          this.listLoading = false
        }, 1000)
      })
    },
    handleSearch() {
      if (
        this.listQuery.NName === '' &&
        this.listQuery.GName === '' &&
        this.listQuery.CTime === '' &&
        this.listQuery.type === '' &&
        this.listQuery.flag === ''
      ) {
        this.$message.error('请输入查询内容')
      } else {
        this.listQuery.page = 1
        this.getList()
      }
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data
    },
    handleDel() {
      const idArray = this.tableDataAmount
      if (idArray !== '') {
        idArray.forEach(k => {
          this.tempId.push(k.cid)
        })
        this.$confirm('确定删除此组评论?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            await deleteComments(this.tempId)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getList()
          })
          .catch(err => {
            console.error(err)
          })
      } else {
        this.$message.error('请选择需要删除的评论')
      }
    },
    switchChange(row) {
      console.log(row)
      editFlag(row.cid).then(response => {
        this.getList()
      })
    },
    goDetail(scope) {
      this.$router.push({
        path: '/comment/detail/',
        query: {
          id: scope.row.cid
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 55px);
  width: 100%;
  padding: 16px 16px 0;
  .container {
    flex: 1;
    overflow-y: scroll;
    background: #f1f4f6;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    .title {
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
      .btn {
        margin-top: 16px;
      }
      .select-box {
        margin-right: 16px;
      }
    }
    .table {
      margin-top: 12px;
      border-radius: 10px;
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
}
</style>
<style>
.el-switch__label * {
  font-size: 12px;
}
.flag .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
.pagination-container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.el-table,
.el-table__expanded-cell {
  background: none;
  width: 100%;
}
</style>
