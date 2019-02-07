// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_src: "../../icon/create/button.png",
    style: 'width: 200rpx; height: 200rpx;'
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

  general_create: function () {
    wx.navigateTo({
      url: 'general_create/general_create',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  card_create: function () {
    wx.navigateTo({
      url: 'card_create/card_create',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})