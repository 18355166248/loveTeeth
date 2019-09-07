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
};

Page({
  data: Object.assign({}, PageData), //页面的初始数据
  async onLoad(option) {
    $page = this;
    $query = option;
    iuser.getUserInfo()
  },
  onReady: function () { }, //监听页面初次渲染完成
  onShow: function () { }, //监听页面显示
  onHide: function () { }, //监听页面隐藏
  onShareAppMessage: function () { //用户点击右上角分享
    return app.setShareData();
  }
}) //end page

//-------------------------------------------------------业务逻辑-------------------------------------------------------