<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="member-detail">
        <div class="info">
          <h3>基本信息</h3>
          <div class="general-info">
            <div class="avatar">
              <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt >
            </div>
            <div class="user-info">
              <span>用户名称：骑着毛驴上高速</span>
              <span>手机号：13609249982</span>
              <span>会员等级：VIP1</span>
              <span>会员积分：5200</span>
              <span>成为会员时间：2012-20-20 20:20:20</span>
            </div>
          </div>
          <div class="member-btn">
            <el-button type="primary">冻结</el-button>
            <el-button type="primary">修改会员等级</el-button>
            <el-button type="primary">赠送优惠券</el-button>
          </div>
        </div>
        <div class="info">
          <h3>账户资产</h3>
          <div class="accout">
            <span class="accout-title">积分</span>
            <div class="accout-content">
              <span>当前积分：2500</span>
              <span>累计积分：5200</span>
            </div>
          </div>
          <div class="accout">
            <span class="accout-title">优惠券</span>
            <div class="accout-content">
              <span>当前积分：2500</span>
              <span>累计积分：5200</span>
            </div>
          </div>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <el-select
              v-model="listQuery.type"
              placeholder="商品三级分类"
              clearable
              class="filter-item select-box"
              style="width: 160px;margin-right:16px"
            >
              <el-option
                v-for="item in calendarTypeOptions"
                :key="item.key"
                :label="item.display_name+'('+item.key+')'"
                :value="item.key"
              />
            </el-select>
            <el-date-picker
              v-model="listQuery.time"
              align="right"
              type="date"
              placeholder="评论时间"
              style="margin-right:16px"
              :picker-options="pickerOption"
            />
            <el-button class="filter-item" type="primary">筛选</el-button>
            <div class="table-box">
              <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                stripe
                border
                fit
                highlight-current-row
                class="table"
              >
                <el-table-column
                  type="selection"
                  align="center"
                  width="50"
                  style="background-color:#000"
                />
                <el-table-column
                  v-for="(item,idx) in tableHeader"
                  :key="idx"
                  :label="item.lable"
                  :width="item.width"
                  :align="item.align"
                  :property="item.property"
                >
                  <template slot-scope="scope">
                    <router-link :to="'/all-order/detail/' + scope.row.id">
                      <span>{{ scope.row[scope.column.property] }}</span>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
            <el-select
              v-model="listQuery.type"
              placeholder="商品三级分类"
              clearable
              class="filter-item select-box"
              style="width: 160px;margin-right:16px"
            >
              <el-option
                v-for="item in calendarTypeOptions"
                :key="item.key"
                :label="item.display_name+'('+item.key+')'"
                :value="item.key"
              />
            </el-select>
            <el-date-picker
              v-model="listQuery.time"
              align="right"
              type="date"
              placeholder="评论时间"
              style="margin-right:16px"
              :picker-options="pickerOption"
            />
            <el-button class="filter-item" type="primary">批量删除</el-button>
            <div class="table-box">
              <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                stripe
                border
                fit
                highlight-current-row
                class="table"
              >
                <el-table-column
                  type="selection"
                  align="center"
                  width="50"
                  style="background-color:#000"
                />
                <el-table-column
                  v-for="(item,idx) in tableHeader"
                  :key="idx"
                  :label="item.lable"
                  :width="item.width"
                  :align="item.align"
                  :property="item.property"
                >
                  <template slot-scope="scope">
                    <router-link :to="'/all-order/detail/' + scope.row.id">
                      <span>{{ scope.row[scope.column.property] }}</span>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="角色管理" name="third">
            <el-select
              v-model="listQuery.type"
              placeholder="商品三级分类"
              clearable
              class="filter-item select-box"
              style="width: 160px;margin-right:16px"
            >
              <el-option
                v-for="item in calendarTypeOptions"
                :key="item.key"
                :label="item.display_name+'('+item.key+')'"
                :value="item.key"
              />
            </el-select>
            <el-date-picker
              v-model="listQuery.time"
              align="right"
              type="date"
              placeholder="评论时间"
              style="margin-right:16px"
              :picker-options="pickerOption"
            />
            <el-button class="filter-item" type="primary">批量删除</el-button>
            <div class="table-box">
              <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                stripe
                border
                fit
                highlight-current-row
                class="table"
              >
                <el-table-column
                  type="selection"
                  align="center"
                  width="50"
                  style="background-color:#000"
                />
                <el-table-column
                  v-for="(item,idx) in tableHeader"
                  :key="idx"
                  :label="item.lable"
                  :width="item.width"
                  :align="item.align"
                  :property="item.property"
                >
                  <template slot-scope="scope">
                    <router-link :to="'/all-order/detail/' + scope.row.id">
                      <span>{{ scope.row[scope.column.property] }}</span>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">
            <el-select
              v-model="listQuery.type"
              placeholder="商品三级分类"
              clearable
              class="filter-item select-box"
              style="width: 160px;margin-right:16px"
            >
              <el-option
                v-for="item in calendarTypeOptions"
                :key="item.key"
                :label="item.display_name+'('+item.key+')'"
                :value="item.key"
              />
            </el-select>
            <el-date-picker
              v-model="listQuery.time"
              align="right"
              type="date"
              placeholder="评论时间"
              style="margin-right:16px"
              :picker-options="pickerOption"
            />
            <el-button class="filter-item" type="primary">批量删除</el-button>
            <div class="table-box">
              <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                stripe
                border
                fit
                highlight-current-row
                class="table"
              >
                <el-table-column
                  type="selection"
                  align="center"
                  width="50"
                  style="background-color:#000"
                />
                <el-table-column
                  v-for="(item,idx) in tableHeader"
                  :key="idx"
                  :label="item.lable"
                  :width="item.width"
                  :align="item.align"
                  :property="item.property"
                >
                  <template slot-scope="scope">
                    <router-link :to="'/all-order/detail/' + scope.row.id">
                      <span>{{ scope.row[scope.column.property] }}</span>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="dd">
            <el-select
              v-model="listQuery.type"
              placeholder="商品三级分类"
              clearable
              class="filter-item select-box"
              style="width: 160px;margin-right:16px"
            >
              <el-option
                v-for="item in calendarTypeOptions"
                :key="item.key"
                :label="item.display_name+'('+item.key+')'"
                :value="item.key"
              />
            </el-select>
            <el-date-picker
              v-model="listQuery.time"
              align="right"
              type="date"
              placeholder="评论时间"
              style="margin-right:16px"
              :picker-options="pickerOption"
            />
            <el-button class="filter-item" type="primary">批量删除</el-button>
            <div class="table-box">
              <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                stripe
                border
                fit
                highlight-current-row
                class="table"
              >
                <el-table-column
                  type="selection"
                  align="center"
                  width="50"
                  style="background-color:#000"
                />
                <el-table-column
                  v-for="(item,idx) in tableHeader"
                  :key="idx"
                  :label="item.lable"
                  :width="item.width"
                  :align="item.align"
                  :property="item.property"
                >
                  <template slot-scope="scope">
                    <router-link :to="'/all-order/detail/' + scope.row.id">
                      <span>{{ scope.row[scope.column.property] }}</span>
                    </router-link>
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
export default {
  data() {
    return {
      describe: '',
      activeName: 'first',
      listQuery: {
        type: '',
        time: ''
      },
      pickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      tableHeader: [
        {
          lable: '订单编号',
          width: '180',
          align: 'center',
          property: 'id'
        },

        {
          lable: '用户',
          width: '',
          align: 'center',
          property: 'user'
        },
        {
          lable: '下单时间',
          width: '200',
          align: 'center',
          property: 'time'
        },
        {
          lable: '数量',
          width: '100',
          align: 'center',
          property: 'number'
        },
        {
          lable: '交易方式',
          width: '120',
          align: 'center',
          property: 'way'
        },
        {
          lable: '订单总金额',
          width: '180',
          align: 'center',
          property: 'price'
        },
        {
          lable: '应付金额',
          width: '180',
          align: 'center',
          property: 'money'
        },
        {
          lable: '订单状态',
          width: '120',
          align: 'center',
          property: 'orderStatus'
        },
        {
          lable: '支付状态',
          width: '120',
          align: 'center',
          property: 'status'
        },
        {
          lable: '发货状态',
          width: '120',
          align: 'center',
          property: 'deliveryStatus'
        },
        {
          lable: '快递',
          width: '120',
          align: 'center',
          property: 'express'
        }
      ],
      tableData: [
        {
          id: '2019112809346666',
          user: '骑着毛驴上高速',
          time: '2019-12-12 12:00:00',
          company: '韵达快递',
          cost: '10.00',
          number: '2',
          orderStatus: '待付款',
          deliveryStatus: '已发货',
          status: '未支付',
          price: '120.00 + 8000积分',
          money: '120.00 + 8000积分',
          express: '申通快递'
        },
        {
          id: 2019112809346666,
          user: '骑着毛驴上高速',
          time: '2019-12-12 12:00:00',
          company: '韵达快递',
          cost: '10.00',
          number: '2',
          orderStatus: '待付款',
          deliveryStatus: '已发货',
          status: '未支付',
          price: '120.00 + 8000积分',
          money: '120.00 + 8000积分',
          express: '申通快递'
        }
      ],
      calendarTypeOptions: [
        { key: 'CN', display_name: 'China' },
        { key: 'US', display_name: 'USA' },
        { key: 'JP', display_name: 'Japan' },
        { key: 'EU', display_name: 'Eurozone' }
      ]
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
    .member-detail {
      background: #fff;
      padding: 24px 32px 24px 32px;
      .info {
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 24px;
        margin-bottom: 24px;
        h3 {
          margin: 0;
        }
        .general-info {
          display: flex;
          align-items: center;
          padding: 20px 0;
          .avatar {
            margin-right: 32px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .user-info {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            color: #888;
            font-size: 14px;
            span {
              width: 50%;
              display: block;
              line-height: 32px;
            }
          }
        }
        .accout {
          display: flex;
          flex-direction: column;
          padding-top: 20px;
          margin-bottom: 24px;
          color: #666;
          .accout-title {
            padding-bottom: 16px;
          }
          .accout-content {
            display: flex;
            font-size: 14px;
            span {
              width: 50%;
              display: block;
            }
          }
        }
        .accout:last-child {
          padding: 0;
          margin: 0;
        }
        .member-btn {
          margin-left: 130px;
        }
      }
      .table-box {
        margin-top: 20px;
        .table {
          border-radius: 10px;
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
  border-bottom: 1px solid #999;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border: 1px solid #999;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
}
</style>
