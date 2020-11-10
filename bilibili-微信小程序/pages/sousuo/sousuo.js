// pages/search/search.js
const app=getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchValue:null,
    historyinfo:['你 管 这 叫 童 年 ???','最 强 元 首',"新地图太小是真的刚！","逆天邪神","老番茄","周杰伦","央视新闻","创造营2020","小小说"],   
    rquestinfo:[{}],
    hiddenName:true,
    // hidden:false, 
    serylist:[],
    testvid:[],
    vid:[],
    list:[],
    ren_men:['【JOJOの奇妙歌声】素颜','一人之下你所不知道的宝儿姐','老番茄','欧阳靖','LPL','科技全明星',],
     //热门推荐
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    bank: function(ev) {
      wx.navigateBack({
        complete: (res) => {},
      })
  },
  deleteh:function(e){
    if(this.data.historyinfo.length>=10){
      
      this.setData({
        historyinfo:this.data.historyinfo.splice(1)
      })
      app.getdatainfo.apphistoryinfo=this.data.historyinfo
    }
   
  },
  
  show:function(e){
    let that=this;
    that.setData({
      searchValue:e.detail.value,
    })
    //获取输入的搜索内容
    var history=e.detail.value
         this.deleteh();
   
    if(history.replace(/\s+/g, '')!=""){
      var history1= that.data.historyinfo.concat(history)
      var indexm=that.data.historyinfo.indexOf(history);
    if(indexm>0){
    }
    else{
      
      that.setData({
        historyinfo:history1
      })
      app.getdatainfo.apphistoryinfo=that.data.historyinfo
      console.log(app.getdatainfo.apphistoryinfo)
      that.setData({
        historyinfo:app.getdatainfo.apphistoryinfo
      })
    } 
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/video', // 搜 索 接 口
      data: {
        'vidoTitle':[]
      },
      method:"GET",
      header: {
        'Content-type': 'application/x-www-form-urlencoded'  // 默认值
      },
      dataType:'json',
      success (res) {
        console.log(res)
          if(res.data.length>0){
            app.getdatainfo.textinfo=history
            wx.navigateTo({
              url: '/pages/mine/mine'
            })
          }
      }
    })
  }
  else{
    wx.showToast({
      title: '无...', 
      icon: 'loading', 
      duration: 1500//持续的时间
 
    })
  }
    // 搜索值   searchValue
    // console.log(that.data.searchValue);
  },

  // 图 标 搜 索
  xshow:function(){
    let that=this;
    console.log("----"+that.data.searchValue)  
     let history = that.data.searchValue
     that.deleteh();
     var history1= that.data.historyinfo.concat(history)
     var indexm=that.data.historyinfo.indexOf(history);
     if(indexm>0){
        }
     else{             
      that.setData({
        historyinfo:history1
      })
      app.getdatainfo.textinfo=history
      app.getdatainfo.apphistoryinfo=that.data.historyinfo
             wx.navigateTo({
           url: '/pages/mine/mine',
            })
    } 
},
sqshow:function(e){  
  this.setData({
    searchValue:e.detail.value,
    hiddenName:true,
    // hidden:false
  })
},
   //点击 搜索的历史记录
click:function(e){
  var that=this;
  that.deleteh();
    console.log('我要id')
    console.log(e)

    console.log(e.target.dataset.text+e.target.dataset.id)//历史中的名字
    let history=e.target.dataset.text
    let dataid=e.target.dataset.id
     if(app.getdatainfo.apphistoryinfo!=null){
      var indexm=app.getdatainfo.apphistoryinfo.indexOf(history);
         if(indexm>0){
        }
         else{                   
        var history1= that.data.historyinfo.concat(history)
         that.setData({
          historyinfo:history1
          })
         }
     }else{
      var indexm=that.data.historyinfo.indexOf(history);
      if(indexm>0){
     }
      else{                   
     var history1= that.data.historyinfo.concat(history)
      that.setData({
       historyinfo:history1
    })
}
     }
    
   
   app.getdatainfo.textinfo=history
   wx.navigateTo({
     url: '../mine/mine?dataid='+dataid,
   })
  } ,
  alldelete:function(){
      this.setData({
        historyinfo:[]
      })
  },
  //排行榜 点击
  enter:function(e){
         console.log(e.currentTarget.dataset.type+e.currentTarget.dataset.title+e.currentTarget.dataset.id)
         wx.navigateTo({
           url: '/pages/video/video?videoId='+e.currentTarget.dataset.id,
         })
  },
  

  onLoad:function(options){
    var that=this;
         if(app.getdatainfo.apphistoryinfo!=null){
          that.setData({
            historyinfo:app.getdatainfo.apphistoryinfo
         })
         }
       wx.request({
         url: 'http://172.16.12.45:8080/app/console/video',
         data:{
          "num":6
         },
         success (res){
           console.log('hhhhhhhhhhhhhh')
           console.log(res.data.newslist)
           let newslist=res.data.newslist;
           that.setData({
            rquestinfo:newslist , //数据库的返回数据
          
          })
         }
       })
  },
  //联想处理
  showtext:function(e){
    let that=this;
  
    that.setData({
      searchValue:e.detail.value,
    })
    if(e.detail.value!=""&&e.detail.value!=" "){
    console.log(that.data.searchValue)//打印搜索值
    
     wx.request({
      url: 'http://172.16.12.55:8080/app/console/video',
      data:{
        "title":that.data.searchValue
      },
      method:"POST",
      success(res){
        that.setData({
          hiddenName:false,
          // hidden:true
        })
      
        console.log("联想");
        console.log(res.data)
           that.setData({
              list:[]
              })
          if(res.data.length>0){
              for(let i=0;i<res.data.length;i++){
                 //对象数组添加
                  let srr={}
                  srr.title=res.data[i].title
                  srr.id=res.data[i].id
                  let lists=that.data.list
                    lists.push(srr)
                    that.setData({
                           list:lists
                         })
                   //    console.log(JSON.stringify(that.data.list).indexOf(JSON.stringify(lists)))
              }
          }          
      },     
     })
    }
    else{
      console.log("没输入");
    }
  },
  onShow:function(){ //返回时刷新数据
    var that=this;
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/video',
         data:{
          "num":6
         },
      success (res){
        console.log(res.data)
        that.setData({
         rquestinfo:res.data,//数据库的返回数据
         testvid:[]  
       })
      }
   
    })
    console.log(that.data.request)
  }
},

})
 


