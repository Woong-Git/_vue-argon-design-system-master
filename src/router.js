import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Holders from "./views/Holders.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import chkIceTx from "./views/chkIceTx.vue";

Vue.use(Router);

let getReady = function () {
  document.title = process.env.VUE_APP_TITLE
}

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      },
      meta: {
        title: "testTTT"
      }
    },
    {
      path: "/Holders",
      name: "Holders",
      components: {
        header: AppHeader,
        default: Holders,
        footer: AppFooter
      },
      meta: {
        title: "memo"
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/chkIceTx",
      name: "chkIceTx",
      components: {
        header: AppHeader,
        default: chkIceTx,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})
//     .afterEach((to, from) => {
//   Vue.nextTick(() => {
//     document.title = to.meta.title;
//   })
// })
;
