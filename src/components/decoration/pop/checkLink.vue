<template>
  <el-dialog
    title="页面"
    :visible.sync="dialogVisible"
    @close="submit(0)"
    width="45%"
    custom-class="dialog"
  >
    <el-tabs v-model="active" type="card">
      <el-tab-pane
        label="商品分组"
        name="first"
        style="height:400px;overflow-y:auto;overflow-x:hidden;"
      >
        <el-tree
          :data="groupList"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
        ></el-tree>
      </el-tab-pane>
      <el-tab-pane
        label="商品详情"
        name="second"
        style="height:400px;overflow-y:auto;overflow-x:hidden;"
      >
        <div class="detail">
          <div class="detail-top">
            <el-input placeholder="请输入商品名称" prefix-icon="el-icon-search" style="width:30%"></el-input>
            <el-select style="width:120px;" v-model="group" placeholder="请选择分组">
              <el-option
                v-for="item in groupList"
                :key="item.id"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
            <el-button>搜索</el-button>
            <el-checkbox v-model="isChecked">只显示已上架商品</el-checkbox>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span slot="footer" class="dialog-footer">
      <el-button @click="submit(0)">取 消</el-button>
      <el-button type="primary" @click="submit(1)">确 认</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      active: "first",
      groupList: [
        {
          id: 1,
          label: "食品",
          children: [
            {
              id: 4,
              label: "今日尝鲜"
            },
            {
              id: 5,
              label: "今日特价"
            }
          ]
        },
        {
          id: 2,
          label: "食品",
          children: [
            {
              id: 6,
              label: "南方风味"
            }
          ]
        },
        {
          id: 3,
          label: "食品",
          children: [
            {
              id: 7,
              label: "东南亚风味"
            },
            {
              id: 8,
              label: "欧洲小食"
            }
          ]
        }
      ],
      group: "",
      isChecked: false,
      dialogVisible: false
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  watch: {
    isShow(newVal) {
      console.log(newVal);
      this.dialogVisible = newVal;
    }
  },
  methods: {
    submit(e) {
      // if(e==0){
      //   this.type=this.component.options.type
      // }else{
      //   this.component.options.type=this.type
      //   this.$emit('on-change-list',this.component.options)
      // }
      this.$emit("on-close-dialog", false);
      // this.dialogVisible = false
    }
  }
};
</script>
<style scoped lang="scss">
</style>
