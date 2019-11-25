<template>
    <b-container class="w-75 p-5 formBody">
        <form-wizard  color = "#007bff">
            <div class = "text-center font-weight-bold" id = "titleScholarship" slot ="title">Create a scholarship</div>
            <!-- <tab-content title="When and How Much" :before-change="()=>validateBasicInfo()">  -->
            <tab-content title="When and How Much"> 
                <ScholarshipFormBasicInfo ref="basicInfo"></ScholarshipFormBasicInfo>
            </tab-content>
             <tab-content title = "Who can apply">
                 <ScholarshipFormStudentReq></ScholarshipFormStudentReq>
             </tab-content>
            </form-wizard>
        
    </b-container>
</template>

<script>
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import ScholarshipFormBasicInfo from "@/components/ScholarshipFormBasicInfo.vue";
    import ScholarshipFormStudentReq from "@/components/ScholarshipFormStudentReq.vue";
  export default {
      components: {
        FormWizard,
        TabContent,
        ScholarshipFormBasicInfo,
        ScholarshipFormStudentReq
        },
    data() {
      return {      
      }
    },
    methods: {
        validateBasicInfo() {
            return this.$refs['basicInfo'].validate();
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