<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="search-container">
        <el-input
          v-model="listQuery.condition"
          placeholder="订单编号/用户/收货人/联系电话"
          style="width: 240px;"
          class="filter-item block"
        />
        <el-select
          v-model="listQuery.shippingName"
          placeholder="快递公司"
          clearable
          class="filter-item block"
          style="width: 120px"
        >
          <el-option
            v-for="item in companyArray"
            :key="item"
            :label="item.display_name"
            :value="item"
          />
        </el-select>
        <el-select
          v-model="listQuery.SStatus"
          placeholder="发货状态"
          clearable
          class="filter-item block"
          style="width: 120px"
        >
          <el-option
            v-for="item in deliveryStatusArray"
            :key="item"
            :label="item.display_name"
            :value="item"
          />
        </el-select>
        <div class="block">
          <el-date-picker
            v-model="listQuery.addTime"
            align="right"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="下单时间"
            style="width:160px"
            :picker-options="pickerOption"
          />
        </div>
        <div class="block">
          <el-date-picker
            v-model="listQuery.payTime"
            align="right"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="支付时间"
            style="width:160px"
            :picker-options="pickerOption"
          />
        </div>
        <el-button class="filter-item" type="primary" @click="handleFilter">查询</el-button>
      </div>
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
        <el-table-column type="selection" align="center" width="50" style="background-color:#000" />
        <el-table-column
          v-for="(item,idx) in tableHeader"
          :key="idx"
          :label="item.lable"
          :width="item.width"
          :align="item.align"
          :property="item.property"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[scope.column.property] }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.sstatus == 0"
              type="primary"
              size="small"
              @click="deliveryTap"
            >去发货</el-button>
            <el-button
              v-else-if="scope.row.sstatus == 1"
              type="primary"
              size="small"
              @click="detailTap(scope)"
            >详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show="total>0"
      :page.sync="listQuery.page"
      :total="total"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogType==='add'?'发货':'发货详情'"
      width="36%"
      top="15%"
    >
      <div class="delivery-detail">
        <div class="detail-info">
          <span class="info-title">收货人：</span>
          <span>{{ temp.consignee }}</span>
        </div>
        <div class="detail-info">
          <span class="info-title">收货地址：</span>
          <span>{{ temp.address }}</span>
        </div>
        <div class="detail-info">
          <span class="info-title">联系电话：</span>
          <span>{{ temp.mobile }}</span>
        </div>
        <div class="detail-info">
          <span class="info-title">备注：</span>
          <span>{{ temp.userNote }}</span>
        </div>
      </div>
      <div v-if="dialogType=='detail'" class="delivery-detail">
        <div class="detail-info">
          <span class="info-title">快递公司：</span>
          <span>{{ temp.shippingName }}</span>
        </div>
        <div class="detail-info">
          <span class="info-title">快递单号：</span>
          <span>{{ temp.invoiceNo }}</span>
        </div>
        <div class="detail-info">
          <span class="info-title">操作者：</span>
          <span>{{ temp.createUser }}</span>
        </div>
        <div class="detail-info">
          <span class="info-title">操作时间：</span>
          <span>{{ temp.createTime }}</span>
        </div>
      </div>
      <div v-else-if="dialogType=='add'" class="express-modal">
        <div class="express">
          <span>快递公司：</span>
          <el-select
            v-model="shippingDto.shippingName"
            placeholder="请选择快递公司"
            clearable
            class="filter-item block"
            style="width: 120px"
          >
            <el-option
              v-for="item in companyList"
              :key="item.companyId"
              :label="item.companyName"
              :value="item.companyId"
            />
          </el-select>
        </div>
        <div class="express">
          <span>快递单号：</span>
          <el-input
            v-model="shippingDto.invoiceNo"
            placeholder="请输入快递单号"
            style="width: 200px;"
            class="filter-item tags-inp"
          />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmData()">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import {
  getDeliveryOrdersList,
  deliveryOrder,
  getShippingList,
  deliveryDetail
} from '@/api/order'
export default {
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        condition: '',
        status: '',
        shippingName: '',
        payTime: '',
        addTime: '',
        page: 1,
        limit: 10
      },
      shippingDto: {
        invoiceNo: '',
        oid: 0,
        shippingName: ''
      },
      companyArray: ['全部', 'EMS', '顺丰快递', '申通快递'],
      deliveryStatusArray: ['待发货', '已发货', '全部'],
      listLoading: false,
      dialogVisible: false,
      dialogType: 'detail',
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
          property: 'code'
        },
        {
          lable: '用户',
          width: '160',
          align: 'center',
          property: 'username'
        },
        {
          lable: '下单时间',
          width: '200',
          align: 'center',
          property: 'addTime'
        },
        {
          lable: '数量',
          width: '80',
          align: 'center',
          property: 'num'
        },
        {
          lable: '收货人',
          width: '120',
          align: 'center',
          property: 'consignee'
        },
        {
          lable: '联系电话',
          width: '160',
          align: 'center',
          property: 'phone'
        },
        {
          lable: '快递公司',
          width: '120',
          align: 'center',
          property: 'shippingName'
        },
        {
          lable: '物流费用',
          width: '80',
          align: 'center',
          property: 'shippingPrice'
        },
        {
          lable: '发货状态',
          width: '120',
          align: 'center',
          property: 'sstatus'
        },
        {
          lable: '支付时间',
          width: '180',
          align: 'center',
          property: 'payTime'
        },
        {
          lable: '订单总价',
          width: '180',
          align: 'center',
          property: 'price'
        }
      ],
      tableData: [],
      companyList: [],
      temp: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取表格数据
    getList() {
      this.listLoading = true
      getDeliveryOrdersList(this.listQuery).then(response => {
        this.tableData = response.data
        this.total = response.count
        setTimeout(() => {
          this.listLoading = false
        }, 1000)
      })
    },
    // 查询
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    // 详情
    detailTap(scope) {
      this.dialogType = 'detail'
      this.dialogVisible = true
      deliveryDetail(scope.row.id).then(response => {
        this.temp = response.data
        console.log(this.temp)
      })
    },
    // 发货
    deliveryTap() {
      this.dialogType = 'add'
      this.dialogVisible = true
      getShippingList().then(response => {
        this.companyList = response.data.companyList
      })
    },
    // 确认发货
    confirmData() {
      const isAdd = this.dialogType === 'add'
      if (isAdd) {
        deliveryOrder(this.shippingDto).then(response => {
          this.getList()
        })
      }
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
    margin: 0 16px;
    .search-container {
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .block {
        margin-right: 16px;
      }
    }
    .table {
      width: 100%;
      margin-top: 12px;
      border-radius: 10px;
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }

  .delivery-detail {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .detail-info {
      width: 50%;
      display: flex;
      padding-top: 20px;
      .info-title {
        display: block;
        width: 80px;
      }
    }
  }
  .express-modal {
    display: flex;
    flex-direction: column;
    .express {
      display: flex;
      align-items: center;
      margin-top: 24px;
      span {
        width: 100px;
        display: block;
        padding-right: 16px;
      }
    }
    .dialog-footer {
      align-self: flex-end;
      margin-top: 16px;
    }
  }
}
</style>
<style>
.el-dialog__body {
  padding: 0 20px 30px;
}
.el-table,
.el-table__expanded-cell {
  background: none;
  width: 100%;
}
.pagination-container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
</style>
