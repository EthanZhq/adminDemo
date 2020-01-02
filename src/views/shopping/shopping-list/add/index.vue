<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="step">
        <el-steps :active="1" align-center>
          <el-step title="填写商品基本信息"></el-step>
          <el-step title="填写商品详细信息"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </div>
      <div class="add-info">
        <div class="add-title">
          <h3>商品类型</h3>
          <span>请选择您的商品类型</span>
        </div>
        <div class="type">
          <span class="type-title">实物商品</span>
          <span>(物流发货)</span>
        </div>
      </div>
      <div class="add-info">
        <div class="add-title">
          <h3>基本信息</h3>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span>商品名称
          </span>
          <el-input v-model="listQuery.name" placeholder="请输入商品名称" style="width: 450px;" class="filter-item" />
          <span class="note">(不超过30字)</span>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span>商品图片
          </span>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            draggable
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span>商品分组
          </span>
          <el-select v-model="listQuery.groupId" multiple placeholder="请选择商品分组" style="width:360px">
            <el-option
              v-for="item in group"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span> 商品分类
          </span>
          <el-select v-model="listQuery.typeId" placeholder="请选择商品分类">
            <el-option
              v-for="item in type"
              :key="item.id"
              :label="item.typeName"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span>分享描述
          </span>
          <el-input v-model="listQuery.shareDesc" placeholder="请输入描述" style="width: 450px;" class="filter-item" />
          <span class="note">(用户分享到朋友圈时候会展示给好友，不超过30字)</span>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span> 标签
          </span>
          <el-select v-model="listQuery.tagList.id" multiple placeholder="请选择" style="width:360px">
            <el-option
              v-for="item in tag"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="express-box">
          <span class="express-title">服务</span>
          <el-select v-model="listQuery.serviceList.id" multiple placeholder="请选择" style="width:360px">
            <el-option
              v-for="item in goodsSerVOs"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-button
            class="filter-item creat-service"
            type="primary"
            @click="dialogVisible = true"
          >创建服务</el-button>
        </div>
      </div>
      <div class="add-info">
        <div class="add-title">
          <h3>库存信息</h3>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span> 商品规格
          </span>
          <el-radio v-model="radio" label="1">单一规格</el-radio>
          <el-radio v-model="radio" label="2">多规格</el-radio>
        </div>
        <div>
          <div v-if="radio == '1'">
            <div class="express-box">
              <span class="express-title">商品编码</span>
              <el-input v-model="listQuery.code" placeholder="请输入商家编码" style="width: 450px;" class="filter-item" />
            </div>
            <div class="express-box">
              <span class="express-title">
                <span class="star">*</span> 成本价
              </span>
              <el-input v-model="listQuery.costPrice" placeholder="请输入商品成本价" style="width: 450px;" class="filter-item" />
            </div>
            <div class="express-box">
              <span class="express-title">
                <span class="star">*</span> 库存
              </span>
              <el-input v-model="listQuery.storeCount" placeholder="请输入商品库存" style="width: 450px;" class="filter-item" />
              <span class="note">总库存,库存为 0 时，会放到『已售罄』的商品列表，用户的购物车中会实时更新,必选</span>
            </div>
            <div class="express-box">
              <span class="express-title">重量</span>
              <el-input v-model="listQuery.weight" placeholder="请输入商品单件重量" style="width: 450px;" class="filter-item" />
            </div>
            <div class="express-box">
              <span class="express-title">体积</span>
              <el-input v-model="listQuery.volume" placeholder="请输入商品单件体积" style="width: 450px;" class="filter-item" />
            </div>
          </div>
          <div class="express-box">
            <span class="express-title">
              <span class="star">*</span> 划线价
            </span>
            <el-input v-model="listQuery.linePrice" placeholder="请输入商品划线价" style="width: 450px;" class="filter-item" />
            <span class="note">商品没有优惠的情况下，划线价在商品详情会以划线形式显示</span>
          </div>
          <div class="express-box sale">
            <span class="express-title">
              <span class="star">*</span> 库存扣减方式
            </span>
            <div class="other">
              <div>
                <el-radio v-model="listQuery.reduceWay" label="0">拍下减库存</el-radio>
                <span class="note">买家提交订单，扣减库存数量，可能存在恶意占用库存风险拍下减库存</span>
              </div>
              <div style="margin-top:16px">
                <el-radio v-model="listQuery.reduceWay" label="1">支付减库存</el-radio>
                <span class="note">支付减库存，超卖订单自动发起售后</span>
              </div>
            </div>
          </div>
          <div class="express-box sale">
            <span class="express-title">虚拟销量</span>
            <div class="sales-volume">
              <el-input v-model="listQuery.virtualSalesSum" placeholder="请输入商品虚拟销量" style="width: 450px;" class="filter-item" />
              <span>设置后，您的用户看到的销量=初始销量+下单量</span>
            </div>
          </div>
        </div>
      </div>
      <div class="add-info">
        <div class="add-title">
          <h3>其他信息</h3>
        </div>
        <div class="express-box sale">
          <span class="express-title"><span class="star">*</span>运费信息</span>
          <div class="other">
            <el-radio v-model="listQuery.isPinkage" label="0">卖家包邮</el-radio>
            <el-radio v-model="listQuery.isPinkage" label="1" style="margin-top:16px">买家承担运费</el-radio>
          </div>
        </div>
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        top="16%"
      >
        <div>
          <span class="service-name">服务名称</span>
          <el-input
            v-model="temp.sName"
            maxlength="10"
            placeholder="不超过10个字"
            style="width: 200px;"
            class="filter-item tags-inp"
          />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { addData, creatService, details } from '@/api/shopping'
