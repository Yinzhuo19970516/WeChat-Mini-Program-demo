# WeChat-Mini-Program-demo
微信小程序练习项目
![Alt text](https://github.com/Yinzhuo19970516/WeChat-Mini-Program-demo/raw/master/1.png)
![Alt text](https://github.com/Yinzhuo19970516/WeChat-Mini-Program-demo/raw/master/2.png)
![Alt text](https://github.com/Yinzhuo19970516/WeChat-Mini-Program-demo/raw/master/3.png)
## 需求背景
### 活动简介：
卡贷系产品目前缺乏稳定可运营的活动平台，此需求旨在以活动形式建立吸引用户自主传播的可长期运营工具，为产品提供长期稳定的流量入口。继个月上线了全流程小程序后，需要通过运营的手段来增加推广效果，故以本需求开始，逐渐将增多卡贷运营类小程序。
### 业务需求方：
侯瀚
### 小程序名称：
锦鲤送福利
### 期望上线时间：
11月23日
### 需求目的：
通过品牌曝光和发送还款红包来促进用户的注册及转化。目标用户为全部用户。
## 详细设计
### 项目结构
* component 两个公共弹窗组件
    * 锦鲤弹窗：fishpopup
    * 奖品弹窗：prizepopup
* pages 六个页面
    * 首页：index，
    * 我的宝箱页面：treasureBox
    * 已领取奖品页面：prizeReceieved
    * 下载图片页面：download
    * 领取成功页面： receiveSuccess
    * 收录手机号码页面： getNumber；
* utils 封装功能函数
    * 下载图片并保存至相册功能：util.js
* app.js 定义全局变量和函数
    * 封装ajax请求：xcxRequest()
    * 定义全局变量：globalData()
    
### 实现思路
* index
    * 运用css3大量动画实现呼吸，捞鱼，闪烁，晃动，游动，摆动等动态效果；
    * 活动规则弹窗，奖池列表调用后端接口；
    * 捞一下调用后端接口，并传递参数给fishpopup(锦鲤弹窗组件)，拉起弹窗，如果点击兑奖得到手机号码后，传递参数给(receiveSuccess)奖品领取成功页面，跳转领取成功页面；
* treasureBox
    * 调用小程序swiper-tab组件，实现滑动点击切换我的锦鲤和我的奖品；
    * 调用一次接口，本地动态维护一个数组，实现锦鲤和奖品页面根据用户操作动态变化；
    * 点击锦鲤和奖品时传递参数给fishpopup(锦鲤弹窗组件)和prizepopup（奖品弹窗组件），拉起弹窗，之后逻辑与首页拉起弹窗一致；
* download
    * 点击锦鲤弹窗下载按钮跳转下载页面；
    * 下载页面调用小程序wx.createCanvasContext，绘制图片；
    * 绘制完成后调用util.js保存至相册，调用小程序wx.getSetting获取设置信息，wx.saveImageToPhotosAlbum保存至相册，wx.openSetting打开设置，wx.showToast提示信息；
* app.js
    * 全局封装了ajax请求xcxRequest()，定义全局变量globalData()，方便全局调用；
    * 判断登录态;
    
### 调用的api列表

函数名 | 作用 | 兼容性
------------ | ----------- | ------------
wx.getStorageSync | 数据缓存 | 1.0.0
wx.showLoading | 开启loading提示框 | 1.0.0
wx.hideLoading | 关闭loading提示框 | 1.0.0
wx.showToast | 提示框 | 1.0.0
wx.login | 获取登录凭证 | 1.0.0
onShareAppMessage | 转发小程序 | 1.1.0
wx.navigateToMiniProgram | 打开小程序 | 1.3.0
wx.getSetting | 获取用户当前设置信息 | 1.2.0
wx.authorize | 提前向用户发起授权请求 | 1.2.0
wx.saveImageToPhotosAlbum | 保存图片到系统相册 | 1.2.0
wx.openSetting | 打开设置 | 1.1.0
wx.navigateTo | 跳转页面 | 1.0.0
wx.checkSession | 检验session_key是否有效 | 1.0.0
wx.setStorageSync | 存储信息 | 1.0.0
wx.showModal | 展示弹窗 | 1.0.0
wx.createCanvasContext | canvas 组件的绘图上下文 | 1.0.0
fillStyle | 填充颜色 | 1.9.90
fillRect | 绘制矩形 | 1.0.0
drawImage | 绘制图片 | 1.0.0
setTextAlign | 设置文字对齐 | 1.1.0
setFillStyle | 设置填充色 | 1.9.90
setFontSize | 设置字号 | 1.0.0
fillText | 绘制文字 | 1.0.0
stroke | 绘制路径 | 1.0.0
draw | 画到canvas中 | 1.0.0
wx.getSystemInfo | 获取系统信息 | 1.0.0
wx.canvasToTempFilePath | 把画布指定区域导出指定大小图，并返回文件路径 | 1.0.0
getPhoneNumber | 获取微信用户绑定的手机号 | 1.0.0
