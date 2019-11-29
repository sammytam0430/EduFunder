<template>
    <div>
        <div class="text-center mb-4">
            <h4>Scholarship info Review</h4>
        </div>
        <b-container id="basicInfo" class="borderInfo p-3 mb-3">
            <h5>About this scholarship</h5>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Name: </b-col>
                <b-col md="6" sm="12"> {{formData.basicInfo.name}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Amount:  </b-col>
                <b-col md="6" sm="12"> $ {{formData.basicInfo.amount}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Recipient: </b-col>
                <b-col md="6" sm="12" v-if="parseInt(formData.basicInfo.recipient) < 2"> {{formData.basicInfo.recipient}} student</b-col>
                <b-col md="6" sm="12" v-else> {{formData.basicInfo.recipient}} students</b-col> 
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Additional submission: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(this.formData.basicInfo.addSubmission)"></b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Application open: </b-col>
                <b-col md="6" sm="12" >{{formData.basicInfo.dateStart}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Application close: </b-col>
                <b-col md="6" sm="12" >{{formData.basicInfo.dateEnd}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Application award: </b-col>
                <b-col md="6" sm="12" >{{formData.basicInfo.dateAward}} </b-col>
            </b-row>
        </b-container>
        <b-container id="studReq"  class="borderInfo p-3 mb-3">
            <h5>Student Criteria</h5>
            <p v-if="getSelectedCriteria() != 'None'" class="px-3">The criteria you have specified are: <span v-html="getSelectedCriteria()" class="fontBold"></span>, check the data below:</p>
            <p v-else class="px-3" >You did not specify any criteria, therefore they are all set by default as:</p>
             <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Age: </b-col>
                <b-col md="6" sm="12"> From {{formData.requirement.age.selectedAge[0]}} to {{formData.requirement.age.selectedAge[1]}}</b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Province:  </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.requirement.province.selectedProvince)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Gender: </b-col>
                <b-col md="6" sm="12"> {{formData.requirement.gender.selectedGender}}</b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Level of School: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.requirement.schoolLevel.selectedSchoolLevel)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Field of Study: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.requirement.studyFields.selectedStudyFields)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> School of Study: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.requirement.studySchools.selectedStudySchools)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Year of Study: </b-col>
                <b-col md="6" sm="12" v-if="formData.requirement.studyYear.selectedStudyYear != 'Did not specify'" v-html="getSutdyYear(formData.requirement.studyYear.selectedStudyYear)"> </b-col>
                <b-col md="6" sm="12" v-else> {{formData.requirement.studyYear.selectedStudyYear}}</b-col>

            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Course Load: </b-col>
                <b-col md="6" sm="12"> {{formData.requirement.courseLoad.selectedCourseLoad}}</b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Financial Need: </b-col>
                <b-col md="6" sm="12" v-html="getFinancial(formData.requirement.financialNeed.selectedFinancialNeed)"></b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Citizentship: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.requirement.citizenship.selectedCitizenship)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Activities: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.requirement.activities.selectedActivities)"> </b-col>
            </b-row>
        </b-container>
        <div class=" p-3"> 
            <p v-if="formData.basicInfo.visibility == 'Public'" class="noteFontColor">NOTE: This is a public scholarship, every student will receive a notification of this scholarship</p>
            <p v-else class="noteFontColor">NOTE: This is a private scholarship, an auto invitation email will be send to the students that meet the requirement of this scholarship.</p>
        </div>
        <div class="mb-4">
            <b-form-checkbox v-model="comfirm" @change="$v.comfirm.$touch()"
                :state="!$v.comfirm.$invalid"
                aria-describedby="toComfirm">           
                Please comfirm that the infomation above is correct
            </b-form-checkbox>
            <b-form-invalid-feedback :state="$v.comfirm.$dirty && !$v.comfirm.$error">
                Please check the checkbox before you sumbit the form
            </b-form-invalid-feedback>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { sameAs } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    props: {
        formData: Object
    },
    data() {
      return {  
          comfirm: false
      }
    },
    validations: {
        comfirm: {
                sameAs: sameAs( () => true )
            }
    }, 
    methods: {
        getSelectedCriteria() {
            var keyArray = Object.keys(this.formData.requirement.selectedCriteria);
            var selectedC = [];
            for (var i = 0; i < keyArray.length; i++) {
                if (this.formData.requirement.selectedCriteria[keyArray[i]].selected == true) {
                    selectedC.push(this.formData.requirement.selectedCriteria[keyArray[i]].criteriaTitle);
                }
            }
            if(selectedC.length < 1) {
                return "None";
            }
            var output = '';
            for (var j = 0; j < (selectedC.length - 1); j++) {
                output += selectedC[j] + ", ";
            }
            output += selectedC[selectedC.length - 1];
            return output;
            
        },
        getOutput(dataArray) {
            var output = '';
            for (var i = 0; i < (dataArray.length - 1); i++) {
                output += " " + dataArray[i] + ",";
            }
            output += " " + dataArray[dataArray.length - 1];
            return output;
        },
        getSutdyYear(yearInt) {
            return "Year " + parseInt(yearInt) + " or above";
        },
        getFinancial(data) {
            if(data == "Yes") {
                return "Only students who have Financial need can apply";
            } else {
                return "Any student can apply";
            }
        },
        comfirmed() {
            return this.comfirm;
        }     
    }
}
</script>

<style scoped>
.borderInfo {
    background: #FDFDFD;
    box-shadow: 2px 3px #EEEEEE;
}

.noteFontColor {
    color: #ff0000;
}

.fontBold {
    font-weight: bold
}
</style>