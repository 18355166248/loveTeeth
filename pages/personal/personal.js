const app = getApp();
const beats = app.beats;
const API = app.API;
const icom = require('../../common/js/base/com.js');
const iuser = require('../../common/js/base/user.js');
import regeneratorRuntime from '../../common/js/plugs/regeneratorRuntime';
import promisify from '../../common/js/plugs/promisify.js';
import config from '../../config.js';
//-------------------------------------------------------初始化-------------------------------------------------------
let $page, $query, SessionKey, OpenID;
/**
 * pageId:1 首页 2 我的爱齿怡 3 我的卡片
 */
let PageData = {
  appData: app.data, //拿到全局的数据
  hasUserInfo: false,
  userInfo: {}
};

Page({
  data: Object.assign({
    myCard: {
      isActive: false, //是否激活
      cardBg: ['/images/card/card_bg.png', '/images/card/card_bg_active.png'], //背景
      cardTips: ['激活“爱齿怡”', '已激活'] //文字
    },
    userName: '口腔一号',
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
      }
      , {
        src: '/images/personal/card_bg_3.png',
        url: '',
        txt: '点击查看',
        color: '#45c7e1'
      }
    ],

    menuList: [{
      src: '/images/personal/menu1.png',
      url: '',
      txt: '口腔保险',
      openType: '' //按钮类型 如果有别的都加在这个对象里 如 share
    }, {
      src: '/images/personal/menu2.png',
      url: '',
      txt: '开票中心',
      openType: ''
    }, {
      src: '/images/personal/menu3.png',
      url: '',
      txt: '我的评价',
      openType: ''
    }, {
      src: '/images/personal/menu4.png',
      url: '',
      txt: '客服牙牙',
      openType: ''
    }, {
      src: '/images/personal/menu5.png',
      url: '',
      txt: '购物车',
      openType: ''
    }, {
      src: '/images/personal/menu6.png',
      url: '',
      txt: '领券中心',
      openType: ''
    }, {
      src: '/images/personal/menu7.png',
      url: '',
      txt: '收藏栏',
      openType: ''
    }, {
      src: '/images/personal/menu8.png',
      url: '',
      txt: '足迹',
      openType: ''

    }]
  }, PageData), //页面的初始数据
  async onLoad(option) {
    $page = this;
    $query = option;
    iuser.getUserInfo()
  },
  onReady: function() {}, //监听页面初次渲染完成
  onShow: function() {}, //监听页面显示
  onHide: function() {}, //监听页面隐藏
  onUnload: function() {}, //监听页面卸载
  onPullDownRefresh: function() {}, //页面相关事件处理函数--监听用户下拉动作
  onReachBottom: function() {}, //页面上拉触底事件的处理函数
  onShareAppMessage: function() { //用户点击右上角分享
    return app.setShareData();
  }
}) //end page

//-------------------------------------------------------业务逻辑-------------------------------------------------------