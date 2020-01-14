<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="中介规则" name="first">
          <div>455</div>
        </el-tab-pane>
        <el-tab-pane label="开发商规则" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </div>
    <el-button type="配置机构" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="配置机构"
      fullscreen="true"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>
        <organization />
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>我是配置
  </div>
</template>

<script>
import organization from '@/components/project/building/organization.vue'
export default {
  components: {
    organization
  },
  data() {
    return {
      dialogVisible: false,
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style>
</style>
