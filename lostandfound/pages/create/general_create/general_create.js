// pages/create/general_create/general_create.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'find', value: '失物招领', checked: 'true' },
      { name: 'lost', value: '寻物启事'},
    ],
    files: [],
    select: true,
    text_area: ''
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    this.setData({
      text_area: e.detail.value,
    })
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        console.log(res)
      }
    })
  },

  deleteimg: function (e) {
    var files = this.data.files;
    var index = e.currentTarget.dataset.index;
    files.splice(index, 1);
    this.setData({
      files: files
    });
  },

  previewImage: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = [];
    var objkeys = Object.keys(this.data.files);
    for (var i = 1; i <= objkeys.length; i++) {
      imgArr.push(this.data.files[i]);
    }
    //console.log(imgArr)
    wx.previewImage({
      current: imgArr[index],//当前图片地址
      urls: imgArr
    })
  },


  up_img: function () {
    var pics = this.data.files;
    app.uploadimg({
      url: 'http://localhost/wechattest/uploadimg.php',//这里是你图片上传的接口
      path: pics//这里是选取的图片的地址数组
    });
  },


  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == "lost") {
      this.setData({ select: false })
    }
    else { this.setData({ select: true }) }
  },

  generalsubmit: function (e) {
    wx.request({
      url: 'http://localhost/wechattest/test.php',
      data: {
        stuff_name: e.detail.value.stuff_name,
        detail: this.data.text_area,
        input_phone: e.detail.value.input_phone,
        input_qq: e.detail.value.input_qq,
        input_place: e.detail.value.input_place,
        lostorfound: this.data.select
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
    this.up_img()
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

})