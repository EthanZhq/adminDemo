<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="filter-container title">
        <div class="btn">
          <el-button class="filter-item" type="primary" @click="foldAll">折叠全部</el-button>
          <el-button class="filter-item" type="primary" @click="handleAdd">新增一级分组</el-button>
        </div>
      </div>
      <div v-for="(row,idx) in groupList" :key="idx" class="group">
        <div class="group-list">
          <div class="group-list-title" @click="child(row)">
            <span>{{ row.name }}</span>
          </div>
          <div>
            <el-button class="filter-item" type="primary" @click="handleAddGroup(row)">新增二级分组</el-button>
            <el-button class="filter-item" type="primary" @click="handleEdit(row)">编辑</el-button>
            <el-button class="filter-item" type="primary" @click="handleDel(row)">删除</el-button>
          </div>
        </div>
        <div v-if="row.selected === true">
          <div v-for="(k,index) in row.childs" :key="index" class="level-group">
            <div>
              <span>{{ k.name }}</span>
            </div>
            <div>
              <span>商品数量</span>
              <span>{{ k.gnum }}</span>
            </div>
            <div>
              <el-button class="filter-item" type="primary" @click="handleEditGroup(row,k)">编辑</el-button>
              <el-button class="filter-item" type="primary" @click="handleDelGroup(k)">删除</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改':'添加'" width="30%">
      <div class="modal-level">
        <span class="modal-title">级别：</span>
        <el-radio v-model="radio" label="0" :disabled="disabled">新增一级分组</el-radio>
        <el-radio v-model="radio" label="1" :disabled="isDisabled">新增二级分组</el-radio>
      </div>
      <div v-if="radio == 1" class="higher-level">
        <span class="modal-title">上级分组</span>
        <el-select
          v-model="temp.levelName"
          placeholder="请选择上级分组"
          clearable
          class="filter-item"
          style="width: 150px"
        >
          <el-option v-for="k in groupList" :key="k.id" :label="k.name" :value="k.id" />
        </el-select>
      </div>
      <div class="modal-group">
        <span v-if="radio == 0" class="modal-title">一级分组名称：</span>
        <span v-else class="modal-title">二级分组名称：</span>
        <el-input
          v-model="temp.gname"
          placeholder="不超过10个字"
          style="width: 200px;"
          class="filter-item search-inp"
        />
      </div>
      <div class="upload">
        <span v-if="radio == 0" class="modal-title">一级分组图片：</span>
        <span v-else class="modal-title">二级分组名称：</span>
        <el-button class="filter-item" type="primary">上传图片</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirmData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getGroupList,
  addGroup,
  deleteGroup,
  editGroup,
  detail
} from '@/api/group'
import { async } from 'q'
const defaultRole = {
  gname: '',
  imagId: '',
  level: '',
  pid: '',
  levelName: ''
}
export default {
  data() {
    return {
      radio: '0',
      dialogVisible: false,
      disabled: false,
      isDisabled: false,
      groupList: [],
      listQuery: {
        gname: '',
        imagId: '',
        level: '',
        pid: ''
      },
      levelName: '',
      dialogType: 'new',
      id: '',
      temp: Object.assign({}, defaultRole)
    }
  },
  mounted() {
    this.getGroupList()
  },
  methods: {
    async getGroupList() {
      getGroupList().then(response => {
        this.groupList = response.data
      })
    },
    child(row) {
      if (row.selected === false) {
        row.selected = true
      } else {
        row.selected = false
      }
    },
    confirmData() {
      const isEdit = this.dialogType === 'edit'
      if (isEdit) {
        editGroup(this.id, this.temp).then(response => {
          (this.dialogVisible = false), this.getGroupList()
          this.temp = Object.assign({}, defaultRole)
        })
      } else {
        addGroup(this.temp).then(response => {
          (this.dialogVisible = false), this.getGroupList()
          this.temp = Object.assign({}, defaultRole)
        })
      }
    },
    cancel() {
      (this.listQuery = {}), (this.dialogVisible = false)
    },
    handleAddGroup(row) {
      (this.radio = '1'),
      (this.dialogType = 'new'),
      (this.temp = {
        gname: '',
        imagId: '',
        level: '',
        pid: row.id,
        levelName: row.name
      })
      this.dialogVisible = true
      this.isDisabled = false
      this.disabled = false
    },
    handleAdd() {
      (this.radio = '0'),
      (this.dialogType = 'new'),
      (this.temp = Object.assign({}, defaultRole))
      this.dialogVisible = true
      this.isDisabled = false
      this.disabled = false
    },
    handleEdit(row) {
      (this.radio = '0'),
      (this.id = row.id),
      (this.dialogType = 'edit'),
      (this.temp.gname = row.name),
      (this.dialogVisible = true)
      this.isDisabled = true
      this.disabled = false
    },
    handleEditGroup(row, k) {
      (this.radio = '1'),
      (this.id = k.id),
      (this.dialogType = 'edit'),
      (this.temp = {
        gname: k.name,
        imagId: '',
        level: '',
        pid: row.id,
        levelName: row.name
      })
      this.dialogVisible = true
      this.disabled = true
      this.isDisabled = false
    },
    handleDel(row) {
      deleteGroup(row.id).then(response => {
        this.getGroupList()
      })
    },
    handleDelGroup(k) {
      deleteGroup(k.id).then(response => {
        this.getGroupList()
      })
    },
    foldAll() {
      this.groupList.forEach(row => {
        if (row.selected == false) {
          row.selected = true
        } else {
          row.selected = false
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
  .container {
    flex: 1;
    overflow-y: scroll;
    padding: 16px;
    background: #f1f4f6;
    border-radius: 10px;
    margin: 0 16px 16px;
    .title {
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .group {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      border-radius: 10px;
      background: #fff;
      border: 1px solid #e5e5e5;
      .group-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        border-bottom: 1px solid #e5e5e5;
        .group-list-title {
          flex: 1;
          padding: 24px 0;
        }
      }
      .level-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px 16px 48px;
        border-bottom: 1px solid #e5e5e5;
      }
      .level-group:last-child {
        border: none;
      }
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .modal-group {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .upload {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .modal-level {
    display: flex;
    align-items: center;
  }
  .higher-level {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .modal-title {
    width: 110px;
    display: block;
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
.el-collapse-item {
  margin-top: 16px;
}
</style>
