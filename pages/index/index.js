//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World xixi',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.navigateTo({
      url: '../testPage'
    })
  },
  bindHelloWorld: function () {
    console.log('click hello world')
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    console.log('click share button')
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log('userInfo ==',userInfo)
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
