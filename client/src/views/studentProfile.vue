<template>
  <form-wizard @on-complete="validate4">    
  <h5 id="content-1-title" slot="title">Set up your student profile!</h5>
  <!--Basic Information -->
  
  <div class="content-1">
   <!-- :before-change="()=>validate()"  -->
  <tab-content title="Basic information" :before-change="()=>validate()">
    <b-container fluid>
      <studentProfileTab1 ref="tab-content-1" @getTab1="getData"/>
    </b-container> 
    </tab-content>
  </div>
  <!--Basic Information -->

  <!--Current Education :before-change="()=>validate2()" -->
  <tab-content title="Current Education" :before-change="()=>validate2()">
    <studentProfileTab2 ref="tab-content-2" @getTab2="getData"/>
  </tab-content>
  <!--Current Education -->

  <!--Educational Interest :before-change="()=>validate3()" -->
   <tab-content title="Educational Interest" :before-change="()=>validate3()">
     <studentProfileTab3 ref="tab-content-3" @getTab3="getData"/>
   </tab-content>
   
  <!--Educational Interest -->

  <!-- Scholarship Profile -->

  <tab-content title="Scholarship Profile">
    <studentProfileTab4 ref="tab-content-4" @getTab4="getData"/>
  </tab-content>
  <!-- Scholarship Profile -->

</form-wizard>
</template>


<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import monthYearDD from "@/components/monthYearDD.vue";
import averageDD from "@/components/averageDD.vue";
import ethnicityDD from "@/components/ethnicityDD.vue"
import heritageDD from "@/components/heritageDD.vue"
import ecDD from "@/components/ecDD.vue"
import courseLoadDD from "@/components/courseLoadDD.vue"
import financialNeedDD from "@/components/financialNeedDD.vue"
import studentProfileTab1 from "@/components/studentProfileTab1.vue"
import studentProfileTab2 from "@/components/studentProfileTab2.vue"
import studentProfileTab3 from "@/components/studentProfileTab3.vue"
import studentProfileTab4 from "@/components/studentProfileTab4.vue"

import 'animate.css/animate.min.css'


export default{
   mixins: [validationMixin],
   data() {
      return {
        FormData:{
        }
      }
   },
    //component code
    components: {
    FormWizard,
    TabContent,
    monthYearDD,
    averageDD,
    ethnicityDD,
    heritageDD,
    ecDD,
    courseLoadDD,
    financialNeedDD,
    studentProfileTab1,
    studentProfileTab2,
    studentProfileTab3,
    studentProfileTab4
    },
    methods:{
      getData(tabContent, isValid){
         if(isValid){
           console.log("hello world");
           this.FormData = Object.assign({}, this.FormData, tabContent);
         }
         
      },
      validate() {
        return this.$refs['tab-content-1'].check();
      },
      validate2() {
        return this.$refs['tab-content-2'].check();
      },
      validate3(){
        return this.$refs['tab-content-3'].check();
      },
      validate4(){
        console.log("hello World");
        if (this.$refs['tab-content-4'].check()){
          this.$refs['tab-content-4'].check();
          alert("hello World");
        } else {
          alert("error alert");
        }
      },
      onSubmit() {
        console.log("hello World"); 
        if (this.validate4()) {
          alert("hello World");
        } else {
          alert("this is an error");
        }

        // Form submit logic
      }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

   #content-1-title{
    font-family: 'Montserrat', sans-serif;
    font-size: 24pt;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    color:black;
  }
  .content-3{
    width:95%;
  }
  .content-4{
    width:95%;
    padding-left:20%;
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