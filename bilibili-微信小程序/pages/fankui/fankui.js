// pages/fankui/fankui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feekback:[
      {'txt1':'无法打开小程序'},
      {'txt1':'小程序闪退'},
      {'txt1':'卡顿'},
      {'txt1':'黑白屏'},
      {'txt1':'死机'},
      {'txt1':'界面错位'},
      {'txt1':'页面加载慢'},
      {'txt1':'其他异常'}
    ]
  },
  submitgo:function(e){  
    console.log(e);
    var txt1 = e.currentTarget.dataset.txt1;

    wx.navigateTo({
      url: '../submit/submit?txt1='+txt1,
    })
  },
  gotowode:function(e){
    wx.navigateTo({
      url: '/pages/wode/wode',
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

  }
})