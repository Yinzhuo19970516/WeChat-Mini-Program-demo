// pages/show/show.js
var sgsdata = require('../../utils/sgsdata.js')
var app = getApp() 
Page({
  data:{
    answers:{},
    answer:{},
    checked_0:false,
    checked_1:false
  },
  formSubmit:function(e) {
    var nextId = e.detail.value.nextId;
    if(nextId == ""){
      return;
    }
    if(nextId.indexOf('result') != -1){
      var results =nextId.split('_');
      wx.navigateTo({
        url: '../result/result?id='+results[1]
      })
    }else{
      this.setData({
        checked_0: false,
        checked_1: false,
        answer:this.data.answers[nextId]
      });
    }
  },
  onLoad:function(){
    var ans = sgsdata.getAnswer();
    this.setData({
      answers:ans,
      answer:ans[0]
    });
  }
})  