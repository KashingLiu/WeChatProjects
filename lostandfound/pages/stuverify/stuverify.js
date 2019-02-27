// pages/stuverify/stuverify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindsubmit: function (e) {
    let self = this;
    console.log(e.detail.value.stuid)
    console.log(e.detail.value.pwd)
    var time = this.addJYM();
    wx.request({
      url: "http://10.236.78.197/wechattest/login.php",
      data: {
        stuid: e.detail.value.stuid,
        pwd: e.detail.value.pwd,
        jym2005: time
      },
      success(res) {
        console.log(res)
      }
    })
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

  addJYM: function (){
    //产生随机数
    var time = ((new Date().getTime() * 9301 + 49297) % 233280) / (233280.0);
    var rand = Math.random();
    time = (time + rand) * 9301;
    return time;
  }

})