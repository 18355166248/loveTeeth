// subpackages/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

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
    finalRateList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeGrade({
      detail
    }) {
      let rateList = this.data.rateList
      rateList[detail.index].grade = detail.gradeActive
      this.setData({
        finalRateList: rateList
      })
    }
  }
})