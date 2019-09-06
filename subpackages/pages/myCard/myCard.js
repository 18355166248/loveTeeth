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
/**
 * pageId:1 首页 2 我的爱齿怡 3 我的卡片
 */
let PageData = {
  appData: app.data, //拿到全局的数据
  hasUserInfo: false,
  userInfo: {},
  myCard: {
    isActive: false, //是否激活
    cardBg: ['/images/card/card_bg.png', '/images/card/card_bg_active.png'], //激活和未激活背景不同
    cardNum: ['6188', '789007669008'], //卡号分为两部分,需要前端拿到数据稍微处理下
    cardName: '口腔一号'
  },
  /**
   * 我的优惠券有四种 type:1 点击预约 2 点击查看使用详情 3 点击查看保障方案 4 点击查看使用规则
   * couponbg:优惠券背景
   * couponName:名称 如 爱齿怡全方位呵护年检套餐
   * couponDescribe:描述 如 价值780元 前端要稍微处理下文字
   * couponClinicName:诊所名称 如 全国瑞尔口腔连锁
   * couponTerm:有效期 如 2018-8-8 ~ 2019-8-7 前端要稍微处理下
   * couponNumber:卡券编号 如 No.000000000000000000
   * couponBtnType:按钮类型 1 点击预约 2 点击查看使用详情 3 点击查看保障方案 4 点击查看使用规则
   */
  couponList: [{
      "couponbg": "/images/card/cardtype1_bg.png",
      "couponName": "爱齿怡全方位呵护年检套餐",
      "couponDescribe": ["价值", 780, "元"],
      "couponClinicName": "全国瑞尔口腔连锁",
      "couponTerm": "2018-8-8~2019-8-7 ",
      "couponNumber": "No .000000000000000000",
      "couponBtnType": 1,
      "status": 1 // 1:使用 0: 未使用
    },
    {
      "couponbg": "/images/card/cardtype2_bg.png",
      "couponIcon": "/images/card/diamonds.png",
      "couponName": "爱齿怡会员品牌专享折扣",
      "couponDescribe": ["瑞尔诊疗折扣券"],
      "couponClinicName": "全国瑞尔口腔连锁",
      "couponTerm": "2018-8-8~2019-8-7 ",
      "couponNumber": "No .000000000000000000",
      "couponBtnType": 2,
      "status": 0 // 1:使用 0: 未使用
    }, {
      "couponbg": "/images/card/cardtype3_bg.png",
      "couponName": "爱齿怡会员专属保障",
      "couponDescribe": ["洁牙意外风险诊费", "乘客交通意外险"],
      "couponClinicName": "",
      "couponTerm": "2018-8-8~2019-8-7 ",
      "couponNumber": "",
      "couponBtnType": 3,
      "status": 1 // 1:使用 0: 未使用
    }, {
      "couponbg": "/images/card/cardtype4_bg.png",
      "couponName": "爱齿怡会员专享",
      "couponDescribe": ["价值", 780, "元全场通用券"],
      "couponClinicName": "",
      "couponTerm": "2018-8-8~2019-8-7 ",
      "couponNumber": "",
      "couponBtnType": 4,
      "status": 0 // 1:使用 0: 未使用
    }
  ]
};

Page({
  data: Object.assign({}, PageData), //页面的初始数据
  async onLoad(option) {
    $page = this;
    $query = option;
    iuser.getUserInfo()
    // await getMyCardinfo()
    // await getCouponList()
  },
  onReady: function() {}, //监听页面初次渲染完成
  onShow: function() {}, //监听页面显示
  onHide: function() {}, //监听页面隐藏
  onShareAppMessage: function() { //用户点击右上角分享
    return app.setShareData();
  },
  //获取我的卡号信息
  async getMyCardinfo() {
    //------------------------------ajax

  },
  //获取优惠券
  async getCouponList() {
    //------------------------------ajax
  },
  //优惠券跳转
  couponbtnClick(e) {
    console.log(e.currentTarget.dataset.type)
    let type = e.currentTarget.dataset.type
    //----------------------------------跳转相应链接
  }
}) //end page

//-------------------------------------------------------业务逻辑-------------------------------------------------------