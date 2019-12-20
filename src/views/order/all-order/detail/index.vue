<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="order-info">
        <div class="order-title">基本信息</div>
        <div class="info">
          <span>订单编号：2019112809340010</span>
          <span>会员：2019112809340010</span>
          <span>联系方式：13688889999</span>
          <span>支付方式：积分抵扣</span>
          <span>应付金额：3000元+3000积分</span>
          <span>下单时间：2019-12-17 14:03:53</span>
          <span>订单状态：待收货</span>
          <span>快递公司：暂无</span>
          <span>快递单号：暂无</span>
        </div>
      </div>
      <div class="order-info">
        <div class="order-title">收货信息</div>
        <div class="receiving-info">
          <span>收货人：大梨</span>
          <span>联系电话：13688889999</span>
          <span>收货地址：江苏省南京市江宁区绿地之窗A2-3</span>
          <span>备注：韵达快递，谢谢</span>
        </div>
      </div>
      <div class="order-info">
        <div class="order-title">费用信息</div>
        <div class="info">
          <span>商品总价：3000元+3000积分</span>
          <span>商品现金：3000</span>
          <span>商品折扣：暂无</span>
          <span>优惠券：积分抵扣</span>
          <span>所需积分：3000</span>
          <span>运费：10元</span>
          <span>订单金额：3000元+3000积分</span>
        </div>
      </div>
      <div class="order-info">
        <div class="order-title">收货信息</div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            fit
            border
            class="table"
            :header-cell-style="{background:'#f5f5f5'}"
          >
            <el-table-column label="时间" align="center">
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
      <div class="order-info">
        <div class="order-title">操作记录</div>
          <el-table
              ref="multipleTable"
              :data="tableData"
              border
              fit
              class="table"
              :header-cell-style="{background:'#f5f5f5'}"
            >
              <el-table-column label="操作者" align="center" width="100">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作时间" align="center" width="180">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="订单状态" align="center" width="160">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="付款状态" align="center" width="160">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="发货状态" align="center" width="160">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="120">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
            </el-table>
      </div>
      <div class="tab">
        <el-tabs v-model="activeName" class="tab-box" type="card" @tab-click="handleClick">
          <el-tab-pane label="费用信息" name="second">
            <div class="cost-info">
              <span>商品总价：2990元+3000积分</span>
              <span>商品现金：2990元</span>
              <span>所需积分：3000积分</span>
              <span>优惠券：</span>
              <span>商品折扣：</span>
              <span>运费：10元</span>
              <span>订单总金额：3000元+3000积分</span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="操作记录" name="ds">
            <el-table
              ref="multipleTable"
              :data="tableData"
              fit
              class="table"
              :header-cell-style="{background:'#f5f5f5'}"
            >
              <el-table-column label="操作者" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作时间" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="订单状态" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="付款状态" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="发货状态" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center" width="">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      tableData: []
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
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
    margin: 0 16px;
    font-size: 15px;
    .order-info{
      background: #fff;
      padding: 36px;
      margin: 16px 0;
      color: #888;
      border-radius: 16px;
      .order-title{
        padding-bottom: 16px;
        color: #000;
      }
      .info{
        padding-left: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;
        span{
          display: flex;
          width: 32%;
          padding-bottom: 20px
        }
      }
      .receiving-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        background: #fff;
        padding-left: 24px;
        span{
          display: block;
          width: 32%;
          padding-bottom: 20px
        }
      }
      .table{
        border-radius: 10px
      }
    }
    .tab{
      background: #fff;
      padding-bottom: 20px;
      .el-tab-pane{
        padding-left: 16px;
      }
      .el-tabs--card>.el-tabs__header{
        border: none
      }
      .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center
      }
      .el-tabs--card>.el-tabs__header .el-tabs__item{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #E4E7ED;
        border-left: none
      }
      .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
        border: 1px solid #E4E7ED;
        border-bottom: none;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
      }
      .cost-info,.receiving-info,.after-sale-info{
        display: flex;
        flex-wrap: wrap;
        color: #666;
        span{
          display: block;
          width: 32%;
          padding-top: 20px
        }
      }
    }
  }
  .container::-webkit-scrollbar {
    display:none
  }
}
</style>
<style lang="scss" scoped>
.container{
  margin: 0 16px 16px;
}
</style>
