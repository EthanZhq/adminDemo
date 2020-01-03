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
            <div class="block" style="margin-right:16px">
              <el-date-picker
                v-model="listQuery.CTime"
                align="right"
                type="date"
                placeholder="创建时间"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOption"
              />
            </div>
          </div>
          <div class="btn">
            <el-button
              class="filter-item"
              type="primary"
              @click="handleAdd"
            >新建标签</el-button>
            <el-button
              class="filter-item"
              type="primary"
              @click="handleDel"
            >批量删除</el-button>
          </div>
        </div>
        <el-button class="filter-item" type="primary" @click="handleSearch">查询</el-button>
      </div>
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        element-loading-spinner="el-icon-loading"
        :data="tableData"
        stripe
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
        />
        <el-table-column
          v-for="(item,idx) in tableHeader"
          :key="idx"
          :label="item.lable"
          :width="item.width"
          :align="item.align"
          :property="item.property"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[scope.column.property] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="200"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope)">修改</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination v-show="total>0" :page.sync="listQuery.page" :total="total" :limit.sync="listQuery.limit" @pagination="getList" />
    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogType==='edit'?'修改':'添加'"
      width="30%"
      top="16%"
    >
      <div>
        <span>标签名称</span>
        <el-input
          v-model="temp.tagName"
          maxlength="10"
          placeholder="不超过10个字"
          style="width: 200px;"
          class="filter-item tags-inp"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmTags()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getList, creatTags, deleteTags, editTags } from '@/api/tags'
const defaultRole = {
  tagName: ''
}
export default {
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        CTime: '',
        name: '',
        page: 1,
        limit: 10
      },
      id: '',
      edit: {
        name: ''
      },
      temp: Object.assign({}, defaultRole),
      tempId: [],
      dialogType: 'new',
      listLoading: false,
      dialogVisible: false,
      tableData: [],
      tableDataAmount: [],
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
      tableHeader: [
        {
          lable: '标签名称',
          width: '300',
          align: 'center',
          property: 'name'
        },

        {
          lable: '标签绑定商品数',
          width: '420',
          align: 'center',
          property: 'gnum'
        },
        {
          lable: '创建时间',
          width: '',
          align: 'center',
          property: 'ctime'
        }
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
      console.log(this.listQuery.CTime)
      if (this.listQuery.name === '' && this.listQuery.CTime === '') {
        this.$message.error('请输入查询内容')
      } else {
        this.listQuery.page = 1
        this.getList()
      }
    },
    handleAdd() {
      this.dialogType = 'new'
      this.dialogVisible = true
      this.temp = Object.assign({}, defaultRole)
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.temp.tagName = scope.row.name
      this.id = scope.row.id
    },
    confirmTags() {
      const isEdit = this.dialogType === 'edit'
      this.edit.name = this.temp.tagName
      if (isEdit) {
        editTags(this.id, this.edit).then(response => {
          this.getList()
          this.dialogVisible = false
        })
      } else {
        this.dialogVisible = false
        creatTags(this.temp).then(response => {
          this.getList()
          this.dialogVisible = false
        })
      }
    },
    handleDel() {
      const idArray = this.tableDataAmount
      console.log(idArray)
      if (idArray != '') {
        idArray.forEach(k => {
          this.tempId.push(k.id)
        })
        this.$confirm('确定删除此组标签?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async() => {
            await deleteTags(this.tempId)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getList()
          })
          .catch(err => { console.error(err) })
      } else {
        this.$message.error('请选择需要删除的标签')
      }
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data
    },
    handleDelete({ $index, row }) {
      this.tempId.push(row.id)
      this.$confirm('确定删除此条标签?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteTags(this.tempId)
          this.tableData.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getList()
        })
        .catch(err => { console.error(err) })
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
  }
  .container::-webkit-scrollbar {
    display:none
  }
  .tags-inp{
    margin-left: 12px
  }

}

</style>
<style>
.pagination-container{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0
}
</style>
