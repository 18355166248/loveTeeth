// pages/personal/personal.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardNo: 888,
    cur: 1800,
    max: 99999,
    active: '',
    personalList: [{
      src: '/images/personal/card_bg_1.png',
      url: '',
      txt: '点击查看',
      color: '#2e88c1'
    }, {
      src: '/images/personal/card_bg_2.png',
      url: '',
      txt: '点击查看',
      color: '#4da35f'
    }, {
      src: '/images/personal/card_bg_3.png',
      url: '',
      txt: '点击查看',
      color: '#45c7e1'
    }],
    menuList: [{
      src: '/images/personal/menu1.png',
      url: '',
      txt: '口腔保险'
    }, {
      src: '/images/personal/menu2.png',
      url: '',
      txt: '开票中心'
    }, {
      src: '/images/personal/menu3.png',
      url: '',
      txt: '我的评价'
    }, {
      src: '/images/personal/menu4.png',
      url: '',
      txt: '客服牙牙'
    }, {
      src: '/images/personal/menu5.png',
      url: '',
      txt: '购物车'
    }, {
      src: '/images/personal/menu6.png',
      url: '',
      txt: '领券中心'
    }, {
      src: '/images/personal/menu7.png',
      url: '',
      txt: '收藏栏'
    }, {
      src: '/images/personal/menu8.png',
      url: '',
      txt: '足迹'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      active: 'active'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})