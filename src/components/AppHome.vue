<template>
  <div style="overflow-x:hidden">
    <video
      class="video-head"
      poster="@/assets/media/poster.jpg"
      disablePictureInPicture
      autoplay
      muted
      @canplaythrough="hideLoader"
    >
      <source src="@/assets/media/header.mp4" type="video/mp4" />
    </video>
    <transition name="navregis">
      <div v-if="videoLoading" class="videoLoader"></div>
    </transition>
    <!-- INFO: hero -->
    <section id="header" class="hero is-fullheight">
      <div class="hero-body" style="align-items:flex-end">
        <div class="container has-text-centered">
          <span id="detail">&nbsp;</span>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
    <!-- INFO: WHAT IS MODCOM -->
    <section ref="detail" class="detail" style="padding:104px 0">
      <picture class="pic1">
        <source srcset="@/assets/img/coin1.webp" type="image/webp" />
        <source srcset="@/assets/img/coin1.png" type="image/png" />
        <img src="@/assets/img/coin1.png" alt="dice" />
      </picture>
      <div class="container content">
        <div class="container content has-text-centered">
          <h1 class="has-text-white">ModCom คืออะไร?</h1>
          <p class="has-text-white" style="letter-spacing:.2px">
            <span class="nobr">ขอ</span>
            <span class="nobr">ต้อนรับ</span>
            <span class="nobr">วิศวกรรม</span>
            <span class="nobr">คอมพิวเตอร์</span>
            <span class="nobr">ปี 1</span>&nbsp;
            <span class="nobr">สู่นครแห่งความบันเทิง</span>
            <span class="nobr">ที่ใหญ่</span>
            <span class="nobr">ที่สุด</span>&nbsp;
            <span class="nobr">"ModCom</span>&nbsp;
            <span class="nobr">Casino"</span>&nbsp;
            <span class="nobr">พวกเราคือ</span>&nbsp;
            <span class="nobr">Joker</span>&nbsp;
            <span class="nobr">เจ้าของ Casino</span>&nbsp;
            <span class="nobr">แห่งนี้</span>&nbsp;
            <span class="nobr">ได้เวลาทิ้งทุกอย่าง</span>
            <span class="nobr">แล้วมาร่วม</span>
            <span class="nobr">หมุน</span>
            <span class="nobr">รูเล็ต</span>
            <span class="nobr">แห่งชะตาชีวิต</span>
            <span class="nobr">ครั้งใหม่</span>
            <span class="nobr">กับเรา</span>
            <span class="nobr">ที่</span>&nbsp;
            <span class="nobr">ModCom</span>
          </p>
        </div>
      </div>
      <picture class="pic2">
        <source srcset="@/assets/img/set.webp" type="image/webp" />
        <source srcset="@/assets/img/set.png" type="image/png" />
        <img src="@/assets/img/set.png" alt="dice" />
      </picture>
    </section>
    <!-- INFO: Timeline -->
    <section id="timeline" style="padding:104px 0 139px">
      <div class="container content">
        <div class="container content">
          <h1 class="has-text-centered">กำหนดการ</h1>
          <br />
          <div class="columns is-mobile is-multiline timeline-cards">
            <!-- Open -->
            <div ref="card0" class="column is-6-mobile card-0">
              <picture>
                <source
                  srcset="@/assets/cards/regis_start.webp"
                  type="image/webp"
                />
                <source
                  srcset="@/assets/cards/regis_start.jpg"
                  type="image/png"
                />
                <img
                  src="@/assets/cards/regis_start.jpg"
                  alt="เปิดรับสมัคร 14 ก.ค. 2562"
                />
              </picture>
            </div>
            <!-- Close -->
            <div ref="card1" class="column is-6-mobile card-1">
              <picture>
                <source
                  srcset="@/assets/cards/regis_end.webp"
                  type="image/webp"
                />
                <source
                  srcset="@/assets/cards/regis_end.jpg"
                  type="image/png"
                />
                <img
                  src="@/assets/cards/regis_end.jpg"
                  alt="ปิดรับสมัคร 21 ก.ค. 2562"
                />
              </picture>
            </div>
            <!-- Camp -->
            <div ref="card2" class="column is-6-mobile card-2">
              <picture>
                <source
                  srcset="@/assets/cards/camp_start.webp"
                  type="image/webp"
                />
                <source
                  srcset="@/assets/cards/camp_start.jpg"
                  type="image/png"
                />
                <img
                  src="@/assets/cards/camp_start.jpg"
                  alt="เปิดค่าย 3 ส.ค. 2562"
                />
              </picture>
            </div>
            <!-- End -->
            <div ref="card3" class="column is-6-mobile card-3">
              <picture>
                <source
                  srcset="@/assets/cards/camp_end.webp"
                  type="image/webp"
                />
                <source srcset="@/assets/cards/camp_end.jpg" type="image/png" />
                <img
                  src="@/assets/cards/camp_end.jpg"
                  alt="ปิดค่าย 5 ส.ค. 2562"
                />
              </picture>
            </div>
          </div>
          <p
            ref="timeline-ps"
            class="timeline-ps has-text-right has-text-white"
          >
            <span class="nobr">ลงทะเบียน</span>
            <span class="nobr">วันที่ 3 ส.ค. 2562</span>&nbsp;
            <span class="nobr">ณ ห้องโถงภาควิชา</span>&nbsp;
            <span class="nobr">ชั้น 10 อาคารวิศววัฒนะ</span>
          </p>
        </div>
      </div>
    </section>
    <!-- INFO: faq -->
    <section
      id="faq"
      class="container content"
      style="background:#000;padding:104px 0"
    >
      <picture class="backdrop">
        <source srcset="@/assets/img/coin2.webp" type="image/webp" />
        <source srcset="@/assets/img/coin2.png" type="image/png" />
        <img src="@/assets/img/coin2.png" alt="dice" />
      </picture>
      <div class="container content">
        <div class="container content">
          <h1 class="has-text-centered">คำถามที่พบบ่อย</h1>
          <ul class="faq">
            <li>
              <div class="question">ค่ายจัดขึ้นที่ไหนครับ?</div>
              <div class="answer">
                ค่ายจัดขึ้นที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                วิทยาเขตบางขุนเทียนครับ
              </div>
            </li>
            <li>
              <div class="question">ค่ายจัดทั้งหมดกี่วันครับ?</div>
              <div class="answer">ค่ายจัดทั้งหมด 3 วัน 2 คืนครับ</div>
            </li>
            <li>
              <div class="question">มีค่าใช้จ่ายภายในค่ายไหมคะ?</div>
              <div class="answer">ค่ายนี้ไม่มีค่าใช้จ่ายใดๆ ภายในค่ายค่ะ</div>
            </li>
            <li>
              <div class="question">
                ทางค่ายจัดที่พักที่ไหนให้กับผู้เข้าร่วมคะ?
              </div>
              <div class="answer">
                ผู้เข้าร่วมค่ายจะได้เข้าพักที่หอพักนักศึกษา
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี วิทยาเขตบางขุนเทียนครับ
              </div>
            </li>
            <li>
              <div class="question">
                ระดับชั้นไหนสามารถเข้าร่วมค่ายได้บ้างครับ?
              </div>
              <div class="answer">
                นักศึกษาคณะวิศวกรรม ภาควิชาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 1
                สามารถเข้าร่วมได้เท่านั้นครับ
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- INFO: contact -->
    <footer
      id="contact"
      class="container content footer"
      style="padding:0 0 6rem"
    >
      <div class="columns has-text-centered">
        <div class="column is-5 has-text-white">
          <h1 class="has-text-centered">ติดต่อสอบถาม</h1>
          <ul class="contact">
            <li>
              นายนราวิชญ์ วงษ์น้อม (พี่บอส)
              <a class="tel" href="tel:0982692126">09 8269 2126</a>
            </li>
            <li>
              นายกฤตนัน ฉลอง (พี่ไอซ์)
              <a class="tel" href="tel:0612178257">06 1217 8257</a>
            </li>
            <li>
              นายสุภกิจ บัวสอด (พี่เฟิร์ส)
              <a class="tel" href="tel:0864293172">08 6429 3172</a>
            </li>
            <li>
              นางสาวพิมพ์ชฏา สารพา (พี่พิมพ์)
              <a class="tel" href="tel:0957075463">09 5707 5463</a>
            </li>
          </ul>
        </div>
        <p class="column is-7 has-text-white">
          <picture>
            <source srcset="@/assets/img/dice.webp" type="image/webp" />
            <source srcset="@/assets/img/dice.png" type="image/png" />
            <img src="@/assets/img/dice.png" alt="dice" />
          </picture>
          <br />
          <br />
          <strong class="has-text-white"
            >Copyright 2019 &copy; ModCom2019 All Rights Reserved.</strong
          >
          <br />Designed and developed by CPE#32
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppHome",
  beforeCreate() {
    let styles = {
      background: "",
      backgroundColor: "#000",
      backgroundSize: "",
      backgroundPosition: "",
      backgroundAttachment: ""
    };
    for (let property in styles) {
      document.getElementsByTagName("html")[0].style[property] =
        styles[property];
    }
  },
  mounted() {
    let instantIntxnEls = ["card0", "card1", "card2", "card3", "timeline-ps"];
    let fullIntxnEls = ["detail"];

    if (!("IntersectionObserver" in window)) {
      instantIntxnEls.concat(fullIntxnEls).forEach(ref => {
        this.$refs[ref].className += " in-view";
      });
    } else {
      let intxnCallback = elements => {
        elements.forEach(el => {
          if (el.intersectionRatio > 0) {
            el.target.className += " in-view";
            this.instantIntxnObs.unobserve(el.target);
          }
        });
      };
      // create IntxnObs
      this.instantIntxnObs = new IntersectionObserver(intxnCallback, {
        threshold: [0.0]
      });
      this.fullIntxnObs = new IntersectionObserver(intxnCallback, {
        threshold: [1.0]
      });
      // Observe each ref
      instantIntxnEls.forEach(ref => {
        this.instantIntxnObs.observe(this.$refs[ref]);
      });
      fullIntxnEls.forEach(ref => {
        this.fullIntxnObs.observe(this.$refs[ref]);
      });
    }
  },
  data() {
    return {
      instantIntxnObs: null,
      fullIntxnObs: null,
      videoLoading: true
    };
  },
  methods: {
    hideLoader() {
      this.videoLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.content h1,
.content h2 {
  color: #fff;
}

// INFO: HEADER
#header {
  background: #005b50;
  background-image: url("../assets/media/poster.jpg");
  background-size: cover;
  background-position: center center;
}

.video-head {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.videoLoader {
  transform-origin: center center;
  animation: loader-spin 1s linear infinite;
  position: absolute;
  right: 3vw;
  bottom: 9vh;
  border: white 4px solid;
  border-bottom: transparent 4px solid;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
}

// INFO: DETAIL
.detail {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -5%;
    left: 0;
    background: url("../assets/img/carpet.jpg");
    background-size: cover;
    width: 100%;
    height: 110%;
    transform-origin: center center;
    transform: skewY(-1deg);
    z-index: 1;
    box-shadow: 0 0 64px #000;
  }
  > .container.content {
    z-index: 2;
  }
  .pic1,
  .pic2 {
    opacity: 0;
    position: absolute;
    z-index: 3;
    filter: drop-shadow(0 0 16px #000);
  }
  .pic1 {
    width: 150px;
    top: -60px;
    left: 10vw;
    opacity: 0;
    transform: translateY(-100%);
    transition-property: opacity, transform;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  .pic2 {
    width: 200px;
    right: 10vw;
    bottom: -100px;
    opacity: 0;
    transform: translateY(100%);
    transition-property: opacity, transform;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  &.in-view {
    .pic1 {
      opacity: 1;
      transform: translateY(0);
    }
    .pic2 {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// INFO: TIMELINE
#timeline {
  background: url("../assets/img/cloth.jpg");
  background-origin: center center;
  background-size: cover;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: transparent;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 104px;
  }

  .timeline-cards > .column {
    opacity: 0;
    transform: translateY(100%);
    transition-property: opacity, transform;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    &.card-1 > picture,
    &.card-2 > picture,
    &.card-3 > picture,
    &.card-0 > picture {
      filter: drop-shadow(0 0 4px #000f);
      transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: filter;
      > img {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
    &.card-1,
    &.card-3 {
      transition-delay: 0.1s;
    }
    @media screen and (min-width: 769px) {
      &.card-2 {
        transition-delay: 0.2s;
      }
      &.card-3 {
        transition-delay: 0.3s;
      }
    }
    &.in-view {
      opacity: 1;
      transform: translateY(0) skewY(0deg) rotateY(0deg);
      @media not all and (hover: none) {
        &:hover {
          z-index: 1;
          &.card-1 > picture,
          &.card-2 > picture,
          &.card-3 > picture,
          &.card-0 > picture {
            > img {
              transform: scale(1.1) rotate(-1deg);
            }
            filter: drop-shadow(0 0 16px #00000080);
          }
        }
      }
    }
  }

  .timeline-ps {
    opacity: 0;
    transform: translateY(100%);
    letter-spacing: 0.5px;
    transition-delay: 0.5s;
    transition-duration: 1s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    &.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// INFO: FAQ
#faq {
  position: relative;
  .faq {
    $accent: #f04393;
    $highlight: #f9c449;
    position: relative;
    margin: 3rem auto;
    list-style: none;
    > li {
      background: transparent;
      box-shadow: 0 0 128px #851e3e80;
      border: 3px #aaa solid;
      color: white;
      border-top: 0;
      border-right: 0;
      border-left: 6px #fff solid;
      padding: 0.75rem 1rem;
      letter-spacing: 0.1px;
      margin: 1rem auto;
      width: 98%;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 1;
      @media not all and (hover: none) {
        &:hover {
          transform: scale(1.01) skewX(-1deg);
        }
      }
      > .question {
        font-weight: bold;
        letter-spacing: 0.5px;
        font-size: 1.1em;
      }
      > .answer {
        &::before {
          content: "—\00a0\00a0";
        }
      }
    }
    &::before,
    &::after {
      z-index: 0;
      transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: skewX(3deg);
      position: absolute;
      content: "";
      border: 5px $accent solid;
      border-right: 5px transparent solid;
      border-bottom: 5px transparent solid;
      width: 107%;
      height: 105%;
      top: -25px;
      left: -25px;
    }
    &::after {
      top: unset;
      left: unset;
      right: -25px;
      bottom: -25px;
      border: 5px $highlight solid;
      border-top: 5px transparent solid;
      border-left: 5px transparent solid;
    }
  }
  .backdrop {
    position: absolute;
    right: -10%;
    top: 52px;
    width: 25vw;
  }
}

// INFO: CONTACT FOOTER
.contact {
  text-align: left;
  list-style: none;
  > li {
    display: flex;
    flex-wrap: wrap;
    > a.tel {
      color: white;
      white-space: nowrap;
      flex-grow: 1;
      padding-left: 1ch;
      text-align: right;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

// INFO: MEDIA QUERY
@media screen and (max-width: 768px) {
  #faq .faq {
    &::before,
    &::after {
      transform: skewX(0);
    }
    &::before {
      left: -15px;
    }
    &::after {
      right: -15px;
    }
  }
}
</style>

