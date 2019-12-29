<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div class="btn">
          <el-button
            class="filter-item"
            type="primary"
            @click="foldAll"
          >折叠全部</el-button>
          <el-button
            class="filter-item"
            type="primary"
            @click="handleAdd"
          >新增一级分组</el-button>
        </div>
      </div>
      <div
        class="group"
        v-for="(item,idx) in groupList"
        :key="idx"
      >
        <div class="group-list">
          <div class="group-list-title" @click="showChild(item)">
              <span>{{item.name}}</span>
          </div>
          <div>
            <el-button
              class="filter-item"
              type="primary"
              @click="handleAddGroup"
            >新增二级分组</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >编辑</el-button>
            <el-button
              class="filter-item"
              type="primary"
              @click="handleDel(item)"
            >删除</el-button>
          </div>
        </div>
        <div v-if="item.selected === true">
          <div class="level-group"
            v-for="(k,index) in item.childs"
            :key="index"
          >
            <div>
              <span>{{ k.name }}</span>
            </div>
            <div>
              <span>商品数量</span>
              <span>{{ k.gnum }}</span>
            </div>
            <div>
              <el-button
                class="filter-item"
                type="primary"
              >编辑</el-button>
              <el-button
                class="filter-item"
                type="primary"
                @click="handleDelGroup(k)"
              >删除</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="modal-level">
        <span class="modal-title">级别：</span>
        <el-radio v-model="radio" label="0">新增一级分组</el-radio>
        <el-radio v-model="radio" label="1">新增二级分组</el-radio>
      </div>
      <div class="higher-level" v-if="radio == 1">
        <span class="modal-title">上级分组</span>
        <el-select v-model="listQuery.pid" placeholder="请选择上级分组" clearable class="filter-item select-box" style="width: 150px">
          <el-option v-for="k in higherLevel" :key="k.id" :label="k.name" :value="k.id" />
        </el-select>
      </div>
      <div class="modal-group">
        <span class="modal-title" v-if="radio == 0">一级分组名称：</span>
        <span class="modal-title" v-else>二级分组名称：</span>
        <el-input
          v-model="listQuery.gname"
          placeholder="不超过10个字"
          style="width: 200px;"
          class="filter-item search-inp"
        />
      </div>
      <div class="upload">
        <span class="modal-title" v-if="radio == 0">一级分组图片：</span>
        <span class="modal-title" v-else>二级分组名称：</span>
        <el-button
          class="filter-item"
          type="primary"
        >上传图片</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getGroupList, addGroup, deleteGroup } from '@/api/group'
import { async } from 'q'
export default {
  data() {
    return {
      radio: '0',
      dialogVisible: false,
      groupList: [],
      listQuery: {
        gname: '',
        imagId: '',
        level: '',
        pid: ''
      },
      higherLevel: [],
    }
  },
  mounted() {
    this.getGroupList()
  },
  methods: {
    async getGroupList () {
      getGroupList().then(response => {
        this.groupList = response.data
      })
    },
    showChild(item) {
      if (item.selected === false) {
        item.selected = true
      } else {
        item.selected = false
      }
    },
    confirmData() {
      addGroup(this.listQuery).then(response => {
        this.dialogVisible = false,
        this.getGroupList()
      })
    },
    handleAddGroup() {
      this.listQuery = {}
      this.higherLevel = this.groupList,
      this.dialogVisible = true,
      this.radio = '1'
    },
    handleAdd() {
      this.listQuery.pid = 0,
      this.dialogVisible = true,
      this.radio = '0'
    },
    handleDel(item) {
      const id = item.id
      deleteGroup(id).then(response => {
        this.getGroupList()
      })
    },
    handleDelGroup(k) {
      const id = k.id
      deleteGroup(id).then(response => {
        this.getGroupList()
      })
    },
    foldAll() {
      this.groupList.forEach(item => {
        if(item.selected == false) {
          item.selected = true
        } else {
          item.selected = false
        }
      })
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
    margin: 0 16px 16px;
    .title{
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

    }
    .group{
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      border-radius: 10px;
      background: #fff;
      border: 1px solid #e5e5e5;
      .group-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        border-bottom: 1px solid #e5e5e5;
        .group-list-title{
          flex: 1;
          padding: 24px 0
        }
      }
      .level-group{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px 16px 48px;
        border-bottom: 1px solid #e5e5e5;
      }
      .level-group:last-child{
        border: none
      }
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }
  .modal-group{
    display: flex;
    align-items: center;
    margin-top: 20px
  }
  .upload{
    display: flex;
    align-items: center;
    margin-top: 20px
  }
  .modal-level{
    display: flex;
    align-items: center
  }
  .higher-level{
    display: flex;
    align-items: center;
    margin-top: 20px
  }
  .modal-title{
    width: 110px;
    display: block
  }
}
</style>
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-collapse-item{
  margin-top: 16px
}
</style>
