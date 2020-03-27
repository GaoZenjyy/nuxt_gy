<template>
  <div class="hswiper">
    <img v-for="(item,index) in data[currte]" :key="index" :style="{opacity}" :src="item.image" alt />
    <div class="hswiper-leftbut" @click="butleft"><</div>
    <div class="hswiper-rightbut" @click="butright">></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 定时器
      innter: null,
      // 透明度
      opacity: 1,
      // 当前轮播下标
      currte: 0,
      // 轮播数据
      data: [
        [
          {
            image:
              "https://img10.360buyimg.com/babel/s380x300_jfs/t1/105463/33/16560/66603/5e797750E935e5140/17368e2afe964378.jpg.webp"
          },
          {
            image:
              "https://img12.360buyimg.com/babel/s380x300_jfs/t1/93858/20/15607/74743/5e746f6fE8b068f1f/5961909b133d288a.jpg.webp"
          },
          {
            image:
              "https://img10.360buyimg.com/babel/s380x300_jfs/t1/98939/20/14079/55061/5e61ed09E52e76cb1/2e8166c9c1de28ef.jpg.webp"
          }
        ],
        [
          {
            image:
              "https://img12.360buyimg.com/babel/s380x300_jfs/t1/89171/29/14822/87152/5e6b4482E36cfaa08/3c198ca4bf959217.png.webp"
          },
          {
            image:
              "https://img11.360buyimg.com/babel/s380x300_jfs/t1/97722/38/15633/65698/5e744378E7946f33d/c4a7dabb5beb1d88.jpg.webp"
          },
          {
            image:
              "https://img11.360buyimg.com/da/s380x300_jfs/t1/74176/30/13671/46772/5db18a85Ee6cc4997/6e200be1da9d180e.png.webp"
          }
        ],
        [
          {
            image:
              "https://img13.360buyimg.com/babel/s380x300_jfs/t1/91861/22/16196/69399/5e79c5d7E58ee9512/5d6a80c597be425c.jpg.webp"
          },
          {
            image:
              "https://img12.360buyimg.com/babel/s380x300_jfs/t1/97740/23/16247/77394/5e79bb1fEdd838530/39673a14c6c49a9a.jpg.webp"
          },
          {
            image:
              "https://img13.360buyimg.com/babel/s380x300_jfs/t1/90933/23/16122/73440/5e79bcadEcbc49581/f6edaba339879721.jpg.webp"
          }
        ]
      ]
    };
  },
  mounted() {
    this.innter = setInterval(() => {
      this.move();
    }, 7000);
  },
  beforeDestroy() {
    clearInterval(this.innter);
  },
  methods: {
    move() {
      this.opacity = 0;
      setTimeout(() => {
        if (this.currte === this.data.length - 1) {
          this.currte = 0;
        } else {
          this.currte++;
        }
        this.opacity = 1;
      }, 500);
    },
    // left
    butleft() {
      //   console.log(123);

      this.opacity = 0;
      setTimeout(() => {
        if (this.currte == 0) {
          this.currte = this.data.length - 1;
        } else {
          this.currte--;
        }
        this.opacity = 1;
      }, 100);
    },
    // right
    butright() {
      //   console.log(123);

      this.opacity = 0;
      setTimeout(() => {
        if (this.currte === this.data.length - 1) {
          this.currte = 0;
        } else {
          this.currte++;
        }
        this.opacity = 1;
      }, 300);
    }
  }
};
</script>
<style lang="scss">
.hswiper {
  position: relative;
  margin-top: -10px;
  &:hover {
    .hswiper-leftbut,
    .hswiper-rightbut {
      display: block;
    }
  }
  img {
    transition: all 0.5s;
    // display: block;
    width: 100%;
    cursor: pointer;
    margin-top: 10px;
    // margin-bottom: 10px;
  }
  &-leftbut,
  &-rightbut {
    display: none;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.1;
    position: absolute;
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
    // display: none;
    right: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 0 20px 0 15px;
  }
}
</style>