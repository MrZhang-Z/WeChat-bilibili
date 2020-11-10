// pages/histry/histry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
    
    ],
    bjxs:false,
    dxxs:true,
    checked:false,
    values:null,
    quanxuan:false,
    scxs:false,
    tp:true
  },
  quanxuan:function(){
    let _this=this
    if(_this.data.quanxuan){
      _this.setData({
        checked:false,
        quanxuan:false,
        values:null
          })
     }else{
       let vul=[]
       for(let i=0;i<_this.data.items.length;i++){
         vul.push(i)
       }
       console.log(vul)
      _this.setData({
        checked:true,
        quanxuan:true,
        values:vul
      })
    }
  },
   bianji:function(){
     let _this=this
     if(_this.data.bjxs){
      _this.setData({
        bjxs:false,
        dxxs:true,
        checked:false,
        quanxuan:false,
        scxs:false
          })
     }else{
      _this.setData({
        bjxs:true,
        dxxs:false
      })
    }
   },

   shanchu:function(){
     let _this=this
     let i=0
     let values = _this.data.values.sort()
     let item = _this.data.items
    for (let j = 0, lenJ =values.length; j < lenJ; ++j) {
      console.log( values)
      console.log(parseInt(values[j])-i) 
     item.splice(( values[j]-i),1)
      i++
     }
     _this.setData({
      items:item,
      checked:false,
      values:null,
     
    })
    if(_this.data.items.length==0){
      _this.setData({
        quanxuan:false,
        bjxs:true,
        scxs:true,
        tp:false
       })
    }
    },
    
    checkboxChange(e){
      let _this=this
     console.log('checkbox发生change事件，携带value值为：', e.detail.value)
     const items = _this.data.items
     const values = e.detail.value
       _this.setData({
         items: items,
         values:values
       })
       if (_this.data.values.length==_this.data.items.length) {
        _this.setData({
         quanxuan:true
        })
       }else{
        _this.setData({
          quanxuan:false
         })
       }
   },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(_this.data.items);
    wx.request({
      url: 'http://172.16.12.55:8080/app/console/video',
      method:"GET",
      header: {
        'Content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType:'json',
      success:function(e){
        console.log(e)
          let newslist=e.data.newslist;
          _this.setData({
            items:newslist
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