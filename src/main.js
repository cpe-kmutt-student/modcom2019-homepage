// Vue
import Vue from "vue";
Vue.config.productionTip = false;

// Buefy
import Buefy from "buefy";
Vue.use(Buefy);

// Smooth scroll
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

// App initialize
import App from "./App.vue";
new Vue({
  render: (h) => h(App),
}).$mount("#app");
