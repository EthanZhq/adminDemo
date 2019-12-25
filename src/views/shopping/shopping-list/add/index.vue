<template>
  <div class="wrap">
    <div class="app-container container">
       <div class="add-info">
          <div class="add-title">
            <h3>商品类型</h3>
            <span>请选择您的商品类型</span>
          </div>
          <div class="express-box">
            <span class="express-title">等级名称</span>
            <el-input
              placeholder="设置会员等级名称，不超过10字"
              style="width: 270px;"
              class="filter-item"
            />
          </div>
          <div class="express-box">
            <span class="express-title">累计消耗额度</span>
            <el-input
              placeholder="会员累计所需消耗的额度，单位：元"
              style="width: 270px;"
              class="filter-item"
            />
          </div>
        </div>
        <div class="add-info">
          <div class="add-title">
            <h3>基本信息</h3>
          </div>
          <div class="express-box">
            <span class="express-title">商品名称</span>
            <el-input
              placeholder="设置会员等级名称，不超过10字"
              style="width: 450px;"
              class="filter-item"
            />
            <span>(不超过30字)</span>
          </div>
          <div class="express-box">
            <span class="express-title">商品图片</span>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div class="express-box">
            <span class="express-title">分享描述</span>
            <el-input
              placeholder="会员累计所需消耗的额度，单位：元"
              style="width: 450px;"
              class="filter-item"
            />
            <span>(用户分享到朋友圈时候会展示给好友，不超过30字)</span>
          </div>
        </div>
        <div class="add-info">
          <div class="add-title">
            <h3>库存信息</h3>
          </div>
          <div class="express-box">
            <span class="express-title">商品规格</span>
            <el-radio v-model="radio" label="1">单一规格</el-radio>
            <el-radio v-model="radio" label="2">多规格</el-radio>
          </div>
          <div>
            <div class="express-box">
              <span class="express-title">商品编码</span>
              <el-input
                placeholder="请输入商家编码"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">成本价</span>
              <el-input
                placeholder="请输入商品成本价"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">库存</span>
              <el-input
                placeholder="请输入商品库存"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">重量</span>
              <el-input
                placeholder="请输入商品单件重量"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">体积</span>
              <el-input
                placeholder="请输入商品单件体积"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">划线价</span>
              <el-input
                placeholder="请输入商品划线价"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">库存扣减方式</span>
              <div class="other">
                <el-radio v-model="radio" label="1">拍下减库存</el-radio>
                <el-radio v-model="radio" label="2">支付减库存</el-radio>
              </div>
            </div>
            <div class="express-box">
              <span class="express-title">虚拟销量</span>
              <el-input
                placeholder="请输入商品虚拟销量"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
          </div>

        </div>
        <div class="add-info">
            <div class="add-title">
              <h3>其他信息</h3>
            </div>
            <div class="express-box">
              <span class="express-title">运费信息</span>
              <div class="other">
                <el-radio v-model="radio" label="1">卖家包邮</el-radio>
                <el-radio v-model="radio" label="2">买家承担运费</el-radio>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      describe: '',
      radio: '1',
    }
  },
  methods: {

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
    height: 100%;
    .add-info{
      background: #fff;
      padding: 24px 32px;
      border-radius: 10px;
      margin-bottom: 16px;
      .add-title{
        display: flex;
        span{
          padding-left: 16px;
          display: flex;
          align-items: center;
          color: #999;
          font-size: 14px;
        }
      }
      h3{
        margin: 0
      }
      .express-box{
        padding: 24px 0 0 24px;
        display: flex;
        align-items: center;
        .express-title{
          font-size: 14px;
          padding-right: 12px;
          width: 100px;
          display: block;
          text-align: right
        }
      }
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }
}
</style>
<style>
.el-upload--picture-card{
  width: 60px;
  height: 60px;
  line-height: 60px
}
.el-upload--picture-card i{
  line-height: 60px
}
.el-upload-list--picture-card .el-upload-list__item{
  width: 60px;
  height: 60px;
}
</style>
