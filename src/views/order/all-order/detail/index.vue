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
        <div class="order-title">商品信息 <span class="number">商品数量：20</span></div>
        <div class="shopping-info">
          <div style="padding-left:24px">
             <el-table
              ref="multipleTable"
              :data="list"
              border
              fit
              class="table"
              :header-cell-style="{background:'#f5f5f5'}"
            >
              <el-table-column label="商品编号" align="center" width="150">
                <template slot-scope="{ row }">
                  <span>{{ row.code }}</span>
                </template>
              </el-table-column>
              <el-table-column label="商品" align="center" width="160">
                <template slot-scope="{ row }">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="图片" align="center" width="100px">
                <template>
                  <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="" class="shopping-pic">
                </template>
              </el-table-column>
              <el-table-column label="属性规格" align="center" width="120">
                <template slot-scope="{ row }">
                  <span>{{ row.code }}</span>
                </template>
              </el-table-column>
              <el-table-column label="数量" prop="classify" align="center" width="80">
                <template slot-scope="{ row }">
                  <span>{{ row.classify }}</span>
                </template>
              </el-table-column>
              <el-table-column label="商品价格" align="center">
                <template slot-scope="{ row }">
                  <div class="card-box">
                    <div class="card">
                      <div class="way">积分抵扣</div>
                      <div class="price">{{ row.price }}</div>
                    </div>
                    <div class="card-way">
                      <div class="buy-way">现金购</div>
                      <div class="price">{{ row.money }}</div>
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="折扣优惠" align="center" width="120px">
                <template slot-scope="{ row }">
                  <span class="link-type">{{ row.num }}</span>
                </template>
              </el-table-column>
              <el-table-column label="折扣优惠类型" align="center" width="110px">
                <template slot-scope="{ row }">
                  <span class="link-type">{{ row.number }}</span>
                </template>
              </el-table-column>
               <el-table-column label="商品最终价格" align="center">
                <template slot-scope="{ row }">
                  <div class="card-box">
                    <div class="card">
                      <div class="way">积分抵扣</div>
                      <div class="price">{{ row.price }}</div>
                    </div>
                    <div class="card-way">
                      <div class="buy-way">现金购</div>
                      <div class="price">{{ row.money }}</div>
                    </div>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
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
          <div style="padding-left:24px">
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
      </div>
      <div class="order-info">
        <div class="order-title">操作信息</div>
        <div class="info">
          <div>
            <div class="operation">
              <span>操作备注：</span>
              <el-input
                placeholder="请输入操作备注不超过20字"
                style="width: 400px;"
                class="filter-item search-inp"
              />
            </div>
            <div class="operation" style="padding-top:16px">
              <span>可执行操作：</span>
              <el-button
                  class="filter-item"
                  type="primary"
                >拆单</el-button>
                <el-button
                  class="filter-item"
                  type="primary"
                >发货</el-button>
                <el-button
                  class="filter-item"
                  type="primary"
                >取消订单</el-button>
            </div>
          </div>

        </div>
      </div>
      <div class="order-info">
        <div class="order-title">操作记录</div>
          <div style="padding-left:24px">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
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
    font-size: 15px;
    .order-info{
      background: #fff;
      padding: 24px;
      margin: 0 0 16px;
      color: #888;
      border-radius: 16px;
      .order-title{
        padding-bottom: 16px;
        color: #000;
        .number{
          color: #999;
          padding-left: 20px;
          font-size:14px
        }
      }
      .info{
        padding-left: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        span{
          display: flex;
          width: 32%;
          padding-bottom: 20px
        }
        .operation{
          display: flex;
          align-items: center;
          span{
            padding: 0
          }
        }
      }
      .shopping-info{
        .table{
          border-radius: 10px;
          .shopping-pic{
            width: 30px;
            height: 30px;
          }
        }
        .card-box{
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          .card{
            width: 210px;
            padding: 0;
            display: flex;
            align-items: center;
            border: 1px solid #EBEEF5;
            border-radius: 6px;
            font-size: 14px;
            .way{
              background: #7cf2cf;
              color:#fff;
              padding: 4px 6px;
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
            }
            .price{
              padding: 4px 6px;
            }
          }
          .card-way{
            width: 150px;
            padding: 0;
            display: flex;
            align-items: center;
            border: 1px solid #EBEEF5;
            border-radius: 6px;
            .buy-way{
              background: #f9d45c;
              color:#fff;
              padding: 4px 6px;
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
            }
            .price{
              padding: 4px 6px;
            }
          }
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
  }
  .container::-webkit-scrollbar {
    display:none
  }
}
</style>
