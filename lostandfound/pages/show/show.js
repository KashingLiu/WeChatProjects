// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemid: null,
    contacts: null,
    detail: null,
    placeicon: "/icon/position.png",
    qqicon: "/icon/QQ.png",
    phoneicon: "/icon/phone.png",
    display: true,
    check: null,
    haslocation: true
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.detail.img // 需要预览的图片http链接列表  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      check: options.check
    })
    console.log(this.data.check)
    if(options.check == 0) {      // from the first page anchor
    
      let obj = JSON.parse(options.obj)
      console.log(obj);
      this.setData({
        itemid: obj.id,
        detail: obj,
        display: obj.display
      });
      let self = this;
      wx.request({
        url: 'http://10.236.78.197/wechattest/show_detail.php',
        data: {
          id: obj.id
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          self.setData({
            contacts: res.data
          });
        }
      })
      if(this.data.detail.type == "寻物启事") {
        this.setData({
          haslocation: false
        })
      }
      console.log(this.data.display)
    } else if (options.check == 1) {      // after user submit the form
      console.log(options.put)
      let obj = JSON.parse(options.put)
      this.setData({
        contacts: obj.contacts,
        detail: obj.detail,
        display: obj.display
      })
      if (this.data.detail.type == "寻物启事") {
        this.setData({
          haslocation: false
        })
      }
    }
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {

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
    if(this.data.check == 1) {
      wx.navigateBack({
        delta: 2
      })
    }
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