// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:"600px",
    phone: "17863109851",
    qq: "",
    stuffname: "成哥的杯子丢了",
    time: "2019-03-02",
    lfflag: 1
  },

  drawText: function (ctx, str, leftWidth, initHeight, titleHeight, canvasWidth) {
    var lineWidth = 0;
    var lastSubStrIndex = 0; //每次开始截取的字符串的索引
    for (let i = 0; i < str.length; i++) {
      lineWidth += ctx.measureText(str[i]).width;
      if (lineWidth > canvasWidth) {
        ctx.fillText(str.substring(lastSubStrIndex, i), leftWidth, initHeight); //绘制截取部分
        initHeight += 16; //16为字体的高度
        lineWidth = 0;
        lastSubStrIndex = i;
        titleHeight += 30;
      }
      if (i == str.length - 1) { //绘制剩余部分
        ctx.fillText(str.substring(lastSubStrIndex, i + 1), leftWidth, initHeight);
      }
    }
    // 标题border-bottom 线距顶部距离
    titleHeight = titleHeight + 10;
    return titleHeight
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    console.log(this.data.stuffname.length)
    wx.getImageInfo({
      src: 'https://www.kashingliu.cn/wechattest/uploadimg/15496982288-2019-02-09-15:43:48.jpg',
      success(res) {
        // console.log(width)
        const ctx = wx.createCanvasContext('shareCanvas')
        const stuffnamewidth = ctx.measureText(self.data.stuffname)
        ctx.setFillStyle('#FFFFFF')
        ctx.fillRect(0, 0, 400, 700)
        var old_width = res.width;
        var old_height = res.height;
        var scale = old_width / old_height
        var scale_y = 360
        var scale_x = scale * scale_y
        var pic_name = 0

        if (old_height > old_width) {
          ctx.translate(20, scale_x + 15)
          ctx.rotate(-90 * Math.PI / 180)
          ctx.drawImage(res.path, 0, 0, scale_x, scale_y);
          
          ctx.rotate(90 * Math.PI / 180)
          ctx.translate(-20, -(scale_x + 15))
          pic_name = scale_x + 20
          // self.setData({
          //   height: scale_x+30+"px"
          // })
        } else {
          scale = 1/scale
          scale_x = 360
          scale_y = scale * scale_x
          ctx.drawImage(res.path, (400 - scale_x) / 2, 15, scale_x, scale_y);

          pic_name = scale_y + 20
          // self.setData({
          //   height: scale_y+30+"px"
          // })
        }
        ctx.setTextBaseline('top')
        var height = pic_name+17
        var stuffname = self.data.stuffname
        var chr = stuffname.split("");
        var temp = "";
        var row = [];
        ctx.setFontSize(33)
        ctx.setFillStyle('black')
        console.log(chr)
        for (var a = 0; a < chr.length; a++) {
          if (ctx.measureText(temp).width < 350) {
            temp += chr[a];
          }
          else {
            a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
            row.push(temp);
            temp = "";
          }
        }
        row.push(temp); 
        if (row.length > 2) {
          var rowCut = row.slice(0, 2);
          var rowPart = rowCut[1];
          var test = "";
          var empty = [];
          for (var a = 0; a < rowPart.length; a++) {
            if (ctx.measureText(test).width < 320) {
              test += rowPart[a];
            }
            else {
              break;
            }
          }
          empty.push(test);
          var group = empty[0] + "..."//这里只显示两行，超出的用...表示
          rowCut.splice(1, 1, group);
          row = rowCut;
        }
        for (var b = 0; b < row.length; b++) {
          ctx.fillText(row[b], 20, pic_name+10 + b * 40);
          height = height + 40
        }

        ctx.setFontSize(27)
        if (self.data.qq != null && self.data.qq != "null" && self.data.qq != "") {
          ctx.fillText("请联系QQ： "+self.data.qq, 20, height)
          height = height + 40
        } else if (self.data.phone != null && self.data.phone != "null" && self.data.phone != "") {
          ctx.fillText("请联系手机：" + self.data.phone, 20, height)
          height = height + 40
        }

        ctx.setFontSize(17)
        ctx.setFillStyle('gray')
        ctx.fillText(self.data.time+"发布", 20, height-3)
        height = height + 25

        ctx.moveTo(20, height)
        ctx.lineTo(380, height)
        ctx.setStrokeStyle('gray')
        ctx.stroke()
        height = height+15


        ctx.drawImage('/icon/code.jpg', 20,height,100, 100)
        height += 115

        ctx.setFillStyle('gray')
        ctx.setFontSize(14)
        ctx.fillText('长按识别工大威海专属失物招领小程序',140, height-105)
        ctx.fillText('工大威海失物招领QQ：624453893', 140, height - 85)
        ctx.fillText('微信：校学生会', 140, height - 65)
        ctx.fillText('By刘家成', 140, height - 45)

        self.setData({
          height: height + "px"
        })




        ctx.draw(false, function () {
          // 3. canvas画布转成图片
          wx.canvasToTempFilePath({
            canvasId: 'shareCanvas',
            quality: 1,
            success (res) {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
              })
            }
          })
        })

      }
    })
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