// subpackages/rate/rate.js
const icom = require('../../../common/js/base/com.js');

Page({
  /**
   * 组件的初始数据
   */
  data: {
    rateList: [{
      text: '整体服务感受',
      grade: 0
    }, {
      text: '激活流程感受',
      grade: 0
    }, {
      text: '预约是否方便',
      grade: 0
    }, {
      text: '诊所前台接待流畅',
      grade: 0
    }, {
      text: '洁牙师细心洁牙',
      grade: 0
    }],
    finalRateList: [],
    evaluateList: [{
      txt: '耐心尽责',
      active: false
    }, {
      txt: '服务热情',
      active: false
    }, {
      txt: '预约方便',
      active: false
    }, {
      txt: '轻松服务',
      active: false
    }, {
      txt: '值得信賴',
      active: false
    }, {
      txt: '环境优雅',
      active: false
    }, {
      txt: '干净卫生',
      active: false
    }, {
      txt: '位置佳',
      active: false
    }, {
      txt: '无推销',
      active: false
    }, {
      txt: '价格实惠',
      active: false
    }, {
      txt: '医生技术好',
      active: false
    }, {
      txt: '获得科普宣教',
      active: false
    }, {
      txt: '不害怕',
      active: false
    }, {
      txt: '下次还来',
      active: false
    }, {
      txt: '停车方便',
      active: false
    }, {
      txt: '赞护士',
      active: false
    }, {
      txt: '赞医生',
      active: false
    }, {
      txt: '客服态度好',
      active: false
    }, {
      txt: '易沟通',
      active: false
    }, {
      txt: '性价比高',
      active: false
    }, {
      txt: '高大上体验很棒',
      active: false
    }, {
      txt: '无痛感',
      active: false
    }],
    commentValue: '',
    commentNum: 15,
    picList: [],
    nickName: ''
  },
  onLoad: function() {},
  /**
   * 组件的方法列表
   */
  changeGrade({
    detail
  }) {
    let rateList = this.data.rateList
    rateList[detail.index].grade = detail.gradeActive
    this.setData({
      finalRateList: rateList
    })
  },
  // 评分
  selectEvaluate(event) {
    const evaluateList = this.data.evaluateList
    evaluateList[event.currentTarget.dataset.id].active = !evaluateList[event.currentTarget.dataset.id].active
    this.setData({
      evaluateList
    })
  },
  // 选择选项
  bindinput(event) {
    let commenntNum = 15 - event.detail.value.length
    this.setData({
      commentValue: event.detail.value,
      commentNum: commenntNum < 0 ? 0 : commenntNum
    })
  },
  // 选择图片
  selectImage() {
    let picList = this.data.picList
    if (picList.length >= 5) {
      return icom.alert('最多可以添加5张图片')
    }
    const that = this
    wx.chooseImage({
      count: 5 - picList.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        if (res.errMsg === 'chooseImage:ok') {
          picList = [...picList, ...res.tempFilePaths]
          that.setData({
            picList
          })
        }
      }
    })
  },
  //删除图片
  iconDelClick(e){
    // console.log(e)
    let index = e.currentTarget.dataset.index
    this.data.picList.splice(index, 1)
    let picList = this.data.picList
    this.setData({
      picList: picList
    })
  },
  //预览图片
  previewImageClick(e){
    let _src = e.currentTarget.dataset.src
    wx.previewImage({
      current: _src, // 当前显示图片的http链接
      urls: this.data.picList // 需要预览的图片http链接列表
    })

  },
  // 发表
  submit() {
    if (this.data.commentNum > 0) {
      return icom.alert('请添加评论...')
    }
    const fromData = {
      rate: this.data.rateList,
      evaluate: this.data.evaluateList.filter(v => v.active),
      commentValue: this.data.commentValue,
      picList: this.data.picList
    }
    console.log(fromData)
  }
})