
//获取应用实例
const app = getApp()

Page({
  data: {
    'currentTab': 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    
  },
  goback:function(){
    wx.navigateTo({
      url: '/pages/wode/wode',
      })
  },
   // 滑块左右滑动会触发此事件
   swiperTab: function(e) {
    let _this = this;
    _this.setData({  // 如果要去修改 data 里面变量 currentTab，则需使用 setData() 函数
      currentTab: e.detail.current // 给变量currentTab进行重新赋值
    });
  },

  // 卡片点击事件
  clickTab: function(e) {
    // 当点中卡片需要去改变 currentTab 变量
    // currentTab 变量的值怎么来
    // e.target.dataset.current 相当于 <view data-current='0'></view>
    let _this = this;
    if(_this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
