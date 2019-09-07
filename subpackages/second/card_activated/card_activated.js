const app = getApp();
const beats = app.beats;
const API = app.API;
const icom = require('../../../common/js/base/com.js');
const iuser = require('../../../common/js/base/user.js');
import regeneratorRuntime from '../../../common/js/plugs/regeneratorRuntime';
import promisify from '../../../common/js/plugs/promisify.js';
import config from '../../../config.js';
//-------------------------------------------------------初始化-------------------------------------------------------
let $page, $query, SessionKey, OpenID;
let PageData = {
  appData: app.data, //拿到全局的数据
  hasUserInfo: false,
  userInfo: {},
  infoList: {
    title: '爱齿怡全方位呵护年检套餐',
    price: '大客户价',
    list: [{
        txt: '全景片拍摄',
        isitemActive: false,
        isClick: true
      },
      {
        txt: '口腔深度检查',
        isitemActive: false,
        isClick: true
      },
      {
        txt: '超声波洁牙、抛光',
        isitemActive: false,
        isClick: true
      }, {
        txt: '由爱齿怡全国服务网络提供',
        isitemActive: true,
        isClick: false
      }, {
        txt: '洁牙间意外风险保障',
        isitemActive: false,
        isClick: false
      }, {
        txt: '洁牙间感染风险保障',
        isitemActive: false,
        isClick: false
      }, {
        txt: '洁牙间并发症意外保险金',
        isitemActive: false,
        isClick: false
      }, {
        txt: '保险保障由PICC人保财险承保',
        isitemActive: true,
        isClick: false
      }
    ]
  },
  checkItems: [{
      name: 'privacy',
      value: ['我已确认阅读', '爱齿怡数据隐私政策'],
      checked: false,
      isPrivacy: true
    },
    {
      name: 'sure',
      value: ['我已确认本服务产品为本人使用。本服务产品一经激活，服务产品与保险权益同时激活。', ''],
      checked: false,
      isPrivacy: false
    },
  ],
  formInfo: {
    check: []
  }
};

Page({
  data: Object.assign({}, PageData), //页面的初始数据
  async onLoad(option) {
    $page = this;
    $query = option;
    iuser.getUserInfo()
  },
  onReady: function() {}, //监听页面初次渲染完成
  onShow: function() {}, //监听页面显示
  onHide: function() {}, //监听页面隐藏
  onShareAppMessage: function() { //用户点击右上角分享
    return app.setShareData();
  },
  checkboxChange: function(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      'formInfo.check': e.detail.value
    })
  },
  formSubmit: function(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let obj = e.detail.value
    this.setData({
      'formInfo': Object.assign(this.data.formInfo, obj)
    })
    if (obj.userName == '') {
      icom.alert('请填写您的真实姓名')
      return
    }
    if (obj.userId == '') {
      icom.alert('请填写您的身份证号')
      return
    }
    if (!this.data.formInfo.check.includes('privacy')) {
      icom.alert('请您阅读并勾选爱齿怡数据隐私政策')
      return
    }
    if (!this.data.formInfo.check.includes('sure')) {
      icom.alert('请您确认并勾选本服务产品为本人使用')
      return
    }

    console.log(this.data.formInfo)
    //-------------------------ajax
  },
  readWordClick() {
    wx.navigateTo({
      url: '/subpackages/third/userPrivacy/userPrivacy',
    })
  },
  infoClick(){
    wx.navigateTo({
      url: '/subpackages/third/cardInfo/cardInfo',
    })
  }
}) //end page

//-------------------------------------------------------业务逻辑-------------------------------------------------------