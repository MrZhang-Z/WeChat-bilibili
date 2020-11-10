// pages/histroy/histroy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    footprint:[
    

    ],
    active:false,
  },
  
  del:function(e){
    wx.showModal({
      title: '提示',
      content: '确认要删除此足迹么？',
      success: (res)=> { 
        console.log(res)
        if (res.confirm) {
         
          console.log('用户点击确定')
          this.data.footprint.splice(e.currentTarget.dataset.index, 1)
          this.setData({
            footprint: this.data.footprint
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
    var _this = this; 
    console.log(_this.data.footprint);
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/video',
      method:"GET",
      header: {
        'Content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType:'json',
      success:function(e){
        console.log(e)
        let newslist=e.data.newslist
        _this.setData({
          footprint:newslist
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