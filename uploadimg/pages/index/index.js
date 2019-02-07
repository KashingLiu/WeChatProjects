var app = getApp()
Page({
  data: {
    img_l: ''
  },
  chooseImg: function () {
    var _this = this;
    wx.chooseImage({

      count: 2, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(res)
        _this.setData({
          img_l: res.tempFilePaths
        })
        console.log(res)

      }
    })
  },
  up_img: function () {
    // var _this = this;
    // wx.uploadFile({
    //   url: 'http://localhost/wechattest/uploadimg.php', //接口
    //   filePath: _this.data.img_l[0],
    //   name: 'file',
    //   formData: {
    //     'user': 'test'
    //   },
    //   success: function (res) {
    //     var data = res.data;
    //     console.log(data);
    //     //do something
    //   },
    //   fail: function (error) {
    //     console.log(error);
    //     //do something
    //   }
    // })




    var pics = this.data.img_l;
    app.uploadimg({
      url: 'http://localhost/wechattest/uploadimg.php',//这里是你图片上传的接口
      path: pics//这里是选取的图片的地址数组
    });
  },
  preview_img: function () {
    wx.previewImage({
      current: this.data.img_l, // 当前显示图片的http链接
      urls: this.data.img_l // 需要预览的图片http链接列表
    })
  }
})
