<template>
  <form-wizard @on-complete="validate4">
    <h5 id="content-1-title" slot="title">Set up your student profile!</h5>
    <!--Basic Information -->

    <div class="content-1">
      <!-- :before-change="()=>validate()"  -->
      <tab-content title="Basic information" :before-change="()=>validate()">
        <b-container fluid>
          <studentProfileTab1 ref="tab-content-1" @getTab1="getData" />
        </b-container>
      </tab-content>
    </div>
    <!--Basic Information -->

    <!--Current Education :before-change="()=>validate2()" -->
    <tab-content title="Current Education" :before-change="()=>validate2()">
      <studentProfileTab2 ref="tab-content-2" @getTab2="getData" />
    </tab-content>
    <!--Current Education -->

    <!--Educational Interest :before-change="()=>validate3()" -->
    <tab-content title="Educational Interest" :before-change="()=>validate3()">
      <studentProfileTab3 ref="tab-content-3" @getTab3="getData" />
    </tab-content>

    <!--Educational Interest -->

    <!-- Scholarship Profile -->

    <tab-content title="Scholarship Profile">
      <studentProfileTab4 ref="tab-content-4" @getTab4="getData" />
    </tab-content>
    <!-- Scholarship Profile -->
  </form-wizard>
</template>


<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { validationMixin } from "vuelidate";
import studentProfileTab1 from "@/components/studentProfileTab1.vue";
import studentProfileTab2 from "@/components/studentProfileTab2.vue";
import studentProfileTab3 from "@/components/studentProfileTab3.vue";
import studentProfileTab4 from "@/components/studentProfileTab4.vue";
import "animate.css/animate.min.css";
export default {
  mixins: [validationMixin],
  data() {
    return {
      FormData: {}
    };
  },
  //component code
  components: {
    FormWizard,
    TabContent,
    studentProfileTab1,
    studentProfileTab2,
    studentProfileTab3,
    studentProfileTab4
  },
  methods: {
    getData(tabContent, isValid) {
      if (isValid) {
        this.FormData = Object.assign({}, this.FormData, tabContent);
      }
    },
    validate() {
      return this.$refs["tab-content-1"].check();
    },
    validate2() {
      return this.$refs["tab-content-2"].check();
    },
    validate3() {
      return this.$refs["tab-content-3"].check();
    },
    validate4() {
      if (this.$refs["tab-content-4"].check()) {
        this.$bvToast.toast("Profile created successfully", {
          title: "Notification",
          toaster: "b-toaster-bottom-right",
          autoHideDelay: 5000,
          appendToast: true
        });
        this.$router.push("campaignGallery");
      } else {
        this.$bvToast.toast("Please make sure you enter all inputs", {
          title: "Notification",
          toaster: "b-toaster-bottom-right",
          autoHideDelay: 5000,
          appendToast: true
        });
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
#content-1-title {
  font-family: "Montserrat", sans-serif;
  font-size: 24pt;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
  color: black;
}
.content-3 {
  width: 95%;
}
.content-4 {
  width: 95%;
  padding-left: 20%;
}
/*Slide Animation */
.wizard-tab-content {
  display: flex;
}
.wizard-tab-container {
  display: block;
  animation: fadeInRight 0.3s;
}
</style>