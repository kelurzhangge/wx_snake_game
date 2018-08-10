// pages/books/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {
      status:  false,
      data: {}
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'http://localhost:8002/book/groom',
      method: 'GET',
      success: function (response) {
        if (response.statusCode == 200) {
          console.log(response.data)
          self.setData({
            result: {
              status: false,
              data: response.data
            }
          })
        }
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
  
  },
  search: function(event) {
    var self = this
    if (event.detail.value != ' ') {
      wx.request({
        url: 'http://localhost:8002/book/search?value=' + event.detail.value,
        method: 'GET',
        success: function (response) {
          if (response.statusCode == 200) {
            console.log(response.data)
            self.setData({
              result: {
                status: true,
                data: response.data
              }
            })
          }
        }
      })
    }
  }
})