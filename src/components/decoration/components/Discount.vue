<template>
  <div class="wrap">
    <div class="state">
      <div>
        <div>10:00</div>
        <div>已结束</div>
      </div>
      <div class="active">
        <div>12:00</div>
        <div>抢购中</div>
      </div>
      <div>
        <div>14:00</div>
        <div>即将开始</div>
      </div>
      <div>
        <div>16:00</div>
        <div>即将开始</div>
      </div>
    </div>
    <div class="countdown">
      距本场结束剩余
      <span>00</span>：
      <span>20</span>：
      <span>50</span>
    </div>
    <div class="product">
      <div v-for="(item, index) in product" :key="index">
        <img :src="item.pic" alt />
        <div>
          <div>{{ item.brand }}</div>
          <div>{{ item.name }}</div>
          <div>
            秒杀价：
            <span>￥{{ item.price }}</span>
          </div>
          <div>
            <span>仅剩{{ item.num }}件</span>
            <span>马上抢</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options'],
  data() {
    return {
      product: [
        {
          pic: require('../../../assets/decoration/pic.gif'),
          brand: '稻草人（MEXICAN）',
          name: '肩手提包大容量欧美时尚黑白拼接肩包',
          price: 656.99,
          num: 76
        },
        {
          pic: require('../../../assets/decoration/pic.gif'),
          brand: 'COACH蔻驰',
          name: '女士咖啡色PVC配皮单肩手提包',
          price: 1139.9,
          num: 54
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  padding-top: 15px;
  background: #fff;
  font-size: 13px;
  margin-bottom: 10px;
  > .state {
    text-align: center;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    > div {
      padding: 6px 0;
      flex: 1;
      > div:last-child {
        margin-top: 3px;
      }
    }
    > div.active {
      background: #e02e24;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      position: relative;
    }
    .active::before {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      margin-left: -6px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top: 12px solid #e02e24;
    }
  }
  > .countdown {
    color: #d3d4d4;
    text-align: center;
    border-bottom: 1px solid #f4f4f4;
    padding: 10px 0;
    > span:first-child {
      margin-left: 3px;
    }
    > span {
      background: #333;
      color: #fff;
      font-weight: 700;
      padding: 0 5px;
      border-radius: 20px;
    }
  }
  > .product {
    > div {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f5f5f5;
      padding: 10px;
      > img {
        width: 30%;
      }
      > div {
        width: 70%;
        line-height: 22px;
        font-size: 13px;
        > div:nth-child(2),
        > div:nth-child(3) {
          color: #999;
          > span {
            color: #e02e24;
            font-weight: 700;
            font-size: 14px;
          }
        }
        > div:nth-child(4) {
          font-size: 12px;
          > span:nth-child(1) {
            border: 1px solid #f8b55f;
            color: #f8b55f;
            background: #fdebd3;
            border-radius: 25px;
            padding: 1px 7px;
          }
          > span:nth-child(2) {
            float: right;
            background: #e02e24;
            color: #fff;
            padding: 0 6px;
          }
        }
      }
    }
    > div:last-child {
      border: none;
    }
  }
}
</style>
