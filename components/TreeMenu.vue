<template>
  <ul class="cat-menu">
    <li v-for="(item,index) in 18" :key="index">
      <div class="cat-menu-title">
        <nuxt-link to>家用电器----{{index}}</nuxt-link>
      </div>
      <div class="cat-menu-content">
        <div class="row gutter">
          <div class="col-10">
            <nuxt-link
              class="cat-menu-tsubmenu"
              to
              v-for="(item,index) in 5"
              :key="index"
            >玩3Cccccccc</nuxt-link>
            <div class="row cat-menu-goodsmenus" v-for="(item,index) in 10" :key="index">
              <div class="col-2">
                <nuxt-link to>手机通讯</nuxt-link>
              </div>
              <div class="col-10">
                <nuxt-link to v-for="(item,index) in 10" :key="index">游戏手机</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-2">
            <img
              class="cat-menu-adimage"
              v-for="(item,index) in 8"
              :key="index"
              src="https://img12.360buyimg.com/vclist/s83x35_jfs/t1/59149/30/6380/3749/5d438e05Eaf28a961/15d67b12d4cf885d.jpg.webp"
              alt
            />
            <img
              class="cat-menu-adimages"
              src="https://img13.360buyimg.com/vclist/s168x134_jfs/t1/98438/5/16062/10344/5e778e6fE6445f095/a329473f67b58575.jpg.webp"
              alt
            />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<style lang="scss">
.cat-menu {
  width: 100%;
  background-color: #fefefe;
  position: relative;
  padding: 10px 0 0 0;
  height: 470px;
  li {
    font-size: 13px;
    padding-left: 15px;
    line-height: 25px;
    width: 100%;
    user-select: none;
    &:hover {
      background-color: #ccc;
      .cat-menu-content {
        display: block;
      }
    }
  }
  &-content {
    position: absolute;
    top: 0;
    left: 190px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 990px;
    min-height: 470px;
    display: none;
    box-shadow: 0px 0px 4px #ccc;
    z-index: 999;
  }
  &-tsubmenu {
    display: inline-block;
    background-color: #000;
    color: #fff;
    padding: 1px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    &::after {
      content: ">";
      padding-left: 5px;
    }
    &:hover {
      background-color: #c81623;
      color: #fff;
    }
  }
  &-goodsmenus {
    .col-2 {
      a {
        font-weight: bold;
        &::after {
          content: ">";
          padding-left: 5px;
        }
      }
    }
    .col-10 {
      a {
        margin-right: 10px;
        font-size: 12px;
      }
    }
  }
  &-adimage {
    width: 50%;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
  }
  &-adimages {
    width: 100%;
  }
}
</style>