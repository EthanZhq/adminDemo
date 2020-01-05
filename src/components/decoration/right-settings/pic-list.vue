<template>
  <div class="pic">
    <draggable element="div" v-model="list">
      <div v-for="(item, index) in list" :key="index" class="imgList">
        <div>
          {{ isNav ? "导航" : "图片" }}{{ index + 1 }}
          <i
            v-if="index > 0 && !isMagic"
            class="el-icon-delete"
            @click="delImg(index)"
          ></i>
        </div>
        <div v-if="isNav">
          <span>导航名称</span>
          <el-input
            type="text"
            show-word-limit="true"
            placeholder="不超过4个字"
            v-model="item.name"
            maxlength="10"
          ></el-input>
        </div>
        <div v-if="isNav">
          <span>字体颜色</span>
          <div class="color">
            <span>{{ item.color }}</span>
            <colorPicker v-model="item.color" />
          </div>
        </div>
        <div>
          <span>{{ isNav ? "图标" : "选择图片" }}</span>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-success="iconSuccess"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div>
          <span>{{ isNav ? "导航" : "图片" }}链接</span>
          <el-radio-group v-model="item.type" size="mini">
            <el-radio label="0">系统链接</el-radio>
            <el-radio label="1">自定义链接</el-radio>
          </el-radio-group>
        </div>
        <div v-if="item.type == '1'">
          <span>H5链接</span>
          <el-input type="text" placeholder="请填写需要跳转的H5链接" v-model="item.link"></el-input>
        </div>
        <div v-if="item.type == '0'">
          <span></span>
          <el-button @click="showLink(index)">选择链接</el-button>
        </div>
      </div>
    </draggable>
    <div class="add" v-if="!isMagic">
      <el-button @click="addImg">添加{{ isNav ? "导航" : "图片" }}</el-button>
      <span>最多{{ isNav ? "5个" : "十张" }}，上下拖动可排序</span>
    </div>
    <CheckLink :isShow="dialogVisible" @on-close-dialog="closeDialog" />
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import colorPicker from '../../../plugin/colorPicker'
import CheckLink from '../pop/checkLink'
export default {
  components: {
    // draggable,
    colorPicker,
    CheckLink
  },
  props: {
    imgList: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    isNav: {
      type: Boolean,
      default: false
    },
    isMagic: {
      type: Boolean,
      default: false
    },
    length: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      dialogVisible: false,
      current: 0
    }
  },
  watch: {
    imgList: {
      handler(newValue) {
        this.list = this.imgList
      },
      deep: true
    },
    list: {
      handler(newValue) {
        this.$emit('on-change-list', newValue)
      },
      deep: true
    }
  },
  created() {
    this.list = this.imgList
  },
  methods: {
    addImg() {
      const num = this.list.length + 1
      if (this.isNav && num < 6) {
        this.list.push({
          pic: require('../../../assets/decoration/pic.gif'),
          color: '#555',
          name: '导航' + num
        })
      } else if (!this.isNav && num < 11) {
        this.list.push({
          pic: require('../../../assets/decoration/defalut.png')
        })
      } else {
        this.$message({
          message: '已超出规定个数~',
          type: 'warning'
        })
      }
    },
    delImg(i) {
      this.list.splice(i, 1)
    },
    iconSuccess(response, file, fileList) {
      if (fileList.length > 1) {
        fileList.splice(0, 1)
      }
    },
    showLink(i) {
      this.current = i
      this.dialogVisible = true
      console.log(i + '显示系统链接')
    },
    closeDialog() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
.disabled.el-upload--picture-card {
  display: none;
}
.imgList,
.add {
  padding: 30px 20px;
}
.imgList {
  border-bottom: 1px solid #d7d7d7;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .el-input {
      width: 65%;
      > .el-input__inner {
        height: 35px;
        line-height: 35px;
      }
    }
    > span {
      margin-right: 20px;
      display: inline-block;
      width: 20%;
      text-align: right;
    }
    > .color {
      display: flex;
      align-items: center;
      border: 1px solid #e3e2e5;
      border-radius: 6px;
      padding: 6px;
      > span {
        margin-right: 5px;
      }
    }
    i {
      margin-left: auto;
      cursor: pointer;
      font-size: 16px;
    }
    i:hover,
    > i:active {
      color: #409eff;
    }
  }
}
.imgList:last-child {
  border: none;
}
.add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d7d7d7;
  > span {
    color: #999;
    font-size: 13px;
  }
}
</style>
<style>
.el-upload--picture-card {
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.el-upload-list--picture-card .el-upload-list__item-status-label i {
  position: absolute;
  right: 14px;
}
</style>
