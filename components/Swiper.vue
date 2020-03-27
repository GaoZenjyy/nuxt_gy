<template>
  <div class="swiper">
    <img :src="data[current].image" alt :style="{opacity}" />
    <ul>
      <li
        @mouseover="current=index"
        :class="{active:current == index}"
        v-for="(item,index) in data.length"
        :key="index"
        @click="butleft"
      ></li>
    </ul>
    <div class="swiper-leftbut" @click="butleft"><</div>
    <div class="swiper-rightbut" @click="butright">></div>
    <!-- <nuxt-link to class="swiper-leftbut" @click="butleft"><</nuxt-link> -->
    <!-- <nuxt-link  to class="swiper-rightbut" @click="butright">></nuxt-link> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 透明度
      opacity: 1,
      // 定时器
      inter: null,
      //土片下标
      current: 0,
      // 轮播图片
      data: [
        {
          image:
            "https://img14.360buyimg.com/babel/s590x470_jfs/t1/102661/22/16283/94863/5e796fc7E5d48d0dc/05260a095d0b0f83.jpg.webp"
        },
        {
          image:
            "https://img10.360buyimg.com/da/s590x470_jfs/t1/109849/13/9857/58740/5e7845c8Ebccfd43f/1861a56ab270d18f.jpg.webp"
        },
        {
          image:
            "https://img11.360buyimg.com/pop/s590x470_jfs/t1/86335/12/16116/236675/5e780bd9Ec29c109d/f5b4eeb6cf19fe72.jpg.webp"
        },
        {
          image:
            "https://imgcps.jd.com/ling/12784790/5LiH56eN55WF6ZSA56ul5Lmm/5q-P5ruhMTAw5YePNTA/p-5bd8253082acdd181d02fa22/e60544dd.jpg"
        },
        {
          image:
            "https://img14.360buyimg.com/pop/s590x470_jfs/t1/95796/4/13791/78340/5e5efa6aEab131ed7/5c8c5259348adcfd.jpg.webp"
        },
        {
          image:
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/104995/2/16292/94239/5e79c0c3E6c5053e0/03fe15377b6d5c15.jpg.webp"
        },
        {
          image:
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/89142/16/15288/98758/5e6f2cffE3c6f4c20/932c990a26786aaf.jpg.webp"
        },
        {
          image:
            "https://img14.360buyimg.com/pop/s590x470_jfs/t1/84778/26/16270/96511/5e79bccfEb099e242/42ad9e751730dfbc.jpg.webp"
        }
      ]
    };
  },
  methods: {
    //   轮播移动
    move() {
      this.opacity = 0;
      setTimeout(() => {
        if (this.current === this.data.length - 1) {
          this.current = 0;
        } else {
          this.current++;
        }
        this.opacity = 1;
      }, 100);
    },
    // left
    butleft() {
    //   console.log(123);

        this.opacity = 0;
        setTimeout(() => {
          if (this.current == 0) {
            this.current = this.data.length - 1;
          } else {
            this.current--;
          }
          this.opacity = 1;
        }, 100);
    },
    // right
    butright() {
    //   console.log(123);

        this.opacity = 0;
        setTimeout(() => {
          if (this.current === this.data.length - 1) {
            this.current = 0;
          } else {
            this.current++;
          }
          this.opacity = 1;
        }, 300);
    }
  },
  mounted() {
    this.inter = setInterval(this.move, 4000);
  },
  beforeDestroy() {
    clearInterval(this.inter);
  }
};
</script>
<style lang="scss">
.swiper {
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    transition: all 0.3s;
  }
  ul {
    position: absolute;
    bottom: 20px;
    left: 30px;
  }
  li {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    opacity: 0.4;
    &.active {
      opacity: 1;
      //   border: 3px solid rgba(0,0,0,.05);
      //   background: rgba(255,255,255,.4);
    }
  }
//   a {
//     position: absolute;
//     display: block;
//     width: 20px;
//     height: 40px;
//     background-color: #000;
//     color: #fff;
//     font-size: 18px;
//     // text-align: center;
//     line-height: 40px;
//   }
  &-leftbut,
  &-rightbut {
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.1;
    position: absolute;
    display: block;
    width: 20px;
    height: 40px;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    // text-align: center;
    line-height: 40px;
    &:hover {
      opacity: 0.4;
      color: #fff;
    }
  }
  &-leftbut {
    left: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0 25px 0 10px;
  }
  &-rightbut {
    right: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 0 20px 0 15px;
  }
}
</style>