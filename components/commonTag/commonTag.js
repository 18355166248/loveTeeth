// components/commonTag/commonTag.js
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
    }
  }
})