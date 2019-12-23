<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="order-info">
        <div class="order-title">
          <div class="title-tap">
            <div>
            原订单 <span class="number">订单号：201907158505346668</span>
            </div>
            <div>
            <el-button
              class="filter-item"
              type="primary"
            >新建评论</el-button>
            <el-button
              class="filter-item"
              type="primary"
            >新建</el-button>
            </div>
          </div>
        </div>
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
        <div class="order-title">
           <div class="title-tap">
              <div>
                新订单 <span class="number">订单号：201907158505346668</span>
              </div>
            <div>
            <el-button
              class="filter-item"
              type="primary"
            >删除</el-button>
            </div>
          </div>
        </div>
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
              <el-table-column label="商品价格" align="center" width="390">
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
              <el-table-column label="折扣优惠" align="center" width="120">
                <template slot-scope="{ row }">
                  <span class="link-type">{{ row.num }}</span>
                </template>
              </el-table-column>
              <el-table-column label="折扣优惠类型" align="center" width="110">
                <template slot-scope="{ row }">
                  <span class="link-type">{{ row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="商品最终价格" align="center" width="390">
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
                <el-table-column
                  fixed="right"
                  align="center"
                  label="操作"
                  width="200">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
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
    },
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
        .title-tap{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .number{
            color: #999;
            padding-left: 20px;
            font-size:14px
          }
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
