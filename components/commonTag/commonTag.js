// components/commonTag/commonTag.js
const iuser = require('../../common/js/base/user.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageId: {
      type: Number,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    openType:'getUserInfo'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * pageId:1 首页 2 我的爱齿怡 3 我的卡片
     */
    navigatorClick(e) {
      let id = Number(e.currentTarget.id),url
      switch (id) {
        case 1:
          url = '/pages/home/home'
          break
        case 2:
          url = '/pages/personal/personal'
          break
        case 3:
          url = '/pages/myCard/myCard'
          break
      }
      wx.redirectTo({
        url: url,
      })
    },
    bindgetuserinfo(e){
      // console.log(e)
      if (e.detail.errMsg !="getUserInfo:ok"){
        wx.showModal({
          title: '提示',
          content: '该程序需要获取您的用户信息',
          showCancel:false
        })
      }else{
        iuser.getUserInfo(()=>{
          wx.redirectTo({
            url: '/pages/personal/personal',
          })
        })
      }
    }
  }
})