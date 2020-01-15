<template>
  <div>
    <div style="padding:0 30px">
      <div class="head">
        <div>
          <el-input
            v-model="input"
            style="width:200px;"
            placeholder="请输入项目名称"
            clearable
          />
        </div>
        <div>
          <el-select
            slot="prepend"
            v-model="selectArea"
            placeholder="请选择区域"
          >
            <el-option
              label="南京"
              value="1"
            />
            <el-option
              label="上海"
              value="2"
            />
            <el-option
              label="杭州"
              value="3"
            />
          </el-select>
        </div>
        <div>
          <el-select
            slot="prepend"
            v-model="selectState"
            clearable
            placeholder="销售状态"
          >
            <el-option
              label="未设置"
              value="1"
            />
            <el-option
              label="未开始"
              value="2"
            />
            <el-option
              label="进行中"
              value="3"
            />
            <el-option
              label="已结束"
              value="4"
            />
          </el-select>
        </div>
        <div>
          <el-select
            slot="prepend"
            v-model="selectHot"
            clearable
            placeholder="是否热门"
          >
            <el-option
              label="是"
              value="1"
            />
            <el-option
              label="否"
              value="2"
            />
          </el-select>
        </div>

        <div>
          <el-select
            slot="prepend"
            v-model="selectShow"
            clearable
            placeholder="是否显示"
          >
            <el-option
              label="是"
              value="1"
            />
            <el-option
              label="否"
              value="2"
            />
          </el-select>
        </div>
        <div>
          <el-button type="primary">搜索</el-button>
        </div>
      </div>
      <div>
        <div style="padding-bottom:20px ;">
          <el-button
            type="primary"
            @click="configuration = true"
          >配置</el-button>

          <el-dialog
            title="配置"
            :visible.sync="configuration"
            width="70%"
            :before-close="handleClose"
          >
            <span>
              <configuration />
            </span>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="configuration = false">取 消</el-button>
              <el-button
                type="primary"
                @click="configuration = false"
              >确 定</el-button>
            </span>
          </el-dialog>
          <el-button
            type="primary"
            @click="dialogVisible = true"
          >终止合作</el-button>

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>
              <i class="el-icon-warning-outline" />
              <span style="margin-left：20px;">确定对选定项目进行终止合作吗？</span>
            </span>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="dialogVisible = false"
              >确 定</el-button>
            </span>
          </el-dialog>
          <el-button
            type="info"
            plain
          >修改记录</el-button>
        </div>

        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            prop="name"
            label="编号"
            width="180"
          >zj00000001</el-table-column>
          <el-table-column
            prop="address"
            label="项目名称"
            width="150"
          >万科都荟天地</el-table-column>
          <el-table-column
            prop="date"
            label="省市区"
            width="200"
          >江苏南京雨花</el-table-column>
          <el-table-column
            prop="name"
            label="销售状态"
            width="200"
          >以结束</el-table-column>
          <el-table-column
            prop="address"
            label="是否热门"
            width="100"
          >
            <el-switch
              v-model="hot"
              active-color="#13ce66"
              inactive-color="#13ce66"
              inactive-text="否"
              active-text="是"
              @click="isHot"
            />
          </el-table-column>
          <el-table-column
            prop="name"
            label="是否显示"
            width="150"
          >
            <el-switch
              v-model="value1"
              active-color="#13ce66"
              inactive-color="#13ce66"
              active-text="是"
              inactive-text="否"
            />
          </el-table-column>
          <el-table-column
            prop="date"
            label="合作时间段"
            width="200"
          >2019-05-25至2016-89-02</el-table-column>
          <el-table-column
            prop="address"
            label="创建时间"
            width="230"
          >2019-11-15 09：00：00</el-table-column>
          <el-table-column
            prop="address"
            label="创建人"
            width="150"
          >張三</el-table-column>
        </el-table>
        <div class="paging">
          <div class="paging-right">
            <el-pagination
              :current-page="currentPage4"
              :page-size="100"
              :total="400"
              :pager-count="5"
              :page-sizes="[100, 200, 300, 400]"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import configuration from '@/components/configuration/configguration.vue'
export default {
  components: {
    configuration
  },
  data() {
    return {
      // 选择区域
      selectArea: '',
      // 选择销售状态
      selectState: '',
      // 是否热门
      hot: true,
      selectHot: '',
      // 是否显示
      selectShow: '',
      tableData: [{}, {}, {}, {}, {}, {}, {}],
      value: '',
      value1: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      dialogVisible: false,
      configuration: false,
      outerVisible: false,
      innerVisible: false,
      currentPage4: 4
    }
  },
  methods: {
    isHot() {
      console.log(515)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.paging {
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .paging-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.head {
  display: flex;
  font-display: row;
  padding-bottom: 40px;

  div {
    margin-left: 20px;
  }
}
</style>