export default {
  data() {
    return {
      listQuery: {
        code: '',
        costPrice: 0,
        detail: '',
        groupId: '',
        isOnSale: 0,
        isPinkage: '0',
        linePrice: 0,
        name: '',
        pictureIds: [
          {
            goodsId: 0,
            isMain: 0,
            pictureId: 0,
            sort: 0
          }
        ],
        priceDtos: [
          {
            id: 0,
            price: '',
            type: 0
          }
        ],
        reduceWay: '0',
        serviceList: [
          {
            id: '',
            name: ''
          }
        ],
        shareDesc: '',
        specList: [
          {
            code: '',
            costPrice: '',
            itemId: 0,
            prices: [
              {
                id: 0,
                price: '',
                type: 0
              }
            ],
            repertory: 0,
            specChildNames: '',
            specPictId: 0,
            specPictPath: '',
            volume: 0,
            weight: 0
          }
        ],
        specValueList: [
          {
            code: '',
            costPrice: '',
            itemId: 0,
            prices: [
              {
                id: 0,
                price: '',
                type: 0
              }
            ],
            repertory: 0,
            specChildNames: '',
            specPictId: 0,
            specPictPath: '',
            volume: 0,
            weight: 0
          }
        ],
        storeCount: 0,
        tagList: [
          {
            goodsId: '',
            isMain: '',
            sort: '',
            tagId: ''
          }
        ],
        templateId: 0,
        type: 0,
        typeId: '',
        virtualSalesSum: 0,
        volume: 0,
        weight: 0
      },
      dialogVisible: false,
      describe: '',
      radio: '1',
      active: 1,
      group: [],
      type: [],
      tag: [],
      temp: {
        desc: '',
        sName: ''
      },
      goodsSerVOs: [],
      gId: ''
    }
  },
  mounted() {
    this.gId = this.$route.query.id
    // this.getDetail()
    this.getData()
  },
  methods: {
    getData() {
      addData().then(response => {
        this.group = response.data.groups
        this.type = response.data.types
        this.tag = response.data.tag
        this.goodsSerVOs = response.data.goodsSerVOs
      })
    },
    getDetail() {
      details(this.gId).then(response => {
        this.listQuery = response.data.goodsVOs
      })
    },
    confirm() {
      creatService(this.temp).then(response => {
        this.getData()
        this.dialogVisible = false
        this.$notify({
          title: 'Success',
          message: '创建成功',
          type: 'success',
          duration: 2000
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
    height: 100%;
    .step {
      background: #fff;
      padding: 24px 32px;
      border-radius: 10px;
      margin-bottom: 16px;
    }
    .add-info {
      background: #fff;
      padding: 24px 32px;
      border-radius: 10px;
      margin-bottom: 16px;
      .add-title {
        display: flex;
        span {
          padding-left: 16px;
          display: flex;
          align-items: center;
          color: #999;
          font-size: 14px;
        }
      }
      h3 {
        margin: 0;
      }
      .express-box {
        padding: 24px 0 0 24px;
        display: flex;
        align-items: center;
        .express-title {
          font-size: 14px;
          padding-right: 12px;
          width: 120px;
          display: block;
          text-align: right;
          .star {
            color: red;
            font-size: 16px;
            padding-right: 2px;
          }
        }
        .other{
          display: flex;
          flex-direction: column;
        }
        .creat-service{
          margin-left: 36px
        }
        .sales-volume{
          display: flex;
          flex-direction: column;
          span{
            font-size: 14px;
            color: #999;
            padding-top: 20px;
          }
        }
        .note {
          font-size: 14px;
          color: #999;
          padding-left: 20px;
        }
      }
      .sale{
        display: flex;
        align-items: flex-start
      }
      .type {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        padding: 16px 0;
        width: 120px;
        margin-top: 16px;
        font-size: 14px;
        .type-title {
          padding-bottom: 12px;
        }
      }
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .service-name{
    margin-right: 36px
  }
}
</style>
<style>
.el-upload--picture-card {
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.el-upload--picture-card i {
  line-height: 60px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 60px;
  height: 60px;
}
</style>
