<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="order-info">
        <div class="content">
          <div class="shopping">{{ container }}</div>
          <div class="comment-shopping">
            <span>规格</span>
            <el-select
              v-model="temp.itemId"
              placeholder="商品三级分类"
              clearable
              class="filter-item select-box"
              style="width: 200px"
            >
              <el-option
                v-for="item in role"
                :key="item.itemId"
                :label="item.specChildNames"
                :value="item.itemId"
              />
            </el-select>
          </div>
          <div class="comment-shopping">
            <span>商品评价</span>
            <el-rate v-model="temp.grank" :colors="['#2f66ff', '#2f66ff', '#2f66ff']" />
          </div>
          <div class="comment-shopping area">
            <span>商品内容</span>
            <el-input
              v-model="temp.content"
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 10}"
            />
          </div>
          <div class="comment-shopping">
            <span>上传图片</span>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus" />
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt >
            </el-dialog>
          </div>
          <div class="comment-shopping">
            <span>名称</span>
            <el-input v-model="input" placeholder="请输入内容" style="width:200px" />
          </div>
          <div class="comment-shopping">
            <span>物流评价</span>
            <el-rate v-model="temp.drank" :colors="['#2f66ff', '#2f66ff', '#2f66ff']" />
          </div>
          <div class="comment-shopping">
            <span>商品评价</span>
            <el-rate v-model="temp.srank" :colors="['#2f66ff', '#2f66ff', '#2f66ff']" />
          </div>
          <div class="creat-btn">
            <el-button class="filter-item" type="primary" @click="creat">创建</el-button>
            <el-button class="filter-item">取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { creatComment, getRole } from '@/api/shopping'
export default {
  data() {
    return {
      input: '',
      container: '',
      listQuery: {
        type: ''
      },
      temp: {
        content: '',
        drank: '',
        gid: '',
        grank: '',
        isAnony: '',
        isShow: '',
        itemId: '',
        name: '',
        pids: '',
        sort: '',
        srank: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      role: []
    }
  },
  mounted() {
    this.container = this.$route.query.container
    this.temp.gid = this.$route.query.id
    this.getRole()
  },
  methods: {
    async getRole() {
      getRole(this.temp.gid).then(response => {
        this.role = response.data.goodsSpecValue
      })
    },
    creat() {
      creatComment(this.temp).then(response => {
        this.$message({
          type: 'success',
          message: '创建成功!'
        })
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
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
    font-size: 15px;
    .order-info {
      .content {
        background: #fff;
        border-radius: 10px;
        border: 1px solid #e5e5e5;
        color: #999;
        padding: 32px;
        .shopping {
          font-size: 18px;
          color: #666;
          font-weight: bold;
        }
        .comment-shopping {
          display: flex;
          align-items: center;
          margin: 32px 0 0 40px;
          span {
            margin-right: 24px;
            display: block;
            width: 70px;
          }
        }
        .creat-btn {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
        .area {
          display: flex;
          align-items: flex-start;
        }
      }
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
}
</style>
<style>
.el-rate__icon {
  font-size: 36px;
}
.el-rate {
  height: auto;
}
.el-textarea__inner {
  width: 72%;
}
.el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 100px;
  height: 100px;
}
</style>
