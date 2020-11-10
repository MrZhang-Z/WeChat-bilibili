function getRandomColor() {
  var rgb = [];
  for (var i = 0; i < 3; ++i) {
    var color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}

const app = getApp()
const utiltime = require('../../utils/util.js')
Page({

  data: {
    inputValue: '',
    isShowFrom1: false,
    isRandomColor: true,
    src: '',
    usrc: "https://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/47/40/126654047/126654047_da2-1-29.mp4?e=ig8euxZM2rNcNbNHhwdVhoMgnWdVhwdEto8g5X10ugNcXBMvNC8xNbLEkF6MuwLStj8fqJ0EkX1ftx7Sqr_aio8_&uipk=5&nbs=1&deadline=1596462968&gen=playurl&os=kodobv&oi=2883424438&trid=e0018ca752ce46009e1eb52fb61c42b1p&platform=html5&upsig=b59cac5978c48ea4159c6fc02bc160b7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=36785257&orderid=0,1&logo=80000000",
    ssrc: "../images/collect.png",
    toubimg:"../images/toubi.png",
    collect: "true",
    numberColor: "#ff0000",
   // danmuList:"",
    height: 0, // scroll-wrap 的高度，这个高度是固定的
    ZF: "",
    TM: "true",
    BF: "",
    DM: "true",
    url:"",
    coin:"",
    shuliang:"438.4万",
    title:"你的名字",
    typess:"治愈类",
    danmuListnum:"638.2万",
    bofang: "9432.6万",
    gofan:"398.4万",
    textcolor:"#2200aa",
    jianjie:"在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。另一方面，住在东京的高中男孩立花泷则总在梦里来到陌生的小山村，以女孩子的身份过着全新的生活。许是受那颗神秘彗星的影响，立花和三叶在梦中交换了身····",
    toubi:"556.6万",
    shouchang:"1024.5万",
    share:"803.1万",
    zhuifan:"追番",
    zhuifanimg:"../images/love.png",
    danmugo:"点我发弹幕",
    PinLunPaihang:"按时间",
    shouCh:"false",
    shangchuantime: "",
    userxinxi:[
      
    ],
    danmuList:[
      {
      videoId: "1",
      userId: "6",
      color: "#217346",
      text: "特效牛逼",
      time: 8,
      videoBarrageId: "10",
    }, {
      text: '这画风，爱了爱了',
      color: '#FFB7DD',
      time: 4
    },
    {
      text: '给我燃起来，哈哈',
      color: '#77FFCC',
      time: 18
    },
    {
      text: '再来亿次6666',
      color: '#C0D9D9',
      time: 16
    },
    {
      videoId: "1",
      userId: "6",
      color: "#33FFAA",
      text: "火钳刘明",
      time: 14,
      videoBarrageId: "10",
    }, {
      text: 'sexsexsex',
      color: '#E8CCFF',
      time: 5
    },
    {
      text: '给我燃起来，哈哈',
      color: '#FF77FF',
      time: 17
    },
    {
      text: '爱了爱了6666',
      color: '#C0D9D9',
      time: 15
    },
    {
      videoId: "1",
      userId: "6",
      color: "#217346",
      text: "特效牛逼",
      time: 3,
      videoBarrageId: "10",
    }, {
      text: '这画风，爱了爱了',
      color: '#FFFF33',
      time: 2
    },
    {
      text: '给我燃起来，哈哈',
      color: '#FF0000',
      time: 4
    },
    {
      text: '再来亿次6666',
      color: '#C0D9D9',
      time: 2
    },
    {
      videoId: "1",
      userId: "6",
      color: "#EE7700",
      text: "火钳刘明",
      time: 6,
      videoBarrageId: "10",
    }, {
      text: '这画风，爱了爱了',
      color: '#217346',
      time: 21
    },
    {
      text: '厉害厉害厉害',
      color: '#009FCC',
      time: 15
    },
    {
      text: '爱了爱了6666',
      color: '#C0D9D9',
      time: 10
    },
    {
      videoId: "1",
      userId: "6",
      color: "#E63F00",
      text: "特效牛逼",
      time: 6,
      videoBarrageId: "10",
    }, {
      text: '这画风，爱了爱了',
      color: '#217346',
      time: 3
    },
    {
      text: '给我燃起来，哈哈',
      color: '#217346',
      time: 11
    },
    {
      text: '再来亿次6666',
      color: '#C0D9D9',
      time: 9
    },
    {
      videoId: "1",
      userId: "6",
      color: "#217346",
      text: "火钳刘明",
      time: 8,
      videoBarrageId: "10",
    }, {
      text: '这画风，爱了爱了',
      color: '#217346',
      time: 12
    },
    {
      text: '给我燃起来，哈哈',
      color: '#217346',
      time: 10
    },
    {
      text: '爱了爱了6666',
      color: '#C0D9D9',
      time: 8
    }
    ],
  videoList:[
    {
      imgsrc:"https://i2.hdslb.com/bfs/archive/c46fdb79e6f51e1012e42b6580846fc8f6aff991.jpg",
      videotitle:"声之形",
      videoscore:"9.1",
      videonumber:"共1话",
      bofanglist:"8354.2万",
      shouchanglist:"998.1万"
    },
    {
      imgsrc:"https://i0.hdslb.com/bfs/archive/1a6484ca5def2e358fa1f6349a9119019eb69f54.jpg",
      videotitle:"鬼灭之刃",
      videoscore:"9.4",
      videonumber:"共24话",
      bofanglist:"1.32亿",
      shouchanglist:"598.1万"
    },
    {
      imgsrc:"https://i0.hdslb.com/bfs/bangumi/06e435d335df8da1f46abd020287ea0bca013eda.jpg",
      videotitle:"四月是你的谎言",
      videoscore:"9.5",
      videonumber:"共24话",
      bofanglist:"1.2亿",
      shouchanglist:"398.1万"
    },
    {
      imgsrc:"https://i2.hdslb.com/bfs/archive/a2ce53d55a69920cc64a173ece868dfea0ecd2a9.jpg",
      videotitle:"魁拔4",
      videoscore:"9.2",
      videonumber:"共1话",
      bofanglist:"7354.2万",
      shouchanglist:"154.1万"
    },
    {
      imgsrc:"https://i0.hdslb.com/bfs/archive/a2f479544945636b2d957e4a4145718e7ecb3c35.jpg",
      videotitle:"雾五山行",
      videoscore:"9.3",
      videonumber:"更至1话",
      bofanglist:"2354.2万",
      shouchanglist:"75.5万"
    }

  ],
   vid:"",
   userInfo: {},
   hasUserInfo: false,
   canIUse: wx.canIUse('button.open-type.getUserInfo'),
   times:'',
   showModalStatus: false,
   showModalkg:false,
   currentTab: 0,
   tab: true
  },
  //关注其他用户
  userguanzu: function(e){
    let _that = this;
    let g = "+关注";
    let i = e.currentTarget.dataset.index3;
    let q = this.data.userxinxi[i].userfocus;
    
    let r = "userxinxi["+[i]+"].userfocus";
    if(g == q){
      _that.setData({
        [r]: "已关注",
      })
    }
  else{
    _that.setData({
    [r]:"+关注",
  })
  }
  },

  //按时间或者热度进行数据获取
  paixuTime: function(){
    let _this = this;
    let d = "按热度";
    let t = _this.data.PinLunPaihang;
    
    if(d== t){
      _this.setData({
        PinLunPaihang: "按时间"
      })
     
    }else{
      _this.setData({
        PinLunPaihang: "按热度"
      })
    }
 
  },

  //点赞效果，统计点赞数
  dianzan: function(e){
    let _this = this
    let q = "../images/zan.png"
 
    let i = e.currentTarget.dataset.index;
    let s = _this.data.userxinxi[i].userzan;
    let u = "userxinxi["+[i]+"].userzan";
    let u1 = "userxinxi["+[i]+"].zancolor";
    let u2 = "userxinxi["+[i]+"].videoCommentGoodNum";
    let u3 = "userxinxi["+[i]+"].userbuzan";
    if(s== q){
      _this.setData({
        [u]: "../images/zanH.png",
        [u1]: "color:#EA5CAF",
        [u2]: parseInt(_this.data.userxinxi[i].videoCommentGoodNum)+1,
        [u3]: "../images/buzan.png"
      })
      wx.request({
       url: ' http://172.16.12.55:8080/app/web/check',
        data:{
          check: true,
          id: this.data.vid,
          comId: this.data.comId,
          userId: this.data.userId
        }
      })
     
    }else{
      _this.setData({
        [u]: "../images/zan.png",
        [u1]: "color: gainsboro;",
        [u2]: parseInt(_this.data.userxinxi[i].videoCommentGoodNum)-1
      })
      wx.request({
        url: ' http://172.16.12.55:8080/app/web/check',
         data:{
           check: false,
           id: this.data.vid,
           comId: this.data.comId,
           userId: this.data.userId
         }
       })
    }
 
  },

  //不给赞效果
  buzan: function(e){
    let _this = this;
    let i = e.currentTarget.dataset.index2;
    let s = _this.data.userxinxi[i].userbuzan;
  
    let z = "../images/zan.png";
    let x = _this.data.userxinxi[i].userzan;
    let u3 = "userxinxi["+[i]+"].userbuzan";
    let u2 = "userxinxi["+[i]+"].videoCommentGoodNum";
    let u1 = "userxinxi["+[i]+"].zancolor";
    let u = "userxinxi["+[i]+"].userzan";
    let q = "../images/buzan.png";
    if(s== q){
      if(z!= x){
        _this.setData({
          [u2]: parseInt(_this.data.userxinxi[i].videoCommentGoodNum)-1,
        })
      }
      _this.setData({
        [u3]: "../images/buzanH.png",
        [u]: "../images/zan.png",
        [u1]: "color: gainsboro;",
       
      })
    }else{
      _this.setData({
        [u3]: "../images/buzan.png",
      })
    }
  },

  //追番效果
  zhuifan: function(){
    let _this = this
  var s = _this.data.zhuifan;
  var q = "追番"
  wx.request({
    url: 'url',
    data:{

    }
  })
  if(s == q){
    wx.showToast({
      title: '追番成功',
      image:"../images/success.png",
      mask:true
    });
    _this.setData({
      zhuifan: "已追番",
      zhuifanimg:"../images/zhuifan.png",
    })
  }else{
    wx.showToast({
      title: '取消追番',
      image:"../images/ku.png",
      mask:true
    });
    _this.setData({
      zhuifan: "追番",
      zhuifanimg:"../images/love.png",
    })
  }
  },

  //视频的简介，折叠框
  xiangqin: function(e){
    let _this = this;
    if(_this.data.tab == true){
      _this.setData({
        tab: false
      })
    }else{
      _this.setData({
        tab: true
      })
    }
  },

  //bindchange滑动组件改变事件
  swiperTab: function(e){
    let that = this;
   that.setData({
    currentTab: e.detail.current//滑动页面传参detail
   })
  },
 
 
  //简介的相关信息
  onMessage: function(e){
    let _this = this;
    if(_this.data.currentTab === e.target.dataset.current){//点击页面传参target.detaset
      return false;
    }
    else{
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //sweper下面的评论页面
  comment: function(e){
    let _this = this;
    if(_this.data.currentTab === e.target.dataset.current){//点击页面传参target.detaset
      return false;
    }
    else{
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //弹幕动画的制作与获取实时播放的时间
  powerDrawer: function (e) {

    var currentTime = parseInt(e.detail.currentTime)
    //console.log("播放到第"+currentTime+"秒")//查看正在播放时间，以秒为单位
    this.setData({
      times: currentTime+1,
    });
    console.log(this.data.times);
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },

  //详细的动画制作过程
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    let animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0, //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停 
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停 
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭输入弹幕的抽屉 
      if (currentStatu == "close") {
        wx.createVideoContext('myVideo').play();
        this.setData(
          {
            showModalStatus: false,
            danmugo:"点我发弹幕"
          }
        );
      }
    }.bind(this), 200)

    // 显示输入弹幕的抽屉 
    if (currentStatu == "open") {
      wx.createVideoContext('myVideo').pause();
      this.setData(
        {
          showModalStatus: true,
          danmugo:"弹幕发送中"
        }
      );
    }
  },

  //页面打开加载事件
  onLoad: function onLoad(option) {
    var imgsrc=option.imgsrc;
    console.log("接收到的"+imgsrc);
    var id=option.videoId;
    console.log("接收到的"+id);
    this.setData({
      vid: id,
      imgsrc: imgsrc
    });
    console.log("修改的"+this.data.vid);
    this.loadxia();
    this.getdata();
    this.bofangnum();
    var _this = this;
   
    
  },
   // start: 触摸开始

   

//获取用户头像与名字
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //获取视频相关的详细信息通过onload触发
  getdata:function(){//定义函数名称
  console.log("id号"+ this.data.vid)
    var that=this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
        wx.request({
          url:'http://172.16.12.55:8080/app/web/videoPlay',//请求地址
          data:{//发送给后台的数据
            id: this.data.vid,
            userId: this.data.vid
          },
          header:{//请求头
            "Content-Type":"applciation/json"
          },
          method:"GET",//get为默认方法/POST
          success:function(res){
            console.log(res.data.videoPlayPageMsg[0]);//res.data相当于ajax里面的data,为后台返回的数据
            let shuju = res.data.videoPlayPageMsg[0];
            let danmuList = shuju.videoBarrage;
            //console.log(danmus[1]);
            
            for(var i=0; i<danmuList.length/2;i++){
              console.log(danmuList[i])
              let u1 = "danmuList["+[i]+"].time";
               that.setData({

                danmuList:that.data.danmuList.concat(danmuList[i]),//that.data.danmus.concat(danmus[i]) 
                [u1]: parseInt(danmuList[i].time),
              })
             
            }
           // console.log(typeof(this.data.danmuList[10].time))
        
            let shouchang = shuju.videoCollectNum
           
            let Pjianjie = shuju.videoDsc;
            let videotype = shuju.videoLabel;
            console.log(videotype);
            let videotoubi = shuju.videoCoin;
            let videocomment = shuju.videoComment;
            let videotitle = shuju.videoTitle;
            let videousrc = shuju.videoSrc;
           let shangchuantime = shuju.videoUploadDate;
            console.log(shuju.videoComment)
            if(parseInt(shuju.videoPlayNum)>=10000){
              var bofang1shu= parseInt(shuju.videoPlayNum)/10000+'万'
            }
            let TF = shuju.videoCollect;
           // let videobofangnum = shuju.videoPlayNum;
   
           if(parseInt(shuju.videoShareNum)>=10000){
            var videoShareNum= parseInt(shuju.videoShareNum)/10000+'万'
           }
            let videodanmunum = danmuList.length;
           if(videotype=='番剧'){
             that.setData({
             ZF: "",
             TM: true,
             BF: "",
             DM: true
            })
           }
           else{
            that.setData({
              ZF: true,
              TM: "",
              BF: true,
              DM: ""
             })
           }
            console.log(shuju.videoClass);
              that.setData({
                shangchuantime: shangchuantime,
                userxinxi: videocomment,
                shuliang: shuju.videoComment.length,
                danmuListnum: videodanmunum,
              //  userxinxi: videocomment,
                title: videotitle,
                bofang: bofang1shu,
                typess: videotype,
                textcolor: "#CCCCCC",
                jianjie: Pjianjie,
                textcolor:"#2200aa",
                shouchang: shouchang,
                share: videoShareNum,
                toubi: videotoubi,
                usrc: videousrc,
                //danmuList: danmus,
              });
          },
          fail:function(err){},//请求失败
          complete:function(){}//请求完成后执行的函数
        })
      },


  onReady: function onReady(res) {
   
    this.videoContext = wx.createVideoContext('myVideo');
  },

  bofangnum: function(){
    wx.request({
      url: 'http://172.16.12.55:8080/app//web/playNum',
      id: this.data.vid,
    })
  },


  //分享功能
  onShareAppMessage: function onShareAppMessage() {
    wx.createVideoContext('myVideo').pause();
    return {
      title: this.data.title,
      jianjie: this.data.title,
      //path: '/pages/play/play',
      success: function (res) {
        wx.request({
          url: 'http://172.16.12.55:8080/app/web/shareNum ',
          data:{//发送给后台的数据
            id: this.data.vid,
            share: true
          },
          
          header:{//请求头
            "Content-Type":"applciation/json"
          },
        });
        // 转发成功
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
          wx.createVideoContext('myVideo').play();       
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '失败',
          icon: 'fail',
          duration: 1000,
          mask: true
        })
          wx.createVideoContext('myVideo').play();
      }
    }
  },
  
  //收藏功能
shouchang: function(){
 // this.popup.shouchang;
 let _this = this
  
  wx.request({
    url: 'http://172.16.12.55:8080/app/web/collect',
    data:{
      collect: _this.data.collect,
      id: this.data.vid,
      userId: 1,
    },
    method: "GET",
    success:function(res){
     //console.log(this.data.collect);
     if(_this.data.collect){
      _this.setData({
        collect: false,
        ssrc: "../images/collects.png"
       })
     }else{
      _this.setData({
        collect: true,
        ssrc: "../images/collect.png"
       })
     }
    }
  })
  var s = _this.data.ssrc;
  var q = "../images/collect.png"
  if(s == q){
    wx.showToast({
      title: '收藏成功',
    });
    _this.setData({
      ssrc: "../images/collects.png",
      shouchang: parseInt(_this.data.shouchang)+1,
    })

  }else{
  
    _this.setData({
      ssrc: "../images/collect.png",
      shouchang: parseInt(_this.data.shouchang)-1,
    })
  
  }
 
},

//投币功能
sanlian: function(){
  // this.popup.shouchang;
   var s = this.data.toubimg;
   var q = "../images/toubi.png"
   if(s == q){
    
     this.setData({
       toubimg: "../images/toubiT.png",
       toubi: parseInt(this.data.toubi)+1
     })
   }
   var that=this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
   wx.request({
     url:'http://172.16.12.55:8080/app/web/coinNum',//请求地址
     data:{//发送给后台的数据
      coin: true,
       id: this.data.vid
     },
     header:{//请求头
       "Content-Type":"applciation/json"
     },
     method:"GET",//get为默认方法/POST
     success:function(res){
       console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据
       wx.showToast({
        title: '三连成功!',
        image: "../images/ganbei.png"
      });
       that.setData({
         
         });
     },
     fail:function(err){},//请求失败
     complete:function(){}//请求完成后执行的函数
   })
  
 },
// showFrom: function(){
//   console.log(this.data.isShowFrom1)
//   this.setData({ 
//    isShowFrom1: this.data.isShowFrom1? false : true
//   });
  
//  },

//本地缓存getStorage

  onShow: function onShow() {

    var _this = this;

    wx.getStorage({
      key: 'numberColor',
      success: function success(res) {
        _this.setData({
          numberColor: res.data
        });
      }
    });
  },

  //弹幕输入框发送弹幕
  bindInputBlur: function (e) {
   
    var that=this;
    that.inputValue = e.detail.value;
       // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    console.log(e.detail.value);
   
    if (this.data.isRandomColor) {
      var color = getRandomColor();
    } else {
      var color = this.data.numberColor;
    }
    console.log(color);
    console.log(this.data.vid);
    
    wx.request({
    url:'http://172.16.12.55:8080/app/console/videoBarrage',//请求地址
   
    data:{//发送给后台的数据
      text: that.inputValue,
      time: that.data.times,
      color: color,
      userId: 1,
      videoId: that.data.vid
    },
    header:{//请求头
      "Content-Type":"application/x-www-form-urlencoded;charset=utf-8"
    },
    method:"POST",//get为默认方法/POST
    success:function(res){
      console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据
      　that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
        
        //danmuListnum: danmuList+1
　　　　　　　　　　})

    },
    fail:function(err){},//请求失败
    complete:function(){}//请求完成后执行的函数
  })
  },

  //发送弹幕
  bindSendDanmu: function (res) {
   
    if (this.data.isRandomColor) {
      var color = getRandomColor();
    } else {
      var color = this.data.numberColor;
    }
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: color
    });
    
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },

  //切换弹幕颜色
  switchChange: function (e) {
    this.setData({
      isRandomColor: e.detail.value
    });
  },

  //跳转到选择颜色的页面
  selectColor: function () {
    wx.navigateTo({
      url: '../selectColor/selectColor',
      success: function (res) {
      },
      fail: function fail() {
      },
      complete: function () {
      }
    });
  },
  //跳转搜索页面
  search: function () {
    wx.navigateTo({
      url: '../sousuo/sousuo',
      success: function (res) {
      },
      fail: function fail() {
      },
      complete: function () {
      }
    });
  },
  loadxia(){
  var that=this
  wx.getSystemInfo({
    success:res=>{
    
      that.setData({
        height: parseInt(res.windowHeight)+650 //获取屏幕高度 赋值给scroll-view
      })
    }
  })
},
  jiazai(e){
    console.log(this.data.height);
        console.log(22222);
        wx.showLoading({
          title: '玩命加载中',
          duration: 2000
        })
       
  }
 
}) 