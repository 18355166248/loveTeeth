// subpackages/fourth/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "瑞泰折扣诊疗券",
    paycodeSrc1: '',
    paycodeSrc2: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPayCode()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 返回
  back() {
    wx.navigateBack()
  },
  // 获取付款码
  getPayCode() {
    console.log('获取付款码')
    /**
     * title: "瑞泰折扣诊疗券", 标题
       paycodeSrc1: '', 付款码数字
       paycodeSrc2: ''  付款码二维码
     */
    //---------------------ajax
  }
})