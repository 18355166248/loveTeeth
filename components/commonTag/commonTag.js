// components/commonTag/commonTag.js
const iuser = require('../../common/js/base/user.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageId: {
      type: Number,
      value: ''
    },
    hasUserInfo: {
      type: Boolean,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    openType: 'getUserInfo',
    userFlag: true,
    phoneFlag: true
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.authorPupop = this.selectComponent('#authorPupop')
      this.phonePupop = this.selectComponent('#phonePupop')
      iuser.getUserInfo(
        () => {
          this.authorPupop.togglePopup(false)
          // 授权获取用户信息成功后 判断 是否授权拿到用户手机号 如果没有授权获取手机号 则做处理弹窗授权手机号弹窗
          // this.phonePupop.togglePopup(true)  // 显示弹窗授权手机号弹窗 true:显示 false:隐藏
        },
        () => {
          // 没授权过初次进入页面显示弹窗,否则不显示
          this.authorPupop.togglePopup(true)
        }
      )
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready: function() {}
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
            url: url
          })
          break
        case 2:
          // console.log(this.data.hasUserInfo)
          if (this.data.hasUserInfo) {
            this.linkClick('/subpackages/init/personal/personal')
          } else {
            this.authorPupop.togglePopup(true)
          }
          break
        case 3:
          if (this.data.hasUserInfo) {
            this.linkClick('/subpackages/init/myCard/myCard')
          } else {
            this.authorPupop.togglePopup(true)
          }
          break
      }
    },
    linkClick(url) {
      wx.redirectTo({ url })
    },
    phoneShow(bool) {
      this.phonePupop.togglePopup(bool)
    }
  }
})
