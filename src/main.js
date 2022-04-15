/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import axios from 'axios';


import './registerServiceWorker'
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$axios = axios.create({
  timeout: 60000,
  headers : {
    "Content-Type": "application/json"
  },
  proxy: {
    "http://localhost:8081/api/chkIceDeposit": {
      target: "http://localhost:8081/api/chkIceDeposit",
      changeOrigin: true
    },
    "http://localhost:8081/api/getHolders": {
      target: "http://localhost:8081/api/getHolders",
      changeOrigin: true
    }
  }
});

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
