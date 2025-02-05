import Vue from "vue";
import Router from "vue-router";
import Landing from "@/views/Landing.vue";
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";
import studentProfile from "@/views/studentProfile.vue";
import ProfileDonor from "@/views/ProfileDonor.vue";
import ScholarshipForm from "@/views/ScholarshipForm.vue";
import studentCampaign from "@/views/studentCampaign.vue";
import campaignGallery from "@/views/campaignGallery.vue";
import campaignDetail from "@/views/campaignDetail.vue"

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
        },
        ]
    },
    {
      path: "/studentP",
      name: "studentProfile",
      component: studentProfile
    }, 
    {
      path: "/profileD",
      name: "ProfileDonor",
      component: ProfileDonor
    },
    {
      path: "/scholarshipForm",
      name: "ScholarshipForm",
      component: ScholarshipForm
    },
    {
      path: "/campaignForm",
      name: "StudentCampaign",
      component: studentCampaign
    },
    {
      path: "/campaignGallery",
      name: "campaignGallery",
      component: campaignGallery
    },
    {
      path:"/campaignDetails",
      name: "campaignDetail",
      component: campaignDetail
    }
  ]
});
