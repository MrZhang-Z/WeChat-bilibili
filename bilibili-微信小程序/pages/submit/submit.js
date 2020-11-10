
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt1:'',
    buttonDisabled:false,
    modalHidden:true,
    show:false,
    texts: "0/200",
    min: 10,//最少字数
    max: 200, //最多字数 (根据自己需求改变) 
    pics:[],
    isShow: true,
    countIndex:2,//最多上传图片的数量
    count: [1, 2, 3]
  },

  uploadImage:function(){
    let that=this;
    let pics = that.data.pics;
    wx.chooseImage({
    count:3 - pics.length,
    sizeType: ['original', 'compressed'], 
    sourceType: ['album', 'camera'], 
    success: function(res) {
    let imgSrc = res.tempFilePaths;
     pics.push(imgSrc);
    if (pics.length >= 3){
     that.setData({
     isShow: false
     }) 
    }
    that.setData({
     pics: pics
    })
    },
    })
     
    },
     
    /**删除图片 */
    deleteImg:function(e){
    let that=this;
    let deleteImg=e.currentTarget.dataset.img;
    let pics = that.data.pics;
    let newPics=[];
    for (let i = 0;i<pics.length; i++){
    //判断字符串是否相等
    if (pics[i]["0"] !== deleteImg["0"]){
    newPics.push(pics[i])
    }
    }
    that.setData({
    pics: newPics,
    isShow: true
    })
     
    },


  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        texts: "至少还需要",
        textss: "字",
        num:this.data.min-len
      })
    else if (len > this.data.min)
      this.setData({
        texts: " ",
        textss: " ",
        num:''
      })

    this.setData({
      currentWordNumber: len //当前字数  
    });
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
  },

  showModal:function(){
    this.setData({
     modalHidden:!this.data.modalHidden
    })
   },
   modalBindaconfirm:function(){
     this.setData({
     modalHidden:!this.data.modalHidden,
     show:!this.data.show,
     tip:'您点击了【确认】按钮！',
     buttonDisabled:!this.data.buttonDisabled
    })
    wx.reLaunch({
      url: '../fankui/fankui',
    })
   },
   modalBindcancel:function(){
     this.setData({
     modalHidden:!this.data.modalHidden,
     tip:'您点击了【取消】按钮！'
    })
   },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("=============",options.txt1);
    let txt1 = options.txt1;
    this.setData({
        txt1:txt1
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