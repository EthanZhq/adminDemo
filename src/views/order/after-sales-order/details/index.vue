<template>
  <div class="wrap">
    <div class="app-container container">
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
              <el-table-column label="图片" align="center" width="80">
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
        <div class="order-title">退款信息</div>
        <div class="shopping-info">
          <div class="receiving-info">
            <span>退款单号：----</span>
            <span>申请时间：2012-20-12 08:00:00</span>
            <span>申请状态：待通过</span>
            <span>退款单号：----</span>
            <span>订单商品：</span>
          </div>
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
              <el-table-column label="图片" align="center" width="80px">
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
            <div class="refund-info">
              <span>订单运费：10元</span>
              <span>原订单状态：待发货</span>
              <span>订单优惠：10元</span>
              <span>优惠类型：优惠券</span>
              <span>订单金额：3000.00元+700积分</span>
              <span>收货人：刘翔</span>
              <span>联系方式：136094545545</span>
            </div>
            <div class="infomation">
              <span>退货原因：尺码不合适</span>
              <div class="picture">
                <span>图片凭证：</span>
                <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="">
              </div>
            </div>
            <div class="infomation">
              <div class="inp">
                <span>运费：</span>
                <el-radio v-model="radio" label="1">退运费</el-radio>
                <el-radio v-model="radio" label="2">不退运费</el-radio>
                <span style="font-size:12px">请选择是否退运费</span>
              </div>
              <div class="inp">
                <span>订单运费：</span>
                <el-input
                  style="width: 200px;"
                  class="filter-item search-inp"
                />
              </div>
              <div class="inp">
                <span>优惠券：</span>
                <el-radio v-model="radio" label="1">返还</el-radio>
                <el-radio v-model="radio" label="2">不返还</el-radio>
              </div>
            </div>
            <div class="button">
              <el-button
                class="filter-item"
                type="primary"
              >通过</el-button>
              <el-button
                class="filter-item"
                type="primary"
              >不通过</el-button>
              <el-button
                class="filter-item"
                type="primary"
              >退款</el-button>
              <el-button
                class="filter-item"
                type="primary"
                icon="el-icon-edit"
              >取消</el-button>
            </div>
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
      activeName: 'first',
      radio: '1',
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
      .refund-info{
        display: flex;
        flex-direction: column;
        span{
          padding-top: 20px
        }
      }
      .button{
        display: flex;
        justify-content: center;
        padding-top: 20px
      }
      .infomation{
        background: #f5f5f5;
        margin-top: 20px;
        padding: 12px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        .inp{
          margin-top: 16px
        }
        .picture{
          display: flex;
          align-items: center;
          padding-top: 20px;
          img{
            width: 60px;
            height: 60px;
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
          width: 50%;
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
<style lang="scss" scoped>
.container{
  margin: 0 16px 16px;
}
</style>
