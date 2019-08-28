const app = getApp();
const beats = app.beats;
const API = app.API;
const icom = require('../../common/js/base/com.js');
import regeneratorRuntime from '../../common/js/plugs/regeneratorRuntime';
import promisify from '../../common/js/plugs/promisify.js';
import config from '../../config.js';
//-------------------------------------------------------初始化-------------------------------------------------------
let $page, $query, SessionKey, OpenID;
let PageData = {
  appData: app.data //拿到全局的数据
};

Page({
  data: Object.assign({
    imgUrls: [
      '/images/index/banner1.png',
      '/images/index/banner2.png',
      '/images/index/banner3.png'
    ],
    swiperImgUrls: [1, 2, 3],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    plan: 0,
    planList: ['方案一', '方案二', '方案三'],
    navigationList: [{
      src: '/images/index/logo_c_1.png',
      txt: '查找诊所',
      url: '',
      width: '59rpx'
    }, {
      src: '/images/index/logo_c_2.png',
      txt: '齿爱一生',
      url: '',
      width: '47rpx'
    }, {
      src: '/images/index/logo_c_3.png',
      txt: '会员专享',
      url: '',
      width: '56rpx'
    }, {
      src: '/images/index/logo_c_4.png',
      txt: '客服牙牙',
      url: '',
      width: '51rpx'
    }],
    lockList: [{
      src: '/images/index/lock_1.png',
      url: '',
      txt: '即可解锁',
      color: '#008ad3'
    }, {
      src: '/images/index/lock_2.png',
      url: '',
      txt: '每日打卡',
      color: '#719292'
    }, {
      src: '/images/index/lock_3.png',
      url: '',
      txt: '即可解锁',
      color: '#4da35f'
    }],
    cardList: [{
      src: '/images/index/card_1.png',
      url: '',
      txt: '亲情卡',
    }, {
      src: '/images/index/card_2.png',
      url: '',
      txt: '爱情卡',
    }, {
      src: '/images/index/card_3.png',
      url: '',
      txt: '友情卡',
    }, {
      src: '/images/index/card_4.png',
      url: '',
      txt: '生日卡',
    }]
  }, PageData), //页面的初始数据
  async onLoad(option) {
    $page = this;
    $query = option;
  },
  onReady: function() {}, //监听页面初次渲染完成
  onShow: function() {
    // if (app.bgm){
    //     app.bgm.reShow();
    // }//edn if
  }, //监听页面显示
  onHide: function() {}, //监听页面隐藏
  onUnload: function() {}, //监听页面卸载
  onPullDownRefresh: function() {}, //页面相关事件处理函数--监听用户下拉动作
  onReachBottom: function() {}, //页面上拉触底事件的处理函数
  onShareAppMessage: function() { //用户点击右上角分享
    return app.setShareData();
  },
  bgmClick: function() { //背景音乐按钮点击事件
    app.bgm.click();
  },
  /**
   * 轮播自动滑动时，获取当前的轮播id
   */
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 图片手动滑动时，获取当前的轮播id
   */
  imageChange(e) {
    const that = this;
    console.log(e.currentTarget.id)
    that.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      plan: e.detail.value
    })
  }
}) //end page

//-------------------------------------------------------业务逻辑-------------------------------------------------------