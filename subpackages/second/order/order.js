// pages/order/order.js
const iuser = require('../../../common/js/base/user.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hasUserInfo: false,
    userInfo: {},
    orderList: [{
      bg: '/images/order/bg.png',
      logo: '/images/order/logo.png',
      name: '爱齿怡口腔诊所',
      address: '上海市上海路666号',
      tel: '021-88888888',
      time: '9:30~18:00（周六、周日10:00~19:00）'
    }, {
      bg: '/images/order/bg.png',
      logo: '/images/order/logo.png',
      name: '爱齿怡口腔诊所',
      address: '上海市上海路666号',
      tel: '021-88888888',
      time: '9:30~18:00（周六、周日10:00~19:00）'
    }, {
      bg: '/images/order/bg.png',
      logo: '/images/order/logo.png',
      name: '爱齿怡口腔诊所',
      address: '上海市上海路666号',
      tel: '021-88888888',
      time: '9:30~18:00（周六、周日10:00~19:00）'
    }, {
      bg: '/images/order/bg.png',
      logo: '/images/order/logo.png',
      name: '爱齿怡口腔诊所',
      address: '上海市上海路666号',
      tel: '021-88888888',
      time: '9:30~18:00（周六、周日10:00~19:00）'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})