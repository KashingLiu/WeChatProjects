// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    currentList: [
      {
        id: 12,
        img: "http://www.runoob.com/try/demo_source/paris.jpg",
        name: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        type: "失物招领",
        time: "10-15 09:07"
      },
      {
        id: 13,
        img: "/images/ava.png",
        name: 1,
        type: "寻物启事",
        time: "test"
      },
      {
        id: 14,
        img: "/images/ava.png",
        name: 1,
        type: "寻物启事",
        time: "test"
      },
      {
        id: 15,
        img: "/images/ava.png",
        name: 1,
        type: "失物招领",
        time: "test"
      },
      {
        id: 16,
        img: "/images/ava.png",
        name: 1,
        type: "寻物启事",
        time: "test"
      },
      {
        id: 17,
        img: "/images/ava.png",
        name: 1,
        type: "寻物启事",
        time: "test"
      }],
    hidden: true,
    scrollHeight: 0,
    time: 0,
    isNone: false
  },

  detailTap: function (e) {
    console.log(e.currentTarget.dataset.anchorobj)
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

  }
})