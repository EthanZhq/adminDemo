<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="order-step">
        <el-steps :active="active" align-center>
          <el-step title="买家下单" description />
          <el-step title="买家付款" description />
          <el-step title="商家发货" description />
          <el-step title="买家收货" description />
          <el-step title="买家评论" description />
        </el-steps>
      </div>
      <div class="order-info">
        <div class="title">
          <h3 class="order-title">订单信息</h3>
          <div>
            <el-button class="filter-item" type="primary">修改订单金额</el-button>
            <el-button class="filter-item" type="primary">取消订单</el-button>
          </div>
        </div>
        <div class="info">
          <span>订单编号：{{ temp.code }}</span>
          <span>下单时间：{{ temp.addTime }}</span>
          <span>订单状态：{{ temp.ostatus }}</span>
          <span>支付方式：{{ temp.payBy }}</span>
          <span>应付金额：{{ temp.payable }}</span>
        </div>
      </div>
      <div class="order-info">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="商品信息" name="0">
            <div class="tabs-data">
              <el-table
                ref="multipleTable"
                :data="goodsVOList"
                border
                fit
                class="table"
                :header-cell-style="{ background: '#f5f5f5' }"
              >
                <el-table-column label="商品编号" align="center" width="150">
                  <template slot-scope="{ row }">
                    <span>{{ row.gcode }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="商品名称" align="center" width="160">
                  <template slot-scope="{ row }">
                    <span>{{ row.gname }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="图片" align="center" width="80">
                  <template slot-scope="{ row }">
                    <img :src="row.image" class="order-image" alt />
                  </template>
                </el-table-column>
                <el-table-column label="属性规格" align="center" width="120">
                  <template slot-scope="{ row }">
                    <span>{{ row.spec }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="数量" prop="classify" align="center" width="80">
                  <template slot-scope="{ row }">
                    <span>{{ row.num }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="商品价格" align="center">
                  <template slot-scope="{ row }">
                    <div class="card">
                      <div v-for="(item, index) in row.price" :key="index" class="price">{{ item }}</div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="折扣优惠" align="center" width="120px">
                  <template slot-scope="{ row }">
                    <span class="link-type">{{ row.discount }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="折扣优惠类型" align="center" width="110px">
                  <template slot-scope="{ row }">
                    <span class="link-type">{{ row.discountType }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="商品最终价格" align="center">
                  <template slot-scope="{ row }">
                    <span class="link-type">{{ row.finalPrice }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="费用信息" name="1">
            <div class="tabs-data">
              <div class="info">
                <span>商品总价：{{ priceVO.oprice }}</span>
                <span>商品现金：{{ priceVO.goodsPrice }}</span>
                <span>所需积分：{{ priceVO.goodsPoint }}</span>
                <span>优惠券：{{ priceVO.integralMoney }}</span>
                <span>商品折扣：{{ priceVO.discount }}</span>
                <span>运费：{{ priceVO.shippingPrice }}</span>
                <span>订单总金额：{{ priceVO.totalPrice }}</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="收货信息" name="2">
            <div class="tabs-data">
              <div class="info">
                <span>收货人：{{ receiverVO.name }}</span>
                <span>联系电话：{{ receiverVO.recPhone }}</span>
                <span>收货地址：{{ receiverVO.address }}</span>
                <span>备注：{{ receiverVO.notes }}</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="物流信息" name="3">
            <div class="tabs-data">
              <el-table
                ref="multipleTable"
                :data="tableData"
                border
                fit
                class="table"
                :header-cell-style="{ background: '#f5f5f5' }"
              >
                <el-table-column label="时间" align="center" width="400">
                  <template slot-scope="{ row }">
                    <span>{{ row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="状态" align="center">
                  <template slot-scope="{ row }">
                    <span>{{ row.name }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="评价信息" name="4">
            <div class="tabs-data">
              <div class="content">
                <div class="rate">
                  <span>商品评价</span>
                  <el-rate
                    :colors="['#2f66ff', '#2f66ff', '#2f66ff']"
                    :texts="['非常差', '差', '一般', '好', '非常好']"
                    show-text
                    disabled
                  />
                </div>
                <div class="mid">
                  <div class="comment-content">ds</div>
                  <div class="picture">
                    <div class="comment-pic">
                      <img src alt />
                    </div>
                  </div>
                </div>
                <div class="rate">
                  <span>物流评价</span>
                  <el-rate :colors="['#ff866e', '#ff866e', '#ff866e']" disabled />
                </div>
                <div class="rate">
                  <span>服务评价</span>
                  <el-rate :colors="['#ffd43f', '#ffd43f', '#ffd43f']" disabled />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="售后信息" name="5">
            <div class="tabs-data">
              <div class="info">
                <span>订单编号：2019112809340010</span>
                <span>下单时间：2019-12-17 14:03:53</span>
                <span>订单状态：待收货</span>
                <span>交易方式：积分抵扣</span>
                <span>支付方式：微信支付</span>
                <span>应付金额：3000元+3000积分</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="操作记录" name="6">
            <div class="tabs-data">
              <el-table
                ref="multipleTable"
                :data="recordVOList"
                border
                fit
                class="table"
                :header-cell-style="{ background: '#f5f5f5' }"
              >
                <el-table-column label="操作者" align="center" width="180">
                  <template slot-scope="{ row }">
                    <span>{{ row.createUser }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作时间" align="center" width="180">
                  <template slot-scope="{ row }">
                    <span>{{ row.createTime }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="订单状态" align="center" width="160">
                  <template slot-scope="{ row }">
                    <span>{{ row.ostatus }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="付款状态" align="center" width="160">
                  <template slot-scope="{ row }">
                    <span>{{ row.pstatus }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="发货状态" align="center" width="160">
                  <template slot-scope="{ row }">
                    <span>{{ row.sstatus }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="备注" align="center" width>
                  <template slot-scope="{ row }">
                    <span>{{ row.actionNote }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderDetail } from '@/api/order'
export default {
  data() {
    return {
      active: 0,
      activeName: '0',
      list: [
        {
          code: 1,
          name: '陕西红富士苹果',
          classify: '鞋子',
          num: '2000000',
          number: '43',
          price: '120.00 + 8000积分',
          money: '10000积分',
          timestamp: '2019-12-12 18:00:00',
          flag: 0
        }
      ],
      goodsVOList: [],
      recordVOList: [],
      priceVO: '',
      receiverVO: '',
      tableData: [],
      temp: '',
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.getOrderDetail()
  },
  methods: {
    getOrderDetail() {
      getOrderDetail(this.id).then(response => {
        this.temp = response.data
        this.goodsVOList = this.temp.goodsVOList
        this.recordVOList = this.temp.recordVOList
        this.priceVO = this.temp.priceVO
        this.receiverVO = this.temp.receiverVO
        console.log(this.temp)
        if (this.temp.ostatus === '待支付') {
          this.active = 1
        } else if (this.temp.ostatus === '待发货') {
          this.active = 2
        } else if (this.temp.ostatus === '待收货') {
          this.active = 3
        } else if (this.temp.ostatus === '待评价') {
          this.active = 4
        } else if (this.temp.ostatus === '交易关闭') {
          this.active = 5
        }
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
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
    .order-step {
      background: #fff;
      padding: 24px;
      border-radius: 10px;
      margin: 0 0 16px;
    }
    .order-info {
      background: #fff;
      padding: 24px;
      margin: 0 0 16px;
      color: #888;
      border-radius: 10px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .order-title {
        padding-bottom: 18px;
        color: #000;
        .number {
          color: #999;
          padding-left: 20px;
          font-size: 14px;
        }
      }
      .tabs-data {
        padding-top: 16px;
        .table {
          .order-image {
            width: 36px;
            height: 36px;
          }
          .card {
            display: flex;
            align-items: center;
            font-size: 14px;
            margin-right: 16px;
            color: #e0242e;
            .price {
              border: 1px solid #e0242e;
              border-radius: 20px;
              padding: 2px 12px;
              margin-right: 10px;
            }
          }
        }
        .content {
          margin-top: 10px;
          border-radius: 10px;
          background: #fff;
          padding: 24px;
          .mid {
            padding-bottom: 16px;
          }
          .rate {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            padding-left: 36px;
            span {
              margin-right: 20px;
            }
          }
          .picture {
            padding-left: 36px;
            .comment-pic {
              width: 100px;
              height: 100px;
              border-radius: 6px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 6px;
              }
            }
          }
          .comment-content {
            padding-bottom: 16px;
          }
        }
      }
      .info {
        padding-left: 24px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        span {
          display: flex;
          width: 32%;
          padding-bottom: 20px;
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
.el-step__title.is-process {
  font-weight: 500;
}
.el-tabs--card > .el-tabs__header {
  border: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
  height: 56px;
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border: 1px solid #e5e5e5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
}
.el-rate__icon {
  font-size: 36px;
}
.el-rate {
  height: auto;
}
</style>
