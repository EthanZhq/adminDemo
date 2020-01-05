<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="add">
        <h3>关于我们</h3>
        <div class="express-box">
          <div style="display:flex;align-items:center">
            <span class="express-title">店铺Logo：</span>
            <el-button class="filter-item" type="primary" @click="dialogVisible = true">上传图片</el-button>
          </div>
        </div>
        <div class="express-box dec">
          <span class="express-title">店铺简介：</span>
          <el-input
            type="textarea"
            placeholder="请输入店铺简介，不超过100字"
            :autosize="{ minRows: 10, maxRows: 12 }"
            class="area"
          />
        </div>
        <div class="express-box">
          <span class="express-title">官网</span>
          <el-input placeholder="请输入官网地址" style="width: 200px;" class="filter-item" />
        </div>
        <div class="express-box">
          <span class="express-title">微信公众号</span>
          <el-input placeholder="请输入微信公众号" style="width: 200px;" class="filter-item" />
        </div>
        <div class="express-box">
          <span class="express-title">联系点好</span>
          <el-input placeholder="请输入联系电话" style="width: 200px;" class="filter-item" />
        </div>
        <div class="express-box">
          <span class="express-title">联系地址</span>
          <el-input placeholder="请输入联系地址" style="width: 200px;" class="filter-item" />
        </div>
        <div class="btn-box">
          <el-button class="filter-item" type="primary">确定</el-button>
          <el-button class="filter-item" type="primary">取消</el-button>
        </div>
      </div>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      title="选择图片"
      width="45%"
      top="4%"
    >
      <div class="modal">
        <div class="tree">
          <span class="tree-title">图片分组</span>
          <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
        </div>
        <div class="modal-container">
          <div class="search">
            <span class="modal-block" style="width:60px">选择图片</span>
            <el-input placeholder="图片名称" class="filter-item modal-block" style="width:240px" />
            <el-button class="filter-item modal-block" type="primary">查询</el-button>
          </div>
          <div class="image-view"></div>
          <el-pagination background layout="prev, pager, next" :total="total" />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div>
          <el-button class="filter-item" type="primary" @click="upLoad">上传图片</el-button>
        </div>
        <div>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </span>
    </el-dialog>
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="dialog"
      title="上传图片"
      width="45%"
      top="4%"
    >
      <div class="upload">
        <span style="width:80px">上传至分组</span>
        <el-select placeholder="请选择分组" clearable class="filter-item block" style="width: 160px">
          <el-option v-for="row in payBy" :key="row.key" :label="row.way" :value="row.key" />
        </el-select>
      </div>
      <div class="upload">
        <span style="width:80px">上传图片</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-success="success"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { upLoad } from '@/api/upload;'
export default {
  data() {
    return {
      total: 1,
      dialogVisible: false,
      dialog: false,
      dialogImageUrl: '',
      payBy: [
        { key: '0', way: '微信支付' },
        { key: '1', way: '银联支付' },
        { key: '2', way: '余额支付' }
      ],
      data: [
        {
          label: '全部图片',
          children: [
            {
              label: 'Logo'
            },
            {
              label: '商品图片'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      listQuery: {
        aid: '1000',
        file: '',
        gid: ''
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    success(response, file, fileList) {
      console.log(response, file, fileList)
      this.listQuery.file = file.raw
    },
    upload() {
      this.dialogVisible = false
      setTimeout(() => {
        this.dialog = true
      }, 500)
    },
    cancel() {
      this.dialog = false
      setTimeout(() => {
        this.dialogVisible = true
      }, 500)
    },
    confirm() {
      this.dialog = false
      upLoad(this.listQuery).then(response => {
        console.log(response)
      })
      // setTimeout(() => {
      //   this.dialogVisible = true
      // }, 500)
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
    .add {
      background: #fff;
      padding: 0 32px;
      h3 {
        padding: 32px 0 0;
        margin: 0;
      }
      .express-box {
        padding: 24px 0 0 24px;
        display: flex;
        align-items: center;
        .express-title {
          font-size: 14px;
          padding-right: 12px;
          width: 100px;
          display: block;
        }
      }
      .dec {
        display: flex;
        align-items: flex-start;
        .area {
          width: 50%;
        }
      }
      .btn-box {
        padding: 60px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .modal {
    display: flex;
    .tree {
      width: 180px;
      height: 360px;
      overflow-y: scroll;
      padding-right: 12px;
      border-right: 1px solid #e5e5e5;
      .tree-title {
        padding-bottom: 20px;
        display: block;
      }
    }
    .tree::-webkit-scrollbar {
      display: none;
    }
    .modal-container {
      padding: 0 0 0 16px;
      display: flex;
      flex-direction: column;
      width: 100%;
      .search {
        display: flex;
        align-items: center;
        .modal-block {
          margin-right: 16px;
        }
      }
      .image-view {
        height: 320px;
      }
    }
  }
  .upload {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
}
</style>
<style>
.el-dialog__body {
  padding: 16px 20px;
}
.dialog-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-pagination {
  padding: 0;
  align-self: flex-end;
}
.el-upload--picture-card {
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 60px;
  height: 60px;
}
[class*=' el-icon-'],
[class^='el-icon-'] {
  line-height: 2;
}
</style>
