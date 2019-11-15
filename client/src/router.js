import Vue from "vue";
import Router from "vue-router";
import Landing from "@/views/Landing.vue";
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";
<<<<<<< HEAD
import studentProfile from "@/views/studentProfile.vue";
=======
import ProfileDonor from "@/views/ProfileDonor.vue";
import ScholarshipForm from "@/views/ScholarshipForm.vue";
>>>>>>> 1fbca98afee2fa70cd89edaeeaa18850d0bd251c

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
<<<<<<< HEAD
        },
        ]
    },
    {
      path: "/hello",
      name: "studentProfile",
      component: studentProfile
    }  
=======
        }
      ]
    }, 
    {
      path: "/ProfileD",
      name: "ProfileDonor",
      component: ProfileDonor
    },
    {
      path: "/ScholarshipForm",
      name: "ScholarshipForm",
      component: ScholarshipForm
    }
>>>>>>> 1fbca98afee2fa70cd89edaeeaa18850d0bd251c
  ]
});
