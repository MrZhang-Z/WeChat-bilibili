// pages/mine/mine.js
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
    Sname:"",
    vid:null,
    datalist:[],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (option){
      console.log("mine中")
       console.log(app.getdatainfo.textinfo+option.dataid)
        this.setData({
           vid:option.dataid,
           Sname:app.getdatainfo.textinfo,
          })
          if(this.data.vid>0){
               console.log("id查")
              this.showfid();
          }else{ this.showfun();}
         
              
          
    },
    //通过id调用
    showfid:function(){
      var that=this
      wx.request({
        url: 'http://172.16.12.55:8080/app/console/video',
         data:{
           "id":that.data.videoId
         },
         method:"GET",
         success: (result) => {
          console.log(result.data.newslist)
          let newslist=result.data.newslist
          this.setData({
           datalist:newslist
         })
              let arr={}
              arr.id=result.data.newslist[i].videoId
              arr.title=result.data.newslist[i].videoTitle
              arr.img=result.data.newslist[i].videoPic
              let  datalist=that.data.newslist
               datalist.push(arr)
               console.log("查")
               console.log(result.data.title)
              
               that.setData({
             datalist:newslist
           })
           console.log(that.data.datalist)
          
        },
      })
    },
    //通过名字查
    showfun:function(e){
      var that=this
          wx.request({
             url: 'http://172.16.12.55:8080/app/console/video',
             data: {
             "title":that.data.videoTitle
             // "id":that.data.vid
             },
             
             method: "GET",
             success: (result) => {
               console.log(result.data.newslist)
               let newslist=result.data.newslist
               this.setData({
                datalist:newslist
              })
              if(result.data.newslist.length>0){
                for(let i=0;i<result.data.newslist.length;i++){
                   let arr={}
                   arr.id=result.data.newslist[i].videoId
                   arr.title=result.data.newslist[i].videoTitle
                   arr.img=result.data.newslist[i].videoPic
                   arr.created=result.data.newslist[i].created
                   let  datalist=that.data.newslist
                   datalist.push(arr)
                that.setData({
                  datalist:newslist
                })
               }
              }
             },
           })
    }
  
  }
})
