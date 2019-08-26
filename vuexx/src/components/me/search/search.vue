<template>
  <div style="background:#f2f2f2;width:100%px;">
    <div style="background:#FC4C70;height:210px;">
      <div style="display:flex;justify-content:space-between;height:40px;line-height:40px;">
        <p style="padding-left:8px;">
          <i class="mint-toast-icon mintui mintui-back"></i>
        </p>
        <p style="text-align:center;color:#fff;font-size:14px;">我的_XX</p>
        <p style="padding-right:8px;display:inline-block;">
          <i class="mint-toast-icon mintui mintui-back"></i>
        </p>
      </div>
      <div>
        <div class="i_reglog">
          <p style="padding-top:35px;">
            <img
              src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/noportrait.png"
              alt
              style="width: 60px;
   height: 60px;
   margin: 0 auto;
   display: inline-block;"
            />
          </p>
          <p class="reg_log">
            <a href>注册</a>
            <i
              style="display: inline-block;width: 3px;height: 20px;background:#fff;margin:0px 5px;"
            ></i>
            <a href>登录</a>
          </p>
        </div>
      </div>
    </div>
    <div style="width:100%;height:125px;background:#fff;margin:14px 0px;">
      <div class="list">
        <p>
          <i class="block-title-icon myorder"></i>我的订单
        </p>
        <a href style="text-decoration: none;color:#999;font-size:12px;">
          <span>查看我的全部订单</span>
          <i class="arrow-right"></i>
        </a>
      </div>
      <div class="list_down">
        <a href="">
          <i class="unpaid"></i>
          <span>代付款</span>
        </a>
        <a href="">
          <i class="unconfirm"></i>
          <span>待收货</span>
        </a>
        <a href="">
          <i class="unpaid"></i>
          <span>待评价</span>
        </a>
        <a href="">
          <i class="unpaid"></i>
          <span>退款/退货</span>
        </a>
      </div>
    </div>
    <div class="assets">
        <div class="assets_i">
            <p>
          <i class="block-title-icon myfund"></i>我的资产
        </p>
        </div>
        <div class="assets_t">
            <a href="">现金券</a>
            <a href="">红包</a>
            <a href="">聚美余额</a>
            <a href="">礼品卡</a>
        </div>
    </div>
    <div class="nav_bottom">
        <a href="">
            <p><i class="block-title-icon myordera"></i>售后服务</p>
            <p><i class="arrow-right"></i></p> 
        </a>
        <a href="">
            <p><i class="block-title-icon myorderb"></i>意见反馈</p>
            <p><i class="arrow-right"></i></p> 
        </a>
        <a href="">
            <p><i class="block-title-icon myorderc"></i>收货地址</p>
            <p><i class="arrow-right"></i></p> 
        </a>
        <a href="">
            <p><i class="block-title-icon myorderd"></i>退出登录</p>
            <p><i class="arrow-right"></i></p> 
        </a>
        <a href="">
            <p><i class="block-title-icon myordere"></i>400-123-8888</p>
            <p><i class="arrow-right"></i></p> 
        </a>
    </div>
    <div class="words">
        <p>客服热线400-123-8888 (8:00-22:00)</p>
        <p>拨打前请记录您的UID  0    </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.i_reglog {
  height: 100px;
  line-height: 40px;
  width: 375px;
  text-align: center;
}
.reg_log a {
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
}
.list {
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
}
.myorder {
  vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 10px;
  background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/myorder.png")
    center center no-repeat;
  background-size: cover;
}
.arrow-right {
  vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png")
    center center no-repeat;
  background-size: cover;
}
.list_down{
    display: flex;
    justify-content: space-between;
    padding: 14px 0px;
}
.list_down a{
    text-align: center;
    text-decoration: none;
    color: #666;
    font-size: 12px;
}
.list_down a>i{
   width: 24px;
  height: 24px;
  margin:5px 24px;
  display: block;
  background-size: cover;
}
.unpaid {
  background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png") center center no-repeat;
}
.unconfirm{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png") center center no-repeat;
}
.uncomment{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/uncomment.png") center center no-repeat;
}
.refund{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png") center center no-repeat;
}

.assets{
    width: 100%;
    background: #fff;
    margin-bottom: 14px;
}
.assets_i{
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eaeaea;
}
.myfund{
    vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 10px;
  background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/myfund.png")
    center center no-repeat;
  background-size: cover;
}
.assets_t{
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content:space-around;
}
.assets_t a{
    display: block;
    text-decoration: none;
    color:#666;
    font-size: 12px;
}
.nav_bottom{
width: 100%;
padding: 0px 0px;
background: #fff;
border-bottom: 1px solid #eaeaea;
}
.nav_bottom a{
    display: inline-block;
    height: 35px;
    line-height: 35px;
    text-decoration: none;
    color: #666;
    display: flex;
    justify-content: space-between;
}
.nav_bottom a p:first-child i{
    vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0px 10px;
  background-size: cover;
}
.myordera{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/rmaservice.png")
    center center no-repeat;
}
.myorderb{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/feedback.png")
    center center no-repeat;
}
.myorderc{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/address.png")
    center center no-repeat;
}
.myorderd{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/logout.png")
    center center no-repeat;
}
.myordere{
    background: url("https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/tel.png")
    center center no-repeat;
}
.words{
    font-size: 12px;
    color: #999;
    margin:15px;
    padding-bottom: 49px;
}
</style>