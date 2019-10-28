import Vue from "vue";
import Router from "vue-router";
import Landing from "@/views/Landing.vue";
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing,
      meta: {
        showSignUp: false,
        showLogIn: false
      },
      children: [
        {
          path: "signup",
          name: "SignUpModal",
          components: {
            page: SignUpModal
          },
          meta: {
            showLogIn: false,
            showSignUp: true
          }
        },
        {
          path: "login",
          name: "LogInModal",
          components: {
            page: LogInModal
          },
          meta: {
            showSignUp: false,
            showLogIn: true
          }
        }
      ]
    }
  ]
});
