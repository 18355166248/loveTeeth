// components/authorPupop/index.js
const iuser = require('../../common/js/base/user.js');
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
    openType: 'getUserInfo',
    flag: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopup(){
      this.setData({
        flag:false
      })
    },
    hidePopup(){
      this.setData({
        flag: true
      })
    },
    cancelClick(){
      this.hidePopup()
    },
    bindgetuserinfo(e) {
      console.log(e)
      if (e.detail.errMsg != "getUserInfo:ok") {
        this.hidePopup()
      } else {
        iuser.getUserInfo()
        this.triggerEvent('linkClick', {}) 
      }
    }
  }
})