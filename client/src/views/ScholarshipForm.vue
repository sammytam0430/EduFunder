<template>
    <b-container class="w-75 p-5 formBody">
        <form-wizard  color = "#007bff" @on-complete="createScholarship">
            <div class = "text-center font-weight-bold" id = "titleScholarship" slot ="title">Create a scholarship</div>
            <tab-content title="When and How Much" :before-change="()=>validateBasicInfo()"> 
            <!-- <tab-content title="When and How Much">  -->
                <ScholarshipFormBasicInfo ref="basicInfo" @returnData="getData"></ScholarshipFormBasicInfo>
            </tab-content>
             <tab-content title = "Who can apply" :before-change="()=>getRequirement()">
                 <ScholarshipFormStudentReq ref="studentReq" @returnData="getData"></ScholarshipFormStudentReq>
             </tab-content>
             <tab-content title = "Almost Done!">
                 <ScholarshipFormReview :formData="formData" ref="review"> </ScholarshipFormReview>
             </tab-content>
        </form-wizard>
    </b-container>
</template>

<script>
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import ScholarshipFormBasicInfo from "@/components/ScholarshipFormBasicInfo.vue";
    import ScholarshipFormStudentReq from "@/components/ScholarshipFormStudentReq.vue";
    import ScholarshipFormReview from "@/components/ScholarshipFormReview.vue";
  export default {
      components: {
        FormWizard,
        TabContent,
        ScholarshipFormBasicInfo,
        ScholarshipFormStudentReq,
        ScholarshipFormReview
        },
    data() {
      return {  
          formData: {}
      }
    },
    methods: {
        validateBasicInfo() {
            return this.$refs['basicInfo'].validate();
        },
        getRequirement() {
            this.$refs['studentReq'].getReq();
            return true;
        },
        getData(tabContentData, isValid) {
            if (isValid) {
                this.formData = Object.assign({}, this.formData, tabContentData);
            }
        },
        createScholarship() {
            if(this.$refs['review'].comfirmed()) {
                //send data to database?
                alert('Yay. Done!');
            } else {
                alert('hey! Not done');
            }
        }
    }
  }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    .formBody {
        font-family: "Montserrat";
    }

    #titleScholarship {
        font-size: 20pt;
    }
</style>