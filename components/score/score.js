// components/score/score.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gradeActive: {
      type: Number,
      value: 0
    },
    index: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    grade: 5
  },
  attached: function () {
    this.setData({
      grade: 5 - this.data.gradeActive
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 用户给评分
    in_xin: function(e) {
      var in_xin = e.currentTarget.dataset.in;
      var gradeActive;
      if (in_xin === 'use_sc2') {
        gradeActive = Number(e.currentTarget.id);
      } else {
        gradeActive = Number(e.currentTarget.id) + this.data.gradeActive;
      }
      this.setData({
        gradeActive,
        grade: 5 - gradeActive
      })
      this.triggerEvent('change', {
        index: this.data.index,
        gradeActive
      })
    }
  }
})