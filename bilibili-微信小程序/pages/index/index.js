// pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'currentTab': 0,
    // 广告
    bannerList: [{
        src: 'https://i0.hdslb.com/bfs/sycp/creative_img/202007/4830b83628c81c7d6f1ffe17b9d644d0.jpg@880w_388h_1c_95q',
        title: "柴油朋克银河恶魔城新作"
      },
      {
        src: 'https://i0.hdslb.com/bfs/archive/df869bdf117f59e858115faf579abc227c5d0fc0.png@880w_388h_1c_95q',
        title: "前方收获防蚊虫gank知识技巧~"
      },
      {
        src: 'https://i0.hdslb.com/bfs/archive/2e9424165869ed9ca0f0c75a1e68ee62935dae0c.png@880w_388h_1c_95q',
        title: "TEDx演讲B站独家直播中"
      },
      {
        src: '//i0.hdslb.com/bfs/archive/7797652dbe8b17b0b23d9498a9a0b857385a7351.jpg@880w_388h_1c_95q',
        title: "梦幻联动！腾格尔 最 新 翻 唱 上线"
      }
    ],

    // 推荐
    recommendList: [{
        videoPic: 'https://i0.hdslb.com/bfs/archive/66a23e502fc63a1f570f7af82583fb3a4163b054.jpg@206w_116h_1c_100q.webp',
        videoTitle: '手机如何拍写真？15个技巧和摆姿拒绝路人照！夏日清新风人像，iPhone8 plus拍摄【人像研究所】001',
        videoPlayNum: 29000,
        videoLabel: '数码'
      },
      {
        videoPic: 'http://i2.hdslb.com/bfs/archive/703aeae82d2b715a945423f71d6b13f5a48f3cae.jpg@320w_200h.webp',
        videoTitle: '最 强 元 首',
        videoPlayNum: 376000,
        videoLabel: '鬼畜'
      },
      {
        videoPic: 'http://i0.hdslb.com/bfs/archive/c5062f721dc160db18623ad79337bc8a340bd48b.jpg@480w_270h_1c',
        videoTitle: '【卢本伟主演】头号玩家！第二集：卢本伟身陷九九八十一难，能否通关？',
        videoPlayNum: 9639000,
        videoLabel: '鬼畜'
      },
      {
        videoPic: 'http://i0.hdslb.com/bfs/archive/3fe4f9e82a69c0fe3f572d1c2408b82a78c0a6db.jpg@480w_270h_1c',
        videoTitle: '新地图太小是真的刚！',
        videoPlayNum: 274000,
        videoLabel: '游戏'
      },
      {
        videoPic: 'http://i1.hdslb.com/bfs/archive/d81ef4bbb4f317bce718a3c75d571d158073393b.jpg@480w_270h_1c',
        videoTitle: '【十五天】七个jk女友一次满足！(含竖屏)4k一键换装♡你的女友♡ 「三周年作」',
        videoPlayNum: 12000,
        videoLabel: '舞蹈'
      }
    ],

    // 热门
    popularList: [{
        videoPic: 'https://i0.hdslb.com/bfs/archive/063b5775d54bf87fdd9c14b74b97f3cbce9ccbb9.jpg@206w_116h_1c_100q.webp',
        videoTitle: '前方高帅！以凡人之躯，比肩神明！！！',
        name: '在下蕾姆有何贵干',
        videoPlayNum: 31333000
      },
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/ed44b054158008f5bdcd77c8fc196dcfcce26f7e.jpg@480w_270h_1c.webp',
        videoTitle: '四斤叉烧排骨吃过瘾，两头蒜，一盆面打底，酱面配大肉，太下蒜了',
        name: '徐大sao',
        videoPlayNum: 1526000
      },
      {
        videoPic: 'https://i1.hdslb.com/bfs/archive/a0cae6ab9073d192076dafccc9f3061a52b3cfc8.jpg@480w_270h_1c',
        videoTitle: '一人之下你所不知道的宝儿姐',
        name: '心愿大魔王',
        videoPlayNum: 266000
      },
      {
        videoPic: 'https://i2.hdslb.com/bfs/archive/956f228957fef3bff7119b1965d04964baeaf97f.jpg@480w_270h_1c',
        videoTitle: '【科学还原】爱(zi)杀宝贝ED（挑战无剪辑）连人带狗一起疯',
        name: '逢坂牛河',
        videoPlayNum: 1149000
      }
    ],

    // 追番
    // 我的追番
    chase_drama_mineList: [{
      src: 'https://i0.hdslb.com/bfs/archive/eb9aeee459ebc9d84c4d9c68618e6efb9353b323.jpg@192w_120h.webp',
      title: '罗小黑战记'
    }, {
      src: 'https://i0.hdslb.com/bfs/archive/810fbcbf8b62fca1753a2d50497b14fb84581315.jpg@192w_120h.webp',
      title: '大理寺日志'
    }, {
      src: 'https://i0.hdslb.com/bfs/archive/acc985be0ba4e8bae113484d1c3ed2f80eed9ed6.jpg@192w_120h.webp',
      title: '刺客伍六七'
    }, {
      src: 'https://i0.hdslb.com/bfs/archive/a2f479544945636b2d957e4a4145718e7ecb3c35.jpg@160w_100h.webp',
      title: '雾山五行'
    }, {
      src: 'https://i2.hdslb.com/bfs/archive/b2ee4724d78531911a2ad1a70390cee762ba9b91.jpg@160w_100h.webp',
      title: '一人之下第二季'
    }],

    // 番剧推荐
    chase_drama_recommendList: [{
        videoPic: 'https://i0.hdslb.com/bfs/bangumi/image/73e2deab91e3fc493a7cb077c26b0e56d1baa69d.jpg@320w_200h.webp',
        videoTitle: 'JOJO的奇妙冒险'
      },
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/810fbcbf8b62fca1753a2d50497b14fb84581315.jpg@192w_120h.webp',
        videoTitle: '大理寺日志'
      },
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/acc985be0ba4e8bae113484d1c3ed2f80eed9ed6.jpg@192w_120h.webp',
        videoTitle: '刺客伍六七'
      },
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/a2f479544945636b2d957e4a4145718e7ecb3c35.jpg@160w_100h.webp',
        videoTitle: '雾山五行'
      }
    ],

    // 国创推荐
    chase_drama_domesticList: [
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/a2f479544945636b2d957e4a4145718e7ecb3c35.jpg@160w_100h.webp',
        videoTitle: '雾山五行'
      },
      {
        videoPic: 'https://i2.hdslb.com/bfs/archive/b2ee4724d78531911a2ad1a70390cee762ba9b91.jpg@160w_100h.webp',
        videoTitle: '一人之下第二季'
      },
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/acc985be0ba4e8bae113484d1c3ed2f80eed9ed6.jpg@192w_120h.webp',
        videoTitle: '刺客伍六七'
      },
      {
        videoPic: 'https://i0.hdslb.com/bfs/archive/eb9aeee459ebc9d84c4d9c68618e6efb9353b323.jpg@192w_120h.webp',
        videoTitle: '罗小黑战记'
      }
    ],

    // 影视
    // 电影热播
    movieList: [{
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/image/0ac9aac707084339d758a0cf11b8bb0c0f3c2900.jpg@320w_428h.jpg',
      videoTitle: '哥斯拉2：怪兽之王',
      introduction: '哥斯拉对决基多拉！'
    },
    {
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/image/0ac9aac707084339d758a0cf11b8bb0c0f3c2900.jpg@320w_428h.jpg',
      videoTitle: '哥斯拉2：怪兽之王',
      introduction: '哥斯拉对决基多拉！'
    },
    {
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/image/0ac9aac707084339d758a0cf11b8bb0c0f3c2900.jpg@320w_428h.jpg',
      videoTitle: '哥斯拉2：怪兽之王',
      introduction: '哥斯拉对决基多拉！'
    }],

    // 纪录片热播
    documentaryList: [{
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/1ea7435207d559cd47201f9f98808f2b477b32d5.png@320w_428h.png',
      videoTitle: '决胜荒野之华夏秘境',
      introduction: '挨饿德来啦！'
    },{
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/1ea7435207d559cd47201f9f98808f2b477b32d5.png@320w_428h.png',
      videoTitle: '决胜荒野之华夏秘境',
      introduction: '挨饿德来啦！'
    },
    {
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/1ea7435207d559cd47201f9f98808f2b477b32d5.png@320w_428h.png',
      videoTitle: '决胜荒野之华夏秘境',
      introduction: '挨饿德来啦！'
    }
  ],

    // 影视推荐
    film_television_recommendList: [{
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/5bee2f7688f4264c6cdbb983aec0205b6b7c9d3b.jpg@320w_428h.webp',
      videoTitle: '罗小黑战记'
    },
    {
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/5bee2f7688f4264c6cdbb983aec0205b6b7c9d3b.jpg@320w_428h.webp',
      videoTitle: '罗小黑战记'
    },
    {
      videoPic: 'https://i0.hdslb.com/bfs/bangumi/5bee2f7688f4264c6cdbb983aec0205b6b7c9d3b.jpg@320w_428h.webp',
      videoTitle: '罗小黑战记'
    }],

    // 头像
    userInfo: {},
    hasUserInfo: false,

  },


  // 滑动滑块
  swiperTab: function (e) {
    let _this = this;
    _this.setData({
      currentTab: e.detail.current
    })
    // console.log(_this.data.currentTab);
  },

  // 点击导航栏
  clickTab: function (e) {
    let _this = this;
    if (_this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  // 跳转播放页
  goPlay: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/video/video?videoId='+id
    })
  },

  // 跳转搜索
  goSearch: function () {
    wx.navigateTo({
      url: '/pages/sousuo/sousuo',
    })
  },

  
  // 跳转分区番剧
  goFenquFanju: function (e) {
    let type = '番剧'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区国创
  goFenquGuochuang: function (e) {
    let type = '国创'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区动画
  goFenquDonghua: function (e) {
    let type = '动画'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区音乐
  goFenquYinyue: function (e) {
    let type = '音乐'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区电影
  goFenquDianying: function (e) {
    let type = '电影'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区电视剧
  goFenquDianshiju: function (e) {
    let type = '电视剧'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区鬼畜
  goFenquGuichu: function (e) {
    let type = '鬼畜'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },
  // 跳转分区娱乐
  goFenquYule: function (e) {
    let type = '娱乐'
    wx.navigateTo({
      url: '/pages/fenqu1/index?videoLabel=' + type,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let _this = this;
    // 获取头像
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
          // console.log(res)
        }
      })
    }

    // 推荐视频
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/video',
      method: 'GET',
      dataType: 'json',
      success: function (e) {
        // console.log(e);
        // let i;
        // let a;
        // let b = [];
        // for (i = 0; i < 30; i++) {
        //   a = e.data.newslist[i];
        //   b.push(a);
        // }
        let a = e.data.newslist;
        _this.setData({
          recommendList: a,
          popularList: a
        })
      }
    })

    // 番剧推荐
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': "番剧"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let a = e.data.videoList[0].Serial;
        // console.log(a)
        _this.setData({
          chase_drama_recommendList: a
        })
      }
    })

    // 国创推荐
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': "国创"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let a = e.data.videoList[0].Serial;
        // console.log(a);
        _this.setData({
          chase_drama_domesticList: a
        })
      }
    })

    // 影视推荐
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': "影视"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let a = e.data.videoList[0].Serial;
        // console.log(a);
        _this.setData({
          film_television_recommendList: a
        })
      }
    })

    // 电影热播
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': "电影"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let a = e.data.videoList[0].Serial;
        // console.log(a);
        _this.setData({
          movieList: a
        })
      }
    })

    // 纪录片
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': "电影"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let a = e.data.videoList[0].Serial;
        // console.log(a);
        _this.setData({
          documentaryList: a
        })
      }
    })

    // 我的追番
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/videoLabel',
      method: "POST",
      data: {
        'videoLabel': "影视"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (e) {
        let a = e.data.videoList[0].Serial;
        console.log(a);
        _this.setData({
          chase_drama_mineList: a
        })
      }
    })




    // 将获取到的视频进行分类

    // let _this = this;
    // let len = _this.data.List.length;
    // let i = 0;
    // let type;
    // var a;
    // var b = [];
    // var c = [];
    // var d = [];
    // for (i; i < len; i++) {
    //   type = _this.data.List[i].type;
    //   if (type == 1) {
    //     a = _this.data.List[i]
    //     b.push(a);
    //   }
    //   if (type == 2) {
    //     a = _this.data.List[i]
    //     c.push(a);
    //   }
    //   if (type == 3) {
    //     a = _this.data.List[i]
    //     d.push(a);
    //   }
    //   _this.setData({
    //     List1: b,
    //     List2: c,
    //     List3: d
    //   })
    // }
    // console.log(_this.data.List1)
    // console.log(_this.data.List2)
    // console.log(_this.data.List3)
  },

  // click: function () {
  //   let _this = this;
  //   console.log('aaa'+JSON.stringify(_this.data.recommendList));
  // },


  // 下拉加载
  // shuaxin:function(){
  //   let _this = this;
  //   console.log('hello world');
  //   console.log(_this.data.recommendList)
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {

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