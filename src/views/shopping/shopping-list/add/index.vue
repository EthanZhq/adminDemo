<template>
  <div class="wrap">
    <div class="app-container container">
      <div class="step">
        <el-steps :active="1" align-center>
          <el-step title="填写商品基本信息" />
          <el-step title="填写商品详细信息" />
          <el-step title="完成" />
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
          <el-input
            v-model="listQuery.name"
            placeholder="请输入商品名称"
            style="width: 450px;"
            class="filter-item"
          />
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
            <i class="el-icon-plus" />
          </el-upload>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span>商品分组
          </span>
          <el-select v-model="listQuery.groupId" multiple placeholder="请选择商品分组" style="width:360px">
            <el-option v-for="item in group" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span> 商品分类
          </span>
          <el-select v-model="listQuery.typeId" placeholder="请选择商品分类">
            <el-option v-for="item in type" :key="item.id" :label="item.typeName" :value="item.id" />
          </el-select>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span>分享描述
          </span>
          <el-input
            v-model="listQuery.shareDesc"
            placeholder="请输入描述"
            style="width: 450px;"
            class="filter-item"
          />
          <span class="note">(用户分享到朋友圈时候会展示给好友，不超过30字)</span>
        </div>
        <div class="express-box">
          <span class="express-title">
            <span class="star">*</span> 标签
          </span>
          <el-select v-model="listQuery.tagList.id" multiple placeholder="请选择" style="width:360px">
            <el-option v-for="item in tag" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </div>
        <div class="express-box">
          <span class="express-title">服务</span>
          <el-select
            v-model="listQuery.serviceList.id"
            multiple
            placeholder="请选择"
            style="width:360px"
          >
            <el-option
              v-for="item in goodsSerVOs"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
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
          <el-radio v-model="radio" label="1">统一规格</el-radio>
          <el-radio v-model="radio" label="2">多规格</el-radio>
        </div>
        <div>
          <div v-if="radio=='1' ">
            <div class="express-box">
              <span class="express-title">商品编码</span>
              <el-input
                v-model="listQuery.code"
                placeholder="请输入商家编码"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">
                <span class="star">*</span> 成本价
              </span>
              <el-input
                v-model="listQuery.costPrice"
                placeholder="请输入商品成本价"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">
                <span class="star">*</span> 库存
              </span>
              <el-input
                v-model="listQuery.storeCount"
                placeholder="请输入商品库存"
                style="width: 450px;"
                class="filter-item"
              />
              <span class="note">总库存,库存为 0 时，会放到『已售罄』的商品列表，用户的购物车中会实时更新,必选</span>
            </div>
            <div class="express-box">
              <span class="express-title">重量</span>
              <el-input
                v-model="listQuery.weight"
                placeholder="请输入商品单件重量"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
            <div class="express-box">
              <span class="express-title">体积</span>
              <el-input
                v-model="listQuery.volume"
                placeholder="请输入商品单件体积"
                style="width: 450px;"
                class="filter-item"
              />
            </div>
          </div>
          <div v-else>
            <div class="express-box role">
              <span class="express-title">
                <span class="star">*</span>规格
              </span>
              <div class="addRole">
                <div v-for="(item,index) in roleArray" :key="index">
                  <div v-if="item.roleName!='' " class="box">
                    <div class="role-title">
                      <span class="express-title">规格名</span>
                      <el-tag :disable-transitions="false">{{ item.roleName }}</el-tag>
                    </div>
                    <div class="role-title">
                      <span class="express-title">规格值</span>
                      <el-tag
                        v-for="tag in item.dynamicTags"
                        :key="tag"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag,index)"
                      >{{ tag }}</el-tag>
                      <el-input
                        v-if="item.inputVisible"
                        ref="saveTagInput"
                        v-model="inputValue"
                        class="input-new-tag"
                        size="small"
                        @keyup.enter.native="handleInputConfirm(index)"
                        @blur="handleInputConfirm(index)"
                      />
                      <el-button
                        v-else
                        class="button-new-tag"
                        size="small"
                        @click="showInput(index)"
                      >添加规格值</el-button>
                    </div>
                  </div>
                </div>
                <el-button class="filter-item" type="primary" @click="dialog = true">添加规格</el-button>
              </div>
            </div>
            <div class="express-box add-table">
              <span class="express-title">
                <span class="star">*</span> 价格
              </span>
              <el-table
                ref="multipleTable"
                :data="specArray"
                stripe
                fit
                border
                highlight-current-row
                :span-method="arraySpanMethod"
                class="table"
              >
                <el-table-column
                  v-for="(item,ind) in tableSpecsHeader"
                  :key="ind"
                  :label="item.key"
                  :width="item.width"
                  :align="item.align"
                  :property="item.property"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row[scope.column.property][ind].key"
                      placeholder
                      class="filter-item"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  v-for="(row,idx) in tableHeader"
                  :key="idx"
                  :label="row.lable"
                  :width="row.width"
                  :align="row.align"
                  :property="row.property"
                >
                  <template slot-scope="scope">
                    <img
                      v-if="row.property=='imgId'"
                      src="../../../../assets/image/add.png"
                      alt
                      style="width:36px;height:36px"
                    >
                    <div v-else-if="row.property=='prices'">
                      <img
                        v-if="row.prices ==''"
                        src="../../../../assets/image/add.png"
                        alt
                        style="width:36px;height:36px"
                        @click="modal = true"
                      >
                      <div v-else class="card-box">
                        <div v-for="(item,index) in row.prices" :key="index" class="card">
                          <div class="way">{{ item.type }}</div>
                          <div class="price">{{ item.price }}</div>
                        </div>
                      </div>
                    </div>
                    <el-input
                      v-else
                      v-model="scope.row[scope.column.property]"
                      placeholder
                      class="filter-item"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="express-box">
            <span class="express-title">
              <span class="star">*</span> 划线价
            </span>
            <el-input
              v-model="listQuery.linePrice"
              placeholder="请输入商品划线价"
              style="width: 450px;"
              class="filter-item"
            />
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
              <el-input
                v-model="listQuery.virtualSalesSum"
                placeholder="请输入商品虚拟销量"
                style="width: 450px;"
                class="filter-item"
              />
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
          <span class="express-title">
            <span class="star">*</span>运费信息
          </span>
          <div class="other">
            <el-radio v-model="listQuery.isPinkage" label="0">卖家包邮</el-radio>
            <el-radio v-model="listQuery.isPinkage" label="1" style="margin-top:16px">买家承担运费</el-radio>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible" width="30%" top="16%">
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
      <el-dialog :visible.sync="dialog" width="30%" top="16%">
        <div>
          <span class="service-name">规格名</span>
          <el-input
            v-model="roleArray.roleName"
            maxlength="10"
            placeholder="请输入规格名"
            style="width: 200px;"
            class="filter-item tags-inp"
          />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmData">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog :visible.sync="modal" width="30%" top="16%">
        <div>
          <div class="buy-way">
            <span class="way">规格名</span>
            <el-select
              v-model="obj.way"
              placeholder="请选择"
              clearable
              class="filter-item select-box"
              style="width: 130px"
            >
              <el-option v-for="item in way" :key="item.key" :label="item.state" :value="item.key" />
            </el-select>
          </div>
          <div v-if="obj.way == '0'" class="buy-way">
            <span class="way">积分</span>
            <el-input
              v-model="listQuery.GName"
              placeholder="请输入积分"
              style="width: 200px;"
              class="filter-item search-inp"
            />
          </div>
          <div v-else-if="obj.way == '1'" class="buy-way">
            <span class="way">现金</span>
            <el-input
              v-model="listQuery.GName"
              placeholder="请输入现金"
              style="width: 200px;"
              class="filter-item search-inp"
            />
          </div>
          <div v-else>
            <div class="buy-way">
              <span class="way">积分</span>
              <el-input
                v-model="listQuery.GName"
                placeholder="请输入积分"
                style="width: 200px;"
                class="filter-item search-inp"
              />
            </div>
            <div class="buy-way">
              <span class="way">现金</span>
              <el-input
                v-model="listQuery.GName"
                placeholder="请输入现金"
                style="width: 200px;"
                class="filter-item search-inp"
              />
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button>取 消</el-button>
          <el-button type="primary">确 定</el-button>
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
      obj: {
        way: ''
      },
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
            id: '',
            price: '',
            type: ''
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
      tableHeader: [
        {
          lable: '规格图片',
          width: '80',
          align: 'center',
          property: 'pic'
        },

        {
          lable: '商家编码',
          width: '160',
          align: 'center',
          property: 'no'
        },
        {
          lable: '销售价',
          width: '',
          align: 'center',
          property: 'prices'
        },
        {
          lable: '成本价',
          width: '160',
          align: 'center',
          property: 'market'
        },
        {
          lable: '库存',
          width: '140',
          align: 'center',
          property: 'count'
        },
        {
          lable: '重量',
          width: '100',
          align: 'center',
          property: 'weight'
        },
        {
          lable: '体积',
          width: '100',
          align: 'center',
          property: 'volume'
        }
      ],
      tableData: [],
      way: [
        { key: '0', state: '0元购' },
        { key: '1', state: '现金购' },
        { key: '2', state: '积分抵扣' }
      ],
      inputVisible: false,
      inputValue: '',
      dialogVisible: false,
      dialog: false,
      modal: false,
      roleArray: [],
      tableSpecsHeader: [],
      specArray: [],
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
      gId: '',
      imageUrl: ''
    }
  },
  mounted() {
    this.gId = this.$route.query.id
    // this.getDetail()
    this.getData()
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      const totalRow = this.specArray.length
      const totalCol = this.tableSpecsHeader.length
      if (columnIndex < totalCol) {
        const currentSpecRowId = this.specArray[rowIndex].specs[columnIndex].key
        // const currentSpecRowId = this.specArray[rowIndex].specs[columnIndex].id
        let maxIndex = 1
        let need = false
        if (rowIndex - 1 >= 0) {
          // 扫描前一个元素是否一样，如果一样，就该行隐藏
          for (let index = rowIndex - 1; index >= 0; index--) {
            const preSpecRowId = this.specArray[index].specs[columnIndex].key
            // const preSpecRowId = this.specArray[index].specs[columnIndex].id
            console.log(currentSpecRowId + '--' + preSpecRowId)
            if (currentSpecRowId === preSpecRowId) {
              // 需要合并
              return [0, 0]
            } else {
              break
            }
          }
        }
        // 扫描后一个元素是否一样，如果一样，就合并
        if (rowIndex + 1 < totalRow) {
          for (let index = rowIndex + 1; index < totalRow; index++) {
            const nextSpecRowId = this.specArray[index].specs[columnIndex].key
            // const nextSpecRowId = this.specArray[index].specs[columnIndex].id
            console.log(currentSpecRowId + '--' + nextSpecRowId)
            if (currentSpecRowId === nextSpecRowId) {
              // 需要合并
              need = true
              maxIndex += 1
            } else {
              break
            }
          }
        }
        if (need) {
          return [maxIndex, 1]
        } else {
          return [1, 1]
        }
      }
    },
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
    },
    handleClose(tag, index) {
      this.roleArray[index].dynamicTags.splice(
        this.roleArray[index].dynamicTags.indexOf(tag),
        1
      )
    },

    showInput(index) {
      this.roleArray[index].inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm(index) {
      const inputValue = this.inputValue
      const list = []
      const a = ['a1', 'a2']
      const b = ['b1', 'b2']
      const c = ['c1', 'c2']
      const d = ['d1', 'd2']
      // d1c1b1a1  d2c1b1a1 d1c2b1a1 d2c2b1a1
      list
        .push(a)
        .push(b)
        .push(c)
        .push(d)
      for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j < list[i].length; j++) {
          console.log(list[i][j])
        }
      }

      console.log(inputValue)
      if (inputValue) {
        this.roleArray[index].dynamicTags.push(inputValue)
        for (let j = 0; j < this.roleArray.length; j++) {
          const specsTemp = []
          specsTemp.push({ id: 3, key: inputValue })
          this.specArray.push({
            specs: specsTemp,
            pic: { id: 0, url: '' },
            no: '',
            prices: [],
            market: '',
            count: '',
            weight: '',
            volume: ''
          })
        }
        // console.log(this.roleArray)
        // const objData = {
        //   pricce: '',
        //   volume: '',
        //   weight: '',
        //   number: '',
        //   costPrice: '',
        //   code: '',
        //   color: this.roleArray[index].dynamicTags[0]
        // }
        // this.tableData.push(objData)
      }
      this.roleArray[index].inputVisible = false
      this.inputValue = ''
    },
    confirmData() {
      this.dialog = false
      const obj = {
        roleName: this.roleArray.roleName,
        dynamicTags: [],
        inputVisible: false
      }

      this.roleArray.push(obj)

      this.tableSpecsHeader.push({
        id: 1,
        key: this.roleArray.roleName,
        width: '100',
        align: 'center',
        property: 'specs'
      })
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
        .other {
          display: flex;
          flex-direction: column;
        }
        .creat-service {
          margin-left: 36px;
        }
        .sales-volume {
          display: flex;
          flex-direction: column;
          span {
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
      .sale {
        display: flex;
        align-items: flex-start;
      }
      .role {
        display: flex;
        align-items: flex-start;
        .addRole {
          border: 1px solid #e5e5e5;
          width: 100%;
          padding: 16px;
          .box {
            background: #f8f8f8;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 20px;
            .role-title {
              display: flex;
              align-items: center;
              margin-bottom: 20px;
              .express-title {
                width: 60px;
              }
            }
          }
        }
      }
      .add-table {
        display: flex;
        align-items: flex-start;
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
  .service-name {
    margin-right: 36px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
  .avatar {
    width: 48px;
    height: 48px;
    display: block;
  }
  .buy-way {
    margin-top: 16px;
    display: flex;
    align-items: center;
    .way {
      width: 50px;
      margin-right: 16px;
    }
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
.el-tag + .el-tag {
  margin-right: 10px;
}
.el-tag {
  margin-right: 10px;
}
.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  vertical-align: bottom;
}
</style>
