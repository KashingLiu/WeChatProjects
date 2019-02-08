// pages/create/card_create/card_create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    major: ["计算机科学与技术学院", "船舶与海洋工程学院", "海洋科学与技术学院", "材料科学与工程学院", "新能源学院", "土木工程学院", "汽车工程学院", "信息科学与工程学院", "经济管理学院", "理学院", "语言文学学院"],
    majorIndex: 0,
  },
  bindMajorChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', this.data.major[e.detail.value]);

    this.setData({
      majorIndex: e.detail.value
    })
  },
  bindsubmit: function (e) {
    wx.request({
      url: 'http://192.168.0.106/wechattest/test.php?api_num=0',
      data: {
        generalsubmit: 0,
        stuff_name: e.detail.value.cardname,
        detail: this.data.major[this.data.majorIndex],
        card_number: e.detail.value.cardid,
        input_phone: e.detail.value.input_phone,
        input_qq: e.detail.value.input_qq,
        input_place: e.detail.value.input_place
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        //TO DO
      }
    })
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  bindMajorChange: function (e) {
    this.setData({
      majorIndex: e.detail.value
    })
  },
})