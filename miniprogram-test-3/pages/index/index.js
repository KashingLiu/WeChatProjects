const app = getApp()

Page({
  data: {

  },
  onReady: function () {
    //获得modal组件
    this.modal = this.selectComponent("#modal");
  },
  showDialog() {
    this.modal.showModal();
  },
  _cancelEvent() {
    console.log('你点击了取消');
    this.modal.hideModal();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.modal.hideModal();
  }
})