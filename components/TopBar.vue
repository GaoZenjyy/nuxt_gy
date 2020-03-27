<template>
  <div>
    <!-- 顶部导航 -->
    <div class="top-bar">
      <div class="container">
        <div class="col-5">
          <zdk location title="四川">
            <h1>hello word</h1>
          </zdk>
        </div>
        <div class="col-7">
          <ul class="top-bar-menu">
            <li>
              你好,请登录
              <span>免费注册</span>
            </li>
            <li class="top-bar-line"></li>
            <li>我的订单</li>
            <li class="top-bar-line"></li>

            <li>
              <zdk title="我的京东" arrow></zdk>
            </li>
            <li class="top-bar-line"></li>

            <li>京东会员</li>
            <li class="top-bar-line"></li>

            <li>
              <zdk title="企业采购" arrow></zdk>
            </li>
            <li class="top-bar-line"></li>

            <li>
              <zdk title="客户服务" arrow></zdk>
            </li>
            <li class="top-bar-line"></li>

            <li>
              <zdk title="网站导航" arrow></zdk>
            </li>
            <li class="top-bar-line"></li>

            <li>手机京东</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import zdk from "~/components/zdk";
export default {
  components: {
    zdk
  }
};
</script>
<style lang="scss" >
.top-bar {
  background-color: #e3e4e5;
  border-bottom: 1px solid #dddddd;

  height: 30px;
  &-menu {
    float: right;
    li {
      float: left;
      height: 30px;
      line-height: 30px;
    }
  }
  &-line {
    width: 1px;
    background-color: #ccc;
    margin: 0 5px;
    height: 0.9em !important;
    margin-top: 10px;
  }
}
</style>

