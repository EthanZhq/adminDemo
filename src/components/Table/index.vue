<template>
  <div class="table-container">
    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="tableData"
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
          <div
            v-for="(k,index) in tableButton"
            :key="index"
          >
            <el-button type="primary" size="small">{{ k.btn }}</el-button>
          </div>
        </template>
        <!-- <template>
          <el-button type="primary" size="small">删除</el-button>
        </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableHeader: {
      type: Array,
      default: ''
    },
    tableData: {
      type: Array,
      default: ''
    },
    tableButton: {
      type: Array,
      default: ''
    }
  },
  data() {

  }
}
</script>
<style lang="scss" scoped>
.table-container{
  .table{
    border-radius: 10px
  }
}
</style>
