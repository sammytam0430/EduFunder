import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSession from "vue-session";
import BootstrapVue from "bootstrap-vue";
import VueFormWizard from 'vue-form-wizard'
import DateDropdown from 'vue-date-dropdown'
import Vuelidate from 'vuelidate'
import 'animate.css/animate.min.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import * as VueGoogleMaps from "vue2-google-maps";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserGraduate,
  faBell,
  faSignOutAlt,
  faColumns,
  faUserFriends,
  faThList,
  faPlus,
  faAngleDoubleDown,
  faMapMarkerAlt,
  faClock,
  faTimes,
  faSpa,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import "@/assets/custom.scss";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


library.add(
  faUserGraduate,
  faBell,
  faSignOutAlt,
  faColumns,
  faUserFriends,
  faThList,
  faPlus,
  faAngleDoubleDown,
  faMapMarkerAlt,
  faClock,
  faTimes,
  faSpa,
  faSearch,
  faYoutube,
  faGithubAlt
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueFormWizard);
Vue.use(DateDropdown);
Vue.use(Vuelidate);
Vue.component('vue-slider', VueSlider)


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueSession);
Vue.use(VueGoogleMaps, {
  load: {
    key: "get your own key and replace this line",
    libraries: "places"
  }
});
Vue.use(VueFormWizard);
Vue.use(Vuelidate);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
