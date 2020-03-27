<template>
  <div class="head">
    <div class="container">
      <div class="row head-content gutter">
        <!-- logo -->
        <div class="col-2">
          <logo></logo>
        </div>
        <!-- 搜索框 -->
        <div class="col-8">
          <!-- 搜索  购物车-->
          <div class="search-cart">
            <div class="row">
              <div class="col-10">
                <div class="search-put">
                  <input type="text" />
                  <button>搜索</button>
                </div>
                <ul>
                  <li v-for="(item,index) in 9" :key="index">
                    <nuxt-link to>男装尚新</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-2">
                <cart></cart>
              </div>
            </div>
          </div>
          <!-- 一排按钮 -->
          <ul class="head-menus">
            <li v-for="(item,index) in 12" :key="index">
              <nuxt-link to>秒杀</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- 广告图片 -->
        <div class="col-2">
          <img
            style="float:right"
            src="https://img12.360buyimg.com/babel/jfs/t1/87139/10/14729/47100/5e699d74E357b0b8b/a9fe9098556aa9c0.png.webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo";
import Cart from "~/components/Cart";
export default {
  components: {
    Logo,
    Cart
  }
};
</script>
<style lang="scss">
.head {
  height: 140px;
  border-bottom: 1px solid #dddddd;
  margin-bottom:10px ;
  background-color: #fff;
  &-content {
    padding: 12px 0 10px 0;
  }
  &-menus {
    li {
      display: inline-block;
      font-size: 16px;
      margin: 0 10px;
    }
  }
  .search-cart {
    margin-bottom: 30px;
    input {
      width: 80%;
      border: 2px solid #e2231a;
      padding: 7px 0;
      float: left;
    }
    button {
      background-color: #e2231a;
      border: none;
      padding: 8px 18px;
      color: #fff;
    }
    ul {
      margin: 5px 0 0 35px;
      li {
        float: left;
        margin: 5px 10px;
      }
    }
  }
}
.search-put {
  margin-left: 50px;
}
</style>