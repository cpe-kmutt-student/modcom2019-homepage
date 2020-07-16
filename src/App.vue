<template>
  <div id="app">
    <transition name="nav" appear>
      <nav
        class="navbar is-fixed-top is-mc-gray"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <a
              class="navbar-item item-is-logo"
              @click="() => (navOpen = false)"
              href="#app"
              v-smooth-scroll
              >🃏 ModCom2019 🎲</a
            >
            <a
              role="button"
              :class="{ 'navbar-burger': 1, 'is-active': navOpen }"
              aria-label="menu"
              :aria-expanded="!!navOpen"
              @click="toggleNav"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div :class="{ 'navbar-menu': 1, 'is-active': navOpen }">
            <div class="navbar-start">
              <a
                class="navbar-item item-is-detail"
                @click="() => (navOpen = false)"
                href="#detail"
                v-smooth-scroll
                >รายละเอียด</a
              >
              <a
                class="navbar-item item-is-timeline"
                @click="() => (navOpen = false)"
                href="#timeline"
                v-smooth-scroll
                >กำหนดการ</a
              >
              <a
                class="navbar-item item-is-faq"
                @click="() => (navOpen = false)"
                href="#faq"
                v-smooth-scroll
                >คำถามที่พบบ่อย</a
              >
              <a
                class="navbar-item item-is-contact"
                @click="() => (navOpen = false)"
                href="#contact"
                v-smooth-scroll
                >ติดต่อสอบถาม</a
              >
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <app-home />
    <transition name="gotop">
      <b-button
        v-if="showGoTopButton"
        tag="a"
        id="gotop"
        href="#app"
        type="is-primary"
        rounded
        v-smooth-scroll
      >
        <span class="is-hidden-tablet">กลับขึ้นด้านบน</span>
      </b-button>
    </transition>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import AppHome from "@/components/AppHome";

export default {
  name: "app",
  components: {
    AppHome
  },
  created() {
    this.handleScroll = debounce(() => {
      if (window.scrollY >= document.documentElement.clientHeight / 2 - 52) {
        this.showGoTopButton = true;
      } else {
        this.showGoTopButton = false;
      }
    }, 500);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      navOpen: false,
      showGoTopButton: false,
      handleScroll: null
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "CS PraJad";
  src: local("CS PraJad"), local("CSPraJad"),
    url("assets/fonts/CSPraJad.woff2") format("woff2"),
    url("assets/fonts/CSPraJad.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "CS PraJad";
  src: local("CS PraJad Bold"), local("CSPraJad-bold"),
    url("assets/fonts/CSPraJad-bold.woff2") format("woff2"),
    url("assets/fonts/CSPraJad-bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@import "~bulma/sass/utilities/_all";

$primary: #be2623;
$primary-invert: findColorInvert(#be2623);
$mc-gray: #303030;
$mc-gray-invert: findColorInvert(#303030);

$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "mc-gray": (
    $mc-gray,
    $mc-gray-invert
  )
);

$family-primary: "CS PraJad", BlinkMacSystemFont, -apple-system, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", "Helvetica", "Arial", sans-serif;
$body-line-height: 1.7;
$body-size: 17px;
$footer-background-color: #000;

@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  background: #000;
  transition: background 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.container {
  width: 90%;
}

.nobr {
  display: inline-block;
  white-space: nowrap;
}

#gotop {
  position: fixed;
  bottom: 5vh;
  right: 2.5vw;
  z-index: 10;

  &::after {
    width: 10px;
    transform: rotate(45deg);
    transform-origin: center center;
    margin: 0.1rem 0;
    height: 10px;
    display: block;
    content: "";
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    position: absolute;
  }

  @media screen and (max-width: 769px) {
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000d9;
    color: #fff;
    border: none;
    border-radius: 0;

    &:focus:not(:active) {
      box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
    }

    &::after {
      margin: 0.25rem 1rem 0;
      position: static;
    }
  }

  @media print {
    display: none;
  }
}

.routerview-enter-active,
.navregis-enter-active {
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.routerview-leave-active,
.navregis-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.routerview-enter-active,
.nav-enter-active,
.gotop-enter-active {
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.routerview-leave-active,
.nav-leave-active,
.gotop-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.routerview-enter-active,
.routerview-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.5s;
}
// Slide for router-view
.routerview-enter-active,
.routerview-leave-active,
.routerview-enter,
.routerview-leave-to {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: top left;
}
.routerview-leave-to {
  transform: translateX(-100vw);
}
.routerview-enter {
  transform: translateY(100vh);
}
// fade for nav-regis
.navregis-enter,
.navregis-leave-to,
.routerview-leave-to,
.routerview-enter {
  opacity: 0;
}
// slide up/down for gotop
.gotop-enter,
.gotop-leave-to {
  transform: translateY(5vh) translateY(100%);
}
// slidedown for navbar
.nav-enter,
.nav-leave-to {
  transform: translateY(-100%);
}
</style>