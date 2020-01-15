<template>
  <div class="content">
    <div style="padding:0 30px">
      <div class="content-top">
        <div class="content-top-head">
          <el-row>
            <el-col :span="3">
              <el-avatar
                style="width:100px;height:100px;"
                :src="circleUrl"
              />
            </el-col>
            <el-col :span="12">
              <el-row class="top">
                <span>张三</span>
                <span>12312341234</span>
              </el-row>
              <el-row class="bottom">
                <span>南京总部</span>
                <span>市场部</span>
                <span>市场专员</span>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="content-center">
        <h4>待审核确认</h4>
        <el-row style="marginBottom:20px;">
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>合作伙伴</span></el-col>
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>合作门店</span></el-col>
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>合作经纪人</span></el-col>
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>结算单审核</span></el-col>
          <el-col
            :span="4"
            style="textAlign:center"
          ><span>回款确认</span></el-col>
        </el-row>
        <el-row class="el2">
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>20</span></el-col>
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>20</span></el-col>
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>20</span></el-col>
          <el-col
            :span="5"
            style="textAlign:center"
          ><span>20</span></el-col>
          <el-col
            :span="4"
            style="textAlign:center"
          ><span>20</span></el-col>
        </el-row>
      </div>
      <div class="content-bottom">
        <h4>简报</h4>
        <el-row class="row1">
          <el-col
            :span="7"
            class="col1"
          >
            <el-row class="clienthead">
              <h4>客户</h4>
            </el-row>
            <el-row class="clientcontent">
              <el-col
                :span="5"
                :offset="2"
                style="textAlign:center"
              >项目名称</el-col>
              <el-col
                :span="5"
                style="textAlign:center"
              >新增来电</el-col>
              <el-col
                :span="5"
                style="textAlign:center"
              >新增到访</el-col>
              <el-col
                :span="5"
                style="textAlign:center"
              >新增关注</el-col>
            </el-row>
            <el-row
              class="clientcontent1"
              style="textAlign:center"
            >
              <el-col
                :span="5"
                :offset="2"
              >绿地之窗</el-col>
              <el-col
                :span="5"
                style="textAlign:center"
              >21 </el-col>
              <el-col
                :span="5"
                style="textAlign:center"
              >21</el-col>
              <el-col
                :span="5"
                style="textAlign:center"
              >21</el-col>
            </el-row>
          </el-col>

          <!-- 空白+号 -->
          <el-col
            :span="7"
            class="col2"
          >
            <div class="d1">
              <span class="s1" />
              <span class="s2" />
            </div>
            <div class="d2">
              <span class="s3" />
              <span class="s4" />
            </div>

          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },

  // created() {
  //   this.theme = this.list[0]
  // },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.content {
  .content-top {
    background-color: #f9f9f9;
    padding: 20px;
    height: 150px;
    margin-bottom: 5px;
    .content-top-head {
      .top {
        margin-top: 20px;
        > span {
          margin-right: 10px;
        }
      }
      .bottom {
        margin-top: 20px;
        > span {
          margin-right: 10px;
        }
      }
    }
  }
  .content-center {
    margin-bottom: 10px;
    background-color: #f9f9f9;
    height: 140px;
    padding-left: 40px;
    h4 {
      padding: 10px 0 10px 0;
    }
  }
  .content-bottom {
    background-color: #f9f9f9;
    height: 360px;
    > h4 {
      padding: 20px 0 10px 40px;
      border-bottom: 1px solid #cccccc;
    }
    .row1 {
      padding-left: 70px;
      .col1 {
        border: 1px solid #cccccc;
        background-color: #ffffff;
        margin-right: 20px;
        .clienthead {
          height: 40px;
          > h4 {
            margin-top: 5px;
            border-bottom: 1px solid #cccccc;
            padding-bottom: 5px;
            padding-left: 5px;
          }
        }
        .clientcontent {
          margin-bottom: 10px;
          border-bottom: 1px solid #ccc;
        }
        .clientcontent1 {
          margin: 10px 0;
          border-bottom: 1px solid #ccc;

          .Tett1 {
            text-align: center;
          }
        }
      }
      .col2 {
        border: 1px solid #cccccc;
        background-color: #ffffff;
        height: 100px;
        text-align: center;
        padding-top: 10px;
        font-size: 0;
        .d1 {
          .s1 {
            display: inline-block;
            height: 40px;
            width: 40px;
            // background-color: aqua;
            border-bottom: 3px solid #ccc;
            border-right: 3px solid #ccc;
          }
          .s2 {
            height: 40px;
            width: 40px;
            display: inline-block;
            // background-color: red;
            border-bottom: 3px solid #ccc;
            border-left: 3px solid #ccc;
          }
        }
        .d2 {
          .s3 {
            height: 40px;
            width: 40px;
            display: inline-block;
            border-top: 3px solid #ccc;
            border-right: 3px solid #ccc;
            // background-color: gold;
          }
          .s4 {
            height: 40px;
            width: 40px;
            display: inline-block;
            border-left: 3px solid #ccc;
            border-top: 3px solid #ccc;
            // background-color: aquamarine;
          }
        }
      }
    }
  }
}
</style>

