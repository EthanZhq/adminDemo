<template>
  <div>
    <div>我是楼栋管理</div>
    <div style="padding:0 30px">
      <div>
        <div style="margin-top: 15px;display:flex;">
          <el-input
            v-model="input"
            style="width:200px;marging-right:20px;"
            placeholder="请输入项目名称"
            clearable
          />
          <div style="margin-left: 20px;">
            <el-select v-model="value" clearable placeholder="请选择项目区域">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div style="margin-left: 20px;">
            <el-select v-model="effect" clearable placeholder="是否有效">
              <el-option
                v-for="item in valid"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="head-right">
            <el-button type="primary" plain>搜索</el-button>
            <el-button type="primary" plain @click="newAdd = true">新增</el-button>
            <el-dialog title="新增" :visible.sync="newAdd" width="60%">
              <span>
                <newAdd />
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="newAdd = false">取 消</el-button>
                <el-button type="primary" @click="newAdd = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="head">
        <el-button type="primary" plain @click="change = true">编辑</el-button>
        <el-dialog title="修改" :visible.sync="change" width="60%">
          <span>
            <change />
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="change = false">取 消</el-button>
            <el-button type="primary" @click="change = false">确 定</el-button>
          </span>
        </el-dialog>

        <el-button type="primary">有效</el-button>

        <el-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
          <span>
            <div>
              <i class="el-icon-warning-outline" />
              确定选项中的数据设为无效吗？
            </div>
            <div style="margin-left: 18px;">
              <span style="color:#d17479;">未开始营销规则自动删除</span>
              <span>您还要继续吗？</span>
            </div>
          </span>
          <span slot="footer" class>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>

        <el-button
          plain
          style="background:#a6a6a6;color:#1c1c1c;margin-left:10px;"
          @click="dialogVisible = true"
        >失效</el-button>
        <el-button plain style="background:#a6a6a6;color:#1c1c1c;">修改记录</el-button>
      </div>
      <!-- 表格 -->
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="name" label="项目编号" width="180">zj00000001</el-table-column>
          <el-table-column prop="address" label="项目名称" width="150">万科都荟天地</el-table-column>
          <el-table-column prop="date" label="省市区" width="230">江苏南京雨花</el-table-column>
          <el-table-column prop="name" label="项目地址" width="230">南京南站北广场</el-table-column>
          <el-table-column prop="address" label="期数" width="100">1</el-table-column>
          <el-table-column prop="date" label="楼栋号" width="100">1</el-table-column>
          <el-table-column prop="name" label="是否有效" width="150">
            <el-switch
              v-model="effect"
              active-color="#13ce66"
              inactive-color="#13ce66"
              active-text="是"
              inactive-text="否"
            />
          </el-table-column>
          <el-table-column prop="address" label="创建时间" width="230">2019-11-15 09：00：00</el-table-column>
          <el-table-column prop="address" label="创建人" width="150">張三</el-table-column>
        </el-table>
      </div>
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
</template>
<script>
import change from '@/components/project/building/change.vue'
import newAdd from '@/components/project/building/newAdd.vue'
// import ThemeSettings from '@/components/theme/theme-settings'
// import ThemeView from '@/components/theme/theme-view'
export default {
  components: {
    newAdd,
    change
    // ThemeSettings,
    // ThemeView
  },
  data() {
    return {
      change: false,
      newAdd: false,
      dialogVisible: false,
      // 区域选择列表
      options: [
        {
          value: '选项1',
          label: '南京'
        },
        {
          value: '选项2',
          label: '北京'
        },
        {
          value: '选项3',
          label: '天津'
        },
        {
          value: '选项4',
          label: '西京'
        },
        {
          value: '选项5',
          label: '东京'
        }
      ],
      // 是否有效列表
      valid: [
        {
          valid: '选项1',
          value: '是'
        },
        {
          valid: '选项2',
          value: '否'
        }
      ],

      // 是否有效双向绑定
      effect: '',
      // 区域选择双向绑定
      value: '',
      input: '',
      value1: true,
      currentPage4: 10,
      tableData: [{}, {}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
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
<style scoped lang="scss">
.head-right {
  margin-left: 100px;
  button {
    background: #4171f9;
    color: #ffffff;
  }
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.head {
  height: 100px;
  align-items: center;
  display: flex;
  font-display: row;
  button {
    background: #4171f9;
    color: #ffffff;
  }
}
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
.container {
  position: relative;
  display: flex;
  padding: 15px 30px;
  color: #333;
  font-size: 15px;
}
</style>

