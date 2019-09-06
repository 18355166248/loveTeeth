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
    },
    hasUserInfo:{
      type: Boolean,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    openType: 'getUserInfo'
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.authorPupop = this.selectComponent('#authorPupop');
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready: function() {
      // 在组件实例被从页面节点树移除时执行
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * pageId:1 首页 2 我的爱齿怡 3 我的卡片
     */
    navigatorClick(e) {
      let id = Number(e.currentTarget.id),
        url
      switch (id) {
        case 1:
          url = '/pages/home/home'
          wx.redirectTo({
            url: url,
          })
          break
        case 2:
          console.log(this.data.hasUserInfo)
          if(this.data.hasUserInfo){
            this.linkClick()
          }else{
            this.authorPupop.showPopup()
          }
          break
        case 3:
          url = '/subpackages/pages/myCard/myCard'
          wx.redirectTo({
            url: url,
          })
          break
      }
    },
    linkClick() {
      wx.redirectTo({
        url: '/subpackages/pages/personal/personal',
      })
    }
  }
})