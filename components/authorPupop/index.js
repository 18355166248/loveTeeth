// components/authorPupop/index.js
const iuser = require('../../common/js/base/user.js')
const com = require('../../common/js/base/com.js')


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showPhone: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    openType: 'getUserInfo',
    flag: false
  },
  /**
   * 数据监听
   */
  observers: {},
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    ready: function() {},
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    togglePopup(bool) {
      this.setData({
        flag: bool
      })
    },
    cancelClick() {
      this.togglePopup(false)
    },
    bindgetuserinfo(e) {
      if (e.detail.errMsg != 'getUserInfo:ok') {
        this.togglePopup(false)
      } else {
        iuser.getUserInfo()
        this.togglePopup(false)
        this.triggerEvent('phoneShow', true)
      }
    },
    getPhone(e) {
      console.log(e)
      console.log('授权获取手机号')
      //------------------把信息传入后台,后台解密拿手机号
      // 拿到手机号后存入到storage用来判断是否授权过
      // com.storage('phoneNumber', phoneNumber)
    }
  }
})
