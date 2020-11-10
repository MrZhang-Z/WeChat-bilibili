// pages/aliplay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "", //窗口高度
    'currentTab': 0,
    recommend: [],
    Serial:[],
    end:[],
    info:[]
  },

  

  //左右滑动触发事件
  swiperTab: function (e) {
    let _this = this;
    _this.setData({ // 如果要去修改 data 里面变量 currentTab，则需使用 setData() 函数
      currentTab: e.detail.current,// 给变量currentTab进行重新赋值
    });
  },

  //点击事件
  clickTab: function (e) {
    // 当点中卡片需要去改变 currentTab 变量
    // currentTab 变量的值怎么来
    // e.target.dataset.current 相当于 <view data-current='0'>
    let _this = this;
    if (_this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 100;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });

    var _this = this;
    wx: wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': options.videoLabel
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let recommend = e.data.videoList[0].recommend;
        let Serial = e.data.videoList[0].Serial;
        let end = e.data.videoList[0].end;
        let info = e.data.videoList[0].info;
        console.log(recommend);
        console.log(e);
        _this.setData({
          recommend: recommend,
          Serial: Serial,
          end: end,
          info: info
        })
      }
    })
  },

  stroe: function (e) {
    var that = this
    // console.log(that.data.channelname[e.currentTarget.dataset.index].name)
    //let id = JSON.stringify(that.data.channelname[e.currentTarget.dataset.index].videoLabel)
    let videoId = that.data.recommend[e.currentTarget.dataset.index].videoId
    console.log(videoId)
    wx.navigateTo({
      url: '/pages/video/video?videoId=' + videoId,//路径
    })
  },

  stroe1: function (e) {
    var that = this
    // console.log(that.data.channelname[e.currentTarget.dataset.index].name)
    //let id = JSON.stringify(that.data.channelname[e.currentTarget.dataset.index].videoLabel)
    let videoId = that.data.Serial[e.currentTarget.dataset.index].videoId
    console.log(videoId)
    wx.navigateTo({
      url: '/pages/video/video?videoId=' + videoId,//路径
    })
  },

  stroe2: function (e) {
    var that = this
    // console.log(that.data.channelname[e.currentTarget.dataset.index].name)
    //let id = JSON.stringify(that.data.channelname[e.currentTarget.dataset.index].videoLabel)
    let videoId = that.data.end[e.currentTarget.dataset.index].videoId
    console.log(videoId)
    wx.navigateTo({
      url: '/pages/video/video?videoId=' + videoId,//路径
    })
  },

  stroe3: function (e) {
    var that = this
    // console.log(that.data.channelname[e.currentTarget.dataset.index].name)
    //let id = JSON.stringify(that.data.channelname[e.currentTarget.dataset.index].videoLabel)
    let videoId = that.data.info[e.currentTarget.dataset.index].videoId
    console.log(videoId)
    wx.navigateTo({
      url: '/pages/video/video?videoId=' + videoId,//路径
    })
  },





  info(e) {
    console.log(this.data.recommend);
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
    //console.log("员工删库跑路了，加载不出来")
    wx.showToast({
      title: '失败',//提示文字
      duration: 1000,//显示时长
      mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
      icon: 'loading', //图标，支持"success"、"loading"  
      success: function () { },//接口调用成功
      fail: function () { },  //接口调用失败的回调函数  
      complete: function () { } //接口调用结束的回调函数  
    })
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