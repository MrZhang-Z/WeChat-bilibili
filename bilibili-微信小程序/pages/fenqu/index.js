// pages/bilibili/fenqu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    channelname: [
      {
        videoLabel: "番剧", name: "番剧", icon: "/images/fanju.png",
      },
      {
        videoLabel: "动画", name: "动画", icon: "/images/donghua.png",
      },
      {
        videoLabel: "国创", name: "国创", icon: "/images/guochuang.png",
      },
      {
        videoLabel: "音乐", name: "音乐", icon: "/images/music.png",
      },
      {
        videoLabel: "舞蹈", name: "舞蹈", icon: "/images/wudao.png",
      },
      {
        videoLabel: "游戏", name: "游戏", icon: "/images/game.png",
      },
      {
        videoLabel: "Vlog", name: "Vlog", icon: "/images/vlog.png",
      },
      {
        videoLabel: "生活", name: "生活", icon: "/images/shenghuo.png",
      },
      {
        videoLabel: "鬼畜", name: "鬼畜", icon: "/images/guichu.png",
      },
      {
        videoLabel: "时尚", name: "时尚", icon: "/images/shishang.png",
      },
      {
        videoLabel: "广告", name: "广告", icon: "/images/guanggao.png",
      },
      {
        videoLabel: "娱乐", name: "娱乐", icon: "/images/yule.png",
      },
      {
        videoLabel: "电影", name: "电影", icon: "/images/dianying.png",
      },
      {
        videoLabel: "电视剧", name: "电视剧", icon: "/images/dianshiju.png",
      },
      {
        videoLabel: "小视频", name: "小视频", icon: "/images/xiaoshiping.png",
      }
      ,
      {
        videoLabel: "游戏中心", name: "游戏中心", icon: "/images/youxizhongxin.png",
      }
    ]
  },

  stroe: function (e) {
    var that = this
    // console.log(that.data.channelname[e.currentTarget.dataset.index].name)
    //let id = JSON.stringify(that.data.channelname[e.currentTarget.dataset.index].videoLabel)
    let videoLabel = that.data.channelname[e.currentTarget.dataset.index].videoLabel
    // console.log(id)
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + videoLabel,//路径
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