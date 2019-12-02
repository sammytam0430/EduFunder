<template>
    <form-wizard @on-complete="validate3">
        <h5 id="content-1-title" slot="title">
            Creat your campaign!
        </h5>
    <!--Biography-->
    <!-- :before-change="()=>validate()" -->
    <tab-content title="Tell us about yourself" :before-change="()=>validate()"> 
        <studentCampaignTab1 ref='tab-content-1' @getTab1='getData'/>
    </tab-content>

    <!--Status information-->
    <!-- :before-change="()=>validate2()" -->
    <tab-content title="Status" :before-change="()=>validate2()">
        <studentCampaignTab2 ref="tab-content-2" @getTab2='getData'/>
    </tab-content>

    <!--Set your campaign!-->
    <tab-content title="Set your campaign!">
        <studentCampaignTab3 ref="tab-content-3" @getTab3='getData'/>
    </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'animate.css/animate.min.css'
import { validationMixin } from 'vuelidate'
import studentCampaignTab1 from "@/components/studentCampaignTab1.vue"
import studentCampaignTab2 from "@/components/studentCampaignTab2.vue"
import studentCampaignTab3 from "@/components/studentCampaignTab3.vue"


export default{
    mixins: [validationMixin],
    data(){
        return{
            formData: null,
        }
    },
    components: {
    FormWizard,
    TabContent,
    studentCampaignTab1,
    studentCampaignTab2,
    studentCampaignTab3
    },
    methods:{
      getData(tabContent, isValid){
         if(isValid){
           this.formData = Object.assign({}, this.formData, tabContent);
         } 
      },
      validate() {
        return this.$refs['tab-content-1'].check();
      },
      validate2(){
          return this.$refs['tab-content-2'].check();
      },
      validate3(){
        if (this.$refs['tab-content-3'].check()){
            this.$refs['tab-content-3'].check();
            alert("hello World");
        } else {
        alert("error alert");
        }
      }
    }
}
</script>
<style scoped>
    .inputFix{
        margin-left:3%;
        margin-right:17%;
    }
    .content-2{
        padding-left:10%;
    }
    .content-3{
        padding-left:10%;
    }
    .wizard-tab-content {
        display: flex;
    }
    .wizard-tab-container {
    display: block;
    animation: fadeInRight 0.3s;
    }
    
</style>